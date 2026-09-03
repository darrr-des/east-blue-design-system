/*
 * East Blue — Text Style database.
 *
 * Read off the GCash DS file (HwWDwPit2xJjDH4zszOZ5o) via the Figma MCP.
 * Nothing here is derived or invented: every value is either a Figma variable
 * value, a Figma text-style property, or `null` where it could not be read.
 *
 * ── Why two collections ────────────────────────────────────────────────
 * A text style is assembled from TWO independent Figma variable collections,
 * each with its own set of modes. This is the thing to understand before
 * touching anything below:
 *
 *   Type Config      → font FAMILY + font WEIGHT   modes: BAU / Kakaibabe / Hiraya
 *   Type Primitives  → SIZE + LINE-HEIGHT + TRACKING modes: Default / ProxiBark / MeowBark
 *
 * So "which font setup am I in" and "which metrics am I on" are two separate
 * switches. Resolving a style needs one mode from each — see `resolveTextStyle`.
 *
 * Type Config is the current source of truth for family/weight; the DS team
 * marks its two family variables 🟢 and the equivalents in Type Primitives 🔴.
 *
 * ── How the two layers connect ─────────────────────────────────────────
 * Type Config is not a parallel collection — it sits ON TOP of Type Primitives
 * and consumes it by reference. All 8 of its `weight/wt-*` roles are
 * VARIABLE_ALIAS pointers into Type Primitives `font-weight/*`, resolved per
 * mode. That is why a weight role can read Bold under BAU and Medium under
 * Hiraya while the underlying primitive never moves.
 *
 * ── Text styles bind, they do not hold copies ─────────────────────────
 * A text style's line-height is BOUND to a `line-height/*` variable, not typed
 * in as a number — Figma's Edit text style dialog shows the chip
 * (`Primary/Label/Large` → `line-height/leading-30` → 18). Size and weight are
 * bound the same way, family to Type Config. So line-height follows the ramp
 * automatically, exactly as size does; there is no separate set of numbers to
 * keep in sync. This is also why the specimen readings matched token values
 * exactly rather than approximately.
 *
 * Font family is the ONE thing Type Config does not take from Type Primitives:
 * its two `🟢 font-family/*` variables hold raw strings, not aliases. The
 * `🔴 font-family/*` pair still sitting in Type Primitives therefore has zero
 * inbound references — nothing reads it. It is excluded here for that reason,
 * not merely because it is older. See EXCLUDED_FROM_DB.
 */

// ── Font setups — Type Config modes ────────────────────────────────────
/** The font setup. `bau` is Proxima + BarkAda; `hiraya` is Hiraya Sans throughout. */
export type FontSetup = 'bau' | 'kakaibabe' | 'hiraya';

/** Which family slot a style draws from. */
export type FamilyRole = 'primary' | 'secondary';

/** Semantic weight slots defined in Type Config. */
export type WeightRole =
  | 'heading-default' | 'heading-light'
  | 'label-default'   | 'label-light'
  | 'body-light'      | 'body-default' | 'body-bold' | 'body-heavy';

export interface FontSetupDef {
  id: FontSetup;
  /** Mode name exactly as it reads in Figma. */
  label: string;
  /** Figma modeId on the Type Config collection. */
  figmaModeId: string;
  /** `🟢 font-family/font-primary` · `🟢 font-family/font-secondary` */
  family: Record<FamilyRole, string>;
  /** `weight/wt-*`, resolved through their aliases into Type Primitives. */
  weight: Record<WeightRole, string>;
}

/**
 * Type Config — collection `VariableCollectionId:10187:*`, 10 variables.
 * Every weight below is the resolved end of a VARIABLE_ALIAS into
 * Type Primitives `font-weight/*`.
 */
export const FONT_SETUPS: Record<FontSetup, FontSetupDef> = {
  bau: {
    id: 'bau',
    label: 'BAU (3.0)',
    figmaModeId: '9850:0',
    family: { primary: 'Proxima Soft', secondary: 'BarkAda' },
    weight: {
      'heading-default': 'Bold',
      'heading-light':   'Semibold',
      'label-default':   'Bold',
      'label-light':     'Semibold',
      'body-light':      'Regular',
      'body-default':    'Medium',
      'body-bold':       'Semibold',
      'body-heavy':      'Bold',
    },
  },
  kakaibabe: {
    id: 'kakaibabe',
    label: 'Kakaibabe (3.5)',
    figmaModeId: '9850:1',
    family: { primary: 'HeyMeow Sft', secondary: 'BarkAda' },
    weight: {
      'heading-default': 'Semibold',
      'heading-light':   'Medium',
      'label-default':   'Semibold',
      'label-light':     'Medium',
      'body-light':      'Light',
      'body-default':    'Regular',
      'body-bold':       'Medium',
      'body-heavy':      'Semibold',
    },
  },
  hiraya: {
    id: 'hiraya',
    label: 'Hiraya',
    figmaModeId: '10158:0',
    // Both slots are the same family — the primary/secondary split collapses
    // to a weight-only distinction under this setup.
    family: { primary: 'Hiraya Sans', secondary: 'Hiraya Sans' },
    weight: {
      'heading-default': 'Medium',
      'heading-light':   'Regular',
      'label-default':   'Semibold',
      'label-light':     'Medium',
      'body-light':      'Regular',
      'body-default':    'Regular',
      'body-bold':       'Medium',
      'body-heavy':      'Semibold',
    },
  },
};

// ── Metrics — Type Primitives modes ────────────────────────────────────
/** Which Type Primitives mode supplies size / leading / tracking. */
export type MetricMode = 'default' | 'proxibark' | 'meowbark';

export type SizeToken =
  | 'font-size-90' | 'font-size-80' | 'font-size-70' | 'font-size-60'
  | 'font-size-50' | 'font-size-40' | 'font-size-30' | 'font-size-25'
  | 'font-size-20' | 'font-size-15' | 'font-size-10' | 'font-size-05';

export type LeadingToken =
  | 'leading-95' | 'leading-90' | 'leading-85' | 'leading-80' | 'leading-70'
  | 'leading-60' | 'leading-55' | 'leading-52' | 'leading-50' | 'leading-40'
  | 'leading-30' | 'leading-25' | 'leading-22' | 'leading-20' | 'leading-15'
  | 'leading-10' | 'leading-05';

