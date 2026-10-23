import type { ReactElement } from 'react'
import { legacyRedirects, retiredRedirect } from './content/redirects'
import { findServicePage } from './content/servicePages'
import { AboutPage } from './pages/AboutPage'
import { BillingPage } from './pages/BillingPage'
import { CareersPage } from './pages/CareersPage'
import { ContactPage } from './pages/ContactPage'
import { EmergencyPage } from './pages/EmergencyPage'
import { FinancialAssistancePage } from './pages/FinancialAssistancePage'
import { HomePage } from './pages/HomePage'
import { LegalPage } from './pages/LegalPage'
import { MentalHealthClinicPage } from './pages/MentalHealthClinicPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PatientsPage } from './pages/PatientsPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { ServicePage } from './pages/ServicePage'
import { ServicesPage } from './pages/ServicesPage'

const staticRoutes: Record<string, () => ReactElement> = {
  '/': () => <HomePage />,
  '/about': () => <AboutPage />,
  '/services': () => <ServicesPage />,
  '/emergency': () => <EmergencyPage />,
  '/mental-health-clinic': () => <MentalHealthClinicPage />,
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

  // Old site and retired paths: update the address bar, then render the new page.
  const redirect = legacyRedirects[path] ?? retiredRedirect(path)
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

  return <NotFoundPage />
}
