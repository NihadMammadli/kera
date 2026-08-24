import { site } from '@/content/site';
import { Arch } from './Arch';
import { dishIcons } from './Icons';
import { Title } from './Title';

type Strand = {
  readonly title: string;
  readonly items: readonly { readonly ka: string; readonly latin: string; readonly icon: string; readonly text: string }[];
};

function Strand({ strand }: { strand: Strand }) {
  return (
    <div className="strand">
      <h3 className="strand__title" data-reveal>
        {strand.title}
      </h3>
      {strand.items.map((d) => {
        const Icon = dishIcons[d.icon as keyof typeof dishIcons];
        return (
          <article className="dish" key={d.latin} data-reveal>
            <Icon className="dish__icon" />
            <div>
              <h4 className="dish__name">
                <span className="dish__ka ka">{d.ka}</span>
                <span className="dish__latin">{d.latin}</span>
              </h4>
              <p className="dish__text">{d.text}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function Kitchen() {
  const k = site.kitchen;
  return (
    <section className="section" id="kitchen">
      <div className="shell">
        <div className="kitchen__head">
          <Title parts={k.title} />
          <div>
            <p className="lead" data-split="lines" style={{ maxWidth: '34ch', marginBottom: '1.5rem' }}>
              {k.lead}
            </p>
            <p className="note" data-reveal>
              {k.listNote}
            </p>
          </div>
        </div>

        <div className="kitchen__grid">
          <Strand strand={k.fire} />

          <div className="kitchen__arch">
            <Arch
              src="bread"
              alt="A Georgian supra: khachapuri, walnut pastes, cheese, grapes and wine crowded edge to edge on a wooden table."
              width={760}
              height={950}
              sizes="(max-width: 1040px) 60vw, 24vw"
            />
          </div>

          <Strand strand={k.table} />
        </div>
      </div>
    </section>
  );
}
