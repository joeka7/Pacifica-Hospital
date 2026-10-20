import { utilityLinks } from '../../content/navigation'
import { contact, utilityBar } from '../../content/site'
import { Container } from '../Container/Container'
import { PhoneLink } from '../PhoneLink/PhoneLink'
import { TextLink } from '../TextLink/TextLink'
import styles from './UtilityBar.module.css'

export function UtilityBar() {
  return (
    <div className={styles.bar}>
      <Container className={styles.inner}>
        <p className={styles.notice}>
          <span className={styles.marker} aria-hidden="true" />
          {utilityBar.emergencyNotice}{' '}
          <PhoneLink phone={contact.emergencyPhone} variant="onDark" className={styles.phone} />
        </p>
        <ul className={styles.links}>
          {utilityLinks.map((item) => (
            <li key={item.label}>
              <TextLink href={item.link.href} lang={item.lang} className={styles.link}>
                {item.label}
              </TextLink>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
