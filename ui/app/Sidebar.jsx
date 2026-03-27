/**
 * Sidebar.jsx – Left-hand navigation, styled to match the Atlaskit SideNavigation
 * look-and-feel used in the Rich Filters marketplace app.
 *
 * The sidebar is always visible; only the right-side content changes.
 */
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// ── nav items ──────────────────────────────────────────────────────────────
const MAIN_ITEMS = [
  { path: '/',           icon: '🏠', label: 'Home' },
  { path: '/create',     icon: '✚',  label: 'Create Rich Filter', create: true },
  { path: '/get-started',icon: '🚀', label: 'Get Started' },
];

const MANAGE_ITEMS = [
  { path: '/trash',   icon: '🗑️', label: 'Trash' },
  { path: '/archive', icon: '📦', label: 'Archive' },
];

const TOOLS_ITEMS = [
  { path: '/bulk',   icon: '⚡', label: 'Bulk Ops' },
  { path: '/import', icon: '📥', label: 'Import' },
  { path: '/config', icon: '⚙️', label: 'Config' },
];

// ── component ──────────────────────────────────────────────────────────────
function NavItem({ item }) {
  const navigate   = useNavigate();
  const location   = useLocation();
  const currentPath = location.pathname;

  const isActive = item.path === '/'
    ? currentPath === '/' || currentPath.startsWith('/edit')
    : currentPath === item.path;

  return (
    <button
      className={`rf-nav-item${isActive ? ' active' : ''}`}
      onClick={() => navigate(item.path)}
      title={item.label}
    >
      <span className="rf-nav-icon">{item.icon}</span>
      <span className="rf-nav-label">{item.label}</span>
    </button>
  );
}

function NavSection({ title, items }) {
  return (
    <div className="rf-nav-section">
      {title && <div className="rf-nav-section-title">{title}</div>}
      {items.map(item => <NavItem key={item.path} item={item} />)}
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="rf-sidebar">
      {/* ── header / logo ── */}
      <div className="rf-sidebar-header">
        <div className="rf-sidebar-logo">
          <span className="rf-sidebar-logo-icon">⚡</span>
          <span className="rf-sidebar-logo-title">Rich Filters</span>
        </div>
        <div className="rf-sidebar-logo-sub">Administration</div>
      </div>

      {/* ── navigation ── */}
      <nav className="rf-sidebar-nav">
        <NavSection items={MAIN_ITEMS} />
        <NavSection title="Manage" items={MANAGE_ITEMS} />
        <NavSection title="Tools" items={TOOLS_ITEMS} />
      </nav>

      {/* ── footer / version ── */}
      <div className="rf-sidebar-footer">
        <span>Rich Filters</span>
      </div>
    </aside>
  );
}