export type TrackingToken =
  | 'tracking-tighter' | 'tracking-tight' | 'tracking-normal'
  | 'tracking-wide'    | 'tracking-wider';

export interface MetricModeDef {
  id: MetricMode;
  label: string;
  /** Figma modeId on the Type Primitives collection. */
  figmaModeId: string;
  /**
   * The font this size ramp was built around, per the collection's own
   * (now orphaned) `🔴 font-family/*` pair. DOCUMENTATION ONLY — never
   * resolve a text style's family from this; that comes from Type Config.
   * It is recorded because it explains why the ramps differ at all: MeowBark
   * runs 1-2px larger than ProxiBark because HeyMeow needed the room.
   */
  builtFor: { primary: string; secondary: string };
  size: Record<SizeToken, number>;
  leading: Record<LeadingToken, number>;
  tracking: Record<TrackingToken, number>;
}

// ── Type Primitives ────────────────────────────────────────────────────
/**
 * The Type Primitives collection, stored the way Figma holds it.
 *
 * Two things this preserves that a flattened table would lose:
 *
 *  1. ALIASES. Some cells are not values — they point at another token in the
 *     same collection, and Figma renders them as a chip rather than a number.
 *     `line-height/leading-55` under MeowBark IS `leading-50`; it does not
 *     merely happen to equal 24. If leading-50 changes, leading-55 follows.
 *  2. The 🔴 font-family pair and the Nova mode are excluded — see
 *     EXCLUDED_FROM_DB. That leaves 45 variables across 3 modes.
 *
 * Everything downstream (METRIC_MODES, resolveTextStyle) is derived from this
 * by `resolvePrimitive`, so the numbers live in exactly one place.
 */
export type PrimitiveGroup = 'font-size' | 'line-height' | 'letter-spacing' | 'font-weight' | 'font-wt-num';

/** A reference to another token in this same collection. */
export interface PrimitiveAlias { alias: string }

/** One cell: a literal, or a pointer at a sibling token. */
export type PrimitiveCell = number | string | PrimitiveAlias;

export interface PrimitiveVar {
  /** Full Figma name, e.g. `line-height/leading-55`. */
  name: string;
  group: PrimitiveGroup;
  type: 'FLOAT' | 'STRING';
  byMode: Record<MetricMode, PrimitiveCell>;
}

