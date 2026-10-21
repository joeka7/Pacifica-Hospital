import { links, physicianPath } from './links'
import { contact, hours, type BreadcrumbItem, type PageMeta } from './site'

/*
 * Medical staff, from the official Specialists, Hospitalists, Medical
 * Officers and Hospital Committee pages and each physician's profile.
 *
 * Only fields that differ between physicians on the source are kept. The
 * source also shows "Degrees: M.D. of Medicine" and "Areas of Expertise:
 * Adolescent Health, Immunology, Internal Medicine" on most profiles,
 * including podiatrists and a dentist; that is theme boilerplate and is
 * deliberately omitted. See NOTES.md.
 */

export type PhysicianGroup = 'hospitalist' | 'specialist' | 'officer' | 'department-head' | 'committee'

export interface Physician {
  slug: string
  /** Name as published, without the credential. */
  name: string
  credential: string
  specialty: string
  /** Medical staff office or department leadership. */
  role?: string
  yearsInPractice?: number
  /** Committee names without the word "Committee". */
  committees?: string[]
  groups: PhysicianGroup[]
  /** Profile slug on pacificahospital.com, kept for redirects. */
  sourceSlug: string
}

/** Sorted by family name. */
export const physicians: Physician[] = [
  {
    slug: 'omaran-a-abdeen',
    name: 'Omaran A Abdeen',
    credential: 'M.D.',
    specialty: 'Nephrology',
    groups: ['specialist'],
    sourceSlug: 'omaran-a-abdeen',
  },
  {
    slug: 'assibi-z-abudu',
    name: 'Assibi Z Abudu',
    credential: 'M.D.',
    specialty: 'Emergency Medicine',
    groups: ['specialist'],
    sourceSlug: 'assibi-z-abudu',
  },
  {
    slug: 'hossein-babaali',
    name: 'Hossein Babaali',
    credential: 'M.D.',
    specialty: 'Pulmonary Diseases',
    groups: ['specialist'],
    sourceSlug: 'hossein-babaali',
  },
  {
    slug: 'donald-j-boss',
    name: 'Donald J Boss',
    credential: 'M.D.',
    specialty: 'Tele-Radiology',
    groups: ['specialist'],
    sourceSlug: 'donald-boss',
  },
  {
    slug: 'charles-l-cheng',
    name: 'Charles L Cheng',
    credential: 'M.D.',
    specialty: 'Emergency Medicine',
    groups: ['specialist'],
    sourceSlug: 'charles-l-cheng',
  },
  {
    slug: 'robin-chorn',
    name: 'Robin Chorn',
    credential: 'M.D.',
    specialty: 'Anesthesiology',
    yearsInPractice: 24,
    committees: ['Anesthesiology'],
    groups: ['committee'],
    sourceSlug: 'robin-chorn',
  },
  {
    slug: 'pascal-dabel',
    name: 'Pascal Dabel',
    credential: 'M.D.',
    specialty: 'Nephrology',
    groups: ['specialist'],
    sourceSlug: 'pascal-dabel',
  },
  {
    slug: 'david-dardashti',
    name: 'David Dardashti',
    credential: 'DPM',
    specialty: 'Podiatry',
    groups: ['specialist'],
    sourceSlug: 'david-dardashti',
  },
  {
    slug: 'ganesh-l-devendra',
    name: 'Ganesh L Devendra',
    credential: 'M.D.',
    specialty: 'Urology',
    groups: ['specialist'],
    sourceSlug: 'ganesh-l-devendra',
  },
  {
    slug: 'kalpna-k-durairaj',
    name: 'Kalpna K Durairaj',
    credential: 'M.D.',
    specialty: 'Otolaryngology',
    groups: ['specialist'],
    sourceSlug: 'kalpna-durairaj',
  },
  {
    slug: 'babak-eshaghian',
    name: 'Babak Eshaghian',
    credential: 'M.D.',
    specialty: 'Pulmonary Diseases',
    committees: ['Neuro/Sub-Acute Care'],
    groups: ['committee'],
    sourceSlug: 'babak-eshaghian-md',
  },
  {
    slug: 'carlos-a-flores-jr',
    name: 'Carlos A Flores Jr',
    credential: 'M.D.',
    specialty: 'OB/GYN',
    yearsInPractice: 7,
    groups: ['specialist'],
    sourceSlug: 'carlos-a-flores',
  },
  {
    slug: 'erlinda-e-dy-grey',
    name: 'Erlinda E Dy Grey',
    credential: 'M.D.',
    specialty: 'Family Medicine',
    groups: ['specialist'],
    sourceSlug: 'erlinda-grey',
  },
  {
    slug: 'jehad-m-haggiagi',
    name: 'Jehad M Haggiagi',
    credential: 'M.D.',
    specialty: 'Nephrology',
    groups: ['specialist'],
    sourceSlug: 'jehad-haggiagi',
  },
  {
    slug: 'billy-t-hour',
    name: 'Billy T Hour',
    credential: 'M.D.',
    specialty: 'Nephrology',
    groups: ['specialist'],
    sourceSlug: 'billy-hour',
  },
  {
    slug: 'clifford-iriele',
    name: 'Clifford Iriele',
    credential: 'M.D.',
    specialty: 'Psychiatry',
    yearsInPractice: 10,
    committees: ['Behavioral Health Utilization Review'],
    groups: ['committee'],
    sourceSlug: 'clifford-irele',
  },
  {
    slug: 'franck-juste',
    name: 'Franck Juste',
    credential: 'M.D.',
    specialty: 'Internal Medicine',
    yearsInPractice: 30,
    groups: ['hospitalist', 'specialist'],
    sourceSlug: 'franck-juste',
  },
  {
    slug: 'vinay-v-keesara',
    name: 'Vinay V Keesara',
    credential: 'M.D.',
    specialty: 'Cardiology',
    groups: ['specialist'],
    sourceSlug: 'vinay-keesara',
  },
  {
    slug: 'farough-kerendi',
    name: 'Farough Kerendi',
    credential: 'M.D.',
    specialty: 'General Medicine',
    role: 'Chief of Staff',
    yearsInPractice: 36,
    committees: ['Credentials', 'Ethics', 'Emergency Services', 'Medical Executive', 'Physician Well Being'],
    groups: ['officer', 'committee'],
    sourceSlug: 'faroukh-kerendi',
  },
  {
    slug: 'in-soo-kim',
    name: 'In Soo Kim',
    credential: 'M.D.',
    specialty: 'Orthopedic Surgery',
    groups: ['specialist'],
    sourceSlug: 'in-soo-kim',
  },
  {
    slug: 'wayne-m-kishimoto',
    name: 'Wayne M Kishimoto',
    credential: 'M.D.',
    specialty: 'Tele-Radiology',
    groups: ['specialist'],
    sourceSlug: 'wayne-kishimoto',
  },
  {
    slug: 'william-j-kopelman',
    name: 'William J Kopelman',
    credential: 'M.D.',
    specialty: 'Emergency Medicine',
    groups: ['specialist'],
    sourceSlug: 'william-kopelman',
  },
  {
    slug: 'fidel-lara-jr',
    name: 'Fidel Lara, Jr.',
    credential: 'M.D.',
    specialty: 'Internal Medicine',
    yearsInPractice: 18,
    committees: ['Treatment, Surveillance and Transfusion'],
    groups: ['committee'],
    sourceSlug: 'fidel-lara',
  },
  {
    slug: 'zinovy-n-lekht',
    name: 'Zinovy N Lekht',
    credential: 'M.D.',
    specialty: 'Neurology',
    groups: ['specialist'],
    sourceSlug: 'zivovy-lekht',
  },
  {
    slug: 'mitra-mashreghi',
    name: 'Mitra Mashreghi',
    credential: 'D.D.S',
    specialty: 'Dentistry',
    groups: ['specialist'],
    sourceSlug: 'mitra-mashreghi',
  },
  {
    slug: 'maria-montoya',
    name: 'Maria Montoya',
    credential: 'M.D.',
    specialty: 'Emergency Medicine',
    groups: ['specialist'],
    sourceSlug: 'maria-montoya',
  },
  {
    slug: 'farshid-nejad',
    name: 'Farshid Nejad',
    credential: 'DPM',
    specialty: 'Podiatry',
    groups: ['specialist'],
    sourceSlug: 'farshid-nejad',
  },
  {
    slug: 'farsheed-nikbakht',
    name: 'Farsheed Nikbakht',
    credential: 'M.D.',
    specialty: 'Emergency Medicine',
    role: 'Vice Chief of Staff and Director of ER Services',
    yearsInPractice: 27,
    committees: ['Emergency Services', 'Multidisciplinary Peer Review'],
    groups: ['officer', 'committee'],
    sourceSlug: 'farsheed-nikbakht',
  },
  {
    slug: 'albino-ong',
    name: 'Albino Ong',
    credential: 'M.D.',
    specialty: 'Radiology',
    yearsInPractice: 30,
    committees: ['Radiology'],
    groups: ['committee'],
    sourceSlug: 'albino-ong',
  },
  {
    slug: 'teresita-oro',
    name: 'Teresita Oro',
    credential: 'M.D.',
    specialty: 'OB/GYN',
    role: 'Department Head of Gynecology',
    yearsInPractice: 28,
    groups: ['department-head'],
    sourceSlug: 'teresita-oro',
  },
  {
    slug: 'abel-ramos',
    name: 'Abel Ramos',
    credential: 'D.O.',
    specialty: 'Emergency Medicine',
    groups: ['specialist'],
    sourceSlug: 'abel-ramos',
  },
  {
    slug: 'suresh-rao',
    name: 'Suresh Rao',
    credential: 'M.D.',
    specialty: 'Pulmonary Diseases',
    groups: ['specialist'],
    sourceSlug: 'suresh-rao',
  },
  {
    slug: 'lad-rubaum',
    name: 'Lad Rubaum',
    credential: 'M.D.',
    specialty: 'Otolaryngology',
    role: 'Department Head of Surgery',
    groups: ['department-head'],
    sourceSlug: 'lad-rubaum',
  },
  {
    slug: 'norma-c-salceda',
    name: 'Norma C Salceda',
    credential: 'M.D.',
    specialty: 'OB/GYN',
    groups: ['specialist'],
    sourceSlug: 'norma-salceda',
  },
  {
    slug: 'sasan-sani',
    name: 'Sasan Sani',
    credential: 'M.D.',
    specialty: 'Pulmonology',
    committees: ['Neuro/Sub-Acute Care'],
    groups: ['committee'],
    sourceSlug: 'sasan-sani',
  },
  {
    slug: 'arnold-r-savage',
    name: 'Arnold R Savage',
    credential: 'M.D.',
    specialty: 'Gastroenterology',
    groups: ['specialist'],
    sourceSlug: 'arnold-savage',
  },
  {
    slug: 'parag-a-shah',
    name: 'Parag A Shah',
    credential: 'M.D.',
    specialty: 'Nephrology',
    groups: ['specialist'],
    sourceSlug: 'parag-a-shah',
  },
  {
    slug: 'armin-vishteh',
    name: 'Armin Vishteh',
    credential: 'M.D.',
    specialty: 'Ophthalmology',
    groups: ['specialist'],
    sourceSlug: 'armin-vishteh',
  },
]

