import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

const genericCardDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'iconSize',
        prop: 'iconSize',
        defaultValue: '64',
        options: [
          { value: '64', label: '64' },
          { value: '52', label: '52' },
          { value: '46', label: '46' },
          { value: '40', label: '40' },
          { value: '32', label: '32' },
          { value: '24', label: '24' },
        ],
      },
      {
        label: 'state',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'skeleton', label: 'Skeleton' },
        ],
      },
    ],
  },
  {
    heading: 'Slots',
    rows: [
      {
        label: 'hasSubtitle',
        prop: 'hasSubtitle',
        defaultValue: 'yes',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        label: 'hasBadge',
        prop: 'hasBadge',
        defaultValue: 'yes',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        label: 'hasChevron',
        prop: 'hasChevron',
        defaultValue: 'yes',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
    ],
  },
];

export const genericCard: ComponentData = {
  "meta": {
    "slug": "generic-card",
    "name": "Generic Card",
    "node": "5412:31504",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5412-31504",
    "description": "A tappable content card — slotted leading icon, a heading with tag and badge, two label-and-description rows, and a slotted trailing chevron.",
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
      "text": "Rebuilt on node <code>5412:31504</code> in the 2026 Working File as <code>Status = Default | Skeleton</code> × <code>State = Default | Disabled</code> × <code>IconSize = XL | LG | MD | SM | XS | XXS</code> over 18 variants. The naming pass is complete: all three properties PascalCase per §1 with Title Case values per §5, the <code>⤷</code> glyph and the <code>#</code> sigil both gone, text layers on the §3 vocabulary and §7 hierarchy, frames PascalCase with the two meaningless <code>offset</code> frames replaced by <code>PreambleContainer</code> and <code>IconContainer</code>, and both slots kebab-cased with the <code>-Slot</code> suffix the rest of the system uses. Splitting <code>Skeleton</code> onto its own <code>Status</code> axis matches §6 and Upload File. The paired <code>TextContainer</code> rows are confirmed intentional peers, the state coverage is confirmed complete at 18 variants, and all six icon sizes are confirmed in use. All four DS Health traits pass; the only item still open is Code Connect, blocked until the native library exists."
    }
  },
  "overview": {
    "inContextNote": "Generic Card stacks vertically into a scrolling list — product catalogs, service menus, transaction history detail screens. Icon size tightens as the density of the list increases.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"gcard-demo-preview\"><div class=\"eb-preview eb-preview-gcard\"><div class=\"eb-preview-gcard__icon eb-preview-gcard__icon--64\"></div><div class=\"eb-preview-gcard__content\"><div class=\"eb-preview-gcard__subtitle\"><span class=\"eb-preview-gcard__blurb\">Blurb</span><span class=\"eb-preview-gcard__tag\">Tag</span></div><p class=\"eb-preview-gcard__heading\">Heading Goes Here</p><p class=\"eb-preview-gcard__desc-line eb-preview-gcard__desc-line--first\"><span class=\"eb-preview-gcard__desc-label\">Label:</span><span class=\"eb-preview-gcard__desc-value\">Description goes here</span></p><p class=\"eb-preview-gcard__desc-line\"><span class=\"eb-preview-gcard__desc-label\">Label:</span><span class=\"eb-preview-gcard__desc-value\">Description goes here</span></p><span class=\"eb-preview-gcard__badge\">Label</span></div><div class=\"eb-preview-gcard__chevron-wrap\"><svg class=\"eb-preview-gcard__chevron\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path d=\"M9 6l6 6-6 6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">blurb</span><input type=\"text\" id=\"gcard-ctrl-blurb\" class=\"demo-panel-select demo-panel-input\" value=\"Blurb\" oninput=\"_gcardUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">tag</span><input type=\"text\" id=\"gcard-ctrl-tag\" class=\"demo-panel-select demo-panel-input\" value=\"Tag\" oninput=\"_gcardUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">heading</span><input type=\"text\" id=\"gcard-ctrl-heading\" class=\"demo-panel-select demo-panel-input\" value=\"Heading Goes Here\" oninput=\"_gcardUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><input type=\"text\" id=\"gcard-ctrl-desc\" class=\"demo-panel-select demo-panel-input\" value=\"Description goes here\" oninput=\"_gcardUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">badge</span><input type=\"text\" id=\"gcard-ctrl-badge\" class=\"demo-panel-select demo-panel-input\" value=\"Label\" oninput=\"_gcardUpdate()\"></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">iconSize</span><select id=\"gcard-ctrl-iconsize\" class=\"demo-panel-select\" onchange=\"_gcardUpdate()\"><option value=\"64\" selected=\"\">64</option><option value=\"52\">52</option><option value=\"46\">46</option><option value=\"40\">40</option><option value=\"32\">32</option><option value=\"24\">24</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">state</span><select id=\"gcard-ctrl-state\" class=\"demo-panel-select\" onchange=\"_gcardUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"skeleton\">skeleton</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Slots</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasSubtitle</span><select id=\"gcard-ctrl-hassubtitle\" class=\"demo-panel-select\" onchange=\"_gcardUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasBlurb</span><select id=\"gcard-ctrl-hasblurb\" class=\"demo-panel-select\" onchange=\"_gcardUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasTag</span><select id=\"gcard-ctrl-hastag\" class=\"demo-panel-select\" onchange=\"_gcardUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">has2ndDesc</span><select id=\"gcard-ctrl-has2desc\" class=\"demo-panel-select\" onchange=\"_gcardUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasBadge</span><select id=\"gcard-ctrl-hasbadge\" class=\"demo-panel-select\" onchange=\"_gcardUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasChevron</span><select id=\"gcard-ctrl-haschevron\" class=\"demo-panel-select\" onchange=\"_gcardUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "A generic tappable content card — the two slots and the label/description rows carry product, transaction or service content without the component knowing which."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its container, spacing and typography, and composes shared <code>Badge</code> and <code>Chevron Right</code> instances rather than redrawing them."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "<code>Status</code>, <code>State</code> and <code>IconSize</code> are all PascalCase per §1 with Title Case values per §5 on the standard sizing vocabulary; <code>Skeleton</code> sits on <code>Status</code> rather than competing with interaction on <code>State</code>, per §6; text layers follow the §3 vocabulary and the §7 hierarchy; frames are PascalCase throughout, including the skeleton variants; and both slots are kebab-cased with the <code>-Slot</code> suffix used across the system."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "<code>leadingIcon</code> and <code>trailingIcon</code> are both real Figma Slots, so the artwork and the trailing affordance are consumer-supplied, and the badges are shared instances."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "state=Default",
        "notes": "Normal row — all content visible, chevron shown when <code>hasChevron</code>."
      },
      {
        "state": "Skeleton (loading)",
        "ios": "yes",
        "android": "yes",
        "property": "state=skeleton",
        "notes": "Loading pattern — gray rounded placeholders where each content slot would render. Kudos for shipping this as a first-class variant."
      },
      {
        "state": "Pressed",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Tappable row (has chevron) — needs a pressed state with background tint for tap feedback."
      },
      {
        "state": "Disabled",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "For temporarily-unavailable services (e.g. maintenance). Typically dimmed label + muted icon."
      }
    ],
    "resolved": [
      {
        "headline": "Leading icon is a real Figma Slot.",
        "body": "v2.0: Rebuilt on node <code>5412:31504</code> in the 2026 Working File. <code>leadingIcon</code> is a genuine <code>SLOT</code> holding a <code>Placeholder</code> instance as its swap target, replacing the hardcoded circle the previous assessment flagged. A consumer supplies their own artwork without detaching, and native handoff has a real content slot to bind. (C1 · Slot)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Chevron is a vector instance in a slot.",
        "body": "v2.0: The raster chevron is gone. <code>trailingIcon</code> is a <code>SLOT</code> carrying a <code>Chevron Right</code> instance from the shared icon library, so it recolours from tokens and stays crisp at any density — and because it is slotted, a card that needs a different trailing affordance can swap it. (C6 · Asset)",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "<code>iconSize</code> values moved from numeric to semantic.",
        "body": "v2.0: The six numeric values are replaced by a t-shirt scale — <code>xl | l | m | s | xs | xxs</code> — which is the naming half of the previous recommendation. The count is unchanged at six, and whether all six earn their place is tracked separately below. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Disabled state added.",
        "body": "v2.0: <code>state=disabled</code> ships across all six icon sizes, closing half of the missing-states finding. Pressed is still absent and is tracked below. (C5)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "<code>skeleton</code> moved onto its own <code>Status</code> axis.",
        "body": "v2.1: The schema is now <code>Status = Default | Skeleton</code> × <code>State = Default | Disabled</code> × <code>iconSize</code>, matching the §6 rule and the shape <a href=\"#\" onclick=\"showPanelById('upload-file');return false;\">Upload File</a> uses. A skeleton is the system reporting that content has not arrived; disabled is how the user may interact with it. Separating them means the two no longer compete for one axis. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "<code>State</code> and <code>Status</code> PascalCase, all values Title Case.",
        "body": "v2.1: <code>Default</code>, <code>Disabled</code>, <code>Skeleton</code> per §5, and the icon scale is now <code>XL | LG | MD | SM | XS | XXS</code> — aligned to the standard sizing vocabulary rather than the single-letter <code>l | m | s</code> it used before. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The <code>⤷</code> glyph is gone and slots are kebab-cased.",
        "body": "v2.1: <code>⤷ icon</code>, <code>⤷ leadingIcon</code> and <code>⤷ trailingIcon</code> are now <code>MediaContainer</code>, <code>Leading-Icon</code> and <code>Trailing-Icon</code> — the literal arrow character is removed from every layer, and both slots follow §4 kebab-case, so nothing in the tree blocks a generated identifier. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Legacy sigil dropped and frames moved to PascalCase.",
        "body": "v2.1: <code>#tag</code> → <code>Preamble</code>, <code>#name</code> → <code>Title</code>, <code>#label</code> → <code>Label</code>, <code>#description</code> → <code>Description</code>, putting the text layers on the §3 vocabulary and the §7 hierarchy. The frames follow: <code>container</code> → <code>ContentRow</code>, <code>content-block</code> → <code>ContentBlock</code>, <code>text-container</code> → <code>TextContainer</code>, <code>badge-container</code> → <code>BadgeContainer</code>. Both frames named <code>offset</code> are gone, replaced by <code>PreambleContainer</code> and <code>IconContainer</code>, which say what they hold. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Skeleton variants brought onto the shared vocabulary.",
        "body": "v2.1: <code>icon-container </code> — with its trailing space — is now <code>MediaContainer</code>, <code>content-block</code> is <code>ContentBlock</code>, and the <code>offset</code> frame standing in for the chevron is <code>IconContainer</code>, all matching the names their default siblings use. A reviewer no longer needs a second mental model to read a skeleton variant. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Two <code>TextContainer</code> rows confirmed intentional peers.",
        "body": "v2.2: The <code>Coverage</code> block holds two identically-structured rows by design — each a <code>Label</code> and <code>Description</code> pair, the second carrying a further line item rather than a different kind of content. Sharing a name is correct here: they are peers, not a primary and a secondary, and naming them apart would imply a hierarchy the card does not have. Note for implementation: identically-named siblings are matched by order when Figma swaps variants, so an <code>iconSize</code> change re-matches the two rows positionally. That is reliable while both rows are present and in order, and it is the reason to keep them as a fixed pair rather than making either one optional. Native implementations should model this as a list of two label-value rows rather than as two named properties. (C1 · Docs)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "State coverage confirmed as-is.",
        "body": "v2.2: <code>State = Default | Disabled</code> is the intended coverage — no pressed state, and <code>Status=Skeleton</code> deliberately ships only with <code>State=Default</code>. A skeleton is a placeholder for content that has not arrived, so it cannot meaningfully be disabled, and the 18 built variants are therefore the complete set rather than 18 of a nominal 24. Native implementations should treat <code>Skeleton</code> × <code>Disabled</code> as unreachable and should not expect a pressed treatment from the component. (C5)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "<code>iconSize</code> → <code>IconSize</code>.",
        "body": "v2.3: Verified on the live node — all 18 variants read <code>Status</code> × <code>State</code> × <code>IconSize</code>. Every property in the set is now PascalCase per §1 with Title Case values per §5, closing the property pass. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Slot suffix aligned to the family convention.",
        "body": "v2.3: <code>Leading-Icon</code> and <code>Trailing-Icon</code> are now <code>Leading-Icon-Slot</code> and <code>Trailing-Icon-Slot</code> — kebab-case per §4 with the <code>-Slot</code> suffix the rest of the system uses on <a href=\"#\" onclick=\"showPanelById('bottom-sheet');return false;\">Bottom Sheet</a>, <a href=\"#\" onclick=\"showPanelById('service-item');return false;\">Service Item</a> and <a href=\"#\" onclick=\"showPanelById('upload-file');return false;\">Upload File</a>. A consumer can now tell a slot from a frame by its name alone, across every component. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "All six icon sizes confirmed in use.",
        "body": "v2.3: <code>XL | LG | MD | SM | XS | XXS</code> stays at six by owner confirmation — each size appears in a real screen rather than being carried forward from the retired numeric scale. The 18-variant count is therefore the intended size of the set, not an artefact. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — no native library exists yet. Nothing in the schema or the layer tree blocks it: three PascalCase axes over two kebab-case slots, with the <code>⤷</code> glyph and the <code>#</code> sigil both cleared.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": []
  },
  "style": {
    "heading": "Variants",
    "specCards": [
      {
        "cardKey": "default-—-iconsize=64",
        "demoKey": "default",
        "demoControls": genericCardDemoControls,
        "title": "Default — iconSize=64",
        "node": "18482:35807",
        "description": "Full-featured row: icon + blurb with tag, heading, 2 description lines, bottom badge, chevron.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"gcard-spec-default\"><div class=\"eb-preview eb-preview-gcard\"><div class=\"eb-preview-gcard__icon eb-preview-gcard__icon--64\"></div><div class=\"eb-preview-gcard__content\"><div class=\"eb-preview-gcard__subtitle\"><span class=\"eb-preview-gcard__blurb\">Blurb</span><span class=\"eb-preview-gcard__tag\">Tag</span></div><p class=\"eb-preview-gcard__heading\">Heading Goes Here</p><p class=\"eb-preview-gcard__desc-line eb-preview-gcard__desc-line--first\"><span class=\"eb-preview-gcard__desc-label\">Label:</span><span class=\"eb-preview-gcard__desc-value\">Description goes here</span></p><p class=\"eb-preview-gcard__desc-line\"><span class=\"eb-preview-gcard__desc-label\">Label:</span><span class=\"eb-preview-gcard__desc-value\">Description goes here</span></p><span class=\"eb-preview-gcard__badge\">Label</span></div><div class=\"eb-preview-gcard__chevron-wrap\"><svg class=\"eb-preview-gcard__chevron\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path d=\"M9 6l6 6-6 6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "iconSize", "value": "64",      "prop": "iconSize" },
              { "key": "state",    "value": "Default", "prop": "state" },
              { "key": "Layout",   "value": "icon-leading + content-right" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface",     "value": "#FFFFFF", "token": "card-list/color/bg" },
              { "key": "Border",      "value": "#E5EBF4", "token": "card-list/color/border" },
              { "key": "Title",       "value": "#0A2757", "token": "card-list/color/label-header" },
              { "key": "Description", "value": "#445C85", "token": "card-list/color/description" },
              { "key": "Label",       "value": "#90A8D0", "token": "card-list/color/label" },
              { "key": "Blurb",       "value": "#005CE5", "token": "card-list/color/label-blurb" },
              { "key": "Icon",        "value": "#005CE5", "token": "card-list/color/icon" },
              { "key": "Badge bg",    "value": "#E5F1FF", "token": "badge/information/light/background" },
              { "key": "Badge label", "value": "#005CE5", "token": "badge/information/light/label" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width × Height",         "value": "360 × 146", "mono": true },
              { "key": "Padding",                "value": "16 24 16 12", "mono": true },
              { "key": "Gap (icon ↔ content)",   "value": "24px", "mono": true },
              { "key": "Gap (content ↔ chevron)","value": "24px", "mono": true },
              { "key": "Bottom border",          "value": "1px", "mono": true },
              { "key": "Icon size",              "value": "64 × 64", "mono": true },
              { "key": "Chevron size",           "value": "32 × 32", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Heading",     "value": "Proxima Soft Bold · 18 / 23 · +0.25", "mono": true },
              { "key": "Blurb",       "value": "Proxima Soft Bold · 14 / 14 · +0.25", "mono": true },
              { "key": "Description", "value": "BarkAda Semibold · 12 / 18 · +0", "mono": true },
              { "key": "Tag label",   "value": "Proxima Soft Bold · 12 / 12 · +0.5", "mono": true },
              { "key": "Badge label", "value": "Proxima Soft Bold · 12 / 12 · +0.5", "mono": true }
            ]
          },
          {
            "label": "Composed sub-components",
            "rows": [
              {
                "key": "Tag",
                "value": "Badge · Negative · Heavy",
                "mono": true
              },
              {
                "key": "Bottom pill",
                "value": "Badge · Information · Light",
                "mono": true
              },
              {
                "key": "Icon (today)",
                "value": "Drawn placeholder",
                "mono": false
              },
              {
                "key": "Icon (proposed)",
                "value": "Avatar / Icon slot",
                "mono": false
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCard</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Description body\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebIcon</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>systemName<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"star.fill\"</span><span class=\"syn-punc\">))</span>\n    .<span class=\"syn-fn\">ebIconSize</span><span class=\"syn-punc\">(</span>64<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebBlurb</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Blurb\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCard</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Description body\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ </span><span class=\"syn-type\">Icon</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">Icons</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Filled</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Star</span><span class=\"syn-punc\">, null) }</span><span class=\"syn-punc\">,</span>\n    iconSize <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBIconSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Size64</span><span class=\"syn-punc\">,</span>\n    blurb <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Blurb\"</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "skeleton-—-loading-state",
        "demoKey": "skeleton",
        "demoControls": genericCardDemoControls,
        "title": "Skeleton — loading state",
        "node": "18482:35832",
        "description": "The loading pattern for the card. Every content slot becomes a rounded rectangle placeholder in neutral gray. Use while awaiting data.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"gcard-spec-skeleton\"><div class=\"eb-preview eb-preview-gcard eb-preview-gcard--skeleton\"><div class=\"eb-preview-gcard__icon eb-preview-gcard__icon--64\"></div><div class=\"eb-preview-gcard__content\"><div class=\"eb-preview-gcard__sk eb-preview-gcard__sk--tag\"></div><div class=\"eb-preview-gcard__sk eb-preview-gcard__sk--heading\"></div><div class=\"eb-preview-gcard__sk eb-preview-gcard__sk--desc\"></div><div class=\"eb-preview-gcard__sk eb-preview-gcard__sk--desc2\"></div><div class=\"eb-preview-gcard__sk eb-preview-gcard__sk--badge\"></div></div><div class=\"eb-preview-gcard__sk eb-preview-gcard__sk--chevron\"></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "iconSize", "value": "64",       "prop": "iconSize" },
              { "key": "state",    "value": "Skeleton", "prop": "state" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Skeleton bg", "value": "#EEF2F9", "token": "main/skeleton/bg" },
              { "key": "Surface bg",  "value": "#FFFFFF", "token": "main/card/bg" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Min height",       "value": "88px",   "mono": true },
              { "key": "Padding",          "value": "16px",   "mono": true },
              { "key": "Corner radius",    "value": "12px",   "mono": true },
              { "key": "Icon placeholder", "value": "64 × 64", "mono": true },
              { "key": "Bar 1 size",       "value": "120 × 14", "mono": true },
              { "key": "Bar 2 size",       "value": "180 × 10", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "N/A", "value": "No text in skeleton state" }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBGenericCard</span><span class=\"syn-punc\">(</span>isLoading<span class=\"syn-punc\">: </span><span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBGenericCard</span><span class=\"syn-punc\">(</span>\n    isLoading <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    colorsTables: [
      // Card 1 — Default with leading icon
      buildStatelessColorsTable({
        title: 'Default — Colors',
        description: 'Tappable list-style card with leading icon, heading, description, optional blurb + tag.',
        rows: [
          { role: 'Surface',     token: 'card-list/color/bg',                  value: '#FFFFFF' },
          { role: 'Border',      token: 'card-list/color/border',              value: '#E5EBF4' },
          { role: 'Title',       token: 'card-list/color/label-header',        value: '#0A2757' },
          { role: 'Description', token: 'card-list/color/description',         value: '#445C85' },
          { role: 'Label',       token: 'card-list/color/label',               value: '#90A8D0' },
          { role: 'Blurb',       token: 'card-list/color/label-blurb',         value: '#005CE5' },
          { role: 'Icon',        token: 'card-list/color/icon',                value: '#005CE5' },
          { role: 'Badge bg',    token: 'badge/information/light/background',  value: '#E5F1FF' },
          { role: 'Badge label', token: 'badge/information/light/label',       value: '#005CE5' },
        ],
      }),
      // Card 2 — Skeleton loading state
      buildStatelessColorsTable({
        title: 'Skeleton — Colors',
        description: 'Loading state — every content slot is a rounded rectangle in neutral grey on the card surface.',
        rows: [
          { role: 'Skeleton bg', token: 'main/skeleton/bg', value: '#EEF2F9' },
          { role: 'Surface bg',  token: 'main/card/bg',     value: '#FFFFFF' },
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
          "figma": "<code>iconSize: 64 | 52 | 46 | 40 | 32 | 24</code>",
          "swift": "<code>size: xl | l | m | s</code>",
          "compose": "<code>.controlSize(.large)</code> etc."
        },
        {
          "figma": "(drawn circle)",
          "swift": "<code>leadingMedia: Avatar | Icon</code> (slot)",
          "compose": "<code>leadingMedia: EBLeadingMedia?</code>"
        },
        {
          "figma": "(hardcoded text)",
          "swift": "<code>heading: String</code>",
          "compose": "<code>heading: String</code>"
        },
        {
          "figma": "<code>hasBlurb</code>",
          "swift": "<code>blurb?: String</code>",
          "compose": "<code>blurb: String?</code>"
        },
        {
          "figma": "<code>hasTag</code>",
          "swift": "<code>tag?: Badge</code> (instance)",
          "compose": "<code>tag: EBBadge?</code>"
        },
        {
          "figma": "<code>hasSubtitle</code>",
          "swift": "(derived: shown if <code>blurb</code> or <code>tag</code> present)",
          "compose": "—"
        },
        {
          "figma": "(hardcoded \"Description goes here\")",
          "swift": "<code>descriptions: [LabelValue]</code>",
          "compose": "<code>descriptions: [EBLabelValue]</code>"
        },
        {
          "figma": "<code>has2ndDescription</code>",
          "swift": "(derived: up to N rows rendered)",
          "compose": "—"
        },
        {
          "figma": "<code>hasBadge</code>",
          "swift": "<code>badge?: Badge</code> (instance)",
          "compose": "<code>badge: EBBadge?</code>"
        },
        {
          "figma": "<code>hasChevron</code>",
          "swift": "<code>showChevron: Bool = true</code>",
          "compose": "<code>showChevron: Bool = true</code>"
        },
        {
          "figma": "<code>state: Default | skeleton</code>",
          "swift": "<code>loading: Bool</code>",
          "compose": "<code>loading: Bool</code>"
        },
        {
          "figma": "(not modeled)",
          "swift": "<code>onTap?: () -&gt; Void</code>",
          "compose": "<code>onTap: (() -&gt; Void)?</code>"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Row as a button",
        "ios": "Whole row wrapped in <code>Button</code> with combined <code>accessibilityLabel</code> (heading + blurb + tag).",
        "android": "<code>Modifier.clickable { onTap() }.semantics(mergeDescendants = true)</code> on the row."
      },
      {
        "requirement": "Combined announcement",
        "ios": "\"Send Money Abroad, PROMO, New, Free for first transfer, Same day, Recommended\" — VoiceOver reads top-to-bottom.",
        "android": "Same reading order — TalkBack follows composition."
      },
      {
        "requirement": "Loading state",
        "ios": "Announce \"Loading\" once on mount; suppress per-placeholder announcements.",
        "android": "Apply <code>contentDescription = \"Loading\"</code> to the skeleton container."
      },
      {
        "requirement": "Min touch target",
        "ios": "146 px row height ≫ 44 pt ✓",
        "android": "146 dp ≫ 48 dp ✓"
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Clean container / content / chevron hierarchy. Tag and bottom pill are Badge instances."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "6 numeric <code>iconSize</code> values — collapse to semantic scale."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors bound to <code>main/card-list/color/*</code> + Badge tokens."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Maps cleanly to a row composable once icon slot + chevron are fixed."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Default + skeleton built. Missing pressed + disabled for a tappable row."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Icon placeholder isn't an instance; chevron is a raster."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked until iconSize rename and icon slot adoption land."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 12,
      "description": "<code>iconSize</code> (6) × <code>state</code> (2) = <strong>12 variants</strong>. The 6 boolean slot props (<code>hasBlurb</code>, <code>hasTag</code>, <code>hasSubtitle</code>, <code>has2ndDescription</code>, <code>hasBadge</code>, <code>hasChevron</code>) toggle content independently and don't multiply the variant count.",
      "columns": [
        "iconSize",
        "Default node",
        "Skeleton node",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "<strong>64</strong>",
            "<code>18482:35807</code>",
            "<code>18482:35832</code>",
            "360 × 146"
          ]
        },
        {
          "cells": [
            "<strong>52</strong>",
            "<code>18482:35843</code>",
            "<code>18482:35868</code>",
            "360 × 146"
          ]
        },
        {
          "cells": [
            "<strong>46</strong>",
            "<code>18482:35879</code>",
            "<code>18482:35904</code>",
            "360 × 146"
          ]
        },
        {
          "cells": [
            "<strong>40</strong>",
            "<code>18482:35915</code>",
            "<code>18482:35940</code>",
            "360 × 146"
          ]
        },
        {
          "cells": [
            "<strong>32</strong>",
            "<code>18482:35951</code>",
            "<code>18482:35976</code>",
            "360 × 146"
          ]
        },
        {
          "cells": [
            "<strong>24</strong>",
            "<code>18482:35987</code>",
            "<code>18482:36012</code>",
            "360 × 146"
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
      "header": "Initial Assessment · node 18482:35806",
      "rows": [
        {
          "body": "<strong>Verdict: Fix</strong> — Collapse iconSize to semantic scale, swap icon placeholder for a slot, vectorize the chevron, add pressed state. <span class=\"tag-open tag-c2 tag-c5 tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Schema"
          }
        },
        {
          "body": "<strong>Skeleton pattern acknowledged</strong> — First-class loading variant is rare and valuable. Adopt this pattern across the card/row family. <span class=\"tag-fixed\">Noted</span>",
          "delta": {
            "kind": "resolved",
            "label": "Praise"
          }
        },
        {
          "body": "<strong>C2 — iconSize collapse</strong> — 6 numeric values → 4 semantic sizes (xl/l/m/s). <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C6 — Icon slot + vector chevron</strong> — Adopt Figma Slot for leading media; vectorize chevron. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C5 — Pressed / disabled</strong> — Tappable row needs both. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked on above. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