export const TYPE_PRIMITIVES: PrimitiveVar[] = [
  // font-size
  { name: 'font-size/font-size-90', group: 'font-size', type: 'FLOAT', byMode: { default: 53, proxibark: 53, meowbark: 54 } },
  { name: 'font-size/font-size-80', group: 'font-size', type: 'FLOAT', byMode: { default: 35, proxibark: 35, meowbark: 36 } },
  { name: 'font-size/font-size-70', group: 'font-size', type: 'FLOAT', byMode: { default: 31, proxibark: 31, meowbark: 32 } },
  { name: 'font-size/font-size-60', group: 'font-size', type: 'FLOAT', byMode: { default: 26, proxibark: 26, meowbark: 28 } },
  { name: 'font-size/font-size-50', group: 'font-size', type: 'FLOAT', byMode: { default: 22, proxibark: 22, meowbark: 24 } },
  { name: 'font-size/font-size-40', group: 'font-size', type: 'FLOAT', byMode: { default: 20, proxibark: 20, meowbark: 20 } },
  { name: 'font-size/font-size-30', group: 'font-size', type: 'FLOAT', byMode: { default: 18, proxibark: 18, meowbark: 18 } },
  { name: 'font-size/font-size-25', group: 'font-size', type: 'FLOAT', byMode: { default: 16, proxibark: 16, meowbark: 16 } },
  { name: 'font-size/font-size-20', group: 'font-size', type: 'FLOAT', byMode: { default: 14, proxibark: 14, meowbark: 14 } },
  { name: 'font-size/font-size-15', group: 'font-size', type: 'FLOAT', byMode: { default: 12, proxibark: 12, meowbark: 12 } },
  { name: 'font-size/font-size-10', group: 'font-size', type: 'FLOAT', byMode: { default: 10, proxibark: 10, meowbark: 10 } },
  { name: 'font-size/font-size-05', group: 'font-size', type: 'FLOAT', byMode: { default: 8, proxibark: 8, meowbark: 8 } },
  // line-height
  { name: 'line-height/leading-95', group: 'line-height', type: 'FLOAT', byMode: { default: 58, proxibark: 58, meowbark: 60 } },
  // letter-spacing
  { name: 'letter-spacing/tracking-tighter', group: 'letter-spacing', type: 'FLOAT', byMode: { default: -0.5, proxibark: -0.5, meowbark: -0.5 } },
  { name: 'letter-spacing/tracking-tight', group: 'letter-spacing', type: 'FLOAT', byMode: { default: -0.25, proxibark: -0.25, meowbark: -0.25 } },
  { name: 'letter-spacing/tracking-normal', group: 'letter-spacing', type: 'FLOAT', byMode: { default: 0, proxibark: 0, meowbark: 0 } },
  { name: 'letter-spacing/tracking-wide', group: 'letter-spacing', type: 'FLOAT', byMode: { default: 0.25, proxibark: 0.25, meowbark: 0.25 } },
  { name: 'letter-spacing/tracking-wider', group: 'letter-spacing', type: 'FLOAT', byMode: { default: 0.5, proxibark: 0.5, meowbark: { alias: 'letter-spacing/tracking-wide' } } },
  // line-height
  { name: 'line-height/leading-90', group: 'line-height', type: 'FLOAT', byMode: { default: 53, proxibark: 53, meowbark: 54 } },
  { name: 'line-height/leading-85', group: 'line-height', type: 'FLOAT', byMode: { default: 38, proxibark: 38, meowbark: 44 } },
  { name: 'line-height/leading-80', group: 'line-height', type: 'FLOAT', byMode: { default: 35, proxibark: 35, meowbark: 36 } },
  { name: 'line-height/leading-70', group: 'line-height', type: 'FLOAT', byMode: { default: 31, proxibark: 31, meowbark: 32 } },
  { name: 'line-height/leading-60', group: 'line-height', type: 'FLOAT', byMode: { default: 26, proxibark: 26, meowbark: 28 } },
  { name: 'line-height/leading-55', group: 'line-height', type: 'FLOAT', byMode: { default: 24, proxibark: 24, meowbark: { alias: 'line-height/leading-50' } } },
  { name: 'line-height/leading-52', group: 'line-height', type: 'FLOAT', byMode: { default: 23, proxibark: 23, meowbark: { alias: 'line-height/leading-50' } } },
  { name: 'line-height/leading-50', group: 'line-height', type: 'FLOAT', byMode: { default: 22, proxibark: 22, meowbark: 24 } },
  { name: 'line-height/leading-40', group: 'line-height', type: 'FLOAT', byMode: { default: 20, proxibark: 20, meowbark: 20 } },
  { name: 'line-height/leading-30', group: 'line-height', type: 'FLOAT', byMode: { default: 18, proxibark: 18, meowbark: 18 } },
  { name: 'line-height/leading-25', group: 'line-height', type: 'FLOAT', byMode: { default: 16, proxibark: 16, meowbark: 16 } },
  { name: 'line-height/leading-22', group: 'line-height', type: 'FLOAT', byMode: { default: 15, proxibark: 15, meowbark: { alias: 'line-height/leading-20' } } },
  { name: 'line-height/leading-20', group: 'line-height', type: 'FLOAT', byMode: { default: 14, proxibark: 14, meowbark: 14 } },
  { name: 'line-height/leading-15', group: 'line-height', type: 'FLOAT', byMode: { default: 12, proxibark: 12, meowbark: 12 } },
  { name: 'line-height/leading-10', group: 'line-height', type: 'FLOAT', byMode: { default: 10, proxibark: 10, meowbark: 10 } },
  { name: 'line-height/leading-05', group: 'line-height', type: 'FLOAT', byMode: { default: 8, proxibark: 8, meowbark: 8 } },
  // font-weight
  { name: 'font-weight/font-light', group: 'font-weight', type: 'STRING', byMode: { default: 'Light', proxibark: 'Light', meowbark: 'Light' } },
  { name: 'font-weight/font-regular', group: 'font-weight', type: 'STRING', byMode: { default: 'Regular', proxibark: 'Regular', meowbark: 'Regular' } },
  { name: 'font-weight/font-medium', group: 'font-weight', type: 'STRING', byMode: { default: 'Medium', proxibark: 'Medium', meowbark: 'Medium' } },
  { name: 'font-weight/font-semibold', group: 'font-weight', type: 'STRING', byMode: { default: 'Semibold', proxibark: 'Semibold', meowbark: 'Semibold' } },
  { name: 'font-weight/font-bold', group: 'font-weight', type: 'STRING', byMode: { default: 'Bold', proxibark: 'Bold', meowbark: 'Bold' } },
  { name: 'font-weight/font-extrabold', group: 'font-weight', type: 'STRING', byMode: { default: 'Extrabold', proxibark: 'Extrabold', meowbark: 'ExtraBold' } },
  // font-wt-num
  { name: 'font-wt-num/font-light', group: 'font-wt-num', type: 'FLOAT', byMode: { default: 300, proxibark: 300, meowbark: 300 } },
  { name: 'font-wt-num/font-regular', group: 'font-wt-num', type: 'FLOAT', byMode: { default: 400, proxibark: 400, meowbark: 400 } },
  { name: 'font-wt-num/font-medium', group: 'font-wt-num', type: 'FLOAT', byMode: { default: 500, proxibark: 500, meowbark: 500 } },
  { name: 'font-wt-num/font-semibold', group: 'font-wt-num', type: 'FLOAT', byMode: { default: 600, proxibark: 600, meowbark: 600 } },
  { name: 'font-wt-num/font-bold', group: 'font-wt-num', type: 'FLOAT', byMode: { default: 700, proxibark: 700, meowbark: 700 } },
];

/** Every alias cell in the collection, for the record. */
export const PRIMITIVE_ALIASES: { name: string; mode: MetricMode; target: string }[] =
  TYPE_PRIMITIVES.flatMap((v) =>
    (Object.keys(v.byMode) as MetricMode[])
      .filter((m) => typeof v.byMode[m] === 'object')
      .map((m) => ({ name: v.name, mode: m, target: (v.byMode[m] as PrimitiveAlias).alias })));

const BY_NAME = new Map(TYPE_PRIMITIVES.map((v) => [v.name, v]));

/**
 * Read one primitive in one mode, following an alias chain to its literal.
 * Throws on an unknown name or a cycle rather than returning a wrong number.
 */
export function resolvePrimitive(name: string, mode: MetricMode): number | string {
  const seen = new Set<string>();
  let cur = name;
  for (;;) {
    if (seen.has(cur)) throw new Error(`Alias cycle in Type Primitives at ${cur}`);
    seen.add(cur);
    const v = BY_NAME.get(cur);
    if (!v) throw new Error(`Unknown Type Primitives variable: ${cur}`);
    const cell = v.byMode[mode];
    if (typeof cell === 'object') { cur = cell.alias; continue; }
    return cell;
  }
}

const num = (name: string, mode: MetricMode): number => {
  const v = resolvePrimitive(name, mode);
  if (typeof v !== 'number') throw new Error(`${name} is not numeric`);
  return v;
};

function buildRamp(id: MetricMode, label: string, figmaModeId: string,
                   builtFor: { primary: string; secondary: string }): MetricModeDef {
  const pick = <T extends string>(g: PrimitiveGroup) =>
    Object.fromEntries(TYPE_PRIMITIVES.filter((v) => v.group === g)
      .map((v) => [v.name.split('/')[1], num(v.name, id)])) as Record<T, number>;
  return {
    id, label, figmaModeId, builtFor,
    size: pick<SizeToken>('font-size'),
    leading: pick<LeadingToken>('line-height'),
    tracking: pick<TrackingToken>('letter-spacing'),
  };
}

