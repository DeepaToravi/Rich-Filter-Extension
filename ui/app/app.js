import { invoke } from '@forge/bridge';

// CSS is in static/app/style.css, loaded via <link rel="stylesheet"> in index.html

// ─────────────────────────────────────────────────────────────
//  PLACEHOLDER — kept so the array reference removal is clean
// ─────────────────────────────────────────────────────────────
// (CSS removed — served via static/app/style.css)
const _unused = [
  'body,html{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,sans-serif;font-size:14px;color:#172b4d;background:#f4f5f7;min-height:100vh}',
  'a{color:#0052cc;text-decoration:none;cursor:pointer}',
  'a:hover{text-decoration:underline}',
  'button{font-family:inherit;cursor:pointer}',
  'input,textarea,select{font-family:inherit;font-size:14px}',

  // layout
  '#app{min-height:100vh;background:#f4f5f7}',

  // ── page shell
  '.page{min-height:100vh;background:#fff}',
  '.page-inner{padding:0}',

  // ── page header bar (white area with title + actions)
  '.ph{display:flex;align-items:center;padding:16px 24px;border-bottom:1px solid #dfe1e6;background:#fff;gap:12px}',
  '.ph-title{font-size:20px;font-weight:700;color:#172b4d;flex:1}',
  '.ph-sub{font-size:13px;color:#6b778c;margin-top:2px}',

  // ── toolbar row
  '.tb{display:flex;align-items:center;gap:10px;padding:10px 24px;background:#fff;border-bottom:1px solid #f0f1f3}',
  '.tb-search{position:relative;flex:1;max-width:340px}',
  '.tb-search input{width:100%;padding:6px 10px 6px 32px;border:1.5px solid #dfe1e6;border-radius:3px;font-size:14px;outline:none;background:#fafbfc}',
  '.tb-search input:focus{border-color:#4c9aff;background:#fff}',
  '.tb-si{position:absolute;left:9px;top:50%;transform:translateY(-50%);color:#97a0af;pointer-events:none;font-size:13px}',
  '.tb-right{margin-left:auto;display:flex;gap:8px;align-items:center}',

  // ── count bar
  '.cnt{padding:8px 24px;font-size:13px;color:#6b778c;background:#fff;border-bottom:1px solid #f0f1f3}',

  // ── buttons
  '.btn{display:inline-flex;align-items:center;gap:5px;padding:6px 14px;border-radius:3px;font-size:14px;font-weight:500;border:none;cursor:pointer;line-height:1.4;white-space:nowrap;transition:background .12s}',
  '.btn:disabled{opacity:.55;cursor:not-allowed}',
  '.btn-p{background:#0052cc;color:#fff}',
  '.btn-p:not(:disabled):hover{background:#0065ff}',
  '.btn-d{background:#fff;color:#42526e;border:1.5px solid #dfe1e6}',
  '.btn-d:not(:disabled):hover{background:#f4f5f7}',
  '.btn-ic{background:none;border:1.5px solid #dfe1e6;border-radius:3px;width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center;color:#42526e;font-size:15px}',
  '.btn-ic:hover{background:#f4f5f7}',
  '.btn-link{background:none;border:none;padding:0;color:#0052cc;font-size:13px;cursor:pointer}',
  '.btn-link:hover{text-decoration:underline}',
  '.btn-danger{background:#fff;color:#de350b;border:1.5px solid #ff7452;padding:6px 12px}',
  '.btn-danger:hover{background:#ffebe6}',

  // ── table
  '.tbl-wrap{padding:0 0 24px;background:#fff}',
  '.tbl{width:100%;border-collapse:collapse}',
  '.tbl th{padding:10px 14px;text-align:left;font-size:12px;font-weight:600;color:#6b778c;border-bottom:2px solid #dfe1e6;background:#fafbfc;white-space:nowrap}',
  '.tbl td{padding:10px 14px;font-size:14px;border-bottom:1px solid #f4f5f7;vertical-align:middle}',
  '.tbl tbody tr:hover td{background:#f8f9fc}',
  '.tbl .cn{color:#0052cc;font-weight:500;cursor:pointer}',
  '.tbl .cn:hover{text-decoration:underline}',
  '.tbl .cj{font-family:monospace;font-size:12px;color:#6b778c;max-width:240px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',

  // ── badges
  '.bdg{display:inline-block;padding:2px 8px;border-radius:3px;font-size:11px;font-weight:700;letter-spacing:.3px}',
  '.bdg-prv{background:#dfe1e6;color:#42526e}',

  // ── avatar
  '.av{width:24px;height:24px;border-radius:50%;background:#0052cc;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0}',

  // ── star button
  '.star{background:none;border:none;padding:0;font-size:17px;cursor:pointer;color:#ccc;line-height:1}',
  '.star.on{color:#ff8b00}',

  // ── three-dot
  '.dots{background:none;border:none;padding:3px 8px;border-radius:3px;cursor:pointer;font-size:20px;color:#6b778c;line-height:1}',
  '.dots:hover{background:#dfe1e6}',

  // ── empty state
  '.empty{text-align:center;padding:60px 24px;color:#6b778c}',
  '.empty-ico{font-size:44px;margin-bottom:10px;opacity:.3}',
  '.empty p{font-size:14px;margin-bottom:16px}',

  // ── spinner
  '.spin-wrap{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:80px;gap:12px;color:#6b778c;font-size:14px}',
  '.spin{width:32px;height:32px;border:3px solid #dfe1e6;border-top-color:#0052cc;border-radius:50%;animation:spin .7s linear infinite}',
  '@keyframes spin{to{transform:rotate(360deg)}}',

  // ── modal
  '.ov{position:fixed;inset:0;background:rgba(9,30,66,.5);z-index:900;display:flex;align-items:center;justify-content:center;padding:16px}',
  '.mo{background:#fff;border-radius:6px;width:520px;max-width:100%;max-height:90vh;display:flex;flex-direction:column;box-shadow:0 8px 48px rgba(9,30,66,.3)}',
  '.mo-hd{padding:22px 24px 16px;border-bottom:1px solid #f0f1f3;flex-shrink:0}',
  '.mo-hd h2{font-size:20px;font-weight:700;color:#172b4d}',
  '.mo-hd p{font-size:13px;color:#6b778c;margin-top:4px}',
  '.mo-bd{padding:20px 24px;overflow-y:auto;flex:1}',
  '.mo-ft{padding:16px 24px;border-top:1px solid #f0f1f3;display:flex;justify-content:flex-end;gap:10px;flex-shrink:0;background:#fff}',

  // ── forms
  '.fg{margin-bottom:18px}',
  '.fl{display:flex;align-items:center;gap:4px;font-size:12px;font-weight:600;color:#172b4d;margin-bottom:5px}',
  '.req{color:#de350b}',
  '.fi{width:100%;padding:8px 10px;border:2px solid #dfe1e6;border-radius:3px;font-size:14px;outline:none;background:#fafbfc}',
  '.fi:focus{border-color:#4c9aff;background:#fff;box-shadow:0 0 0 2px rgba(76,154,255,.2)}',
  '.fi.inv{border-color:#de350b !important;background:#fff8f7}',
  'textarea.fi{resize:vertical;min-height:80px;line-height:1.5}',
  'select.fi{cursor:pointer;background:#fafbfc;padding-right:24px}',
  '.fh{font-size:12px;color:#6b778c;margin-top:4px;line-height:1.5}',
  '.ferr{font-size:12px;color:#de350b;margin-top:3px;display:none}',
  '.ferr.show{display:block}',

  // ── section card
  '.sc{border:1px solid #dfe1e6;border-radius:4px;margin-bottom:20px;overflow:hidden}',
  '.sc-hd{padding:12px 16px;border-bottom:1px solid #f4f5f7;background:#fafbfc}',
  '.sc-hd h3{font-size:14px;font-weight:700;color:#172b4d}',
  '.sc-bd{padding:16px}',

  // ── section description + action row
  '.st{display:flex;align-items:flex-start;gap:14px;margin-bottom:20px}',
  '.st-d{color:#42526e;font-size:14px;line-height:1.6;flex:1}',

  // ── detail page
  '.det{min-height:100vh;background:#fff}',
  '.bc{padding:12px 24px 0;font-size:13px;color:#6b778c;display:flex;align-items:center;gap:5px}',
  '.dh{display:flex;align-items:center;gap:10px;padding:10px 24px 0}',
  '.dt{font-size:24px;font-weight:700;flex:1;color:#172b4d}',
  '.dm{padding:4px 24px 0;font-size:12px;color:#97a0af}',

  // ── tabs
  '.tn{display:flex;border-bottom:2px solid #dfe1e6;padding:0 24px;margin-top:10px;overflow-x:auto;background:#fff;gap:0;flex-wrap:nowrap}',
  '.ti{padding:10px 16px;cursor:pointer;font-size:13px;color:#42526e;border-bottom:3px solid transparent;margin-bottom:-2px;white-space:nowrap;flex-shrink:0;display:flex;align-items:center;gap:5px}',
  '.ti:hover{color:#172b4d;background:#f4f5f7}',
  '.ti.act{color:#0052cc;border-bottom-color:#0052cc;font-weight:600}',
  '.tb2{padding:28px 24px;max-width:860px}',

  // ── sub-table inside tabs
  '.stbl{width:100%;border-collapse:collapse;border:1px solid #dfe1e6;border-radius:4px;overflow:hidden;margin-bottom:8px}',
  '.stbl th{padding:9px 14px;text-align:left;font-size:12px;font-weight:600;color:#6b778c;background:#fafbfc;border-bottom:1px solid #dfe1e6}',
  '.stbl td{padding:9px 14px;font-size:14px;border-bottom:1px solid #f4f5f7;vertical-align:middle}',
  '.stbl tbody tr:last-child td{border-bottom:none}',
  '.stbl tbody tr:hover td{background:#f8f9fa}',
  '.dh2{color:#c1c7d0;font-size:14px;margin-right:4px}',
  '.rib{background:none;border:none;cursor:pointer;color:#42526e;font-size:14px;padding:3px 5px;border-radius:3px;opacity:.7}',
  '.rib:hover{background:#dfe1e6;opacity:1}',
  '.rib.del:hover{background:#ffebe6;color:#de350b;opacity:1}',

  // ── dynamic filter picker
  '.dfp{width:100%;max-width:440px;padding:8px 10px;border:2px solid #4c9aff;border-radius:3px;font-size:14px;outline:none;background:#fff;cursor:pointer}',
  '.dfp:focus{box-shadow:0 0 0 2px rgba(76,154,255,.2)}',

  // ── views actions
  '.vab{display:flex;gap:10px;margin-top:16px}',
  '.btn-s{background:#fff;color:#0052cc;border:2px solid #0052cc;padding:6px 14px;border-radius:3px;font-size:14px;font-weight:600;cursor:pointer}',
  '.btn-s:hover{background:#deebff}',

  // ── inline EMPTY state (inside tabs)
  '.es{text-align:center;padding:40px 16px;border:1px dashed #dfe1e6;border-radius:4px;background:#fafbfc}',
  '.es-i{font-size:32px;margin-bottom:8px;opacity:.35}',
  '.es p{color:#6b778c;font-size:13px;margin-bottom:14px}',

  // ── jira filter display block
  '.jfd{margin-top:10px;padding:10px 14px;background:#fafbfc;border:1px solid #dfe1e6;border-radius:4px}',
  '.jfd .jl{font-size:12px;font-weight:600;color:#6b778c;margin-bottom:4px}',
  '.jfd code{font-size:12px;color:#172b4d;font-family:monospace}',

  // ── admin picker display
  '.adp{display:inline-flex;align-items:center;gap:8px;padding:7px 10px;border:2px solid #dfe1e6;border-radius:3px;background:#fafbfc;min-width:280px}',
  '.adp-x{color:#97a0af;cursor:pointer;margin-left:auto;font-size:15px}',
  '.adp-arr{color:#97a0af;cursor:pointer;font-size:12px;padding:2px 4px;border:1px solid #dfe1e6;border-radius:2px;background:#fff}',

  // ── alerts
  '.tk-wrap{position:fixed;top:14px;right:14px;z-index:1000;display:flex;flex-direction:column;gap:8px;pointer-events:none}',
  '.tk{padding:11px 16px;border-radius:4px;font-size:14px;box-shadow:0 4px 12px rgba(9,30,66,.2);pointer-events:all;display:flex;align-items:center;gap:8px;min-width:220px;animation:tkin .2s ease}',
  '@keyframes tkin{from{opacity:0;transform:translateX(16px)}to{opacity:1;transform:none}}',
  '.tk-ok{background:#e3fcef;color:#006644;border:1px solid #abf5d1}',
  '.tk-err{background:#ffebe6;color:#bf2600;border:1px solid #ff8f73}',
  '.ia{padding:10px 14px;border-radius:3px;font-size:13px;margin-bottom:14px}',
  '.ia-ok{background:#e3fcef;color:#006644;border:1px solid #abf5d1}',
  '.ia-err{background:#ffebe6;color:#bf2600;border:1px solid #ff8f73}',

  // ── tab actions (save row)
  '.ta{margin-top:24px;padding-top:16px;border-top:1px solid #f0f1f3;display:flex;gap:10px;align-items:center}',

  // ── flex helpers
  '.row{display:flex;align-items:center;gap:8px}',
];

