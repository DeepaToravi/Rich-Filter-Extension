/**
 * ConfigPage.jsx – App configuration page matching the marketplace Rich Filters feature.
 *
 * Tab 1 — Permissions:
 *   • Creating rich filters     → "Who can create rich filters"
 *   • Managing rich filters     → "Who can manage all rich filters"
 *   • Bulk operations           → "Who can execute bulk ops"
 *   • Exporting gadget results  → "Who can export results"
 *   Each field is a multi-group tag-picker backed by the Jira groups API.
 *
 * Tab 2 — Delete all app data:
 *   • Warning description + "Delete all app data" danger button
 */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { invoke } from '@forge/bridge';
import { useNavigate } from 'react-router-dom';

// ── Default config ─────────────────────────────────────────────────────────

const DEFAULT_CONFIG = {
  whoCanCreate:   ['All logged-in users'],
  whoCanManage:   ['Jira admins'],
  whoCanBulkOps:  ['Jira admins'],
  whoCanExport:   ['Anyone'],
};

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
      display: 'flex', alignItems: 'center', gap: 8, minWidth: 220,
    }}>
      {type === 'ok' ? '✓' : '⚠'} {msg}
    </div>
  );
}

// ── Tag ────────────────────────────────────────────────────────────────────

function Tag({ label, onRemove }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      background: '#e9f2ff', border: '1px solid #b3d4ff',
      borderRadius: 3, padding: '2px 6px 2px 8px',
      fontSize: 13, color: '#0052cc', fontWeight: 500,
      flexShrink: 0,
    }}>
      <span style={{ fontSize: 13, color: '#0052cc', marginRight: 2 }}>👥</span>
      {label}
      <button
        onClick={onRemove}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: '#5a7fa8', fontSize: 14, lineHeight: 1,
          padding: '0 0 1px 2px', display: 'flex', alignItems: 'center',
        }}
        title={`Remove ${label}`}
      >
        ×
      </button>
    </span>
  );
}

// ── GroupPicker ────────────────────────────────────────────────────────────

