import { useState } from 'react'
import type { ServiceGroupData, ServiceItem } from '../../content/services'
import { cx } from '../../utils/cx'
import { LinkRow } from '../LinkRow/LinkRow'
import { ResponsiveImage } from '../ResponsiveImage/ResponsiveImage'
import { imageSizes } from '../ResponsiveImage/sizes'
import styles from './ServiceGroup.module.css'

interface ServiceGroupProps {
  group: ServiceGroupData
}

export function ServiceGroup({ group }: ServiceGroupProps) {
  return (
    <div>
      <h3 className={cx(styles.heading, group.tone === 'emergency' && styles.emergency)}>
        {group.heading}
      </h3>
      <ul className={styles.list}>
        {group.items.map((item) => (
          <li key={item.title} className={styles.item}>
            <ServiceRow item={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function ServiceRow({ item }: { item: ServiceItem }) {
  // A missing photo, or one that fails to load, shows an empty slot of the
  // same size so every row in the directory keeps the same shape.
  const [imageFailed, setImageFailed] = useState(false)
  const media =
    item.photo && !imageFailed ? (
      <ResponsiveImage
        image={item.photo.image}
        sizes={imageSizes.serviceGroup}
        decorative
        objectPosition={`50% ${item.photo.cropY}%`}
        onError={() => setImageFailed(true)}
        className={cx(styles.media, styles.image)}
      />
    ) : (
      <span className={cx(styles.media, styles.gap)} />
    )

  return (
    <LinkRow
      variant="service"
      href={item.link.href}
      title={item.title}
      description={item.description}
      media={media}
    />
  )
}
