import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome' });
const p = await (await b.newContext({ viewport:{width:1440,height:900}, deviceScaleFactor:2 })).newPage();
const errs=[]; p.on('pageerror',e=>errs.push(String(e).slice(0,140)));
await p.goto('http://localhost:4200/', { waitUntil:'networkidle' });
await p.evaluate(()=>document.fonts.ready);
await p.waitForTimeout(2200);
const r = await p.evaluate(() => ({
  tabs: [...document.querySelectorAll('[role="tab"] .tab__name')].map(e=>e.textContent),
  draftNote: !!document.querySelector('#menu .note'),
  facts: [...document.querySelectorAll('.fact')].map(f => ({
    label: f.querySelector('.fact__label').textContent,
    value: f.querySelector('.fact__value').innerText.replace(/\n/g,' / '),
    pending: f.dataset.pending === 'true',
  })),
  nowStage: document.querySelector('.stage[data-state="now"] .stage__name')?.textContent,
  navLinks: [...document.querySelectorAll('.nav__link')].map(a=>a.textContent),
}));
console.log(JSON.stringify(r, null, 1));
await p.evaluate(()=>document.getElementById('menu').scrollIntoView());
await p.waitForTimeout(1500);
await p.click('[role="tab"]:last-of-type');
await p.waitForTimeout(800);
await p.evaluate(()=>document.getElementById('menu').scrollIntoView());
await p.waitForTimeout(400);
await p.screenshot({ path:'.impeccable/review/content-menu.png' });
console.log('errors:', errs.length?errs:'none');
await b.close();
