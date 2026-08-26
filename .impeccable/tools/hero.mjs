import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome' });
const sizes = [[320,568],[360,640],[375,667],[390,844],[393,852],[412,915],[430,932],[768,1024],[1280,640],[1440,720],[1440,900]];
console.log('  vp        hero    stage   arch(h)  archTop(rel stage)  clipped');
for (const [w,h] of sizes) {
  const ctx = await b.newContext({ viewport:{width:w,height:h}, deviceScaleFactor:1 });
  const p = await ctx.newPage();
  await p.goto('http://localhost:4200/', { waitUntil:'networkidle' });
  await p.evaluate(()=>document.fonts.ready);
  await p.waitForTimeout(1800);
  const r = await p.evaluate(() => {
    const g = s => { const e=document.querySelector(s); if(!e) return null; const b=e.getBoundingClientRect();
      return {t:Math.round(b.top), b:Math.round(b.bottom), h:Math.round(b.height), w:Math.round(b.width)}; };
    const hero=g('.hero'), stage=g('.hero__stage'), arch=g('.hero__arch'), foot=g('.hero__foot'), word=g('.hero__word');
    return { hero, stage, arch, foot, word, svh: window.innerHeight };
  });
  const relTop = r.arch.t - r.stage.t;
  const clipped = r.arch.t < r.hero.t;
  console.log(`${String(w).padStart(4)}x${String(h).padEnd(4)}  ${String(r.hero.h).padStart(4)}   ${String(r.stage.h).padStart(4)}   ${String(r.arch.h).padStart(4)}     ${String(relTop).padStart(5)}            ${clipped ? 'YES  cut '+Math.abs(r.arch.t-r.hero.t)+'px' : 'no'}   foot=${r.foot.h}`);
  await ctx.close();
}
await b.close();
