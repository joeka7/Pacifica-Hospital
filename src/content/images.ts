import campusExterior from '../assets/images/campus-exterior.svg'
import careersNursingCorridor from '../assets/images/careers-nursing-corridor.svg'
import heroBedsideCare from '../assets/images/hero-bedside-care.svg'
import mentalHealthConsultation from '../assets/images/mental-health-consultation.svg'

export interface SiteImage {
  src: string
  width: number
  height: number
  alt: string
  /** While true, alt text must say "Placeholder image". */
  isPlaceholder: boolean
  /** Final shot description for the photographer. Not rendered. */
  brief: string
}

export const images = {
  hero: {
    src: heroBedsideCare,
    width: 1600,
    height: 1000,
    alt: 'Placeholder image: nurse with a patient at the bedside',
    isPlaceholder: true,
    brief:
      'A PHV nurse talks with an older patient at the bedside. Window light, eye level, natural, no stock posing.',
  },
  campus: {
    src: campusExterior,
    width: 2100,
    height: 800,
    alt: 'Placeholder image: exterior of the hospital building',
    isPlaceholder: true,
    brief: 'The PHV building in early morning light, wide and level, real signage visible.',
  },
  mentalHealth: {
    src: mentalHealthConsultation,
    width: 1200,
    height: 1500,
    alt: 'Placeholder image: counselor and client in conversation',
    isPlaceholder: true,
    brief: 'Counselor and client seated, soft side light, faces partly turned for privacy.',
  },
  careers: {
    src: careersNursingCorridor,
    width: 1200,
    height: 1500,
    alt: 'Placeholder image: nurses walking a hospital corridor',
    isPlaceholder: true,
    brief: 'PHV nurses walking a corridor, strong one-point perspective, real staff.',
  },
} satisfies Record<string, SiteImage>
