/*
 * Shared TypeScript types for component assessment data.
 * One schema for every component file in src/content/components/<slug>.json,
 * loaded through src/data/components/from-json.mjs.
 * Rules for each field live in workflows/build/ — one guide per tab.
 */

// ── Badges ─────────────────────────────────────────────────────────────
export type DSVerdict = 'keep' | 'fix' | 'restructure' | 'consolidate' | 'product-layer' | 'remove';
export type NativeStatus = 'ready' | 'refine' | 'rework' | 'na' | 'fix';

export interface Badge {
  kind: DSVerdict | NativeStatus;
  label: string;
}

// ── Verdict box ────────────────────────────────────────────────────────
export interface VerdictInline {
  kind: DSVerdict;
  title: string;
  text: string;
}

// ── Component header ───────────────────────────────────────────────────
export interface ComponentMeta {
  slug: string;
  name: string;
  node: string;
  figmaUrl: string;
  description: string;
  badges: Badge[];
  verdict?: VerdictInline;
  navGroup?: string;          // family this component belongs to (e.g. "Avatar", "Form Elements")
  navIconSvg?: string;        // optional 32×32 thumbnail SVG markup for sidebar
}

// ── DS Health trait ────────────────────────────────────────────────────
export type TraitRating = 'pass' | 'partial' | 'warn' | 'fail';

export interface Trait {
  name: string;
  rating: TraitRating;
  note: string;
}

// ── Behavior table ─────────────────────────────────────────────────────
export interface BehaviorRow {
  state: string;
  ios: 'yes' | 'no' | 'na';
  android: 'yes' | 'no' | 'na';
  property: string;
  notes: string;
}

// ── Issue lists (resolved / open) ─────────────────────────────────────
// C7 (Code Connect Linkability) is not scored until the native library
// ships, so it never appears on a page.
export type CriterionId = 'C1' | 'C2' | 'C3' | 'C4' | 'C5' | 'C6';

export interface IssueItem {
  headline?: string;
  body: string;
  tag?: {
    criterion: CriterionId;
    label: string;
  };
}

// ── Recommendations ────────────────────────────────────────────────────
export type RecommendTag =
  | 'Rename' | 'Property' | 'Slot' | 'State' | 'Token'
  | 'Asset' | 'Composition' | 'Family' | 'A11y' | 'Docs';

export interface RecommendItem {
  headline: string;
  body: string;
  tag: RecommendTag;
}

// ── Spec card (Style tab) ──────────────────────────────────────────────
export interface SpecRow {
  key: string;
  value: string;
  mono?: boolean;
  /** Optional design-token path. When set, the row renders the value
      as a coloured swatch + hex on top and this token path underneath
      (replaces the legacy paired `"X" / "X token"` row pattern). */
  token?: string;
  /** When `true`, the value is treated as a hex string and prefixed
      with a coloured swatch dot. Inferred automatically when `value`
      starts with `#`. */
  swatch?: boolean;
  /** When set, the value cell gets `data-sp="{demoKey}-{prop}"` so
      the per-component demo script can update it on dropdown change. */
  prop?: string;
  /**
   * Per-variant override map (Plan A — dynamic spec-detail sections).
   *
   * Lets Properties / Colors / Layout / Typography rows re-render based
   * on the user's current demo-control selections, without component-
   * specific JS. Add it to any row that should change with a control;
   * skip it for rows that stay constant.
   *
   * ## Key shape
   * Single prop: `"<prop>:<value>"` — e.g. `"cta:2-vertical"`, `"size:small"`
   *
   * Compound (multi-prop, joined with `|`):
   *   `"<p1>:<v1>|<p2>:<v2>"` — e.g. `"appearance:destructive|state:pressed"`.
   * Compound keys are tried first; if no match, each single-prop key is
   * tried in turn. Values must match the demo-control option `value`
   * exactly (usually lowercase: `"default"`, not `"Default"`).
   *
   * ## What can be overridden
   * `value` (text + auto-swatch), `token` (path under the row), `mono`
   * (monospace font), `swatch` (force-show colour swatch). Default
   * fields on the parent row are the fallback when no variant matches.
   *
   * Also supports `hide: true` — when the variant key matches, the row
   * is hidden entirely (display:none). Use when a row's content simply
   * does not apply to the current demo state (e.g. the "Counter pill"
   * color row when state=loading shows a skeleton instead).
   *
   * ## Example
   * ```ts
   * // Modal Card 1: Layout section
   * {
   *   key: 'Height',
   *   value: '212',     // shown for cta:1, cta:1-vertical, cta:2-horizontal
   *   mono: true,
   *   variants: {
   *     'cta:2-vertical': { value: '270' },  // 270 only when cta=2-vertical
   *   },
   * }
   * // Action-list-counter: hide Counter row when state=loading
   * { key: 'Counter', value: '#EEF2F9', token: 'counter/color/filled/bg',
   *   variants: { 'state:loading': { hide: true } } }
   * ```
   *
   * ## Wiring
   * - Renderer (`SpecCard.astro`) emits `data-row-card` + `data-row-variants`
   *   attributes when this field is set.
   * - Client patcher (`assessment.js → _patchSpecCardRows`) wraps every
   *   component's `window.updateSpecCard()` and patches matching rows
   *   on each demo-control change.
   * - Per-component state lives on `window._specCards[<cardKey>]` (set
   *   up by each component's demo script).
   */
  variants?: Record<string, Partial<Pick<SpecRow, 'value' | 'token' | 'mono' | 'swatch'>> & { hide?: boolean }>;
}

