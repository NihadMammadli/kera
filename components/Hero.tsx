import { content, t, picture } from '@/content';
import { Arch } from './Arch';
import { ArrowDown } from './Icons';

export function Hero() {
  const hero = picture('hero');

  return (
    <section className="hero" id="top">
      <div className="hero__stage">
        <div className="motes" data-motes aria-hidden />

        {hero && (
          <div className="hero__arch">
            <Arch picture={hero} sizes="(max-width: 720px) 78vw, 34vw" priority />
          </div>
        )}

        <p className="hero__inscription" aria-hidden>
          <span className="ka">{t('brand.nameGeorgian')}</span>
          <span>{t('hero.inscription')}</span>
        </p>

        <div>
          <h1 className="hero__word" data-hero-word>
            {t('brand.name')
              .split('')
              .map((c, i) => (
                <span className="glyph" key={i}>
                  {c === ' ' ? ' ' : c}
                </span>
              ))}
          </h1>
          <p className="hero__line" data-hero-line>
            {t('brand.tagline')}
          </p>
        </div>
      </div>

      <div className="hero__foot" data-hero-foot>
        <p className="micro">
          {t('brand.cuisine')}
          <br />
          {t('address.street')}, {t('address.city')}
        </p>

        <a className="hero__cue" href="#name">
          <ArrowDown />
          {t('hero.scrollLabel')}
        </a>

        <p className="micro">
          {t('hero.openingLabel')}
          <br />
          {t('opening.value')}
        </p>
      </div>
    </section>
  );
}
