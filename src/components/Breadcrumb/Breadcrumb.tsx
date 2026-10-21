import type { BreadcrumbItem } from '../../content/site'
import { Container } from '../Container/Container'
import styles from './Breadcrumb.module.css'

interface BreadcrumbProps {
  /** The last item is the current page and renders as text. */
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <Container>
      <nav aria-label="Breadcrumb" className={styles.nav}>
        <ol className={styles.list}>
          {items.map((item, index) => {
            const isCurrent = index === items.length - 1
            return (
              <li key={item.label} className={styles.item}>
                {isCurrent || !item.link?.href ? (
                  <span aria-current={isCurrent ? 'page' : undefined}>{item.label}</span>
                ) : (
                  <a href={item.link.href} className={styles.link}>
                    {item.label}
                  </a>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </Container>
  )
}
