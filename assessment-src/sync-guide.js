/**
 * Guide Sync Script
 * Reads component files from assessment-src/components/ and auto-updates
 * the assessment guide markdown with:
 *   1. Assessment Progress table
 *   2. Open Issues across all components
 *   3. Discovered Patterns (new anti-patterns found during assessments)
 *
 * Usage:
 *   node assessment-src/sync-guide.js           (standalone)
 *   Called automatically by build.js after build
 *
 * Each component file can include these optional blocks:
 *
 *   <!--@meta-start-->
 *   status: re-assessing          (in-progress | complete | re-assessing)
 *   node: 16830:2025
 *   ds-verdict: fix               (keep | fix | restructure | consolidate | product-layer | remove)
 *   native-status: refine         (ready | refine | rework | na)
 *   variants: 8
 *   ios: DisclosureGroup
 *   android: AnimatedVisibility
 *   <!--@meta-end-->
 *
 *   <!--@patterns-start-->
 *   [C2] Description of the pattern found
 *   [C1] Another pattern
 *   <!--@patterns-end-->
 *
 * If no @meta block exists, the script infers data from other tagged blocks.
 */

const fs   = require('fs');
const path = require('path');

const srcDir    = __dirname;
const compDir   = path.join(srcDir, 'components');
const guideFile = path.join(srcDir, '..', 'gcash-ds-assessment-guide.md');

// ── Helpers ───────────────────────────────────────────────────────────────────

function extract(content, tag) {
  const start = `<!--@${tag}-start-->`;
  const end   = `<!--@${tag}-end-->`;
  const from  = content.indexOf(start);
  const to    = content.indexOf(end);
  if (from === -1 || to === -1) return '';
  return content.slice(from + start.length, to).trim();
}

function stripHtml(html) {
  return html
    .replace(/<code>/g, '`').replace(/<\/code>/g, '`')
    .replace(/<strong>/g, '**').replace(/<\/strong>/g, '**')
    .replace(/<s>/g, '~~').replace(/<\/s>/g, '~~')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .trim();
}

function titleCase(str) {
  return str.replace(/\b\w/g, c => c.toUpperCase());
}

// ── Parse meta block ──────────────────────────────────────────────────────────

function parseMeta(content) {
  const raw = extract(content, 'meta');
  if (!raw) return null;

  const meta = {};
  for (const line of raw.split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const val = line.slice(idx + 1).trim();
    meta[key] = val;
  }
  return meta;
}

// ── Infer data from HTML blocks when no meta ──────────────────────────────────

function inferFromHtml(content) {
  const meta = {};

  // Component name from summary-card-name
  const nameMatch = content.match(/summary-card-name[^>]*>([^<]+)/);
  meta.name = nameMatch ? nameMatch[1].trim() : 'Unknown';

  // Node from component-meta
  const nodeMatch = content.match(/Node:\s*<code>([^<]+)<\/code>/);
  meta.node = nodeMatch ? nodeMatch[1].trim() : '—';

  // Variants from component-meta
  const varMatch = content.match(/Variants:\s*(\d+)/);
  meta.variants = varMatch ? varMatch[1] : '—';

  // DS verdict from summary-row badge
  const summaryRow = extract(content, 'summary-row');
  const dsMatch = summaryRow.match(/badge-(\w+)[^>]*>([^<]+)/);
  meta['ds-verdict'] = dsMatch ? dsMatch[1] : '—';
  meta['ds-verdict-label'] = dsMatch ? dsMatch[2].trim() : '—';

  // Native status from summary-row (second badge)
  const badges = [...summaryRow.matchAll(/badge-(\w+)[^>]*>([^<]+)/g)];
  if (badges.length >= 2) {
    meta['native-status'] = badges[1][1];
    meta['native-status-label'] = badges[1][2].trim();
  }

  // iOS / Android from component-meta
  const iosMatch = content.match(/iOS:\s*<code>([^<]+)<\/code>/);
  meta.ios = iosMatch ? iosMatch[1].trim() : '—';
  const androidMatch = content.match(/Android:\s*<code>([^<]+)<\/code>/);
  meta.android = androidMatch ? androidMatch[1].trim() : '—';

  // Status inference
  if (content.includes('v2 Post-Fix') || content.includes('tag-fixed')) {
    meta.status = 're-assessing';
  } else if (content.includes('badge-ready') && content.includes('Action Items')) {
    meta.status = 'complete';
  } else {
    meta.status = 'in-progress';
  }

  // Key finding from summary-row last <td>
  const findingMatch = summaryRow.match(/<td class="muted">(?:(?!<td).)*$/s);
  meta.finding = findingMatch ? stripHtml(findingMatch[0]) : '';

  return meta;
}

