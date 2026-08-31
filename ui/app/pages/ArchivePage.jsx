/**
 * ArchivePage.jsx – Shows rich filters that have been archived (long-term storage).
 * Users can restore an archived filter back to active.
 */
import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import { useNavigate } from 'react-router-dom';

function formatDate(iso) {
  if (!iso) return '—';
  try { return new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }); }
  catch { return iso; }
}

export default function ArchivePage() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(null);

  async function load() {
    setLoading(true);
    try {
      const data = await invoke('listArchivedFilters');
      setItems(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error('listArchivedFilters error', e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  async function handleRestore(id, name) {
    if (!window.confirm(`Restore "${name}" to active filters?`)) return;
    setBusy(id);
    try {
      await invoke('restoreFromArchive', { id });
      setItems(prev => prev.filter(f => f.id !== id));
    } finally {
      setBusy(null);
    }
  }

  return (
    <div style={{ padding: '24px', background: '#fff', minHeight: '100%' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
        <span style={{ fontSize: 32 }}>📦</span>
        <div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: '#172b4d' }}>Archive</h1>
          <p style={{ margin: 0, fontSize: 13, color: '#6b778c' }}>
            Long-term storage for rich filters you want to keep but no longer actively use.
          </p>
        </div>
      </div>

      {loading ? (
        <p style={{ color: '#6b778c' }}>Loading…</p>
      ) : items.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 0', color: '#6b778c' }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📦</div>
          <p style={{ fontSize: 16, margin: 0 }}>Archive is empty</p>
          <p style={{ fontSize: 13, marginTop: 4 }}>
            Archived rich filters will appear here. Use the ⋯ menu on any filter to archive it.
          </p>
        </div>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #dfe1e6' }}>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Description</th>
              <th style={thStyle}>Archived on</th>
              <th style={{ ...thStyle, textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map(f => (
              <tr key={f.id} style={{ borderBottom: '1px solid #f0f1f3' }}>
                <td style={tdStyle}><strong>{f.name}</strong></td>
                <td style={{ ...tdStyle, color: '#6b778c' }}>{f.description || '—'}</td>
                <td style={{ ...tdStyle, color: '#6b778c' }}>{formatDate(f.archivedAt)}</td>
                <td style={{ ...tdStyle, textAlign: 'right' }}>
                  <button
                    disabled={busy === f.id}
                    onClick={() => handleRestore(f.id, f.name)}
                    style={restoreBtn}
                  >
                    ↩ Restore
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div style={{ marginTop: 32 }}>
        <button onClick={() => navigate('/')} style={backBtn}>← Back to Rich Filters</button>
      </div>
    </div>
  );
}

const thStyle = { padding: '8px 12px', textAlign: 'left', fontSize: 12, fontWeight: 700, color: '#6b778c', textTransform: 'uppercase', letterSpacing: '.04em' };
const tdStyle = { padding: '10px 12px', fontSize: 14, color: '#172b4d', verticalAlign: 'middle' };
const restoreBtn = { padding: '5px 12px', background: '#0052cc', color: '#fff', border: 'none', borderRadius: 3, fontSize: 13, cursor: 'pointer' };
const backBtn    = { padding: '7px 16px', background: '#f4f5f7', color: '#172b4d', border: '1px solid #dfe1e6', borderRadius: 3, fontSize: 14, cursor: 'pointer' };
