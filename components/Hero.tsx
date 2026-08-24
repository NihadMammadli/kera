import { site } from '@/content/site';
import { Arch } from './Arch';
import { ArrowDown } from './Icons';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__stage">
        <div className="motes" data-motes aria-hidden />

        <div className="hero__arch">
          <Arch
            src="ridge"
            alt="A stone church on a green ridge below the snow line of the Caucasus, Georgia."
            width={1000}
            height={1482}
            sizes="(max-width: 720px) 60vw, 34vw"
            priority
          />
        </div>

        <p className="hero__inscription" aria-hidden>
          <span className="ka">{site.nameGeorgian}</span>
          <span>the hearth</span>
        </p>

        <div>
          <h1 className="hero__word" data-hero-word>
            {'KERA'.split('').map((c, i) => (
              <span className="glyph" key={i}>
                {c}
              </span>
            ))}
          </h1>
          <p className="hero__line" data-hero-line>
            {site.hero.line}
          </p>
        </div>
      </div>

      <div className="hero__foot" data-hero-foot>
        <p className="micro">
          {site.cuisine}
          <br />
          {site.address.street}, {site.address.city}
        </p>

        <a className="hero__cue" href="#name">
          <ArrowDown />
          scroll
        </a>

        <p className="micro">
          opening
          <br />
          {site.opening.value}
        </p>
      </div>
    </section>
  );
}
