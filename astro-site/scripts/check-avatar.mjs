import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push('PAGE: ' + e.message));
page.on('requestfailed', (req) => {
  if (req.url().includes('googleusercontent') || req.url().includes('lh3')) {
    errors.push('IMG FAIL: ' + req.url() + ' — ' + (req.failure()?.errorText || 'unknown'));
  }
});
page.on('response', async (resp) => {
  if (resp.url().includes('googleusercontent') || resp.url().includes('lh3')) {
    errors.push('IMG RESP: ' + resp.status() + ' ' + resp.url().slice(0, 100));
  }
});

await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);
const info = await page.evaluate(() => {
  const img = document.getElementById('sidebar-user-avatar');
  return {
    src: img?.src?.slice(0, 200),
    naturalWidth: img?.naturalWidth,
    naturalHeight: img?.naturalHeight,
    complete: img?.complete,
    user: window.__ebUser ? { name: window.__ebUser.name, hasPicture: !!window.__ebUser.picture, pictureStart: window.__ebUser.picture?.slice(0, 200) } : null,
  };
});
console.log('avatar img:', info);
console.log('events:', errors);
await browser.close();