// ─────────────────────────────────────────────────────────────
//  App constants
// ─────────────────────────────────────────────────────────────
const DYNAMIC_FIELDS = [
  'Affects versions','Assignee','CheckedorNot','Comment','Completed date',
  'Components','Contains text','Created','Creator','Due date',
  'Epic link','Epic name','Fix versions','Issue key','Issue type',
  'Labels','Last updated','Linked issues','Priority','Project',
  'Reporter','Resolution','Resolution date','Sprint','Status',
  'Story point estimate','Summary','Time tracking','Voter','Watcher',
];

const TABS = [
  { id:'details',        ico:'🌐', label:'Details' },
  { id:'static',        ico:'≡',  label:'Static filters' },
  { id:'dynamic',       ico:'≡',  label:'Dynamic filters' },
  { id:'smart',         ico:'≡',  label:'Smart filters' },
  { id:'views',         ico:'👁',  label:'Views' },
  { id:'queues',        ico:'📦', label:'Queues' },
  { id:'custom-values', ico:'＋', label:'Custom values' },
  { id:'custom-ratios', ico:'⊗',  label:'Custom ratios' },
  { id:'time-series',   ico:'🕐', label:'Time series' },
  { id:'misc',          ico:'≡',  label:'Misc' },
];

// ─────────────────────────────────────────────────────────────
//  State
// ─────────────────────────────────────────────────────────────
const S = {
  view: 'home',
  richFilters: [],
  filtered: [],
  jiraFilters: [],
  searchQ: '',
  current: null,
  activeTab: 'details',
};

