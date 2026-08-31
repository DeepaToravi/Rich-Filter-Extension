import Resolver from '@forge/resolver';
import api, { route, storage } from '@forge/api';

const resolver = new Resolver();

// Build IN clause
function inClause(field, value) {
  const arr = Array.isArray(value) ? value.filter(Boolean) : (value ? [value] : []);
  if (arr.length === 0) return null;
  if (arr.length === 1) return `${field} = "${arr[0]}"`;
  return `${field} IN (${arr.map(v => `"${v}"`).join(', ')})`;
}

// 🔥 CORE: reusable issue fetch
async function getIssuesInternal(filterState = {}) {
  const {
    baseJql, project, status, assignee, priority, issuetype, label,
    component, reporter, fixVersion, sprint, dateFrom, dateTo,
    updatedFrom, updatedTo,
  } = filterState;

  let jql = baseJql || 'project is not EMPTY ORDER BY created DESC';
  const conditions = [];

  if (project) conditions.push(`project = "${project}"`);
  const sc = inClause('status', status); if (sc) conditions.push(sc);
  const ac = inClause('assignee', assignee); if (ac) conditions.push(ac);
  const pc = inClause('priority', priority); if (pc) conditions.push(pc);
  const ic = inClause('issuetype', issuetype); if (ic) conditions.push(ic);
  const lc = inClause('labels', label); if (lc) conditions.push(lc);
  const cc = inClause('component', component); if (cc) conditions.push(cc);
  const rc = inClause('reporter', reporter); if (rc) conditions.push(rc);
  const fc = inClause('fixVersion', fixVersion); if (fc) conditions.push(fc);

  if (sprint) conditions.push(`sprint = "${sprint}"`);
  if (dateFrom) conditions.push(`created >= "${dateFrom}"`);
  if (dateTo) conditions.push(`created <= "${dateTo}"`);
  if (updatedFrom) conditions.push(`updated >= "${updatedFrom}"`);
  if (updatedTo) conditions.push(`updated <= "${updatedTo}"`);

  if (conditions.length > 0) {
    const orderMatch = jql.match(/ORDER BY.+$/i);
    const jqlBase = jql.replace(/ORDER BY.+$/i, '').trim();
    const orderPart = orderMatch ? ' ' + orderMatch[0] : '';
    jql = (jqlBase ? jqlBase + ' AND ' : '') + conditions.join(' AND ') + orderPart;
  }

  console.log('Final JQL:', jql);

  const response = await api.asUser().requestJira(route`/rest/api/3/search/jql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jql,
      maxResults: 200,
      fields: [
        'summary', 'status', 'assignee', 'priority', 'issuetype',
        'labels', 'reporter', 'created', 'updated', 'components', 'fixVersions',
      ],
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Jira API error ${response.status}: ${JSON.stringify(data)}`);
  }

  return data.issues || [];
}
   

resolver.define('getProjects', async () => {
  const res = await api.asUser().requestJira(route`/rest/api/3/project`);
  const data = await res.json();
  return (data || []).map(p => ({ key: p.key, name: p.name }));
});

resolver.define('getComponents', async ({ payload }) => {
  const { projectKey } = payload || {};
  if (!projectKey) return [];
  const res = await api.asUser().requestJira(
    route`/rest/api/3/project/${projectKey}/components`
  );
  const data = await res.json();
  return (data || []).map(c => ({ id: c.id, name: c.name }));
});

resolver.define('getSiteInfo', async () => {
  const res = await api.asUser().requestJira(route`/rest/api/3/serverInfo`);
  const data = await res.json();
  return { baseUrl: data.baseUrl };
});



resolver.define('getFilterState', async ({ payload }) => {
  const { richFilterId } = payload || {};
  return (await storage.get(`FILTER_${richFilterId}`)) || {};
});

resolver.define('updateFilterState', async ({ payload }) => {
  const { richFilterId, filters } = payload || {};
  await storage.set(`FILTER_${richFilterId}`, filters);
  return true;
});



