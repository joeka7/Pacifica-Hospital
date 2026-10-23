# Homepage: open verification items

Items to confirm with PHV before launch. Code locations are noted so each can be resolved in one place.

## Content approvals

- **Testimonials**: reconfirm publication approval for all four quotes and their attributions (T. O’Donnell, A. Ford, B.N., Karape Beglary). See `src/content/testimonials.ts`.
- **Careers**: confirm there are current "immediate openings in nursing" and that the benefits list (salaries, 401(k), health benefits, paid vacation/holidays/sick leave, full-time/part-time/per diem) is accurate. See `src/content/careers.ts`.
- **Visiting hours**: confirm whether 11:00 AM – 7:00 PM applies daily or only on certain days. See `src/content/site.ts` (`hours.visiting`).

## Link destinations

- **Spanish ("Español")**: no destination exists. It renders as plain text until `links.spanish.href` is set in `src/content/links.ts`.
- **Interim destinations**: resolved. Every homepage link that pointed to pacificahospital.com (or to an interim stand-in) now points to its local page; see "Interior pages" below. Main nav "Additional care" goes to the "Tests and pharmacy" group on `/services`, and "Patient resources" goes to `/patients`.

## Photography

The hero, mental health and careers images are now licensed Pexels stock photos (entries with a `stockSource` in `src/content/images.ts`; credits and licence in `src/assets/images/image-sources.md`). They are interim: replace them with on-site photography shot to each entry's `brief`, update `alt` text, and remove `stockSource`. They show no PHV staff or spaces, so don't caption them as PHV.

The Home "Our campus" image is `Gary+Pacifica+Pic+3.webp`, a genuine photo of the PHV sign and building. Its source and licence aren't recorded; see `src/assets/images/image-sources.md`.

# About page: open verification items

The About page (`/about`) lives in `src/pages/AboutPage.tsx`; all of its copy is in `src/content/about.ts`.

## Content approvals

1. **Mission**: the page uses the verified homepage mission ("To enrich health and vitality in our communities and the lives we serve."). The Stitch draft proposed a different mission ("To provide thoughtful, patient-centered care…"). Confirm the official wording. See `missionVision.items[0]`.
2. **Vision**: draft wording ("To create a healthcare experience built around trust, continuous improvement, and the needs of every patient.") needs approval. It is flagged `isDraft: true` in `missionVision.items[1]`.
3. **Values**: the About page shows Compassion, Excellence, Integrity and Collaboration, while the homepage shows the H.E.A.R.T. values (Honesty, Excellence, Accountability, Respect, Trust). Decide on one set for the whole site. See `aboutValues` and `careValues` in `src/content/site.ts`.
4. **Removed draft claims**: do not reintroduce any of these without verification:
   - "Gold Seal Accredited"
   - staff counts or "board-certified"
   - nurse-to-patient ratios
   - interpreter services
   - quiet hours
   - "Daily" visiting hours (see also the homepage visiting-hours item above)
   - the "Clinical Leadership Council" quote
5. **New microcopy** needing sign-off:
   - section labels "Guiding commitments", "Our people" and "Thoughtful practice"
   - the mission and vision support lines
   - the closing line "We’re here to help you and your loved ones."
   - the row headings "Mission" and "Vision"

## Photography

- `aboutCampusWide` (21:9) is still a labeled placeholder. It is captioned with the hospital's name and address, so it needs a real photograph: the Sun Valley campus in early morning light, from across San Fernando Road, real signage, no people in focus.
- `aboutCorridor` and `aboutCareTeam` (3:2) are interim Pexels stock photos (see the homepage Photography note). Replace them with on-site shots to their `brief`: an inpatient corridor with one staff member walking away, and a nurse, physician and case manager at a nurses’ station.

## Hosting

- Routing is a small path table in `src/router.tsx` (no router dependency). Trailing slashes are ignored; unknown paths render a "Page not found" page (previously they fell back to the homepage).
- The Vite dev and preview servers already fall back to `index.html`. **Production hosting needs an SPA fallback** (rewrite every route to `/index.html`) or prerendered pages, otherwise deep links return 404.
- **Redirects from the old site**: `src/content/redirects.ts` maps old pacificahospital.com paths to the new pages. The app applies them in the browser; configure the same list as server-side 301s at launch.
- **Retired physician paths**: the site has no physician directory (see "Physician directory" below). `retiredRedirect` in `src/content/redirects.ts` sends `/physicians`, `/doctors`, `/specialists`, `/hospitalists`, `/staff-officers`, `/hospital-committee` and every path beneath them to `/contact`. Configure the same prefixes as server-side 301s at launch.
- Page title and meta description are set client-side by `useDocumentMeta`. Crawlers that don't run JavaScript will see the homepage values from `index.html` unless pages are prerendered.

