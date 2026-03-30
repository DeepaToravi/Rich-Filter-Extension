/**
 * BulkOpsPage.jsx – Bulk operations for admin-owned rich filters.
 * Mirrors the marketplace Rich Filters "Bulk Ops" feature:
 *   - Filter source: Active / Archived / Trashed
 *   - Operations: Download usage data, Move to trash, Restore from trash,
 *                 Delete forever, Move to archive, Restore from archive,
 *                 Export to backup
 *   - Table with checkbox selection, star, name, admins, jira filter,
 *     visibility, last used
 */
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { invoke } from '@forge/bridge';
import { useNavigate } from 'react-router-dom';

// ── Constants ──────────────────────────────────────────────────────────────

const OPERATIONS = [
  { value: 'downloadUsageData',  label: 'Download usage data' },
  { value: 'moveToTrash',        label: 'Move to trash' },
  { value: 'restoreFromTrash',   label: 'Restore from trash' },
  { value: 'deleteForever',      label: 'Delete forever',      danger: true },
  { value: 'moveToArchive',      label: 'Move to archive' },
  { value: 'restoreFromArchive', label: 'Restore from archive' },
  { value: 'exportToBackup',     label: 'Export to backup',    beta: true },
];

const SOURCES = [
  { value: 'active',   label: 'Active rich filters',   fn: 'listRichFilters' },
  { value: 'archived', label: 'Archived rich filters',  fn: 'listArchivedFilters' },
  { value: 'trashed',  label: 'Trashed rich filters',   fn: 'listTrashedFilters' },
];

const BULK_INVOKE = {
  moveToTrash:        'bulkMoveToTrash',
  restoreFromTrash:   'bulkRestoreFromTrash',
  deleteForever:      'bulkDeleteForever',
  moveToArchive:      'bulkMoveToArchive',
  restoreFromArchive: 'bulkRestoreFromArchive',
};

// ── Helpers ────────────────────────────────────────────────────────────────

function formatRelativeDate(iso) {
  if (!iso) return '—';
  try {
    const diff = Date.now() - new Date(iso).getTime();
    const days = Math.floor(diff / 86400000);
    if (days === 0) return 'today';
    if (days === 1) return 'yesterday';
    if (days < 7)  return `${days} days ago`;
    return new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  } catch { return '—'; }
}

function triggerDownload(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function initials(name) {
  if (!name) return 'DT';
  return name.split(' ').map(w => w[0] || '').join('').slice(0, 2).toUpperCase();
}

// ── Styles ─────────────────────────────────────────────────────────────────

const thStyle = {
  padding: '10px 14px',
  textAlign: 'left',
  fontSize: 12,
  fontWeight: 600,
  color: '#6b778c',
  borderBottom: '2px solid #dfe1e6',
  background: '#fafbfc',
  whiteSpace: 'nowrap',
};

const tdStyle = {
  padding: '10px 14px',
  fontSize: 14,
  borderBottom: '1px solid #f4f5f7',
  verticalAlign: 'middle',
};

// ── IndeterminateCheckbox ──────────────────────────────────────────────────

function IndeterminateCheckbox({ checked, indeterminate, onChange }) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  return <input ref={ref} type="checkbox" checked={checked} onChange={onChange} style={{ cursor: 'pointer' }} />;
}

// ── Toast ──────────────────────────────────────────────────────────────────

function Toast({ type, msg }) {
  return (
    <div style={{
      position: 'fixed', top: 14, right: 14, zIndex: 1000,
      padding: '11px 16px', borderRadius: 4, fontSize: 14,
      boxShadow: '0 4px 12px rgba(9,30,66,.2)',
      background: type === 'ok' ? '#e3fcef' : '#ffebe6',
      color:      type === 'ok' ? '#006644' : '#bf2600',
      border: `1px solid ${type === 'ok' ? '#abf5d1' : '#ff8f73'}`,
      display: 'flex', alignItems: 'center', gap: 8,
    }}>
      {type === 'ok' ? '✓' : '⚠'} {msg}
    </div>
  );
}

// ── Dropdown ───────────────────────────────────────────────────────────────

