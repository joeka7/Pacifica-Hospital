import { contact, hero } from '../../content/site'
import { PhoneLink } from '../PhoneLink/PhoneLink'
import styles from './EmergencySign.module.css'

export function EmergencySign() {
  return (
    <div className={styles.sign}>
      <p className={styles.label}>{hero.emergency.label}</p>
      <PhoneLink phone={contact.emergencyPhone} variant="heroEmergency" />
      <p className={styles.note}>{hero.emergency.note}</p>
    </div>
  )
}
