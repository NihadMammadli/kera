'use client';

import { useId, useRef, useState } from 'react';
import { site } from '@/content/site';
import { Braid } from './Icons';
import { Title } from './Title';

/**
 * A tabbed menu. Everything in it is a placeholder until `menu.draft` is
 * removed from content/site.ts — and while that flag is set the section says so
 * on the page, above the tabs, where nobody can miss it.
 */
export function Menu() {
  const m = site.menu;
  const [active, setActive] = useState(0);
  const uid = useId().replace(/:/g, '');
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  /* arrow keys move between tabs, as a tablist is expected to */
  function onKeyDown(e: React.KeyboardEvent) {
    const last = m.categories.length - 1;
    let next = active;
    if (e.key === 'ArrowRight') next = active === last ? 0 : active + 1;
    else if (e.key === 'ArrowLeft') next = active === 0 ? last : active - 1;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = last;
    else return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  const category = m.categories[active];

  return (
    <section className="section menu" id="menu">
      <div className="shell">
        <div className="menu__head">
          <Title parts={m.title} />
          <div>
            <p className="lead" data-split="lines">
              {m.lead}
            </p>
            {m.draft && (
              <p className="note" data-reveal>
                {m.note}
              </p>
            )}
          </div>
        </div>

        <div className="menu__tabs" role="tablist" aria-label="Menu categories" onKeyDown={onKeyDown}>
          {m.categories.map((c, i) => (
            <button
              key={c.name}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              className="tab"
              role="tab"
              type="button"
              id={`${uid}-tab-${i}`}
              aria-selected={i === active}
              aria-controls={`${uid}-panel-${i}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
            >
              <span className="tab__ka ka" aria-hidden>
                {c.ka}
              </span>
              <span className="tab__name">{c.name}</span>
            </button>
          ))}
        </div>

        <div
          className="menu__panel"
          role="tabpanel"
          id={`${uid}-panel-${active}`}
          aria-labelledby={`${uid}-tab-${active}`}
          key={active}
        >
          {category.items.map((item) => (
            <article className="plate" key={item.name}>
              <h3 className="plate__head">
                <span className="plate__name">{item.name}</span>
                <span className="plate__rule" aria-hidden />
                <span className="plate__price">
                  {m.currency}
                  {item.price}
                </span>
              </h3>
              <p className="plate__ka ka" aria-hidden>
                {item.ka}
              </p>
              <p className="plate__text">{item.text}</p>
            </article>
          ))}
        </div>

        <Braid className="braid" />
      </div>
    </section>
  );
}
