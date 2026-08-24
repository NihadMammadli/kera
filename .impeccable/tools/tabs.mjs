import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome' });
const p = await (await b.newContext({ viewport:{width:1440,height:900}, deviceScaleFactor:2 })).newPage();
const errs=[]; p.on('pageerror',e=>errs.push(String(e).slice(0,160)));
await p.goto('http://localhost:4200/', { waitUntil:'networkidle' });
await p.evaluate(()=>document.fonts.ready);
await p.waitForTimeout(2000);
await p.evaluate(()=>document.getElementById('menu').scrollIntoView());
await p.waitForTimeout(1600);
// click the 4th tab, then drive the rest by keyboard
await p.click('[role="tab"]:nth-of-type(4)');
await p.waitForTimeout(900);
const state = await p.evaluate(() => {
  const sel = document.querySelector('[role="tab"][aria-selected="true"]');
  const panel = document.querySelector('[role="tabpanel"]');
  return { selected: sel?.textContent, items: panel?.children.length,
           labelledOk: panel?.getAttribute('aria-labelledby') === sel?.id };
});
console.log('after click:', JSON.stringify(state));
await p.keyboard.press('ArrowRight');
await p.waitForTimeout(700);
console.log('after ArrowRight:', await p.evaluate(()=>document.querySelector('[role="tab"][aria-selected="true"]').textContent));
await p.evaluate(()=>document.getElementById('menu').scrollIntoView());
await p.waitForTimeout(500);
await p.screenshot({ path: '.impeccable/review/d-menu-tab.png' });
console.log('errors:', errs.length?errs:'none');
await b.close();