# Interior pages: open verification items

All copy is in `src/content/` (one file per page or area); page layouts are in `src/pages/`. Content comes from pacificahospital.com as reviewed on 21 October 2026.

## Routes

| Route | Source page(s) |
| --- | --- |
| `/services` (filters: `?setting=inpatient`, `?setting=outpatient`) | /all-services/, /featured-inpatient-treatments/, /featured-outpatient-treatments/ |
| `/services/acute-care`, `/intensive-care`, `/medical-surgical`, `/mental-health-unit`, `/subacute`, `/skilled-nursing`, `/respiratory-therapy` | unit descriptions on the three pages above |
| `/services/rehabilitation` | "Comprehensive Inpatient Therapy", "Comprehensive Outpatient Therapy" and "Physical Medicine and Rehabilitation" (merged; the source repeats the same text) |
| `/services/imaging`, `/services/laboratory`, `/services/pharmacy` | unit descriptions merged with /services/medical-imaging-nuclear-medicine/, /services/laboratory-servives/, /services/pharmacy-department/ |
| `/emergency` | /emergency-department-menu-main/ and /services/emergency-servives/ (merged) |
| `/mental-health-clinic` | /pacific-hospital-of-the-valley-urgent-care-clinic/ |
| `/patients` | /patient-info/, /patients-and-visitors_/ and the shared contact block |
| `/patients/billing`, `/patients/financial-assistance` | /patient-billing/, /help-paying-your-bill/ |
| `/contact` | /contact-2/ |
| `/careers` | /services/hospital-careers/ |
| `/privacy` | the current Notice of Privacy Practices PDF (see below) |
| `/legal` | /legal/ |

