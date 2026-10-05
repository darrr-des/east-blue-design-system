/*
 * East Blue — Primitives database (space · space-neg · radius · elevation).
 *
 * Read off the Primitives library with the Talk To Figma plugin (`get_variables`,
 * 2026-09-17) and held in tokens.json, which scripts/tokens/import.mjs generates.
 * Like colors.ts, this module adds no values of its own: it indexes the
 * `Primitives` collection and follows each elevation colour to the palette.
 *
 * ── One collection, two modes ──────────────────────────────────────────
 * `Primitives` holds 131 variables in four groups, in two modes:
 *
 *   High Fidelity  → the product values
 *   Mid Fidelity   → wireframes. Space is identical; every radius becomes 0;
 *                    shadows flatten (blur 0, a 1px spread ring instead)
 *
 * ── What connects to what ──────────────────────────────────────────────
 * space, space-neg and radius are raw numbers: none of them aliases anything.
 * Components bind them directly — padding to `space/*`, corners to `radius/*`.
 * Only one other collection aliases this one: UI Config's
 * `button/btn-radius-default` points at `radius/radius-pill`.
 *
 * elevation mixes numbers and colours. Its numbers (x, y, blur, spread) are
 * raw; its colours alias `.Color Primitives` — `system/black/black-a10` and
 * friends — so a shadow's colour follows the palette. Not all of them do:
 * `checkLinks()` lists the colour cells that hold a raw value instead.
 *
 * ── Shadows are assembled by effect styles ─────────────────────────────
 * A shadow level is a set of fields (`elevation/app/shadow-high/blur`, `…/spread`,
 * `…/color-shadow`, `…/color-border`, `…/spread-sunken`). How those fields are
 * combined into drawn shadow layers is decided by the library's EFFECT STYLES,
 * which the variables dump does not contain. Read on Select 7947:111865:
 * effect style `app/shadow/shadow-high` draws two shadows — the first binds
 * x/y/blur/spread/color-shadow, the second binds only spread-sunken and
 * color-border, leaving its x, y and blur as raw 0s. This module therefore
 * groups the fields by level and does not guess the layers.
 */
import tokensJson from './tokens.json';
import { getPrimitive as getColorPrimitive, type ColorValue } from './colors';

interface TokenRecord {
  name: string;
  group: string;
  collection: string;
  type: string;
  id: string;
  key: string;
  values: Record<string, { value: unknown; alias?: string | null; aliasCollection?: string; aliasMode?: string }>;
}
const TOKENS = tokensJson as unknown as { tokens: TokenRecord[]; source: { file: string; dumpDate: string } };
export const SOURCE = TOKENS.source;

const COLLECTION = 'Primitives';
const records = TOKENS.tokens.filter((t) => t.collection === COLLECTION);

// ── Modes ──────────────────────────────────────────────────────────────
export type PrimitiveMode = 'hifi' | 'midfi';

export const PRIMITIVE_MODES: Record<PrimitiveMode, { label: string; note: string }> = {
  hifi: { label: 'High Fidelity', note: 'The product values.' },
  midfi: { label: 'Mid Fidelity', note: 'Wireframes: space unchanged, every radius 0, shadows flattened.' },
};
const MODE_KEYS = Object.keys(PRIMITIVE_MODES) as PrimitiveMode[];

// ── Who references each primitive from outside the collection ─────────
const inbound = new Map<string, Set<string>>();
for (const t of TOKENS.tokens) {
  if (t.collection === COLLECTION) continue;
  for (const cell of Object.values(t.values)) {
    if (cell.alias && cell.aliasCollection === COLLECTION) {
      if (!inbound.has(cell.alias)) inbound.set(cell.alias, new Set());
      inbound.get(cell.alias)!.add(`${t.collection} › ${t.name}`);
    }
  }
}

// ── space · space-neg · radius ─────────────────────────────────────────
export type NumberGroup = 'space' | 'space-neg' | 'radius';

export interface NumberPrimitive {
  /** Full variable name, e.g. `space/space-12`. */
  name: string;
  group: NumberGroup;
  /** The step as named: `12`, `neg-4`, `pill`, `round`. */
  step: string;
  values: Record<PrimitiveMode, number>;
  key: string;
  id: string;
  /** Variables in other collections that alias this one. */
  referencedBy: string[];
}

const numberOf = (t: TokenRecord, mode: PrimitiveMode): number => {
  const v = t.values[PRIMITIVE_MODES[mode].label]?.value;
  if (typeof v !== 'number') throw new Error(`${t.name}: no number in ${mode}`);
  return v;
};

