# KERA — Brussels

Pre-opening single-page site for KERA, a Georgian restaurant being built on
Rue Saint-Quentin in Brussels, opening autumn 2026.

Next.js (App Router) + TypeScript, statically exported. GSAP for motion. No CMS,
no backend, no runtime data.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → out/
npm start        # serve the export on :3000
```

Deploy `out/` anywhere that serves static files.

## Editing content

**Everything a person needs to change lives in `content/site.ts`.** Nothing else
should need touching for a routine update.

### The four pending facts

`phone`, `email`, `hours` and `newsletterEndpoint` are `null`. That is
deliberate, not unfinished: a `null` renders as a written pending line —
*"There is no phone in an empty room yet."* — instead of a guess or a dead link.
Fill the value in and the line resolves on its own.

```ts
phone:  '+32 2 000 00 00',
email:  'hello@kera.brussels',
hours:  [{ days: 'tuesday — sunday', hours: '18:00 — 23:00' }],

// switches the opening-list form on; anything that accepts a POST with `email`
newsletterEndpoint: 'https://formspree.io/f/xxxxxxx',
```

Until `newsletterEndpoint` is set, the form still submits — it just tells the
visitor the list is not live and sends them to Instagram. Nothing is broken and
nothing pretends to work.

### Headings

Section headings are three parts — plain, emphasised, plain — so the italic gold
word is content, not markup buried in a component:

```ts
title: { a: 'five rooms,', em: 'none of them', b: 'finished' },
```

### The menu is a placeholder

`menu.categories` in `content/site.ts` is a **working draft** — invented dishes,
invented prices — built so the layout could be seen. While `menu.draft` is
`true` the section prints the disclaimer above the tabs:

> *A working draft. These dishes and prices are placeholders while the kitchen
> writes the real menu — the shape is right, the list is not final.*

Replace `categories` with the real menu and delete `draft` in the same edit.
Leaving `draft: true` on a real menu hides it behind a false disclaimer;
deleting `draft` while the placeholders are still there is worse.

### The kitchen list

The six entries under `kitchen` are **standard categories of Georgian cooking,
not KERA's menu**, and the page says so on the page. Replace them when a real
menu exists — and change the note above them when you do.

## Images

`public/img/` holds every shipping image. They are derived from the four
reference photographs in `images/` with ffmpeg, and each carries its origin in
its own metadata (`node .claude/skills/impeccable/scripts/embed-prompt.mjs
public/img/ridge.jpg --read`).

**None of them are photographs of KERA.** They show Georgia, and the page never
claims otherwise. The five rooms are drawn rather than photographed for exactly
this reason. When real photographs of the room exist, they belong in the rooms
section first.

`public/img/og.jpg` is the social preview card, rendered by
`.impeccable/tools/og.mjs` against the running site.

## Design

The visual world is recorded in `DESIGN.md`; the durable product record in
`PRODUCT.md`; the page-level strategy in `.impeccable/surfaces/app-page-tsx.md`.
The direction contract ships as an HTML comment at the top of `<body>` and
survives the production build — `grep fddb4283 out/index.html`.

Two rules are load-bearing and easy to break by accident:

1. **The page renders finished in CSS.** A two-line script in `<head>` adds a
   `motion` class only when motion is welcome, and that class is the only thing
   that hides anything; it removes itself after three seconds if the JavaScript
   never arrives. No visitor is ever left looking at an empty wall. Do not invert
   this by hiding things in the base stylesheet.
2. **Anchor jumps belong to `Motion.tsx`, not the browser.** The rooms section
   pins, so native smooth scrolling crawls through the pin's scroll length and
   reads as the page sticking on the rooms. A delegated click handler tweens the
   window over a fixed one second instead, whatever the distance.
3. **Gold is rationed.** `--gilt` means one thing: what is alight — the primary
   action, an arch as it fires, today's stage of the build. Every other accent is
   pigment (`--cinnabar`, `--ochre`, `--malachite`). Gold used decoratively
   costs the page its only emphasis.

## Screenshots

With the export being served, `node .impeccable/tools/shots.mjs` recaptures
`.impeccable/review/` at desktop and mobile — full pages under reduced motion,
and each section with motion settled — and reports overflow and console errors.
`node .impeccable/tools/states.mjs` captures the menu, focus, hover and the
inscription band.
