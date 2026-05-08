import { chromium } from 'playwright';

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
/* Reproduce the bug path: arrive via in-app navigation (Astro view-transition),
   not direct URL hit. Start at /, then click Components in the sidebar. */
await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
await page.waitForTimeout(300);
await page.click('.nav-item[href="/components"], .nav-item-toggleable[href="/components"]');
await page.waitForTimeout(800);
await page.waitForTimeout(500);
await page.screenshot({ path: '/tmp/components-page.png', fullPage: false });

const alpha = await page.evaluate(() => {
  const grid = document.querySelector('.cmp-grid');
  const card = document.querySelector('.cmp-card');
  const cs = grid ? getComputedStyle(grid) : null;
  const toggle = document.querySelector('.cmp-toggle');
  return {
    gridDisplay: cs?.display,
    gridCols: cs?.gridTemplateColumns,
    cardWidth: card?.offsetWidth,
    cardHeight: card?.offsetHeight,
    pillLeft: toggle?.style.getPropertyValue('--pill-left'),
    pillWidth: toggle?.style.getPropertyValue('--pill-width'),
    initFlag: toggle?.dataset?.ebInit,
  };
});
console.log('alpha:', JSON.stringify(alpha));

await page.click('.cmp-toggle-btn[data-mode="categorical"]');
await page.waitForTimeout(800);

const cat = await page.evaluate(() => {
  const root = document.querySelector('.cmp-page');
  const cv = document.querySelector('.cmp-view--cat');
  const grids = document.querySelectorAll('.cmp-view--cat .cmp-grid');
  const card = document.querySelector('.cmp-view--cat .cmp-card');
  return {
    mode: root?.getAttribute('data-mode'),
    catDisplay: cv ? getComputedStyle(cv).display : null,
    gridCount: grids.length,
    firstGridDisplay: grids[0] ? getComputedStyle(grids[0]).display : null,
    firstGridCols: grids[0] ? getComputedStyle(grids[0]).gridTemplateColumns : null,
    cardWidth: card?.offsetWidth,
    cardHeight: card?.offsetHeight,
  };
});
console.log('cat:', JSON.stringify(cat));

await page.screenshot({ path: '/tmp/components-categorical.png' });
await browser.close();
console.log('Done');
