import { patientResources } from '../../content/resources'
import { Container } from '../Container/Container'
import { LinkRow } from '../LinkRow/LinkRow'
import { PhoneLink } from '../PhoneLink/PhoneLink'
import styles from './PatientResources.module.css'

export function PatientResources() {
  return (
    <section className={styles.band} aria-labelledby="resources-heading">
      <Container className={styles.inner}>
        <div className={styles.intro}>
          <h2 id="resources-heading" className={styles.heading}>
            {patientResources.heading}
          </h2>
          <p className={styles.text}>
            {patientResources.introBeforePhone}
            <PhoneLink phone={patientResources.introPhone} />
            {patientResources.introAfterPhone}
          </p>
        </div>
        <ul className={styles.list}>
          {patientResources.items.map((item) => (
            <li key={item.title} className={styles.item}>
              <LinkRow
                variant="resource"
                href={item.link.href}
                title={item.title}
                description={item.description}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
