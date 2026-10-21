import { Container } from '../components/Container/Container'
import { ContentSection, ContentStack } from '../components/ContentSection/ContentSection'
import shared from '../components/Editorial/editorial.module.css'
import { InteriorPage } from '../components/InteriorPage/InteriorPage'
import { LinkRowList } from '../components/LinkRowList/LinkRowList'
import { PageIntro } from '../components/PageIntro/PageIntro'
import { legalPage } from '../content/legal'
import { links } from '../content/links'

export function LegalPage() {
  const page = legalPage

  return (
    <InteriorPage meta={page.meta} currentPath={links.legal.href} breadcrumb={page.breadcrumb} padEnd>
      <PageIntro
        headingId="legal-heading"
        eyebrow={page.eyebrow}
        heading={page.heading}
        size="md"
        lead={<p>{page.lead}</p>}
      />

      <div className={shared.section}>
        <Container>
          <ContentStack>
            {page.groups.map((group, index) => (
              <ContentSection
                key={group.id}
                id={group.id}
                heading={group.heading}
                number={String(index + 1).padStart(2, '0')}
              >
                <LinkRowList items={group.items} />
              </ContentSection>
            ))}
          </ContentStack>
        </Container>
      </div>
    </InteriorPage>
  )
}
