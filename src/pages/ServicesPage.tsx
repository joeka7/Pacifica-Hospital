import { Container } from '../components/Container/Container'
import shared from '../components/Editorial/editorial.module.css'
import { EmergencyNotice } from '../components/EmergencyNotice/EmergencyNotice'
import { InteriorPage } from '../components/InteriorPage/InteriorPage'
import { LinkRowList } from '../components/LinkRowList/LinkRowList'
import { PageClosing } from '../components/PageClosing/PageClosing'
import { PageIntro } from '../components/PageIntro/PageIntro'
import { links } from '../content/links'
import {
  describeSettings,
  servicePageCopy,
  servicesDirectory,
  type CareSetting,
  type DirectoryEntry,
} from '../content/servicePages'
import { hospitalContacts } from '../content/site'
import { cx } from '../utils/cx'
import styles from './ServicesPage.module.css'

function readSetting(): CareSetting | null {
  const value = new URLSearchParams(window.location.search).get('setting')
  return value === 'inpatient' || value === 'outpatient' ? value : null
}

function describe(entry: DirectoryEntry): string {
  if (entry.settings.length === 0) return entry.description
  return `${entry.description} · ${describeSettings(entry.settings)}`
}

export function ServicesPage() {
  const setting = readSetting()
  const directory = servicesDirectory
  const groups = directory.groups
    .map((group) => ({
      ...group,
      entries: setting ? group.entries.filter((entry) => entry.settings.includes(setting)) : group.entries,
    }))
    .filter((group) => group.entries.length > 0)
  const count = groups.reduce((total, group) => total + group.entries.length, 0)

  return (
    <InteriorPage meta={directory.meta} currentPath={links.allServices.href} breadcrumb={directory.breadcrumb}>
      <PageIntro
        headingId="services-heading"
        eyebrow={directory.eyebrow}
        heading={directory.heading}
        facts={directory.facts}
        lead={<p>{directory.lead}</p>}
      />

      <div className={shared.section}>
        <Container>
          <div className={styles.toolbar}>
            <nav aria-label={directory.filterLabel}>
              <ul className={styles.filters}>
                {directory.filters.map((filter) => (
                  <li key={filter.label}>
                    <a
                      href={filter.link.href}
                      className={styles.filter}
                      aria-current={filter.setting === setting ? 'page' : undefined}
                    >
                      {filter.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <p className={styles.count}>
              {count} {count === 1 ? 'service' : 'services'}
            </p>
          </div>

          <div className={styles.groups}>
            {groups.map((group) => (
              <section
                key={group.id}
                id={group.id}
                className={cx(shared.grid, styles.group, group.tone === 'emergency' && styles.emergency)}
                aria-labelledby={`${group.id}-heading`}
              >
                <div className={styles.groupHead}>
                  <span className={cx(shared.number, styles.number)} aria-hidden="true">
                    {group.number}
                  </span>
                  <h2 id={`${group.id}-heading`} className={styles.groupHeading}>
                    {group.heading}
                  </h2>
                </div>
                <LinkRowList
                  variant="service"
                  columns={2}
                  className={styles.groupList}
                  items={group.entries.map((entry) => ({
                    title: entry.title,
                    description: describe(entry),
                    link: entry.link,
                  }))}
                />
              </section>
            ))}
          </div>

          <EmergencyNotice heading={directory.emergency.heading} className={styles.notice}>
            <p>{directory.emergency.body}</p>
          </EmergencyNotice>
        </Container>
      </div>

      <PageClosing
        headingId="services-closing-heading"
        heading={servicePageCopy.closing.heading}
        body={servicePageCopy.closing.body}
        primaryAction={{ label: 'Find a physician', link: links.physicians }}
        secondaryAction={{ label: 'Contact us', link: links.contact }}
        contacts={hospitalContacts}
      />
    </InteriorPage>
  )
}