export interface SpecSection {
  label: string;
  rows: SpecRow[];
  /** Suffix used for the section's DOM id (`spec-{demoKey}-{slug}`),
      so the demo script can locate this section to re-render. Common
      values: `props`, `colors`, `layout`, `typo`. Falls back to a
      lower-cased `label` when omitted. */
  slug?: string;
}

// ── Per-card demo controls (Style tab) ────────────────────────────────
// Mirrors the legacy `.demo-figma-panel` markup. Each row renders a
// labelled <select>; changes invoke `updateSpecCard(cardKey, prop, val)`
// which is defined in the per-component demo script
// (`public/scripts/demos/<slug>.js`).
export interface DemoControlOption {
  value: string;
  label: string;
}
export interface DemoControlRow {
  label: string;                       // shown next to the control (e.g. "State")
  prop: string;                        // arg passed to updateSpecCard (e.g. "state")
  /** Render style. Defaults to 'select' for backwards compatibility.
      'toggle' renders an on/off switch — useful for boolean props
      (show/hide, true/false, yes/no). When 'toggle', the row's first
      option value = "off" and the second = "on".
      'input' renders a text field — for Figma text properties. It reads
      `defaultValue` as its starting text and ignores `options`, which
      may be left empty. */
  control?: 'select' | 'toggle' | 'input';
  options: DemoControlOption[];
  defaultValue?: string;               // initially selected option's value
}
export interface DemoControlSection {
  heading: string;                     // "Properties" / "Mode"
  rows: DemoControlRow[];
}

export interface SpecCardData {
  cardKey: string;
  /** Style key passed to `updateSpecCard(cardStyle, prop, value)` from
      the per-component demo script. Often shorter than `cardKey`
      (e.g. `'filled'` instead of `'btn-spec-filled'`). Defaults to
      `cardKey` when omitted. */
  demoKey?: string;
  /** The driving-property value, bare: "Banner", not "Style=Banner". */
  title: string;
  /** Figma node id — wiring for reviewers, not rendered. */
  node: string;
  previewHtml?: string;
  /** Optional interactive controls — when present, the spec card
      renders the legacy preview-plus-panel layout instead of the
      static preview. */
  demoControls?: DemoControlSection[];
  sections: SpecSection[];
  swift: string;
  compose: string;
}

// ── Colors table (shared table under spec cards) ──────────────────────
// Target shape: Role │ Element │ Token │ Value — `columns: ['Value']`,
// one row per element, grouped by the driving-property value (`role`).
// Rows without `element` render as Role │ Token │ …columns until they
// are rewritten to the target shape.
export interface ColorsTableRow {
  role: string;
  /** The part a developer paints: Background, Border, Title, Icon… */
  element?: string;
  token: string;
  values: string[];      // aligned to columns
}

export interface ColorsTable {
  title: string;
  description?: string;
  columns: string[];     // target: ['Value']
  rows: ColorsTableRow[];
}

// ── Code tab: Installation ─────────────────────────────────────────────
export interface CodeBlock {
  label: string;
  code: string;           // HTML — may contain <span class="syn-*"> marks
}

export interface Installation {
  planned: boolean;
  blocks: CodeBlock[];
  footnote?: string;
}

// ── Code tab: Property Mapping ─────────────────────────────────────────
export interface PropertyMappingRow {
  figma: string;
  swift: string;
  compose: string;
}

export interface PropertyMapping {
  description?: string;
  rows: PropertyMappingRow[];
  filePaths?: { swift: string; compose: string };
}

// ── Code tab: Usage snippets ───────────────────────────────────────────
export interface UsageSnippet {
  subheading: string;
  swift: string;
  compose: string;
}

// ── Code tab: Accessibility ────────────────────────────────────────────
export interface AccessibilityRow {
  requirement: string;
  ios: string;            // may contain <code>, <span>, etc.
  android: string;
}

// ── Code tab: Usage guideline ──────────────────────────────────────────
export interface GuidelinePair {
  doText: string;
  dontText: string;
}

// ── Code tab: Criteria scorecard ──────────────────────────────────────
export interface ScorecardRow {
  id: CriterionId;
  criterion: string;
  status: NativeStatus;
  statusLabel: string;
  notes: string;
}

