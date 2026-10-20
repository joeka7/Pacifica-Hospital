/*
 * Publication approval for every testimonial below must be reconfirmed
 * with PHV before launch. Do not add, edit, or reattribute quotes.
 */
export interface Testimonial {
  quote: string
  attribution: string
}

export const testimonialsSection = {
  heading: 'Patient experiences',
}

export const leadTestimonial: Testimonial = {
  quote: 'All across the board I was treated with kindness and respect.',
  attribution: 'T. O’Donnell, patient',
}

export const testimonials: Testimonial[] = [
  {
    quote: 'They checked on me constantly and made sure I was comfortable at all times.',
    attribution: 'A. Ford',
  },
  {
    quote: 'They really made me feel like they cared about me.',
    attribution: 'B.N.',
  },
  {
    quote: 'Many thanks to the medical, supporting, and administrative staff!',
    attribution: 'Karape Beglary',
  },
]
