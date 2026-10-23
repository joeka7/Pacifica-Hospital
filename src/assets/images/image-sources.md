# Image sources

Interim stock photography, downloaded on 21 October 2026. Every photo below stands in until on-site PHV photography is shot to the `brief` in `src/content/images.ts`. None of them shows Pacifica Hospital of the Valley, its building or its staff. Do not caption them, or use them elsewhere, in a way that says they do.

## Licence

All photos are from [Pexels](https://www.pexels.com/license/) under the Pexels License:

- Free to use, including commercially. Attribution is not required (credits are kept here for reference).
- Modification is allowed. The files here are cropped and resized, and one is colour-corrected.
- Not allowed: showing identifiable people in a bad light or an offensive way, implying that the people shown endorse PHV, selling unaltered copies, redistributing on other stock or wallpaper sites, and use in a trademark or business name.

## Files

Each photo is one WebP file, `<name>.webp`, sized for its largest slot at 2x pixel density. It is the only copy kept in this folder: smaller renditions are generated at build time (see "Responsive renditions" below). The hand-made `<name>-<width>.webp` renditions were removed on 23 October 2026.

| File | Size | Used on | Source photo | Photographer |
| --- | --- | --- | --- | --- |
| `hero-bedside-care.webp` | 1920×1200 | Home: hero | [Caregiver Taking Care of Patient on Bed](https://www.pexels.com/photo/caregiver-taking-care-of-patient-on-bed-18459210/) | Jsme MILA |
| `mental-health-consultation.webp` | 1200×1500 | Home: Mental Health Urgent Care Clinic feature; `/mental-health-clinic`: approach section | [Vertical Shot of Two Woman Talking in a Living Room](https://www.pexels.com/photo/vertical-shot-of-two-woman-talking-in-a-living-room-6255599/) | Kaboompics (karola-g) |
| `careers-nursing-corridor.webp` | 1200×1500 | Home: careers band; `/careers` | [Female Nurse in Blue Scrubsuit](https://www.pexels.com/photo/female-nurse-in-blue-scrubsuit-6129581/) | RDNE Stock project |
| `about-corridor.webp` | 1600×1067 | `/about`: intro | [Modern Hospital Corridor in Ankara, Türkiye](https://www.pexels.com/photo/modern-hospital-corridor-in-ankara-turkiye-29948395/) | Burçak Çubukçu |
| `about-care-team.webp` | 1600×1067 | `/about`: our people | [Doctor and Nurses Talking](https://www.pexels.com/photo/doctor-and-nurses-talking-6129436/) | RDNE Stock project |
| `emergency-treatment-area.webp` | 1600×1067 | `/emergency`: what to bring | [Emergency room emergency, hospital, medical care](https://www.pexels.com/photo/emergency-room-emergency-hospital-medical-care-706082/) | Frans van Heerden |
| `acute-care-chart-review.webp` | 1600×1067 | `/services/acute-care` | [Doctor Talking to a Nurse](https://www.pexels.com/photo/doctor-talking-to-a-nurse-6129153/) | RDNE Stock project |
| `intensive-care-room.webp` | 1600×1067 | `/services/intensive-care` | [Hospital Bed Near the Glass Window](https://www.pexels.com/photo/hospital-bed-near-the-glass-window-4966406/) | Saulo Zayas |
| `operating-room.webp` | 1600×1067 | `/services/medical-surgical` | [Equipment in Operation Room](https://www.pexels.com/photo/equipment-in-operation-room-12104186/) | Mehmet Turgut Kirkgoz |
| `behavioral-health-lounge.webp` | 1600×1067 | `/services/mental-health-unit` | [Modern Sunlit Lobby with Large Windows](https://www.pexels.com/photo/modern-sunlit-lobby-with-large-windows-38554812/) | Valentin Ivantsov |
| `subacute-bedside-monitor.webp` | 1600×1067 | `/services/subacute` | [Nurse looking at a Monitor](https://www.pexels.com/photo/nurse-looking-at-a-monitor-6129683/) | RDNE Stock project |
| `skilled-nursing-walk.webp` | 1600×1067 | `/services/skilled-nursing` | [Caring Interaction Between Nurse and Elderly Patient](https://www.pexels.com/photo/caring-interaction-between-nurse-and-elderly-patient-34328480/) | Caleb Oquendo |
| `rehabilitation-balance-therapy.webp` | 1600×1067 | `/services/rehabilitation` | [A Woman Guiding a Man on His Physical Therapy](https://www.pexels.com/photo/a-woman-guiding-a-man-on-his-physical-therapy-6111585/) | Kampus Production |
| `respiratory-nebulizer.webp` | 1600×1067 | `/services/respiratory-therapy` | [Close-Up Photo of a Healthcare Professional Holding a Nebulizer](https://www.pexels.com/photo/close-up-photo-of-a-healthcare-professional-holding-a-nebulizer-7447013/) | Gustavo Fring |
| `ct-scanner-room.webp` | 1600×1067 | `/services/imaging` | [Diagnosis Device in Hospital](https://www.pexels.com/photo/diagnosis-device-in-hospital-13176452/) | Pexels user "contact me +923323219715" |
| `laboratory-centrifuge.webp` | 1600×1067 | `/services/laboratory` | [Doctor Using a Centrifuge Machine](https://www.pexels.com/photo/doctor-using-a-centrifuge-machine-6627667/) | Kaboompics (karola-g) |
| `pharmacy-medication-station.webp` | 1600×1067 | `/services/pharmacy` | [Medical Practitioner getting Medicine from Shelf](https://www.pexels.com/photo/medical-practitioner-getting-medicine-from-shelf-6129585/) | RDNE Stock project |
| `contact-reception-desk.webp` | 1600×1067 | `/contact`: beside the phone numbers | [A Woman Talking to a Receptionist](https://www.pexels.com/photo/a-woman-talking-to-a-receptionist-4266932/) | Cedric Fauntleroy |

Processing notes:

- Crops are centred, with two exceptions. `skilled-nursing-walk` is a 3:2 band from the lower half of a portrait original. `careers-nursing-corridor` is cropped in slightly to remove a part-cut wall sign.
- `emergency-treatment-area` has a mild white-balance correction that reduces the original's strong yellow cast.
- `contact-reception-desk` (downloaded 23 October 2026) is the full 6000×4000 original resized to 3:2 with no crop; the Pexels page lists its licence as "Pexels". It stands in for the original Contact page image (see "Original Contact page image" below) and is not captioned.
- WebP, quality 78.

## Responsive renditions

Added 23 October 2026. Keep one file per photograph here; do not add resized copies.

- `vite-imagetools` (configured in `vite.config.ts`) generates smaller WebP renditions from each source file during `vite build` (and on demand in `vite dev`). They are written to `dist/assets` with the rest of the build, cached in `node_modules/.cache/imagetools`, and never stored in this folder.
- Renditions use the same settings as the source files: WebP, quality 78 (encoder effort 6). They are downscaled only, with no crop, so composition, aspect ratio and crop position are unchanged.
- The source file is served unchanged as the largest `srcset` candidate, so large screens get exactly the file in this folder.
- The widths for each photo are set on its `?w=…&as=srcset` import in `src/content/images.ts`. Each list stays below the source width:
  - `hero-bedside-care`: 640, 960, 1280, 1600 (plus the 1920 source)
  - 3:2 column photos (1600 source): 720, 960, 1280
  - 4:5 portraits (`mental-health-consultation`, `careers-nursing-corridor`, 1200 source): 640, 960
  - `Gary+Pacifica+Pic+3` (1500 source): 1080, 1280
- Each slot's `sizes` value is in `src/components/ResponsiveImage/sizes.ts`. It is derived from the layout CSS, including the extra width a photo is drawn at where a 4:3 mobile box crops its sides. Update it when a slot's columns or ratio change.
- When replacing a photo, keep the same file name and dimensions, or update `width`/`height` and the import's width list in `src/content/images.ts` to match.
- `about-campus-wide.svg`, `logo.webp` and `fav-icon.webp` have no renditions.

## Still placeholders

These stay as labelled SVG placeholders on purpose, because stock photography would misrepresent a real place or person:

- `about-campus-wide.svg` (About hero, captioned with the hospital's name and address) needs a genuine photograph of the Sun Valley building. No openly licensed photo of it was found (Wikimedia Commons searched again on 23 October 2026). The one genuine campus photo on pacificahospital.com has no recorded licence; see below.

Home "Our campus" shows `Gary+Pacifica+Pic+3.webp` (1500×793, added to the project 23 October 2026): the PHV monument sign on San Fernando Road with the hospital building behind. It replaced the `campus-exterior.svg` placeholder, which was then deleted as unused (23 October 2026). Its photographer and licence are not recorded here; confirm PHV owns it or holds a licence that covers this site.

## Original Contact page image

Checked 23 October 2026. The design image on [pacificahospital.com/contact-2/](https://pacificahospital.com/contact-2/) is the Slider Revolution background `https://pacificahospital.com/wp-content/uploads/2020/10/70011.png` (layer title "700(1)(1)", lazy-loaded, so it is not in the page's plain `<img src>` list).

- Downloaded and verified: PNG, 1250×757, 8-bit palette, 486,823 bytes, SHA-256 `3de83e231c8abdb77d0eb45367de6b4634313ac79b739a98b4b3589c6dcf5569`.
- Subject: a genuine photograph of the PHV campus from the San Fernando Road side. The monument sign reads "Pacifica Hospital of the Valley" with "Emergency / Emergencia" and department directions, and the pole sign also reads "Pacifica Hospital of the Valley". Parking lot, palms and the medical office building on the left.
- **Not used.** The photographer, ownership and licence are not recorded anywhere on the site or in the file, and a site displaying an image does not show that it holds the rights. It was replaced on `/contact` by `contact-reception-desk` (Pexels, above).
- To use it: PHV confirms it owns the photo or holds a licence that covers this site. It is low-resolution (1250 px wide), palette-quantised and taken in harsh midday light, so a new photograph shot to the campus brief is still preferable for the Home and About placeholders.

## Reviewed but not used

- Images on pacificahospital.com (checked 21 October 2026): stock photos with no recorded licence (for example `cora.jpg`, `doctor_phv_surg2.jpg`, `pexels-photo-1881170.jpeg`), low-resolution thumbnails (`*285x190.png`, `*410x269.png`, `phvOR1.jpg` at 425×235), and a text graphic (`2460_lght.png`, "ER 24 HR"). None were reused. The Contact page campus photo `70011.png` is covered above.
- Unsplash and Pixabay: their search pages require an API key or a browser challenge, so they weren't used.
