import { chromium } from 'playwright';

const slug = process.argv[2];
if (!slug) { console.error('usage: node capture-preview.mjs <slug>'); process.exit(1); }

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 900 }, deviceScaleFactor: 2 });
await page.goto(`http://localhost:4321/components/${slug}`, { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(900);

// Crop to just the .demo-panel (preview + figma panel) for cleaner comparison
const box = await page.evaluate(() => {
  const el = document.querySelector('.demo-panel') || document.querySelector('.demo-layout');
  if (!el) return null;
  el.scrollIntoView({ block: 'center' });
  const r = el.getBoundingClientRect();
  return { x: Math.max(0, r.x - 12), y: Math.max(0, r.y - 12), w: r.width + 24, h: r.height + 24 };
});
await page.waitForTimeout(300);

const out = `/tmp/eb-audit/${slug}-local.png`;
if (box && box.w > 100 && box.h > 100) {
  await page.screenshot({ path: out, clip: { x: box.x, y: box.y, width: box.w, height: box.h } });
} else {
  await page.screenshot({ path: out, fullPage: false });
}
console.log(`OK ${slug} -> ${out}`);
await browser.close();
