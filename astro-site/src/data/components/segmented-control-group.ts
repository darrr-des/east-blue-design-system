import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(demoKey, prop, value)`
// in `public/scripts/demos/segmented-control-group.js`.
const segmentedControlGroupDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'hasSubtext',
        prop: 'hasSubtext',
        control: 'toggle',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' },
        ],
      },
      {
        label: 'hasSlotContainer',
        prop: 'hasSlotContainer',
        control: 'toggle',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
    ],
  },
];

export const segmentedControlGroup: ComponentData = {
  meta: {
    slug: 'segmented-control-group',
    name: 'Segmented Control - Group',
    node: '27:30940',
    figmaUrl: 'https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=27-30940',
    description: 'A labeled Toggle Segmented Control with optional subtext and a small-avatar group below.',
    badges: [
      { kind: 'fix', label: 'Fix' },
      { kind: 'refine', label: 'Needs Refinement' },
    ],
    navGroup: 'Toggle',
    verdict: {
      kind: 'fix',
      title: 'Collapse subtext/avatars booleans + adopt named slots',
      text: 'Four variants on a <code>subtext × avatars</code> boolean matrix is a slot pattern in disguise — they describe whether content is present, not different visual treatments. Replace with named optional slots (<code>subtext?: String</code>, <code>avatars?: [Avatar]</code>) so the variant count drops to 1 and consumers can compose any future trailing content (a count badge, an inline error) without a new variant.',
    },
  },
  overview: {
    inContextNote: 'Used in form sections where a binary choice carries supporting metadata — e.g. a "Send to / Request from" picker with the most-recent recipients shown below, or a "Schedule / Now" toggle with a helper subtext explaining the consequence.',
    inContextHtml: '<div class="ctx-placeholder">\n      <svg width="220" height="130" viewBox="0 0 220 130" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <rect x="20" y="10" width="180" height="110" rx="6" stroke="currentColor" stroke-width="1.2" opacity=".2"/>\n        <text x="32" y="32" fill="#0A2757" font-size="9" font-weight="600" font-family="system-ui">Label</text>\n        <rect x="32" y="40" width="156" height="20" rx="4" fill="#005CE5"/>\n        <text x="60" y="54" fill="#FFF" font-size="8" font-weight="700" text-anchor="middle" font-family="system-ui">Option 1</text>\n        <text x="155" y="54" fill="#005CE5" font-size="8" font-weight="700" text-anchor="middle" font-family="system-ui">Option 2</text>\n        <text x="32" y="76" fill="#6780A9" font-size="8" font-weight="500" font-family="system-ui">Use this space for your subtext.</text>\n        <circle cx="42" cy="92" r="8" fill="#005CE5"/><text x="42" y="95" text-anchor="middle" fill="#FFF" font-size="6" font-weight="700" font-family="system-ui">DM</text>\n        <circle cx="62" cy="92" r="8" stroke="#005CE5" fill="#F6F9FD"/><text x="62" y="95" text-anchor="middle" fill="#005CE5" font-size="6" font-weight="700" font-family="system-ui">LM</text>\n        <circle cx="82" cy="92" r="8" stroke="#005CE5" fill="#F6F9FD"/><text x="82" y="95" text-anchor="middle" fill="#005CE5" font-size="6" font-weight="700" font-family="system-ui">LM</text>\n      </svg>\n    </div>',
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"scg-demo-preview\"></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Selected</span><select class=\"demo-panel-select\" id=\"scg-demo-selected\" onchange=\"_scgDemo.selected=this.value;updateSegmentedControlGroupDemo()\"><option value=\"first\" selected=\"\">First</option><option value=\"second\">Second</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Subtext</span><label class=\"demo-panel-toggle\"><input type=\"checkbox\" id=\"scg-demo-subtext\" onchange=\"_scgDemo.subtext=this.checked?'yes':'no';this.parentElement.classList.toggle('is-on',this.checked);updateSegmentedControlGroupDemo()\"/><span class=\"demo-panel-toggle__track\"><span class=\"demo-panel-toggle__thumb\"></span></span></label></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Avatars</span><label class=\"demo-panel-toggle\"><input type=\"checkbox\" id=\"scg-demo-avatars\" onchange=\"_scgDemo.avatars=this.checked?'yes':'no';this.parentElement.classList.toggle('is-on',this.checked);updateSegmentedControlGroupDemo()\"/><span class=\"demo-panel-toggle__track\"><span class=\"demo-panel-toggle__thumb\"></span></span></label></div></div></div></div>",
    traits: [
      { name: 'Reusable', rating: 'warn', note: 'Four variants for what should be a single component with two optional slots. Any future trailing content (a count badge, an error message, a help link) requires a new variant.' },
      { name: 'Self-contained', rating: 'partial', note: 'Composes Toggle - Segmented Control + Subtext Message + Avatar instances. Inherits all 3 sub-components\' open issues.' },
      { name: 'Consistent', rating: 'partial', note: 'Naming uses positional booleans (<code>subtext=yes|no</code>, <code>avatars=yes|no</code>) instead of slot semantics. Should be <code>subtext?: String</code> + <code>avatars?: [Avatar]</code>.' },
      { name: 'Composable', rating: 'partial', note: 'Built from sub-components but doesn\'t expose them as slots — consumers can\'t swap the inner control for a 3-segment variant or use a custom subtext component.' },
    ],
    behavior: [],
    resolved: [],
    open: [
      {
        headline: 'Boolean variant matrix instead of named slots.',
        body: '<code>subtext × avatars</code> produces 4 variants for a slot-presence question. Replace with named optional slots — Figma Slot architecture supports this directly.',
        tag: { criterion: 'C1', label: 'C1 · Layer Structure & Naming' },
      },
      {
        headline: 'Inherits all Toggle - Segmented Control issues.',
        body: 'No Pressed / Focused / Disabled state, hardcoded 2-segment count, positional <code>first|second</code> naming — all flagged on the parent component and propagate here.',
        tag: { criterion: 'C5', label: 'C5 · Interaction State Coverage' },
      },
      {
        headline: 'No way to change avatar count.',
        body: 'Avatar group is baked with exactly 3 avatars. Real consumers may want 1, 2, 5+. Should be a slot accepting <code>avatars: [Avatar]</code>.',
        tag: { criterion: 'C4', label: 'C4 · Native Mappability' },
      },
      {
        headline: 'Code Connect mappings not registered.',
        body: 'Blocked on the slot restructure — one mapping with optional <code>subtext</code> + <code>avatars</code> params will be cleaner than 4 variant entries.',
        tag: { criterion: 'C7', label: 'C7 · Code Connect Linkability' },
      },
    ],
    recommendations: [
      {
        headline: 'Convert boolean axes to named slots.',
        body: 'Target API: <code>EBSegmentedControlGroup(label, segments, selectedIndex, subtext?, avatars?)</code>. <code>subtext</code> and <code>avatars</code> become optional content slots driven by data, not variants. Drops Figma variant count from 4 to 1.',
        tag: 'Slot',
      },
      {
        headline: 'Adopt Figma Slot for both subtext and avatars.',
        body: 'Use Figma\'s native Slot feature so consumers can instance-swap any Subtext Message variant or any Avatar group composition without detaching.',
        tag: 'Slot',
      },
      {
        headline: 'Promote inner control to a data-driven Segmented Control.',
        body: 'Tracked on the Toggle - Segmented Control component — once that ships <code>segments: [Segment]</code>, this group inherits the flexibility automatically.',
        tag: 'Family',
      },
      {
        headline: 'Document the A11y model for the labeled group.',
        body: 'Use <code>aria-labelledby</code> referencing the label. Subtext gets <code>aria-describedby</code>. Avatars below should be a separate accessible region with their own labels.',
        tag: 'A11y',
      },
    ],
  },
  style: {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "scg-spec-main",
        "demoKey": "main",
        "title": "Segmented Control - Group",
        "node": "26628:50778",
        "description": "",
        "previewHtml": "<div id=\"segmented-control-group-spec-main\" class=\"spec-preview-body\"><svg width=\"312\" height=\"62\" viewBox=\"0 0 312 62\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><text class=\"scg-proxima\" x=\"2\" y=\"7\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\" dominant-baseline=\"central\">Label</text><g transform=\"translate(0,22)\"><path d=\"M6 0H156V40H6A6 6 0 0 1 0 34V6A6 6 0 0 1 6 0Z\" fill=\"#005CE5\"/><rect x=\"0.5\" y=\"0.5\" width=\"311\" height=\"39\" rx=\"5.5\" stroke=\"#005CE5\" stroke-width=\"1\"/><text class=\"scg-proxima\" x=\"78\" y=\"20\" font-size=\"16\" font-weight=\"700\" fill=\"#FFFFFF\" text-anchor=\"middle\" dominant-baseline=\"central\">Label</text><text class=\"scg-proxima\" x=\"234\" y=\"20\" font-size=\"16\" font-weight=\"700\" fill=\"#005CE5\" text-anchor=\"middle\" dominant-baseline=\"central\">Label</text></g></svg></div>",
        "demoControls": segmentedControlGroupDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "hasSubtext",
                "value": "false",
                "prop": "hasSubtext"
              },
              {
                "key": "hasSlotContainer",
                "value": "False",
                "prop": "hasSlotContainer"
              },
              {
                "key": "Slot Container (slot)",
                "value": "SLOT · ships 3 × Avatar",
                "mono": true
              },
              {
                "key": "Nested instance",
                "value": "Segmented Control — its properties are not exposed on the group",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Header label",
                "value": "#0A2757",
                "token": "—"
              },
              {
                "key": "Control border",
                "value": "#005CE5",
                "token": "—"
              },
              {
                "key": "Segment bg (selected)",
                "value": "#005CE5",
                "token": "—"
              },
              {
                "key": "Segment label (selected)",
                "value": "#FFFFFF",
                "token": "—"
              },
              {
                "key": "Segment label (rest)",
                "value": "#005CE5",
                "token": "—"
              },
              {
                "key": "Subtext",
                "value": "#6780A9",
                "token": "—",
                "variants": {
                  "hasSubtext:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Avatar bg",
                "value": "#005CE5",
                "token": "—",
                "variants": {
                  "hasSlotContainer:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Avatar border",
                "value": "#E5EBF4",
                "token": "—",
                "variants": {
                  "hasSlotContainer:false": {
                    "hide": true
                  }
                }
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Header label",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Segment label",
                "value": "Primary/Label/Base",
                "mono": true
              },
              {
                "key": "Subtext",
                "value": "Secondary/Bold/Caption",
                "mono": true,
                "variants": {
                  "hasSubtext:false": {
                    "hide": true
                  }
                }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Height",
                "value": "62px",
                "mono": true,
                "prop": "height"
              },
              {
                "key": "Width",
                "value": "312px",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "6px — on the Segmented Control; the group frame has none",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "0",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "0",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "0 — every part is stacked flush; the spacing you see is each instance’s own padding",
                "mono": true
              },
              {
                "key": "Parts",
                "value": "Header 22 · Control 40 · Subtext 22 · Slot 40",
                "mono": true
              },
              {
                "key": "Segment",
                "value": "156 × 40 — two equal halves of 312",
                "mono": true
              },
              {
                "key": "Border",
                "value": "1px",
                "mono": true
              },
              {
                "key": "Avatar",
                "value": "32 × 32 · gap 2 · 8px from the slot top",
                "mono": true,
                "variants": {
                  "hasSlotContainer:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Alignment",
                "value": "Leading — derived from bounding boxes; auto-layout alignment is not exposed",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSegmentedControlGroup</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    segments<span class=\"syn-punc\">: [</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">, </span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">],</span>\n    selectedIndex<span class=\"syn-punc\">: </span>$selected\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSegmentedControlGroup</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    segments <span class=\"syn-eq\">=</span> listOf<span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">, </span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">),</span>\n    selectedIndex <span class=\"syn-eq\">=</span> selected\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Part",
        "description": "The group owns no colour of its own — every value below belongs to a nested component (<code>FormGroup Header</code>, <code>Segmented Control</code>, <code>Subtext Message</code>) or to the slot’s example content. Read off <code>get_node_info</code> and <code>get_svg</code> on set <code>26628:50778</code>. Token paths could not be read — the Talk To Figma plugin returns no variable bindings — and the previous record’s paths are not carried forward because they named a retired node.",
        "columns": [
          "Token",
          "Value"
        ],
        "rows": [
          {
            "role": "FormGroup Header",
            "token": "#label",
            "values": [
              "—",
              "#0A2757"
            ]
          },
          {
            "role": "Segmented Control",
            "token": "Container border",
            "values": [
              "—",
              "#005CE5"
            ]
          },
          {
            "role": "—",
            "token": "Segment bg · selected",
            "values": [
              "—",
              "#005CE5"
            ]
          },
          {
            "role": "—",
            "token": "Segment label · selected",
            "values": [
              "—",
              "#FFFFFF"
            ]
          },
          {
            "role": "—",
            "token": "Segment label · rest",
            "values": [
              "—",
              "#005CE5"
            ]
          },
          {
            "role": "Subtext Message",
            "token": "#subtext",
            "values": [
              "—",
              "#6780A9"
            ]
          },
          {
            "role": "Slot Container",
            "token": "Avatar bg",
            "values": [
              "—",
              "#005CE5"
            ]
          },
          {
            "role": "—",
            "token": "Avatar border",
            "values": [
              "—",
              "#E5EBF4"
            ]
          },
          {
            "role": "—",
            "token": "Avatar initials",
            "values": [
              "—",
              "#FFFFFF"
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
      "description": "Read off the property panel of set <code>26628:50778</code>. The nested <code>Segmented Control</code> is listed under <em>Nested instances</em>, not <em>Properties</em> — none of its properties are exposed on the group, so the segments and the selected index have no Figma property behind them.",
      "rows": [
        {
          "figma": "hasSubtext — true, false",
          "swift": "<code>subtext: String?</code> — omit to hide",
          "compose": "<code>subtext: String? = null</code>"
        },
        {
          "figma": "hasSlotContainer — true, false",
          "swift": "presence of the <code>.ebSlotContainer { }</code> trailing closure",
          "compose": "<code>slotContainer: @Composable (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "Slot Container (slot) — ships 3 × Avatar",
          "swift": "<code>.ebSlotContainer { HStack(spacing: 2) { … } }</code>",
          "compose": "<code>slotContainer = { … }</code>"
        },
        {
          "figma": "— no Figma property (the header label)",
          "swift": "<code>label: String</code>",
          "compose": "<code>label: String</code>"
        },
        {
          "figma": "— no Figma property (segments and selection, owned by the nested Segmented Control)",
          "swift": "<code>segments: [String]</code> · <code>selectedIndex: Binding&lt;Int&gt;</code>",
          "compose": "<code>segments: List&lt;String&gt;</code> · <code>selectedIndex: Int</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Toggle/EBSegmentedControlGroup.swift",
        "compose": "android/components/toggle/EBSegmentedControlGroup.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Label and control",
        "swift": "<span class=\"cmt\">// hasSubtext = false, hasSlotContainer = false — 312 × 62</span>\n<span class=\"typ\">EBSegmentedControlGroup</span>(\n    label: <span class=\"str\">\"Label\"</span>,\n    segments: [<span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>],\n    selectedIndex: $selected\n)",
        "compose": "<span class=\"cmt\">// hasSubtext = false, hasSlotContainer = false — 312 × 62</span>\n<span class=\"typ\">EBSegmentedControlGroup</span>(\n    label = <span class=\"str\">\"Label\"</span>,\n    segments = listOf(<span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>),\n    selectedIndex = selected\n)"
      },
      {
        "subheading": "With subtext",
        "swift": "<span class=\"cmt\">// hasSubtext = true — adds the 22px Subtext Message row, 312 × 84</span>\n<span class=\"typ\">EBSegmentedControlGroup</span>(\n    label: <span class=\"str\">\"Label\"</span>,\n    segments: [<span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>],\n    selectedIndex: $selected,\n    subtext: <span class=\"str\">\"Use this space for your subtext.\"</span>\n)",
        "compose": "<span class=\"cmt\">// hasSubtext = true — adds the 22px Subtext Message row, 312 × 84</span>\n<span class=\"typ\">EBSegmentedControlGroup</span>(\n    label = <span class=\"str\">\"Label\"</span>,\n    segments = listOf(<span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>),\n    selectedIndex = selected,\n    subtext = <span class=\"str\">\"Use this space for your subtext.\"</span>\n)"
      },
      {
        "subheading": "With the slot container",
        "swift": "<span class=\"cmt\">// hasSlotContainer = true — adds the 40px slot. Figma ships it</span>\n<span class=\"cmt\">// holding three 32px Avatars 2px apart, but the contents swap.</span>\n<span class=\"typ\">EBSegmentedControlGroup</span>(\n    label: <span class=\"str\">\"Label\"</span>,\n    segments: [<span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>],\n    selectedIndex: $selected\n)\n.<span class=\"fn\">ebSlotContainer</span> {\n    <span class=\"typ\">HStack</span>(spacing: 2) {\n        <span class=\"kw\">ForEach</span>(recentContacts) { <span class=\"typ\">EBAvatar</span>($0) }\n    }\n}",
        "compose": "<span class=\"cmt\">// hasSlotContainer = true — adds the 40px slot. Figma ships it</span>\n<span class=\"cmt\">// holding three 32px Avatars 2px apart, but the contents swap.</span>\n<span class=\"typ\">EBSegmentedControlGroup</span>(\n    label = <span class=\"str\">\"Label\"</span>,\n    segments = listOf(<span class=\"str\">\"Label\"</span>, <span class=\"str\">\"Label\"</span>),\n    selectedIndex = selected,\n    slotContainer = {\n        <span class=\"typ\">Row</span>(horizontalArrangement = Arrangement.spacedBy(2.dp)) {\n            recentContacts.forEach { <span class=\"typ\">EBAvatar</span>(it) }\n        }\n    }\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Label association",
        "ios": "Use <code>.accessibilityLabel</code> on the segmented row referencing the header text, so the control is never announced as a bare \"Label, Label\".",
        "android": "Wrap in <code>Modifier.semantics { contentDescription = label }</code> on the group container."
      },
      {
        "requirement": "Selection semantics",
        "ios": "The segments are a single-select set — <code>.accessibilityAddTraits(.isSelected)</code> on the active one, and announce position (\"1 of 2\").",
        "android": "Use <code>Modifier.selectableGroup()</code> on the row and <code>selected = true</code> on the active segment."
      },
      {
        "requirement": "Minimum target",
        "ios": "The segment is 156 × <strong>40</strong>pt. 40 is under the 44 × 44pt minimum — add 4pt of hit area above and below rather than resizing the control.",
        "android": "Same geometry in dp; 40 is under the 48 × 48dp minimum, so extend the touch target without changing the drawn height."
      },
      {
        "requirement": "Subtext announcement",
        "ios": "Wire as <code>.accessibilityHint</code> on the segmented row so VoiceOver reads \"Label, hint: Use this space for your subtext.\"",
        "android": "Use <code>stateDescription</code> on the row."
      },
      {
        "requirement": "Slot container",
        "ios": "A separate accessibility region — the slot is arbitrary content and must carry its own labels, not inherit the group’s.",
        "android": "Same. Give the slot its own <code>contentDescription</code> per child; do not merge it into the group semantics."
      },
      {
        "requirement": "Dynamic Type / font scaling",
        "ios": "Header is 14pt and the segment labels 16pt — both must scale. The 40pt control height has to grow with them.",
        "android": "Use <code>sp</code> for all three text layers and let the 40dp row expand with <code>fontScale</code>."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use the group when a segmented control needs a heading — it bundles <code>FormGroup Header</code>, <code>Segmented Control</code> and an optional <code>Subtext Message</code> at a fixed rhythm.",
        "dontText": "Don’t reach for it to get a bare segmented control. With no header to show, use <code>Segmented Control</code> directly — the group always renders its 22px header row."
      },
      {
        "doText": "Turn on <code>hasSubtext</code> for helper or validation copy under the control; it adds the 22px Subtext Message row and takes the component from 62 to 84.",
        "dontText": "Don’t put validation copy in the header. The header is <code>Primary/Label/Light/Small</code> at full-strength <code>#0A2757</code> and reads as a title, not a message."
      },
      {
        "doText": "Use <code>Slot Container</code> for content that belongs to the selection — the recent-contact avatars it ships with are the reference case.",
        "dontText": "Don’t leave <code>hasSlotContainer</code> off and expect the avatars to show. It defaults to <code>False</code>, so the slot and its three Avatars are invisible until a consumer opts in."
      },
      {
        "doText": "Set the segment labels and the selected index in code.",
        "dontText": "Don’t look for them in Figma. The nested <code>Segmented Control</code> is not exposed on the group, so segment count, labels and selection are all code-only — two segments is what the component draws."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Every part is a named instance — <code>FormGroup Header</code>, <code>Segmented Control</code>, <code>Subtext Message</code> — and the slot is a real <code>SLOT</code> node named <code>Slot Container</code>. The generic wrappers the 1.0.0 assessment flagged are gone."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Names follow the <code>has</code> prefix with lowercase values. But the two behave alike and are built differently: <code>hasSubtext</code> is a <strong>variant</strong> whose values are <code>true</code>/<code>false</code>, while <code>hasSlotContainer</code> is a <strong>boolean property</strong>. Both toggle one row’s presence; one doubles the variant count and the other does not."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "The group owns no colour of its own — every value belongs to a nested component or to the slot’s example content, so there is nothing here to leave unbound. Bindings themselves cannot be read with the Talk To Figma plugin, so the Style tab’s token column is <code>—</code> rather than asserted."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "A vertical container with a header, a control, and two optional rows — one a string, one an arbitrary slot. Maps to a single view on both platforms. The named-slot restructure the 1.0.0 assessment asked for has landed in Figma."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "The group has no states of its own, which is correct — but the nested <code>Segmented Control</code> is not exposed, so nothing about selection, pressed or disabled can be reached through the group in Figma. Every consumer draws the same two segments with the first one selected."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "No assets owned by this component. The Avatars inside <code>Slot Container</code> are example content and belong to the Avatar component."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "No longer blocked — the slot restructure that blocked it is done. No SwiftUI or Compose mappings are registered yet; the native library does not exist."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 2,
      "description": "<code>hasSubtext</code> (2) = 2 variants. <code>hasSlotContainer</code> is a boolean property and <code>Slot Container</code> is a <code>SLOT</code> — both change what renders without adding a variant, which is why a component with four visible configurations ships only two. Heights below are with the slot hidden, as Figma ships it; turning it on adds 40.",
      "columns": [
        "hasSubtext",
        "Node ID",
        "Size",
        "Parts"
      ],
      "rows": [
        {
          "cells": [
            "<code>false</code>",
            "<code>26628:50779</code>",
            "312 × 62",
            "Header 22 + Control 40"
          ]
        },
        {
          "cells": [
            "<code>true</code>",
            "<code>26628:50786</code>",
            "312 × 84",
            "Header 22 + Control 40 + Subtext 22"
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
      "header": "Rebuilt in Figma on a new node · 26628:50778",
      "rows": [
        {
          "body": "<strong>The component was rebuilt in Figma and never logged.</strong> The record still assessed <code>27:30940</code>; the live set is <code>26628:50778</code>. This entry is dated when the change was <em>found</em>, not when it was made — nothing in the file records the latter.",
          "delta": {
            "kind": "resolved",
            "label": "Rebuild"
          }
        },
        {
          "body": "<strong>Figma Slots adopted.</strong> <code>Slot Container</code> is now a real <code>SLOT</code> node holding three 32px Avatars, replacing the baked-in avatar row. This applies the standing <em>Adopt Figma Slot</em> recommendation.",
          "delta": {
            "kind": "resolved",
            "label": "C1 Resolved"
          }
        },
        {
          "body": "<strong>The boolean variant matrix collapsed.</strong> <code>subtext × avatars</code> produced four variants; the set now ships <strong>two</strong> — <code>hasSubtext</code> is the only variant axis, and <code>hasSlotContainer</code> is a boolean property that changes what renders without doubling the matrix.",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        },
        {
          "body": "<strong>Width corrected — 366 to 312.</strong> Every part of the component measures 312: header, control, subtext and slot alike.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Heights corrected.</strong> Documented as 64 / 86 / 104 / 118; read off Figma as <strong>62 / 84</strong> with the slot hidden and 102 / 124 with it shown. The parts are 22 + 40 + 22 + 40.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Gap is 0, not 8.</strong> The tab documented 8px between label, control and subtext. Every part is stacked flush — the rhythm you see is each nested instance’s own bottom padding, which means the group cannot tune its own spacing.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>A <code>Selected</code> control was documented that Figma never had.</strong> The Style tab offered First / Second; the nested <code>Segmented Control</code> is listed under <em>Nested instances</em> and exposes nothing, so selection is code-only. The control is gone and Property Mapping now says so.",
          "delta": {
            "kind": "resolved",
            "label": "C4 Resolved"
          }
        },
        {
          "body": "<strong>Style tab rebuilt to one card with the Figma property panel.</strong> <code>hasSubtext</code> and <code>hasSlotContainer</code> as toggles; <code>Slot Container</code> and the nested <code>Segmented Control</code> as static rows, since a slot takes no control.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Typography resolved to style names.</strong> Header <code>Primary/Label/Light/Small</code>, segment label <code>Primary/Label/Base</code>, subtext <code>Secondary/Bold/Caption</code> — all three <code>matched</code>. The tab previously wrote the header as a font spec, <code>Proxima Soft Semibold · 16 / 16</code>, at a size the layer does not use (it is 14 / 14).",
          "delta": {
            "kind": "resolved",
            "label": "C3 Resolved"
          }
        },
        {
          "body": "<strong>Preview border radius fixed.</strong> The selected segment was drawn as a square rect clipped by a <code>&lt;clipPath&gt;</code>, the way Figma exports it — the clip did not resolve in injected markup, so the blue half rendered with square left corners. Redrawn as an explicit rounded path; verified in a browser.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Code tab rebuilt.</strong> Installation had no blocks at all and Usage Snippets and Usage Guidelines were empty. Property Mapping described the retired <code>subtext=yes/no</code> / <code>avatars=yes/no</code> axes, and the Variants Inventory listed four <code>27:309xx</code> nodes at 366 wide.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Segment height is under the minimum touch target.</strong> The segment is 156 × 40 — below 44 × 44pt on iOS and 48 × 48dp on Android. The Accessibility table now says to extend the hit area rather than resize the control.",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Two properties with the same job, built two ways.</strong> <code>hasSubtext</code> is a variant with <code>true</code>/<code>false</code> values while <code>hasSlotContainer</code> is a boolean property. Both toggle one row’s presence; only one doubles the variant count.",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Nothing about the nested control is reachable.</strong> Segment count, labels, selection, pressed and disabled all live in <code>Segmented Control</code>, which the group does not expose — so every instance draws the same two segments with the first selected.",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Token bindings unread.</strong> The Talk To Figma plugin returns no variable bindings, so all nine colour rows carry <code>—</code>. The previous record’s paths were not carried forward — they named the retired node.",
          "delta": {
            "kind": "open",
            "label": "C3 Open"
          }
        },
        {
          "body": "<strong><code>meta.node</code> still points at the retired <code>27:30940</code></strong>, and the Overview tab’s four open issues ask for changes this rebuild already made. Both are Overview scope and need a <em>Component Review</em> run — until then the Code tab and the Overview tab disagree.",
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
      header: 'Initial Assessment · node 27:30940',
      rows: [
        { body: '<strong>Component assessed</strong> — 4 variants on <code>subtext × avatars</code>. Composes Toggle - Segmented Control + Subtext Message + Avatar. <span class="tag-fixed">Documented</span>', delta: { kind: 'resolved', label: 'Initial' } },
        { body: '<strong>Verdict: Fix</strong> — Replace boolean axes with named optional slots (<code>subtext?</code>, <code>avatars?</code>). Drops variant count from 4 to 1 and unlocks any future trailing content. <span class="tag-open tag-c1 tag-c2">Open</span>', delta: { kind: 'open', label: 'Family' } },
        { body: '<strong>C1 — Boolean axes</strong> — Slot-presence as variants. Convert to Figma Slot. <span class="tag-open tag-c1">Open</span>', delta: { kind: 'open', label: 'C1' } },
        { body: '<strong>C5 — Inherited state gaps</strong> — Toggle - Segmented Control is missing Pressed / Focused / Disabled; this group inherits all of those. <span class="tag-open tag-c5">Open</span>', delta: { kind: 'open', label: 'C5' } },
        { body: '<strong>C7 — Code Connect</strong> — Not registered. Blocked on slot restructure. <span class="tag-open tag-c7">Open</span>', delta: { kind: 'open', label: 'C7' } },
      ],
    },
  ],
};
