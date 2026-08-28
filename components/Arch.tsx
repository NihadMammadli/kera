import { asset } from '@/lib/paths';
import type { Picture } from '@/content';

/**
 * Every photograph on this page is cut into the same arch, and every arch
 * fires when it is reached: the gilt outline draws itself and the image rises
 * into the opening. Fired is the CSS default — motion.ts un-fires it first,
 * so no-JS and reduced-motion visitors get the finished wall.
 *
 * The file name comes from the client's workbook, so a .webp sibling is used
 * when one exists and quietly skipped when it does not.
 */
type Props = {
  picture: Picture;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function Arch({ picture, className, priority, sizes }: Props) {
  const webp = picture.file.replace(/\.(jpe?g|png)$/i, '.webp');

  return (
    <figure className={`arch${className ? ` ${className}` : ''}`} data-arch>
      <div className="arch__frame">
        <div className="arch__veil" data-arch-veil>
          <picture>
            {webp !== picture.file && <source srcSet={asset(`/img/${webp}`)} type="image/webp" />}
            <img
              className="arch__img"
              data-arch-img
              src={asset(`/img/${picture.file}`)}
              alt={picture.alt}
              loading={priority ? 'eager' : 'lazy'}
              decoding={priority ? 'sync' : 'async'}
              fetchPriority={priority ? 'high' : 'auto'}
              sizes={sizes}
            />
          </picture>
        </div>
      </div>
      <svg className="arch__rule" viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden focusable="false">
        <path
          data-arch-rule
          pathLength={1}
          d="M0,1 L0,0.42 C0,0.17 0.19,0 0.5,0 C0.81,0 1,0.17 1,0.42 L1,1"
        />
      </svg>
    </figure>
  );
}
