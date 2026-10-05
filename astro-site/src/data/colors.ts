/*
 * East Blue — Color database.
 *
 * Read off the Primitives library with the Talk To Figma plugin (`get_variables`,
 * 2026-09-17) and held in tokens.json, which scripts/tokens/import.mjs generates.
 * This module adds no values of its own: it indexes that file into the two colour
 * layers and follows each alias to its end. Nothing here is derived or invented.
 *
 * ── Why two collections ────────────────────────────────────────────────
 * A colour a component draws is assembled from TWO Figma collections:
 *
 *   .Color Primitives  → the raw palette. 160 colours, one mode, every value a hex.
 *   Color Semantics    → the roles (bg / text / border). 115 tokens, three modes.
 *
 * Components bind to the semantic role, never to the palette: every paint read
 * on the four test components resolves to a Color Semantics token.
 *
 * ── How the two layers connect ─────────────────────────────────────────
 * Color Semantics sits ON TOP of .Color Primitives and consumes it by reference.
 * In the East Blue mode, all 115 semantic tokens are VARIABLE_ALIAS pointers
 * straight into .Color Primitives: none holds a raw hex, and none points at
 * another semantic. So `text/color-text` reads #0A2757 because it aliases
 * `system/slate/slate-10`, and changing slate-10 changes every role built on it.
 * `checkLinks()` re-proves that from the data.
 *
 * The other two modes do not work this way. GreyScale types 112 of its 115
 * values in as raw colours and aliases only 3; Dark Mode is marked
 * "🚫 Don't Use" by the library itself. See EXCLUDED_FROM_DB and OPEN_QUESTIONS.
 *
 * ── Naming a colour from its hex ───────────────────────────────────────
 * No two primitives share a hex, so a primitive can be named from its colour
 * alone (`primitiveForHex`). A SEMANTIC token cannot: 28 primitives sit behind
 * more than one role, so #0A2757 is text/color-text, bg/color-bg-inverse and more.
 * Rule Zero therefore names a semantic token only from the variable a paint is
 * bound to (`resolveColorVariable`), never from the colour it draws.
 */
import tokensJson from './tokens.json';

// ── Shapes ─────────────────────────────────────────────────────────────
export interface ColorValue {
  hex: string;
  /** 0–1, as stored on the variable. */
  alpha: number;
}

interface TokenRecord {
  name: string;
  group: string;
  collection: string;
  type: string;
  id: string;
  key: string;
  values: Record<string, { value: unknown; alias?: string | null; aliasCollection?: string; aliasMode?: string; note?: string }>;
}
const TOKENS = (tokensJson as unknown as { tokens: TokenRecord[]; source: { file: string; dumpDate: string } });

export const SOURCE = TOKENS.source;

const PRIMITIVE_COLLECTION = '.Color Primitives';
const SEMANTIC_COLLECTION = 'Color Semantics';

// ── Layer 1 — .Color Primitives ────────────────────────────────────────
/** `system` = UI hues and alphas · `brand` = the brand palette · `neutral` = the neutral ramp. */
export type PrimitiveFamily = 'system' | 'brand' | 'neutral';

export interface ColorPrimitive {
  /** Full variable name, e.g. `system/slate/slate-10`. */
  name: string;
  family: PrimitiveFamily;
  /** The hue group: `slate`, `blue`, `black`, `teal`… `neutral` for the neutral ramp. */
  hue: string;
  /** The step as named, e.g. `10`, `a10`, `100`. */
  step: string;
  value: ColorValue;
  key: string;
  id: string;
  /** Color Semantics tokens that alias this primitive in the East Blue mode. */
  semantics: string[];
  /** Every other collection that aliases it (elevation, component tokens…). */
  referencedBy: string[];
}

// ── Layer 2 — Color Semantics ──────────────────────────────────────────
/** The Color Semantics modes, with Figma's names. */
export type SemanticMode = 'east-blue' | 'greyscale';

export const SEMANTIC_MODES: Record<SemanticMode, { label: string; note: string }> = {
  'east-blue': {
    label: 'East Blue',
    note: 'The product mode. Every token aliases a primitive.',
  },
  greyscale: {
    label: 'GreyScale',
    note: 'Mid-fidelity wireframes. 112 of 115 values are raw colours, not aliases.',
  },
};

export type SemanticRole = 'bg' | 'text' | 'border';

export interface SemanticValue {
  /** The primitive this mode aliases, or null when the mode holds a raw colour. */
  primitive: string | null;
  value: ColorValue;
}

export interface ColorSemantic {
  /** Full variable name, e.g. `text/color-text`. */
  name: string;
  role: SemanticRole;
  key: string;
  id: string;
  modes: Record<SemanticMode, SemanticValue>;
}

// ── Build both layers from tokens.json ─────────────────────────────────
const isColor = (v: unknown): v is ColorValue =>
  !!v && typeof v === 'object' && 'hex' in (v as object) && 'alpha' in (v as object);

