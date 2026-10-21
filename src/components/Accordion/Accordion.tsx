import type { ReactNode } from 'react'
import styles from './Accordion.module.css'

export interface AccordionItem {
  id: string
  title: string
  content: ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
}

/**
 * Ruled disclosure list built on native details/summary, so it works with
 * the keyboard, screen readers and in-page search without extra scripting.
 */
export function Accordion({ items }: AccordionProps) {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <details key={item.id} id={item.id} className={styles.item}>
          <summary className={styles.summary}>
            <span className={styles.title}>{item.title}</span>
            <span className={styles.icon} aria-hidden="true" />
          </summary>
          <div className={styles.panel}>{item.content}</div>
        </details>
      ))}
    </div>
  )
}
