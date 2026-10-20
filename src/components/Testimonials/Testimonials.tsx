import { leadTestimonial, testimonials, testimonialsSection } from '../../content/testimonials'
import { Container } from '../Container/Container'
import styles from './Testimonials.module.css'

export function Testimonials() {
  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <Container>
        <h2 id="testimonials-heading" className="visually-hidden">
          {testimonialsSection.heading}
        </h2>
        <figure className={styles.lead}>
          <blockquote className={styles.leadQuote}>
            <p>“{leadTestimonial.quote}”</p>
          </blockquote>
          <figcaption className={styles.leadCaption}>{leadTestimonial.attribution}</figcaption>
        </figure>
        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <figure key={testimonial.attribution} className={styles.item}>
              <blockquote className={styles.quote}>
                <p>“{testimonial.quote}”</p>
              </blockquote>
              <figcaption className={styles.caption}>{testimonial.attribution}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
