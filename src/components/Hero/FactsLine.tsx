import styles from './FactsLine.module.css'

interface FactsLineProps {
  items: string[]
}

export function FactsLine({ items }: FactsLineProps) {
  return (
    <ul className={styles.facts}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
