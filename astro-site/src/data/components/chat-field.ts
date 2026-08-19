import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — toggles between Inactive (active=no) and Active
// (active=yes). Wired to a future per-card update handler in
// `public/scripts/demos/chat-field.js`.
const chatFieldDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Active',
        prop: 'active',
        defaultValue: 'no',
        options: [
          { value: 'no', label: 'no' },
          { value: 'yes', label: 'yes' },
        ],
      },
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
    "heading": "Types",
    "specCards": [
      {
        "cardKey": "default",
        "demoKey": "default",
        "demoControls": chatFieldDemoControls,
        "title": "Default",
        "node": "23:145916",
        "description": "Message composer with a leading attachment icon, inner input field, and trailing send action. Flip Active to focus the field.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Active", "value": "no", "prop": "active" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "chat-field/color/bg" },
              { "key": "Border", "value": "#D7E0EF", "token": "input-field/default/border",
                "variants": {
                  "active:yes": { "value": "#005CE5", "token": "input-field/active/border" }
                }
              },
              { "key": "Input text", "value": "#90A8D0", "token": "input-field/default/placeholder",
                "variants": {
                  "active:yes": { "value": "#0A2757", "token": "input-field/active/value" }
                }
              },
              { "key": "Send icon", "value": "#005CE5", "token": "chat-field/color/icon" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Field height", "value": "48 (auto-grow)", "mono": true },
              { "key": "Padding H", "value": "12", "mono": true },
              { "key": "Padding V", "value": "14", "mono": true },
              { "key": "Border radius", "value": "6", "mono": true },
              { "key": "Border width", "value": "1", "mono": true,
                "variants": { "active:yes": { "value": "2" } }
              },
              { "key": "Send button", "value": "40 × 40", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Style", "value": "Primary/Multi-line Label/Light/Base", "mono": true },
              { "key": "Font",  "value": "Proxima Soft Semibold · 16 / 20 · +0.25", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBChatField</span><span class=\"syn-punc\">(</span>value<span class=\"syn-punc\">: </span>$message<span class=\"syn-punc\">, </span>onSend<span class=\"syn-punc\">: </span><span class=\"syn-punc\">{ </span>sendMessage<span class=\"syn-punc\">() }</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBChatField</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> message<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ message = it }</span><span class=\"syn-punc\">,</span>\n    onSend <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ sendMessage() }</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"cf-spec-preview\"></div>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "The composer owns only two tokens (<code>bg</code>, <code>icon</code>). Every other color is inherited from the nested Input Field's <code>main/input-field/*</code> collection — another motivation for rebuilding the composer as a composition rather than a primitive.",
        "columns": [
          "DEFAULT (active=no)",
          "ACTIVE (active=yes)"
        ],
        "rows": [
          {
            "role": "Composer bg",
            "token": "main/chat-field/color/bg",
            "values": [
              "#FFFFFF",
              "#FFFFFF"
            ]
          },
          {
            "role": "Leading icon (plus)",
            "token": "main/chat-field/color/icon",
            "values": [
              "#005CE5",
              "#005CE5"
            ]
          },
          {
            "role": "Trailing icon (send)",
            "token": "main/chat-field/color/icon",
            "values": [
              "#005CE5",
              "#005CE5"
            ]
          },
          {
            "role": "Field bg",
            "token": "main/input-field/{state}/bg",
            "values": [
              "#FFFFFF",
              "#FFFFFF"
            ]
          },
          {
            "role": "Field border",
            "token": "main/input-field/{state}/border",
            "values": [
              "#D7E0EF (1px)",
              "#005CE5 (2px)"
            ]
          },
          {
            "role": "Field placeholder",
            "token": "main/input-field/default/placeholder",
            "values": [
              "#90A8D0",
              "#90A8D0"
            ]
          },
          {
            "role": "Field text (filled)",
            "token": "main/input-field/default/text",
            "values": [
              "#0A2757",
              "#0A2757"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:chat:1.0.0\"</span>)\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:form-elements:1.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.chat.*  <span class=\"cmt\">// Compose</span>\n<span class=\"kw\">import</span> com.eastblue.ds.form.*"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "(text content)",
          "swift": "text: Binding&lt;String&gt;",
          "compose": "value: String"
        },
        {
          "figma": "active (yes/no)",
          "swift": "@FocusState",
          "compose": "interactionSource"
        },
        {
          "figma": "(leading slot)",
          "swift": "leadingAction: () -&gt; Void",
          "compose": "leadingAction: () -&gt; Unit"
        },
        {
          "figma": "(trailing slot)",
          "swift": "trailingAction: () -&gt; Void",
          "compose": "trailingAction: () -&gt; Unit"
        },
        {
          "figma": "(line growth)",
          "swift": "axis: .vertical, lineLimit(1...5)",
          "compose": "singleLine = false, maxLines = 5"
        },
        {
          "figma": "(placeholder)",
          "swift": "placeholder: String",
          "compose": "placeholder: String"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Chat/EBChatComposer.swift",
        "compose": "android/components/chat/EBChatComposer.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Inactive composer",
        "swift": "<span class=\"typ\">EBChatComposer</span>(\n    <span class=\"prp\">placeholder</span>: <span class=\"str\">\"Say hi!\"</span>,\n    <span class=\"prp\">text</span>: $message,\n    <span class=\"prp\">onAttach</span>: { presentAttachSheet() },\n    <span class=\"prp\">onSend</span>:   { send(message) }\n)",
        "compose": "<span class=\"typ\">EBChatComposer</span>(\n    <span class=\"prp\">value</span> = message,\n    <span class=\"prp\">onValueChange</span> = { message = it },\n    <span class=\"prp\">placeholder</span> = <span class=\"str\">\"Say hi!\"</span>,\n    <span class=\"prp\">onAttach</span> = { presentAttachSheet() },\n    <span class=\"prp\">onSend</span> = { send(message) }\n)"
      },
      {
        "subheading": "Active with send-disabled",
        "swift": "<span class=\"typ\">EBChatComposer</span>(\n    <span class=\"prp\">placeholder</span>: <span class=\"str\">\"Say hi!\"</span>,\n    <span class=\"prp\">text</span>: $message,\n    <span class=\"prp\">onAttach</span>: attach,\n    <span class=\"prp\">onSend</span>:   send,\n    <span class=\"prp\">sendEnabled</span>: !message.<span class=\"prp\">isEmpty</span>\n)",
        "compose": "<span class=\"typ\">EBChatComposer</span>(\n    <span class=\"prp\">value</span> = message,\n    <span class=\"prp\">onValueChange</span> = { message = it },\n    <span class=\"prp\">placeholder</span> = <span class=\"str\">\"Say hi!\"</span>,\n    <span class=\"prp\">onAttach</span> = attach,\n    <span class=\"prp\">onSend</span> = send,\n    <span class=\"prp\">sendEnabled</span> = message.isNotEmpty()\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Minimum touch target (icon buttons)",
        "ios": "44 × 44 pt — 32px frame pads to 44pt hit area",
        "android": "48 × 48 dp — 32px frame pads to 48dp hit area"
      },
      {
        "requirement": "Leading icon label",
        "ios": "<code>.accessibilityLabel(\"Attach\")</code>",
        "android": "<code>contentDescription = \"Attach\"</code>"
      },
      {
        "requirement": "Trailing icon label",
        "ios": "<code>.accessibilityLabel(\"Send\")</code>",
        "android": "<code>contentDescription = \"Send\"</code>"
      },
      {
        "requirement": "Send-disabled announcement",
        "ios": "VoiceOver reads \"Send, dimmed\" via <code>.accessibilityHint(\"Enter a message first\")</code>",
        "android": "TalkBack reads disabled state via <code>semantics { disabled() }</code>"
      },
      {
        "requirement": "Keyboard submit",
        "ios": "<code>.onSubmit { send() }</code> on the nested TextField",
        "android": "<code>keyboardOptions = KeyboardOptions(imeAction = ImeAction.Send)</code>"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Dock the composer to the bottom of the chat scroll view with the keyboard inset, and let the field auto-grow within lineLimit(1...5) / maxLines = 5.",
        "dontText": "Use Chat Field for single-line structured inputs (name, phone, amount). Use Input Field or the typed form-element sibling instead."
      },
      {
        "doText": "Dim the trailing send icon when the field is empty. Reflects system chat conventions (iMessage, WhatsApp, Messenger) and prevents empty-send.",
        "dontText": "Swap the plus icon for unrelated actions (navigation, close). Leading slot is reserved for content-entry affordances: attach, camera, mic, emoji."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Both icon frames share the generic name <code>container</code>. Should be <code>leading</code> / <code>trailing</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>active=yes/no</code> — boolean naming and semantic intent both wrong; the property duplicates the inner field's <code>State=Active</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>main/chat-field/color/bg</code> and <code>main/chat-field/color/icon</code> resolved. Spacing (<code>space/space-8</code>, <code>12</code>, <code>16</code>, <code>24</code>) and radius (<code>radius/radius-2</code>) bound."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No native primitive for \"chat composer\"; maps to <code>HStack { Button + TextField + Button }</code>. Shipping as a single component hides the composition."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Only Active/Inactive. Missing Error, Disabled, isFilled, and send-disabled states that the use case requires."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Both leading (plus) and trailing (send) glyphs are raster PNGs; must vectorize and bind to <code>main/chat-field/color/icon</code>."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked by composition rebuild, property rename, and icon vectorization."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>active=yes/no</code> cannot map to native booleans and duplicates the nested field's focus"
      },
      {
        "aspect": "Component identity",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Native platforms compose this pattern from three siblings — Chat Field needs to ship as a composition, not a primitive"
      },
      {
        "aspect": "Icon slots",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Leading/trailing icon frames are fixed rasters, not Icon Button instances"
      },
      {
        "aspect": "Native component file",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Proposed target: <code>EBChatComposer</code> under a new Chat package"
      }
    ],
    "variants": {
      "total": 2,
      "description": "Single axis: <code>active</code> (no/yes). Both variants are 360×88px.",
      "columns": [
        "active",
        "Size",
        "Inner field border",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "no",
            "360×88",
            "1px #D7E0EF",
            "23:145916"
          ]
        },
        {
          "cells": [
            "yes",
            "360×88",
            "2px #005CE5",
            "23:145922"
          ]
        }
      ]
    }
  },
  "changelog": [
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
