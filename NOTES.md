# Homepage: open verification items

Items to confirm with PHV before launch. Code locations are noted so each can be resolved in one place.

## Content approvals

- **Testimonials**: reconfirm publication approval for all four quotes and their attributions (T. O’Donnell, A. Ford, B.N., Karape Beglary). See `src/content/testimonials.ts`.
- **Careers**: confirm there are current "immediate openings in nursing" and that the benefits list (salaries, 401(k), health benefits, paid vacation/holidays/sick leave, full-time/part-time/per diem) is accurate. See `src/content/careers.ts`.
- **Visiting hours**: confirm whether 11:00 AM – 7:00 PM applies daily or only on certain days. See `src/content/site.ts` (`hours.visiting`).

## Link destinations

- **Spanish ("Español")**: no destination exists. It renders as plain text until `links.spanish.href` is set in `src/content/links.ts`.
- **Interim destinations** (`verified: false`, note "destination needs decision") in `src/content/links.ts`:
  - Main nav "Additional care" → all services page
  - Main nav "Patient resources" → patient billing page
  - Services: Acute care, Surgery, Subacute care, Rehabilitation, Behavioral health → all services page

## Photography

All four images are labeled placeholders (`isPlaceholder: true` in `src/content/images.ts`). Replace them with on-site photography, update `alt` text, and set `isPlaceholder: false`. Each entry's `brief` field holds the shot description:

- Hero: a PHV nurse talks with an older patient at the bedside
- Campus: the PHV building in early morning light, real signage visible
- Mental health: counselor and client seated, faces partly turned for privacy
- Careers: PHV nurses walking a corridor, real staff
