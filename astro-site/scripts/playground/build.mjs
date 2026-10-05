#!/usr/bin/env node
/**
 * Playground data builder — one component set → public/playground/<slug>.json.
 *
 *   node scripts/playground/build.mjs <slug> <fileKey> <componentSetId>
 *
 * Reads a component set over the Figma REST API and writes
 * public/playground/<slug>.json: every variant as a layer tree —
 * geometry, auto layout, radius, paints, text and effects — with each bound
 * variable resolved through src/data/tokens.json. Icons and other vector art are
 * exported from Figma as SVG, never redrawn. Nothing is typed in by hand.
 */
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
const argv = process.argv.slice(2);
// --out <dir> writes somewhere other than public/playground. drift.mjs --deep
// uses it to re-read a component into a temp dir and compare hashes without
// touching what the site serves.
const outFlag = argv.indexOf('--out');
const outOverride = outFlag >= 0 ? argv[outFlag + 1] : null;
const [slug, fileKey, rawSet] = argv.filter((a, i) => a !== '--out' && !(outFlag >= 0 && i === outFlag + 1));
if (!slug || !fileKey || !rawSet) {
  console.error('usage: node scripts/playground/build.mjs <slug> <fileKey> <componentSetId> [--out <dir>]');
  process.exit(1);
}
const setId = rawSet.replace('-', ':');