/**
 * Resolved lookups, derived from TYPE_PRIMITIVES — do not hand-edit.
 * There is deliberately no Hiraya ramp: Hiraya changes family and weight only
 * and rides whichever of these is active. See CONFIRMED / 'hiraya-no-ramp'.
 * `builtFor` records the typeface each ramp was sized around (documentation
 * only; family always resolves from Type Config).
 */
export const METRIC_MODES: Record<MetricMode, MetricModeDef> = {
  default:   buildRamp('default',   'Default',   '2711:0', { primary: 'Proxima Soft', secondary: 'BarkAda' }),
  proxibark: buildRamp('proxibark', 'ProxiBark', '3379:2', { primary: 'Proxima Soft', secondary: 'BarkAda' }),
  meowbark:  buildRamp('meowbark',  'MeowBark',  '3126:0', { primary: 'HeyMeow Sft',  secondary: 'BarkAda' }),
};

/** `font-wt-num/*` — numeric equivalents, read from Type Primitives. */
export const WEIGHT_NUMERIC: Record<string, number> = Object.fromEntries(
  TYPE_PRIMITIVES.filter((v) => v.group === 'font-wt-num')
    .map((v) => [resolvePrimitive(v.name.replace('font-wt-num/', 'font-weight/'), 'default') as string,
                 num(v.name, 'default')]));


// ── The text styles ────────────────────────────────────────────────────
/**
 * Where a value came from. Nothing in this file is inferred — if it could not
 * be read from Figma it is `null`, never a plausible substitute.
 *
 *  `style`     — read from the Figma text style itself (get_styles).
 *  `panel`     — read off the Text styles panel (name · size/line-height).
 *  `specimen`  — read from a specimen text node on the `Text` page. These
 *                nodes match the style's family/weight/size exactly, but a
 *                local override cannot be ruled out.
 *  `binding`   — the variable binding itself, witnessed in Figma's Edit text
 *                style dialog. The strongest source: it gives the TOKEN, not
 *                just a number.
 */
export type Provenance = 'style' | 'panel' | 'specimen' | 'binding';

export interface TextStyle {
  /** Figma text style name, verbatim. */
  name: string;
  /** Figma style key. */
  key: string;
  /** Top-level grouping as it appears in the panel. */
  group: 'Primary' | 'Secondary';
  family: FamilyRole;
  weight: WeightRole;
  size: SizeToken;
  /** `null` where the line-height could not be read — do not fill in by eye. */
  leading: LeadingToken | null;
  /** `null` where the tracking could not be read. */
  tracking: TrackingToken | null;
  sizeFrom: Provenance;
  leadingFrom: Provenance | null;
  trackingFrom: Provenance | null;
  notes?: string;
}

