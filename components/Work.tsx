import { site } from '@/content/site';
import { Braid, Instagram } from './Icons';
import { Title } from './Title';

export function Work() {
  const w = site.work;
  const stages = w.stages;
  const nowIndex = stages.findIndex((s) => s.state === 'now');
  /* the gilt line stops exactly where the work has actually got to */
  const fill = `${((nowIndex + 0.5) / stages.length) * 100}%`;

  return (
    <section className="section" id="work">
      <div className="shell">
        <div className="work__head">
          <Title parts={w.title} />
          <p className="lead" data-split="lines" style={{ maxWidth: '38ch' }}>
            {w.lead}
          </p>
        </div>

        <ol className="ladder" data-ladder>
          <div className="ladder__line" aria-hidden>
            <span data-ladder-fill style={{ ['--fill' as string]: fill }} />
          </div>
          {stages.map((s) => (
            <li className="stage" key={s.name} data-state={s.state} data-reveal>
              <span className="stage__dot" aria-hidden />
              <h3 className="stage__name">{s.name}</h3>
              <p className="stage__state">{s.label}</p>
              <p className="stage__text">{s.text}</p>
            </li>
          ))}
        </ol>

        <Braid className="braid" />

        <div className="work__close" data-reveal>
          <p>{w.close}</p>
          <a
            className="gilt"
            href={`https://instagram.com/${site.instagram}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Instagram />
            watch it happen
          </a>
        </div>
      </div>
    </section>
  );
}