export function displayName(physician: Physician): string {
  return `${physician.name}, ${physician.credential}`
}

export function findPhysician(slug: string): Physician | undefined {
  return physicians.find((physician) => physician.slug === slug)
}

export function physicianLink(physician: Physician) {
  return { href: physicianPath(physician.slug), verified: true }
}

/** Finder tabs. Each maps to a source page: Hospitalists and Specialists. */
export const finderGroups = [
  { id: 'all', label: 'All physicians', link: links.physicians },
  { id: 'hospitalists', label: 'Hospitalists', group: 'hospitalist', link: links.hospitalists },
  { id: 'specialists', label: 'Specialists', group: 'specialist', link: links.specialists },
] as const

export type FinderGroupId = (typeof finderGroups)[number]['id']

export const physicianFinder = {
  meta: {
    title: 'Find a Physician | Pacifica Hospital of the Valley',
    description:
      'Search hospitalists and specialists on the medical staff at Pacifica Hospital of the Valley by name or specialty.',
  } satisfies PageMeta,
  breadcrumb: [{ label: 'Home', link: links.home }, { label: 'Find a physician' }] satisfies BreadcrumbItem[],
  eyebrow: 'Physician finder',
  heading: 'Find a physician.',
  lead: 'Explore our physicians or speak directly with a team member. We’ll help you find the specialist or primary care expert who’s right for you.',
  assistance: {
    before: 'Need help finding a physician? Call ',
    phone: contact.mainPhone,
    after: `, ${hours.physicianAssistance}.`,
  },
  groupsLabel: 'Physician group',
  searchRegionLabel: 'Search physicians',
  searchLabel: 'Search by name or specialty',
  specialtyLabel: 'Specialty',
  allSpecialties: 'All specialties',
  resultsNoun: { one: 'physician', other: 'physicians' },
  emptyHeading: 'No physicians match your search.',
  emptyBody: 'Try a different name or specialty, or call us and we’ll help you find the right physician.',
  clear: 'Clear search',
  tableCaption: 'Physicians on the medical staff',
  columns: { name: 'Name', specialty: 'Specialty', role: 'Leadership' },
  leadershipLink: { label: 'Medical staff leadership and committees', link: links.medicalLeadership },
}

