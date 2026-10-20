import type { LabeledLink } from '../../content/site'
import { footerNav } from '../../content/navigation'
import { contact, footer, site } from '../../content/site'
import { Container } from '../Container/Container'
import { PhoneLink } from '../PhoneLink/PhoneLink'
import { TextLink } from '../TextLink/TextLink'
import styles from './SiteFooter.module.css'

function FooterLinks({ items }: { items: LabeledLink[] }) {
  return (
    <ul className={styles.links}>
      {items.map((item) => (
        <li key={item.label}>
          <TextLink href={item.link.href} className={styles.navLink}>
            {item.label}
          </TextLink>
        </li>
      ))}
    </ul>
  )
}

export function SiteFooter() {
  const { address } = contact

  return (
    <footer className={styles.footer}>
      <Container>
        <p className={styles.wordmark}>{site.name}</p>
        <div className={styles.grid}>
          <div className={styles.column}>
            <p className={styles.heading}>{footer.visitHeading}</p>
            <address>
              {address.street}
              <br />
              {address.city}, {address.state} {address.zip}
            </address>
            <p>
              <a href={`mailto:${contact.email}`} className={styles.email}>
                {contact.email}
              </a>
            </p>
          </div>
          <div className={styles.column}>
            <p className={styles.heading}>{footer.callHeading}</p>
            <p>
              {footer.mainLabel} <PhoneLink phone={contact.mainPhone} variant="onDark" />
            </p>
            <p>
              {footer.emergencyLabel}{' '}
              <PhoneLink phone={contact.emergencyPhone} variant="onDark" />
            </p>
          </div>
          <nav aria-label={footer.careHeading} className={styles.column}>
            <p className={styles.heading}>{footer.careHeading}</p>
            <FooterLinks items={footerNav.care} />
          </nav>
          <nav aria-label={footer.aboutHeading} className={styles.column}>
            <p className={styles.heading}>{footer.aboutHeading}</p>
            <FooterLinks items={footerNav.about} />
          </nav>
        </div>
        <div className={styles.bottom}>
          <p>{footer.copyright}</p>
          <p>{footer.accreditation}</p>
        </div>
      </Container>
    </footer>
  )
}
