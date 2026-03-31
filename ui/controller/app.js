import { invoke, view } from '@forge/bridge';

let FILTER_ID = 'default-filter';

const STATUSES    = ['To Do', 'In Progress', 'In Review', 'Done', 'Blocked', 'Waiting'];
const PRIORITIES  = ['Highest', 'High', 'Medium', 'Low', 'Lowest'];
const ISSUE_TYPES = ['Bug', 'Story', 'Task', 'Epic', 'Sub-task', 'Improvement', 'New Feature'];

const STATUS_COLORS = {
  'To Do':       { bg: '#DFE1E6', text: '#42526E' },
  'In Progress': { bg: '#DEEBFF', text: '#0052CC' },
  'In Review':   { bg: '#EAE6FF', text: '#6554C0' },
  'Done':        { bg: '#E3FCEF', text: '#006644' },
  'Blocked':     { bg: '#FFEBE6', text: '#BF2600' },
  'Waiting':     { bg: '#FFFAE6', text: '#974F0C' },
  default:       { bg: '#DFE1E6', text: '#42526E' },
};
const PRIORITY_COLORS = {
  'Highest': '#DE350B', 'High': '#FF5630', 'Medium': '#FF8B00',
  'Low': '#0071CE', 'Lowest': '#2684FF', default: '#6B778C',
};

// ── STATE ──────────────────────────────────────────────────────────────────
const state = {
  projects: [], assignees: [], components: [], sprints: [],
  filters: {},
  smartFilters: [],
  presets: [],
  richFilters: [],   // all available rich filters
  rfConfig: null,    // currently selected rich filter config
};

// ── CSS ────────────────────────────────────────────────────────────────────
const CSS = `
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;color:#172b4d;background:#fff}

.ctrl{background:#fff;padding:8px 10px;border-bottom:3px solid #0052CC}

/* ── Filter row ── */
.filter-row{display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-bottom:6px}

/* ── Dropdown ── */
.dd-wrap{position:relative}
.dd-btn{display:inline-flex;align-items:center;gap:5px;padding:5px 9px;background:#F4F5F7;border:1px solid #DFE1E6;border-radius:3px;cursor:pointer;font-size:12px;color:#172b4d;white-space:nowrap;min-width:80px;justify-content:space-between;max-width:160px}
.dd-btn:hover{background:#EBECF0}
.dd-btn.active{background:#DEEBFF;border-color:#4C9AFF;color:#0052CC;font-weight:600}
.dd-btn .lbl{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}
.dd-btn .arrow{font-size:9px;flex-shrink:0}
.dd-menu{position:absolute;top:calc(100% + 3px);left:0;background:#fff;border:1px solid #DFE1E6;border-radius:4px;box-shadow:0 4px 16px rgba(0,0,0,.15);min-width:200px;max-height:260px;overflow-y:auto;display:none;z-index:9999}
.dd-menu.open{display:block}
.dd-search{padding:6px 8px;border-bottom:1px solid #F4F5F7;position:sticky;top:0;background:#fff}
.dd-search input{width:100%;padding:4px 7px;border:1px solid #DFE1E6;border-radius:3px;font-size:11px;outline:none}
.dd-item{display:flex;align-items:center;gap:7px;padding:6px 10px;cursor:pointer;font-size:12px;user-select:none}
.dd-item:hover{background:#F4F5F7}
.dd-item input[type=checkbox],.dd-item input[type=radio]{cursor:pointer;flex-shrink:0;width:13px;height:13px}
.sbadge{display:inline-block;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;text-transform:uppercase;white-space:nowrap}
.pdot{width:9px;height:9px;border-radius:50%;flex-shrink:0;display:inline-block}

/* ── JQL row ── */
.jql-row{display:flex;gap:6px;align-items:center;margin-bottom:5px}
.jql-in{flex:1;padding:5px 9px;border:1px solid #DFE1E6;border-radius:3px;font-size:12px;font-family:monospace;outline:none;min-width:0}
.jql-in:focus{border-color:#4C9AFF;box-shadow:0 0 0 2px rgba(76,154,255,.2)}
.btn{padding:5px 12px;border-radius:3px;font-size:12px;cursor:pointer;font-weight:600;border:none;white-space:nowrap;transition:all .15s}
.btn-apply{background:#0052CC;color:#fff}.btn-apply:hover{background:#0065FF}
.btn-clear{background:#fff;color:#6B778C;border:1px solid #DFE1E6}.btn-clear:hover{background:#FFEBE6;color:#DE350B;border-color:#FF7452}

/* ── Chips ── */
.chips{display:flex;gap:4px;flex-wrap:wrap;align-items:center;min-height:2px;margin-bottom:4px}
.chip{display:inline-flex;align-items:center;gap:3px;padding:2px 7px;background:#DEEBFF;color:#0052CC;border-radius:10px;font-size:11px;font-weight:500}
.chip-x{cursor:pointer;font-size:14px;line-height:1;opacity:.55;margin-left:1px}.chip-x:hover{opacity:1}

/* ── Quick filters row ── */
.section{padding-top:6px;border-top:1px solid #F4F5F7;margin-top:2px}
.section-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:5px}
.section-title{font-size:10px;font-weight:700;color:#6B778C;text-transform:uppercase;letter-spacing:.5px}
.qf-row{display:flex;gap:4px;flex-wrap:wrap;align-items:center}
.qf-btn{padding:3px 9px;background:#F4F5F7;border:1px solid #DFE1E6;border-radius:10px;cursor:pointer;font-size:11px;color:#42526E;transition:all .15s;white-space:nowrap}
.qf-btn:hover{background:#DEEBFF;border-color:#4C9AFF;color:#0052CC}
.qf-btn.active{background:#0052CC;border-color:#0052CC;color:#fff}
.qf-btn.del-mode{border-color:#FF7452;color:#BF2600}
.btn-icon{padding:2px 6px;background:#fff;border:1px solid #DFE1E6;border-radius:3px;cursor:pointer;font-size:11px;color:#42526E}
.btn-icon:hover{background:#F4F5F7}

/* ── Rich Filter selector row ── */
.rf-pick-row{display:flex;align-items:center;gap:8px;padding:5px 0 7px;border-bottom:1px solid #EEF0F4;margin-bottom:6px}
.rf-pick-lbl{font-size:11px;font-weight:700;color:#6B778C;text-transform:uppercase;letter-spacing:.4px;flex-shrink:0}
.rf-pick-sel{flex:1;max-width:260px;padding:4px 8px;border:1px solid #DFE1E6;border-radius:3px;font-size:12px;color:#172b4d;background:#fff;cursor:pointer;outline:none}
.rf-pick-sel:focus{border-color:#4C9AFF}
.rf-pick-badge{display:inline-block;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;background:#DEEBFF;color:#0052CC}
.rf-pick-hint{font-size:11px;color:#6B778C;font-style:italic}

/* ── Presets row ── */
.preset-row{display:flex;gap:4px;flex-wrap:wrap;align-items:center}
.preset-btn{padding:3px 9px;background:#fff;border:1px solid #DFE1E6;border-radius:3px;cursor:pointer;font-size:11px;color:#42526E;display:inline-flex;align-items:center;gap:4px;white-space:nowrap}
.preset-btn:hover{background:#F4F5F7;border-color:#4C9AFF}
.preset-btn .del{color:#FF7452;margin-left:2px;opacity:.6}.preset-btn .del:hover{opacity:1}
.preset-save-btn{padding:3px 9px;background:#0052CC;border:none;border-radius:3px;cursor:pointer;font-size:11px;color:#fff}
.preset-save-btn:hover{background:#0065FF}

/* ── Modal ── */
.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:10000;display:flex;align-items:center;justify-content:center}
.modal{background:#fff;border-radius:6px;padding:18px 20px;min-width:280px;max-width:360px;box-shadow:0 8px 32px rgba(0,0,0,.22)}
.modal h3{font-size:14px;font-weight:700;margin-bottom:12px;color:#172b4d}
.modal input[type=text]{width:100%;padding:6px 9px;border:1px solid #DFE1E6;border-radius:3px;font-size:13px;outline:none;margin-bottom:12px}
.modal input:focus{border-color:#4C9AFF}
.modal-label{font-size:11px;font-weight:600;color:#6B778C;margin-bottom:4px;display:block}
.modal-footer{display:flex;gap:8px;justify-content:flex-end}
.modal-footer .btn-cancel{padding:5px 12px;background:#fff;border:1px solid #DFE1E6;border-radius:3px;cursor:pointer;font-size:12px;color:#42526E}
.modal-footer .btn-save{padding:5px 12px;background:#0052CC;border:none;border-radius:3px;cursor:pointer;font-size:12px;color:#fff;font-weight:600}
`;

