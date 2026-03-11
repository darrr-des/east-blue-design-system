/**
 * Assessment Build Script
 * Assembles report.html from:
 *   - assessment-src/shell.html          (shared layout, CSS, JS)
 *   - assessment-src/components/*.html   (one file per component)
 *
 * Also syncs the assessment guide (gcash-ds-assessment-guide.md) with
 * current component data via sync-guide.js.
 *
 * Usage: node assessment-src/build.js
 *
 * Each component file must contain four tagged blocks:
 *   <!--@nav-start-->          ... nav sidebar item ...      <!--@nav-end-->
 *   <!--@summary-card-start--> ... summary card ...          <!--@summary-card-end-->
 *   <!--@summary-row-start-->  ... summary table <tr> ...    <!--@summary-row-end-->
 *   <!--@section-start-->      ... full component section ... <!--@section-end-->
 *
 * Optional blocks (used by sync-guide.js):
 *   <!--@meta-start-->         ... status, node, verdicts ... <!--@meta-end-->
 *   <!--@patterns-start-->     ... new anti-patterns found ... <!--@patterns-end-->
 */

const fs   = require('fs');
const path = require('path');

const srcDir   = __dirname;
const outFile  = path.join(srcDir, '..', 'report.html');
const cssFile  = path.join(srcDir, '..', 'styles.css');
const compDir  = path.join(srcDir, 'components');

// ── Extract a tagged block from file content ──────────────────────────────────
function extract(content, tag) {
  const start = `<!--@${tag}-start-->`;
  const end   = `<!--@${tag}-end-->`;
  const from  = content.indexOf(start);
  const to    = content.indexOf(end);
  if (from === -1 || to === -1) {
    console.warn(`  ⚠  Missing block: ${tag}`);
    return '';
  }
  return content.slice(from + start.length, to).trim();
}

// ── Minify HTML ───────────────────────────────────────────────────────────────
function minify(html) {
  return html
    // Remove HTML comments (but keep IE conditionals)
    .replace(/<!--(?!\[if)[\s\S]*?-->/g, '')
    // Collapse whitespace between tags
    .replace(/>\s+</g, '><')
    // Collapse multiple spaces into one
    .replace(/\s{2,}/g, ' ')
    // Remove spaces around = in attributes
    .replace(/\s*=\s*/g, '=')
    // Trim leading/trailing whitespace per line
    .split('\n').map(l => l.trim()).filter(Boolean).join('');
}

// ── Read shell ────────────────────────────────────────────────────────────────
let shell = fs.readFileSync(path.join(srcDir, 'shell.html'), 'utf8');

// ── Read and sort component files ─────────────────────────────────────────────
const files = fs.readdirSync(compDir)
  .filter(f => f.endsWith('.html'))
  .sort();

if (files.length === 0) {
  console.error('No component files found in assessment-src/components/');
  process.exit(1);
}

let navItems     = '';
let summaryCards = '';
let summaryRows  = '';
let sections     = '';

for (const file of files) {
  const content = fs.readFileSync(path.join(compDir, file), 'utf8');
  console.log(`  + ${file}`);
  navItems     += extract(content, 'nav')          + '\n';
  summaryCards += extract(content, 'summary-card') + '\n';
  summaryRows  += extract(content, 'summary-row')  + '\n';
  sections     += extract(content, 'section')      + '\n\n';
}

// ── Inject into shell ─────────────────────────────────────────────────────────
shell = shell
  .replace('<!-- @@NAV_ITEMS@@ -->',          navItems.trimEnd())
  .replace('<!-- @@SUMMARY_CARDS@@ -->',       summaryCards.trimEnd())
  .replace('<!-- @@SUMMARY_ROWS@@ -->',        summaryRows.trimEnd())
  .replace('<!-- @@COMPONENT_SECTIONS@@ -->', sections.trimEnd());

// ── Minify & write output ─────────────────────────────────────────────────────
const original   = Buffer.byteLength(shell, 'utf8');
const minified   = minify(shell);
const compressed = Buffer.byteLength(minified, 'utf8');
const saving     = (((original - compressed) / original) * 100).toFixed(1);

fs.writeFileSync(outFile, minified, 'utf8');

// ── Copy & minify styles.css ──────────────────────────────────────────────────
const cssSource = fs.readFileSync(path.join(srcDir, 'styles.css'), 'utf8');
const cssMinified = cssSource
  .replace(/\/\*[\s\S]*?\*\//g, '')   // remove comments
  .replace(/\s{2,}/g, ' ')            // collapse whitespace
  .replace(/\s*([{}:;,>~+])\s*/g, '$1') // remove spaces around symbols
  .trim();
const cssOriginal   = Buffer.byteLength(cssSource,    'utf8');
const cssCompressed = Buffer.byteLength(cssMinified,  'utf8');
const cssSaving     = (((cssOriginal - cssCompressed) / cssOriginal) * 100).toFixed(1);
fs.writeFileSync(cssFile, cssMinified, 'utf8');

console.log(`\nBuilt → ${outFile}`);
console.log(`  HTML  Original:  ${(original     / 1024).toFixed(1)} KB`);
console.log(`  HTML  Minified:  ${(compressed   / 1024).toFixed(1)} KB  (saved ${saving}%) ✅`);
console.log(`  CSS   Original:  ${(cssOriginal  / 1024).toFixed(1)} KB`);
console.log(`  CSS   Minified:  ${(cssCompressed/ 1024).toFixed(1)} KB  (saved ${cssSaving}%) ✅`);

// ── Sync assessment guide ─────────────────────────────────────────────────────
const { syncGuide } = require('./sync-guide.js');
console.log('\nSyncing assessment guide...');
syncGuide();