function GroupPicker({ value, onChange, id }) {
  const [query,       setQuery]       = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [open,        setOpen]        = useState(false);
  const [loading,     setLoading]     = useState(false);
  const inputRef    = useRef(null);
  const containerRef = useRef(null);
  const debounceRef  = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = e => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Fetch groups from Jira — called on focus (empty query) and on typed input
  const fetchGroups = useCallback(async (q) => {
    setLoading(true);
    try {
      const groups = await invoke('searchJiraGroups', { query: q });
      const selectedSet = new Set(value.map(v => v.toLowerCase()));
      setSuggestions((groups || []).filter(g => !selectedSet.has(g.toLowerCase())));
      setOpen(true);
    } catch {
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  // Debounced search on typed query
  useEffect(() => {
    clearTimeout(debounceRef.current);
    // Only debounce when the user has typed something; on empty query we rely on onFocus
    if (!query.trim()) return;
    debounceRef.current = setTimeout(() => fetchGroups(query.trim()), 300);
    return () => clearTimeout(debounceRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const addGroup = (g) => {
    if (!value.includes(g)) onChange([...value, g]);
    setQuery('');
    setSuggestions([]);
    setOpen(false);
    inputRef.current?.focus();
  };

  const removeGroup = (g) => onChange(value.filter(v => v !== g));
  const clearAll    = () => onChange([]);

  const handleKeyDown = e => {
    if (e.key === 'Enter' && query.trim()) {
      // Allow free-text entry even without API match
      addGroup(query.trim());
    }
    if (e.key === 'Backspace' && !query && value.length > 0) {
      removeGroup(value[value.length - 1]);
    }
    if (e.key === 'Escape') { setOpen(false); }
  };

  return (
    <div ref={containerRef} style={{ position: 'relative', flex: 1 }}>
      {/* Input box */}
      <div
        onClick={() => inputRef.current?.focus()}
        style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 5,
          padding: '5px 36px 5px 8px', position: 'relative',
          border: '1.5px solid #dfe1e6', borderRadius: 3,
          background: '#fff', minHeight: 38, cursor: 'text',
        }}
      >
        {value.map(g => (
          <Tag key={g} label={g} onRemove={() => removeGroup(g)} />
        ))}
        <input
          ref={inputRef}
          id={id}
          value={query}
          onChange={e => {
            const v = e.target.value;
            setQuery(v);
            // When the user clears the typed text, re-show the full group list
            if (!v.trim()) fetchGroups('');
          }}
          onKeyDown={handleKeyDown}
          onFocus={() => fetchGroups(query.trim())}
          placeholder={value.length === 0 ? 'Select groups…' : ''}
          style={{
            border: 'none', outline: 'none', fontSize: 13,
            flex: 1, minWidth: 80, background: 'transparent',
            padding: '2px 0',
          }}
        />
        {/* Clear all + dropdown arrow */}
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, display: 'flex', alignItems: 'center', gap: 2, paddingRight: 6 }}>
          {value.length > 0 && (
            <button
              onClick={e => { e.stopPropagation(); clearAll(); }}
              title="Clear selection"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#97a0af', fontSize: 16, lineHeight: 1, padding: '0 2px' }}
            >
              ×
            </button>
          )}
          <span style={{ color: '#97a0af', fontSize: 10 }}>▾</span>
        </div>
      </div>

      {/* Suggestions dropdown */}
      {open && (loading || suggestions.length > 0) && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 300,
          background: '#fff', border: '1px solid #dfe1e6', borderRadius: 4,
          boxShadow: '0 4px 16px rgba(9,30,66,.15)', marginTop: 2,
          maxHeight: 240, overflowY: 'auto',
        }}>
          {loading && <div style={{ padding: '10px 14px', fontSize: 13, color: '#6b778c' }}>Searching…</div>}
          {!loading && suggestions.map(g => (
            <button
              key={g}
              onMouseDown={e => { e.preventDefault(); addGroup(g); }}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                width: '100%', padding: '9px 14px',
                background: 'none', border: 'none',
                fontSize: 13, cursor: 'pointer', textAlign: 'left', color: '#172b4d',
              }}
            >
              <span style={{ fontSize: 13 }}>👥</span>
              {g}
              <span style={{ fontSize: 11, color: '#97a0af', marginLeft: 4 }}>(group)</span>
            </button>
          ))}
          {!loading && suggestions.length === 0 && query && (
            <div style={{ padding: '9px 14px', fontSize: 13, color: '#6b778c' }}>
              No groups found. Press Enter to add "{query}" as a custom group.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── PermissionSection ──────────────────────────────────────────────────────

function PermissionSection({ title, description, fieldLabel, helpText, value, onChange, fieldId }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ fontSize: 16, fontWeight: 700, color: '#172b4d', marginBottom: 8 }}>{title}</h2>
      {description && (
        <p style={{ fontSize: 13, color: '#42526e', marginBottom: 14, lineHeight: 1.6 }}>
          {description}
        </p>
      )}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
        <label
          htmlFor={fieldId}
          style={{ fontSize: 13, color: '#172b4d', fontWeight: 500, minWidth: 180, paddingTop: 10 }}
        >
          {fieldLabel}
        </label>
        <div style={{ flex: 1 }}>
          <GroupPicker id={fieldId} value={value} onChange={onChange} />
          {helpText && <p style={{ fontSize: 12, color: '#6b778c', marginTop: 5 }}>{helpText}</p>}
        </div>
      </div>
    </div>
  );
}

// ── PermissionsTab ─────────────────────────────────────────────────────────