const numbers = (group: NumberGroup): NumberPrimitive[] =>
  records
    .filter((t) => t.group === group)
    .map((t) => ({
      name: t.name,
      group,
      step: t.name.split('/')[1].replace(/^(space|radius)-/, ''),
      values: { hifi: numberOf(t, 'hifi'), midfi: numberOf(t, 'midfi') },
      key: t.key,
      id: t.id,
      referencedBy: [...(inbound.get(t.name) ?? [])].sort(),
    }));

export const SPACE: NumberPrimitive[] = numbers('space');
export const SPACE_NEG: NumberPrimitive[] = numbers('space-neg');
export const RADIUS: NumberPrimitive[] = numbers('radius');

// ── elevation ──────────────────────────────────────────────────────────
export type Platform = 'app' | 'web';

export interface ElevationColor {
  /** The .Color Primitives colour this cell aliases, or null when it holds a raw value. */
  primitive: string | null;
  value: ColorValue;
}

export interface ElevationField {
  /** Full variable name, e.g. `elevation/app/shadow-high/blur`. */
  name: string;
  platform: Platform;
  /** The level path, e.g. `shadow-high`, `shadow/shadow-card`, `shadow-border/focus`. */
  level: string;
  /** The field as named: `x position`, `blur`, `e2-color-shadow`… */
  field: string;
  type: 'FLOAT' | 'COLOR';
  values: Record<PrimitiveMode, number | ElevationColor>;
  key: string;
  id: string;
}

const isColor = (v: unknown): v is ColorValue => !!v && typeof v === 'object' && 'hex' in (v as object);

export const ELEVATION: ElevationField[] = records
  .filter((t) => t.group === 'elevation')
  .map((t) => {
    const parts = t.name.split('/');
    const values = {} as Record<PrimitiveMode, number | ElevationColor>;
    for (const m of MODE_KEYS) {
      const cell = t.values[PRIMITIVE_MODES[m].label];
      if (t.type === 'COLOR') {
        if (!isColor(cell?.value)) throw new Error(`${t.name}: no colour in ${m}`);
        values[m] = { primitive: cell.alias && cell.aliasCollection === '.Color Primitives' ? cell.alias : null, value: cell.value };
      } else {
        values[m] = numberOf(t, m);
      }
    }
    return {
      name: t.name,
      platform: parts[1] as Platform,
      level: parts.slice(2, -1).join('/'),
      field: parts[parts.length - 1],
      type: t.type as 'FLOAT' | 'COLOR',
      values,
      key: t.key,
      id: t.id,
    };
  });

export interface ElevationLevel {
  platform: Platform;
  level: string;
  fields: ElevationField[];
}

/** Elevation fields grouped by platform and level, in library order. */
export const ELEVATION_LEVELS: ElevationLevel[] = (() => {
  const out: ElevationLevel[] = [];
  for (const f of ELEVATION) {
    let lv = out.find((l) => l.platform === f.platform && l.level === f.level);
    if (!lv) out.push((lv = { platform: f.platform, level: f.level, fields: [] }));
    lv.fields.push(f);
  }
  return out;
})();

// ── Lookups ────────────────────────────────────────────────────────────
type AnyPrimitive = NumberPrimitive | ElevationField;
const ALL: AnyPrimitive[] = [...SPACE, ...SPACE_NEG, ...RADIUS, ...ELEVATION];
const BY_NAME = new Map(ALL.map((p) => [p.name, p]));
const BY_KEY = new Map(ALL.map((p) => [p.key, p]));
const BY_ID = new Map(ALL.map((p) => [p.id, p]));

export const getPrimitive = (name: string) => BY_NAME.get(name);