export const TEXT_STYLES: TextStyle[] = [
  // ── Primary / Headlines ──────────────────────────────────────────────
  // Epic is the odd one out: it sits outside the Light group but resolves to
  // the LIGHT heading weight (Semibold under BAU, not Bold). See OPEN_QUESTIONS.
  { name: 'Primary/Headlines/Epic', key: 'aeb7b3d06520f9c2be0a36009cdaf25d57ddcfea', group: 'Primary', family: 'primary', weight: 'heading-light',   size: 'font-size-90', leading: 'leading-95', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null, notes: 'Only Headlines entry with no Light sibling, and the only non-Light entry on the light weight.' },
  { name: 'Primary/Headlines/Spotlight', key: 'e043726e1601706f640a5c7e7ab3f87d23438d86', group: 'Primary', family: 'primary', weight: 'heading-default', size: 'font-size-80', leading: 'leading-85', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },
  { name: 'Primary/Headlines/Region',    key: 'bbd3ac8c322dc0e0ff768d6bb59b2b16ce557516', group: 'Primary', family: 'primary', weight: 'heading-default', size: 'font-size-70', leading: 'leading-80', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },
  { name: 'Primary/Headlines/Area',      key: 'c4156b44516b045d662b9f04315a96d10eb5ab63', group: 'Primary', family: 'primary', weight: 'heading-default', size: 'font-size-60', leading: 'leading-70', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },
  { name: 'Primary/Headlines/Section',   key: 'da576c2325fa6032600272f222eda410cedb46ff', group: 'Primary', family: 'primary', weight: 'heading-default', size: 'font-size-50', leading: 'leading-60', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },
  { name: 'Primary/Headlines/Segment',   key: '83b7aec42ba61eb52d8603dca20a0f46dd8254f1', group: 'Primary', family: 'primary', weight: 'heading-default', size: 'font-size-40', leading: 'leading-55', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },
  { name: 'Primary/Headlines/Block',     key: '4b55150fcb95a5ce58c6898f1c7c390b98202642', group: 'Primary', family: 'primary', weight: 'heading-default', size: 'font-size-30', leading: 'leading-52', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },

  // ── Primary / Headlines / Light ──────────────────────────────────────
  { name: 'Primary/Headlines/Light/Spotlight', key: '5896bdd1a7a3db65f34817a31ba004c76f39f139', group: 'Primary', family: 'primary', weight: 'heading-light', size: 'font-size-80', leading: 'leading-85', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },
  { name: 'Primary/Headlines/Light/Region',    key: '5812ff5cf28f9ecde21706701cb0b65169a8d835', group: 'Primary', family: 'primary', weight: 'heading-light', size: 'font-size-70', leading: 'leading-80', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },
  { name: 'Primary/Headlines/Light/Area',      key: '646acfcf34ef49e6c3519bed297384eac8b34214', group: 'Primary', family: 'primary', weight: 'heading-light', size: 'font-size-60', leading: 'leading-70', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },
  { name: 'Primary/Headlines/Light/Section',   key: '6802104b2dc989b43ccefafdd5ca661a012fa68e', group: 'Primary', family: 'primary', weight: 'heading-light', size: 'font-size-50', leading: 'leading-60', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },
  { name: 'Primary/Headlines/Light/Segment',   key: 'd9df5a1854c77af5eb639fb3af1f873996581c87', group: 'Primary', family: 'primary', weight: 'heading-light', size: 'font-size-40', leading: 'leading-55', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },
  { name: 'Primary/Headlines/Light/Block',     key: '1c0f7b639856e58d45622deedb21394949f5c0f1', group: 'Primary', family: 'primary', weight: 'heading-light', size: 'font-size-30', leading: 'leading-52', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },

  // ── Primary / Label ──────────────────────────────────────────────────
  // Single-line: line-height == font-size (100%).
  // Binding witnessed in the Edit text style dialog: line-height/leading-30 (18), letter spacing 0.25.
  { name: 'Primary/Label/Large', key: '1545a734aaf709baf5a1dcdcb7819357b02248d0', group: 'Primary', family: 'primary', weight: 'label-default', size: 'font-size-30', leading: 'leading-30', tracking: 'tracking-wide',  sizeFrom: 'style', leadingFrom: 'binding', trackingFrom: 'binding' },
  { name: 'Primary/Label/Base',  key: '9eb35fc70e5aaef98c94d6ad78a1266fc9243f70', group: 'Primary', family: 'primary', weight: 'label-default', size: 'font-size-25', leading: 'leading-25', tracking: 'tracking-wide',  sizeFrom: 'style', leadingFrom: 'specimen', trackingFrom: 'specimen' },
  { name: 'Primary/Label/Small', key: '56e7477b7c6b12c4ae02f64b2974e9997a2ed14e', group: 'Primary', family: 'primary', weight: 'label-default', size: 'font-size-20', leading: 'leading-20', tracking: 'tracking-wide',  sizeFrom: 'style', leadingFrom: 'specimen', trackingFrom: 'specimen' },
  { name: 'Primary/Label/Fine',  key: '2864f29bed045ed64b3d708967b9909cc45ddd6b', group: 'Primary', family: 'primary', weight: 'label-default', size: 'font-size-15', leading: 'leading-15', tracking: 'tracking-wider', sizeFrom: 'style', leadingFrom: 'specimen', trackingFrom: 'specimen', notes: 'Only Label size on tracking-wider (0.5) rather than tracking-wide (0.25).' },
  { name: 'Primary/Label/Tiny',  key: '595f8b2ddda7b837abf02365bfb4cd33da84bc0c', group: 'Primary', family: 'primary', weight: 'label-default', size: 'font-size-10', leading: 'leading-10', tracking: 'tracking-wide',  sizeFrom: 'style', leadingFrom: 'specimen', trackingFrom: 'specimen' },

  // ── Primary / Label / Light ──────────────────────────────────────────
  { name: 'Primary/Label/Light/Large', key: 'b38f57f98c8e5840fb705325f7e71c5478c8ca6f', group: 'Primary', family: 'primary', weight: 'label-light', size: 'font-size-30', leading: 'leading-30', tracking: 'tracking-wide',  sizeFrom: 'style', leadingFrom: 'specimen', trackingFrom: 'specimen' },
  { name: 'Primary/Label/Light/Base',  key: 'c17d4c7cb6060192cac083a2da877366d186f829', group: 'Primary', family: 'primary', weight: 'label-light', size: 'font-size-25', leading: 'leading-25', tracking: 'tracking-wide',  sizeFrom: 'style', leadingFrom: 'specimen', trackingFrom: 'specimen' },
  { name: 'Primary/Label/Light/Small', key: 'eb34313fe95ef47ac308fdc977068ec2d69d078f', group: 'Primary', family: 'primary', weight: 'label-light', size: 'font-size-20', leading: 'leading-20', tracking: 'tracking-wide',  sizeFrom: 'style', leadingFrom: 'specimen', trackingFrom: 'specimen' },
  { name: 'Primary/Label/Light/Fine',  key: '573a392cbf6e464bd78ce93ed1e14aaba5cf921e', group: 'Primary', family: 'primary', weight: 'label-light', size: 'font-size-15', leading: 'leading-15', tracking: 'tracking-wider', sizeFrom: 'style', leadingFrom: 'specimen', trackingFrom: 'specimen' },
  { name: 'Primary/Label/Light/Tiny',  key: '66d29ccf94ff4afd90651fa2b5657d7bc5c91e29', group: 'Primary', family: 'primary', weight: 'label-light', size: 'font-size-10', leading: 'leading-10', tracking: 'tracking-wide',  sizeFrom: 'style', leadingFrom: 'specimen', trackingFrom: 'specimen' },

  // ── Primary / Multi-line Label ───────────────────────────────────────
  // Same sizes as Label, but leading opens up for wrapping.
  { name: 'Primary/Multi-line Label/Large', key: '4151567b74118e4426c52793c8b1561e2394ac0c', group: 'Primary', family: 'primary', weight: 'label-default', size: 'font-size-30', leading: 'leading-50', tracking: 'tracking-wide',  sizeFrom: 'style', leadingFrom: 'specimen', trackingFrom: 'specimen' },
  { name: 'Primary/Multi-line Label/Base',  key: '64b3bc45d1efef193fc60285eb6ef87068333b6e', group: 'Primary', family: 'primary', weight: 'label-default', size: 'font-size-25', leading: 'leading-40', tracking: 'tracking-wide',  sizeFrom: 'style', leadingFrom: 'specimen', trackingFrom: 'specimen' },
  { name: 'Primary/Multi-line Label/Small', key: '30373ff583ab96f0efd8126519520942f64864cd', group: 'Primary', family: 'primary', weight: 'label-default', size: 'font-size-20', leading: 'leading-25', tracking: 'tracking-wide',  sizeFrom: 'style', leadingFrom: 'specimen', trackingFrom: 'specimen' },
  { name: 'Primary/Multi-line Label/Fine',  key: '86c6d0ca209ee72e9b936486f00abea2e1a1111b', group: 'Primary', family: 'primary', weight: 'label-default', size: 'font-size-15', leading: 'leading-20', tracking: 'tracking-wider', sizeFrom: 'style', leadingFrom: 'specimen', trackingFrom: 'specimen' },
  { name: 'Primary/Multi-line Label/Tiny',  key: '8e271220a991ac48a68c4dcb9c13104530cc7621', group: 'Primary', family: 'primary', weight: 'label-default', size: 'font-size-10', leading: 'leading-15', tracking: 'tracking-wide',  sizeFrom: 'style', leadingFrom: 'specimen', trackingFrom: 'specimen' },

  // ── Primary / Multi-line Label / Light ───────────────────────────────
  { name: 'Primary/Multi-line Label/Light/Large', key: '0f19068f428758fa8f2033db4cb2cf4f2568c8aa', group: 'Primary', family: 'primary', weight: 'label-light', size: 'font-size-30', leading: 'leading-50', tracking: 'tracking-wide',  sizeFrom: 'style', leadingFrom: 'specimen', trackingFrom: 'specimen' },
  { name: 'Primary/Multi-line Label/Light/Base',  key: '64dc06e9ff19ac13aede2f700eef7d099b7a07e3', group: 'Primary', family: 'primary', weight: 'label-light', size: 'font-size-25', leading: 'leading-40', tracking: 'tracking-wide',  sizeFrom: 'style', leadingFrom: 'specimen', trackingFrom: 'specimen' },
  { name: 'Primary/Multi-line Label/Light/Small', key: 'f6030473fbcf6a1eb37d8136ab99e06aeb17aa8e', group: 'Primary', family: 'primary', weight: 'label-light', size: 'font-size-20', leading: 'leading-25', tracking: 'tracking-wide',  sizeFrom: 'style', leadingFrom: 'specimen', trackingFrom: 'specimen' },
  { name: 'Primary/Multi-line Label/Light/Fine',  key: 'ccf214bcaff833241e28892514b9845119bbc63b', group: 'Primary', family: 'primary', weight: 'label-light', size: 'font-size-15', leading: 'leading-20', tracking: 'tracking-wider', sizeFrom: 'style', leadingFrom: 'specimen', trackingFrom: 'specimen' },
  { name: 'Primary/Multi-line Label/Light/Tiny',  key: '712ce9ab7686f9344ef36a26978a3493dd9b7ec9', group: 'Primary', family: 'primary', weight: 'label-light', size: 'font-size-10', leading: 'leading-15', tracking: 'tracking-wide',  sizeFrom: 'style', leadingFrom: 'specimen', trackingFrom: 'specimen' },

  // ── Secondary / Default ──────────────────────────────────────────────
  // Edit text style dialog: line height 22, letter spacing 0.
  { name: 'Secondary/Default/Large',         key: 'f344b2751014433b16ceea54ac79862d433a2e8b', group: 'Secondary', family: 'secondary', weight: 'body-default', size: 'font-size-25', leading: 'leading-50', tracking: 'tracking-normal', sizeFrom: 'style', leadingFrom: 'style', trackingFrom: 'style' },
  { name: 'Secondary/Default/Base',          key: 'be0fbeb814c136521a893a0163325c9f6f92f07b', group: 'Secondary', family: 'secondary', weight: 'body-default', size: 'font-size-20', leading: 'leading-40', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },
  { name: 'Secondary/Default/Caption',       key: 'd307a265d48a854673a7684604549cc45930fdc9', group: 'Secondary', family: 'secondary', weight: 'body-default', size: 'font-size-15', leading: 'leading-30', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },
  { name: 'Secondary/Default/Small Caption', key: '47946e5e9579b5ee7c57edd6272fd6f9be4493ff', group: 'Secondary', family: 'secondary', weight: 'body-default', size: 'font-size-10', leading: 'leading-22', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },
  { name: 'Secondary/Default/Fine',          key: 'cb91c583ffbc1801bdfbfde869b98b5610910251', group: 'Secondary', family: 'secondary', weight: 'body-default', size: 'font-size-05', leading: 'leading-15', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },

  // ── Secondary / Bold ─────────────────────────────────────────────────
  // Sizes read from the styles; line-heights not yet confirmed in the panel.
  { name: 'Secondary/Bold/Large',         key: '0eeb09e26fa2a92fd02965bc5f863e828c300eaa', group: 'Secondary', family: 'secondary', weight: 'body-bold', size: 'font-size-25', leading: 'leading-50', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },
  { name: 'Secondary/Bold/Base',          key: 'a554604993ad132442f2c7cbdcc371f5c26bbde4', group: 'Secondary', family: 'secondary', weight: 'body-bold', size: 'font-size-20', leading: 'leading-40', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },
  { name: 'Secondary/Bold/Caption',       key: '0b2b873e16a37156e4b9db51a62f397d43d2596e', group: 'Secondary', family: 'secondary', weight: 'body-bold', size: 'font-size-15', leading: 'leading-30', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },
  { name: 'Secondary/Bold/Small Caption', key: 'd7b5d8fa5e50e2d6127343480e817688bef7e57a', group: 'Secondary', family: 'secondary', weight: 'body-bold', size: 'font-size-10', leading: 'leading-22', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },
  { name: 'Secondary/Bold/Fine',          key: 'd283ad68aa4adc91949cb7d3c16de5f5410d7c40', group: 'Secondary', family: 'secondary', weight: 'body-bold', size: 'font-size-05', leading: 'leading-15', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },

  // ── Secondary / Heavy ────────────────────────────────────────────────
  { name: 'Secondary/Heavy/Large',         key: '6bb4d733871525074ca579498ae2ac06735d44e5', group: 'Secondary', family: 'secondary', weight: 'body-heavy', size: 'font-size-25', leading: 'leading-50', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },
  { name: 'Secondary/Heavy/Base',          key: 'd05f7553806b84360d4f39fbafc69bf844f15085', group: 'Secondary', family: 'secondary', weight: 'body-heavy', size: 'font-size-20', leading: 'leading-40', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },
  { name: 'Secondary/Heavy/Caption',       key: 'd84676939494e0d8259466faa76cfd3b2c67bce7', group: 'Secondary', family: 'secondary', weight: 'body-heavy', size: 'font-size-15', leading: 'leading-30', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },
  { name: 'Secondary/Heavy/Small Caption', key: '041a2600c6eb443cc733de81b9cca62a09083149', group: 'Secondary', family: 'secondary', weight: 'body-heavy', size: 'font-size-10', leading: 'leading-22', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },
  { name: 'Secondary/Heavy/Fine',          key: '35c4e5d80c211b2fac50536b7cba9613ee9eb2a3', group: 'Secondary', family: 'secondary', weight: 'body-heavy', size: 'font-size-05', leading: 'leading-15', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },

  // ── Secondary / Light ────────────────────────────────────────────────
  { name: 'Secondary/Light/Large',         key: '4a433a688296cf4422fcfeee8cd0fa82d1b68280', group: 'Secondary', family: 'secondary', weight: 'body-light', size: 'font-size-25', leading: 'leading-50', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },
  { name: 'Secondary/Light/Base',          key: '2ae24e4fbb4234c9e61d043612e58292801e2ce0', group: 'Secondary', family: 'secondary', weight: 'body-light', size: 'font-size-20', leading: 'leading-40', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },
  { name: 'Secondary/Light/Caption',       key: 'ff92288f362585b81bf95ae60614cf2288ab12a6', group: 'Secondary', family: 'secondary', weight: 'body-light', size: 'font-size-15', leading: 'leading-30', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },
  { name: 'Secondary/Light/Small Caption', key: 'fe7fbe806e0562ad63f11eefc57acc24bb2798a2', group: 'Secondary', family: 'secondary', weight: 'body-light', size: 'font-size-10', leading: 'leading-22', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },
  { name: 'Secondary/Light/Fine',          key: 'ba3d89cd3ad5c063a1c83e553469a2574fef9059', group: 'Secondary', family: 'secondary', weight: 'body-light', size: 'font-size-05', leading: 'leading-15', tracking: null, sizeFrom: 'style', leadingFrom: 'panel', trackingFrom: null },

];

