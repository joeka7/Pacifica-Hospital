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
}

export function LinkRow({ href, title, description, variant }: LinkRowProps) {
  const classes = cx(styles.row, styles[variant])
  const text = (
    <span className={styles.text}>
      <span className={styles.title}>{title}</span>
      {description && <span className={styles.description}>{description}</span>}
    </span>
  )

  if (href === null) {
    return <div className={classes}>{text}</div>
  }

  return (
    <a href={href} className={classes}>
      {text}
      <ArrowIcon size={variant === 'quick' ? 20 : 18} className={styles.arrow} />
    </a>
  )
}
