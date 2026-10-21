import type { Step } from '../../content/blocks'
import { cx } from '../../utils/cx'
import shared from '../Editorial/editorial.module.css'
import styles from './StepList.module.css'

interface StepListProps {
  steps: Step[]
  /** Use false for numbered points that are not a sequence; renders a ul. */
  ordered?: boolean
  /** Navy top rule (default) when standalone; light inside a ruled section. */
  topRule?: 'strong' | 'light'
  className?: string
}

/** Numbered, ruled items, following the "Our approach to care" list on the About page. */
export function StepList({ steps, ordered = true, topRule = 'strong', className }: StepListProps) {
  const List = ordered ? 'ol' : 'ul'

  return (
    <List className={cx(styles.list, topRule === 'light' && styles.lightRule, className)}>
      {steps.map((step, index) => (
        <li key={step.title} className={styles.item}>
          <span className={cx(shared.number, styles.number)} aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className={styles.title}>{step.title}</h3>
          <p className={cx(shared.body, styles.text)}>{step.text}</p>
        </li>
      ))}
    </List>
  )
}
