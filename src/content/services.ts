import { links, type LinkTarget } from './links'
import type { LabeledLink } from './site'

export interface ServiceItem {
  title: string
  description: string
  link: LinkTarget
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
      { title: 'Emergency Department', description: 'Open 24 hours', link: links.emergencyDepartment },
      {
        title: 'Mental Health Urgent Care Clinic',
        description: 'Crisis support around the clock',
        link: links.mentalHealthClinic,
      },
    ],
  },
  {
    heading: 'Hospital stays',
    tone: 'standard',
    items: [
      { title: 'Acute care', description: 'Diagnosis and treatment, 231 beds', link: links.acuteCare },
      { title: 'Surgery', description: 'Inpatient and outpatient', link: links.surgery },
      { title: 'Inpatient treatments', description: 'Care during your stay', link: links.inpatient },
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
      },
      { title: 'Rehabilitation', description: 'Return home safely', link: links.rehabilitation },
      { title: 'Behavioral health', description: 'Evidence-based treatment', link: links.behavioralHealth },
    ],
  },
  {
    heading: 'Tests and outpatient care',
    tone: 'standard',
    items: [
      { title: 'Imaging', description: 'Radiology and nuclear medicine', link: links.imaging },
      { title: 'Laboratory', description: 'Tests ordered by your doctors', link: links.laboratory },
      { title: 'Pharmacy', description: 'For hospital patients', link: links.pharmacy },
      { title: 'Outpatient treatments', description: 'Care without an overnight stay', link: links.outpatient },
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
