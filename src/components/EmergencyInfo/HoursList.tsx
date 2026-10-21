import type { HoursRow } from '../../content/site'
import { PhoneLink } from '../PhoneLink/PhoneLink'
import styles from './HoursList.module.css'

interface HoursListProps {
  rows: HoursRow[]
}

export function HoursList({ rows }: HoursListProps) {
  return (
    <dl className={styles.list}>
      {rows.map((row) => (
        <div key={row.label} className={styles.row}>
          <dt className={styles.term}>{row.label}</dt>
          <dd className={styles.value}>
            {'phone' in row ? (
              <PhoneLink phone={row.phone} />
            ) : 'email' in row ? (
              <a href={`mailto:${row.email}`} className={styles.email}>
                {row.email}
              </a>
            ) : (
              row.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  )
}
