import { useState } from 'react'
import { featuredServices, servicesSection, type FeaturedService } from '../../content/services'
import { cx } from '../../utils/cx'
import { ArrowIcon } from '../ArrowIcon/ArrowIcon'
import { ArrowLink } from '../ArrowLink/ArrowLink'
import { Container } from '../Container/Container'
import { ResponsiveImage } from '../ResponsiveImage/ResponsiveImage'
import { imageSizes } from '../ResponsiveImage/sizes'
import styles from './ServicesDirectory.module.css'

/**
 * Home "Find the care you need": four featured services, in one row on
 * desktop and two by two below 1080px. The full list is on /services.
 */
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
        <ul className={styles.grid}>
          {featuredServices.map((service) => (
            <FeaturedServiceItem key={service.title} service={service} />
          ))}
        </ul>
      </Container>
    </section>
  )
}

function FeaturedServiceItem({ service }: { service: FeaturedService }) {
  // A photo that fails to load is dropped rather than left as an empty box.
  const [imageFailed, setImageFailed] = useState(false)
  const content = (
    <>
      {!imageFailed && (
        <ResponsiveImage
          image={service.image}
          sizes={imageSizes.featuredService}
          decorative
          onError={() => setImageFailed(true)}
          className={styles.image}
        />
      )}
      <span className={styles.title}>{service.title}</span>
      <span className={styles.description}>{service.description}</span>
    </>
  )

  return (
    <li className={cx(styles.item, service.tone === 'emergency' && styles.emergency)}>
      {service.link.href === null ? (
        <div className={styles.link}>{content}</div>
      ) : (
        <a href={service.link.href} className={styles.link}>
          {content}
          <ArrowIcon size={18} className={styles.arrow} />
        </a>
      )}
    </li>
  )
}
