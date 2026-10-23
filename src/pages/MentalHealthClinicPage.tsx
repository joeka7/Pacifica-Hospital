import { Button } from '../components/Button/Button'
import { Container } from '../components/Container/Container'
import { ContentSection, ContentSections } from '../components/ContentSection/ContentSection'
import shared from '../components/Editorial/editorial.module.css'
import { EmergencyNotice } from '../components/EmergencyNotice/EmergencyNotice'
import { InteriorPage } from '../components/InteriorPage/InteriorPage'
import { LinkRowList } from '../components/LinkRowList/LinkRowList'
import { PageClosing } from '../components/PageClosing/PageClosing'
import { PageIntro } from '../components/PageIntro/PageIntro'
import { PhoneLink } from '../components/PhoneLink/PhoneLink'
import { ResponsiveImage } from '../components/ResponsiveImage/ResponsiveImage'
import { imageSizes } from '../components/ResponsiveImage/sizes'
import { StepList } from '../components/StepList/StepList'
import { images } from '../content/images'
import { links } from '../content/links'
import { mentalHealthClinicPage } from '../content/mentalHealthClinic'
import { cx } from '../utils/cx'
import styles from './MentalHealthClinicPage.module.css'

export function MentalHealthClinicPage() {
  const page = mentalHealthClinicPage

  return (
    <InteriorPage meta={page.meta} currentPath={links.mentalHealthClinic.href} breadcrumb={page.breadcrumb}>
      <PageIntro
        headingId="clinic-heading"
        eyebrow={page.eyebrow}
        heading={page.heading}
        facts={page.facts}
        lead={page.lead.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      >
        <div className={styles.callBlock}>
          <p className={styles.callLabel}>{page.call.label}</p>
          <PhoneLink phone={page.call.phone} variant="heroEmergency" />
        </div>
        <Button href={page.directions.link.href} variant="secondary" arrow>
          {page.directions.label}
        </Button>
      </PageIntro>

      <div className={styles.noticeWrap}>
        <Container>
          <EmergencyNotice heading={page.notice.heading} showPhone={false}>
            <p>
              {page.notice.lifelineBefore}
              <PhoneLink phone={page.notice.lifelinePhone} />
              {page.notice.lifelineAfter}
            </p>
          </EmergencyNotice>
        </Container>
      </div>

      <section className={shared.section} aria-labelledby={`${page.approach.id}-heading`}>
        <Container className={cx(shared.grid, styles.approach)}>
          <div className={styles.media}>
            <ResponsiveImage image={images.mentalHealth} sizes={imageSizes.portraitColumn} className={styles.image} />
          </div>
          <div className={styles.approachText}>
            <h2 id={`${page.approach.id}-heading`} className={shared.headingLg}>
              {page.approach.heading}
            </h2>
            <StepList steps={page.approach.items} ordered={false} />
          </div>
        </Container>
      </section>

      <div className={shared.section}>
        <Container>
          <ContentSections sections={page.sections}>
            <ContentSection
              id={page.resources.id}
              heading={page.resources.heading}
              number={String(page.sections.length + 1).padStart(2, '0')}
            >
              <LinkRowList items={page.resources.items} />
            </ContentSection>
          </ContentSections>
        </Container>
      </div>

      <PageClosing
        headingId="clinic-closing-heading"
        heading={page.closing.heading}
        body={page.closing.body}
        primaryAction={page.closing.primaryAction}
        contacts={page.closing.contacts}
      />
    </InteriorPage>
  )
}
