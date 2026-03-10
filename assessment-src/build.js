/**
 * Assessment Build Script
 * Assembles gcash-native-readiness-assessment.html from:
 *   - assessment-src/shell.html       (shared layout, CSS, JS)
 *   - assessment-src/components/*.html (one file per component)
 *
 * Usage: node assessment-src/build.js
 *
 * Each component file must contain four tagged blocks:
 *   <!--@nav-start-->         ... nav sidebar item ...      <!--@nav-end-->
 *   <!--@summary-card-start--> ... summary card ...         <!--@summary-card-end-->
 *   <!--@summary-row-start-->  ... summary table <tr> ...   <!--@summary-row-end-->
 *   <!--@section-start-->      ... full component section ... <!--@section-end-->
 */

const fs   = require('fs');
const path = require('path');

const srcDir  = __dirname;
const outFile = path.join(srcDir, '..', 'index.html');
const compDir = path.join(srcDir, 'components');

// ── Extract a tagged block from file content ─────────────────────────────────
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

let navItems   = '';
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

// ── Write output ──────────────────────────────────────────────────────────────
fs.writeFileSync(outFile, shell, 'utf8');
console.log(`\nBuilt → ${outFile}`);