// ── Resolution ─────────────────────────────────────────────────────────
export interface ResolvedTextStyle {
  name: string;
  fontFamily: string;
  /** Figma style-name weight, e.g. `Semibold`. */
  fontWeight: string;
  /** CSS numeric weight, or `null` if the weight has no `font-wt-num` entry. */
  fontWeightNumeric: number | null;
  fontSize: number;
  lineHeight: number | null;
  letterSpacing: number | null;
}

/**
 * Resolve one text style into concrete values.
 *
 * Needs a mode from BOTH collections: `setup` picks family + weight out of
 * Type Config, `metrics` picks size + leading + tracking out of Type
 * Primitives. `lineHeight` / `letterSpacing` come back `null` when the style
 * has no value recorded — render those as "not read", never as a number.
 */
export function resolveTextStyle(
  style: TextStyle,
  setup: FontSetup,
  metrics: MetricMode = 'default',
): ResolvedTextStyle {
  const cfg = FONT_SETUPS[setup];
  const met = METRIC_MODES[metrics];
  const weight = cfg.weight[style.weight];

  return {
    name: style.name,
    fontFamily: cfg.family[style.family],
    fontWeight: weight,
    fontWeightNumeric: WEIGHT_NUMERIC[weight] ?? null,
    fontSize: met.size[style.size],
    lineHeight: style.leading ? met.leading[style.leading] : null,
    letterSpacing: style.tracking ? met.tracking[style.tracking] : null,
  };
}

