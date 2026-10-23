import aboutCampusWide from '../assets/images/about-campus-wide.svg'
import aboutCareTeam from '../assets/images/about-care-team.webp'
import aboutCareTeam800 from '../assets/images/about-care-team-800.webp'
import aboutCorridor from '../assets/images/about-corridor.webp'
import aboutCorridor800 from '../assets/images/about-corridor-800.webp'
import acuteCareChartReview from '../assets/images/acute-care-chart-review.webp'
import acuteCareChartReview800 from '../assets/images/acute-care-chart-review-800.webp'
import behavioralHealthLounge from '../assets/images/behavioral-health-lounge.webp'
import behavioralHealthLounge800 from '../assets/images/behavioral-health-lounge-800.webp'
import campusExterior from '../assets/images/campus-exterior.svg'
import careersNursingCorridor from '../assets/images/careers-nursing-corridor.webp'
import careersNursingCorridor720 from '../assets/images/careers-nursing-corridor-720.webp'
import contactReceptionDesk from '../assets/images/contact-reception-desk.webp'
import contactReceptionDesk800 from '../assets/images/contact-reception-desk-800.webp'
import ctScannerRoom from '../assets/images/ct-scanner-room.webp'
import ctScannerRoom800 from '../assets/images/ct-scanner-room-800.webp'
import emergencyTreatmentArea from '../assets/images/emergency-treatment-area.webp'
import emergencyTreatmentArea800 from '../assets/images/emergency-treatment-area-800.webp'
import heroBedsideCare from '../assets/images/hero-bedside-care.webp'
import heroBedsideCare960 from '../assets/images/hero-bedside-care-960.webp'
import intensiveCareRoom from '../assets/images/intensive-care-room.webp'
import intensiveCareRoom800 from '../assets/images/intensive-care-room-800.webp'
import laboratoryCentrifuge from '../assets/images/laboratory-centrifuge.webp'
import laboratoryCentrifuge800 from '../assets/images/laboratory-centrifuge-800.webp'
import mentalHealthConsultation from '../assets/images/mental-health-consultation.webp'
import mentalHealthConsultation720 from '../assets/images/mental-health-consultation-720.webp'
import operatingRoom from '../assets/images/operating-room.webp'
import operatingRoom800 from '../assets/images/operating-room-800.webp'
import pharmacyMedicationStation from '../assets/images/pharmacy-medication-station.webp'
import pharmacyMedicationStation800 from '../assets/images/pharmacy-medication-station-800.webp'
import rehabilitationBalanceTherapy from '../assets/images/rehabilitation-balance-therapy.webp'
import rehabilitationBalanceTherapy800 from '../assets/images/rehabilitation-balance-therapy-800.webp'
import respiratoryNebulizer from '../assets/images/respiratory-nebulizer.webp'
import respiratoryNebulizer800 from '../assets/images/respiratory-nebulizer-800.webp'
import skilledNursingWalk from '../assets/images/skilled-nursing-walk.webp'
import skilledNursingWalk800 from '../assets/images/skilled-nursing-walk-800.webp'
import subacuteBedsideMonitor from '../assets/images/subacute-bedside-monitor.webp'
import subacuteBedsideMonitor800 from '../assets/images/subacute-bedside-monitor-800.webp'

export interface SiteImage {
  src: string
  /** Smaller rendition for the browser to choose from; `src` is the largest. */
  srcSet?: string
  /** Rendered width hint for `srcSet`, matching the slot's layout. */
  sizes?: string
  width: number
  height: number
  alt: string
  /** While true, alt text must say "Placeholder image". */
  isPlaceholder: boolean
  /**
   * Source page of a licensed stock photo standing in until on-site
   * photography is shot to `brief`. Licences: src/assets/images/image-sources.md.
   */
  stockSource?: string
  /** Final shot description for the photographer. Not rendered. */
  brief: string
}

// Rendered widths: 7–8 of 12 columns on desktop, full width once the grid stacks.
const COLUMN_SIZES = '(max-width: 1079px) 100vw, min(58vw, 880px)'
const HERO_SIZES = '(max-width: 899px) 100vw, min(62vw, 920px)'
const HALF_SIZES = '(max-width: 1079px) 100vw, 50vw'
// Contact page photo: half width until the grid stacks at 767px.
const CONTACT_SIZES = '(max-width: 767px) 100vw, 50vw'