function PermissionsTab({ config, onChange, onSave, saving }) {
  return (
    <div style={{ padding: '24px 28px', maxWidth: 860 }}>

      <PermissionSection
        title="Creating rich filters"
        description="Here you can choose which logged-in users are allowed to create new rich filters (to modify who is allowed to edit an existing rich filter, use the Administrators setting on the rich filter's Details configuration screen)."
        fieldLabel="Who can create rich filters:"
        helpText="Select one or several groups. Clear the selection to allow all logged-in users to create rich filters."
        value={config.whoCanCreate}
        onChange={v => onChange('whoCanCreate', v)}
        fieldId="whoCanCreate"
      />

      <PermissionSection
        title="Managing rich filters"
        description="Here you can choose which logged-in users are implicit administrators of all the rich filter objects. Implicit administrators can edit or delete any rich filter, even if they are not explicitly selected as administrators of the rich filter."
        fieldLabel="Who can manage all rich filters:"
        helpText="Select one or several groups, in addition to Jira admins. Clear the selection to allow only Jira admins to manage all the rich filters (this is the default)."
        value={config.whoCanManage}
        onChange={v => onChange('whoCanManage', v)}
        fieldId="whoCanManage"
      />

      <PermissionSection
        title="Bulk operations on rich filters"
        description="Here you can choose which logged-in users are allowed to perform bulk operations on rich filters. Authorized users can only perform bulk operations on the rich filters for which they have the admin permission."
        fieldLabel="Who can execute bulk ops:"
        helpText="Select one or several groups, in addition to Jira admins. Clear the selection to allow only Jira admins to execute bulk operations on rich filters (this is the default)."
        value={config.whoCanBulkOps}
        onChange={v => onChange('whoCanBulkOps', v)}
        fieldId="whoCanBulkOps"
      />

      <PermissionSection
        title="Exporting rich filter gadget results"
        description="Here you can choose which users are allowed to export results displayed by rich filter gadgets (applies to all export types — PDF, Excel, CSV). Authorized users can only export results they have access to, i.e. results they can actually see in dashboards. If Anyone is selected, this also applies to non-logged-in (anonymous) users, who will be able to see and export only public issues."
        fieldLabel="Who can export results:"
        helpText="Select one or several groups. Clear the selection to allow anyone to export results."
        value={config.whoCanExport}
        onChange={v => onChange('whoCanExport', v)}
        fieldId="whoCanExport"
      />

      <div style={{ borderTop: '1px solid #f0f1f3', paddingTop: 20, display: 'flex', gap: 10 }}>
        <button
          onClick={onSave}
          disabled={saving}
          style={{
            padding: '7px 18px', background: saving ? '#f4f5f7' : '#0052cc',
            color: saving ? '#97a0af' : '#fff', border: 'none', borderRadius: 3,
            fontSize: 14, fontWeight: 500, cursor: saving ? 'not-allowed' : 'pointer',
          }}
        >
          {saving ? 'Saving…' : 'Save'}
        </button>
      </div>
    </div>
  );
}

// ── DeleteAllAppDataTab ────────────────────────────────────────────────────

function DeleteAllAppDataTab({ onDelete, deleting }) {
  return (
    <div style={{ padding: '24px 28px', maxWidth: 760 }}>
      <p style={{ fontSize: 14, color: '#172b4d', lineHeight: 1.7, marginBottom: 14 }}>
        On this screen you can initiate the{' '}
        <strong>permanent deletion of all your data</strong> in the{' '}
        <em>Rich Filters for Jira Dashboards</em> app for this Jira instance. This covers
        the rich filter objects and the permissions configured in the app. Dashboards and
        gadgets that use rich filters are not stored in the app but directly in Jira, so
        they will not be deleted by this operation. These gadgets will however stop working,
        since the rich filters they rely on will no longer exist.
      </p>
      <p style={{ fontSize: 14, color: '#172b4d', lineHeight: 1.7, marginBottom: 14 }}>
        For security reasons, the data will not be deleted immediately but only after a
        one-week delay. During this time the deletion can be aborted on this page by any
        Jira admin.
      </p>
      <p style={{ fontSize: 14, color: '#172b4d', lineHeight: 1.7, marginBottom: 14 }}>
        The app cannot be used while the deletion is pending. It becomes usable again after
        the deletion is completed or aborted.
      </p>
      <p style={{ fontSize: 14, color: '#172b4d', lineHeight: 1.7, marginBottom: 24 }}>
        The data deletion does not uninstall the app. You can uninstall the app at any time.
        An initiated deletion will be completed even if you uninstall the app while the
        deletion is pending.
      </p>

      {/* Warning callout */}
      <div style={{
        display: 'flex', alignItems: 'flex-start', gap: 10,
        padding: '12px 16px', background: '#fffbeb',
        border: '1px solid #ffe58f', borderRadius: 4, marginBottom: 24,
      }}>
        <span style={{ fontSize: 18, flexShrink: 0 }}>⚠️</span>
        <p style={{ margin: 0, fontSize: 14, color: '#7d5f00', lineHeight: 1.6 }}>
          Once the deletion is completed, it will be impossible to recover the data.
        </p>
      </div>

      <button
        onClick={onDelete}
        disabled={deleting}
        style={{
          padding: '8px 20px',
          background: deleting ? '#f4f5f7' : '#ffc400',
          color: deleting ? '#97a0af' : '#172b4d',
          border: 'none', borderRadius: 3, fontSize: 14, fontWeight: 600,
          cursor: deleting ? 'not-allowed' : 'pointer',
          boxShadow: deleting ? 'none' : '0 1px 3px rgba(0,0,0,.15)',
        }}
      >
        {deleting ? 'Deleting…' : 'Delete all app data'}
      </button>
    </div>
  );
}