// ─────────────────────────────────────────────────────────────
//  Helpers
// ─────────────────────────────────────────────────────────────
const esc   = s => String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const app   = () => document.getElementById('app');
const q     = sel => document.querySelector(sel);
const qa    = sel => [...document.querySelectorAll(sel)];

function setHTML(html) { app().innerHTML = html; }

function applySearch() {
  const q2 = S.searchQ.toLowerCase();
  S.filtered = q2
    ? S.richFilters.filter(f => f.name.toLowerCase().includes(q2))
    : [...S.richFilters];
}

// ─────────────────────────────────────────────────────────────
//  Toast notifications
// ─────────────────────────────────────────────────────────────
function toast(type, msg) {
  let wrap = document.getElementById('toasts');
  if (!wrap) { wrap = document.createElement('div'); wrap.id = 'toasts'; wrap.className = 'tk-wrap'; document.body.appendChild(wrap); }
  const t = document.createElement('div');
  t.className = 'tk tk-' + type;
  t.innerHTML = (type==='ok' ? '✓ ' : '⚠ ') + esc(msg);
  wrap.appendChild(t);
  setTimeout(() => { t.style.transition = 'opacity .3s'; t.style.opacity = '0'; setTimeout(() => t.remove(), 320); }, 3000);
}

// ─────────────────────────────────────────────────────────────
//  HOME PAGE — list of rich filters
// ─────────────────────────────────────────────────────────────
function renderHome() {
  const rows = S.filtered.length
    ? S.filtered.map(f => `
      <tr>
        <td style="width:28px"><button class="star${f.starred?' on':''}" data-star="${esc(f.id)}">★</button></td>
        <td><a class="cn" data-open="${esc(f.id)}">${esc(f.name)}</a></td>
        <td><div class="row"><span class="av">DT</span><span>${esc((f.admins&&f.admins[0])||'Deepa Toravi')}</span></div></td>
        <td>${f.jiraFilter ? `<a class="cn" style="font-weight:400">${esc(f.jiraFilter.name)}</a>` : '—'}</td>
        <td><span class="bdg bdg-prv">${esc(f.visibility||'PRIVATE')}</span></td>
        <td style="font-size:13px;color:#6b778c">${f.lastUsed||f.updatedAt?'during the last 24h':'—'}</td>
        <td style="width:40px"><button class="dots" data-dots="${esc(f.id)}">···</button></td>
      </tr>`).join('')
    : `<tr><td colspan="7"><div class="empty">
        <div class="empty-ico">🔍</div>
        <p>${S.richFilters.length===0
          ? 'No rich filters yet. Click <strong>Create rich filter</strong> to get started.'
          : 'No rich filters match your search.'}</p>
        ${S.richFilters.length===0 ? '<button class="btn btn-p" id="emptyBtn">Create rich filter</button>' : ''}
      </div></td></tr>`;

  setHTML(`<div class="page">
    <div class="ph">
      <span class="ph-title">Rich filters</span>
      <div class="tb-search">
        <span class="tb-si">🔍</span>
        <input id="srch" placeholder="Search…" autocomplete="off" value="${esc(S.searchQ)}" style="width:100%;padding:6px 10px 6px 28px;border:1.5px solid #dfe1e6;border-radius:3px;font-size:14px;outline:none;background:#fafbfc">
      </div>
      <button class="btn-ic" id="btnRef" title="Refresh" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;background:#fff;border:1.5px solid #dfe1e6;border-radius:3px;color:#42526e;font-size:15px">↺</button>
      <button class="btn btn-p" id="btnCreate">Create rich filter</button>
    </div>
    <div class="cnt">Showing ${S.filtered.length} rich filter${S.filtered.length!==1?'s':''}</div>
    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr>
          <th>★</th><th>Name ↕</th><th>Administrators</th>
          <th>Jira filter</th><th>Visibility</th><th>Last used ↕</th><th></th>
        </tr></thead>
        <tbody id="rfTb">${rows}</tbody>
      </table>
    </div>
  </div>`);

  bindHomeEvents();
}

function bindHomeEvents() {
  q('#btnCreate')?.addEventListener('click', () => showCreateModal());
  q('#emptyBtn')?.addEventListener('click', () => showCreateModal());

  q('#btnRef')?.addEventListener('click', async () => {
    await loadAll();
    renderHome();
  });

  q('#srch')?.addEventListener('input', e => {
    S.searchQ = e.target.value;
    applySearch();
    rebuildTableBody();
  });

  bindTableRows();
}

