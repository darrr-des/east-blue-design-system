import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('http://localhost:4321/components/modal', { waitUntil: 'networkidle' });
await page.waitForTimeout(300);
const before = await page.evaluate(() => document.getElementById('modal-spec-preview-default')?.innerHTML);
await page.evaluate(() => window.updateSpecCard('default', 'cta', '2-vertical'));
await page.waitForTimeout(300);
const after = await page.evaluate(() => document.getElementById('modal-spec-preview-default')?.innerHTML);
console.log('len before/after:', before?.length, after?.length);
console.log('equal:', before === after);
// Also flip type
await page.evaluate(() => window.updateSpecCard('default', 'type', 'with-icon'));
await page.waitForTimeout(300);
const afterType = await page.evaluate(() => document.getElementById('modal-spec-preview-default')?.innerHTML);
console.log('after type=with-icon, equal to before:', afterType === before);
console.log('after type=with-icon, equal to after-cta:', afterType === after);
await browser.close();
