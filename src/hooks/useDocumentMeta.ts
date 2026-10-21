import { useEffect } from 'react'
import type { PageMeta } from '../content/site'

/** Sets the document title and meta description for the current page. */
export function useDocumentMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = title

    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.name = 'description'
      document.head.append(tag)
    }
    tag.content = description
  }, [title, description])
}
