import { serviceImages, type SiteImage } from './images'
import { links, type LinkTarget } from './links'
import type { LabeledLink } from './site'

export interface FeaturedService {
  title: string
  description: string
  link: LinkTarget
  /** Shown 3:2, the photos' own shape, so nothing is cropped. */
  image: SiteImage
  /** "emergency" draws the red top rule; reserved for emergency care. */
  tone: 'emergency' | 'standard'
}

export const servicesSection = {
  heading: 'Find the care you need',
  allServices: { label: 'See all services', link: links.allServices } satisfies LabeledLink,
}

/**
 * The four services featured on the home page. Every service is listed on
 * /services (servicesDirectory in servicePages.ts); the descriptions are the
 * summaries used there and on each service page.
 */
export const featuredServices: FeaturedService[] = [
  {
    title: 'Emergency Services',
    description: 'Open 24 hours for medical emergencies',
    link: links.emergencyDepartment,
    image: serviceImages.emergency,
    tone: 'emergency',
  },
  {
    title: 'Imaging',
    description: 'MRI, CT, ultrasound, X-ray and more',
    link: links.imaging,
    image: serviceImages.imaging,
    tone: 'standard',
  },
  {
    title: 'Laboratory',
    description: 'Tests ordered by your doctor, walk-ins welcome',
    link: links.laboratory,
    image: serviceImages.laboratory,
    tone: 'standard',
  },
  {
    title: 'Surgery',
    description: 'Planned and emergency surgery',
    link: links.surgery,
    image: serviceImages.medicalSurgical,
    tone: 'standard',
  },
]

export const mentalHealthFeature = {
  eyebrow: 'PHV Mental Health Urgent Care Clinic',
  heading: 'You don’t have to struggle in silence.',
  body: 'Welcoming, safe, and inclusive support, here around the clock to help you through a crisis. We work closely with each person to reduce stress, understand urgent needs, and build a care plan for daily life.',
  points: [
    'Crisis intervention and stabilization, including co-occurring substance use disorders',
    'Case management with links to community-based recovery services',
    'Care for people with intellectual and developmental disabilities',
  ],
  action: { label: 'About the clinic', link: links.mentalHealthClinic } satisfies LabeledLink,
}
