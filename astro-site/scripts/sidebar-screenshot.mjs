import { chromium } from 'playwright';

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
const page = await ctx.newPage();
await page.goto('http://localhost:4321/components/button', { waitUntil: 'networkidle' });
await page.waitForTimeout(400);
await page.screenshot({ path: '/tmp/sidebar-v3-light.png', clip: { x: 0, y: 0, width: 280, height: 800 } });

/* Dark mode */
await page.evaluate(() => {
  const btn = document.querySelector('[data-action="toggle-theme"]');
  if (btn) btn.click();
});
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/sidebar-v3-dark.png', clip: { x: 0, y: 0, width: 280, height: 800 } });

await browser.close();
console.log('Wrote /tmp/sidebar-v3-light.png and /tmp/sidebar-v3-dark.png');
