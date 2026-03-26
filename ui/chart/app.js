import { invoke } from '@forge/bridge';
import Chart from 'chart.js/auto';

const FILTER_ID = 'default-filter';

const PALETTE = [
  '#0052CC','#00875A','#DE350B','#FF8B00','#6554C0',
  '#00B8D9','#36B37E','#FF5630','#FFAB00','#8777D9',
  '#2684FF','#57ADB4','#FFC400','#998DD9','#4BBBCE',
];
const STATUS_BG = {
  'To Do': '#DFE1E6', 'In Progress': '#0052CC', 'In Review': '#6554C0',
  'Done': '#00875A',  'Blocked': '#DE350B',      'Waiting': '#FF8B00',
};
const PRIORITY_BG = {
  'Highest': '#DE350B', 'High': '#FF5630', 'Medium': '#FF8B00',
  'Low': '#0071CE',     'Lowest': '#2684FF',
};

let chartInstance = null;
let chartType     = 'doughnut';
let groupField    = 'status';
let rawIssues     = [];

const CSS = `
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:13px;color:#172b4d;background:#fff}

/* ── TOOLBAR ── */
.toolbar{background:#fff;border-bottom:2px solid #0052CC;padding:5px 8px;display:flex;flex-wrap:wrap;gap:3px;align-items:center}
.tgroup{display:inline-flex;border:1px solid #DFE1E6;border-radius:3px;overflow:hidden;flex-shrink:0}
.tbtn{padding:3px 9px;background:#fff;border:none;border-right:1px solid #DFE1E6;cursor:pointer;font-size:11px;color:#42526E;font-weight:500;line-height:1.4}
.tgroup>.tbtn:last-child{border-right:none}
.tbtn.active{background:#0052CC;color:#fff}
.tsep{width:1px;height:20px;background:#DFE1E6;margin:0 3px;flex-shrink:0}
.tlabel{font-size:10px;color:#6B778C;font-weight:700;white-space:nowrap;text-transform:uppercase;letter-spacing:.3px;flex-shrink:0}
.tbadge{font-size:11px;background:#DEEBFF;color:#0052CC;padding:1px 8px;border-radius:10px;font-weight:700;white-space:nowrap;flex-shrink:0;margin-left:auto}

/* ── CHART AREA — table layout avoids all flex/height iframe issues ── */
.chart-area{padding:8px 10px}
.chart-layout{border-collapse:collapse;width:100%}
.td-canvas{vertical-align:middle;padding-right:12px;width:1%;white-space:nowrap}
.td-legend{vertical-align:top}

/* ── LEGEND ── */
.leg-title{font-size:10px;font-weight:700;color:#6B778C;text-transform:uppercase;letter-spacing:.5px;margin-bottom:5px}
.leg-row{display:flex;align-items:center;gap:6px;padding:3px 0;border-bottom:1px solid #F4F5F7;font-size:12px}
.leg-row:last-child{border-bottom:none}
.leg-dot{width:10px;height:10px;border-radius:2px;flex-shrink:0}
.leg-name{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.leg-val{font-weight:700;color:#172b4d;white-space:nowrap}
.leg-pct{color:#6B778C;font-size:11px;white-space:nowrap;margin-left:2px}

/* ── EMPTY / ERROR ── */
.status-msg{padding:16px;text-align:center;color:#6B778C;font-size:13px}
`;

function groupData(issues) {
  const result = {};
  issues.forEach(i => {
    let key;
    if (groupField === 'status')    key = i.fields.status?.name          || 'Unknown';
    if (groupField === 'priority')  key = i.fields.priority?.name        || 'Unknown';
    if (groupField === 'assignee')  key = i.fields.assignee?.displayName || 'Unassigned';
    if (groupField === 'issuetype') key = i.fields.issuetype?.name       || 'Unknown';
    result[key] = (result[key] || 0) + 1;
  });
  return result;
}

function getColor(label, idx) {
  if (groupField === 'status'   && STATUS_BG[label])   return STATUS_BG[label];
  if (groupField === 'priority' && PRIORITY_BG[label]) return PRIORITY_BG[label];
  return PALETTE[idx % PALETTE.length];
}