resolver.define('getIssues', async ({ payload }) => {
  const { richFilterId } = payload || {};
  const filterState = await storage.get(`FILTER_${richFilterId}`) || {};
  return await getIssuesInternal(filterState);
});



resolver.define('getStats', async ({ payload }) => {
  const { richFilterId } = payload || {};
  const filterState = await storage.get(`FILTER_${richFilterId}`) || {};
  const issues = await getIssuesInternal(filterState);

  const stats = {
    total: issues.length,
    byStatus: {},
    byPriority: {},
  };

  issues.forEach(i => {
    const s = i.fields.status?.name || 'Unknown';
    const p = i.fields.priority?.name || 'Unknown';

    stats.byStatus[s] = (stats.byStatus[s] || 0) + 1;
    stats.byPriority[p] = (stats.byPriority[p] || 0) + 1;
  });

  return stats;
});



resolver.define('getSmartFilters', async ({ payload }) => {
  const { richFilterId } = payload || {};
  return (await storage.get(`SMART_${richFilterId}`)) || [];
});

resolver.define('saveSmartFilters', async ({ payload }) => {
  const { richFilterId, filters } = payload || {};
  await storage.set(`SMART_${richFilterId}`, filters);
  return true;
});



resolver.define('getViews', async ({ payload }) => {
  const { richFilterId } = payload || {};
  return (await storage.get(`VIEWS_${richFilterId}`)) || [];
});

resolver.define('saveView', async ({ payload }) => {
  const { richFilterId, view } = payload || {};
  const views = (await storage.get(`VIEWS_${richFilterId}`)) || [];
  views.push(view);
  await storage.set(`VIEWS_${richFilterId}`, views);
  return true;
});



resolver.define('savePreset', async ({ payload }) => {
  const { name, data } = payload || {};
  const presets = (await storage.get('presets')) || {};
  presets[name] = { ...data, savedAt: new Date().toISOString() };
  await storage.set('presets', presets);
  return true;
});

resolver.define('loadPreset', async ({ payload }) => {
  const { name } = payload || {};
  const presets = (await storage.get('presets')) || {};
  return presets[name] || null;
});

resolver.define('listPresets', async () => {
  const presets = (await storage.get('presets')) || {};
  return Object.entries(presets).map(([name, val]) => ({
    name,
    savedAt: val.savedAt
  }));
});

resolver.define('deletePreset', async ({ payload }) => {
  const { name } = payload || {};
  const presets = (await storage.get('presets')) || {};
  delete presets[name];
  await storage.set('presets', presets);
  return true;
});

resolver.define('getColumnConfig', async ({ payload }) => {
  const { richFilterId } = payload || {};
  return (await storage.get(`columns_${richFilterId}`)) || null;
});

resolver.define('saveColumnConfig', async ({ payload }) => {
  const { richFilterId, columns } = payload || {};
  await storage.set(`columns_${richFilterId}`, columns);
  return true;
});



// ══════════════════════════════════════════════════════════
//  RICH FILTER ADMIN — CRUD resolvers
// ══════════════════════════════════════════════════════════

resolver.define('listRichFilters', async () => {
  return (await storage.get('richFilters')) || [];
});

resolver.define('createRichFilter', async ({ payload }) => {
  const { name, description, baseJql, admins, jiraFilter } = payload || {};
  const filters = (await storage.get('richFilters')) || [];
  const now = new Date().toISOString();
  const newFilter = {
    id: `rf_${Date.now()}`,
    name: (name || 'New Filter').trim(),
    description: (description || '').trim(),
    baseJql: (baseJql || '').trim(),
    admins: admins || ['Deepa Toravi'],
    jiraFilter: jiraFilter || null,
    visibility: 'PRIVATE',
    starred: false,
    dynamicFilters: {
      project: true, status: true, assignee: true, priority: true,
      issuetype: true, component: true, sprint: true,
      label: false, reporter: false, fixVersion: false,
    },
    staticFilters: [],
    smartFilters: [],
    views: [],
    queues: [],
    createdAt: now,
    updatedAt: now,
    lastUsed: null,
  };
  filters.push(newFilter);
  await storage.set('richFilters', filters);
  return newFilter;
});