// ── GADGET CONFIG STATE ─────────────────────────────────────────────────────
let gadgetConfig = {};

// ── CONFIG FORM CSS ──────────────────────────────────────────────────────────
const CONFIG_CSS = `
*{box-sizing:border-box;margin:0;padding:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:14px;color:#172b4d;background:#fff}
.cfg-wrap{padding:16px 20px 20px;background:#fff;max-width:420px}.cfg-field{margin-bottom:16px}
.cfg-label{font-size:12px;font-weight:600;color:#172b4d;margin-bottom:6px;display:block;line-height:1.4}
.cfg-req{color:#DE350B;margin-left:2px}
.cfg-select-wrap{position:relative}
.cfg-select{width:100%;padding:8px 32px 8px 10px;border:2px solid #DFE1E6;border-radius:3px;font-size:14px;color:#172b4d;background:#fff;cursor:pointer;outline:none;appearance:none;-webkit-appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath fill='%23172b4d' d='M0 0l5 6 5-6z'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center}
.cfg-select:focus{border-color:#4C9AFF;box-shadow:0 0 0 2px rgba(76,154,255,.2)}
.cfg-hint{display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-top:5px;line-height:1.4}.cfg-hint span{font-size:11px;color:#42526E;flex:1}
.cfg-link{font-size:11px;color:#0052CC;text-decoration:none;white-space:nowrap;flex-shrink:0}.cfg-link:hover{text-decoration:underline}
.cfg-error{font-size:11px;color:#DE350B;margin-top:4px}
.cfg-info-box{display:flex;gap:10px;align-items:flex-start;background:#DEEBFF;border-radius:3px;padding:12px;margin-bottom:16px}
.cfg-info-icon{width:20px;height:20px;background:#0052CC;border-radius:50%;color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0;margin-top:1px}
.cfg-info-text{font-size:13px;color:#0052CC;line-height:1.5}
.cfg-section-label{font-size:12px;font-weight:600;color:#172b4d;display:block;margin-bottom:10px}
.cfg-radio-group{display:flex;flex-direction:column;gap:10px}
.cfg-radio-item{display:flex;align-items:center;gap:8px;cursor:pointer;font-size:14px;color:#172b4d}
.cfg-radio-item input[type=radio]{width:16px;height:16px;cursor:pointer;accent-color:#0052CC;flex-shrink:0}
.cfg-checkbox-item{display:flex;align-items:center;gap:8px;cursor:pointer;font-size:14px;color:#172b4d;margin-bottom:20px}
.cfg-checkbox-item input[type=checkbox]{width:16px;height:16px;cursor:pointer;accent-color:#0052CC;flex-shrink:0}
.cfg-footer{display:flex;align-items:center;justify-content:space-between}
.cfg-footer-left{display:flex;align-items:center;gap:10px}
.cfg-submit{padding:8px 16px;background:#0052CC;color:#fff;border:none;border-radius:3px;font-size:14px;font-weight:600;cursor:pointer;line-height:1.2}.cfg-submit:hover{background:#0065FF}
.cfg-cancel{background:none;border:none;color:#172b4d;font-size:14px;cursor:pointer;padding:8px 4px;line-height:1.2}.cfg-cancel:hover{color:#0052CC}
.cfg-grid-icon{color:#5E6C84;opacity:.7;display:flex;align-items:center}
`;

