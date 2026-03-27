/**
 * Layout.jsx – Flex container: fixed sidebar (left) + scrollable content (right).
 *
 * #content-area is ALWAYS in the DOM so the legacy vanilla-JS app (app.js) can
 * render into it without being destroyed on route transitions.
 *
 * children (ContentPage / PlaceholderPage) is ALWAYS rendered so that
 * ContentPage's useEffect fires even on the home route and calls __rfInit.
 * ContentPage returns null so it produces no visible output.
 */
import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';

const LEGACY_ROUTES = ['/', '/create', '/edit'];

export default function Layout({ children }) {
  const location = useLocation();
  const isLegacyRoute = LEGACY_ROUTES.some(r =>
    r === '/' ? location.pathname === '/' : location.pathname.startsWith(r)
  );

  return (
    <div className="rf-layout">
      <Sidebar />
      <div className="rf-content">
        {/*
          Legacy JS renders here. Visible on home/create/edit, hidden on
          sidebar-only pages (Trash, Archive, etc.).
        */}
        <div
          id="content-area"
          style={{ display: isLegacyRoute ? 'block' : 'none', minHeight: '100%' }}
        />

        {/*
          Always mount children so ContentPage's useEffect runs on every
          route change (including the initial home route). ContentPage itself
          returns null and is invisible. PlaceholderPage is shown only on
          non-legacy routes.
        */}
        {children}
      </div>
    </div>
  );
}
