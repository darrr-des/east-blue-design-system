import type { ComponentData, DemoControlSection } from '../types';

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
      "text": "The April assessment found three entangled axes — <code>type</code> × <code>indicator</code> × <code>state</code>, 72 theoretical combinations for about ten valid ones — and asked for a single semantic enum plus a real Figma Slot in place of the custom placeholder. The 2026 rebuild is exactly that: one <code>Type</code> axis with eight values and a working <code>⤷ IconSlot</code>. This pass closed the naming that was left: the spaces came out of the multi-word values, the bullet became a real ellipse instead of a rounded rectangle, and the numbered text layer got a name instead of being called after its own content. Nothing is outstanding."
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
    "open": [],
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
    "heading": "Structure",
    "specCards": [
      {
        "cardKey": "lia-spec-card-default",
        "demoKey": "default",
        "demoControls": listItemAssetControls,
        "title": "List Item - Asset",
        "node": "5698:43260",
        "description": "Eight versions on one axis. The 20px box is the alignment frame; what varies is the marker inside it and how wide the version needs to be.",
        "previewHtml": "<div id=\"lia-spec-default\"><div class=\"eb-preview-lia\"><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker\"><svg width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.99707 2.80078C11.9735 2.80078 15.1973 6.02453 15.1973 10.001C15.1973 13.9774 11.9735 17.2012 7.99707 17.2012C4.02062 17.2012 0.796875 13.9774 0.796875 10.001C0.796875 6.02453 4.02062 2.80078 7.99707 2.80078ZM7.99707 5.20117C5.3461 5.20117 3.19727 7.35001 3.19727 10.001C3.19727 12.6519 5.3461 14.8008 7.99707 14.8008C10.648 14.8008 12.7969 12.6519 12.7969 10.001C12.7969 7.35001 10.648 5.20117 7.99707 5.20117ZM7.69629 6.90234C8.35903 6.90234 8.89648 7.4398 8.89648 8.10254V9.60547L10.0449 10.7539C10.5136 11.2225 10.5136 11.9825 10.0449 12.4512C9.57629 12.9198 8.81629 12.9198 8.34766 12.4512L6.84766 10.9512C6.62261 10.7261 6.49609 10.4208 6.49609 10.1025V8.10254C6.49609 7.4398 7.03355 6.90234 7.69629 6.90234Z\" fill=\"#90A8D0\"/></svg></span><span class=\"eb-preview-lia__label\">List item label</span></div><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker\"><svg width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.99707 2.80078C11.9735 2.80078 15.1973 6.02453 15.1973 10.001C15.1973 13.9774 11.9735 17.2012 7.99707 17.2012C4.02062 17.2012 0.796875 13.9774 0.796875 10.001C0.796875 6.02453 4.02062 2.80078 7.99707 2.80078ZM7.99707 5.20117C5.3461 5.20117 3.19727 7.35001 3.19727 10.001C3.19727 12.6519 5.3461 14.8008 7.99707 14.8008C10.648 14.8008 12.7969 12.6519 12.7969 10.001C12.7969 7.35001 10.648 5.20117 7.99707 5.20117ZM7.69629 6.90234C8.35903 6.90234 8.89648 7.4398 8.89648 8.10254V9.60547L10.0449 10.7539C10.5136 11.2225 10.5136 11.9825 10.0449 12.4512C9.57629 12.9198 8.81629 12.9198 8.34766 12.4512L6.84766 10.9512C6.62261 10.7261 6.49609 10.4208 6.49609 10.1025V8.10254C6.49609 7.4398 7.03355 6.90234 7.69629 6.90234Z\" fill=\"#90A8D0\"/></svg></span><span class=\"eb-preview-lia__label\">Second line of the list</span></div><div class=\"eb-preview-lia__row\"><span class=\"eb-preview-lia__marker\"><svg width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.99707 2.80078C11.9735 2.80078 15.1973 6.02453 15.1973 10.001C15.1973 13.9774 11.9735 17.2012 7.99707 17.2012C4.02062 17.2012 0.796875 13.9774 0.796875 10.001C0.796875 6.02453 4.02062 2.80078 7.99707 2.80078ZM7.99707 5.20117C5.3461 5.20117 3.19727 7.35001 3.19727 10.001C3.19727 12.6519 5.3461 14.8008 7.99707 14.8008C10.648 14.8008 12.7969 12.6519 12.7969 10.001C12.7969 7.35001 10.648 5.20117 7.99707 5.20117ZM7.69629 6.90234C8.35903 6.90234 8.89648 7.4398 8.89648 8.10254V9.60547L10.0449 10.7539C10.5136 11.2225 10.5136 11.9825 10.0449 12.4512C9.57629 12.9198 8.81629 12.9198 8.34766 12.4512L6.84766 10.9512C6.62261 10.7261 6.49609 10.4208 6.49609 10.1025V8.10254C6.49609 7.4398 7.03355 6.90234 7.69629 6.90234Z\" fill=\"#90A8D0\"/></svg></span><span class=\"eb-preview-lia__label\">Third line of the list</span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type", "value": "Pending", "prop": "type",
                "variants": {
                  "type:pending-notice": { "value": "PendingNotice" },
                  "type:check": { "value": "Check" },
                  "type:check-positive": { "value": "CheckPositive" },
                  "type:bullet": { "value": "Bullet" },
                  "type:square": { "value": "Square" },
                  "type:numbered": { "value": "Numbered" },
                  "type:slot": { "value": "Slot" }
                }
              },
              { "key": "Marker", "value": "Pending icon instance",
                "variants": {
                  "type:pending-notice": { "value": "Pending icon instance" },
                  "type:check": { "value": "Checkmark icon instance" },
                  "type:check-positive": { "value": "Checkmark icon instance" },
                  "type:bullet": { "value": "Circle — ELLIPSE 5 × 5" },
                  "type:square": { "value": "Square — RECTANGLE 5 × 5, radius 1" },
                  "type:numbered": { "value": "#number — text" },
                  "type:slot": { "value": "⤷ IconSlot — empty by design" }
                }
              },
              { "key": "Node", "value": "5698:43261", "mono": true,
                "variants": {
                  "type:pending-notice": { "value": "5698:43263" },
                  "type:check": { "value": "5698:43265" },
                  "type:check-positive": { "value": "5698:43267" },
                  "type:bullet": { "value": "5698:43269" },
                  "type:square": { "value": "5698:43273" },
                  "type:numbered": { "value": "5698:43275" },
                  "type:slot": { "value": "5698:43280" }
                }
              },
              { "key": "Overridable", "value": "no",
                "variants": {
                  "type:numbered": { "value": "#number — set per item" },
                  "type:slot": { "value": "⤷ IconSlot — swap the asset" }
                }
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Marker", "value": "#90A8D0", "token": "library variable · name pending Dev Mode read", "swatch": true,
                "variants": {
                  "type:pending-notice": { "value": "#CA970C" },
                  "type:check-positive": { "value": "#27C990" },
                  "type:slot": { "value": "inherited from the swapped asset", "swatch": false }
                }
              },
              { "key": "Role", "value": "neutral marker",
                "variants": {
                  "type:pending-notice": { "value": "notice — pending needs attention" },
                  "type:check-positive": { "value": "positive — done and successful" },
                  "type:slot": { "value": "set by the consumer" }
                }
              },
              { "key": "Background", "value": "none — inherits the list surface", "token": "–" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width", "value": "16", "mono": true,
                "variants": {
                  "type:bullet": { "value": "9" },
                  "type:square": { "value": "9" },
                  "type:numbered": { "value": "12 — hugs #number" }
                }
              },
              { "key": "Height", "value": "20", "mono": true },
              { "key": "Marker size", "value": "16 × 16", "mono": true,
                "variants": {
                  "type:bullet": { "value": "5 × 5" },
                  "type:square": { "value": "5 × 5" },
                  "type:numbered": { "value": "9 × 14" }
                }
              },
              { "key": "Top offset", "value": "2 — centred", "mono": true,
                "variants": {
                  "type:bullet": { "value": "8 — optical" },
                  "type:square": { "value": "8 — optical" },
                  "type:numbered": { "value": "4 — optical" }
                }
              },
              { "key": "Corner radius", "value": "–", "mono": true,
                "variants": {
                  "type:bullet": { "value": "full — ellipse" },
                  "type:square": { "value": "1" }
                }
              },
              { "key": "Padding", "value": "0 — List Item owns the gap to the label", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Applies to", "value": "Numbered only — every other version is a shape", "mono": true },
              { "key": "Text style", "value": "shared library style · name pending Dev Mode read", "mono": true },
              { "key": "#number", "value": "Proxima Soft SemiBold · 14 / 14 · +0.25", "mono": true },
              { "key": "Ships as", "value": "\"1.\" — overridden per item", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.pending</span><span class=\"syn-punc\">)</span>\n\n<span class=\"syn-cm\">// Numbered carries its index; Slot takes any 16×16 view.</span>\n<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.numbered</span><span class=\"syn-punc\">(</span>3<span class=\"syn-punc\">))</span>",
        "compose": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Pending</span><span class=\"syn-punc\">)</span>\n\n<span class=\"syn-cm\">// Numbered carries its index; Slot takes any 16×16 composable.</span>\n<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span>type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Numbered</span><span class=\"syn-punc\">,</span> number <span class=\"syn-eq\">=</span> 3<span class=\"syn-punc\">)</span>"
      }
    ]
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": [
        {
          "label": "Swift Package Manager",
          "code": "<span class=\"syn-punc\">.</span><span class=\"syn-fn\">package</span><span class=\"syn-punc\">(</span>url<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"https://github.com/gcash/east-blue-ios\"</span><span class=\"syn-punc\">,</span> from<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"1.0.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Gradle",
          "code": "<span class=\"syn-fn\">implementation</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"com.gcash.eastblue:components:1.0.0\"</span><span class=\"syn-punc\">)</span>"
        }
      ],
      "footnote": "Planned API — the native library does not exist yet. Snippets show the intended shape, not shipped code."
    },
    "propertyMapping": {
      "description": "Figma properties mapped to the intended native parameters.",
      "rows": [
        {
          "figma": "Type",
          "swift": "EBListItemAssetType",
          "compose": "type: EBListItemAssetType"
        },
        {
          "figma": "#number",
          "swift": ".numbered(Int)",
          "compose": "number: Int?"
        },
        {
          "figma": "⤷ IconSlot",
          "swift": "@ViewBuilder icon: () -> Icon",
          "compose": "icon: @Composable () -> Unit"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Status markers",
        "swift": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.check</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.checkPositive</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.pending</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.pendingNotice</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Check</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">CheckPositive</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Pending</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">PendingNotice</span><span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "An ordered list",
        "swift": "<span class=\"syn-type\">ForEach</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">Array</span><span class=\"syn-punc\">(</span>steps<span class=\"syn-punc\">.</span>enumerated<span class=\"syn-punc\">()),</span> id<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">\\.offset</span><span class=\"syn-punc\">) {</span> i<span class=\"syn-punc\">,</span> step <span class=\"syn-kw\">in</span>\n    <span class=\"syn-type\">HStack</span><span class=\"syn-punc\">(</span>alignment<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.top</span><span class=\"syn-punc\">) {</span>\n        <span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.numbered</span><span class=\"syn-punc\">(</span>i <span class=\"syn-eq\">+</span> 1<span class=\"syn-punc\">))</span>\n        <span class=\"syn-type\">Text</span><span class=\"syn-punc\">(</span>step<span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "steps<span class=\"syn-punc\">.</span>forEachIndexed <span class=\"syn-punc\">{</span> i<span class=\"syn-punc\">,</span> step <span class=\"syn-eq\">-&gt;</span>\n    <span class=\"syn-type\">Row</span><span class=\"syn-punc\">(</span>verticalAlignment <span class=\"syn-eq\">=</span> <span class=\"syn-type\">Alignment</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Top</span><span class=\"syn-punc\">) {</span>\n        <span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Numbered</span><span class=\"syn-punc\">,</span> number <span class=\"syn-eq\">=</span> i <span class=\"syn-eq\">+</span> 1<span class=\"syn-punc\">)</span>\n        <span class=\"syn-type\">Text</span><span class=\"syn-punc\">(</span>step<span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "subheading": "A marker the enum does not cover",
        "swift": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.slot</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"star\"</span><span class=\"syn-punc\">).</span><span class=\"syn-fn\">resizable</span><span class=\"syn-punc\">().</span><span class=\"syn-fn\">frame</span><span class=\"syn-punc\">(</span>width<span class=\"syn-punc\">:</span> 16<span class=\"syn-punc\">,</span> height<span class=\"syn-punc\">:</span> 16<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBListItemAsset</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Slot</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">Icon</span><span class=\"syn-punc\">(</span>painterResource<span class=\"syn-punc\">(</span><span class=\"syn-type\">R</span><span class=\"syn-punc\">.</span>drawable<span class=\"syn-punc\">.</span>star<span class=\"syn-punc\">),</span> contentDescription <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
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
        "notes": "Marker colours resolve to library variables — verified on the component's own nodes. Names need a Dev Mode read before they can be printed in the spec tables."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "An enum with one associated value for the index and one slot. Maps to a single view or composable with no web-only pattern in the way."
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
        "notes": "Blocked — the native library does not exist yet."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Type</code>, <code>#number</code> and <code>⤷ IconSlot</code> map one to one with no rename at the boundary now the spaces are gone."
      },
      {
        "aspect": "Token coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Bindings are in place; only the human-readable names are outstanding."
      },
      {
        "aspect": "Registration",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked until the native library exists."
      }
    ],
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
