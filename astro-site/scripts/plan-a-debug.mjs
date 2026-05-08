import { chromium } from 'playwright';

const browser = await chromium.launch({ args: ['--disable-cache', '--disk-cache-size=0', '--media-cache-size=0'] });
const ctx = await browser.newContext({ viewport: { width: 1280, height: 1100 } });
const page = await ctx.newPage();
await page.goto('http://localhost:4321/components/button?_t=' + Date.now(), { waitUntil: 'networkidle' });
await page.waitForTimeout(500);

await page.evaluate(() => {
  const tab = [...document.querySelectorAll('.comp-tab, .comp-tab-btn')].find((b) => /style/i.test(b.textContent));
  if (tab) tab.click();
});
await page.waitForTimeout(400);

const dump = await page.evaluate(() => {
  const cards = [...document.querySelectorAll('.spec-card')].map((c) => ({
    id: c.id,
    title: c.querySelector('.sub-heading')?.textContent?.trim(),
  }));
  const propRows = [...document.querySelectorAll('.spec-prop')].slice(0, 10).map((r) => ({
    key: r.querySelector('.spec-prop-key')?.textContent?.trim(),
    valHtml: r.querySelector('.spec-prop-val')?.outerHTML?.slice(0, 200),
  }));
  return {
    cards,
    propRows,
    specCardKeys: Object.keys(window._specCards || {}),
    filled: window._specCards?.filled,
  };
});
console.log(JSON.stringify(dump, null, 2));

await browser.close();
