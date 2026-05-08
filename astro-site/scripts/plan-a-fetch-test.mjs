import { chromium } from 'playwright';

const browser = await chromium.launch();
const ctx = await browser.newContext();
const page = await ctx.newPage();
/* Use fetch() inside the page context — should hit the dev server with
   minimal browser-side caching. */
await page.goto('http://localhost:4321/');
const html = await page.evaluate(async () => {
  const r = await fetch('/components/button', { cache: 'no-store' });
  return await r.text();
});
const matches = html.match(/spec-prop-key">[^<]+/g) || [];
console.log('First 10 prop keys:', matches.slice(0, 12));
await browser.close();