function renderChart() {
  const canvas = document.getElementById('chartCanvas');
  if (!canvas) return;

  const grouped = groupData(rawIssues);
  const labels  = Object.keys(grouped);
  const values  = Object.values(grouped);
  const total   = values.reduce((s, v) => s + v, 0);
  const colors  = labels.map((l, i) => getColor(l, i));

  document.getElementById('totalBadge').textContent = `${total} issue${total !== 1 ? 's' : ''}`;

  if (chartInstance) { chartInstance.destroy(); chartInstance = null; }

  const isBar = chartType === 'bar';
  // Set canvas intrinsic size — Chart.js uses these directly with responsive:false
  canvas.width  = isBar ? 200 : 150;
  canvas.height = isBar ? 125 : 150;

  chartInstance = new Chart(canvas, {
    type: chartType,
    data: {
      labels,
      datasets: [{ data: values, backgroundColor: colors, borderWidth: isBar ? 0 : 2, borderColor: '#fff' }],
    },
    options: {
      responsive: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => {
              const val = isBar ? ctx.parsed.y : ctx.parsed;
              const pct = total ? Math.round((val / total) * 100) : 0;
              return ` ${ctx.label}: ${val} (${pct}%)`;
            },
          },
        },
      },
      ...(isBar ? {
        scales: {
          y: { beginAtZero: true, ticks: { stepSize: 1, precision: 0 } },
          x: { grid: { display: false } },
        },
      } : {}),
    },
  });

  const rows = labels.map((l, i) => {
    const v = values[i];
    const pct = total ? Math.round((v / total) * 100) : 0;
    return `<div class="leg-row">
      <span class="leg-dot" style="background:${colors[i]}"></span>
      <span class="leg-name">${l}</span>
      <span class="leg-val">${v}</span>
      <span class="leg-pct">${pct}%</span>
    </div>`;
  }).join('');
  document.getElementById('legend').innerHTML = rows;
}

function setChartType(type, el) {
  chartType = type;
  document.querySelectorAll('.tbtn-type').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  renderChart();
}

function setGroup(field, el) {
  groupField = field;
  document.querySelectorAll('.tbtn-group').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  renderChart();
}

window._setChartType = setChartType;
window._setGroup     = setGroup;

function mount() {
  const style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  document.getElementById('app').innerHTML = `
    <div class="toolbar">
      <span class="tlabel">Type</span>
      <div class="tgroup">
        <button class="tbtn tbtn-type active" onclick="_setChartType('doughnut',this)">Doughnut</button>
        <button class="tbtn tbtn-type"        onclick="_setChartType('pie',this)">Pie</button>
        <button class="tbtn tbtn-type"        onclick="_setChartType('bar',this)">Bar</button>
      </div>
      <span class="tsep"></span>
      <span class="tlabel">Group</span>
      <div class="tgroup">
        <button class="tbtn tbtn-group active" onclick="_setGroup('status',this)">Status</button>
        <button class="tbtn tbtn-group"        onclick="_setGroup('priority',this)">Priority</button>
        <button class="tbtn tbtn-group"        onclick="_setGroup('assignee',this)">Assignee</button>
        <button class="tbtn tbtn-group"        onclick="_setGroup('issuetype',this)">Type</button>
      </div>
      <span class="tbadge" id="totalBadge">Loading…</span>
    </div>
    <div id="statusMsg" class="status-msg" style="display:none"></div>
    <div class="chart-area" id="chartArea">
      <table class="chart-layout"><tr>
        <td class="td-canvas"><canvas id="chartCanvas" width="150" height="150"></canvas></td>
        <td class="td-legend">
          <div class="leg-title">Breakdown</div>
          <div id="legend"></div>
        </td>
      </tr></table>
    </div>`;
}

async function load() {
  const msg  = document.getElementById('statusMsg');
  const area = document.getElementById('chartArea');
  try {
    const data = await invoke('getIssues', { richFilterId: FILTER_ID });
    rawIssues = data || [];
    if (!rawIssues.length) {
      msg.textContent = '🔍 No issues match the current filter.';
      msg.style.display = 'block'; area.style.display = 'none';
      document.getElementById('totalBadge').textContent = '0 issues';
    } else {
      msg.style.display = 'none'; area.style.display = 'block';
      renderChart();
    }
  } catch (err) {
    msg.textContent = '⚠ Error loading chart: ' + (err.message || JSON.stringify(err));
    msg.style.display = 'block'; area.style.display = 'none';
    console.error('Chart load error:', err);
  }
}

async function init() {
  mount();
  await load();
  setInterval(load, 10000);
}

init();
