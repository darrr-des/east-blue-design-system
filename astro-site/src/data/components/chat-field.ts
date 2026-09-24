import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/chat-field.js`.
// Panel mirrors the property panel of set 5536:31209: two variant axes.
// leadingAction and trailingAction are SLOTs (4 items each), no control.
const chatFieldDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      { label: 'isActive', prop: 'isactive', control: 'toggle', defaultValue: 'false',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'hasValue', prop: 'hasvalue', control: 'toggle', defaultValue: 'false',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
    ],
  },
];

export const chatField: ComponentData = {
  "meta": {
    "slug": "chat-field",
    "name": "Chat Composer",
    "node": "5536:31209",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5536-31209",
    "description": "A message composer that arranges a leading action slot, a composed Input Field and a trailing send slot into one row.",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Chat",
    "verdict": {
      "kind": "keep",
      "title": "Keep — all findings resolved",
      "text": "Rebuilt on node <code>5536:31209</code> in the 2026 Working File, and the restructure has landed in full: renamed <strong>Chat Composer</strong>, rebuilt as a composed pattern around a real <code>Input Field</code> instance, with <code>leadingAction</code> and <code>trailingAction</code> as genuine Figma Slots holding their icon instances directly, both action glyphs vectorised from the shared icon library, and a send control that dims when there is nothing to send. The schema is now <code>isActive</code> × <code>hasValue</code> — two independent booleans carrying the §2 prefix with Title Case values, naming what actually differs between variants rather than the effect that follows. Disabled and error states are scoped out for this release by owner decision. All four DS Health traits pass; the only item still open is Code Connect, blocked until the native library exists."
    }
  },
  "overview": {
    "inContextNote": "Canonical contexts: chat threads, customer-support conversations, peer-to-peer messaging, and comment composers docked to the bottom of a scroll view.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"120\" height=\"80\" viewBox=\"0 0 120 80\" fill=\"none\">\n          <rect x=\"10\" y=\"6\" width=\"100\" height=\"68\" rx=\"8\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <rect x=\"18\" y=\"14\" width=\"50\" height=\"10\" rx=\"4\" fill=\"currentColor\" opacity=\".08\"></rect>\n          <rect x=\"50\" y=\"28\" width=\"54\" height=\"10\" rx=\"4\" fill=\"currentColor\" opacity=\".1\"></rect>\n          <rect x=\"18\" y=\"42\" width=\"42\" height=\"10\" rx=\"4\" fill=\"currentColor\" opacity=\".08\"></rect>\n          <rect x=\"14\" y=\"60\" width=\"92\" height=\"10\" rx=\"4\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".25\"></rect>\n          <path d=\"M18 65h4M20 63v4\" stroke=\"currentColor\" stroke-width=\"1\" stroke-linecap=\"round\" opacity=\".4\"></path>\n          <path d=\"M98 62l-4 3 4 3-1-3zM94 65l8-3\" stroke=\"currentColor\" stroke-width=\"1\" stroke-linejoin=\"round\" fill=\"none\" opacity=\".5\"></path>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"cf-demo-preview\"><svg width=\"360\" height=\"88\" viewBox=\"0 0 360 88\" fill=\"none\"><rect width=\"360\" height=\"88\" fill=\"#FFFFFF\"></rect><rect x=\"12\" y=\"28\" width=\"32\" height=\"32\" fill=\"none\"></rect><path d=\"M28 36v16M20 44h16\" stroke=\"#005CE5\" stroke-width=\"2\" stroke-linecap=\"round\"></path><rect x=\"52.5\" y=\"18.5\" width=\"247\" height=\"51\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#D7E0EF\" stroke-width=\"1\"></rect><text x=\"64\" y=\"50\" font-family=\"Proxima Soft, system-ui\" font-size=\"16\" font-weight=\"600\" fill=\"#90A8D0\" letter-spacing=\"0.25\">Say hi!</text><rect x=\"312\" y=\"28\" width=\"32\" height=\"32\" fill=\"none\"></rect><path d=\"M319 44L339 35L332 55L329 46Z\" stroke=\"#005CE5\" stroke-width=\"1.6\" stroke-linejoin=\"round\" fill=\"none\"></path><path d=\"M319 44L329 46\" stroke=\"#005CE5\" stroke-width=\"1.6\" stroke-linecap=\"round\"></path></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">active</span><select class=\"demo-panel-select\" onchange=\"_cfDemo.active=this.value;updateChatFieldDemo()\"><option value=\"no\" selected=\"\">no</option><option value=\"yes\">yes</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "A generic composer row — the two action slots make it work for chat, comments or any send-a-message surface, rather than binding it to one screen."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its row layout and spacing; the field, the icons and the slot contents all come from published DS components, so nothing is redrawn locally."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "The schema is <code>isActive</code> × <code>hasValue</code> — both §2 booleans in lowerCamelCase with Title Case values per §5 — naming the field’s focus and content rather than the effects that follow from them. Structure matches: real Figma Slots holding their instances directly on both sides, library icon instances, and a composed <code>Input Field</code>. Note for handoff: what this component calls <code>isActive</code> is what its Form Elements siblings express as <code>State=Focused</code>."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Two real Figma Slots around a composed <code>Input Field</code> instance. It arranges DS parts rather than reimplementing them, and a consumer can swap either action without detaching."
      }
    ],
    "behavior": [
      {
        "state": "Default (inactive)",
        "ios": "yes",
        "android": "yes",
        "property": "active=no",
        "notes": "Inner field shows 1px #D7E0EF border, placeholder text \"Say hi!\"."
      },
      {
        "state": "Active (focused)",
        "ios": "yes",
        "android": "yes",
        "property": "active=yes",
        "notes": "Inner field shows 2px #005CE5 border. Text color switches from placeholder to filled."
      },
      {
        "state": "Filled (has content)",
        "ios": "na",
        "android": "na",
        "property": "(not represented)",
        "notes": "No distinct variant. Inner field's <code>isFilled</code> is pinned by the <code>active</code> toggle; the composer can't model \"typed but unfocused\"."
      },
      {
        "state": "Error",
        "ios": "na",
        "android": "na",
        "property": "(not represented)",
        "notes": "Input Field supports Error; Chat Field does not expose it."
      },
      {
        "state": "Disabled / send-disabled",
        "ios": "na",
        "android": "na",
        "property": "(not represented)",
        "notes": "No disabled state for the composer, and no way to dim the send icon when the field is empty."
      }
    ],
    "resolved": [
      {
        "headline": "Renamed to Chat Composer and rebuilt as a composed pattern.",
        "body": "v2.0: Rebuilt on node <code>5536:31209</code> in the 2026 Working File. The component no longer redraws a text field — it composes a real <code>Input Field</code> instance between two action slots, which is exactly the restructure the previous assessment asked for. It is now a layout that arranges existing DS parts rather than a primitive competing with one, and a fix to Input Field reaches it for free. (C4 · Composition)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "<code>leadingAction</code> and <code>trailingAction</code> are real Figma Slots.",
        "body": "v2.0: Both are genuine <code>SLOT</code> nodes rather than frames standing in for them, so a consumer swaps in their own attach control or send affordance without detaching. This also gives the native handoff two named content slots to bind rather than fixed children. (C1 · Slot)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Action glyphs are vectors, not rasters.",
        "body": "v2.0: Both PNGs are gone. The leading control is an <code>Add_Full</code> instance carrying a <code>shape_full</code> boolean operation, and the trailing control is a <code>Send Message Medium</code> instance — both from the shared icon library, so they recolor from tokens and stay crisp at any density. Confirmed visually as well as structurally. (C6 · Asset)",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Send-disabled visual added.",
        "body": "v2.0: The trailing send control now dims when there is nothing to send — a pale blue paper plane at <code>sendEnabled=false</code> against the full <code>#005CE5</code> at <code>sendEnabled=true</code>, alongside the field showing placeholder copy rather than a value. This is the recommendation applied: an empty composer no longer offers a send affordance that looks live. Verified by export rather than from the layer tree. (C5 · State)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "<code>active=yes/no</code> retired; variant count doubled.",
        "body": "v2.0: The old two-variant set with a <code>yes/no</code> boolean is replaced by two axes over four variants — a state axis carrying <code>default</code> and <code>active</code> (the field border moving <code>#D7E0EF</code> → <code>#005CE5</code>), and a send-enablement boolean using real <code>true</code>/<code>false</code> values. The set now depicts focus and content independently rather than collapsing them. Property casing still needs a pass and is tracked below. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Trailing action slot dropped its generic wrapper.",
        "body": "v2.0: <code>trailingAction</code> holds its icon instance directly, with no intermediate frame named <code>container</code>. The leading slot still carries one, tracked below. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Property schema rebuilt as two booleans.",
        "body": "v2.1: Verified on the live node. <code>state = default | active</code> and <code>sendEnabled</code> are replaced by <code>isActive = False | True</code> × <code>hasValue = False | True</code>. Both carry the §2 <code>is</code> / <code>has</code> prefix in lowerCamelCase with Title Case values per §5, and expressing focus as a boolean rather than a two-value enum is the better fit — there were only ever two positions, and the two axes are genuinely independent: a composer can be focused and empty, or unfocused and full. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Axis renamed to name the cause, not the effect.",
        "body": "v2.1: <code>sendEnabled</code> → <code>hasValue</code>. The axis now describes what actually differs between the variants — the field holds content — with the send control’s appearance following from it. That removes the impossible combination the old name allowed, where a designer could set <code>sendEnabled=true</code> on an empty composer, and aligns the vocabulary with <a href=\"#\" onclick=\"showPanelById('text-area');return false;\">Text Area</a>. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Action slots evened up.",
        "body": "v2.1: The <code>container</code> frame is gone from <code>leadingAction</code>, which now holds its <code>Add_Full</code> instance directly, matching <code>trailingAction</code>. Both slots are structurally identical, so a consumer swapping either one meets the same shape. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>hasValue</code> as an explicit axis — recorded exception.",
        "body": "v2.1: The family rule set on <a href=\"#\" onclick=\"showPanelById('text-area');return false;\">Text Area</a> is that <code>hasValue</code> earns a variant axis where the filled state changes geometry, and is derived in code where it changes only color — which is why <a href=\"#\" onclick=\"showPanelById('search-field');return false;\">Search Field</a> has no such boolean. Chat Composer is 88px in all four variants, so it looks like it should derive too. It keeps the axis deliberately: unlike a bare field, the composer owns a <em>separate interactive control</em> whose enabled state has to be specified for handoff, and the send button’s two appearances are a spec a developer needs to see rather than infer. Recorded here so the apparent contradiction reads as a considered exception. (C2 · Docs)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Disabled and error states scoped out for now.",
        "body": "v2.1: Confirmed by the owner — the composer ships focus and content only. Unavailable conversations are out of scope for this release rather than unhandled, so a native implementation should not expect a dimmed composer to bind to. When offline, muted, rate-limited or blocked-recipient cases are taken on, they arrive together as one state pass rather than being added piecemeal. Recorded so the absence reads as scope rather than omission. (C5)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      }
    ],
"open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — no native library exists yet. The structure is ready: two named slots around a composed <code>Input Field</code>, driven by two booleans.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": []
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "cf-spec-main",
        "demoKey": "main",
        "title": "Chat Composer",
        "node": "5536:31209",
        "description": "A 360 × 88 message bar — an attach action, a 248-wide input field and a send action. isActive lights the border; hasValue swaps the placeholder for a value.",
        "previewHtml": "<div id=\"chat-field-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": chatFieldDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "isActive",
                "value": "False",
                "prop": "isactive"
              },
              {
                "key": "hasValue",
                "value": "False",
                "prop": "hasvalue"
              },
              {
                "key": "⤷ leadingAction",
                "value": "Slot · 4 items — Add_Full"
              },
              {
                "key": "⤷ trailingAction",
                "value": "Slot · 4 items — Send Message Medium"
              },
              {
                "key": "Resolved variant",
                "value": "5536:31210 · 360 × 88",
                "mono": true,
                "prop": "variantNode"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Background",
                "value": "#FFFFFF",
                "token": "—",
                "swatch": "#FFFFFF"
              },
              {
                "key": "Field fill",
                "value": "#FFFFFF",
                "token": "—",
                "swatch": "#FFFFFF"
              },
              {
                "key": "Field border",
                "value": "#D7E0EF",
                "token": "—",
                "swatch": "#D7E0EF",
                "variants": {
                  "isactive:true": {
                    "value": "#005CE5",
                    "swatch": "#005CE5"
                  }
                }
              },
              {
                "key": "Placeholder",
                "value": "#90A8D0",
                "token": "—",
                "swatch": "#90A8D0",
                "variants": {
                  "hasvalue:true": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Value",
                "value": "#0A2757",
                "token": "—",
                "swatch": "#0A2757",
                "variants": {
                  "hasvalue:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Add icon",
                "value": "#005CE5",
                "token": "—",
                "swatch": "#005CE5"
              },
              {
                "key": "Send icon",
                "value": "#9BC5FD",
                "token": "—",
                "swatch": "#9BC5FD",
                "variants": {
                  "hasvalue:true": {
                    "value": "#005CE5",
                    "swatch": "#005CE5"
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
                "key": "Size",
                "value": "360 × 88",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "12 top · 12 sides · 24 bottom",
                "mono": true
              },
              {
                "key": "leadingAction",
                "value": "40 × 52 at (12, 12) · icon 32",
                "mono": true
              },
              {
                "key": "Input Field",
                "value": "248 × 52 at (52, 12)",
                "mono": true
              },
              {
                "key": "Field radius",
                "value": "6px",
                "mono": true
              },
              {
                "key": "Field border",
                "value": "1px",
                "mono": true,
                "variants": {
                  "isactive:true": {
                    "value": "2px"
                  }
                }
              },
              {
                "key": "Text inset",
                "value": "12 left · 16 top",
                "mono": true
              },
              {
                "key": "trailingAction",
                "value": "44 × 52 at (300, 12) · icon 32",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "#text-label",
                "value": "Primary/Multi-line Label/Light/Base",
                "mono": true
              }
            ]
          }
        ],
        "swift": "EBChatComposer(\n    text: $message,\n    placeholder: \"Say hi!\"\n)\n    .ebLeadingAction(.add) { attach() }\n    .ebTrailingAction(.send) { send() }",
        "compose": "EBChatComposer(\n    value = message,\n    onValueChange = { message = it },\n    placeholder = \"Say hi!\",\n    leadingAction = { EBIconButton(EBIcons.Add) { attach() } },\n    trailingAction = { EBIconButton(EBIcons.Send) { send() } }\n)"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Read off <code>get_node_info</code> on the four variants of set <code>5536:31209</code>. The two icon fills are not exposed by the plugin — they come from <code>export_node_as_image</code>. Token paths could not be read.",
        "columns": [
          "Inactive",
          "Active"
        ],
        "rows": [
          {
            "role": "Field border",
            "token": "—",
            "values": [
              "#D7E0EF",
              "#005CE5"
            ]
          },
          {
            "role": "Field fill",
            "token": "—",
            "values": [
              "#FFFFFF",
              "#FFFFFF"
            ]
          },
          {
            "role": "Placeholder",
            "token": "—",
            "values": [
              "#90A8D0",
              "#90A8D0"
            ]
          },
          {
            "role": "Value",
            "token": "—",
            "values": [
              "#0A2757",
              "#0A2757"
            ]
          },
          {
            "role": "Add icon",
            "token": "—",
            "values": [
              "#005CE5",
              "#005CE5"
            ]
          },
          {
            "role": "Send icon (no value / value)",
            "token": "—",
            "values": [
              "#9BC5FD / #005CE5",
              "#9BC5FD / #005CE5"
            ]
          }
        ]
      }
    ]
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": [
        {
          "label": "iOS — Swift Package Manager",
          "code": "<span class=\"cmt\">// In Xcode: File → Add Package Dependencies</span>\n<span class=\"str\">\"https://github.com/AY-Org/eb-ds-ios\"</span>"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:chat-composer:2.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.chatcomposer.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "Set <code>5536:31209</code> carries two booleans and two SLOTs. Natively both booleans are state, not parameters — focus drives <code>isActive</code> and the bound text drives <code>hasValue</code>.",
      "rows": [
        {
          "figma": "isActive — boolean",
          "swift": "<code>@FocusState</code> on the field",
          "compose": "<code>interactionSource.collectIsFocusedAsState()</code>"
        },
        {
          "figma": "hasValue — boolean",
          "swift": "<code>text.isEmpty</code>",
          "compose": "<code>value.isNotEmpty()</code>"
        },
        {
          "figma": "⤷ leadingAction — SLOT · 4 items",
          "swift": "<code>.ebLeadingAction(.add) { }</code>",
          "compose": "<code>leadingAction: @Composable () -&gt; Unit</code>"
        },
        {
          "figma": "⤷ trailingAction — SLOT · 4 items",
          "swift": "<code>.ebTrailingAction(.send) { }</code>",
          "compose": "<code>trailingAction: @Composable () -&gt; Unit</code>"
        },
        {
          "figma": "— <code>#text-label</code>",
          "swift": "<code>text: Binding&lt;String&gt;</code> + <code>placeholder: String</code>",
          "compose": "<code>value: String</code>, <code>onValueChange</code>, <code>placeholder: String</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/ChatComposer/EBChatComposer.swift",
        "compose": "android/components/chatcomposer/EBChatComposer.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Resting",
        "swift": "<span class=\"cmt\">// isActive=False, hasValue=False — 5536:31210, 360 × 88.</span>\nEBChatComposer(\n    text: $message,\n    placeholder: \"Say hi!\"\n)\n    .ebLeadingAction(.add) { attach() }\n    .ebTrailingAction(.send) { send() }",
        "compose": "<span class=\"cmt\">// isActive=False, hasValue=False — 5536:31210, 360 × 88.</span>\nEBChatComposer(\n    value = message,\n    onValueChange = { message = it },\n    placeholder = \"Say hi!\",\n    leadingAction = { EBIconButton(EBIcons.Add) { attach() } },\n    trailingAction = { EBIconButton(EBIcons.Send) { send() } }\n)"
      },
      {
        "subheading": "Focused",
        "swift": "<span class=\"cmt\">// isActive=True, hasValue=False — 5554:36222; the border turns #005CE5.</span>\nEBChatComposer(text: $message, placeholder: \"Say hi!\")\n    .focused($isFocused)\n    .ebLeadingAction(.add) { attach() }\n    .ebTrailingAction(.send) { send() }",
        "compose": "<span class=\"cmt\">// isActive=True, hasValue=False — 5554:36222; the border turns #005CE5.</span>\n// Focus is state, not a parameter — the border follows\n// interactionSource.collectIsFocusedAsState().\nEBChatComposer(\n    value = message,\n    onValueChange = { message = it },\n    placeholder = \"Say hi!\",\n    leadingAction = { EBIconButton(EBIcons.Add) { attach() } },\n    trailingAction = { EBIconButton(EBIcons.Send) { send() } }\n)"
      },
      {
        "subheading": "With a value",
        "swift": "<span class=\"cmt\">// isActive=True, hasValue=True — 5554:36279; the send glyph turns solid.</span>\n// The send action enables itself once text is entered.\nEBChatComposer(text: $message, placeholder: \"Say hi!\")\n    .ebTrailingAction(.send, isEnabled: !message.isEmpty) { send() }",
        "compose": "<span class=\"cmt\">// isActive=True, hasValue=True — 5554:36279; the send glyph turns solid.</span>\nEBChatComposer(\n    value = message,\n    onValueChange = { message = it },\n    placeholder = \"Say hi!\",\n    trailingAction = {\n        EBIconButton(EBIcons.Send, enabled = message.isNotEmpty()) { send() }\n    }\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Field",
        "ios": "<code>TextField</code> with an accessibility label — the placeholder alone is not a label.",
        "android": "<code>TextField</code> with <code>Modifier.semantics { contentDescription = \"Message\" }</code>."
      },
      {
        "requirement": "Actions",
        "ios": "The 32 icons need 44pt targets and their own labels — “Attach”, “Send”.",
        "android": "48dp targets; <code>contentDescription</code> on each <code>IconButton</code>."
      },
      {
        "requirement": "Send state",
        "ios": "Disable send while the field is empty and announce it with <code>.accessibilityHint</code>.",
        "android": "<code>enabled = false</code> until the value is non-empty."
      },
      {
        "requirement": "Keyboard",
        "ios": "Submit on return; keep the composer above the keyboard inset.",
        "android": "<code>ImeAction.Send</code>; respect <code>imePadding()</code>."
      },
      {
        "requirement": "Contrast",
        "ios": "Placeholder #90A8D0 is 2.41:1 on white — below 4.5:1. The value #0A2757 is 14.58:1. The pale send glyph #9BC5FD is 1.78:1.",
        "android": "Same ratios."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Keep the composer pinned to the bottom of the thread, above the keyboard.",
        "dontText": "Don’t let it scroll away with the messages."
      },
      {
        "doText": "Enable send only once there is text — that is what the solid glyph means.",
        "dontText": "Don’t ship the pale send glyph as an enabled control."
      },
      {
        "doText": "Use the leading slot for attachments; it takes 4 swap options.",
        "dontText": "Don’t stack more than one action on each side — the slots are 40 and 44 wide."
      },
      {
        "doText": "Let the field grow for long messages.",
        "dontText": "Don’t rely on the fixed 52 height for multi-line input — the set only ships one line."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>leadingAction</code>, <code>Input Field</code> and <code>trailingAction</code> are semantic, but the text layer keeps the legacy <code>#text-label</code> sigil."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Two camelCase booleans over a complete 2 × 2 matrix."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>#text-label</code> resolves <code>matched</code> to <code>Primary/Multi-line Label/Light/Base</code>. Colour bindings cannot be read, and the two icon fills are not exposed at all."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Maps to one composer with two action slots, but both Figma axes are runtime state natively — focus and the bound text — not parameters."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Resting and focused ship. There is no disabled, error or multi-line state, and no pressed state on either action."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Both actions are real SLOTs with 4 swap options, holding icon instances."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Two booleans and two slots are ready to map; no mappings are registered."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 4,
      "description": "<code>isActive</code> (2) × <code>hasValue</code> (2) = 4 variants, all built. Every one is 360 × 88.",
      "columns": [
        "isActive",
        "hasValue",
        "Node ID",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "False",
            "False",
            "<code>5536:31210</code>",
            "360 × 88"
          ]
        },
        {
          "cells": [
            "True",
            "False",
            "<code>5554:36222</code>",
            "360 × 88"
          ]
        },
        {
          "cells": [
            "False",
            "True",
            "<code>5554:36272</code>",
            "360 × 88"
          ]
        },
        {
          "cells": [
            "True",
            "True",
            "<code>5554:36279</code>",
            "360 × 88"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.0",
      "date": "September 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Style + Code tabs rebuilt against the live set · node 5536:31209",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt to one card with the Figma property panel</strong> — <code>isActive</code> and <code>hasValue</code>. The cards on retired node <code>23:145916</code> are replaced; <code>leadingAction</code> and <code>trailingAction</code> are listed as SLOTs with 4 items each.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Preview redrawn from the set.</strong> 360 × 88 with 12 padding on top and the sides and 24 underneath: leading slot 40 × 52 at (12, 12), Input Field 248 × 52 at (52, 12) radius 6, trailing slot 44 × 52 at (300, 12).",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Colours read per variant.</strong> The border goes #D7E0EF → #005CE5 with <code>isActive</code>; the text goes from the #90A8D0 placeholder to a #0A2757 value.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Typography resolved against the token database.</strong> <code>#text-label</code> matches <code>Primary/Multi-line Label/Light/Base</code>.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Code tab rebuilt on the live set</strong> — install <code>com.eastblue.ds:chat-composer:2.0.0</code>, a five-row mapping, three snippets and a four-row inventory.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Both axes are runtime state natively.</strong> <code>isActive</code> is focus and <code>hasValue</code> is whether the bound text is empty, so neither maps to a parameter. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>The send glyph changes with <code>hasValue</code></strong> — pale #9BC5FD to solid #005CE5 — but the icon fills are not exposed by the plugin, so both come from the export. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C3"
          }
        },
        {
          "body": "<strong>No disabled, error or multi-line state.</strong> The field is a fixed 52 tall on one line, and neither action has a pressed state. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>The placeholder fails AA</strong> — #90A8D0 is 2.41:1 on white at 16pt, and the pale send glyph 1.78:1. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "A11y"
          }
        },
        {
          "body": "<strong>The text layer keeps the <code>#</code> sigil</strong> — <code>#text-label</code>. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>The set sits in a section named “[NEW] Chat Composer (Don’t Use)”.</strong> <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>The Overview tab still describes the earlier assessment.</strong> <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Docs"
          }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 23:145915",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 2 variants documented on a single <code>active</code> axis. First component in the new <em>Chat</em> group. Anatomy: leading plus icon (32px raster) + nested Input Field + trailing send icon (32px raster) in a 360×88 container.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Restructure proposed</strong> — Rebuild as a composition (<code>EBChatComposer</code> wrapping <code>EBInputField</code> + two <code>EBIconButton</code> slots) and rename to Chat Composer / Message Composer. Drops the ambiguous <code>active</code> boolean and inherits Input Field's full state matrix.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Family"
          }
        },
        {
          "body": "<strong>Boolean property uses Yes/No</strong> — <code>active=yes/no</code> cannot map to Swift <code>Bool</code> / Kotlin <code>Boolean</code>, and the property duplicates the inner field's <code>State=Active</code>.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Raster leading/trailing glyphs</strong> — Both <code>Add_Full</code> (plus) and <code>Send Message Medium</code> (paper-plane) ship as PNG references instead of vectors, on a 32×32 frame.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Hidden state gaps</strong> — Composer surface exposes only Default/Active. Error, Disabled, isFilled, and send-disabled cannot be represented at this layer despite being native requirements for the chat use case.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Icon frames share the name <code>container</code></strong> — Leading and trailing icon wrappers both use the same generic layer name; Code Connect cannot distinguish them.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — No CLI mappings registered. Blocked by composition rebuild and property renames.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