function Dropdown({ label, open, onToggle, children, minWidth = 200 }) {
  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={onToggle}
        style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '6px 12px', border: '1.5px solid #dfe1e6', borderRadius: 3,
          background: '#fff', fontSize: 14, cursor: 'pointer',
          minWidth, justifyContent: 'space-between',
        }}
      >
        <span>{label}</span>
        <span style={{ fontSize: 10, color: '#97a0af' }}>▾</span>
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, zIndex: 200,
          background: '#fff', border: '1px solid #dfe1e6', borderRadius: 4,
          boxShadow: '0 4px 16px rgba(9,30,66,.15)', minWidth, marginTop: 2,
        }}>
          {children}
        </div>
      )}
    </div>
  );
}

function DropdownItem({ active, danger, onClick, children, beta }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 8,
        width: '100%', padding: '9px 14px',
        background: active ? '#deebff' : 'none',
        border: 'none', fontSize: 14, cursor: 'pointer',
        textAlign: 'left', color: danger ? '#de350b' : '#172b4d',
      }}
    >
      {children}
      {beta && (
        <span style={{
          fontSize: 10, background: '#dfe1e6', borderRadius: 3,
          padding: '1px 5px', color: '#6b778c', fontWeight: 700,
        }}>
          BETA
        </span>
      )}
    </button>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

