/**
 * ImportPage.jsx – Import rich filters from a JSON backup file.
 *
 * Matches the marketplace Rich Filters "Import from backup" feature:
 *  - Import type: "Create with new IDs" | "Restore as exported"  (both BETA)
 *  - Drag-and-drop or click-to-browse file zone
 *  - Parses the JSON backup produced by bulkExportToBackup
 *  - Sends the payload to the backend resolver `importFromBackup`
 */
import React, { useCallback, useRef, useState } from 'react';
import { invoke } from '@forge/bridge';
import { useNavigate } from 'react-router-dom';

// ── Constants ──────────────────────────────────────────────────────────────

const IMPORT_TYPES = [
  { value: 'newIds',      label: 'Create with new IDs',  beta: true },
  { value: 'asExported',  label: 'Restore as exported',   beta: true },
];

// ── Small helpers ──────────────────────────────────────────────────────────

function Badge({ text }) {
  return (
    <span style={{
      fontSize: 10, background: '#dfe1e6', borderRadius: 3,
      padding: '1px 5px', color: '#6b778c', fontWeight: 700,
      marginLeft: 6, verticalAlign: 'middle',
    }}>
      {text}
    </span>
  );
}

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

// ── Dropdown ───────────────────────────────────────────────────────────────

function Dropdown({ options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const selected = options.find(o => o.value === value) || options[0];

  return (
    <div style={{ position: 'relative' }} onClick={e => e.stopPropagation()}>
      <button
        onClick={() => setOpen(p => !p)}
        style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '6px 12px', border: '1.5px solid #dfe1e6', borderRadius: 3,
          background: '#fff', fontSize: 14, cursor: 'pointer',
          minWidth: 220, justifyContent: 'space-between',
        }}
      >
        <span>
          {selected.label}
          {selected.beta && <Badge text="BETA" />}
        </span>
        <span style={{ fontSize: 10, color: '#97a0af' }}>▾</span>
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, zIndex: 200,
          background: '#fff', border: '1px solid #dfe1e6', borderRadius: 4,
          boxShadow: '0 4px 16px rgba(9,30,66,.15)', minWidth: 220, marginTop: 2,
        }}>
          {options.map(opt => (
            <button
              key={opt.value}
              onClick={() => { onChange(opt.value); setOpen(false); }}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                width: '100%', padding: '9px 14px',
                background: opt.value === value ? '#deebff' : 'none',
                border: 'none', fontSize: 14, cursor: 'pointer',
                textAlign: 'left', color: '#172b4d',
              }}
            >
              {opt.label}
              {opt.beta && <Badge text="BETA" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── FileDropZone ───────────────────────────────────────────────────────────

function FileDropZone({ file, onFile }) {
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  const handleDrop = useCallback(e => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) onFile(f);
  }, [onFile]);

  const handleDragOver = e => { e.preventDefault(); setDragging(true); };
  const handleDragLeave = () => setDragging(false);

  const handleFileInput = e => {
    const f = e.target.files[0];
    if (f) onFile(f);
    // Reset so the same file can be re-selected
    e.target.value = '';
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={() => inputRef.current?.click()}
      style={{
        border: `2px dashed ${dragging ? '#0052cc' : '#b3c7e6'}`,
        borderRadius: 6,
        background: dragging ? '#f0f5ff' : '#f0f5ff',
        padding: '60px 24px',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'border-color 0.15s, background 0.15s',
        minHeight: 140,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
      }}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".json,application/json"
        style={{ display: 'none' }}
        onChange={handleFileInput}
      />
      {file ? (
        <>
          <span style={{ fontSize: 28 }}>📄</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#172b4d' }}>{file.name}</span>
          <span style={{ fontSize: 12, color: '#6b778c' }}>
            {(file.size / 1024).toFixed(1)} KB · click to replace
          </span>
        </>
      ) : (
        <span style={{ fontSize: 14, color: '#6b778c' }}>
          Drop a backup file here, or <span style={{ color: '#0052cc', textDecoration: 'underline' }}>click to browse</span> and select it.
        </span>
      )}
    </div>
  );
}

