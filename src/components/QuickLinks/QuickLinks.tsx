import { quickLinks } from '../../content/navigation'
import { Container } from '../Container/Container'
import { LinkRow } from '../LinkRow/LinkRow'
import styles from './QuickLinks.module.css'

export function QuickLinks() {
  return (
    <nav aria-label="Quick access" className={styles.section}>
      <Container>
        <ul className={styles.list}>
          {quickLinks.map((item) => (
            <li key={item.title} className={styles.item}>
              <LinkRow
                variant="quick"
                href={item.link.href}
                title={item.title}
                description={item.description}
              />
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  )
}
