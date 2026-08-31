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

// ── COMPACT VIEW CSS (Image 3 style) ─────────────────────────────────────
const VIEW2_CSS = `
/* Container */
.ctrl-v2{background:#fff;border-bottom:3px solid #0052CC;padding:5px 10px 0}
/* One combined row: QF pill buttons + dropdown filter buttons */
.v2-filter-row{display:flex;gap:5px;flex-wrap:wrap;align-items:center;padding:5px 0 4px;min-height:34px}
/* display:contents makes #qfRow invisible as a box; its children become direct flex items */
.v2-qf-inline{display:contents}
/* Bottom action bar */
.v2-bar{display:flex;align-items:center;justify-content:space-between;padding:4px 0 5px;border-top:1px solid #EEF0F4;margin-top:1px;gap:6px}
.v2-bar-left{display:flex;align-items:center;gap:4px;flex-shrink:0}
.v2-bar-right{display:flex;align-items:center;gap:3px;flex-shrink:0}
/* Left bar elements */
.v2-grid-icon{opacity:.5;flex-shrink:0;display:inline-flex;align-items:center}
.v2-pg-btn{padding:1px 7px;background:#F4F5F7;border:1px solid #DFE1E6;border-radius:3px;font-size:12px;color:#172b4d;cursor:pointer;white-space:nowrap;display:inline-flex;align-items:center;gap:2px;height:22px;min-width:36px;justify-content:center}
.v2-pg-btn:hover{background:#EBECF0}
.v2-icon-btn{padding:2px 5px;background:none;border:1px solid #DFE1E6;border-radius:3px;color:#5E6C84;cursor:pointer;font-size:11px;display:inline-flex;align-items:center;line-height:1;height:22px}
.v2-icon-btn:hover{background:#F4F5F7;border-color:#97A0AF}
.v2-more-btn{letter-spacing:2px;padding:2px 4px;font-size:13px}
/* Right bar: JQL label, back arrow, apply circle, clear X */
.v2-jql-lbl{padding:0 5px;background:none;border:none;font-size:12px;color:#5E6C84;cursor:pointer;font-weight:700;letter-spacing:.4px;line-height:22px}
.v2-jql-lbl:hover{color:#0052CC}.v2-jql-lbl.active{color:#0052CC}
.v2-icon-action{width:22px;height:22px;background:none;border:1px solid #DFE1E6;border-radius:3px;font-size:12px;color:#5E6C84;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;padding:0;flex-shrink:0}
.v2-icon-action:hover{background:#F4F5F7}
.v2-apply-btn{width:24px;height:24px;background:#0065B3;border:none;border-radius:50%;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;padding:0;flex-shrink:0}
.v2-apply-btn:hover{background:#0052CC}
.v2-clear-btn{width:22px;height:22px;background:none;border:1px solid #DFE1E6;border-radius:3px;font-size:11px;color:#5E6C84;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;padding:0;flex-shrink:0}
.v2-clear-btn:hover{background:#FFEBE6;color:#BF2600;border-color:#FF7452}
/* RF badge */
.rf-pick-badge{display:inline-block;padding:2px 7px;border-radius:10px;font-size:11px;font-weight:600;background:#DEEBFF;color:#0052CC}
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
    const _jqlIn = document.getElementById('jqlIn');
    if (_jqlIn) _jqlIn.value = jql || '';
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
      const _jqlIn = document.getElementById('jqlIn');
      if (_jqlIn) _jqlIn.value = state.filters.baseJql || '';
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

  const isCustomize  = gadgetConfig.quickFiltersMode === 'customize';
  const customKeys   = gadgetConfig.customizedFilters || [];

  // Use rich filter's staticFilters if a filter is selected, otherwise defaults
  const baseFilters = (state.rfConfig && state.rfConfig.staticFilters && state.rfConfig.staticFilters.length)
    ? state.rfConfig.staticFilters
    : DEFAULT_QF;

  // Smart filters: from rich filter config if selected, otherwise from saved smart filters
  const smartList = (state.rfConfig && state.rfConfig.smartFilters)
    ? state.rfConfig.smartFilters
    : state.smartFilters;

  // Filter based on customize selection
  const visibleBase = isCustomize
    ? baseFilters.filter((f, i) =>
        customKeys.includes('__static_all__') || customKeys.includes(`static_${i}`))
    : baseFilters;

  const visibleSmart = isCustomize
    ? smartList.filter((f, i) => customKeys.includes(`smart_${i}`))
    : smartList;

  const defaultBtns = visibleBase.map((f, i) =>
    `<button class="qf-btn ${i === 0 ? 'active' : ''}" onclick="APP.applyQF(${JSON.stringify(f.jql)},this)">${esc(f.name)}</button>`
  ).join('');

  const smartBtns = visibleSmart.map((f, i) =>
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
  const jql = (document.getElementById('jqlIn')?.value || '').trim();
  if (jql) state.filters.baseJql = jql;
  else delete state.filters.baseJql;
  pushFilters().then(() => {
    const btn = document.getElementById('btnApply') || document.getElementById('v2Apply');
    if (!btn) return;
    const origText = btn.textContent;
    btn.textContent = '✓ Applied'; btn.style.background = '#00875A';
    setTimeout(() => { btn.textContent = origText; btn.style.background = ''; }, 1500);
  });
}

function clearFilters() {
  state.filters = {};
  const _jqlIn = document.getElementById('jqlIn');
  if (_jqlIn) _jqlIn.value = '';
  document.querySelectorAll('.qf-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.qf-btn')?.classList.add('active');
  refreshAllLabels(); refreshChips();
  pushFilters();
}

// ── TOAST ─────────────────────────────────────────────────────────────────
function showToast(msg, type /* 'error' | 'info' */ = 'error') {
  // Remove any existing toast first
  document.getElementById('cfgToast')?.remove();
  const t = document.createElement('div');
  t.id = 'cfgToast';
  const bg  = type === 'error' ? '#DE350B' : '#0052CC';
  const ico = type === 'error' ? '✕' : 'ℹ';
  t.style.cssText = [
    'position:fixed', 'top:16px', 'left:50%', 'transform:translateX(-50%)',
    `background:${bg}`, 'color:#fff', 'padding:10px 18px 10px 14px',
    'border-radius:4px', 'font-size:13px', 'font-family:inherit',
    'font-weight:600', 'box-shadow:0 4px 16px rgba(0,0,0,.25)',
    'z-index:999999', 'display:flex', 'align-items:center', 'gap:8px',
    'white-space:nowrap', 'cursor:pointer', 'max-width:90vw',
  ].join(';');
  t.innerHTML = `<span>${ico}</span><span style="font-weight:400">${esc(msg)}</span>`;
  document.body.appendChild(t);
  const dismiss = () => { clearTimeout(tid); t.remove(); };
  const tid = setTimeout(dismiss, 6000);
  t.onclick = dismiss;
}

// ── MODAL ──────────────────────────────────────────────────────────────────
function showModal({ title, fields, onSave, _isError, _errorMsg }) {
  if (_isError) {
    const errOverlay = document.createElement('div');
    errOverlay.className = 'modal-overlay';
    errOverlay.innerHTML = `
      <div class="modal">
        <h3 style="color:#DE350B">${esc(title)}</h3>
        <p style="font-size:13px;color:#42526E;margin-bottom:14px">${esc(_errorMsg || '')}</p>
        <div class="modal-footer">
          <button class="btn-save" id="modalClose">OK</button>
        </div>
      </div>`;
    document.body.appendChild(errOverlay);
    errOverlay.querySelector('#modalClose').onclick = () => errOverlay.remove();
    errOverlay.onclick = e => { if (e.target === errOverlay) errOverlay.remove(); };
    return;
  }
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
  const fieldToId = {
    project: 'ddProject', status: 'ddStatus', assignee: 'ddAssignee',
    priority: 'ddPriority', issuetype: 'ddType', component: 'ddComponent', sprint: 'ddSprint',
  };
  const isCustomize = gadgetConfig.quickFiltersMode === 'customize';
  const customKeys  = gadgetConfig.customizedFilters || [];

  Object.entries(fieldToId).forEach(([field, ddId]) => {
    const wrap = document.getElementById(ddId);
    if (!wrap) return;
    // rf dynamicFilters config
    const rfAllows = Object.keys(cfg).length === 0 || cfg[field] !== false;
    // gadget customize config
    const gadgetAllows = !isCustomize ||
      customKeys.includes('__dynamic_all__') ||
      customKeys.includes(`dynamic_${field}`);
    wrap.style.display = (rfAllows && gadgetAllows) ? '' : 'none';
  });
}

// ── CONFIG FORM (gadget edit / configuration mode) ─────────────────────────
async function mountConfigForm(ctx) {
  // Inject CONFIG_CSS so styles work whether or not style.css loaded
  if (!document.getElementById('cfg-styles')) {
    const s = document.createElement('style');
    s.id = 'cfg-styles';
    s.textContent = CONFIG_CSS;
    document.head.appendChild(s);
  }

  const savedConfig = ctx?.extension?.gadgetConfiguration || ctx?.gadgetConfiguration || {};

  // Load rich filters — capture error so we can surface it in the UI
  let richFilters = [];
  let loadError = '';
  try {
    richFilters = await invoke('listRichFilters');
    if (!Array.isArray(richFilters)) { richFilters = []; }
  } catch (e) {
    console.error('listRichFilters failed:', e);
    loadError = e?.message || 'Could not load rich filters. Check console for details.';
  }

  // ── mutable form state ────────────────────────────────────────────────────
  let selectedRfId       = savedConfig.richFilterId      || '';
  let quickMode          = savedConfig.quickFiltersMode  || 'all';
  let enableJql          = savedConfig.enableJql !== false;
  let customizedFilters  = Array.isArray(savedConfig.customizedFilters) ? [...savedConfig.customizedFilters] : [];
  let rfData             = null;
  let qfDropdownOpen     = false;
  let formError          = '';

  // Pre-load rf data if one is saved
  if (selectedRfId) {
    rfData = await invoke('getRichFilter', { id: selectedRfId }).catch(() => null);
  }

  // ── helpers ───────────────────────────────────────────────────────────────
  const DYN_FIELDS = {
    project:'Project', status:'Status', assignee:'Assignee',
    priority:'Priority', issuetype:'Type', component:'Component', sprint:'Sprint',
  };

  // ALL possible dynamic fields — always show every one
  const ALL_DYN_FIELDS = [
    { key: 'project',   label: 'Project' },
    { key: 'status',    label: 'Status' },
    { key: 'assignee',  label: 'Assignee' },
    { key: 'priority',  label: 'Priority' },
    { key: 'issuetype', label: 'Type' },
    { key: 'component', label: 'Component' },
    { key: 'sprint',    label: 'Sprint' },
  ];

  function buildFilterOptions(rf) {
    const opts = [];
    // ── STATIC FILTERS — always show, even if none defined ──────────────────
    opts.push({ group: 'STATIC FILTERS', key: '__static_all__', label: 'All static', icon: '' });
    if (rf && rf.staticFilters && rf.staticFilters.length) {
      rf.staticFilters.forEach((f, i) =>
        opts.push({ group: 'STATIC FILTERS', key: `static_${i}`, label: f.name || `Filter ${i+1}`, icon: '' })
      );
    }
    // ── DYNAMIC FILTERS — always show all standard fields ───────────────────
    opts.push({ group: 'DYNAMIC FILTERS', key: '__dynamic_all__', label: 'All dynamic', icon: '' });
    ALL_DYN_FIELDS.forEach(f =>
      opts.push({ group: 'DYNAMIC FILTERS', key: `dynamic_${f.key}`, label: f.label, icon: '&#8801;' })
    );
    // ── SMART FILTERS — from rf if available ────────────────────────────────
    if (rf && rf.smartFilters && rf.smartFilters.length) {
      rf.smartFilters.forEach((f, i) =>
        opts.push({ group: 'SMART FILTERS', key: `smart_${i}`, label: f.name || `Smart ${i+1}`, icon: '' })
      );
    } else {
      // placeholder so the tab always exists
      opts.push({ group: 'SMART FILTERS', key: '__smart_placeholder__', label: '(No smart filters configured)', icon: '', disabled: true });
    }
    return opts;
  }

  // ── render customize panel (injected into #cfgCustomizePanel) ────────────
  let activeTab = 'STATIC FILTERS'; // tab state

  function renderCustomizePanel() {
    const panel = document.getElementById('cfgCustomizePanel');
    if (!panel) return;
    if (quickMode !== 'customize') { panel.innerHTML = ''; return; }

    const filterOpts  = buildFilterOptions(rfData);
    const hasSelected = customizedFilters.filter(k => k !== '__smart_placeholder__').length > 0;

    // warning
    const warnHtml = !hasSelected
      ? `<div class="cfg-warn"><span class="cfg-warn-icon">&#9651;</span> Select one or more quick filters to display</div>`
      : '';

    // chips of selected items
    const chipsHtml = customizedFilters
      .filter(k => k !== '__smart_placeholder__')
      .map(key => {
        const opt = filterOpts.find(o => o.key === key);
        return opt ? `<span class="cfg-chip">${esc(opt.label)}<span class="cfg-chip-x" data-key="${esc(key)}">&#215;</span></span>` : '';
      }).join('');

    // tabs
    const TABS = ['STATIC FILTERS', 'DYNAMIC FILTERS', 'SMART FILTERS', 'SEPARATORS'];
    const tabsHtml = TABS.map(t => {
      const active = t === activeTab ? 'cfg-qf-tab--active' : '';
      return `<button class="cfg-qf-tab ${active}" data-tab="${esc(t)}">${esc(t)}</button>`;
    }).join('');

    // filter opts by active tab (SEPARATORS shows nothing for now)
    const tabOpts = filterOpts.filter(o => o.group === activeTab);

    // grouped content for active tab
    const contentHtml = tabOpts.length
      ? tabOpts.map(o => {
          if (o.disabled) return `<div class="cfg-qf-empty">${esc(o.label)}</div>`;
          const chk = customizedFilters.includes(o.key);
          const isAllRow = o.key.startsWith('__');
          return `<label class="cfg-qf-opt ${chk ? 'selected' : ''} ${isAllRow ? 'cfg-qf-opt--all' : ''}" data-key="${esc(o.key)}">
            <input type="checkbox" ${chk ? 'checked' : ''}>
            ${o.icon ? `<span class="cfg-qf-icon">${o.icon}</span>` : ''}
            <span>${esc(o.label)}</span>
          </label>`;
        }).join('')
      : `<div class="cfg-qf-empty">No ${esc(activeTab.toLowerCase())} available.</div>`;

    panel.innerHTML = `
      ${warnHtml}
      <div class="cfg-qf-picker">
        <div class="cfg-qf-trigger" id="cfgQfTrigger">
          <span class="cfg-qf-trigger-inner">${chipsHtml || '<span class="cfg-qf-placeholder">Select quick filters...</span>'}</span>
          <span class="cfg-qf-arrow">&#9660;</span>
        </div>
        <div class="cfg-qf-dropdown ${qfDropdownOpen ? 'open' : ''}" id="cfgQfDropdown">
          <div class="cfg-qf-tabs" id="cfgQfTabs">${tabsHtml}</div>
          <div class="cfg-qf-list" id="cfgQfList">${contentHtml}</div>
        </div>
      </div>
      <div class="cfg-qf-hint">Select <em>Section</em> to add collapsible sections that group quick filters. A section will group all quick filters that follow it in the list.</div>
    `;

    // trigger open/close
    document.getElementById('cfgQfTrigger').onclick = (e) => {
      e.stopPropagation();
      qfDropdownOpen = !qfDropdownOpen;
      const dd = document.getElementById('cfgQfDropdown');
      if (dd) dd.classList.toggle('open', qfDropdownOpen);
    };

    // tab switching
    panel.querySelectorAll('.cfg-qf-tab').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        activeTab = btn.dataset.tab;
        qfDropdownOpen = true;
        renderCustomizePanel();
      };
    });

    // checkbox toggle
    panel.querySelectorAll('.cfg-qf-opt').forEach(el => {
      el.querySelector('input').onchange = (e) => {
        e.stopPropagation();
        const key = el.dataset.key;
        if (key === '__smart_placeholder__') return;
        if (customizedFilters.includes(key)) {
          customizedFilters = customizedFilters.filter(k => k !== key);
        } else {
          customizedFilters.push(key);
        }
        qfDropdownOpen = true;
        renderCustomizePanel();
      };
    });

    // chip remove
    panel.querySelectorAll('.cfg-chip-x').forEach(el => {
      el.onclick = (e) => {
        e.stopPropagation();
        customizedFilters = customizedFilters.filter(k => k !== el.dataset.key);
        renderCustomizePanel();
      };
    });
  }

  // ── render main form shell ────────────────────────────────────────────────
  function renderForm() {
    const opts = richFilters.map(f =>
      `<option value="${esc(f.id)}" ${f.id === selectedRfId ? 'selected' : ''}>${esc(f.name)}</option>`
    ).join('');

    // star icon for selected filter
    const starHtml = selectedRfId
      ? `<span class="cfg-rf-star">⭐</span>`
      : '';

    // Empty/error state shown below the dropdown
    const rfLoadHint = loadError
      ? `<div class="cfg-warn" style="margin-top:8px"><span class="cfg-warn-icon">⚠️</span><span>${esc(loadError)} — <a href="#" id="cfgRetryLoad" style="color:#BF2600">Retry</a></span></div>`
      : richFilters.length === 0
        ? `<div style="margin-top:10px;padding:10px 12px;background:#FFFAE6;border:1px solid #FFD966;border-radius:4px;font-size:13px;color:#412005">
            <strong>No rich filters found in this environment.</strong><br>
            <span style="font-size:12px">You must create a rich filter before configuring this gadget.</span><br>
            <a href="#" id="cfgOpenList2" style="font-size:12px;color:#0052CC;font-weight:600;margin-top:4px;display:inline-block">→ Create a rich filter now</a>
           </div>`
        : '';


    document.getElementById('app').innerHTML = `
      <div class="cfg-wrap">

        <div class="cfg-field">
          <label class="cfg-label">Rich filter <span class="cfg-req">*</span></label>
          <div class="cfg-select-wrap">
            ${starHtml ? `<span class="cfg-select-star">${starHtml}</span>` : ''}
            <select class="cfg-select ${selectedRfId ? 'cfg-select--valued' : ''}" id="cfgRfSel">
              <option value="">Select...</option>
              ${opts}
            </select>
          </div>
          <div class="cfg-hint">
            <span class="cfg-hint-text">The rich filter to be used as the basis for the gadget</span>
            <a href="#" id="cfgOpenList" class="cfg-link">Open rich filters list</a>
          </div>
          ${rfLoadHint}
          ${formError ? `<div class="cfg-error">${esc(formError)}</div>` : ''}
        </div>

        <div class="cfg-info-box">
          <div class="cfg-info-icon">i</div>
          <div class="cfg-info-text">Use this gadget to display quick filters that apply to other rich filter gadgets on this dashboard. Only gadgets based on the same rich filter are linked together.</div>
        </div>

        <div class="cfg-field">
          <span class="cfg-section-label">Quick filters</span>
          <div class="cfg-radio-group">
            <label class="cfg-radio-item">
              <input type="radio" name="cfgQfMode" value="all" ${quickMode === 'all' ? 'checked' : ''}>
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

        <div id="cfgCustomizePanel"></div>

        <hr class="cfg-divider">

        <label class="cfg-checkbox-item">
          <input type="checkbox" id="cfgEnableJql" ${enableJql ? 'checked' : ''}>
          <span>Enable JQL filtering</span>
        </label>

        <div class="cfg-footer">
          <div class="cfg-footer-left">
            <button class="cfg-submit" id="cfgSubmit" ${richFilters.length === 0 ? 'disabled style="opacity:.5;cursor:not-allowed"' : ''}>Submit</button>
            <button class="cfg-cancel" id="cfgCancel">Cancel</button>
          </div>
          <div class="cfg-grid-icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="7" height="7" rx="1" fill="#5E6C84"/>
              <rect x="10" y="1" width="7" height="7" rx="1" fill="#5E6C84"/>
              <rect x="1" y="10" width="7" height="7" rx="1" fill="#5E6C84"/>
              <rect x="10" y="10" width="7" height="7" rx="1" fill="#5E6C84"/>
            </svg>
          </div>
        </div>
      </div>`;

    // initial customize panel
    renderCustomizePanel();

    // ── wire events ──
    document.getElementById('cfgRfSel').onchange = async (e) => {
      selectedRfId = e.target.value;
      customizedFilters = [];
      qfDropdownOpen = false;
      rfData = selectedRfId
        ? await invoke('getRichFilter', { id: selectedRfId }).catch(() => null)
        : null;
      // re-render star
      const starSpan = document.querySelector('.cfg-select-star');
      if (starSpan) starSpan.style.display = selectedRfId ? '' : 'none';
      renderCustomizePanel();
    };

    document.querySelectorAll('input[name="cfgQfMode"]').forEach(r => {
      r.onchange = () => {
        quickMode = r.value;
        qfDropdownOpen = false;
        renderCustomizePanel();
      };
    });

    document.getElementById('cfgEnableJql').onchange = (e) => { enableJql = e.target.checked; };

    document.getElementById('cfgSubmit').onclick = async () => {
      formError = '';
      if (!selectedRfId) {
        // Show dismissable toast at top so it's visible regardless of scroll
        showToast(
          richFilters.length === 0
            ? 'No rich filters exist yet — create one first via "Open rich filter config"'
            : 'Please select a rich filter from the dropdown',
        );
        // Also highlight the select field
        document.getElementById('cfgRfSel')?.scrollIntoView({ block: 'center', behavior: 'smooth' });
        document.getElementById('cfgRfSel')?.focus();
        return;
      }
      const realFilters = customizedFilters.filter(k => k !== '__smart_placeholder__');
      if (quickMode === 'customize' && realFilters.length === 0) {
        showToast('Please select at least one quick filter to display');
        document.getElementById('cfgCustomizePanel')?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        renderCustomizePanel(); // re-render to show the warning banner inside
        return;
      }

      // Show a fixed-position overlay so feedback is always visible regardless of scroll
      const overlay = document.createElement('div');
      overlay.id = 'cfgSavingOverlay';
      overlay.style.cssText = 'position:fixed;inset:0;background:rgba(255,255,255,0.85);z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;font-family:inherit';
      overlay.innerHTML = `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style="animation:spin .8s linear infinite">
          <circle cx="14" cy="14" r="11" stroke="#DFE1E6" stroke-width="3"/>
          <path d="M14 3 a11 11 0 0 1 11 11" stroke="#0052CC" stroke-width="3" stroke-linecap="round"/>
        </svg>
        <span style="font-size:14px;color:#172b4d;font-weight:600">Saving…</span>`;
      if (!document.getElementById('cfgSpinStyles')) {
        const st = document.createElement('style');
        st.id = 'cfgSpinStyles';
        st.textContent = '@keyframes spin{to{transform:rotate(360deg)}}';
        document.head.appendChild(st);
      }
      document.body.appendChild(overlay);

      const removeOverlay = () => { try { document.body.removeChild(overlay); } catch (_) {} };

      try {
        // Race view.submit() against a 10-second timeout
        await Promise.race([
          view.submit({
            richFilterId: selectedRfId,
            quickFiltersMode: quickMode,
            enableJql,
            customizedFilters: quickMode === 'customize' ? customizedFilters : [],
          }),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Save timed out — please try again.')), 10000)
          ),
        ]);
        // If we reach here, submit resolved without navigating away (unusual)
        removeOverlay();
      } catch (e) {
        removeOverlay();
        const msg = e?.message || 'Failed to save. Please try again.';
        console.error('view.submit failed:', e);
        showToast(msg);
        // Also show a modal for detailed error messaging
        showModal({
          title: 'Save failed',
          fields: [],
          _isError: true,
          _errorMsg: msg,
          onSave() {},
        });
        formError = msg;
      }
    };

    document.getElementById('cfgCancel').onclick = () => { try { view.close(); } catch (_) {} };

    document.getElementById('cfgOpenList').onclick = async (e) => {
      e.preventDefault();
      try {
        const info  = await invoke('getSiteInfo');
        const appId = '0b40a7d9-0481-40b2-9055-a954178f4efe';
        if (info?.baseUrl) window.open(`${info.baseUrl}/jira/apps/${appId}/rich-filters-app`, '_blank', 'noopener');
      } catch (_) {}
    };

    // "Create one first" link (empty state)
    document.getElementById('cfgOpenList2')?.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        const info  = await invoke('getSiteInfo');
        const appId = '0b40a7d9-0481-40b2-9055-a954178f4efe';
        if (info?.baseUrl) window.open(`${info.baseUrl}/jira/apps/${appId}/rich-filters-app`, '_blank', 'noopener');
      } catch (_) {}
    });

    // "Retry" link (load error state)
    document.getElementById('cfgRetryLoad')?.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        const reloaded = await invoke('listRichFilters');
        if (Array.isArray(reloaded)) {
          richFilters.length = 0;
          reloaded.forEach(f => richFilters.push(f));
          loadError = '';
        }
      } catch (err) {
        console.error('Retry listRichFilters failed:', err);
      }
      renderForm();
    });

    // close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (qfDropdownOpen && !e.target.closest('#cfgQfDropdown') && !e.target.closest('#cfgQfTrigger')) {
        qfDropdownOpen = false;
        const dd = document.getElementById('cfgQfDropdown');
        if (dd) dd.classList.remove('open');
      }
    });
  }

  renderForm();
}

