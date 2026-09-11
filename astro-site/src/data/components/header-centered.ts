import type { ComponentData, DemoControlSection } from '../types';

// Panel mirrors the only variant axis of set 4368:12839. The tab previously
// had no panel at all — two cards named for the surfaces instead.
const pageBannerDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Surface',
        prop: 'surface',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'brand', label: 'Brand' },
        ],
      },
    ],
  },
];

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/header-centered.js`.

export const headerCentered: ComponentData = {
  "meta": {
    "slug": "header-centered",
    "name": "Page Banner",
    "node": "4368:12839",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4368-12839",
    "description": "A header variant with the title centered, optional leading and trailing actions on either side.",
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
    "navGroup": "Header",
    "verdict": {
      "kind": "keep",
      "title": "Keep — all findings resolved",
      "text": "Rebuilt on node <code>4368:12839</code> in the 2026 Working File as <strong>Page Banner</strong>, with <code>Surface = Brand | Default</code> replacing the old <code>type = dark | light</code>. Layer naming is now settled across both variants — <code>Content</code> wrapping <code>Title</code> and a <code>SubtitleRow</code> of <code>Label</code> and <code>Value</code> — which lets the title expose as a single text property and clears the legacy <code>#</code> prefix. The brand surface color and its alpha values are confirmed intentional, the remaining alignment difference is inert because the text node hugs its content, and an <code>Alignment</code> axis was decided against. All four DS Health traits pass; the only item still open is Code Connect, blocked until the native library exists."
    }
  },
  "overview": {
    "inContextNote": "Page Banner sits at the top of a screen, modal, or feature card — centered, taking full width, setting the title of the surface below it.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"header-centered-demo-preview\"><div class=\"eb-preview eb-preview-header-centered eb-preview-header-centered--brand\"><p class=\"eb-preview-header-centered__title\">Label</p><p class=\"eb-preview-header-centered__sublabel\"><span class=\"eb-preview-header-centered__sublabel-key\">Label:</span><span class=\"eb-preview-header-centered__sublabel-value\">&nbsp;Add Content</span></p></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Surface</span><select id=\"header-centered-ctrl-surface\" class=\"demo-panel-select\" onchange=\"_headerCenteredUpdate()\"><option value=\"brand\" selected=\"\">Brand</option><option value=\"default\">Default</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Generic page banner — works at the top of any screen, modal or feature card. Nothing ties it to one surface."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its typography, fills and border. Nothing external required to render."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "The <em>Header</em> prefix, the appearance-named property and the layer naming are all resolved. <code>Surface = Brand | Default</code> is PascalCase per §1 with Title Case values per §5, and the text layers map onto the §3 vocabulary as <code>Title</code> · <code>Label</code> · <code>Value</code>, identically in both variants."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Drops into any screen, modal or card as a page title, and composes nothing it should not."
      }
    ],
    "behavior": [
      {
        "state": "Default (Brand)",
        "ios": "yes",
        "android": "yes",
        "property": "Surface=Brand",
        "notes": "White title on the brand surface."
      },
      {
        "state": "Default (Default)",
        "ios": "yes",
        "android": "yes",
        "property": "Surface=Default",
        "notes": "Dark title on the default white surface."
      },
      {
        "state": "Pressed",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Banner is informational — no pressed state."
      },
      {
        "state": "Disabled",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Not interactive."
      }
    ],
    "resolved": [
      {
        "headline": "Renamed to Page Banner.",
        "body": "v2.0: Rebuilt on node <code>4368:12839</code> in the 2026 Working File. The name no longer sits in the <em>Header</em> namespace that four structurally different components were sharing, and it says what the component is — a full-width banner setting the title of the surface below it, not a navigation bar. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>type = dark | light</code> replaced by <code>Surface</code>.",
        "body": "v2.0: The axis now reads <code>Surface = Brand | Default</code>, naming the surface role rather than the appearance that follows from it — the same shape Brand App Bar landed on, so the two read consistently across the family. PascalCase property per §1, Title Case values per §5. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Layer names settled across both variants.",
        "body": "v2.1: Verified on the live node. <code>header</code> → <code>Content</code>; the 22px title, previously <code>#name</code> in Brand and <code>#label</code> in Default, is now <code>Title</code> in both; <code>text-container</code> → <code>SubtitleRow</code>, holding <code>Label</code> and <code>Value</code>. Three problems closed at once: the cross-variant mismatch that stopped the title exposing as a single text property, the duplicate <code>#label</code> inside the Default variant, and the legacy <code>#</code> prefix. Names now follow the §3 vocabulary. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Brand surface color and its alpha values confirmed intentional.",
        "body": "v2.1: The brand fill <code>#1972F9</code> differs from Brand App Bar’s <code>#005CE5</code>, and the brand sub-row key and border are <code>#F6F9FD</code> at 72% and 24%. Confirmed by the owner as bound to generic tokens and deliberate rather than local overrides — the two surfaces serve different jobs, and a banner sitting above content is not required to match the app bar’s blue. Attested rather than verified: variable bindings and opacity tokens are not readable through the review tooling, so this is recorded on the owner’s confirmation. (C3 · Token)",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "Sub-row alignment difference is inert.",
        "body": "v2.1: The sub-row key still reads <code>LEFT</code> on Brand and <code>CENTER</code> on Default, but the text node hugs its content — 36px wide for “Label:” inside a 119px row — so horizontal alignment inside it has nothing to distribute and produces no visual difference on either surface. A leftover value rather than a behavioural one, and nothing a native implementation has to reproduce. (C4)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "No <code>Alignment</code> property.",
        "body": "v2.1: Decided against. A centered banner is what the component is for; a left-aligned title is a different component’s job, and adding the axis would double the set to serve a case nobody has asked for. Closed rather than carried forward a third time. (Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Sub-row composition confirmed as intended.",
        "body": "v2.1: The <code>SubtitleRow</code> is present in both live variants; the owner confirms the current composition is the intended one, closing the question left over from the old <code>description = yes | no</code> control. Attested rather than verified — component property definitions are not readable through the review tooling. (Docs)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Place in the header family settled.",
        "body": "v2.1: Page Banner is confirmed a distinct component, not a variant of another. It sets the title of the surface below it; <strong>Section Header</strong> labels a section inside a scroll, <strong>Brand App Bar</strong> carries the wordmark, and <strong>Title Bar - App</strong> carries navigation. Four different jobs, four components, none folding into another. Siblings: <a href=\"#\" onclick=\"showPanelById('header');return false;\">Section Header</a> · <a href=\"#\" onclick=\"showPanelById('header-with-logo');return false;\">Brand App Bar</a> · <a href=\"#\" onclick=\"showPanelById('header-transaction');return false;\">Detail Hero</a>. (Family)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      }
    ],
"open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — no native library exists yet. The schema is small once one does: a single <code>Surface</code> enum over a title and a sub-row.",
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
        "cardKey": "pb-spec-main",
        "demoKey": "main",
        "title": "Page Banner",
        "node": "4368:12839",
        "description": "",
        "previewHtml": "<div id=\"page-banner-spec-main\" class=\"spec-preview-body\"><svg width=\"360\" height=\"104\" viewBox=\"0 0 360 104\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"360\" height=\"104\" fill=\"#FFFFFF\"/><rect y=\"103\" width=\"360\" height=\"1\" fill=\"#E5EBF4\" fill-opacity=\"1\"/><text class=\"pb-title\" x=\"180\" y=\"37\" font-size=\"22\" font-weight=\"700\" fill=\"#0A2757\" text-anchor=\"middle\" dominant-baseline=\"central\">Label</text><text class=\"pb-barkada\" x=\"120.5\" y=\"60\" font-size=\"14\" font-weight=\"600\" fill=\"#6780A9\" fill-opacity=\"1\" dominant-baseline=\"central\">Label:</text><text class=\"pb-barkada\" x=\"158.5\" y=\"60\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\" dominant-baseline=\"central\">Add Content</text></svg></div>",
        "demoControls": pageBannerDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Surface",
                "value": "Default",
                "prop": "surface"
              },
              {
                "key": "Content",
                "value": "Title over a SubtitleRow of Label + Value",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Surface",
                "value": "#FFFFFF",
                "token": "—",
                "variants": {
                  "surface:brand": {
                    "value": "#1972F9"
                  }
                }
              },
              {
                "key": "Border",
                "value": "#E5EBF4",
                "token": "—",
                "variants": {
                  "surface:brand": {
                    "value": "#F6F9FD @ 24%"
                  }
                }
              },
              {
                "key": "Title",
                "value": "#0A2757",
                "token": "—",
                "variants": {
                  "surface:brand": {
                    "value": "#FFFFFF"
                  }
                }
              },
              {
                "key": "Subtitle label",
                "value": "#6780A9",
                "token": "—",
                "variants": {
                  "surface:brand": {
                    "value": "#F6F9FD @ 72%"
                  }
                }
              },
              {
                "key": "Subtitle value",
                "value": "#0A2757",
                "token": "—",
                "variants": {
                  "surface:brand": {
                    "value": "#FFFFFF"
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
                "key": "Title",
                "value": "Primary/Headlines/Section",
                "mono": true
              },
              {
                "key": "Subtitle label",
                "value": "Secondary/Bold/Base",
                "mono": true
              },
              {
                "key": "Subtitle value",
                "value": "Secondary/Bold/Base",
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
                "value": "104px — fixed on both variants",
                "mono": true
              },
              {
                "key": "Width",
                "value": "360px",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "None",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "24px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "24px top · 34px bottom",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "0 — Title and SubtitleRow abut",
                "mono": true
              },
              {
                "key": "Content",
                "value": "312 × 46",
                "mono": true
              },
              {
                "key": "Border",
                "value": "1px, bottom edge only",
                "mono": true
              },
              {
                "key": "Alignment",
                "value": "Center — Title and SubtitleRow are both centred",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBPageBanner</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Label:\"</span><span class=\"syn-punc\">,</span>\n    value<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Add Content\"</span>\n<span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">.</span>ebSurface<span class=\"syn-punc\">(.</span>default<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBPageBanner</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label:\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Add Content\"</span><span class=\"syn-punc\">,</span>\n    surface <span class=\"syn-eq\">=</span> EBBannerSurface<span class=\"syn-punc\">.</span>Default\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Surface",
        "description": "Read off <code>get_node_info</code> and <code>get_svg</code> on both variants of set <code>4368:12839</code>. <strong>The border is a 1px bottom edge, not an outline</strong> — the stroke is declared on the node but Figma exports it as a masked band along the bottom only, the same pattern as Segmented Control Button. Brand is <code>#1972F9</code>, matching Detail Hero but not Brand App Bar’s <code>#005CE5</code>. Token paths could not be read; the plugin returns no variable bindings.",
        "columns": [
          "Token",
          "Value"
        ],
        "rows": [
          {
            "role": "Default",
            "token": "Surface",
            "values": [
              "—",
              "#FFFFFF"
            ]
          },
          {
            "role": "—",
            "token": "Border · bottom",
            "values": [
              "—",
              "#E5EBF4"
            ]
          },
          {
            "role": "—",
            "token": "Title",
            "values": [
              "—",
              "#0A2757"
            ]
          },
          {
            "role": "—",
            "token": "Subtitle label",
            "values": [
              "—",
              "#6780A9"
            ]
          },
          {
            "role": "—",
            "token": "Subtitle value",
            "values": [
              "—",
              "#0A2757"
            ]
          },
          {
            "role": "Brand",
            "token": "Surface",
            "values": [
              "—",
              "#1972F9"
            ]
          },
          {
            "role": "—",
            "token": "Border · bottom",
            "values": [
              "—",
              "#F6F9FD @ 24%"
            ]
          },
          {
            "role": "—",
            "token": "Title",
            "values": [
              "—",
              "#FFFFFF"
            ]
          },
          {
            "role": "—",
            "token": "Subtitle label",
            "values": [
              "—",
              "#F6F9FD @ 72%"
            ]
          },
          {
            "role": "—",
            "token": "Subtitle value",
            "values": [
              "—",
              "#FFFFFF"
            ]
          }
        ]
      }
    ]
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": []
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "(implicit)",
          "swift": "<code>title: String</code>",
          "compose": "<code>title: String</code>"
        },
        {
          "figma": "<code>description: boolean</code>",
          "swift": "<code>description?: String</code>",
          "compose": "<code>description: String?</code>"
        },
        {
          "figma": "<code>type: dark | light</code>",
          "swift": "<code>surface: brand | default</code>",
          "compose": "<code>.ebSurface(.brand)</code> modifier"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Heading trait",
        "ios": "<code>.accessibilityAddTraits(.isHeader)</code> on the title.",
        "android": "<code>Modifier.semantics { heading() }</code> on the title."
      },
      {
        "requirement": "Contrast",
        "ios": "Brand surface: white on #005CE5 = 8.5:1 ✓. Default surface: #0A2757 on #FFFFFF = 15.4:1 ✓.",
        "android": "Same contrast ratios apply."
      },
      {
        "requirement": "Screen reader order",
        "ios": "Title → Description. VoiceOver reads in DOM order.",
        "android": "Same — TalkBack follows composition order."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Rename to <strong>Page Banner</strong>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Rename <code>type=dark|light</code> → <code>surface=brand|default</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Surface and text tokens bound."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps cleanly to a <code>EBPageBanner</code> view/composable."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Static — no interactive states."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "No assets."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Trivial once renamed."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 4,
      "description": "<code>type</code> × <code>description</code> = <strong>4 variants</strong>.",
      "columns": [
        "#",
        "Node",
        "type",
        "description",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "<code>18430:2859</code>",
            "dark",
            "yes",
            "360 × 104"
          ]
        },
        {
          "cells": [
            "2",
            "<code>18430:2865</code>",
            "light",
            "yes",
            "360 × 104"
          ]
        },
        {
          "cells": [
            "3",
            "<code>18430:2871</code>",
            "dark",
            "no",
            "360 × 84"
          ]
        },
        {
          "cells": [
            "4",
            "<code>18430:2873</code>",
            "light",
            "no",
            "360 × 84"
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
      "header": "Initial Assessment · node 18430:2858",
      "rows": [
        {
          "body": "<strong>Verdict: Restructure</strong> — Rename to <strong>Page Banner</strong>. Swap <code>type=dark|light</code> for <code>surface=brand|default</code>. <span class=\"tag-open tag-c1 tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Naming"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Trivial mapping once renamed. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
