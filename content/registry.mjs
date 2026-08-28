/**
 * The content registry — the one place that knows what the client's workbook
 * contains. `content:export` builds the spreadsheet from it, `content:import`
 * reads the spreadsheet back through it, and `content:check` validates
 * content/site.json against it. Add a field here and all three follow.
 *
 * `help` is what the client actually reads while editing, so write it for a
 * restaurant owner, not for a developer.
 */

/** Rows of the "Text" sheet, in the order they appear. */
export const TEXT = [
  { group: 'The restaurant' },
  { path: 'brand.name', label: 'Restaurant name', help: 'The big word at the top of the page, in the menu bar, and in the footer.' },
  { path: 'brand.nameGeorgian', label: 'Name in Georgian', help: 'Shown small on the left of the first screen and in the footer. Leave empty to hide it.', required: false },
  { path: 'brand.tagline', label: 'Tagline', help: 'The italic line directly under the big name.' },
  { path: 'brand.cuisine', label: 'Kind of kitchen', help: 'Shown at the bottom of the first screen, e.g. "Georgian kitchen".' },

  { group: 'How people find you' },
  { path: 'address.street', label: 'Street and number', help: 'e.g. Rue Saint-Quentin 29' },
  { path: 'address.city', label: 'City' },
  { path: 'address.country', label: 'Country' },
  { path: 'address.mapsUrl', label: 'Google Maps link', help: 'Open your restaurant in Google Maps, press Share, and paste the link here.' },
  { path: 'opening.value', label: 'Opening date or season', help: 'e.g. "autumn 2026" or "14 November 2026". Shown on the first screen and at the bottom.' },
  { path: 'contact.instagram', label: 'Instagram username', help: 'Without the @. This is where every "follow" button on the site points.' },
  { path: 'contact.phone', label: 'Phone number', required: false, help: 'LEAVE EMPTY until the line actually works. The site then writes "There is no phone in an empty room yet." on its own.' },
  { path: 'contact.email', label: 'Email address', required: false, help: 'LEAVE EMPTY until the address works. The site writes its own polite line instead.' },
  { path: 'contact.hours', label: 'Opening hours', required: false, multiline: true, help: 'LEAVE EMPTY until they are decided. One line per day or group of days — press Alt+Enter inside the cell for a new line.' },
  { path: 'contact.newsletterUrl', label: 'Sign-up form web address', required: false, help: 'For the "tell me when you open" form. Leave empty and the form explains itself and sends people to Instagram instead. Ask your developer before filling this in.' },

  { group: 'The menu bar at the top' },
  { path: 'nav.name', label: 'Link 1' },
  { path: 'nav.kitchen', label: 'Link 2' },
  { path: 'nav.rooms', label: 'Link 3' },
  { path: 'nav.menu', label: 'Link 4' },
  { path: 'nav.work', label: 'Link 5' },
  { path: 'nav.visit', label: 'Link 6' },

  { group: 'The first screen' },
  { path: 'hero.inscription', label: 'Small word beside the name', help: 'Runs sideways down the left edge, next to the Georgian name.' },
  { path: 'hero.openingLabel', label: 'Word above the opening date', help: 'Bottom right of the first screen. e.g. "opening".' },
  { path: 'hero.scrollLabel', label: 'Word under the down arrow', help: 'e.g. "scroll".' },

  { group: 'Section: the heart of the home' },
  { path: 'story.title', label: 'Heading', emphasis: true },
  { path: 'story.lead', label: 'Large opening sentence', multiline: true },
  { path: 'story.body', label: 'The paragraphs below it', multiline: true, help: 'Leave a completely blank line between paragraphs. Alt+Enter makes a new line inside the cell.' },
  { path: 'story.proverb.ka', label: 'Proverb in Georgian', required: false },
  { path: 'story.proverb.latin', label: 'How the proverb is pronounced', required: false },
  { path: 'story.proverb.gloss', label: 'What the proverb means' },
  { path: 'story.proverb.note', label: 'Small note under the proverb', required: false },

  { group: 'Section: the kitchen' },
  { path: 'kitchen.title', label: 'Heading', emphasis: true },
  { path: 'kitchen.lead', label: 'Opening paragraph', multiline: true },
  { path: 'kitchen.note', label: 'Small note beside it', required: false, multiline: true },
  { path: 'kitchen.fireTitle', label: 'Heading of the left list', help: 'e.g. "from the fire". The dishes themselves are on the "The kitchen" sheet.' },
  { path: 'kitchen.tableTitle', label: 'Heading of the right list', help: 'e.g. "from the table".' },

  { group: 'Section: the rooms' },
  { path: 'rooms.title', label: 'Heading', emphasis: true },
  { path: 'rooms.lead', label: 'Opening paragraph', multiline: true },
  { path: 'rooms.note', label: 'Small note beside it', required: false, multiline: true, help: 'This is where the site admits the rooms are drawings and not photographs. Change it once you have real photos.' },

  { group: 'Section: the menu' },
  { path: 'menu.title', label: 'Heading', emphasis: true },
  { path: 'menu.lead', label: 'Opening paragraph', multiline: true },
  { path: 'menu.isDraft', label: 'Is the menu still a draft?', type: 'yesno', help: 'YES shows a note saying the dishes and prices are not final. Change to NO only when the menu below is the real one.' },
  { path: 'menu.draftNote', label: 'The "still a draft" note', multiline: true, help: 'Only shown while the answer above is YES.' },
  { path: 'menu.currency', label: 'Currency symbol', help: 'Written in front of every price. e.g. €' },
  { path: 'menu.columns', label: 'Columns of dishes', type: 'choice', options: ['1', '2'], help: 'How many columns the dishes are listed in on a computer screen. Phones always use one.' },

  { group: 'Section: the work' },
  { path: 'work.title', label: 'Heading', emphasis: true },
  { path: 'work.lead', label: 'Opening paragraph', multiline: true },
  { path: 'work.close', label: 'Closing paragraph', multiline: true },
  { path: 'work.ctaLabel', label: 'Text on the button', help: 'e.g. "watch it happen". The button opens your Instagram.' },

  { group: 'Section: visit' },
  { path: 'visit.title', label: 'Heading', emphasis: true },
  { path: 'visit.statement', label: 'The large closing words', emphasis: true, multiline: true, help: 'Sits across the photo at the very bottom of the page.' },
  { path: 'visit.followLabel', label: 'Text on the gold button' },
  { path: 'visit.mapsLabel', label: 'Text on the maps button' },
  { path: 'visit.label.address', label: 'Word above the address' },
  { path: 'visit.label.hours', label: 'Word above the hours' },
  { path: 'visit.label.phone', label: 'Word above the phone number' },
  { path: 'visit.label.email', label: 'Word above the email' },
  { path: 'visit.pending.hours', label: 'Shown when hours are empty', help: 'The sentence the site writes instead of the hours, until you fill them in above.' },
  { path: 'visit.pending.phone', label: 'Shown when the phone is empty' },
  { path: 'visit.pending.email', label: 'Shown when the email is empty' },

  { group: 'The "tell me when you open" form' },
  { path: 'list.title', label: 'Heading above the form' },
  { path: 'list.note', label: 'Small print under the form' },
  { path: 'list.placeholder', label: 'Grey example text in the box' },
  { path: 'list.button', label: 'Text on the button' },
  { path: 'list.buttonBusy', label: 'Text while it is sending' },
  { path: 'list.inputLabel', label: 'Hidden label on the box', help: 'Read aloud to blind visitors. Not shown on screen.' },
  { path: 'list.replyOff', label: 'Reply when no form address is set', multiline: true, help: 'Shown when "Sign-up form web address" above is empty. Write @username to link to Instagram.' },
  { path: 'list.replyDone', label: 'Reply when it worked' },
  { path: 'list.replyError', label: 'Reply when it failed', multiline: true, help: 'Write @username to link to Instagram.' },

  { group: 'The footer' },
  { path: 'footer.credit', label: 'Small line at the very bottom' },
  { path: 'footer.backToTop', label: 'Last link in the footer list' },

  { group: 'Text nobody sees on screen' },
  { path: 'seo.title', label: 'Browser tab title', help: 'Also the blue headline on Google.' },
  { path: 'seo.description', label: 'Description for Google', multiline: true, help: 'The grey sentence under the headline in search results. Aim for 150–160 characters.' },
  { path: 'seo.keywords', label: 'Search words', help: 'Separated by commas.' },
  { path: 'a11y.skip', label: 'Skip link', help: 'The first thing a keyboard user reaches.' },
  { path: 'a11y.navSections', label: 'Name of the menu bar' },
  { path: 'a11y.navHome', label: 'Name of the logo link' },
  { path: 'a11y.menuOpen', label: 'Name of the menu button when closed' },
  { path: 'a11y.menuClose', label: 'Name of the menu button when open' },
  { path: 'a11y.bandLabel', label: 'Name of the scrolling Georgian strip' },
  { path: 'a11y.menuTabs', label: 'Name of the menu category buttons' },
  { path: 'a11y.instagram', label: 'Name of the Instagram button', help: 'Write @ where the username should go.' },
];

