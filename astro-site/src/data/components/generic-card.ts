import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/generic-card.js`.
// Panel mirrors the property panel of set 5412:31504, in its order: three
// variant axes then the seven booleans. The two icon slots and the
// Description slot get no control.
const genericCardDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Status',
        prop: 'status',
        defaultValue: 'default',
        options: [
          { value: 'default',  label: 'Default' },
          { value: 'skeleton', label: 'Skeleton' },
        ],
      },
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default',  label: 'Default' },
          { value: 'disabled', label: 'Disabled' },
        ],
      },
      {
        label: 'IconSize',
        prop: 'iconsize',
        defaultValue: 'xl',
        options: [
          { value: 'xl',  label: 'XL' },
          { value: 'lg',  label: 'LG' },
          { value: 'md',  label: 'MD' },
          { value: 'sm',  label: 'SM' },
          { value: 'xs',  label: 'XS' },
          { value: 'xxs', label: 'XXS' },
        ],
      },
      { label: 'hasLeadingElement', prop: 'hasleadingelement', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'hasSubtitle', prop: 'hassubtitle', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'hasBlurb', prop: 'hasblurb', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'hasTag', prop: 'hastag', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'hasDescription', prop: 'hasdescription', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'has Badge', prop: 'hasbadge', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'hasTrailingElement', prop: 'hastrailingelement', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
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
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "gc-spec-main",
        "demoKey": "main",
        "title": "Generic Card",
        "node": "5412:31504",
        "description": "A 360-wide list card — leading icon at six sizes, blurb and tag, heading, two description rows and a badge, with a Skeleton status for loading.",
        "previewHtml": "<div id=\"generic-card-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": genericCardDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Status",
                "value": "Default",
                "prop": "status"
              },
              {
                "key": "State",
                "value": "Default",
                "prop": "state"
              },
              {
                "key": "IconSize",
                "value": "XL",
                "prop": "iconsize",
                "variants": {
                  "hasleadingelement:false": {
                    "value": "— no leading element"
                  }
                }
              },
              {
                "key": "hasLeadingElement",
                "value": "True",
                "prop": "hasleadingelement"
              },
              {
                "key": "hasSubtitle",
                "value": "True",
                "prop": "hassubtitle"
              },
              {
                "key": "hasBlurb",
                "value": "True",
                "prop": "hasblurb"
              },
              {
                "key": "hasTag",
                "value": "True",
                "prop": "hastag"
              },
              {
                "key": "hasDescription",
                "value": "True",
                "prop": "hasdescription"
              },
              {
                "key": "has Badge",
                "value": "True",
                "prop": "hasbadge"
              },
              {
                "key": "hasTrailingElement",
                "value": "True",
                "prop": "hastrailingelement"
              },
              {
                "key": "⤷ Leading-Icon-Slot",
                "value": "Slot · 12 items",
                "variants": {
                  "hasleadingelement:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "⤷ Trailing-Icon-Slot",
                "value": "Slot · 12 items",
                "variants": {
                  "hastrailingelement:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "⤷ Description",
                "value": "Slot · 12 items"
              },
              {
                "key": "Resolved variant",
                "value": "5412:31505 · 360 × 148",
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
                "swatch": "#FFFFFF"
              },
              {
                "key": "Divider",
                "value": "#E5EBF4",
                "token": "—",
                "swatch": "#E5EBF4"
              },
              {
                "key": "Blurb",
                "value": "#005CE5",
                "token": "—",
                "swatch": "#005CE5",
                "variants": {
                  "hasblurb:false": {
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
                "key": "Tag",
                "value": "#D61B2C / #FFFFFF",
                "token": "—",
                "swatch": "#D61B2C",
                "variants": {
                  "hastag:false": {
                    "hide": true
                  },
                  "status:skeleton": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Title",
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
                "key": "Row label",
                "value": "#90A8D0",
                "token": "—",
                "swatch": "#90A8D0",
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
                "key": "Row description",
                "value": "#445C85",
                "token": "—",
                "swatch": "#445C85",
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
                "key": "Badge",
                "value": "#E5F1FF / #005CE5",
                "token": "—",
                "swatch": "#E5F1FF",
                "variants": {
                  "hasbadge:false": {
                    "hide": true
                  },
                  "state:disabled": {
                    "value": "#C2C6CF / #FFFFFF",
                    "swatch": "#C2C6CF"
                  },
                  "status:skeleton": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Chevron",
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
                "key": "Icon placeholder",
                "value": "#D3DCEA",
                "token": "—",
                "swatch": "#D3DCEA",
                "variants": {
                  "hasleadingelement:false": {
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
                "value": "360 × 148",
                "mono": true,
                "prop": "size-readout"
              },
              {
                "key": "Padding",
                "value": "24 left · 12 right · 16 top and bottom",
                "mono": true
              },
              {
                "key": "Row height",
                "value": "Tallest of content · icon · 32 chevron",
                "mono": true
              },
              {
                "key": "Alignment",
                "value": "Icons at the row top · text centres",
                "mono": true
              },
              {
                "key": "Leading icon",
                "value": "64 × 64",
                "mono": true,
                "prop": "icon-readout"
              },
              {
                "key": "Icon → content gap",
                "value": "24",
                "mono": true,
                "variants": {
                  "iconsize:md": {
                    "value": "20"
                  },
                  "iconsize:sm": {
                    "value": "16"
                  },
                  "iconsize:xs": {
                    "value": "16"
                  },
                  "iconsize:xxs": {
                    "value": "12"
                  }
                }
              },
              {
                "key": "Content block",
                "value": "180 wide at x 112",
                "mono": true,
                "prop": "content-readout"
              },
              {
                "key": "Header",
                "value": "21 tall · Blurb then Tag 29 × 16",
                "mono": true,
                "variants": {
                  "status:skeleton": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Title",
                "value": "23 tall · 4 below the header",
                "mono": true,
                "variants": {
                  "status:skeleton": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Description rows",
                "value": "18 tall each · 4 apart",
                "mono": true,
                "variants": {
                  "status:skeleton": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Badge",
                "value": "48 × 18 · radius 99",
                "mono": true,
                "variants": {
                  "hasbadge:false": {
                    "hide": true
                  },
                  "status:skeleton": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Trailing icon",
                "value": "32 × 32 at x 316 · y 30",
                "mono": true,
                "variants": {
                  "hastrailingelement:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Skeleton blocks",
                "value": "69 × 20 · 159 × 23 · 159 × 18 · 159 × 18 · 45 × 19",
                "mono": true,
                "variants": {
                  "status:default": {
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
                "key": "Blurb",
                "value": "Primary/Label/Small",
                "mono": true,
                "variants": {
                  "hasblurb:false": {
                    "hide": true
                  },
                  "status:skeleton": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Title",
                "value": "Primary/Headlines/Block",
                "mono": true,
                "variants": {
                  "status:skeleton": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Label / Description",
                "value": "Secondary/Bold/Caption",
                "mono": true,
                "variants": {
                  "status:skeleton": {
                    "hide": true
                  }
                }
              }
            ]
          }
        ],
        "swift": "EBGenericCard(\"Heading Goes Here\")\n    .ebBlurb(\"Blurb\")\n    .ebTag(\"Tag\")\n    .ebDescription(\"Label:\", \"Description goes here\")\n    .ebBadge(\"Label\")\n    .ebLeadingIcon(.xl) { Image(\"icon\") }",
        "compose": "EBGenericCard(\n    title = \"Heading Goes Here\",\n    blurb = \"Blurb\",\n    tag = \"Tag\",\n    description = \"Label: Description goes here\",\n    badge = \"Label\",\n    iconSize = EBGenericCardIconSize.XL,\n    leadingIcon = { Image(painterResource(R.drawable.icon), null) },\n    onClick = { }\n)"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Read off <code>get_node_info</code> across the 18 variants of set <code>5412:31504</code>. Token paths could not be read; the plugin returns no variable bindings.",
        "columns": [
          "Default",
          "Disabled",
          "Skeleton"
        ],
        "rows": [
          {
            "role": "Card",
            "token": "—",
            "values": [
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
              "#E5EBF4"
            ]
          },
          {
            "role": "Blurb",
            "token": "—",
            "values": [
              "#005CE5",
              "#9BC5FD",
              "–"
            ]
          },
          {
            "role": "Tag",
            "token": "—",
            "values": [
              "#D61B2C / #FFFFFF",
              "#D61B2C / #FFFFFF",
              "–"
            ]
          },
          {
            "role": "Title",
            "token": "—",
            "values": [
              "#0A2757",
              "#C2CFE5",
              "–"
            ]
          },
          {
            "role": "Row label",
            "token": "—",
            "values": [
              "#90A8D0",
              "#C2CFE5",
              "–"
            ]
          },
          {
            "role": "Row description",
            "token": "—",
            "values": [
              "#445C85",
              "#C2CFE5",
              "–"
            ]
          },
          {
            "role": "Badge",
            "token": "—",
            "values": [
              "#E5F1FF / #005CE5",
              "#C2C6CF / #FFFFFF",
              "–"
            ]
          },
          {
            "role": "Chevron",
            "token": "—",
            "values": [
              "#005CE5",
              "#9BC5FD",
              "–"
            ]
          },
          {
            "role": "Icon placeholder",
            "token": "—",
            "values": [
              "#D3DCEA",
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:generic-card:2.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.genericcard.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "One row per property of set <code>5412:31504</code>, in panel order, then the three SLOTs. <code>Skeleton</code> ships <code>State=Default</code> only.",
      "rows": [
        {
          "figma": "Status — Default, Skeleton",
          "swift": "<code>.ebSkeleton(true)</code>",
          "compose": "<code>skeleton = true</code>"
        },
        {
          "figma": "State — Default, Disabled",
          "swift": "<code>.disabled(true)</code>",
          "compose": "<code>enabled = false</code>"
        },
        {
          "figma": "IconSize — XL, LG, MD, SM, XS, XXS (64, 52, 46, 40, 32, 24) · only with hasLeadingElement",
          "swift": "<code>.ebLeadingIcon(.xl … .xxs) { }</code>",
          "compose": "<code>iconSize = EBGenericCardIconSize.XL … XXS</code>"
        },
        {
          "figma": "hasLeadingElement — boolean",
          "swift": "omit <code>.ebLeadingIcon</code>",
          "compose": "<code>leadingIcon: (@Composable () -&gt; Unit)? = null</code>"
        },
        {
          "figma": "hasSubtitle — boolean",
          "swift": "<code>.ebSubtitle(String, String)</code>",
          "compose": "<code>subtitle: String? = null</code>"
        },
        {
          "figma": "hasBlurb — boolean",
          "swift": "<code>.ebBlurb(String)</code>",
          "compose": "<code>blurb: String? = null</code>"
        },
        {
          "figma": "hasTag — boolean",
          "swift": "<code>.ebTag(String)</code>",
          "compose": "<code>tag: String? = null</code>"
        },
        {
          "figma": "hasDescription — boolean",
          "swift": "<code>.ebDescription(String, String)</code>",
          "compose": "<code>description: String? = null</code>"
        },
        {
          "figma": "has Badge — boolean (note the space)",
          "swift": "<code>.ebBadge(String)</code>",
          "compose": "<code>badge: String? = null</code>"
        },
        {
          "figma": "hasTrailingElement — boolean",
          "swift": "<code>.ebTrailingIcon(nil)</code> to drop it",
          "compose": "<code>trailingIcon: EBIcon? = EBIcons.ChevronRight</code>"
        },
        {
          "figma": "⤷ Leading-Icon-Slot — SLOT · 12 items",
          "swift": "content of <code>.ebLeadingIcon</code>",
          "compose": "the value of <code>leadingIcon</code>"
        },
        {
          "figma": "⤷ Trailing-Icon-Slot — SLOT · 12 items",
          "swift": "the chevron",
          "compose": "the value of <code>trailingIcon</code>"
        },
        {
          "figma": "⤷ Description — SLOT · 12 items",
          "swift": "the two label / description rows",
          "compose": "the two label / description rows"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/GenericCard/EBGenericCard.swift",
        "compose": "android/components/genericcard/EBGenericCard.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Default · XL",
        "swift": "<span class=\"cmt\">// Status=Default, State=Default, IconSize=XL — 5412:31505, 360 × 148.</span>\nEBGenericCard(\"GSave Time Deposit\")\n    .ebBlurb(\"New\")\n    .ebTag(\"Hot\")\n    .ebDescription(\"Rate:\", \"up to 4.25% p.a.\")\n    .ebBadge(\"Insured\")\n    .ebLeadingIcon(.xl) { Image(\"gsave\") }",
        "compose": "<span class=\"cmt\">// Status=Default, State=Default, IconSize=XL — 5412:31505, 360 × 148.</span>\nEBGenericCard(\n    title = \"GSave Time Deposit\",\n    blurb = \"New\",\n    tag = \"Hot\",\n    description = \"Rate: up to 4.25% p.a.\",\n    badge = \"Insured\",\n    iconSize = EBGenericCardIconSize.XL,\n    leadingIcon = { Image(painterResource(R.drawable.gsave), null) },\n    onClick = { open() }\n)"
      },
      {
        "subheading": "Compact icon · XXS",
        "swift": "<span class=\"cmt\">// Status=Default, State=Default, IconSize=XXS — 5412:31685, 360 × 148; the icon is 24 and the content block widens to 232.</span>\nEBGenericCard(\"GSave Time Deposit\")\n    .ebLeadingIcon(.xxs) { Image(\"gsave\") }",
        "compose": "<span class=\"cmt\">// Status=Default, State=Default, IconSize=XXS — 5412:31685, 360 × 148; the icon is 24 and the content block widens to 232.</span>\nEBGenericCard(\n    title = \"GSave Time Deposit\",\n    iconSize = EBGenericCardIconSize.XXS,\n    leadingIcon = { Image(painterResource(R.drawable.gsave), null) },\n    onClick = { open() }\n)"
      },
      {
        "subheading": "Skeleton",
        "swift": "<span class=\"cmt\">// Status=Skeleton, IconSize=XL — 5412:31530, 360 × 146.</span>\nEBGenericCard(\"\")\n    .ebSkeleton(true)",
        "compose": "<span class=\"cmt\">// Status=Skeleton, IconSize=XL — 5412:31530, 360 × 146.</span>\nEBGenericCard(\n    title = \"\",\n    skeleton = true,\n    onClick = { }\n)"
      },
      {
        "subheading": "Disabled",
        "swift": "<span class=\"cmt\">// Status=Default, State=Disabled, IconSize=XL — 5418:32487, 360 × 148.</span>\nEBGenericCard(\"GSave Time Deposit\")\n    .ebBlurb(\"New\")\n    .ebBadge(\"Insured\")\n    .disabled(true)",
        "compose": "<span class=\"cmt\">// Status=Default, State=Disabled, IconSize=XL — 5418:32487, 360 × 148.</span>\nEBGenericCard(\n    title = \"GSave Time Deposit\",\n    blurb = \"New\",\n    badge = \"Insured\",\n    enabled = false,\n    onClick = { }\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Card role",
        "ios": "One <code>Button</code> per card; the label reads blurb, tag, title, then the rows.",
        "android": "<code>Modifier.clickable(role = Role.Button)</code> with a merged <code>contentDescription</code>."
      },
      {
        "requirement": "Tag and badge",
        "ios": "Read them as values, not separate buttons — <code>.accessibilityValue(\"Hot, Insured\")</code>.",
        "android": "Append both to <code>stateDescription</code>."
      },
      {
        "requirement": "Skeleton",
        "ios": "<code>.accessibilityLabel(\"Loading\")</code> and hide the blocks from VoiceOver.",
        "android": "<code>contentDescription = \"Loading\"</code>; blocks <code>clearAndSetSemantics {}</code>."
      },
      {
        "requirement": "Leading icon",
        "ios": "Decorative when the title names the product — <code>.accessibilityHidden(true)</code>.",
        "android": "<code>contentDescription = null</code>."
      },
      {
        "requirement": "Contrast",
        "ios": "Title #0A2757 is 14.58:1 on white and the row description #445C85 6.74:1. The row label #90A8D0 is 2.41:1 and the Disabled text #C2CFE5 1.57:1 — both below AA. White on the #D61B2C tag is 5.18:1.",
        "android": "Same ratios."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Pick the icon size that matches the row’s density — XL for a hero product, XXS in a dense list.",
        "dontText": "Don’t mix icon sizes within one list; the content block shifts with them."
      },
      {
        "doText": "Use Skeleton while the card’s data loads.",
        "dontText": "Don’t leave Skeleton on a card with nothing to fetch."
      },
      {
        "doText": "Keep the blurb to one word and the tag shorter still — they share a 21-tall row.",
        "dontText": "Don’t use both the tag and the badge for the same message."
      },
      {
        "doText": "Use the two description rows for label-and-value pairs.",
        "dontText": "Don’t put a sentence in them; the row is one line at 12pt."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>ContentRow</code>, <code>MediaContainer</code>, <code>ContentBlock</code> and the two icon slots are semantic, but one variant’s frame is <code>IconContainert</code>, the spacer instance is <code>_space_40</code> while measuring 24, and the two description rows are both <code>TextContainer</code> holding <code>Label</code> and <code>Description</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Three PascalCase axes, but <code>has Badge</code> carries a space where every sibling is camelCase, and <code>hasSubtitle</code> / <code>hasDescription</code> both point at the same pair of identical rows."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "All three text layers resolve <code>matched</code> — <code>Primary/Label/Small</code>, <code>Primary/Headlines/Block</code>, <code>Secondary/Bold/Caption</code>. Colour bindings cannot be read, and the Tag keeps its full-strength red in Disabled."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Maps to one card with an icon-size enum and optional parts, but the 18 variants encode a loading status that is runtime state natively."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Default, Disabled and Skeleton ship. There is no pressed state on a card that is tappable."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Leading and trailing icons are real SLOTs with 12 swap options each, plus a Description slot with 12."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Three axes, seven booleans and three slots are ready to map; no mappings are registered."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 18,
      "description": "<code>Status</code> (2) × <code>State</code> (2) × <code>IconSize</code> (6) would be 24; 18 are built, because Skeleton ships <code>State=Default</code> only. The seven booleans add none.",
      "columns": [
        "Status",
        "State",
        "IconSize",
        "Icon",
        "Node ID",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "Default",
            "Default",
            "XL",
            "64",
            "<code>5412:31505</code>",
            "360 × 148"
          ]
        },
        {
          "cells": [
            "Default",
            "Disabled",
            "XL",
            "64",
            "<code>5418:32487</code>",
            "360 × 148"
          ]
        },
        {
          "cells": [
            "Skeleton",
            "Default",
            "XL",
            "64",
            "<code>5412:31530</code>",
            "360 × 146"
          ]
        },
        {
          "cells": [
            "Default",
            "Default",
            "LG",
            "52",
            "<code>5412:31541</code>",
            "360 × 148"
          ]
        },
        {
          "cells": [
            "Default",
            "Disabled",
            "LG",
            "52",
            "<code>5418:32462</code>",
            "360 × 148"
          ]
        },
        {
          "cells": [
            "Skeleton",
            "Default",
            "LG",
            "52",
            "<code>5412:31566</code>",
            "360 × 146"
          ]
        },
        {
          "cells": [
            "Default",
            "Default",
            "MD",
            "46",
            "<code>5412:31577</code>",
            "360 × 148"
          ]
        },
        {
          "cells": [
            "Default",
            "Disabled",
            "MD",
            "46",
            "<code>5418:32437</code>",
            "360 × 148"
          ]
        },
        {
          "cells": [
            "Skeleton",
            "Default",
            "MD",
            "46",
            "<code>5412:31602</code>",
            "360 × 146"
          ]
        },
        {
          "cells": [
            "Default",
            "Default",
            "SM",
            "40",
            "<code>5412:31613</code>",
            "360 × 148"
          ]
        },
        {
          "cells": [
            "Default",
            "Disabled",
            "SM",
            "40",
            "<code>5418:32412</code>",
            "360 × 148"
          ]
        },
        {
          "cells": [
            "Skeleton",
            "Default",
            "SM",
            "40",
            "<code>5412:31638</code>",
            "360 × 146"
          ]
        },
        {
          "cells": [
            "Default",
            "Default",
            "XS",
            "32",
            "<code>5412:31649</code>",
            "360 × 148"
          ]
        },
        {
          "cells": [
            "Default",
            "Disabled",
            "XS",
            "32",
            "<code>5418:32387</code>",
            "360 × 148"
          ]
        },
        {
          "cells": [
            "Skeleton",
            "Default",
            "XS",
            "32",
            "<code>5412:31674</code>",
            "360 × 146"
          ]
        },
        {
          "cells": [
            "Default",
            "Default",
            "XXS",
            "24",
            "<code>5412:31685</code>",
            "360 × 148"
          ]
        },
        {
          "cells": [
            "Default",
            "Disabled",
            "XXS",
            "24",
            "<code>5418:32362</code>",
            "360 × 148"
          ]
        },
        {
          "cells": [
            "Skeleton",
            "Default",
            "XXS",
            "24",
            "<code>5412:31710</code>",
            "360 × 146"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.4",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "IconSize locks without a leading element · node 5412:31504",
      "rows": [
        {
          "body": "<strong><code>IconSize</code> only describes the leading icon.</strong> With <code>hasLeadingElement=False</code> the control is disabled and the row reads <code>—</code>, so the panel cannot offer a size for an icon that is not there.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>The set cannot express that</strong> — <code>IconSize</code> is a variant axis, so all six values stay selectable in Figma even when the boolean hides the icon. Worth folding the size into the slot instead. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        }
      ]
    },
    {
      "version": "2.0.3",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Chevron sits 14 below the row top · node 5412:31504",
      "rows": [
        {
          "body": "<strong>The chevron is not centred.</strong> <code>Trailing-Icon-Slot</code> sits 14 below the row top — y 30 on the full card — and holds that offset at every IconSize, so it lines up with the heading rather than the card’s middle. The leading icon is flush with the row top.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Both fall back to centred on a short row</strong>, which is the title-and-chevron case from the previous pass.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        }
      ]
    },
    {
      "version": "2.0.2",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Chevron and placeholder colours · node 5412:31504",
      "rows": [
        {
          "body": "<strong>The chevron is #005CE5, not the navy title colour</strong> — and #9BC5FD when Disabled. The icon placeholder follows: #D3DCEA by default, #9BC5FD when Disabled.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Both come from <code>export_node_as_image</code>.</strong> The Chevron Right and Placeholder instances expose only their guide layers to the plugin, never the glyph fill. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        }
      ]
    },
    {
      "version": "2.0.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Vertical centring on short cards · node 5412:31504",
      "rows": [
        {
          "body": "<strong>Columns now centre on the row.</strong> With only a title and a chevron the heading sat 4px high against a centred chevron; the content block, the leading icon and the chevron all centre on the tallest of the three.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        }
      ]
    },
    {
      "version": "2.0.0",
      "date": "September 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Style + Code tabs rebuilt against the live set · node 5412:31504",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt to one card with the Figma property panel</strong> — <code>Status</code>, <code>State</code>, <code>IconSize</code> and the seven booleans. The three slots are listed without controls.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Preview redrawn from the set.</strong> 360 × 148 (Skeleton 146): 24 left padding, the icon, a gap, the content block, a 24 spacer, the 32 trailing icon and 12 right padding.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>IconSize only changes the leading icon</strong> — 64, 52, 46, 40, 32, 24 — and the gap after it shrinks with it (24, 24, 20, 16, 16, 12), so the content block widens from 180 to 232. Every variant stays 148 tall.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Typography resolved against the token database.</strong> <code>Blurb</code> → <code>Primary/Label/Small</code>, <code>Title</code> → <code>Primary/Headlines/Block</code>, the row text → <code>Secondary/Bold/Caption</code>, all matched.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Code tab rebuilt on the live set</strong> — install <code>com.eastblue.ds:generic-card:2.0.0</code>, a thirteen-row mapping, four snippets and an 18-row inventory.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong><code>has Badge</code> carries a space</strong> where every sibling property is camelCase — it will not survive Code Connect as written. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong><code>hasSubtitle</code> and <code>hasDescription</code> point at the same pair of rows.</strong> Both <code>TextContainer</code> rows are named identically and every variant ships them on, so the preview maps hasDescription to the first and hasSubtitle to the second — a guess that needs confirming. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>Layer-name slips.</strong> One variant’s frame is <code>IconContainert</code>, and the spacer instance is <code>_space_40</code> while measuring 24 wide. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>The Tag keeps its full-strength red in Disabled</strong> — #D61B2C on a card whose every other element has dropped to #C2CFE5. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C3"
          }
        },
        {
          "body": "<strong>No pressed state</strong> on a card that is tappable — the set ships Default, Disabled and Skeleton only. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>Row label and disabled text fail AA</strong> — #90A8D0 is 2.41:1 and #C2CFE5 1.57:1 at 12pt. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "A11y"
          }
        },
        {
          "body": "<strong>Heights with the booleans off are computed, not read</strong> — all 18 variants ship them on, so the hidden layers report stale coordinates. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
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