export default function BulkOpsPage() {
  const navigate = useNavigate();

  const [source,           setSource]          = useState('active');
  const [items,            setItems]            = useState([]);
  const [loading,          setLoading]          = useState(true);
  const [search,           setSearch]           = useState('');
  const [selected,         setSelected]         = useState(new Set());
  const [operation,        setOperation]        = useState('downloadUsageData');
  const [busy,             setBusy]             = useState(false);
  const [showSourceDrop,   setShowSourceDrop]   = useState(false);
  const [showOpDrop,       setShowOpDrop]       = useState(false);
  const [toast,            setToast]            = useState(null);

  // ── Data loading ──────────────────────────────────────────────────────

  const load = useCallback(async () => {
    setLoading(true);
    setSelected(new Set());
    try {
      const src = SOURCES.find(s => s.value === source);
      const data = await invoke(src.fn);
      setItems(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error('BulkOpsPage load error', e);
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, [source]);

  useEffect(() => { load(); }, [load]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handler = () => { setShowSourceDrop(false); setShowOpDrop(false); };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  // ── Derived state ─────────────────────────────────────────────────────

  const filtered    = search ? items.filter(f => f.name.toLowerCase().includes(search.toLowerCase())) : items;
  const selectedIds = [...selected];
  const allChecked  = filtered.length > 0 && filtered.every(f => selected.has(f.id));
  const someChecked = filtered.some(f => selected.has(f.id));

  const currentSource = SOURCES.find(s => s.value === source);
  const currentOp     = OPERATIONS.find(o => o.value === operation);

  // ── Selection helpers ─────────────────────────────────────────────────

  const toggleAll = () => {
    setSelected(prev => {
      const next = new Set(prev);
      if (allChecked) filtered.forEach(f => next.delete(f.id));
      else            filtered.forEach(f => next.add(f.id));
      return next;
    });
  };

  const toggleOne = (id) => {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  // ── Toast helper ──────────────────────────────────────────────────────

  const showToast = (type, msg) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 3500);
  };

  // ── Apply bulk operation ───────────────────────────────────────────────

  const handleApply = async () => {
    if (selectedIds.length === 0 || busy) return;

    if (operation === 'deleteForever') {
      if (!window.confirm(`Permanently delete ${selectedIds.length} filter(s)? This cannot be undone.`)) return;
    } else if (operation === 'moveToTrash') {
      if (!window.confirm(`Move ${selectedIds.length} filter(s) to trash?`)) return;
    }

    setBusy(true);
    try {
      if (operation === 'downloadUsageData') {
        const csv = await invoke('bulkDownloadUsageData', { ids: selectedIds, source });
        triggerDownload(csv, 'rich-filters-usage.csv', 'text/csv');
        showToast('ok', 'Usage data downloaded');
        return;
      }

      if (operation === 'exportToBackup') {
        const json = await invoke('bulkExportToBackup', { ids: selectedIds, source });
        triggerDownload(json, 'rich-filters-backup.json', 'application/json');
        showToast('ok', 'Backup exported');
        return;
      }

      const fn = BULK_INVOKE[operation];
      if (fn) {
        await invoke(fn, { ids: selectedIds });
        showToast('ok', `Done — ${selectedIds.length} filter(s) updated`);
        load();
      }
    } catch (e) {
      console.error('BulkOpsPage apply error', e);
      showToast('err', 'Operation failed. Please try again.');
    } finally {
      setBusy(false);
    }
  };

  // ── Render ─────────────────────────────────────────────────────────────

  return (
    <div style={{ background: '#fff', minHeight: '100%' }}>
      {toast && <Toast type={toast.type} msg={toast.msg} />}

      {/* ── Page header ── */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid #dfe1e6' }}>
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: '#172b4d' }}>Bulk operations</h1>
      </div>

      {/* ── Operation bar ── */}
      <div style={{ padding: '12px 24px 10px', borderBottom: '1px solid #f0f1f3', background: '#fffbef' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }} onClick={e => e.stopPropagation()}>
          <span style={{ fontSize: 13, fontWeight: 600, color: '#172b4d', minWidth: 110 }}>Bulk operation</span>

          {/* Operation dropdown */}
          <Dropdown
            label={currentOp?.label || 'Select…'}
            open={showOpDrop}
            onToggle={() => { setShowOpDrop(p => !p); setShowSourceDrop(false); }}
            minWidth={220}
          >
            {OPERATIONS.map(op => (
              <DropdownItem
                key={op.value}
                active={op.value === operation}
                danger={op.danger}
                beta={op.beta}
                onClick={() => { setOperation(op.value); setShowOpDrop(false); }}
              >
                {op.label}
              </DropdownItem>
            ))}
          </Dropdown>

          {/* Apply button */}
          <button
            onClick={handleApply}
            disabled={selectedIds.length === 0 || busy}
            style={{
              padding: '6px 16px',
              background: selectedIds.length > 0 && !busy ? '#0052cc' : '#f4f5f7',
              color: selectedIds.length > 0 && !busy ? '#fff' : '#97a0af',
              border: 'none', borderRadius: 3, fontSize: 14, fontWeight: 500,
              cursor: selectedIds.length > 0 && !busy ? 'pointer' : 'not-allowed',
            }}
          >
            {busy ? 'Applying…' : 'Apply'}
          </button>
        </div>

        <p style={{ fontSize: 13, color: '#6b778c', margin: 0 }}>
          Select the rich filters for the bulk operation. Only the rich filters you administer are available.{' '}
          {filtered.length > 0 && (
            <button
              onClick={toggleAll}
              style={{ background: 'none', border: 'none', color: '#0052cc', cursor: 'pointer', fontSize: 13, padding: 0 }}
            >
              {allChecked ? 'Deselect all' : 'Select all'}
            </button>
          )}
        </p>
      </div>

      {/* ── Filter bar ── */}
      <div
        style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 24px', borderBottom: '1px solid #f0f1f3' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Source dropdown */}
        <Dropdown
          label={currentSource?.label}
          open={showSourceDrop}
          onToggle={() => { setShowSourceDrop(p => !p); setShowOpDrop(false); }}
          minWidth={190}
        >
          {SOURCES.map(s => (
            <DropdownItem
              key={s.value}
              active={s.value === source}
              onClick={() => { setSource(s.value); setShowSourceDrop(false); setSearch(''); }}
            >
              {s.label}
            </DropdownItem>
          ))}
        </Dropdown>

        {/* Search */}
        <div style={{ position: 'relative', flex: 1, maxWidth: 300 }}>
          <span style={{ position: 'absolute', left: 9, top: '50%', transform: 'translateY(-50%)', color: '#97a0af', fontSize: 13, pointerEvents: 'none' }}>🔍</span>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search"
            style={{ width: '100%', padding: '6px 10px 6px 28px', border: '1.5px solid #dfe1e6', borderRadius: 3, fontSize: 14, outline: 'none', background: '#fafbfc' }}
          />
        </div>

        {/* Refresh */}
        <button
          onClick={load}
          disabled={loading}
          title="Refresh"
          style={{
            background: 'none', border: '1.5px solid #dfe1e6', borderRadius: 3,
            width: 32, height: 32, cursor: 'pointer', fontSize: 15,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#42526e', opacity: loading ? 0.5 : 1,
          }}
        >
          🔄
        </button>
      </div>

      {/* ── Table ── */}
      {loading ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 80, gap: 12, color: '#6b778c' }}>
          <div style={{ width: 32, height: 32, border: '3px solid #dfe1e6', borderTopColor: '#0052cc', borderRadius: '50%', animation: 'spin .7s linear infinite' }} />
          <span>Loading…</span>
        </div>
      ) : filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 24px', color: '#6b778c' }}>
          <div style={{ fontSize: 44, marginBottom: 10, opacity: 0.3 }}>🔍</div>
          <p style={{ fontSize: 14 }}>
            {items.length === 0
              ? `No ${currentSource?.label.toLowerCase() || 'filters'} found.`
              : 'No filters match your search.'}
          </p>
        </div>
      ) : (
        <div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ ...thStyle, width: 36 }}>
                  <IndeterminateCheckbox
                    checked={allChecked}
                    indeterminate={someChecked && !allChecked}
                    onChange={toggleAll}
                  />
                </th>
                <th style={{ ...thStyle, width: 32 }}>★</th>
                <th style={thStyle}>Name ↕</th>
                <th style={thStyle}>Administrators</th>
                <th style={thStyle}>Jira filter</th>
                <th style={thStyle}>Visibility</th>
                <th style={thStyle}>Last used ⓘ</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(f => (
                <tr
                  key={f.id}
                  style={{ borderBottom: '1px solid #f4f5f7', background: selected.has(f.id) ? '#f0f5ff' : 'transparent' }}
                >
                  <td style={tdStyle}>
                    <input
                      type="checkbox"
                      checked={selected.has(f.id)}
                      onChange={() => toggleOne(f.id)}
                      style={{ cursor: 'pointer' }}
                    />
                  </td>
                  <td style={tdStyle}>
                    <span style={{ color: f.starred ? '#ff8b00' : '#dfe1e6', fontSize: 17, lineHeight: 1 }}>★</span>
                  </td>
                  <td style={tdStyle}>
                    <a href={`#/edit/${f.id}`} style={{ color: '#0052cc', fontWeight: 500 }}>{f.name}</a>
                  </td>
                  <td style={tdStyle}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{
                        width: 24, height: 24, borderRadius: '50%',
                        background: '#0052cc', color: '#fff',
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 10, fontWeight: 700, flexShrink: 0,
                      }}>
                        {initials(f.admins?.[0])}
                      </span>
                      <span style={{ fontSize: 13 }}>{f.admins?.[0] || '—'}</span>
                    </div>
                  </td>
                  <td style={tdStyle}>
                    {f.jiraFilter
                      ? <button style={{ background: 'none', border: 'none', color: '#0052cc', cursor: 'pointer', fontSize: 13, padding: 0 }}>Copy rich filter</button>
                      : <span style={{ color: '#97a0af' }}>—</span>}
                  </td>
                  <td style={tdStyle}>
                    <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 3, fontSize: 11, fontWeight: 700, background: '#dfe1e6', color: '#42526e', letterSpacing: 0.3 }}>
                      {f.visibility || 'PRIVATE'}
                    </span>
                  </td>
                  <td style={{ ...tdStyle, fontSize: 13, color: '#6b778c' }}>
                    {formatRelativeDate(f.lastUsed || f.updatedAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Count row */}
          <div style={{ padding: '8px 24px', fontSize: 13, color: '#6b778c', borderTop: '1px solid #f0f1f3' }}>
            Showing {filtered.length} rich filter{filtered.length !== 1 ? 's' : ''}
            {selected.size > 0 && <span style={{ marginLeft: 8, color: '#0052cc', fontWeight: 600 }}>· {selected.size} selected</span>}
          </div>
        </div>
      )}

      {/* ── Back link ── */}
      <div style={{ padding: '8px 24px 28px' }}>
        <button
          onClick={() => navigate('/')}
          style={{ background: 'none', border: '1.5px solid #dfe1e6', borderRadius: 3, padding: '6px 14px', fontSize: 14, cursor: 'pointer', color: '#42526e' }}
        >
          ← Back to Rich Filters
        </button>
      </div>
    </div>
  );
}
