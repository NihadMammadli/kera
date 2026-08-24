import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome' });
const p = await (await b.newContext({ viewport:{width:1440,height:900} })).newPage();
await p.goto('http://localhost:4200/', { waitUntil:'networkidle' });
await p.evaluate(()=>document.fonts.ready);
await p.evaluate(() => document.querySelector('#name')?.scrollIntoView());
await p.waitForTimeout(3000);
console.log(JSON.stringify(await p.evaluate(() => {
  const t = document.querySelector('#name .title');
  const dump = (el, d=0) => {
    if (!el || d>3) return null;
    const cs = getComputedStyle(el);
    return { tag: el.tagName.toLowerCase(), cls: el.className, inline: el.getAttribute('style')?.slice(0,140),
      overflow: cs.overflow, h: Math.round(el.getBoundingClientRect().height),
      kids: [...el.children].slice(0,2).map(k => dump(k, d+1)) };
  };
  const btn = document.querySelector('.ghost');
  return {
    titleTree: dump(t),
    titleHTML: t?.innerHTML.slice(0, 400),
    ghostBox: btn ? (({width,height})=>({w:Math.round(width),h:Math.round(height)}))(btn.getBoundingClientRect()) : null,
  };
}), null, 1));
await b.close();
