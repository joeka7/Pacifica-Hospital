import type { ReactNode } from 'react'
import { cx } from '../../utils/cx'
import { ArrowIcon } from '../ArrowIcon/ArrowIcon'
import styles from './LinkRow.module.css'

type LinkRowVariant = 'quick' | 'service' | 'resource'

interface LinkRowProps {
  /** Null renders the row as non-interactive text in the same style, without an arrow. */
  href: string | null
  title: string
  description?: string
  variant: LinkRowVariant
  /**
   * A photo shown above the title, inside the link, so photo and text are one
   * link with one name and share the row's hover state.
   */
  media?: ReactNode
}

export function LinkRow({ href, title, description, variant, media }: LinkRowProps) {
  const classes = cx(styles.row, styles[variant], media != null && styles.hasMedia)
  const mediaSlot = media != null && <span className={styles.media}>{media}</span>
  const text = (
    <span className={styles.text}>
      <span className={styles.title}>{title}</span>
      {description && <span className={styles.description}>{description}</span>}
    </span>
  )

  if (href === null) {
    return (
      <div className={classes}>
        {mediaSlot}
        {text}
      </div>
    )
  }

  return (
    <a href={href} className={classes}>
      {mediaSlot}
      {text}
      <ArrowIcon size={variant === 'quick' ? 20 : 18} className={styles.arrow} />
    </a>
  )
}
