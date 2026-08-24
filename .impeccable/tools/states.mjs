import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome' });
const OUT = '.impeccable/review';

// mobile: the menu sheet
let ctx = await b.newContext({ viewport:{width:390,height:844}, deviceScaleFactor:2 });
let p = await ctx.newPage();
await p.goto('http://localhost:4200/', { waitUntil:'networkidle' });
await p.waitForTimeout(1500);
await p.click('.nav__burger');
await p.waitForTimeout(900);
await p.screenshot({ path: `${OUT}/m-menu.png` });
await ctx.close();

// desktop: focus ring + hover + the inscription band up close
ctx = await b.newContext({ viewport:{width:1440,height:900}, deviceScaleFactor:2 });
p = await ctx.newPage();
await p.goto('http://localhost:4200/', { waitUntil:'networkidle' });
await p.evaluate(()=>document.fonts.ready);
await p.waitForTimeout(2500);
await p.keyboard.press('Tab'); await p.keyboard.press('Tab'); await p.keyboard.press('Tab');
await p.waitForTimeout(400);
await p.screenshot({ path: `${OUT}/d-focus.png`, clip: { x:0, y:0, width:1440, height:130 } });

await p.evaluate(() => document.querySelector('.band')?.scrollIntoView({ block:'center' }));
await p.waitForTimeout(1200);
const band = await p.evaluate(() => { const r = document.querySelector('.band').getBoundingClientRect(); return {x:0,y:Math.max(0,Math.round(r.y)-40),width:1440,height:Math.round(r.height)+80}; });
await p.screenshot({ path: `${OUT}/d-band.png`, clip: band });

await p.evaluate(() => document.querySelector('#kitchen')?.scrollIntoView());
await p.waitForTimeout(2200);
await p.hover('.dish');
await p.waitForTimeout(700);
await p.screenshot({ path: `${OUT}/d-hover.png` });
await b.close();
console.log('states captured');
