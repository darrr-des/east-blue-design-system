import type { ComponentData, DemoControlSection } from '../types';
import { buildColorsTable } from './_helpers';

/* Demo controls for the Style tab's single spec card. One axis, eight
   values — the control values are lowercase to match the variant keys. */
const listItemAssetControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Type',
        prop: 'type',
        options: [
          { value: 'pending', label: 'Pending' },
          { value: 'pending-notice', label: 'PendingNotice' },
          { value: 'check', label: 'Check' },
          { value: 'check-positive', label: 'CheckPositive' },
          { value: 'bullet', label: 'Bullet' },
          { value: 'square', label: 'Square' },
          { value: 'numbered', label: 'Numbered' },
          { value: 'slot', label: 'Slot' }
        ],
        defaultValue: 'pending'
      }
    ]
  }
];

export const listItemAsset: ComponentData = {
  "meta": {
    "slug": "list-item-asset",
    "name": "List Item - Asset",
    "node": "5698:43260",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5698-43260",
    "description": "The leading marker in a list item — a status icon, a bullet, a square, a number, or a slot for anything else.",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "ready",
        "label": "Ready"
      }
    ],
    "navGroup": "List",
    "verdict": {
      "kind": "keep",
      "title": "Keep — the flatten-and-slot restructure the first assessment asked for has landed",
      "text": "The April assessment found three entangled axes — <code>type</code> × <code>indicator</code> × <code>state</code>, 72 theoretical combinations for about ten valid ones — and asked for a single semantic enum plus a real Figma Slot in place of the custom placeholder. The 2026 rebuild is exactly that: one <code>Type</code> axis with eight values and a working <code>⤷ IconSlot</code>. This pass closed the naming that was left: the spaces came out of the multi-word values, the bullet became a real ellipse instead of a rounded rectangle, and the numbered text layer got a name instead of being called after its own content. Nothing is outstanding on the component itself; Code Connect stays open because the native library does not exist yet."
    }
  },
  "overview": {
    "inContextNote": "Shown three-up against label lines, which is how the marker is actually read — on its own a 5px dot tells you nothing. The composed row lives in List Item.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"lia-demo-preview\"><div class=\"eb-preview-lia\"><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker\"><svg width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.99707 2.80078C11.9735 2.80078 15.1973 6.02453 15.1973 10.001C15.1973 13.9774 11.9735 17.2012 7.99707 17.2012C4.02062 17.2012 0.796875 13.9774 0.796875 10.001C0.796875 6.02453 4.02062 2.80078 7.99707 2.80078ZM7.99707 5.20117C5.3461 5.20117 3.19727 7.35001 3.19727 10.001C3.19727 12.6519 5.3461 14.8008 7.99707 14.8008C10.648 14.8008 12.7969 12.6519 12.7969 10.001C12.7969 7.35001 10.648 5.20117 7.99707 5.20117ZM7.69629 6.90234C8.35903 6.90234 8.89648 7.4398 8.89648 8.10254V9.60547L10.0449 10.7539C10.5136 11.2225 10.5136 11.9825 10.0449 12.4512C9.57629 12.9198 8.81629 12.9198 8.34766 12.4512L6.84766 10.9512C6.62261 10.7261 6.49609 10.4208 6.49609 10.1025V8.10254C6.49609 7.4398 7.03355 6.90234 7.69629 6.90234Z\" fill=\"#90A8D0\"/></svg></span><span class=\"eb-preview-lia__label\">List item label</span></div><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker\"><svg width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.99707 2.80078C11.9735 2.80078 15.1973 6.02453 15.1973 10.001C15.1973 13.9774 11.9735 17.2012 7.99707 17.2012C4.02062 17.2012 0.796875 13.9774 0.796875 10.001C0.796875 6.02453 4.02062 2.80078 7.99707 2.80078ZM7.99707 5.20117C5.3461 5.20117 3.19727 7.35001 3.19727 10.001C3.19727 12.6519 5.3461 14.8008 7.99707 14.8008C10.648 14.8008 12.7969 12.6519 12.7969 10.001C12.7969 7.35001 10.648 5.20117 7.99707 5.20117ZM7.69629 6.90234C8.35903 6.90234 8.89648 7.4398 8.89648 8.10254V9.60547L10.0449 10.7539C10.5136 11.2225 10.5136 11.9825 10.0449 12.4512C9.57629 12.9198 8.81629 12.9198 8.34766 12.4512L6.84766 10.9512C6.62261 10.7261 6.49609 10.4208 6.49609 10.1025V8.10254C6.49609 7.4398 7.03355 6.90234 7.69629 6.90234Z\" fill=\"#90A8D0\"/></svg></span><span class=\"eb-preview-lia__label\">Second line of the list</span></div><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker\"><svg width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.99707 2.80078C11.9735 2.80078 15.1973 6.02453 15.1973 10.001C15.1973 13.9774 11.9735 17.2012 7.99707 17.2012C4.02062 17.2012 0.796875 13.9774 0.796875 10.001C0.796875 6.02453 4.02062 2.80078 7.99707 2.80078ZM7.99707 5.20117C5.3461 5.20117 3.19727 7.35001 3.19727 10.001C3.19727 12.6519 5.3461 14.8008 7.99707 14.8008C10.648 14.8008 12.7969 12.6519 12.7969 10.001C12.7969 7.35001 10.648 5.20117 7.99707 5.20117ZM7.69629 6.90234C8.35903 6.90234 8.89648 7.4398 8.89648 8.10254V9.60547L10.0449 10.7539C10.5136 11.2225 10.5136 11.9825 10.0449 12.4512C9.57629 12.9198 8.81629 12.9198 8.34766 12.4512L6.84766 10.9512C6.62261 10.7261 6.49609 10.4208 6.49609 10.1025V8.10254C6.49609 7.4398 7.03355 6.90234 7.69629 6.90234Z\" fill=\"#90A8D0\"/></svg></span><span class=\"eb-preview-lia__label\">Third line of the list</span></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Type</span><select id=\"lia-ctrl-type\" class=\"demo-panel-select\" onchange=\"_liaUpdate()\"><option value=\"pending\" selected=\"\">Pending</option><option value=\"pending-notice\">PendingNotice</option><option value=\"check\">Check</option><option value=\"check-positive\">CheckPositive</option><option value=\"bullet\">Bullet</option><option value=\"square\">Square</option><option value=\"numbered\">Numbered</option><option value=\"slot\">Slot</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "One marker component covers ordered lists, unordered lists, task lists and status lists. Anything the eight values do not cover goes through <code>⤷ IconSlot</code> rather than needing a ninth."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Each version carries its own geometry and colour, bound to library variables. It has no padding of its own — the 20px box is the alignment frame, and List Item owns the gap to the label."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "After this pass the multi-word values are joined (<code>PendingNotice</code>, <code>CheckPositive</code>), the shape layers are <code>Circle</code> and <code>Square</code>, the text layer is <code>#number</code>, and the slot is <code>⤷ IconSlot</code> — the same conventions settled across Voucher, Countdown and Modal."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Built to sit in <a href=\"/components/list-item\">List Item</a>'s leading position, and the slot takes any 16 × 16 asset without detaching."
      }
    ],
    "behavior": [
      {
        "state": "Type=Pending",
        "ios": "na",
        "android": "na",
        "property": "16 × 20",
        "notes": "Clock icon in the neutral marker colour. The default the component ships with."
      },
      {
        "state": "Type=PendingNotice",
        "ios": "na",
        "android": "na",
        "property": "16 × 20",
        "notes": "The same clock path in amber — pending that needs attention."
      },
      {
        "state": "Type=Check",
        "ios": "na",
        "android": "na",
        "property": "16 × 20",
        "notes": "Checkmark in the neutral marker colour — done, without asserting success."
      },
      {
        "state": "Type=CheckPositive",
        "ios": "na",
        "android": "na",
        "property": "16 × 20",
        "notes": "The same checkmark path in green — done and successful."
      },
      {
        "state": "Type=Bullet",
        "ios": "na",
        "android": "na",
        "property": "9 × 20",
        "notes": "A 5px filled ellipse for unordered lists."
      },
      {
        "state": "Type=Square",
        "ios": "na",
        "android": "na",
        "property": "9 × 20",
        "notes": "A 5px rounded square — the second-level bullet."
      },
      {
        "state": "Type=Numbered",
        "ios": "na",
        "android": "na",
        "property": "12 × 20",
        "notes": "<code>#number</code> carries the index and is overridden per item. Ships as \"1.\"; the version hugs, so double-digit indices grow it rather than clipping."
      },
      {
        "state": "Type=Slot",
        "ios": "na",
        "android": "na",
        "property": "16 × 20",
        "notes": "An empty 16 × 20 slot. Deliberately ships with no default so nothing has to be cleared before swapping."
      }
    ],
    "resolved": [
      {
        "headline": "Three entangled axes became one.",
        "body": "The old build multiplied <code>type</code> × <code>indicator</code> × <code>state</code> into 72 theoretical combinations for roughly ten valid ones. It is now a single <code>Type</code> enum with eight values, which is what the first assessment asked for.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The custom placeholder is a real slot.",
        "body": "<code>Custom</code> used to be a placeholder circle that product teams had to instance-swap around. It is now <code>⤷ IconSlot</code>, a genuine Figma Slot taking any 16 × 16 asset.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "The multi-word values lost their spaces.",
        "body": "<code>Pending Notice</code> and <code>Check Positive</code> became <code>PendingNotice</code> and <code>CheckPositive</code>. Enum values become native cases, so a space would have forced a rename at the Code Connect boundary — the same fix applied to Modal's <code>ActionOrientation</code>.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The bullet is a real ellipse.",
        "body": "It was a <code>RECTANGLE</code> with a 3px corner radius named <code>circle</code> — geometrically a circle at 5 × 5, so it rendered correctly, but the node type contradicted the name and would have exported as a rounded rect. It is now a true <code>ELLIPSE</code> named <code>Circle</code>.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "The numbered text layer has a name.",
        "body": "It was called <code>1.</code> — named after its own content, which is the layer every numbered list overrides. It is now <code>#number</code>, following the <code>#</code>-prefix convention, so it can be addressed as a parameter.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The shape layers are PascalCase.",
        "body": "<code>circle</code> and <code>square</code> became <code>Circle</code> and <code>Square</code>, matching the convention used across the rest of the system.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The status recolours are first-class types, deliberately.",
        "body": "Check and CheckPositive are byte-identical paths differing only in stroke colour (<code>#90A8D0</code> to <code>#27C990</code>), and the same is true of Pending and PendingNotice (<code>#90A8D0</code> to <code>#CA970C</code>). That normally reads as a second axis hiding inside the first, and the alternative was to route all four through the slot and cut <code>Type</code> to four values. Confirmed as intentional instead: the colours carry status meaning rather than styling, so they belong in the enum where a designer picks them by name.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Hollow was dropped on purpose.",
        "body": "The first assessment's target enum included a <code>hollow</code> marker. It is absent from the rebuild by design — structurally identical to Bullet, so it would have been a second name for one shape.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The empty slot is deliberate.",
        "body": "<code>⤷ IconSlot</code> ships with no default content. Confirmed as intended rather than an omission — the slot exists to be filled, and a placeholder would have to be cleared first.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Numbered hugs its content, so double digits fit.",
        "body": "The version measures 12 wide with <code>#number</code> rendering \"1.\" at 9, which would clip a two-digit index like \"10.\" if the width were fixed. Confirmed that it hugs instead — the 12 is the hug width for a single digit, and the version grows with the number. Numbered lists can run past nine items.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The vertical offsets are hand-set.",
        "body": "Inside the 20px box the icons sit at offset 2 and are centred, while <code>Circle</code> and <code>Square</code> sit at 8 and <code>#number</code> at 4 — neither geometrically centred. Confirmed as manual optical alignment against the label's line box, not drift.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — the native library does not exist yet, so there is nothing to map onto. The component side is ready: <code>Type</code>, <code>#number</code> and <code>⤷ IconSlot</code> all map one to one now the spaces are out of the multi-word values.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Write down that markers are not mixed within a list.",
        "body": "The versions are 16, 12 and 9 wide, so a list mixing a Check with a Bullet would not align down its left edge. Confirmed that mixing is out of scope by design and that users will be briefed — but the constraint is invisible from the component itself, so it belongs in the usage documentation where someone reaches for it.",
        "tag": "Docs"
      },
      {
        "headline": "Keep the two status colours token-bound.",
        "body": "Because CheckPositive and PendingNotice are the same artwork recoloured, their colour is the entire difference between them and their neutral siblings. If either override ever drifts to a raw hex, the distinction silently stops tracking the palette.",
        "tag": "Token"
      },
      {
        "headline": "Give the status markers an accessible label.",
        "body": "Bullet, Square and Numbered are decorative — the list's own semantics carry the structure, so they should be hidden from assistive tech. Check, CheckPositive, Pending and PendingNotice are not decorative: they carry the item's status and need that status in text, or a screen reader user gets the label with no indication of state.",
        "tag": "A11y"
      },
      {
        "headline": "Pass the icon-grid scaffolding upstream.",
        "body": "The Pending and Checkmark instances each nest a <code>Grid</code> template carrying <code>Guide lines</code>, <code>Keyshapes</code> and <code>Trim area</code> with red construction strokes. They are hidden and do not render, so this is not a fault here, but they ship inside every instance and belong to the icon library rather than to this component.",
        "tag": "Docs"
      },
      {
        "headline": "See siblings:",
        "body": "<a href=\"/components/list-item\">List Item</a> is the row this marker sits in, and it is the only other component in the family — <a href=\"/components/list\">List</a> was removed in the 2026 rebuild, so rows are stacked with auto layout rather than by a container component.",
        "tag": "Family"
      }
    ],
    "appliedRecommendations": []
  },
  "style": {
    "heading": "Type",
    "description": "Eight versions on one axis. The box is 20 tall in every one; what changes is the marker inside it and how wide that marker needs the box to be — 16 for the icons and the slot, 12 for a number, 9 for a dot or a square. Mixing widths within one list is what makes labels fail to line up.",
    "colorsTables": [
      buildColorsTable({
        title: "Colors by Type",
        description: "One colour per version, and only one — the marker paints nothing behind it, so the list surface shows through. Status is carried entirely by the fill: the same clock path is neutral or warning, and the same checkmark is neutral or success.",
        columns: ["Value"],
        rows: [
          { role: "Pending", token: "text/color-text-weakest", values: ["#90A8D0"] },
          { role: "PendingNotice", token: "text/color-text-warning", values: ["#CA970C"] },
          { role: "Check", token: "text/color-text-weakest", values: ["#90A8D0"] },
          { role: "CheckPositive", token: "border/color-border-success", values: ["#27C990"] },
          { role: "Bullet", token: "text/color-text-weakest", values: ["#90A8D0"] },
          { role: "Square", token: "text/color-text-weakest", values: ["#90A8D0"] },
          { role: "Numbered", token: "text/color-text-weakest", values: ["#90A8D0"] },
          { role: "Slot", token: "none — supplied by the instance", values: ["—"] }
        ]
      })
    ],
    "specCards": [
      {
        "cardKey": "lia-spec-card-pending",
        "demoKey": "pending",
        "demoControls": [],
        "title": "Pending",
        "node": "5698:43261",
        "description": "",
        "previewHtml": "<div id=\"lia-spec-pending\"><div class=\"eb-preview-lia\"><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker\"><svg width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><path d=\"M7.99707 2.80078C11.9735 2.80078 15.1973 6.02453 15.1973 10.001C15.1973 13.9774 11.9735 17.2012 7.99707 17.2012C4.02062 17.2012 0.796875 13.9774 0.796875 10.001C0.796875 6.02453 4.02062 2.80078 7.99707 2.80078ZM7.99707 5.20117C5.3461 5.20117 3.19727 7.35001 3.19727 10.001C3.19727 12.6519 5.3461 14.8008 7.99707 14.8008C10.648 14.8008 12.7969 12.6519 12.7969 10.001C12.7969 7.35001 10.648 5.20117 7.99707 5.20117ZM7.69629 6.90234C8.35903 6.90234 8.89648 7.4398 8.89648 8.10254V9.60547L10.0449 10.7539C10.5136 11.2225 10.5136 11.9825 10.0449 12.4512C9.57629 12.9198 8.81629 12.9198 8.34766 12.4512L6.84766 10.9512C6.62261 10.7261 6.49609 10.4208 6.49609 10.1025V8.10254C6.49609 7.4398 7.03355 6.90234 7.69629 6.90234Z\" fill=\"#90A8D0\"/></svg></span><span class=\"eb-preview-lia__label\">List item label</span></div><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker\"><svg width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><path d=\"M7.99707 2.80078C11.9735 2.80078 15.1973 6.02453 15.1973 10.001C15.1973 13.9774 11.9735 17.2012 7.99707 17.2012C4.02062 17.2012 0.796875 13.9774 0.796875 10.001C0.796875 6.02453 4.02062 2.80078 7.99707 2.80078ZM7.99707 5.20117C5.3461 5.20117 3.19727 7.35001 3.19727 10.001C3.19727 12.6519 5.3461 14.8008 7.99707 14.8008C10.648 14.8008 12.7969 12.6519 12.7969 10.001C12.7969 7.35001 10.648 5.20117 7.99707 5.20117ZM7.69629 6.90234C8.35903 6.90234 8.89648 7.4398 8.89648 8.10254V9.60547L10.0449 10.7539C10.5136 11.2225 10.5136 11.9825 10.0449 12.4512C9.57629 12.9198 8.81629 12.9198 8.34766 12.4512L6.84766 10.9512C6.62261 10.7261 6.49609 10.4208 6.49609 10.1025V8.10254C6.49609 7.4398 7.03355 6.90234 7.69629 6.90234Z\" fill=\"#90A8D0\"/></svg></span><span class=\"eb-preview-lia__label\">Second line of the list</span></div><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker\"><svg width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><path d=\"M7.99707 2.80078C11.9735 2.80078 15.1973 6.02453 15.1973 10.001C15.1973 13.9774 11.9735 17.2012 7.99707 17.2012C4.02062 17.2012 0.796875 13.9774 0.796875 10.001C0.796875 6.02453 4.02062 2.80078 7.99707 2.80078ZM7.99707 5.20117C5.3461 5.20117 3.19727 7.35001 3.19727 10.001C3.19727 12.6519 5.3461 14.8008 7.99707 14.8008C10.648 14.8008 12.7969 12.6519 12.7969 10.001C12.7969 7.35001 10.648 5.20117 7.99707 5.20117ZM7.69629 6.90234C8.35903 6.90234 8.89648 7.4398 8.89648 8.10254V9.60547L10.0449 10.7539C10.5136 11.2225 10.5136 11.9825 10.0449 12.4512C9.57629 12.9198 8.81629 12.9198 8.34766 12.4512L6.84766 10.9512C6.62261 10.7261 6.49609 10.4208 6.49609 10.1025V8.10254C6.49609 7.4398 7.03355 6.90234 7.69629 6.90234Z\" fill=\"#90A8D0\"/></svg></span><span class=\"eb-preview-lia__label\">Third line of the list</span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type", "value": "Pending" },
              { "key": "Marker", "value": "16 × 16 clock icon" },
              { "key": "Versions", "value": "8" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Marker", "value": "#90A8D0", "token": "text/color-text-weakest", "swatch": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text", "value": "None — the marker is a shape, not type" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "20 — Hug", "mono": true },
              { "key": "Width", "value": "16 — Hug", "mono": true },
              { "key": "Radius", "value": "0", "mono": true },
              { "key": "Padding H", "value": "0", "mono": true },
              { "key": "Padding V", "value": "2", "mono": true },
              { "key": "Gap", "value": "8", "mono": true },
              { "key": "Alignment", "value": "Center", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.pending</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Pending</span><span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "lia-spec-card-pending-notice",
        "demoKey": "pending-notice",
        "demoControls": [],
        "title": "PendingNotice",
        "node": "5698:43263",
        "description": "",
        "previewHtml": "<div id=\"lia-spec-pending-notice\"><div class=\"eb-preview-lia\"><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker\"><svg width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><path d=\"M7.99707 2.80078C11.9735 2.80078 15.1973 6.02453 15.1973 10.001C15.1973 13.9774 11.9735 17.2012 7.99707 17.2012C4.02062 17.2012 0.796875 13.9774 0.796875 10.001C0.796875 6.02453 4.02062 2.80078 7.99707 2.80078ZM7.99707 5.20117C5.3461 5.20117 3.19727 7.35001 3.19727 10.001C3.19727 12.6519 5.3461 14.8008 7.99707 14.8008C10.648 14.8008 12.7969 12.6519 12.7969 10.001C12.7969 7.35001 10.648 5.20117 7.99707 5.20117ZM7.69629 6.90234C8.35903 6.90234 8.89648 7.4398 8.89648 8.10254V9.60547L10.0449 10.7539C10.5136 11.2225 10.5136 11.9825 10.0449 12.4512C9.57629 12.9198 8.81629 12.9198 8.34766 12.4512L6.84766 10.9512C6.62261 10.7261 6.49609 10.4208 6.49609 10.1025V8.10254C6.49609 7.4398 7.03355 6.90234 7.69629 6.90234Z\" fill=\"#CA970C\"/></svg></span><span class=\"eb-preview-lia__label\">List item label</span></div><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker\"><svg width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><path d=\"M7.99707 2.80078C11.9735 2.80078 15.1973 6.02453 15.1973 10.001C15.1973 13.9774 11.9735 17.2012 7.99707 17.2012C4.02062 17.2012 0.796875 13.9774 0.796875 10.001C0.796875 6.02453 4.02062 2.80078 7.99707 2.80078ZM7.99707 5.20117C5.3461 5.20117 3.19727 7.35001 3.19727 10.001C3.19727 12.6519 5.3461 14.8008 7.99707 14.8008C10.648 14.8008 12.7969 12.6519 12.7969 10.001C12.7969 7.35001 10.648 5.20117 7.99707 5.20117ZM7.69629 6.90234C8.35903 6.90234 8.89648 7.4398 8.89648 8.10254V9.60547L10.0449 10.7539C10.5136 11.2225 10.5136 11.9825 10.0449 12.4512C9.57629 12.9198 8.81629 12.9198 8.34766 12.4512L6.84766 10.9512C6.62261 10.7261 6.49609 10.4208 6.49609 10.1025V8.10254C6.49609 7.4398 7.03355 6.90234 7.69629 6.90234Z\" fill=\"#CA970C\"/></svg></span><span class=\"eb-preview-lia__label\">Second line of the list</span></div><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker\"><svg width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><path d=\"M7.99707 2.80078C11.9735 2.80078 15.1973 6.02453 15.1973 10.001C15.1973 13.9774 11.9735 17.2012 7.99707 17.2012C4.02062 17.2012 0.796875 13.9774 0.796875 10.001C0.796875 6.02453 4.02062 2.80078 7.99707 2.80078ZM7.99707 5.20117C5.3461 5.20117 3.19727 7.35001 3.19727 10.001C3.19727 12.6519 5.3461 14.8008 7.99707 14.8008C10.648 14.8008 12.7969 12.6519 12.7969 10.001C12.7969 7.35001 10.648 5.20117 7.99707 5.20117ZM7.69629 6.90234C8.35903 6.90234 8.89648 7.4398 8.89648 8.10254V9.60547L10.0449 10.7539C10.5136 11.2225 10.5136 11.9825 10.0449 12.4512C9.57629 12.9198 8.81629 12.9198 8.34766 12.4512L6.84766 10.9512C6.62261 10.7261 6.49609 10.4208 6.49609 10.1025V8.10254C6.49609 7.4398 7.03355 6.90234 7.69629 6.90234Z\" fill=\"#CA970C\"/></svg></span><span class=\"eb-preview-lia__label\">Third line of the list</span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type", "value": "PendingNotice" },
              { "key": "Marker", "value": "16 × 16 clock icon — the same path as Pending" },
              { "key": "Versions", "value": "8" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Marker", "value": "#CA970C", "token": "text/color-text-warning", "swatch": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text", "value": "None — the marker is a shape, not type" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "20 — Hug", "mono": true },
              { "key": "Width", "value": "16 — Hug", "mono": true },
              { "key": "Radius", "value": "0", "mono": true },
              { "key": "Padding H", "value": "0", "mono": true },
              { "key": "Padding V", "value": "2", "mono": true },
              { "key": "Gap", "value": "8", "mono": true },
              { "key": "Alignment", "value": "Center", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.pendingNotice</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">PendingNotice</span><span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "lia-spec-card-check",
        "demoKey": "check",
        "demoControls": [],
        "title": "Check",
        "node": "5698:43265",
        "description": "",
        "previewHtml": "<div id=\"lia-spec-check\"><div class=\"eb-preview-lia\"><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker\"><svg width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><path d=\"M3 10L6.5 13L13 7\" stroke=\"#90A8D0\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><span class=\"eb-preview-lia__label\">List item label</span></div><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker\"><svg width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><path d=\"M3 10L6.5 13L13 7\" stroke=\"#90A8D0\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><span class=\"eb-preview-lia__label\">Second line of the list</span></div><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker\"><svg width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><path d=\"M3 10L6.5 13L13 7\" stroke=\"#90A8D0\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><span class=\"eb-preview-lia__label\">Third line of the list</span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type", "value": "Check" },
              { "key": "Marker", "value": "16 × 16 checkmark, 3px stroke" },
              { "key": "Versions", "value": "8" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Marker", "value": "#90A8D0", "token": "text/color-text-weakest", "swatch": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text", "value": "None — the marker is a shape, not type" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "20 — Hug", "mono": true },
              { "key": "Width", "value": "16 — Hug", "mono": true },
              { "key": "Radius", "value": "0", "mono": true },
              { "key": "Padding H", "value": "0", "mono": true },
              { "key": "Padding V", "value": "2", "mono": true },
              { "key": "Gap", "value": "8", "mono": true },
              { "key": "Alignment", "value": "Center", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.check</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Check</span><span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "lia-spec-card-check-positive",
        "demoKey": "check-positive",
        "demoControls": [],
        "title": "CheckPositive",
        "node": "5698:43267",
        "description": "",
        "previewHtml": "<div id=\"lia-spec-check-positive\"><div class=\"eb-preview-lia\"><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker\"><svg width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><path d=\"M3 10L6.5 13L13 7\" stroke=\"#27C990\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><span class=\"eb-preview-lia__label\">List item label</span></div><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker\"><svg width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><path d=\"M3 10L6.5 13L13 7\" stroke=\"#27C990\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><span class=\"eb-preview-lia__label\">Second line of the list</span></div><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker\"><svg width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><path d=\"M3 10L6.5 13L13 7\" stroke=\"#27C990\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><span class=\"eb-preview-lia__label\">Third line of the list</span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type", "value": "CheckPositive" },
              { "key": "Marker", "value": "16 × 16 checkmark — the same path as Check" },
              { "key": "Versions", "value": "8" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Marker", "value": "#27C990", "token": "border/color-border-success", "swatch": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text", "value": "None — the marker is a shape, not type" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "20 — Hug", "mono": true },
              { "key": "Width", "value": "16 — Hug", "mono": true },
              { "key": "Radius", "value": "0", "mono": true },
              { "key": "Padding H", "value": "0", "mono": true },
              { "key": "Padding V", "value": "2", "mono": true },
              { "key": "Gap", "value": "8", "mono": true },
              { "key": "Alignment", "value": "Center", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.checkPositive</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">CheckPositive</span><span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "lia-spec-card-bullet",
        "demoKey": "bullet",
        "demoControls": [],
        "title": "Bullet",
        "node": "5698:43269",
        "description": "",
        "previewHtml": "<div id=\"lia-spec-bullet\"><div class=\"eb-preview-lia\"><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker eb-preview-lia__marker--narrow eb-preview-lia__marker--bullet\"></span><span class=\"eb-preview-lia__label\">List item label</span></div><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker eb-preview-lia__marker--narrow eb-preview-lia__marker--bullet\"></span><span class=\"eb-preview-lia__label\">Second line of the list</span></div><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker eb-preview-lia__marker--narrow eb-preview-lia__marker--bullet\"></span><span class=\"eb-preview-lia__label\">Third line of the list</span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type", "value": "Bullet" },
              { "key": "Marker", "value": "5 × 5 circle" },
              { "key": "Versions", "value": "8" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Marker", "value": "#90A8D0", "token": "text/color-text-weakest", "swatch": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text", "value": "None — the marker is a shape, not type" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "20 — Hug", "mono": true },
              { "key": "Width", "value": "9 — Hug", "mono": true },
              { "key": "Radius", "value": "999 — the dot is a circle", "mono": true },
              { "key": "Padding H", "value": "4 left · 0 right", "mono": true },
              { "key": "Padding V", "value": "8 top · 7 bottom", "mono": true },
              { "key": "Gap", "value": "8", "mono": true },
              { "key": "Alignment", "value": "Left", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.bullet</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Bullet</span><span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "lia-spec-card-square",
        "demoKey": "square",
        "demoControls": [],
        "title": "Square",
        "node": "5698:43273",
        "description": "",
        "previewHtml": "<div id=\"lia-spec-square\"><div class=\"eb-preview-lia\"><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker eb-preview-lia__marker--narrow eb-preview-lia__marker--square\"></span><span class=\"eb-preview-lia__label\">List item label</span></div><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker eb-preview-lia__marker--narrow eb-preview-lia__marker--square\"></span><span class=\"eb-preview-lia__label\">Second line of the list</span></div><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker eb-preview-lia__marker--narrow eb-preview-lia__marker--square\"></span><span class=\"eb-preview-lia__label\">Third line of the list</span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type", "value": "Square" },
              { "key": "Marker", "value": "5 × 5 square, 1px corner radius" },
              { "key": "Versions", "value": "8" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Marker", "value": "#90A8D0", "token": "text/color-text-weakest", "swatch": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text", "value": "None — the marker is a shape, not type" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "20 — Hug", "mono": true },
              { "key": "Width", "value": "9 — Hug", "mono": true },
              { "key": "Radius", "value": "1 on the 5 × 5 square", "mono": true },
              { "key": "Padding H", "value": "4 left · 0 right", "mono": true },
              { "key": "Padding V", "value": "8 top · 7 bottom", "mono": true },
              { "key": "Gap", "value": "8", "mono": true },
              { "key": "Alignment", "value": "Left", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.square</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Square</span><span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "lia-spec-card-numbered",
        "demoKey": "numbered",
        "demoControls": [],
        "title": "Numbered",
        "node": "5698:43275",
        "description": "",
        "previewHtml": "<div id=\"lia-spec-numbered\"><div class=\"eb-preview-lia\"><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker eb-preview-lia__marker--number\">1.</span><span class=\"eb-preview-lia__label\">List item label</span></div><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker eb-preview-lia__marker--number\">2.</span><span class=\"eb-preview-lia__label\">Second line of the list</span></div><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker eb-preview-lia__marker--number\">3.</span><span class=\"eb-preview-lia__label\">Third line of the list</span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type", "value": "Numbered" },
              { "key": "Marker", "value": "#number — a text layer, so the count is editable" },
              { "key": "Versions", "value": "8" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Marker", "value": "#90A8D0", "token": "text/color-text-weakest", "swatch": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#number", "value": "Primary/Label/Light/Small", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "20 — Hug", "mono": true },
              { "key": "Width", "value": "12 — Hug", "mono": true },
              { "key": "Radius", "value": "0", "mono": true },
              { "key": "Padding H", "value": "3 left · 0 right", "mono": true },
              { "key": "Padding V", "value": "4 top · 2 bottom", "mono": true },
              { "key": "Gap", "value": "8", "mono": true },
              { "key": "Alignment", "value": "Left", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.numbered</span><span class=\"syn-punc\">,</span> number<span class=\"syn-punc\">:</span> <span class=\"syn-val\">3</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Numbered</span><span class=\"syn-punc\">,</span> number <span class=\"syn-eq\">=</span> <span class=\"syn-val\">3</span><span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "lia-spec-card-slot",
        "demoKey": "slot",
        "demoControls": [],
        "title": "Slot",
        "node": "5698:43280",
        "description": "",
        "previewHtml": "<div id=\"lia-spec-slot\"><div class=\"eb-preview-lia\"><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker eb-preview-lia__marker--slot\"></span><span class=\"eb-preview-lia__label\">List item label</span></div><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker eb-preview-lia__marker--slot\"></span><span class=\"eb-preview-lia__label\">Second line of the list</span></div><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker eb-preview-lia__marker--slot\"></span><span class=\"eb-preview-lia__label\">Third line of the list</span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type", "value": "Slot" },
              { "key": "Marker", "value": "⤷ IconSlot — 16 × 16, ships empty" },
              { "key": "⤷ IconSlot (slot)", "value": "1 item — the instance supplies the marker" },
              { "key": "Versions", "value": "8" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Marker", "value": "None — the swapped instance carries its own colour" }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text", "value": "None — the marker is a shape, not type" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "20 — Hug", "mono": true },
              { "key": "Width", "value": "16 — Hug", "mono": true },
              { "key": "Radius", "value": "0", "mono": true },
              { "key": "Padding H", "value": "0", "mono": true },
              { "key": "Padding V", "value": "2", "mono": true },
              { "key": "Gap", "value": "8", "mono": true },
              { "key": "Alignment", "value": "Center", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.slot</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span> <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>systemName<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"star.fill\"</span><span class=\"syn-punc\">) }</span>",
        "compose": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Slot</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span> <span class=\"syn-fn\">Icon</span><span class=\"syn-punc\">(</span>EBIcons<span class=\"syn-punc\">.</span>Star<span class=\"syn-punc\">) }</span>"
      }
    ]
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": [
        {
          "label": "iOS — Swift Package Manager",
          "code": "<span class=\"syn-punc\">.</span><span class=\"syn-fn\">package</span><span class=\"syn-punc\">(</span>url<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"https://github.com/AY-Org/eb-ds-ios\"</span><span class=\"syn-punc\">,</span> from<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"1.0.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"syn-fn\">implementation</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"com.eastblue.ds:list:1.0.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Import",
          "code": "<span class=\"syn-kw\">import</span> <span class=\"syn-type\">EastBlueDS</span>\n<span class=\"syn-kw\">import</span> com<span class=\"syn-punc\">.</span>eastblue<span class=\"syn-punc\">.</span>ds<span class=\"syn-punc\">.</span>list<span class=\"syn-punc\">.</span><span class=\"syn-punc\">*</span>"
        }
      ],
      "footnote": "Planned API — the native library does not exist yet. The artifact is the List family: List, List Item and List Item - Asset all ship in <code>com.eastblue.ds:list</code> and import <code>com.eastblue.ds.list.*</code>."
    },
    "propertyMapping": {
      "description": "Two properties: one enum and one slot. <code>#number</code> is deliberately absent — it is a text layer inside the Numbered variant, not a component property, so a designer setting a list to <code>3.</code> is overriding the layer rather than a value Code Connect can bind. Natively it has to be a parameter regardless, so the API carries <code>number</code> alongside the enum and the two are wired together at the call site.",
      "rows": [
        {
          "figma": "Type — Pending, PendingNotice, Check, CheckPositive, Bullet, Square, Numbered, Slot",
          "swift": "<code>type: EBListItemAssetType</code>",
          "compose": "<code>type: EBListItemAssetType</code>"
        },
        {
          "figma": "⤷ IconSlot (slot)",
          "swift": "<code>@ViewBuilder icon: () -> Icon</code> — Slot only",
          "compose": "<code>icon: @Composable (() -> Unit)?</code> — Slot only"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Pending — a step still running",
        "swift": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.pending</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Pending</span><span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "PendingNotice — running, and it needs attention",
        "swift": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.pendingNotice</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">PendingNotice</span><span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Check — done, stated plainly",
        "swift": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.check</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Check</span><span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "CheckPositive — done, and worth celebrating",
        "swift": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.checkPositive</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">CheckPositive</span><span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Bullet — an unordered list",
        "swift": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.bullet</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Bullet</span><span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Square — an unordered list, one level down",
        "swift": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.square</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Square</span><span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Numbered — an ordered list",
        "swift": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.numbered</span><span class=\"syn-punc\">,</span> number<span class=\"syn-punc\">:</span> <span class=\"syn-val\">3</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Numbered</span><span class=\"syn-punc\">,</span> number <span class=\"syn-eq\">=</span> <span class=\"syn-val\">3</span><span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Slot — a marker the enum does not cover",
        "swift": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.slot</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span> <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>systemName<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"star.fill\"</span><span class=\"syn-punc\">) }</span>",
        "compose": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Slot</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span> <span class=\"syn-fn\">Icon</span><span class=\"syn-punc\">(</span>EBIcons<span class=\"syn-punc\">.</span>Star<span class=\"syn-punc\">) }</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "Decorative markers are hidden",
        "ios": "Bullet, Square and Numbered use <code>.accessibilityHidden(true)</code>",
        "android": "Bullet, Square and Numbered use <code>contentDescription = null</code>"
      },
      {
        "requirement": "Status markers carry their status in text",
        "ios": "Check, Pending and their tones set <code>accessibilityLabel</code> on the row, not the icon",
        "android": "Status is folded into the row's <code>contentDescription</code>"
      },
      {
        "requirement": "Colour is not the only signal",
        "ios": "CheckPositive versus Check must differ in the announced text, not just in green",
        "android": "Same — the tone difference is invisible to a screen reader"
      },
      {
        "requirement": "Ordered lists expose their index",
        "ios": "<code>#number</code> maps to the row's position, not a decorative glyph",
        "android": "<code>CollectionItemInfo</code> carries the index"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Pick one marker type and use it for every item in the list.",
        "dontText": "Don't mix types in one list — the versions are 9 to 16 wide and the labels stop aligning."
      },
      {
        "doText": "Use CheckPositive when success is the point, Check when the item is merely done.",
        "dontText": "Don't use the tones decoratively — they read as status."
      },
      {
        "doText": "Reach for the slot when the enum has no marker for the job.",
        "dontText": "Don't add a ninth version for a one-off icon."
      },
      {
        "doText": "Override #number per item.",
        "dontText": "Don't leave every row showing \"1.\"."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Circle</code>, <code>Square</code> and <code>#number</code> all renamed this pass. The hand-set vertical offsets are confirmed as optical alignment."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "One axis where there were three. Multi-word values joined to <code>PendingNotice</code> and <code>CheckPositive</code>; the status tones are deliberate enum members rather than a hidden second axis."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Every marker colour is bound and named: <code>text/color-text-weakest</code> for the six neutral versions, <code>text/color-text-warning</code> for PendingNotice, <code>border/color-border-success</code> for CheckPositive. Slot paints nothing — the swapped instance carries its own colour."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "An enum and a slot map to a single view or composable with no web-only pattern in the way. One constraint to carry across: the marker box is 16, 12 or 9 wide depending on the version, so a list that mixes them starts its labels at different x positions. That is the component as built and shipped; raising it belongs in Design Recommendations, not here."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Display only — the marker is never the tap target. Pressed behaviour belongs to List Item."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "The bullet is a true ellipse after this pass, and the custom placeholder is a real slot. The icons nest hidden grid scaffolding, which belongs to the icon library."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked — the native library does not exist yet. Worth noting for when it is not: <code>#number</code> is a text layer rather than a component property, so there is nothing for Code Connect to bind the index to."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 8,
      "description": "1 component set × 8 Type values = 8 variants. Four are status markers in two tones, three are list decorations, and the last is the escape hatch.",
      "columns": ["Type", "Box", "Marker", "Colour", "Node"],
      "rows": [
        { "cells": ["Pending", "16 × 20", "Clock icon", "#90A8D0", "5698:43261"] },
        { "cells": ["PendingNotice", "16 × 20", "Clock icon — same path", "#CA970C", "5698:43263"] },
        { "cells": ["Check", "16 × 20", "Checkmark", "#90A8D0", "5698:43265"] },
        { "cells": ["CheckPositive", "16 × 20", "Checkmark — same path", "#27C990", "5698:43267"] },
        { "cells": ["Bullet", "9 × 20", "Circle — ellipse 5 × 5", "#90A8D0", "5698:43269"] },
        { "cells": ["Square", "9 × 20", "Square — 5 × 5, radius 1", "#90A8D0", "5698:43273"] },
        { "cells": ["Numbered", "12 × 20 — hugs", "#number — 14 / 14", "#90A8D0", "5698:43275"] },
        { "cells": ["Slot", "16 × 20", "⤷ IconSlot — empty", "consumer", "5698:43280"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Style and Code tabs rebuilt to the content guides — node 5698:43260",
      "rows": [
        {
          "body": "<strong>One card became eight.</strong> <code>Type</code> is the driving property, so each of its values gets a card — Pending, PendingNotice, Check, CheckPositive, Bullet, Square, Numbered, Slot, in the panel’s order. The single card was titled with the component’s own name and described <code>Type=Pending</code> only, so seven versions had no specification at all.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Layout had none of the seven keys.</strong> It carried <code>Marker size</code>, <code>Top offset</code>, <code>Corner radius</code> and a single <code>Padding</code>, with no Gap or Alignment. All seven are now read off the Figma auto-layout panel rather than derived from bounding boxes.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The marker box comes in three sizes, not one.</strong> The icons and the slot are 16 × 20 with 0/2 padding, centred; Bullet and Square are 9 × 20 with 4/0 and 8/7, left; Numbered is 12 × 20 with 3/0 and 4/2, left. The decorations hang left and sit low against a 20px label line — optical alignment, hand-set, and now documented as such rather than read as an inconsistency.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Typography was a font spec and an IOU.</strong> The rows read <code>Proxima Soft SemiBold · 14 / 14 · +0.25</code> and \"shared library style · name pending Dev Mode read\". <code>#number</code> resolves to <code>Primary/Label/Light/Small</code>. The seven versions with no text layer now say so, rather than showing an em dash that would read as a failed lookup.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>Every marker colour is named.</strong> <code>text/color-text-weakest</code> for the six neutral versions, <code>text/color-text-warning</code> for PendingNotice, <code>border/color-border-success</code> for CheckPositive. A Colors by Type table carries all eight; the page had no colours table before.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>Two fills were invisible to the node tree.</strong> Pending returns a <code>shape_full</code> with its fill; Check and CheckPositive return only the icon’s hidden guide layer, because their checkmark is a <em>stroked path</em> rather than a filled shape. Exporting the variant as SVG returns the vector with <code>stroke=\"#27C990\"</code> on it, which reads what <code>get_node_info</code> cannot and confirmed the token bindings independently.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Properties listed things that are not properties.</strong> <code>Node</code> duplicated the card’s own node field, and <code>Overridable</code> and <code>Ships as</code> described the component rather than specifying it. <code>⤷ IconSlot</code> now appears on the Slot card, where it exists.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>All eight cards declare an empty control panel.</strong> <code>Type</code> is the driving property and <code>⤷ IconSlot</code> is a slot, so there is genuinely nothing to control — the explicit empty array is what the guides settled for this case.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The install block pointed at coordinates that will never exist.</strong> <code>gcash/east-blue-ios</code> and <code>com.gcash.eastblue:components:1.0.0</code>, with no Import line. It now cites the List family artifact <code>com.eastblue.ds:list:1.0.0</code> and imports <code>com.eastblue.ds.list.*</code>.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Property Mapping mapped a layer as though it were a property.</strong> Three rows for two properties — the third was <code>#number</code>, which the Figma panel does not expose. Two rows now, each carrying all its values, with <code>#number</code> explained in the description instead.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong><code>#number</code> is a text layer, not a component property.</strong> Setting a list to <code>3.</code> means overriding the layer, so there is nothing for Code Connect to bind the index to when the native library lands. Recorded against C7, which was already open on registration.",
          "delta": { "kind": "open", "label": "C7 open" }
        },
        {
          "body": "<strong>The Code tab contradicted the Style tab.</strong> The mapping declared <code>.numbered(Int)</code> — an enum with an associated value — while the Style tab’s DEV code emitted a plain <code>.numbered</code>. Settled toward a separate <code>number</code> parameter; all eight calls are now byte-identical across the two tabs.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Usage Snippets were keyed to use-cases, not to the property.</strong> They read \"Status markers\", \"An ordered list\" and \"A marker the enum does not cover\". One per <code>Type</code> value now, eight in total.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>C3’s note had gone stale.</strong> It read \"names need a Dev Mode read before they can be printed in the spec tables\" — true when written, and no longer: all three token names are in the tables.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The box width is a composition constraint, and it is logged as one.</strong> A list mixing Bullet with Numbered starts its labels 3px apart, because the marker box is 9 wide in one row and 12 in the next. The component ships live, so this is recorded in C4’s note as a documented fact and belongs in Design Recommendations rather than as a defect against a component in production.",
          "delta": { "kind": "open", "label": "Docs" }
        },
        {
          "body": "<strong>DEV code is live for the first time, and Code Connect is emptied.</strong> The demo script had no <code>getSnippet</code>, so both language tabs were frozen on a static string; they now render eight distinct SwiftUI and Compose calls. Code Connect’s three readiness rows described a registration that cannot happen yet.",
          "delta": { "kind": "resolved", "label": "Docs" }
        }
      ]
    },
    {
      "version": "2.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Rebuilt on the 2026 Working File · node 5698:43260",
      "rows": [
        {
          "body": "<strong>Variant matrix flattened</strong> — the entangled <code>type</code> × <code>indicator</code> × <code>state</code> axes became a single <code>Type</code> enum with eight values, closing the first assessment's main recommendation.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>Custom placeholder replaced with a Slot</strong> — <code>⤷ IconSlot</code> now takes any 16 × 16 asset without instance-swapping. Deliberately ships empty.",
          "delta": { "kind": "resolved", "label": "C6 resolved" }
        },
        {
          "body": "<strong>Numbered indicator named</strong> — the layer called <code>1.</code> is now <code>#number</code>, addressable as a parameter instead of named after its own content.",
          "delta": { "kind": "resolved", "label": "C5 resolved" }
        },
        {
          "body": "<code>Pending Notice</code> and <code>Check Positive</code> renamed to <code>PendingNotice</code> and <code>CheckPositive</code> — enum values become native cases, so the spaces had to go.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>Bullet is a real ellipse</strong> — it was a <code>RECTANGLE</code> with a 3px radius named <code>circle</code>. Both shape layers are now PascalCase <code>Circle</code> and <code>Square</code>.",
          "delta": { "kind": "resolved", "label": "C6 resolved" }
        },
        {
          "body": "<code>hollow</code> dropped from the target enum — structurally identical to Bullet, so it would have been a second name for one shape.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "Status recolours confirmed as first-class enum members rather than a hidden tone axis, and the hand-set vertical offsets confirmed as optical alignment.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "Node moved from <code>18482:34406</code> (Sticker Sheets v2) to <code>5698:43260</code> (2026 Working File).",
          "delta": { "kind": "resolved", "label": "Rebuilt" }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 18482:34406",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 10 variants across entangled type × indicator × state. Recommended flatten + Figma Slot adoption. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Variant matrix entangled</strong> — 72 theoretical, ~10 valid. Flatten to one <code>variant</code> enum. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Numbered indicator hardcodes \"1.\"</strong> — Needs a <code>number</code> parameter. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Custom indicator is a placeholder</strong> — Should be a Figma Slot. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — Not registered. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
