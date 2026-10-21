import { Button } from '../components/Button/Button'
import { Container } from '../components/Container/Container'
import { ContentSection, ContentStack } from '../components/ContentSection/ContentSection'
import shared from '../components/Editorial/editorial.module.css'
import { InteriorPage } from '../components/InteriorPage/InteriorPage'
import { LinkRowList } from '../components/LinkRowList/LinkRowList'
import { PageIntro } from '../components/PageIntro/PageIntro'
import { PhoneLink } from '../components/PhoneLink/PhoneLink'
import { ResponsiveImage } from '../components/ResponsiveImage/ResponsiveImage'
import { RichText } from '../components/RichText/RichText'
import { RuledList } from '../components/RuledList/RuledList'
import { careersPage } from '../content/careers'
import { images } from '../content/images'
import { links } from '../content/links'
import { cx } from '../utils/cx'
import styles from './CareersPage.module.css'

export function CareersPage() {
  const page = careersPage

  return (
    <InteriorPage meta={page.meta} currentPath={links.careers.href} breadcrumb={page.breadcrumb} padEnd>
      <PageIntro
        headingId="careers-heading"
        eyebrow={page.eyebrow}
        heading={page.heading}
        facts={page.facts}
        lead={<p>{page.lead}</p>}
      >
        <Button href={page.primaryAction.link.href} variant="primary" arrow>
          {page.primaryAction.label}
        </Button>
      </PageIntro>

      <section className={shared.section} aria-labelledby={`${page.intro.id}-heading`}>
        <Container className={cx(shared.grid, styles.intro)}>
          <div className={styles.media}>
            <ResponsiveImage image={images.careers} className={styles.image} />
          </div>
          <div className={styles.text}>
            <h2 id={`${page.intro.id}-heading`} className={shared.headingLg}>
              {page.intro.heading}
            </h2>
            {page.intro.paragraphs.map((paragraph) => (
              <p key={paragraph} className={shared.body}>
                {paragraph}
              </p>
            ))}
            <div className={styles.benefits}>
              <h3 id={`${page.benefits.id}-heading`} className={styles.benefitsHeading}>
                {page.benefits.heading}
              </h3>
              <RuledList items={page.benefits.items} columns={2} />
            </div>
          </div>
        </Container>
      </section>

      <div className={shared.section}>
        <Container>
          <ContentStack>
            <ContentSection id={page.apply.id} heading={page.apply.heading} number="01">
              <LinkRowList items={page.apply.items} />
            </ContentSection>
            <ContentSection id={page.beforeYouApply.id} heading={page.beforeYouApply.heading} number="02">
              <RichText blocks={page.beforeYouApply.blocks} />
            </ContentSection>
            <ContentSection id="questions" heading={page.questions.heading} number="03">
              <p className={shared.body}>
                {page.questions.before}
                <PhoneLink phone={page.questions.phone} />
                {page.questions.after}
              </p>
            </ContentSection>
          </ContentStack>
        </Container>
      </div>
    </InteriorPage>
  )
}