// ── Bindings ───────────────────────────────────────────────────────────
/** A pointer at one Figma variable, by collection and full variable name. */
export interface Binding {
  collection: 'Type Config' | 'Type Primitives';
  /** Full Figma variable name, e.g. `line-height/leading-30`. */
  variable: string;
}

/**
 * The five properties a text style binds, each as a variable reference.
 * `null` means the binding has not been read — never that the style lacks one.
 */
export interface StyleBindings {
  fontFamily: Binding;
  fontWeight: Binding;
  fontSize: Binding;
  lineHeight: Binding | null;
  letterSpacing: Binding | null;
}

/**
 * Every property of a text style resolves through a variable, not a value:
 * family and weight from Type Config, the three metrics from Type Primitives.
 * This spells out which variable each one points at.
 */
export function bindingsFor(s: TextStyle): StyleBindings {
  return {
    fontFamily:    { collection: 'Type Config',     variable: `🟢 font-family/font-${s.family}` },
    fontWeight:    { collection: 'Type Config',     variable: `weight/wt-${s.weight}` },
    fontSize:      { collection: 'Type Primitives', variable: `font-size/${s.size}` },
    lineHeight:    s.leading  ? { collection: 'Type Primitives', variable: `line-height/${s.leading}` }  : null,
    letterSpacing: s.tracking ? { collection: 'Type Primitives', variable: `letter-spacing/${s.tracking}` } : null,
  };
}

/** Look one up by its Figma style name. */
export function getTextStyle(name: string): TextStyle | undefined {
  return TEXT_STYLES.find((s) => s.name === name);
}

/** Figma style names that exist in the file but are deliberately not in this database. */
export const EXCLUDED_STYLE_NAMES = ['Component/Balances/Label'] as const;

/**
 * Resolve the opaque `textStyleId` a text node reports into a style.
 *
 * Styles consumed from a shared library come back as `S:<key>,` with no name
 * attached — which is why reviewers used to have to ask the designer. The key
 * inside it is the same key this database stores, so the name is recoverable.
 *
 *   get_styled_text_segments(node, 'textStyleId') -> 'S:4b5515…202642,'
 *   resolveStyleId(that)                          -> Primary/Headlines/Block
 *
 * Returns `undefined` when the key is not in the database — which is a
 * finding, not a lookup failure: either the style was renamed or deleted, or
 * it is one of EXCLUDED_STYLE_NAMES. Check that list before raising an issue.
 */
export function resolveStyleId(textStyleId: string): TextStyle | undefined {
  const key = textStyleId.replace(/^S:/, '').replace(/,.*$/, '').trim();
  return TEXT_STYLES.find((s) => s.key === key);
}

/**
 * The size ramp each font setup was built against.
 *
 * NOT automatic. Type Config carries family and weight only, so switching a
 * file to Kakaibabe changes the typeface while leaving it on whatever ramp it
 * was already on. The pairing below is a design intent recorded in the mode
 * names and in each ramp's `builtFor` — ProxiBark is Proxima+BarkAda, MeowBark
 * is HeyMeow+BarkAda — not something Figma applies for you. Switching setup
 * and ramp together is a two-step operation.
 *
 * `hiraya` is `null` on purpose, not pending: the Hiraya mode is a family and
 * weight swap that keeps the existing metrics, so there is no ramp to pair it
 * with. See CONFIRMED / 'hiraya-no-ramp'.
 */
