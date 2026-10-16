/* Style-tab content is display:none until JS activates a tab, so rows
   measured 0-wide. Force every tab panel visible with an injected rule. */
import { chromium } from '@playwright/test';
import fs from 'node:fs';
const slugs = fs.readdirSync('src/data/components')
  .filter(f => f.endsWith('.ts') && !['_index.ts','types.ts','_helpers.ts'].includes(f))
  .map(f => f.replace(/\.ts$/, ''));
const b = await chromium.launch();
const widths = [1440, 1180, 980, 820, 700];
const problems = [];
for (const w of widths) {
  const p = await b.newPage({ viewport: { width: w, height: 900 }, javaScriptEnabled: false });
  let rows = 0, bad = [];
  for (const slug of slugs) {
    const res = await p.goto(`http://localhost:4321/components/${slug}`, { waitUntil: 'load' }).catch(() => null);
    if (!res || !res.ok()) continue;
    await p.addStyleTag({ content: '.comp-tab-content{display:block !important}' });
    const r = await p.evaluate(() => {
      const out = { n: 0, flexed: false, issues: [] };
      const probe = document.querySelector('.spec-prop');
      if (probe) out.flexed = getComputedStyle(probe).display === 'flex';
      document.querySelectorAll('.spec-prop').forEach(row => {
        const k = row.querySelector('.spec-prop-key'), v = row.querySelector('.spec-prop-val');
        if (!k || !v || !row.clientWidth) return;
        out.n++;
        const kr = k.getBoundingClientRect(), vr = v.getBoundingClientRect();
        const overflow = row.scrollWidth - row.clientWidth;
        if (overflow > 0.5 || vr.left < kr.right - 0.5)
          out.issues.push({ k: k.textContent.trim(), overflow: +overflow.toFixed(1), collide: +(kr.right - vr.left).toFixed(1) });
      });
      return out;
    });
    rows += r.n;
    if (r.issues.length) bad.push({ slug, rows: r.issues.slice(0, 3) });
  }
  console.log(`width ${w}px · rows measured ${rows} · problem components ${bad.length}`);
  if (bad.length) problems.push({ w, bad: bad.slice(0, 6) });
  await p.close();
}
console.log(problems.length ? JSON.stringify(problems, null, 1) : 'clean at every width');
await b.close();
