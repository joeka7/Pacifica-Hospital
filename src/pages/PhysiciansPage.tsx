import { useEffect, useId, useMemo, useState } from 'react'
import { ArrowLink } from '../components/ArrowLink/ArrowLink'
import { Container } from '../components/Container/Container'
import shared from '../components/Editorial/editorial.module.css'
import { InteriorPage } from '../components/InteriorPage/InteriorPage'
import { PageIntro } from '../components/PageIntro/PageIntro'
import { PhoneLink } from '../components/PhoneLink/PhoneLink'
import { PhysicianRowList } from '../components/PhysicianRow/PhysicianRow'
import { links } from '../content/links'
import { finderGroups, physicianFinder, physicians, type FinderGroupId } from '../content/physicians'
import styles from './PhysiciansPage.module.css'

function readParams() {
  const params = new URLSearchParams(window.location.search)
  const groupParam = params.get('group')
  const group = finderGroups.find((item) => item.id === groupParam)?.id ?? 'all'
  return { group, query: params.get('q') ?? '', specialty: params.get('specialty') ?? '' }
}

/** Keeps the search in the address bar so results can be shared and survive a reload. */
function writeParams(group: FinderGroupId, query: string, specialty: string) {
  const params = new URLSearchParams()
  if (group !== 'all') params.set('group', group)
  if (query.trim()) params.set('q', query.trim())
  if (specialty) params.set('specialty', specialty)
  const search = params.toString()
  window.history.replaceState(null, '', `${window.location.pathname}${search ? `?${search}` : ''}`)
}

function normalize(text: string): string {
  return text.toLowerCase().replace(/[.,]/g, '').replace(/\s+/g, ' ').trim()
}

export function PhysiciansPage() {
  const copy = physicianFinder
  const [initial] = useState(readParams)
  const { group } = initial
  const [query, setQuery] = useState(initial.query)
  const [specialty, setSpecialty] = useState(initial.specialty)
  const searchId = useId()
  const specialtyId = useId()

  const groupDef = finderGroups.find((item) => item.id === group)
  const inGroup = useMemo(
    () =>
      groupDef && 'group' in groupDef
        ? physicians.filter((physician) => physician.groups.includes(groupDef.group))
        : physicians,
    [groupDef],
  )
  const specialties = useMemo(
    () => [...new Set(inGroup.map((physician) => physician.specialty))].sort((a, b) => a.localeCompare(b)),
    [inGroup],
  )
  const activeSpecialty = specialties.includes(specialty) ? specialty : ''

  const results = useMemo(() => {
    const terms = normalize(query).split(' ').filter(Boolean)
    return inGroup.filter((physician) => {
      if (activeSpecialty && physician.specialty !== activeSpecialty) return false
      const haystack = normalize(`${physician.name} ${physician.credential} ${physician.specialty} ${physician.role ?? ''}`)
      return terms.every((term) => haystack.includes(term))
    })
  }, [inGroup, query, activeSpecialty])

  useEffect(() => {
    writeParams(group, query, activeSpecialty)
  }, [group, query, activeSpecialty])

  const isFiltered = query.trim() !== '' || activeSpecialty !== ''
  const noun = results.length === 1 ? copy.resultsNoun.one : copy.resultsNoun.other

  return (
    <InteriorPage meta={copy.meta} currentPath={links.physicians.href} breadcrumb={copy.breadcrumb} padEnd>
      <PageIntro headingId="physicians-heading" eyebrow={copy.eyebrow} heading={copy.heading} lead={<p>{copy.lead}</p>}>
        <p className={styles.assistance}>
          {copy.assistance.before}
          <PhoneLink phone={copy.assistance.phone} />
          {copy.assistance.after}
        </p>
        <ArrowLink href={copy.leadershipLink.link.href}>{copy.leadershipLink.label}</ArrowLink>
      </PageIntro>

      <div className={shared.section}>
        <Container>
          <nav aria-label={copy.groupsLabel} className={styles.groups}>
            <ul className={styles.groupList}>
              {finderGroups.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link.href}
                    className={styles.groupLink}
                    aria-current={item.id === group ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div role="search" aria-label={copy.searchRegionLabel} className={styles.controls}>
            <div className={styles.field}>
              <label htmlFor={searchId} className={styles.label}>
                {copy.searchLabel}
              </label>
              <input
                id={searchId}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                autoComplete="off"
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor={specialtyId} className={styles.label}>
                {copy.specialtyLabel}
              </label>
              <select
                id={specialtyId}
                value={activeSpecialty}
                onChange={(event) => setSpecialty(event.target.value)}
                className={styles.select}
              >
                <option value="">{copy.allSpecialties}</option>
                {specialties.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.resultsBar}>
            <p className={styles.count} role="status">
              {results.length} {noun}
            </p>
            {isFiltered && (
              <button
                type="button"
                className={styles.clear}
                onClick={() => {
                  setQuery('')
                  setSpecialty('')
                }}
              >
                {copy.clear}
              </button>
            )}
          </div>

          {results.length > 0 ? (
            <PhysicianRowList physicians={results} topRule="strong" />
          ) : (
            <div className={styles.empty}>
              <h2 className={styles.emptyHeading}>{copy.emptyHeading}</h2>
              <p className={shared.body}>
                {copy.emptyBody} <PhoneLink phone={copy.assistance.phone} />
              </p>
            </div>
          )}
        </Container>
      </div>
    </InteriorPage>
  )
}
