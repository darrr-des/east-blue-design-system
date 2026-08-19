#!/usr/bin/env node
/*
 * Migration parser — reads assessment-src/components/*.html,
 * emits src/data/components/<slug>.ts in the ComponentData shape.
 *
 * Run:  node astro-site/scripts/migrate.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse as parseHTML } from 'node-html-parser';

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), '../..');
const SRC_DIR = path.join(ROOT, 'assessment-src/components');
const OUT_DIR = path.join(ROOT, 'astro-site/src/data/components');
const INDEX_OUT = path.join(ROOT, 'astro-site/src/data/components/_index.ts');

const FIGMA_FILE_KEY = 'HwWDwPit2xJjDH4zszOZ5o';

// ── helpers ───────────────────────────────────────────────────────────
const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
const textOf = (node) => (node ? node.textContent.replace(/\s+/g, ' ').trim() : '');
const htmlOf = (node) => (node ? node.innerHTML.trim() : '');

// Rewrite relative asset URLs to absolute root paths so they resolve
// correctly under any page route (e.g. /components/<slug>).
function fixAssetUrls(html) {
  if (!html) return html;
  return html
    .replace(/(\bsrc|\bhref)="(assets\/)/g, '$1="/$2')
    .replace(/(\bsrc|\bhref)="\.\/(assets\/)/g, '$1="/$2');
}

function slugFromFile(filename) {
  return path.basename(filename, '.html');
}

function parseMeta(raw) {
  const m = raw.match(/<!--@meta-start-->([\s\S]*?)<!--@meta-end-->/);
  if (!m) return {};
  const out = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^\s*([a-z-]+):\s*(.*)$/);
    if (!kv) continue;
    out[kv[1]] = kv[2].trim();
  }
  return out;
}

function parseNavGroup(raw) {
  const m = raw.match(/<!--@nav-group-start-->([\s\S]*?)<!--@nav-group-end-->/);
  return m ? m[1].trim() : undefined;
}

function parseNavIconSvg(raw) {
  // Extract the SVG inside the @nav block's .nav-comp-icon container
  const navBlock = raw.match(/<!--@nav-start-->([\s\S]*?)<!--@nav-end-->/);
  if (!navBlock) return undefined;
  const iconMatch = navBlock[1].match(/<div class="nav-comp-icon">\s*([\s\S]*?)\s*<\/div>/);
  if (!iconMatch) return undefined;
  // Strip HTML comments inside
  return iconMatch[1].replace(/<!--[\s\S]*?-->/g, '').trim();
}

function makeBadges(meta) {
  const badges = [];
  const dsMap = {
    keep: 'Keep',
    fix: 'Fix',
    restructure: 'Restructure',
    consolidate: 'Consolidate',
    'product-layer': 'Product Layer',
    remove: 'Remove',
  };
  const ntMap = {
    ready: 'Ready',
    refine: 'Needs Refinement',
    rework: 'Requires Rework',
    na: 'Not Applicable',
    fix: 'Fix',
    empty: 'Not Mapped',
  };
  if (meta['ds-verdict'] && dsMap[meta['ds-verdict']]) {
    badges.push({ kind: meta['ds-verdict'], label: dsMap[meta['ds-verdict']] });
  }
  if (meta['native-status'] && ntMap[meta['native-status']]) {
    badges.push({ kind: meta['native-status'], label: ntMap[meta['native-status']] });
  }
  return badges;
}

// ── traits ─────────────────────────────────────────────────────────────
function parseTraits(root) {
  const out = [];
  for (const card of root.querySelectorAll('.trait-card')) {
    const rating = ['pass', 'partial', 'warn', 'fail'].find((r) => card.classList.contains(r)) || 'pass';
    const name = textOf(card.querySelector('.trait-name'));
    const note = htmlOf(card.querySelector('.trait-note'));
    if (name) out.push({ name, rating, note });
  }
  return out;
}

// ── behavior table ─────────────────────────────────────────────────────
function mapBehaviorCell(td) {
  const raw = textOf(td).toLowerCase();
  if (raw.includes('yes')) return 'yes';
  if (raw.includes('no')) return 'no';
  return 'na';
}

function parseBehavior(root) {
  // Find table that follows a sub-heading matching "Behavior"
  const headings = root.querySelectorAll('.sub-heading');
  const bh = headings.find((h) => /^behavior$/i.test(textOf(h)));
  if (!bh) return [];
  let el = bh.nextElementSibling;
  while (el && el.classList && !el.classList.contains('table-wrap')) el = el.nextElementSibling;
  if (!el) return [];
  const rows = el.querySelectorAll('tbody tr');
  const out = [];
  for (const tr of rows) {
    const tds = tr.querySelectorAll('td');
    if (tds.length < 5) continue;
    out.push({
      state: textOf(tds[0]),
      ios: mapBehaviorCell(tds[1]),
      android: mapBehaviorCell(tds[2]),
      property: textOf(tds[3]) || '—',
      notes: htmlOf(tds[4]),
    });
  }
  return out;
}

// ── issue lists (resolved / open) ─────────────────────────────────────
function parseIssueList(ul) {
  if (!ul) return [];
  const items = [];
  for (const li of ul.querySelectorAll(':scope > li')) {
    const tag = li.querySelector('.tag-open');
    let tagData;
    if (tag) {
      const cls = tag.classList.toString();
      const m = cls.match(/tag-c(\d)/i);
      if (m) {
        tagData = { criterion: `C${m[1]}`, label: textOf(tag) };
      }
      tag.remove();
    }
    const strong = li.querySelector('strong');
    let headline;
    if (strong) {
      headline = strong.innerHTML.trim();
      strong.remove();
    }
    // innerHTML of the <span> or <li> remainder
    const inner = (li.querySelector('span') || li).innerHTML.trim();
    // Strip leading punctuation left over from removing <strong>
    const body = inner.replace(/^\s*[\.\s]*/, '').trim();
    items.push({ ...(headline ? { headline } : {}), body, ...(tagData ? { tag: tagData } : {}) });
  }
  return items;
}