/** Resolve a REST bound id (`VariableID:<key>/<localId>` or `VariableID:<id>`) to its primitive. */
export function resolvePrimitiveVariable(boundId: string): AnyPrimitive | undefined {
  const bare = boundId.replace(/^VariableID:/, '');
  const keyed = bare.match(/^([0-9a-f]{40})\//);
  return keyed ? BY_KEY.get(keyed[1]) : BY_ID.get(bare);
}

export type ValueMatchStatus = 'token' | 'drift' | 'unknown' | 'raw';

export interface ValueMatch {
  status: ValueMatchStatus;
  token?: string;
  /** Modes whose value equals the drawn value. */
  modes?: PrimitiveMode[];
  drawn: number;
}

/** Classify one bound number (padding, gap, radius, shadow field) the way matchPaint() classifies a colour. */
export function matchValue(reading: { boundId?: string; drawn: number }): ValueMatch {
  const { boundId, drawn } = reading;
  if (!boundId) return { status: 'raw', drawn };
  const p = resolvePrimitiveVariable(boundId);
  if (!p) return { status: 'unknown', drawn };
  const modes = MODE_KEYS.filter((m) => p.values[m] === drawn);
  return { status: modes.length ? 'token' : 'drift', token: p.name, modes, drawn };
}

// ── The linkage, re-proved from the data ───────────────────────────────
export interface PrimitiveLinkReport {
  counts: Record<NumberGroup | 'elevation', number>;
  /** Elevation colour cells that alias a palette colour, per mode. */
  elevationColorsLinked: Record<PrimitiveMode, number>;
  elevationColorCells: number;
  /** Elevation colour cells holding a raw value instead of an alias. */
  elevationColorsRaw: { name: string; mode: PrimitiveMode; value: ColorValue }[];
  /** Aliases that point at a palette colour the colour database does not hold. */
  brokenColorAliases: string[];
  /** Number primitives whose value differs between the two modes. */
  modeDifferences: { name: string; hifi: number; midfi: number }[];
  /** Primitives that any other collection aliases. */
  referencedFromOutside: { name: string; by: string[] }[];
}

export function checkLinks(): PrimitiveLinkReport {
  const colorFields = ELEVATION.filter((f) => f.type === 'COLOR');
  const raw: PrimitiveLinkReport['elevationColorsRaw'] = [];
  const broken: string[] = [];
  const linked = { hifi: 0, midfi: 0 };
  for (const f of colorFields) {
    for (const m of MODE_KEYS) {
      const c = f.values[m] as ElevationColor;
      if (c.primitive) {
        linked[m]++;
        if (!getColorPrimitive(c.primitive)) broken.push(`${f.name} (${m}) → ${c.primitive}`);
      } else raw.push({ name: f.name, mode: m, value: c.value });
    }
  }
  return {
    counts: { space: SPACE.length, 'space-neg': SPACE_NEG.length, radius: RADIUS.length, elevation: ELEVATION.length },
    elevationColorsLinked: linked,
    elevationColorCells: colorFields.length,
    elevationColorsRaw: raw,
    brokenColorAliases: broken,
    modeDifferences: [...SPACE, ...SPACE_NEG, ...RADIUS]
      .filter((p) => p.values.hifi !== p.values.midfi)
      .map((p) => ({ name: p.name, ...p.values })),
    referencedFromOutside: [...SPACE, ...SPACE_NEG, ...RADIUS, ...ELEVATION]
      .filter((p) => inbound.has(p.name))
      .map((p) => ({ name: p.name, by: [...inbound.get(p.name)!] })),
  };
}

// ── Gaps to close with the designer ────────────────────────────────────
/** Questions the data raised for the DS owner. Figures from checkLinks() on the 2026-09-17 dump. */
export const OPEN_QUESTIONS = [
  {
    id: 'transparent-border-raw',
    headline: 'Four High Fidelity shadow borders are a raw transparent white, not a palette colour.',
    body: 'elevation/app/shadow, shadow-high and shadow-higher color-border, and web/shadow/shadow-card color-border, hold #FFFFFF at 0% in High Fidelity: an invisible border typed in rather than aliased. In Mid Fidelity the same cells alias system/black/black-a03 or black-a05. If "no border" is the intent in the product mode, a transparent palette colour would keep the link.',
  },
  {
    id: 'midfi-shadow-border-raw',
    headline: 'Mid Fidelity focus, error and warning rings are raw greys.',
    body: 'The nine web/shadow-border e1/e2/e3 colours hold #D7D8DA, #303236 and #888A91 in Mid Fidelity, typed in rather than aliased; High Fidelity aliases slate, blue, red and yellow steps. web/shadow/shadow-higher e3-color-shadow is also a raw transparent white in Mid Fidelity.',
  },
  {
    id: 'ring-layer-unbound',
    headline: 'A shadow level’s second layer has no x, y or blur tokens.',
    body: 'The app levels and web shadow-card carry spread-sunken and color-border for a border ring, but no x, y or blur for it, so the effect style leaves those as raw 0s (seen on Select, effect style app/shadow/shadow-high). Intended as a zero-offset ring, it still reads as three unbound values on every component that uses the style.',
  },
  {
    id: 'midfi-radius-zero',
    headline: 'Mid Fidelity sets every radius to 0, including pill and round.',
    body: 'All eight non-zero radius steps become 0 in Mid Fidelity, so pill buttons and round avatars render square in wireframes. Worth confirming that is the wireframe look intended rather than a mode left unfilled.',
  },
] as const;
