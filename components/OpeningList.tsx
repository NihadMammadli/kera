'use client';

import { useState } from 'react';
import { content, t } from '@/content';
import { ArrowRight, Check } from './Icons';
import { WithHandle } from './Rich';

type State = 'idle' | 'sending' | 'done' | 'no-endpoint' | 'error';

export function OpeningList() {
  const [state, setState] = useState<State>('idle');
  const [email, setEmail] = useState('');
  const endpoint = t('contact.newsletterUrl');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

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
      <h3 className="list__title">{t('list.title')}</h3>

      <form className="list__form" onSubmit={onSubmit}>
        <label htmlFor="kera-email" className="skip">
          {t('list.inputLabel')}
        </label>
        <input
          id="kera-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={t('list.placeholder')}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state !== 'idle') setState('idle');
          }}
        />
        <button className="gilt" type="submit" disabled={state === 'sending'}>
          {state === 'sending' ? t('list.buttonBusy') : t('list.button')}
          <ArrowRight />
        </button>
      </form>

      {state === 'idle' && <p className="list__note">{t('list.note')}</p>}

      {state === 'no-endpoint' && (
        <p className="list__note">
          <WithHandle text={t('list.replyOff')} />
        </p>
      )}

      {state === 'done' && (
        <p className="list__reply">
          <Check />
          {t('list.replyDone')}
        </p>
      )}

      {state === 'error' && (
        <p className="list__note">
          <WithHandle text={t('list.replyError')} />
        </p>
      )}
    </div>
  );
}
