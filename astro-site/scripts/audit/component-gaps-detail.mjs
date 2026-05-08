#!/usr/bin/env node
/* Per-component detailed gap report — for every spec card, list which
 * sections (Properties, Colors, Layout, Typography) and code blocks
 * (swift, compose) are missing. Sorted by easiest-to-finish first.
 *
 * Unlike audit-progress.mjs (which uses `new Function`), this script
 * uses regex parsing — handles files that reference helper constants.
 *
 * Run: node astro-site/scripts/audit/component-gaps-detail.mjs
 * Output: scripts/audit/component-gaps-report.md
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const DATA_DIR = path.resolve(path.dirname(__filename), '../../src/data/components');
const REQUIRED = ['Properties', 'Colors', 'Layout', 'Typography'];
const CARDLESS_VERDICTS = new Set(['remove', 'consolidate', 'product-layer']);

const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.ts') && f !== '_index.ts').sort();

/* For each spec card BLOCK in a .ts file, evaluate which sections + code
   are present. We slice the file by `"cardKey":` boundaries. */
function analyzeFile(text) {
  /* Verdict (from meta.badges or meta.verdict.kind) */
  const badgeKindMatch = [...text.matchAll(/"kind"\s*:\s*"([^"]+)"/g)].map((m) => m[1]);
  const verdict = badgeKindMatch.find((k) => CARDLESS_VERDICTS.has(k)) || badgeKindMatch[0] || 'unknown';

  /* Spec cards — slice by cardKey occurrences. */
  const cardKeyRe = /"cardKey"\s*:\s*"([^"]+)"/g;
  const matches = [...text.matchAll(cardKeyRe)];
  const cards = [];

  for (let i = 0; i < matches.length; i++) {
    const ck = matches[i];
    const start = ck.index;
    const end = i + 1 < matches.length ? matches[i + 1].index : text.length;
    const block = text.slice(start, end);

    /* Section presence: a section is "present + filled" if
       (a) `"label": "X"` exists for X in REQUIRED, AND
       (b) the same section block has at least one row entry — `"rows": [{`
       within the next ~2000 chars after the label. */
    const sections = {};
    for (const sec of REQUIRED) {
      const labelRe = new RegExp(`"label"\\s*:\\s*"${sec}"`, 'i');
      const labelMatch = block.match(labelRe);
      if (!labelMatch) {
        sections[sec] = false;
        continue;
      }
      /* Look for `"rows": [` or `"values": [` within the section. */
      const after = block.slice(labelMatch.index, labelMatch.index + 3000);
      const hasRows = /"rows"\s*:\s*\[\s*\{/.test(after);
      sections[sec] = hasRows;
    }

    /* Native code blocks — strict: must be a static string on the card
       with at least 20 chars of content (after stripping HTML highlighting
       wrappers). Function-based generators in `<slug>.js` count as
       "interactive only" and are reported separately. */
    const STR_RE = (key) => new RegExp(`"${key}"\\s*:\\s*"((?:\\\\.|[^"\\\\])*)"`);
    const swiftMatch = block.match(STR_RE('swift'));
    const composeMatch = block.match(STR_RE('compose'));
    const swiftLen = swiftMatch ? swiftMatch[1].replace(/<[^>]+>/g, '').replace(/\\./g, '').trim().length : 0;
    const composeLen = composeMatch ? composeMatch[1].replace(/<[^>]+>/g, '').replace(/\\./g, '').trim().length : 0;
    /* 10-char threshold — accommodates short variants like `EBTooltip("Heading")`
       which is correct + complete despite being brief. */
    const swiftStaticOk = swiftLen >= 10;
    const composeStaticOk = composeLen >= 10;

    cards.push({
      cardKey: ck[1],
      sections,
      swift: swiftStaticOk,
      compose: composeStaticOk,
    });
  }

  return { verdict, cards };
}

const components = [];
for (const f of files) {
  const slug = f.replace(/\.ts$/, '');
  const text = fs.readFileSync(path.join(DATA_DIR, f), 'utf8');
  const { verdict, cards } = analyzeFile(text);
  components.push({ slug, verdict, cards });
}

/* Compute per-component score. */
function compute(c) {
  if (c.cards.length === 0) {
    if (CARDLESS_VERDICTS.has(c.verdict)) {
      return { status: 'complete', score: 1, missing: [], total: 0, done: 0 };
    }
    return { status: 'untouched', score: 0, missing: ['no spec cards'], total: 6, done: 0 };
  }
  let done = 0, total = 0;
  const missing = [];
  for (const card of c.cards) {
    for (const sec of REQUIRED) {
      total++;
      if (card.sections[sec]) done++;
      else missing.push(`${card.cardKey} · ${sec}`);
    }
    total += 2;
    if (card.swift) done++; else missing.push(`${card.cardKey} · Swift`);
    if (card.compose) done++; else missing.push(`${card.cardKey} · Compose`);
  }
  const score = total === 0 ? 1 : done / total;
  return { status: score === 1 ? 'complete' : 'partial', score, missing, total, done };
}

const reports = components.map((c) => ({ ...c, ...compute(c) }));
reports.sort((a, b) => {
  if (a.status === 'complete' && b.status !== 'complete') return -1;
  if (b.status === 'complete' && a.status !== 'complete') return 1;
  return a.missing.length - b.missing.length;
});

const completeCount = reports.filter((r) => r.status === 'complete').length;
const partialCount = reports.filter((r) => r.status === 'partial').length;
const untouchedCount = reports.filter((r) => r.status === 'untouched').length;

let md = `# Component assessment gap report\n\n`;
md += `Total: **${reports.length}** components · `;
md += `**${completeCount}** done · **${partialCount}** partial · **${untouchedCount}** untouched\n\n`;
md += `Sorted by **fewest gaps first** — easier wins at the top.\n\n`;

md += `---\n\n## ✅ Complete (${completeCount})\n\n`;
for (const r of reports.filter((x) => x.status === 'complete')) {
  const note = r.cards.length === 0
    ? ` — _intentionally cardless (verdict: \`${r.verdict}\`)_`
    : ` — ${r.cards.length} card${r.cards.length === 1 ? '' : 's'}, every section + native code present`;
  md += `- **${r.slug}**${note}\n`;
}

md += `\n---\n\n## 🟡 Partial (${partialCount}) — sorted easiest first\n\n`;
for (const r of reports.filter((x) => x.status === 'partial')) {
  const pct = Math.round(r.score * 100);
  const need = r.total - r.done;
  md += `### ${r.slug} — ${pct}% (${r.done}/${r.total} sections · ${need} gap${need === 1 ? '' : 's'})\n\n`;
  md += `Verdict: \`${r.verdict}\` · Spec cards: **${r.cards.length}**\n\n`;
  const byCard = {};
  for (const m of r.missing) {
    const [card, item] = m.split(' · ');
    byCard[card] = byCard[card] || [];
    byCard[card].push(item);
  }
  for (const [card, items] of Object.entries(byCard)) {
    md += `- **${card}** — needs: ${items.map((i) => `\`${i}\``).join(', ')}\n`;
  }
  md += `\n`;
}

if (untouchedCount > 0) {
  md += `\n---\n\n## 🚧 Untouched (${untouchedCount}) — biggest lift\n\n`;
  for (const r of reports.filter((x) => x.status === 'untouched')) {
    md += `- **${r.slug}** — verdict: \`${r.verdict}\`. No spec cards yet.\n`;
  }
}

const outFile = path.resolve(path.dirname(__filename), 'component-gaps-report.md');
fs.writeFileSync(outFile, md);
console.log(`Wrote scripts/audit/component-gaps-report.md`);
console.log('');
console.log(`${completeCount} complete · ${partialCount} partial · ${untouchedCount} untouched (of ${reports.length})`);
console.log('');
if (partialCount > 0) {
  console.log('Top 15 easiest to finish:');
  const easyWins = reports.filter((x) => x.status === 'partial').slice(0, 15);
  for (const r of easyWins) {
    const need = r.total - r.done;
    console.log(`  ${r.slug.padEnd(30)} ${r.done.toString().padStart(2)}/${r.total.toString().padEnd(3)}  · need ${need}`);
  }
}
