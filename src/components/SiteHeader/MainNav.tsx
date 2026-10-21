import { mainNav } from '../../content/navigation'
import { navCurrent } from '../../utils/navCurrent'
import { TextLink } from '../TextLink/TextLink'
import styles from './MainNav.module.css'

interface MainNavProps {
  /** Path of the page being viewed; the matching item or section gets aria-current. */
  currentPath?: string
}

export function MainNav({ currentPath }: MainNavProps) {
  return (
    <nav aria-label="Main">
      <ul className={styles.list}>
        {mainNav.map((item) => (
          <li key={item.label}>
            <TextLink
              href={item.link.href}
              className={styles.link}
              ariaCurrent={navCurrent(item.link.href, currentPath)}
            >
              {item.label}
            </TextLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