// ── UNCONFIGURED PLACEHOLDER ───────────────────────────────────────────────
function mountUnconfigured() {
  if (!document.getElementById('cfg-styles')) {
    const s = document.createElement('style');
    s.id = 'cfg-styles';
    s.textContent = CONFIG_CSS;
    document.head.appendChild(s);
  }
  document.getElementById('app').innerHTML = `
    <div style="padding:24px 20px;text-align:center;font-family:inherit">
      <div style="width:44px;height:44px;background:#DEEBFF;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;margin-bottom:12px">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="9" stroke="#0052CC" stroke-width="1.8"/>
          <path d="M11 7v1M11 10v5" stroke="#0052CC" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <div style="font-size:14px;font-weight:600;color:#172b4d;margin-bottom:6px">Rich Filter Controller not configured</div>
      <div style="font-size:13px;color:#42526E;margin-bottom:14px">Click the <strong>✏️ Edit</strong> icon (top-right of this gadget) to configure it.</div>
    </div>`;
}

// ── MOUNT (compact view — matches marketplace Image 3) ───────────────────
function mount() {
  if (!document.getElementById('ctrl-styles')) {
    const s = document.createElement('style');
    s.id = 'ctrl-styles';
    s.textContent = CSS + VIEW2_CSS;
    document.head.appendChild(s);
  }

  const jqlOnly     = gadgetConfig.quickFiltersMode === 'jql';
  const jqlDisabled = gadgetConfig.enableJql === false;

  document.getElementById('app').innerHTML = `
    <div class="ctrl-v2">

      <!-- Hidden: used by loadRichFilters internally -->
      <select id="rfPickSel" style="display:none"></select>
      <span   id="rfPickHint" style="display:none"></span>

      <!-- Combined row: QF pill buttons (static/smart) + dropdown filter pills -->
      <div class="v2-filter-row" id="v2FilterRow"${jqlOnly ? ' style="display:none"' : ''}>
        <!-- #qfRow has display:contents so its children sit inline with the dd-wraps -->
        <div class="v2-qf-inline" id="qfRow"></div>
        <div class="dd-wrap" id="ddProject"></div>
        <div class="dd-wrap" id="ddStatus"></div>
        <div class="dd-wrap" id="ddAssignee"></div>
        <div class="dd-wrap" id="ddPriority"></div>
        <div class="dd-wrap" id="ddType"></div>
        <div class="dd-wrap" id="ddComponent"></div>
        <div class="dd-wrap" id="ddSprint"></div>
      </div>

      <!-- Active filter chips (auto-hidden when empty) -->
      <div class="chips" id="chips"></div>

      <!-- JQL input row: always in DOM, shown via JQL button or in jql-only mode -->
      <div class="jql-row" id="jqlRow" style="${jqlOnly ? '' : 'display:none'}">
        <input id="jqlIn" class="jql-in" placeholder="Enter JQL… (Enter to apply)" autocomplete="off"/>
      </div>

      <!-- Bottom action bar -->
      <div class="v2-bar">
        <div class="v2-bar-left">
          <svg class="v2-grid-icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="0" y="0" width="6" height="6" rx="1" fill="#97A0AF"/>
            <rect x="8" y="0" width="6" height="6" rx="1" fill="#97A0AF"/>
            <rect x="0" y="8" width="6" height="6" rx="1" fill="#97A0AF"/>
            <rect x="8" y="8" width="6" height="6" rx="1" fill="#97A0AF"/>
          </svg>
          <button class="v2-pg-btn" id="v2PgBtn"><span id="v2PgVal">15</span> ▾</button>
          <button class="v2-icon-btn" id="v2ExportBtn" title="Export">
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none"><path d="M1 7.5V9.5C1 10.05 1.45 10.5 2 10.5H10C10.55 10.5 11 10.05 11 9.5V7.5" stroke="#5E6C84" stroke-width="1.3" stroke-linecap="round"/><path d="M6 1V7.5M3.5 5L6 7.5 8.5 5" stroke="#5E6C84" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <button class="v2-icon-btn" id="v2ShareBtn" title="Copy link">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="9" cy="2" r="1.5" stroke="#5E6C84" stroke-width="1.2"/><circle cx="2" cy="6" r="1.5" stroke="#5E6C84" stroke-width="1.2"/><circle cx="9" cy="10" r="1.5" stroke="#5E6C84" stroke-width="1.2"/><path d="M3.5 5.5L7.5 3M3.5 6.5L7.5 9" stroke="#5E6C84" stroke-width="1.2" stroke-linecap="round"/></svg>
          </button>
          <button class="v2-icon-btn v2-more-btn" id="v2MoreBtn" title="More">⋯</button>
          <span id="rfPickBadge" class="rf-pick-badge" style="display:none"></span>
        </div>
        <div class="v2-bar-right">
          ${!jqlDisabled && !jqlOnly ? `<button class="v2-jql-lbl" id="v2JqlBtn">JQL</button>` : ''}
          <button class="v2-icon-action" id="v2CancelBtn" title="Cancel / clear all">←</button>
          <button class="v2-apply-btn" id="v2Apply" title="Apply filters">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M6.5 1.5a5 5 0 1 0 4.33 2.5" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/>
              <polyline points="10.5,1.5 10.5,4 8,4" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="v2-clear-btn" id="v2ClearBtn" title="Clear all filters">✕</button>
        </div>
      </div>

    </div>`;

  // Apply = push current filter state to linked gadgets
  document.getElementById('v2Apply').onclick    = applyFilters;
  // Cancel (←) = clear all selections
  document.getElementById('v2CancelBtn').onclick = clearFilters;
  // Clear (✕) = clear all selections
  document.getElementById('v2ClearBtn').onclick  = clearFilters;

  // JQL toggle: show/hide JQL input, hide/show filter row
  if (!jqlDisabled && !jqlOnly) {
    document.getElementById('v2JqlBtn').onclick = () => {
      const jqlRow    = document.getElementById('jqlRow');
      const filterRow = document.getElementById('v2FilterRow');
      const btn       = document.getElementById('v2JqlBtn');
      const jqlOpen   = jqlRow.style.display !== 'none';
      jqlRow.style.display    = jqlOpen ? 'none' : '';
      filterRow.style.display = jqlOpen ? '' : 'none';
      btn.classList.toggle('active', !jqlOpen);
      if (!jqlOpen) document.getElementById('jqlIn')?.focus();
    };
  }

  // JQL Enter to apply
  document.getElementById('jqlIn').onkeydown = e => { if (e.key === 'Enter') applyFilters(); };

  // Page-size cycle button: 15 → 25 → 50 → 100 → 15 …
  const PG_SIZES = [15, 25, 50, 100];
  let pgSize = 15;
  document.getElementById('v2PgBtn').onclick = e => {
    e.stopPropagation();
    pgSize = PG_SIZES[(PG_SIZES.indexOf(pgSize) + 1) % PG_SIZES.length];
    document.getElementById('v2PgVal').textContent = pgSize;
    invoke('updateFilterState', { richFilterId: FILTER_ID, filters: { ...state.filters, maxResults: pgSize } }).catch(() => {});
  };

  // Copy link
  document.getElementById('v2ShareBtn').onclick = () => {
    try { navigator.clipboard?.writeText(window.location.href); } catch (_) {}
  };

  // Close dropdowns on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('.dd-wrap') && !e.target.closest('.modal')) closeAll();
  });
}

// ── INIT ───────────────────────────────────────────────────────────────────
async function init() {
  const ctx = await view.getContext().catch(() => null);
  const entryPoint  = ctx?.extension?.entryPoint || ctx?.entryPoint || 'view';
  const savedConfig = ctx?.extension?.gadgetConfiguration || ctx?.gadgetConfiguration || {};

  // Only show the full config form (with view.submit) in true edit mode.
  // view.submit() is a Forge platform call that ONLY works when entryPoint === 'edit'.
  if (entryPoint === 'edit') {
    await mountConfigForm(ctx);
    return;
  }

  // ── VIEW MODE ─────────────────────────────────────────────────────────────
  // If no config saved yet, show a "please configure" placeholder instead of
  // the config form — avoid calling view.submit() in view mode.
  if (!savedConfig.richFilterId) {
    mountUnconfigured();
    return;
  }

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
