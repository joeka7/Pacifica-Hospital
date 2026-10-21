import { useEffect } from 'react'

/**
 * Scrolls to the element named in the URL hash after the first render.
 * Pages render client-side, so the browser's own jump to #id on load
 * happens before the target exists.
 */
export function useHashScroll() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])
}
