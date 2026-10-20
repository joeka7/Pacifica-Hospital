import { headerCta, mainNav } from '../../content/navigation'
import { Button } from '../Button/Button'
import { Container } from '../Container/Container'
import { TextLink } from '../TextLink/TextLink'
import styles from './MobileMenu.module.css'

interface MobileMenuProps {
  id: string
  open: boolean
  onNavigate: () => void
}

export function MobileMenu({ id, open, onNavigate }: MobileMenuProps) {
  return (
    <div id={id} className={styles.panel} hidden={!open}>
      <Container>
        <nav aria-label="Main">
          <ul>
            {mainNav.map((item) => (
              <li key={item.label} className={styles.item}>
                <TextLink href={item.link.href} className={styles.link} onClick={onNavigate}>
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
