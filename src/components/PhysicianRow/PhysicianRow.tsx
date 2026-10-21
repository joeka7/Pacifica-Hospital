import { displayName, physicianLink, type Physician } from '../../content/physicians'
import { cx } from '../../utils/cx'
import { ArrowIcon } from '../ArrowIcon/ArrowIcon'
import styles from './PhysicianRow.module.css'

interface PhysicianRowProps {
  physician: Physician
  /** Show the leadership role or committee count beside the specialty. */
  showRole?: boolean
}

/** One physician as a full-width ruled link row: name, specialty, role. */
export function PhysicianRow({ physician, showRole = true }: PhysicianRowProps) {
  const role = showRole ? physician.role : undefined

  return (
    <a href={physicianLink(physician).href} className={cx(styles.row, !role && styles.noRole)}>
      <span className={styles.name}>{displayName(physician)}</span>
      <span className={styles.specialty}>{physician.specialty}</span>
      {role && <span className={styles.role}>{role}</span>}
      <ArrowIcon size={18} className={styles.arrow} />
    </a>
  )
}

interface PhysicianRowListProps {
  physicians: Physician[]
  showRole?: boolean
  /** Light top rule (default) inside ruled sections; navy when the list stands alone. */
  topRule?: 'strong' | 'light'
  className?: string
}

export function PhysicianRowList({ physicians, showRole, topRule = 'light', className }: PhysicianRowListProps) {
  return (
    <ul className={cx(styles.list, topRule === 'strong' && styles.strongRule, className)}>
      {physicians.map((physician) => (
        <li key={physician.slug} className={styles.item}>
          <PhysicianRow physician={physician} showRole={showRole} />
        </li>
      ))}
    </ul>
  )
}