// ── Parse action items ────────────────────────────────────────────────────────

function parseActionItems(content, componentName) {
  const items = [];
  // Match action item rows: <td class="mono">C5</td><td>..action..</td><td>..status badge..</td>
  const section = content.slice(content.indexOf('Action Items'));
  if (!section) return items;

  const rows = [...section.matchAll(/<tr(?:\s[^>]*)?>[\s\S]*?<\/tr>/g)];
  for (const row of rows) {
    const html = row[0];
    // Skip header rows
    if (html.includes('<th')) continue;

    // Extract criterion
    const critMatch = html.match(/<td class="mono">(C[\d/]+)<\/td>/);
    if (!critMatch) continue;

    // Extract action text
    const tds = [...html.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)];
    if (tds.length < 4) continue;

    const criterion = critMatch[1];
    const action = stripHtml(tds[2][1]);
    const isDone = html.includes('Done') || html.includes('badge-ready');
    const statusText = isDone ? '✅ Done' : 'Open';

    items.push({
      component: componentName,
      criterion,
      action,
      status: statusText,
      done: isDone
    });
  }

  return items;
}

// ── Parse patterns ────────────────────────────────────────────────────────────

function parsePatterns(content, componentName) {
  const raw = extract(content, 'patterns');
  if (!raw) return [];

  const patterns = [];
  for (const line of raw.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Parse [C2] Description format
    const match = trimmed.match(/^\[([^\]]+)\]\s*(.+)$/);
    if (match) {
      patterns.push({
        criterion: match[1],
        description: match[2].trim(),
        source: componentName
      });
    }
  }
  return patterns;
}

// ── Status formatting ─────────────────────────────────────────────────────────

const STATUS_EMOJI = {
  'in-progress':  '🟡 In Progress',
  'complete':     '🟢 Complete',
  're-assessing': '🔁 Re-assessing'
};

const VERDICT_MAP = {
  'keep': 'Keep', 'fix': 'Fix', 'restructure': 'Restructure',
  'consolidate': 'Consolidate', 'product-layer': 'Product Layer', 'remove': 'Remove'
};

const NATIVE_MAP = {
  'ready': 'Ready', 'refine': 'Needs Refinement',
  'rework': 'Requires Rework', 'na': 'Not Applicable'
};

// ── Build the notes string ────────────────────────────────────────────────────

function buildNotes(actionItems) {
  const done = actionItems.filter(i => i.done);
  const open = actionItems.filter(i => !i.done);

  const parts = [];
  if (done.length > 0) {
    const criteria = [...new Set(done.map(i => i.criterion))].join(', ');
    parts.push(`Fixed: ${criteria}`);
  }
  if (open.length > 0) {
    const criteria = [...new Set(open.map(i => i.criterion))].join(', ');
    parts.push(`Open: ${criteria}`);
  }
  return parts.join('. ') || '—';
}

// ── Main ──────────────────────────────────────────────────────────────────────

