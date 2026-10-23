import type { ContentBlock } from './blocks'
import { serviceImages } from './images'
import { links } from './links'
import { contact, hours, type BreadcrumbItem, type ContactItem, type LabeledLink, type PageMeta } from './site'

/*
 * Emergency Department page. Source: pacificahospital.com/emergency-department-menu-main/
 * and /services/emergency-servives/ (merged). The source "Back Pain" and
 * "Fever" entries are omitted because their text does not match their
 * headings; see NOTES.md.
 */

export interface ConditionEntry {
  id: string
  title: string
  blocks: ContentBlock[]
}

const addressLine = `${contact.address.street}, ${contact.address.city}, ${contact.address.state} ${contact.address.zip}`

export const emergencyPage = {
  meta: {
    title: 'Emergency Department | Pacifica Hospital of the Valley',
    description:
      'The Emergency Department at Pacifica Hospital of the Valley in Sun Valley, CA is open 24 hours. In a medical emergency, dial 911.',
  } satisfies PageMeta,
  breadcrumb: [{ label: 'Home', link: links.home }, { label: 'Emergency Department' }] satisfies BreadcrumbItem[],
  eyebrow: 'Emergency Department',
  heading: 'During a medical emergency, every second is crucial.',
  facts: [hours.emergency, addressLine, `Dial 911 or ${contact.emergencyPhone.display}`],
  lead: 'Pacifica Hospital of the Valley is a comprehensive emergency facility, staffed to provide a 24-hour response to the emergency care needs of our community.',
  notice: {
    heading: 'If you are experiencing a medical emergency, dial 911 immediately.',
  },
  image: serviceImages.emergency,

  whenToGo: {
    id: 'when-to-go',
    heading: 'Knowing when to go',
    paragraphs: [
      'It’s not easy to know whether to visit the ER when you are not feeling well. Whenever an illness or injury occurs, you need to decide how serious it is and how soon to get medical care. What if you hurt your wrist and your physician’s office is not open? Or you wake up in the middle of the night with severe back pain?',
      'While it isn’t always easy to know where to go for care, having the answers could save your life during a medical emergency.',
    ],
    choicesLabel: 'Decide whether it is best to:',
    choices: ['Go to an emergency department straight away', 'Call your health care provider'],
    unsure: {
      before:
        'If you are not sure whether to come to the Emergency Department or wait for your physician’s office to open, you can always call us, 24 hours a day, at ',
      phone: contact.emergencyPhone,
      after: '. In a medical emergency, dial 911.',
    },
    symptomsLabel: 'If you have these symptoms, you may need emergency care:',
    symptoms: [
      'Sudden dizziness',
      'Severe headache',
      'Vision change or blackout',
      'Weakness or fainting',
      'Sudden or acute pain',
      'Breathing difficulty',
      'Severe vomiting',
      'Extreme diarrhea',
    ],
  },

  expect: {
    id: 'what-to-expect',
    heading: 'Your trip to the ER: what to expect',
    steps: [
      {
        title: 'Triage',
        text: 'When you arrive, a triage nurse will ask about your condition and check your vital signs.',
      },
      {
        title: 'Registration',
        text: 'Once you have been seen by a health care professional, a registration clerk will collect information for your medical record and form of payment.',
      },
      {
        title: 'Screening and stabilization',
        text: 'You will be medically screened, comprehensively evaluated and stabilized whether or not you have insurance or the ability to pay.',
      },
    ],
    priority:
      'Patients with life-threatening conditions are treated first, followed by gravely ill or unstable patients. All other patients are seen in the order they arrive. We work to make your time waiting as brief and as pleasant as possible.',
  },

  bring: {
    id: 'what-to-bring',
    heading: 'What to bring',
    items: [
      'A list of the medications you take, or the medicines themselves',
      'A list of known medical allergies',
      'Information about any recent medical examinations or procedures',
      'Any special care instructions from your physician',
      'When available, a responsible adult, or the name of someone to contact in an emergency',
    ],
  },

  cares: {
    id: 'cares-assurance',
    heading: 'Pacifica C.A.R.E.S. assurance',
    blocks: [
      {
        type: 'paragraph',
        text: 'Before you are discharged, please ask any questions you may have about your care, your condition, or medicines given or prescribed. Keep your paperwork and discharge instructions to refer back to.',
      },
      {
        type: 'paragraph',
        text: 'We will send a summary of your visit to your primary care physician if one is listed in your medical records. Contact your primary care provider right after your visit to our Emergency Department.',
      },
      {
        type: 'linkParagraph',
        text: 'If you don’t have a primary care physician, we are here to help you find one.',
        linkLabel: 'Contact us',
        link: links.contact,
      },
    ] satisfies ContentBlock[],
  },

  conditions: {
    id: 'conditions',
    heading: 'Common conditions and symptoms',
    intro:
      'These conditions and symptoms commonly call for emergency attention. If you are experiencing a medical emergency, dial 911 immediately.',
    items: [
      {
        id: 'broken-bones',
        title: 'Broken bones',
        blocks: [
          {
            type: 'paragraph',
            text: 'Without a proper diagnosis, including imaging, it can be difficult to know whether a bone is dislocated, broken or badly sprained.',
          },
          {
            type: 'list',
            label: 'Along with pain, these symptoms may mean a bone is broken and you need medical care:',
            items: [
              'Bruising around the injured area',
              'A bulge or deformity of the bone through the skin',
              'Swelling, or any irregular sound with movement',
            ],
          },
        ],
      },
      {
        id: 'chest-pain',
        title: 'Chest pain',
        blocks: [
          {
            type: 'list',
            label: 'Call 911 right away if you have crushing or squeezing chest pain with any of these symptoms:',
            items: [
              'Sweating',
              'Nausea or vomiting',
              'Signs of shock',
              'Shortness of breath',
              'Lightheadedness',
              'Fast or irregular heart rate',
              'Pain that spreads from the chest to the arms, neck or jaw',
            ],
            columns: 2,
          },
          {
            type: 'list',
            label: 'Signs of a heart attack in women can differ, and may include:',
            items: [
              'Shortness of breath',
              'Nausea or vomiting',
              'Dizziness or lightheadedness',
              'Unusual exhaustion',
              'Discomfort in the abdomen or core',
              'Discomfort in the shoulder, upper back or neck',
            ],
            columns: 2,
          },
        ],
      },
      {
        id: 'concussion',
        title: 'Concussion',
        blocks: [
          {
            type: 'list',
            label:
              'Any injury to the head should be taken seriously. A direct blow to the head with any of these symptoms needs immediate emergency treatment:',
            items: [
              'Loss of consciousness, brief or extended',
              'Seizure',
              'Amnesia, or memory loss about the injury',
              'Slurred speech',
              'Disorientation or confusion',
              'Worsening severe headache',
              'Vomiting',
            ],
            columns: 2,
          },
        ],
      },
      {
        id: 'flu',
        title: 'Flu',
        blocks: [
          {
            type: 'list',
            label:
              'Influenza is common and does not normally require an emergency visit. However, the flu can be very serious for:',
            items: [
              'Infants and toddlers',
              'People over the age of 60',
              'Pregnant women',
              'People with certain illnesses or conditions, such as asthma or chronic obstructive pulmonary disease (COPD)',
              'People with compromised or weakened immune systems',
            ],
          },
          {
            type: 'list',
            label: 'These life-threatening signs with the flu require immediate medical attention:',
            items: ['Trouble breathing', 'Uncontrollable vomiting leading to dehydration', 'Complications of pneumonia'],
          },
        ],
      },
      {
        id: 'side-pain',
        title: 'Side or abdominal pain',
        blocks: [
          {
            type: 'paragraph',
            text: 'Pain in these areas is usually temporary, but severe side pain can be a sign of something serious.',
          },
          {
            type: 'list',
            label:
              'Seek immediate medical treatment for severe pain, especially in the lower right stomach, back or sides, or pain with any of these symptoms:',
            items: [
              'Fever',
              'Dizziness',
              'Unrelenting vomiting or nausea',
              'Extreme bouts of diarrhea or constipation',
              'Pain or blood during urination',
              'A recent urinary tract infection (UTI)',
            ],
            columns: 2,
          },
          {
            type: 'paragraph',
            text: 'Severe pain that lasts only seconds and does not return is no cause for alarm. If the pain lasts more than several minutes, medical attention is essential regardless of any other symptoms.',
          },
          {
            type: 'list',
            label: 'Possible diagnoses include:',
            items: ['Kidney or bladder infection, or stones', 'Ovarian cyst', 'Appendicitis'],
          },
        ],
      },
      {
        id: 'stomach-pain',
        title: 'Stomach pain',
        blocks: [
          {
            type: 'list',
            label: 'Abdominal pain is a good reason to visit the Emergency Department if it comes with any of these symptoms:',
            items: [
              'Stomach is tender or firm to the touch',
              'Persistent vomiting or nausea',
              'Pain in your chest, neck or shoulder',
              'Dizziness or shortness of breath',
              'High fever',
              'Irregular heartbeat',
              'Dark stool',
              'Vomit containing blood',
            ],
            columns: 2,
          },
        ],
      },
      {
        id: 'stroke',
        title: 'Stroke',
        blocks: [
          {
            type: 'paragraph',
            text: 'Call 911 immediately if you believe you are experiencing symptoms of a stroke. The faster you act, the lower the chance of long-term damage.',
          },
          {
            type: 'list',
            label: 'Signs of a stroke include:',
            items: [
              'Numbness or weakness of the face, arm or leg, particularly on one side of the body',
              'Disorientation, or difficulty speaking or understanding',
              'Difficulty seeing out of one or both eyes',
              'Dizziness, loss of balance or coordination, or trouble walking',
              'Sudden severe headache',
            ],
          },
        ],
      },
      {
        id: 'breathing',
        title: 'Difficulty breathing',
        blocks: [
          {
            type: 'list',
            label:
              'Breathing problems can result from a long-term condition such as heart failure or chronic asthma. Seek emergency care right away for:',
            items: [
              'Interrupted breathing',
              'Noisy breathing, shortness of breath or wheezing',
              'Acute pain or tightness in the chest',
              'Coughing up any amount of blood',
            ],
          },
        ],
      },
      {
        id: 'behavioral',
        title: 'Behavioral or psychiatric emergencies',
        blocks: [
          {
            type: 'paragraph',
            text: 'Suicidal or homicidal emergencies are complex conditions with many contributing factors, and emergency departments are well suited to evaluating patients in these situations.',
          },
          {
            type: 'linkParagraph',
            text: 'For urgent mental health care that does not require a hospital stay, see',
            linkLabel: 'the PHV Mental Health Urgent Care Clinic',
            link: links.mentalHealthClinic,
          },
        ],
      },
    ] satisfies ConditionEntry[],
  },

  team: {
    id: 'care-team',
    heading: 'Emergency care team',
    text: 'Care is provided by a team of experienced emergency physicians and our 24-hour Medical Surgical Unit, providing immediate, walk-in treatment of medical and surgical emergencies.',
  },

  related: {
    heading: 'Care after the Emergency Department',
    slugs: ['acute-care', 'intensive-care', 'medical-surgical', 'respiratory-therapy'],
  },

  closing: {
    heading: 'Directions to the Emergency Department.',
    body: `${addressLine}. In a life-threatening emergency, call 911.`,
    primaryAction: { label: 'Get directions', link: links.directions } satisfies LabeledLink,
    secondaryAction: { label: 'Contact us', link: links.contact } satisfies LabeledLink,
    contacts: [
      { label: 'Emergency Department, open 24 hours', phone: contact.emergencyPhone, tone: 'emergency' },
      { label: 'Main line', phone: contact.mainPhone, tone: 'standard' },
      { label: 'Address', value: `${contact.address.street}, ${contact.address.city}`, tone: 'standard' },
      { label: 'Visiting hours', value: hours.visiting, tone: 'standard' },
    ] satisfies ContactItem[],
  },
}