function rebuildTableBody() {
  const tb = document.getElementById('rfTb');
  if (!tb) return;
  tb.innerHTML = S.filtered.length
    ? S.filtered.map(f => `
      <tr>
        <td style="width:28px"><button class="star${f.starred?' on':''}" data-star="${esc(f.id)}">★</button></td>
        <td><a class="cn" data-open="${esc(f.id)}">${esc(f.name)}</a></td>
        <td><div class="row"><span class="av">DT</span><span>${esc((f.admins&&f.admins[0])||'Deepa Toravi')}</span></div></td>
        <td>${f.jiraFilter ? `<a class="cn" style="font-weight:400">${esc(f.jiraFilter.name)}</a>` : '—'}</td>
        <td><span class="bdg bdg-prv">${esc(f.visibility||'PRIVATE')}</span></td>
        <td style="font-size:13px;color:#6b778c">${f.lastUsed||f.updatedAt?'during the last 24h':'—'}</td>
        <td style="width:40px"><button class="dots" data-dots="${esc(f.id)}">···</button></td>
      </tr>`).join('')
    : `<tr><td colspan="7"><div class="empty"><div class="empty-ico">🔍</div><p>No matches.</p></div></td></tr>`;
  bindTableRows();
  const cnt = q('.cnt');
  if (cnt) cnt.textContent = `Showing ${S.filtered.length} rich filter${S.filtered.length!==1?'s':''}`;
}

function bindTableRows() {
  qa('[data-open]').forEach(el => el.addEventListener('click', () => openFilter(el.dataset.open)));
  qa('[data-star]').forEach(btn => btn.addEventListener('click', e => {
    e.stopPropagation();
    const f = S.richFilters.find(x => x.id === btn.dataset.star);
    if (!f) return;
    f.starred = !f.starred;
    btn.classList.toggle('on', f.starred);
    invoke('updateRichFilter', { id: f.id, updates: { starred: f.starred } }).catch(() => {});
  }));
  qa('[data-dots]').forEach(btn => btn.addEventListener('click', e => {
    e.stopPropagation();
    showCtxMenu(btn.dataset.dots, btn);
  }));
}

// ─────────────────────────────────────────────────────────────
//  CONTEXT MENU (···)
// ─────────────────────────────────────────────────────────────
function showCtxMenu(id, btn) {
  document.querySelectorAll('.ctx').forEach(m => m.remove());
  const menu = document.createElement('div');
  menu.className = 'ctx';
  menu.style.cssText = 'position:fixed;background:#fff;border:1px solid #dfe1e6;border-radius:4px;box-shadow:0 4px 16px rgba(9,30,66,.2);z-index:500;min-width:160px;overflow:hidden';
  menu.innerHTML = '<div class="ctx-i" data-act="edit">Edit</div><div class="ctx-i ctx-del" data-act="del">Delete</div>';
  const r = btn.getBoundingClientRect();
  menu.style.top = (r.bottom + 4) + 'px';
  menu.style.left = Math.max(4, r.right - 164) + 'px';

  const ciStyle = 'padding:9px 16px;cursor:pointer;font-size:14px;color:#172b4d';
  menu.querySelectorAll('.ctx-i').forEach(ci => {
    ci.style.cssText = ciStyle;
    ci.addEventListener('mouseenter', () => ci.style.background = '#f4f5f7');
    ci.addEventListener('mouseleave', () => ci.style.background = '');
  });
  menu.querySelector('.ctx-del').style.color = '#de350b';

  document.body.appendChild(menu);
  menu.querySelector('[data-act="edit"]').onclick = () => { menu.remove(); openFilter(id); };
  menu.querySelector('[data-act="del"]').onclick = async () => {
    menu.remove();
    const f = S.richFilters.find(x => x.id === id);
    if (!f || !confirm('Delete "' + f.name + '"?')) return;
    await invoke('deleteRichFilter', { id }).catch(() => {});
    S.richFilters = S.richFilters.filter(x => x.id !== id);
    applySearch();
    toast('ok', '"' + f.name + '" deleted.');
    if (S.view === 'detail') goHome(); else rebuildTableBody();
  };
  setTimeout(() => document.addEventListener('click', () => menu.remove(), { once: true }), 30);
}

// ─────────────────────────────────────────────────────────────
//  CREATE MODAL — matches marketplace exactly (Name + Jira filter)
// ─────────────────────────────────────────────────────────────
function showCreateModal() {
  closeModals();
  const jfOpts = S.jiraFilters.map(jf =>
    `<option value="${esc(jf.id)}">${esc(jf.name)}</option>`).join('');

  const ov = document.createElement('div');
  ov.className = 'ov';
  ov.id = 'createOv';
  ov.innerHTML = `<div class="mo">
    <div class="mo-hd">
      <h2>Create rich filter</h2>
    </div>
    <div class="mo-bd">
      <div class="fg">
        <label class="fl" for="mCN">Name <span class="req">*</span></label>
        <input class="fi" id="mCN" placeholder="Enter a name for this rich filter" autocomplete="off">
        <div class="ferr" id="mCNErr">Name is required.</div>
      </div>
      <div class="fg">
        <label class="fl" for="mCJF">Jira filter <span class="req">*</span></label>
        <select class="fi" id="mCJF">
          <option value="">Select…</option>
          ${jfOpts}
        </select>
        <div class="ferr" id="mCJFErr">Please select a Jira filter.</div>
        <div class="fh">The Jira filter used as base for this rich filter.</div>
      </div>
      <div id="mCAlert"></div>
    </div>
    <div class="mo-ft">
      <button class="btn btn-d" id="mCCancel">Cancel</button>
      <button class="btn btn-p" id="mCOk">Create</button>
    </div>
  </div>`;

  document.body.appendChild(ov);
  ov.addEventListener('click', e => { if (e.target === ov) closeModals(); });

  const nameEl = document.getElementById('mCN');
  nameEl.focus();

  document.getElementById('mCCancel').onclick = closeModals;
  document.getElementById('mCOk').onclick = async () => {
    const name = (nameEl.value || '').trim();
    const jfId = document.getElementById('mCJF').value;
    let ok = true;
    if (!name) { nameEl.classList.add('inv'); document.getElementById('mCNErr').classList.add('show'); ok = false; }
    else { nameEl.classList.remove('inv'); document.getElementById('mCNErr').classList.remove('show'); }
    if (!jfId) { document.getElementById('mCJF').classList.add('inv'); document.getElementById('mCJFErr').classList.add('show'); ok = false; }
    else { document.getElementById('mCJF').classList.remove('inv'); document.getElementById('mCJFErr').classList.remove('show'); }
    if (!ok) return;

    const btn = document.getElementById('mCOk');
    btn.disabled = true; btn.textContent = 'Creating…';
    const jiraFilter = S.jiraFilters.find(j => j.id === jfId) || null;

    const newF = await invoke('createRichFilter', { name, jiraFilter }).catch(() => null);
    if (newF) {
      S.richFilters.push(newF);
      applySearch();
      closeModals();
      toast('ok', '"' + newF.name + '" created!');
      await openFilter(newF.id);
    } else {
      btn.disabled = false; btn.textContent = 'Create';
      document.getElementById('mCAlert').innerHTML = '<div class="ia ia-err">Failed to create. Please try again.</div>';
    }
  };

  ['mCN', 'mCJF'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', () => {
      document.getElementById(id).classList.remove('inv');
      const err = document.getElementById(id + 'Err');
      if (err) err.classList.remove('show');
    });
  });
}

