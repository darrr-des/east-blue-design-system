import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(demoKey, prop, value)`
// in `public/scripts/demos/slider.js`.
const sliderDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Value',
        prop: 'value',
        defaultValue: '50',
        options: [
          { value: '0',   label: '0%' },
          { value: '10',  label: '10%' },
          { value: '20',  label: '20%' },
          { value: '30',  label: '30%' },
          { value: '40',  label: '40%' },
          { value: '50',  label: '50%' },
          { value: '60',  label: '60%' },
          { value: '70',  label: '70%' },
          { value: '80',  label: '80%' },
          { value: '90',  label: '90%' },
          { value: '100', label: '100%' },
        ],
      },
    ],
  },
];

export const slider: ComponentData = {
  meta: {
    slug: 'slider',
    name: 'Slider',
    node: '3235:60722',
    figmaUrl: 'https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=3235-60722',
    description: 'A horizontal slider control with a continuous fill, a 16×16 knob, and a small percentage tooltip above the knob.',
    badges: [
      { kind: 'restructure', label: 'Restructure' },
      { kind: 'rework', label: 'Requires Rework' },
    ],
    verdict: {
      kind: 'restructure',
      title: 'Collapse 11 discrete variants into one continuous slider primitive',
      text: 'The component set ships 11 variants in 10% increments (0%, 10%, 20%, …, 100%). That treats a continuous value as a discrete enum and forces consumers to either pick the nearest variant (lossy) or detach (defeats the system). Replace with one <code>EBSlider</code> primitive that takes <code>value: Double</code>, <code>range: ClosedRange<Double></code>, and <code>step: Double?</code>; the fill width is computed at render time. Also missing: Pressed (knob drag), Focused (keyboard), and Disabled state coverage.',
    },
  },
  overview: {
    inContextNote: 'Used in volume / brightness pickers, transfer-amount approximations (e.g. "use X% of your wallet"), and progress-style settings (e.g. "Round-up to nearest …%"). On phone widths the entire control sits in a 360–366 px row.',
    inContextHtml: '<div class="ctx-placeholder">\n      <svg width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <rect x="20" y="10" width="180" height="100" rx="6" stroke="currentColor" stroke-width="1.2" opacity=".2"/>\n        <text x="40" y="36" fill="#0A2757" font-size="9" font-weight="600" font-family="system-ui">Round-up</text>\n        <rect x="40" y="55" width="140" height="6" rx="3" fill="#D2E5FF"/>\n        <rect x="40" y="55" width="70" height="6" rx="3" fill="#005CE5"/>\n        <circle cx="110" cy="58" r="6" fill="#FFFFFF" stroke="#E5EBF4"/>\n        <rect x="98" y="36" width="24" height="14" rx="3" fill="#005CE5"/>\n        <text  x="110" y="46" fill="#FFF" font-size="8" font-weight="700" text-anchor="middle" font-family="system-ui">50%</text>\n      </svg>\n    </div>',
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"sl-demo-preview\"></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Value</span><select class=\"demo-panel-select\" id=\"sl-demo-value\" onchange=\"_slDemo.value=parseInt(this.value,10);updateSliderDemo()\"><option value=\"0\">0%</option><option value=\"10\">10%</option><option value=\"20\">20%</option><option value=\"30\">30%</option><option value=\"40\">40%</option><option value=\"50\" selected=\"\">50%</option><option value=\"60\">60%</option><option value=\"70\">70%</option><option value=\"80\">80%</option><option value=\"90\">90%</option><option value=\"100\">100%</option></select></div></div></div></div>",
    traits: [
      { name: 'Reusable', rating: 'fail', note: '11 discrete variants for a continuous value. Any consumer who needs 73% has to either pick "70%" / "80%" (lossy) or detach. The component is fundamentally the wrong shape for the data it represents.' },
      { name: 'Self-contained', rating: 'pass', note: 'Track, fill, knob, and tooltip all live inside the component with no external instance dependencies. Cleanly self-contained.' },
      { name: 'Consistent', rating: 'partial', note: 'Geometry, colors, and tooltip treatment are consistent across the 11 variants. Naming is consistent (<code>value=0%</code> through <code>value=100%</code>) but the format is decorative; the actual value is the meaningful part.' },
      { name: 'Composable', rating: 'warn', note: 'Tooltip text is baked. Real-world sliders often show a different label (e.g. "$1,200" instead of "50%") or hide the tooltip entirely. No slot for the tooltip content.' },
    ],
    behavior: [
      { state: 'Drag knob', ios: 'na', android: 'na', property: 'Not modeled', notes: 'No Pressed treatment on the knob during drag. Common pattern: knob enlarges to 24 × 24 with a soft halo while held.' },
      { state: 'Tap track', ios: 'na', android: 'na', property: 'Not modeled', notes: 'Tapping a position on the track should jump the knob there with a short animation. Not spec\'d.' },
      { state: 'Keyboard / focus', ios: 'na', android: 'na', property: 'Not modeled', notes: '←/→ should nudge by step, Shift+←/→ by 10×step. No visible focus ring spec.' },
      { state: 'Disabled', ios: 'na', android: 'na', property: 'Not modeled', notes: 'No disabled appearance. Track and knob should both dim; pointer-events disabled.' },
      { state: 'Tooltip visibility', ios: 'na', android: 'na', property: 'Always-on', notes: 'Tooltip is always visible across all 11 variants. Typical mobile pattern is to show only while dragging, with a fade-in/out.' },
      { state: 'Value live region', ios: 'na', android: 'na', property: 'Not modeled', notes: 'For accessibility, the value should announce on change ("50 percent") via a polite live region, debounced.' },
    ],
    resolved: [],
    open: [
      {
        headline: '11 variants for a continuous value.',
        body: 'The component models position as a 10%-stepped enum (<code>value=0%</code> … <code>value=100%</code>). This isn\'t how sliders work — they\'re continuous. Replace with a single <code>EBSlider(value: Double, in: range, step: step?)</code> primitive that computes fill width from <code>value</code> at render time.',
        tag: { criterion: 'C1', label: 'C1 · Layer Structure & Naming' },
      },
      {
        headline: 'Tooltip text is baked, not a slot.',
        body: 'The tooltip always shows the percentage value formatted as <code>NN%</code>. Real sliders often display currency ("$1,200"), distance ("3.5 km"), or a custom label. Expose the tooltip\'s content as a <code>tooltipFormatter: (Double) -> String</code> closure or a Slot.',
        tag: { criterion: 'C4', label: 'C4 · Native Mappability' },
      },
      {
        headline: 'Tooltip is always-on with no visibility prop.',
        body: 'iOS Apple sliders show the value on drag only, fading out a second after release. Material 3 sliders show the value bubble similarly. Always-on is fine for some use cases but should be a prop (<code>tooltip: .always | .onDrag | .never</code>) not baked.',
        tag: { criterion: 'C5', label: 'C5 · Interaction State Coverage' },
      },
      {
        headline: 'No Pressed (drag) state.',
        body: 'Knob doesn\'t enlarge or show a halo on touch-down/drag. Without that feedback, the knob feels stuck — users can\'t tell whether the drag is active.',
        tag: { criterion: 'C5', label: 'C5 · Interaction State Coverage' },
      },
      {
        headline: 'No Disabled / Focused state coverage.',
        body: 'Only one state shipped per value. Disabled (dim track + non-interactive knob) and Focused (keyboard ring) are mandatory for forms and web embeds.',
        tag: { criterion: 'C5', label: 'C5 · Interaction State Coverage' },
      },
      {
        headline: 'No range / step / min / max axes.',
        body: 'Real sliders need <code>range: 0...100</code>, <code>step: 1</code> (or <code>step: nil</code> for continuous), <code>min</code>/<code>max</code>. None of these exist today — every consumer would re-invent.',
        tag: { criterion: 'C4', label: 'C4 · Native Mappability' },
      },
      {
        headline: 'Code Connect mappings not registered.',
        body: 'Blocked on the restructure — once <code>value</code> is a continuous prop, a single Code Connect entry replaces 11 variant entries.',
        tag: { criterion: 'C7', label: 'C7 · Code Connect Linkability' },
      },
    ],
    recommendations: [
      {
        headline: 'Replace 11 variants with a single continuous slider primitive.',
        body: 'Target API: <code>EBSlider(value: Binding<Double>, in: 0...100, step: nil, tooltip: .onDrag)</code>. Fill width computed as <code>value / (max - min) * trackWidth</code>; knob position follows. Drops Figma variant count from 11 to 1 and gives native devs a single 1:1 mapping.',
        tag: 'Family',
      },
      {
        headline: 'Make the tooltip content a closure / slot.',
        body: '<code>tooltipFormatter: (Double) -> String</code> with a default of <code>{ "\\(Int($0))%" }</code>. Lets consumers show currency, distance, or any label without detaching.',
        tag: 'Slot',
      },
      {
        headline: 'Add tooltip-visibility axis.',
        body: '<code>tooltip: .always | .onDrag | .never</code>. Default <code>.onDrag</code> matches platform expectations on both iOS and Android.',
        tag: 'Property',
      },
      {
        headline: 'Spec Pressed / Focused / Disabled.',
        body: 'Pressed: knob 16 → 24 with halo, scale animates over 120 ms ease-out. Focused: 2 px brand-blue ring offset 2 px around the knob. Disabled: 40% opacity on track + fill + knob, pointer-events disabled, no tooltip.',
        tag: 'State',
      },
      {
        headline: 'Add range / step / min / max props.',
        body: 'Every concrete slider in the wild needs these. Make them first-class on the API so consumers don\'t reinvent them.',
        tag: 'Property',
      },
      {
        headline: 'Document the A11y model.',
        body: 'Role: <code>slider</code>. <code>aria-valuemin</code> / <code>aria-valuemax</code> / <code>aria-valuenow</code> wired to range + value. Keyboard: ←/→ step, Shift+←/→ 10×step, Home/End to ends. VoiceOver/TalkBack: announce "50 percent" on value change, debounced 250 ms.',
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
        demoControls: sliderDemoControls,
        title: 'Default',
        node: '3235:60778',
        description: '366 × 28 row with a 10-tall pill track. Fill width grows with the value; the 16 × 16 white knob sits at the fill\'s right edge with a small percentage tooltip floating 4 px above.',
        sections: [
          {
            label: 'Properties',
            slug: 'props',
            rows: [
              { key: 'Value', value: '50', prop: 'value' },
            ],
          },
          {
            label: 'Colors',
            slug: 'colors',
            rows: [
              { key: 'Track bg',     value: '#D2E5FF', token: 'slider/color/track/bg' },
              { key: 'Fill',         value: '#005CE5', token: 'slider/color/fill' },
              { key: 'Knob bg',      value: '#FFFFFF', token: 'slider/color/knob/bg' },
              { key: 'Knob border',  value: '#E5EBF4', token: 'slider/color/knob/border' },
              { key: 'Tooltip bg',   value: '#005CE5', token: 'slider/color/tooltip/bg' },
              { key: 'Tooltip text', value: '#FFFFFF', token: 'slider/color/tooltip/text' },
            ],
          },
          {
            label: 'Layout',
            slug: 'layout',
            rows: [
              { key: 'Control',         value: '366 × 28',         mono: true },
              { key: 'Track',           value: '366 × 10 · radius 99', mono: true },
              { key: 'Knob',            value: '16 × 16 · circle',  mono: true },
              { key: 'Knob border',     value: '1 px solid',        mono: true },
              { key: 'Tooltip',         value: '28 × 22 · radius 4 · arrow 28 × 4', mono: true },
              { key: 'Tooltip → track', value: '4 (gap between arrow tip and track top)', mono: true },
            ],
          },
          {
            label: 'Typography',
            slug: 'typo',
            rows: [
              { key: 'Tooltip percentage', value: 'Proxima Soft Bold · 12 / 12 · +0.25', mono: true },
            ],
          },
        ],
        swift: '<span class="syn-type">EBSlider</span><span class="syn-punc">(</span>value<span class="syn-punc">: </span>$progress<span class="syn-punc">, in: </span><span class="syn-punc">0...100)</span>\n    .<span class="syn-fn">ebTooltip</span><span class="syn-punc">(</span><span class="syn-dot">.onDrag</span><span class="syn-punc">)</span>',
        compose: '<span class="syn-type">EBSlider</span><span class="syn-punc">(</span>\n    value <span class="syn-eq">=</span> progress<span class="syn-punc">,</span>\n    onValueChange <span class="syn-eq">=</span> <span class="syn-punc">{ progress = it }</span><span class="syn-punc">,</span>\n    valueRange <span class="syn-eq">=</span> 0f<span class="syn-punc">..</span>100f<span class="syn-punc">,</span>\n    tooltip <span class="syn-eq">=</span> <span class="syn-type">SliderTooltip</span><span class="syn-punc">.</span><span class="syn-dot">.OnDrag</span>\n<span class="syn-punc">)</span>',
        previewHtml: '<div id="sl-spec-preview"></div>',
      },
    ],
    colorsTables: [
      buildStatelessColorsTable({
        title: 'Colors',
        description: 'All colors stay consistent across the 11 variants; only the fill width changes.',
        rows: [
          { role: 'Track bg',     token: 'slider/color/track/bg',     value: '#D2E5FF' },
          { role: 'Fill',         token: 'slider/color/fill',         value: '#005CE5' },
          { role: 'Knob bg',      token: 'slider/color/knob/bg',      value: '#FFFFFF' },
          { role: 'Knob border',  token: 'slider/color/knob/border',  value: '#E5EBF4' },
          { role: 'Tooltip bg',   token: 'slider/color/tooltip/bg',   value: '#005CE5' },
          { role: 'Tooltip text', token: 'slider/color/tooltip/text', value: '#FFFFFF' },
        ],
      }),
    ],
  },
  code: {
    installation: { planned: true, blocks: [] },
    propertyMapping: {
      description: 'Today\'s 11-variant matrix collapses to a single continuous prop once restructured.',
      rows: [
        { figma: 'value=0% … 100%', swift: 'value: Binding<Double>', compose: 'value: Float' },
        { figma: '(implicit 0–100 range)', swift: 'in: ClosedRange<Double>', compose: 'valueRange: ClosedFloatingPointRange<Float>' },
        { figma: '(no step today)', swift: 'step: Double?', compose: 'steps: Int?' },
        { figma: '(no tooltip prop today)', swift: 'tooltip: SliderTooltipVisibility', compose: 'tooltip: SliderTooltip' },
        { figma: '(no tooltip slot today)', swift: 'tooltipFormatter: (Double) -> String', compose: 'tooltipFormatter: (Float) -> String' },
        { figma: '(no callback today)', swift: 'onChange: (Double) -> Void', compose: 'onValueChange: (Float) -> Unit' },
      ],
      filePaths: {
        swift: 'ios/Components/Slider/EBSlider.swift',
        compose: 'android/components/slider/EBSlider.kt',
      },
    },
    usageSnippets: [],
    accessibility: [
      { requirement: 'Role', ios: 'Conforms to <code>Slider</code>-style accessibility trait. <code>.accessibilityValue("\\(Int(value)) percent")</code>.', android: 'Apply <code>Role.Slider</code> with <code>progressBarRangeInfo</code> for current / min / max.' },
      { requirement: 'Live announce', ios: 'Use <code>UIAccessibility.post(.announcement, "\\(Int(value)) percent")</code> debounced ~250 ms on drag.', android: 'Use <code>announceForAccessibility</code> debounced ~250 ms.' },
      { requirement: 'Keyboard / DPAD', ios: '←/→ step by <code>step</code> (or 1 if nil); Shift+←/→ by 10×step; Home/End jump to bounds.', android: 'DPAD ←/→ step; long-press for 10×step.' },
      { requirement: 'Focus ring', ios: '2 px brand-blue ring offset 2 px around the knob when focused (mac / iPad keyboard).', android: '<code>Modifier.focusable()</code> with a visible 2 px outline.' },
      { requirement: 'Touch target', ios: 'Knob hit area extended to 44 × 44 via <code>.contentShape(Circle())</code>.', android: '<code>Modifier.minimumInteractiveComponentSize()</code> on the knob.' },
    ],
    usageGuidelines: [],
    scorecard: [
      { id: 'C1', criterion: 'Layer Structure & Naming', status: 'rework', statusLabel: 'Requires Rework', notes: '11 discrete variants for a continuous value. Replace with one primitive + <code>value: Double</code>.' },
      { id: 'C2', criterion: 'Variant & Property Naming', status: 'refine', statusLabel: 'Needs Refinement', notes: '<code>value=NN%</code> mixes display format into the prop value. Make value numeric and let the tooltip formatter handle display.' },
      { id: 'C3', criterion: 'Token Coverage', status: 'refine', statusLabel: 'Needs Refinement', notes: 'Colors consistent but no <code>slider/*</code> token namespace registered.' },
      { id: 'C4', criterion: 'Native Mappability', status: 'rework', statusLabel: 'Requires Rework', notes: 'Maps cleanly to <code>Slider</code> / <code>Slider()</code> after the value-as-prop restructure.' },
      { id: 'C5', criterion: 'Interaction State Coverage', status: 'rework', statusLabel: 'Requires Rework', notes: 'Only one default state. No Pressed (drag), Focused, or Disabled coverage.' },
      { id: 'C6', criterion: 'Asset & Icon Quality', status: 'na', statusLabel: 'Not Applicable', notes: 'No assets used.' },
      { id: 'C7', criterion: 'Code Connect Linkability', status: 'empty', statusLabel: 'Not Mapped', notes: 'Blocked on the value-as-prop restructure.' },
    ],
    codeConnect: [],
    variants: {
      total: 11,
      description: '11 variants on a single <code>value</code> axis at 10% increments. Same visual treatment across the matrix — only the fill width and tooltip percentage differ.',
      columns: ['#', 'value', 'Fill width', 'Size', 'Node'],
      rows: [
        { cells: ['1',  '0%',   '7',   '366 × 28', '<code>3235:60723</code>'] },
        { cells: ['2',  '10%',  '37',  '366 × 28', '<code>3235:60734</code>'] },
        { cells: ['3',  '20%',  '74',  '366 × 28', '<code>3235:60745</code>'] },
        { cells: ['4',  '30%',  '110', '366 × 28', '<code>3235:60756</code>'] },
        { cells: ['5',  '40%',  '147', '366 × 28', '<code>3235:60767</code>'] },
        { cells: ['6',  '50%',  '183', '366 × 28', '<code>3235:60778</code>'] },
        { cells: ['7',  '60%',  '220', '366 × 28', '<code>3235:60789</code>'] },
        { cells: ['8',  '70%',  '256', '366 × 28', '<code>3235:60800</code>'] },
        { cells: ['9',  '80%',  '293', '366 × 28', '<code>3235:60811</code>'] },
        { cells: ['10', '90%',  '329', '366 × 28', '<code>3235:60822</code>'] },
        { cells: ['11', '100%', '358', '366 × 28', '<code>3235:60833</code>'] },
      ],
    },
  },
  changelog: [
    {
      version: '1.0.0',
      date: '2026-05-19',
      kind: 'major',
      kindLabel: 'Major',
      header: 'Initial Assessment · node 3235:60722',
      rows: [
        { body: '<strong>Component assessed</strong> — 11 variants at 10% increments. Used in settings / amount-approximation flows. <span class="tag-fixed">Documented</span>', delta: { kind: 'resolved', label: 'Initial' } },
        { body: '<strong>Verdict: Restructure</strong> — Promote to a single <code>EBSlider</code> primitive with <code>value: Double</code> + <code>range</code> + <code>step</code>. Add Pressed / Focused / Disabled state coverage. <span class="tag-open tag-c1 tag-c4 tag-c5">Open</span>', delta: { kind: 'open', label: 'Family' } },
        { body: '<strong>C1 — 11 discrete variants</strong> — Continuous value modeled as a 10%-stepped enum. Replace with a continuous primitive. <span class="tag-open tag-c1">Open</span>', delta: { kind: 'open', label: 'C1' } },
        { body: '<strong>C4 — Tooltip is baked</strong> — Always-visible, percentage-only. No way to swap to currency / custom format. <span class="tag-open tag-c4">Open</span>', delta: { kind: 'open', label: 'C4' } },
        { body: '<strong>C5 — Missing states</strong> — No Pressed (drag), Focused, or Disabled treatment. Tooltip-visibility axis also missing. <span class="tag-open tag-c5">Open</span>', delta: { kind: 'open', label: 'C5' } },
        { body: '<strong>C7 — Code Connect</strong> — Not registered. Blocked on restructure. <span class="tag-open tag-c7">Open</span>', delta: { kind: 'open', label: 'C7' } },
      ],
    },
  ],
};
