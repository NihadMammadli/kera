import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome' });
for (const w of [1600, 1280, 1100, 1024, 960, 901, 900, 768, 430, 360]) {
  const ctx = await b.newContext({ viewport:{width:w,height:900}, deviceScaleFactor:1 });
  const p = await ctx.newPage();
  await p.goto('http://localhost:4200/', { waitUntil:'networkidle' });
  await p.evaluate(()=>document.fonts.ready);
  await p.waitForTimeout(900);
  const r = await p.evaluate(() => {
    const doc = document.documentElement;
    const nav = document.querySelector('.nav');
    const links = document.querySelector('.nav__links');
    const btn = document.querySelector('.nav > .gilt');
    const box = e => e ? e.getBoundingClientRect() : null;
    const nb = box(nav), lb = box(links), bb = box(btn);
    let over = [];
    document.querySelectorAll('.nav *, .menu__tabs, .plate__head').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && (r.right > doc.clientWidth + 2)) over.push(el.className.toString().split(' ')[0] || el.tagName);
    });
    return {
      navOverflow: nb ? Math.round(nb.width) > doc.clientWidth + 1 : null,
      linksVisible: lb ? lb.width > 0 : false,
      gap: lb && bb ? Math.round(bb.left - lb.right) : null,
      pageScroll: doc.scrollWidth > doc.clientWidth + 1,
      over: [...new Set(over)].slice(0,4),
    };
  });
  console.log(`${String(w).padStart(4)}  links=${r.linksVisible?'yes':'burger'}  nav↔button gap=${String(r.gap).padStart(5)}  hscroll=${r.pageScroll}  over=${r.over.join(',')||'-'}`);
  await ctx.close();
}
await b.close();
