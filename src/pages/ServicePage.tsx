import { Button } from '../components/Button/Button'
import { Container } from '../components/Container/Container'
import { ContentSection, ContentSections, ContentStack } from '../components/ContentSection/ContentSection'
import shared from '../components/Editorial/editorial.module.css'
import { HoursList } from '../components/EmergencyInfo/HoursList'
import { InteriorPage } from '../components/InteriorPage/InteriorPage'
import { LinkRowList } from '../components/LinkRowList/LinkRowList'
import { PageClosing } from '../components/PageClosing/PageClosing'
import { PageIntro } from '../components/PageIntro/PageIntro'
import { PhysicianRowList } from '../components/PhysicianRow/PhysicianRow'
import { ResponsiveImage } from '../components/ResponsiveImage/ResponsiveImage'
import { links, servicePath } from '../content/links'
import { physicians } from '../content/physicians'
import {
  findServicePage,
  serviceBreadcrumb,
  servicePageCopy,
  type ServicePageData,
} from '../content/servicePages'
import { hospitalContacts } from '../content/site'
import { cx } from '../utils/cx'
import styles from './ServicePage.module.css'

interface ServicePageProps {
  page: ServicePageData
}

export function ServicePage({ page }: ServicePageProps) {
  const related = page.related
    .map((slug) => findServicePage(slug))
    .filter((item): item is ServicePageData => item !== undefined)
  const specialists = physicians.filter((physician) =>
    page.physicianSpecialties?.includes(physician.specialty),
  )

  return (
    <InteriorPage meta={page.meta} currentPath={servicePath(page.slug)} breadcrumb={serviceBreadcrumb(page.title)}>
      <PageIntro
        headingId="service-heading"
        eyebrow={servicePageCopy.eyebrow}
        heading={page.title}
        size="md"
        lead={page.lead.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      />

      <div className={styles.overviewWrap}>
        <Container className={cx(shared.grid, styles.overview)}>
          <div className={styles.media}>
            <ResponsiveImage image={page.image} priority className={styles.image} />
          </div>
          <aside className={styles.glance} aria-labelledby="glance-heading">
            <h2 id="glance-heading" className={cx(shared.eyebrow, styles.glanceHeading)}>
              {servicePageCopy.glanceHeading}
            </h2>
            <HoursList rows={page.glance} />
            <div className={styles.actions}>
              <Button href={links.contact.href} variant="primary" size="md">
                Contact us
              </Button>
              <Button href={links.physicians.href} variant="secondary" size="md">
                Find a physician
              </Button>
            </div>
          </aside>
        </Container>
      </div>

      <div className={shared.section}>
        <Container>
          <ContentSections sections={page.sections} />
        </Container>
      </div>

      {(specialists.length > 0 || related.length > 0) && (
        <div className={shared.section}>
          <Container>
            <ContentStack>
              {specialists.length > 0 && (
                <ContentSection id="physicians" heading={servicePageCopy.physiciansHeading}>
                  <PhysicianRowList physicians={specialists} />
                </ContentSection>
              )}
              {related.length > 0 && (
                <ContentSection id="related" heading={servicePageCopy.relatedHeading}>
                  <LinkRowList
                    variant="service"
                    items={related.map((item) => ({
                      title: item.title,
                      description: item.summary,
                      link: { href: servicePath(item.slug), verified: true },
                    }))}
                  />
                </ContentSection>
              )}
            </ContentStack>
          </Container>
        </div>
      )}

      <PageClosing
        headingId="service-closing-heading"
        heading={servicePageCopy.closing.heading}
        body={servicePageCopy.closing.body}
        primaryAction={{ label: 'All services', link: links.allServices }}
        secondaryAction={{ label: 'Contact us', link: links.contact }}
        contacts={hospitalContacts}
      />
    </InteriorPage>
  )
}
