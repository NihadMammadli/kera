/**
 * Every photograph on this page is cut into the same arch, and every arch
 * fires when it is reached: the gilt outline draws itself and the image rises
 * into the opening. Fired is the CSS default — motion.ts un-fires it first,
 * so no-JS and reduced-motion visitors get the finished wall.
 */
import { asset } from '@/lib/paths';

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function Arch({ src, alt, width, height, className, priority, sizes }: Props) {
  return (
    <figure className={`arch${className ? ` ${className}` : ''}`} data-arch>
      <div className="arch__frame">
        <div className="arch__veil" data-arch-veil>
          <picture>
            <source srcSet={asset(`/img/${src}.webp`)} type="image/webp" />
            <img
              className="arch__img"
              data-arch-img
              src={asset(`/img/${src}.jpg`)}
              alt={alt}
              width={width}
              height={height}
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