function findListAfterHeading(root, regex) {
  const headings = root.querySelectorAll('.sub-heading');
  const h = headings.find((x) => regex.test(textOf(x)));
  if (!h) return null;
  let el = h.nextElementSibling;
  while (el && el.tagName !== 'UL') el = el.nextElementSibling;
  return el;
}

// ── recommendations ────────────────────────────────────────────────────
const RECOMMEND_TAGS = ['Rename','Property','Slot','State','Token','Asset','Composition','Family','A11y','Docs'];

function parseRecommendations(root) {
  const ul = findListAfterHeading(root, /^design recommendations$/i);
  if (!ul) return [];
  const out = [];
  for (const li of ul.querySelectorAll(':scope > li')) {
    const tagEl = li.querySelector('.tag-recommend');
    let tag = 'Docs';
    if (tagEl) {
      const t = textOf(tagEl);
      if (RECOMMEND_TAGS.includes(t)) tag = t;
      tagEl.remove();
    }
    const strong = li.querySelector('strong');
    let headline = '';
    if (strong) {
      headline = strong.innerHTML.trim();
      strong.remove();
    }
    const inner = (li.querySelector('span') || li).innerHTML.trim();
    const body = inner.replace(/^\s*[\.\s]*/, '').trim();
    out.push({ headline, body, tag });
  }
  return out;
}

