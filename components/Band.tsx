import { site } from '@/content/site';
import { Vine } from './Icons';

/**
 * The inscription band that runs around the drum of a Georgian church, here
 * running horizontally and never stopping. Duplicated once so the loop has
 * something to scroll into; the copy is hidden from screen readers.
 */
export function Band() {
  const run = [...site.band, ...site.band];
  return (
    <div className="band" aria-label="Georgian words this restaurant is built from">
      <div className="band__track" data-band>
        {run.map((w, i) => (
          <span className="band__item" key={i} aria-hidden={i >= site.band.length}>
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
