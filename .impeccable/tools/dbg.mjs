import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome' });
const p = await (await b.newContext({ viewport:{width:1440,height:900} })).newPage();
p.on('pageerror', e => console.log('PAGEERROR', String(e).slice(0,300)));
p.on('console', m => m.type()==='error' && console.log('CONSOLE', m.text().slice(0,200)));
await p.goto('http://localhost:4123/', { waitUntil:'networkidle' });
await p.waitForTimeout(3500);
console.log(JSON.stringify(await p.evaluate(() => {
  const fig = document.querySelector('.hero__arch [data-arch]');
  const frame = document.querySelector('.hero__arch .arch__frame');
  const veil = document.querySelector('.hero__arch [data-arch-veil]');
  const img = document.querySelector('.hero__arch [data-arch-img]');
  const rule = document.querySelector('.hero__arch [data-arch-rule]');
  const r = e => e ? (({x,y,width,height}) => ({x:Math.round(x),y:Math.round(y),w:Math.round(width),h:Math.round(height)}))(e.getBoundingClientRect()) : null;
  const cs = e => e ? (({clipPath,opacity,transform,visibility,display,zIndex,position}) => ({clipPath,opacity,transform,visibility,display,zIndex,position}))(getComputedStyle(e)) : null;
  return {
    hasDefs: !!document.getElementById('kera-arch'),
    motionClass: document.documentElement.className,
    fig: r(fig), frame: r(frame), veil: r(veil), img: r(img),
    figCS: cs(fig), frameCS: cs(frame), veilCS: cs(veil), imgCS: cs(img),
    imgComplete: img?.complete, imgNatural: img ? [img.naturalWidth, img.naturalHeight] : null,
    imgSrc: img?.currentSrc,
    ruleDash: rule ? getComputedStyle(rule).strokeDashoffset : null,
    stageCS: cs(document.querySelector('.hero__stage')),
  };
}, null), null, 1));
await b.close();
