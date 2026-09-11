import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(demoKey, prop, value)`
// in `public/scripts/demos/toggle-segmented-control.js`.
const toggleSegmentedControlDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'numberOfTabs',
        prop: 'numberOfTabs',
        defaultValue: '2',
        options: [
          { value: '2', label: '2' },
          { value: '3', label: '3' },
          { value: '4', label: '4' },
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
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "tsc-spec-main",
        "demoKey": "main",
        "title": "Segmented Control",
        "node": "26628:50765",
        "description": "",
        "previewHtml": "<div id=\"segmented-control-spec-main\" class=\"spec-preview-body\"><svg width=\"312\" height=\"40\" viewBox=\"0 0 312 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 0H156V40H6A6 6 0 0 1 0 34V6A6 6 0 0 1 6 0Z\" fill=\"#005CE5\"/><rect x=\"0.5\" y=\"0.5\" width=\"311\" height=\"39\" rx=\"5.5\" stroke=\"#005CE5\" stroke-width=\"1\"/><text class=\"tsc-label\" x=\"78\" y=\"20\" font-size=\"16\" font-weight=\"700\" fill=\"#FFFFFF\" text-anchor=\"middle\" dominant-baseline=\"central\">Label</text><text class=\"tsc-label\" x=\"234\" y=\"20\" font-size=\"16\" font-weight=\"700\" fill=\"#005CE5\" text-anchor=\"middle\" dominant-baseline=\"central\">Label</text></svg></div>",
        "demoControls": toggleSegmentedControlDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "numberOfTabs",
                "value": "2",
                "prop": "numberOfTabs"
              },
              {
                "key": "Nested instance",
                "value": "Segmented Control Button · 26628:50752 — its properties are not exposed on the row",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Segment bg (active)",
                "value": "#005CE5",
                "token": "—"
              },
              {
                "key": "Segment label (active)",
                "value": "#FFFFFF",
                "token": "—"
              },
              {
                "key": "Segment label (rest)",
                "value": "#005CE5",
                "token": "—"
              },
              {
                "key": "Divider",
                "value": "#005CE5",
                "token": "—"
              },
              {
                "key": "Container border",
                "value": "#005CE5",
                "token": "—"
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Segment label",
                "value": "Primary/Label/Base",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Height",
                "value": "40px",
                "mono": true
              },
              {
                "key": "Width",
                "value": "312px",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "6px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "0 on the control — each segment carries 16px either side of its label",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "0",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "0 — segments abut. The first boundary is where the active fill ends; the lines after it are inactive segments’ right dividers",
                "mono": true
              },
              {
                "key": "Segment",
                "value": "156 × 40 — 312 ÷ 2",
                "mono": true,
                "variants": {
                  "numberOfTabs:3": {
                    "value": "104 × 40 — 312 ÷ 3"
                  },
                  "numberOfTabs:4": {
                    "value": "78 × 40 — 312 ÷ 4"
                  }
                }
              },
              {
                "key": "Label box",
                "value": "124 wide",
                "mono": true,
                "variants": {
                  "numberOfTabs:3": {
                    "value": "72 wide"
                  },
                  "numberOfTabs:4": {
                    "value": "46 wide"
                  }
                }
              },
              {
                "key": "Border",
                "value": "1px on the container; the segment dividers are the same weight",
                "mono": true
              },
              {
                "key": "Alignment",
                "value": "Center — every label is centred in its segment",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSegmentedControl</span><span class=\"syn-punc\">(</span>\n    segments<span class=\"syn-punc\">: [</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">, </span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">],</span>\n    selectedIndex<span class=\"syn-punc\">: </span>$selected\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSegmentedControl</span><span class=\"syn-punc\">(</span>\n    segments <span class=\"syn-eq\">=</span> listOf<span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">, </span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">),</span>\n    selectedIndex <span class=\"syn-eq\">=</span> selected<span class=\"syn-punc\">,</span>\n    onSelectionChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> selected <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Segment",
        "description": "The control owns one colour — the container border. Everything else belongs to the nested <code>Segmented Control Button</code> (<code>26628:50752</code>) and is identical to the atom. <strong>Inactive segments have no fill and no outline — the line you see is a right-edge divider</strong>, so it appears only <em>between</em> inactive segments — none at 2 tabs, one at 3, two at 4. The last segment’s divider coincides with the container border and does not render as a second line. Token paths could not be read; the Talk To Figma plugin returns no variable bindings.",
        "columns": [
          "Token",
          "Value"
        ],
        "rows": [
          {
            "role": "Container",
            "token": "Border · 1px, radius 6",
            "values": [
              "—",
              "#005CE5"
            ]
          },
          {
            "role": "Segment · active",
            "token": "Background",
            "values": [
              "—",
              "#005CE5"
            ]
          },
          {
            "role": "—",
            "token": "Label",
            "values": [
              "—",
              "#FFFFFF"
            ]
          },
          {
            "role": "Segment · inactive",
            "token": "Background",
            "values": [
              "–",
              "– none"
            ]
          },
          {
            "role": "—",
            "token": "Divider · right edge",
            "values": [
              "—",
              "#005CE5"
            ]
          },
          {
            "role": "—",
            "token": "Label",
            "values": [
              "—",
              "#005CE5"
            ]
          }
        ]
      }
    ]
  },
  code: {
    "installation": {
      "planned": true,
      "blocks": [
        {
          "label": "iOS — Swift Package Manager",
          "code": "<span class=\"cmt\">// In Xcode: File → Add Package Dependencies</span>\n<span class=\"str\">\"https://github.com/AY-Org/eb-ds-ios\"</span>"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:toggle:2.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.toggle.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "The set has one property. <code>numberOfTabs</code> is an enum of three in Figma but a <em>count</em> in code — natively it is the length of the segments array, which is why a 5-tab control is expressible in code and not in Figma. Selection and the segment labels have no Figma property behind them: every variant ships the first segment active and every label reading \"Label\".",
      "rows": [
        {
          "figma": "numberOfTabs — 2, 3, 4",
          "swift": "<code>segments: [String]</code> — the count is the array length",
          "compose": "<code>segments: List&lt;String&gt;</code> — the count is the list size"
        },
        {
          "figma": "— no Figma property (the segment labels)",
          "swift": "each entry in <code>segments</code>",
          "compose": "each entry in <code>segments</code>"
        },
        {
          "figma": "— no Figma property (which segment is active)",
          "swift": "<code>selectedIndex: Binding&lt;Int&gt;</code>",
          "compose": "<code>selectedIndex: Int</code> with <code>onSelectionChange: (Int) -&gt; Unit</code>"
        },
        {
          "figma": "— no Figma property (State, owned by the nested button)",
          "swift": "<code>.disabled(true)</code> on the control; Pressed is the press gesture",
          "compose": "<code>enabled = false</code> on the control; Pressed from <code>interactionSource</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Toggle/EBSegmentedControl.swift",
        "compose": "android/components/toggle/EBSegmentedControl.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "2 tabs",
        "swift": "<span class=\"cmt\">// numberOfTabs = 2 — segments are 312 ÷ 2 wide.</span>\n<span class=\"typ\">EBSegmentedControl</span>(\n    segments: [<span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>],\n    selectedIndex: $selected\n)",
        "compose": "<span class=\"cmt\">// numberOfTabs = 2 — segments are 312 ÷ 2 wide.</span>\n<span class=\"typ\">EBSegmentedControl</span>(\n    segments = listOf(<span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>),\n    selectedIndex = selected,\n    onSelectionChange = { selected = it }\n)"
      },
      {
        "subheading": "3 tabs",
        "swift": "<span class=\"cmt\">// numberOfTabs = 3 — segments are 312 ÷ 3 wide.</span>\n<span class=\"typ\">EBSegmentedControl</span>(\n    segments: [<span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>],\n    selectedIndex: $selected\n)",
        "compose": "<span class=\"cmt\">// numberOfTabs = 3 — segments are 312 ÷ 3 wide.</span>\n<span class=\"typ\">EBSegmentedControl</span>(\n    segments = listOf(<span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>),\n    selectedIndex = selected,\n    onSelectionChange = { selected = it }\n)"
      },
      {
        "subheading": "4 tabs",
        "swift": "<span class=\"cmt\">// numberOfTabs = 4 — segments are 312 ÷ 4 wide.</span>\n<span class=\"typ\">EBSegmentedControl</span>(\n    segments: [<span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>],\n    selectedIndex: $selected\n)",
        "compose": "<span class=\"cmt\">// numberOfTabs = 4 — segments are 312 ÷ 4 wide.</span>\n<span class=\"typ\">EBSegmentedControl</span>(\n    segments = listOf(<span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>),\n    selectedIndex = selected,\n    onSelectionChange = { selected = it }\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Role",
        "ios": "Each segment is a <code>.button</code> with <code>.isSelected</code> on the active one; the row reads as a single-select set.",
        "android": "Apply <code>Role.RadioButton</code> per segment inside <code>Modifier.selectableGroup()</code> on the row."
      },
      {
        "requirement": "Selection announcement",
        "ios": "Announce position in the set — <code>accessibilityValue</code> of \"Label, 1 of 3, selected\". The count changes with <code>numberOfTabs</code>, so do not hard-code it.",
        "android": "Same, via <code>stateDescription</code>; <code>selectableGroup()</code> supplies the index."
      },
      {
        "requirement": "Minimum target",
        "ios": "Segments are 156 / 104 / 78 × <strong>40</strong>pt. Every one is under 44pt tall, and at 4 tabs 78pt wide is close to the limit. Extend the hit area with <code>.contentShape</code>; the drawn height belongs to the control.",
        "android": "Same geometry in dp, all under 48 × 48dp. Use <code>Modifier.minimumInteractiveComponentSize()</code>."
      },
      {
        "requirement": "Colour is not the only cue",
        "ios": "Active versus inactive is fill and label colour alone — no icon, no weight change. The <code>.isSelected</code> trait is what carries it for VoiceOver.",
        "android": "Same. The dividers between inactive segments are decorative and must not be announced."
      },
      {
        "requirement": "Keyboard and focus",
        "ios": "←/→ should move selection and Space/Enter commit. There is no Focused variant in Figma, so use the platform focus ring rather than inventing one.",
        "android": "D-pad ←/→ moves selection, Enter commits. Let the platform draw focus; the set has no Focused state to copy."
      },
      {
        "requirement": "Disabled",
        "ios": "<code>.disabled(true)</code> on the control disables every segment together — there is no per-segment disabled path.",
        "android": "<code>enabled = false</code> on the row; segments are not individually focusable."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use it for 2 to 4 mutually exclusive views of the same content — a filter across one list, a period switch on one chart.",
        "dontText": "Don’t use it for navigation between unrelated screens. It is a single-select filter, and the whole row is one control."
      },
      {
        "doText": "Keep labels short enough to fit the narrowest segment. At 4 tabs each segment is 78 wide with 16px padding either side, leaving 46 for the text.",
        "dontText": "Don’t rely on truncation. No variant has a wrap or ellipsis treatment, so an over-long label pushes past its segment."
      },
      {
        "doText": "Stay inside 2–4 segments. That is what Figma builds, and the widths divide 312 exactly at each count.",
        "dontText": "Don’t hand-build a 5-segment control. Nothing in the DS covers it, and the segment width stops being a clean division of 312."
      },
      {
        "doText": "Disable the whole control when the choice is unavailable, and set selection from the parent.",
        "dontText": "Don’t expect Figma to show you a disabled or pressed control. Those states live on the nested Segmented Control Button and are not exposed here — the first segment is active in all three variants."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "The positional <code>selected=first|second</code> pair is gone and segment widths now divide the control exactly — 312 ÷ 2, ÷ 3, ÷ 4 — so the hardcoded 168 is resolved. What remains is that three tab counts are three hand-built variants rather than one data-driven component: a 5-segment control is expressible in code and not in Figma."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>numberOfTabs</code> is a clear, non-positional name with numeric values. It replaced the <code>selected</code> axis, which named a position rather than a property of the control."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "The control owns one colour — the container border; the rest belongs to the nested Segmented Control Button. No <code>segmented-control/*</code> namespace is registered, and bindings cannot be read with the Talk To Figma plugin."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "The count maps cleanly to a segments array and selection to <code>selectedIndex</code>. Still no leading-icon or trailing-badge slot per segment, so the common \"filter with counts\" pattern cannot be drawn."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "The nested Segmented Control Button now carries Default, Pressed and Disabled — but the control does not expose them, and every variant ships the first segment active. So a pressed or disabled segmented control cannot be drawn from this set, even though the pieces exist one level down."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Text only — no icons or images. If the icon slot in C4 lands, it must accept vector instances."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Partly unblocked — the positional axis that blocked it is gone. No SwiftUI or Compose mappings are registered yet; the native library does not exist."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 3,
      "description": "<code>numberOfTabs</code> (3) = 3 variants. The control is 312 × 40 at every count and the segments divide it exactly. The first segment is active in all three; nothing in this set moves the selection. The divider column counts the lines <em>between</em> inactive segments — the boundary beside the active fill needs none, and the last segment’s coincides with the container border.",
      "columns": [
        "numberOfTabs",
        "Node ID",
        "Control size",
        "Segment",
        "Dividers"
      ],
      "rows": [
        {
          "cells": [
            "<code>2</code>",
            "<code>26628:50766</code>",
            "312 × 40",
            "156 × 40 — 312 ÷ 2",
            "0"
          ]
        },
        {
          "cells": [
            "<code>3</code>",
            "<code>26628:50769</code>",
            "312 × 40",
            "104 × 40 — 312 ÷ 3",
            "1"
          ]
        },
        {
          "cells": [
            "<code>4</code>",
            "<code>26628:50773</code>",
            "312 × 40",
            "78 × 40 — 312 ÷ 4",
            "2"
          ]
        }
      ]
    }
  },
  changelog: [
    {
      "version": "2.0.0",
      "date": "September 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Rebuilt in Figma on a new node · 26628:50765",
      "rows": [
        {
          "body": "<strong>The component was rebuilt in Figma and never logged.</strong> The record assessed <code>27:30929</code>; the live set is <code>26628:50765</code> and it is named <strong>Segmented Control</strong>, not <em>Toggle - Segmented Control</em>. Dated when the change was found — nothing records when it was made.",
          "delta": {
            "kind": "resolved",
            "label": "Rebuild"
          }
        },
        {
          "body": "<strong>The positional selection axis is gone.</strong> <code>selected=first | second</code> — two variants that differed only in which segment was filled — replaced by <code>numberOfTabs</code> (2, 3, 4). The axis now names a property of the control rather than a position within it.",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        },
        {
          "body": "<strong>Segment widths now divide the control exactly.</strong> The tab documented hardcoded 168-wide segments in a 336-wide control. The control is <strong>312 × 40</strong> and segments are 312 ÷ n — 156, 104, 78. Neither number in the old record was right.",
          "delta": {
            "kind": "resolved",
            "label": "C1 Resolved"
          }
        },
        {
          "body": "<strong>Inactive segments have no fill and no outline.</strong> The tab described a white fill with a 1.5px brand-blue outline. There is no fill, and the blue line is a 1px right-edge divider on the segment — which is why it reads as a border only where it meets the container.",
          "delta": {
            "kind": "resolved",
            "label": "C3 Resolved"
          }
        },
        {
          "body": "<strong>Style tab rebuilt to one card with the Figma property panel.</strong> A single <code>numberOfTabs</code> control replaces the retired <code>Selected</code> control, which offered First / Second on a set that no longer has a selection axis.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Preview divider bug found and fixed on recheck.</strong> The first pass drew a divider on every inactive segment including the last, so it stacked on the container border and the right edge rendered at double weight. Dividers appear only between two inactive segments — none at 2 tabs, one at 3, two at 4. Verified against <code>export_node_as_image</code> and in a browser.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Typography resolved to a style name.</strong> <code>Primary/Label/Base</code>, <code>matched</code>, replacing the font spec <code>Proxima Soft Bold · 16 / 16 · +0.25</code>.",
          "delta": {
            "kind": "resolved",
            "label": "C3 Resolved"
          }
        },
        {
          "body": "<strong>Property Mapping rewritten against the current schema.</strong> It mapped <code>selected=first / second</code> plus five \"(no … today)\" rows describing a proposal. Now one prose row per property, with the key distinction stated: <code>numberOfTabs</code> is an enum in Figma and a <em>count</em> in code.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Variants Inventory repointed.</strong> Two rows on <code>27:30930</code> / <code>27:30935</code> at 336 × 40, replaced with three on <code>26628:50766</code>, <code>26628:50769</code>, <code>26628:50773</code>, each carrying its segment width and divider count.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Installation and Usage were empty.</strong> Install had <code>planned: true</code> but no blocks, so the badge never rendered; Usage Snippets and Usage Guidelines were both empty. All written, one snippet per tab count.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Accessibility corrected.</strong> The tap-target row cited \"segments at 168 × 40\" and the disabled row invented an <code>opacity 0.4</code> treatment the component does not use. Rewritten against the real geometry, with a note that the announced count changes with <code>numberOfTabs</code>.",
          "delta": {
            "kind": "resolved",
            "label": "A11y"
          }
        },
        {
          "body": "<strong>Three tab counts are still three hand-built variants.</strong> The <em>data-driven</em> half of the standing recommendation has not landed: a 5-segment control is expressible in code and not in Figma.",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>The control exposes no State.</strong> The nested Segmented Control Button now carries Default, Pressed and Disabled, but none of it is reachable from this set — every variant ships the first segment active, so a pressed or disabled control cannot be drawn.",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Still no leading-icon or trailing-badge slot per segment</strong>, so the common \"filter with counts\" pattern cannot be drawn. Unchanged since v1.0.0.",
          "delta": {
            "kind": "open",
            "label": "C4 Open"
          }
        },
        {
          "body": "<strong>Segment height is under the minimum touch target.</strong> 40pt against 44 × 44pt on iOS and 48 × 48dp on Android, and at 4 tabs the 78pt width is close to the limit too.",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Divider weight unread.</strong> The plugin returns no <code>strokeWeight</code>, and the outside-aligned stroke falls outside the SVG export bounds. Drawn at 1px to match the container border — the one value in the Style tab that is not attested.",
          "delta": {
            "kind": "open",
            "label": "C3 Open"
          }
        },
        {
          "body": "<strong>Token bindings unread</strong>, so all six colour rows carry <code>—</code>. No <code>segmented-control/*</code> namespace is registered; the previous <code>toggle-segmented-control/*</code> paths were not carried forward because they named the retired node.",
          "delta": {
            "kind": "open",
            "label": "C3 Open"
          }
        },
        {
          "body": "<strong>The Overview tab is entirely pre-rebuild.</strong> Zero resolved and six open issues, three of which this rebuild answers — the positional axis, the hardcoded widths, and the name. <code>meta.node</code> still reads <code>27:30929</code> and the slug is still <code>toggle-segmented-control</code>. Overview scope.",
          "delta": {
            "kind": "open",
            "label": "Docs"
          }
        }
      ]
    },
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
