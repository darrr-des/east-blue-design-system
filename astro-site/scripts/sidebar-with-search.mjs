import { chromium } from 'playwright';

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
const page = await ctx.newPage();

await page.goto('http://localhost:4321/components/button', { waitUntil: 'networkidle' });
await page.waitForTimeout(400);
await page.screenshot({ path: '/tmp/sb-final.png', clip: { x: 0, y: 0, width: 280, height: 800 } });

/* Click search to open modal. */
await page.click('.sb-search');
await page.waitForTimeout(400);
await page.screenshot({ path: '/tmp/sb-search-open.png', fullPage: false });

await browser.close();
console.log('Wrote /tmp/sb-final.png and /tmp/sb-search-open.png');
