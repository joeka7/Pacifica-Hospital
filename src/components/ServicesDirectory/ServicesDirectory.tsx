import type { CSSProperties } from 'react'
import { serviceGroups, servicesSection } from '../../content/services'
import { ArrowLink } from '../ArrowLink/ArrowLink'
import { Container } from '../Container/Container'
import { ServiceGroup } from './ServiceGroup'
import styles from './ServicesDirectory.module.css'

// Grid rows each group spans: its header, then one per service of the longest group.
const groupRows = 1 + Math.max(...serviceGroups.map((group) => group.items.length))

export function ServicesDirectory() {
  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <Container>
        <div className={styles.header}>
          <h2 id="services-heading" className={styles.heading}>
            {servicesSection.heading}
          </h2>
          <ArrowLink href={servicesSection.allServices.link.href}>
            {servicesSection.allServices.label}
          </ArrowLink>
        </div>
        <div className={styles.grid} style={{ '--group-rows': groupRows } as CSSProperties}>
          {serviceGroups.map((group) => (
            <ServiceGroup key={group.heading} group={group} />
          ))}
        </div>
      </Container>
    </section>
  )
}
