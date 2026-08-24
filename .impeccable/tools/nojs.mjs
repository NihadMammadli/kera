import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome' });
const ctx = await b.newContext({ viewport:{width:1440,height:900}, javaScriptEnabled:false });
const p = await ctx.newPage();
await p.goto('http://localhost:4200/', { waitUntil:'load' });
await p.waitForTimeout(1200);
const r = await p.evaluate(() => {
  const vis = (sel) => { const e = document.querySelector(sel); if(!e) return 'MISSING';
    const cs = getComputedStyle(e); const b = e.getBoundingClientRect();
    return `${cs.opacity} ${cs.clipPath} ${Math.round(b.width)}x${Math.round(b.height)}`; };
  return {
    motionClass: document.documentElement.className.includes('motion'),
    wordmark: vis('[data-hero-word] .glyph'),
    heroVeil: vis('.hero__arch [data-arch-veil]'),
    heroImg: vis('.hero__arch [data-arch-img]'),
    kitchenArch: vis('.kitchen__arch [data-arch-veil]'),
    rooms: document.querySelectorAll('.room').length,
    sections: [...document.querySelectorAll('section[id]')].map(s=>s.id).join(','),
  };
});
console.log(JSON.stringify(r, null, 1));
await p.screenshot({ path: '.impeccable/review/nojs.png', fullPage: false });
await b.close();