**Source pages not reproduced:**
- /services/diagnostic-center/ and /services/immediate-care/: leftover theme demo content (lorem ipsum, a (510) phone number, sample price lists).
- /services/subacute-department/: COVID-19 status page with an empty case-count table. Current subacute content is on `/services/subacute`.
- /covid-19-response-plan/, /patient-satisfaction-survey/ (Spanish survey form), /pacifica-pricing/ (download links are mislabeled and one is broken), /imaging-services/, /lab-services/, /departments/*, /features/*, blog posts: not linked from the site's navigation, outdated, or duplicates.
- /ceo-president-precious-mays-2/: not linked from navigation and contains award and performance claims. **Decide** whether to publish a leadership biography.
- /senior-leadership/: returns 404 on the source.
- /specialists/, /hospitalists/, /staff-officers/, /hospital-committee/ and /doctors/<name>/: physician directory, retired by decision (see "Physician directory" below).

## Navigation decisions

1. **No dropdown menus.** The source header has dropdowns; the approved header is a flat list, so it is unchanged. Sub-pages are reached from the landing pages (`/services`, `/patients`). Confirm, or approve adding dropdowns to the header.
2. **Home and Contact in the header.** The flat list starts with "Home" and ends with "About us". "Contact" is the header button (desktop) and the full-width button below the list (mobile menu), replacing "Find a physician"; it is not repeated in the list. It also sits under "About Pacifica Hospital" in the footer "About" column, and is reached from the hero ("Plan your visit"), About, Patients and the closing sections.
3. **Footer** labels are unchanged; "HIPAA privacy" and "Legal terms" now go to `/privacy` and `/legal`.

## Physician directory

Retired by scope decision: the site covers the hospital, its departments, services, facilities, patient resources and contact information, not individual physicians. There is no physician finder, no profile pages, no medical staff leadership page and no named physician on any page. Former paths redirect to `/contact` (see "Hosting"). General references to physicians, hospitalists and care teams in service and About copy are kept. Do not add named physicians or headshots without a new scope decision.

## Content conflicts and omitted claims

1. **Bed counts conflict**: the source says the Skilled Nursing Unit has 98 beds and the "Subacute and Skilled Nursing Unit" has 89 beds. Neither number is shown. Confirm the figures.
2. **Omitted unverified claims** (do not add without verification): "more than 100 physicians"; "more than 50,000 emergency patients" a year; surgeons described as "some of the finest, most respected" and taking part in surgical research; imaging doctors with "the highest ranking status"; MH clinic decisions "from board certified medical professionals leading global research"; "board-certified" lab pathologists; mental health statistics from mhstats.org (19.2% of adult ER visits; 10.5 suicides per 100,000).
3. **Kept, needs verification**:
   - Laboratory: staff "meet and exceed the criteria set by" AABB, ASHI, CAP and FDA. The source sentence is garbled; it was reconstructed with the same four bodies.
   - Subacute: "Pacifica has cared for respiratory patients since 1994" (source: "a stellar reputation as an industry leader … since 1994").
   - Rehabilitation: confirm the post-COVID-19 program is still offered, and that outpatient therapy serves "any age group" including pediatrics, given the hospital otherwise describes itself as serving adults.
   - Emergency Department: the source says walk-in treatment "in adults and children"; this phrase was omitted because the rest of the site says adults. Confirm.
   - Imaging: the homepage directory (approved) says "Radiology and nuclear medicine", but the source imaging page lists no nuclear medicine services. Confirm before launch.
4. **Emergency conditions**: the source "Back Pain" and "Fever" entries were omitted. The Back Pain text repeats the page introduction, and the list under "Fever" (sudden numbness, vision loss, loss of bladder or bowel control) reads as back-pain warning signs. Supply corrected text if they should appear.
5. **Mental Health Urgent Care Clinic**: the source says "In case of medical emergency Dial 911 or call 818.767.3310" (the main line). The page says dial 911 and adds the 988 lifeline, which the source also lists. Confirm the clinic's hours wording ("Open around the clock", from "We are here around the clock").
6. **Careers**: the source gives two cut-off dates for old applications (September 24 and 25, 2018); the page uses September 25. The note is likely obsolete; confirm or remove. The source's staff video testimonials (Vimeo) are not reproduced.
7. **Legal and CEO pages**: the testimonials on the source (Andrew Jackson, Jillian Williamson, Dan Raines, Gabbie Cooper) appear to be theme demo content and are omitted.
8. **Patient billing**: the source's "list of charges" links point to /price-transparency/, which returns 404. They now go to the ClaraPrice standard-charges site used in the main navigation. Confirm this is the correct destination.

## Privacy notice (`src/content/privacy.ts`)

- The source page /hipaa-privacy-policy/ carries an older notice (effective April 14, 2003). The current notice is the PDF on /legal/ (effective 1/1/2023, updated 9/5/2026), which adds the Organized Health Care Arrangement and Part 2 SUD-record provisions. `/privacy` presents the current notice.
- The text was converted from the PDF. Only PDF extraction artifacts were repaired (split words such as "vi olence", stray spaces and hyphens), capitalized headings were set in sentence case, an "About this notice" heading was added, and the "Our uses and disclosures" parent heading was folded into its two sub-headings. One source sentence is ungrammatical and kept as written ("… by third parties are known as 'business associates'"). **The Chief Privacy Officer must approve the page against the PDF before launch.**

## Contact form (`src/content/contact.ts`)

The source form posts to a WordPress handler this site does not have. The form asks for full name, email address, phone number (optional), subject and message, and validates them in the browser (email format; phone 10–15 digits when given; message up to 1,500 characters). This differs from the source, which has first and last name, no subject, and "Reason for appointment or inquiry"; confirm the field set before connecting an endpoint, because the field names are what it will receive. **It does not send anything.** While `contactForm.endpoint` is null, a note beside the "Send message" button says online messages are not yet connected and gives info@pacificahospital.com and the main line; a valid submit keeps the message in the form and announces "Your message has not been sent" with the same routes. Nothing opens the visitor's email app (the earlier "Open in email app" `mailto:` handoff was removed). Setting `contactForm.endpoint` makes the form a normal POST and hides the note. Decide: the submission endpoint, spam protection and the confirmation page. Validation errors use navy, not red, because red is reserved for emergency care; confirm.

The Contact page photo is interim stock (`contactReception` in `src/content/images.ts`). The original Contact page image is a genuine photo of the campus, but its rights are unrecorded, so it is not used; see "Original Contact page image" in `src/assets/images/image-sources.md` for what PHV needs to confirm.

## New microcopy needing sign-off

Page headings and leads not taken from the source, including: "Care for every stage of a hospital stay." (Services), "Questions about your care?" (service closings), "Patients and visitors." and its lead, "Policies and notices." and its lead (Legal), "A place for your career." (Careers), "Directions to the Emergency Department.", "We’re here to help you improve along your healing journey." (adapted from the clinic page), the service directory group names and one-line service summaries, the "Related services" heading, "Emergency care team" (Emergency), and the contact form's unavailable note.

## External links

The site links to official PHV documents (PDFs on pacificahospital.com), the HealthcareSource job portal, ClaraPrice, Google Maps, LA County DMH, SAMHSA, HHS and HCAI. All responded except the SAMHSA, HHS and HCAI pages, which block automated checks ("Access Denied"); check those three by hand. If the PDFs move when the old site is retired, update the `UPLOADS` entries in `src/content/links.ts`.

## Photography

- `serviceImages` (11 service pages and the Emergency Department) are interim Pexels stock photos chosen to match each service. Shot briefs for the on-site replacements stay in `src/content/images.ts`. The Emergency Department image is a generic treatment area, not an entrance, so it doesn't pass for PHV's own ED.
- The Mental Health Clinic and Careers pages reuse the homepage mental health and careers photos.
