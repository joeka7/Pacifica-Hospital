import { headerCta, mainNav } from '../../content/navigation'
import { navCurrent } from '../../utils/navCurrent'
import { Button } from '../Button/Button'
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

export function MobileMenu({ id, open, onNavigate, currentPath }: MobileMenuProps) {
  return (
    <div id={id} className={styles.panel} hidden={!open}>
      <Container>
        <nav aria-label="Main">
          <ul>
            {mainNav.map((item) => (
              <li key={item.label} className={styles.item}>
                <TextLink
                  href={item.link.href}
                  className={styles.link}
                  ariaCurrent={navCurrent(item.link.href, currentPath)}
                  onClick={onNavigate}
                >
                  {item.label}
                </TextLink>
              </li>
            ))}
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
