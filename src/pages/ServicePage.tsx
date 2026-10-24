import { Button } from '../components/Button/Button'
import { Container } from '../components/Container/Container'
import { ContentSection, ContentSections, ContentStack } from '../components/ContentSection/ContentSection'
import shared from '../components/Editorial/editorial.module.css'
import { HoursList } from '../components/EmergencyInfo/HoursList'
import { InteriorPage } from '../components/InteriorPage/InteriorPage'
import { LinkRowList } from '../components/LinkRowList/LinkRowList'
import { PageClosing } from '../components/PageClosing/PageClosing'
import { PageIntro } from '../components/PageIntro/PageIntro'
import { ResponsiveImage } from '../components/ResponsiveImage/ResponsiveImage'
import { imageSizes } from '../components/ResponsiveImage/sizes'
import { RuledList } from '../components/RuledList/RuledList'
import { links, servicePath } from '../content/links'
import {
  findServicePage,
  serviceBreadcrumb,
  servicePageCopy,
  type ServiceBand,
  type ServicePageData,
} from '../content/servicePages'
import { hospitalContacts } from '../content/site'
import { cx } from '../utils/cx'
import styles from './ServicePage.module.css'

interface ServicePageProps {
  page: ServicePageData
}

/** Text beside labeled panels of hours or short lists, each under a navy rule like the glance column. */
function ServiceBandSection({ band }: { band: ServiceBand }) {
  const headingId = `${band.id}-heading`

  return (
    <section id={band.id} className={shared.section} aria-labelledby={headingId}>
      <Container className={shared.grid}>
        <div className={styles.bandText}>
          <h2 id={headingId} className={shared.headingMd}>
            {band.heading}
          </h2>
          {band.text.map((paragraph) => (
            <p key={paragraph} className={shared.body}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className={styles.panels}>
          {band.panels.map((panel) => (
            <div key={panel.heading} className={cx(styles.panel, 'rows' in panel && styles.panelWide)}>
              <h3 className={cx(shared.eyebrow, styles.panelHeading)}>{panel.heading}</h3>
              {'rows' in panel ? (
                <HoursList rows={panel.rows} />
              ) : (
                <>
                  {panel.label && <p className={styles.panelLabel}>{panel.label}</p>}
                  <RuledList items={panel.items} />
                </>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function ServicePage({ page }: ServicePageProps) {
  const related = page.related
    .map((slug) => findServicePage(slug))
    .filter((item): item is ServicePageData => item !== undefined)

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
            <ResponsiveImage image={page.image} sizes={imageSizes.mediaColumn} priority className={styles.image} />
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
            </div>
          </aside>
        </Container>
      </div>

      {page.band && <ServiceBandSection band={page.band} />}

      <div className={shared.section}>
        <Container>
          <ContentSections sections={page.sections} />
        </Container>
      </div>

      {related.length > 0 && (
        <div className={shared.section}>
          <Container>
            <ContentStack>
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
