import aboutCampusWide from '../assets/images/about-campus-wide.svg'
import aboutCareTeam from '../assets/images/about-care-team.webp'
import aboutCorridor from '../assets/images/about-corridor.webp'
import acuteCareChartReview from '../assets/images/acute-care-chart-review.webp'
import behavioralHealthLounge from '../assets/images/behavioral-health-lounge.webp'
import campusSignage from '../assets/images/Gary+Pacifica+Pic+3.webp'
import careersNursingCorridor from '../assets/images/careers-nursing-corridor.webp'
import contactReceptionDesk from '../assets/images/contact-reception-desk.webp'
import ctScannerRoom from '../assets/images/ct-scanner-room.webp'
import emergencyTreatmentArea from '../assets/images/emergency-treatment-area.webp'
import heroBedsideCare from '../assets/images/hero-bedside-care.webp'
import intensiveCareRoom from '../assets/images/intensive-care-room.webp'
import laboratoryCentrifuge from '../assets/images/laboratory-centrifuge.webp'
import mentalHealthConsultation from '../assets/images/mental-health-consultation.webp'
import operatingRoom from '../assets/images/operating-room.webp'
import pharmacyMedicationStation from '../assets/images/pharmacy-medication-station.webp'
import rehabilitationBalanceTherapy from '../assets/images/rehabilitation-balance-therapy.webp'
import respiratoryNebulizer from '../assets/images/respiratory-nebulizer.webp'
import skilledNursingWalk from '../assets/images/skilled-nursing-walk.webp'
import subacuteBedsideMonitor from '../assets/images/subacute-bedside-monitor.webp'

// Smaller WebP renditions of the same files, generated at build time
// (vite.config.ts) and never stored in src/assets/images. Widths are chosen per
// slot shape and stay below the source width, so the source file is always
// the largest candidate. Sizing notes: src/assets/images/image-sources.md.
import aboutCareTeamSrcSet from '../assets/images/about-care-team.webp?w=720;960;1280&as=srcset'
import aboutCorridorSrcSet from '../assets/images/about-corridor.webp?w=720;960;1280&as=srcset'
import acuteCareChartReviewSrcSet from '../assets/images/acute-care-chart-review.webp?w=720;960;1280&as=srcset'
import behavioralHealthLoungeSrcSet from '../assets/images/behavioral-health-lounge.webp?w=720;960;1280&as=srcset'
import campusSignageSrcSet from '../assets/images/Gary+Pacifica+Pic+3.webp?w=1080;1280&as=srcset'
import careersNursingCorridorSrcSet from '../assets/images/careers-nursing-corridor.webp?w=640;960&as=srcset'
import contactReceptionDeskSrcSet from '../assets/images/contact-reception-desk.webp?w=720;960;1280&as=srcset'
import ctScannerRoomSrcSet from '../assets/images/ct-scanner-room.webp?w=720;960;1280&as=srcset'
import emergencyTreatmentAreaSrcSet from '../assets/images/emergency-treatment-area.webp?w=720;960;1280&as=srcset'
import heroBedsideCareSrcSet from '../assets/images/hero-bedside-care.webp?w=640;960;1280;1600&as=srcset'
import intensiveCareRoomSrcSet from '../assets/images/intensive-care-room.webp?w=720;960;1280&as=srcset'
import laboratoryCentrifugeSrcSet from '../assets/images/laboratory-centrifuge.webp?w=720;960;1280&as=srcset'
import mentalHealthConsultationSrcSet from '../assets/images/mental-health-consultation.webp?w=640;960&as=srcset'
import operatingRoomSrcSet from '../assets/images/operating-room.webp?w=720;960;1280&as=srcset'
import pharmacyMedicationStationSrcSet from '../assets/images/pharmacy-medication-station.webp?w=720;960;1280&as=srcset'
import rehabilitationBalanceTherapySrcSet from '../assets/images/rehabilitation-balance-therapy.webp?w=720;960;1280&as=srcset'
import respiratoryNebulizerSrcSet from '../assets/images/respiratory-nebulizer.webp?w=720;960;1280&as=srcset'
import skilledNursingWalkSrcSet from '../assets/images/skilled-nursing-walk.webp?w=720;960;1280&as=srcset'
import subacuteBedsideMonitorSrcSet from '../assets/images/subacute-bedside-monitor.webp?w=720;960;1280&as=srcset'

