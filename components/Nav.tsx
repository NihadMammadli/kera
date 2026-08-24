'use client';

import { useEffect, useState } from 'react';
import { site } from '@/content/site';
import { Instagram } from './Icons';

export function Nav() {
  const [lifted, setLifted] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* the nav says where you are, which is the whole point of an anchored page */
  useEffect(() => {
    const targets = site.nav
      .map((n) => document.querySelector(n.href))
      .filter((el): el is Element => Boolean(el));
    if (!targets.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className="nav" data-lifted={lifted}>
        <a className="nav__mark" href="#top" aria-label="KERA, back to top">
          KERA
        </a>

        <nav aria-label="Sections">
          <ul className="nav__links">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  className="nav__link"
                  href={item.href}
                  aria-current={active === item.href ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className="gilt"
          href={`https://instagram.com/${site.instagram}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Instagram />
          follow the build
        </a>

        <button
          className="nav__burger"
          type="button"
          aria-expanded={open}
          aria-controls="kera-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className="sheet" id="kera-menu" data-open={open} inert={!open ? true : undefined}>
        {site.nav.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a
          href={`https://instagram.com/${site.instagram}`}
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => setOpen(false)}
        >
          @{site.instagram}
        </a>
      </div>
    </>
  );
}
