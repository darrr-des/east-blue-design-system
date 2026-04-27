import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 900 }, deviceScaleFactor: 1 });
await page.goto('http://localhost:4321/components/carousel-card', { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(1500);

const info = await page.evaluate(() => {
  const shell = document.querySelector('.sidebar-shell');
  const rail = document.querySelector('.rail');
  const panel = document.querySelector('.panel');
  const main = document.querySelector('.main');
  const headerPanel = document.querySelector('.panel-header');
  return {
    shell: shell ? { box: shell.getBoundingClientRect(), classes: shell.className } : null,
    rail:  rail  ? { box: rail.getBoundingClientRect() } : null,
    panel: panel ? { box: panel.getBoundingClientRect(), display: getComputedStyle(panel).display, width: getComputedStyle(panel).width } : null,
    main:  main  ? { box: main.getBoundingClientRect(), marginLeft: getComputedStyle(main).marginLeft } : null,
    panelHeader: headerPanel ? { box: headerPanel.getBoundingClientRect() } : null,
  };
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
