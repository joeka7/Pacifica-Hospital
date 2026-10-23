import type { ContentSectionData } from './blocks'
import { serviceImages, type SiteImage } from './images'
import { links, servicePath, type LinkTarget } from './links'
import { contact, facts, hours, type BreadcrumbItem, type HoursRow, type PageMeta } from './site'

/*
 * Services directory and individual service pages.
 *
 * Source: the unit descriptions shared by pacificahospital.com/all-services/,
 * /featured-inpatient-treatments/ and /featured-outpatient-treatments/, plus
 * the department pages under /services/ (imaging, laboratory, pharmacy).
 * Overlapping source pages are merged into one local page each. Copy is
 * lightly edited for clarity; omitted claims are listed in NOTES.md.
 */

export type CareSetting = 'inpatient' | 'outpatient'

export const careSettingLabels: Record<CareSetting, string> = {
  inpatient: 'Inpatient',
  outpatient: 'Outpatient',
}

/** "Inpatient", "Outpatient" or "Inpatient and outpatient". */
export function describeSettings(settings: CareSetting[]): string {
  const text = settings.map((setting) => careSettingLabels[setting].toLowerCase()).join(' and ')
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export interface ServicePageData {
  slug: string
  title: string
  /** One line for directory rows and related links. */
  summary: string
  settings: CareSetting[]
  meta: PageMeta
  /** Opening paragraph(s) under the page heading. */
  lead: string[]
  image: SiteImage
  /** Key facts beside the image: settings, hours, phone. */
  glance: HoursRow[]
  sections: ContentSectionData[]
  related: string[]
}

const questionsRow: HoursRow = { label: 'Questions', phone: contact.mainPhone }

function settingsRow(settings: CareSetting[]): HoursRow {
  return { label: 'Care setting', value: describeSettings(settings) }
}

function meta(title: string, description: string): PageMeta {
  return { title: `${title} | Pacifica Hospital of the Valley`, description }
}

export const servicePages: ServicePageData[] = [
  {
    slug: 'acute-care',
    title: 'Acute Care Unit',
    summary: 'Hospitalist-led care for admitted patients',
    settings: ['inpatient'],
    meta: meta(
      'Acute Care Unit',
      'Hospitalist-led acute care at Pacifica Hospital of the Valley, from the Emergency Department through admission and planning for care after discharge.',
    ),
    lead: [
      'At Pacifica Hospital of the Valley, our physicians’ primary role is to provide comprehensive medical care to hospitalized patients. These physicians, known as hospitalists, guide patients through the continuum of hospital care: often seeing them in the Emergency Department and, if they are admitted, following them into the acute care or critical care unit and organizing their care after discharge.',
    ],
    image: serviceImages.acuteCare,
    glance: [settingsRow(['inpatient']), questionsRow],
    sections: [
      {
        id: 'hospitalists',
        heading: 'The role of hospitalists',
        blocks: [
          {
            type: 'paragraph',
            text: 'Hospitalists manage the care of hospital inpatients, including those in the intensive care unit. They also consult with patients and other physicians before and after surgery, creating a safe and effective healing environment for our patients.',
          },
          {
            type: 'list',
            label: 'Hospitalist responsibilities include:',
            items: [
              'Daily patient monitoring',
              'Ordering tests and procedures',
              'Following up on treatment',
              'Coordinating care between the hospital, primary care physicians and specialists',
            ],
          },
        ],
      },
    ],
    related: ['intensive-care', 'medical-surgical', 'respiratory-therapy'],
  },
  {
    slug: 'intensive-care',
    title: 'Intensive Care Unit',
    summary: 'Critical care for seriously ill patients',
    settings: ['inpatient'],
    meta: meta(
      'Intensive Care Unit',
      'The Intensive Care Unit at Pacifica Hospital of the Valley provides specialist monitoring and treatment for seriously ill patients.',
    ),
    lead: [
      'Pacifica Hospital’s Intensive Care Unit is dedicated to providing the best possible treatment for critical care patients’ recovery.',
    ],
    image: serviceImages.intensiveCare,
    glance: [settingsRow(['inpatient']), questionsRow],
    sections: [
      {
        id: 'specialist-care',
        heading: 'Specialist monitoring and treatment',
        blocks: [
          {
            type: 'paragraph',
            text: 'The critical care unit is designed and equipped to provide high-level care to seriously ill patients who need specialist monitoring and treatment.',
          },
          {
            type: 'paragraph',
            text: 'A dedicated, multidisciplinary team works closely together to ensure patients receive the highest standard of treatment and individualized care.',
          },
          {
            type: 'list',
            label: 'The critical care team includes:',
            items: ['Doctors', 'Nurses', 'Physiotherapists', 'Pharmacists', 'Dieticians'],
            columns: 2,
          },
        ],
      },
      {
        id: 'conditions',
        heading: 'What conditions does the unit treat?',
        blocks: [
          {
            type: 'paragraph',
            text: 'Patients are admitted to the critical care unit from a number of sources, including the Emergency Department, the operating department and hospital wards.',
          },
          {
            type: 'list',
            label: 'They come with a range of conditions, including:',
            items: ['Sepsis', 'Acute kidney injury', 'Cardiac arrest', 'Respiratory failure'],
            columns: 2,
          },
        ],
      },
    ],
    related: ['acute-care', 'respiratory-therapy', 'medical-surgical'],
  },
  {
    slug: 'medical-surgical',
    title: 'Medical Surgical Unit',
    summary: 'Planned and emergency surgery',
    settings: ['inpatient', 'outpatient'],
    meta: meta(
      'Medical Surgical Unit',
      'Inpatient and outpatient surgery at Pacifica Hospital of the Valley across general surgery, orthopedics, GI, gynecology, ophthalmology and ENT.',
    ),
    lead: [
      'Pacifica Hospital offers a range of services for patients who may need planned or emergency surgery, for conditions that may be caused by disease, genetic disorders or trauma.',
    ],
    image: serviceImages.medicalSurgical,
    glance: [settingsRow(['inpatient', 'outpatient']), questionsRow],
    sections: [
      {
        id: 'surgery',
        heading: 'Inpatient and outpatient surgery',
        blocks: [
          {
            type: 'paragraph',
            text: 'Inpatient and outpatient surgeries are performed using innovative procedures, treating conditions that affect almost every part of the body. We apply the latest research and technology to offer more surgical treatment choices with fewer risks.',
          },
        ],
      },
      {
        id: 'specialties',
        heading: 'Surgical specialties',
        blocks: [
          {
            type: 'list',
            label: 'Surgeries performed at Pacifica Hospital range across specialty practice areas such as:',
            items: [
              'General surgery',
              'Orthopedics',
              'GI (gastrointestinal)',
              'Gynecology',
              'Ophthalmology',
              'Cataract',
              'Ear, nose and throat',
            ],
            columns: 2,
          },
        ],
      },
    ],
    related: ['acute-care', 'intensive-care', 'rehabilitation'],
  },
  {
    slug: 'mental-health-unit',
    title: 'Mental Health Unit',
    summary: 'Inpatient treatment for acute psychiatric illness',
    settings: ['inpatient'],
    meta: meta(
      'Mental Health Unit',
      'Inpatient behavioral health care at Pacifica Hospital of the Valley for acute psychiatric illnesses, with voluntary and non-voluntary admissions.',
    ),
    lead: [
      'Our behavioral health professionals are trained in emergency specialty procedures and crisis intervention. Staff care for patients by interacting with them therapeutically and evaluating their overall health and symptoms.',
    ],
    image: serviceImages.mentalHealthUnit,
    glance: [settingsRow(['inpatient']), questionsRow],
    sections: [
      {
        id: 'conditions',
        heading: 'Conditions we treat',
        blocks: [
          {
            type: 'list',
            label: 'We treat acute psychiatric illnesses, including:',
            items: ['Major depression', 'Bipolar disorder', 'Schizophrenia'],
          },
          {
            type: 'paragraph',
            text: 'Admissions to the Behavioral Health Unit can be voluntary or non-voluntary. We welcome inquiries from people concerned about the welfare of family members, and from those already receiving or in need of treatment for any psychological disorder.',
          },
        ],
      },
      {
        id: 'patient-services',
        heading: 'Patient services',
        blocks: [
          {
            type: 'list',
            items: [
              'Assessment of emotional and psychological issues',
              'Initial health screening',
              'Case management',
              'Medication management',
              'Treatment planning',
              'Community integration planning',
              'Referrals',
            ],
            columns: 2,
          },
          {
            type: 'paragraph',
            text: 'Outside referrals from health care providers and insurance plans are welcome.',
          },
        ],
      },
      {
        id: 'team',
        heading: 'Our team',
        blocks: [
          {
            type: 'list',
            items: [
              'Psychiatrists',
              'Registered nurses',
              'Social workers',
              'Certified recreational therapists and activity leaders',
              'Mental health care workers',
              'Access to physical, occupational and speech therapy',
            ],
            columns: 2,
          },
        ],
      },
    ],
    related: ['acute-care', 'intensive-care', 'rehabilitation'],
  },
  {
    slug: 'subacute',
    title: 'Subacute Unit',
    summary: 'Respiratory, ventilator, tracheostomy and wound care',
    settings: ['inpatient'],
    meta: meta(
      'Subacute Unit',
      'Subacute care at Pacifica Hospital of the Valley, including ventilator weaning, tracheostomy care, wound care and therapy to help patients return home.',
    ),
    lead: [
      'The Subacute and Skilled Nursing Unit is designed to help patients achieve the highest possible level of independence.',
    ],
    image: serviceImages.subacute,
    glance: [
      settingsRow(['inpatient']),
      { label: 'Tours of our services and units', phone: contact.mainPhone },
    ],
    sections: [
      {
        id: 'who-we-serve',
        heading: 'Who the unit serves',
        blocks: [
          {
            type: 'paragraph',
            text: 'Patients on this unit have met the acute care criteria for discharge but still need additional assistance. They transfer to the Subacute Unit for further rehabilitation so they can return to their prior living situation.',
          },
          {
            type: 'paragraph',
            text: 'We offer comprehensive medical care for patients recuperating from surgery, strokes, broken limbs, persistent sores and other conditions once treated solely in hospitals.',
          },
        ],
      },
      {
        id: 'services',
        heading: 'Subacute services',
        blocks: [
          {
            type: 'list',
            items: [
              'Respiratory care',
              'Tracheostomy care and oxygen therapy',
              'Dysphagia therapy and enteral feeding',
              'Extensive wound care',
              'IV therapy',
              'Ostomy care',
              'Chest tubes',
              'Pain management',
              'Physical, occupational and speech therapy',
            ],
            columns: 2,
          },
        ],
      },
      {
        id: 'ventilator-care',
        heading: 'Care for ventilator patients',
        blocks: [
          {
            type: 'paragraph',
            text: 'Our team makes sure patients receive proper respiratory care and total systems care based on their specific needs, including post-acute, ventilator-dependent patients. We specialize in progressive ventilator weaning, rehabilitation services and other subacute care such as dialysis, TPN and wound management.',
          },
          {
            type: 'paragraph',
            text: 'Pacifica has cared for respiratory patients since 1994.',
          },
        ],
      },
      {
        id: 'approach',
        heading: 'A whole-patient approach',
        blocks: [
          {
            type: 'paragraph',
            text: 'Our approach focuses on the whole patient, with a skilled medical and rehabilitation team working together with the patient and family to provide individualized care.',
          },
          {
            type: 'paragraph',
            text: 'We believe good communication is essential for a good outcome. We use the Interdisciplinary Patient Care Conference, along with case managers, to make sure all patient and family questions and concerns are answered completely and promptly.',
          },
          {
            type: 'paragraph',
            text: 'We welcome you to visit Pacifica Hospital for a tour of our services and units. Call the main line for more information and to schedule a tour.',
          },
        ],
      },
    ],
    related: ['skilled-nursing', 'respiratory-therapy', 'rehabilitation'],
  },
  {
    slug: 'skilled-nursing',
    title: 'Skilled Nursing Unit',
    summary: 'Short-stay nursing and rehabilitation',
    settings: ['inpatient'],
    meta: meta(
      'Skilled Nursing Unit',
      'Short-stay skilled nursing and rehabilitation at Pacifica Hospital of the Valley, supporting patients through recovery after a hospital stay.',
    ),
    lead: [
      'Pacifica offers a comprehensive range of short-stay nursing and rehabilitation services designed to support patients throughout their recovery journey.',
    ],
    image: serviceImages.skilledNursing,
    glance: [settingsRow(['inpatient']), questionsRow],
    sections: [
      {
        id: 'services',
        heading: 'Services and support',
        blocks: [
          {
            type: 'paragraph',
            text: 'Our services include medical care, medication management, accommodations, meals, laundry, and assistance with essential daily activities such as dressing, bathing and personal hygiene, along with a variety of additional support services.',
          },
          {
            type: 'list',
            label: 'Nursing services',
            items: [
              'Breathing support',
              'Intravenous (IV) fluids and medication',
              'Wound care',
              'Tube feeding',
            ],
            columns: 2,
          },
          {
            type: 'list',
            label: 'Rehabilitation services',
            items: ['Physical therapy', 'Speech therapy', 'Occupational therapy'],
            columns: 2,
          },
        ],
      },
      {
        id: 'rehabilitation',
        heading: 'Continuing rehabilitation',
        blocks: [
          {
            type: 'paragraph',
            text: 'Recovery from a serious illness or injury often requires intensive physical, occupational and speech therapy. Following hospital discharge, patients can continue their rehabilitation with Pacifica in a supportive inpatient setting.',
          },
          {
            type: 'paragraph',
            text: 'When a longer-term level of care is needed, we can also coordinate placement with an appropriate long-term care facility to ensure continuity of treatment and rehabilitation.',
          },
        ],
      },
      {
        id: 'approach',
        heading: 'An individualized approach',
        blocks: [
          {
            type: 'paragraph',
            text: 'At Pacifica, we take an individualized approach to care, recognizing that every patient’s needs and recovery journey are unique. Our goal is to help each person regain strength, independence and confidence while supporting their physical, mental and emotional well-being.',
          },
        ],
      },
    ],
    related: ['subacute', 'rehabilitation', 'respiratory-therapy'],
  },
  {
    slug: 'rehabilitation',
    title: 'Physical Medicine and Rehabilitation',
    summary: 'Physical, occupational and speech therapy',
    settings: ['inpatient', 'outpatient'],
    meta: meta(
      'Physical Medicine and Rehabilitation',
      'Inpatient and outpatient physical, occupational and speech therapy at Pacifica Hospital of the Valley, including post-COVID-19 rehabilitation.',
    ),
    lead: [
      'Pacifica Hospital offers a continuum of rehabilitation services. Our physical, occupational and speech therapists help patients return to full function and normal daily activity as soon as possible.',
    ],
    image: serviceImages.rehabilitation,
    glance: [settingsRow(['inpatient', 'outpatient']), questionsRow],
    sections: [
      {
        id: 'inpatient-therapy',
        heading: 'Inpatient therapy programs',
        blocks: [
          {
            type: 'paragraph',
            text: 'Our goal is to help people with dysfunction due to illness or injury regain independence and rebuild their lives, in an environment where loved ones are involved in the rehabilitation process.',
          },
          {
            type: 'list',
            label: 'Our therapists provide therapeutic intervention for conditions including:',
            items: [
              'Cancer',
              'Injuries and surgeries of the musculoskeletal and neurological systems',
              'Post-operative orthopedic procedures',
              'Cerebrovascular accident (CVA)',
              'Traumatic brain injury',
              'Fractures',
              'Arthritis',
              'Sprains and strains',
              'Vestibular disorders',
              'Neurological conditions',
              'Parkinson’s disease',
            ],
            columns: 2,
          },
        ],
      },
      {
        id: 'outpatient-therapy',
        heading: 'Outpatient therapy programs',
        blocks: [
          {
            type: 'paragraph',
            text: 'Our outpatient therapy programs serve any age group in need of rehabilitation, with several convenient scheduling options. Individualized therapeutic interventions help protect, strengthen or restore muscle and motor function.',
          },
          {
            type: 'paragraph',
            text: 'The outpatient rehabilitation department is staffed with experienced, licensed physical, occupational and speech therapists who work with each patient’s referring physician to track progress toward their rehabilitation goals.',
          },
          {
            type: 'list',
            label: 'Common areas treated in our outpatient program include, but are not limited to:',
            items: [
              'Pain management',
              'Manual therapy',
              'Hand therapy',
              'Neurological conditions',
              'Brain injury',
              'Balance and vestibular',
              'Wheelchair seating and positioning',
              'Activities of daily living functional impairments',
              'Pediatrics',
              'Occupational wellness',
              'Ergonomics',
              'Speech and language disorders',
              'Cognitive communication disorders',
              'Swallowing disorders',
              'Work conditioning',
            ],
            columns: 2,
          },
        ],
      },
      {
        id: 'post-covid',
        heading: 'Post-COVID-19 rehabilitation and recovery',
        blocks: [
          {
            type: 'paragraph',
            text: 'For many COVID-19 survivors, physical, cognitive or mental health challenges continue after their initial recovery. Our custom-tailored program provides specialized, multidisciplinary care for rehabilitation patients after COVID-19.',
          },
          {
            type: 'paragraph',
            text: 'Recovery from a critical illness affects everyone differently, and our team creates treatment plans to meet each need.',
          },
          {
            type: 'list',
            label: 'Common symptoms we address include:',
            items: [
              'Shortness of breath',
              'Cough and chest pain',
              'Dysphagia',
              'Joint pain',
              'Headache',
              'Functional impairment',
              'Weakness and balance problems',
              'Deconditioning',
            ],
            columns: 2,
          },
        ],
      },
    ],
    related: ['skilled-nursing', 'subacute', 'respiratory-therapy'],
  },
  {
    slug: 'respiratory-therapy',
    title: 'Respiratory Therapy',
    summary: 'Assessment and treatment of lung conditions',
    settings: ['inpatient', 'outpatient'],
    meta: meta(
      'Respiratory Therapy',
      'Pulmonary assessment, diagnosis and treatment at Pacifica Hospital of the Valley for asthma, COPD, pulmonary fibrosis and other lung conditions.',
    ),
    lead: [
      'The pulmonary medicine team at Pacifica Hospital offers assessment, diagnosis and treatment for common and complex lung conditions.',
    ],
    image: serviceImages.respiratoryTherapy,
    glance: [settingsRow(['inpatient', 'outpatient']), questionsRow],
    sections: [
      {
        id: 'lung-care',
        heading: 'Lung care in every setting',
        blocks: [
          {
            type: 'paragraph',
            text: 'Lung specialists and Pacifica care teams provide evidence-based treatments and minimally invasive surgical procedures to help patients breathe easier and live healthier.',
          },
          {
            type: 'paragraph',
            text: 'If you need lung care in the hospital or the intensive care unit, or ongoing management in an inpatient or outpatient setting, we’re here for you.',
          },
        ],
      },
      {
        id: 'conditions',
        heading: 'Conditions and treatments',
        blocks: [
          {
            type: 'list',
            items: [
              'Asthma',
              'Allergies',
              'Pulmonary fibrosis',
              'Pulmonary hypertension',
              'Adult cystic fibrosis',
              'Chronic obstructive pulmonary disease (COPD)',
              'Lung cancer',
              'Pulmonary rehabilitation program',
            ],
            columns: 2,
          },
        ],
      },
    ],
    related: ['subacute', 'intensive-care', 'rehabilitation'],
  },
  {
    slug: 'imaging',
    title: 'Imaging Services',
    summary: 'MRI, CT, ultrasound, X-ray and more',
    settings: ['inpatient', 'outpatient'],
    meta: meta(
      'Imaging Services',
      'Diagnostic imaging and radiology at Pacifica Hospital of the Valley: MRI, CT, ultrasound, X-ray and non-invasive vascular studies, mostly on a walk-in basis.',
    ),
    lead: [
      'Pacifica Hospital provides diagnostic services ranging from routine X-rays to specialist scans. Medical imaging is a specialized science that places a special emphasis on each patient.',
    ],
    image: serviceImages.imaging,
    glance: [
      settingsRow(['inpatient', 'outpatient']),
      { label: 'Walk-in exams', value: 'Available for most exams' },
      questionsRow,
    ],
    sections: [
      {
        id: 'exams',
        heading: 'Comprehensive imaging',
        blocks: [
          {
            type: 'list',
            items: ['MRI', 'CT scan', 'Ultrasound', 'X-ray', 'Non-invasive vascular', 'Special procedures'],
            columns: 2,
          },
          {
            type: 'paragraph',
            text: 'Our skilled, compassionate doctors, nurses and technologists are available to perform a wide range of imaging services.',
          },
        ],
      },
      {
        id: 'access',
        heading: 'Ease of access and personalized care',
        blocks: [
          {
            type: 'paragraph',
            text: 'Almost every imaging exam can be performed on a walk-in basis. A specialized, centralized administrative team coordinates all medical imaging appointments, working to meet patient requests and physicians’ orders.',
          },
        ],
      },
      {
        id: 'safety',
        heading: 'Patient safety',
        blocks: [
          {
            type: 'paragraph',
            text: 'Reducing the radiation dose given to patients while maintaining optimal examination quality is a top priority at PHV, and a guiding factor when we select and acquire imaging equipment.',
          },
        ],
      },
    ],
    related: ['laboratory', 'pharmacy', 'acute-care'],
  },
  {
    slug: 'laboratory',
    title: 'Laboratory Services',
    summary: 'Tests ordered by your doctor, walk-ins welcome',
    settings: ['inpatient', 'outpatient'],
    meta: meta(
      'Laboratory Services',
      'Onsite laboratory services at Pacifica Hospital of the Valley. Outpatient drawing station open Monday to Friday, 8:00 AM to 5:00 PM; no appointment needed.',
    ),
    lead: [
      'Pacifica Hospital brings together modern technologies and trained laboratory personnel to provide specimen collection, transport and testing in a timely and accurate manner.',
    ],
    image: serviceImages.laboratory,
    glance: [
      { label: 'Drawing station, Monday – Friday', value: '8:00 AM – 5:00 PM' },
      { label: 'Appointments', value: 'Not required' },
      questionsRow,
    ],
    sections: [
      {
        id: 'testing',
        heading: 'Inpatient and outpatient testing',
        blocks: [
          {
            type: 'paragraph',
            text: 'Our lab performs tests ordered by doctors for patients staying at our hospital, and for the public as an outpatient service. For outpatients, your physician simply needs to order blood work or specimen collection.',
          },
          {
            type: 'paragraph',
            text: 'The drawing station serves inpatients and outpatients Monday through Friday, 8:00 AM to 5:00 PM. Walk-ins are welcome; no appointment is necessary.',
          },
        ],
      },
      {
        id: 'before-your-visit',
        heading: 'Before your visit',
        blocks: [
          {
            type: 'list',
            label: 'To help us serve you, please contact our Admitting Office to provide:',
            items: [
              'A laboratory order from your physician showing the testing to be performed',
              'Current insurance information',
              'Official photo identification',
            ],
          },
          {
            type: 'paragraph',
            text: 'The laboratory accepts out-of-pocket payment, all Medicare, Medicaid and PPO plans, and select HMO insurance plans.',
          },
        ],
      },
      {
        id: 'team',
        heading: 'Our laboratory team',
        blocks: [
          {
            type: 'paragraph',
            text: 'Your laboratory team at Pacifica includes pathologists, medical technologists and medical technicians who meet and exceed the criteria set by the American Association of Blood Banks (AABB), the American Society for Histocompatibility and Immunogenetics (ASHI), the College of American Pathologists (CAP) and the Food and Drug Administration (FDA).',
          },
          {
            type: 'paragraph',
            text: 'Staff are available to consult with your physician, supporting an accurate diagnosis and a sooner recovery.',
          },
        ],
      },
      {
        id: 'disciplines',
        heading: 'Testing disciplines',
        blocks: [
          {
            type: 'list',
            items: [
              'Anatomic pathology',
              'Blood transfusion',
              'Cholesterol testing',
              'Coagulation: special, routine and comprehensive',
              'Employment drug testing',
              'General routine chemistry',
              'Genetics',
              'Hematology and special hematology',
              'Histology and histopathology',
              'Immunohematology',
              'Immunology and serology',
              'Parasitology',
              'Special chemistry and specialist biochemistry',
              'Toxicology screens (medical purposes only)',
              'Urinalysis',
              'Virology',
            ],
            columns: 2,
          },
        ],
      },
    ],
    related: ['imaging', 'pharmacy', 'acute-care'],
  },
  {
    slug: 'pharmacy',
    title: 'Pharmacy Department',
    summary: '24-hour inpatient pharmacy service',
    settings: ['inpatient'],
    meta: meta(
      'Pharmacy Department',
      'The onsite Pharmacy Department at Pacifica Hospital of the Valley provides comprehensive, 24-hour pharmacy service to hospital inpatients.',
    ),
    lead: [
      'The Pacifica Hospital Pharmacy Department provides medication and services to inpatients, helping ensure that patients get the right medication at the right time.',
    ],
    image: serviceImages.pharmacy,
    glance: [
      { label: 'Inpatient fulfillment', value: '24 hours' },
      { label: 'Monday – Friday', value: '7:00 AM – 11:00 PM' },
      { label: 'Weekends and holidays', value: '7:00 AM – 7:00 PM' },
      questionsRow,
    ],
    sections: [
      {
        id: 'services',
        heading: 'Pharmaceutical services',
        blocks: [
          {
            type: 'paragraph',
            text: 'Pharmacists and technicians staff a variety of areas, providing a broad range of pharmaceutical care to inpatients. Our inpatient pharmacy and clinical personnel work closely together to promote high-quality, patient-focused care that helps keep people healthy and reduces readmission.',
          },
          {
            type: 'paragraph',
            text: 'The pharmacy team also works with hospital management to develop and implement programs that enhance pharmacy services at Pacifica.',
          },
        ],
      },
      {
        id: 'onsite',
        heading: 'An onsite pharmacy',
        blocks: [
          {
            type: 'paragraph',
            text: 'One of the biggest benefits of an in-house pharmacist is that they can speak directly with the medical team. Because the pharmacy is onsite, physicians can have pharmaceutical services expedited with care and speed.',
          },
          {
            type: 'paragraph',
            text: 'Pharmacists collaborate with all members of the health care team and with caregivers to provide the best patient care.',
          },
        ],
      },
      {
        id: 'hours',
        heading: 'Full-service pharmacy',
        blocks: [
          {
            type: 'list',
            items: [
              '24-hour inpatient fulfillment',
              'Pharmacist expertise in medication management',
              'General inquiries welcome',
            ],
          },
          {
            type: 'paragraph',
            text: 'Standard hours and pharmacist inquiries: Monday through Friday, 7:00 AM to 11:00 PM; weekends and holidays, 7:00 AM to 7:00 PM.',
          },
        ],
      },
    ],
    related: ['laboratory', 'imaging', 'acute-care'],
  },
]

export function findServicePage(slug: string): ServicePageData | undefined {
  return servicePages.find((page) => page.slug === slug)
}

function service(slug: string): ServicePageData {
  const page = findServicePage(slug)
  if (!page) throw new Error(`Unknown service page: ${slug}`)
  return page
}

// Directory

export interface DirectoryEntry {
  title: string
  description: string
  link: LinkTarget
  /** Empty for emergency and urgent care, which sit outside the setting filter. */
  settings: CareSetting[]
}

export interface DirectoryGroup {
  /** Anchor id; "tests-and-pharmacy" is the main nav's "Additional care" target. */
  id: string
  number: string
  heading: string
  /** "emergency" draws the red top rule; reserved for emergency care. */
  tone: 'emergency' | 'standard'
  entries: DirectoryEntry[]
}

function entry(slug: string): DirectoryEntry {
  const page = service(slug)
  return {
    title: page.title,
    description: page.summary,
    link: { href: servicePath(slug), verified: true },
    settings: page.settings,
  }
}

export const servicesDirectory = {
  meta: {
    title: 'Services | Pacifica Hospital of the Valley',
    description:
      'Inpatient, outpatient and 24-hour emergency services at Pacifica Hospital of the Valley in Sun Valley, CA.',
  } satisfies PageMeta,
  breadcrumb: [{ label: 'Home', link: links.home }, { label: 'Services' }] satisfies BreadcrumbItem[],
  eyebrow: 'Services',
  heading: 'Care for every stage of a hospital stay.',
  facts: [facts.beds, facts.accreditation, 'Inpatient, outpatient and 24-hour emergency care'],
  lead: 'Pacifica Hospital of the Valley offers a full range of inpatient and outpatient services, including 24-hour emergency care, for adults across the San Fernando Valley.',
  filterLabel: 'Filter services by care setting',
  filters: [
    { label: 'All services', setting: null, link: links.allServices },
    { label: 'Inpatient', setting: 'inpatient', link: links.inpatient },
    { label: 'Outpatient', setting: 'outpatient', link: links.outpatient },
  ] satisfies { label: string; setting: CareSetting | null; link: LinkTarget }[],
  groups: [
    {
      id: 'emergency-and-urgent-care',
      number: '01',
      heading: 'Emergency and urgent care',
      tone: 'emergency',
      entries: [
        {
          title: 'Emergency Department',
          description: hours.emergency,
          link: links.emergencyDepartment,
          settings: [],
        },
        {
          title: 'Mental Health Urgent Care Clinic',
          description: 'Crisis support around the clock, in Sylmar',
          link: links.mentalHealthClinic,
          settings: [],
        },
      ],
    },
    {
      id: 'hospital-stays',
      number: '02',
      heading: 'Hospital stays',
      tone: 'standard',
      entries: [entry('acute-care'), entry('intensive-care'), entry('medical-surgical'), entry('mental-health-unit')],
    },
    {
      id: 'recovery',
      number: '03',
      heading: 'Recovery and rehabilitation',
      tone: 'standard',
      entries: [entry('subacute'), entry('skilled-nursing'), entry('rehabilitation'), entry('respiratory-therapy')],
    },
    {
      id: 'tests-and-pharmacy',
      number: '04',
      heading: 'Tests and pharmacy',
      tone: 'standard',
      entries: [entry('imaging'), entry('laboratory'), entry('pharmacy')],
    },
  ] satisfies DirectoryGroup[],
  emergency: {
    heading: 'In a life-threatening emergency, call 911.',
    body: 'Our Emergency Department is open 24 hours for medical emergencies.',
  },
}

/** Breadcrumb for an individual service page. */
export function serviceBreadcrumb(title: string): BreadcrumbItem[] {
  return [{ label: 'Home', link: links.home }, { label: 'Services', link: links.allServices }, { label: title }]
}

export const servicePageCopy = {
  eyebrow: 'Services',
  glanceHeading: 'At a glance',
  relatedHeading: 'Related services',
  closing: {
    heading: 'Questions about your care?',
    body: 'Call our main line or send us a message. In a medical emergency, call 911.',
  },
}
