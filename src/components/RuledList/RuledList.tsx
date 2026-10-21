import { cx } from '../../utils/cx'
import styles from './RuledList.module.css'

interface RuledListProps {
  items: string[]
  /** Two columns on wide screens. */
  columns?: 1 | 2
  className?: string
}

/** A list of short items separated by thin rules. */
export function RuledList({ items, columns = 1, className }: RuledListProps) {
  return (
    <ul className={cx(styles.list, columns === 2 && styles.twoColumn, className)}>
      {items.map((item) => (
        <li key={item} className={styles.item}>
          {item}
        </li>
      ))}
    </ul>
  )
}
