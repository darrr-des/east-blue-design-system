import { chromium } from 'playwright';

const browser = await chromium.launch();
const ctx = await browser.newContext();
const page = await ctx.newPage();

async function logState(label) {
  const state = await page.evaluate(() => {
    const lists = document.querySelectorAll('.nav-family-toggle + .nav-section-list');
    const out = [];
    lists.forEach((list) => {
      const btn = list.previousElementSibling;
      const labelTxt = btn?.textContent?.trim() || '(no btn)';
      const cs = getComputedStyle(list);
      out.push({
        label: labelTxt,
        hasOpen: list.classList.contains('open'),
        activeChild: list.querySelector('.nav-comp.active')?.textContent?.trim() || null,
        transitionDuration: cs.transitionDuration,
      });
    });
    let storage = null;
    try { storage = JSON.parse(localStorage.getItem('eb-sidebar-open-sections') || '{}'); } catch {}
    const navHasNoAnim = document.querySelector('.sidebar-nav')?.classList.contains('nav-no-anim');
    return { lists: out, url: window.location.pathname, storage, navHasNoAnim };
  });
  console.log(`\n[${label}]  url=${state.url}`);
  console.log(`  storage = ${JSON.stringify(state.storage)}`);
  state.lists.filter((l) => l.hasOpen || l.activeChild).forEach((l) => {
    console.log(`  ${l.hasOpen ? 'OPEN ' : 'shut '} ${l.label.padEnd(35)} active-child: ${l.activeChild || '-'}`);
  });
}

console.log('Step 1: open action-list-counter (in Action List family)…');
await page.goto('http://localhost:4321/components/action-list-counter', { waitUntil: 'networkidle' });
await page.waitForTimeout(400);
await logState('action-list-counter');

console.log('\nStep 2: click ad-space (top-level, NO family). Action List should stay OPEN …');
await page.locator('.nav-comp[href="/components/ad-space"]').first().click();
await page.waitForTimeout(800);
await logState('ad-space');

console.log('\nStep 3: click avatar-group (in Avatar family). Both should be OPEN …');
/* Use page.goto for cross-section nav since intermediate animations can
   cause click interception. */
await page.goto('http://localhost:4321/components/avatar-group', { waitUntil: 'networkidle' });
await page.waitForTimeout(400);
await logState('avatar-group');

console.log('\nStep 4: click button (different family). Three should be OPEN …');
await page.locator('.nav-comp[href="/components/button"]').first().click();
await page.waitForTimeout(800);
await logState('button');

console.log('\nStep 5: manually CLOSE Action List, then click chip …');
await page.locator('.nav-family-toggle:has-text("Action List")').first().click();
await page.waitForTimeout(400);
await page.locator('.nav-comp[href="/components/chip"]').first().click();
await page.waitForTimeout(800);
await logState('chip — Action List shut, others still open');

await browser.close();
