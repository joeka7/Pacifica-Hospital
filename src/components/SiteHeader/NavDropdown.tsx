import { useEffect, useId, useRef, useState, type KeyboardEvent, type MouseEvent, type PointerEvent } from 'react'
import { navGroupHrefs, type NavGroup } from '../../content/navigation'
import { navCurrent, navGroupCurrent } from '../../utils/navCurrent'
import { ChevronIcon } from '../ChevronIcon/ChevronIcon'
import { TextLink } from '../TextLink/TextLink'
import styles from './MainNav.module.css'

interface NavDropdownProps {
  group: NavGroup
  currentPath?: string
}

/** Delay before a hover-opened menu closes, so a pointer that strays briefly doesn't shut it. */
const CLOSE_DELAY = 150

/**
 * Desktop main-nav item that discloses a short list of links. The trigger is
 * a button, not a link: it opens on hover, and on click, tap or Enter/Space;
 * Escape, a press outside or moving focus away closes it. Arrow keys move
 * between the links. Follows the WAI-ARIA disclosure navigation pattern, so
 * the links stay plain links (no menu roles).
 */
export function NavDropdown({ group, currentPath }: NavDropdownProps) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLLIElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const closeTimer = useRef<number | undefined>(undefined)
  const pressPointer = useRef('')
  const focusOnOpen = useRef<'first' | 'last' | null>(null)
  const panelId = useId()
  const current = navGroupCurrent(navGroupHrefs(group), currentPath)

  function links(): HTMLAnchorElement[] {
    return Array.from(listRef.current?.querySelectorAll('a') ?? [])
  }

  function cancelClose() {
    window.clearTimeout(closeTimer.current)
  }

  /** Closes, first moving focus to the trigger if it was on a link that is about to be hidden. */
  function close() {
    cancelClose()
    if (listRef.current?.contains(document.activeElement)) buttonRef.current?.focus()
    setOpen(false)
  }

  function openAndFocus(target: 'first' | 'last') {
    if (open) {
      const items = links()
      items[target === 'first' ? 0 : items.length - 1]?.focus()
      return
    }
    focusOnOpen.current = target
    setOpen(true)
  }

  // Focus the requested link once the list is visible.
  useEffect(() => {
    if (!open || !focusOnOpen.current) return
    const items = links()
    items[focusOnOpen.current === 'first' ? 0 : items.length - 1]?.focus()
    focusOnOpen.current = null
  }, [open])

  // Escape closes and returns focus to the trigger; a press outside closes.
  useEffect(() => {
    if (!open) return
    function handleKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key !== 'Escape') return
      const hadFocus = rootRef.current?.contains(document.activeElement)
      cancelClose()
      setOpen(false)
      if (hadFocus) buttonRef.current?.focus()
    }
    function handlePointerDown(event: globalThis.PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        cancelClose()
        setOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [open])

  useEffect(() => cancelClose, [])

  // Hover applies to a mouse only; touch and pen use the click below.
  function handlePointerEnter(event: PointerEvent) {
    if (event.pointerType !== 'mouse') return
    cancelClose()
    setOpen(true)
  }

  function handlePointerLeave(event: PointerEvent) {
    if (event.pointerType !== 'mouse') return
    cancelClose()
    closeTimer.current = window.setTimeout(close, CLOSE_DELAY)
  }

  function handleClick(event: MouseEvent) {
    // A mouse click lands on a menu that hover has already opened, so it keeps
    // it open. Keyboard (detail 0), touch and pen toggle it.
    const byMouse = event.detail > 0 && pressPointer.current === 'mouse'
    setOpen((isOpen) => byMouse || !isOpen)
  }

  function handleButtonKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      openAndFocus('first')
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      openAndFocus('last')
    }
  }

  function handleListKeyDown(event: KeyboardEvent) {
    const items = links()
    const index = items.indexOf(document.activeElement as HTMLAnchorElement)
    if (index === -1) return
    const next: Record<string, number> = {
      ArrowDown: (index + 1) % items.length,
      ArrowUp: (index - 1 + items.length) % items.length,
      Home: 0,
      End: items.length - 1,
    }
    if (!(event.key in next)) return
    event.preventDefault()
    items[next[event.key]].focus()
  }

  return (
    <li
      ref={rootRef}
      className={styles.group}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onBlur={(event) => {
        const next = event.relatedTarget as Node | null
        // Focus moved elsewhere on the page. A click on a non-focusable part of
        // the open list (no relatedTarget, pointer still over it) doesn't count.
        if (next ? !event.currentTarget.contains(next) : !event.currentTarget.matches(':hover')) {
          setOpen(false)
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-controls={panelId}
        data-current={current || undefined}
        onPointerDown={(event) => {
          pressPointer.current = event.pointerType
        }}
        onClick={handleClick}
        onKeyDown={handleButtonKeyDown}
      >
        <span className={styles.triggerLabel}>{group.label}</span>
        <ChevronIcon size={14} className={styles.chevron} />
      </button>
      <div id={panelId} className={styles.panel} hidden={!open}>
        <ul ref={listRef} className={styles.panelList} onKeyDown={handleListKeyDown}>
          {group.items.map((item) => (
            <li key={item.label}>
              <TextLink
                href={item.link.href}
                className={styles.panelLink}
                ariaCurrent={navCurrent(item.link.href, currentPath)}
              >
                {item.label}
              </TextLink>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}
