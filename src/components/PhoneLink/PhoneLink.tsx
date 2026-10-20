import type { PhoneNumber } from '../../content/site'
import { cx } from '../../utils/cx'
import styles from './PhoneLink.module.css'

type PhoneLinkVariant = 'inline' | 'onDark' | 'heroEmergency' | 'sectionEmergency'

interface PhoneLinkProps {
  phone: PhoneNumber
  variant?: PhoneLinkVariant
  className?: string
}

export function PhoneLink({ phone, variant = 'inline', className }: PhoneLinkProps) {
  return (
    <a href={`tel:${phone.tel}`} className={cx(styles.phone, styles[variant], className)}>
      {phone.display}
    </a>
  )
}
