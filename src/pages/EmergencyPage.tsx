import { Accordion } from '../components/Accordion/Accordion'
import { Container } from '../components/Container/Container'
import { ContentSection, ContentStack } from '../components/ContentSection/ContentSection'
import shared from '../components/Editorial/editorial.module.css'
import { EmergencyNotice } from '../components/EmergencyNotice/EmergencyNotice'
import { InteriorPage } from '../components/InteriorPage/InteriorPage'
import { LinkRowList } from '../components/LinkRowList/LinkRowList'
import { PageClosing } from '../components/PageClosing/PageClosing'
import { PageIntro } from '../components/PageIntro/PageIntro'
import { PhoneLink } from '../components/PhoneLink/PhoneLink'
import { PhysicianRowList } from '../components/PhysicianRow/PhysicianRow'
import { ResponsiveImage } from '../components/ResponsiveImage/ResponsiveImage'
import { RichText } from '../components/RichText/RichText'
import { RuledList } from '../components/RuledList/RuledList'
import { StepList } from '../components/StepList/StepList'
import { emergencyPage } from '../content/emergency'
import { links, servicePath } from '../content/links'
import { physicians } from '../content/physicians'
import { findServicePage, type ServicePageData } from '../content/servicePages'
import { cx } from '../utils/cx'
import styles from './EmergencyPage.module.css'

export function EmergencyPage() {
  const page = emergencyPage
  const related = page.related.slugs
    .map((slug) => findServicePage(slug))
    .filter((item): item is ServicePageData => item !== undefined)
  const emergencyPhysicians = physicians.filter((physician) => physician.specialty === 'Emergency Medicine')

  return (
    <InteriorPage meta={page.meta} currentPath={links.emergencyDepartment.href} breadcrumb={page.breadcrumb}>
      <PageIntro
        headingId="emergency-heading"
        eyebrow={page.eyebrow}
        heading={page.heading}
        size="md"
        facts={page.facts}
        lead={<p>{page.lead}</p>}
      />

      <div className={styles.noticeWrap}>
        <Container>
          <EmergencyNotice heading={page.notice.heading} />
        </Container>
      </div>

      <section className={shared.section} aria-labelledby={`${page.whenToGo.id}-heading`}>
        <Container className={shared.grid}>
          <div className={styles.whenText}>
            <h2 id={`${page.whenToGo.id}-heading`} className={shared.headingLg}>
              {page.whenToGo.heading}
            </h2>
            {page.whenToGo.paragraphs.map((paragraph) => (
              <p key={paragraph} className={shared.body}>
                {paragraph}
              </p>
            ))}
            <div>
              <p className={styles.listLabel}>{page.whenToGo.choicesLabel}</p>
              <RuledList items={page.whenToGo.choices} />
            </div>
            <p className={shared.body}>
              {page.whenToGo.unsure.before}
              <PhoneLink phone={page.whenToGo.unsure.phone} />
              {page.whenToGo.unsure.after}
            </p>
          </div>
          <div className={styles.symptoms}>
            <p className={styles.listLabel}>{page.whenToGo.symptomsLabel}</p>
            <RuledList items={page.whenToGo.symptoms} />
          </div>
        </Container>
      </section>

      <section className={shared.section} aria-labelledby={`${page.expect.id}-heading`}>
        <Container className={shared.grid}>
          <div className={styles.expectIntro}>
            <h2 id={`${page.expect.id}-heading`} className={shared.headingLg}>
              {page.expect.heading}
            </h2>
            <p className={shared.body}>{page.expect.priority}</p>
          </div>
          <StepList steps={page.expect.steps} className={styles.steps} />
        </Container>
      </section>

      <section className={shared.section} aria-labelledby={`${page.bring.id}-heading`}>
        <Container className={cx(shared.grid, styles.bringRow)}>
          <div className={styles.media}>
            <ResponsiveImage image={page.image} className={styles.image} />
          </div>
          <div className={styles.bring}>
            <h2 id={`${page.bring.id}-heading`} className={shared.headingMd}>
              {page.bring.heading}
            </h2>
            <RuledList items={page.bring.items} />
          </div>
        </Container>
      </section>

      <div className={shared.section}>
        <Container>
          <ContentStack>
            <ContentSection id={page.cares.id} heading={page.cares.heading}>
              <RichText blocks={page.cares.blocks} />
            </ContentSection>
            <ContentSection id={page.conditions.id} heading={page.conditions.heading}>
              <p className={cx(shared.body, styles.conditionsIntro)}>{page.conditions.intro}</p>
              <Accordion
                items={page.conditions.items.map((item) => ({
                  id: item.id,
                  title: item.title,
                  content: <RichText blocks={item.blocks} />,
                }))}
              />
            </ContentSection>
            <ContentSection id={page.team.id} heading={page.team.heading}>
              <p className={cx(shared.body, styles.teamText)}>{page.team.text}</p>
              <PhysicianRowList physicians={emergencyPhysicians} />
            </ContentSection>
            <ContentSection id="related" heading={page.related.heading}>
              <LinkRowList
                variant="service"
                columns={2}
                items={related.map((item) => ({
                  title: item.title,
                  description: item.summary,
                  link: { href: servicePath(item.slug), verified: true },
                }))}
              />
            </ContentSection>
          </ContentStack>
        </Container>
      </div>

      <PageClosing
        headingId="emergency-closing-heading"
        heading={page.closing.heading}
        body={page.closing.body}
        primaryAction={page.closing.primaryAction}
        secondaryAction={page.closing.secondaryAction}
        contacts={page.closing.contacts}
      />
    </InteriorPage>
  )
}