const primitiveRecords = TOKENS.tokens.filter((t) => t.collection === PRIMITIVE_COLLECTION);
const semanticRecords = TOKENS.tokens.filter((t) => t.collection === SEMANTIC_COLLECTION);

const semanticValue = (t: TokenRecord, figmaMode: string): SemanticValue => {
  const cell = t.values[figmaMode];
  if (!cell || !isColor(cell.value)) throw new Error(`${t.name}: no colour in mode ${figmaMode}`);
  const primitive = cell.alias && cell.aliasCollection === PRIMITIVE_COLLECTION ? cell.alias : null;
  return { primitive, value: cell.value };
};

export const COLOR_SEMANTICS: ColorSemantic[] = semanticRecords.map((t) => ({
  name: t.name,
  role: t.group as SemanticRole,
  key: t.key,
  id: t.id,
  modes: {
    'east-blue': semanticValue(t, SEMANTIC_MODES['east-blue'].label),
    greyscale: semanticValue(t, SEMANTIC_MODES.greyscale.label),
  },
}));

const inbound = new Map<string, Set<string>>();
for (const t of TOKENS.tokens) {
  if (t.collection === PRIMITIVE_COLLECTION) continue;
  for (const cell of Object.values(t.values)) {
    if (cell.alias && cell.aliasCollection === PRIMITIVE_COLLECTION) {
      if (!inbound.has(cell.alias)) inbound.set(cell.alias, new Set());
      inbound.get(cell.alias)!.add(t.collection);
    }
  }
}

export const COLOR_PRIMITIVES: ColorPrimitive[] = primitiveRecords.map((t) => {
  const parts = t.name.split('/');
  const cell = Object.values(t.values)[0];
  if (!cell || !isColor(cell.value)) throw new Error(`${t.name}: primitive without a colour`);
  return {
    name: t.name,
    family: parts[0] as PrimitiveFamily,
    hue: parts.length === 3 ? parts[1] : parts[0],
    step: parts[parts.length - 1].replace(`${parts[1]}-`, ''),
    value: cell.value,
    key: t.key,
    id: t.id,
    semantics: COLOR_SEMANTICS.filter((s) => s.modes['east-blue'].primitive === t.name).map((s) => s.name),
    referencedBy: [...(inbound.get(t.name) ?? [])].filter((c) => c !== SEMANTIC_COLLECTION).sort(),
  };
});

// ── Lookups ────────────────────────────────────────────────────────────
const PRIM_BY_NAME = new Map(COLOR_PRIMITIVES.map((p) => [p.name, p]));
const SEM_BY_NAME = new Map(COLOR_SEMANTICS.map((s) => [s.name, s]));
const PRIM_BY_HEX = new Map(COLOR_PRIMITIVES.map((p) => [`${p.value.hex}@${p.value.alpha}`, p]));
const BY_KEY = new Map<string, ColorPrimitive | ColorSemantic>([
  ...COLOR_PRIMITIVES.map((p) => [p.key, p] as const),
  ...COLOR_SEMANTICS.map((s) => [s.key, s] as const),
]);
const BY_ID = new Map<string, ColorPrimitive | ColorSemantic>([
  ...COLOR_PRIMITIVES.map((p) => [p.id, p] as const),
  ...COLOR_SEMANTICS.map((s) => [s.id, s] as const),
]);

export const getPrimitive = (name: string) => PRIM_BY_NAME.get(name);
export const getSemantic = (name: string) => SEM_BY_NAME.get(name);

/**
 * The primitive a colour IS, by exact hex and alpha. Safe because no two
 * primitives share a value. Never use it to name a semantic role.
 */
export const primitiveForHex = (hex: string, alpha = 1) => PRIM_BY_HEX.get(`${hex.toUpperCase()}@${alpha}`);

export interface ResolvedColor {
  layer: 'semantic' | 'primitive';
  /** The token the paint is bound to. */
  token: string;
  /** For a semantic token: the primitive it aliases in the mode asked for (null when raw). */
  primitive: string | null;
  value: ColorValue;
}

/**
 * Resolve a bound variable id as REST reports it — `VariableID:<key>/<localId>`
 * from a library, or `VariableID:<id>` inside the defining file — to its token,
 * and a semantic token on to the primitive underneath.
 */
