import { BillComplaintNotice } from '../components/BillComplaintNotice/BillComplaintNotice'
import { Container } from '../components/Container/Container'
import { ContentSection, ContentSections } from '../components/ContentSection/ContentSection'
import shared from '../components/Editorial/editorial.module.css'
import { HoursList } from '../components/EmergencyInfo/HoursList'
import { InteriorPage } from '../components/InteriorPage/InteriorPage'
import { LinkRowList } from '../components/LinkRowList/LinkRowList'
import { PageIntro } from '../components/PageIntro/PageIntro'
import { PhoneLink } from '../components/PhoneLink/PhoneLink'
import { StepList } from '../components/StepList/StepList'
import { links } from '../content/links'
import { financialAssistancePage } from '../content/patients'
import { contact } from '../content/site'
import { cx } from '../utils/cx'
import styles from './FinancialAssistancePage.module.css'

export function FinancialAssistancePage() {
  const page = financialAssistancePage

  return (
    <InteriorPage meta={page.meta} currentPath={links.helpPaying.href} breadcrumb={page.breadcrumb}>
      <PageIntro
        headingId="assistance-heading"
        eyebrow={page.eyebrow}
        heading={page.heading}
        size="md"
        lead={<p>{page.lead}</p>}
      >
        <div className={styles.contacts}>
          <HoursList rows={page.contacts} />
        </div>
      </PageIntro>

      <div className={shared.section}>
        <Container>
          <ContentSections sections={page.sections}>
            <ContentSection
              id={page.apply.id}
              heading={page.apply.heading}
              number={String(page.sections.length + 1).padStart(2, '0')}
            >
              <StepList steps={page.apply.steps} topRule="light" />
              <LinkRowList items={page.apply.documents} className={styles.documents} />
              <p className={cx(shared.body, styles.help)}>
                {page.apply.help} <PhoneLink phone={contact.businessOfficePhone} />
              </p>
            </ContentSection>
          </ContentSections>
        </Container>
      </div>

      <BillComplaintNotice />
    </InteriorPage>
  )
}
