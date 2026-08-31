/**
 * AppShell.jsx – HashRouter wrapper + Layout.
 */
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout.jsx';
import PlaceholderPage from './pages/PlaceholderPage.jsx';
import ContentPage from './pages/ContentPage.jsx';
import TrashPage from './pages/TrashPage.jsx';
import ArchivePage from './pages/ArchivePage.jsx';
import BulkOpsPage from './pages/BulkOpsPage.jsx';
import ImportPage from './pages/ImportPage.jsx';
import ConfigPage from './pages/ConfigPage.jsx';

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
          <Route path="/trash"       element={<TrashPage />} />
          <Route path="/archive"     element={<ArchivePage />} />
          <Route path="/bulk"        element={<BulkOpsPage />} />
          <Route path="/import"      element={<ImportPage />} />
          <Route path="/config"      element={<ConfigPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
