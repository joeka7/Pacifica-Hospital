import type { ContentBlock } from '../../content/blocks'
import { cx } from '../../utils/cx'
import { HoursList } from '../EmergencyInfo/HoursList'
import { RuledList } from '../RuledList/RuledList'
import { TextLink } from '../TextLink/TextLink'
import styles from './RichText.module.css'

interface RichTextProps {
  blocks: ContentBlock[]
  className?: string
}

/** Renders structured body copy from src/content. */
export function RichText({ blocks, className }: RichTextProps) {
  return (
    <div className={cx(styles.root, className)}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={index} className={styles.paragraph}>
                {block.text}
              </p>
            )
          case 'linkParagraph':
            return (
              <p key={index} className={styles.paragraph}>
                {block.text}{' '}
                <TextLink href={block.link.href}>{block.linkLabel}</TextLink>
              </p>
            )
          case 'list':
            return (
              <div key={index} className={styles.listBlock}>
                {block.label && <p className={styles.listLabel}>{block.label}</p>}
                <RuledList items={block.items} columns={block.columns} />
              </div>
            )
          case 'details':
            return (
              <div key={index} className={styles.details}>
                <HoursList rows={block.rows} />
              </div>
            )
        }
      })}
    </div>
  )
}
