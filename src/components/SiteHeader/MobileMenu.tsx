import { useId, useState } from 'react'
import { headerCta, isNavGroup, mainNav, navGroupHrefs, type NavGroup } from '../../content/navigation'
import { navCurrent, navGroupCurrent, topNavCurrent } from '../../utils/navCurrent'
import { Button } from '../Button/Button'
import { ChevronIcon } from '../ChevronIcon/ChevronIcon'
import { Container } from '../Container/Container'
import { TextLink } from '../TextLink/TextLink'
import styles from './MobileMenu.module.css'

interface MobileMenuProps {
  id: string
  open: boolean
  onNavigate: () => void
  /** Path of the page being viewed; the matching item or section gets aria-current. */
  currentPath?: string
}

interface MobileNavGroupProps {
  group: NavGroup
  onNavigate: () => void
  currentPath?: string
}

/** A main-nav group as a tap-to-expand row; it starts expanded when it holds the current page. */
function MobileNavGroup({ group, onNavigate, currentPath }: MobileNavGroupProps) {
  const current = navGroupCurrent(navGroupHrefs(group), currentPath)
  const [expanded, setExpanded] = useState(current)
  const listId = useId()

  return (
    <li className={styles.item}>
      <button
        type="button"
        className={styles.groupButton}
        aria-expanded={expanded}
        aria-controls={listId}
        onClick={() => setExpanded((isExpanded) => !isExpanded)}
      >
        {group.label}
        <ChevronIcon size={18} className={styles.chevron} />
      </button>
      <ul id={listId} className={styles.subList} hidden={!expanded}>
        {group.items.map((item) => (
          <li key={item.label} className={styles.subItem}>
            <TextLink
              href={item.link.href}
              className={styles.subLink}
              ariaCurrent={navCurrent(item.link.href, currentPath)}
              onClick={onNavigate}
            >
              {item.label}
            </TextLink>
          </li>
        ))}
      </ul>
    </li>
  )
}

export function MobileMenu({ id, open, onNavigate, currentPath }: MobileMenuProps) {
  const groupHoldsPage = mainNav.some((item) => isNavGroup(item) && navGroupCurrent(navGroupHrefs(item), currentPath))

  return (
    <div id={id} className={styles.panel} hidden={!open}>
      <Container>
        <nav aria-label="Main">
          <ul>
            {mainNav.map((item) =>
              isNavGroup(item) ? (
                <MobileNavGroup key={item.label} group={item} onNavigate={onNavigate} currentPath={currentPath} />
              ) : (
                <li key={item.label} className={styles.item}>
                  <TextLink
                    href={item.link.href}
                    className={styles.link}
                    ariaCurrent={topNavCurrent(item.link.href, currentPath, groupHoldsPage)}
                    onClick={onNavigate}
                  >
                    {item.label}
                  </TextLink>
                </li>
              ),
            )}
          </ul>
        </nav>
        <div className={styles.cta}>
          <Button href={headerCta.link.href} variant="accent" size="md" arrow onClick={onNavigate}>
            {headerCta.label}
          </Button>
        </div>
      </Container>
    </div>
  )
}
