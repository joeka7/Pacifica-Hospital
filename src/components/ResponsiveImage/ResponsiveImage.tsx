import type { SiteImage } from '../../content/images'
import { cx } from '../../utils/cx'
import styles from './ResponsiveImage.module.css'

interface ResponsiveImageProps {
  image: SiteImage
  /** Above-the-fold image: eager load with high fetch priority. */
  priority?: boolean
  /** Set --ratio (and optionally --image-height / --image-min-height) from this class. */
  className?: string
}

export function ResponsiveImage({ image, priority = false, className }: ResponsiveImageProps) {
  return (
    <img
      className={cx(styles.image, className)}
      src={image.src}
      srcSet={image.srcSet}
      sizes={image.sizes}
      width={image.width}
      height={image.height}
      alt={image.alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? undefined : 'async'}
      fetchPriority={priority ? 'high' : undefined}
    />
  )
}
