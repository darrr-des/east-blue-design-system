import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/header.js`.
const headerDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'preamble',
        prop: 'preamble',
        options: [
          { value: 'no', label: 'no' },
          { value: 'yes', label: 'yes' },
        ],
      },
      {
        label: 'description',
        prop: 'description',
        options: [
          { value: 'no', label: 'no' },
          { value: 'yes', label: 'yes' },
        ],
      },
      {
        label: 'leading',
        prop: 'leading',
        options: [
          { value: 'none', label: 'none' },
          { value: 'icon', label: 'icon' },
          { value: 'illustration', label: 'illustration' },
        ],
      },
      {
        label: 'trailing',
        prop: 'trailing',
        options: [
          { value: 'none', label: 'none' },
          { value: 'illustration', label: 'illustration' },
          { value: 'link', label: 'link' },
          { value: 'edit', label: 'edit' },
          { value: 'counter', label: 'counter' },
        ],
      },
    ],
  },
];

export const header: ComponentData = {
  "meta": {
    "slug": "header",
    "name": "Header",
    "node": "18430:2919",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18430-2919",
    "description": "The top-of-screen header pattern with title, leading back action, and trailing actions.",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Header",
    "verdict": {
      "kind": "restructure",
      "title": "Restructure — rename, split, and collapse the variant matrix",
      "text": "Today four components share the \"Header\" prefix but solve four different problems. The base Header (this one) should be renamed <strong>Section Header</strong>, its 8 boolean slots collapsed into 3 props (<code>preamble</code>, <code>leadingMedia</code>, <code>trailing</code>), and the sibling \"Header - *\" components either renamed by role or merged into existing primitives. See the <strong>Family Restructure</strong> section below for the full plan."
    }
  },
  "overview": {
    "inContextNote": "Section headers sit above grouped content — a list of transactions, a set of services, a carousel of offers — to label the section and optionally expose a trailing action.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"header-demo-preview\"><div class=\"eb-preview eb-preview-header\"><div class=\"eb-preview-header__content\"><p class=\"eb-preview-header__title\">Heading</p><p class=\"eb-preview-header__desc\">Description goes here</p></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">preamble</span><select id=\"header-ctrl-preamble\" class=\"demo-panel-select\" onchange=\"_headerUpdate()\"><option value=\"no\">no</option><option value=\"yes\">yes</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><select id=\"header-ctrl-description\" class=\"demo-panel-select\" onchange=\"_headerUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">leading media</span><select id=\"header-ctrl-leading\" class=\"demo-panel-select\" onchange=\"_headerUpdate()\"><option value=\"none\" selected=\"\">none</option><option value=\"icon\">icon</option><option value=\"illustration\">illustration</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">trailing</span><select id=\"header-ctrl-trailing\" class=\"demo-panel-select\" onchange=\"_headerUpdate()\"><option value=\"none\" selected=\"\">none</option><option value=\"illustration\">illustration</option><option value=\"link\">link</option><option value=\"edit\">edit</option><option value=\"counter\">counter</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "Works across many screen sections, but boolean slots force consumers to think in invalid combinations (icon + left illustration + right illustration all true?)."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its typography, spacing, and color tokens. No external state required."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "The \"Header\" name is shared with three structurally different components (Centered, With Logo, Transaction). Property model (8 booleans) conflicts with the enum-slot model used by other components in the DS."
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "Actionable slots (link, edit, counter) are drawn in-place rather than accepting Button/Badge/Link instances. Consumers can't swap in their own action component."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "16 variants",
        "notes": "The only state today — no pressed/disabled/focused."
      },
      {
        "state": "Trailing action pressed",
        "ios": "na",
        "android": "na",
        "property": "Not modeled",
        "notes": "Link, edit, counter should be real Button/Link instances that carry their own pressed state."
      },
      {
        "state": "Disabled",
        "ios": "na",
        "android": "na",
        "property": "Not modeled",
        "notes": "Section headers are informational — no disabled variant needed."
      },
      {
        "state": "Focused (a11y)",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Focus lives on the trailing action, not the header itself."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Family-wide naming conflict.",
        "body": "\"Header\" prefix conflates 4 roles (section header, page banner, brand bar, detail hero). Rename each by role.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "8 boolean props, 256 theoretical combos, 16 built.",
        "body": "The boolean model implies combinations that don't exist. Collapse <code>icon</code> + <code>left illustration</code> into <code>leadingMedia</code>, and <code>right illustration</code> + <code>link</code> + <code>edit</code> + <code>counter</code> into <code>trailing</code>.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Trailing actions aren't real components.",
        "body": "Link (\"View All\"), Edit, and Counter are drawn in-place rather than accepting Button / Badge / Link instances. Breaks composition and blocks state handling (pressed, disabled).",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "No pressed/disabled states",
        "body": "on the actionable slots. Natively, those slots need full state coverage — at minimum pressed + disabled.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "No Code Connect mappings.",
        "body": "Trivial once slots are enumerated.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Rename to \"Section Header\".",
        "body": "Unambiguously signals in-screen section title; frees \"Header\" namespace.",
        "tag": "Rename"
      },
      {
        "headline": "Collapse to 3 props",
        "body": "— <code>preamble?</code>, <code>leadingMedia?: icon | illustration</code>, <code>trailing?: illustration | link | edit | counter</code> — plus the required <code>title</code>. Eliminates invalid combos, drops variant count from 16 to ~6 canonical patterns.",
        "tag": "Property"
      },
      {
        "headline": "Promote actionable slots to real components.",
        "body": "\"View All\" becomes a <strong>Text Button</strong> instance. \"Edit\" becomes an <strong>Icon Button</strong>. \"Counter\" becomes a <strong>Badge</strong> instance. Each carries its own pressed/disabled states.",
        "tag": "Composition"
      },
      {
        "headline": "Move \"Header - Transaction\" out of the family.",
        "body": "It's a card hero, not a header. Rename to Detail Hero and rehome near Visual Popup.",
        "tag": "Family"
      },
      {
        "headline": "Merge \"Header - With Logo\" into Title Bar.",
        "body": "Add <code>leading = title | logo</code> slot to Title Bar instead of maintaining a second app-bar component.",
        "tag": "Family"
      },
      {
        "headline": "See siblings:",
        "body": "<a href=\"#\" onclick=\"showPanelById('header-centered');return false;\">Header - Centered</a>, <a href=\"#\" onclick=\"showPanelById('header-with-logo');return false;\">Header - With Logo</a>, <a href=\"#\" onclick=\"showPanelById('header-transaction');return false;\">Header - Transaction</a>. Restructure is a family-wide decision.",
        "tag": "Family"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "title-only-(baseline)",
        "demoKey": "title-only",
        "demoControls": headerDemoControls,
        "title": "Title only (baseline)",
        "node": "18430:2932",
        "description": "The simplest variant — a bare title. This is the baseline the other 15 variants layer slots onto.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"header-spec-1\"><div class=\"eb-preview eb-preview-header\"><div class=\"eb-preview-header__content\"><p class=\"eb-preview-header__title\">Heading</p></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "preamble",
                "value": "no",
                "prop": "preamble",
                "mono": true
              },
              {
                "key": "description",
                "value": "no",
                "prop": "description",
                "mono": true
              },
              {
                "key": "leading",
                "value": "none",
                "prop": "leading",
                "mono": true
              },
              {
                "key": "trailing",
                "value": "none",
                "prop": "trailing",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "header/color/default/bg" },
              { "key": "Title", "value": "#0A2757", "token": "header/color/default/label-header" },
              { "key": "Preamble", "value": "#005CE5", "token": "header/color/default/label-preamble" },
              { "key": "Description", "value": "#6780A9", "token": "header/color/default/description" },
              { "key": "Link", "value": "#005CE5", "token": "header/color/default/label-link" },
              { "key": "Icon", "value": "#005CE5", "token": "header/color/default/icon" }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Title style",
                "value": "Heading/L — BarkAda 18/24",
                "mono": true
              },
              {
                "key": "Color",
                "value": "text/primary · #0A2757",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Width",
                "value": "Fill",
                "mono": true
              },
              {
                "key": "Height",
                "value": "58 (hug)",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "0",
                "mono": true
              },
              {
                "key": "Gap (stacked slots)",
                "value": "space/space-4",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBHeader</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Page title\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBHeader</span><span class=\"syn-punc\">(</span>title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Page title\"</span><span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "full-stack-(preamble-+-title-+-description)",
        "demoKey": "full-stack",
        "demoControls": headerDemoControls,
        "title": "Full stack (preamble + title + description)",
        "node": "18430:2920",
        "description": "All three text slots filled. This is the canonical \"announce a section\" pattern.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"header-spec-2\"><div class=\"eb-preview eb-preview-header\"><div class=\"eb-preview-header__content\"><p class=\"eb-preview-header__preamble\">Preamble</p><p class=\"eb-preview-header__title\">Heading</p><p class=\"eb-preview-header__desc\">Description goes here</p></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "preamble",
                "value": "yes",
                "prop": "preamble",
                "mono": true
              },
              {
                "key": "description",
                "value": "yes",
                "prop": "description",
                "mono": true
              },
              {
                "key": "leading",
                "value": "none",
                "prop": "leading",
                "mono": true
              },
              {
                "key": "trailing",
                "value": "none",
                "prop": "trailing",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "header/color/default/bg" },
              { "key": "Preamble", "value": "#005CE5", "token": "header/color/default/label-preamble" },
              { "key": "Title", "value": "#0A2757", "token": "header/color/default/label-header" },
              { "key": "Description", "value": "#6780A9", "token": "header/color/default/description" },
              { "key": "Icon", "value": "#005CE5", "token": "header/color/default/icon" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Padding",
                "value": "24 horizontal · 16 vertical",
                "mono": true
              },
              {
                "key": "Title size",
                "value": "22 / 26",
                "mono": true
              },
              {
                "key": "Preamble size",
                "value": "14 / 14",
                "mono": true
              },
              {
                "key": "Description size",
                "value": "12 / 18",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Preamble",
                "value": "Label/S caps · 12/16 · text/brand",
                "mono": true
              },
              {
                "key": "Title",
                "value": "Heading/L · 18/24 · text/primary",
                "mono": true
              },
              {
                "key": "Description",
                "value": "Body/S · 12/16 · text/secondary",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBHeader</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Page title\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebPreamble</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"PREAMBLE\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Description body copy\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBHeader</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Page title\"</span><span class=\"syn-punc\">,</span>\n    preamble <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PREAMBLE\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Description body copy\"</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "title-+-trailing-link",
        "demoKey": "trailing-link",
        "demoControls": headerDemoControls,
        "title": "Title + trailing link",
        "node": "18430:2984",
        "description": "Title on the left, \"View All\" link on the right. Common list-section pattern.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"header-spec-3\"><div class=\"eb-preview eb-preview-header eb-preview-header--center\"><div class=\"eb-preview-header__content\"><p class=\"eb-preview-header__title\">Heading</p></div><span class=\"eb-preview-header__trailing\"><span class=\"eb-preview-header__link\">View All</span></span></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "preamble",
                "value": "no",
                "prop": "preamble",
                "mono": true
              },
              {
                "key": "description",
                "value": "no",
                "prop": "description",
                "mono": true
              },
              {
                "key": "leading",
                "value": "none",
                "prop": "leading",
                "mono": true
              },
              {
                "key": "trailing",
                "value": "link",
                "prop": "trailing",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "header/color/default/bg" },
              { "key": "Title", "value": "#0A2757", "token": "header/color/default/label-header" },
              { "key": "Description", "value": "#6780A9", "token": "header/color/default/description" },
              { "key": "Border", "value": "#E5EBF4", "token": "header/color/default/border" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Padding H",
                "value": "24px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "16px",
                "mono": true
              },
              {
                "key": "Border bottom",
                "value": "1px solid",
                "mono": true
              },
              {
                "key": "Title size",
                "value": "22 / 26",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Title style",
                "value": "Primary/Headlines/Section",
                "mono": true
              },
              {
                "key": "Title font",
                "value": "Proxima Soft Bold · 22 / 26",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBHeader</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Page title\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBHeader</span><span class=\"syn-punc\">(</span>title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Page title\"</span><span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "title-+-trailing-edit",
        "demoKey": "trailing-edit",
        "demoControls": headerDemoControls,
        "title": "Title + trailing edit",
        "node": "18430:2989",
        "description": "Title left, pencil icon + \"Edit details\" link right. Used on profile/settings sections.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"header-spec-4\"><div class=\"eb-preview eb-preview-header eb-preview-header--center\"><div class=\"eb-preview-header__content\"><p class=\"eb-preview-header__title\">Heading</p></div><span class=\"eb-preview-header__trailing\"><svg class=\"eb-preview-header__edit-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 20h9\"></path><path d=\"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z\"></path></svg><span class=\"eb-preview-header__link\">Edit details</span></span></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "preamble",
                "value": "no",
                "prop": "preamble",
                "mono": true
              },
              {
                "key": "description",
                "value": "no",
                "prop": "description",
                "mono": true
              },
              {
                "key": "leading",
                "value": "none",
                "prop": "leading",
                "mono": true
              },
              {
                "key": "trailing",
                "value": "edit",
                "prop": "trailing",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "header/color/default/bg" },
              { "key": "Title", "value": "#0A2757", "token": "header/color/default/label-header" },
              { "key": "Description", "value": "#6780A9", "token": "header/color/default/description" },
              { "key": "Border", "value": "#E5EBF4", "token": "header/color/default/border" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Padding H",
                "value": "24px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "16px",
                "mono": true
              },
              {
                "key": "Border bottom",
                "value": "1px solid",
                "mono": true
              },
              {
                "key": "Title size",
                "value": "22 / 26",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Title style",
                "value": "Primary/Headlines/Section",
                "mono": true
              },
              {
                "key": "Title font",
                "value": "Proxima Soft Bold · 22 / 26",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBHeader</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Page title\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBHeader</span><span class=\"syn-punc\">(</span>title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Page title\"</span><span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "title-+-trailing-counter",
        "demoKey": "trailing-counter",
        "demoControls": headerDemoControls,
        "title": "Title + trailing counter",
        "node": "18430:2996",
        "description": "Title left, numeric counter pill right. Used on inbox/notifications.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"header-spec-5\"><div class=\"eb-preview eb-preview-header eb-preview-header--center\"><div class=\"eb-preview-header__content\"><p class=\"eb-preview-header__title\">Heading</p></div><span class=\"eb-preview-header__counter\">0</span></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "preamble",
                "value": "no",
                "prop": "preamble",
                "mono": true
              },
              {
                "key": "description",
                "value": "no",
                "prop": "description",
                "mono": true
              },
              {
                "key": "leading",
                "value": "none",
                "prop": "leading",
                "mono": true
              },
              {
                "key": "trailing",
                "value": "counter",
                "prop": "trailing",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "header/color/default/bg" },
              { "key": "Title", "value": "#0A2757", "token": "header/color/default/label-header" },
              { "key": "Description", "value": "#6780A9", "token": "header/color/default/description" },
              { "key": "Border", "value": "#E5EBF4", "token": "header/color/default/border" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Padding H",
                "value": "24px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "16px",
                "mono": true
              },
              {
                "key": "Border bottom",
                "value": "1px solid",
                "mono": true
              },
              {
                "key": "Title size",
                "value": "22 / 26",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Title style",
                "value": "Primary/Headlines/Section",
                "mono": true
              },
              {
                "key": "Title font",
                "value": "Proxima Soft Bold · 22 / 26",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBHeader</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Page title\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBHeader</span><span class=\"syn-punc\">(</span>title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Page title\"</span><span class=\"syn-punc\">)</span>"
      }
    ],
    colorsTables: [
      // Card 1 — Title only (baseline)
      buildStatelessColorsTable({
        title: 'Title — Colors',
        description: 'Baseline header: just the heading on a white surface. Card stroke is invisible by default.',
        rows: [
          { role: 'Surface bg', token: 'main/header/surface',           value: '#FFFFFF' },
          { role: 'Heading',    token: 'text/primary/headline/section', value: '#0A2757' },
        ],
      }),
      // Card 2 — Full stack (preamble + heading + description)
      buildStatelessColorsTable({
        title: 'Full Stack — Colors',
        description: 'Tier-three layout with eyebrow preamble, heading, and supporting description.',
        rows: [
          { role: 'Surface bg', token: 'main/header/surface',           value: '#FFFFFF' },
          { role: 'Preamble',   token: 'text/accent/eyebrow',           value: '#005CE5' },
          { role: 'Heading',    token: 'text/primary/headline/section', value: '#0A2757' },
          { role: 'Description', token: 'text/primary/body/secondary',  value: '#6780A9' },
        ],
      }),
      // Card 3 — Title + trailing link
      buildStatelessColorsTable({
        title: 'Title + Link — Colors',
        description: 'Heading followed by a trailing hyperlink (e.g. "See all").',
        rows: [
          { role: 'Surface bg', token: 'main/header/surface',           value: '#FFFFFF' },
          { role: 'Heading',    token: 'text/primary/headline/section', value: '#0A2757' },
          { role: 'Link label', token: 'text/accent/link',              value: '#005CE5' },
        ],
      }),
      // Card 4 — Title + trailing edit
      buildStatelessColorsTable({
        title: 'Title + Edit — Colors',
        description: 'Heading followed by an edit affordance (icon + hyperlink label).',
        rows: [
          { role: 'Surface bg', token: 'main/header/surface',           value: '#FFFFFF' },
          { role: 'Heading',    token: 'text/primary/headline/section', value: '#0A2757' },
          { role: 'Edit icon',  token: 'icon/accent',                   value: '#005CE5' },
          { role: 'Edit label', token: 'text/accent/link',              value: '#005CE5' },
        ],
      }),
      // Card 5 — Title + trailing counter
      buildStatelessColorsTable({
        title: 'Title + Counter — Colors',
        description: 'Heading followed by a count chip (e.g. unread badge, item total).',
        rows: [
          { role: 'Surface bg',     token: 'main/header/surface',           value: '#FFFFFF' },
          { role: 'Heading',        token: 'text/primary/headline/section', value: '#0A2757' },
          { role: 'Counter chip bg', token: 'main/counter/surface',         value: '#EEF2F9' },
          { role: 'Counter value',  token: 'text/primary/body/secondary',   value: '#6780A9' },
        ],
      }),
    ],
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": []
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "<code>preamble: boolean</code>",
          "swift": "<code>preamble?: String</code>",
          "compose": "<code>preamble: String?</code>"
        },
        {
          "figma": "(implicit)",
          "swift": "<code>title: String</code>",
          "compose": "<code>title: String</code> (required)"
        },
        {
          "figma": "<code>description: boolean</code>",
          "swift": "<code>description?: String</code>",
          "compose": "<code>description: String?</code>"
        },
        {
          "figma": "<code>icon</code> + <code>left illustration</code>",
          "swift": "<code>leadingMedia?: icon | illustration</code>",
          "compose": "<code>leadingMedia: EBLeadingMedia?</code>"
        },
        {
          "figma": "<code>right illustration</code> + <code>link</code> + <code>edit</code> + <code>counter</code>",
          "swift": "<code>trailing?: illustration | link | edit | counter</code>",
          "compose": "<code>trailing: EBHeaderTrailing?</code>"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Heading trait",
        "ios": "Apply <code>.accessibilityAddTraits(.isHeader)</code> to the title.",
        "android": "Apply <code>Modifier.semantics { heading() }</code> to the title text."
      },
      {
        "requirement": "Trailing action label",
        "ios": "Link/Edit/Counter must each carry their own accessibility label. Counter should announce count (\"12 unread\").",
        "android": "Same — each trailing slot owns its own semantics."
      },
      {
        "requirement": "Minimum touch target",
        "ios": "Trailing interactive element must be ≥44×44pt.",
        "android": "Trailing interactive element must be ≥48×48dp."
      },
      {
        "requirement": "Reading order",
        "ios": "Preamble → Title → Description → Trailing. VoiceOver follows DOM order.",
        "android": "Same reading order — TalkBack follows composition order."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "\"Header\" prefix shared with 3 structurally different components. Rename to <strong>Section Header</strong>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "8 booleans → 3 props (<code>preamble</code>, <code>leadingMedia</code>, <code>trailing</code>). Drops 16 variants to ~6 canonical patterns."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Typography and color bound to DS tokens."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Maps to a simple <code>EBSectionHeader</code> view/composable once slots collapse. Trailing actions should be real Button/Badge instances, not drawn."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Header itself is static; trailing actions inherit Button/Link state coverage once they become instances."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Confirm leading/trailing \"illustration\" slots accept vector instances (Avatar / Icon / custom). Placeholder circle suggests unverified."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Cannot map until property model collapses and trailing slots resolve to real components."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 16,
      "description": "Today: 8 independent boolean properties — <code>preamble</code>, <code>description</code>, <code>icon</code>, <code>left illustration</code>, <code>right illustration</code>, <code>link</code>, <code>edit</code>, <code>counter</code>. 2⁸ = <strong>256 theoretical combos</strong>, only <strong>16 built</strong> — most combinations are either invalid or unsupported.",
      "columns": [
        "Group",
        "Count",
        "Slots enabled"
      ],
      "rows": [
        {
          "cells": [
            "<strong>Text-only</strong>",
            "4",
            "preamble × description permutations"
          ]
        },
        {
          "cells": [
            "<strong>With right icon (top-aligned)</strong>",
            "4",
            "preamble × description × icon"
          ]
        },
        {
          "cells": [
            "<strong>With leading illustration</strong>",
            "2",
            "description × left illustration"
          ]
        },
        {
          "cells": [
            "<strong>With trailing illustration</strong>",
            "2",
            "description × right illustration"
          ]
        },
        {
          "cells": [
            "<strong>With link (View All)</strong>",
            "2",
            "description × link"
          ]
        },
        {
          "cells": [
            "<strong>With edit</strong>",
            "1",
            "edit only"
          ]
        },
        {
          "cells": [
            "<strong>With counter</strong>",
            "1",
            "counter only"
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
      "header": "Initial Assessment · node 18430:2919",
      "rows": [
        {
          "body": "<strong>Verdict: Restructure</strong> — Rename to Section Header, collapse 8 boolean props into 3 slots (<code>preamble</code>, <code>leadingMedia</code>, <code>trailing</code>). <span class=\"tag-open tag-c1 tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Architecture"
          }
        },
        {
          "body": "<strong>Family restructure plan</strong> — 4 \"Header*\" components should be renamed by role; \"With Logo\" merges into Title Bar; \"Transaction\" moves out of family. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Family"
          }
        },
        {
          "body": "<strong>Trailing actions should be real components</strong> — Link/Edit/Counter should be Text Button / Icon Button / Badge instances, not drawn in-place. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked until property model collapses. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
