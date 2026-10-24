import { cx } from '../../utils/cx'
import styles from '../ArrowIcon/ArrowIcon.module.css'

interface ChevronIconProps {
  size?: 14 | 16 | 18
  strokeWidth?: number
  className?: string
}

/** Downward chevron for disclosure triggers; rotate it with CSS when open. */
export function ChevronIcon({ size = 16, strokeWidth = 2, className }: ChevronIconProps) {
  return (
    <svg
      className={cx(styles.icon, className)}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3.5 6l4.5 4.5L12.5 6" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  )
}