resolver.define('getRichFilter', async ({ payload }) => {
  const { id } = payload || {};
  const filters = (await storage.get('richFilters')) || [];
  return filters.find(f => f.id === id) || null;
});

resolver.define('updateRichFilter', async ({ payload }) => {
  const { id, updates } = payload || {};
  const filters = (await storage.get('richFilters')) || [];
  const idx = filters.findIndex(f => f.id === id);
  if (idx === -1) return null;
  filters[idx] = { ...filters[idx], ...updates, id, updatedAt: new Date().toISOString() };
  await storage.set('richFilters', filters);
  return filters[idx];
});

resolver.define('deleteRichFilter', async ({ payload }) => {
  const { id } = payload || {};
  let filters = (await storage.get('richFilters')) || [];
  const target = filters.find(f => f.id === id);
  if (!target) return false;
  // Move to trash instead of permanent delete
  const trash = (await storage.get('trashedFilters')) || [];
  trash.push({ ...target, deletedAt: new Date().toISOString() });
  await storage.set('trashedFilters', trash);
  filters = filters.filter(f => f.id !== id);
  await storage.set('richFilters', filters);
  return true;
});

resolver.define('listTrashedFilters', async () => {
  return (await storage.get('trashedFilters')) || [];
});

resolver.define('restoreRichFilter', async ({ payload }) => {
  const { id } = payload || {};
  let trash = (await storage.get('trashedFilters')) || [];
  const target = trash.find(f => f.id === id);
  if (!target) return false;
  // Remove deletedAt then push back to active filters
  const { deletedAt, ...restored } = target;
  const filters = (await storage.get('richFilters')) || [];
  filters.push({ ...restored, updatedAt: new Date().toISOString() });
  await storage.set('richFilters', filters);
  trash = trash.filter(f => f.id !== id);
  await storage.set('trashedFilters', trash);
  return true;
});

resolver.define('permanentlyDeleteFilter', async ({ payload }) => {
  const { id } = payload || {};
  let trash = (await storage.get('trashedFilters')) || [];
  trash = trash.filter(f => f.id !== id);
  await storage.set('trashedFilters', trash);
  return true;
});

resolver.define('archiveRichFilter', async ({ payload }) => {
  const { id } = payload || {};
  let filters = (await storage.get('richFilters')) || [];
  const target = filters.find(f => f.id === id);
  if (!target) return false;
  const archived = (await storage.get('archivedFilters')) || [];
  archived.push({ ...target, archivedAt: new Date().toISOString() });
  await storage.set('archivedFilters', archived);
  filters = filters.filter(f => f.id !== id);
  await storage.set('richFilters', filters);
  return true;
});

resolver.define('listArchivedFilters', async () => {
  return (await storage.get('archivedFilters')) || [];
});

resolver.define('restoreFromArchive', async ({ payload }) => {
  const { id } = payload || {};
  let archived = (await storage.get('archivedFilters')) || [];
  const target = archived.find(f => f.id === id);
  if (!target) return false;
  const { archivedAt, ...restored } = target;
  const filters = (await storage.get('richFilters')) || [];
  filters.push({ ...restored, updatedAt: new Date().toISOString() });
  await storage.set('richFilters', filters);
  archived = archived.filter(f => f.id !== id);
  await storage.set('archivedFilters', archived);
  return true;
});

// Returns the user's saved Jira filters (for the base filter dropdown)
resolver.define('getJiraFilters', async () => {
  const res = await api.asUser().requestJira(route`/rest/api/3/filter/my?expand=jql`);
  const data = await res.json();
  return (Array.isArray(data) ? data : []).map(f => ({
    id: f.id,
    name: f.name,
    jql: f.jql || '',
  }));
});

// ─────────────────────────────────────────────────────────────
//  BULK OPERATIONS
// ─────────────────────────────────────────────────────────────