function syncGuide() {
  if (!fs.existsSync(guideFile)) {
    console.warn('  ⚠  Guide file not found, skipping sync');
    return;
  }

  if (!fs.existsSync(compDir)) {
    console.warn('  ⚠  Components directory not found, skipping sync');
    return;
  }

  const files = fs.readdirSync(compDir).filter(f => f.endsWith('.html')).sort();

  if (files.length === 0) {
    console.warn('  ⚠  No component files found, skipping sync');
    return;
  }

  const allComponents = [];
  const allActionItems = [];
  const allPatterns = [];

  for (const file of files) {
    const content = fs.readFileSync(path.join(compDir, file), 'utf8');
    const baseName = path.basename(file, '.html');
    const displayName = titleCase(baseName.replace(/-/g, ' '));

    // Parse meta (explicit or inferred)
    const explicitMeta = parseMeta(content);
    const inferredMeta = inferFromHtml(content);

    const meta = {
      name:         explicitMeta?.name || inferredMeta.name || displayName,
      node:         explicitMeta?.node || inferredMeta.node || '—',
      dsVerdict:    VERDICT_MAP[explicitMeta?.['ds-verdict']] || inferredMeta['ds-verdict-label'] || '—',
      nativeStatus: NATIVE_MAP[explicitMeta?.['native-status']] || inferredMeta['native-status-label'] || '—',
      status:       STATUS_EMOJI[explicitMeta?.status] || STATUS_EMOJI[inferredMeta.status] || '🟡 In Progress',
      variants:     explicitMeta?.variants || inferredMeta.variants || '—',
    };

    // Override name from inferred if explicit doesn't have it
    if (!explicitMeta?.name) meta.name = displayName;

    // Parse action items
    const actions = parseActionItems(content, meta.name);
    allActionItems.push(...actions);

    // Build notes from action items
    meta.notes = buildNotes(actions) || inferredMeta.finding || '—';

    allComponents.push(meta);

    // Parse patterns
    const patterns = parsePatterns(content, meta.name);
    allPatterns.push(...patterns);

    console.log(`  ↻ ${file} → ${meta.name} (${meta.status})`);
  }

  // ── Generate MD content ─────────────────────────────────────────────────

  // Progress table
  let progressTable = '| Component | Node | DS Verdict | Native Status | Status | Notes |\n';
  progressTable    += '|---|---|---|---|---|---|\n';
  for (const c of allComponents) {
    progressTable += `| ${c.name} | \`${c.node}\` | ${c.dsVerdict} | ${c.nativeStatus} | ${c.status} | ${c.notes} |\n`;
  }

  // Open issues table
  const openItems = allActionItems.filter(i => !i.done);
  let issuesTable = '| Component | Criterion | Action | Status |\n';
  issuesTable    += '|---|---|---|---|\n';
  if (openItems.length === 0) {
    issuesTable += '| — | — | No open issues | — |\n';
  } else {
    for (const item of openItems) {
      // Escape pipe characters in action text
      const safeAction = item.action.replace(/\|/g, '\\|');
      issuesTable += `| ${item.component} | ${item.criterion} | ${safeAction} | ${item.status} |\n`;
    }
  }

  // Discovered patterns table
  // Deduplicate by description similarity
  const seenPatterns = new Set();
  const uniquePatterns = [];
  for (const p of allPatterns) {
    const key = `${p.criterion}:${p.description.toLowerCase().slice(0, 60)}`;
    if (!seenPatterns.has(key)) {
      seenPatterns.add(key);
      uniquePatterns.push(p);
    }
  }

  let patternsTable = '| Criterion | Pattern | First Found In |\n';
  patternsTable    += '|---|---|---|\n';
  if (uniquePatterns.length === 0) {
    patternsTable += '| — | No new patterns discovered yet | — |\n';
  } else {
    for (const p of uniquePatterns) {
      const safeDesc = p.description.replace(/\|/g, '\\|');
      patternsTable += `| ${p.criterion} | ${safeDesc} | ${p.source} |\n`;
    }
  }

  // ── Inject into MD ──────────────────────────────────────────────────────

  let guide = fs.readFileSync(guideFile, 'utf8');

  // Replace progress table
  guide = guide.replace(
    /<!-- @@PROGRESS_TABLE@@ -->[\s\S]*?<!-- @@PROGRESS_TABLE_END@@ -->/,
    `<!-- @@PROGRESS_TABLE@@ -->\n${progressTable.trimEnd()}\n<!-- @@PROGRESS_TABLE_END@@ -->`
  );

  // Replace open issues
  guide = guide.replace(
    /<!-- @@OPEN_ISSUES@@ -->[\s\S]*?<!-- @@OPEN_ISSUES_END@@ -->/,
    `<!-- @@OPEN_ISSUES@@ -->\n${issuesTable.trimEnd()}\n<!-- @@OPEN_ISSUES_END@@ -->`
  );

  // Replace discovered patterns
  guide = guide.replace(
    /<!-- @@DISCOVERED_PATTERNS@@ -->[\s\S]*?<!-- @@DISCOVERED_PATTERNS_END@@ -->/,
    `<!-- @@DISCOVERED_PATTERNS@@ -->\n${patternsTable.trimEnd()}\n<!-- @@DISCOVERED_PATTERNS_END@@ -->`
  );

  fs.writeFileSync(guideFile, guide, 'utf8');

  // ── Summary ─────────────────────────────────────────────────────────────
  const complete = allComponents.filter(c => c.status.includes('Complete')).length;
  const inProg   = allComponents.filter(c => c.status.includes('Progress')).length;
  const reAssess = allComponents.filter(c => c.status.includes('Re-assessing')).length;

  console.log(`\nGuide synced → ${guideFile}`);
  console.log(`  Components:  ${allComponents.length} total (${complete} complete, ${inProg} in progress, ${reAssess} re-assessing)`);
  console.log(`  Open issues: ${openItems.length}`);
  console.log(`  Patterns:    ${uniquePatterns.length} unique`);
}

// ── Export & CLI ──────────────────────────────────────────────────────────────

module.exports = { syncGuide };

if (require.main === module) {
  console.log('Syncing assessment guide...\n');
  syncGuide();
}
