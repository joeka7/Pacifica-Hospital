import { ArrowLink } from '../components/ArrowLink/ArrowLink'
import { Container } from '../components/Container/Container'
import { ContentSection, ContentStack } from '../components/ContentSection/ContentSection'
import shared from '../components/Editorial/editorial.module.css'
import { EmergencyNotice } from '../components/EmergencyNotice/EmergencyNotice'
import { HoursList } from '../components/EmergencyInfo/HoursList'
import { InteriorPage } from '../components/InteriorPage/InteriorPage'
import { LinkRowList } from '../components/LinkRowList/LinkRowList'
import { PageIntro } from '../components/PageIntro/PageIntro'
import { links } from '../content/links'
import { patientsPage } from '../content/patients'
import styles from './PatientsPage.module.css'

export function PatientsPage() {
  const page = patientsPage

  return (
    <InteriorPage meta={page.meta} currentPath={links.patientResourcesNav.href} breadcrumb={page.breadcrumb} padEnd>
      <PageIntro
        headingId="patients-heading"
        eyebrow={page.eyebrow}
        heading={page.heading}
        facts={page.facts}
        lead={<p>{page.lead}</p>}
      />

      <div className={styles.noticeWrap}>
        <Container>
          <EmergencyNotice heading={page.notice.heading} />
        </Container>
      </div>

      <div className={shared.section}>
        <Container>
          <ContentStack>
            <ContentSection id={page.visit.id} heading={page.visit.heading} number="01">
              <div className={styles.visit}>
                <HoursList rows={page.visit.rows} />
                <div className={styles.address}>
                  <p>{page.visit.address}</p>
                  <ArrowLink href={page.visit.directions.link.href}>{page.visit.directions.label}</ArrowLink>
                </div>
              </div>
            </ContentSection>
            {page.indexes.map((index, position) => (
              <ContentSection
                key={index.id}
                id={index.id}
                heading={index.heading}
                number={String(position + 2).padStart(2, '0')}
              >
                <LinkRowList items={index.items} columns={index.items.length > 2 ? 2 : 1} />
                {index.rows && (
                  <div className={styles.rows}>
                    <HoursList rows={index.rows} />
                  </div>
                )}
              </ContentSection>
            ))}
          </ContentStack>
        </Container>
      </div>
    </InteriorPage>
  )
}
