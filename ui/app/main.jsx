/**
 * main.jsx – React entry point for the Rich Filters admin app.
 *
 * Architecture:
 *  React owns:  sidebar navigation + layout shell
 *  Legacy JS owns: all content rendered inside #content-area
 *
 * On mount React calls window.__rfInit() which is exported by app.js.
 * When the sidebar route changes React calls window.__rfGo(route, filterId).
 */
// Import the legacy vanilla-JS app so it is bundled and its functions
// (window.__rfInit, window.__rfGo) are defined before React uses them.
import './app.js';
import React from 'react';
import { createRoot } from 'react-dom/client';
import AppShell from './AppShell.jsx';

createRoot(document.getElementById('app')).render(<AppShell />);