const env = fs.readFileSync(path.join(root, '.env'), 'utf8');
const tok = (env.match(/^FIGMA_ACCESS_TOKEN\s*=\s*(.+)$/m)?.[1] ?? '').trim().replace(/^["']|["']$/g, '');
if (!tok) throw new Error('FIGMA_ACCESS_TOKEN missing from astro-site/.env');
const H = { headers: { 'X-Figma-Token': tok } };
const api = async (url) => {
  const r = await fetch(`https://api.figma.com/v1${url}`, H);
  const j = await r.json();
  if (!r.ok || j.err) throw new Error(`Figma REST ${r.status}: ${j.err ?? j.message}`);
  return j;
};

// ── tokens ────────────────────────────────────────────────────────────
const db = JSON.parse(fs.readFileSync(path.join(root, 'src/data/tokens.json'), 'utf8'));
const byKey = new Map(db.tokens.map((t) => [t.key, t]));
const byId = new Map(db.tokens.map((t) => [t.id, t]));
function token(bound) {
  const b = Array.isArray(bound) ? bound[0] : bound;
  if (!b?.id) return null;
  const bare = b.id.replace(/^VariableID:/, '');
  const m = bare.match(/^([0-9a-f]{40})\//);
  const t = m ? byKey.get(m[1]) : byId.get(bare);
  if (!t) return { name: null, unknown: b.id };
  const out = { name: t.name, collection: t.collection };
  const eb = t.values['East Blue'];
  if (t.collection === 'Color Semantics' && eb?.alias) out.primitive = eb.alias;
  return out;
}

// ── read ──────────────────────────────────────────────────────────────
const res = await api(`/files/${fileKey}/nodes?ids=${encodeURIComponent(setId)}`);
const entry = res.nodes[setId];
const set = entry.document;
const styleName = (id) => (id ? entry.styles?.[id]?.name ?? null : null);

const hex = ({ r, g, b }) => '#' + [r, g, b].map((x) => Math.round(x * 255).toString(16).padStart(2, '0')).join('').toUpperCase();
const round = (n, p = 2) => Math.round(n * 10 ** p) / 10 ** p;
const VECTORISH = new Set(['VECTOR', 'BOOLEAN_OPERATION', 'ELLIPSE', 'STAR', 'LINE', 'POLYGON', 'REGULAR_POLYGON']);
const shown = (n) => n.visible !== false;

function paints(list, bv) {
  return (list ?? [])
    .filter((p) => shown(p) && p.type === 'SOLID')
    .map((p) => ({
      hex: hex(p.color),
      // A bound translucent variable arrives as color.a = 1 with the alpha on paint.opacity.
      alpha: round((p.color.a ?? 1) * (p.opacity ?? 1)),
      token: token(p.boundVariables?.color),
    }));
}

const hasText = (n) => n.type === 'TEXT' || (n.children ?? []).some((c) => shown(c) && hasText(c));
const hasVector = (n) => VECTORISH.has(n.type) || (n.children ?? []).some((c) => shown(c) && hasVector(c));
const isAutoLayout = (n) => n.layoutMode && n.layoutMode !== 'NONE';
/** Vector art: draw it from Figma's own SVG export instead of rebuilding it. */
const isGraphic = (n) => VECTORISH.has(n.type) || (!isAutoLayout(n) && !hasText(n) && hasVector(n) && n.type !== 'COMPONENT');

/** Every paint a graphic draws, from its visible layers (children of a boolean never draw). */
function graphicPaints(n, inBoolean = false, out = [], top = true) {
  if (!shown(n) && !top) return out;
  if (!inBoolean) out.push(...paints(n.fills), ...(n.strokeWeight > 0 ? paints(n.strokes) : []).map((p) => ({ ...p, stroke: true })));
  for (const c of n.children ?? []) graphicPaints(c, inBoolean || n.type === 'BOOLEAN_OPERATION', out, false);
  return out;
}

// Only the set's OWN boolean properties can be toggled in the Playground. A hidden layer tied
// to a nested instance's property (a Select Item's supporting text, a badge inside a row) is
// off in this component and stays out.
const ownProps = new Set(Object.keys(set.componentPropertyDefinitions ?? {}));
const svgIds = [];
const pngIds = [];
/** A photo or logo placed as an image fill — Figma renders it, we cannot rebuild it. */
const hasImageFill = (n) => (n.fills ?? []).some((p) => p.visible !== false && p.type === 'IMAGE');
/** A plain ellipse or rectangle: solid paints only, so CSS can draw it — and a hidden layer
 *  can be drawn at all, which Figma's export refuses to do. */
const isSimpleShape = (n) =>
  (n.type === 'ELLIPSE' || n.type === 'RECTANGLE') &&
  !hasImageFill(n) &&
  [...(n.fills ?? []), ...(n.strokes ?? [])].every((p) => p.visible === false || p.type === 'SOLID') &&
  // A full circle is startingAngle 0 → endingAngle 2π; anything else is a pie or ring.
  !(n.arcData && (n.arcData.startingAngle || n.arcData.endingAngle < 6.283 || n.arcData.innerRadius));
function build(n, parentBox) {
  const bb = n.absoluteBoundingBox;
  const bv = n.boundVariables ?? {};
  const node = {
    id: n.id,
    name: n.name,
    type: n.type,
    x: round(bb.x - parentBox.x),
    y: round(bb.y - parentBox.y),
    w: round(bb.width),
    h: round(bb.height),
  };
  if (n.opacity !== undefined && n.opacity < 1) node.opacity = round(n.opacity);
  if (n.clipsContent) node.clip = true;
  const visibleProp = n.componentPropertyReferences?.visible;
  if (visibleProp && ownProps.has(visibleProp)) node.visibleProp = visibleProp;
  // A text layer whose content is a TEXT property of the set (Count, Limit, Label…).
  const textProp = n.componentPropertyReferences?.characters;
  if (textProp && ownProps.has(textProp)) node.textProp = textProp;

  // Corner radius, per corner, with its variable.
  // A radius of 0 leaves cornerRadius out of the REST read even when it is bound
  // (radius/radius-0), so a binding alone is enough to record the corners.
  const rc = bv.rectangleCornerRadii ?? {};
  const radiusBound = ['topLeftRadius', 'topRightRadius', 'bottomRightRadius', 'bottomLeftRadius'].some((k) => bv[k]) || Object.keys(rc).length > 0;
  const radii = n.rectangleCornerRadii ?? (n.cornerRadius !== undefined ? [n.cornerRadius, n.cornerRadius, n.cornerRadius, n.cornerRadius] : radiusBound ? [0, 0, 0, 0] : null);
  if (radii) {
    node.radius = radii.map(round);
    node.radiusTokens = [
      token(bv.topLeftRadius ?? rc.RECTANGLE_TOP_LEFT_CORNER_RADIUS),
      token(bv.topRightRadius ?? rc.RECTANGLE_TOP_RIGHT_CORNER_RADIUS),
      token(bv.bottomRightRadius ?? rc.RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS),
      token(bv.bottomLeftRadius ?? rc.RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS),
    ];
  }

  if (isAutoLayout(n)) {
    node.layout = {
      mode: n.layoutMode,
      padding: [n.paddingTop ?? 0, n.paddingRight ?? 0, n.paddingBottom ?? 0, n.paddingLeft ?? 0].map(round),
      paddingTokens: [token(bv.paddingTop), token(bv.paddingRight), token(bv.paddingBottom), token(bv.paddingLeft)],
      gap: round(n.itemSpacing ?? 0),
      gapToken: token(bv.itemSpacing),
      primary: n.primaryAxisAlignItems ?? 'MIN',
      counter: n.counterAxisAlignItems ?? 'MIN',
      sizingH: n.layoutSizingHorizontal ?? null,
      sizingV: n.layoutSizingVertical ?? null,
      wrap: n.layoutWrap === 'WRAP',
    };
  }
  // Min/max sizes set on the frame in Figma ("Add min width", "Add max height", …).
  for (const k of ['minWidth', 'maxWidth', 'minHeight', 'maxHeight']) if (n[k] != null) (node.limits ??= {})[k] = round(n[k]);
  // "Ignore auto layout": the layer keeps its x/y inside an auto-layout parent.
  if (n.layoutPositioning === 'ABSOLUTE') node.positioning = 'ABSOLUTE';
  if (n.layoutSizingHorizontal) node.sizingH = n.layoutSizingHorizontal;
  if (n.layoutSizingVertical) node.sizingV = n.layoutSizingVertical;

  if (n.type === 'TEXT') {
    const s = n.style ?? {};
    node.text = {
      chars: n.characters,
      style: styleName(n.styles?.text),
      family: s.fontFamily,
      weight: s.fontWeight,
      italic: !!s.italic,
      size: s.fontSize,
      lineHeight: round(s.lineHeightPx ?? s.fontSize * 1.2),
      letterSpacing: round(s.letterSpacing ?? 0, 3),
      // WIDTH_AND_HEIGHT = auto width (never wraps) · HEIGHT = fixed width, wraps · NONE = fixed box.
      autoResize: s.textAutoResize ?? 'NONE',
      align: s.textAlignHorizontal ?? 'LEFT',
      alignV: s.textAlignVertical ?? 'TOP',
      case: s.textCase ?? null,
      decoration: s.textDecoration ?? null,
      tokens: {
        size: token(bv.fontSize),
        lineHeight: token(bv.lineHeight),
        letterSpacing: token(bv.letterSpacing),
        family: token(bv.fontFamily),
        weight: token(bv.fontStyle ?? bv.fontWeight),
      },
    };
    node.fills = paints(n.fills);
    // One text layer can carry several styles — a link in another colour, a bold word.
    // Figma gives a style id per character plus a table of what each id overrides.
    const over = n.characterStyleOverrides ?? [];
    if (over.some((id) => id)) {
      const tbl = n.styleOverrideTable ?? {};
      const runs = [];
      for (let i = 0; i < n.characters.length; i++) {
        const id = over[i] ?? 0;
        if (!runs.length || runs[runs.length - 1].id !== id) runs.push({ id, text: '' });
        runs[runs.length - 1].text += n.characters[i];
      }
      node.text.segments = runs.map((r) => {
        const o = tbl[r.id] ?? {};
        const seg = { text: r.text };
        if (o.fills) seg.fills = paints(o.fills);
        if (o.fontWeight) seg.weight = o.fontWeight;
        if (o.fontSize) seg.size = o.fontSize;
        if (o.lineHeightPx) seg.lineHeight = round(o.lineHeightPx);
        if (o.letterSpacing != null) seg.letterSpacing = round(o.letterSpacing, 3);
        if (o.fontFamily) seg.family = o.fontFamily;
        if (o.textDecoration) seg.decoration = o.textDecoration;
        if (o.textCase) seg.case = o.textCase;
        if (o.italic != null) seg.italic = !!o.italic;
        return seg;
      });
    }
    return node;
  }

  if (hasImageFill(n)) {
    node.graphic = true;
    node.image = true;
    node.paints = graphicPaints(n).filter((p) => p.hex);
    pngIds.push(n.id);
    return node;
  }

  if (isGraphic(n) && !isSimpleShape(n)) {
    node.graphic = true;
    node.paints = graphicPaints(n);
    // A stroked path draws outside its box — Figma reports a line as 313 × 0. Keep the
    // drawn bounds so the artwork is shown at the size Figma renders it.
    const rb = n.absoluteRenderBounds;
    if (rb && (Math.abs(rb.width - bb.width) > 0.5 || Math.abs(rb.height - bb.height) > 0.5)) {
      node.render = { x: round(rb.x - bb.x), y: round(rb.y - bb.y), w: round(rb.width), h: round(rb.height) };
    }
    svgIds.push(n.id);
    return node;
  }

  if (n.type === 'ELLIPSE') node.ellipse = true;
  node.fills = paints(n.fills);
  const sw = n.individualStrokeWeights
    ? [n.individualStrokeWeights.top, n.individualStrokeWeights.right, n.individualStrokeWeights.bottom, n.individualStrokeWeights.left]
    : [n.strokeWeight ?? 0, n.strokeWeight ?? 0, n.strokeWeight ?? 0, n.strokeWeight ?? 0];
  const strokes = paints(n.strokes);
  if (strokes.length && sw.some((w) => w > 0)) {
    node.strokes = strokes;
    node.strokeWeights = sw.map(round);
    node.strokeAlign = n.strokeAlign ?? 'INSIDE';
    if (n.strokeDashes?.length) node.strokeDashes = n.strokeDashes.map((v) => round(v));
    node.strokeWeightToken = token(bv.strokeWeight);
    // "Include strokes in layout": the border takes space, so the content sits inside it.
    if (n.strokesIncludedInLayout) node.strokesInLayout = true;
  }
  const fx = (n.effects ?? []).filter((e) => shown(e) && /SHADOW/.test(e.type));
  if (fx.length) {
    node.effects = fx.map((e) => ({
      inner: e.type === 'INNER_SHADOW',
      x: e.offset?.x ?? 0,
      y: e.offset?.y ?? 0,
      blur: e.radius ?? 0,
      spread: e.spread ?? 0,
      hex: hex(e.color),
      alpha: round(e.color.a ?? 1),
    }));
    if (n.styles?.effect) node.effectStyle = styleName(n.styles.effect);
  }

  // Keep a hidden child only when a boolean property can switch it on.
  node.children = (n.children ?? [])
    .filter((c) => shown(c) || ownProps.has(c.componentPropertyReferences?.visible))
    .map((c) => {
      const child = build(c, bb);
      if (!shown(c)) child.hidden = true;
      return child;
    });
  return node;
}

// ── properties → controls ────────────────────────────────────────────
const defs = set.componentPropertyDefinitions ?? {};
const properties = Object.entries(defs)
  .filter(([, d]) => d.type === 'VARIANT' || d.type === 'BOOLEAN' || d.type === 'TEXT')
  .map(([key, d]) => {
    const name = key.replace(/#.*$/, '');
    if (d.type === 'BOOLEAN') return { name, key, kind: 'boolean', default: d.defaultValue };
    if (d.type === 'TEXT') return { name, key, kind: 'text', default: d.defaultValue };
    const opts = d.variantOptions;
    const bool = opts.length === 2 && opts.every((o) => /^(true|false)$/i.test(o));
    return { name, key, kind: bool ? 'toggle' : 'select', options: opts, default: d.defaultValue };
  });

// A set has one child per variant; a lone component is simply its own single variant.
const variantNodes = set.type === 'COMPONENT_SET' ? set.children.filter((c) => c.type === 'COMPONENT') : [set];
const variants = variantNodes
  .map((v) => ({
    id: v.id,
    name: v.name,
    props: set.type === 'COMPONENT_SET' ? Object.fromEntries(v.name.split(',').map((kv) => kv.split('=').map((s) => s.trim()))) : {},
    tree: build(v, v.absoluteBoundingBox),
  }))
  // The boolean and text properties this variant's layers are bound to. Figma's
  // instance panel lists only these: Counter's hasOverflow shows with hasLimit off,
  // its Limit with hasLimit on.
  .map((v) => {
    const uses = new Set();
    const walk = (n) => { if (n.visibleProp) uses.add(n.visibleProp); if (n.textProp) uses.add(n.textProp); (n.children ?? []).forEach(walk); };
    walk(v.tree);
    return { ...v, uses: [...uses] };
  });

// ── SVGs, exported by Figma ──────────────────────────────────────────
const svgs = [];
const svgIndex = new Map();
for (let i = 0; i < svgIds.length; i += 40) {
  const batch = svgIds.slice(i, i + 40);
  const img = await api(`/images/${fileKey}?ids=${encodeURIComponent(batch.join(','))}&format=svg&svg_outline_text=false`);
  for (const id of batch) {
    const url = img.images?.[id];
    if (!url) continue;
    const svg = await (await fetch(url)).text();
    if (!svgIndex.has(svg)) {
      svgIndex.set(svg, svgs.length);
      svgs.push(svg);
    }
    svgIndex.set(id, svgIndex.get(svg));
  }
}
// Image fills, at 2× so they stay sharp.
const images = [];
const imgIndex = new Map();
for (let i = 0; i < pngIds.length; i += 40) {
  const batch = pngIds.slice(i, i + 40);
  const img = await api(`/images/${fileKey}?ids=${encodeURIComponent(batch.join(','))}&format=png&scale=2`);
  for (const id of batch) {
    const url = img.images?.[id];
    if (!url) continue;
    const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
    const uri = `data:image/png;base64,${buf.toString('base64')}`;
    if (!imgIndex.has(uri)) {
      imgIndex.set(uri, images.length);
      images.push(uri);
    }
    imgIndex.set(id, imgIndex.get(uri));
  }
}

const attach = (n) => {
  if (n.image) n.img = imgIndex.get(n.id) ?? null;
  else if (n.graphic) n.svg = svgIndex.get(n.id) ?? null;
  (n.children ?? []).forEach(attach);
};
variants.forEach((v) => attach(v.tree));

const out = {
  meta: {
    slug,
    name: set.name,
    fileKey,
    setId,
    read: new Date().toISOString().slice(0, 10),
    tokens: `${db.source.file}, dumped ${db.source.dumpDate}`,
    // Provenance, so drift.mjs can tell a stale build from a current one without
    // re-reading the whole component. `version` and `lastModified` are the file's,
    // not the node's: Figma has no per-node version, so a change anywhere in the
    // file moves them. They answer "might this be stale", and the hash below
    // answers "did our own output actually change".
    figma: { version: res.version, lastModified: res.lastModified },
  },
  properties,
  variants,
  svgs,
  images,
};
// The layer data is a build artifact the page fetches at runtime, not a module
// it inlines: 25 components inline is ~2.5MB of HTML. It lives in public/ so
// Astro copies it verbatim and the browser can ask for one component's file.
const outDir = outOverride ? path.resolve(outOverride) : path.join(root, 'public/playground');
fs.mkdirSync(outDir, { recursive: true });
const file = path.join(outDir, `${slug}.json`);
// Hash the payload only — everything the page draws — so `read` moving on a
// rebuild is not itself a change. drift.mjs re-hashes the same four keys.
out.meta.hash = createHash('sha256')
  .update(JSON.stringify({ properties: out.properties, variants: out.variants, svgs: out.svgs, images: out.images }))
  .digest('hex')
  .slice(0, 16);
fs.writeFileSync(file, JSON.stringify(out));
const count = (n) => 1 + (n.children ?? []).reduce((s, c) => s + count(c), 0);
console.log(`${set.name}: ${variants.length} variants · ${variants.reduce((s, v) => s + count(v.tree), 0)} layers · ${svgs.length} distinct SVGs · ${images.length} images · ${properties.map((p) => `${p.name} (${p.kind})`).join(', ')}`);
console.log(`→ ${path.relative(root, file)} · ${fs.statSync(file).size} bytes`);