// ── spec cards ─────────────────────────────────────────────────────────
function parseSpecCards(root) {
  const out = [];
  for (const card of root.querySelectorAll('.spec-card')) {
    const titleEl = card.querySelector('.spec-card-header-row .sub-heading, .spec-card-title');
    const title = titleEl ? textOf(titleEl).replace(/node\s+\S+$/i, '').trim() : '';
    const copyBtn = card.querySelector('.spec-node-copy');
    let node = copyBtn?.getAttribute('data-node') || '';
    if (!node) {
      const nodeText = card.querySelector('.spec-card-node code');
      if (nodeText) node = textOf(nodeText);
    }
    const descEl = card.querySelector('.spec-card-desc');
    const description = descEl ? descEl.innerHTML.trim() : '';
    const cardKey = card.getAttribute('id') || (title ? title.toLowerCase().replace(/\s+/g, '-') : `card-${out.length}`);

    // DES sections: .spec-view-des .spec-detail-section
    const desView = card.querySelector('.spec-view-des');
    const sections = [];
    if (desView) {
      for (const sec of desView.querySelectorAll('.spec-detail-section')) {
        const label = textOf(sec.querySelector('.spec-detail-label'));
        const rows = [];
        for (const prop of sec.querySelectorAll('.spec-prop')) {
          const key = textOf(prop.querySelector('.spec-prop-key'));
          const valEl = prop.querySelector('.spec-prop-val');
          const value = valEl ? valEl.innerHTML.trim() : '';
          const mono = valEl && valEl.classList.contains('mono');
          rows.push({ key, value, mono });
        }
        if (label && rows.length) sections.push({ label, rows });
      }
    }

    // Fall back to older spec-detail-row pattern if spec-view-des not present
    if (!sections.length) {
      const grids = card.querySelectorAll('.spec-detail-grid');
      for (const grid of grids) {
        for (const col of grid.querySelectorAll('.spec-detail-col')) {
          const label = textOf(col.querySelector('.spec-detail-label'));
          const rows = [];
          for (const row of col.querySelectorAll('.spec-detail-row')) {
            const key = textOf(row.querySelector('span:not(.muted)')) || textOf(row);
            const codeEl = row.querySelector('code');
            const value = codeEl ? codeEl.innerHTML.trim() : textOf(row).replace(key, '').trim();
            rows.push({ key, value, mono: !!codeEl });
          }
          if (label && rows.length) sections.push({ label, rows });
        }
      }
    }

    // 3rd-tier fallback: .demo-figma-panel inside .demo-layout (Properties-only cards)
    if (!sections.length) {
      const demoPanels = card.querySelectorAll('.demo-figma-panel .demo-panel-section');
      for (const ds of demoPanels) {
        const label = textOf(ds.querySelector('.demo-panel-heading')) || 'Properties';
        const rows = [];
        for (const r of ds.querySelectorAll('.demo-panel-row')) {
          const key = textOf(r.querySelector('.demo-panel-label'));
          if (!key) continue;
          // Try value first, then a select's selected option, then text remainder
          let value = '';
          const valEl = r.querySelector('.demo-panel-value');
          if (valEl) {
            value = valEl.innerHTML.trim();
          } else {
            const sel = r.querySelector('select');
            if (sel) {
              const selected = sel.querySelector('option[selected]') || sel.querySelector('option');
              if (selected) value = textOf(selected);
            } else {
              const toggle = r.querySelector('.demo-bool-toggle');
              if (toggle) value = toggle.classList.contains('active') ? 'true' : 'false';
            }
          }
          rows.push({ key, value, mono: false });
        }
        if (rows.length) sections.push({ label, rows });
      }
    }

    // DEV code
    let swift = '';
    let compose = '';
    const codeView = card.querySelector('.spec-card-code, .spec-view-dev');
    if (codeView) {
      const blocks = codeView.querySelectorAll('.spec-code-block, pre.spec-code-block');
      for (const pre of blocks) {
        const lang = pre.getAttribute('data-lang');
        const codeInner = pre.querySelector('code');
        const content = codeInner ? codeInner.innerHTML : pre.innerHTML;
        if (lang === 'swift') swift = content.trim();
        else if (lang === 'compose') compose = content.trim();
      }
      if (!swift && !compose) {
        // Single pre block, use as swift
        const pre = codeView.querySelector('pre');
        if (pre) {
          const codeInner = pre.querySelector('code');
          swift = (codeInner ? codeInner.innerHTML : pre.innerHTML).trim();
        }
      }
    }

    // Preview HTML — keep the initial render markup so cards visually show something
    let previewHtml;
    const previewEl =
      card.querySelector('.spec-card-preview') ||
      card.querySelector('.spec-preview-frame');
    if (previewEl) {
      previewHtml = fixAssetUrls(previewEl.innerHTML.trim());
    }

    out.push({ cardKey, title, node, description, ...(previewHtml ? { previewHtml } : {}), sections, swift, compose });
  }
  return out;
}

