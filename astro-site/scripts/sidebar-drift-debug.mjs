/* Objectively measure sidebar scrollTop across sibling clicks.
   Reproduces user report: "click header transaction → header with logo
   makes the nav item lists move upward". */
import { chromium } from 'playwright';

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 720 } });
const page = await ctx.newPage();

async function instrumentScroll() {
  /* Hook scrollTop changes on .sidebar-nav so we know exactly when
     and from where the value moves during a navigation. */
  await page.evaluate(() => {
    const nav = document.querySelector('.sb-nav');
    if (!nav || nav.__instrumented) return;
    nav.__instrumented = true;
    window.__scrollLog = [];
    const log = (label) => {
      window.__scrollLog.push(`${label} scrollTop=${nav.scrollTop} t=${performance.now().toFixed(0)}`);
    };
    ['pointerdown', 'mousedown', 'focusin', 'mouseup', 'click'].forEach((ev) => {
      document.addEventListener(ev, () => log('event:' + ev), true);
    });
    ['astro:before-preparation', 'astro:after-preparation', 'astro:before-swap', 'astro:after-swap', 'astro:page-load'].forEach((ev) => {
      document.addEventListener(ev, () => log('astro:' + ev.replace('astro:', '')));
    });
    /* Watch scrollTop with a tight rAF loop to detect mid-swap changes. */
    let last = nav.scrollTop;
    (function tick() {
      const now = nav.scrollTop;
      if (now !== last) {
        log(`SCROLL CHANGED ${last} → ${now}`);
        last = now;
      }
      requestAnimationFrame(tick);
    })();
  });
}

async function dumpScrollLog(label) {
  const log = await page.evaluate(() => {
    const out = window.__scrollLog || [];
    window.__scrollLog = [];
    return out;
  });
  console.log(`\n--- scroll log: ${label} ---`);
  log.forEach((l) => console.log('  ' + l));
}

async function realClick(href) {
  /* Synthesize the full pointer chain (pointerdown → mousedown → focus →
     mouseup → click) directly on the element. This is what real users
     produce and what triggers our pointerdown capture handler. */
  await page.evaluate((h) => {
    const el = document.querySelector(`.sb-leaf[href="${h}"]`);
    if (!el) throw new Error(`No nav-comp for ${h}`);
    el.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
    el.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true }));
    el.focus();
    el.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true }));
    el.click();
  }, href);
}

async function snap(label) {
  const m = await page.evaluate(() => {
    const nav = document.querySelector('.sb-nav');
    const active = document.querySelector('.sb-nav .sb-leaf.is-active, .sb-nav .sb-link.is-active');
    return {
      navScrollTop: nav?.scrollTop ?? null,
      navScrollHeight: nav?.scrollHeight ?? null,
      navClientHeight: nav?.clientHeight ?? null,
      activeText: active?.textContent?.trim() ?? null,
      activeBoundingTop: active?.getBoundingClientRect().top ?? null,
      activeBoundingBottom: active?.getBoundingClientRect().bottom ?? null,
      navHasNoAnim: document.querySelector('.sb')?.classList.contains('is-swapping') ?? null,
    };
  });
  console.log(`[${label}]`);
  console.log(`  scrollTop=${m.navScrollTop}  scrollHeight=${m.navScrollHeight}  clientHeight=${m.navClientHeight}`);
  console.log(`  active="${m.activeText}"  rect.top=${m.activeBoundingTop}  rect.bottom=${m.activeBoundingBottom}`);
  console.log(`  is-swapping=${m.navHasNoAnim}`);
}

console.log('Open header-transaction first');
await page.goto('http://localhost:4321/components/header-transaction', { waitUntil: 'networkidle' });
await page.waitForTimeout(600);
await snap('initial header-transaction');

console.log('\nClick Header - With Logo (sibling)');
await realClick('/components/header-with-logo');
await page.waitForTimeout(800);
await snap('after click header-with-logo');

console.log('\nClick Header - Transaction (back)');
await realClick('/components/header-transaction');
await page.waitForTimeout(800);
await snap('after click header-transaction');

console.log('\nClick Header - With Logo again');
await realClick('/components/header-with-logo');
await page.waitForTimeout(800);
await snap('after click header-with-logo (2nd)');

console.log('\nClick Header - Transaction again');
await realClick('/components/header-transaction');
await page.waitForTimeout(800);
await snap('after click header-transaction (2nd)');

await browser.close();
