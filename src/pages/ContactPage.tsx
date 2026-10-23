import { ArrowLink } from '../components/ArrowLink/ArrowLink'
import { ContactForm } from '../components/ContactForm/ContactForm'
import { Container } from '../components/Container/Container'
import shared from '../components/Editorial/editorial.module.css'
import { EmergencyNotice } from '../components/EmergencyNotice/EmergencyNotice'
import { HoursList } from '../components/EmergencyInfo/HoursList'
import { InteriorPage } from '../components/InteriorPage/InteriorPage'
import { LinkRowList } from '../components/LinkRowList/LinkRowList'
import { PageIntro } from '../components/PageIntro/PageIntro'
import { ResponsiveImage } from '../components/ResponsiveImage/ResponsiveImage'
import { contactForm, contactPage } from '../content/contact'
import { links } from '../content/links'
import { site } from '../content/site'
import { cx } from '../utils/cx'
import styles from './ContactPage.module.css'

export function ContactPage() {
  const page = contactPage
  const { address } = page.visit

  return (
    <InteriorPage meta={page.meta} currentPath={links.contact.href} breadcrumb={page.breadcrumb}>
      <PageIntro headingId="contact-heading" eyebrow={page.eyebrow} heading={page.heading} lead={<p>{page.lead}</p>} />

      <div className={styles.noticeWrap}>
        <Container>
          <EmergencyNotice heading={page.notice.heading}>
            <p>{page.notice.body}</p>
          </EmergencyNotice>
        </Container>
      </div>

      <div className={styles.directory}>
        <Container className={cx(shared.grid, styles.layout)}>
          <section className={cx(styles.block, styles.phones)} aria-labelledby={`${page.phones.id}-heading`}>
            <h2 id={`${page.phones.id}-heading`} className={styles.blockHeading}>
              {page.phones.heading}
            </h2>
            <HoursList rows={page.phones.rows} />
            <p className={styles.note}>{page.phones.note}</p>
          </section>

          <div className={styles.media}>
            <ResponsiveImage image={page.image} className={styles.image} />
          </div>

          <section className={cx(styles.block, styles.visit)} aria-labelledby={`${page.visit.id}-heading`}>
            <h2 id={`${page.visit.id}-heading`} className={styles.blockHeading}>
              {page.visit.heading}
            </h2>
            <address className={styles.address}>
              {site.name}
              <br />
              {address.street}
              <br />
              {address.city}, {address.state} {address.zip}
            </address>
            <ArrowLink href={page.visit.directions.link.href}>{page.visit.directions.label}</ArrowLink>
            <HoursList rows={page.visit.rows} />
          </section>

          <section className={cx(styles.block, styles.records)} aria-labelledby={`${page.records.id}-heading`}>
            <h2 id={`${page.records.id}-heading`} className={styles.blockHeading}>
              {page.records.heading}
            </h2>
            <LinkRowList items={page.records.items} />
          </section>
        </Container>
      </div>

      <section className={styles.formBand} aria-labelledby={`${contactForm.id}-heading`}>
        <Container className={shared.grid}>
          <div className={styles.formIntro}>
            <h2 id={`${contactForm.id}-heading`} className={shared.headingMd}>
              {contactForm.heading}
            </h2>
            {contactForm.intro.map((paragraph) => (
              <p key={paragraph} className={shared.body}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className={styles.formColumn}>
            <ContactForm />
          </div>
        </Container>
      </section>
    </InteriorPage>
  )
}