interface StockPhoto {
  src: string
  small: string
  smallWidth: number
  width: number
  height: number
  sizes: string
  alt: string
  source: string
  brief: string
}

function stockPhoto({ src, small, smallWidth, width, height, sizes, alt, source, brief }: StockPhoto): SiteImage {
  return {
    src,
    srcSet: `${small} ${smallWidth}w, ${src} ${width}w`,
    sizes,
    width,
    height,
    alt,
    isPlaceholder: false,
    stockSource: source,
    brief,
  }
}

/** 3:2 photograph shown in a 7- or 8-column media slot. */
function columnPhoto(src: string, small: string, alt: string, source: string, brief: string): SiteImage {
  return stockPhoto({ src, small, smallWidth: 800, width: 1600, height: 1067, sizes: COLUMN_SIZES, alt, source, brief })
}

/** 4:5 photograph shown at up to half the viewport. */
function portraitPhoto(src: string, small: string, alt: string, source: string, brief: string): SiteImage {
  return stockPhoto({ src, small, smallWidth: 720, width: 1200, height: 1500, sizes: HALF_SIZES, alt, source, brief })
}

export const images = {
  hero: stockPhoto({
    src: heroBedsideCare,
    small: heroBedsideCare960,
    smallWidth: 960,
    width: 1920,
    height: 1200,
    sizes: HERO_SIZES,
    alt: 'A nurse leans in to talk with an older patient resting in bed',
    source: 'https://www.pexels.com/photo/caregiver-taking-care-of-patient-on-bed-18459210/',
    brief:
      'A PHV nurse talks with an older patient at the bedside. Window light, eye level, natural, no stock posing.',
  }),
  campus: {
    src: campusExterior,
    width: 2100,
    height: 800,
    alt: 'Placeholder image: exterior of the hospital building',
    isPlaceholder: true,
    brief: 'The PHV building in early morning light, wide and level, real signage visible.',
  },
  mentalHealth: portraitPhoto(
    mentalHealthConsultation,
    mentalHealthConsultation720,
    'A counselor and a client in conversation, seated in a quiet room',
    'https://www.pexels.com/photo/vertical-shot-of-two-woman-talking-in-a-living-room-6255599/',
    'Counselor and client seated, soft side light, faces partly turned for privacy.',
  ),
  careers: portraitPhoto(
    careersNursingCorridor,
    careersNursingCorridor720,
    'A nurse in blue scrubs wheels a vital signs monitor along a hospital corridor',
    'https://www.pexels.com/photo/female-nurse-in-blue-scrubsuit-6129581/',
    'PHV nurses walking a corridor, strong one-point perspective, real staff.',
  ),

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
  aboutCorridor: columnPhoto(
    aboutCorridor,
    aboutCorridor800,
    'A long, daylit hospital corridor with handrails and patient room doors',
    'https://www.pexels.com/photo/modern-hospital-corridor-in-ankara-turkiye-29948395/',
    'An inpatient corridor at mid-morning: long one-point perspective, daylight from the far window, one staff member walking away from the camera.',
  ),
  aboutCareTeam: columnPhoto(
    aboutCareTeam,
    aboutCareTeam800,
    'Two nurses and a physician talking together in a hospital corridor',
    'https://www.pexels.com/photo/doctor-and-nurses-talking-6129436/',
    'A nurse, physician and case manager confer at a nurses’ station. Real staff, mid-conversation, natural light, engaged with each other rather than the camera.',
  ),

  // Contact page: 3:2 beside the phone numbers, in the same columns as the form.
  contactReception: stockPhoto({
    src: contactReceptionDesk,
    small: contactReceptionDesk800,
    smallWidth: 800,
    width: 1600,
    height: 1067,
    sizes: CONTACT_SIZES,
    alt: 'A staff member in scrubs, holding a tablet, talks with a visitor across a front desk',
    source: 'https://www.pexels.com/photo/a-woman-talking-to-a-receptionist-4266932/',
    brief:
      'The PHV main entrance registration desk with a staff member helping a visitor. Natural light, eye level, visitor seen from the side or behind.',
  }),
} satisfies Record<string, SiteImage>