// ── Code tab: Variants Inventory ──────────────────────────────────────
export interface VariantRow {
  cells: string[];
}

export interface VariantsInventoryData {
  total: number;
  description: string;
  columns: string[];
  rows: VariantRow[];
  summary?: {                    // optional grouped summary (for >10 variants)
    columns: string[];
    rows: VariantRow[];
  };
  collapseLabel?: string;        // e.g. "View full Type × State breakdown (6 rows)"
}

// ── Changelog ──────────────────────────────────────────────────────────
export type ChangelogKind = 'major' | 'minor' | 'patch' | 'initial';
export type DeltaKind = 'resolved' | 'partial' | 'open';

export interface ChangelogRow {
  body: string;             // HTML-safe; may contain <code>, <strong>, <span class="tag-*">
  delta?: { kind: DeltaKind; label: string };
}

export interface ChangelogEntry {
  version: string;          // e.g. "1.4.0"
  date: string;             // e.g. "March 2026"
  kind: ChangelogKind;
  kindLabel: string;        // e.g. "Patch"
  header: string;           // e.g. "Changes Applied via Figma MCP · node 16870:9288"
  rows: ChangelogRow[];
}

// ── Full component data ────────────────────────────────────────────────
export interface ComponentData {
  meta: ComponentMeta;

  // Overview tab — In Context → Live Preview → DS Health → Behavior → Issues → Recommendations
  overview: {
    /** In Context — the component on a real screen. `inContextHtml` is raw
        HTML inside `.ctx-wrap` (an <img>, or the `.ctx-placeholder` SVG
        pattern until a screenshot exists); the note sits above it. */
    inContextNote?: string;
    inContextHtml?: string;
    inContextImage?: string;
    inContextAlt?: string;
    /**
     * Live preview HTML rendered on the Overview tab.
     *
     * REQUIRED CANONICAL STRUCTURE — guarded by
     * `npm run lint:previews` (scripts/audit/preview-structure-lint.mjs):
     *
     *   <div class="demo-layout">
     *     <div class="demo-preview" id="<scope>">…rendered component…</div>
     *     <div class="demo-figma-panel">
     *       <div class="demo-panel-section">
     *         <div class="demo-panel-heading">Properties</div>
     *         <div class="demo-panel-row">
     *           <span class="demo-panel-label">…</span>
     *           <select class="demo-panel-select" onchange="…">…</select>
     *         </div>
     *       </div>
     *     </div>
     *   </div>
     *
     * For catalog-style previews (no interactive controls), still include
     * `demo-figma-panel` with descriptive `demo-panel-row` entries so the
     * 2-column layout stays consistent across components.
     */
    livePreviewHtml?: string;
    /** Exactly four: Reusable · Self-contained · Consistent · Composable. */
    traits: Trait[];
    /** Required for interactive components; empty for display-only ones. */
    behavior: BehaviorRow[];
    resolved: IssueItem[];
    open: IssueItem[];
    recommendations: RecommendItem[];
    /** Recommendations that have shipped. Rendered as an "Applied
        Recommendations" block under Resolved Issues. Optional — only
        components whose recommendations have been applied populate it. */
    appliedRecommendations?: RecommendItem[];
  };

  // Style tab
  style: {
    heading?: string;
    description?: string;
    /**
     * Where this tab was read from. Written by every `Style Review` run.
     * `set` must equal `meta.node`; the sweep flags a Style tab whose stamp
     * is missing or points at another set — that is how a page that kept
     * an old node's values gets caught.
     */
    source?: {
      set: string;                   // component-set node id
      variants: number;              // variant count at read time
      read: string;                  // YYYY-MM-DD
      tool: 'talk-to-figma' | 'dev-mode-mcp';
    };
    /**
     * Opt in to the Playground tab. When true this component's Style tab is the
     * Playground — the layer data in `public/playground/<slug>.json`, read from
     * Figma by `scripts/playground/build.mjs` — and the hand-authored spec-card
     * rules (`S1`–`S12`) no longer apply to it; the `P*` rules do.
     *
     * The rollout is per component and deliberate: everything without this flag
     * still renders spec cards and is still governed by STYLE-REVIEW-GUIDE.md.
     */
    playground?: boolean;
    specCards: SpecCardData[];
    colorsTables?: ColorsTable[];    // one per card, in same order
  };

  // Code tab — Installation → Property Mapping → Usage Snippets →
  // Accessibility → Usage Guidelines → Scorecard (C1–C6) → Variants
  code: {
    installation: Installation;
    propertyMapping: PropertyMapping;
    usageSnippets: UsageSnippet[];
    accessibility: AccessibilityRow[];
    usageGuidelines: GuidelinePair[];
    scorecard: ScorecardRow[];
    variants: VariantsInventoryData;
  };

  // Changelog tab
  changelog: ChangelogEntry[];
}
