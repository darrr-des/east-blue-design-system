import { chromium } from 'playwright';

const slugs = process.argv.slice(2);
if (!slugs.length) { console.error('usage: node capture-batch.mjs <slug1> <slug2> ...'); process.exit(1); }

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1400, height: 900 }, deviceScaleFactor: 2 });

for (const slug of slugs) {
  const page = await ctx.newPage();
  try {
    await page.goto(`http://localhost:4321/components/${slug}`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(700);
    const box = await page.evaluate(() => {
      const el = document.querySelector('.demo-panel') || document.querySelector('.demo-layout');
      if (!el) return null;
      el.scrollIntoView({ block: 'center' });
      const r = el.getBoundingClientRect();
      return { x: Math.max(0, r.x - 12), y: Math.max(0, r.y - 12), w: r.width + 24, h: r.height + 24 };
    });
    await page.waitForTimeout(200);
    const out = `/tmp/eb-audit/${slug}-local.png`;
    if (box && box.w > 100 && box.h > 100) {
      await page.screenshot({ path: out, clip: { x: box.x, y: box.y, width: box.w, height: box.h } });
    } else {
      await page.screenshot({ path: out });
    }
    console.log(`OK ${slug}`);
  } catch (e) {
    console.error(`FAIL ${slug}:`, e.message);
  }
  await page.close();
}

await browser.close();