// ── HELPERS ────────────────────────────────────────────────────────────────
function esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

function closeAll() {
  document.querySelectorAll('.dd-menu.open').forEach(m => m.classList.remove('open'));
}

function refreshLabel(id, label, field) {
  const lbl = document.querySelector(`#${id}-btn .lbl`);
  const btn = document.getElementById(`${id}-btn`);
  if (!lbl) return;
  const v = state.filters[field];
  if (Array.isArray(v) && v.length) {
    lbl.textContent = v.length === 1 ? v[0] : `${label} (${v.length})`;
    btn.classList.add('active');
  } else if (v && typeof v === 'string') {
    lbl.textContent = v; btn.classList.add('active');
  } else {
    lbl.textContent = label; btn.classList.remove('active');
  }
}

function refreshAllLabels() {
  refreshLabel('ddProject',   'Project',    'project');
  refreshLabel('ddStatus',    'Status',     'status');
  refreshLabel('ddAssignee',  'Assignee',   'assignee');
  refreshLabel('ddPriority',  'Priority',   'priority');
  refreshLabel('ddType',      'Type',       'issuetype');
  refreshLabel('ddComponent', 'Component',  'component');
  refreshLabel('ddSprint',    'Sprint',     'sprint');
}

// ── CHIPS ──────────────────────────────────────────────────────────────────
const FIELD_LABEL = {
  project:'Project', status:'Status', priority:'Priority',
  issuetype:'Type', assignee:'Assignee', component:'Component',
  sprint:'Sprint', baseJql:'JQL',
};

function refreshChips() {
  const chips = [];
  Object.entries(state.filters).forEach(([field, val]) => {
    const lbl = FIELD_LABEL[field] || field;
    if (Array.isArray(val) && val.length) {
      val.forEach(v => chips.push({ label:`${lbl}: ${v}`, field, v }));
    } else if (val) {
      const display = field === 'baseJql' && val.length > 40 ? val.slice(0,38)+'…' : val;
      chips.push({ label:`${lbl}: ${display}`, field, v:'__all__' });
    }
  });
  const el = document.getElementById('chips');
  if (!el) return;
  el.innerHTML = chips.map(c =>
    `<span class="chip">${esc(c.label)}<span class="chip-x" onclick="APP.removeChip('${c.field}','${esc(c.v)}')">×</span></span>`
  ).join('');
}

// ── DROPDOWN FACTORY ───────────────────────────────────────────────────────
function makeDropdown(id, label, options, renderItem) {
  const wrap = document.getElementById(id);
  if (!wrap) return;
  wrap.innerHTML = `
    <button class="dd-btn" id="${id}-btn"><span class="lbl">${label}</span><span class="arrow">▾</span></button>
    <div class="dd-menu" id="${id}-menu">
      <div class="dd-search"><input placeholder="Search…" id="${id}-search" autocomplete="off"></div>
      <div id="${id}-list"></div>
    </div>`;

  document.getElementById(`${id}-btn`).onclick = e => {
    e.stopPropagation();
    const m = document.getElementById(`${id}-menu`);
    const wasOpen = m.classList.contains('open');
    closeAll();
    if (!wasOpen) { m.classList.add('open'); document.getElementById(`${id}-search`)?.focus(); }
  };
  document.getElementById(`${id}-search`).oninput = e => {
    const q = e.target.value.toLowerCase();
    const filtered = options.filter(o =>
      (typeof o === 'string' ? o : (o.name || o.key || o.displayName || '')).toLowerCase().includes(q)
    );
    fillList(id, filtered, renderItem);
  };
  fillList(id, options, renderItem);
}

function fillList(id, items, renderFn) {
  const el = document.getElementById(`${id}-list`);
  if (el) el.innerHTML = items.length ? items.map(renderFn).join('') : '<div class="dd-item" style="color:#6B778C;font-style:italic">No options</div>';
}

function reRenderList(id, field, options, renderFn) {
  const el = document.getElementById(`${id}-list`);
  if (el) fillList(id, options, renderFn);
}

