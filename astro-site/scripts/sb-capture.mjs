import { chromium } from 'playwright';
const cases = [
  ['home', 'http://localhost:4321/'],
  ['grid', 'http://localhost:4321/components'],
  ['carousel-card', 'http://localhost:4321/components/carousel-card'],
];
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1400, height: 900 }, deviceScaleFactor: 2 });
for (const [tag, url] of cases) {
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(900);
  if (tag === 'carousel-card') {
    await page.evaluate(() => {
      const el = document.querySelector('.panel-item.active') || document.querySelector('.panel-group[open]');
      if (el) el.scrollIntoView({ block: 'center' });
    });
    await page.waitForTimeout(200);
  }
  // Width = 600 to show rail + panel for /components/* states
  const width = tag === 'home' ? 280 : 600;
  await page.screenshot({ path: `/tmp/eb-audit/sidebar-${tag}.png`, clip: { x: 0, y: 0, width, height: 700 } });
  console.log(`OK ${tag}`);
  await page.close();
}
await browser.close();
