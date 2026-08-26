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
    node: '4692:21582',
    figmaUrl: 'https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4692-21582',
    description: 'A service tile — asset slot, label and optional description — used in the home Menu Grid and customizable shortcut surfaces, with an optional New badge and Add or Remove edit overlays.',
    badges: [
      { kind: 'keep', label: 'Keep' },
      { kind: 'refine', label: 'Needs Refinement' },
    ],
    verdict: {
      kind: "keep",
      title: "Keep — all findings resolved",
      text: "Rebuilt on node <code>4692:21582</code> in the 2026 Working File, and every finding from the original assessment has landed. The <code>State=Disbaled</code> typo is corrected, <code>Type</code> is split into <code>Badge</code> and <code>Action</code>, Inactive and Disabled render differently, a <code>Pressed</code> state ships across all eight combinations, description is a real Figma Slot, and layer naming follows §3 and §7 throughout with both slots kebab-cased per §4. Three things are settled as decisions rather than fixes: badges are suppressed during edit mode, so 32 is the complete matrix rather than 32 of 48; the <code>Container</code> frame in the Horizontal variants is what creates the side-by-side layout and is correctly absent from Vertical; and the 12×12 overlay tap target is specified at 44×44pt / 48×48dp with its own accessibility label. The Add and Remove glyph construction is parked as accepted debt in the shared icon source. All four DS Health traits pass; the only item still open is Code Connect, blocked until the native library exists.",
    },
  },
  overview: {
    inContextNote: 'Used inside the home Menu Grid (the 4×N icon-and-label grid above the bills/transfer shortcuts) and inside the "Customize your home" reordering screen, where Add/Remove overlays appear over the icon during edit mode. Vertical orientation is the dominant home-grid usage; horizontal is reserved for list-style surfaces (e.g. the recent-services drawer).',
    inContextHtml: '<div class="ctx-placeholder">\n      <svg width="220" height="130" viewBox="0 0 220 130" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <rect x="20" y="10" width="180" height="110" rx="6" stroke="currentColor" stroke-width="1.2" opacity=".2"/>\n        <g opacity=".7">\n          <circle cx="50"  cy="40" r="14" fill="#E6F0FF" stroke="#005CE5" stroke-width="1.5"/>\n          <text  x="50"  y="68" fill="#072592" font-size="7" font-weight="700" text-anchor="middle" font-family="system-ui">Cash In</text>\n          <circle cx="110" cy="40" r="14" fill="#E6F0FF"/>\n          <rect x="120" y="22" width="18" height="10" rx="5" fill="#E11744"/><text x="129" y="30" fill="#FFF" font-size="6" font-weight="700" text-anchor="middle" font-family="system-ui">New</text>\n          <text  x="110" y="68" fill="#072592" font-size="7" font-weight="700" text-anchor="middle" font-family="system-ui">Send</text>\n          <circle cx="170" cy="40" r="14" fill="#E6F0FF"/>\n          <circle cx="180" cy="30" r="6" fill="#16A34A"/><text x="180" y="33" fill="#FFF" font-size="9" font-weight="700" text-anchor="middle" font-family="system-ui">+</text>\n          <text  x="170" y="68" fill="#072592" font-size="7" font-weight="700" text-anchor="middle" font-family="system-ui">Bills</text>\n        </g>\n      </svg>\n    </div>',
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"si-demo-preview\"></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Type</span><select class=\"demo-panel-select\" id=\"si-demo-type\" onchange=\"_siDemo.type=this.value;updateServiceItemDemo()\"><option value=\"default\" selected=\"\">Default</option><option value=\"new\">New</option><option value=\"add\">Add</option><option value=\"remove\">Remove</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select class=\"demo-panel-select\" id=\"si-demo-state\" onchange=\"_siDemo.state=this.value;updateServiceItemDemo()\"><option value=\"default\" selected=\"\">Default</option><option value=\"inactive\">Inactive</option><option value=\"disabled\">Disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Orientation</span><select class=\"demo-panel-select\" id=\"si-demo-orientation\" onchange=\"_siDemo.orientation=this.value;updateServiceItemDemo()\"><option value=\"vertical\" selected=\"\">Vertical</option><option value=\"horizontal\">Horizontal</option></select></div></div></div></div>",
    traits: [
      { name: "Reusable", rating: "pass", note: "Covers both the home-grid tile and the list-row layout from one component, and the <code>Type</code> axis that used to fuse badge with action is now two independent properties." },
      { name: "Self-contained", rating: "pass", note: "Owns its label, preamble and slot styling, and all four states carry their own colors. The Badge and the Add/Remove overlays are shared instances by design, so a fix to either propagates rather than drifting." },
      { name: "Consistent", rating: "pass", note: "Four axes in PascalCase per §1 with Title Case values per §5, layer naming in the §7 hierarchy as <code>Preamble → Label → Description</code>, and both slots kebab-cased per §4 as <code>Asset-Slot</code> and <code>Description-Slot</code>. The two structural differences are deliberate and recorded: <code>Container</code> exists only in Horizontal because only Horizontal needs a row frame, and the matrix stops at 32 because badges are suppressed while an edit overlay is present." },
      { name: "Composable", rating: "pass", note: "<code>Asset Slot</code> and <code>Description Slot</code> are both real Figma Slots, so a consumer supplies their own artwork and can show a label without inheriting placeholder description copy." },
    ],
    behavior: [
      { state: "Default", ios: "yes", android: "yes", property: "State=Default", notes: "Label at <code>#072592</code> on a <code>#F6F9FD</code> asset slot." },
      { state: "Pressed", ios: "yes", android: "yes", property: "State=Pressed", notes: "Label deepens to <code>#071969</code>; asset slot darkens to <code>#EEF2F9</code>. Released on finger-up." },
      { state: "Inactive", ios: "yes", android: "yes", property: "State=Inactive", notes: "Label at <code>#6780A9</code>. Visible and still tappable — the service exists but is temporarily unavailable." },
      { state: "Disabled", ios: "na", android: "na", property: "State=Disabled", notes: "Label at <code>#C2CFE5</code>, the system disabled foreground. Not tappable." },
      { state: "New badge", ios: "na", android: "na", property: "Badge=New", notes: "A 29×12 <code>Badge</code> instance over the asset slot. Decay rule — first tap, or N days — is still unspecified." },
      { state: "Add / Remove overlay", ios: "yes", android: "yes", property: "Action=Add | Remove", notes: "A 12×12 control in the asset slot corner, a separate tap target from the tile. Hit area is not annotated." },
    ],
    resolved: [
      {
        headline: "<code>State=Disbaled</code> typo corrected.",
        body: "v2.0: Rebuilt on node <code>4692:21582</code> in the 2026 Working File. All 32 variants read <code>State=Disabled</code>. The misspelling would have propagated into Code Connect prop names and from there into generated native constants, where it is far more expensive to unwind. (C2 · Rename)",
        tag: { criterion: "C2", label: "C2 · Variant & Property Naming" },
      },
      {
        headline: "<code>Type</code> split into <code>Badge</code> and <code>Action</code>.",
        body: "v2.0: The axis that bundled a content flag with an overlay action is gone. The schema is now <code>State</code> × <code>Orientation</code> × <code>Badge = None | New</code> × <code>Action = None | Add | Remove</code>, all PascalCase per §1 with Title Case values per §5. Each axis names one thing. (C2 · Property)",
        tag: { criterion: "C2", label: "C2 · Variant & Property Naming" },
      },
      {
        headline: "Inactive and Disabled now render differently.",
        body: "v2.0: The two states had been visually identical. They now separate cleanly — <code>Inactive</code> holds the label at <code>#6780A9</code>, a readable muted blue for a service that is visible but temporarily unavailable, while <code>Disabled</code> drops to <code>#C2CFE5</code>, the system disabled foreground. A user can tell which situation they are looking at. (C5 · State)",
        tag: { criterion: "C5", label: "C5 · Interaction State Coverage" },
      },
      {
        headline: "Pressed state added.",
        body: "v2.0: <code>State=Pressed</code> ships across all 8 orientation/badge/action combinations — the label deepens to <code>#071969</code> and the asset slot darkens <code>#F6F9FD</code> → <code>#EEF2F9</code>. Tiles are the primary tap target on the home grid, so touch-down feedback was the most-felt gap in the previous assessment. (C5 · State)",
        tag: { criterion: "C5", label: "C5 · Interaction State Coverage" },
      },
      {
        headline: "Description promoted to a real content slot.",
        body: "v2.0: <code>Description Slot</code> is a genuine <code>SLOT</code> node rather than a baked text layer with placeholder copy. Home-grid usages that only need a label no longer carry description content they have to remember to clear. <code>Asset Slot</code> is likewise a real Slot. (C4 · Slot)",
        tag: { criterion: "C4", label: "C4 · Native Mappability" },
      },
      {
        headline: "Layer naming pass landed, and both slots are kebab-case.",
        body: "v2.1: Verified on the live node. <code>#preamble</code> → <code>Preamble</code>, <code>#label</code> → <code>Label</code>, and the wrapping frames <code>preamble</code> / <code>content</code> / <code>border</code> → <code>Preamble</code> / <code>Content</code> / <code>Border</code>. The two slots also moved onto the §4 convention as <code>Asset-Slot</code> and <code>Description-Slot</code> — kebab-case for slots, PascalCase for frames, which is exactly the distinction §4 draws. Text layers now sit in the §7 hierarchy as <code>Preamble → Label → Description</code>. One layer was missed and is tracked below. (C1 · Rename)",
        tag: { criterion: "C1", label: "C1 · Layer Structure & Naming" },
      },
      {
        headline: "Rename sweep completed — <code>#description</code> → <code>Description</code>.",
        body: "v2.2: Verified on the live node (<code>4692:21589</code>). Every text layer now reads without the legacy sigil, in the §7 hierarchy as <code>Preamble → Label → Description</code>, with <code>Asset-Slot</code> and <code>Description-Slot</code> kebab-cased per §4. No layer in the set carries the old convention. (C1 · Rename)",
        tag: { criterion: "C1", label: "C1 · Layer Structure & Naming" },
      },
      {
        headline: "Badges are suppressed in edit mode — matrix confirmed complete at 32.",
        body: "v2.2: Closed by owner decision. <code>Badge</code> and <code>Action</code> are deliberately mutually exclusive: while a user is customising their home screen, a red <em>New</em> badge competes with the Add/Remove affordance for the same corner of the tile and for the same attention, so the badge is suppressed for the duration of edit mode. The 16 <code>Badge=New</code> × <code>Action=Add|Remove</code> combinations are therefore unsupported rather than unbuilt, and 32 is the complete matrix. Native implementations should hide the badge whenever an edit overlay is present rather than stacking them. Recorded so a consumer meeting the gap in the variant picker finds a rule instead of assuming an omission. (C2 · Property)",
        tag: { criterion: "C2", label: "C2 · Variant & Property Naming" },
      },
      {
        headline: "<code>Container</code> in the Horizontal variants confirmed intentional.",
        body: "v2.2: The asymmetry is structural, not an oversight. Horizontal lays the asset and the text side by side, which needs its own auto-layout frame to hold that row; Vertical stacks the same children directly and needs no wrapper. Adding a <code>Container</code> to Vertical would introduce a frame that does nothing, and removing it from Horizontal would break the layout it exists to create. Native implementations should read <code>Orientation</code> as the layout switch — a row versus a column — rather than expecting one tree shape across both. (C1)",
        tag: { criterion: "C1", label: "C1 · Layer Structure & Naming" },
      },
      {
        headline: "Overlay tap-area specified.",
        body: "v2.2: The Add and Remove overlays render at <strong>12×12</strong> in the corner of <code>Asset-Slot</code>, and each is a <strong>separate tap target from the tile beneath it</strong> — tapping the tile opens the service, tapping the overlay adds or removes it. The glyph stays 12×12 visually; the touch target must be expanded around it to <strong>44×44pt on iOS</strong> and <strong>48×48dp on Android</strong>, centred on the glyph and extending beyond the tile bounds where necessary. On iOS use a transparent <code>.contentShape(Rectangle())</code> sized to the target rather than growing the visible circle; on Android set the minimum touch target on the clickable modifier rather than padding the icon. The overlay must sit above the tile in hit-test order so its region wins, and it needs its own accessibility label — “Add {service}” / “Remove {service}” — separate from the tile’s. Without this an implementer either ships an untappable control or wraps the whole tile, and wrapping the tile breaks edit mode. This spec lives here rather than as a Figma annotation: the review has read-only Figma access, so the note itself still needs adding in the file. (C5 · A11y)",
        tag: { criterion: "C5", label: "C5 · Interaction State Coverage" },
      },
      {
        headline: "Add and Remove glyph construction deferred.",
        body: "v2.2: Parked by owner decision rather than fixed. The overlays’ source component is built from <code>Ellipse 53</code> plus <code>Rectangle 2620</code> and <code>Rectangle 2621</code> — two white bars over a <code>#12AF80</code> circle — rather than a vector glyph on the icon grid, so the default shape names carry no meaning and the plus will not scale or recolor like the rest of the icon set. It sits in the shared icon source rather than in Service Item, so fixing it is the icon owner’s call and affects every consumer equally. Recorded as a known, accepted debt rather than closed as correct. (C6 · Asset)",
        tag: { criterion: "C6", label: "C6 · Asset & Icon Quality" },
      }
    ],
    open: [
      {
        headline: "Code Connect mappings not registered.",
        body: "Blocked — no native library exists yet. Both blockers the original assessment named are cleared: the State typo is fixed and the Type axis is split, so the schema — four PascalCase axes over two named slots — maps cleanly whenever the library lands.",
        tag: { criterion: "C7", label: "C7 · Code Connect Linkability" },
      }
    ],
    recommendations: [],
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
