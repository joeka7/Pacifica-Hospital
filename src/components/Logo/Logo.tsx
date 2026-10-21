import logo from '../../assets/images/logo.webp'
import { links } from '../../content/links'
import { site } from '../../content/site'
import styles from './Logo.module.css'

export function Logo() {
  return (
    <a href={links.home.href} className={styles.logo}>
      <img className={styles.image} src={logo} width="225" height="90" alt={site.name} />
    </a>
  )
}