// ── shared Colors by State tables (under spec cards) ──────────────────
function parseColorsTables(root) {
  const out = [];
  for (const block of root.querySelectorAll('.style-colors')) {
    const title = textOf(block.querySelector('.style-colors-title'));
    if (!title) continue;
    const descEl = block.querySelector('.style-colors-desc');
    const description = descEl ? descEl.innerHTML.trim() : undefined;
    const theadRow = block.querySelector('thead tr');
    if (!theadRow) continue;
    const ths = theadRow.querySelectorAll('th').map((th) => textOf(th));
    // first two columns are Role + Token
    const columns = ths.slice(2);
    const rows = [];
    for (const tr of block.querySelectorAll('tbody tr')) {
      const tds = tr.querySelectorAll('td');
      if (tds.length < 2) continue;
      const role = textOf(tds[0]);
      const token = textOf(tds[1]);
      const values = tds.slice(2).map((td) => textOf(td));
      rows.push({ role, token, values });
    }
    out.push({ title, description, columns, rows });
  }
  return out;
}

// ── installation, property mapping, etc. (Code tab) ───────────────────
function findSectionAfter(root, regex) {
  const headings = root.querySelectorAll('.sub-heading');
  return headings.find((h) => regex.test(textOf(h)));
}

function collectUntilNextSubHeading(startEl) {
  const collected = [];
  let el = startEl.nextElementSibling;
  while (el) {
    if (el.classList && el.classList.contains('sub-heading') && !el.classList.contains('toc-child')) break;
    if (el.tagName && el.tagName.toLowerCase() === 'div' && el.classList && el.classList.contains('comp-tab-content')) break;
    collected.push(el);
    el = el.nextElementSibling;
  }
  return collected;
}

function parseInstallation(root) {
  const h = findSectionAfter(root, /^installation/i);
  if (!h) return { planned: false, blocks: [] };
  const planned = !!h.querySelector('.badge-planned');
  const collected = collectUntilNextSubHeading(h);
  const blocks = [];
  let lastLabel = '';
  for (const el of collected) {
    if (el.tagName?.toLowerCase() === 'p' && el.classList?.contains('code-label')) {
      lastLabel = textOf(el);
    } else if (el.classList?.contains('code-block-wrap')) {
      const pre = el.querySelector('pre');
      if (pre) {
        blocks.push({ label: lastLabel, code: pre.innerHTML.trim() });
        lastLabel = '';
      }
    }
  }
  const footnoteEl = collected.find((e) => e.classList?.contains('table-footnote'));
  return {
    planned,
    blocks,
    ...(footnoteEl ? { footnote: textOf(footnoteEl) } : {}),
  };
}

function parsePropertyMapping(root) {
  const h = findSectionAfter(root, /^property mapping/i);
  if (!h) return { rows: [] };
  const collected = collectUntilNextSubHeading(h);
  const descEl = collected.find((e) => e.tagName?.toLowerCase() === 'p' && !e.classList?.contains('code-label'));
  const description = descEl ? textOf(descEl) : undefined;
  const tableWrap = collected.find((e) => e.classList?.contains('table-wrap'));
  const rows = [];
  if (tableWrap) {
    for (const tr of tableWrap.querySelectorAll('tbody tr')) {
      const tds = tr.querySelectorAll('td');
      if (tds.length < 3) continue;
      rows.push({
        figma: tds[0].innerHTML.trim(),
        swift: tds[1].innerHTML.trim(),
        compose: tds[2].innerHTML.trim(),
      });
    }
  }
  const infobox = collected.find((e) => e.classList?.contains('infobox-code'));
  let filePaths;
  if (infobox) {
    const boxes = infobox.querySelectorAll('.path-box');
    if (boxes.length >= 2) {
      filePaths = { swift: textOf(boxes[0]), compose: textOf(boxes[1]) };
    }
  }
  return { description, rows, filePaths };
}

