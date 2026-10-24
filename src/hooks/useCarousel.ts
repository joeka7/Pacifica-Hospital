import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Previous/next paging for a horizontally scrolling list whose items snap
 * to its start edge. Touch and trackpad scrolling stay native; this only
 * tracks whether either end is reached, scrolls one item at a time, and
 * brings an item that receives keyboard focus fully into view.
 * When the list doesn't overflow (wider layouts), both ends read as reached.
 */
export function useCarousel<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(true)

  useEffect(() => {
    const track = ref.current
    if (!track) return

    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const max = track.scrollWidth - track.clientWidth
        setAtStart(track.scrollLeft <= 1)
        setAtEnd(track.scrollLeft >= max - 1)
      })
    }

    // Focus scrolls only as far as needed, which mandatory snapping can undo
    // and leave the focused item cut off at the edge.
    const reveal = (event: FocusEvent) => {
      const item = [...track.children].find((child) => child.contains(event.target as Node))
      if (!item || isFullyVisible(track, item)) return
      track.scrollBy({ left: offsetsFromStart(track)[[...track.children].indexOf(item)], behavior: scrollBehavior() })
    }

    update()
    track.addEventListener('scroll', update, { passive: true })
    track.addEventListener('focusin', reveal)
    const observer = new ResizeObserver(update)
    observer.observe(track)
    return () => {
      cancelAnimationFrame(frame)
      track.removeEventListener('scroll', update)
      track.removeEventListener('focusin', reveal)
      observer.disconnect()
    }
  }, [])

  /** Scrolls the next (1) or previous (-1) item to the start edge. */
  const step = useCallback((direction: 1 | -1) => {
    const track = ref.current
    if (!track) return

    const offsets = offsetsFromStart(track)
    // Next: the first item past the start edge. Previous: the last one before it.
    const target =
      direction === 1 ? offsets.find((offset) => offset > 1) : offsets.findLast((offset) => offset < -1)
    if (target !== undefined) track.scrollBy({ left: target, behavior: scrollBehavior() })
  }, [])

  return { ref, atStart, atEnd, step }
}

/** Each item's distance from the list's snap edge (its start, less scroll padding). */
function offsetsFromStart(track: HTMLElement): number[] {
  const edge = track.getBoundingClientRect().left + (parseFloat(getComputedStyle(track).scrollPaddingLeft) || 0)
  return [...track.children].map((item) => item.getBoundingClientRect().left - edge)
}

function isFullyVisible(track: HTMLElement, item: Element): boolean {
  const outer = track.getBoundingClientRect()
  const inner = item.getBoundingClientRect()
  return inner.left >= outer.left && inner.right <= outer.right
}

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
}
