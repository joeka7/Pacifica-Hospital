import { Container } from '../components/Container/Container'
import shared from '../components/Editorial/editorial.module.css'
import { InteriorPage } from '../components/InteriorPage/InteriorPage'
import { LinkRowList } from '../components/LinkRowList/LinkRowList'
import { PageIntro } from '../components/PageIntro/PageIntro'
import { RichText } from '../components/RichText/RichText'
import { links } from '../content/links'
import { privacyPage, privacySections } from '../content/privacy'
import { cx } from '../utils/cx'
import styles from './PrivacyPage.module.css'

export function PrivacyPage() {
  const page = privacyPage

  return (
    <InteriorPage meta={page.meta} currentPath={links.hipaa.href} breadcrumb={page.breadcrumb} padEnd>
      <PageIntro
        headingId="privacy-heading"
        eyebrow={page.eyebrow}
        heading={page.heading}
        size="md"
        facts={page.facts}
        lead={<p>{page.lead}</p>}
      />

      <div className={shared.section}>
        <Container className={cx(shared.grid, styles.layout)}>
          <nav className={styles.contents} aria-labelledby="privacy-contents-heading">
            <h2 id="privacy-contents-heading" className={shared.eyebrow}>
              {page.contentsLabel}
            </h2>
            <ol className={styles.contentsList}>
              {privacySections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className={styles.contentsLink}>
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className={styles.document}>
            {privacySections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className={styles.section}
                aria-labelledby={`${section.id}-heading`}
              >
                <h2 id={`${section.id}-heading`} className={styles.heading}>
                  {section.heading}
                </h2>
                {section.blocks.length > 0 && <RichText blocks={section.blocks} />}
                {section.subsections.map((subsection) => (
                  <div key={subsection.id} className={styles.subsection}>
                    <h3 className={styles.subheading}>{subsection.heading}</h3>
                    <RichText blocks={subsection.blocks} />
                  </div>
                ))}
              </section>
            ))}

            <section className={styles.section} aria-labelledby="privacy-documents-heading">
              <h2 id="privacy-documents-heading" className={styles.heading}>
                {page.documentsHeading}
              </h2>
              <LinkRowList items={page.documents} />
            </section>
          </div>
        </Container>
      </div>
    </InteriorPage>
  )
}
