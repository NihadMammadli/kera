---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["app/layout.tsx","app/globals.css"]
---

## Scope

`app/page.tsx` — the whole site. One page, anchor navigation, no routes below it.

## Visitor mode

**Persuade.** The visitor arrives from an Instagram story or a friend's link,
on a phone, with about forty seconds of attention. Design is the product here:
there is no table to book, no room to photograph, and the menu on the page is
still a draft.

## Audience and job

Brussels diners who mostly do not know what Georgian food is, deciding whether
this place is worth waiting for; and people already following the build-out,
back to check on it. Both need the same thing: a reason to press follow.

## Action

One: **follow @kera_brussels**. The only gold button on the page, in the nav,
again at the end of the work section, again at the close. The opening-list email
form sits underneath as the quiet second option — the user asked for "both,
Instagram first" and the page reads that way.

## Proof and content

The founder's own copy (`text.md`) is the spine; it is enhanced, never
contradicted. Georgian culinary tradition is taught in passing — six entries
with Georgian script, transliteration, and one honest line each — under a label
saying plainly that this is not the menu.

Four user-supplied reference photographs of Georgia carry all the imagery.
They are not KERA and are never presented as it.

## The menu

Added on request after the first build: a tabbed sample menu between the rooms
and the work. Six categories, invented dishes, invented euro prices, and a
disclaimer above the tabs that says so — driven by `menu.draft` in
`content/site.ts`, which switches off with the placeholders.

It sits after the rooms deliberately: the visitor sees the room before the
list, which is the order the restaurant itself is being built in.

## Constraints that shaped the page

- **No photograph of the restaurant exists.** So the five rooms are *drawn* —
  schematic elevations in the icon hand. This is the section that would have
  been stock photography, and refusing that is the most load-bearing decision
  on the page.
- **Phone, email and hours are unknown.** They render as written pending lines,
  never as guesses or dead links. `null` in `content/site.ts` is the switch.
- **No form backend.** The opening list posts to `newsletterEndpoint`; while
  that is `null` the form tells the truth and redirects to Instagram.
- English only. Static export, no CMS, no backend.

## Direction

**The Fired Arch** — candidate 4 of 7, seed key `fddb4283`. A Georgian church
interior: drenched fresco blue, cinnabar and ochre pigment, gold rationed by
law to what is alight. Full contract in the HTML comment at the top of `<body>`
in `app/layout.tsx`.

## The memorable moment

**An arch fires.** Every photograph is cut into the same Georgian arch; on
scroll the gilt outline rises up the jambs and over the crown while the image
rises into the opening behind it. One motion, six times, varied — not six
different scroll effects.

## A second trap: the hero arch is sized by one box and placed in another

`.hero__arch` is absolutely positioned inside `.hero__stage`, but was sized in
viewport units (`60vh` tall, `13vh` off the bottom). On a phone the hero's
footer stacked into three rows and squeezed the stage to 255px while the arch
still wanted 352px, so `.hero { overflow: hidden }` cut the crown off — worst on
a 320×568 screen, which lost 75px of it.

The height is now `min(viewport-derived, space-the-stage-actually-has)` and the
width follows it through `aspect-ratio`, so a short screen gets a smaller arch
rather than a squashed or a cropped one. `.impeccable/tools/hero.mjs` measures
the arch against its stage across eleven viewports; the number to watch is
`archTop(rel stage)`, which must stay positive.

## A trap worth remembering

The rooms section pins. Native `scroll-behavior: smooth` therefore has to travel
the pin's whole scroll length on any jump past it, which reads as the page
getting stuck on the rooms. `Motion.tsx` intercepts every in-page anchor and
tweens the window over a fixed second instead. Re-enabling native smooth
scrolling brings the bug straight back.

## The content boundary

Nothing user-visible is written in a component. Every string, every dish, every
picture's alt text comes from `content/site.json` by way of `t('path')`, and the
paths are declared once in `content/registry.mjs`, which also generates the
client's workbook and drives the validator.

Three tiers, and the boundary matters more than the mechanism: the client owns
content, the developer owns structure, and the visual world in DESIGN.md is
owned by neither without a design pass. The workbook exposes tier one only —
typed cells, locked labels, no rich text — so the design cannot be edited by
someone editing a menu.

## Unresolved

- Phone, email, hours, the real menu, and the form endpoint — all waiting on the
  restaurant, all switched on from `content/site.ts` alone.
- The photographs are reference images of unknown licence. Before this goes to a
  public domain, KERA needs images it owns — ideally of its own build-out, which
  would also make the page truer than it currently is.
