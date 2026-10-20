import type { ReactNode } from 'react'
import { cx } from '../../utils/cx'
import { ArrowIcon } from '../ArrowIcon/ArrowIcon'
import styles from './ArrowLink.module.css'

interface ArrowLinkProps {
  /** Null renders plain text in the same style, without an arrow. */
  href: string | null
  className?: string
  children: ReactNode
}

export function ArrowLink({ href, className, children }: ArrowLinkProps) {
  if (href === null) {
    return <span className={cx(styles.link, className)}>{children}</span>
  }

  return (
    <a href={href} className={cx(styles.link, className)}>
      <span className={styles.label}>{children}</span>
      <ArrowIcon size={18} />
    </a>
  )
}
