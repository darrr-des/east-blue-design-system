import { chromium } from 'playwright';
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1400, height: 900 }, deviceScaleFactor: 2 });
const cases = [
  ['home-full', 'http://localhost:4321/'],
  ['grid-full', 'http://localhost:4321/components'],
  ['carousel-full', 'http://localhost:4321/components/carousel-card'],
];
for (const [tag, url] of cases) {
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(900);
  await page.screenshot({ path: `/tmp/eb-audit/${tag}.png`, clip: { x: 0, y: 0, width: 1400, height: 800 } });
  console.log('OK', tag);
  await page.close();
}
await browser.close();