export function resolveColorVariable(boundId: string, mode: SemanticMode = 'east-blue'): ResolvedColor | undefined {
  const bare = boundId.replace(/^VariableID:/, '');
  const keyed = bare.match(/^([0-9a-f]{40})\//);
  const hit = keyed ? BY_KEY.get(keyed[1]) : BY_ID.get(bare);
  if (!hit) return undefined;
  if ('modes' in hit) {
    const m = hit.modes[mode];
    return { layer: 'semantic', token: hit.name, primitive: m.primitive, value: m.value };
  }
  return { layer: 'primitive', token: hit.name, primitive: hit.name, value: hit.value };
}

// ── Matching a layer reading ───────────────────────────────────────────
export type PaintMatchStatus =
  | 'semantic'   // bound to a Color Semantics token; drawn value matches it
  | 'primitive'  // bound straight to the palette, skipping the semantic layer
  | 'drift'      // bound, but the drawn value differs from the token in the mode asked for
  | 'unknown'    // bound to a variable this database does not hold
  | 'raw';       // not bound: a typed colour

export interface PaintReading {
  /** `boundVariables.color.id` from the REST read, if any. */
  boundId?: string;
  drawn: ColorValue;
}

export interface PaintMatch {
  status: PaintMatchStatus;
  token?: string;
  primitive?: string | null;
  expected?: ColorValue;
  drawn: ColorValue;
}

const same = (a: ColorValue, b: ColorValue) => a.hex === b.hex && Math.abs(a.alpha - b.alpha) < 0.01;

/** Classify one paint the way matchLayer() classifies one text layer. */
export function matchPaint(reading: PaintReading, mode: SemanticMode = 'east-blue'): PaintMatch {
  const { boundId, drawn } = reading;
  if (!boundId) return { status: 'raw', drawn };
  const r = resolveColorVariable(boundId, mode);
  if (!r) return { status: 'unknown', drawn };
  const base = { token: r.token, primitive: r.primitive, expected: r.value, drawn };
  if (!same(r.value, drawn)) return { status: 'drift', ...base };
  return { status: r.layer === 'semantic' ? 'semantic' : 'primitive', ...base };
}

// ── The linkage, re-proved from the data ───────────────────────────────
export interface LinkReport {
  semantics: number;
  /** East Blue tokens that alias a primitive (should equal `semantics`). */
  linked: number;
  /** East Blue tokens that do not — each one is a finding. */
  unlinked: string[];
  greyscaleRaw: number;
  primitivesUsedBySemantics: number;
  /** Primitives nothing in the library references at all. */
  orphanPrimitives: string[];
  /** Alpha primitives whose name disagrees with their stored alpha. */
  alphaMisnamed: { name: string; named: number; stored: number }[];
}

export function checkLinks(): LinkReport {
  const unlinked = COLOR_SEMANTICS.filter((s) => !s.modes['east-blue'].primitive).map((s) => s.name);
  const alphaMisnamed = COLOR_PRIMITIVES.filter((p) => /^a\d+$/.test(p.step))
    .map((p) => ({ name: p.name, named: Number(p.step.slice(1)), stored: Math.round(p.value.alpha * 100) }))
    .filter((a) => a.named !== a.stored);
  return {
    semantics: COLOR_SEMANTICS.length,
    linked: COLOR_SEMANTICS.length - unlinked.length,
    unlinked,
    greyscaleRaw: COLOR_SEMANTICS.filter((s) => !s.modes.greyscale.primitive).length,
    primitivesUsedBySemantics: COLOR_PRIMITIVES.filter((p) => p.semantics.length).length,
    orphanPrimitives: COLOR_PRIMITIVES.filter((p) => !p.semantics.length && !p.referencedBy.length).map((p) => p.name),
    alphaMisnamed,
  };
}

// ── Deliberate exclusions ──────────────────────────────────────────────
/**
 * Variables that exist but are kept out of this database on purpose, so the
 * omission reads as a decision and nobody "completes" the mirror later.
 */
export const EXCLUDED_FROM_DB = [
  {
    collection: 'Color Semantics',
    variables: ["(🚫 Don't Use) Dark Mode"],
    reason:
      'The library marks the mode "Don\'t Use" in its own name. It is also unfinished as a mode: ' +
      '108 of its 115 values are raw colours and only 7 alias a primitive. Its values stay in ' +
      'tokens.json for reference; nothing here resolves to them.',
  },
  {
    collection: '.IGNORE_Legacy Colors',
    variables: ['all 34'],
    reason: 'The library marks the collection .IGNORE_. Kept in tokens.json so a stray binding still resolves and gets flagged.',
  },
] as const;

// ── Gaps to close with the designer ────────────────────────────────────
/**
 * What the data surfaced that is a question for the DS owner, not something to
 * fix or guess at. Figures from checkLinks() on the 2026-09-17 dump.
 */
export const OPEN_QUESTIONS = [
  {
    id: 'alpha-names',
    headline: 'The alpha primitives do not hold the opacity their names state.',
    body: '22 of the 24 system/black and system/white alpha steps disagree with their own names: black-a10 stores 16%, black-a03 6%, black-a50 48%, white-a10 13%. Only a40 matches. A developer who reads the name and types the number ships the wrong colour. The database stores what Figma stores.',
  },
  {
    id: 'orphan-primitives',
    headline: '63 of the 160 primitives are referenced by nothing in the library.',
    body: 'No semantic token, elevation token or component token aliases them: the whole of brand/forest, brand/mango and brand/purple, all 11 neutral steps, and scattered system steps such as slate-80 and green-60. Either they are reserved for future roles or they can be retired.',
  },
  {
    id: 'greyscale-raw',
    headline: 'GreyScale is typed in, not linked.',
    body: '112 of the 115 GreyScale values are raw colours rather than aliases, and only 5 of them equal any primitive. A change to the palette therefore never reaches the wireframe mode.',
  },
] as const;
