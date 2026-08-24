import { site } from '@/content/site';
import { Arch } from './Arch';
import { Title } from './Title';

export function NameSection() {
  const s = site.name_section;
  return (
    <section className="section" id="name">
      <div className="shell name">
        <div className="name__arch">
          <Arch
            src="village"
            alt="A Svaneti village of stone defence towers under snow peaks, Georgia."
            width={736}
            height={1318}
            sizes="(max-width: 860px) 60vw, 32vw"
          />
        </div>

        <div className="name__body">
          <Title parts={s.title} />

          <p className="name__lead" data-split="lines">
            {s.lead}
          </p>

          <div className="prose" data-reveal>
            {s.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <figure className="plaque" data-reveal>
            <div className="plaque__word">
              <span className="plaque__ka ka">{s.proverb.ka}</span>
              <span className="plaque__latin">{s.proverb.latin}</span>
            </div>
            <p className="plaque__gloss">{s.proverb.gloss}</p>
            <figcaption className="plaque__note">{s.proverb.note}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
