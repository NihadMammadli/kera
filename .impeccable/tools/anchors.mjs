import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome' });
const p = await (await b.newContext({ viewport:{width:1440,height:900} })).newPage();
const errs = []; p.on('pageerror', e => errs.push(String(e).slice(0,200)));
p.on('console', m => m.type()==='error' && errs.push(m.text().slice(0,160)));
await p.goto('http://localhost:4200/', { waitUntil:'networkidle' });
await p.evaluate(()=>document.fonts.ready);
await p.waitForTimeout(2500);

const tops = await p.evaluate(() => Object.fromEntries(
  [...document.querySelectorAll('section[id]')].map(s => [s.id, Math.round(s.getBoundingClientRect().top + window.scrollY)])));
console.log('section tops:', JSON.stringify(tops));

for (const id of ['work','visit','menu','rooms','top']) {
  await p.evaluate(() => window.scrollTo(0,0));
  await p.waitForTimeout(700);
  const t0 = Date.now();
  await p.click(`.nav__link[href="#${id}"], .nav__mark[href="#${id}"]`);
  // wait until the scroll position stops changing
  let last = -1, stable = 0;
  while (stable < 5 && Date.now() - t0 < 6000) {
    const y = await p.evaluate(() => Math.round(window.scrollY));
    if (y === last) stable++; else { stable = 0; last = y; }
    await p.waitForTimeout(60);
  }
  const info = await p.evaluate((sec) => {
    const el = document.getElementById(sec);
    const r = el.getBoundingClientRect();
    const nav = document.querySelector('.nav').offsetHeight;
    return { finalY: Math.round(window.scrollY), targetTopInView: Math.round(r.top), navH: nav };
  }, id);
  console.log(`#${id.padEnd(6)} settled in ${String(Date.now()-t0).padStart(4)}ms  →  y=${String(info.finalY).padStart(5)}  target top at ${info.targetTopInView}px (nav ${info.navH}px)`);
}
console.log('errors:', errs.length ? errs : 'none');
await b.close();
