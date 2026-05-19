import type { ComponentData, DemoControlSection } from '../types';
import { buildMultiModeColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(demoKey, prop, value)`
// in `public/scripts/demos/service-item.js`.
const serviceItemDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Type',
        prop: 'type',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'new',     label: 'New' },
          { value: 'add',     label: 'Add' },
          { value: 'remove',  label: 'Remove' },
        ],
      },
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default',  label: 'Default' },
          { value: 'inactive', label: 'Inactive' },
          { value: 'disabled', label: 'Disabled' },
        ],
      },
      {
        label: 'Orientation',
        prop: 'orientation',
        defaultValue: 'vertical',
        options: [
          { value: 'vertical',   label: 'Vertical' },
          { value: 'horizontal', label: 'Horizontal' },
        ],
      },
    ],
  },
];

export const serviceItem: ComponentData = {
  meta: {
    slug: 'service-item',
    name: 'Service Item',
    node: '20210:2441',
    figmaUrl: 'https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=20210-2441',
    description: 'A service tile — icon slot plus label and optional description — used inside the home Menu Grid and customizable shortcut surfaces. Type axis adds a "New" badge, an Add (+) overlay, or a Remove (–) overlay over the icon.',
    badges: [
      { kind: 'fix', label: 'Fix' },
      { kind: 'refine', label: 'Needs Refinement' },
    ],
    verdict: {
      kind: 'fix',
      title: 'Rename the State typo + split Type into orthogonal slots',
      text: 'Two things to fix. (1) The State axis contains a typo — <code>State=Disbaled</code> on every horizontal/disabled variant. It must be renamed to <code>Disabled</code>. (2) The Type axis bundles "what icon is shown" (Default) with "what modifier overlays the icon" (New / Add / Remove). These are independent — a New shortcut might also be in Remove mode while editing. Split Type into <code>badge: .none | .new</code> and <code>action: .none | .add | .remove</code> so the matrix collapses from 24 variants to a leaner 2 × 3 × 2 × 2 = ~24 with semantic axes (and the invalid combos drop out).',
    },
  },
  overview: {
    inContextNote: 'Used inside the home Menu Grid (the 4×N icon-and-label grid above the bills/transfer shortcuts) and inside the "Customize your home" reordering screen, where Add/Remove overlays appear over the icon during edit mode. Vertical orientation is the dominant home-grid usage; horizontal is reserved for list-style surfaces (e.g. the recent-services drawer).',
    inContextHtml: '<div class="ctx-placeholder">\n      <svg width="220" height="130" viewBox="0 0 220 130" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <rect x="20" y="10" width="180" height="110" rx="6" stroke="currentColor" stroke-width="1.2" opacity=".2"/>\n        <g opacity=".7">\n          <circle cx="50"  cy="40" r="14" fill="#E6F0FF" stroke="#005CE5" stroke-width="1.5"/>\n          <text  x="50"  y="68" fill="#072592" font-size="7" font-weight="700" text-anchor="middle" font-family="system-ui">Cash In</text>\n          <circle cx="110" cy="40" r="14" fill="#E6F0FF"/>\n          <rect x="120" y="22" width="18" height="10" rx="5" fill="#E11744"/><text x="129" y="30" fill="#FFF" font-size="6" font-weight="700" text-anchor="middle" font-family="system-ui">New</text>\n          <text  x="110" y="68" fill="#072592" font-size="7" font-weight="700" text-anchor="middle" font-family="system-ui">Send</text>\n          <circle cx="170" cy="40" r="14" fill="#E6F0FF"/>\n          <circle cx="180" cy="30" r="6" fill="#16A34A"/><text x="180" y="33" fill="#FFF" font-size="9" font-weight="700" text-anchor="middle" font-family="system-ui">+</text>\n          <text  x="170" y="68" fill="#072592" font-size="7" font-weight="700" text-anchor="middle" font-family="system-ui">Bills</text>\n        </g>\n      </svg>\n    </div>',
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"si-demo-preview\"></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Type</span><select class=\"demo-panel-select\" id=\"si-demo-type\" onchange=\"_siDemo.type=this.value;updateServiceItemDemo()\"><option value=\"default\" selected=\"\">Default</option><option value=\"new\">New</option><option value=\"add\">Add</option><option value=\"remove\">Remove</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select class=\"demo-panel-select\" id=\"si-demo-state\" onchange=\"_siDemo.state=this.value;updateServiceItemDemo()\"><option value=\"default\" selected=\"\">Default</option><option value=\"inactive\">Inactive</option><option value=\"disabled\">Disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Orientation</span><select class=\"demo-panel-select\" id=\"si-demo-orientation\" onchange=\"_siDemo.orientation=this.value;updateServiceItemDemo()\"><option value=\"vertical\" selected=\"\">Vertical</option><option value=\"horizontal\">Horizontal</option></select></div></div></div></div>",
    traits: [
      { name: 'Reusable', rating: 'partial', note: 'Covers both home-grid (vertical) and list-row (horizontal) layouts cleanly. But the Type axis fuses icon modifier and badge into a single value, which limits combinatorial reuse (e.g. "New + Remove" mode is not expressible).' },
      { name: 'Self-contained', rating: 'partial', note: 'Owns label / preamble / icon-slot styling but instance-swaps a separate Badge (for New) and an Icon Action (for Add / Remove). Both are external dependencies that drift independently.' },
      { name: 'Consistent', rating: 'fail', note: '<code>State=Disbaled</code> is misspelled in 6 variants (every horizontal/disabled combo). The label\'s color, the icon-slot fill, and the disabled-state opacity treatment also differ between Inactive and Disabled with no clear rule. <span class="tag-open tag-c2">C2</span>' },
      { name: 'Composable', rating: 'warn', note: 'Icon slot is a true Figma Slot, which is great. But preamble, label, and description text nodes are baked — a consumer can\'t hide just description while showing preamble.' },
    ],
    behavior: [
      { state: 'Tap', ios: 'yes', android: 'yes', property: 'Default state only', notes: 'No Pressed treatment modeled. Tile should respond to touch-down (subtle bg darken or scale 0.97).' },
      { state: 'Inactive', ios: 'na', android: 'na', property: 'Label dims to #C2CFE5', notes: 'Used when a service is temporarily unavailable but visible. Conflated visually with Disabled.' },
      { state: 'Disabled', ios: 'na', android: 'na', property: 'Same visual as Inactive', notes: 'No distinct treatment from Inactive. Should differ (e.g. 40% opacity + pointer-events:none vs. just-dimmed label).' },
      { state: 'Add (edit-mode)', ios: 'yes', android: 'yes', property: 'Type=Add overlay', notes: 'Green + circle in top-right of icon. Tappable as a separate target; tap area not annotated.' },
      { state: 'Remove (edit-mode)', ios: 'yes', android: 'yes', property: 'Type=Remove overlay', notes: 'Red – circle in top-right. Same tap-area issue as Add.' },
      { state: 'New badge', ios: 'na', android: 'na', property: 'Type=New', notes: 'Static red "New" badge. Should decay after first tap or after N days — no spec.' },
    ],
    resolved: [],
    open: [
      {
        headline: '<code>State=Disbaled</code> is misspelled across 6 variants.',
        body: 'Every horizontal/disabled variant in the component set has <code>State=Disbaled</code> (typo) in its component name. This propagates to Code Connect prop names and gets baked into native APIs. Rename to <code>Disabled</code> in Figma.',
        tag: { criterion: 'C2', label: 'C2 · Variant & Property Naming' },
      },
      {
        headline: 'Type axis bundles unrelated concerns.',
        body: '<code>Type = Default | New | Add | Remove</code> conflates a content-presence flag (New = badge present), an action overlay (Add / Remove), and the neutral case (Default). These should be two orthogonal axes: <code>badge: .none | .new</code> and <code>action: .none | .add | .remove</code>. Today, a "New" tile can\'t simultaneously be in Remove mode during edit.',
        tag: { criterion: 'C2', label: 'C2 · Variant & Property Naming' },
      },
      {
        headline: 'Inactive and Disabled render the same.',
        body: 'No visual difference between <code>State=Inactive</code> and <code>State=Disabled</code> — both dim the label to a muted blue. Functionally they should differ: Inactive = visible but not tappable for business reasons; Disabled = visible but not tappable for state reasons (form invalid, feature flag off). Pick distinct treatments.',
        tag: { criterion: 'C5', label: 'C5 · Interaction State Coverage' },
      },
      {
        headline: 'No Pressed state.',
        body: 'Tiles are primary tap targets but have no pressed feedback. Add a transient treatment (8% darken on icon-slot bg, or a 0.97 scale) on touch-down.',
        tag: { criterion: 'C5', label: 'C5 · Interaction State Coverage' },
      },
      {
        headline: 'Icon Action overlays are 12 × 12 but tap-area unannotated.',
        body: 'The + and – Icon Action circles are tiny (12 px). They\'re separate tap targets from the tile itself but no minimum tap area is annotated. Native devs default to wrapping the whole tile, which kills the edit-mode UX.',
        tag: { criterion: 'C5', label: 'C5 · Interaction State Coverage' },
      },
      {
        headline: 'Description text node is baked.',
        body: 'Both <code>#label</code> and <code>#description</code> are always present in the layer tree. Consumers can\'t hide just description (most home-grid usages don\'t need it). Should be an optional text slot.',
        tag: { criterion: 'C4', label: 'C4 · Native Mappability' },
      },
      {
        headline: 'Code Connect mappings not registered.',
        body: 'Blocked on the State typo fix and the Type-axis split.',
        tag: { criterion: 'C7', label: 'C7 · Code Connect Linkability' },
      },
    ],
    recommendations: [
      {
        headline: 'Fix the State=Disbaled typo.',
        body: 'Rename in Figma across all 6 affected variants. Verify no consumer screens reference the old prop value via Code Connect.',
        tag: 'Rename',
      },
      {
        headline: 'Split Type into <code>badge</code> + <code>action</code> axes.',
        body: 'Target schema: <code>badge: .none | .new</code> + <code>action: .none | .add | .remove</code>. Each is an optional slot/overlay; combinations like "New + Remove" become expressible without new variants. Total variant count stays similar but covers the full matrix instead of the linear union.',
        tag: 'Property',
      },
      {
        headline: 'Distinguish Inactive from Disabled.',
        body: 'Inactive: label dims to <code>main/text/color/disabled</code>, still tappable (e.g. opens an "unavailable" sheet). Disabled: 40% opacity on the whole tile + <code>pointer-events: none</code> + <code>aria-disabled</code>. Document the semantic difference.',
        tag: 'State',
      },
      {
        headline: 'Promote description to an optional content slot.',
        body: 'Most home-grid usages only show the label. Make description a slot that consumers fill when needed, instead of a baked text node with placeholder copy that ships in production by mistake.',
        tag: 'Slot',
      },
      {
        headline: 'Add a Pressed state.',
        body: 'Touch-down: 8% darken on icon-slot bg + 0.97 scale on the whole tile. Touch-up: snap back. Improves perceived responsiveness on the home grid.',
        tag: 'State',
      },
      {
        headline: 'Annotate Icon Action tap-area.',
        body: 'The 12 px + and – circles need a 44 × 44 (iOS) / 48 dp (Android) hit-area extension so users can reliably tap them in edit mode. Document this on the component.',
        tag: 'A11y',
      },
      {
        headline: 'Document edit-mode interaction model.',
        body: 'Add and Remove overlays only appear when the parent (Menu Grid in edit mode) is reordering. Document the parent contract — the Service Item shouldn\'t need to know about the parent\'s edit state directly.',
        tag: 'Docs',
      },
    ],
  },
  style: {
    heading: 'Types',
    specCards: [
      {
        cardKey: 'default',
        demoKey: 'default',
        demoControls: serviceItemDemoControls,
        title: 'Default',
        node: '20210:2442',
        description: 'Vertical: 64 × 72 — preamble (12 tall) above icon, 48 × 48 circular icon slot, then label + description. Horizontal: 120 × 64 — icon left, label/description right, preamble below. Type adds a "New" badge, a green +, or a red – over the icon. State dims the label for Inactive / Disabled.',
        sections: [
          {
            label: 'Properties',
            slug: 'props',
            rows: [
              { key: 'Type',        value: 'Default',  prop: 'type' },
              { key: 'State',       value: 'Default',  prop: 'state' },
              { key: 'Orientation', value: 'Vertical', prop: 'orientation' },
            ],
          },
          {
            label: 'Colors',
            slug: 'colors',
            rows: [
              { key: 'Icon-slot bg',  value: '#F6F9FD', token: 'service-item/icon/bg' },
              { key: 'Label',         value: '#072592', token: 'service-item/label/default',
                variants: {
                  'state:inactive': { value: '#C2CFE5', token: 'service-item/label/inactive' },
                  'state:disabled': { value: '#C2CFE5', token: 'service-item/label/disabled' },
                }
              },
              { key: 'New badge bg',  value: '#E11744', token: 'badge/error/bg',
                variants: { 'type:default': { hide: true }, 'type:add': { hide: true }, 'type:remove': { hide: true } }
              },
              { key: 'New badge text', value: '#FFFFFF', token: 'badge/error/text',
                variants: { 'type:default': { hide: true }, 'type:add': { hide: true }, 'type:remove': { hide: true } }
              },
              { key: 'Add overlay',   value: '#16A34A', token: 'service-item/action/add',
                variants: { 'type:default': { hide: true }, 'type:new': { hide: true }, 'type:remove': { hide: true } }
              },
              { key: 'Remove overlay', value: '#E11744', token: 'service-item/action/remove',
                variants: { 'type:default': { hide: true }, 'type:new': { hide: true }, 'type:add': { hide: true } }
              },
            ],
          },
          {
            label: 'Layout',
            slug: 'layout',
            rows: [
              { key: 'Tile',          value: '64 × 72', mono: true,
                variants: { 'orientation:horizontal': { value: '120 × 64' } }
              },
              { key: 'Icon slot',     value: '48 × 48 (pill / radius 99999)', mono: true },
              { key: 'Icon → label gap', value: '4', mono: true },
              { key: 'Preamble',      value: '12 tall (above icon)', mono: true,
                variants: { 'orientation:horizontal': { value: '12 tall (below content)' } }
              },
              { key: 'Modifier badge', value: '29 × 12 (top-right, offset −6 top)', mono: true,
                variants: { 'type:default': { hide: true }, 'type:add': { hide: true }, 'type:remove': { hide: true } }
              },
              { key: 'Action overlay', value: '12 × 12 (top-right, offset −6 top)', mono: true,
                variants: { 'type:default': { hide: true }, 'type:new': { hide: true } }
              },
            ],
          },
          {
            label: 'Typography',
            slug: 'typo',
            rows: [
              { key: 'Label',       value: 'Proxima Soft Bold · 12 / 12 · +0.5',     mono: true },
              { key: 'Preamble',    value: 'Proxima Soft Semibold · 10 / 12 · +0.25', mono: true },
              { key: 'Description', value: 'BarkAda Semibold · 10 / 12',              mono: true },
            ],
          },
        ],
        swift: '<span class="syn-type">EBServiceItem</span><span class="syn-punc">(</span>\n    icon<span class="syn-punc">: </span><span class="syn-type">Image</span><span class="syn-punc">(</span><span class="syn-str">"send"</span><span class="syn-punc">),</span>\n    label<span class="syn-punc">: </span><span class="syn-str">"Send"</span>\n<span class="syn-punc">)</span>\n    .<span class="syn-fn">ebOrientation</span><span class="syn-punc">(</span><span class="syn-dot">.vertical</span><span class="syn-punc">)</span>',
        compose: '<span class="syn-type">EBServiceItem</span><span class="syn-punc">(</span>\n    icon <span class="syn-eq">=</span> <span class="syn-punc">{ </span><span class="syn-type">Icon</span><span class="syn-punc">(</span><span class="syn-type">Icons</span><span class="syn-punc">.</span>Send<span class="syn-punc">, </span><span class="syn-kw">null</span><span class="syn-punc">) }</span><span class="syn-punc">,</span>\n    label <span class="syn-eq">=</span> <span class="syn-str">"Send"</span><span class="syn-punc">,</span>\n    orientation <span class="syn-eq">=</span> <span class="syn-type">Orientation</span><span class="syn-punc">.</span><span class="syn-dot">Vertical</span>\n<span class="syn-punc">)</span>',
        previewHtml: '<div id="si-spec-preview"></div>',
      },
    ],
    colorsTables: [
      buildMultiModeColorsTable({
        title: 'Label by State',
        description: 'Label color is the only thing State changes. Today Inactive and Disabled render identically — flagged as C5.',
        modes: ['Default', 'Inactive', 'Disabled'],
        rows: [
          { role: 'Label',        token: 'service-item/label/{state}', values: ['#072592', '#C2CFE5', '#C2CFE5'] },
          { role: 'Icon-slot bg', token: 'service-item/icon/bg',       values: ['#F6F9FD', '#F6F9FD', '#F6F9FD'] },
        ],
      }),
      buildMultiModeColorsTable({
        title: 'Type-overlay colors',
        description: 'Each non-Default Type adds an overlay on the icon\'s top-right. Colors are bound to the global Badge / Action tokens, not service-item-local ones.',
        modes: ['New', 'Add', 'Remove'],
        rows: [
          { role: 'Overlay fill', token: '{badge|action}/{type}', values: ['#E11744', '#16A34A', '#E11744'] },
          { role: 'Overlay text/glyph', token: '{badge|action}/{type}/fg', values: ['#FFFFFF', '#FFFFFF', '#FFFFFF'] },
        ],
      }),
    ],
  },
  code: {
    installation: { planned: true, blocks: [] },
    propertyMapping: {
      description: 'After the Type-axis split, the native API has two independent slot params (<code>badge</code>, <code>action</code>) instead of one fused Type enum.',
      rows: [
        { figma: 'Type=Default', swift: '(no badge, no action)', compose: '(no badge, no action)' },
        { figma: 'Type=New',     swift: 'badge: .new', compose: 'badge = Badge.New' },
        { figma: 'Type=Add',     swift: 'action: .add', compose: 'action = Action.Add' },
        { figma: 'Type=Remove',  swift: 'action: .remove', compose: 'action = Action.Remove' },
        { figma: 'State=Default / Inactive / Disabled', swift: 'state: .default | .inactive | .disabled', compose: 'state: ServiceItemState' },
        { figma: 'Orientation=Vertical / Horizontal', swift: 'orientation: .vertical | .horizontal', compose: 'orientation: Orientation' },
        { figma: 'Icon (slot)', swift: 'icon: Image', compose: 'icon: @Composable () -> Unit' },
        { figma: '#label', swift: 'label: String', compose: 'label: String' },
        { figma: '#description', swift: 'description: String?', compose: 'description: String?' },
        { figma: '#preamble', swift: 'preamble: String?', compose: 'preamble: String?' },
      ],
      filePaths: {
        swift: 'ios/Components/ServiceItem/EBServiceItem.swift',
        compose: 'android/components/serviceitem/EBServiceItem.kt',
      },
    },
    usageSnippets: [],
    accessibility: [
      { requirement: 'Tile role', ios: 'Wrap as <code>Button</code>; <code>.accessibilityLabel(label + (description.map { ", \\($0)" } ?? ""))</code>.', android: 'Use <code>Modifier.clickable</code> + <code>Role.Button</code>; <code>contentDescription</code> = label + ", " + description.' },
      { requirement: 'New badge', ios: '<code>.accessibilityValue("new")</code> so VoiceOver reads "Send, new".', android: 'Append "new" to <code>stateDescription</code>.' },
      { requirement: 'Add / Remove overlay', ios: 'Separate accessibility element — <code>.accessibilityLabel("Add Send to home")</code>. Hit area extended via <code>.contentShape(Rectangle())</code> + larger frame.', android: 'Wrap as separate <code>IconButton</code> with explicit <code>contentDescription</code>; <code>Modifier.minimumInteractiveComponentSize()</code>.' },
      { requirement: 'Disabled', ios: '<code>.disabled(true)</code> + <code>.accessibilityValue("disabled")</code>.', android: '<code>enabled = false</code>; <code>stateDescription = "disabled"</code>.' },
      { requirement: 'Inactive', ios: 'Still tappable; <code>.accessibilityHint("Currently unavailable")</code>.', android: 'Tappable; <code>contentDescription</code> appends "currently unavailable".' },
    ],
    usageGuidelines: [],
    scorecard: [
      { id: 'C1', criterion: 'Layer Structure & Naming', status: 'refine', statusLabel: 'Needs Refinement', notes: 'Clean layer naming inside (preamble / content / Icon / border). The 24-variant matrix is the concern, not the layer tree.' },
      { id: 'C2', criterion: 'Variant & Property Naming', status: 'rework', statusLabel: 'Requires Rework', notes: '<code>State=Disbaled</code> typo + <code>Type</code> axis bundles badge with action overlays.' },
      { id: 'C3', criterion: 'Token Coverage', status: 'refine', statusLabel: 'Needs Refinement', notes: 'Icon-slot fill and label color bound. New badge + Add/Remove action overlays use ad-hoc colors (#E11744, #16A34A) without registered tokens.' },
      { id: 'C4', criterion: 'Native Mappability', status: 'refine', statusLabel: 'Needs Refinement', notes: 'Maps cleanly to a SwiftUI/Compose tile after the Type-axis split; description should be optional.' },
      { id: 'C5', criterion: 'Interaction State Coverage', status: 'rework', statusLabel: 'Requires Rework', notes: 'No Pressed state. Inactive and Disabled render identically. Action-overlay tap-area unannotated.' },
      { id: 'C6', criterion: 'Asset & Icon Quality', status: 'ready', statusLabel: 'Ready', notes: 'Icon slot accepts any vector instance — clean Slot architecture.' },
      { id: 'C7', criterion: 'Code Connect Linkability', status: 'empty', statusLabel: 'Not Mapped', notes: 'Blocked on State typo + Type-axis split.' },
    ],
    codeConnect: [],
    variants: {
      total: 24,
      description: '<code>Type × State × Orientation</code> = 4 × 3 × 2 = 24 variants. Note 6 of them have <code>State=Disbaled</code> misspelled. Once Type splits into <code>badge</code> + <code>action</code>, the matrix collapses to ~8 production variants + slot-driven combinations.',
      columns: ['#', 'Type', 'State', 'Orientation', 'Size', 'Node'],
      rows: [
        { cells: ['1',  'Default', 'Default',  'Vertical',    '64 × 72',  '<code>20210:2442</code>'] },
        { cells: ['2',  'New',     'Default',  'Vertical',    '64 × 72',  '<code>20210:2450</code>'] },
        { cells: ['3',  'Add',     'Default',  'Vertical',    '64 × 72',  '<code>20210:2460</code>'] },
        { cells: ['4',  'Remove',  'Default',  'Vertical',    '64 × 72',  '<code>20210:2469</code>'] },
        { cells: ['5',  'Default', 'Inactive', 'Vertical',    '64 × 72',  '<code>20210:2478</code>'] },
        { cells: ['6',  'New',     'Inactive', 'Vertical',    '64 × 72',  '<code>20210:2486</code>'] },
        { cells: ['7',  'Add',     'Inactive', 'Vertical',    '64 × 72',  '<code>20210:2496</code>'] },
        { cells: ['8',  'Remove',  'Inactive', 'Vertical',    '64 × 72',  '<code>20210:2505</code>'] },
        { cells: ['9',  'Default', 'Disabled', 'Vertical',    '64 × 72',  '<code>20210:2634</code>'] },
        { cells: ['10', 'New',     'Disabled', 'Vertical',    '64 × 72',  '<code>20210:2642</code>'] },
        { cells: ['11', 'Add',     'Disabled', 'Vertical',    '64 × 72',  '<code>20210:2652</code>'] },
        { cells: ['12', 'Remove',  'Disabled', 'Vertical',    '64 × 72',  '<code>20210:2661</code>'] },
        { cells: ['13', 'Default', 'Default',  'Horizontal',  '120 × 64', '<code>20210:2514</code>'] },
        { cells: ['14', 'New',     'Default',  'Horizontal',  '120 × 64', '<code>20210:2523</code>'] },
        { cells: ['15', 'Add',     'Default',  'Horizontal',  '120 × 64', '<code>20210:2534</code>'] },
        { cells: ['16', 'Remove',  'Default',  'Horizontal',  '120 × 64', '<code>20210:2544</code>'] },
        { cells: ['17', 'Default', 'Inactive', 'Horizontal',  '120 × 64', '<code>20210:2554</code>'] },
        { cells: ['18', 'New',     'Inactive', 'Horizontal',  '120 × 64', '<code>20210:2563</code>'] },
        { cells: ['19', 'Add',     'Inactive', 'Horizontal',  '120 × 64', '<code>20210:2574</code>'] },
        { cells: ['20', 'Remove',  'Inactive', 'Horizontal',  '120 × 64', '<code>20210:2584</code>'] },
        { cells: ['21', 'Default', 'Disabled', 'Horizontal',  '120 × 64', '<code>20210:2594</code>'] },
        { cells: ['22', 'New',     'Disabled', 'Horizontal',  '120 × 64', '<code>20210:2613</code>'] },
        { cells: ['23', 'Add',     'Disabled', 'Horizontal',  '120 × 64', '<code>20210:2603</code>'] },
        { cells: ['24', 'Remove',  'Disabled', 'Horizontal',  '120 × 64', '<code>20210:2624</code>'] },
      ],
    },
  },
  changelog: [
    {
      version: '1.0.0',
      date: '2026-05-19',
      kind: 'major',
      kindLabel: 'Major',
      header: 'Initial Assessment · node 20210:2441',
      rows: [
        { body: '<strong>Component assessed</strong> — 24 variants across <code>Type × State × Orientation</code>. Powers the home Menu Grid and the customize-home edit mode. <span class="tag-fixed">Documented</span>', delta: { kind: 'resolved', label: 'Initial' } },
        { body: '<strong>Verdict: Fix</strong> — Rename the State=Disbaled typo, split Type into orthogonal <code>badge</code> + <code>action</code> axes, distinguish Inactive from Disabled. <span class="tag-open tag-c2 tag-c5">Open</span>', delta: { kind: 'open', label: 'Family' } },
        { body: '<strong>C2 — State=Disbaled typo</strong> — Misspelled across 6 horizontal/disabled variants. Will propagate to Code Connect props unless fixed in Figma. <span class="tag-open tag-c2">Open</span>', delta: { kind: 'open', label: 'C2' } },
        { body: '<strong>C2 — Type axis bundles badge + action</strong> — Default / New / Add / Remove conflates content presence with overlay action. Split into <code>badge</code> + <code>action</code>. <span class="tag-open tag-c2">Open</span>', delta: { kind: 'open', label: 'C2' } },
        { body: '<strong>C5 — Inactive vs Disabled</strong> — Render identically today. Need distinct visual + interaction treatments. <span class="tag-open tag-c5">Open</span>', delta: { kind: 'open', label: 'C5' } },
        { body: '<strong>C5 — Tap-area + Pressed</strong> — No Pressed state; Icon Action overlays are 12 px with no annotated hit-area extension. <span class="tag-open tag-c5">Open</span>', delta: { kind: 'open', label: 'C5' } },
        { body: '<strong>C7 — Code Connect</strong> — Not registered. Blocked on the State typo and Type-axis split. <span class="tag-open tag-c7">Open</span>', delta: { kind: 'open', label: 'C7' } },
      ],
    },
  ],
};
