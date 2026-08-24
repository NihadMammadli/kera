/**
 * KERA — every word and fact on the page lives here.
 *
 * Nothing else in this project needs editing for a routine content change.
 *
 * A `null` below is not an oversight: it renders as a designed "not settled
 * yet" line instead of a guess. Fill the value in and the line resolves on its
 * own. Never replace a null with a placeholder like "coming soon" — the page
 * already writes that sentence better than a field can.
 */

export const site = {
  name: 'KERA',
  /* Georgian for hearth: the fire a house is built around. Note the first
     letter — კერა (k'era, hearth), not ქერა, which means "blonde". */
  nameGeorgian: 'კერა',
  tagline: 'where fire becomes tradition',
  cuisine: 'Georgian kitchen',
  city: 'Brussels',

  /* ---------------------------------------------------------------- facts */

  address: {
    street: 'Rue Saint-Quentin 29',
    city: 'Brussels',
    country: 'Belgium',
    maps: 'https://www.google.com/maps/search/?api=1&query=Rue+Saint-Quentin+29%2C+Brussels%2C+Belgium',
  },

  /** Season or date. `{ kind: 'date', value: '2026-11-14' }` starts a countdown. */
  opening: { kind: 'season', value: 'autumn 2026' } as
    | { kind: 'season'; value: string }
    | { kind: 'date'; value: string },

  instagram: 'kera_brussels',

  /** TODO(kera): both pending. Paste them in and the visit block fills itself. */
  phone: null as string | null,
  email: null as string | null,

  /** Not set until the doors are. `[{ days: 'tuesday — sunday', hours: '18:00 — 23:00' }]` */
  hours: null as { days: string; hours: string }[] | null,

  /**
   * TODO(kera): to switch the opening list on, paste a form endpoint here —
   * Formspree (https://formspree.io/f/xxxxxxx), Netlify, Mailchimp, anything
   * that accepts a POST with an `email` field. Until then the form stays up
   * and tells people the honest truth: follow the stories instead.
   */
  newsletterEndpoint: null as string | null,

  /* ------------------------------------------------------------ the page */

  nav: [
    { label: 'the name', href: '#name' },
    { label: 'the kitchen', href: '#kitchen' },
    { label: 'the rooms', href: '#rooms' },
    { label: 'the menu', href: '#menu' },
    { label: 'the work', href: '#work' },
    { label: 'visit', href: '#visit' },
  ],

  hero: {
    line: 'where fire becomes tradition',
    standfirst:
      'A Georgian kitchen is being built on Rue Saint-Quentin. Not finished — being built. You are early, and that is the point.',
  },

  /** The inscription band. Georgian, its reading, and what it means. */
  band: [
    { ka: 'სუფრა', latin: 'supra', gloss: 'the laid table' },
    { ka: 'თამადა', latin: 'tamada', gloss: 'the one who leads the toasts' },
    { ka: 'ცეცხლი', latin: 'tsetskhli', gloss: 'fire' },
    { ka: 'ღვინო', latin: 'ghvino', gloss: 'wine, eight thousand years of it' },
    { ka: 'პური', latin: 'puri', gloss: 'bread' },
    { ka: 'ოჯახი', latin: 'ojakhi', gloss: 'family' },
    { ka: 'გაუმარჯოს', latin: 'gaumarjos', gloss: 'to your victory — the toast' },
    { ka: 'კერა', latin: 'kera', gloss: 'the hearth' },
  ],

  name_section: {
    /* headings are three parts: plain, emphasised, plain */
    title: { a: 'the heart', em: 'of the', b: 'home' },
    lead:
      'In Georgian, kera is the heart of the home — the place where people gather, stories are shared, exceptional food is prepared, and unforgettable memories are made.',
    body: [
      'That is why we chose this name.',
      'A Georgian house is arranged around its fire. It is where the bread is baked, where the pot sits, where guests are put closest in winter, and where the evening ends long after the food has gone cold. Everything else in the house is furniture.',
      'We are building one of those in Brussels.',
    ],
    proverb: {
      ka: 'სტუმარი ღვთისაა',
      latin: 'stumari ghvtisaa',
      gloss: 'a guest is a gift from God',
      note: 'Georgian proverb, still meant literally',
    },
  },

  kitchen: {
    title: { a: 'modern Georgian,', em: 'rooted in', b: 'the Caucasus' },
    lead:
      'KERA is where modern Georgian cuisine meets the rich flavours of the Caucasus. Our menu is inspired by Georgian culinary traditions, reimagined with a contemporary touch, and complemented by a carefully selected collection of Azerbaijani specialities.',
    /* An honest label: the menu is not written, so this is not one. */
    listNote:
      'Six things worth knowing before you sit down — the tradition the kitchen is built on.',
    fire: {
      title: 'from the fire',
      items: [
        {
          ka: 'მწვადი',
          latin: 'mtsvadi',
          icon: 'skewer',
          text: 'Meat on a vine-wood skewer over embers, never over flame. The vine is not a flourish — it is what is left after the pruning.',
        },
        {
          ka: 'ხაჭაპური',
          latin: 'khachapuri',
          icon: 'bread',
          text: 'Cheese bread, slapped onto the wall of a clay oven. In Adjara it arrives as a boat, with an egg still moving in it.',
        },
        {
          ka: 'ხინკალი',
          latin: 'khinkali',
          icon: 'dumpling',
          text: 'Soup dumplings pleated by hand. You hold the knot, you do not eat it, and you count them on the table when you are finished.',
        },
      ],
    },
    table: {
      title: 'from the table',
      items: [
        {
          ka: 'ფხალი',
          latin: 'pkhali',
          icon: 'walnut',
          text: 'Herbs, greens and walnut, pounded and set in the palm. Spinach, beet, nettle — whatever the season is actually doing.',
        },
        {
          ka: 'ქვევრი',
          latin: 'qvevri',
          icon: 'qvevri',
          text: 'Wine fermented in a clay egg buried to the neck in the floor. Georgia has done this for eight thousand years; UNESCO wrote it down in 2013.',
        },
        {
          ka: 'ჩურჩხელა',
          latin: 'churchkhela',
          icon: 'churchkhela',
          text: 'Walnuts threaded on string, dipped in grape must until they set. It hangs to dry like a candle and keeps all winter.',
        },
      ],
    },
  },

  /**
   * TODO(kera): PLACEHOLDER MENU.
   *
   * Every dish and every price below is invented — a working draft so the
   * layout can be seen and priced against. The page says so above the tabs, in
   * `menu.note`. Replace the categories wholesale when the kitchen has written
   * the real one, and delete `menu.draft` at the same time so the disclaimer
   * disappears with the placeholder. Leaving `draft: true` on a real menu is
   * the only way this section can lie.
   */
  menu: {
    title: { a: 'a first look at', em: 'the table', b: '' },
    lead:
      'Georgian food is ordered for the table, not for the person. Everything below arrives at once, and everything below is meant to be reached across.',
    draft: true,
    note:
      'A working draft. These dishes and prices are placeholders while the kitchen writes the real menu — the shape is right, the list is not final.',
    currency: '€',
    categories: [
      {
        name: 'starters',
        ka: 'საწყისი',
        items: [
          { name: 'pkhali, three ways', ka: 'ფხალი', price: 14, text: 'Spinach, beetroot and nettle, each pounded with walnut and pomegranate.' },
          { name: 'badrijani nigvzit', ka: 'ბადრიჯანი ნიგვზით', price: 13, text: 'Fried aubergine rolled around walnut and garlic, served cold.' },
          { name: 'lobio in a clay pot', ka: 'ლობიო', price: 12, text: 'Red beans stewed with coriander and blue fenugreek, with pickles.' },
          { name: 'sulguni, seared', ka: 'სულგუნი', price: 14, text: 'Smoked mountain cheese, hot from the pan, with honey and thyme.' },
          { name: 'ajapsandali', ka: 'აჯაფსანდალი', price: 11, text: 'Aubergine, pepper and tomato, cooked down slowly. Vegan.' },
        ],
      },
      {
        name: 'salads',
        ka: 'სალათი',
        items: [
          { name: 'tomato and cucumber, walnut', ka: 'სალათი ნიგვზით', price: 11, text: 'The one that is on every table in Georgia, all summer.' },
          { name: 'beetroot and pomegranate', ka: 'ჭარხლის სალათი', price: 12, text: 'With sour cream, dill and toasted walnut.' },
          { name: 'kuchmachi salad', ka: 'კუჩმაჩი', price: 15, text: 'Warm chicken hearts and livers, onion, pomegranate, barberry.' },
          { name: 'shepherd\'s greens', ka: 'მწვანილი', price: 9, text: 'Tarragon, coriander, spring onion and radish. Eaten by the handful.' },
        ],
      },
      {
        name: 'from the clay oven',
        ka: 'თონე',
        items: [
          { name: 'khachapuri adjaruli', ka: 'აჭარული ხაჭაპური', price: 17, text: 'The boat, with an egg and butter still moving in it. For two, or not.' },
          { name: 'khachapuri imeruli', ka: 'იმერული ხაჭაპური', price: 15, text: 'The round one. Cheese inside, nothing on top.' },
          { name: 'lobiani', ka: 'ლობიანი', price: 14, text: 'Bread baked around spiced beans. Vegan.' },
          { name: 'shoti', ka: 'შოთის პური', price: 5, text: 'A long blade of bread, slapped onto the oven wall. Order two.' },
        ],
      },
      {
        name: 'main dishes',
        ka: 'ცხელი',
        items: [
          { name: 'mtsvadi over vine wood', ka: 'მწვადი', price: 26, text: 'Pork neck on a vine skewer, embers only, with onion and tkemali.' },
          { name: 'chicken shkmeruli', ka: 'შქმერული', price: 23, text: 'Roasted and drowned in garlic milk. Bread is not optional.' },
          { name: 'chakhokhbili', ka: 'ჩახოხბილი', price: 22, text: 'Chicken stewed with tomato and a great deal of coriander.' },
          { name: 'khinkali, five', ka: 'ხინკალი', price: 15, text: 'Hand-pleated, beef and pork. Hold the knot; do not eat it.' },
          { name: 'kharcho', ka: 'ხარჩო', price: 20, text: 'Beef, walnut and rice, sour with tkemali plum. A whole meal.' },
          { name: 'lamb chanakhi', ka: 'ჩანახი', price: 27, text: 'Lamb, aubergine and tomato, sealed in a clay pot and baked.' },
          { name: 'plov, Azerbaijani', ka: 'ფლავი', price: 24, text: 'Saffron rice under a pastry crust, with lamb, chestnut and apricot.' },
        ],
      },
      {
        name: 'sweet',
        ka: 'ტკბილი',
        items: [
          { name: 'churchkhela', ka: 'ჩურჩხელა', price: 7, text: 'Walnuts on a string, set in grape must. Cut at the table.' },
          { name: 'pelamushi', ka: 'ფელამუში', price: 8, text: 'Grape must thickened to a set cream, with roasted walnut.' },
          { name: 'gozinaki', ka: 'გოზინაყი', price: 7, text: 'Walnut in honey, cut into diamonds. Traditionally New Year only.' },
          { name: 'honey cake', ka: 'თაფლის ტორტი', price: 9, text: 'Nine thin layers and sour cream. Not Georgian, but always eaten here.' },
        ],
      },
      {
        name: 'wine and the rest',
        ka: 'ღვინო',
        items: [
          { name: 'saperavi, qvevri', ka: 'საფერავი', price: 9, text: 'Deep red, fermented in buried clay. Glass — bottle 42.' },
          { name: 'rkatsiteli, amber', ka: 'რქაწითელი', price: 8, text: 'Skin-contact white, six months on the skins. Glass — bottle 38.' },
          { name: 'chacha', ka: 'ჭაჭა', price: 6, text: 'Grape spirit. One is hospitality, three is a conversation.' },
          { name: 'tarkhuna', ka: 'ტარხუნა', price: 4, text: 'Tarragon soda, alarmingly green, genuinely good.' },
          { name: 'borjomi', ka: 'ბორჯომი', price: 4, text: 'Mineral water from the volcanic springs. An acquired taste.' },
        ],
      },
    ],
  },

  rooms: {
    title: { a: 'five rooms,', em: 'none of them', b: 'finished' },
    lead:
      'Our space will feature two elegant dining halls, a private room, a beautiful terrace, and a welcoming veranda — designed to make every guest feel at home.',
    note:
      'There is no photograph of any of this yet, because it is still a building site. So these are drawings.',
    items: [
      {
        name: 'the first hall',
        meta: 'dining',
        text: 'The long room. Tables that push together when a party arrives and does not shrink to fit the booking.',
      },
      {
        name: 'the second hall',
        meta: 'dining',
        text: 'Quieter, lower, further from the door. For the dinners that are meant to last four hours.',
      },
      {
        name: 'the private room',
        meta: 'by arrangement',
        text: 'A door that closes. For the birthdays, the deals, and the toasts that need no audience.',
      },
      {
        name: 'the terrace',
        meta: 'outside',
        text: 'Open sky, Brussels weather, and the stubborn Georgian belief that a table outside is still a table.',
      },
      {
        name: 'the veranda',
        meta: 'in between',
        text: 'Glazed and warm when the terrace is not. The room you end up in without meaning to.',
      },
    ],
  },

  work: {
    title: { a: 'right now,', em: 'the most exciting', b: 'part' },
    lead:
      'We are painting, building, decorating, and perfecting every detail with passion and care — to create a place where tradition, flavour and modern hospitality come together.',
    stages: [
      {
        state: 'done',
        label: 'done',
        name: 'the room, found',
        text: 'Rue Saint-Quentin. Keys in hand, floors bare, everything still to do.',
      },
      {
        state: 'now',
        label: 'we are here',
        name: 'building, painting, decorating',
        text: 'Where we are today. Walls, wiring, plaster, paint, and a hundred decisions a week about things nobody will ever notice — which is exactly why they matter.',
      },
      {
        state: 'next',
        label: 'next',
        name: 'the first fire',
        text: 'The kitchen goes in and gets lit. The first bread comes out. Nobody is invited; everybody hears about it.',
      },
      {
        state: 'next',
        label: 'and then',
        name: 'the doors open',
        text: 'Autumn 2026.',
      },
    ],
    close:
      'Every day we share our progress, the behind-the-scenes, and the story of how KERA is coming to life. Follow along and be part of our beginning.',
  },

  visit: {
    title: { a: 'the door on', em: 'rue saint-quentin', b: '' },
    close: 'Welcome home. Welcome to KERA.',
    /* Shown where a fact is not settled yet. Written, not templated. */
    pending: {
      hours: 'Set when the doors are.',
      phone: 'There is no phone in an empty room yet.',
      email: 'Coming with the kitchen.',
    },
    follow: 'follow the build',
    listTitle: 'or be told once, when we open',
    listNote: 'One message. The day we open. Nothing else, ever.',
  },

  footer: {
    credit: 'Built in Brussels, out of Georgia',
  },
} as const;

export type Site = typeof site;
