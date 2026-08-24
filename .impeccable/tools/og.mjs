import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome' });
const p = await (await b.newContext({ viewport:{width:1200,height:630}, deviceScaleFactor:1 })).newPage();
await p.goto('http://localhost:4200/_og.html', { waitUntil:'networkidle' });
await p.evaluate(()=>document.fonts.ready);
await p.waitForTimeout(900);
await p.screenshot({ path: 'public/img/og.png' });
await b.close();
