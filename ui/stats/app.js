import { invoke } from '@forge/bridge';

const FILTER_ID = 'default-filter';

const STATUS_STYLES = {
  'To Do':       { bg: '#F4F5F7', text: '#42526E', border: '#DFE1E6' },
  'In Progress': { bg: '#DEEBFF', text: '#0052CC', border: '#4C9AFF' },
  'In Review':   { bg: '#EAE6FF', text: '#6554C0', border: '#8777D9' },
  'Done':        { bg: '#E3FCEF', text: '#006644', border: '#57D9A3' },
  'Blocked':     { bg: '#FFEBE6', text: '#BF2600', border: '#FF7452' },
  'Waiting':     { bg: '#FFFAE6', text: '#974F0C', border: '#FFE380' },
  default:       { bg: '#F4F5F7', text: '#42526E', border: '#DFE1E6' },
};
const PRIORITY_STYLES = {
  'Highest': { bg: '#FFEBE6', text: '#BF2600', icon: '⬆⬆' },
  'High':    { bg: '#FFF0E6', text: '#974F0C', icon: '⬆' },
  'Medium':  { bg: '#FFFAE6', text: '#974F0C', icon: '➡' },
  'Low':     { bg: '#DEEBFF', text: '#0052CC', icon: '⬇' },
  'Lowest':  { bg: '#E4F0FF', text: '#0052CC', icon: '⬇⬇' },
  default:   { bg: '#F4F5F7', text: '#42526E', icon: '—' },
};

const CSS = `
*{box-sizing:border-box;margin:0;padding:0}
html,body{height:100%;overflow:hidden}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;color:#172b4d;background:#fff;height:100vh;overflow-y:auto}
.stats-page{padding:10px 12px}
.status-msg{padding:16px;text-align:center;color:#6B778C;font-size:13px;background:#fff;border-radius:6px}
.section-title{font-size:11px;font-weight:700;color:#6B778C;text-transform:uppercase;letter-spacing:.6px;margin-bottom:7px;margin-top:0}
.cards-row{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px}

/* Total card */
.card-total{
  flex:0 0 auto;min-width:100px;padding:12px 14px;border-radius:6px;
  background:linear-gradient(135deg,#0052CC,#172b4d);color:#fff;
  box-shadow:0 2px 6px rgba(0,82,204,.3);
}
.card-total .count{font-size:28px;font-weight:700;line-height:1;margin-bottom:3px}
.card-total .label{font-size:11px;opacity:.8;font-weight:500;text-transform:uppercase;letter-spacing:.5px}

/* Status card */
.card{
  flex:1;min-width:80px;padding:10px 12px;border-radius:6px;
  cursor:pointer;transition:transform .15s,box-shadow .15s;
  border:1px solid transparent;
}
.card:hover{transform:translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,.12)}
.card .count{font-size:22px;font-weight:700;line-height:1;margin-bottom:3px}
.card .label{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.4px;opacity:.85}
.card-active{outline:2px solid #0052CC;outline-offset:2px}

/* Priority mini card */
.p-card{
  flex:1;min-width:65px;padding:8px 10px;border-radius:6px;
  cursor:pointer;transition:transform .15s,box-shadow .15s;
  display:flex;flex-direction:column;align-items:center;
}
.p-card:hover{transform:translateY(-2px);box-shadow:0 3px 8px rgba(0,0,0,.1)}
.p-card .icon{font-size:14px;margin-bottom:3px}
.p-card .pcount{font-size:18px;font-weight:700;line-height:1;margin-bottom:2px}
.p-card .plabel{font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:.4px;opacity:.85}
.divider{height:1px;background:#F4F5F7;margin:2px 0 10px}
`;

let activeStatusFilter = null;
let activePriorityFilter = null;

function pushFilter(statusVal, priorityVal) {
  const filters = {};
  if (statusVal)   filters.status   = [statusVal];
  if (priorityVal) filters.priority = [priorityVal];
  invoke('updateFilterState', { richFilterId: FILTER_ID, filters }).catch(console.error);
}

window._filterStatus = (status, el) => {
  if (activeStatusFilter === status) {
    activeStatusFilter = null;
    document.querySelectorAll('.card').forEach(c => c.classList.remove('card-active'));
    pushFilter(null, activePriorityFilter);
  } else {
    activeStatusFilter = status;
    document.querySelectorAll('.card').forEach(c => c.classList.remove('card-active'));
    el.classList.add('card-active');
    pushFilter(status, activePriorityFilter);
  }
};

window._filterPriority = (priority, el) => {
  if (activePriorityFilter === priority) {
    activePriorityFilter = null;
    document.querySelectorAll('.p-card').forEach(c => c.classList.remove('card-active'));
    pushFilter(activeStatusFilter, null);
  } else {
    activePriorityFilter = priority;
    document.querySelectorAll('.p-card').forEach(c => c.classList.remove('card-active'));
    el.classList.add('card-active');
    pushFilter(activeStatusFilter, priority);
  }
};

function renderStats(stats) {
  const { total, byStatus, byPriority } = stats;

  // Status cards
  const statusEntries = Object.entries(byStatus).sort((a, b) => b[1] - a[1]);
  const statusCardsHTML = statusEntries.map(([name, count]) => {
    const s = STATUS_STYLES[name] || STATUS_STYLES.default;
    return `<div class="card" style="background:${s.bg};color:${s.text};border-color:${s.border}"
              onclick="_filterStatus('${name.replace(/'/g,"\\'")}', this)">
      <div class="count">${count}</div>
      <div class="label">${name}</div>
    </div>`;
  }).join('');

  // Priority cards
  const priorityEntries = Object.entries(byPriority).sort((a, b) => {
    const order = ['Highest','High','Medium','Low','Lowest'];
    return order.indexOf(a[0]) - order.indexOf(b[0]);
  });
  const priorityCardsHTML = priorityEntries.map(([name, count]) => {
    const p = PRIORITY_STYLES[name] || PRIORITY_STYLES.default;
    return `<div class="p-card" style="background:${p.bg};color:${p.text};border-color:${p.bg}"
              onclick="_filterPriority('${name.replace(/'/g,"\\'")}', this)">
      <div class="icon">${p.icon}</div>
      <div class="pcount">${count}</div>
      <div class="plabel">${name}</div>
    </div>`;
  }).join('');

  document.getElementById('statsContent').innerHTML = `
    <!-- Total -->
    <div class="cards-row">
      <div class="card-total">
        <div class="count">${total}</div>
        <div class="label">Total Issues</div>
      </div>
    </div>

    <!-- By Status -->
    <div class="section-title">By Status</div>
    <div class="cards-row">
      ${statusCardsHTML || '<span style="color:#6B778C;font-size:12px">No data</span>'}
    </div>

    ${priorityEntries.length ? `
    <div class="divider"></div>
    <div class="section-title">By Priority</div>
    <div class="cards-row">
      ${priorityCardsHTML}
    </div>` : ''}
  `;
}

function mount() {
  const style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);
  document.getElementById('app').innerHTML = `
    <div class="stats-page">
      <div id="statsContent"><div class="status-msg">Loading…</div></div>
    </div>`;
}

async function load() {
  try {
    const stats = await invoke('getStats', { richFilterId: FILTER_ID });
    renderStats(stats);
  } catch (err) {
    document.getElementById('statsContent').innerHTML =
      `<div class="status-msg">⚠ Error: ${err.message || JSON.stringify(err)}</div>`;
    console.error('Stats load error:', err);
  }
}

async function init() {
  mount();
  await load();
  setInterval(load, 10000);
}

init();
