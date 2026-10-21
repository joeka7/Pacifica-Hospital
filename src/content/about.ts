import { links } from './links'
import {
  contact,
  facts,
  hours,
  site,
  type BreadcrumbItem,
  type ContactItem,
  type LabeledLink,
  type PageMeta,
  type SectionRail,
} from './site'

/*
 * About page content. Open verification items (vision wording, values set,
 * new microcopy) are listed in NOTES.md under "About page".
 */

export const aboutMeta: PageMeta = {
  title: 'About | Pacifica Hospital of the Valley',
  description:
    'Learn about Pacifica Hospital of the Valley, a 231-bed acute care hospital in Sun Valley, CA, accredited by The Joint Commission.',
}

export const breadcrumb: BreadcrumbItem[] = [
  { label: 'Home', link: links.home },
  { label: 'About' },
]

export const aboutHero = {
  eyebrow: 'About Pacifica Hospital',
  // Non-breaking space keeps "of care." together on the last line.
  heading: 'A better standard of care.',
  facts: [`${facts.beds} in Sun Valley`, facts.accreditation, facts.tenure],
  lead: 'Discover our approach to compassionate care and clinical excellence, and to creating a better experience for every patient across the San Fernando Valley community.',
  caption: {
    name: site.name,
    address: `${contact.address.street}, ${contact.address.city}, ${contact.address.state} ${contact.address.zip}`,
  },
}

export const aboutIntro = {
  rail: { label: 'Who we are', number: '01' } satisfies SectionRail,
  heading: 'Care that puts people first.',
  paragraphs: [
    'Pacifica Hospital of the Valley is an acute care hospital in Sun Valley, California. Our 231-bed facility provides inpatient, outpatient, and 24-hour emergency care for adults across the San Fernando Valley.',
    'We understand that stepping inside a hospital can feel overwhelming. That is why our care balances clinical expertise with warmth, attentiveness, and family collaboration. Whether in our Emergency Department or during extended subacute care, we honor each patient as an individual.',
  ],
  /** The hospital's own description, not a quotation. */
  statement:
    'A full-service diagnostic center and medical care facility in the San Fernando region of Los Angeles.',
}

export interface GuidingStatement {
  number: string
  label: string
  statement: string
  support: string
  /** True while the wording awaits approval. */
  isDraft: boolean
}

export const missionVision = {
  rail: { label: 'Guiding commitments', number: '02' } satisfies SectionRail,
  heading: 'Our mission and vision.',
  items: [
    {
      number: '01',
      label: 'Mission',
      // Verified mission, as used on the homepage.
      statement: '“To enrich health and vitality in our communities and the lives we serve.”',
      support:
        'Every test, procedure, and moment at the bedside is carried out with patient dignity at its core.',
      isDraft: false,
    },
    {
      number: '02',
      label: 'Vision',
      statement:
        '“To create a healthcare experience built around trust, continuous improvement, and the needs of every patient.”',
      support:
        'We continually refine our services and care pathways to remain a provider families across the Valley can rely on.',
      isDraft: true,
    },
  ] satisfies GuidingStatement[],
}

export interface NumberedItem {
  number: string
  title: string
  text: string
}

export const aboutValues = {
  heading: 'The values that guide our care',
  intro: 'Our physicians, nursing teams, and support staff bring these values to every department.',
  items: [
    {
      number: '01',
      title: 'Compassion',
      text: 'Treat every patient with empathy, dignity, and respect, recognizing that healing begins with attentive understanding.',
    },
    {
      number: '02',
      title: 'Excellence',
      text: 'Approach every aspect of clinical and operational care with professionalism, safety, and close attention to quality.',
    },
    {
      number: '03',
      title: 'Integrity',
      text: 'Build trust through honesty, clear billing, accountability, and open communication with families.',
    },
    {
      number: '04',
      title: 'Collaboration',
      text: 'Encourage teamwork, active listening, and coordinated discharge planning centered on each patient’s recovery.',
    },
  ] satisfies NumberedItem[],
}

export interface DefinitionItem {
  term: string
  description: string
}

export const aboutPeople = {
  eyebrow: 'Our people',
  heading: 'The people behind the care.',
  paragraphs: [
    'Behind every stay are registered nurses, physicians, respiratory therapists, case managers, and allied health staff who make Pacifica Hospital a dependable part of the community.',
    'We foster open dialogue: physicians speak directly with family members, caregivers at the bedside advocate for patient comfort, and next steps are explained in plain language.',
  ],
  details: [
    {
      term: 'Attentive nursing',
      description: 'Personalized monitoring, responsiveness, and attentive care at the bedside.',
    },
    {
      term: 'Coordinated care',
      description:
        'Alignment between primary doctors, hospitalists, therapists, and family caregivers.',
    },
  ] satisfies DefinitionItem[],
}

export const aboutApproach = {
  eyebrow: 'Thoughtful practice',
  heading: 'Our approach to care',
  intro:
    'A hospital visit can be a defining moment in a person’s life. We shape every step to reduce anxiety, explain diagnoses clearly, and support recovery.',
  items: [
    {
      number: '01',
      title: 'Personalized attention',
      text: 'Care decisions are tailored to each patient’s health, recovery, and personal preferences, rather than one-size-fits-all treatment.',
    },
    {
      number: '02',
      title: 'Clear communication',
      text: 'We avoid confusing medical jargon. Care teams share clear updates, discuss treatment options openly, and welcome questions from family.',
    },
    {
      number: '03',
      title: 'Respectful care',
      text: 'We honor religious, cultural, and dietary considerations, and treat every individual with courtesy and dignity.',
    },
  ] satisfies NumberedItem[],
}

const closingContacts: ContactItem[] = [
  { label: 'Emergency Department, open 24 hours', phone: contact.emergencyPhone, tone: 'emergency' },
  { label: 'Main line', phone: contact.mainPhone, tone: 'standard' },
  { label: 'Visiting hours', value: hours.visiting, tone: 'standard' },
  { label: 'Address', value: `${contact.address.street}, ${contact.address.city}`, tone: 'standard' },
]

export const aboutClosing = {
  heading: 'Your care journey starts here.',
  body: 'Explore our services or contact us directly. We’re here to help you and your loved ones.',
  primaryAction: { label: 'Explore our services', link: links.allServices } satisfies LabeledLink,
  secondaryAction: { label: 'Contact us', link: links.contact } satisfies LabeledLink,
  contacts: closingContacts,
}
