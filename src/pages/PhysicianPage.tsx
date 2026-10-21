import { ArrowLink } from '../components/ArrowLink/ArrowLink'
import { Container } from '../components/Container/Container'
import { ContentSection, ContentStack } from '../components/ContentSection/ContentSection'
import shared from '../components/Editorial/editorial.module.css'
import { InteriorPage } from '../components/InteriorPage/InteriorPage'
import { PhoneLink } from '../components/PhoneLink/PhoneLink'
import { PhysicianRowList } from '../components/PhysicianRow/PhysicianRow'
import { ResponsiveImage } from '../components/ResponsiveImage/ResponsiveImage'
import { physicianPortrait } from '../content/images'
import { links } from '../content/links'
import {
  displayName,
  physicianBreadcrumb,
  physicianMeta,
  physicianProfile,
  physicians,
  type Physician,
} from '../content/physicians'
import styles from './PhysicianPage.module.css'

interface PhysicianPageProps {
  physician: Physician
}

export function PhysicianPage({ physician }: PhysicianPageProps) {
  const copy = physicianProfile
  const name = displayName(physician)
  const colleagues = physicians.filter(
    (other) => other.specialty === physician.specialty && other.slug !== physician.slug,
  )
  const isLeader = physician.groups.some((group) => group !== 'hospitalist' && group !== 'specialist')

  return (
    <InteriorPage
      meta={physicianMeta(physician)}
      currentPath={`${links.physicians.href}/${physician.slug}`}
      breadcrumb={physicianBreadcrumb(physician)}
      padEnd
    >
      <section className={styles.profile} aria-labelledby="physician-heading">
        <Container className={shared.grid}>
          <div className={styles.portrait}>
            <ResponsiveImage image={physicianPortrait(name)} priority className={styles.image} />
          </div>
          <div className={styles.details}>
            <p className={shared.eyebrow}>{copy.eyebrow}</p>
            <h1 id="physician-heading" className={styles.name}>
              {name}
            </h1>

            <dl className={styles.facts}>
              <div className={styles.fact}>
                <dt className={styles.term}>{copy.specialty}</dt>
                <dd className={styles.value}>{physician.specialty}</dd>
              </div>
              {physician.role && (
                <div className={styles.fact}>
                  <dt className={styles.term}>{copy.role}</dt>
                  <dd className={styles.value}>{physician.role}</dd>
                </div>
              )}
              {physician.yearsInPractice !== undefined && (
                <div className={styles.fact}>
                  <dt className={styles.term}>{copy.years}</dt>
                  <dd className={styles.value}>{physician.yearsInPractice}</dd>
                </div>
              )}
              {physician.committees && physician.committees.length > 0 && (
                <div className={styles.fact}>
                  <dt className={styles.term}>{copy.committees}</dt>
                  <dd className={styles.value}>
                    <ul className={styles.committees}>
                      {physician.committees.map((committee) => (
                        <li key={committee}>{committee}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
            </dl>

            <div className={styles.assistance}>
              <h2 className={styles.assistanceHeading}>{copy.assistanceHeading}</h2>
              <p className={shared.body}>
                {copy.assistanceBody} <PhoneLink phone={copy.assistancePhone} />
              </p>
            </div>

            <div className={styles.links}>
              <ArrowLink href={copy.backLink.link.href}>{copy.backLink.label}</ArrowLink>
              {isLeader && <ArrowLink href={copy.leadershipLink.link.href}>{copy.leadershipLink.label}</ArrowLink>}
            </div>
          </div>
        </Container>
      </section>

      {colleagues.length > 0 && (
        <div className={shared.section}>
          <Container>
            <ContentStack>
              <ContentSection id="same-specialty" heading={`${copy.sameSpecialtyHeading} ${physician.specialty}`}>
                <PhysicianRowList physicians={colleagues} />
              </ContentSection>
            </ContentStack>
          </Container>
        </div>
      )}
    </InteriorPage>
  )
}
