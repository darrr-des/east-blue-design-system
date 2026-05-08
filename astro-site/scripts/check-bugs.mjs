import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push('PAGE: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push('CONSOLE: ' + m.text()); });

async function devMode(slug, cardId) {
  errors.length = 0;
  await page.goto(`http://localhost:4321/components/${slug}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(300);
  await page.evaluate(() => {
    const tab = [...document.querySelectorAll('.comp-tab, .comp-tab-btn')].find((b) => /style/i.test(b.textContent));
    if (tab) tab.click();
  });
  await page.waitForTimeout(300);
  const result = await page.evaluate((id) => {
    const card = document.getElementById(id) || document.querySelector(`[id="${id}"]`);
    if (!card) return 'NO CARD';
    const toggle = card.querySelector('.spec-mode-toggle');
    if (!toggle) return 'NO TOGGLE';
    toggle.click();
    const desView = card.querySelector('[data-view$="-des"]');
    const devView = card.querySelector('[data-view$="-dev"]');
    return {
      desDisplay: desView ? desView.style.display : 'no-des',
      devDisplay: devView ? devView.style.display : 'no-dev',
      hasCode: !!card.querySelector('[data-code-content]'),
      codeContent: card.querySelector('[data-code-content]')?.textContent?.slice(0, 60),
    };
  }, cardId);
  console.log(`${slug} dev mode (${cardId}):`, JSON.stringify(result));
  if (errors.length) console.log('  errors:', errors.slice(0, 2));
}

await devMode('modal', 'spec-card-default');
await devMode('action-list-counter', 'spec-card-compact-·-default-—-brand-label-+-filled-counter');
await devMode('action-list-description', 'spec-card-default-·-icon-+-label-+-description-+-cta-+-chevron');

// Carousel — find which carousel components
console.log('\n--- carousels ---');
await page.goto('http://localhost:4321/components/carousel-card', { waitUntil: 'networkidle' });
await page.waitForTimeout(300);
const carouselExists = await page.evaluate(() => document.title);
console.log('carousel-card title:', carouselExists);

await browser.close();
