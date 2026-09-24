import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/generic-transaction-card.js`.
// Panel mirrors the property panel of set 5488:32955: two variant axes and
// four booleans. Leading-Slot and Trailing-Slot get no control.
const genericTransactionCardDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default',  label: 'Default' },
          { value: 'pressed',  label: 'Pressed' },
          { value: 'disabled', label: 'Disabled' },
        ],
      },
      {
        label: 'Status',
        prop: 'status',
        defaultValue: 'default',
        options: [
          { value: 'default',  label: 'Default' },
          { value: 'read',     label: 'Read' },
          { value: 'skeleton', label: 'Skeleton' },
        ],
      },
      { label: 'hasLeadingElement', prop: 'hasleadingelement', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'hasAmount', prop: 'hasamount', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'hasTrailingElement', prop: 'hastrailingelement', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'hasBadge', prop: 'hasbadge', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
    ],
  },
];

export const genericTransactionCard: ComponentData = {
  "meta": {
    "slug": "generic-transaction-card",
    "name": "Generic Transaction Card",
    "node": "5488:32955",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5488-32955",
    "description": "A transaction-summary card with merchant info, amount, date, and tappable detail surface.",
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
    "navGroup": "Card",
    "verdict": {
      "kind": "keep",
      "title": "Keep — all findings resolved",
      "text": "Rebuilt on node <code>5488:32955</code> in the 2026 Working File. The <code>type</code> enum that packed five layouts into one axis is replaced by real <code>Leading-Slot</code> and <code>Trailing-Slot</code> nodes; the single <code>state</code> axis is split into <code>State = Default | Pressed | Disabled</code> beside <code>Status = Default | Read | Skeleton</code> per §6, so read-and-pressed is expressible; the heading weight matches <a href=\"#\" onclick=\"showPanelById('generic-card');return false;\">Generic Card</a> at Proxima Soft Bold 18/23; and pressed and disabled both ship. Naming is complete across every variant including the skeleton — no <code>offset</code> frames, no <code>#</code> sigil, no spaces, no duplicate names, and slots kebab-cased per §4. The label overflow is resolved, with the 270px <code>LabelAmountRow</code> budget honoured as 172 + 98. All four DS Health traits pass; the only item still open is Code Connect, blocked until the native library exists."
    }
  },
  "overview": {
    "inContextNote": "Transaction-history rows stack vertically in the Activity / Transactions screen. Different rows use different variants depending on the context (recipient avatar, reference number, action menu).",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"gtx-demo-preview\"><div class=\"eb-preview eb-preview-gtx\"><div class=\"eb-preview-gtx__content\"><p class=\"eb-preview-gtx__label\">Juan Dela Cruz</p><div class=\"eb-preview-gtx__meta-row\"><span class=\"eb-preview-gtx__badge\">Sent</span><span class=\"eb-preview-gtx__meta\">Apr 14, 2026, 10:24 AM</span></div></div><div class=\"eb-preview-gtx__trailing\"><span class=\"eb-preview-gtx__amount\">PHP 1,500.00</span></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">label</span><input type=\"text\" id=\"gtx-ctrl-label\" class=\"demo-panel-select demo-panel-input\" value=\"Juan Dela Cruz\" oninput=\"_gtxUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">badge</span><input type=\"text\" id=\"gtx-ctrl-badge\" class=\"demo-panel-select demo-panel-input\" value=\"Sent\" oninput=\"_gtxUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">date / meta</span><input type=\"text\" id=\"gtx-ctrl-date\" class=\"demo-panel-select demo-panel-input\" value=\"Apr 14, 2026, 10:24 AM\" oninput=\"_gtxUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">amount</span><input type=\"text\" id=\"gtx-ctrl-amount\" class=\"demo-panel-select demo-panel-input\" value=\"PHP 1,500.00\" oninput=\"_gtxUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">reference</span><input type=\"text\" id=\"gtx-ctrl-ref\" class=\"demo-panel-select demo-panel-input\" value=\"GC123456789876543\" oninput=\"_gtxUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">avatar initials</span><input type=\"text\" id=\"gtx-ctrl-initials\" class=\"demo-panel-select demo-panel-input\" value=\"JD\" oninput=\"_gtxUpdate()\"></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">type</span><select id=\"gtx-ctrl-type\" class=\"demo-panel-select\" onchange=\"_gtxUpdate()\"><option value=\"default\" selected=\"\">default</option><option value=\"more-information\">more information</option><option value=\"with-avatar\">with avatar</option><option value=\"no-amount\">no amount</option><option value=\"skeleton\">skeleton loader</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "A generic transaction row — the leading and trailing slots let it carry an avatar, an icon or nothing, so one component covers the layouts the old <code>type</code> enum needed five variants for."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its surface, border and typography across all five states, and composes shared <code>Avatar</code> and <code>Badge</code> instances rather than redrawing them."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "<code>State</code> and <code>Status</code> are separate PascalCase properties with Title Case values per §1 and §5, following the §6 split. Layer naming is clean across all five variants including the skeleton: slots kebab-cased per §4, text layers on the §3 vocabulary, every frame named for what it holds, and no duplicates, sigils, spaces or <code>offset</code> frames left anywhere."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "<code>leadingElement</code> and <code>trailingElement</code> are both real Figma Slots, and the avatar, badge and trailing icon are all shared instances — the composition problem the previous assessment raised is solved."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "type=default",
        "notes": "Label + badge + date + amount. The baseline transaction row."
      },
      {
        "state": "With avatar",
        "ios": "yes",
        "android": "yes",
        "property": "type=with avatar",
        "notes": "Adds a 32 × 32 Avatar at the leading edge. Used for person-to-person transactions."
      },
      {
        "state": "More information",
        "ios": "yes",
        "android": "yes",
        "property": "type=more information",
        "notes": "Replaces the badge with an overflow menu button (⋯). Used when a row has context-menu actions."
      },
      {
        "state": "No amount",
        "ios": "yes",
        "android": "yes",
        "property": "type=no amount",
        "notes": "Swaps the amount for a trailing badge; swaps date for a reference number. Used for confirmations without monetary value."
      },
      {
        "state": "Skeleton loader",
        "ios": "yes",
        "android": "yes",
        "property": "type=skeleton loader",
        "notes": "Loading placeholder pattern. Worth documenting alongside Generic Card's skeleton as a DS-wide convention."
      },
      {
        "state": "Pressed",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Rows typically drill into transaction detail — need pressed tint for tap feedback."
      }
    ],
    "resolved": [
      {
        "headline": "<code>type</code> enum replaced by slot-based composition.",
        "body": "v2.0: Rebuilt on node <code>5488:32955</code> in the 2026 Working File. The axis that packed five structurally different layouts into one enum is gone — the leading and trailing positions are now real <code>SLOT</code> nodes, so an avatar, an icon or nothing at all is the consumer’s choice rather than a variant. The set drops from a layout enum to five states. This is the headline recommendation applied. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "<code>no amount</code> and <code>more information</code> values retired.",
        "body": "v2.0: Both described what was absent rather than what the card was for, and both are gone with the enum that carried them. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Heading weight aligned with Generic Card.",
        "body": "v2.0: The label is now Proxima Soft Bold 700 at 18/23, matching <a href=\"#\" onclick=\"showPanelById('generic-card');return false;\">Generic Card</a>’s <code>Title</code> exactly. The two cards sit next to each other in lists, so a Semibold/Bold split between them read as an error rather than a distinction. (C3)",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "Pressed and disabled states added.",
        "body": "v2.0: <code>state=pressed</code> fills the surface <code>#F6F9FD</code> and <code>state=disabled</code> ships alongside it, closing the missing-states finding. The card is a primary tap target in transaction lists, so touch-down feedback was the most-felt gap. (C5)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Axis split into <code>State</code> and <code>Status</code>.",
        "body": "v2.1: Verified on the live node. <code>State = Default | Pressed | Disabled</code> now sits beside <code>Status = Default | Read | Skeleton</code>, so interaction, content status and loading are three separate concerns rather than five values competing for one axis. Read-and-pressed is expressible, which in a transaction list is the common case. Both properties are PascalCase per §1 with Title Case values per §5, matching the split <a href=\"#\" onclick=\"showPanelById('generic-card');return false;\">Generic Card</a> made and the rule in §6. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Slots brought onto the family convention.",
        "body": "v2.1: <code>⤷ leadingElement</code> and <code>⤷ trailingElement</code> are now <code>Leading-Slot</code> and <code>Trailing-Slot</code> — the literal arrow character is gone and both follow §4 kebab-case with the <code>-Slot</code> suffix used across <a href=\"#\" onclick=\"showPanelById('bottom-sheet');return false;\">Bottom Sheet</a>, <a href=\"#\" onclick=\"showPanelById('alert');return false;\">Alert</a> and Generic Card. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The three <code>offset</code> frames named, and the typo fixed.",
        "body": "v2.1: <code>offset</code> → <code>BadgeContainer</code>, <code>offset</code> → <code>AmountContainer</code>, and the misspelled <code>amout-offset</code> → <code>Amount</code>. A new <code>LabelAmountRow</code> now holds the label and amount columns as an explicit 270px row — 172 + 98 — so the horizontal structure is declared rather than implied by position. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Legacy sigil dropped and frames moved to PascalCase.",
        "body": "v2.1: <code>#label</code> → <code>Label</code>, <code>#date</code> → <code>Date</code>, <code>#amount</code> → <code>Amount</code>, on the §3 vocabulary. The frames follow — <code>container</code> → <code>CardContainer</code>, <code>content-container</code> → <code>ContentContainer</code>, <code>transaction-detail</code> → <code>TransactionDetail</code> — and the space in <code>leading element</code> is closed as <code>LeadingElement</code>. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Label overflow resolved.",
        "body": "v2.2: Re-measured on the live node — <code>Label</code> (<code>5488:32986</code>) is now 172px, matching <code>TransactionDetail</code> exactly rather than running 33px past it. The <code>LabelAmountRow</code> budget of 270px is now honoured on both sides: 172 for the label column, 98 for the amount. Nothing overlaps, and a native implementation reading these bounds gets one consistent answer instead of two. (C4)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Skeleton brought onto the shared vocabulary.",
        "body": "v2.2: The inner layers are renamed to match the default variant — <code>transaction-detail</code> → <code>TransactionDetail</code>, the last <code>offset</code> frame → <code>BadgeContainer</code>, and <code>tag</code> / <code>header</code> / <code>badge</code> → <code>Tag</code> / <code>Header</code> / <code>Badge</code>. No frame in the component is named <code>offset</code> any more, and the skeleton no longer needs a second vocabulary to read. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>Amount</code> duplication resolved.",
        "body": "v2.2: The trailing column now reads <code>AmountRow</code> → <code>AmountContainer</code> → <code>Amount</code> — three distinct names across three levels, with the text layer keeping the §3 vocabulary name and the wrappers describing what they hold. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — no native library exists yet. Nothing in the schema or the layer tree blocks it: two PascalCase axes over two kebab-case slots, with no duplicate names, no legacy sigil, no spaces and no <code>offset</code> frames remaining.",
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
        "cardKey": "gt-spec-main",
        "demoKey": "main",
        "title": "Generic Transaction Card",
        "node": "5488:32955",
        "description": "A 360 × 82 transaction row — avatar, label and amount on the first line, badge and timestamp on the second, with Read and Skeleton statuses.",
        "previewHtml": "<div id=\"generic-transaction-card-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": genericTransactionCardDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "State",
                "value": "Default",
                "prop": "state"
              },
              {
                "key": "Status",
                "value": "Default",
                "prop": "status"
              },
              {
                "key": "hasLeadingElement",
                "value": "True",
                "prop": "hasleadingelement"
              },
              {
                "key": "hasAmount",
                "value": "True",
                "prop": "hasamount"
              },
              {
                "key": "hasTrailingElement",
                "value": "True",
                "prop": "hastrailingelement"
              },
              {
                "key": "hasBadge",
                "value": "True",
                "prop": "hasbadge"
              },
              {
                "key": "⤷ Leading-Slot",
                "value": "Slot · 4 items — Avatar",
                "variants": {
                  "hasleadingelement:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "⤷ Trailing-Slot",
                "value": "Slot · 4 items — Others",
                "variants": {
                  "hastrailingelement:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Resolved variant",
                "value": "5488:32979 · 360 × 82",
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
                "key": "Card",
                "value": "#FFFFFF",
                "token": "—",
                "swatch": "#FFFFFF",
                "variants": {
                  "state:pressed": {
                    "value": "#F6F9FD",
                    "swatch": "#F6F9FD"
                  }
                }
              },
              {
                "key": "Divider",
                "value": "#E5EBF4",
                "token": "—",
                "swatch": "#E5EBF4"
              },
              {
                "key": "Label",
                "value": "#0A2757",
                "token": "—",
                "swatch": "#0A2757",
                "variants": {
                  "state:disabled": {
                    "value": "#C2CFE5",
                    "swatch": "#C2CFE5"
                  },
                  "status:skeleton": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Amount",
                "value": "#0A2757",
                "token": "—",
                "swatch": "#0A2757",
                "variants": {
                  "hasamount:false": {
                    "hide": true
                  },
                  "status:read": {
                    "value": "#90A8D0",
                    "swatch": "#90A8D0"
                  },
                  "state:disabled": {
                    "value": "#C2CFE5",
                    "swatch": "#C2CFE5"
                  },
                  "status:skeleton": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Date",
                "value": "#6780A9",
                "token": "—",
                "swatch": "#6780A9",
                "variants": {
                  "state:disabled": {
                    "value": "#C2CFE5",
                    "swatch": "#C2CFE5"
                  },
                  "status:skeleton": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Avatar",
                "value": "#005CE5 / #FFFFFF",
                "token": "—",
                "swatch": "#005CE5",
                "variants": {
                  "hasleadingelement:false": {
                    "hide": true
                  },
                  "state:disabled": {
                    "value": "#9BC5FD / #F6F9FD at 72%",
                    "swatch": "#9BC5FD"
                  },
                  "status:skeleton": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Badge",
                "value": "#E5F1FF / #005CE5",
                "token": "—",
                "swatch": "#E5F1FF",
                "variants": {
                  "hasbadge:false": {
                    "hide": true
                  },
                  "state:disabled": {
                    "value": "#D7E0EF / #FFFFFF",
                    "swatch": "#D7E0EF"
                  },
                  "status:skeleton": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Trailing glyph",
                "value": "#005CE5",
                "token": "—",
                "swatch": "#005CE5",
                "variants": {
                  "hastrailingelement:false": {
                    "hide": true
                  },
                  "state:disabled": {
                    "value": "#9BC5FD",
                    "swatch": "#9BC5FD"
                  },
                  "status:skeleton": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Skeleton blocks",
                "value": "#EEF2F9",
                "token": "—",
                "swatch": "#EEF2F9",
                "variants": {
                  "status:default": {
                    "hide": true
                  },
                  "status:read": {
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
                "key": "Size",
                "value": "360 × 82",
                "mono": true,
                "prop": "size-readout"
              },
              {
                "key": "Padding",
                "value": "22 left · 16 top and bottom",
                "mono": true
              },
              {
                "key": "Avatar",
                "value": "32 × 32",
                "mono": true,
                "prop": "avatar-readout",
                "variants": {
                  "hasleadingelement:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Content x",
                "value": "66",
                "mono": true,
                "variants": {
                  "state:disabled": {
                    "value": "58"
                  },
                  "hasleadingelement:false": {
                    "value": "22"
                  }
                }
              },
              {
                "key": "Content row",
                "value": "270 × 50",
                "mono": true,
                "variants": {
                  "state:disabled": {
                    "value": "278 × 50"
                  }
                }
              },
              {
                "key": "Label / Amount row",
                "value": "24 tall · amount at x 238",
                "mono": true,
                "variants": {
                  "status:skeleton": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Badge row",
                "value": "18 tall at y 48 · badge 48 × 18",
                "mono": true,
                "variants": {
                  "status:skeleton": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Trailing glyph",
                "value": "24 × 24 at x 312",
                "mono": true,
                "variants": {
                  "hastrailingelement:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Skeleton blocks",
                "value": "32 circle · 80 × 20 · 182 × 23 · 82 × 19",
                "mono": true,
                "variants": {
                  "status:default": {
                    "hide": true
                  },
                  "status:read": {
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
                "key": "Label",
                "value": "Primary/Headlines/Block",
                "mono": true,
                "variants": {
                  "status:skeleton": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Amount",
                "value": "Primary/Headlines/Block",
                "mono": true,
                "variants": {
                  "hasamount:false": {
                    "hide": true
                  },
                  "status:skeleton": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Date",
                "value": "Secondary/Bold/Caption",
                "mono": true,
                "variants": {
                  "status:skeleton": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Badge label",
                "value": "Primary/Label/Fine",
                "mono": true,
                "variants": {
                  "hasbadge:false": {
                    "hide": true
                  },
                  "status:skeleton": {
                    "hide": true
                  }
                }
              }
            ]
          }
        ],
        "swift": "EBTransactionCard(\n    label: \"Label\",\n    date: \"Date XX, XXXX, Time (AM,PM)\"\n)\n    .ebAmount(\"XXX.XX\")\n    .ebBadge(\"Label\")\n    .ebLeading { EBAvatar(\"G\") }\n    .ebTrailing(.others) { showMenu() }",
        "compose": "EBTransactionCard(\n    label = \"Label\",\n    date = \"Date XX, XXXX, Time (AM,PM)\",\n    amount = \"XXX.XX\",\n    badge = \"Label\",\n    leading = { EBAvatar(\"G\") },\n    trailing = { EBIconButton(EBIcons.Others) { showMenu() } },\n    onClick = { }\n)"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Read off <code>get_node_info</code> on the five variants of set <code>5488:32955</code>. Token paths could not be read; the plugin returns no variable bindings.",
        "columns": [
          "Default",
          "Pressed",
          "Read",
          "Disabled",
          "Skeleton"
        ],
        "rows": [
          {
            "role": "Card",
            "token": "—",
            "values": [
              "#FFFFFF",
              "#F6F9FD",
              "#FFFFFF",
              "#FFFFFF",
              "#FFFFFF"
            ]
          },
          {
            "role": "Divider",
            "token": "—",
            "values": [
              "#E5EBF4",
              "#E5EBF4",
              "#E5EBF4",
              "#E5EBF4",
              "#E5EBF4"
            ]
          },
          {
            "role": "Label",
            "token": "—",
            "values": [
              "#0A2757",
              "#0A2757",
              "#0A2757",
              "#C2CFE5",
              "–"
            ]
          },
          {
            "role": "Amount",
            "token": "—",
            "values": [
              "#0A2757",
              "#0A2757",
              "#90A8D0",
              "#C2CFE5",
              "–"
            ]
          },
          {
            "role": "Date",
            "token": "—",
            "values": [
              "#6780A9",
              "#6780A9",
              "#6780A9",
              "#C2CFE5",
              "–"
            ]
          },
          {
            "role": "Avatar / initials",
            "token": "—",
            "values": [
              "#005CE5 / #FFFFFF",
              "#005CE5 / #FFFFFF",
              "#005CE5 / #FFFFFF",
              "#9BC5FD / #F6F9FD at 72%",
              "–"
            ]
          },
          {
            "role": "Badge / label",
            "token": "—",
            "values": [
              "#E5F1FF / #005CE5",
              "#E5F1FF / #005CE5",
              "#E5F1FF / #005CE5",
              "#D7E0EF / #FFFFFF",
              "–"
            ]
          },
          {
            "role": "Trailing glyph",
            "token": "—",
            "values": [
              "#005CE5",
              "#005CE5",
              "#005CE5",
              "#9BC5FD",
              "–"
            ]
          },
          {
            "role": "Skeleton blocks",
            "token": "—",
            "values": [
              "–",
              "–",
              "–",
              "–",
              "#EEF2F9"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:transaction-card:2.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.transactioncard.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "One row per property of set <code>5488:32955</code>, in panel order, then the two SLOTs. Only 5 of the 9 State × Status pairings are built.",
      "rows": [
        {
          "figma": "State — Default, Pressed, Disabled",
          "swift": "Pressed is the row’s pressed style; <code>.disabled(true)</code>",
          "compose": "Pressed from <code>interactionSource</code>; <code>enabled = false</code>"
        },
        {
          "figma": "Status — Default, Read, Skeleton",
          "swift": "<code>.ebRead(true)</code> · <code>.ebSkeleton(true)</code>",
          "compose": "<code>read = true</code> · <code>skeleton = true</code>"
        },
        {
          "figma": "hasLeadingElement — boolean",
          "swift": "<code>.ebLeading { }</code> — omit for False",
          "compose": "<code>leading: (@Composable () -&gt; Unit)? = null</code>"
        },
        {
          "figma": "hasAmount — boolean",
          "swift": "<code>.ebAmount(String)</code>",
          "compose": "<code>amount: String? = null</code>"
        },
        {
          "figma": "hasTrailingElement — boolean",
          "swift": "<code>.ebTrailing(.others) { }</code>",
          "compose": "<code>trailing: (@Composable () -&gt; Unit)? = null</code>"
        },
        {
          "figma": "hasBadge — boolean",
          "swift": "<code>.ebBadge(String)</code>",
          "compose": "<code>badge: String? = null</code>"
        },
        {
          "figma": "⤷ Leading-Slot — SLOT · 4 items (32 avatar)",
          "swift": "content of <code>.ebLeading</code>",
          "compose": "the value of <code>leading</code>"
        },
        {
          "figma": "⤷ Trailing-Slot — SLOT · 4 items (24 Others)",
          "swift": "content of <code>.ebTrailing</code>",
          "compose": "the value of <code>trailing</code>"
        },
        {
          "figma": "— <code>Label</code> / <code>Amount</code> / <code>Date</code>",
          "swift": "<code>label</code>, <code>amount</code>, <code>date</code>",
          "compose": "<code>label</code>, <code>amount</code>, <code>date</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/TransactionCard/EBTransactionCard.swift",
        "compose": "android/components/transactioncard/EBTransactionCard.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Default",
        "swift": "<span class=\"cmt\">// State=Default, Status=Default — 5488:32979, 360 × 82.</span>\nEBTransactionCard(\n    label: \"Gino Santos\",\n    date: \"Sep 24, 2026, 9:41 AM\"\n)\n    .ebAmount(\"1,250.00\")\n    .ebBadge(\"Sent\")\n    .ebLeading { EBAvatar(\"G\") }\n    .ebTrailing(.others) { showMenu() }",
        "compose": "<span class=\"cmt\">// State=Default, Status=Default — 5488:32979, 360 × 82.</span>\nEBTransactionCard(\n    label = \"Gino Santos\",\n    date = \"Sep 24, 2026, 9:41 AM\",\n    amount = \"1,250.00\",\n    badge = \"Sent\",\n    leading = { EBAvatar(\"G\") },\n    trailing = { EBIconButton(EBIcons.Others) { showMenu() } },\n    onClick = { openReceipt() }\n)"
      },
      {
        "subheading": "Read",
        "swift": "<span class=\"cmt\">// State=Default, Status=Read — 5501:38441; the amount drops to #90A8D0.</span>\nEBTransactionCard(label: \"Gino Santos\", date: \"Sep 24, 2026, 9:41 AM\")\n    .ebAmount(\"1,250.00\")\n    .ebRead(true)",
        "compose": "<span class=\"cmt\">// State=Default, Status=Read — 5501:38441; the amount drops to #90A8D0.</span>\nEBTransactionCard(\n    label = \"Gino Santos\",\n    date = \"Sep 24, 2026, 9:41 AM\",\n    amount = \"1,250.00\",\n    read = true,\n    onClick = { openReceipt() }\n)"
      },
      {
        "subheading": "Skeleton",
        "swift": "<span class=\"cmt\">// State=Default, Status=Skeleton — 5488:33001, 360 × 79.</span>\nEBTransactionCard(label: \"\", date: \"\")\n    .ebSkeleton(true)",
        "compose": "<span class=\"cmt\">// State=Default, Status=Skeleton — 5488:33001, 360 × 79.</span>\nEBTransactionCard(\n    label = \"\",\n    date = \"\",\n    skeleton = true,\n    onClick = { }\n)"
      },
      {
        "subheading": "Disabled",
        "swift": "<span class=\"cmt\">// State=Disabled, Status=Default — 5492:33889; the avatar drops to 24.</span>\nEBTransactionCard(label: \"Gino Santos\", date: \"Sep 24, 2026, 9:41 AM\")\n    .ebAmount(\"1,250.00\")\n    .ebBadge(\"Sent\")\n    .disabled(true)",
        "compose": "<span class=\"cmt\">// State=Disabled, Status=Default — 5492:33889; the avatar drops to 24.</span>\nEBTransactionCard(\n    label = \"Gino Santos\",\n    date = \"Sep 24, 2026, 9:41 AM\",\n    amount = \"1,250.00\",\n    badge = \"Sent\",\n    enabled = false,\n    onClick = { }\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Row role",
        "ios": "One <code>Button</code>; the label reads name, badge, amount then date.",
        "android": "<code>Modifier.clickable(role = Role.Button)</code> with a merged <code>contentDescription</code>."
      },
      {
        "requirement": "Amount",
        "ios": "Spell the currency — “1,250 pesos”, not “1,250.00”.",
        "android": "Same; do not rely on the glyph."
      },
      {
        "requirement": "Trailing menu",
        "ios": "The Others glyph is its own button — label it “More options”.",
        "android": "Separate <code>IconButton</code> with a <code>contentDescription</code>; 48dp target."
      },
      {
        "requirement": "Read state",
        "ios": "Read is a colour change only — announce it with <code>.accessibilityValue(\"read\")</code>.",
        "android": "Append “read” to <code>stateDescription</code>."
      },
      {
        "requirement": "Contrast",
        "ios": "Label #0A2757 is 14.58:1 on white and the date #6780A9 4.01:1 at 12pt, below AA. The Read amount #90A8D0 is 2.41:1 and every Disabled text #C2CFE5 1.57:1.",
        "android": "Same ratios."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Read for a transaction the user has already opened.",
        "dontText": "Don’t use Disabled for it — Disabled means the row cannot be opened at all."
      },
      {
        "doText": "Keep the badge to one word — it shares its line with the timestamp.",
        "dontText": "Don’t put the amount in the badge."
      },
      {
        "doText": "Use Skeleton while the list loads; it is 3px shorter, so reserve 82.",
        "dontText": "Don’t animate the skeleton blocks into place — the row height shifts."
      },
      {
        "doText": "Give the trailing glyph its own action.",
        "dontText": "Don’t ship it as decoration; it looks tappable."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>CardContainer</code>, <code>LeadingElement</code>, <code>ContentRow</code>, <code>LabelAmountRow</code>, <code>BadgeContainer</code> and the two slots are semantic, with no <code>#</code> sigils on the card’s own layers."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Two PascalCase axes and four camelCase booleans, but only 5 of the 9 State × Status pairings are built and <code>Status=Read</code> is a data state sitting on the same axis as a loading skeleton."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "All four text layers resolve <code>matched</code> — <code>Primary/Headlines/Block</code> twice, <code>Secondary/Bold/Caption</code> and <code>Primary/Label/Fine</code>. Colour bindings cannot be read, and the Disabled initials are #F6F9FD dimmed to 72% rather than their own colour."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Maps to one row with two slots, but Read and Skeleton are runtime state natively, not variants."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Default, Pressed and Disabled ship, but Pressed pairs only with <code>Status=Default</code> — there is no pressed Read row."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Leading and trailing are real SLOTs with 4 swap options each."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Two axes, four booleans and two slots are ready to map; no mappings are registered."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 5,
      "description": "<code>State</code> (3) × <code>Status</code> (3) would be 9; 5 are built — Pressed, Disabled and Read each pair only with the other axis’s Default. The four booleans add none.",
      "columns": [
        "State",
        "Status",
        "Node ID",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "Default",
            "Default",
            "<code>5488:32979</code>",
            "360 × 82"
          ]
        },
        {
          "cells": [
            "Pressed",
            "Default",
            "<code>5492:33839</code>",
            "360 × 82"
          ]
        },
        {
          "cells": [
            "Disabled",
            "Default",
            "<code>5492:33889</code>",
            "360 × 82"
          ]
        },
        {
          "cells": [
            "Default",
            "Read",
            "<code>5501:38441</code>",
            "360 × 82"
          ]
        },
        {
          "cells": [
            "Default",
            "Skeleton",
            "<code>5488:33001</code>",
            "360 × 79"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Trailing glyph colour · node 5488:32955",
      "rows": [
        {
          "body": "<strong>The Others glyph is #005CE5, not the navy label colour</strong> — and #9BC5FD when Disabled, matching the dimmed avatar.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>It comes from <code>export_node_as_image</code>.</strong> The Others instance exposes only its guide layers to the plugin, never the glyph fill. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        }
      ]
    },
    {
      "version": "2.0.0",
      "date": "September 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Style + Code tabs rebuilt against the live set · node 5488:32955",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt to one card with the Figma property panel</strong> — <code>State</code>, <code>Status</code> and the four booleans. The cards on retired nodes are replaced; the two slots are listed without controls.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Preview redrawn from the set.</strong> 360 × 82 (Skeleton 79): a 32 avatar at (22, 16), the content row at x 66 with Label and Amount on the first line and the badge and date on the second, and the Others glyph at x 312.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Colours read per variant.</strong> Pressed tints the card #F6F9FD; Read drops the amount to #90A8D0; Disabled takes every text to #C2CFE5 with a #D7E0EF badge.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Typography resolved against the token database.</strong> Label and Amount → <code>Primary/Headlines/Block</code>, Date → <code>Secondary/Bold/Caption</code>, badge → <code>Primary/Label/Fine</code>, all matched.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Code tab rebuilt on the live set</strong> — install <code>com.eastblue.ds:transaction-card:2.0.0</code>, a nine-row mapping, four snippets and a five-row inventory.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Disabled shrinks the avatar to 24</strong> where every other variant uses 32, which shifts the whole content row from x 66 to x 58. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>Only 5 of the 9 pairings are built.</strong> Pressed, Disabled and Read each pair only with the other axis’s Default, so there is no pressed Read row. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong><code>Read</code> and <code>Skeleton</code> share an axis.</strong> One is a data state the user creates, the other is a loading placeholder — natively neither is a variant. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>The Disabled initials are #F6F9FD dimmed to 72%</strong> rather than their own colour. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Date and Read amount fail AA</strong> — #6780A9 is 4.01:1 at 12pt, the Read amount #90A8D0 2.41:1, and every Disabled text #C2CFE5 1.57:1. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "A11y"
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
      "header": "Initial Assessment · node 18482:35753",
      "rows": [
        {
          "body": "<strong>Verdict: Restructure</strong> — Replace <code>type</code> enum (5 layouts) with slot-based composition. Align heading weight with Generic Card. Add pressed state. <span class=\"tag-open tag-c1 tag-c2 tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Architecture"
          }
        },
        {
          "body": "<strong>C1 — Type enum hides layouts</strong> — Same anti-pattern as Alert's <code>Full Width</code>. Split into <code>leadingMedia</code>, <code>badge</code>, <code>trailing</code>, <code>loading</code>. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C2 — Absence-based names</strong> — <code>no amount</code> / <code>more information</code> describe what's missing. Semantic slot names replace them. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C2 — Heading weight inconsistency</strong> — Semibold 600 vs Generic Card's Bold 700. Standardize across card family. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C5 — Pressed state</strong> — Transaction rows drill into detail on tap; needs tap feedback. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>Skeleton pattern ✓</strong> — First-class loading variant, matches Generic Card. Adopt as DS-wide convention. <span class=\"tag-fixed\">Noted</span>",
          "delta": {
            "kind": "resolved",
            "label": "Praise"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked on restructure. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
