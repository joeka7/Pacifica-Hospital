import { ArrowLink } from '../components/ArrowLink/ArrowLink'
import { Container } from '../components/Container/Container'
import { ContentSection, ContentStack } from '../components/ContentSection/ContentSection'
import shared from '../components/Editorial/editorial.module.css'
import { InteriorPage } from '../components/InteriorPage/InteriorPage'
import { PageIntro } from '../components/PageIntro/PageIntro'
import { PhysicianRowList } from '../components/PhysicianRow/PhysicianRow'
import { links } from '../content/links'
import { displayName, medicalLeadership, physicianLink, physicians, type Physician } from '../content/physicians'
import styles from './LeadershipPage.module.css'

/** Committee name → members, alphabetical by committee. */
function committeeIndex(): [string, Physician[]][] {
  const index = new Map<string, Physician[]>()
  for (const physician of physicians) {
    for (const committee of physician.committees ?? []) {
      index.set(committee, [...(index.get(committee) ?? []), physician])
    }
  }
  return [...index.entries()].sort(([a], [b]) => a.localeCompare(b))
}

export function LeadershipPage() {
  const copy = medicalLeadership
  const officers = physicians.filter((physician) => physician.groups.includes('officer'))
  const departmentHeads = physicians.filter((physician) => physician.groups.includes('department-head'))
  const committees = committeeIndex()

  return (
    <InteriorPage meta={copy.meta} currentPath={links.medicalLeadership.href} breadcrumb={copy.breadcrumb} padEnd>
      <PageIntro
        headingId="leadership-heading"
        eyebrow={copy.eyebrow}
        heading={copy.heading}
        size="md"
        lead={<p>{copy.lead}</p>}
      >
        <ArrowLink href={copy.finderLink.link.href}>{copy.finderLink.label}</ArrowLink>
      </PageIntro>

      <div className={shared.section}>
        <Container>
          <ContentStack>
            <ContentSection id={copy.sections.officers.id} heading={copy.sections.officers.heading} number="01">
              <PhysicianRowList physicians={officers} />
            </ContentSection>
            <ContentSection
              id={copy.sections.departmentHeads.id}
              heading={copy.sections.departmentHeads.heading}
              number="02"
            >
              <PhysicianRowList physicians={departmentHeads} />
            </ContentSection>
            <ContentSection id={copy.sections.committees.id} heading={copy.sections.committees.heading} number="03">
              <dl className={styles.committees}>
                {committees.map(([committee, members]) => (
                  <div key={committee} className={styles.committee}>
                    <dt className={styles.committeeName}>
                      {committee} {copy.committeeSuffix}
                    </dt>
                    <dd className={styles.members}>
                      <ul className={styles.memberList}>
                        {members.map((member) => (
                          <li key={member.slug}>
                            <a href={physicianLink(member).href} className={styles.member}>
                              {displayName(member)}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                ))}
              </dl>
            </ContentSection>
          </ContentStack>
        </Container>
      </div>
    </InteriorPage>
  )
}