function parseUsageSnippets(root) {
  const h = findSectionAfter(root, /^usage snippets/i);
  if (!h) return [];
  const collected = collectUntilNextSubHeading(h);
  const out = [];
  let currentSub = '';
  for (const el of collected) {
    if (el.classList?.contains('sub-heading') && el.classList.contains('toc-child')) {
      currentSub = textOf(el);
    } else if (el.classList?.contains('code-card-body')) {
      const swiftPre = el.querySelector('.platform-panel[data-tab="swift"] pre');
      const composePre = el.querySelector('.platform-panel[data-tab="compose"] pre');
      const swift = swiftPre ? swiftPre.innerHTML.trim() : '';
      const compose = composePre ? composePre.innerHTML.trim() : '';
      if (swift || compose) {
        out.push({ subheading: currentSub || 'Usage', swift, compose });
        currentSub = '';
      }
    }
  }
  return out;
}

function parseAccessibility(root) {
  const h = findSectionAfter(root, /^accessibility$/i);
  if (!h) return [];
  const collected = collectUntilNextSubHeading(h);
  const tableWrap = collected.find((e) => e.classList?.contains('table-wrap'));
  if (!tableWrap) return [];
  const rows = [];
  for (const tr of tableWrap.querySelectorAll('tbody tr')) {
    const tds = tr.querySelectorAll('td');
    if (tds.length < 2) continue;
    // Handle colspan — merge cells when only 2 present
    if (tds.length === 2 && tds[1].getAttribute('colspan')) {
      rows.push({ requirement: textOf(tds[0]), ios: tds[1].innerHTML.trim(), android: tds[1].innerHTML.trim() });
    } else if (tds.length >= 3) {
      rows.push({
        requirement: textOf(tds[0]),
        ios: tds[1].innerHTML.trim(),
        android: tds[2].innerHTML.trim(),
      });
    }
  }
  return rows;
}

function parseUsageGuidelines(root) {
  const h = findSectionAfter(root, /^usage guidelines/i);
  if (!h) return [];
  const collected = collectUntilNextSubHeading(h);
  const out = [];
  for (const el of collected) {
    if (el.classList?.contains('guideline-row')) {
      const doEl = el.querySelector('.guideline-do p');
      const dontEl = el.querySelector('.guideline-dont p');
      if (doEl && dontEl) out.push({ doText: textOf(doEl), dontText: textOf(dontEl) });
    }
  }
  return out;
}

const BADGE_STATUS_MAP = {
  'badge-ready': { status: 'ready', label: 'Ready' },
  'badge-refine': { status: 'refine', label: 'Needs Refinement' },
  'badge-rework': { status: 'rework', label: 'Requires Rework' },
  'badge-na': { status: 'na', label: 'Not Applicable' },
  'badge-fix': { status: 'fix', label: 'Fix' },
  'badge-empty': { status: 'empty', label: 'Not Mapped' },
};

function badgeToStatus(badgeEl) {
  if (!badgeEl) return { status: 'empty', label: 'Not Mapped' };
  const cls = badgeEl.classList.toString();
  for (const key of Object.keys(BADGE_STATUS_MAP)) {
    if (cls.includes(key)) return BADGE_STATUS_MAP[key];
  }
  return { status: 'empty', label: textOf(badgeEl) || 'Not Mapped' };
}