// ─────────────────────────────────────────────────────────────
//  DETAIL PAGE — config tabs
// ─────────────────────────────────────────────────────────────
function renderDetail() {
  const f = S.current;
  const createdDate = f.createdAt ? new Date(f.createdAt).toLocaleDateString('en-GB', { day:'2-digit', month:'short', year:'numeric' }) : '—';

  setHTML(`<div class="det">
    <div class="bc">
      <a id="backLink">Rich filters</a>
      <span>›</span>
      <span>${esc(f.name)}</span>
    </div>
    <div class="dh">
      <button class="star${f.starred?' on':''}" id="detStar" style="font-size:20px">★</button>
      <span class="dt">${esc(f.name)}</span>
      <button class="btn btn-d" id="btnMore" style="padding:5px 10px;font-size:18px;letter-spacing:2px">···</button>
    </div>
    <div class="dm">Created ${createdDate}</div>
    <nav class="tn" id="tabNav">
      ${TABS.map(t => `<div class="ti${S.activeTab===t.id?' act':''}" data-tab="${t.id}"><span style="font-size:12px;opacity:.75">${t.ico}</span>${t.label}</div>`).join('')}
    </nav>
    <div class="tb2" id="tabBody">${renderTab()}</div>
  </div>`);

  bindDetailEvents();
}

function bindDetailEvents() {
  q('#backLink')?.addEventListener('click', goHome);

  q('#detStar')?.addEventListener('click', () => {
    S.current.starred = !S.current.starred;
    q('#detStar').classList.toggle('on', S.current.starred);
    invoke('updateRichFilter', { id: S.current.id, updates: { starred: S.current.starred } }).catch(() => {});
  });

  q('#btnMore')?.addEventListener('click', e => showCtxMenu(S.current.id, e.currentTarget));

  qa('.ti').forEach(t => t.addEventListener('click', () => {
    S.activeTab = t.dataset.tab;
    qa('.ti').forEach(x => x.classList.toggle('act', x.dataset.tab === S.activeTab));
    document.getElementById('tabBody').innerHTML = renderTab();
    bindTabBody();
  }));

  bindTabBody();
}

// ─────────────────────────────────────────────────────────────
//  TAB renderer
// ─────────────────────────────────────────────────────────────
function renderTab() {
  switch (S.activeTab) {
    case 'details':       return renderDetailsTab();
    case 'static':       return renderStaticTab();
    case 'dynamic':      return renderDynamicTab();
    case 'smart':        return renderSmartTab();
    case 'views':        return renderViewsTab();
    case 'queues':       return renderPlaceholder('Queues', 'Queues allow creating a list-based view of issues matching JQL conditions, for use in the <strong>Rich Filter Results</strong> gadget.');
    case 'custom-values':return renderPlaceholder('Custom values', 'Define custom numeric values for issues to use in calculations and charts.');
    case 'custom-ratios':return renderPlaceholder('Custom ratios', 'Create ratios based on custom values.');
    case 'time-series':  return renderPlaceholder('Time series', 'Track changes in issue metrics over time.');
    case 'misc':         return renderMiscTab();
    default:             return '';
  }
}

// ── DETAILS tab ──────────────────────────────────────────────
function renderDetailsTab() {
  const f = S.current;
  const jfOpts = S.jiraFilters.map(jf =>
    `<option value="${esc(jf.id)}"${f.jiraFilter && f.jiraFilter.id===jf.id?' selected':''}>${esc(jf.name)}</option>`
  ).join('');
  const jqlBlock = f.jiraFilter ? `
    <div class="jfd">
      <div class="jl">JQL:</div>
      <code>${esc(f.jiraFilter.jql||'')}</code>
    </div>
    <div style="margin-top:8px"><button class="btn-link">Open in issue navigator ↗</button></div>` : '';

  return `
    <div id="detAlert"></div>

    <p style="font-size:13px;color:#42526e;margin-bottom:20px;line-height:1.6">
      The rich filter is the object that powers the rich filter gadgets.
    </p>

    <div class="fg" style="max-width:600px">
      <label class="fl" for="dN">Name <span class="req">*</span></label>
      <input class="fi" id="dN" value="${esc(f.name)}">
    </div>

    <div class="fg" style="max-width:600px">
      <label class="fl" for="dD">Description</label>
      <textarea class="fi" id="dD" rows="3">${esc(f.description||'')}</textarea>
    </div>

    <div class="fg" style="max-width:600px">
      <label class="fl">Administrators <span class="req">*</span></label>
      <div class="adp">
        <span class="av">DT</span>
        <span>${esc((f.admins&&f.admins[0])||'Deepa Toravi')}</span>
        <span class="adp-x">×</span>
        <span class="adp-arr">▾</span>
      </div>
      <div class="fh">Users or groups who can edit this rich filter. Jira administrators can edit any rich filter.</div>
    </div>

    <div style="margin-bottom:20px">
      <h3 style="font-size:16px;font-weight:700;margin-bottom:8px;color:#172b4d">Base Jira filter</h3>
      <p style="font-size:13px;color:#42526e;margin-bottom:14px">The Jira filter is the base data source for everything else in the rich filter.</p>
      <div class="fg" style="max-width:600px">
        <label class="fl" for="dJF">Jira filter <span class="req">*</span></label>
        <select class="fi" id="dJF" style="max-width:600px">
          <option value="">Select…</option>
          ${jfOpts}
        </select>
        ${jqlBlock}
      </div>
    </div>

    <div class="ta">
      <button class="btn btn-p" id="btnSaveDet">Save details</button>
    </div>`;
}

