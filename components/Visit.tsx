import { site } from '@/content/site';
import { Arch } from './Arch';
import { OpeningList } from './OpeningList';
import { Clock, Envelope, Instagram, Phone, Pin } from './Icons';
import { Title } from './Title';

type Fact = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  value: React.ReactNode;
  pending?: boolean;
};

export function Visit() {
  const v = site.visit;

  const facts: Fact[] = [
    {
      label: 'address',
      icon: Pin,
      value: (
        <a href={site.address.maps} target="_blank" rel="noreferrer noopener">
          {site.address.street}
          <br />
          {site.address.city}, {site.address.country}
        </a>
      ),
    },
    {
      label: 'hours',
      icon: Clock,
      value: site.hours
        ? site.hours.map((h) => (
            <span key={h.days}>
              {h.days} · {h.hours}
              <br />
            </span>
          ))
        : v.pending.hours,
      pending: !site.hours,
    },
    {
      label: 'phone',
      icon: Phone,
      value: site.phone ? (
        <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
      ) : (
        v.pending.phone
      ),
      pending: !site.phone,
    },
    {
      label: 'email',
      icon: Envelope,
      value: site.email ? <a href={`mailto:${site.email}`}>{site.email}</a> : v.pending.email,
      pending: !site.email,
    },
  ];

  return (
    <section className="section visit" id="visit">
      <div className="shell">
        <Title parts={v.title} className="title visit__title" />

        <div className="visit__grid">
          <div className="facts">
            {facts.map(({ label, icon: Icon, value, pending }) => (
              <div className="fact" key={label} data-pending={pending ? 'true' : undefined} data-reveal>
                <Icon className="fact__icon" />
                <div>
                  <p className="fact__label">{label}</p>
                  <p className="fact__value">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="visit__act">
            <div className="actions" data-reveal>
              <a
                className="gilt"
                href={`https://instagram.com/${site.instagram}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Instagram />
                {v.follow}
              </a>
              <a className="ghost" href={site.address.maps} target="_blank" rel="noreferrer noopener">
                <Pin />
                open in maps
              </a>
            </div>

            <OpeningList />
          </div>
        </div>

        <div className="visit__close">
          <div className="visit__closeArch">
            <Arch
              src="table"
              alt="A Georgian table laid at golden hour above a valley, a mountain church on the ridge behind it."
              width={800}
              height={900}
              sizes="(max-width: 860px) 70vw, 26vw"
            />
          </div>
          <p className="visit__statement" data-split="lines">
            Welcome home. <em>Welcome to KERA.</em>
          </p>
          <p className="micro" data-reveal>
            {site.cuisine} · opening {site.opening.value}
          </p>
        </div>
      </div>
    </section>
  );
}
