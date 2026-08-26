import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'chrome' });
for (const [w,h,name] of [[320,568,'se1'],[360,640,'a360'],[375,667,'se3'],[393,852,'ip15']]) {
  const ctx = await b.newContext({ viewport:{width:w,height:h}, deviceScaleFactor:2 });
  const p = await ctx.newPage();
  await p.goto('http://localhost:4200/', { waitUntil:'networkidle' });
  await p.evaluate(()=>document.fonts.ready);
  await p.waitForTimeout(2600);
  await p.screenshot({ path: `.impeccable/review/hero-${name}.png` });
  await ctx.close();
}
await b.close();
console.log('captured');
