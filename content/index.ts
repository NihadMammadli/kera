/**
 * The site's content, loaded from content/site.json.
 *
 * Nothing in app/ or components/ should contain a user-visible string. If you
 * are about to type one, it belongs in the JSON — and therefore in the client's
 * workbook, which is the only file they ever edit.
 *
 * The JSON is written by `npm run content:update <workbook.xlsx>` and checked
 * by `npm run content:check`, which also runs before every build.
 */
import data from './site.json';

export type TextPath = keyof typeof data.text;

/** One string from the content file. Missing or empty reads as ''. */
export const t = (path: TextPath): string => (data.text[path] ?? '').trim();

/** True when the client has actually filled a field in. */
export const has = (path: TextPath): boolean => t(path).length > 0;

export type MenuItem = { name: string; ka: string; text: string; price: string };
export type MenuCategory = { name: string; ka: string; items: MenuItem[] };
export type Room = { name: string; meta: string; text: string; image: string; imageAlt: string };
export type Stage = { name: string; status: 'done' | 'now' | 'next'; label: string; text: string };
export type Dish = { side: 'fire' | 'table'; latin: string; ka: string; icon: string; text: string };
export type Word = { ka: string; latin: string; gloss: string };
export type Picture = { file: string; alt: string };

/* Menu rows are flat in the file so the client can add a category by typing
   one. Group them here, keeping the order each category first appeared in. */
function groupMenu(): MenuCategory[] {
  const out: MenuCategory[] = [];
  for (const row of data.menu as MenuItem[] & { category: string; categoryKa: string }[]) {
    const r = row as unknown as MenuItem & { category: string; categoryKa: string };
    if (!r.category?.trim() || !r.name?.trim()) continue;
    let cat = out.find((c) => c.name === r.category.trim());
    if (!cat) {
      cat = { name: r.category.trim(), ka: (r.categoryKa ?? '').trim(), items: [] };
      out.push(cat);
    }
    if (!cat.ka && r.categoryKa?.trim()) cat.ka = r.categoryKa.trim();
    cat.items.push({
      name: r.name.trim(),
      ka: (r.ka ?? '').trim(),
      text: (r.text ?? '').trim(),
      price: String(r.price ?? '').trim(),
    });
  }
  return out;
}

const handle = t('contact.instagram').replace(/^@/, '');

export const content = {
  text: data.text,
  images: data.images as Record<string, Picture>,

  nav: (['name', 'kitchen', 'rooms', 'menu', 'work', 'visit'] as const)
    .map((key) => ({ label: t(`nav.${key}` as TextPath), href: `#${key}` }))
    .filter((n) => n.label),

  words: (data.words as Word[]).filter((w) => w.ka && w.latin),
  rooms: (data.rooms as Room[]).filter((r) => r.name?.trim()),
  progress: (data.progress as Stage[]).filter((s) => s.name?.trim()),

  kitchen: {
    fire: (data.kitchen as Dish[]).filter((d) => d.side === 'fire'),
    table: (data.kitchen as Dish[]).filter((d) => d.side !== 'fire'),
  },

  menu: groupMenu(),
  menuIsDraft: t('menu.isDraft').toLowerCase() === 'yes',
  menuColumns: t('menu.columns') === '1' ? 1 : 2,
  currency: t('menu.currency'),

  instagram: handle,
  instagramUrl: `https://instagram.com/${handle}`,
  mapsUrl: t('address.mapsUrl'),
} as const;

/** Picture slot, or null when the client has not named a file. */
export function picture(key: string): Picture | null {
  const p = content.images[key];
  return p && p.file?.trim() ? { file: p.file.trim(), alt: (p.alt ?? '').trim() } : null;
}
