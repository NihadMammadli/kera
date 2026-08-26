---
name: KERA
description: A Georgian church interior rendered as a website — fresco pigment, arched openings, and gold rationed to what is alight.
colors:
  plaster: "#0f1a2e"
  plaster-lift: "#16243c"
  plaster-deep: "#091121"
  cinnabar: "#9b2f26"
  cinnabar-deep: "#6e1e1a"
  ochre: "#c07c35"
  malachite: "#35604c"
  chalk: "#efe5d2"
  chalk-2: "#c3b79e"
  chalk-3: "#8f8774"
  gilt: "#e8c177"
  gilt-hi: "#f7e4b4"
  gilt-deep: "#cfa458"
  gilt-lit: "#fdf1d6"
typography:
  wordmark:
    fontFamily: "Marcellus, 'Times New Roman', serif"
    fontSize: "clamp(4.6rem, 21vw, 15rem)"
    fontWeight: 400
    lineHeight: 0.8
    letterSpacing: "0.02em"
  title:
    fontFamily: "Marcellus, 'Times New Roman', serif"
    fontSize: "clamp(2.4rem, 1.2rem + 5.4vw, 6rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.022em"
  lead:
    fontFamily: "'Alegreya Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 1.1rem + 1.2vw, 2rem)"
    fontWeight: 340
    lineHeight: 1.42
    letterSpacing: "normal"
  body:
    fontFamily: "'Alegreya Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 380
    lineHeight: 1.65
    letterSpacing: "normal"
  body-sm:
    fontFamily: "'Alegreya Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.98rem"
    fontWeight: 380
    lineHeight: 1.6
    letterSpacing: "normal"
  georgian-sm:
    fontFamily: "'Noto Serif Georgian', Marcellus, serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "normal"
  nav-mark:
    fontFamily: "Marcellus, 'Times New Roman', serif"
    fontSize: "1.4rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.34em"
  inscription:
    fontFamily: "'Noto Serif Georgian', Marcellus, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.12em"
  band-latin:
    fontFamily: "Marcellus, 'Times New Roman', serif"
    fontSize: "clamp(0.95rem, 1.6vw, 1.15rem)"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "normal"
  sheet-link:
    fontFamily: "Marcellus, 'Times New Roman', serif"
    fontSize: "clamp(2rem, 9vw, 3.4rem)"
    fontWeight: 400
    lineHeight: 1.24
    letterSpacing: "normal"
  title-compact:
    fontFamily: "Marcellus, 'Times New Roman', serif"
    fontSize: "clamp(2.1rem, 3.1vw, 3.3rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.022em"
  statement:
    fontFamily: "Marcellus, 'Times New Roman', serif"
    fontSize: "clamp(2rem, 1.2rem + 3.4vw, 4rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.014em"
  foot-mark:
    fontFamily: "Marcellus, 'Times New Roman', serif"
    fontSize: "clamp(3rem, 12vw, 8rem)"
    fontWeight: 400
    lineHeight: 0.85
    letterSpacing: "0.06em"
  micro:
    fontFamily: "'Alegreya Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0.2em"
  micro-tight:
    fontFamily: "'Alegreya Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.1em"
  georgian:
    fontFamily: "'Noto Serif Georgian', Marcellus, serif"
    fontSize: "clamp(1.15rem, 2.4vw, 1.7rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
rounded:
  pill: "999px"
  plate: "50% 50% 0 0 / 30% 30% 0 0"
  hair: "2px"
spacing:
  gutter: "clamp(1.25rem, 5vw, 4.5rem)"
  section: "clamp(5.5rem, 13vh, 11rem)"
  row: "clamp(1.1rem, 2.6vh, 1.6rem)"
  stack: "clamp(1.5rem, 4vh, 2.75rem)"
components:
  button-primary:
    backgroundColor: "{colors.gilt}"
    textColor: "{colors.plaster-deep}"
    typography: "{typography.micro}"
    rounded: "{rounded.pill}"
    padding: "0.85em 1.6em"
  button-primary-hover:
    backgroundColor: "{colors.gilt-hi}"
    textColor: "{colors.plaster-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.chalk}"
    typography: "{typography.micro}"
    rounded: "{rounded.pill}"
    padding: "0.85em 1.5em"
  input-email:
    backgroundColor: "{colors.plaster-deep}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.pill}"
    padding: "0.85em 1.1em"
  band:
    backgroundColor: "{colors.cinnabar-deep}"
    textColor: "{colors.gilt}"
    typography: "{typography.georgian}"
    padding: "clamp(0.9rem, 2.4vh, 1.5rem) 0"
  plaque:
    backgroundColor: "transparent"
    textColor: "{colors.chalk}"
    padding: "clamp(1.25rem, 2.8vw, 1.9rem)"
  menu-tab:
    backgroundColor: "transparent"
    textColor: "{colors.chalk-3}"
    typography: "{typography.micro}"
    rounded: "999px 999px 0 0 / 44% 44% 0 0"
    padding: "0.85rem clamp(0.9rem, 2vw, 1.6rem) 0.9rem"
  menu-tab-selected:
    backgroundColor: "{colors.cinnabar}"
    textColor: "{colors.chalk}"
  menu-price:
    backgroundColor: "transparent"
    textColor: "{colors.ochre}"
    typography: "{typography.title}"
