/**
 * PlaceholderPage.jsx – Generic placeholder for sidebar-only pages
 * (Trash, Archive, Bulk Ops, Import, Config, Get Started).
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PlaceholderPage({ title, icon, desc }) {
  const navigate = useNavigate();
  return (
    <div className="rf-placeholder">
      <div className="rf-placeholder-inner">
        <div className="rf-placeholder-icon">{icon}</div>
        <h1 className="rf-placeholder-title">{title}</h1>
        <p className="rf-placeholder-desc">{desc}</p>
        <button className="btn btn-d" onClick={() => navigate('/')}>
          ← Back to Rich Filters
        </button>
      </div>
    </div>
  );
}
