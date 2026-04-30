/*
 * Shared TypeScript types for component assessment data.
 * One schema used by all 79 component data files.
 */

// ── Badges ─────────────────────────────────────────────────────────────
export type DSVerdict = 'keep' | 'fix' | 'restructure' | 'consolidate' | 'product-layer' | 'remove';
export type NativeStatus = 'ready' | 'refine' | 'rework' | 'na' | 'fix' | 'empty';

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
export type CriterionId = 'C1' | 'C2' | 'C3' | 'C4' | 'C5' | 'C6' | 'C7';

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
  label: string;                       // shown next to the select (e.g. "State")
  prop: string;                        // arg passed to updateSpecCard (e.g. "state")
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
  title: string;
  node: string;
  description: string;
  previewHtml?: string;
  /** Optional interactive controls — when present, the spec card
      renders the legacy preview-plus-panel layout instead of the
      static preview. */
  demoControls?: DemoControlSection[];
  sections: SpecSection[];
  swift: string;
  compose: string;
}

// ── Colors by State (shared table under spec cards) ───────────────────
export interface ColorsTableRow {
  role: string;
  token: string;
  values: string[];      // aligned to columns
}

export interface ColorsTable {
  title: string;
  description?: string;
  columns: string[];     // e.g. ['Default', 'Pressed', 'Disabled']
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
  status: 'ready' | 'refine' | 'rework' | 'na' | 'fix' | 'empty';
  statusLabel: string;
  notes: string;
}

// ── Code tab: Code Connect readiness ──────────────────────────────────
export interface CodeConnectRow {
  aspect: string;
  status: 'ready' | 'refine' | 'rework' | 'na' | 'fix' | 'empty';
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

  // Overview tab
  overview: {
    inContextImage?: string;
    inContextAlt?: string;
    inContextNote?: string;
    inContextHtml?: string;      // raw HTML inside .ctx-wrap (SVG placeholder, <img>, etc.)
    livePreviewHtml?: string;    // raw HTML inside .demo-panel (preview + figma panel)
    traits: Trait[];
    behavior: BehaviorRow[];
    resolved: IssueItem[];
    open: IssueItem[];
    recommendations: RecommendItem[];
  };

  // Style tab
  style: {
    heading?: string;
    description?: string;
    specCards: SpecCardData[];
    colorsTables?: ColorsTable[];    // one per card, in same order
  };

  // Code tab
  code: {
    installation: Installation;
    propertyMapping: PropertyMapping;
    usageSnippets: UsageSnippet[];
    accessibility: AccessibilityRow[];
    usageGuidelines: GuidelinePair[];
    scorecard: ScorecardRow[];
    codeConnect: CodeConnectRow[];
    variants: VariantsInventoryData;
  };

  // Changelog tab
  changelog: ChangelogEntry[];
}