// Move multiple active filters to trash
resolver.define('bulkMoveToTrash', async ({ payload }) => {
  const { ids } = payload || {};
  if (!Array.isArray(ids) || ids.length === 0) return false;
  let filters = (await storage.get('richFilters')) || [];
  const trash  = (await storage.get('trashedFilters')) || [];
  const now    = new Date().toISOString();
  ids.forEach(id => {
    const target = filters.find(f => f.id === id);
    if (target) trash.push({ ...target, deletedAt: now });
  });
  await storage.set('trashedFilters', trash);
  await storage.set('richFilters', filters.filter(f => !ids.includes(f.id)));
  return true;
});

// Restore multiple filters from trash to active
resolver.define('bulkRestoreFromTrash', async ({ payload }) => {
  const { ids } = payload || {};
  if (!Array.isArray(ids) || ids.length === 0) return false;
  let trash   = (await storage.get('trashedFilters')) || [];
  const active = (await storage.get('richFilters')) || [];
  const now   = new Date().toISOString();
  ids.forEach(id => {
    const target = trash.find(f => f.id === id);
    if (target) {
      const { deletedAt, ...restored } = target;
      active.push({ ...restored, updatedAt: now });
    }
  });
  await storage.set('richFilters', active);
  await storage.set('trashedFilters', trash.filter(f => !ids.includes(f.id)));
  return true;
});

// Permanently delete multiple filters (from trash)
resolver.define('bulkDeleteForever', async ({ payload }) => {
  const { ids } = payload || {};
  if (!Array.isArray(ids) || ids.length === 0) return false;
  const trash = (await storage.get('trashedFilters')) || [];
  await storage.set('trashedFilters', trash.filter(f => !ids.includes(f.id)));
  return true;
});

// Move multiple active filters to archive
resolver.define('bulkMoveToArchive', async ({ payload }) => {
  const { ids } = payload || {};
  if (!Array.isArray(ids) || ids.length === 0) return false;
  let filters  = (await storage.get('richFilters')) || [];
  const archived = (await storage.get('archivedFilters')) || [];
  const now    = new Date().toISOString();
  ids.forEach(id => {
    const target = filters.find(f => f.id === id);
    if (target) archived.push({ ...target, archivedAt: now });
  });
  await storage.set('archivedFilters', archived);
  await storage.set('richFilters', filters.filter(f => !ids.includes(f.id)));
  return true;
});

// Restore multiple filters from archive to active
resolver.define('bulkRestoreFromArchive', async ({ payload }) => {
  const { ids } = payload || {};
  if (!Array.isArray(ids) || ids.length === 0) return false;
  let archived = (await storage.get('archivedFilters')) || [];
  const active  = (await storage.get('richFilters')) || [];
  const now    = new Date().toISOString();
  ids.forEach(id => {
    const target = archived.find(f => f.id === id);
    if (target) {
      const { archivedAt, ...restored } = target;
      active.push({ ...restored, updatedAt: now });
    }
  });
  await storage.set('richFilters', active);
  await storage.set('archivedFilters', archived.filter(f => !ids.includes(f.id)));
  return true;
});

