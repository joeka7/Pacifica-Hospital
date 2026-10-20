import { links } from '../../content/links'
import { site } from '../../content/site'
import { LogoMark } from './LogoMark'
import styles from './Logo.module.css'

export function Logo() {
  return (
    <a href={links.home.href} className={styles.logo}>
      <LogoMark />
      <span className={styles.text}>
        <span className={styles.wordmark}>{site.shortName}</span>{' '}
        <span className={styles.suffix}>{site.nameSuffix}</span>
      </span>
    </a>
  )
}
