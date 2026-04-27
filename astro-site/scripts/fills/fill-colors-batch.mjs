#!/usr/bin/env node
/* Inject Colors sections into accordion / alert / bottom-sheet / overlay
 * spec cards. Token values pulled from Figma via mcp__figma__get_variable_defs.
 * Run: node astro-site/scripts/fill-colors-batch.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const DATA_DIR = path.resolve(path.dirname(__filename), '../../src/data/components');

function safeIdent(slug) {
  return slug.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()).replace(/^(\d)/, '_$1');
}

/* Per-component Colors sections, keyed by cardKey.
 * Token paths and hex values verified via Figma MCP variable defs. */
const PLAN = {
  accordion: {
    'acc-spec-collapsed': [
      ['Surface',         '#FFFFFF', 'accordion/color/collapsed/bg'],
      ['Border',          '#E5EBF4', 'accordion/color/collapsed/border'],
      ['Label',           '#0A2757', 'accordion/color/collapsed/label'],
      ['Description',     '#90A8D0', 'accordion/color/collapsed/description'],
      ['Chevron',         '#005CE5', 'accordion/color/collapsed/icon-chevron'],
      ['Disabled label',  '#C2CFE5', 'text/color-text-disabled'],
    ],
    'acc-spec-expanded': [
      ['Surface',         '#FFFFFF', 'accordion/color/expanded/bg'],
      ['Border',          '#E5EBF4', 'accordion/color/expanded/border'],
      ['Label',           '#0A2757', 'accordion/color/expanded/label'],
      ['Description',     '#90A8D0', 'accordion/color/expanded/description'],
      ['Chevron',         '#005CE5', 'accordion/color/expanded/icon-chevron'],
      ['Body bg',         '#F6F9FD', 'bg/color-bg'],
    ],
  },
  alert: {
    /* Both Banner and Accent Card carry intent-driven colors from the same
     * token namespace. Listing default + info as a representative pair;
     * warning/error/success follow the same shape. */
    'alert-spec-banner': [
      ['Default bg',      '#F6F9FD', 'alert/color/default/bg'],
      ['Default title',   '#0A2757', 'alert/color/default/label-title'],
      ['Default desc',    '#6780A9', 'alert/color/default/description'],
      ['Info bg',         '#E5F1FF', 'alert/color/info/bg'],
      ['Info border',     '#005CE5', 'alert/color/info/border'],
      ['Info title',      '#072592', 'alert/color/info/label-title'],
      ['Info icon',       '#2340A9', 'alert/color/info/icon'],
      ['Warning bg',      '#FFF9EB', 'alert/color/warning/bg'],
      ['Warning border',  '#EBB30A', 'alert/color/warning/border'],
      ['Warning text',    '#966F0B', 'alert/color/warning/icon'],
      ['Error bg',        '#F8E6E6', 'alert/color/error/bg'],
      ['Error border',    '#D61B2C', 'alert/color/error/border'],
      ['Error text',      '#D61B2C', 'alert/color/error/label-title'],
      ['Success bg',      '#E7F8F0', 'alert/color/success/bg'],
      ['Success border',  '#27C990', 'alert/color/success/border'],
      ['Success text',    '#035E50', 'alert/color/success/label-title'],
    ],
    'alert-spec-card': [
      ['Surface',         '#FFFFFF', 'surface/default'],
      ['Border accent',   'matches intent (info/warning/error/success)', 'alert/color/{intent}/border'],
      ['Title',           '#0A2757', 'alert/color/default/label-title'],
      ['Description',     '#6780A9', 'alert/color/default/description'],
      ['Action link',     '#005CE5', 'alert/color/info/label-link'],
    ],
  },
  'bottom-sheet': {
    'left-align': [
      ['Surface',         '#FFFFFF', 'bottom-header/color/bg'],
      ['Preamble',        '#90A8D0', 'bottom-header/color/preamble'],
      ['Header',          '#0A2757', 'bottom-header/color/header'],
      ['Description',     '#445C85', 'bottom-header/color/description'],
      ['Close icon',      '#6780A9', 'bottom-header/color/icon-close'],
      ['Primary CTA bg',  '#005CE5', 'button/primary/brand/enabled/bg'],
      ['Primary CTA label','#FFFFFF','button/primary/brand/enabled/label'],
      ['Tertiary CTA',    '#005CE5', 'button/tertiary/brand/enabled/label'],
    ],
    'center-align': [
      ['Surface',         '#FFFFFF', 'bottom-header/color/bg'],
      ['Preamble',        '#90A8D0', 'bottom-header/color/preamble'],
      ['Header',          '#0A2757', 'bottom-header/color/header'],
      ['Description',     '#445C85', 'bottom-header/color/description'],
      ['Close icon',      '#6780A9', 'bottom-header/color/icon-close'],
      ['Primary CTA bg',  '#005CE5', 'button/primary/brand/enabled/bg'],
      ['Primary CTA label','#FFFFFF','button/primary/brand/enabled/label'],
      ['Tertiary CTA',    '#005CE5', 'button/tertiary/brand/enabled/label'],
    ],
  },
  overlay: {
    'default-·-strong': [
      ['Scrim',           '#020E228F (56% alpha)', 'bg/color-bg-overlay-strong'],
    ],
  },
};

function buildColorsSection(rows) {
  /* Each color value gets two rows: hex on the first line, full token path on the second.
   * mono:true so they render with the spec-prop-val.mono monospace styling. */
  const flat = [];
  for (const [role, hex, token] of rows) {
    flat.push({ key: role, value: hex, mono: true });
    flat.push({ key: role + ' token', value: token, mono: true });
  }
  return { label: 'Colors', rows: flat };
}

let totalCards = 0;
let totalUpdated = 0;

for (const [slug, plan] of Object.entries(PLAN)) {
  const file = path.join(DATA_DIR, `${slug}.ts`);
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/= ({[\s\S]*});\s*$/);
  if (!m) { console.error(`! ${slug}: parse failed`); continue; }
  const data = (new Function('return ' + m[1]))();
  let touched = 0;
  for (const card of data.style.specCards) {
    totalCards++;
    const rows = plan[card.cardKey];
    if (!rows) {
      console.log(`- ${slug} / ${card.cardKey}: no plan entry, skipping`);
      continue;
    }
    const has = (card.sections || []).some((s) => s.label && s.label.toLowerCase() === 'colors');
    if (has) {
      console.log(`- ${slug} / ${card.cardKey}: already has Colors`);
      continue;
    }
    // Insert after Properties
    const sections = card.sections || [];
    const propsIdx = sections.findIndex((s) => /^properties$/i.test(s.label));
    const insertAt = propsIdx >= 0 ? propsIdx + 1 : 0;
    sections.splice(insertAt, 0, buildColorsSection(rows));
    card.sections = sections;
    touched++;
  }
  if (touched > 0) {
    const out = `import type { ComponentData } from '../types';\n\nexport const ${safeIdent(slug)}: ComponentData = ${JSON.stringify(data, null, 2)};\n`;
    fs.writeFileSync(file, out, 'utf8');
    totalUpdated += touched;
    console.log(`✓ ${slug}: Colors injected into ${touched} card(s)`);
  }
}

console.log(`\nDone. ${totalUpdated} card(s) updated across ${Object.keys(PLAN).length} components.`);