// ── Results summary ────────────────────────────────────────────────────────

function ResultsSummary({ result }) {
  if (!result) return null;
  return (
    <div style={{
      marginTop: 20, padding: '14px 16px', borderRadius: 4,
      background: result.errors?.length ? '#fffbeb' : '#e3fcef',
      border: `1px solid ${result.errors?.length ? '#ffe58f' : '#abf5d1'}`,
      fontSize: 13,
    }}>
      <p style={{ fontWeight: 600, color: '#172b4d', marginBottom: 6 }}>
        Import complete: {result.imported} filter{result.imported !== 1 ? 's' : ''} imported
        {result.skipped > 0 && `, ${result.skipped} skipped`}
      </p>
      {result.errors?.length > 0 && (
        <ul style={{ margin: 0, paddingLeft: 18, color: '#6b778c' }}>
          {result.errors.map((e, i) => <li key={i}>{e}</li>)}
        </ul>
      )}
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

export default function ImportPage() {
  const navigate   = useNavigate();
  const [importType, setImportType] = useState('newIds');
  const [file,       setFile]       = useState(null);
  const [busy,       setBusy]       = useState(false);
  const [toast,      setToast]      = useState(null);
  const [result,     setResult]     = useState(null);

  // Close any dropdown on body click
  const showToast = (type, msg) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 4000);
  };

  const handleApply = async () => {
    if (!file || busy) return;

    setBusy(true);
    setResult(null);
    try {
      const text = await file.text();
      let parsed;
      try {
        parsed = JSON.parse(text);
      } catch {
        showToast('err', 'Invalid JSON file. Please select a valid backup file.');
        return;
      }

      // Support both { filters: [...] } envelope and bare array
      const filters = Array.isArray(parsed)
        ? parsed
        : Array.isArray(parsed?.filters)
          ? parsed.filters
          : null;

      if (!filters) {
        showToast('err', 'Unrecognised backup format. Expected a file exported via "Export to backup".');
        return;
      }

      const res = await invoke('importFromBackup', { filters, importType });
      setResult(res);
      showToast('ok', `Imported ${res.imported} filter${res.imported !== 1 ? 's' : ''} successfully`);
      setFile(null);
    } catch (e) {
      console.error('ImportPage apply error', e);
      showToast('err', 'Import failed. Please try again.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div style={{ background: '#fff', minHeight: '100%' }} onClick={() => {}}>
      {toast && <Toast type={toast.type} msg={toast.msg} />}

      {/* ── Page header ── */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid #dfe1e6' }}>
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: '#172b4d' }}>Import from backup</h1>
      </div>

      {/* ── Operation bar ── */}
      <div style={{ padding: '12px 24px 12px', borderBottom: '1px solid #f0f1f3', background: '#fffbef' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: '#172b4d', minWidth: 90 }}>Import type</span>
          <Dropdown options={IMPORT_TYPES} value={importType} onChange={setImportType} />
          <button
            onClick={handleApply}
            disabled={!file || busy}
            style={{
              padding: '6px 16px',
              background: file && !busy ? '#0052cc' : '#f4f5f7',
              color: file && !busy ? '#fff' : '#97a0af',
              border: 'none', borderRadius: 3, fontSize: 14, fontWeight: 500,
              cursor: file && !busy ? 'pointer' : 'not-allowed',
            }}
          >
            {busy ? 'Importing…' : 'Apply'}
          </button>
        </div>

        <p style={{ fontSize: 13, color: '#6b778c', margin: 0 }}>
          Choose a backup file to import. You can create backups using the{' '}
          <button
            onClick={() => navigate('/bulk')}
            style={{ background: 'none', border: 'none', color: '#0052cc', cursor: 'pointer', fontSize: 13, padding: 0, fontWeight: 600 }}
          >
            Export to backup
          </button>{' '}
          bulk operation.
        </p>
      </div>

      {/* ── File drop zone ── */}
      <div style={{ padding: '24px' }}>
        <FileDropZone file={file} onFile={setFile} />
        <ResultsSummary result={result} />
      </div>

      {/* ── Back link ── */}
      <div style={{ padding: '0 24px 28px' }}>
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