// ── STATIC FILTERS tab ───────────────────────────────────────
function renderStaticTab() {
  const items = S.current.staticFilters || [];
  return `
    <div class="st">
      <p class="st-d">Static filters are additional JQL queries which can be applied alongside the dynamic filters in the <strong>Rich Filter Controller</strong> gadget.</p>
      <button class="btn btn-p" id="btnAddSF">Create static filter</button>
    </div>
    ${items.length
      ? `<table class="stbl">
          <thead><tr><th></th><th>Name</th><th style="width:100px"></th></tr></thead>
          <tbody>${items.map((sf,i) => `
            <tr>
              <td style="width:28px"><span class="dh2">⠿</span></td>
              <td style="font-weight:500">${esc(sf.name)}${sf.jql?`<div style="font-family:monospace;font-size:11px;color:#6b778c;margin-top:2px">${esc(sf.jql)}</div>`:''}</td>
              <td style="text-align:right">
                <button class="rib" onclick="PAGE.editSF(${i})" title="Edit">✎</button>
                <button class="rib del" onclick="PAGE.delSF(${i})" title="Delete">×</button>
              </td>
            </tr>`).join('')}
          </tbody>
        </table>`
      : `<div class="es"><div class="es-i">🔘</div><p>No static filters defined.</p><button class="btn btn-p" onclick="PAGE.addSF()">Create static filter</button></div>`
    }`;
}

// ── DYNAMIC FILTERS tab ─────────────────────────────────────
function renderDynamicTab() {
  const df = S.current.dynamicFilters || {};
  const added = Object.keys(df).filter(k => df[k] !== false);
  const available = DYNAMIC_FIELDS.filter(n => !added.includes(n));
  return `
    <p class="st-d" style="margin-bottom:20px">Dynamic filters allow filtering the issues by their field values.</p>
    ${added.length
      ? `<table class="stbl" style="margin-bottom:18px">
          <thead><tr><th></th><th>Field</th><th style="width:40px"></th></tr></thead>
          <tbody>${added.map(k => `
            <tr>
              <td style="width:28px"><span class="dh2">⠿</span></td>
              <td>${esc(k)}</td>
              <td><button class="rib del" onclick="PAGE.delDF('${esc(k)}')" title="Remove">×</button></td>
            </tr>`).join('')}
          </tbody>
        </table>`
      : `<div style="color:#6b778c;font-size:13px;margin-bottom:16px;display:flex;align-items:center;gap:6px"><span style="font-size:16px">⚠</span>No dynamic filters defined.</div>`
    }
    <div class="fg" style="max-width:440px">
      <label class="fl" for="dfp">Pick a field…</label>
      <select class="dfp" id="dfp">
        <option value="">Pick a field to add…</option>
        ${available.map(n => `<option value="${esc(n)}">${esc(n)}</option>`).join('')}
      </select>
    </div>
    <div class="ta">
      <button class="btn btn-p" id="btnSaveDF">Save dynamic filters</button>
    </div>`;
}

// ── SMART FILTERS tab ────────────────────────────────────────
function renderSmartTab() {
  const items = S.current.smartFilters || [];
  return `
    <div class="st">
      <p class="st-d">Smart filters allow you to filter and tag issues with colors and labels using JQL queries.</p>
      <button class="btn btn-p" id="btnAddSmf">Create smart filter</button>
    </div>
    ${items.length
      ? `<table class="stbl">
          <thead><tr><th>Name</th><th>Clauses</th><th style="width:100px"></th></tr></thead>
          <tbody>${items.map((sf,i) => `
            <tr>
              <td style="font-weight:500">${esc(sf.name)}</td>
              <td><span style="display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:3px;font-size:11px;font-weight:700;background:#dfe1e6;color:#42526e">${sf.clauses?sf.clauses.length:1}</span></td>
              <td style="text-align:right">
                <button class="rib" onclick="PAGE.editSmf(${i})" title="Edit">✎</button>
                <button class="rib del" onclick="PAGE.delSmf(${i})" title="Delete">×</button>
              </td>
            </tr>`).join('')}
          </tbody>
        </table>`
      : `<div class="es"><div class="es-i">✨</div><p>No smart filters defined.</p><button class="btn btn-p" onclick="PAGE.addSmf()">Create smart filter</button></div>`
    }`;
}

// ── VIEWS tab ─────────────────────────────────────────────────
function renderViewsTab() {
  const items = S.current.views || [];
  return `
    <div class="st">
      <p class="st-d">Views are collections of columns showing data of your choosing. Displayed by the <strong>Rich Filter Results</strong> gadgets.</p>
      <button class="btn btn-p" id="btnAddView">Create view</button>
    </div>
    ${items.length
      ? `<table class="stbl" style="margin-bottom:16px">
          <thead><tr><th>Name</th><th>Columns</th><th style="width:80px"></th></tr></thead>
          <tbody>${items.map((v,i) => `
            <tr>
              <td style="font-weight:500">${esc(v.name)}</td>
              <td style="color:#6b778c">${v.columns?v.columns.length:0} columns</td>
              <td style="text-align:right"><button class="rib del" onclick="PAGE.delView(${i})">×</button></td>
            </tr>`).join('')}
          </tbody>
        </table>`
      : '<div style="padding:16px 0"></div>'
    }
    <div class="vab">
      <button class="btn-s" id="btnEmptyView">Create empty view</button>
      <button class="btn-s" id="btnExView">Create example view</button>
    </div>`;
}

// ── MISC tab ─────────────────────────────────────────────────
function renderMiscTab() {
  const misc = S.current.misc || {};
  return `
    <div class="fg" style="max-width:480px">
      <label class="fl" for="mTitle">Default gadget title</label>
      <input class="fi" id="mTitle" value="${esc(misc.defaultTitle||S.current.name)}">
      <div class="fh">Shown as the default title in gadget headers.</div>
    </div>
    <div class="fg" style="display:flex;align-items:center;gap:10px">
      <input type="checkbox" id="msBc" style="width:15px;height:15px;accent-color:#0052cc" ${misc.showBreadcrumb?'checked':''}>
      <label for="msBc" style="font-size:14px;cursor:pointer">Show filter breadcrumb in gadgets</label>
    </div>
    <div class="ta">
      <button class="btn btn-p" id="btnSaveMisc">Save</button>
    </div>`;
}

