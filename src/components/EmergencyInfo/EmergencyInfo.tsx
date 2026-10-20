import { contact, emergencySection } from '../../content/site'
import { Container } from '../Container/Container'
import { PhoneLink } from '../PhoneLink/PhoneLink'
import { TextLink } from '../TextLink/TextLink'
import { HoursList } from './HoursList'
import styles from './EmergencyInfo.module.css'

export function EmergencyInfo() {
  return (
    <section className={styles.section} aria-labelledby="er-heading">
      <Container>
        <div className={styles.frame}>
          <div>
            <h2 id="er-heading" className={styles.heading}>
              {emergencySection.heading}
            </h2>
            <p className={styles.body}>{emergencySection.body}</p>
          </div>
          <div className={styles.contact}>
            <p className={styles.label}>{emergencySection.directLineLabel}</p>
            <PhoneLink phone={contact.emergencyPhone} variant="sectionEmergency" />
            <address className={styles.address}>
              {emergencySection.addressLine}
              <br />
              <TextLink href={emergencySection.directions.link.href}>
                {emergencySection.directions.label}
              </TextLink>
            </address>
          </div>
          <HoursList rows={emergencySection.hours} />
        </div>
      </Container>
    </section>
  )
}
