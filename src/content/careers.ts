import { links } from './links'
import type { LabeledLink } from './site'

// Current nursing openings and the benefits list need confirmation with HR before launch.
export const careers = {
  eyebrow: 'Careers at PHV',
  heading: 'Care for your community. Immediate openings in nursing.',
  body: 'From nurses to lab technicians, receptionists to food service and pharmacy staff, there is a place for your career at Pacifica.',
  benefits:
    'Competitive salaries, 401(k) program, comprehensive health benefits, and paid vacation, holidays, and sick leave. Full-time, part-time, and per diem.',
  action: { label: 'Search careers', link: links.careers } satisfies LabeledLink,
}