// Download usage data as CSV for selected filters
resolver.define('bulkDownloadUsageData', async ({ payload }) => {
  const { ids, source } = payload || {};
  const storeKey = source === 'archived' ? 'archivedFilters'
                 : source === 'trashed'  ? 'trashedFilters'
                 : 'richFilters';
  const all      = (await storage.get(storeKey)) || [];
  const targets  = ids && ids.length > 0 ? all.filter(f => ids.includes(f.id)) : all;
  const rows     = [['Name', 'Administrators', 'Visibility', 'Last used', 'Created']];
  targets.forEach(f => {
    rows.push([
      f.name || '',
      (f.admins || []).join('; '),
      f.visibility || 'PRIVATE',
      f.lastUsed || f.updatedAt || '',
      f.createdAt || '',
    ]);
  });
  return rows.map(r => r.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
});

// Export selected filters as a JSON backup
resolver.define('bulkExportToBackup', async ({ payload }) => {
  const { ids, source } = payload || {};
  const storeKey = source === 'archived' ? 'archivedFilters'
                 : source === 'trashed'  ? 'trashedFilters'
                 : 'richFilters';
  const all     = (await storage.get(storeKey)) || [];
  const targets = ids && ids.length > 0 ? all.filter(f => ids.includes(f.id)) : all;
  return JSON.stringify({ exportedAt: new Date().toISOString(), filters: targets }, null, 2);
});

// Import filters from a JSON backup file
// importType: 'newIds' → assign fresh IDs; 'asExported' → keep original IDs (restore)
resolver.define('importFromBackup', async ({ payload }) => {
  const { filters, importType } = payload || {};
  if (!Array.isArray(filters) || filters.length === 0) {
    return { imported: 0, skipped: 0, errors: ['No filters found in the backup file.'] };
  }

  const existing = (await storage.get('richFilters')) || [];
  const existingIds = new Set(existing.map(f => f.id));
  const now = new Date().toISOString();
  const errors = [];
  let imported = 0;
  let skipped  = 0;

  for (const raw of filters) {
    if (!raw || typeof raw !== 'object' || !raw.name) {
      errors.push(`Skipped invalid entry: ${JSON.stringify(raw).slice(0, 60)}`);
      skipped++;
      continue;
    }

    if (importType === 'asExported') {
      // Keep original ID – skip if a filter with that ID already exists
      if (existingIds.has(raw.id)) {
        errors.push(`"${raw.name}" already exists (id: ${raw.id}) — skipped`);
        skipped++;
        continue;
      }
      existing.push({ ...raw, updatedAt: now });
    } else {
      // Create with a fresh ID, regardless of conflicts
      const newId = `rf_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
      existing.push({ ...raw, id: newId, createdAt: now, updatedAt: now, lastUsed: null });
    }
    imported++;
  }

  await storage.set('richFilters', existing);
  return { imported, skipped, errors };
});

// Store / retrieve the currently active rich filter (shared across all gadgets on a dashboard)
resolver.define('setActiveRichFilter', async ({ payload }) => {
  const { id } = payload || {};
  await storage.set('ACTIVE_RF', id || null);
  return true;
});

resolver.define('getActiveRichFilter', async () => {
  return (await storage.get('ACTIVE_RF')) || null;
});

// ─────────────────────────────────────────────────────────────
//  APP CONFIGURATION (Config page)
// ─────────────────────────────────────────────────────────────

// Load saved app-level permissions config
resolver.define('getAppConfig', async () => {
  return (await storage.get('appConfig')) || null;
});

// Persist app-level permissions config
resolver.define('saveAppConfig', async ({ payload }) => {
  const { config } = payload || {};
  if (!config || typeof config !== 'object') return false;
  await storage.set('appConfig', config);
  return true;
});

// Search Jira groups by query string (used by the group picker in Config page)
resolver.define('searchJiraGroups', async ({ payload }) => {
  const { query } = payload || {};
  // Empty query returns all groups (for initial dropdown on focus)
  const q = (query || '').trim();
  try {
    const qs = q ? `query=${encodeURIComponent(q)}&maxResults=20` : 'maxResults=50';
    const res  = await api.asUser().requestJira(
      route`/rest/api/3/groups/picker?${qs}`
    );
    const data = await res.json();
    const groups = Array.isArray(data?.groups) ? data.groups : [];
    return groups.map(g => g.name).filter(Boolean);
  } catch {
    return [];
  }
});

// Permanently wipe all app storage keys
// The list covers every key written by any resolver in this file.
resolver.define('deleteAllAppData', async () => {
  const keys = [
    'richFilters',
    'trashedFilters',
    'archivedFilters',
    'ACTIVE_RF',
    'appConfig',
  ];
  await Promise.all(keys.map(k => storage.delete(k)));
  return true;
});

export const handler = resolver.getDefinitions();