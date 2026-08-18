import type { ComponentData } from '../types';

export const segmentedControlButton: ComponentData = {
  meta: {
    slug: 'segmented-control-button',
    name: 'Segmented Control Button',
    node: '4111:10773',
    figmaUrl: 'https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4111-10773',
    description: 'A single tappable segment inside a Segmented Control. 6 variants across <code>State</code> (Default / Pressed / Disabled) × <code>Active</code> (true / false). Active segments fill brand-blue; inactive segments carry a brand-blue outline. (Assessed in the 2026 Working File.)',
    badges: [
      { kind: 'keep', label: 'Keep' },
      { kind: 'refine', label: 'Needs Refinement' },
    ],
    navGroup: 'Toggle',
    verdict: {
      kind: 'keep',
      title: 'Clean atom — complete state matrix',
      text: 'The single-segment atom for the Segmented Control family. Six variants cover the full <code>State</code> × <code>Active</code> matrix — including the pressed-active state — with token-bound fills (active <code>#005CE5</code>, pressed-active <code>#2340A9</code>, disabled <code>#9BC5FD</code>) and a token-bound outline for inactive segments. Booleans are lowercase <code>true</code>/<code>false</code>. <code>Active</code> is retained as the property name (intentional for this component rather than <code>isSelected</code>). Only Code Connect registration remains.',
    },
  },
  overview: {
    inContextNote: 'Not used standalone — the Segmented Control row composes N of these buttons, and the Segmented Control - Group wraps that row with a header and optional subtext.',
    livePreviewHtml: '<div class="demo-layout"><div class="demo-preview" id="scb-demo-preview"><div style="display:inline-flex;border:1.5px solid #005CE5;border-radius:6px;overflow:hidden;font-family:\'Proxima Soft\', system-ui;"><span style="background:#005CE5;color:#FFFFFF;font-weight:700;font-size:16px;padding:10px 16px;">Active</span><span style="color:#005CE5;font-weight:700;font-size:16px;padding:10px 16px;">Inactive</span></div></div><div class="demo-figma-panel"><div class="demo-panel-section"><div class="demo-panel-heading">Properties</div><div class="demo-panel-row"><span class="demo-panel-label">State</span><span class="demo-panel-value">Default · Pressed · Disabled</span></div><div class="demo-panel-row"><span class="demo-panel-label">Active</span><span class="demo-panel-value">true · false</span></div></div></div></div>',
    traits: [
      { name: 'Reusable', rating: 'pass', note: 'The one segment primitive for every Segmented Control — the row composes N instances at any count, so a single atom covers 2-, 3-, and 4-segment controls.' },
      { name: 'Self-contained', rating: 'pass', note: 'Owns its own fill, outline, label, and radius tokens across all six State × Active combinations. No external instance dependencies.' },
      { name: 'Consistent', rating: 'pass', note: 'Complete 3 × 2 matrix — <code>State</code> (Default / Pressed / Disabled) × <code>Active</code> (<code>true</code>/<code>false</code>), lowercase booleans. Active segments fill brand-blue, inactive carry the brand-blue outline; pressed and disabled shift the shade predictably.' },
      { name: 'Composable', rating: 'pass', note: 'Nests inside the Segmented Control row as an instance, so atom changes propagate to every segment across every item count.' },
    ],
    behavior: [
      { state: 'Active', ios: 'yes', android: 'yes', property: 'Active=true', notes: 'Fills brand-blue <code>#005CE5</code> with a white label. The currently-selected segment.' },
      { state: 'Inactive', ios: 'yes', android: 'yes', property: 'Active=false', notes: 'White fill with a 1.5px brand-blue outline and a brand-blue label.' },
      { state: 'Pressed', ios: 'yes', android: 'yes', property: 'State=Pressed', notes: 'Touch-down feedback — active darkens to <code>#2340A9</code>; inactive shows a light <code>#F6F9FD</code> (72%) fill under the outline.' },
      { state: 'Disabled', ios: 'yes', android: 'yes', property: 'State=Disabled', notes: 'Muted <code>#9BC5FD</code> for both active fill and inactive outline; tap blocked.' },
    ],
    resolved: [
      { body: 'v1.0: <code>Active</code> boolean moved to lowercase <code>true</code>/<code>false</code> (from <code>Yes</code>/<code>No</code>), matching the DS boolean standard. (C2)' },
      { body: 'v1.0: <code>State=Pressed, Active=true</code> variant added — the matrix is now the complete 3 × 2 = 6, so an already-active segment has a pressed treatment too (<code>#2340A9</code>). (C5)' },
      { body: 'v1.0: Segment label node renamed from <code>#value</code> to <code>label</code>. (C2)' },
    ],
    open: [
      { body: 'Code Connect mappings not registered. The schema and state coverage are settled, so registration is unblocked — but the SwiftUI / Compose mappings are not yet wired and the native component does not exist. Snippets remain a Planned API.', tag: { criterion: 'C7', label: 'C7 · Code Connect Linkability' } },
    ],
    recommendations: [
      { headline: 'Register Code Connect mapping to <code>EBSegment</code>.', body: 'Wire <code>State</code> and <code>Active</code> 1:1 to the SwiftUI / Compose segment API, forwarding from the parent <code>EBSegmentedControl</code>.', tag: 'Docs' },
    ],
    appliedRecommendations: [
      { headline: 'Normalize the <code>Active</code> boolean to <code>true</code>/<code>false</code>.', body: 'v1.0: Applied — lowercase, matching the DS standard.', tag: 'Rename' },
      { headline: 'Complete the State × Active matrix.', body: 'v1.0: Applied — added the missing pressed-active variant; the atom now ships all six combinations.', tag: 'State' },
    ],
  },
  style: {
    heading: 'States',
    specCards: [
      {
        cardKey: 'default',
        demoKey: 'default',
        title: 'Segment',
        node: '4111:10769',
        description: 'A single ~91 × 40 segment. Active fills brand-blue with a white label; inactive carries a 1.5px brand-blue outline. Pressed and Disabled shift the shade.',
        sections: [
          { label: 'Properties', slug: 'props', rows: [
            { key: 'State',  value: 'Default' },
            { key: 'Active', value: 'true' },
          ] },
          { label: 'Colors', slug: 'colors', rows: [
            { key: 'Active bg',        value: '#005CE5', token: 'segmented-control/color/active/bg' },
            { key: 'Active pressed bg', value: '#2340A9', token: 'segmented-control/color/active/pressed/bg' },
            { key: 'Active disabled bg', value: '#9BC5FD', token: 'segmented-control/color/active/disabled/bg' },
            { key: 'Inactive border', value: '#005CE5', token: 'segmented-control/color/inactive/border' },
            { key: 'Inactive pressed bg', value: '#F6F9FD', token: 'segmented-control/color/inactive/pressed/bg' },
            { key: 'Active label',    value: '#FFFFFF', token: 'segmented-control/color/active/label' },
            { key: 'Inactive label',  value: '#005CE5', token: 'segmented-control/color/inactive/label' },
          ] },
          { label: 'Layout', slug: 'layout', rows: [
            { key: 'Height',        value: '40', mono: true },
            { key: 'Padding',       value: '12 vert · 16 horiz', mono: true },
            { key: 'Border radius', value: '6 (row-level)', mono: true },
            { key: 'Border width',  value: '1.5 (inactive only)', mono: true },
          ] },
          { label: 'Typography', slug: 'typo', rows: [
            { key: 'Label', value: 'Proxima Soft Bold · 16 / 16 · +0.25', mono: true },
          ] },
        ],
        swift: '<span class="syn-comment">// Composed by EBSegmentedControl — not used directly</span>',
        compose: '<span class="syn-comment">// Composed by EBSegmentedControl — not used directly</span>',
        previewHtml: '<div id="scb-spec-preview"></div>',
      },
    ],
  },
  code: {
    installation: { planned: true, blocks: [] },
    propertyMapping: {
      description: 'The segment is composed by the parent Segmented Control; its two properties forward down from the control\'s selection + enabled state.',
      rows: [
        { figma: 'Active=true / false', swift: 'isSelected: Bool', compose: 'selected: Boolean' },
        { figma: 'State=Default / Pressed / Disabled', swift: 'derived (isPressed / isEnabled)', compose: 'derived (InteractionSource / enabled)' },
        { figma: 'label', swift: 'Segment.label: String', compose: 'Segment.label: String' },
      ],
      filePaths: {
        swift: 'ios/Components/SegmentedControl/EBSegment.swift',
        compose: 'android/components/segmentedcontrol/EBSegment.kt',
      },
    },
    usageSnippets: [],
    accessibility: [
      { requirement: 'Role', ios: 'Each segment is a <code>.button</code> with the <code>.isSelected</code> trait set on the active one.', android: 'Apply <code>Role.RadioButton</code> per segment inside the row\'s <code>Modifier.selectableGroup</code>.' },
      { requirement: 'Tap target', ios: '≥ 44 × 44 hit area. Extend vertically via <code>.contentShape</code> when the segment is below 44 tall.', android: '≥ 48 dp — <code>Modifier.minimumInteractiveComponentSize()</code>.' },
      { requirement: 'Disabled', ios: 'Not focusable; <code>.disabled(true)</code> from the parent control.', android: '<code>enabled = false</code>; not focusable.' },
    ],
    usageGuidelines: [],
    scorecard: [
      { id: 'C1', criterion: 'Layer Structure & Naming', status: 'ready', statusLabel: 'Ready', notes: 'Semantic names — <code>container</code> / <code>label</code>. The <code>#value</code> node was renamed to <code>label</code>.' },
      { id: 'C2', criterion: 'Variant & Property Naming', status: 'ready', statusLabel: 'Ready', notes: '<code>State</code> × <code>Active</code>, lowercase booleans. <code>Active</code> retained as the property name by design.' },
      { id: 'C3', criterion: 'Token Coverage', status: 'refine', statusLabel: 'Needs Refinement', notes: 'Hex values are consistent, but a <code>segmented-control/*</code> token namespace still needs registering.' },
      { id: 'C4', criterion: 'Native Mappability', status: 'ready', statusLabel: 'Ready', notes: 'Maps to a native segment; State derives at runtime, Active forwards from the parent.' },
      { id: 'C5', criterion: 'Interaction State Coverage', status: 'ready', statusLabel: 'Ready', notes: 'Complete 3 × 2 matrix — Default / Pressed / Disabled × active / inactive.' },
      { id: 'C6', criterion: 'Asset & Icon Quality', status: 'na', statusLabel: 'Not Applicable', notes: 'Text-only segment, no assets.' },
      { id: 'C7', criterion: 'Code Connect Linkability', status: 'empty', statusLabel: 'Not Mapped', notes: 'Unblocked; not yet registered, and the native component does not exist.' },
    ],
    codeConnect: [],
    variants: {
      total: 6,
      description: '<code>State</code> (Default / Pressed / Disabled) × <code>Active</code> (true / false) = 6. Complete matrix, no gaps.',
      columns: ['#', 'State', 'Active', 'Node'],
      rows: [
        { cells: ['1', 'Default',  'true',  '<code>4111:10769</code>'] },
        { cells: ['2', 'Pressed',  'true',  '<code>4715:18624</code>'] },
        { cells: ['3', 'Disabled', 'true',  '<code>4111:10758</code>'] },
        { cells: ['4', 'Default',  'false', '<code>4111:10757</code>'] },
        { cells: ['5', 'Pressed',  'false', '<code>4111:10756</code>'] },
        { cells: ['6', 'Disabled', 'false', '<code>4111:10755</code>'] },
      ],
    },
  },
  changelog: [
    {
      version: '1.0.0',
      date: 'July 2026',
      kind: 'major',
      kindLabel: 'Major',
      header: 'Initial Assessment · node 4111:10773',
      rows: [
        { body: '<strong>Component assessed</strong> — the single-segment atom for the Segmented Control family. 6 variants across <code>State</code> × <code>Active</code>. <span class="tag-fixed">Documented</span>', delta: { kind: 'resolved', label: 'Initial' } },
        { body: '<strong>Active boolean lowercased</strong> — <code>Yes</code>/<code>No</code> → <code>true</code>/<code>false</code>, matching the DS standard. <span class="tag-fixed">Resolved</span>', delta: { kind: 'resolved', label: 'C2 Resolved' } },
        { body: '<strong>Pressed-active variant added</strong> — completes the 3 × 2 matrix; an already-active segment now has a pressed treatment (<code>#2340A9</code>). <span class="tag-fixed">Resolved</span>', delta: { kind: 'resolved', label: 'C5 Resolved' } },
        { body: '<strong>Label node renamed</strong> — <code>#value</code> → <code>label</code>. <span class="tag-fixed">Resolved</span>', delta: { kind: 'resolved', label: 'C2 Resolved' } },
        { body: '<strong>Code Connect</strong> — unblocked; not yet registered. <span class="tag-open tag-c7">Open</span>', delta: { kind: 'open', label: 'C7 Open' } },
      ],
    },
  ],
};
