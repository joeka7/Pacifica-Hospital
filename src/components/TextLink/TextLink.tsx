import type { ReactNode } from 'react'

interface TextLinkProps {
  /** Null renders non-interactive text with the same class. */
  href: string | null
  className?: string
  lang?: string
  /** Marks the link to the page ("page") or section ("true") being viewed. */
  ariaCurrent?: 'page' | 'true'
  onClick?: () => void
  children: ReactNode
}

/** A plain link that degrades to text when its destination is unresolved. */
export function TextLink({ href, className, lang, ariaCurrent, onClick, children }: TextLinkProps) {
  if (href === null) {
    return (
      <span className={className} lang={lang}>
        {children}
      </span>
    )
  }

  return (
    <a href={href} className={className} lang={lang} aria-current={ariaCurrent} onClick={onClick}>
      {children}
    </a>
  )
}
