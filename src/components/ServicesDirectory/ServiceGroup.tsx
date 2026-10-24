import { useId, useState } from 'react'
import type { ServiceGroupData, ServiceItem } from '../../content/services'
import { useCarousel } from '../../hooks/useCarousel'
import { cx } from '../../utils/cx'
import { ArrowIcon } from '../ArrowIcon/ArrowIcon'
import { ResponsiveImage } from '../ResponsiveImage/ResponsiveImage'
import { imageSizes } from '../ResponsiveImage/sizes'
import styles from './ServiceGroup.module.css'

interface ServiceGroupProps {
  group: ServiceGroupData
}

/**
 * One category of the home services directory. From 768px it is a column of
 * the directory grid: the first service with its photo, the rest as text
 * rows. Below 768px the same list becomes a swipeable carousel with
 * previous/next buttons beside the heading (ServiceGroup.module.css).
 */
export function ServiceGroup({ group }: ServiceGroupProps) {
  const headingId = useId()
  const listId = useId()
  const carousel = useCarousel<HTMLUListElement>()

  return (
    <div className={styles.group}>
      <div className={cx(styles.header, group.tone === 'emergency' && styles.emergency)}>
        <h3 id={headingId} className={styles.heading}>
          {group.heading}
        </h3>
        <div className={styles.controls}>
          <CarouselButton
            label={`Previous service in ${group.heading}`}
            controls={listId}
            disabled={carousel.atStart}
            onClick={() => carousel.step(-1)}
            className={styles.previous}
          />
          <CarouselButton
            label={`Next service in ${group.heading}`}
            controls={listId}
            disabled={carousel.atEnd}
            onClick={() => carousel.step(1)}
          />
        </div>
      </div>
      <ul id={listId} ref={carousel.ref} className={styles.list} aria-labelledby={headingId}>
        {group.items.map((item, index) => (
          <ServiceEntry key={item.title} item={item} lead={index === 0} />
        ))}
      </ul>
    </div>
  )
}

interface CarouselButtonProps {
  label: string
  controls: string
  disabled: boolean
  onClick: () => void
  className?: string
}

/*
 * aria-disabled rather than disabled, so a keyboard user paging to the end
 * keeps focus on the button instead of losing it to the page.
 */
function CarouselButton({ label, controls, disabled, onClick, className }: CarouselButtonProps) {
  return (
    <button
      type="button"
      className={cx(styles.control, className)}
      aria-label={label}
      aria-controls={controls}
      aria-disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      <ArrowIcon size={18} />
    </button>
  )
}

interface ServiceEntryProps {
  item: ServiceItem
  /** The first service: its photo shows at every width, the others' only in the carousel. */
  lead: boolean
}

function ServiceEntry({ item, lead }: ServiceEntryProps) {
  // A missing photo, or one that fails to load, gives a text-only entry.
  const [imageFailed, setImageFailed] = useState(false)
  const photo = imageFailed ? null : item.photo
  const className = cx(styles.link, photo && styles.hasPhoto)
  const content = (
    <>
      {photo && (
        <ResponsiveImage
          image={photo.image}
          sizes={lead ? imageSizes.serviceLead : imageSizes.serviceSlide}
          decorative
          objectPosition={`50% ${photo.cropY}%`}
          onError={() => setImageFailed(true)}
          className={styles.image}
        />
      )}
      <span className={styles.title}>{item.title}</span>
      <span className={styles.description}>{item.description}</span>
    </>
  )

  return (
    <li className={cx(styles.item, lead && styles.lead, !photo && styles.textOnly)}>
      {item.link.href === null ? (
        <div className={className}>{content}</div>
      ) : (
        <a href={item.link.href} className={className}>
          {content}
          <ArrowIcon size={18} className={styles.arrow} />
        </a>
      )}
    </li>
  )
}
