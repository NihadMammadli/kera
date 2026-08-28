import { content, t } from '@/content';
import { Vine } from './Icons';

/**
 * The inscription band that runs around the drum of a Georgian church, here
 * running horizontally and never stopping. Duplicated once so the loop has
 * something to scroll into; the copy is hidden from screen readers.
 */
export function Band() {
  const words = content.words;
  if (!words.length) return null;
  const run = [...words, ...words];

  return (
    <div className="band" aria-label={t('a11y.bandLabel')}>
      <div className="band__track" data-band>
        {run.map((w, i) => (
          <span className="band__item" key={i} aria-hidden={i >= words.length}>
            <span className="band__ka">{w.ka}</span>
            <span className="band__latin">{w.latin}</span>
            <span className="band__gloss">{w.gloss}</span>
            <span className="band__sep" aria-hidden>
              <Vine />
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
