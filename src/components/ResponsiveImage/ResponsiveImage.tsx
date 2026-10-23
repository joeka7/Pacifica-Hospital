import type { SiteImage } from '../../content/images'
import { cx } from '../../utils/cx'
import styles from './ResponsiveImage.module.css'

interface ResponsiveImageProps {
  image: SiteImage
  /** The slot's drawn width per breakpoint, from `imageSizes` in ./sizes. Used with `image.srcSet`. */
  sizes?: string
  /** Above-the-fold image: eager load with high fetch priority. */
  priority?: boolean
  /** Set --ratio (and optionally --image-height / --image-min-height) from this class. */
  className?: string
}

export function ResponsiveImage({ image, sizes, priority = false, className }: ResponsiveImageProps) {
  return (
    <img
      className={cx(styles.image, className)}
      srcSet={image.srcSet}
      sizes={image.srcSet ? sizes : undefined}
      src={image.src}
      width={image.width}
      height={image.height}
      alt={image.alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? undefined : 'async'}
      fetchPriority={priority ? 'high' : undefined}
    />
  )
}
