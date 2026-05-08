import { chromium } from 'playwright';

const browser = await chromium.launch();
const ctx = await browser.newContext();
const page = await ctx.newPage();

/* Listen to all responses to see what URLs/sizes come back */
page.on('response', (r) => {
  if (r.url().includes('button')) {
    console.log('RESP', r.status(), r.url(), '→', r.headers()['content-length']);
  }
});

await page.goto('http://localhost:4321/');
/* Unregister any service workers and clear caches before navigating
   to the test URL. */
await page.evaluate(async () => {
  if ('serviceWorker' in navigator) {
    const regs = await navigator.serviceWorker.getRegistrations();
    for (const r of regs) await r.unregister();
  }
  if ('caches' in window) {
    const keys = await caches.keys();
    for (const k of keys) await caches.delete(k);
  }
});
await page.goto('http://localhost:4321/components/button', { waitUntil: 'load' });

const found = await page.evaluate(() => {
  /* Has the rendered HTML got our new "Background" key? */
  const allKeys = [...document.querySelectorAll('.spec-prop-key')].map((k) => k.textContent?.trim());
  return { count: allKeys.length, sample: allKeys.slice(0, 12) };
});
console.log('rendered keys:', found);

const networkSizes = await page.evaluate(async () => {
  const r = await fetch(window.location.href, { cache: 'no-store' });
  const txt = await r.text();
  const m = txt.match(/spec-prop-key">[^<]+/g) || [];
  return { fetchedKeys: m.slice(0, 12), len: txt.length };
});
console.log('fetched keys:', networkSizes);

/* Compare: page.content() vs document HTML */
const pageContentMatches = (await page.content()).match(/spec-prop-key">[^<]+/g) || [];
console.log('page.content() keys:', pageContentMatches.slice(0, 12));

await browser.close();
