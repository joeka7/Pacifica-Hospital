import { cx } from '../../utils/cx'
import styles from './LogoMark.module.css'

interface LogoMarkProps {
  className?: string
}

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      className={cx(styles.mark, className)}
      width="38"
      height="38"
      viewBox="0 0 38 38"
      aria-hidden="true"
      focusable="false"
    >
      <rect className={styles.square} width="38" height="38" />
      <path className={styles.plus} d="M19 9v20M9 19h20" strokeWidth="4" />
    </svg>
  )
}
