import type { ServiceGroupData } from '../../content/services'
import { cx } from '../../utils/cx'
import { LinkRow } from '../LinkRow/LinkRow'
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
            <LinkRow
              variant="service"
              href={item.link.href}
              title={item.title}
              description={item.description}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
