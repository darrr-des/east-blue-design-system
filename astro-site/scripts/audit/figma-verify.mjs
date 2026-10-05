#!/usr/bin/env node
/**
 * figma-verify.mjs — read a Figma node over REST and resolve its bound variables
 * against src/data/tokens.json. Read-only: it never writes to Figma or the repo.
 *
 *   node scripts/audit/figma-verify.mjs <fileKey> <nodeId> [--scope spacing|colors|radius|elevation|all] [--json out.json]
 *
 *   spacing    padding L/R/T/B, itemSpacing and counterAxisSpacing on every auto-layout frame
 *   colors     every visible solid fill and stroke, on every layer
 *   radius     corner radius on every layer that draws one or binds one
 *   elevation  x, y, blur, spread and colour of every visible drop and inner shadow
 *
 * Every field is reported as one of:
 *   token   bound to a variable that tokens.json names; the drawn value matches it in some mode
 *   drift   bound, but the drawn value differs from the token in every mode
 *   unknown bound to a variable tokens.json does not hold (another library)
 *   raw     not bound: a typed value
 * A token from a collection whose name starts `.IGNORE_` is flagged: the library marks those
 * as not for use.
 *
 * FIGMA_ACCESS_TOKEN is read from astro-site/.env and never printed.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');

const args = process.argv.slice(2);
const flag = (name) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
};
const positional = args.filter((a, i) => !a.startsWith('--') && !(i > 0 && args[i - 1].startsWith('--')));
const [fileKey, rawNode] = positional;
if (!fileKey || !rawNode) {
  console.error('usage: node scripts/audit/figma-verify.mjs <fileKey> <nodeId> [--scope spacing|colors|radius|elevation|all] [--json out.json]');
  process.exit(1);
}
const nodeId = rawNode.replace('-', ':');
const scope = flag('scope') ?? 'all';
const SCOPES = ['spacing', 'colors', 'radius', 'elevation'];
if (![...SCOPES, 'all'].includes(scope)) {
  console.error(`unknown scope "${scope}" — ${SCOPES.join(', ')} or all`);
  process.exit(1);
}
const want = (s) => scope === 'all' || scope === s;

// ── token ─────────────────────────────────────────────────────────────
const envPath = path.join(root, '.env');
const env = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf8') : '';
const tok = (env.match(/^FIGMA_ACCESS_TOKEN\s*=\s*(.+)$/m)?.[1] ?? process.env.FIGMA_ACCESS_TOKEN ?? '')
  .trim()
  .replace(/^["']|["']$/g, '');
if (!tok) {
  console.error('FIGMA_ACCESS_TOKEN is not set in astro-site/.env');
  process.exit(1);
}

// ── token database ────────────────────────────────────────────────────
const db = JSON.parse(fs.readFileSync(path.join(root, 'src/data/tokens.json'), 'utf8'));
const byKey = new Map(db.tokens.map((t) => [t.key, t]));
const byId = new Map(db.tokens.map((t) => [t.id, t]));

/** A bound id is `VariableID:<key>/<localId>` from a library, or `VariableID:<id>` in the defining file. */
function lookup(boundId) {
  const bare = boundId.replace(/^VariableID:/, '');
  const m = bare.match(/^([0-9a-f]{40})\//);
  return m ? byKey.get(m[1]) : byId.get(bare);
}

// ── read ──────────────────────────────────────────────────────────────
const url = `https://api.figma.com/v1/files/${fileKey}/nodes?ids=${encodeURIComponent(nodeId)}`;
const res = await fetch(url, { headers: { 'X-Figma-Token': tok } });
const body = await res.json();
if (!res.ok || body.err) {
  console.error(`Figma REST ${res.status}: ${body.err ?? body.message ?? 'request failed'}`);
  process.exit(1);
}
const entry = body.nodes?.[nodeId];
if (!entry) {
  console.error(`node ${nodeId} not found in ${fileKey}`);
  process.exit(1);
}

// ── compare ───────────────────────────────────────────────────────────
const hex = ({ r, g, b }) =>
  '#' + [r, g, b].map((x) => Math.round(x * 255).toString(16).padStart(2, '0')).join('').toUpperCase();
const round = (n) => Math.round(n * 100) / 100;
const sameColor = (a, b) => a && b && a.hex === b.hex && Math.abs(a.alpha - b.alpha) < 0.01;
const sameValue = (a, b) => (a && typeof a === 'object' ? sameColor(a, b) : a === b);
const show = (v) => (v && typeof v === 'object' ? `${v.hex}${v.alpha < 1 ? ` @${Math.round(v.alpha * 100)}%` : ''}` : String(v));

/** Classify one drawn value against its binding (or lack of one). */
function classify(row, drawn, bound) {
  row.value = drawn;
  if (!bound) return Object.assign(row, { status: 'raw' });
  row.boundId = bound.id;
  const t = lookup(bound.id);
  if (!t) return Object.assign(row, { status: 'unknown' });
  row.token = t.name;
  row.collection = t.collection;
  if (t.collection.startsWith('.IGNORE_')) row.ignored = true;
  const modes = Object.entries(t.values).map(([mode, v]) => ({ mode, value: v.value }));
  row.tokenValues = Object.fromEntries(modes.map((m) => [m.mode, m.value]));
  const matched = modes.filter((m) => sameValue(m.value, drawn)).map((m) => m.mode);
  row.status = matched.length ? 'token' : 'drift';
  if (matched.length) row.mode = matched.join(', ');
  // A value can match while the token is from the wrong family — a spacing token on a radius.
  const family = { spacing: /space/, radius: /radius/, elevation: /elevation|shadow/ }[row.scope];
  if (family && !family.test(t.name)) row.misfamily = true;
  // Colours: a component binds the semantic role, which aliases the palette. Record the
  // primitive underneath, and flag a paint bound straight to the palette.
  if (row.scope === 'colors') {
    if (t.collection === 'Color Semantics') row.primitive = t.values['East Blue']?.alias ?? null;
    else if (t.collection === '.Color Primitives') row.paletteDirect = true;
  }
  return row;
}

const SPACING = [
  ['paddingLeft', 'Padding L'],
  ['paddingRight', 'Padding R'],
  ['paddingTop', 'Padding T'],
  ['paddingBottom', 'Padding B'],
  ['itemSpacing', 'Gap'],
  ['counterAxisSpacing', 'Gap (wrap)'],
];

const rows = [];
// `inBoolean`: under a BOOLEAN_OPERATION only the operation's own paint renders —
// its children's fills and strokes never draw, so they are not read as colours.
function walk(n, variant, trail, inBoolean = false) {
  if (n.visible === false) return;
  const inVariant = n.type === 'COMPONENT' ? n.name : variant;
  const layerPath = n.type === 'COMPONENT' || n.type === 'COMPONENT_SET' ? [] : [...trail, n.name];
  const layer = n.type === 'COMPONENT' ? '(variant root)' : layerPath.join(' › ') || n.name;
  const base = { node: n.id, variant: inVariant, layer, type: n.type };

  if (want('spacing') && n.layoutMode && n.layoutMode !== 'NONE') {
    const shown = (n.children ?? []).filter((c) => c.visible !== false).length;
    for (const [field, label] of SPACING) {
      if (field === 'counterAxisSpacing' && n.layoutWrap !== 'WRAP') continue;
      const row = classify({ ...base, scope: 'spacing', field, label, children: shown }, n[field] ?? 0, n.boundVariables?.[field]);
      // A gap only draws between two visible children.
      if (row.status === 'raw' && field === 'itemSpacing' && shown < 2) row.inert = true;
      rows.push(row);
    }
  }

  // The set's own frame carries Figma's purple dashed outline — not part of the component.
  if (want('colors') && n.type !== 'COMPONENT_SET' && !inBoolean) {
    for (const [field, label] of [['fills', n.type === 'TEXT' ? 'Text' : 'Fill'], ['strokes', 'Stroke']]) {
      if (field === 'strokes' && !(n.strokeWeight > 0 || n.individualStrokeWeights)) continue;
      for (const p of n[field] ?? []) {
        if (p.visible === false || p.type !== 'SOLID') continue;
        // A bound translucent variable arrives as color.a = 1 with the alpha on paint.opacity:
        // what draws is the product of the two.
        const drawn = { hex: hex(p.color), alpha: round((p.color.a ?? 1) * (p.opacity ?? 1)) };
        const row = classify({ ...base, scope: 'colors', field, label }, drawn, p.boundVariables?.color);
        if (p.opacity !== undefined && p.opacity < 1) row.paintOpacity = round(p.opacity);
        rows.push(row);
      }
    }
  }

  if (want('radius') && n.type !== 'COMPONENT_SET') {
    // Corners in Figma's order. A uniform radius reports as one row; mixed corners, one row each.
    const radii = n.rectangleCornerRadii ?? (n.cornerRadius !== undefined ? [0, 1, 2, 3].map(() => n.cornerRadius) : null);
    const bv = n.boundVariables ?? {};
    const corners = [
      ['topLeftRadius', 'RECTANGLE_TOP_LEFT_CORNER_RADIUS', 'Radius TL'],
      ['topRightRadius', 'RECTANGLE_TOP_RIGHT_CORNER_RADIUS', 'Radius TR'],
      ['bottomRightRadius', 'RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS', 'Radius BR'],
      ['bottomLeftRadius', 'RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS', 'Radius BL'],
    ].map(([plain, rect, label], i) => ({ label, drawn: radii?.[i] ?? 0, bound: bv[plain] ?? bv.rectangleCornerRadii?.[rect] }));
    const anyBound = corners.some((c) => c.bound);
    const anyDrawn = corners.some((c) => c.drawn > 0);
    if (anyBound || anyDrawn) {
      const same = corners.every((c) => c.drawn === corners[0].drawn && c.bound?.id === corners[0].bound?.id);
      for (const c of same ? [{ ...corners[0], label: 'Radius' }] : corners) {
        rows.push(classify({ ...base, scope: 'radius', field: 'cornerRadius', label: c.label }, c.drawn, c.bound));
      }
    }
  }

  if (want('elevation') && n.type !== 'COMPONENT_SET') {
    // Shadows: every visible drop or inner shadow, field by field. An effect style is recorded
    // by name when the node uses one; the fields are still checked against their variables.
    const effectStyle = n.styles?.effect ? { id: n.styles.effect, name: entry.styles?.[n.styles.effect]?.name ?? null } : null;
    (n.effects ?? []).forEach((e, i) => {
      if (e.visible === false || !/SHADOW/.test(e.type)) return;
      const tag = `${e.type === 'INNER_SHADOW' ? 'Inner' : 'Shadow'} ${i + 1}`;
      const fields = [
        ['offsetX', 'x', e.offset?.x ?? 0],
        ['offsetY', 'y', e.offset?.y ?? 0],
        ['radius', 'blur', e.radius ?? 0],
        ['spread', 'spread', e.spread ?? 0],
        ['color', 'color', e.color ? { hex: hex(e.color), alpha: round(e.color.a ?? 1) } : null],
      ];
      for (const [key, label, drawn] of fields) {
        const row = classify({ ...base, scope: 'elevation', field: key, label: `${tag} ${label}` }, drawn, e.boundVariables?.[key]);
        if (effectStyle) row.effectStyle = effectStyle;
        rows.push(row);
      }
    });
  }

  for (const c of n.children ?? []) walk(c, inVariant, layerPath, inBoolean || n.type === 'BOOLEAN_OPERATION');
}
walk(entry.document, null, []);

// ── report ────────────────────────────────────────────────────────────
const count = (s) => rows.filter((r) => r.status === s).length;
console.log(`${entry.document.type} ${JSON.stringify(entry.document.name)} · ${fileKey} ${nodeId}`);
console.log(`tokens.json: ${db.tokens.length} tokens from ${db.source.file}, dumped ${db.source.dumpDate}`);
const inert = rows.filter((r) => r.inert).length;
const ignored = rows.filter((r) => r.ignored).length;
console.log(
  `${scope} · ${rows.length} fields · token ${count('token')} · drift ${count('drift')} · unknown ${count('unknown')} · raw ${count('raw')}` +
    (inert ? ` (${inert} inert gaps)` : '') +
    (ignored ? ` · ${ignored} bound to an .IGNORE_ collection` : '') +
    (rows.some((r) => r.paletteDirect) ? ` · ${rows.filter((r) => r.paletteDirect).length} bound straight to the palette` : '') +
    (rows.some((r) => r.misfamily) ? ` · ${rows.filter((r) => r.misfamily).length} bound to a token from another family` : '') +
    '\n',
);

// One line per distinct (scope, layer, field, value, binding): variants repeat the same layers.
const seen = new Map();
for (const r of rows) {
  const k = [r.scope, r.layer, r.label, show(r.value), r.paintOpacity ?? '', r.token ?? r.boundId ?? 'raw', r.status, r.inert ? r.children : '', r.effectStyle?.id ?? ''].join('|');
  const s = seen.get(k) ?? { ...r, n: 0, variants: new Set() };
  s.n++;
  if (r.variant) s.variants.add(r.variant);
  seen.set(k, s);
}
const order = { drift: 0, unknown: 1, raw: 2, token: 3 };
const lines = [...seen.values()].sort(
  (a, b) => a.scope.localeCompare(b.scope) || order[a.status] - order[b.status] || a.layer.localeCompare(b.layer) || a.label.localeCompare(b.label),
);
let lastScope = '';
for (const r of lines) {
  if (r.scope !== lastScope) {
    console.log(`── ${r.scope}`);
    lastScope = r.scope;
  }
  const what =
    r.status === 'token' ? `${r.token}${r.ignored ? `  ⚠ ${r.collection}` : ''}${r.misfamily ? `  ⚠ not a ${r.scope} token` : ''}${r.primitive ? ` → ${r.primitive}` : ''}${r.paletteDirect ? '  ⚠ bound to the palette, not a semantic role' : ''}`
    : r.status === 'drift' ? `${r.token} is ${Object.entries(r.tokenValues).map(([m, v]) => `${m} ${show(v)}`).join(' · ')}`
    : r.status === 'unknown' ? `bound to ${r.boundId} — not in tokens.json`
    : r.inert ? `not bound · inert, ${r.children} visible child${r.children === 1 ? '' : 'ren'}`
    : 'not bound';
  const style = r.effectStyle ? `  · effect style ${r.effectStyle.name ?? r.effectStyle.id}` : '';
  const val = show(r.value);
  console.log(`${r.status.padEnd(7)} ${r.layer.slice(-64).padEnd(64)} ${r.label.padEnd(9)} ${val.padStart(14)}  ${what}${style}  ×${r.n}`);
}

const out = flag('json');
if (out) {
  fs.writeFileSync(out, JSON.stringify({ fileKey, nodeId, scope, rows }, null, 2));
  console.log(`\nfull rows → ${out}`);
}