// Service pages. No patient faces; real PHV spaces and staff only once shot.
export const serviceImages = {
  emergency: columnPhoto(
    emergencyTreatmentArea,
    emergencyTreatmentArea800,
    'An emergency treatment area with stretchers, monitors and equipment ready for patients',
    'https://www.pexels.com/photo/emergency-room-emergency-hospital-medical-care-706082/',
    'The Emergency Department entrance and signage at dusk, lit, level camera, no patients identifiable.',
  ),
  acuteCare: columnPhoto(
    acuteCareChartReview,
    acuteCareChartReview800,
    'A physician and a nurse reviewing a patient chart together',
    'https://www.pexels.com/photo/doctor-talking-to-a-nurse-6129153/',
    'A hospitalist and nurse review a chart at the nurses’ station on an acute care floor. Real staff, natural light.',
  ),
  intensiveCare: columnPhoto(
    intensiveCareRoom,
    intensiveCareRoom800,
    'A prepared intensive care room with a bed, monitor and equipment, no patient present',
    'https://www.pexels.com/photo/hospital-bed-near-the-glass-window-4966406/',
    'An empty, prepared ICU bay with monitors on, shot from the doorway. No patient present.',
  ),
  medicalSurgical: columnPhoto(
    operatingRoom,
    operatingRoom800,
    'An operating room with surgical lights, an operating table and anesthesia equipment',
    'https://www.pexels.com/photo/equipment-in-operation-room-12104186/',
    'A surgical team preparing an operating room, masks on, faces turned to the work.',
  ),
  mentalHealthUnit: columnPhoto(
    behavioralHealthLounge,
    behavioralHealthLounge800,
    'A calm, sunlit lounge with sofas and tall windows',
    'https://www.pexels.com/photo/modern-sunlit-lobby-with-large-windows-38554812/',
    'A calm day room on the Behavioral Health Unit, daylight, no patients identifiable.',
  ),
  subacute: columnPhoto(
    subacuteBedsideMonitor,
    subacuteBedsideMonitor800,
    'A nurse checking a bedside monitor beside an IV stand',
    'https://www.pexels.com/photo/nurse-looking-at-a-monitor-6129683/',
    'A respiratory therapist checks ventilator settings at a subacute bedside. Patient out of frame.',
  ),
  skilledNursing: columnPhoto(
    skilledNursingWalk,
    skilledNursingWalk800,
    'A nurse walks beside an older woman using a walker in a bright corridor, both seen from behind',
    'https://www.pexels.com/photo/caring-interaction-between-nurse-and-elderly-patient-34328480/',
    'A nurse walks alongside a patient in a corridor, both seen from behind, soft daylight.',
  ),
  rehabilitation: columnPhoto(
    rehabilitationBalanceTherapy,
    rehabilitationBalanceTherapy800,
    'A therapist holds a patient’s hands as he practices a balance exercise in a therapy gym',
    'https://www.pexels.com/photo/a-woman-guiding-a-man-on-his-physical-therapy-6111585/',
    'A physical therapist guides balance exercises in the therapy gym. Patient seen from behind or side.',
  ),
  respiratoryTherapy: columnPhoto(
    respiratoryNebulizer,
    respiratoryNebulizer800,
    'A healthcare worker preparing a nebulizer',
    'https://www.pexels.com/photo/close-up-photo-of-a-healthcare-professional-holding-a-nebulizer-7447013/',
    'A respiratory therapist prepares nebulizer equipment at a supply station. Hands and equipment in focus.',
  ),
  imaging: columnPhoto(
    ctScannerRoom,
    ctScannerRoom800,
    'A CT scanner in a bright imaging room',
    'https://www.pexels.com/photo/diagnosis-device-in-hospital-13176452/',
    'A technologist at the CT scanner control console, scanner visible through the window.',
  ),
  laboratory: columnPhoto(
    laboratoryCentrifuge,
    laboratoryCentrifuge800,
    'A gloved technologist loading a blood sample into a centrifuge',
    'https://www.pexels.com/photo/doctor-using-a-centrifuge-machine-6627667/',
    'A medical technologist loads samples into an analyzer in the PHV lab. Gloves on, face partly turned.',
  ),
  pharmacy: columnPhoto(
    pharmacyMedicationStation,
    pharmacyMedicationStation800,
    'A healthcare worker retrieving medication at a dispensing station',
    'https://www.pexels.com/photo/medical-practitioner-getting-medicine-from-shelf-6129585/',
    'A pharmacist checks a medication order at the inpatient pharmacy counter. Labels unreadable.',
  ),
} satisfies Record<string, SiteImage>
