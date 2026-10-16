import { chromium } from 'playwright';
const browser = await chromium.launch();

/* try/finally so a failed goto or evaluate still tears the browser down —
   without it a missing dev server leaves an orphaned Chromium behind. */
try {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push('PAGE: ' + e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push('CONSOLE: ' + m.text()); });

  await page.goto('http://localhost:4321/components/dropdown-item', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  const result = await page.evaluate(() => ({
    hasFn: typeof window.updateDropdownItemDemo,
    hasDemoObj: typeof window._ddiDemo,
    hasBuilder: typeof window._ddiBuildSvg,
    previewExists: !!document.getElementById('ddi-demo-preview'),
    previewLen: document.getElementById('ddi-demo-preview')?.innerHTML?.length,
  }));
  console.log('initial:', result);
  console.log('errors so far:', errors);

  // Try flipping type
  errors.length = 0;
  await page.evaluate(() => {
    const sel = document.querySelector('select[onchange*="_ddiDemo.type"]');
    if (sel) { sel.value = 'amount'; sel.dispatchEvent(new Event('change')); }
  });
  await page.waitForTimeout(200);
  const after = await page.evaluate(() => ({
    previewLen: document.getElementById('ddi-demo-preview')?.innerHTML?.length,
    demoState: window._ddiDemo,
  }));
  console.log('after flip type=amount:', after);
  console.log('errors after flip:', errors);
} finally {
  await browser.close();
}
