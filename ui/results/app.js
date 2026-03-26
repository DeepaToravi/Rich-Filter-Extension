import { invoke, router } from '@forge/bridge';

const FILTER_ID = 'default-filter';

const STATUS_COLORS = {
  'To Do':       { bg: '#DFE1E6', text: '#42526E' },
  'In Progress': { bg: '#0052CC', text: '#FFF' },
  'In Review':   { bg: '#6554C0', text: '#FFF' },
  'Done':        { bg: '#00875A', text: '#FFF' },
  'Blocked':     { bg: '#DE350B', text: '#FFF' },
  'Waiting':     { bg: '#FF8B00', text: '#FFF' },
  default:       { bg: '#DFE1E6', text: '#42526E' },
};
const PRIORITY_COLORS = {
  'Highest': '#DE350B', 'High': '#FF5630', 'Medium': '#FF8B00',
  'Low': '#0071CE', 'Lowest': '#2684FF', default: '#97A0AF',
};
const PRIORITY_ARROWS = {
  'Highest': '⬆⬆', 'High': '⬆', 'Medium': '➡', 'Low': '⬇', 'Lowest': '⬇⬇',
};
const TYPE_ICONS = {
  'Bug': '🐛', 'Story': '📖', 'Task': '☑', 'Epic': '⚡',
  'Sub-task': '↳', 'Improvement': '✨', 'New Feature': '🆕', default: '◈',
};

// All available columns — label, field key, default visibility
const ALL_COLUMNS = [
  { id: 'key',        label: 'Key',        def: true  },
  { id: 'summary',    label: 'Summary',    def: true  },
  { id: 'status',     label: 'Status',     def: true  },
  { id: 'priority',   label: 'P',          def: true  },
  { id: 'assignee',   label: 'Assignee',   def: true  },
  { id: 'issuetype',  label: 'Type',       def: false },
  { id: 'created',    label: 'Created',    def: false },
  { id: 'updated',    label: 'Updated',    def: false },
  { id: 'reporter',   label: 'Reporter',   def: false },
  { id: 'resolution', label: 'Resolution', def: false },
];

let siteUrl    = '';
let issues     = [];
let sortField  = 'created';
let sortDir    = 'desc';
let visibleCols = ALL_COLUMNS.filter(c => c.def).map(c => c.id); // default
let colPickerOpen = false;

const CSS = `
*{box-sizing:border-box;margin:0;padding:0}
html,body{height:100%;overflow:hidden}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;color:#172b4d;background:#fff;display:flex;flex-direction:column;height:100vh}
#app{display:flex;flex-direction:column;height:100vh;overflow:hidden}

/* Header */
.header{display:flex;align-items:center;gap:6px;padding:5px 10px;border-bottom:2px solid #0052CC;flex-shrink:0;background:#fff}
.issue-count{font-size:11px;color:#0052CC;background:#DEEBFF;padding:1px 8px;border-radius:10px;font-weight:700}
.header-actions{display:flex;gap:5px;align-items:center;margin-left:auto}
.btn-sm{padding:3px 8px;background:#fff;border:1px solid #DFE1E6;border-radius:3px;font-size:11px;cursor:pointer;color:#42526E;white-space:nowrap}
.btn-sm:hover{background:#F4F5F7}
.btn-cols{position:relative}

/* Column picker dropdown */
.col-picker{position:absolute;top:calc(100% + 4px);right:0;background:#fff;border:1px solid #DFE1E6;border-radius:4px;box-shadow:0 4px 16px rgba(0,0,0,.15);min-width:160px;z-index:999;display:none;padding:6px 0}
.col-picker.open{display:block}
.col-picker-title{font-size:10px;font-weight:700;color:#6B778C;text-transform:uppercase;letter-spacing:.5px;padding:4px 12px 8px}
.col-item{display:flex;align-items:center;gap:8px;padding:5px 12px;cursor:pointer;font-size:12px}
.col-item:hover{background:#F4F5F7}
.col-item input{cursor:pointer;width:13px;height:13px;flex-shrink:0}

/* Table area */
#resultWrap{flex:1;overflow-y:auto;min-height:0}
.status-msg{padding:16px;text-align:center;color:#6B778C;font-size:13px}
table{width:100%;border-collapse:collapse;table-layout:fixed}
thead{position:sticky;top:0;z-index:1}
th{background:#F4F5F7;padding:6px 8px;text-align:left;font-size:10px;font-weight:700;color:#6B778C;text-transform:uppercase;letter-spacing:.5px;border-bottom:2px solid #DFE1E6;white-space:nowrap;cursor:pointer;user-select:none;overflow:hidden}
th:hover{background:#EBECF0}
th.sorted-asc::after{content:" ▲";font-size:9px}
th.sorted-desc::after{content:" ▼";font-size:9px}
td{padding:5px 8px;border-bottom:1px solid #F4F5F7;vertical-align:middle;overflow:hidden}
tr:hover td{background:#F8F9FF}

/* Cell styles */
.issue-key{color:#0052CC;font-weight:600;cursor:pointer;white-space:nowrap;font-size:12px}
.issue-key:hover{text-decoration:underline}
.td-summary{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px}
.sbadge{display:inline-block;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;text-transform:uppercase;white-space:nowrap}
.p-dot{display:inline-block;width:12px;height:12px;border-radius:2px;vertical-align:middle;cursor:default}
.td-sm{font-size:11px;color:#6B778C;white-space:nowrap}
.td-name{font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}

/* Empty state */
.empty{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 16px;color:#6B778C}
.empty-icon{font-size:40px;margin-bottom:10px;opacity:.4}
.empty-text{font-size:14px;font-weight:500}
.empty-sub{font-size:12px;margin-top:4px;opacity:.8}
`;

