import { mainNav } from '../../content/navigation'
import { TextLink } from '../TextLink/TextLink'
import styles from './MainNav.module.css'

export function MainNav() {
  return (
    <nav aria-label="Main">
      <ul className={styles.list}>
        {mainNav.map((item) => (
          <li key={item.label}>
            <TextLink href={item.link.href} className={styles.link}>
              {item.label}
            </TextLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
