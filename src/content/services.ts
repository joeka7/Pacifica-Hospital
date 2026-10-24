import { serviceImages, type SiteImage } from './images'
import { links, type LinkTarget } from './links'
import type { LabeledLink } from './site'

export interface ServicePhoto {
  image: SiteImage
  /**
   * Vertical crop position, as a percentage from the top. The 16:9 tablet
   * box crops a 3:2 photo top and bottom only, so this keeps the subject in frame.
   */
  cropY: number
}

export interface ServiceItem {
  title: string
  description: string
  link: LinkTarget
  /**
   * Photo above the title, part of the same link. On the home directory it
   * shows for a group's first service, and for every service in the mobile
   * carousel. Null marks a service with no suitable photo yet: it is shown
   * as text only.
   */
  photo: ServicePhoto | null
}

export interface ServiceGroupData {
  heading: string
  /** "emergency" draws the red top rule; reserved for emergency care. */
  tone: 'emergency' | 'standard'
  items: ServiceItem[]
}

export const servicesSection = {
  heading: 'Find the care you need',
  allServices: { label: 'See all services', link: links.allServices } satisfies LabeledLink,
}

export const serviceGroups: ServiceGroupData[] = [
  {
    heading: 'Emergency and urgent care',
    tone: 'emergency',
    items: [
      {
        title: 'Emergency Department',
        description: 'Open 24 hours',
        link: links.emergencyDepartment,
        photo: { image: serviceImages.emergency, cropY: 70 },
      },
      {
        title: 'Mental Health Urgent Care Clinic',
        description: 'Crisis support around the clock',
        link: links.mentalHealthClinic,
        // Text only: the clinic's only photo is the Mental Health feature directly below.
        photo: null,
      },
    ],
  },
  {
    heading: 'Hospital stays',
    tone: 'standard',
    items: [
      {
        title: 'Acute care',
        description: 'Diagnosis and treatment, 231 beds',
        link: links.acuteCare,
        photo: { image: serviceImages.acuteCare, cropY: 15 },
      },
      {
        title: 'Surgery',
        description: 'Inpatient and outpatient',
        link: links.surgery,
        photo: { image: serviceImages.medicalSurgical, cropY: 55 },
      },
      {
        title: 'Inpatient treatments',
        description: 'Care during your stay',
        link: links.inpatient,
        // A prepared patient room; the ICU is one of the inpatient units.
        photo: { image: serviceImages.intensiveCare, cropY: 70 },
      },
    ],
  },
  {
    heading: 'Recovery',
    tone: 'standard',
    items: [
      {
        title: 'Subacute care',
        description: 'Respiratory, ventilator, tracheostomy, wound care',
        link: links.subacuteCare,
        photo: { image: serviceImages.subacute, cropY: 45 },
      },
      {
        title: 'Rehabilitation',
        description: 'Return home safely',
        link: links.rehabilitation,
        photo: { image: serviceImages.rehabilitation, cropY: 15 },
      },
      {
        title: 'Behavioral health',
        description: 'Evidence-based treatment',
        link: links.behavioralHealth,
        photo: { image: serviceImages.mentalHealthUnit, cropY: 55 },
      },
    ],
  },
  {
    heading: 'Tests and outpatient care',
    tone: 'standard',
    items: [
      {
        title: 'Imaging',
        description: 'Radiology and nuclear medicine',
        link: links.imaging,
        photo: { image: serviceImages.imaging, cropY: 65 },
      },
      {
        title: 'Laboratory',
        description: 'Tests ordered by your doctors',
        link: links.laboratory,
        photo: { image: serviceImages.laboratory, cropY: 40 },
      },
      {
        title: 'Pharmacy',
        description: 'For hospital patients',
        link: links.pharmacy,
        photo: { image: serviceImages.pharmacy, cropY: 55 },
      },
      {
        title: 'Outpatient treatments',
        description: 'Care without an overnight stay',
        link: links.outpatient,
        // Text only: no existing photo shows outpatient care in general.
        photo: null,
      },
    ],
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