/** The sheets that hold repeatable rows. The client adds and removes rows freely. */
export const SHEETS = [
  {
    key: 'menu',
    name: 'Menu',
    intro: 'Every dish on the site. Add a row for a new dish. To add a whole new category — appetizers, lunch, anything — just type its name in the first column and it appears on the site as a new tab. Only "Category" and "Dish" have to be filled in.',
    columns: [
      { key: 'category', header: 'Category', required: true, width: 22, help: 'Type the same name on every row that belongs together. A new name makes a new tab.' },
      { key: 'categoryKa', header: 'Category in Georgian', width: 20, help: 'Optional. Shown small above the category name.' },
      { key: 'name', header: 'Dish', required: true, width: 30 },
      { key: 'ka', header: 'Dish in Georgian', width: 20, help: 'Optional. Leave empty and the line simply is not shown.' },
      { key: 'text', header: 'Description', width: 60, wrap: true, help: 'Optional.' },
      { key: 'price', header: 'Price', width: 12, help: 'Optional. Write it however you like: 14, 14,50, or 9 / 42 for glass and bottle. Do not type the currency symbol.' },
    ],
  },
  {
    key: 'kitchen',
    name: 'The kitchen',
    intro: 'The short list of Georgian traditions in the middle of the page. These are facts about Georgian cooking, not your menu.',
    columns: [
      { key: 'side', header: 'Which list', required: true, width: 14, choices: ['fire', 'table'], help: 'fire = the left list, table = the right list.' },
      { key: 'latin', header: 'Name', required: true, width: 20 },
      { key: 'ka', header: 'Name in Georgian', width: 20 },
      { key: 'icon', header: 'Little drawing', width: 16, choices: ['skewer', 'bread', 'dumpling', 'walnut', 'qvevri', 'churchkhela', 'flame'], help: 'Pick from the list. Leave empty and a flame is used.' },
      { key: 'text', header: 'Description', required: true, width: 70, wrap: true },
    ],
  },
  {
    key: 'rooms',
    name: 'Rooms',
    intro: 'The rooms of the restaurant. Each one is shown as a drawing until you give it a photograph — fill in the last two columns and that room switches to your picture.',
    columns: [
      { key: 'name', header: 'Room', required: true, width: 24 },
      { key: 'meta', header: 'Type', width: 20, help: 'A small word above the name, e.g. dining, outside, by arrangement.' },
      { key: 'text', header: 'Description', required: true, width: 70, wrap: true },
      { key: 'image', header: 'Photo file name', width: 24, image: true, help: 'Optional. Leave empty to keep the drawing.' },
      { key: 'imageAlt', header: 'Photo description', width: 44, wrap: true, help: 'Needed only if you filled in a photo. One short sentence describing what is in the picture.' },
    ],
  },
  {
    key: 'progress',
    name: 'Progress',
    intro: 'The building work, shown as a line of stages. Move the "now" as the work advances — that is the one thing on this site worth updating often.',
    columns: [
      { key: 'name', header: 'Stage', required: true, width: 34 },
      { key: 'status', header: 'Status', required: true, width: 12, choices: ['done', 'now', 'next'], help: 'Exactly one row should be "now". The gold line stops there.' },
      { key: 'label', header: 'Small word above it', required: true, width: 20, help: 'e.g. done, we are here, next.' },
      { key: 'text', header: 'Description', required: true, width: 70, wrap: true },
    ],
  },
  {
    key: 'words',
    name: 'Georgian words',
    intro: 'The red strip of Georgian words that scrolls across the page under the first screen.',
    columns: [
      { key: 'ka', header: 'In Georgian', required: true, width: 20 },
      { key: 'latin', header: 'How it is said', required: true, width: 20 },
      { key: 'gloss', header: 'What it means', required: true, width: 46 },
    ],
  },
];

/** The fixed picture slots. Room photos live on the Rooms sheet instead. */
export const IMAGES = [
  { key: 'hero', where: 'The big photo at the very top', help: 'Standing up (taller than wide), at least 1200px tall.' },
  { key: 'story', where: 'Beside "the heart of the home"', help: 'Standing up.' },
  { key: 'kitchen', where: 'In the middle of the kitchen section', help: 'Standing up. Food works best here.' },
  { key: 'close', where: 'At the very bottom, behind "Welcome home"', help: 'Standing up.' },
  { key: 'og', where: 'The preview when the site is shared', help: 'Lying down, exactly 1200 × 630. Shown in WhatsApp, Instagram and Facebook.' },
];

/* each field carries the group it sits under, so an error can say which
   "Heading" it means */
let currentGroup = '';
for (const row of TEXT) {
  if (row.group) currentGroup = row.group;
  else row.groupName = currentGroup;
}

export const TEXT_FIELDS = TEXT.filter((r) => r.path);
export const byPath = Object.fromEntries(TEXT_FIELDS.map((f) => [f.path, f]));
