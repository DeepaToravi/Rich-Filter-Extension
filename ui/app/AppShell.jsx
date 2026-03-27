/**
 * AppShell.jsx – HashRouter wrapper + Layout.
 */
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout.jsx';
import PlaceholderPage from './pages/PlaceholderPage.jsx';
import ContentPage from './pages/ContentPage.jsx';

export default function AppShell() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          {/* Home + create routes both handled by legacy JS */}
          <Route path="/"       element={<ContentPage route="home" />} />
          <Route path="/create" element={<ContentPage route="create" />} />
          <Route path="/edit/:id" element={<ContentPage route="edit" />} />

          {/* Sidebar-only pages */}
          <Route path="/get-started" element={<PlaceholderPage title="Get Started"       icon="🚀" desc="Learn how to create and configure Rich Filters to display your Jira issues exactly how you need." />} />
          <Route path="/trash"       element={<PlaceholderPage title="Trash"             icon="🗑️" desc="Rich filters you delete are moved here. Restore or permanently remove them from this page." />} />
          <Route path="/archive"     element={<PlaceholderPage title="Archive"           icon="📦" desc="Long-term storage for rich filters you want to keep but no longer actively use." />} />
          <Route path="/bulk"        element={<PlaceholderPage title="Bulk Operations"   icon="⚡" desc="Apply actions such as rename, duplicate, export or delete to multiple rich filters at once." />} />
          <Route path="/import"      element={<PlaceholderPage title="Import"            icon="📥" desc="Import rich filters from a JSON export file or migrate from another Jira instance." />} />
          <Route path="/config"      element={<PlaceholderPage title="Config"            icon="⚙️" desc="Global settings for the Rich Filters app — default visibility, permissions and license info." />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
