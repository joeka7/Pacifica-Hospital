import { resolveRoute } from './router'

/*
 * Minimal path-based page selection (no router dependency); routes are in
 * src/router.tsx. Production hosting needs an SPA fallback so every route
 * serves index.html; see NOTES.md.
 */
export default function App() {
  return resolveRoute(window.location.pathname)
}