export const medicalLeadership = {
  meta: {
    title: 'Medical Staff Leadership | Pacifica Hospital of the Valley',
    description:
      'Medical staff officers, department heads and committee members at Pacifica Hospital of the Valley.',
  } satisfies PageMeta,
  breadcrumb: [
    { label: 'Home', link: links.home },
    { label: 'Find a physician', link: links.physicians },
    { label: 'Medical staff leadership' },
  ] satisfies BreadcrumbItem[],
  eyebrow: 'Medical staff',
  heading: 'Medical staff leadership.',
  lead: 'The officers, department heads and committees of the Pacifica Hospital of the Valley medical staff.',
  sections: {
    officers: { id: 'officers', heading: 'Medical officers' },
    departmentHeads: { id: 'department-heads', heading: 'Department heads' },
    committees: { id: 'committees', heading: 'Hospital committees' },
  },
  committeeSuffix: 'Committee',
  finderLink: { label: 'Find a physician', link: links.physicians },
}

export const physicianProfile = {
  eyebrow: 'Physician profile',
  specialty: 'Specialty',
  role: 'Leadership',
  years: 'Years in practice',
  committees: 'Committees',
  assistanceHeading: 'Help choosing a physician',
  assistanceBody: `Call our main line, ${hours.physicianAssistance}, and a team member will help you.`,
  assistancePhone: contact.mainPhone,
  sameSpecialtyHeading: 'Other physicians in',
  backLink: { label: 'All physicians', link: links.physicians },
  leadershipLink: { label: 'Medical staff leadership', link: links.medicalLeadership },
}

export function physicianBreadcrumb(physician: Physician): BreadcrumbItem[] {
  return [
    { label: 'Home', link: links.home },
    { label: 'Find a physician', link: links.physicians },
    { label: displayName(physician) },
  ]
}

export function physicianMeta(physician: Physician): PageMeta {
  return {
    title: `${displayName(physician)} | Pacifica Hospital of the Valley`,
    description: `${displayName(physician)}, ${physician.specialty}, on the medical staff at Pacifica Hospital of the Valley in Sun Valley, CA.`,
  }
}