function parseScorecard(root) {
  const h = findSectionAfter(root, /^criteria scorecard/i);
  if (!h) return [];
  const collected = collectUntilNextSubHeading(h);
  const tableWrap = collected.find((e) => e.classList?.contains('table-wrap'));
  if (!tableWrap) return [];
  const rows = [];
  for (const tr of tableWrap.querySelectorAll('tbody tr')) {
    const tds = tr.querySelectorAll('td');
    if (tds.length < 4) continue;
    const id = textOf(tds[0]);
    const criterion = textOf(tds[1]);
    const { status, label } = badgeToStatus(tds[2].querySelector('.badge'));
    const notes = tds[3].innerHTML.trim();
    if (/^C\d$/i.test(id)) rows.push({ id: id.toUpperCase(), criterion, status, statusLabel: label, notes });
  }
  return rows;
}

function parseCodeConnect(root) {
  const h = findSectionAfter(root, /^code connect$/i);
  if (!h) return [];
  const collected = collectUntilNextSubHeading(h);
  const tableWrap = collected.find((e) => e.classList?.contains('table-wrap'));
  if (!tableWrap) return [];
  const rows = [];
  for (const tr of tableWrap.querySelectorAll('tbody tr')) {
    const tds = tr.querySelectorAll('td');
    if (tds.length < 3) continue;
    const aspect = textOf(tds[0]);
    const { status, label } = badgeToStatus(tds[1].querySelector('.badge'));
    const notes = tds[2].innerHTML.trim();
    rows.push({ aspect, status, statusLabel: label, notes });
  }
  return rows;
}

function parseVariants(root) {
  const h = findSectionAfter(root, /^variants inventory/i);
  if (!h) return { total: 0, description: '', columns: [], rows: [] };
  const totalMatch = textOf(h).match(/\((\d+)\s*total\)/);
  const total = totalMatch ? parseInt(totalMatch[1], 10) : 0;
  const collected = collectUntilNextSubHeading(h);
  const descEl = collected.find((e) => e.tagName?.toLowerCase() === 'p');
  const description = descEl ? descEl.innerHTML.trim() : '';
  // primary table
  const tableWrap = collected.find((e) => e.classList?.contains('table-wrap') || (e.tagName?.toLowerCase() === 'details'));
  let columns = [];
  let rows = [];
  if (tableWrap) {
    const actualWrap = tableWrap.classList?.contains('table-wrap')
      ? tableWrap
      : tableWrap.querySelector('.table-wrap');
    if (actualWrap) {
      const theadCells = actualWrap.querySelectorAll('thead th');
      columns = theadCells.map((c) => textOf(c));
      rows = actualWrap.querySelectorAll('tbody tr').map((tr) => ({
        cells: tr.querySelectorAll('td').map((td) => td.innerHTML.trim()),
      }));
    }
  }
  return { total, description, columns, rows };
}

// ── changelog ──────────────────────────────────────────────────────────
function parseChangelog(root) {
  const tab = root.querySelector('.comp-tab-content[data-tab="changelog"]');
  if (!tab) return [];
  const out = [];
  const headings = tab.querySelectorAll(':scope > .sub-heading');
  for (const h of headings) {
    const raw = textOf(h);
    const versionMatch = raw.match(/(\d+\.\d+\.\d+|Initial)/);
    const version = versionMatch ? versionMatch[1] : '1.0.0';
    const dateMatch = raw.match(/—\s*(.+?)(?:\s+(Initial|Major|Minor|Patch))?$/);
    const date = dateMatch ? dateMatch[1].trim() : '';
    const badge = h.querySelector('.tab-version-badge');
    let kind = 'patch';
    let kindLabel = 'Patch';
    if (badge) {
      const cls = badge.classList.toString();
      if (cls.includes('major')) { kind = 'major'; kindLabel = 'Major'; }
      else if (cls.includes('minor')) { kind = 'minor'; kindLabel = 'Minor'; }
      else if (cls.includes('patch')) { kind = 'patch'; kindLabel = 'Patch'; }
      else if (cls.includes('initial')) { kind = 'initial'; kindLabel = 'Initial'; }
    }
    // following sibling that's a .changelog block
    let el = h.nextElementSibling;
    while (el && !(el.classList?.contains('changelog'))) el = el.nextElementSibling;
    if (!el) continue;
    const headerEl = el.querySelector('.changelog-header');
    const header = headerEl ? textOf(headerEl) : '';
    const rows = [];
    for (const row of el.querySelectorAll('.changelog-row')) {
      const body = row.querySelector('.changelog-body')?.innerHTML?.trim() || '';
      const deltaEl = row.querySelector('.changelog-delta');
      let delta;
      if (deltaEl) {
        const cls = deltaEl.classList.toString();
        let dkind = 'partial';
        if (cls.includes('delta-resolved')) dkind = 'resolved';
        else if (cls.includes('delta-open')) dkind = 'open';
        else if (cls.includes('delta-partial')) dkind = 'partial';
        delta = { kind: dkind, label: textOf(deltaEl) };
      }
      rows.push({ body, ...(delta ? { delta } : {}) });
    }
    out.push({ version, date, kind, kindLabel, header, rows });
  }
  return out;
}