// ── PLACEHOLDER tab ──────────────────────────────────────────
function renderPlaceholder(title, desc) {
  return `
    <div class="st">
      <p class="st-d">${desc}</p>
      <button class="btn btn-p" disabled style="opacity:.4">Create</button>
    </div>
    <div class="es"><div class="es-i">🚧</div><p>${title} — coming soon</p></div>`;
}

// ─────────────────────────────────────────────────────────────
//  TAB BODY EVENTS
// ─────────────────────────────────────────────────────────────
function bindTabBody() {
  // Details
  q('#btnSaveDet')?.addEventListener('click', async () => {
    const name  = (q('#dN')?.value||'').trim();
    const desc  = (q('#dD')?.value||'').trim();
    const jfId  = q('#dJF')?.value;
    if (!name) { toast('err','Name is required.'); return; }
    const btn = q('#btnSaveDet');
    btn.disabled = true; btn.textContent = 'Saving…';
    const jiraFilter = jfId ? (S.jiraFilters.find(j=>j.id===jfId)||S.current.jiraFilter) : null;
    const ok = await doSave({ name, description:desc, jiraFilter });
    btn.disabled = false; btn.textContent = 'Save details';
    if (ok && jiraFilter) { refreshTab(); }
    // update title in header
    const dt = q('.dt');
    if (dt) dt.textContent = name;
  });

  // Dynamic filters
  q('#dfp')?.addEventListener('change', e => {
    const val = e.target.value;
    if (!val) return;
    e.target.value = '';
    S.current.dynamicFilters = S.current.dynamicFilters || {};
    S.current.dynamicFilters[val] = true;
    refreshTab();
  });
  q('#btnSaveDF')?.addEventListener('click', async () => {
    const btn = q('#btnSaveDF');
    btn.disabled=true; btn.textContent='Saving…';
    await doSave({dynamicFilters:S.current.dynamicFilters||{}});
    btn.disabled=false; btn.textContent='Save dynamic filters';
  });

  // Static filters
  q('#btnAddSF')?.addEventListener('click', () => showSFModal());

  // Smart filters
  q('#btnAddSmf')?.addEventListener('click', () => showSmfModal());

  // Views
  q('#btnAddView')?.addEventListener('click', () => showViewModal());
  q('#btnEmptyView')?.addEventListener('click', () => showViewModal());
  q('#btnExView')?.addEventListener('click', () => {
    S.current.views = S.current.views||[];
    S.current.views.push({name:'Example view',columns:['Key','Summary','Status','Priority','Assignee'],showTotals:false,oneLineRows:false});
    doSave({views:S.current.views}); refreshTab();
  });

  // Misc
  q('#btnSaveMisc')?.addEventListener('click', async () => {
    S.current.misc = S.current.misc||{};
    S.current.misc.defaultTitle = q('#mTitle')?.value.trim()||'';
    S.current.misc.showBreadcrumb = !!q('#msBc')?.checked;
    await doSave({misc:S.current.misc});
  });
}

// ─────────────────────────────────────────────────────────────
//  MODALS (Static / Smart / View)
// ─────────────────────────────────────────────────────────────
function closeModals() { document.querySelectorAll('.ov').forEach(o => o.remove()); }

function mkModal(html) {
  closeModals();
  const ov = document.createElement('div');
  ov.className = 'ov';
  ov.innerHTML = `<div class="mo">${html}</div>`;
  document.body.appendChild(ov);
  ov.addEventListener('click', e => { if (e.target === ov) closeModals(); });
  return ov;
}

// Static Filter modal
function showSFModal(idx) {
  const editing = idx != null;
  const sf = editing ? S.current.staticFilters[idx] : {name:'',jql:''};
  mkModal(`
    <div class="mo-hd"><h2>${editing?'Edit static filter':'Create a static filter'}</h2></div>
    <div class="mo-bd">
      <div class="fg">
        <label class="fl" for="mSN">Name <span class="req">*</span></label>
        <input class="fi" id="mSN" value="${esc(sf.name)}" placeholder="e.g. High Priority" autocomplete="off">
        <div class="ferr" id="mSNErr">Name is required.</div>
      </div>
      <div class="fg">
        <label class="fl" for="mSJ">JQL</label>
        <textarea class="fi" id="mSJ" rows="3" placeholder="e.g. priority in (Highest, High) AND statusCategory != Done" style="font-family:monospace;font-size:13px">${esc(sf.jql||'')}</textarea>
        <div class="fh">Leave empty to show all issues.</div>
      </div>
      ${!editing?`<label style="display:flex;align-items:center;gap:8px;font-size:14px;cursor:pointer">
        <input type="checkbox" id="mSA" style="width:14px;height:14px;accent-color:#0052cc">
        Create another
      </label>`:''}
    </div>
    <div class="mo-ft">
      <button class="btn btn-d" id="mSCan">Cancel</button>
      <button class="btn btn-p" id="mSOk">${editing?'Save':'Create'}</button>
    </div>`);

  document.getElementById('mSN').focus();
  document.getElementById('mSCan').onclick = closeModals;
  document.getElementById('mSOk').onclick = () => {
    const name = (document.getElementById('mSN').value||'').trim();
    const jql  = (document.getElementById('mSJ').value||'').trim();
    if (!name) { document.getElementById('mSN').classList.add('inv'); document.getElementById('mSNErr').classList.add('show'); return; }
    S.current.staticFilters = S.current.staticFilters||[];
    if (editing) S.current.staticFilters[idx] = {name,jql};
    else S.current.staticFilters.push({name,jql});
    doSave({staticFilters:S.current.staticFilters});
    const another = !editing && document.getElementById('mSA')?.checked;
    refreshTab(); if(another) showSFModal(); else closeModals();
  };
}

