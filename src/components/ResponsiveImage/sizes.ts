/*
 * `sizes` values for each image slot: the width the photo is drawn at per
 * breakpoint, so the browser picks the smallest srcset file that stays sharp.
 * Built from the layout tokens in src/styles/tokens.css; when a slot's
 * columns, flex basis or --ratio change, update its entry here.
 */

/** A length of `vw` viewport percent plus `px` pixels. */
interface Length {
  vw: number
  px: number
}

const CONTAINER = 1500 // --container, padding included
const GAP = 24 // --grid-gap
const DESKTOP = 1080 // breakpoints in tokens.css
const TABLET = 768

/** Container content width: the viewport less --page-pad on both sides. */
const content = {
  desktop: { vw: 100, px: -80 },
  tablet: { vw: 100, px: -64 },
  mobile: { vw: 100, px: -40 },
}

const fullBleed: Length = { vw: 100, px: 0 }

function at({ vw, px }: Length, viewport: number): number {
  return (vw * viewport) / 100 + px
}

function scale({ vw, px }: Length, factor: number): Length {
  return { vw: vw * factor, px: px * factor }
}

function css({ vw, px }: Length): string {
  const round = (n: number) => Math.round(n * 100) / 100
  if (vw === 0) return `${round(px)}px`
  if (px === 0) return `${round(vw)}vw`
  return `calc(${round(vw)}vw ${px < 0 ? '-' : '+'} ${round(Math.abs(px))}px)`
}

/** One of `count` equal columns, `gap` pixels apart. */
function equalColumns(count: number, gap: number, container: Length): Length {
  return { vw: container.vw / count, px: (container.px - gap * (count - 1)) / count }
}

/** `columns` of the 12-column editorial grid. */
function gridSpan(columns: number, container: Length): Length {
  return {
    vw: (container.vw * columns) / 12,
    px: (container.px * columns) / 12 + (GAP * (columns - 12)) / 12,
  }
}

interface FlexItem {
  basis: number
  grow: number
}

/** A flex item sharing one line with `sibling`: its basis plus its share of the free space. */
function flexShare(item: FlexItem, sibling: FlexItem, gap: number, container: Length): Length {
  const share = item.grow / (item.grow + sibling.grow)
  return {
    vw: container.vw * share,
    px: item.basis + (container.px - item.basis - sibling.basis - gap) * share,
  }
}

/**
 * How much wider than its box a photo is drawn under object-fit: cover, when
 * the box is narrower than the photo (e.g. a 3:2 photo in a 4:3 box).
 */
function cover(photoRatio: number, boxRatio: number): number {
  return Math.max(photoRatio / boxRatio, 1)
}

/** Rules from the widest viewport down; the last has no media condition. */
function sizes(rules: [minWidth: number, width: Length][], narrowest: Length): string {
  return [...rules.map(([minWidth, width]) => `(min-width: ${minWidth}px) ${css(width)}`), css(narrowest)].join(', ')
}

/** A contained slot stops growing once the viewport reaches --container. */
function capped(desktop: Length): Length {
  return { vw: 0, px: Math.round(at(desktop, CONTAINER)) }
}

/** Rules for a slot inside the container. */
function contained(desktop: Length, tablet: Length, mobile: Length): string {
  return sizes(
    [
      [CONTAINER, capped(desktop)],
      [DESKTOP, desktop],
      [TABLET, tablet],
    ],
    mobile,
  )
}

/**
 * Desktop: `columns` of the grid. Tablet: `tabletColumns`. Mobile: full
 * width, scaled by `mobileCover` where the box crops the photo's sides.
 */
function gridSlot(columns: number, { tabletColumns = 12, mobileCover = 1 } = {}): string {
  return contained(
    gridSpan(columns, content.desktop),
    gridSpan(tabletColumns, content.tablet),
    scale(content.mobile, mobileCover),
  )
}

// A 4:5 photo in a 4:3 box is cropped top and bottom only, so it needs no factor.
const PHOTO_3_2 = 3 / 2
const BOX_4_3 = 4 / 3

// Hero.module.css: .media (7 1 520px) beside .text (4 1 300px), 56px apart;
// stacks once the container is narrower than 520 + 300 + 56 px.
const heroMedia = { basis: 520, grow: 7 }
const heroText = { basis: 300, grow: 4 }
const heroGap = 56
const heroDesktop = flexShare(heroMedia, heroText, heroGap, content.desktop)
const heroStackBelow = heroMedia.basis + heroText.basis + heroGap - content.tablet.px

// MentalHealthFeature.module.css: .image (5 1 380px) beside .text (6 1 440px), 96px apart.
const featureImage = { basis: 380, grow: 5 }
const featureText = { basis: 440, grow: 6 }

// ServicesDirectory.module.css: .grid is 4 / 2 columns, 32px apart (16px below
// 768px); below 480px each service is a row with a 104px photo.
const servicesGap = 32
const servicesGapMobile = 16
const servicesRowsBelow = 480
const servicesRowPhoto: Length = { vw: 0, px: 104 }
const servicesDesktop = equalColumns(4, servicesGap, content.desktop)

export const imageSizes = {
  /** Home hero. 16:10 box and photo, so nothing is cropped. */
  hero: sizes(
    [
      [CONTAINER, capped(heroDesktop)],
      [DESKTOP, heroDesktop],
      [heroStackBelow, flexShare(heroMedia, heroText, heroGap, content.tablet)],
      [TABLET, content.tablet],
    ],
    content.mobile,
  ),
  /**
   * Home "Our campus": full-bleed. Below 768px the 4:3 box keeps the whole
   * sign by cropping the sides of the 1500×793 photo.
   */
  campus: sizes([[TABLET, fullBleed]], scale(fullBleed, cover(1500 / 793, BOX_4_3))),
  /** Home Mental Health feature. 4:5 beside the text, 4:3 (no crop) once stacked below 1080px. */
  mentalHealthFeature: contained(
    flexShare(featureImage, featureText, 96, content.desktop),
    content.tablet,
    content.mobile,
  ),
  /** Home featured services: four columns, then two, then rows. 3:2 box and photo. */
  featuredService: sizes(
    [
      [CONTAINER, capped(servicesDesktop)],
      [DESKTOP, servicesDesktop],
      [TABLET, equalColumns(2, servicesGap, content.tablet)],
      [servicesRowsBelow, equalColumns(2, servicesGapMobile, content.mobile)],
    ],
    servicesRowPhoto,
  ),
  /** Home careers band: full-bleed half (flex 1 1 440px each), full width once stacked. */
  careersBand: sizes([[440 * 2, scale(fullBleed, 1 / 2)]], fullBleed),
  /** About intro: 7 columns, 3:2 at every width. */
  aboutIntro: gridSlot(7),
  /** About people: 8 columns; 4:3 on mobile. */
  aboutPeople: gridSlot(8, { mobileCover: cover(PHOTO_3_2, BOX_4_3) }),
  /** Emergency and service pages: 7 columns; 4:3 on mobile. */
  mediaColumn: gridSlot(7, { mobileCover: cover(PHOTO_3_2, BOX_4_3) }),
  /** Mental health clinic and Careers pages: 5 columns, 4:5; 4:3 (no crop) below 1080px. */
  portraitColumn: gridSlot(5),
  /** Contact: columns 7–12 from tablet up, 3:2 at every width. */
  contact: gridSlot(6, { tabletColumns: 6 }),
}