// ── ITEM RENDERERS ─────────────────────────────────────────────────────────
function renderStatus(s) {
  const c = STATUS_COLORS[s] || STATUS_COLORS.default;
  const chk = (state.filters.status || []).includes(s) ? 'checked' : '';
  return `<div class="dd-item" onclick="APP.toggleArr('status','${esc(s)}','ddStatus','Status')">
    <input type="checkbox" ${chk} onclick="event.stopPropagation()">
    <span class="sbadge" style="background:${c.bg};color:${c.text}">${esc(s)}</span></div>`;
}

function renderPriority(p) {
  const col = PRIORITY_COLORS[p] || PRIORITY_COLORS.default;
  const chk = (state.filters.priority || []).includes(p) ? 'checked' : '';
  return `<div class="dd-item" onclick="APP.toggleArr('priority','${esc(p)}','ddPriority','Priority')">
    <input type="checkbox" ${chk} onclick="event.stopPropagation()">
    <span class="pdot" style="background:${col}"></span><span>${esc(p)}</span></div>`;
}

function renderType(t) {
  const chk = (state.filters.issuetype || []).includes(t) ? 'checked' : '';
  return `<div class="dd-item" onclick="APP.toggleArr('issuetype','${esc(t)}','ddType','Type')">
    <input type="checkbox" ${chk} onclick="event.stopPropagation()"><span>${esc(t)}</span></div>`;
}

function renderProject(p) {
  const key  = p.key  || p;
  const name = p.name || p;
  const chk  = state.filters.project === key ? 'checked' : '';
  return `<div class="dd-item" onclick="APP.setProject('${esc(key)}')">
    <input type="radio" ${chk} onclick="event.stopPropagation()">
    <span><b>${esc(key)}</b>&nbsp;–&nbsp;${esc(name)}</span></div>`;
}

function renderAssignee(a) {
  const name = typeof a === 'string' ? a : (a.displayName || a.name || 'Unknown');
  const chk  = (state.filters.assignee || []).includes(name) ? 'checked' : '';
  return `<div class="dd-item" onclick="APP.toggleArr('assignee','${esc(name)}','ddAssignee','Assignee')">
    <input type="checkbox" ${chk} onclick="event.stopPropagation()"><span>${esc(name)}</span></div>`;
}

function renderComponent(c) {
  const name = c.name || c;
  const chk  = (state.filters.component || []).includes(name) ? 'checked' : '';
  return `<div class="dd-item" onclick="APP.toggleArr('component','${esc(name)}','ddComponent','Component')">
    <input type="checkbox" ${chk} oncli.ck="event.stopPropagation()"><span>${esc(name)}</span></div>`;
}

function renderSprint(s) {
  const name = s.name || s;
  const chk  = state.filters.sprint === name ? 'checked' : '';
  return `<div class="dd-item" onclick="APP.setSingle('sprint','${esc(name)}','ddSprint','Sprint')">
    <input type="radio" ${chk} onclick="event.stopPropagation()"><span>${esc(name)}</span></div>`;
}

