import { BillComplaintNotice } from '../components/BillComplaintNotice/BillComplaintNotice'
import { Container } from '../components/Container/Container'
import { ContentSection, ContentSections } from '../components/ContentSection/ContentSection'
import shared from '../components/Editorial/editorial.module.css'
import { InteriorPage } from '../components/InteriorPage/InteriorPage'
import { LinkRowList } from '../components/LinkRowList/LinkRowList'
import { PageIntro } from '../components/PageIntro/PageIntro'
import { links } from '../content/links'
import { billingPage } from '../content/patients'

export function BillingPage() {
  const page = billingPage

  return (
    <InteriorPage meta={page.meta} currentPath={links.patientBilling.href} breadcrumb={page.breadcrumb}>
      <PageIntro
        headingId="billing-heading"
        eyebrow={page.eyebrow}
        heading={page.heading}
        size="md"
        lead={<p>{page.lead}</p>}
      />

      <div className={shared.section}>
        <Container>
          <ContentSections sections={page.sections}>
            <ContentSection
              id="documents"
              heading={page.documentsHeading}
              number={String(page.sections.length + 1).padStart(2, '0')}
            >
              <LinkRowList items={page.documents} />
            </ContentSection>
          </ContentSections>
        </Container>
      </div>

      <BillComplaintNotice />
    </InteriorPage>
  )
}
