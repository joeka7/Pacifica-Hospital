import { careValues } from '../../content/site'
import { cx } from '../../utils/cx'
import styles from './HeartValues.module.css'

interface HeartValuesProps {
  className?: string
}

export function HeartValues({ className }: HeartValuesProps) {
  return (
    <div className={cx(styles.root, className)}>
      <p className={styles.label}>{careValues.label}</p>
      <ul className={styles.list} aria-label={careValues.listLabel}>
        {careValues.items.map((value) => (
          <li key={value.word} className={styles.item}>
            <span className={styles.letter} aria-hidden="true">
              {value.letter}
            </span>
            <span className={styles.word}>{value.word}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
