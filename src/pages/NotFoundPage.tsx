import { Container } from '../components/Container/Container'
import shared from '../components/Editorial/editorial.module.css'
import { InteriorPage } from '../components/InteriorPage/InteriorPage'
import { LinkRowList } from '../components/LinkRowList/LinkRowList'
import { PageIntro } from '../components/PageIntro/PageIntro'
import { notFoundPage } from '../content/site'

export function NotFoundPage() {
  const page = notFoundPage

  return (
    <InteriorPage meta={page.meta} padEnd>
      <PageIntro
        headingId="not-found-heading"
        eyebrow={page.eyebrow}
        heading={page.heading}
        size="md"
        lead={<p>{page.lead}</p>}
      />
      <div className={shared.section}>
        <Container>
          <LinkRowList items={page.links} variant="service" columns={2} topRule="strong" />
        </Container>
      </div>
    </InteriorPage>
  )
}
