import aboutCampusWide from '../assets/images/about-campus-wide.svg'
import aboutCareTeam from '../assets/images/about-care-team.svg'
import aboutCorridor from '../assets/images/about-corridor.svg'
import campusExterior from '../assets/images/campus-exterior.svg'
import careersNursingCorridor from '../assets/images/careers-nursing-corridor.svg'
import heroBedsideCare from '../assets/images/hero-bedside-care.svg'
import mentalHealthConsultation from '../assets/images/mental-health-consultation.svg'
import placeholder3x2 from '../assets/images/placeholder-3x2.svg'
import placeholderPortrait from '../assets/images/placeholder-portrait.svg'

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

  // About page
  aboutCampusWide: {
    src: aboutCampusWide,
    width: 2100,
    height: 900,
    alt: 'Placeholder image: the Sun Valley campus from across San Fernando Road',
    isPlaceholder: true,
    brief:
      'The Sun Valley campus in early morning light, level camera from across San Fernando Road. Strong verticals, real signage, no people in focus.',
  },
  aboutCorridor: {
    src: aboutCorridor,
    width: 1500,
    height: 1000,
    alt: 'Placeholder image: an inpatient corridor with a staff member walking away',
    isPlaceholder: true,
    brief:
      'An inpatient corridor at mid-morning: long one-point perspective, daylight from the far window, one staff member walking away from the camera.',
  },
  aboutCareTeam: {
    src: aboutCareTeam,
    width: 1500,
    height: 1000,
    alt: 'Placeholder image: a nurse, physician and case manager at a nurses’ station',
    isPlaceholder: true,
    brief:
      'A nurse, physician and case manager confer at a nurses’ station. Real staff, mid-conversation, natural light, engaged with each other rather than the camera.',
  },
} satisfies Record<string, SiteImage>

/** 3:2 service photograph placeholder; every entry shares one file until shot. */
function servicePlaceholder(subject: string, brief: string): SiteImage {
  return {
    src: placeholder3x2,
    width: 1500,
    height: 1000,
    alt: `Placeholder image: ${subject}`,
    isPlaceholder: true,
    brief,
  }
}

// Service pages. No patient faces; real PHV spaces and staff only.
export const serviceImages = {
  emergency: servicePlaceholder(
    'the Emergency Department entrance',
    'The Emergency Department entrance and signage at dusk, lit, level camera, no patients identifiable.',
  ),
  acuteCare: servicePlaceholder(
    'a hospitalist reviewing a chart with a nurse',
    'A hospitalist and nurse review a chart at the nurses’ station on an acute care floor. Real staff, natural light.',
  ),
  intensiveCare: servicePlaceholder(
    'an intensive care unit bay',
    'An empty, prepared ICU bay with monitors on, shot from the doorway. No patient present.',
  ),
  medicalSurgical: servicePlaceholder(
    'a surgical team preparing an operating room',
    'A surgical team preparing an operating room, masks on, faces turned to the work.',
  ),
  mentalHealthUnit: servicePlaceholder(
    'a quiet day room on the behavioral health unit',
    'A calm day room on the Behavioral Health Unit, daylight, no patients identifiable.',
  ),
  subacute: servicePlaceholder(
    'a respiratory therapist checking ventilator settings',
    'A respiratory therapist checks ventilator settings at a subacute bedside. Patient out of frame.',
  ),
  skilledNursing: servicePlaceholder(
    'a nurse assisting a patient walking in a corridor',
    'A nurse walks alongside a patient in a corridor, both seen from behind, soft daylight.',
  ),
  rehabilitation: servicePlaceholder(
    'a therapist guiding balance exercises in the therapy gym',
    'A physical therapist guides balance exercises in the therapy gym. Patient seen from behind or side.',
  ),
  respiratoryTherapy: servicePlaceholder(
    'a respiratory therapist preparing equipment',
    'A respiratory therapist prepares nebulizer equipment at a supply station. Hands and equipment in focus.',
  ),
  imaging: servicePlaceholder(
    'a technologist at a CT scanner console',
    'A technologist at the CT scanner control console, scanner visible through the window.',
  ),
  laboratory: servicePlaceholder(
    'a medical technologist working at an analyzer',
    'A medical technologist loads samples into an analyzer in the PHV lab. Gloves on, face partly turned.',
  ),
  pharmacy: servicePlaceholder(
    'a pharmacist checking a medication order',
    'A pharmacist checks a medication order at the inpatient pharmacy counter. Labels unreadable.',
  ),
} satisfies Record<string, SiteImage>

/** Portrait placeholder for physician profiles until approved headshots are supplied. */
export function physicianPortrait(name: string): SiteImage {
  return {
    src: placeholderPortrait,
    width: 1200,
    height: 1500,
    alt: `Placeholder image: portrait of ${name}`,
    isPlaceholder: true,
    brief: `Approved headshot of ${name}: plain light background, natural light, head and shoulders.`,
  }
}