export const SETUP_METRICS: Record<FontSetup, MetricMode | null> = {
  bau: 'proxibark',
  kakaibabe: 'meowbark',
  hiraya: null,
};

// ── Deliberate exclusions ──────────────────────────────────────────────
/**
 * Figma variables that exist but are intentionally kept out of this database.
 * Recorded so the omission reads as a decision, not an oversight — and so
 * nobody "completes" the mirror by adding them back later.
 */
export const EXCLUDED_FROM_DB = [
  {
    collection: 'Text styles',
    variables: ['Component/Balances/Label'],
    reason:
      'The only component-scoped text style in the file — it sits outside the ' +
      'Primary/Secondary system every other style belongs to, and is scoped to one ' +
      'component rather than being a shared type role. Excluded at the DS owner\'s ' +
      'direction, leaving 53 styles that all resolve through the same two collections. ' +
      'Its leading token had never been read, so nothing is lost by dropping it.',
  },
  {
    collection: 'Type Primitives',
    variables: ['Nova mode (and the Nova G typeface)'],
    reason:
      'Out of scope for this database. Nova G is a fourth typeface that exists only ' +
      'as a Type Primitives ramp — Type Config has no Nova mode, so no font setup can ' +
      'select it and no text style can resolve to it. Nothing is lost numerically: the ' +
      'Nova ramp held values identical to MeowBark across all 47 variables.',
    verified:
      'get_variables, 2026-09-02: Type Config modes are BAU (3.0) / Kakaibabe (3.5) / ' +
      'Hiraya only. Nova appears in Type Primitives and in that collection\'s orphaned ' +
      'font-family pair, nowhere else.',
  },
  {
    collection: 'Type Primitives',
    variables: ['🔴 font-family/font-primary', '🔴 font-family/font-secondary'],
    reason:
      'Orphaned. Type Config consumes Type Primitives by alias — all 8 of its ' +
      'weight/wt-* roles are VARIABLE_ALIAS pointers into font-weight/*. But its ' +
      'two font-family variables hold raw strings instead of aliasing this pair, ' +
      'so nothing in the file references VariableID:2716:7209 or :7210: their only ' +
      'occurrences are their own definitions. They are a dead end left over from ' +
      'the single-collection setup, not a live source. Their modes could not serve ' +
      'as one anyway — no ramp carries a Hiraya value. Their VALUES are still worth ' +
      'something as documentation, though: they record which typeface each size ramp ' +
      'was built around, so they are preserved on MetricModeDef.builtFor rather than ' +
      'discarded.',
    verified:
      'get_variables, 2026-09-02: 4 textual occurrences of the two IDs, all of them ' +
      'the collection variableIds list and the definitions themselves. Zero inbound ' +
      'aliases.',
  },
] as const;

// ── Confirmed by the DS owner ──────────────────────────────────────────
/**
 * Things the data surfaced that LOOK like defects and are not. Each was put to
 * the DS owner and confirmed as intended on 2026-09-02. Recorded so nobody
 * re-raises them, and so nobody "fixes" them.
 */
export const CONFIRMED = [
  {
    id: 'hiraya-no-ramp',
    headline: 'Hiraya has no size ramp of its own, by design.',
    body: 'The Hiraya mode is a family-and-weight swap, not a re-scaling: both slots become Hiraya Sans and the existing metrics carry over. That is why Type Primitives gained no Hiraya mode, and why SETUP_METRICS.hiraya is null — there is no pairing to record. A Hiraya build renders on whichever ramp is already active.',
  },
  {
    id: 'hiraya-body-weight-collision',
    headline: 'Under Hiraya, body-light and body-default are both Regular — intended.',
    body: 'wt-body-light and wt-body-default deliberately collapse onto the same weight in this mode, so Secondary/Light/* and Secondary/Default/* render identically. This is the intended mapping, not a missing step. They stay distinct under BAU (Regular vs Medium) and Kakaibabe (Light vs Regular).',
  },
  {
    id: 'hiraya-family-collapse',
    headline: 'Under Hiraya, primary and secondary are the same family — intended.',
    body: 'font-primary and font-secondary both resolve to Hiraya Sans. The Primary/Secondary split in the text style names therefore carries weight and metrics only in this mode, and the names stay as they are.',
  },
  {
    id: 'epic-weight',
    headline: 'Primary/Headlines/Epic sits on the light heading weight — as authored.',
    body: 'Epic resolves through wt-heading-light (Semibold under BAU) while every other non-Light headline uses wt-heading-default, and it has no Light sibling. This matches the variable and the text style, and the database follows them rather than normalising it.',
  },
] as const;

// ── Gaps to close with the designer ────────────────────────────────────
/**
 * Read-offs that could not be completed, and structural questions the data
 * surfaced. Each is a question for the DS owner, not something to guess at.
 */
export const OPEN_QUESTIONS = [
  {
    id: 'letter-spacing-bindings',
    headline: 'Letter-spacing binding unread on 32 of 53 styles.',
    body: 'Of the five properties a text style binds, letter-spacing is the least witnessed. 20 come from specimen nodes (Label and Multi-line Label) and 1 from the Edit text style dialog (Secondary/Default/Large, 0 = tracking-normal). The other 32 — Headlines and Secondary Bold/Heavy/Light — are unread, because get_styles omits letterSpacing and the Text styles panel label does not show it. Worth noting the dialogs seen so far show line-height with a variable chip but letter-spacing as a plain number, so it is not yet confirmed that letter-spacing is variable-bound at all rather than typed in per style.',
  },
  {
    id: 'extrabold-no-numeric',
    headline: 'font-extrabold has no numeric counterpart.',
    body: 'font-weight/font-extrabold exists in Type Primitives but font-wt-num has no extrabold entry, so an Extrabold style cannot be given a CSS weight from tokens. No current text style uses it.',
  },
] as const;