---

# KERA design system

## Overview

The world is the inside of a Georgian mountain church, not a restaurant. Deep
fresco-blue lime plaster is the ground; cinnabar, ochre and malachite are
pigment fields painted onto it; chalk is the ink. Gold is gilding, and it is
rationed.

Every photograph on the site is cut into the same arch, and every arch **fires**
when it is reached — the gilt outline rises up the jambs and over the crown while
the image rises into the opening behind it. That single event is the whole motion
system. It is not decoration; it is what the page does.

The page is drenched, not accented: colour owns whole regions. Field changes
carry the scroll — plaster, a cinnabar band, plaster-deep for the rooms, a
malachite-lifted field for the work, an ochre lamp glow for the arrival.

## Colors

**Strategy: drenched.** The surface *is* the pigment. Only two families exist —
plaster (the wall) and pigment (what is painted on it) — plus chalk for ink and
gilt for gilding.

| Token | Role |
| --- | --- |
| `plaster` `#0f1a2e` | The wall. The default ground everywhere. |
| `plaster-lift` `#16243c` | A lit patch of the same wall; gradients, not fills. |
| `plaster-deep` `#091121` | A recess: the rooms field, the footer, input wells. |
| `cinnabar` `#9b2f26` | Pigment field. Glows, washes, the room hover. |
| `cinnabar-deep` `#6e1e1a` | The inscription band's own ground. |
| `ochre` `#c07c35` | Pigment ink: section labels, static icons, the plaque rule. |
| `malachite` `#35604c` | Pigment field. Never used as ink. |
| `chalk` `#efe5d2` | Primary ink. |
| `chalk-2` `#c3b79e` | Secondary ink — body copy on plaster. 8.8:1. |
| `chalk-3` `#8f8774` | Tertiary ink — labels, pending values. 4.7:1, the floor. |
| `gilt` `#e8c177` | Gilding. See the law below. |
| `gilt-hi` `#f7e4b4` | Gilding, catching light: button hover only. |
| `gilt-deep` `#cfa458` · `gilt-lit` `#fdf1d6` | The primary action's gradient stops. Nowhere else. |

**The gold law.** `gilt` means one thing: **what is alight.** It is permitted on
exactly five things — the primary action, an arch's outline as it fires, today's
stage of the build (the ladder fill and its dot), the live element (focus ring,
hovered/current nav link, hovered room), and the gilded inscription band. It is
forbidden on labels, static icons, headings, borders, and dividers; those take
`ochre` or `chalk-3`. Gold spent decoratively costs the page its only emphasis.

Secondary text is always tinted from the ground's own hue. Never grey.

## Typography

**Marcellus** (lapidary, inscriptional, one weight) carries every display voice:
the wordmark, section titles, the italic emphasis inside them, pending values,
and the Georgian transliterations. One weight is deliberate — hierarchy comes
from **size and pigment, never from font-weight escalation.**

**Alegreya Sans** (humanist, 300–700) carries everything read rather than
looked at: leads, body, labels, controls.

**Noto Serif Georgian** carries Mkhedruli. Georgian script never appears without
a Latin reading beside it.

The ramp: `micro 0.8125` → `body-sm 0.98` → `body 1.0625` → `step-1` → `lead` →
`step-3` → `title (max 6rem)` → `wordmark`. Tracking floor `-0.022em` on titles;
`+0.2em` on micro labels. Body measure 66ch.

`micro-tight` is the one responsive type variant: below 420px the hero's footer
labels drop to `0.75rem / 0.1em`, because `0.2em` tracking in a half-width
column wrapped the address to four lines and every line it took came out of the
hero arch's height.

Every heading and lead splits into masked lines on scroll (`data-split="lines"`).
SplitText clips each line to its line box, so `[data-split] > div` carries
`padding-bottom: 0.17em; margin-bottom: -0.17em` to give descenders their room
back. Removing that pair silently shears every `g`, `y` and `p` in a heading.

## Layout

One column of air: `--gutter` inside a 1400px shell, `--section` between
sections, always more space above a heading than below it.

Sections alternate asymmetric two-column splits (title | lead, image | text,
facts | action) rather than repeating a card grid. The rooms are the exception
and the set piece: on ≥901px the section pins to one screen with the head in a
narrow left column and the drawings running off the right edge; below that it
becomes a snap-scrolling row that works with no JavaScript at all.

Breakpoints in use: `901px` (the pin / full nav), `860–900px` (two columns
collapse), `760px`, `720px` (hero furniture), `640px`.

## Elevation & Depth

