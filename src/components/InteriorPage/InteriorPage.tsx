import type { ReactNode } from 'react'
import type { BreadcrumbItem, PageMeta } from '../../content/site'
import { useDocumentMeta } from '../../hooks/useDocumentMeta'
import { useHashScroll } from '../../hooks/useHashScroll'
import { cx } from '../../utils/cx'
import { Breadcrumb } from '../Breadcrumb/Breadcrumb'
import shared from '../Editorial/editorial.module.css'
import { SiteFooter } from '../SiteFooter/SiteFooter'
import { SiteHeader } from '../SiteHeader/SiteHeader'
import { SkipLink } from '../SkipLink/SkipLink'
import styles from './InteriorPage.module.css'

interface InteriorPageProps {
  meta: PageMeta
  /** Path used to mark the current main-nav item or section. */
  currentPath?: string
  breadcrumb?: BreadcrumbItem[]
  /** Add bottom spacing when the page ends on a content section rather than a closing. */
  padEnd?: boolean
  children: ReactNode
}

/** Shared shell for interior pages, matching the About page structure. */
export function InteriorPage({ meta, currentPath, breadcrumb, padEnd = false, children }: InteriorPageProps) {
  useDocumentMeta(meta)
  useHashScroll()

  return (
    <div className={styles.page}>
      <SkipLink />
      <SiteHeader currentPath={currentPath} />
      <main id="main" tabIndex={-1} className={cx(padEnd && shared.pageEnd)}>
        {breadcrumb && <Breadcrumb items={breadcrumb} />}
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}