// Smart Filter modal
function showSmfModal(idx) {
  const editing = idx != null;
  const sf = editing ? S.current.smartFilters[idx] : {name:'',jql:'',andOperator:false};
  mkModal(`
    <div class="mo-hd">
      <h2>${editing?'Edit smart filter':'Create a smart filter'}</h2>
    </div>
    <div class="mo-bd">
      <div class="fg">
        <label class="fl" for="mSmN">Name <span class="req">*</span></label>
        <input class="fi" id="mSmN" value="${esc(sf.name)}" autocomplete="off">
        <div class="ferr" id="mSmNErr">Name is required.</div>
      </div>
      <div style="margin-top:4px">
        <label style="display:flex;align-items:flex-start;gap:10px;font-size:14px;cursor:pointer">
          <input type="checkbox" id="mSmAnd" ${sf.andOperator?'checked':''} style="width:15px;height:15px;accent-color:#0052cc;margin-top:2px;flex-shrink:0">
          <div>
            <div style="font-weight:500">Enable AND operator</div>
            <div style="font-size:12px;color:#6b778c;margin-top:3px;line-height:1.4">If enabled, the smart filter will allow the AND operator when used for filtering in the controller.</div>
          </div>
        </label>
      </div>
    </div>
    <div class="mo-ft">
      <button class="btn btn-d" id="mSmCan">Cancel</button>
      <button class="btn btn-p" id="mSmOk">${editing?'Save':'Create'}</button>
    </div>`);

  document.getElementById('mSmN').focus();
  document.getElementById('mSmCan').onclick = closeModals;
  document.getElementById('mSmOk').onclick = () => {
    const name  = (document.getElementById('mSmN').value||'').trim();
    const andOp = !!document.getElementById('mSmAnd').checked;
    if (!name) { document.getElementById('mSmN').classList.add('inv'); document.getElementById('mSmNErr').classList.add('show'); return; }
    S.current.smartFilters = S.current.smartFilters||[];
    const entry = {name, andOperator:andOp, clauses:[]};
    if (editing) Object.assign(S.current.smartFilters[idx], entry); else S.current.smartFilters.push(entry);
    doSave({smartFilters:S.current.smartFilters}); refreshTab(); closeModals();
  };
}

// View modal
function showViewModal() {
  mkModal(`
    <div class="mo-hd">
      <h2>Create a view</h2>
    </div>
    <div class="mo-bd">
      <div class="fg">
        <label class="fl" for="mVN">Name <span class="req">*</span></label>
        <input class="fi" id="mVN" autocomplete="off">
        <div class="ferr" id="mVNErr">Name is required.</div>
      </div>
      <label style="display:flex;align-items:flex-start;gap:10px;font-size:14px;cursor:pointer;margin-bottom:14px">
        <input type="checkbox" id="mVT" style="width:15px;height:15px;accent-color:#0052cc;margin-top:2px;flex-shrink:0">
        <div>
          <div style="font-weight:500">Show totals row</div>
          <div style="font-size:12px;color:#6b778c;margin-top:3px">The view will have an extra row at the bottom showing totals.</div>
        </div>
      </label>
      <label style="display:flex;align-items:flex-start;gap:10px;font-size:14px;cursor:pointer">
        <input type="checkbox" id="mVO" style="width:15px;height:15px;accent-color:#0052cc;margin-top:2px;flex-shrink:0">
        <div>
          <div style="font-weight:500">One-line rows by default</div>
          <div style="font-size:12px;color:#6b778c;margin-top:3px">Display with one line per row by default in <em>Rich Filter Results</em> gadgets.</div>
        </div>
      </label>
    </div>
    <div class="mo-ft">
      <button class="btn btn-d" id="mVCan">Cancel</button>
      <button class="btn btn-p" id="mVOk">Create</button>
    </div>`);

  document.getElementById('mVN').focus();
  document.getElementById('mVCan').onclick = closeModals;
  document.getElementById('mVOk').onclick = () => {
    const name = (document.getElementById('mVN').value||'').trim();
    if (!name) { document.getElementById('mVN').classList.add('inv'); document.getElementById('mVNErr').classList.add('show'); return; }
    S.current.views = S.current.views||[];
    S.current.views.push({name, showTotals:!!document.getElementById('mVT').checked, oneLineRows:!!document.getElementById('mVO').checked, columns:[]});
    doSave({views:S.current.views}); refreshTab(); closeModals();
  };
}

// ─────────────────────────────────────────────────────────────
//  PAGE — inline onclick handlers
// ─────────────────────────────────────────────────────────────
window.PAGE = {
  addSF()     { showSFModal(); },
  editSF(i)   { showSFModal(i); },
  delSF(i)    { S.current.staticFilters.splice(i,1); doSave({staticFilters:S.current.staticFilters}); refreshTab(); },
  addSmf()    { showSmfModal(); },
  editSmf(i)  { showSmfModal(i); },
  delSmf(i)   { S.current.smartFilters.splice(i,1); doSave({smartFilters:S.current.smartFilters}); refreshTab(); },
  delDF(k)    { delete S.current.dynamicFilters[k]; refreshTab(); },
  delView(i)  { S.current.views.splice(i,1); doSave({views:S.current.views}); refreshTab(); },
};

function refreshTab() {
  const tb = document.getElementById('tabBody');
  if (tb) { tb.innerHTML = renderTab(); bindTabBody(); }
}

// ─────────────────────────────────────────────────────────────
//  CORE HELPERS
// ─────────────────────────────────────────────────────────────
async function doSave(updates) {
  try {
    const saved = await invoke('updateRichFilter', { id: S.current.id, updates });
    Object.assign(S.current, updates);
    const idx = S.richFilters.findIndex(f => f.id === S.current.id);
    if (idx !== -1) Object.assign(S.richFilters[idx], updates);
    S.filtered = [...S.richFilters];
    toast('ok', 'Saved!');
    return true;
  } catch {
    toast('err', 'Save failed. Please try again.');
    return false;
  }
}

async function openFilter(id) {
  const f = await invoke('getRichFilter', { id }).catch(() => null);
  if (!f) { toast('err','Failed to load filter.'); return; }
  S.current = JSON.parse(JSON.stringify(f));
  S.current.staticFilters  = S.current.staticFilters  || [];
  S.current.smartFilters   = S.current.smartFilters   || [];
  S.current.dynamicFilters = S.current.dynamicFilters || {};
  S.current.views          = S.current.views          || [];
  S.activeTab = 'details';
  S.view = 'detail';
  renderDetail();
}

function goHome() {
  S.view = 'home';
  S.current = null;
  S.activeTab = 'details';
  applySearch();
  renderHome();
}

// ─────────────────────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────────────────────
async function loadAll() {
  const [filters, jiraFilters] = await Promise.all([
    invoke('listRichFilters').catch(() => []),
    invoke('getJiraFilters').catch(() => []),
  ]);
  S.richFilters  = filters || [];
  S.jiraFilters  = jiraFilters || [];
  applySearch();
}

async function init() {
  setHTML('<div class="spin-wrap"><div class="spin"></div><span>Loading Rich Filters…</span></div>');
  await loadAll();
  renderHome();
}

init();