function formatDate(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

function cellFor(colId, issue) {
  const f = issue.fields;
  switch (colId) {
    case 'key': {
      const k = issue.key;
      return `<span class="issue-key" onclick="window._openIssue('${k}')">${k}</span>`;
    }
    case 'summary':
      return `<span class="td-summary" title="${(f.summary||'').replace(/"/g,'&quot;')}">${(f.summary||'').replace(/</g,'&lt;')}</span>`;
    case 'status': {
      const s = f.status?.name || '—';
      const c = STATUS_COLORS[s] || STATUS_COLORS.default;
      return `<span class="sbadge" style="background:${c.bg};color:${c.text}">${s}</span>`;
    }
    case 'priority': {
      const p = f.priority?.name || '—';
      const col = PRIORITY_COLORS[p] || PRIORITY_COLORS.default;
      return `<span class="p-dot" style="background:${col}" title="${p}"></span>`;
    }
    case 'assignee':
      return `<span class="td-name" title="${f.assignee?.displayName||''}">${f.assignee?.displayName||'Unassigned'}</span>`;
    case 'reporter':
      return `<span class="td-name">${f.reporter?.displayName||'—'}</span>`;
    case 'issuetype': {
      const t = f.issuetype?.name||'—';
      return `<span title="${t}">${TYPE_ICONS[t]||TYPE_ICONS.default}</span>`;
    }
    case 'created':  return `<span class="td-sm">${formatDate(f.created)}</span>`;
    case 'updated':  return `<span class="td-sm">${formatDate(f.updated)}</span>`;
    case 'resolution': return `<span class="td-sm">${f.resolution?.name||'Unresolved'}</span>`;
    default: return '—';
  }
}

function sortIssues(field) {
  if (sortField === field) sortDir = sortDir === 'asc' ? 'desc' : 'asc';
  else { sortField = field; sortDir = 'asc'; }
  renderTable(issues);
}
window._sortBy = sortIssues;

function renderTable(data) {
  issues = data || [];
  issues = [...issues].sort((a, b) => {
    let av = '', bv = '';
    const af = a.fields, bf = b.fields;
    if (sortField === 'key')        { av = a.key;                            bv = b.key; }
    else if (sortField === 'summary')    { av = af.summary||'';              bv = bf.summary||''; }
    else if (sortField === 'status')     { av = af.status?.name||'';        bv = bf.status?.name||''; }
    else if (sortField === 'priority')   { av = af.priority?.name||'';      bv = bf.priority?.name||''; }
    else if (sortField === 'assignee')   { av = af.assignee?.displayName||''; bv = bf.assignee?.displayName||''; }
    else { av = af.created||''; bv = bf.created||''; }
    const cmp = String(av).localeCompare(String(bv));
    return sortDir === 'asc' ? cmp : -cmp;
  });

  const countEl = document.getElementById('issueCount');
  if (countEl) countEl.textContent = `${issues.length} issue${issues.length !== 1 ? 's' : ''}`;

  const wrap = document.getElementById('resultWrap');
  if (!issues.length) {
    wrap.innerHTML = `<div class="empty"><div class="empty-icon">🔍</div><div class="empty-text">No issues found</div><div class="empty-sub">Adjust filters in the Rich Filter Controller</div></div>`;
    return;
  }

  // Build column widths
  const colWidths = { key:'70px', summary:'auto', status:'90px', priority:'28px', assignee:'100px', issuetype:'36px', created:'90px', updated:'90px', reporter:'100px', resolution:'90px' };

  const headers = visibleCols.map(c => {
    const col = ALL_COLUMNS.find(x => x.id === c);
    const w = colWidths[c] || 'auto';
    const sortable = ['key','summary','status','priority','assignee','created'].includes(c);
    const sortClass = sortField === c ? (sortDir === 'asc' ? 'sorted-asc' : 'sorted-desc') : '';
    return `<th style="width:${w}" class="${sortClass}" ${sortable ? `onclick="window._sortBy('${c}')"` : ''}>${col?.label||c}</th>`;
  }).join('');

  const rows = issues.map(issue =>
    `<tr>${visibleCols.map(c => `<td>${cellFor(c, issue)}</td>`).join('')}</tr>`
  ).join('');

  wrap.innerHTML = `<table><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table>`;
}

function renderColPicker() {
  const picker = document.getElementById('colPicker');
  picker.innerHTML = `<div class="col-picker-title">Choose columns</div>` +
    ALL_COLUMNS.map(c =>
      `<label class="col-item">
        <input type="checkbox" ${visibleCols.includes(c.id) ? 'checked' : ''} onchange="window._toggleCol('${c.id}',this)">
        ${c.label === 'P' ? 'Priority' : c.label}
      </label>`
    ).join('');
}

window._toggleCol = (colId, el) => {
  if (el.checked) {
    if (!visibleCols.includes(colId)) {
      // Insert at ALL_COLUMNS order position
      const order = ALL_COLUMNS.map(c => c.id);
      const idx = order.indexOf(colId);
      const newCols = [...visibleCols];
      // find insert position
      let insertAt = newCols.length;
      for (let i = idx + 1; i < order.length; i++) {
        const pos = newCols.indexOf(order[i]);
        if (pos !== -1) { insertAt = pos; break; }
      }
      newCols.splice(insertAt, 0, colId);
      visibleCols = newCols;
    }
  } else {
    if (visibleCols.length > 1) { // always keep at least 1 column
      visibleCols = visibleCols.filter(c => c !== colId);
    } else {
      el.checked = true; return;
    }
  }
  renderTable(issues);
  saveColumns();
};

function saveColumns() {
  invoke('saveColumnConfig', { richFilterId: FILTER_ID, columns: visibleCols }).catch(console.error);
}

function exportCSV() {
  const hdrs = visibleCols.map(c => ALL_COLUMNS.find(x => x.id === c)?.label || c);
  const rows = issues.map(i =>
    visibleCols.map(c => {
      const f = i.fields;
      let v = '';
      if (c === 'key')        v = i.key;
      else if (c === 'summary')    v = f.summary||'';
      else if (c === 'status')     v = f.status?.name||'';
      else if (c === 'priority')   v = f.priority?.name||'';
      else if (c === 'assignee')   v = f.assignee?.displayName||'Unassigned';
      else if (c === 'reporter')   v = f.reporter?.displayName||'';
      else if (c === 'issuetype')  v = f.issuetype?.name||'';
      else if (c === 'created')    v = formatDate(f.created);
      else if (c === 'updated')    v = formatDate(f.updated);
      else if (c === 'resolution') v = f.resolution?.name||'Unresolved';
      return `"${String(v).replace(/"/g,'""')}"`;
    }).join(',')
  );
  const csv = [hdrs.join(','), ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
  a.download = 'issues.csv'; a.click();
}

window._openIssue = key => {
  const url = siteUrl ? `${siteUrl}/browse/${key}` : null;
  if (url) router.open(url).catch(() => window.open(url, '_blank'));
};

function mount() {
  const style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  document.getElementById('app').innerHTML = `
    <div class="header">
      <span class="issue-count" id="issueCount">Loading…</span>
      <div class="header-actions">
        <button class="btn-sm" onclick="exportCSV()">⬇ CSV</button>
        <div class="btn-cols">
          <button class="btn-sm" onclick="window._togglePicker()" id="btnCols">⚙ Columns</button>
          <div class="col-picker" id="colPicker"></div>
        </div>
      </div>
    </div>
    <div id="resultWrap"><div class="status-msg">Loading…</div></div>`;

  window._togglePicker = () => {
    colPickerOpen = !colPickerOpen;
    const p = document.getElementById('colPicker');
    if (colPickerOpen) { renderColPicker(); p.classList.add('open'); }
    else p.classList.remove('open');
  };

  // Close picker when clicking outside
  document.addEventListener('click', e => {
    const btn = document.getElementById('btnCols');
    const picker = document.getElementById('colPicker');
    if (picker && btn && !btn.contains(e.target) && !picker.contains(e.target)) {
      colPickerOpen = false;
      picker.classList.remove('open');
    }
  });
}

async function load() {
  try {
    // Load saved column config
    const savedCols = await invoke('getColumnConfig', { richFilterId: FILTER_ID });
    if (savedCols && Array.isArray(savedCols) && savedCols.length > 0) {
      visibleCols = savedCols;
    }

    const [data, info] = await Promise.all([
      invoke('getIssues', { richFilterId: FILTER_ID }),
      invoke('getSiteInfo').catch(() => null),
    ]);
    siteUrl = info?.baseUrl || '';
    renderTable(data);
  } catch (err) {
    document.getElementById('resultWrap').innerHTML =
      `<div class="status-msg">⚠ Error loading issues: ${err.message || JSON.stringify(err)}</div>`;
    console.error('Results load error:', err);
  }
}

async function init() {
  mount();
  await load();
  setInterval(load, 10000);
}

init();