// ── overview/in context note ──────────────────────────────────────────
function parseInContextNote(root) {
  const h = findSectionAfter(root, /^in context$/i);
  if (!h) return undefined;
  let el = h.nextElementSibling;
  while (el && el.tagName?.toLowerCase() !== 'p') el = el.nextElementSibling;
  return el ? textOf(el) : undefined;
}

// ── raw HTML blobs for visual previews ────────────────────────────────
function parseInContextHtml(root) {
  const wrap = root.querySelector('.ctx-wrap');
  return wrap ? fixAssetUrls(wrap.innerHTML.trim()) : undefined;
}

function parseLivePreviewHtml(root) {
  // find the <h> for "Live Preview" and the .demo-panel that follows
  const h = findSectionAfter(root, /^live preview$/i);
  if (!h) return undefined;
  let el = h.nextElementSibling;
  while (el) {
    if (el.classList?.contains('demo-panel')) break;
    if (el.classList?.contains('sub-heading')) return undefined; // ran past without finding
    el = el.nextElementSibling;
  }
  return el ? fixAssetUrls(el.innerHTML.trim()) : undefined;
}

// ── main per-file transform ────────────────────────────────────────────
function parseFile(filename) {
  const raw = fs.readFileSync(filename, 'utf8');
  const meta = parseMeta(raw);
  const root = parseHTML(raw, { comment: false });
  const slug = slugFromFile(filename);

  // Name from comp-name-title or summary card
  const nameEl = root.querySelector('.comp-name-title') || root.querySelector('.summary-card-name') || root.querySelector('.nav-comp-name');
  const name = nameEl ? textOf(nameEl) : slug.replace(/-/g, ' ');

  const descEl = root.querySelector('.comp-desc') || root.querySelector('.summary-card-desc');
  const description = descEl ? descEl.innerHTML.trim() : '';

  const node = meta['node'] || '';
  const nodeUrl = node.replace(':', '-');
  const figmaUrl = `https://www.figma.com/design/${FIGMA_FILE_KEY}/GCash-Design-System--Sticker-Sheets-v2?node-id=${nodeUrl}`;

  const navGroup = parseNavGroup(raw);
  const navIconSvg = parseNavIconSvg(raw);

  const data = {
    meta: {
      slug,
      name,
      node,
      figmaUrl,
      description,
      badges: makeBadges(meta),
      ...(navGroup ? { navGroup } : {}),
      ...(navIconSvg ? { navIconSvg } : {}),
    },
    overview: {
      inContextNote: parseInContextNote(root),
      inContextHtml: parseInContextHtml(root),
      livePreviewHtml: parseLivePreviewHtml(root),
      traits: parseTraits(root),
      behavior: parseBehavior(root),
      resolved: parseIssueList(findListAfterHeading(root, /^resolved issues/i)),
      open: parseIssueList(findListAfterHeading(root, /^open issues/i)),
      recommendations: parseRecommendations(root),
    },
    style: {
      specCards: parseSpecCards(root),
      colorsTables: parseColorsTables(root),
    },
    code: {
      installation: parseInstallation(root),
      propertyMapping: parsePropertyMapping(root),
      usageSnippets: parseUsageSnippets(root),
      accessibility: parseAccessibility(root),
      usageGuidelines: parseUsageGuidelines(root),
      scorecard: parseScorecard(root),
      codeConnect: parseCodeConnect(root),
      variants: parseVariants(root),
    },
    changelog: parseChangelog(root),
  };

  return data;
}

