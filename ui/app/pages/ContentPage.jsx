/**
 * ContentPage.jsx – Bridge between React Router and the legacy vanilla-JS app.
 *
 * React renders this component for every "real" route (home, create, edit/:id).
 * On mount it calls window.__rfGo(route, id) so the legacy app can render the
 * correct view into #content-area without ever being unmounted.
 *
 * The <div id="content-area"> is kept alive across route changes via the
 * `key` trick: we don't key it on the route, so React never destroys the node.
 */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ContentPage({ route }) {
  const { id } = useParams();

  useEffect(() => {
    const go = async () => {
      // On very first call __rfInit is defined; call it and clear it so it
      // only runs once (subsequent route changes skip straight to __rfGo).
      if (typeof window.__rfInit === 'function') {
        await window.__rfInit();
        window.__rfInit = null;
      }
      if (typeof window.__rfGo === 'function') {
        window.__rfGo(route, id);
      }
    };
    go();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route, id]);

  return null;
}
