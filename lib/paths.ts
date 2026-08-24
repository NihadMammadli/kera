/**
 * GitHub Pages serves a project repo from a sub-path (/kera), so every
 * absolute asset URL on the page needs that prefix. `next/link`, `next/image`
 * and `app/icon.svg` get it from `basePath` automatically; a raw `<img src>`
 * and anything in metadata does not, so those go through `asset()`.
 *
 * Both values are set at build time by .github/workflows/deploy.yml. Locally
 * they are empty, which is exactly right for `next dev`.
 */
const raw = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** '' at a domain root, '/kera' under github.io/kera. Never a trailing slash. */
export const BASE_PATH = raw === '/' ? '' : raw.replace(/\/+$/, '');

/** Absolute origin, used for og:image, canonical and JSON-LD. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kera.brussels').replace(/\/+$/, '');

/** Prefix a public/ path. `asset('/img/og.jpg')` → '/kera/img/og.jpg' */
export function asset(path: string) {
  return `${BASE_PATH}${path.startsWith('/') ? path : `/${path}`}`;
}
