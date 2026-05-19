import type { ComponentData, DemoControlSection } from '../types';
import { buildMultiModeColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(demoKey, prop, value)`
// in `public/scripts/demos/toggle-segmented-control.js`.
const toggleSegmentedControlDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Selected',
        prop: 'selected',
        defaultValue: 'first',
        options: [
          { value: 'first',  label: 'First' },
          { value: 'second', label: 'Second' },
        ],
      },
    ],
  },
];

export const toggleSegmentedControl: ComponentData = {
  meta: {
    slug: 'toggle-segmented-control',
    name: 'Toggle - Segmented Control',
    node: '27:30929',
    figmaUrl: 'https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=27-30929',
    description: 'A 2-option segmented control where the selected segment is filled brand-blue and the unselected segment carries a brand-blue outline.',
    badges: [
      { kind: 'fix', label: 'Fix' },
      { kind: 'refine', label: 'Needs Refinement' },
    ],
    navGroup: 'Toggle',
    verdict: {
      kind: 'fix',
      title: 'Promote to a data-driven segmented control + add coverage states',
      text: 'Today\'s component locks in two segments via two manual variants (<code>selected=first</code> / <code>selected=second</code>). That doesn\'t scale to 3+ options and forces consumers to detach for any non-binary case. Recommendation: ship one <code>EBSegmentedControl</code> with a <code>segments: [Segment]</code> array and a <code>selectedIndex</code> prop. The visual treatment (filled-on-selected / outlined-on-unselected) stays. Also add Pressed, Focused, and Disabled state coverage — currently only Default exists.',
    },
  },
  overview: {
    inContextNote: 'Used in filters, list-view toggles ("List / Grid"), and binary-mode pickers ("Send / Receive", "Daily / Monthly"). Sits inline above a content area and switches what\'s rendered below.',
    inContextHtml: '<div class="ctx-placeholder">\n      <svg width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <rect x="20" y="10" width="180" height="100" rx="6" stroke="currentColor" stroke-width="1.2" opacity=".2"/>\n        <rect x="40" y="24" width="140" height="20" rx="4" fill="#005CE5" opacity=".10"/>\n        <rect x="40" y="24" width="70" height="20" rx="4" fill="#005CE5"/>\n        <text x="75" y="38" text-anchor="middle" fill="#FFF" font-size="9" font-weight="700" font-family="system-ui">Option 1</text>\n        <text x="145" y="38" text-anchor="middle" fill="#005CE5" font-size="9" font-weight="700" font-family="system-ui">Option 2</text>\n        <rect x="40" y="56" width="140" height="48" rx="6" fill="#F6F9FD" stroke="#E5EBF4"/>\n      </svg>\n    </div>',
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"tsc-demo-preview\"></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Selected</span><select class=\"demo-panel-select\" id=\"tsc-demo-selected\" onchange=\"_tscDemo.selected=this.value;updateToggleSegmentedControlDemo()\"><option value=\"first\" selected=\"\">First</option><option value=\"second\">Second</option></select></div></div></div></div>",
    traits: [
      { name: 'Reusable', rating: 'warn', note: 'Hard-locked to 2 segments. Any consumer needing 3+ segments must detach. A <code>segments: [Segment]</code> data prop would let one component cover every count.' },
      { name: 'Self-contained', rating: 'pass', note: 'Owns its own bg / border / label tokens. No external instance dependencies.' },
      { name: 'Consistent', rating: 'partial', note: 'Treatment is clear (filled selected, outlined unselected) but axis naming <code>selected=first|second</code> is positional. Should be <code>selectedIndex: Int</code> or <code>selected: SegmentID</code> in code.' },
      { name: 'Composable', rating: 'warn', note: 'Each segment\'s label is baked text. No slot for an icon-prefixed segment or a segment with a trailing count badge.' },
    ],
    behavior: [
      { state: 'Tap unselected segment', ios: 'yes', android: 'yes', property: 'Switches selectedIndex', notes: 'Pressed state on the tapped segment isn\'t modeled — should preview the destination on touch-down, commit on touch-up.' },
      { state: 'Tap selected segment', ios: 'na', android: 'na', property: 'No-op', notes: 'Re-tapping the selected segment should be a no-op (or, optionally, reset to a default). Not spec\'d.' },
      { state: 'Pressed', ios: 'na', android: 'na', property: 'Not modeled', notes: 'Need a transient pressed treatment (e.g. 8% darken on bg, segment scale 0.97) for tap feedback.' },
      { state: 'Focused (keyboard / a11y)', ios: 'na', android: 'na', property: 'Not modeled', notes: 'No visible focus ring. Important for accessible web embeds and Android TV.' },
      { state: 'Disabled', ios: 'na', android: 'na', property: 'Not modeled', notes: 'No disabled state spec\'d — a control inside a form needs one.' },
    ],
    resolved: [],
    open: [
      {
        headline: 'Component locks 2 segments via positional variants.',
        body: '<code>selected=first|second</code> means consumers stuck with exactly two segments. List-view toggles, period pickers, and filter chips frequently want 3+ segments. Replace with <code>segments: [Segment]</code> + <code>selectedIndex: Int</code> so one component covers every count.',
        tag: { criterion: 'C1', label: 'C1 · Layer Structure & Naming' },
      },
      {
        headline: 'Positional naming in the selection axis.',
        body: '<code>first</code> / <code>second</code> are not semantic — they refer to position, not value. If the segments are reordered, the prop value\'s meaning shifts. Use <code>selectedIndex: Int</code> (or <code>selected: Segment.ID</code>) so the prop is stable.',
        tag: { criterion: 'C2', label: 'C2 · Variant & Property Naming' },
      },
      {
        headline: 'No Pressed / Focused / Disabled state.',
        body: 'Only Default state is modeled. A toggle control inside a form needs disabled coverage; an accessible web embed needs a keyboard focus ring; tap targets need a transient pressed treatment.',
        tag: { criterion: 'C5', label: 'C5 · Interaction State Coverage' },
      },
      {
        headline: 'Segment label is baked text — no icon or count slot.',
        body: 'Real-world segmented controls often need a leading icon ("⊞ Grid" / "≡ List") or a trailing count ("Unread (12)"). The component doesn\'t expose slots for either; consumers detach.',
        tag: { criterion: 'C4', label: 'C4 · Native Mappability' },
      },
      {
        headline: 'Equal-width 168 segments are hardcoded.',
        body: 'Total 336 × 40. For 3-segment use cases the math breaks (112 each? 168/n?). A data-driven control would distribute available width across the segment count automatically.',
        tag: { criterion: 'C1', label: 'C1 · Layer Structure & Naming' },
      },
      {
        headline: 'Code Connect mappings not registered.',
        body: 'Blocked on the data-driven restructure — once <code>segments</code> is an array, Code Connect can register a single <code>EBSegmentedControl</code> mapping instead of per-variant entries.',
        tag: { criterion: 'C7', label: 'C7 · Code Connect Linkability' },
      },
    ],
    recommendations: [
      {
        headline: 'Promote to a data-driven <code>EBSegmentedControl</code>.',
        body: 'Target API: <code>EBSegmentedControl(segments: [Segment], selectedIndex: Int, onChange: (Int) -> Void)</code> where <code>Segment = { id, label, icon?, badge? }</code>. Covers 2-, 3-, 4-segment cases with no per-count variants in Figma.',
        tag: 'Property',
      },
      {
        headline: 'Rename the selected axis to be data-stable.',
        body: 'Use <code>selectedIndex: Int</code> (or a <code>selected: SegmentID</code> string) so the value\'s meaning doesn\'t shift if segments are reordered.',
        tag: 'Rename',
      },
      {
        headline: 'Add Pressed, Focused, and Disabled state coverage.',
        body: 'Pressed: subtle darken on bg + 0.97 scale on touch-down. Focused: 2px outline (offset 2) for keyboard nav. Disabled: 40% opacity on the whole row, pointer-events: none.',
        tag: 'State',
      },
      {
        headline: 'Expose leading-icon + trailing-badge slots per segment.',
        body: 'Common segmented-control patterns prefix segments with an icon ("⊞ Grid") or append a count badge ("Unread (12)"). Both need named slots so consumers don\'t detach.',
        tag: 'Slot',
      },
      {
        headline: 'Distribute segment width evenly via flex.',
        body: 'Don\'t hardcode 168 per segment. Use flex:1 on each so a 3-segment control divides 336 / 3 = 112 each automatically, with no Figma rework needed.',
        tag: 'Property',
      },
      {
        headline: 'Document the A11y model.',
        body: 'Role: <code>tablist</code> with each segment as <code>tab</code>, currently selected gets <code>aria-selected="true"</code>. Keyboard: ←/→ to move, Space/Enter to commit. VoiceOver: "Tab, 1 of 2, selected".',
        tag: 'A11y',
      },
    ],
  },
  style: {
    heading: 'Types',
    specCards: [
      {
        cardKey: 'default',
        demoKey: 'default',
        demoControls: toggleSegmentedControlDemoControls,
        title: 'Default',
        node: '27:30930',
        description: '336 × 40 control with two 168-wide segments. Selected segment fills with brand-blue (#005CE5) and shows white label; the other segment carries a 1.5px brand-blue outline and a brand-blue label.',
        sections: [
          {
            label: 'Properties',
            slug: 'props',
            rows: [
              { key: 'Selected', value: 'First', prop: 'selected' },
            ],
          },
          {
            label: 'Colors',
            slug: 'colors',
            rows: [
              { key: 'Selected bg',      value: '#005CE5', token: 'toggle-segmented-control/color/selected/bg' },
              { key: 'Selected label',   value: '#FFFFFF', token: 'toggle-segmented-control/color/selected/label' },
              { key: 'Unselected bg',    value: '#FFFFFF', token: 'toggle-segmented-control/color/unselected/bg' },
              { key: 'Unselected border', value: '#005CE5', token: 'toggle-segmented-control/color/unselected/border' },
              { key: 'Unselected label', value: '#005CE5', token: 'toggle-segmented-control/color/unselected/label' },
            ],
          },
          {
            label: 'Layout',
            slug: 'layout',
            rows: [
              { key: 'Control',       value: '336 × 40',  mono: true },
              { key: 'Segment',       value: '168 × 40',  mono: true },
              { key: 'Padding',       value: '12 vert · 16 horiz', mono: true },
              { key: 'Border radius', value: '6',         mono: true },
              { key: 'Border width',  value: '1.5 (unselected only)', mono: true },
            ],
          },
          {
            label: 'Typography',
            slug: 'typo',
            rows: [
              { key: 'Label', value: 'Proxima Soft Bold · 16 / 16 · +0.25', mono: true },
            ],
          },
        ],
        swift: '<span class="syn-type">EBSegmentedControl</span><span class="syn-punc">(</span>\n    segments<span class="syn-punc">: </span><span class="syn-punc">[</span><span class="syn-str">"Option 1"</span><span class="syn-punc">, </span><span class="syn-str">"Option 2"</span><span class="syn-punc">]</span><span class="syn-punc">,</span>\n    selectedIndex<span class="syn-punc">: </span>$selected\n<span class="syn-punc">)</span>',
        compose: '<span class="syn-type">EBSegmentedControl</span><span class="syn-punc">(</span>\n    segments <span class="syn-eq">=</span> listOf<span class="syn-punc">(</span><span class="syn-str">"Option 1"</span><span class="syn-punc">, </span><span class="syn-str">"Option 2"</span><span class="syn-punc">)</span><span class="syn-punc">,</span>\n    selectedIndex <span class="syn-eq">=</span> selected<span class="syn-punc">,</span>\n    onSelectionChange <span class="syn-eq">=</span> <span class="syn-punc">{ selected = it }</span>\n<span class="syn-punc">)</span>',
        previewHtml: '<div id="tsc-spec-preview"></div>',
      },
    ],
    colorsTables: [
      buildMultiModeColorsTable({
        title: 'Colors by Selection',
        description: 'Selected segment fills with brand-blue; unselected segment carries an outline of the same brand-blue.',
        modes: ['Selected', 'Unselected'],
        rows: [
          { role: 'Background', token: 'toggle-segmented-control/color/{state}/bg',     values: ['#005CE5', '#FFFFFF'] },
          { role: 'Border',     token: 'toggle-segmented-control/color/{state}/border', values: ['none',    '#005CE5'] },
          { role: 'Label',      token: 'toggle-segmented-control/color/{state}/label',  values: ['#FFFFFF', '#005CE5'] },
        ],
      }),
    ],
  },
  code: {
    installation: { planned: true, blocks: [] },
    propertyMapping: {
      description: 'Today\'s 2-variant axis maps to a single data-driven control once promoted. The table reflects the proposed shape.',
      rows: [
        { figma: 'selected=first / second', swift: 'selectedIndex: Int', compose: 'selectedIndex: Int' },
        { figma: '(implicit 2 segments)', swift: 'segments: [Segment]', compose: 'segments: List<Segment>' },
        { figma: 'segment label', swift: 'Segment.label: String', compose: 'Segment.label: String' },
        { figma: '(no leading icon today)', swift: 'Segment.icon: Image?', compose: 'Segment.icon: ImageVector?' },
        { figma: '(no count badge today)', swift: 'Segment.badge: Int?', compose: 'Segment.badge: Int?' },
        { figma: '(no callback today)', swift: 'onSelectionChange: (Int) -> Void', compose: 'onSelectionChange: (Int) -> Unit' },
      ],
      filePaths: {
        swift: 'ios/Components/SegmentedControl/EBSegmentedControl.swift',
        compose: 'android/components/segmentedcontrol/EBSegmentedControl.kt',
      },
    },
    usageSnippets: [],
    accessibility: [
      { requirement: 'Role', ios: 'Use a custom <code>UISegmentedControl</code>-style trait. Each segment is a <code>.button</code> with <code>.isSelected</code> trait set on the active one.', android: 'Apply <code>Role.RadioButton</code> on each segment + <code>Modifier.selectableGroup</code> on the row.' },
      { requirement: 'Selection announce', ios: 'Use <code>accessibilityValue</code> = "Option 1, 1 of 2, selected". Avoid relying on visual color alone.', android: 'Use <code>contentDescription</code> = "Option 1, 1 of 2, selected".' },
      { requirement: 'Keyboard / focus', ios: '←/→ arrows move selection; Space/Enter commits. Visible focus ring is mandatory in non-touch contexts.', android: 'DPAD ←/→ moves selection; Enter commits. Use <code>Modifier.focusable()</code> with a visible indicator.' },
      { requirement: 'Disabled', ios: 'Set <code>.disabled(true)</code> on the row; segments are not focusable.', android: 'Set <code>enabled = false</code>; segments not focusable; opacity 0.4.' },
      { requirement: 'Tap target', ios: '≥ 44 × 44 hit area per segment. With segments at 168 × 40, vertical hit area needs 4 px extension via <code>.contentShape</code>.', android: '≥ 48 dp touch target. Use <code>Modifier.minimumInteractiveComponentSize()</code> when segments fall below.' },
    ],
    usageGuidelines: [],
    scorecard: [
      { id: 'C1', criterion: 'Layer Structure & Naming', status: 'rework', statusLabel: 'Requires Rework', notes: 'Two manual variants for what should be a data-driven <code>segments</code> array.' },
      { id: 'C2', criterion: 'Variant & Property Naming', status: 'refine', statusLabel: 'Needs Refinement', notes: '<code>selected=first|second</code> is positional. Use <code>selectedIndex: Int</code>.' },
      { id: 'C3', criterion: 'Token Coverage', status: 'refine', statusLabel: 'Needs Refinement', notes: 'Hex values consistent but no <code>toggle-segmented-control/*</code> token namespace registered.' },
      { id: 'C4', criterion: 'Native Mappability', status: 'refine', statusLabel: 'Needs Refinement', notes: 'No leading-icon or count-badge slots per segment. Common segmented-control patterns can\'t be expressed.' },
      { id: 'C5', criterion: 'Interaction State Coverage', status: 'rework', statusLabel: 'Requires Rework', notes: 'Only Default. No Pressed / Focused / Disabled.' },
      { id: 'C6', criterion: 'Asset & Icon Quality', status: 'na', statusLabel: 'Not Applicable', notes: 'No assets in v1 (text only). When icon slot lands, must accept vector instances.' },
      { id: 'C7', criterion: 'Code Connect Linkability', status: 'empty', statusLabel: 'Not Mapped', notes: 'Blocked until data-driven restructure lands.' },
    ],
    codeConnect: [],
    variants: {
      total: 2,
      description: 'Two variants on a single <code>selected</code> axis (<code>first</code> | <code>second</code>). Same visual treatment; only which segment is filled differs.',
      columns: ['#', 'selected', 'Size', 'Node'],
      rows: [
        { cells: ['1', 'first',  '336 × 40', '<code>27:30930</code>'] },
        { cells: ['2', 'second', '336 × 40', '<code>27:30935</code>'] },
      ],
    },
  },
  changelog: [
    {
      version: '1.0.0',
      date: '2026-05-19',
      kind: 'major',
      kindLabel: 'Major',
      header: 'Initial Assessment · node 27:30929',
      rows: [
        { body: '<strong>Component assessed</strong> — 2 variants on <code>selected</code> axis. Used in list-view toggles, period pickers, filter chips. <span class="tag-fixed">Documented</span>', delta: { kind: 'resolved', label: 'Initial' } },
        { body: '<strong>Verdict: Fix</strong> — Promote to data-driven <code>EBSegmentedControl</code> with <code>segments</code> array + <code>selectedIndex</code> prop. Add Pressed / Focused / Disabled state coverage. <span class="tag-open tag-c1 tag-c2 tag-c5">Open</span>', delta: { kind: 'open', label: 'Family' } },
        { body: '<strong>C1 — Hardcoded segment count</strong> — Two manual variants lock the count at 2. Replace with <code>segments: [Segment]</code> array. <span class="tag-open tag-c1">Open</span>', delta: { kind: 'open', label: 'C1' } },
        { body: '<strong>C2 — Positional naming</strong> — <code>selected=first|second</code> not stable under reorder. Use <code>selectedIndex: Int</code>. <span class="tag-open tag-c2">Open</span>', delta: { kind: 'open', label: 'C2' } },
        { body: '<strong>C5 — Missing states</strong> — No Pressed, Focused, or Disabled state spec\'d. <span class="tag-open tag-c5">Open</span>', delta: { kind: 'open', label: 'C5' } },
        { body: '<strong>C7 — Code Connect</strong> — Not registered. Blocked on restructure. <span class="tag-open tag-c7">Open</span>', delta: { kind: 'open', label: 'C7' } },
      ],
    },
  ],
};
