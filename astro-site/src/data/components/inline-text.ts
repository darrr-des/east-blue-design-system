import type { ComponentData, DemoControlSection } from '../types';

// Panel mirrors the property panel of set 4419:24515, in its order.
// Type, hasDescription and hasTextLink are variant properties;
// hasTrailingElement is a boolean. The nested Trailing Elements instance
// is listed on the card, not given a control.
const inlineTextDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Type',
        prop: 'type',
        defaultValue: 'copy-icon',
        options: [
          { value: 'copy-icon', label: 'Copy Icon' },
          { value: 'badge', label: 'Badge' },
          { value: 'checkmark', label: 'Checkmark' },
          { value: 'slot', label: 'Slot' },
        ],
      },
      {
        label: 'hasDescription',
        prop: 'hasdescription',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasTextLink',
        prop: 'hastextlink',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasTrailingElement',
        prop: 'hastrailingelement',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
    ],
  },
];

export const inlineText: ComponentData = {
  "meta": {
    "slug": "inline-text",
    "name": "Inline Text",
    "node": "4419:24515",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4419-24515",
    "description": "A label-and-value row with an optional trailing element, description line and text link — used for inline detail pairs within lists and cards.",
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
    "verdict": {
      "kind": "keep",
      "title": "Keep — all findings resolved",
      "text": "Rebuilt on node <code>4419:24515</code> in the 2026 Working File as <code>Type</code> (Copy Icon · Badge · Checkmark · Slot) × <code>hasDescription</code> × <code>hasTextLink</code> = <strong>16 variants</strong>. The enum that hid five compositions is split into orthogonal axes, so clipboard plus description plus link is now a real combination rather than an unreachable one. The trailing element routes through a shared <code>Trailing Elements</code> instance holding a real Badge or DS icon, and every layer carries a distinct semantic name mapping onto §3. All four DS Health traits pass; the only item still open is Code Connect, blocked until the native library exists."
    }
  },
  "overview": {
    "inContextNote": "Inline Text is a composition primitive. You'll find stacks of it inside Generic Transaction Card's detail modal, Send Money confirmation screens, receipt summaries, and fee-breakdown list items. Rarely used standalone.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"itx-demo-preview\"><div style=\"display:flex;align-items:center;justify-content:space-between;gap:12px;width:320px;font-family:'Proxima Soft',sans-serif;opacity:1;\"><p style=\"font-weight:600;font-size:16px;color:#0A2757;margin:0;line-height:20px;\">Amount</p><p style=\"font-weight:600;font-size:16px;color:#445C85;margin:0;line-height:20px;\">PHP 1,500.00</p></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">label</span><input type=\"text\" id=\"itx-ctrl-label\" class=\"demo-panel-select demo-panel-input\" value=\"Amount\" oninput=\"_itxUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">value</span><input type=\"text\" id=\"itx-ctrl-value\" class=\"demo-panel-select demo-panel-input\" value=\"PHP 1,500.00\" oninput=\"_itxUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><input type=\"text\" id=\"itx-ctrl-desc\" class=\"demo-panel-select demo-panel-input\" value=\"Description goes here\" oninput=\"_itxUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">cta</span><input type=\"text\" id=\"itx-ctrl-cta\" class=\"demo-panel-select demo-panel-input\" value=\"CTA\" oninput=\"_itxUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">badge</span><input type=\"text\" id=\"itx-ctrl-badge\" class=\"demo-panel-select demo-panel-input\" value=\"Label\" oninput=\"_itxUpdate()\"></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">type</span><select id=\"itx-ctrl-type\" class=\"demo-panel-select\" onchange=\"_itxUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"with-clipboard\">with Clipboard</option><option value=\"with-badge\">with Badge</option><option value=\"with-description\">with Description</option><option value=\"with-text-link\">with Text Link</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Genuinely reused across transaction cards, modal summaries, and list items. A strong primitive."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Binds tokens cleanly and routes the trailing element through a shared <code>Trailing Elements</code> instance holding a real <code>Badge</code> or DS icon, so styling propagates rather than being redrawn here."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "<code>Type</code> × <code>hasDescription</code> × <code>hasTextLink</code> are orthogonal, boolean values are genuine <code>True</code>/<code>False</code>, and every layer carries a distinct semantic name — the text layers mapping onto §3 as <code>Label</code>, <code>Value</code>, <code>Description</code>, plus <code>LinkLabel</code>. <code>Type=Slot</code> is a deliberate, documented choice."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Stacks inside transaction cards, modal summaries and list items, and the three axes combine freely — clipboard plus description plus link is now a real combination rather than an unreachable one. <code>Type=Slot</code> accepts arbitrary trailing content."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "type=Default",
        "notes": "Label leading, value trailing. The baseline receipt row."
      },
      {
        "state": "With Clipboard",
        "ios": "yes",
        "android": "yes",
        "property": "type=with Clipboard",
        "notes": "Value + 24 × 24 copy icon. Tapping the icon copies the value to clipboard."
      },
      {
        "state": "With Badge",
        "ios": "yes",
        "android": "yes",
        "property": "type=with Badge",
        "notes": "Replaces the value with a trailing badge pill. Used for voucher / discount selection."
      },
      {
        "state": "With Description",
        "ios": "yes",
        "android": "yes",
        "property": "type=with Description",
        "notes": "Adds a second row below the label with secondary caption text."
      },
      {
        "state": "With Text Link",
        "ios": "yes",
        "android": "yes",
        "property": "type=with Text Link",
        "notes": "Second row adds a trailing text link (CTA) next to the description."
      },
      {
        "state": "Pressed (copy icon)",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Copy icon has no pressed state or success toast hook — users get no feedback when the tap lands."
      }
    ],
    "resolved": [
      {
        "headline": "<code>type</code> enum split into orthogonal axes.",
        "body": "v2.0: Rebuilt on node <code>4419:24515</code> in the 2026 Working File. The single enum that hid five layouts is now <code>Type</code> (Copy Icon · Badge · Checkmark · Slot) × <code>hasDescription</code> × <code>hasTextLink</code> = 16 variants. Trailing-element kind, description presence and link presence are independent, so no combination is unreachable. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Enum values cleaned up.",
        "body": "v2.0: The \"with X\" phrasing is gone — values are now <code>Copy Icon</code>, <code>Badge</code>, <code>Checkmark</code> and <code>Slot</code>, each naming the trailing element rather than describing a composite layout. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Badge is instance-swapped, not drawn inline.",
        "body": "v2.0: The trailing element goes through a shared <code>Trailing Elements</code> instance which in turn holds a real <code>Badge</code> instance. Badge styling changes now propagate rather than needing to be redrawn here. (C6 · Composition)",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Copy icon uses the shared wrapper.",
        "body": "v2.1: Confirmed by the component owner — <code>Type=Copy Icon</code> routes through the same <code>Trailing Elements</code> instance as Badge rather than drawing the glyph inline, so it inherits the DS icon. (C6)",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Clipboard property renamed to describe the element.",
        "body": "v2.0: The property value now reads <code>Type=Copy Icon</code>, naming what appears rather than the clipboard mechanism behind it. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Layer naming completed.",
        "body": "v2.1: Seven renames — the 16px <code>#label</code> → <code>Label</code>, the 12px link <code>#label</code> → <code>LinkLabel</code>, <code>#amount</code> → <code>Value</code>, <code>description</code> → <code>Description</code>, the two <code>container</code> frames → <code>ValueGroup</code> and <code>DescriptionGroup</code>, and <code>bottom-container</code> → <code>SupportingRow</code>. Resolves the duplicate <code>#label</code> and duplicate <code>container</code> collisions, and the text names now map onto §3 — <code>Label</code>, <code>Value</code>, <code>Description</code>. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Row frame renamed to <code>MainRow</code>.",
        "body": "v2.2: The top row no longer shares the component set's own name, pairing cleanly with <code>SupportingRow</code> below it. Every layer this component owns now carries a distinct semantic name. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>Type=Slot</code> confirmed intentional.",
        "body": "v2.2: Closed by owner decision — <code>Slot</code> stays. The team treats Slot as a first-class concept in the system rather than an implementation detail, so the value reads as a named content mode to anyone working in the library. (C2)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Pressed state ruled out of scope.",
        "body": "v2.2: Closed by owner decision — nested buttons and links across the system do not currently carry pressed states, so adding one here would make Inline Text the outlier rather than the standard. Revisit at family level if pressed states are introduced for nested interactive elements generally. (C5)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Stacking and typography documented.",
        "body": "v2.2: Documented rather than deferred. <strong>Stacking</strong> — rows carry no separator of their own and no vertical padding: a row is 24px tall without a description and 44px with one, at 368 wide. The containing list or card supplies the gap between rows and any dividers, so a run of Inline Text rows sits flush unless the parent spaces them. <strong>Typography reconciliation with Generic Transaction Card</strong> — the supporting scale is already shared: <code>Description</code> and the card's <code>Metadata</code> are both BarkAda Semibold 12/18 at <code>#6780A9</code>, identical. The primary scale differs deliberately: the card's own title is Proxima Soft Semibold 18/18 while Inline Text's <code>Label</code> and <code>Value</code> are 16/16. That gap is the hierarchy — the card heading sits above the detail rows beneath it — not a drift to correct. (Docs)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — no native library exists yet. The schema is clean: one enum, two booleans, three text layers and a swappable trailing instance.",
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
        "cardKey": "itx-spec-main",
        "demoKey": "main",
        "title": "Inline Text",
        "node": "4419:24515",
        "description": "",
        "previewHtml": "<div id=\"inline-text-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": inlineTextDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Type",
                "value": "Copy Icon",
                "prop": "type"
              },
              {
                "key": "hasDescription",
                "value": "True",
                "prop": "hasdescription"
              },
              {
                "key": "hasTextLink",
                "value": "True",
                "prop": "hastextlink"
              },
              {
                "key": "hasTrailingElement",
                "value": "True",
                "prop": "hastrailingelement"
              },
              {
                "key": "Nested instance",
                "value": "Trailing Elements"
              },
              {
                "key": "Resolved variant",
                "value": "4419:20913 · 368 × 44",
                "mono": true,
                "variants": {
                  "type:copy-icon|hasdescription:true|hastextlink:true": {
                    "value": "4419:20913 · 368 × 44"
                  },
                  "type:copy-icon|hasdescription:true|hastextlink:false": {
                    "value": "5643:34601 · 368 × 44"
                  },
                  "type:copy-icon|hasdescription:false|hastextlink:true": {
                    "value": "4419:24516 · 368 × 44"
                  },
                  "type:copy-icon|hasdescription:false|hastextlink:false": {
                    "value": "5643:34623 · 368 × 24"
                  },
                  "type:badge|hasdescription:true|hastextlink:true": {
                    "value": "5652:36979 · 368 × 44"
                  },
                  "type:badge|hasdescription:true|hastextlink:false": {
                    "value": "5652:36989 · 368 × 44"
                  },
                  "type:badge|hasdescription:false|hastextlink:true": {
                    "value": "5652:36998 · 368 × 44"
                  },
                  "type:badge|hasdescription:false|hastextlink:false": {
                    "value": "5652:37006 · 368 × 24"
                  },
                  "type:checkmark|hasdescription:true|hastextlink:true": {
                    "value": "5652:37190 · 368 × 44"
                  },
                  "type:checkmark|hasdescription:true|hastextlink:false": {
                    "value": "5652:37200 · 368 × 44"
                  },
                  "type:checkmark|hasdescription:false|hastextlink:true": {
                    "value": "5652:37209 · 368 × 44"
                  },
                  "type:checkmark|hasdescription:false|hastextlink:false": {
                    "value": "5652:37217 · 368 × 24"
                  },
                  "type:slot|hasdescription:true|hastextlink:true": {
                    "value": "5652:37563 · 368 × 44"
                  },
                  "type:slot|hasdescription:true|hastextlink:false": {
                    "value": "5652:37573 · 368 × 44"
                  },
                  "type:slot|hasdescription:false|hastextlink:true": {
                    "value": "5652:37582 · 368 × 44"
                  },
                  "type:slot|hasdescription:false|hastextlink:false": {
                    "value": "5652:37590 · 368 × 24"
                  }
                }
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Surface",
                "value": "None — row fills hidden"
              },
              {
                "key": "Label",
                "value": "#0A2757",
                "token": "—"
              },
              {
                "key": "Value",
                "value": "#445C85",
                "token": "—"
              },
              {
                "key": "Description",
                "value": "#6780A9",
                "token": "—",
                "variants": {
                  "hasdescription:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Link label",
                "value": "#005CE5",
                "token": "—",
                "variants": {
                  "hastextlink:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Icon",
                "value": "#445C85",
                "token": "—",
                "variants": {
                  "type:badge": {
                    "hide": true
                  },
                  "type:slot": {
                    "hide": true
                  },
                  "hastrailingelement:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Badge surface",
                "value": "#E5F1FF",
                "token": "—",
                "variants": {
                  "type:copy-icon": {
                    "hide": true
                  },
                  "type:checkmark": {
                    "hide": true
                  },
                  "type:slot": {
                    "hide": true
                  },
                  "hastrailingelement:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Badge label",
                "value": "#005CE5",
                "token": "—",
                "variants": {
                  "type:copy-icon": {
                    "hide": true
                  },
                  "type:checkmark": {
                    "hide": true
                  },
                  "type:slot": {
                    "hide": true
                  },
                  "hastrailingelement:false": {
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
                "value": "Primary/Label/Light/Base",
                "mono": true
              },
              {
                "key": "Value",
                "value": "Primary/Label/Light/Base",
                "mono": true
              },
              {
                "key": "Description",
                "value": "Secondary/Bold/Caption",
                "mono": true,
                "variants": {
                  "hasdescription:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Link label",
                "value": "Secondary/Bold/Caption",
                "mono": true,
                "variants": {
                  "hastextlink:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Badge label",
                "value": "Primary/Label/Fine",
                "mono": true,
                "variants": {
                  "type:copy-icon": {
                    "hide": true
                  },
                  "type:checkmark": {
                    "hide": true
                  },
                  "type:slot": {
                    "hide": true
                  },
                  "hastrailingelement:false": {
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
                "value": "44px",
                "mono": true,
                "variants": {
                  "hasdescription:false|hastextlink:false": {
                    "value": "24px"
                  }
                }
              },
              {
                "key": "Width",
                "value": "368px",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "0",
                "mono": true
              },
              {
                "key": "MainRow",
                "value": "368 × 24",
                "mono": true
              },
              {
                "key": "SupportingRow",
                "value": "368 × 18 · 2px below MainRow",
                "mono": true,
                "variants": {
                  "hasdescription:false|hastextlink:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Label width",
                "value": "306px — fills",
                "mono": true,
                "variants": {
                  "type:badge": {
                    "value": "282px — fills"
                  },
                  "type:checkmark": {
                    "value": "314px — fills"
                  },
                  "type:slot": {
                    "value": "306px — fills"
                  },
                  "type:copy-icon|hastrailingelement:false": {
                    "value": "334px — fills"
                  },
                  "type:badge|hastrailingelement:false": {
                    "value": "334px — fills"
                  },
                  "type:checkmark|hastrailingelement:false": {
                    "value": "334px — fills"
                  },
                  "type:slot|hastrailingelement:false": {
                    "value": "334px — fills"
                  }
                }
              },
              {
                "key": "ValueGroup",
                "value": "Value 34 · 4px gap · trailing",
                "mono": true,
                "variants": {
                  "hastrailingelement:false": {
                    "value": "Value 34 — no trailing element"
                  }
                }
              },
              {
                "key": "Trailing element",
                "value": "Copy icon 24 × 24",
                "mono": true,
                "variants": {
                  "type:badge": {
                    "value": "Badge 48 × 18, centred in 24"
                  },
                  "type:checkmark": {
                    "value": "Checkmark 16 × 16, in a 16 × 24 frame"
                  },
                  "type:slot": {
                    "value": "Slot 24 × 24"
                  },
                  "type:copy-icon|hastrailingelement:false": {
                    "hide": true
                  },
                  "type:badge|hastrailingelement:false": {
                    "hide": true
                  },
                  "type:checkmark|hastrailingelement:false": {
                    "hide": true
                  },
                  "type:slot|hastrailingelement:false": {
                    "hide": true
                  },
                  "hastrailingelement:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Description width",
                "value": "345px — link beside it",
                "mono": true,
                "variants": {
                  "hastextlink:false": {
                    "value": "368px — fills"
                  },
                  "hasdescription:false|hastextlink:false": {
                    "hide": true
                  },
                  "hasdescription:false|hastextlink:true": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Link label",
                "value": "x 345 · 21 × 18",
                "mono": true,
                "variants": {
                  "hastextlink:false": {
                    "hide": true
                  }
                }
              }
            ]
          }
        ],
        "swift": "EBInlineText(label: \"Label\", value: \"0.00\")\n    .ebTrailing(.copyIcon)\n    .ebDescription(\"Description goes here\")\n    .ebTextLink(\"CTA\") { }",
        "compose": "EBInlineText(\n    label = \"Label\",\n    value = \"0.00\",\n    trailing = EBInlineTextTrailing.CopyIcon,\n    description = \"Description goes here\",\n    linkLabel = \"CTA\",\n    onLinkClick = { }\n)"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Type",
        "description": "Read off <code>get_node_info</code> and <code>get_svg</code> on the variants of set <code>4419:24515</code>. Label, Value, Description and Link are the same on all 16 variants; only the trailing element changes with <code>Type</code>. The Badge colours belong to the nested <code>Badge</code> instance. Token paths could not be read — the plugin returns no variable bindings.",
        "columns": [
          "Token",
          "Value"
        ],
        "rows": [
          {
            "role": "All types",
            "token": "Label",
            "values": [
              "—",
              "#0A2757"
            ]
          },
          {
            "role": "—",
            "token": "Value",
            "values": [
              "—",
              "#445C85"
            ]
          },
          {
            "role": "—",
            "token": "Description",
            "values": [
              "—",
              "#6780A9"
            ]
          },
          {
            "role": "—",
            "token": "Link label",
            "values": [
              "—",
              "#005CE5"
            ]
          },
          {
            "role": "Copy Icon",
            "token": "Icon stroke (back sheet at 40%)",
            "values": [
              "—",
              "#445C85"
            ]
          },
          {
            "role": "Checkmark",
            "token": "Icon stroke",
            "values": [
              "—",
              "#445C85"
            ]
          },
          {
            "role": "Badge",
            "token": "Badge surface",
            "values": [
              "—",
              "#E5F1FF"
            ]
          },
          {
            "role": "—",
            "token": "Badge label",
            "values": [
              "—",
              "#005CE5"
            ]
          },
          {
            "role": "Slot",
            "token": "Slot content",
            "values": [
              "—",
              "Consumer-supplied"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:inline-text:2.2.1\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.inlinetext.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "One row per property of set <code>4419:24515</code>, in panel order, then the nested instance and the text layers. <code>hasTrailingElement</code> is a boolean property; which layer it toggles is not readable with the review tooling, and it is mapped here as the presence of the trailing element its name describes.",
      "rows": [
        {
          "figma": "Type — Copy Icon, Badge, Checkmark, Slot",
          "swift": "<code>.ebTrailing(.copyIcon / .badge(String) / .checkmark / .slot { })</code>",
          "compose": "<code>trailing = EBInlineTextTrailing.CopyIcon / Badge(String) / Checkmark / Slot { }</code>"
        },
        {
          "figma": "hasDescription — False, True",
          "swift": "<code>.ebDescription(String)</code> — omit for False",
          "compose": "<code>description: String? = null</code>"
        },
        {
          "figma": "hasTextLink — True, False",
          "swift": "<code>.ebTextLink(String) { }</code> — omit for False",
          "compose": "<code>linkLabel: String? = null</code> + <code>onLinkClick: (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "hasTrailingElement — boolean",
          "swift": "omit <code>.ebTrailing</code> for False",
          "compose": "<code>trailing: EBInlineTextTrailing? = null</code>"
        },
        {
          "figma": "— nested <code>Trailing Elements</code> instance",
          "swift": "the value passed to <code>.ebTrailing</code>",
          "compose": "the value passed to <code>trailing</code>"
        },
        {
          "figma": "— <code>Label</code> and <code>Value</code> text layers",
          "swift": "<code>EBInlineText(label: String, value: String)</code>",
          "compose": "<code>label: String</code>, <code>value: String</code>"
        },
        {
          "figma": "— Copy icon tap",
          "swift": "<code>.onCopy { }</code> — defaults to copying <code>value</code>",
          "compose": "<code>onCopy: (() -&gt; Unit)? = null</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/InlineText/EBInlineText.swift",
        "compose": "android/components/inlinetext/EBInlineText.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Copy Icon",
        "swift": "<span class=\"cmt\">// Type=Copy Icon, hasDescription=True, hasTextLink=True — 4419:20913, 368 × 44. 24 × 24 copy icon.</span>\n<span class=\"typ\">EBInlineText</span>(label: <span class=\"str\">\"Label\"</span>, value: <span class=\"str\">\"0.00\"</span>)\n    .<span class=\"fn\">ebTrailing</span>(.<span class=\"prp\">copyIcon</span>)\n    .<span class=\"fn\">ebDescription</span>(<span class=\"str\">\"Description goes here\"</span>)\n    .<span class=\"fn\">ebTextLink</span>(<span class=\"str\">\"CTA\"</span>) { openDetails() }",
        "compose": "<span class=\"cmt\">// Type=Copy Icon, hasDescription=True, hasTextLink=True — 4419:20913, 368 × 44. 24 × 24 copy icon.</span>\n<span class=\"typ\">EBInlineText</span>(\n    label = <span class=\"str\">\"Label\"</span>,\n    value = <span class=\"str\">\"0.00\"</span>,\n    trailing = <span class=\"typ\">EBInlineTextTrailing</span>.<span class=\"prp\">CopyIcon</span>,\n    description = <span class=\"str\">\"Description goes here\"</span>,\n    linkLabel = <span class=\"str\">\"CTA\"</span>,\n    onLinkClick = { openDetails() }\n)"
      },
      {
        "subheading": "Badge",
        "swift": "<span class=\"cmt\">// Type=Badge, hasDescription=True, hasTextLink=True — 5652:36979, 368 × 44. 48 × 18 Badge.</span>\n<span class=\"typ\">EBInlineText</span>(label: <span class=\"str\">\"Label\"</span>, value: <span class=\"str\">\"0.00\"</span>)\n    .<span class=\"fn\">ebTrailing</span>(.<span class=\"prp\">badge</span>(<span class=\"str\">\"Label\"</span>))\n    .<span class=\"fn\">ebDescription</span>(<span class=\"str\">\"Description goes here\"</span>)\n    .<span class=\"fn\">ebTextLink</span>(<span class=\"str\">\"CTA\"</span>) { openDetails() }",
        "compose": "<span class=\"cmt\">// Type=Badge, hasDescription=True, hasTextLink=True — 5652:36979, 368 × 44. 48 × 18 Badge.</span>\n<span class=\"typ\">EBInlineText</span>(\n    label = <span class=\"str\">\"Label\"</span>,\n    value = <span class=\"str\">\"0.00\"</span>,\n    trailing = <span class=\"typ\">EBInlineTextTrailing</span>.<span class=\"prp\">Badge</span>(<span class=\"str\">\"Label\"</span>),\n    description = <span class=\"str\">\"Description goes here\"</span>,\n    linkLabel = <span class=\"str\">\"CTA\"</span>,\n    onLinkClick = { openDetails() }\n)"
      },
      {
        "subheading": "Checkmark",
        "swift": "<span class=\"cmt\">// Type=Checkmark, hasDescription=True, hasTextLink=True — 5652:37190, 368 × 44. 16 × 16 checkmark.</span>\n<span class=\"typ\">EBInlineText</span>(label: <span class=\"str\">\"Label\"</span>, value: <span class=\"str\">\"0.00\"</span>)\n    .<span class=\"fn\">ebTrailing</span>(.<span class=\"prp\">checkmark</span>)\n    .<span class=\"fn\">ebDescription</span>(<span class=\"str\">\"Description goes here\"</span>)\n    .<span class=\"fn\">ebTextLink</span>(<span class=\"str\">\"CTA\"</span>) { openDetails() }",
        "compose": "<span class=\"cmt\">// Type=Checkmark, hasDescription=True, hasTextLink=True — 5652:37190, 368 × 44. 16 × 16 checkmark.</span>\n<span class=\"typ\">EBInlineText</span>(\n    label = <span class=\"str\">\"Label\"</span>,\n    value = <span class=\"str\">\"0.00\"</span>,\n    trailing = <span class=\"typ\">EBInlineTextTrailing</span>.<span class=\"prp\">Checkmark</span>,\n    description = <span class=\"str\">\"Description goes here\"</span>,\n    linkLabel = <span class=\"str\">\"CTA\"</span>,\n    onLinkClick = { openDetails() }\n)"
      },
      {
        "subheading": "Slot",
        "swift": "<span class=\"cmt\">// Type=Slot, hasDescription=True, hasTextLink=True — 5652:37563, 368 × 44. 24 × 24 slot, consumer content.</span>\n<span class=\"typ\">EBInlineText</span>(label: <span class=\"str\">\"Label\"</span>, value: <span class=\"str\">\"0.00\"</span>)\n    .<span class=\"fn\">ebTrailing</span>(.<span class=\"prp\">slot</span> { <span class=\"typ\">Image</span>(<span class=\"str\">\"info\"</span>) })\n    .<span class=\"fn\">ebDescription</span>(<span class=\"str\">\"Description goes here\"</span>)\n    .<span class=\"fn\">ebTextLink</span>(<span class=\"str\">\"CTA\"</span>) { openDetails() }",
        "compose": "<span class=\"cmt\">// Type=Slot, hasDescription=True, hasTextLink=True — 5652:37563, 368 × 44. 24 × 24 slot, consumer content.</span>\n<span class=\"typ\">EBInlineText</span>(\n    label = <span class=\"str\">\"Label\"</span>,\n    value = <span class=\"str\">\"0.00\"</span>,\n    trailing = <span class=\"typ\">EBInlineTextTrailing</span>.<span class=\"prp\">Slot</span> { <span class=\"typ\">Icon</span>(<span class=\"typ\">EBIcons</span>.<span class=\"prp\">Info</span>, contentDescription = null) },\n    description = <span class=\"str\">\"Description goes here\"</span>,\n    linkLabel = <span class=\"str\">\"CTA\"</span>,\n    onLinkClick = { openDetails() }\n)"
      },
      {
        "subheading": "Bare row",
        "swift": "<span class=\"cmt\">// hasDescription=False, hasTextLink=False, hasTrailingElement=False — 368 × 24. Label fills to 334.</span>\n<span class=\"typ\">EBInlineText</span>(label: <span class=\"str\">\"Label\"</span>, value: <span class=\"str\">\"0.00\"</span>)",
        "compose": "<span class=\"cmt\">// hasDescription=False, hasTextLink=False, hasTrailingElement=False — 368 × 24. Label fills to 334.</span>\n<span class=\"typ\">EBInlineText</span>(\n    label = <span class=\"str\">\"Label\"</span>,\n    value = <span class=\"str\">\"0.00\"</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Label-value pair",
        "ios": "Combine <code>Label</code> and <code>Value</code> with <code>.accessibilityElement(children: .combine)</code> so the row reads “Amount, 1,500.00”. The copy icon and link stay separate elements.",
        "android": "Merge the pair with <code>Modifier.semantics(mergeDescendants = true)</code>; keep the copy icon and link as their own nodes."
      },
      {
        "requirement": "Copy icon",
        "ios": "Label the icon “Copy”, with the value in the hint. Figma has no pressed state or success feedback (ruled out of scope, v2.2), so announce “Copied” with <code>UIAccessibility.post(notification: .announcement, …)</code>.",
        "android": "Set <code>contentDescription = \"Copy\"</code> and <code>onClickLabel</code>; announce the result with <code>announceForAccessibility</code> or a Snackbar."
      },
      {
        "requirement": "Touch targets",
        "ios": "The copy icon is 24 × 24 and the “CTA” link 21 × 18 — both under 44pt. Extend the hit area with <code>.contentShape</code>.",
        "android": "Both under 48dp. Use <code>Modifier.minimumInteractiveComponentSize()</code>."
      },
      {
        "requirement": "Checkmark and Badge meaning",
        "ios": "The checkmark carries no text. Give it a label such as “Verified”, or hide it when the Value already says so. The Badge label reads as text.",
        "android": "<code>contentDescription</code> on the checkmark; Badge text is read as-is."
      },
      {
        "requirement": "Contrast",
        "ios": "Label #0A2757 on white is 14.58:1; Value #445C85 is 6.74:1; Description #6780A9 is 4.01:1 at 12pt, below 4.5:1. Link #005CE5 is 5.73:1.",
        "android": "Same ratios."
      },
      {
        "requirement": "Dynamic Type / font scaling",
        "ios": "The row is a fixed 24 or 44pt. Let it grow, and let a long Label wrap rather than push the Value off the edge.",
        "android": "Use <code>sp</code>; don’t set <code>maxLines = 1</code> on the Label."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Inline Text for a label-value detail inside a card, receipt or confirmation list.",
        "dontText": "Don’t use it as a list item with navigation — it has no chevron or row tap."
      },
      {
        "doText": "Stack rows inside a parent that owns spacing and dividers. The row has no padding and no separator.",
        "dontText": "Don’t add padding inside the row to separate stacked rows."
      },
      {
        "doText": "Pick <code>Type</code> for the trailing element: Copy Icon for copyable references, Badge for a status, Checkmark for confirmation.",
        "dontText": "Don’t put a Badge or icon into <code>Slot</code> when a named Type already covers it."
      },
      {
        "doText": "Keep the link label short — it sits at x 345 with 21px of room at the sample text.",
        "dontText": "Don’t use a long sentence as the link; it will collide with the Description."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>MainRow</code>, <code>ValueGroup</code>, <code>SupportingRow</code>, <code>DescriptionGroup</code>, <code>Label</code>, <code>Value</code>, <code>Description</code>, <code>LinkLabel</code> — all semantic (v2.1–v2.2). Inside the nested Badge the text layer is still <code>#label</code>, and the icon wrappers carry <code>container</code> and <code>Grid</code>; those belong to the Badge and icon components."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>Type</code> is a clean enum and <code>Slot</code> is an owner decision (v2.2). But the three booleans use two mechanisms: <code>hasDescription</code> and <code>hasTextLink</code> are <strong>variants</strong> with Title Case <code>True</code>/<code>False</code>, while <code>hasTrailingElement</code> is a <strong>boolean property</strong>. The panel also orders them differently — <code>False, True</code> against <code>True, False</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All text layers resolve <code>matched</code> — <code>Primary/Label/Light/Base</code> for Label and Value, <code>Secondary/Bold/Caption</code> for Description and LinkLabel, <code>Primary/Label/Fine</code> for the Badge label. Colour bindings cannot be read with the plugin, so the token column is <code>—</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Two rows — label/value/trailing over description/link — map to one <code>EBInlineText</code> with an optional trailing enum and optional strings. Whole-pixel geometry throughout: 368 wide, 24 or 44 tall."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Pressed states for the nested copy icon and link were ruled out of scope by owner decision (v2.2), pending a family-level decision."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Copy and Checkmark are vector DS icons and Badge a real instance, all routed through <code>Trailing Elements</code> (v2.0–v2.1). <code>Type=Slot</code> is a true SLOT."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "No longer blocked — the restructure landed in v2.0. No SwiftUI or Compose mappings are registered; the native library does not exist."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 16,
      "description": "<code>Type</code> (4) × <code>hasDescription</code> (2) × <code>hasTextLink</code> (2) = 16 variants, a complete matrix. <code>hasTrailingElement</code> is a boolean property and adds none. Every variant is 368 wide; only the bare row drops to 24.",
      "columns": [
        "Type",
        "hasDescription",
        "hasTextLink",
        "Node ID",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "Copy Icon",
            "<code>True</code>",
            "<code>True</code>",
            "<code>4419:20913</code>",
            "368 × 44"
          ]
        },
        {
          "cells": [
            "Copy Icon",
            "<code>True</code>",
            "<code>False</code>",
            "<code>5643:34601</code>",
            "368 × 44"
          ]
        },
        {
          "cells": [
            "Copy Icon",
            "<code>False</code>",
            "<code>True</code>",
            "<code>4419:24516</code>",
            "368 × 44"
          ]
        },
        {
          "cells": [
            "Copy Icon",
            "<code>False</code>",
            "<code>False</code>",
            "<code>5643:34623</code>",
            "368 × 24"
          ]
        },
        {
          "cells": [
            "Badge",
            "<code>True</code>",
            "<code>True</code>",
            "<code>5652:36979</code>",
            "368 × 44"
          ]
        },
        {
          "cells": [
            "Badge",
            "<code>True</code>",
            "<code>False</code>",
            "<code>5652:36989</code>",
            "368 × 44"
          ]
        },
        {
          "cells": [
            "Badge",
            "<code>False</code>",
            "<code>True</code>",
            "<code>5652:36998</code>",
            "368 × 44"
          ]
        },
        {
          "cells": [
            "Badge",
            "<code>False</code>",
            "<code>False</code>",
            "<code>5652:37006</code>",
            "368 × 24"
          ]
        },
        {
          "cells": [
            "Checkmark",
            "<code>True</code>",
            "<code>True</code>",
            "<code>5652:37190</code>",
            "368 × 44"
          ]
        },
        {
          "cells": [
            "Checkmark",
            "<code>True</code>",
            "<code>False</code>",
            "<code>5652:37200</code>",
            "368 × 44"
          ]
        },
        {
          "cells": [
            "Checkmark",
            "<code>False</code>",
            "<code>True</code>",
            "<code>5652:37209</code>",
            "368 × 44"
          ]
        },
        {
          "cells": [
            "Checkmark",
            "<code>False</code>",
            "<code>False</code>",
            "<code>5652:37217</code>",
            "368 × 24"
          ]
        },
        {
          "cells": [
            "Slot",
            "<code>True</code>",
            "<code>True</code>",
            "<code>5652:37563</code>",
            "368 × 44"
          ]
        },
        {
          "cells": [
            "Slot",
            "<code>True</code>",
            "<code>False</code>",
            "<code>5652:37573</code>",
            "368 × 44"
          ]
        },
        {
          "cells": [
            "Slot",
            "<code>False</code>",
            "<code>True</code>",
            "<code>5652:37582</code>",
            "368 × 44"
          ]
        },
        {
          "cells": [
            "Slot",
            "<code>False</code>",
            "<code>False</code>",
            "<code>5652:37590</code>",
            "368 × 24"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.2.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Style + Code tabs rebuilt against the live component · node 4419:24515",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt to one card with the Figma property panel.</strong> Five cards on retired <code>21:*</code> nodes — named for the old <code>type</code> values — carried an invented <code>State</code> axis with Pressed and Disabled colours and a Label preset picker. Now one card with <code>Type</code>, <code>hasDescription</code>, <code>hasTextLink</code> and <code>hasTrailingElement</code>, with the Trailing Elements instance listed.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Token paths and pressed colours had no reading behind them.</strong> <code>inline-text/color/*</code> tokens and #072592 / #003EA0 pressed values were listed; the plugin reads no bindings and Figma has no pressed state. Removed — the token column is <code>—</code>.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Typography now names text styles.</strong> Label and Value resolve <code>Primary/Label/Light/Base</code>, Description and LinkLabel <code>Secondary/Bold/Caption</code>, the Badge label <code>Primary/Label/Fine</code> — all matched.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>The Code tab still described the 1.0.0 component.</strong> Five retired <code>type</code> values and 5 variants; rebuilt on 16 variants with snippets per Type and a bare row.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Scorecard contradicted the resolved record.</strong> Rescored against v2.0–v2.2: C3, C4, C6 Ready; C5 Not Applicable (owner decision v2.2); C1 and C2 Needs Refinement on new findings; C7 no longer blocked.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Booleans use two mechanisms.</strong> <code>hasDescription</code> and <code>hasTextLink</code> are variants; <code>hasTrailingElement</code> is a boolean property. Their value order also differs in the panel. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong><code>hasTrailingElement</code> binding not readable.</strong> Documented as hiding the Trailing Elements instance, which its name describes; the layer it toggles could not be confirmed. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>Nested layers still carry generic names</strong> — <code>#label</code> inside Badge, <code>container</code> and <code>Grid</code> inside the icons. Owned by those components. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>Description fails AA contrast</strong> — #6780A9 on white is 4.01:1 at 12pt. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "A11y"
          }
        },
        {
          "body": "<strong>Slot variants sit 3px higher on the canvas</strong> than the other columns. Placement only — no effect on instances. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>v2.0.0 through v2.2.0 have no changelog entries.</strong> The Overview records ten resolutions across those versions, but the changelog jumps from 1.0.0 to here. Their dates are not recorded anywhere readable, so they are not invented. <span class=\"tag-open\">Open</span>",
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
      "header": "Initial Assessment · node 18652:71101",
      "rows": [
        {
          "body": "<strong>Verdict: Restructure</strong> — Replace <code>type</code> enum (5 layouts) with orthogonal booleans + unified trailing slot. Instance-swap Badge. Add pressed state on copy icon. <span class=\"tag-open tag-c1 tag-c2 tag-c5 tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Architecture"
          }
        },
        {
          "body": "<strong>C1 — Type enum hides compositions</strong> — 5 <code>type</code> values conflate two axes (trailing slot + sub-row). Split into <code>hasCopy</code>, <code>hasDescription</code>, <code>hasTextLink</code>, unified <code>trailing</code> slot. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C2 — \"with X\" value phrasing</strong> — Figma enum values describe what's added, not what the row IS. Rename under boolean-prop schema. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C6 — Badge drawn inline</strong> — <code>with Badge</code> hardcodes information/light fill + label instead of instance-swapping Badge. Parallel source of truth. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C5 — Copy / link pressed states</strong> — Copy icon and text link have no pressed tint, focus ring, or success feedback hook. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>Tokens ✓</strong> — All four semantic color roles (<code>label</code>, <code>label-value</code>, <code>description</code>, <code>label-link</code>) plus <code>icon</code> bound correctly. <span class=\"tag-fixed\">Noted</span>",
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