// ── Main ConfigPage ────────────────────────────────────────────────────────

const TABS = [
  { id: 'permissions',   label: 'Permissions' },
  { id: 'deleteAppData', label: 'Delete all app data' },
];

export default function ConfigPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('permissions');
  const [config,    setConfig]    = useState(DEFAULT_CONFIG);
  const [loading,   setLoading]   = useState(true);
  const [saving,    setSaving]    = useState(false);
  const [deleting,  setDeleting]  = useState(false);
  const [toast,     setToast]     = useState(null);

  const showToast = (type, msg) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 4000);
  };

  // Load saved config on mount
  useEffect(() => {
    invoke('getAppConfig')
      .then(saved => { if (saved) setConfig({ ...DEFAULT_CONFIG, ...saved }); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handleConfigChange = useCallback((field, value) => {
    setConfig(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      await invoke('saveAppConfig', { config });
      showToast('ok', 'Configuration saved');
    } catch (e) {
      console.error('ConfigPage save error', e);
      showToast('err', 'Failed to save. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteAll = async () => {
    if (!window.confirm(
      'Are you sure you want to permanently delete ALL app data?\n\n' +
      'This includes all rich filters, archived filters, trashed filters, and settings.\n\n' +
      'This action cannot be undone.'
    )) return;

    setDeleting(true);
    try {
      await invoke('deleteAllAppData');
      showToast('ok', 'All app data has been deleted');
      setConfig(DEFAULT_CONFIG);
    } catch (e) {
      console.error('ConfigPage deleteAll error', e);
      showToast('err', 'Deletion failed. Please try again.');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div style={{ background: '#fff', minHeight: '100%' }}>
      {toast && <Toast type={toast.type} msg={toast.msg} />}

      {/* ── Page header ── */}
      <div style={{ padding: '16px 24px', borderBottom: '1px solid #dfe1e6' }}>
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: '#172b4d' }}>App configuration</h1>
      </div>

      {/* ── Tabs ── */}
      <div style={{ display: 'flex', borderBottom: '2px solid #dfe1e6', padding: '0 24px', background: '#fff' }}>
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '10px 16px', background: 'none', border: 'none',
              borderBottom: `3px solid ${activeTab === tab.id ? '#0052cc' : 'transparent'}`,
              marginBottom: -2, cursor: 'pointer', fontSize: 14,
              color: activeTab === tab.id ? '#0052cc' : '#42526e',
              fontWeight: activeTab === tab.id ? 600 : 400,
              whiteSpace: 'nowrap',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── Tab content ── */}
      {loading ? (
        <div style={{ padding: 60, textAlign: 'center', color: '#6b778c' }}>Loading…</div>
      ) : activeTab === 'permissions' ? (
        <PermissionsTab
          config={config}
          onChange={handleConfigChange}
          onSave={handleSave}
          saving={saving}
        />
      ) : (
        <DeleteAllAppDataTab onDelete={handleDeleteAll} deleting={deleting} />
      )}

      {/* ── Back link ── */}
      <div style={{ padding: '0 28px 28px' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            background: 'none', border: '1.5px solid #dfe1e6', borderRadius: 3,
            padding: '6px 14px', fontSize: 14, cursor: 'pointer', color: '#42526e',
          }}
        >
          ← Back to Rich Filters
        </button>
      </div>
    </div>
  );
}
