import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage();
async function check(slug) {
  await page.goto(`http://localhost:4321/components/${slug}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(300);
  await page.evaluate(() => {
    const tab = [...document.querySelectorAll('.comp-tab, .comp-tab-btn')].find((b) => /style/i.test(b.textContent));
    if (tab) tab.click();
  });
  await page.waitForTimeout(300);
  const panels = await page.evaluate(() => {
    return [...document.querySelectorAll('[id^="spec-card-"]')].map((card) => {
      const title = card.querySelector('.spec-card-title')?.textContent || card.id;
      const hasPanel = !!card.querySelector('.demo-figma-panel');
      const hasPreview = !!card.querySelector('.spec-card-preview, .spec-preview-body');
      return `${title.trim().slice(0, 40)}: panel=${hasPanel} preview=${hasPreview}`;
    });
  });
  console.log(`--- ${slug} ---`);
  panels.forEach((p) => console.log(' ', p));
}
await check('carousel-card');
await check('carousel-item');
await browser.close();