**One light source, low and to the left.** A fixed radial ochre wash sits at
8%/88%, a malachite one at 92%/6%, and a fine fractal-noise overlay at 32%
`overlay` gives the plaster its grain. Both are `position: fixed` — the texture
belongs to the viewport, not the document.

Depth is light, not stacking. There is exactly one shadow token —
`0 6px 18px -8px rgba(6, 12, 24, 0.72)` on the primary button, doubling on hover
— and it is the plaster's own shadow, never a coloured glow. The nav is the only
`backdrop-filter` (`blur(14px) saturate(1.2)`), and only after the hero.

Every arch carries an internal gradient that settles plaster into its lower
third, so display type can sit across an image without a box behind it.

## Shapes

**The arch is the shape language.** One path, defined once as an SVG `clipPath`
in `objectBoundingBox` units and reused everywhere:

```
M0,1 L0,0.42 C0,0.17 0.19,0 0.5,0 C0.81,0 1,0.17 1,0.42 L1,1 Z
```

Slightly pointed, springing at 42% of the height. Photographs get the clip; the
drawn room plates get its CSS approximation (`rounded.plate`); the OG card gets
the same profile in absolute units. Its gilt outline is stroked from the same
path with `vector-effect: non-scaling-stroke` and masked to fade into the plaster
at the bottom.

Controls are pills. Rules are 1px hairlines mixed from chalk at 16%/30%. The one
ornament is a carved interlace (`Braid`) and a grapevine glyph (`Vine`) — the
tympanum carving, used as a rule and as the band's separator.

Icons are authored, never borrowed: 24×24 grid, 1.4–1.5 stroke, round caps, no
fill, drawn as the object itself (a skewer with meat threaded on it, a clay
vessel buried to its neck) rather than as a generic plate or fork.

## Components

- **`.gilt` (primary action)** — the only gold button. Gradient gold leaf, plaster
  ink, one soft dark shadow, `translateY(-2px)` and a warmer gradient on hover.
  No shine sweep, no zero-blur edge, no gold halo: it is leaf on a wall, not
  polished metal.
- **`.ghost` (secondary)** — hairline pill, no fill, border warms on hover.
- **`.arch`** — `figure > frame(clip) > veil(clip) > img` plus the stroked
  outline. Fired by default in CSS; see the motion rule below.
- **`.band`** — the inscription. Cinnabar-deep field, gilt Mkhedruli, italic
  transliteration, a dim gloss, a vine between each. Duplicated once for the
  loop, the copy `aria-hidden`.
- **`.dish` / `.fact`** — hairline-separated rows, icon + term + line. `.fact`
  renders a *pending* variant when a fact is not settled: ochre icon greys to
  `chalk-3`, and the value is set in display italic. This is how the site tells
  the truth about what it does not know.
- **`.room`** — an arched plate holding a drawn elevation, not a photograph. The
  interior wash warms to cinnabar and the ink to `gilt-hi` on hover.
- **`.menu` (tabs + plates)** — categories as arch-topped niches over a hairline
  rule; the selected one fills with cinnabar and draws an ochre line under
  itself. Items are `name — leader — price` with the Georgian underneath.
  Prices are **ochre and tabular-nums**, never gilt: a price is not alight.
  The panel is a real `tablist` (arrow keys, Home/End, roving tabindex) and
  re-keys on change so it fades up rather than swapping.
- **`.ladder` / `.stage`** — the build-out. The gilt fill stops exactly at the
  current stage; the `now` dot pulses.
- **Browser surfaces are themed**: selection (cinnabar), scrollbar (chalk on
  plaster-deep, gilt on hover), caret (gilt), focus ring (2px gilt, 4px offset).

## Do's and Don'ts

**Do**

- Give every new photograph the arch, and let it fire like the others.
- Take hierarchy from size and pigment. Marcellus has one weight; that is the point.
- Tint every secondary text from the ground's hue.
- Write pending states as sentences. "There is no phone in an empty room yet."
- Draw what does not exist yet. The rooms are line drawings because the rooms
  are a building site, and that is a truer image than any stock interior.

**Don't**

- Don't spend gold on anything that is not alight. This is the one rule that,
  broken, dissolves the whole system.
- Don't put a label above a heading. `.fact__label` sits above a `<p>` value as a
  term/definition pair; `.room__meta` and `.stage__state` sit *after* their
  headings for exactly this reason. Never invert them back.
- Don't hide content in the base stylesheet. The page renders finished; the
  `.motion` class un-finishes it, and only when motion is welcome.
- Don't add a second scroll effect. There is one authored moment — the arch
  firing — and the marquee, the pin and the ladder are its variations.
- Don't reach for a card grid. The page's rhythm is asymmetric splits.
- Don't let a price take gold. Ochre carries every number on the page.
- Don't rely on `scroll-behavior: smooth` for anchors. The rooms section pins,
  and native smooth scrolling crawls through the pin's scroll length — which
  reads as the page getting stuck. `Motion.tsx` owns anchor jumps and gives
  every one of them the same one second.
- Don't use a coloured glow, a zero-blur shadow, or a gradient on text.
