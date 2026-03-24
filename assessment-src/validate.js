#!/usr/bin/env node
/**
 * Figma Component Validation Script (Option A)
 *
 * Fetches live component data from Figma REST API and compares
 * against expected state defined in validation.json.
 *
 * Usage:
 *   node assessment-src/validate.js
 *   node assessment-src/validate.js --component button
 *   node assessment-src/validate.js --json
 *
 * Requires .env file with:
 *   FIGMA_TOKEN=your_personal_access_token
 *   FIGMA_FILE_KEY=your_figma_file_key
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// ── Config ──────────────────────────────────────────────────────
const ROOT = path.resolve(__dirname, '..');
const ENV_PATH = path.join(ROOT, '.env');
const VALIDATION_PATH = path.join(__dirname, 'validation.json');

// ── Load .env ───────────────────────────────────────────────────
function loadEnv() {
  if (!fs.existsSync(ENV_PATH)) {
    console.error('❌ Missing .env file. Create it with FIGMA_TOKEN and FIGMA_FILE_KEY.');
    process.exit(1);
  }
  const lines = fs.readFileSync(ENV_PATH, 'utf8').split('\n');
  const env = {};
  for (const line of lines) {
    const match = line.match(/^(\w+)=(.+)$/);
    if (match) env[match[1]] = match[2].trim();
  }
  if (!env.FIGMA_TOKEN || !env.FIGMA_FILE_KEY) {
    console.error('❌ .env must contain FIGMA_TOKEN and FIGMA_FILE_KEY');
    process.exit(1);
  }
  return env;
}

// ── Figma REST API ──────────────────────────────────────────────
function figmaGet(endpoint, token) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.figma.com',
      path: endpoint,
      headers: { 'X-Figma-Token': token }
    };
    https.get(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`Figma API ${res.statusCode}: ${data.slice(0, 200)}`));
          return;
        }
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(new Error('Failed to parse Figma response')); }
      });
    }).on('error', reject);
  });
}

// ── Helpers ─────────────────────────────────────────────────────
function rgbToHex(r, g, b) {
  const toHex = v => Math.round(v * 255).toString(16).padStart(2, '0').toUpperCase();
  return '#' + toHex(r) + toHex(g) + toHex(b);
}

function parseVariantName(name) {
  const props = {};
  const pairs = name.split(',').map(s => s.trim());
  for (const pair of pairs) {
    const [key, val] = pair.split('=').map(s => s.trim());
    if (key && val) props[key] = val;
  }
  return props;
}

// ── Validation checks ───────────────────────────────────────────
function validateComponent(componentName, expected, figmaNode) {
  const results = [];
  const node = figmaNode;

  // Check 1: Node exists
  if (!node) {
    results.push({ check: 'Node exists', status: 'fail', message: `Node ${expected.nodeId} not found in Figma file` });
    return results;
  }
  results.push({ check: 'Node exists', status: 'pass', message: `Found "${node.name}" (${node.type})` });

  // Check 2: Component set type
  if (node.type !== 'COMPONENT_SET') {
    results.push({ check: 'Component type', status: 'fail', message: `Expected COMPONENT_SET, got ${node.type}` });
    return results;
  }
  results.push({ check: 'Component type', status: 'pass', message: 'COMPONENT_SET confirmed' });

  // Check 3: Variant count
  const children = node.children || [];
  const actualCount = children.length;
  if (actualCount !== expected.expectedVariants) {
    results.push({
      check: 'Variant count',
      status: actualCount > expected.expectedVariants ? 'warn' : 'fail',
      message: `Expected ${expected.expectedVariants}, found ${actualCount}`
    });
  } else {
    results.push({ check: 'Variant count', status: 'pass', message: `${actualCount} variants confirmed` });
  }

  // Check 4: Property names and values
  if (expected.expectedProperties && Object.keys(expected.expectedProperties).length > 0) {
    const propMap = {};
    for (const child of children) {
      const parsed = parseVariantName(child.name);
      for (const [key, val] of Object.entries(parsed)) {
        if (!propMap[key]) propMap[key] = new Set();
        propMap[key].add(val);
      }
    }

    for (const [propName, expectedValues] of Object.entries(expected.expectedProperties)) {
      if (!propMap[propName]) {
        results.push({ check: `Property: ${propName}`, status: 'fail', message: `Property "${propName}" not found in variant names` });
      } else {
        const actualValues = Array.from(propMap[propName]).sort();
        const expValues = [...expectedValues].sort();
        const missing = expValues.filter(v => !actualValues.includes(v));
        const extra = actualValues.filter(v => !expValues.includes(v));

        if (missing.length > 0) {
          results.push({ check: `Property: ${propName}`, status: 'fail', message: `Missing values: ${missing.join(', ')}` });
        } else if (extra.length > 0) {
          results.push({ check: `Property: ${propName}`, status: 'warn', message: `Extra values: ${extra.join(', ')}` });
        } else {
          results.push({ check: `Property: ${propName}`, status: 'pass', message: `Values match: ${actualValues.join(', ')}` });
        }
      }
    }
  }

  // Check 5: Layer naming (no generic names)
  const badNames = [];
  function walkNames(n, depth) {
    if (depth > 3) return;
    const name = n.name || '';
    if (/^(Frame|Group|Rectangle|Ellipse)\s+\d+$/i.test(name)) {
      badNames.push(name);
    }
    if (n.children) n.children.forEach(c => walkNames(c, depth + 1));
  }
  children.slice(0, 3).forEach(c => walkNames(c, 0)); // sample first 3 variants
  if (badNames.length > 0) {
    results.push({ check: 'Layer naming', status: 'warn', message: `Generic names found: ${badNames.slice(0, 5).join(', ')}` });
  } else {
    results.push({ check: 'Layer naming', status: 'pass', message: 'All sampled layers have semantic names' });
  }

  // Check 6: Sizes (spot-check first variant per size)
  if (expected.expectedSizes && Object.keys(expected.expectedSizes).length > 0) {
    for (const [sizeName, sizeSpec] of Object.entries(expected.expectedSizes)) {
      const sizeVariant = children.find(c => c.name.includes(`Size=${sizeName}`) && c.name.includes('State=Default') && c.name.includes('Style=Filled'));
      if (!sizeVariant) {
        results.push({ check: `Size: ${sizeName}`, status: 'warn', message: `No Default+Filled variant found for Size=${sizeName}` });
        continue;
      }
      const bbox = sizeVariant.absoluteBoundingBox;
      if (bbox) {
        const actualH = Math.round(bbox.height);
        if (actualH !== sizeSpec.height) {
          results.push({ check: `Size: ${sizeName}`, status: 'fail', message: `Height expected ${sizeSpec.height}px, found ${actualH}px` });
        } else {
          results.push({ check: `Size: ${sizeName}`, status: 'pass', message: `Height ${actualH}px confirmed` });
        }
      }
    }
  }

  return results;
}

// ── Main ────────────────────────────────────────────────────────
async function main() {
  const args = process.argv.slice(2);
  const jsonOutput = args.includes('--json');
  const componentFlag = args.indexOf('--component');
  const targetComponent = componentFlag !== -1 ? args[componentFlag + 1] : null;

  const env = loadEnv();
  const validation = JSON.parse(fs.readFileSync(VALIDATION_PATH, 'utf8'));

  // Collect node IDs to fetch
  const components = targetComponent
    ? { [targetComponent]: validation.components[targetComponent] }
    : validation.components;

  if (targetComponent && !components[targetComponent]) {
    console.error(`❌ Unknown component: ${targetComponent}`);
    console.error(`   Available: ${Object.keys(validation.components).join(', ')}`);
    process.exit(1);
  }

  const nodeIds = Object.values(components).map(c => c.nodeId).join(',');

  console.log('');
  console.log('╔══════════════════════════════════════════════╗');
  console.log('║   East Blue DS — Figma Validation            ║');
  console.log('╚══════════════════════════════════════════════╝');
  console.log('');
  console.log(`  File: ${env.FIGMA_FILE_KEY}`);
  console.log(`  Components: ${Object.keys(components).join(', ')}`);
  console.log('');
  console.log('  Fetching from Figma API...');

  try {
    const data = await figmaGet(
      `/v1/files/${env.FIGMA_FILE_KEY}/nodes?ids=${encodeURIComponent(nodeIds)}&depth=4`,
      env.FIGMA_TOKEN
    );

    const allResults = {};
    let totalPass = 0, totalWarn = 0, totalFail = 0;

    for (const [compName, expected] of Object.entries(components)) {
      const nodeData = data.nodes[expected.nodeId];
      const figmaNode = nodeData ? nodeData.document : null;

      const results = validateComponent(compName, expected, figmaNode);
      allResults[compName] = results;

      const pass = results.filter(r => r.status === 'pass').length;
      const warn = results.filter(r => r.status === 'warn').length;
      const fail = results.filter(r => r.status === 'fail').length;
      totalPass += pass;
      totalWarn += warn;
      totalFail += fail;

      if (!jsonOutput) {
        console.log(`  ┌─ ${expected.name} ─────────────────────────────`);
        for (const r of results) {
          const icon = r.status === 'pass' ? '✅' : r.status === 'warn' ? '⚠️ ' : '❌';
          console.log(`  │ ${icon} ${r.check}: ${r.message}`);
        }
        console.log(`  └─ ${pass} pass, ${warn} warn, ${fail} fail`);
        console.log('');
      }
    }

    if (jsonOutput) {
      console.log(JSON.stringify(allResults, null, 2));
    } else {
      console.log('  ──────────────────────────────────────────────');
      const emoji = totalFail > 0 ? '❌' : totalWarn > 0 ? '⚠️ ' : '✅';
      console.log(`  ${emoji} Total: ${totalPass} pass, ${totalWarn} warn, ${totalFail} fail`);
      console.log('');

      if (totalFail > 0) {
        console.log('  Action needed: Some checks failed. Update the component or the assessment.');
      } else if (totalWarn > 0) {
        console.log('  Review warnings: Component may have changed since last assessment.');
      } else {
        console.log('  All checks passed! Assessment matches Figma.');
      }
      console.log('');
    }

    // Write validation result to a temp file for the browser audit to read
    const resultPath = path.join(ROOT, '.validation-result.json');
    fs.writeFileSync(resultPath, JSON.stringify({
      timestamp: new Date().toISOString(),
      results: allResults,
      summary: { pass: totalPass, warn: totalWarn, fail: totalFail }
    }, null, 2));

    process.exit(totalFail > 0 ? 1 : 0);

  } catch (err) {
    console.error(`  ❌ Error: ${err.message}`);
    process.exit(1);
  }
}

main();
