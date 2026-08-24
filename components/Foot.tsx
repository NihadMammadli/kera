import { site } from '@/content/site';
import { Braid, Instagram } from './Icons';

export function Foot() {
  return (
    <footer className="foot">
      <div className="shell">
        <div className="foot__top">
          <p className="foot__mark">KERA</p>
          <ul className="foot__nav">
            {site.nav.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
            <li>
              <a href="#top">back to the top</a>
            </li>
          </ul>
        </div>

        <Braid className="braid" />

        <div className="foot__base">
          <p style={{ margin: 0 }}>
            {site.footer.credit} · {site.address.street}, {site.address.city} · opening{' '}
            {site.opening.value}
          </p>
          <div className="foot__social">
            <span className="ka" style={{ color: 'var(--chalk-3)' }}>
              {site.nameGeorgian}
            </span>
            <a
              href={`https://instagram.com/${site.instagram}`}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`KERA on Instagram, @${site.instagram}`}
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
