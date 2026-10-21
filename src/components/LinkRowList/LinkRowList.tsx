import type { LinkRowItem } from '../../content/blocks'
import { cx } from '../../utils/cx'
import { LinkRow } from '../LinkRow/LinkRow'
import styles from './LinkRowList.module.css'

interface LinkRowListProps {
  items: LinkRowItem[]
  variant?: 'service' | 'resource'
  /** Two columns on wide screens. */
  columns?: 1 | 2
  /** Light top rule (default) inside ruled sections; navy when the list stands alone. */
  topRule?: 'strong' | 'light'
  className?: string
}

/** A ruled list of LinkRows, as in the homepage service and resource lists. */
export function LinkRowList({
  items,
  variant = 'resource',
  columns = 1,
  topRule = 'light',
  className,
}: LinkRowListProps) {
  return (
    <ul
      className={cx(
        styles.list,
        columns === 2 && styles.twoColumn,
        topRule === 'strong' && styles.strongRule,
        className,
      )}
    >
      {items.map((item) => (
        <li key={item.title} className={styles.item}>
          <LinkRow
            variant={variant}
            href={item.link.href}
            title={item.title}
            description={item.description}
          />
        </li>
      ))}
    </ul>
  )
}
