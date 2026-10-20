import type { ReactNode } from 'react'
import { cx } from '../../utils/cx'
import { ArrowIcon } from '../ArrowIcon/ArrowIcon'
import styles from './Button.module.css'

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'inverse'
type ButtonSize = 'md' | 'lg'

interface ButtonProps {
  /** Null renders the button as non-interactive text in the same style, without an arrow. */
  href: string | null
  variant?: ButtonVariant
  size?: ButtonSize
  arrow?: boolean
  className?: string
  onClick?: () => void
  children: ReactNode
}

export function Button({
  href,
  variant = 'primary',
  size = 'lg',
  arrow = false,
  className,
  onClick,
  children,
}: ButtonProps) {
  const classes = cx(styles.button, styles[size], styles[variant], className)

  if (href === null) {
    return <span className={cx(classes, styles.static)}>{children}</span>
  }

  return (
    <a href={href} className={classes} onClick={onClick}>
      <span>{children}</span>
      {arrow && <ArrowIcon size={size === 'md' ? 16 : 18} strokeWidth={2.2} />}
    </a>
  )
}