// ── serializer: ComponentData -> TypeScript file ──────────────────────
function toTS(data) {
  // Pretty-print preserving HTML inside string values
  const body = JSON.stringify(data, null, 2);
  return `import type { ComponentData } from '../types';\n\nexport const ${safeIdent(data.meta.slug)}: ComponentData = ${body};\n`;
}

function safeIdent(slug) {
  return slug.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()).replace(/^(\d)/, '_$1');
}

// ── main ──────────────────────────────────────────────────────────────
function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  const files = fs.readdirSync(SRC_DIR).filter((f) => f.endsWith('.html')).sort();
  const manifest = [];
  let okCount = 0;
  let failCount = 0;
  for (const f of files) {
    const full = path.join(SRC_DIR, f);
    const slug = slugFromFile(f);
    try {
      const data = parseFile(full);
      const outPath = path.join(OUT_DIR, `${slug}.ts`);
      // Preserve hand-authored accordion.ts if its meta.slug === 'accordion' AND user hasn't opted in to overwrite
      fs.writeFileSync(outPath, toTS(data), 'utf8');
      manifest.push({
        slug,
        name: data.meta.name,
        node: data.meta.node,
        badges: data.meta.badges,
        ...(data.meta.navGroup ? { navGroup: data.meta.navGroup } : {}),
        ...(data.meta.navIconSvg ? { navIconSvg: data.meta.navIconSvg } : {}),
      });
      okCount++;
      console.log(`✓ ${slug} (${data.overview.traits.length} traits, ${data.style.specCards.length} spec cards, ${data.changelog.length} changelog entries)`);
    } catch (e) {
      failCount++;
      console.error(`✗ ${slug}: ${e.message}`);
    }
  }

  // Emit the index file: a component map plus a manifest derived from it.
  // The manifest used to be written out as a literal copy of every
  // component's meta, which drifted the moment a data file changed on its
  // own. Deriving it here keeps the generator in step with the checked-in
  // file rather than reverting it on the next run.
  const imports = manifest.map((m) => `import { ${safeIdent(m.slug)} } from './${m.slug}';`).join('\n');
  const map = manifest.map((m) => `  '${m.slug}': ${safeIdent(m.slug)},`).join('\n');
  const manifestExport = [
    '/**',
    ' * Nav / search manifest — derived from `componentMap` so it can never drift.',
    ' *',
    ' * Previously this was a hand-maintained duplicate of every component\'s meta,',
    ' * which silently went stale whenever a data file changed (e.g. a component\'s',
    ' * badges were updated but the sidebar status dot kept the old colour).',
    ' *',
    ' * Consumers read slug / name / node / badges / navGroup / navIconSvg — all of',
    " * which live on `meta`. Order follows componentMap's insertion order; every",
    ' * consumer sorts for display anyway.',
    ' */',
    'export const componentManifest = Object.values(componentMap).map((c) => c.meta);',
  ].join('\n');
  fs.writeFileSync(
    INDEX_OUT,
    `import type { ComponentData } from '../types';\n${imports}\n\nexport const componentMap: Record<string, ComponentData> = {\n${map}\n};\n\n${manifestExport}\n`,
    'utf8'
  );
  console.log(`\nWrote ${okCount} components, ${failCount} failed`);
}

main();
