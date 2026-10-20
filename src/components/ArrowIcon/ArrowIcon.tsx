import { cx } from '../../utils/cx'
import styles from './ArrowIcon.module.css'

interface ArrowIconProps {
  size?: 16 | 18 | 20
  strokeWidth?: number
  className?: string
}

export function ArrowIcon({ size = 20, strokeWidth = 2, className }: ArrowIconProps) {
  return (
    <svg
      className={cx(styles.icon, className)}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3 10h13M11 4.5l5.5 5.5L11 15.5" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  )
}
