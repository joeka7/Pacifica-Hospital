import type { ReactElement } from 'react'
import { findPhysician } from './content/physicians'
import { legacyRedirects } from './content/redirects'
import { findServicePage } from './content/servicePages'
import { AboutPage } from './pages/AboutPage'
import { BillingPage } from './pages/BillingPage'
import { CareersPage } from './pages/CareersPage'
import { ContactPage } from './pages/ContactPage'
import { EmergencyPage } from './pages/EmergencyPage'
import { FinancialAssistancePage } from './pages/FinancialAssistancePage'
import { HomePage } from './pages/HomePage'
import { LeadershipPage } from './pages/LeadershipPage'
import { LegalPage } from './pages/LegalPage'
import { MentalHealthClinicPage } from './pages/MentalHealthClinicPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PatientsPage } from './pages/PatientsPage'
import { PhysicianPage } from './pages/PhysicianPage'
import { PhysiciansPage } from './pages/PhysiciansPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { ServicePage } from './pages/ServicePage'
import { ServicesPage } from './pages/ServicesPage'

const staticRoutes: Record<string, () => ReactElement> = {
  '/': () => <HomePage />,
  '/about': () => <AboutPage />,
  '/services': () => <ServicesPage />,
  '/emergency': () => <EmergencyPage />,
  '/mental-health-clinic': () => <MentalHealthClinicPage />,
  '/physicians': () => <PhysiciansPage />,
  '/physicians/leadership': () => <LeadershipPage />,
  '/patients': () => <PatientsPage />,
  '/patients/billing': () => <BillingPage />,
  '/patients/financial-assistance': () => <FinancialAssistancePage />,
  '/contact': () => <ContactPage />,
  '/careers': () => <CareersPage />,
  '/privacy': () => <PrivacyPage />,
  '/legal': () => <LegalPage />,
}

/** Drops trailing slashes so /about/ and /about match. */
function normalize(pathname: string): string {
  return pathname.replace(/\/+$/, '') || '/'
}

/**
 * Picks the page for a path. Every link is a full page load (no client-side
 * navigation), so this runs once per visit.
 */
export function resolveRoute(pathname: string): ReactElement {
  let path = normalize(pathname)

  // Old site paths: update the address bar, then render the new page.
  const redirect = legacyRedirects[path]
  if (redirect) {
    window.history.replaceState(null, '', redirect + window.location.hash)
    const url = new URL(redirect, window.location.origin)
    path = normalize(url.pathname)
  }

  const page = staticRoutes[path]
  if (page) return page()

  const service = /^\/services\/([a-z0-9-]+)$/.exec(path)
  const servicePage = service && findServicePage(service[1])
  if (servicePage) return <ServicePage page={servicePage} />

  const profile = /^\/physicians\/([a-z0-9-]+)$/.exec(path)
  const physician = profile && findPhysician(profile[1])
  if (physician) return <PhysicianPage physician={physician} />

  return <NotFoundPage />
}