// ── WINDOW.APP — exposed handlers ──────────────────────────────────────────
window.APP = {
  toggleArr(field, val, ddId, label) {
    const cur = state.filters[field] || [];
    state.filters[field] = cur.includes(val)
      ? cur.filter(v => v !== val)
      : [...cur, val];
    if (!state.filters[field].length) delete state.filters[field];
    refreshLabel(ddId, label, field);
    refreshChips();
    // re-render the list
    const map = {
      status: () => reRenderList('ddStatus', 'status', STATUSES, renderStatus),
      priority: () => reRenderList('ddPriority', 'priority', PRIORITIES, renderPriority),
      issuetype: () => reRenderList('ddType', 'issuetype', ISSUE_TYPES, renderType),
      assignee: () => reRenderList('ddAssignee', 'assignee', ['Unassigned',...state.assignees], renderAssignee),
      component: () => reRenderList('ddComponent', 'component', state.components, renderComponent),
    };
    if (map[field]) map[field]();
  },

  setProject(key) {
    if (state.filters.project === key) delete state.filters.project;
    else state.filters.project = key;
    refreshLabel('ddProject', 'Project', 'project');
    refreshChips();
    reRenderList('ddProject', 'project', state.projects, renderProject);
    closeAll();
    // Load assignees and components for selected project
    if (state.filters.project) {
      invoke('getComponents', { projectKey: state.filters.project })
        .then(cs => {
          state.components = cs.map(c => c.name || c);
          makeDropdown('ddComponent', 'Component', state.components, renderComponent);
        }).catch(() => {});
    }
  },

  setSingle(field, val, ddId, label) {
    if (state.filters[field] === val) delete state.filters[field];
    else state.filters[field] = val;
    refreshLabel(ddId, label, field);
    refreshChips();
    if (field === 'sprint') reRenderList('ddSprint', 'sprint', state.sprints, renderSprint);
    closeAll();
  },

  removeChip(field, val) {
    if (val === '__all__') delete state.filters[field];
    else {
      const cur = state.filters[field] || [];
      state.filters[field] = cur.filter(v => v !== val);
      if (!state.filters[field].length) delete state.filters[field];
    }
    refreshAllLabels();
    refreshChips();
  },

  // ── Quick Filters ──────────────────────────────────────────────────────
  applyQF(jql, el) {
    document.querySelectorAll('.qf-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    state.filters = jql ? { baseJql: jql } : {};
    document.getElementById('jqlIn').value = jql || '';
    refreshAllLabels(); refreshChips();
    pushFilters();
  },

  addSmartFilter() {
    showModal({
      title: 'Add Smart Filter',
      fields: [
        { id: 'smName', label: 'Name', placeholder: 'e.g. My Open Bugs' },
        { id: 'smJql',  label: 'JQL',  placeholder: 'e.g. issuetype = Bug AND statusCategory != Done' },
      ],
      onSave(vals) {
        if (!vals.smName || !vals.smJql) return;
        state.smartFilters.push({ name: vals.smName, jql: vals.smJql });
        invoke('saveSmartFilters', { richFilterId: FILTER_ID, filters: state.smartFilters }).catch(console.error);
        renderQF();
      },
    });
  },

  deleteSmartFilter(idx) {
    state.smartFilters.splice(idx, 1);
    invoke('saveSmartFilters', { richFilterId: FILTER_ID, filters: state.smartFilters }).catch(console.error);
    renderQF();
  },

  // ── Presets ────────────────────────────────────────────────────────────
  savePreset() {
    showModal({
      title: 'Save Preset',
      fields: [{ id: 'psName', label: 'Preset name', placeholder: 'e.g. Sprint 12 view' }],
      onSave(vals) {
        if (!vals.psName) return;
        invoke('savePreset', { name: vals.psName, data: { ...state.filters } })
          .then(() => loadPresets())
          .catch(console.error);
      },
    });
  },

  loadPreset(name) {
    invoke('loadPreset', { name }).then(data => {
      if (!data) return;
      state.filters = { ...data };
      delete state.filters.savedAt;
      if (state.filters.baseJql) document.getElementById('jqlIn').value = state.filters.baseJql;
      else document.getElementById('jqlIn').value = '';
      refreshAllLabels(); refreshChips();
      pushFilters();
    }).catch(console.error);
  },

  deletePreset(name) {
    invoke('deletePreset', { name }).then(() => loadPresets()).catch(console.error);
  },
};

// ── QUICK FILTERS ──────────────────────────────────────────────────────────
const DEFAULT_QF = [
  { name: 'All Issues',       jql: '' },
  { name: 'My Open Issues',   jql: 'assignee = currentUser() AND statusCategory != Done' },
  { name: 'Unresolved',       jql: 'statusCategory != Done ORDER BY priority DESC' },
  { name: 'Done This Week',   jql: 'status = Done AND updated >= -7d' },
  { name: 'High Priority',    jql: 'priority in (Highest, High) AND statusCategory != Done' },
  { name: 'Overdue',          jql: 'duedate < now() AND statusCategory != Done' },
  { name: 'Created Today',    jql: 'created >= startOfDay()' },
];

function renderQF() {
  const qfRow = document.getElementById('qfRow');
  if (!qfRow) return;

  // Use rich filter's staticFilters if a filter is selected, otherwise defaults
  const baseFilters = (state.rfConfig && state.rfConfig.staticFilters && state.rfConfig.staticFilters.length)
    ? state.rfConfig.staticFilters
    : DEFAULT_QF;

  // Smart filters: from rich filter config if selected, otherwise from saved smart filters
  const smartList = (state.rfConfig && state.rfConfig.smartFilters)
    ? state.rfConfig.smartFilters
    : state.smartFilters;

  const defaultBtns = baseFilters.map((f, i) =>
    `<button class="qf-btn ${i === 0 ? 'active' : ''}" onclick="APP.applyQF(${JSON.stringify(f.jql)},this)">${esc(f.name)}</button>`
  ).join('');

  const smartBtns = smartList.map((f, i) =>
    `<span style="display:inline-flex;align-items:center;gap:1px">
      <button class="qf-btn" onclick="APP.applyQF(${JSON.stringify(f.jql)},this.parentElement.querySelector('.qf-btn'))" style="border-radius:10px 0 0 10px">${esc(f.name)}</button>
      <button class="btn-icon" title="Delete" onclick="APP.deleteSmartFilter(${i})" style="border-radius:0 10px 10px 0;padding:3px 5px;border-left:none;color:#FF7452">✕</button>
    </span>`
  ).join('');

  qfRow.innerHTML = defaultBtns + smartBtns;
}

// ── PRESETS ────────────────────────────────────────────────────────────────
function renderPresets() {
  const row = document.getElementById('presetRow');
  if (!row) return;

  const btns = state.presets.map(p =>
    `<span class="preset-btn" title="${esc(p.name)}" onclick="APP.loadPreset('${esc(p.name)}')">
      📋 ${esc(p.name)}
      <span class="del" onclick="event.stopPropagation();APP.deletePreset('${esc(p.name)}')" title="Delete preset">✕</span>
    </span>`
  ).join('');

  row.innerHTML = btns + `<button class="preset-save-btn" onclick="APP.savePreset()">＋ Save</button>`;
}

async function loadPresets() {
  const list = await invoke('listPresets').catch(() => []);
  state.presets = list || [];
  renderPresets();
}

// ── FILTER ACTIONS ─────────────────────────────────────────────────────────
function pushFilters() {
  return invoke('updateFilterState', { richFilterId: FILTER_ID, filters: { ...state.filters } })
    .catch(err => console.error('updateFilterState error:', err));
}

function applyFilters() {
  const jql = document.getElementById('jqlIn').value.trim();
  if (jql) state.filters.baseJql = jql;
  else delete state.filters.baseJql;
  pushFilters().then(() => {
    const btn = document.getElementById('btnApply');
    btn.textContent = '✓ Applied'; btn.style.background = '#00875A';
    setTimeout(() => { btn.textContent = 'Apply'; btn.style.background = ''; }, 1500);
  });
}

function clearFilters() {
  state.filters = {};
  document.getElementById('jqlIn').value = '';
  document.querySelectorAll('.qf-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.qf-btn')?.classList.add('active');
  refreshAllLabels(); refreshChips();
  pushFilters();
}

// ── MODAL ──────────────────────────────────────────────────────────────────
function showModal({ title, fields, onSave }) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal">
      <h3>${esc(title)}</h3>
      ${fields.map(f => `
        <label class="modal-label">${esc(f.label)}</label>
        <input type="text" id="modal-${f.id}" placeholder="${esc(f.placeholder||'')}" autocomplete="off">
      `).join('')}
      <div class="modal-footer">
        <button class="btn-cancel" id="modalCancel">Cancel</button>
        <button class="btn-save" id="modalSave">Save</button>
      </div>
    </div>`;

  document.body.appendChild(overlay);
  const firstInput = overlay.querySelector('input');
  if (firstInput) firstInput.focus();

  overlay.querySelector('#modalCancel').onclick = () => overlay.remove();
  overlay.querySelector('#modalSave').onclick = () => {
    const vals = {};
    fields.forEach(f => { vals[f.id] = (document.getElementById(`modal-${f.id}`)?.value || '').trim(); });
    onSave(vals);
    overlay.remove();
  };
  overlay.onclick = e => { if (e.target === overlay) overlay.remove(); };
}

// ── RICH FILTER LOADER ─────────────────────────────────────────────────────

async function loadRichFilters(preferredId) {
  const rfs = await invoke('listRichFilters').catch(() => []);
  state.richFilters = rfs || [];
  const sel = document.getElementById('rfPickSel');
  if (!sel) return;
  sel.innerHTML = '<option value="">Select a rich filter…</option>' +
    (rfs || []).map(f => `<option value="${f.id}">${f.name.replace(/"/g,'&quot;')}</option>`).join('');

  sel.addEventListener('change', () => {
    applyRichFilter(sel.value);
  });

  // Prefer gadget-configured rich filter over the global "last active" one
  let activeId = preferredId || null;
  if (!activeId) {
    activeId = await invoke('getActiveRichFilter').catch(() => null);
  }
  if (activeId && (rfs || []).find(f => f.id === activeId)) {
    sel.value = activeId;
    await applyRichFilter(activeId);
  }
}

async function applyRichFilter(id) {
  const badge = document.getElementById('rfPickBadge');
  const hint  = document.getElementById('rfPickHint');
  if (!id) {
    state.rfConfig = null;
    FILTER_ID = 'default-filter';
    updateDropdownVisibility({});
    renderQF();
    if (badge) badge.style.display = 'none';
    if (hint) { hint.style.display = ''; hint.textContent = 'No filter selected — all issues shown'; }
    invoke('setActiveRichFilter', { id: null }).catch(() => {});
    return;
  }
  const rf = await invoke('getRichFilter', { id }).catch(() => null);
  if (!rf) return;
  state.rfConfig = rf;
  FILTER_ID = id;
  // Update UI indicators
  if (badge) { badge.textContent = rf.name; badge.style.display = ''; }
  if (hint)  hint.style.display = 'none';
  // Show/hide filter dropdowns per config
  updateDropdownVisibility(rf.dynamicFilters || {});
  // Update quick filter buttons
  renderQF();
  // Set base JQL from Jira filter
  if (rf.jiraFilter && rf.jiraFilter.jql) {
    state.filters.baseJql = rf.jiraFilter.jql;
    const jqlIn = document.getElementById('jqlIn');
    if (jqlIn && !jqlIn.value) jqlIn.value = rf.jiraFilter.jql;
  }
  // Save as active
  invoke('setActiveRichFilter', { id }).catch(() => {});
  // Restore saved filter state for this rich filter
  invoke('getFilterState', { richFilterId: id }).then(saved => {
    if (saved && Object.keys(saved).length) {
      state.filters = saved;
      const jqlIn = document.getElementById('jqlIn');
      if (jqlIn) jqlIn.value = saved.baseJql || (rf.jiraFilter && rf.jiraFilter.jql) || '';
      refreshAllLabels();
      refreshChips();
    }
  }).catch(() => {});
}

function updateDropdownVisibility(cfg) {
  // If no config (no rich filter selected), show all dropdowns
  const fieldToId = {
    project: 'ddProject', status: 'ddStatus', assignee: 'ddAssignee',
    priority: 'ddPriority', issuetype: 'ddType', component: 'ddComponent', sprint: 'ddSprint',
  };
  Object.entries(fieldToId).forEach(([field, ddId]) => {
    const wrap = document.getElementById(ddId);
    if (!wrap) return;
    // If no config or field is explicitly true (or not set), show; if false, hide
    wrap.style.display = (Object.keys(cfg).length === 0 || cfg[field] !== false) ? '' : 'none';
  });
}

// ── CONFIG FORM (gadget edit / configuration mode) ─────────────────────────
async function mountConfigForm(ctx) {
  const savedConfig = ctx?.extension?.gadgetConfiguration || {};
  const richFilters = await invoke('listRichFilters').catch(() => []);

  // Inject CONFIG_CSS — only way styles work in Forge's sandboxed iframe
  if (!document.getElementById('cfg-styles')) {
    const s = document.createElement('style');
    s.id = 'cfg-styles';
    s.textContent = CONFIG_CSS;
    document.head.appendChild(s);
  }

  function renderForm(selectedRfId, quickMode, enableJql, errorMsg) {
    const opts = richFilters.map(f =>
      `<option value="${esc(f.id)}" ${f.id === selectedRfId ? 'selected' : ''}>${esc(f.name)}</option>`
    ).join('');

    document.getElementById('app').innerHTML = `
      <div class="cfg-wrap">
        <div class="cfg-field">
          <label class="cfg-label">Rich filter <span class="cfg-req">*</span></label>
          <div class="cfg-select-wrap">
            <select class="cfg-select" id="cfgRfSel">
              <option value="">Select...</option>
              ${opts}
            </select>
          </div>
          <div class="cfg-hint">
            <span>The rich filter to be used as the basis for the gadget</span>
            <a href="#" id="cfgOpenList" class="cfg-link">Open rich filters list</a>
          </div>
          ${errorMsg ? `<div class="cfg-error">${esc(errorMsg)}</div>` : ''}
        </div>

        <div class="cfg-info-box">
          <div class="cfg-info-icon">i</div>
          <div class="cfg-info-text">Use this gadget to display quick filters that apply to other rich filter gadgets on this dashboard. Only gadgets based on the same rich filter are linked together.</div>
        </div>

        <div class="cfg-field">
          <span class="cfg-section-label">Quick filters</span>
          <div class="cfg-radio-group">
            <label class="cfg-radio-item">
              <input type="radio" name="cfgQfMode" value="all" ${quickMode !== 'jql' && quickMode !== 'customize' ? 'checked' : ''}>
              <span>Show all filters</span>
            </label>
            <label class="cfg-radio-item">
              <input type="radio" name="cfgQfMode" value="jql" ${quickMode === 'jql' ? 'checked' : ''}>
              <span>Show JQL filtering only</span>
            </label>
            <label class="cfg-radio-item">
              <input type="radio" name="cfgQfMode" value="customize" ${quickMode === 'customize' ? 'checked' : ''}>
              <span>Customize shown filters</span>
            </label>
          </div>
        </div>

        <label class="cfg-checkbox-item">
          <input type="checkbox" id="cfgEnableJql" ${enableJql !== false ? 'checked' : ''}>
          <span>Enable JQL filtering</span>
        </label>

        <div class="cfg-footer">
          <div class="cfg-footer-left">
            <button class="cfg-submit" id="cfgSubmit">Submit</button>
            <button class="cfg-cancel" id="cfgCancel">Cancel</button>
          </div>
          <div class="cfg-grid-icon" title="Tile layout">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="7" height="7" rx="1" fill="#5E6C84"/>
              <rect x="10" y="1" width="7" height="7" rx="1" fill="#5E6C84"/>
              <rect x="1" y="10" width="7" height="7" rx="1" fill="#5E6C84"/>
              <rect x="10" y="10" width="7" height="7" rx="1" fill="#5E6C84"/>
            </svg>
          </div>
        </div>
      </div>`;

    document.getElementById('cfgSubmit').onclick = async () => {
      const rfId = document.getElementById('cfgRfSel').value;
      const qm   = document.querySelector('input[name="cfgQfMode"]:checked')?.value || 'all';
      const ejql = document.getElementById('cfgEnableJql').checked;
      if (!rfId) {
        renderForm(rfId, qm, ejql, 'Please select a rich filter.');
        return;
      }
      try {
        await view.submit({ richFilterId: rfId, quickFiltersMode: qm, enableJql: ejql });
      } catch (e) {
        console.error('view.submit failed:', e);
      }
    };

    document.getElementById('cfgCancel').onclick = () => {
      try { view.close(); } catch (_) {}
    };

    document.getElementById('cfgOpenList').onclick = async (e) => {
      e.preventDefault();
      try {
        const info  = await invoke('getSiteInfo');
        const appId = '0b40a7d9-0481-40b2-9055-a954178f4efe';
        if (info?.baseUrl) {
          window.open(`${info.baseUrl}/jira/apps/${appId}/rich-filters-app`, '_blank', 'noopener');
        }
      } catch (_) {}
    };
  }

  renderForm(
    savedConfig.richFilterId   || '',
    savedConfig.quickFiltersMode || 'all',
    savedConfig.enableJql !== false,
    ''
  );
}

// ── MOUNT ──────────────────────────────────────────────────────────────────
function mount() {
  // Inject CSS — only way styles work in Forge's sandboxed iframe
  if (!document.getElementById('ctrl-styles')) {
    const s = document.createElement('style');
    s.id = 'ctrl-styles';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  document.getElementById('app').innerHTML = `
    <div class="ctrl">

      <!-- Row 0: Rich Filter selector -->
      <div class="rf-pick-row">
        <span class="rf-pick-lbl">Rich Filter:</span>
        <select id="rfPickSel" class="rf-pick-sel">
          <option value="">Select a rich filter…</option>
        </select>
        <span id="rfPickBadge" style="display:none" class="rf-pick-badge"></span>
        <span id="rfPickHint" class="rf-pick-hint">No filter selected — all issues shown</span>
      </div>

      <!-- Row 1: Filter dropdowns -->
      <div class="filter-row">
        <div class="dd-wrap" id="ddProject"></div>
        <div class="dd-wrap" id="ddStatus"></div>
        <div class="dd-wrap" id="ddAssignee"></div>
        <div class="dd-wrap" id="ddPriority"></div>
        <div class="dd-wrap" id="ddType"></div>
        <div class="dd-wrap" id="ddComponent"></div>
        <div class="dd-wrap" id="ddSprint"></div>
      </div>

      <!-- Row 2: JQL + action buttons -->
      <div class="jql-row">
        <input id="jqlIn" class="jql-in" placeholder="JQL or text search… (Enter to apply)" autocomplete="off"/>
        <button class="btn btn-clear" id="btnClear">✕ Clear</button>
        <button class="btn btn-apply" id="btnApply">Apply</button>
      </div>

      <!-- Row 3: Active filter chips -->
      <div class="chips" id="chips"></div>

      <!-- Row 4: Quick Filters -->
      <div class="section" id="qfSection">
        <div class="section-hdr">
          <span class="section-title">⚡ Quick Filters</span>
          <button class="btn-icon" onclick="APP.addSmartFilter()" title="Add custom quick filter">＋ Add</button>
        </div>
        <div class="qf-row" id="qfRow"></div>
      </div>

      <!-- Row 5: Saved Presets -->
      <div class="section">
        <div class="section-hdr">
          <span class="section-title">📋 Presets</span>
        </div>
        <div class="preset-row" id="presetRow"><span style="font-size:11px;color:#6B778C">No presets saved yet</span></div>
      </div>

    </div>`;

  // Apply gadget configuration visibility settings
  if (gadgetConfig.enableJql === false) {
    const jqlIn = document.getElementById('jqlIn');
    if (jqlIn) jqlIn.style.display = 'none';
  }
  if (gadgetConfig.quickFiltersMode === 'jql') {
    const qfSec = document.getElementById('qfSection');
    if (qfSec) qfSec.style.display = 'none';
  }

  document.getElementById('btnApply').onclick = applyFilters;
  document.getElementById('btnClear').onclick  = clearFilters;
  document.getElementById('jqlIn').onkeydown   = e => { if (e.key === 'Enter') applyFilters(); };
  document.addEventListener('click', e => {
    if (!e.target.closest('.dd-wrap') && !e.target.closest('.modal')) closeAll();
  });
}

// ── INIT ───────────────────────────────────────────────────────────────────
async function init() {
  // Detect gadget mode: entryPoint can sit at ctx.extension.entryPoint OR ctx.entryPoint
  const ctx = await view.getContext().catch(() => null);
  const entryPoint  = ctx?.extension?.entryPoint || ctx?.entryPoint || 'view';
  const savedConfig = ctx?.extension?.gadgetConfiguration || ctx?.gadgetConfiguration || {};

  // Show config form when:
  //   (1) user clicked the gadget "Configure / Edit" icon  →  entryPoint === 'edit'
  //   (2) gadget was just added and has no rich filter saved yet
  if (entryPoint === 'edit' || !savedConfig.richFilterId) {
    await mountConfigForm(ctx);
    return;
  }

  // ── VIEW MODE ─────────────────────────────────────────────────────────────
  gadgetConfig = savedConfig;

  mount();

  // Load and set up the rich filter selector (prefer gadget-configured rich filter)
  loadRichFilters(gadgetConfig.richFilterId || null);

  // Static dropdowns (no loading needed)
  makeDropdown('ddStatus',   'Status',   STATUSES,    renderStatus);
  makeDropdown('ddPriority', 'Priority', PRIORITIES,  renderPriority);
  makeDropdown('ddType',     'Type',     ISSUE_TYPES, renderType);
  makeDropdown('ddAssignee', 'Assignee', ['Unassigned'], renderAssignee);
  makeDropdown('ddComponent','Component', [], renderComponent);
  makeDropdown('ddSprint',   'Sprint',   [], renderSprint);

  // Load projects from Jira
  invoke('getProjects').then(ps => {
    state.projects = ps || [];
    makeDropdown('ddProject', 'Project', state.projects, renderProject);
  }).catch(() => makeDropdown('ddProject', 'Project', [], renderProject));

  // Load issues to extract real assignees
  invoke('getIssues', { richFilterId: FILTER_ID }).then(issues => {
    const seen = new Set();
    (issues || []).forEach(i => {
      const name = i.fields.assignee?.displayName;
      if (name && !seen.has(name)) { seen.add(name); state.assignees.push(name); }
    });
    makeDropdown('ddAssignee', 'Assignee', ['Unassigned', ...state.assignees], renderAssignee);
  }).catch(() => {});

  // Load saved smart filters (used when no rich filter is selected)
  invoke('getSmartFilters', { richFilterId: FILTER_ID })
    .then(qf => { state.smartFilters = qf || []; renderQF(); })
    .catch(() => renderQF());
  renderQF();

  // Load presets
  loadPresets();

  // Restore fallback filter state (used when no rich filter is selected)
  invoke('getFilterState', { richFilterId: FILTER_ID }).then(saved => {
    // Only apply if no rich filter is active
    if (!state.rfConfig && saved && Object.keys(saved).length) {
      state.filters = saved;
      if (saved.baseJql) document.getElementById('jqlIn').value = saved.baseJql;
      refreshAllLabels();
      refreshChips();
    }
  }).catch(() => {});
}

init();
