import { useEffect, useRef, useState } from 'react'
import { headerCta } from '../../content/navigation'
import { Button } from '../Button/Button'
import { Container } from '../Container/Container'
import { Logo } from '../Logo/Logo'
import { UtilityBar } from '../UtilityBar/UtilityBar'
import { MainNav } from './MainNav'
import { MobileMenu } from './MobileMenu'
import styles from './SiteHeader.module.css'

const MENU_ID = 'mobile-menu'
const DESKTOP_QUERY = '(min-width: 1080px)'

interface SiteHeaderProps {
  /** Path of the page being viewed, used to mark the current nav item. */
  currentPath?: string
}

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  // Escape closes the menu and returns focus to the toggle.
  useEffect(() => {
    if (!menuOpen) return
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  // Close when the viewport grows to the desktop layout.
  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY)
    function handleChange(event: MediaQueryListEvent) {
      if (event.matches) setMenuOpen(false)
    }
    query.addEventListener('change', handleChange)
    return () => query.removeEventListener('change', handleChange)
  }, [])

  return (
    <header>
      <UtilityBar />
      <div className={styles.bar}>
        <Container className={styles.inner}>
          <Logo />
          <div className={styles.desktop}>
            <MainNav currentPath={currentPath} />
            <Button href={headerCta.link.href} variant="accent" size="md" arrow>
              {headerCta.label}
            </Button>
          </div>
          <button
            ref={menuButtonRef}
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls={MENU_ID}
            onClick={() => setMenuOpen((open) => !open)}
          >
            Menu
          </button>
        </Container>
      </div>
      <MobileMenu
        id={MENU_ID}
        open={menuOpen}
        onNavigate={() => setMenuOpen(false)}
        currentPath={currentPath}
      />
    </header>
  )
}
