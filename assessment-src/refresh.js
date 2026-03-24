#!/usr/bin/env node
/**
 * Figma Component Refresh Script
 *
 * Fetches live component data from Figma REST API and auto-updates
 * the component HTML file + validation.json, then rebuilds the report.
 *
 * Usage:
 *   node assessment-src/refresh.js --component button
 *   node assessment-src/refresh.js --all
 *   node assessment-src/refresh.js --component button --dry-run
 *
 * Requires .env file with:
 *   FIGMA_TOKEN=your_personal_access_token
 *   FIGMA_FILE_KEY=your_figma_file_key
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const ENV_PATH = path.join(ROOT, '.env');
const VALIDATION_PATH = path.join(__dirname, 'validation.json');
const COMPONENTS_DIR = path.join(__dirname, 'components');

// ── Load .env ───────────────────────────────────────────────────
function loadEnv() {
  if (!fs.existsSync(ENV_PATH)) {
    console.error('❌ Missing .env file.');
    process.exit(1);
  }
  const env = {};
  fs.readFileSync(ENV_PATH, 'utf8').split('\n').forEach(line => {
    const m = line.match(/^(\w+)=(.+)$/);
    if (m) env[m[1]] = m[2].trim();
  });
  if (!env.FIGMA_TOKEN || !env.FIGMA_FILE_KEY) {
    console.error('❌ .env must contain FIGMA_TOKEN and FIGMA_FILE_KEY');
    process.exit(1);
  }
  return env;
}

// ── Figma REST API ──────────────────────────────────────────────
function figmaGet(endpoint, token) {
  return new Promise((resolve, reject) => {
    https.get({
      hostname: 'api.figma.com',
      path: endpoint,
      headers: { 'X-Figma-Token': token }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode !== 200) return reject(new Error(`API ${res.statusCode}: ${data.slice(0, 200)}`));
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

// ── Parse variant names ─────────────────────────────────────────
function parseVariantName(name) {
  const props = {};
  name.split(',').forEach(s => {
    const [k, v] = s.trim().split('=').map(x => x.trim());
    if (k && v) props[k] = v;
  });
  return props;
}

// ── Extract live state from Figma node ──────────────────────────
function extractLiveState(node) {
  const children = node.children || [];
  const variantCount = children.length;

  // Extract properties and values
  const propMap = {};
  children.forEach(child => {
    const parsed = parseVariantName(child.name);
    Object.entries(parsed).forEach(([k, v]) => {
      if (!propMap[k]) propMap[k] = new Set();
      propMap[k].add(v);
    });
  });

  const properties = {};
  Object.entries(propMap).forEach(([k, vals]) => {
    properties[k] = Array.from(vals).sort();
  });

  // Extract sizes (look for Size=X variants)
  const sizes = {};
  const sizeValues = propMap['Size'] ? Array.from(propMap['Size']) : [];
  sizeValues.forEach(sizeName => {
    const variant = children.find(c =>
      c.name.includes(`Size=${sizeName}`) &&
      c.name.includes('State=Default')
    );
    if (variant && variant.absoluteBoundingBox) {
      sizes[sizeName] = { height: Math.round(variant.absoluteBoundingBox.height) };
    }
  });

  // Extract colors from first Filled+Default variant's container
  const colors = {};
  const filledDefault = children.find(c => c.name.includes('Style=Filled') && c.name.includes('State=Default'));
  const filledPressed = children.find(c => c.name.includes('Style=Filled') && c.name.includes('State=Pressed'));
  const filledDisabled = children.find(c => c.name.includes('Style=Filled') && c.name.includes('State=Disabled'));

  function extractFill(variant) {
    if (!variant || !variant.children) return null;
    const container = variant.children.find(c => c.name === 'container');
    if (!container || !container.fills || !container.fills.length) return null;
    const fill = container.fills[0];
    if (!fill.color) return null;
    return rgbToHex(fill.color.r, fill.color.g, fill.color.b);
  }

  function extractLabelColor(variant) {
    if (!variant || !variant.children) return null;
    const container = variant.children.find(c => c.name === 'container');
    if (!container || !container.children) return null;
    const label = container.children.find(c => c.name === '#label');
    if (!label || !label.fills || !label.fills.length) return null;
    const fill = label.fills[0];
    if (!fill.color) return null;
    return rgbToHex(fill.color.r, fill.color.g, fill.color.b);
  }

  colors.containerFill = extractFill(filledDefault);
  colors.containerFillPressed = extractFill(filledPressed);
  colors.containerFillDisabled = extractFill(filledDisabled);
  colors.labelColor = extractLabelColor(filledDefault);

  // Extract font info from first variant label
  let typography = null;
  if (filledDefault && filledDefault.children) {
    const container = filledDefault.children.find(c => c.name === 'container');
    if (container && container.children) {
      const label = container.children.find(c => c.name === '#label');
      if (label && label.style) {
        typography = {
          fontFamily: label.style.fontFamily,
          fontWeight: label.style.fontWeight,
          fontSize: label.style.fontSize,
          letterSpacing: label.style.letterSpacing
        };
      }
    }
  }

  return { variantCount, properties, sizes, colors, typography, nodeName: node.name };
}

// ── Fetch screenshot from Figma ─────────────────────────────────
function fetchScreenshot(fileKey, nodeId, token) {
  return figmaGet(`/v1/images/${fileKey}?ids=${encodeURIComponent(nodeId)}&format=png&scale=2`, token)
    .then(data => {
      if (data.images && data.images[nodeId]) return data.images[nodeId];
      return null;
    });
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    proto.get(url, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      }
      const ws = fs.createWriteStream(filepath);
      res.pipe(ws);
      ws.on('finish', () => { ws.close(); resolve(filepath); });
      ws.on('error', reject);
    }).on('error', reject);
  });
}

function rgbToHex(r, g, b) {
  const toHex = v => Math.round(v * 255).toString(16).padStart(2, '0').toUpperCase();
  return '#' + toHex(r) + toHex(g) + toHex(b);
}

// ── Update component HTML file ──────────────────────────────────
function updateComponentHtml(componentKey, liveState, expected, dryRun) {
  const htmlPath = path.join(COMPONENTS_DIR, `${componentKey}.html`);
  if (!fs.existsSync(htmlPath)) {
    console.log(`  ⚠️  No HTML file found: ${htmlPath}`);
    return { changes: [], skipped: true };
  }

  let html = fs.readFileSync(htmlPath, 'utf8');
  const changes = [];

  // Update variants count in meta block
  const metaMatch = html.match(/<!--@meta-start-->([\s\S]*?)<!--@meta-end-->/);
  if (metaMatch) {
    let meta = metaMatch[1];
    const variantsMatch = meta.match(/variants:\s*(\d+)/);
    if (variantsMatch) {
      const oldCount = parseInt(variantsMatch[1]);
      if (oldCount !== liveState.variantCount) {
        changes.push({ field: 'variants', old: oldCount, new: liveState.variantCount });
        meta = meta.replace(/variants:\s*\d+/, `variants: ${liveState.variantCount}`);
        html = html.replace(metaMatch[0], `<!--@meta-start-->${meta}<!--@meta-end-->`);
      }
    }
  }

  // Update variant count in summary card
  const summaryDescRegex = /(\d+)\s+variants/g;
  let summaryMatch;
  while ((summaryMatch = summaryDescRegex.exec(html)) !== null) {
    const oldCount = parseInt(summaryMatch[1]);
    if (oldCount !== liveState.variantCount && oldCount === (expected.expectedVariants || 0)) {
      html = html.replace(
        new RegExp(`${oldCount}\\s+variants`, 'g'),
        `${liveState.variantCount} variants`
      );
      if (!changes.find(c => c.field === 'variants')) {
        changes.push({ field: 'variants (text)', old: oldCount, new: liveState.variantCount });
      }
    }
  }

  // Update <strong>Variants:</strong> X
  const variantsStrongRegex = /<strong>Variants:<\/strong>\s*(\d+)/;
  const vsMatch = html.match(variantsStrongRegex);
  if (vsMatch) {
    const oldCount = parseInt(vsMatch[1]);
    if (oldCount !== liveState.variantCount) {
      html = html.replace(variantsStrongRegex, `<strong>Variants:</strong> ${liveState.variantCount}`);
    }
  }

  if (!dryRun && changes.length > 0) {
    fs.writeFileSync(htmlPath, html, 'utf8');
  }

  return { changes, skipped: false };
}

// ── Update validation.json ──────────────────────────────────────
function updateValidationJson(componentKey, liveState, dryRun) {
  const validation = JSON.parse(fs.readFileSync(VALIDATION_PATH, 'utf8'));
  const comp = validation.components[componentKey];
  if (!comp) return [];

  const changes = [];

  if (comp.expectedVariants !== liveState.variantCount) {
    changes.push({ field: 'expectedVariants', old: comp.expectedVariants, new: liveState.variantCount });
    comp.expectedVariants = liveState.variantCount;
  }

  // Update properties
  Object.entries(liveState.properties).forEach(([prop, values]) => {
    const oldVals = comp.expectedProperties ? comp.expectedProperties[prop] : undefined;
    if (!oldVals || JSON.stringify(oldVals.sort()) !== JSON.stringify(values.sort())) {
      changes.push({ field: `property:${prop}`, old: oldVals || '(none)', new: values });
      if (!comp.expectedProperties) comp.expectedProperties = {};
      comp.expectedProperties[prop] = values;
    }
  });

  // Check for removed properties
  if (comp.expectedProperties) {
    Object.keys(comp.expectedProperties).forEach(prop => {
      if (!liveState.properties[prop]) {
        changes.push({ field: `property:${prop}`, old: comp.expectedProperties[prop], new: '(removed)' });
        delete comp.expectedProperties[prop];
      }
    });
  }

  // Update sizes
  Object.entries(liveState.sizes).forEach(([sizeName, sizeData]) => {
    const oldSize = comp.expectedSizes ? comp.expectedSizes[sizeName] : undefined;
    if (!oldSize || oldSize.height !== sizeData.height) {
      changes.push({ field: `size:${sizeName}`, old: oldSize ? `${oldSize.height}px` : '(none)', new: `${sizeData.height}px` });
      if (!comp.expectedSizes) comp.expectedSizes = {};
      comp.expectedSizes[sizeName] = sizeData;
    }
  });

  if (!dryRun && changes.length > 0) {
    fs.writeFileSync(VALIDATION_PATH, JSON.stringify(validation, null, 2) + '\n', 'utf8');
  }

  return changes;
}

// ── Main ────────────────────────────────────────────────────────
async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const all = args.includes('--all');
  const compIdx = args.indexOf('--component');
  const targetComp = compIdx !== -1 ? args[compIdx + 1] : null;

  if (!all && !targetComp) {
    console.error('Usage: node assessment-src/refresh.js --component <name>');
    console.error('       node assessment-src/refresh.js --all');
    console.error('       Add --dry-run to preview changes without writing');
    process.exit(1);
  }

  const env = loadEnv();
  const validation = JSON.parse(fs.readFileSync(VALIDATION_PATH, 'utf8'));

  const components = all
    ? validation.components
    : { [targetComp]: validation.components[targetComp] };

  if (targetComp && !components[targetComp]) {
    console.error(`❌ Unknown component: ${targetComp}`);
    console.error(`   Available: ${Object.keys(validation.components).join(', ')}`);
    process.exit(1);
  }

  console.log('');
  console.log('╔══════════════════════════════════════════════╗');
  console.log('║   East Blue DS — Component Refresh           ║');
  console.log('╚══════════════════════════════════════════════╝');
  console.log('');
  if (dryRun) console.log('  🔍 DRY RUN — no files will be modified\n');

  const nodeIds = Object.values(components).map(c => c.nodeId).join(',');
  console.log('  Fetching from Figma API...');

  try {
    const data = await figmaGet(
      `/v1/files/${env.FIGMA_FILE_KEY}/nodes?ids=${encodeURIComponent(nodeIds)}&depth=4`,
      env.FIGMA_TOKEN
    );

    let totalChanges = 0;

    for (const [key, expected] of Object.entries(components)) {
      const nodeData = data.nodes[expected.nodeId];
      const node = nodeData ? nodeData.document : null;

      console.log(`\n  ┌─ ${expected.name} ─────────────────────────────`);

      if (!node) {
        console.log(`  │ ❌ Node ${expected.nodeId} not found`);
        console.log(`  └─ Skipped`);
        continue;
      }

      const liveState = extractLiveState(node);
      console.log(`  │ 📊 Live: ${liveState.variantCount} variants, properties: ${Object.keys(liveState.properties).join(', ') || '(none)'}`);

      // Log extracted colors
      if (liveState.colors.containerFill) {
        console.log(`  │ 🎨 Colors: fill=${liveState.colors.containerFill}, pressed=${liveState.colors.containerFillPressed}, disabled=${liveState.colors.containerFillDisabled}, label=${liveState.colors.labelColor}`);
      }
      if (liveState.typography) {
        console.log(`  │ 🔤 Font: ${liveState.typography.fontFamily} ${liveState.typography.fontWeight}, ${liveState.typography.fontSize}px`);
      }

      // Fetch screenshot
      if (!dryRun) {
        console.log(`  │ 📸 Fetching screenshot...`);
        try {
          const imgUrl = await fetchScreenshot(env.FIGMA_FILE_KEY, expected.nodeId, env.FIGMA_TOKEN);
          if (imgUrl) {
            const imgDir = path.join(ROOT, 'assets', 'previews');
            if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });
            const imgPath = path.join(imgDir, `${key}.png`);
            await downloadImage(imgUrl, imgPath);
            console.log(`  │ ✅ Screenshot saved: assets/previews/${key}.png`);
          }
        } catch (imgErr) {
          console.log(`  │ ⚠️  Screenshot failed: ${imgErr.message}`);
        }
      }

      // Update validation.json
      const valChanges = updateValidationJson(key, liveState, dryRun);

      // Update component HTML
      const { changes: htmlChanges, skipped } = updateComponentHtml(key, liveState, expected, dryRun);

      const allChanges = [...valChanges, ...htmlChanges];
      totalChanges += allChanges.length;

      if (allChanges.length === 0) {
        console.log('  │ ✅ No changes — assessment matches Figma');
      } else {
        allChanges.forEach(c => {
          console.log(`  │ 🔄 ${c.field}: ${JSON.stringify(c.old)} → ${JSON.stringify(c.new)}`);
        });
      }

      if (skipped) {
        console.log('  │ ⚠️  No HTML file — validation.json only');
      }

      console.log(`  └─ ${allChanges.length} change${allChanges.length !== 1 ? 's' : ''}`);
    }

    console.log('\n  ──────────────────────────────────────────────');

    if (totalChanges === 0) {
      console.log('  ✅ Everything up to date. No changes needed.');
    } else if (dryRun) {
      console.log(`  🔍 ${totalChanges} change${totalChanges !== 1 ? 's' : ''} found (dry run — no files modified)`);
      console.log('  Run without --dry-run to apply changes.');
    } else {
      console.log(`  ✏️  ${totalChanges} change${totalChanges !== 1 ? 's' : ''} applied.`);
      console.log('');
      console.log('  Rebuilding report...');
      try {
        execSync('node assessment-src/build.js', { cwd: ROOT, stdio: 'pipe' });
        console.log('  ✅ Report rebuilt successfully.');
      } catch (e) {
        console.error('  ❌ Build failed:', e.message);
      }
    }

    console.log('');

  } catch (err) {
    console.error(`\n  ❌ Error: ${err.message}\n`);
    process.exit(1);
  }
}

// Export for server.js usage
module.exports = { main, loadEnv, figmaGet, extractLiveState, updateValidationJson, updateComponentHtml, fetchScreenshot, downloadImage };

// Run directly if called from CLI
if (require.main === module) main();