export interface SiteImage {
  /** The one file for this photo, sized for its largest slot at 2x density. */
  src: string
  /** `src` and its generated renditions, by width. Absent for SVG placeholders. */
  srcSet?: string
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

/** Adds the source file, at its own width, to its generated renditions. */
function withSource(renditions: string, src: string, width: number): string {
  return `${renditions}, ${src} ${width}w`
}

interface StockPhoto {
  src: string
  /** The `?w=…&as=srcset` import of `src`. */
  renditions: string
  width: number
  height: number
  alt: string
  source: string
  brief: string
}

function stockPhoto({ src, renditions, width, height, alt, source, brief }: StockPhoto): SiteImage {
  return {
    src,
    srcSet: withSource(renditions, src, width),
    width,
    height,
    alt,
    isPlaceholder: false,
    stockSource: source,
    brief,
  }
}

/** 3:2 photograph shown in a 7- or 8-column media slot. */
function columnPhoto(
  src: string,
  renditions: string,
  alt: string,
  source: string,
  brief: string,
): SiteImage {
  return stockPhoto({ src, renditions, width: 1600, height: 1067, alt, source, brief })
}

/** 4:5 photograph shown at up to half the viewport. */
function portraitPhoto(
  src: string,
  renditions: string,
  alt: string,
  source: string,
  brief: string,
): SiteImage {
  return stockPhoto({ src, renditions, width: 1200, height: 1500, alt, source, brief })
}

export const images = {
  hero: stockPhoto({
    src: heroBedsideCare,
    renditions: heroBedsideCareSrcSet,
    width: 1920,
    height: 1200,
    alt: 'A nurse leans in to talk with an older patient resting in bed',
    source: 'https://www.pexels.com/photo/caregiver-taking-care-of-patient-on-bed-18459210/',
    brief:
      'A PHV nurse talks with an older patient at the bedside. Window light, eye level, natural, no stock posing.',
  }),
  campus: {
    src: campusSignage,
    srcSet: withSource(campusSignageSrcSet, campusSignage, 1500),
    width: 1500,
    height: 793,
    alt: 'The Pacifica Hospital of the Valley sign on San Fernando Road, pointing to 24-hour emergency care, with the hospital building behind it',
    isPlaceholder: false,
    brief: 'The PHV building in early morning light, wide and level, real signage visible.',
  },
  mentalHealth: portraitPhoto(
    mentalHealthConsultation,
    mentalHealthConsultationSrcSet,
    'A counselor and a client in conversation, seated in a quiet room',
    'https://www.pexels.com/photo/vertical-shot-of-two-woman-talking-in-a-living-room-6255599/',
    'Counselor and client seated, soft side light, faces partly turned for privacy.',
  ),
  careers: portraitPhoto(
    careersNursingCorridor,
    careersNursingCorridorSrcSet,
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
    aboutCorridorSrcSet,
    'A long, daylit hospital corridor with handrails and patient room doors',
    'https://www.pexels.com/photo/modern-hospital-corridor-in-ankara-turkiye-29948395/',
    'An inpatient corridor at mid-morning: long one-point perspective, daylight from the far window, one staff member walking away from the camera.',
  ),
  aboutCareTeam: columnPhoto(
    aboutCareTeam,
    aboutCareTeamSrcSet,
    'Two nurses and a physician talking together in a hospital corridor',
    'https://www.pexels.com/photo/doctor-and-nurses-talking-6129436/',
    'A nurse, physician and case manager confer at a nurses’ station. Real staff, mid-conversation, natural light, engaged with each other rather than the camera.',
  ),

  // Contact page: 3:2 beside the phone numbers, in the same columns as the form.
  contactReception: stockPhoto({
    src: contactReceptionDesk,
    renditions: contactReceptionDeskSrcSet,
    width: 1600,
    height: 1067,
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
    emergencyTreatmentAreaSrcSet,
    'An emergency treatment area with stretchers, monitors and equipment ready for patients',
    'https://www.pexels.com/photo/emergency-room-emergency-hospital-medical-care-706082/',
    'The Emergency Department entrance and signage at dusk, lit, level camera, no patients identifiable.',
  ),
  acuteCare: columnPhoto(
    acuteCareChartReview,
    acuteCareChartReviewSrcSet,
    'A physician and a nurse reviewing a patient chart together',
    'https://www.pexels.com/photo/doctor-talking-to-a-nurse-6129153/',
    'A hospitalist and nurse review a chart at the nurses’ station on an acute care floor. Real staff, natural light.',
  ),
  intensiveCare: columnPhoto(
    intensiveCareRoom,
    intensiveCareRoomSrcSet,
    'A prepared intensive care room with a bed, monitor and equipment, no patient present',
    'https://www.pexels.com/photo/hospital-bed-near-the-glass-window-4966406/',
    'An empty, prepared ICU bay with monitors on, shot from the doorway. No patient present.',
  ),
  medicalSurgical: columnPhoto(
    operatingRoom,
    operatingRoomSrcSet,
    'An operating room with surgical lights, an operating table and anesthesia equipment',
    'https://www.pexels.com/photo/equipment-in-operation-room-12104186/',
    'A surgical team preparing an operating room, masks on, faces turned to the work.',
  ),
  mentalHealthUnit: columnPhoto(
    behavioralHealthLounge,
    behavioralHealthLoungeSrcSet,
    'A calm, sunlit lounge with sofas and tall windows',
    'https://www.pexels.com/photo/modern-sunlit-lobby-with-large-windows-38554812/',
    'A calm day room on the Behavioral Health Unit, daylight, no patients identifiable.',
  ),
  subacute: columnPhoto(
    subacuteBedsideMonitor,
    subacuteBedsideMonitorSrcSet,
    'A nurse checking a bedside monitor beside an IV stand',
    'https://www.pexels.com/photo/nurse-looking-at-a-monitor-6129683/',
    'A respiratory therapist checks ventilator settings at a subacute bedside. Patient out of frame.',
  ),
  skilledNursing: columnPhoto(
    skilledNursingWalk,
    skilledNursingWalkSrcSet,
    'A nurse walks beside an older woman using a walker in a bright corridor, both seen from behind',
    'https://www.pexels.com/photo/caring-interaction-between-nurse-and-elderly-patient-34328480/',
    'A nurse walks alongside a patient in a corridor, both seen from behind, soft daylight.',
  ),
  rehabilitation: columnPhoto(
    rehabilitationBalanceTherapy,
    rehabilitationBalanceTherapySrcSet,
    'A therapist holds a patient’s hands as he practices a balance exercise in a therapy gym',
    'https://www.pexels.com/photo/a-woman-guiding-a-man-on-his-physical-therapy-6111585/',
    'A physical therapist guides balance exercises in the therapy gym. Patient seen from behind or side.',
  ),
  respiratoryTherapy: columnPhoto(
    respiratoryNebulizer,
    respiratoryNebulizerSrcSet,
    'A healthcare worker preparing a nebulizer',
    'https://www.pexels.com/photo/close-up-photo-of-a-healthcare-professional-holding-a-nebulizer-7447013/',
    'A respiratory therapist prepares nebulizer equipment at a supply station. Hands and equipment in focus.',
  ),
  imaging: columnPhoto(
    ctScannerRoom,
    ctScannerRoomSrcSet,
    'A CT scanner in a bright imaging room',
    'https://www.pexels.com/photo/diagnosis-device-in-hospital-13176452/',
    'A technologist at the CT scanner control console, scanner visible through the window.',
  ),
  laboratory: columnPhoto(
    laboratoryCentrifuge,
    laboratoryCentrifugeSrcSet,
    'A gloved technologist loading a blood sample into a centrifuge',
    'https://www.pexels.com/photo/doctor-using-a-centrifuge-machine-6627667/',
    'A medical technologist loads samples into an analyzer in the PHV lab. Gloves on, face partly turned.',
  ),
  pharmacy: columnPhoto(
    pharmacyMedicationStation,
    pharmacyMedicationStationSrcSet,
    'A healthcare worker retrieving medication at a dispensing station',
    'https://www.pexels.com/photo/medical-practitioner-getting-medicine-from-shelf-6129585/',
    'A pharmacist checks a medication order at the inpatient pharmacy counter. Labels unreadable.',
  ),
} satisfies Record<string, SiteImage>
