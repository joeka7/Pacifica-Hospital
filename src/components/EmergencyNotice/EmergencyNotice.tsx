import type { ReactNode } from 'react'
import { contact, hero } from '../../content/site'
import { cx } from '../../utils/cx'
import { PhoneLink } from '../PhoneLink/PhoneLink'
import styles from './EmergencyNotice.module.css'

interface EmergencyNoticeProps {
  heading: string
  /** Renders the heading as an h2 (default) or a paragraph when a section heading already exists. */
  headingAs?: 'h2' | 'p'
  children?: ReactNode
  /** Show the Emergency Department direct line beside the text. */
  showPhone?: boolean
  className?: string
}

/** Red-ruled emergency guidance, matching the homepage emergency section. */
export function EmergencyNotice({
  heading,
  headingAs: Heading = 'h2',
  children,
  showPhone = true,
  className,
}: EmergencyNoticeProps) {
  return (
    <div className={cx(styles.notice, className)}>
      <div className={styles.text}>
        <Heading className={styles.heading}>{heading}</Heading>
        {children && <div className={styles.body}>{children}</div>}
      </div>
      {showPhone && (
        <div className={styles.contact}>
          <p className={styles.label}>{hero.emergency.label}</p>
          <PhoneLink phone={contact.emergencyPhone} variant="sectionEmergency" />
        </div>
      )}
    </div>
  )
}
