import { isNavGroup, mainNav, navGroupHrefs } from '../../content/navigation'
import { navGroupCurrent, topNavCurrent } from '../../utils/navCurrent'
import { TextLink } from '../TextLink/TextLink'
import styles from './MainNav.module.css'
import { NavDropdown } from './NavDropdown'

interface MainNavProps {
  /** Path of the page being viewed; the matching item or section gets aria-current. */
  currentPath?: string
}

export function MainNav({ currentPath }: MainNavProps) {
  const groupHoldsPage = mainNav.some((item) => isNavGroup(item) && navGroupCurrent(navGroupHrefs(item), currentPath))

  return (
    <nav aria-label="Main">
      <ul className={styles.list}>
        {mainNav.map((item) =>
          isNavGroup(item) ? (
            <NavDropdown key={item.label} group={item} currentPath={currentPath} />
          ) : (
            <li key={item.label}>
              <TextLink
                href={item.link.href}
                className={styles.link}
                ariaCurrent={topNavCurrent(item.link.href, currentPath, groupHoldsPage)}
              >
                {item.label}
              </TextLink>
            </li>
          ),
        )}
      </ul>
    </nav>
  )
}
