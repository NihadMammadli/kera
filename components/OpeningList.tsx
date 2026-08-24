'use client';

import { useState } from 'react';
import { site } from '@/content/site';
import { ArrowRight, Check } from './Icons';

type State = 'idle' | 'sending' | 'done' | 'no-endpoint' | 'error';

export function OpeningList() {
  const [state, setState] = useState<State>('idle');
  const [email, setEmail] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const endpoint = site.newsletterEndpoint;

    /* No list exists yet, so the form says so rather than pretending to work. */
    if (!endpoint) {
      setState('no-endpoint');
      return;
    }

    setState('sending');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      });
      setState(res.ok ? 'done' : 'error');
    } catch {
      setState('error');
    }
  }

  return (
    <div className="list" data-reveal>
      <h3 className="list__title">{site.visit.listTitle}</h3>

      <form className="list__form" onSubmit={onSubmit}>
        <label htmlFor="kera-email" className="skip">
          Your email address
        </label>
        <input
          id="kera-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state !== 'idle') setState('idle');
          }}
        />
        <button className="gilt" type="submit" disabled={state === 'sending'}>
          {state === 'sending' ? 'sending' : 'tell me'}
          <ArrowRight />
        </button>
      </form>

      {state === 'idle' && <p className="list__note">{site.visit.listNote}</p>}

      {state === 'no-endpoint' && (
        <p className="list__note">
          The list is not switched on yet — we are still building the room, let alone the
          mailing list. Follow{' '}
          <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noreferrer noopener">
            @{site.instagram}
          </a>{' '}
          and you will know the same day we do.
        </p>
      )}

      {state === 'done' && (
        <p className="list__reply">
          <Check />
          You are on the list. One message, the day we open.
        </p>
      )}

      {state === 'error' && (
        <p className="list__note">
          That did not send — the fault is ours, not yours. Try again, or find us at{' '}
          <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noreferrer noopener">
            @{site.instagram}
          </a>
          .
        </p>
      )}
    </div>
  );
}
