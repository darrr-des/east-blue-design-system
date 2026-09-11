import type { ComponentData, DemoControlSection } from '../types';
import { buildColorsTable } from './_helpers';

/* Demo controls for the Style tab's single spec card. Three axes; the
   menu only renders when State=Expanded. */
const selectControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Type',
        prop: 'type',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'pesosignvector', label: 'PesoSignVector' },
          { value: 'pesosigntext', label: 'PesoSignText' }
        ],
        defaultValue: 'default'
      },
      {
        label: 'State',
        prop: 'state',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'expanded', label: 'Expanded' },
          { value: 'error', label: 'Error' },
          { value: 'disabled', label: 'Disabled' }
        ],
        defaultValue: 'default'
      },
      {
        label: 'isFilled',
        prop: 'isfilled',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ],
        defaultValue: 'false'
      }
    ]
  }
];


/* Panel for the three spec cards. Type is the driving property, so it is
   a card rather than a control; State and isFilled stay controls. */
const selectCardControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'expanded', label: 'Expanded' },
          { value: 'error', label: 'Error' },
          { value: 'disabled', label: 'Disabled' }
        ],
        defaultValue: 'default'
      },
      {
        label: 'isFilled',
        prop: 'isfilled',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ],
        defaultValue: 'false'
      }
    ]
  }
];

export const dropdown: ComponentData = {
  "meta": {
    "slug": "dropdown",
    "name": "Select",
    "node": "7947:111865",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=7947-111865",
    "description": "A trigger field that opens a menu of options — composes Select Field for the trigger and Select Group for the menu.",
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
    "navGroup": "Select",
    "verdict": {
      "kind": "keep",
      "title": "Keep — a clean three-axis schema over two composed components",
      "text": "Select had already been rebuilt twice before this pass: v2.0 added <code>State=Disabled</code>, dropped a product-specific Mobile variant and moved to composing <a href=\"/components/select-field\">Select Field</a> plus <a href=\"/components/dropdown-item-group\">Select Group</a>, and v2.1 finished the schema by renaming <code>State=Active</code> to <code>Expanded</code>, aligning <code>isFilled</code> to <code>true</code>/<code>false</code>, and removing a redundant <code>isSelected</code>. Neither was ever written into the changelog. This pass records them, adds the third <code>Type</code> value the 2026 file introduced, and closes the naming and the placeholder copy. The absence of a pressed state remains correct — a form field signals interaction by expanding, not by tinting. Nothing is outstanding on the component itself; Code Connect stays open because the native library does not exist yet."
    }
  },
  "overview": {
    "inContextNote": "Sits in forms where a value is chosen from a fixed list rather than typed. The menu overlays the content below it, so the trigger's own box stays 46 tall in every state.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"sel-demo-preview\"><div class=\"eb-preview-sel\"><div class=\"eb-preview-sel__field\"><span class=\"eb-preview-sel__value\">Select Option</span><span class=\"eb-preview-sel__chevron\"><svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" aria-hidden=\"true\"><path d=\"M9 13L16 20L23 13\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Type</span><select id=\"sel-ctrl-type\" class=\"demo-panel-select\" onchange=\"_selUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"pesosignvector\">PesoSignVector</option><option value=\"pesosigntext\">PesoSignText</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select id=\"sel-ctrl-state\" class=\"demo-panel-select\" onchange=\"_selUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"expanded\">Expanded</option><option value=\"error\">Error</option><option value=\"disabled\">Disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isFilled</span><select id=\"sel-ctrl-isfilled\" class=\"demo-panel-select\" onchange=\"_selUpdate()\"><option value=\"false\" selected=\"\">false</option><option value=\"true\">true</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Every fixed-list choice in a form is this control. The three Types cover the plain case and the two currency treatments the product needs."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns the schema and the assembly. It draws neither the trigger nor the menu — both come from their own components — which is what keeps its own surface area small."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "<code>Type = Default | PesoSignVector | PesoSignText</code> after this pass, matching the same two currency values on <a href=\"/components/dropdown-item\">Select Item</a>. <code>State</code> and <code>isFilled</code> were settled in v2.1 and still hold."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Composes Select Field and Select Group as instances rather than redrawing them, so a change to either flows through. Its own menu content is whatever Select Group's slot holds."
      }
    ],
    "behavior": [
      {
        "state": "State=Default",
        "ios": "na",
        "android": "na",
        "property": "border #D7E0EF",
        "notes": "Collapsed. Chevron points down; the menu instance is present but hidden."
      },
      {
        "state": "State=Expanded",
        "ios": "na",
        "android": "na",
        "property": "border #005CE5",
        "notes": "The menu appears below the trigger and the chevron flips to <code>Chevron Up</code>. The trigger's own box stays 46 tall — the menu overlays what is beneath it."
      },
      {
        "state": "State=Error",
        "ios": "na",
        "android": "na",
        "property": "border #D61B2C",
        "notes": "Border only. The error message itself belongs to the form, not to this control."
      },
      {
        "state": "State=Disabled",
        "ios": "na",
        "android": "na",
        "property": "#F6F9FD fill",
        "notes": "The only state that changes the fill as well as the border."
      },
      {
        "state": "isFilled",
        "ios": "na",
        "android": "na",
        "property": "value vs placeholder",
        "notes": "Switches the trigger between the <code>#90A8D0</code> placeholder and a chosen value in <code>#0A2757</code>. The copy follows the Type: Default runs \"Select Option\" → \"Selected Option\", both currency Types run \"Select Value\" → <code>1,000.00</code>. There is no floating label — the <code>#label</code> layer ships hidden in all 24 versions."
      },
      {
        "state": "No pressed state",
        "ios": "na",
        "android": "na",
        "property": "by design",
        "notes": "A form field signals interaction by expanding, not by tinting. Confirmed correct in the previous assessment and unchanged."
      }
    ],
    "resolved": [
      {
        "headline": "The copy rule holds across all three Types.",
        "body": "Default asks for an option and fills with <code>Selected Option</code>; both currency Types ask for a value and fill with <code>1,000.00</code>. The four <code>Type=Default, isFilled=true</code> variants read \"Selected Value\" until this pass — the plain version filling with the currency version’s word. All four were corrected in Figma while the review was open, so the split is now consistent in the file and on the page.",
        "tag": { "criterion": "C1", "label": "C1 · Layer Structure & Naming" }
      },
      {
        "headline": "The peso sign dims with the field now.",
        "body": "It used to keep <code>text/color-text</code> #0A2757 in <code>State=Disabled</code> while the placeholder and the chevron faded around it, so the field read as half switched-off. Both marks were corrected in Figma during this pass and now take <code>text/color-text-disabled</code> #C2CFE5 — the drawn <code>PesoSignVector</code> and the <code>PesoSignText</code> glyph alike. Enabled is unchanged at #0A2757.",
        "tag": { "criterion": "C5", "label": "C5 · Interaction State Coverage" }
      },
      {
        "headline": "Two undocumented rebuilds are now on the record.",
        "body": "The v2.0 rebuild added <code>State=Disabled</code>, dropped a product-specific Mobile variant and moved to composing Select Field and Select Group. v2.1 renamed <code>State=Active</code> to <code>Expanded</code>, aligned <code>isFilled</code> to <code>true</code>/<code>false</code> so it agreed with the field it wraps, and removed a redundant <code>isSelected</code>. Both were described in the component's verdict but neither reached the changelog, so the history stopped at the initial assessment. This version covers them.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "A third Type joined, deliberately.",
        "body": "The matrix was <code>Type</code> (2) × <code>State</code> (4) × <code>isFilled</code> (2) = 16. It is now 24, because currency needed two treatments rather than one: <code>PesoSignVector</code> is a custom SVG drawn to match the font, <code>PesoSignText</code> is Proxima's own ₱ glyph. They render almost identically at this size, which is exactly why the distinction has to be documented rather than left to the eye.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The multi-word values are joined.",
        "body": "<code>Peso</code> and <code>Text - Peso Sign</code> became <code>PesoSignVector</code> and <code>PesoSignText</code> — spaces and the hyphen separator gone, renamed for what they are rather than how they were first described, and matched to the same values on <a href=\"/components/dropdown-item\">Select Item</a> so the two components agree.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The placeholder copy agrees across states.",
        "body": "<code>State=Expanded, isFilled=false</code> read \"Value\" while <code>State=Default, isFilled=false</code> read \"Select Option\" — the same unfilled control saying two different things depending on whether it was open. Both now read \"Select Option\".",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The menu's leftovers were cleaned up in Select Group.",
        "body": "Every one of the 24 variants embeds a Select Group instance, so the five stale hidden rows and the vestigial <code>Dropdown Item - Last</code> name were shipping 24 times over. Both were fixed at the source — see <a href=\"/components/dropdown-item-group\">Select Group</a>.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The menu instance rides along in all 24 variants.",
        "body": "It is present whether or not <code>State=Expanded</code>, hidden in the 20 collapsed ones. That is how a Figma variant carries an overlay it cannot conditionally instantiate, and it is why the trigger's box stays 46 tall while the menu overflows below it. Natively the menu is presented, not embedded.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "The leading mark's right padding is uniform at 8.",
        "body": "The two currency types had different right padding on their <code>peso-sign</code> frame, so the label started at a slightly different place depending on which one was chosen. Both are now 8, and the frames sit flush against <code>text-container</code> — the frame widths still differ, 23 against 18, but only because the custom SVG glyph is wider than Proxima's. The layer belongs to <a href=\"/components/select-field\">Select Field</a> rather than to Select, but the change is confined to the variants where a currency mark is visible, so nothing that does not show one moves.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "No pressed state, still correct.",
        "body": "Form fields signal interaction by expanding rather than by tinting, so Pressed would be a state with nothing to show. Confirmed in the previous assessment and unchanged here.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      }
    ],
    "open": [
      {
        "headline": "The drawn peso sign is an unflattened boolean shape.",
        "body": "The <code>PesoSignVector</code> artwork is a <code>BOOLEAN_OPERATION</code>, not a flattened vector — the right shape in the wrong wrapper, which exports less predictably than the rest of the icon set. One for the iconography team. The mark lives inside <strong>Select Field</strong>, so fixing it there fixes it everywhere it appears.",
        "tag": { "criterion": "C6", "label": "C6 · Asset & Icon Quality" }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — the native library does not exist yet, so there is nothing to map onto. The component side is ready: <code>Type</code>, <code>State</code> and <code>isFilled</code> all map one to one now the multi-word values are joined.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Select Field is out of scope, and that needs saying out loud.",
        "body": "The trigger is a <a href=\"/components/select-field\">Select Field</a> instance, and that component also backs text fields and other visually similar inputs — changing it to suit Select would move things that have nothing to do with Select. So it was deliberately excluded from this review. A developer reading this page will reasonably ask why the trigger is not documented alongside the menu, and the answer is blast radius rather than oversight. Its internals do carry lowercase and kebab-case layer names, and a hidden <code>philippines</code> rectangle that this pass confirmed is a raster image fill rather than a vector flag — all of it waiting on that component being assessed on its own terms.",
        "tag": "Docs"
      },
      {
        "headline": "Document when to use PesoSignVector versus PesoSignText.",
        "body": "One is a custom SVG matched to the font, the other is Proxima's native ₱. At 16px they are nearly indistinguishable, so a designer picking from the variant menu has nothing to go on. A sentence on the component turns a coin-flip into a decision.",
        "tag": "Docs"
      },
      {
        "headline": "Specify how the menu is presented natively.",
        "body": "In Figma the menu is an embedded instance that overflows the trigger's box. On both platforms it is a presented surface — a popup or a sheet — with its own dismissal, its own scroll and its own placement rules when there is no room below. None of that is visible in the component, so it belongs in the native contract.",
        "tag": "Docs"
      },
      {
        "headline": "Specify the accessible combobox contract.",
        "body": "A Select needs a role, an expanded state, a link between the trigger and the list it controls, and the chosen value announced on change. The error state also needs its message associated with the field rather than merely rendered near it — the red border alone reaches no one using a screen reader.",
        "tag": "A11y"
      },

      {
        "headline": "See siblings:",
        "body": "<a href=\"/components/dropdown-item-group\">Select Group</a> is the menu this opens and <a href=\"/components/dropdown-item\">Select Item</a> is the row inside it — both reassessed alongside this component. <a href=\"/components/select-field\">Select Field</a> is the trigger, out of scope.",
        "tag": "Family"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Settle the placeholder wording across the three Types.",
        "body": "v2.0.1: Applied — the wording is deliberate and now written down. <code>Type=Default</code> asks for an option and fills with <code>Selected Option</code>. Both currency Types ask for a value and fill with an amount, <code>1,000.00</code>. The previews and the code samples use exactly that copy, so a designer picking a version is not left guessing whether \"Select Value\" was a typo.",
        "tag": "Docs"
      },
      {
        "headline": "Publish the token names once Dev Mode is read.",
        "body": "v2.0.1: Applied — every colour on the page is now named. The field is <code>bg/color-bg-main</code>, or <code>bg/color-bg</code> when disabled. The border runs <code>border/color-border</code>, <code>-primary</code>, <code>-error</code> and <code>-weak</code> across the four states, at 1px, 2px, 2px and 1px. The value is <code>text/color-text-weakest</code> as a placeholder, <code>text/color-text</code> once chosen and <code>text/color-text-disabled</code> when switched off, and the chevron is <code>border/color-border-primary</code> and <code>-primary-disabled</code>. Read against the rest of the system rather than from Dev Mode, which still returns IDs instead of names.",
        "tag": "Token"
      }
    ]
  },
  "style": {
    "heading": "Structure",
    "colorsTables": [
      buildColorsTable({
        title: "Colors by State",
        description: "Select owns the schema and composes the drawing: the trigger is a <strong>Select Field</strong> instance — out of this review’s scope, since it also backs text fields — and the menu is a <a href=\"/components/dropdown-item-group\">Select Group</a> instance holding seven <a href=\"/components/dropdown-item\">Select Item</a> rows at MiddleInset · Compact. Below is every hex Select paints, across the four states. The token changes with the state on three of the roles, so each one gets its own row rather than a single row with four names crammed into it. The leading mark dims with everything else — it held text/color-text in Disabled until that was corrected in Figma during this pass. The menu row is empty because everything inside it belongs to Select Group and Select Item.",
        columns: ["Default", "Expanded", "Error", "Disabled"],
        rows: [
          { role: "Field fill", token: "bg/color-bg-main", values: ["#FFFFFF","#FFFFFF","#FFFFFF","–"] },
          { role: "Field fill · Disabled", token: "bg/color-bg", values: ["–","–","–","#F6F9FD"] },
          { role: "Field border · Default", token: "border/color-border · 1px", values: ["#D7E0EF","–","–","–"] },
          { role: "Field border · Expanded", token: "border/color-border-primary · 2px", values: ["–","#005CE5","–","–"] },
          { role: "Field border · Error", token: "border/color-border-error · 2px", values: ["–","–","#D61B2C","–"] },
          { role: "Field border · Disabled", token: "border/color-border-weak · 1px", values: ["–","–","–","#E5EBF4"] },
          { role: "Value · placeholder", token: "text/color-text-weakest", values: ["#90A8D0","#90A8D0","#90A8D0","–"] },
          { role: "Value · isFilled=true", token: "text/color-text", values: ["#0A2757","#0A2757","#0A2757","–"] },
          { role: "Value · Disabled", token: "text/color-text-disabled", values: ["–","–","–","#C2CFE5"] },
          { role: "Chevron", token: "border/color-border-primary — 32 × 32 box, 2px stroke", values: ["#005CE5","#005CE5","#005CE5","–"] },
          { role: "Chevron · Disabled", token: "border/color-border-primary-disabled · 2px", values: ["–","–","–","#9BC5FD"] },
          { role: "Leading mark", token: "text/color-text", values: ["#0A2757","#0A2757","#0A2757","–"] },
          { role: "Leading mark · Disabled", token: "text/color-text-disabled", values: ["–","–","–","#C2CFE5"] },
          { role: "Menu surface", token: "bg/color-bg-main — set by Select Group", values: ["–","#FFFFFF","–","–"] },
          { role: "Menu border", token: "border/color-border-weak — set by Select Group", values: ["–","#E5EBF4","–","–"] },
          { role: "Menu rows", token: "set by the Select Item instances placed", values: ["–","–","–","–"] }
        ]
      })
    ],
    "specCards": [
      {
        "cardKey": "sel-spec-card-default",
        "demoKey": "default",
        "demoControls": selectCardControls,
        "title": "Default",
        "node": "7947:111932",
        "description": "",
        "previewHtml": "<div id=\"sel-spec-default\"><div class=\"eb-preview-sel\"><div class=\"eb-preview-sel__field\"><span class=\"eb-preview-sel__value\">Select Option</span><span class=\"eb-preview-sel__chevron\"><svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" aria-hidden=\"true\"><path d=\"M9 13L16 20L23 13\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Type",
                "value": "Default"
              },
              {
                "key": "State",
                "value": "Default",
                "prop": "state",
                "variants": {
                  "state:expanded": {
                    "value": "Expanded"
                  },
                  "state:error": {
                    "value": "Error"
                  },
                  "state:disabled": {
                    "value": "Disabled"
                  }
                }
              },
              {
                "key": "isFilled",
                "value": "false",
                "prop": "isfilled",
                "variants": {
                  "isfilled:true": {
                    "value": "true"
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
                "key": "Field fill",
                "value": "#FFFFFF",
                "token": "bg/color-bg-main",
                "swatch": true,
                "variants": {
                  "state:disabled": {
                    "value": "#F6F9FD",
                    "token": "bg/color-bg"
                  }
                }
              },
              {
                "key": "Field border",
                "value": "#D7E0EF",
                "token": "border/color-border · 1px",
                "swatch": true,
                "variants": {
                  "state:expanded": {
                    "value": "#005CE5",
                    "token": "border/color-border-primary · 2px"
                  },
                  "state:error": {
                    "value": "#D61B2C",
                    "token": "border/color-border-error · 2px"
                  },
                  "state:disabled": {
                    "value": "#E5EBF4",
                    "token": "border/color-border-weak · 1px"
                  }
                }
              },
              {
                "key": "Value",
                "value": "#90A8D0",
                "token": "text/color-text-weakest",
                "swatch": true,
                "variants": {
                  "isfilled:true": {
                    "value": "#0A2757",
                    "token": "text/color-text"
                  },
                  "state:disabled": {
                    "value": "#C2CFE5",
                    "token": "text/color-text-disabled"
                  },
                  "state:disabled|isfilled:true": {
                    "value": "#C2CFE5",
                    "token": "text/color-text-disabled"
                  }
                }
              },
              {
                "key": "Chevron",
                "value": "#005CE5",
                "token": "border/color-border-primary — 32 × 32 box, 2px stroke",
                "swatch": true,
                "variants": {
                  "state:disabled": {
                    "value": "#9BC5FD",
                    "token": "border/color-border-primary-disabled · 2px"
                  }
                }
              },
              {
                "key": "Menu",
                "value": "–",
                "token": "not drawn until State=Expanded",
                "variants": {
                  "state:expanded": {
                    "value": "#FFFFFF",
                    "token": "bg/color-bg-main on border/color-border-weak — set by Select Group"
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
                "key": "#value",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "#label (hidden)",
                "value": "Primary/Label/Light/Base",
                "mono": true
              },
              {
                "key": "Menu row label",
                "value": "Primary/Multi-line Label/Light/Base",
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
                "value": "46",
                "mono": true,
                "variants": {
                  "state:expanded": {
                    "value": "46 — the 312 menu is absolutely placed 4 below, adding no height"
                  }
                }
              },
              {
                "key": "Width",
                "value": "Fill — 366",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "6",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "6",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "0 — the leading slot carries its own 8 inside itself",
                "mono": true,
                "variants": {
                  "state:expanded": {
                    "value": "0"
                  }
                }
              },
              {
                "key": "Alignment",
                "value": "Left · Center",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSelect</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    placeholder<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Select Option\"</span><span class=\"syn-punc\">,</span>\n    type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.default</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBSelect</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    placeholder <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Select Option\"</span><span class=\"syn-punc\">,</span>\n    type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Default</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "cardKey": "sel-spec-card-pesosignvector",
        "demoKey": "pesosignvector",
        "demoControls": selectCardControls,
        "title": "PesoSignVector",
        "node": "7947:111938",
        "description": "",
        "previewHtml": "<div id=\"sel-spec-pesosignvector\"><div class=\"eb-preview-sel\"><div class=\"eb-preview-sel__field\"><span class=\"eb-preview-sel__lead eb-preview-sel__lead--vector\"><svg width=\"15\" height=\"24\" viewBox=\"0 0 15 24\" fill=\"none\" aria-hidden=\"true\"><path d=\"M8.23438 6.44531C9.85278 6.44534 11.2144 7.54183 11.6191 9.03223H12.1533C12.6311 9.0324 13.0185 9.41968 13.0186 9.89746C13.0186 10.3753 12.6311 10.7625 12.1533 10.7627H11.6475C11.2821 12.3099 9.8932 13.4619 8.23438 13.4619H5.75293V16.498C5.75271 17.0778 5.28289 17.5479 4.70312 17.5479C4.12345 17.5478 3.65354 17.0777 3.65332 16.498V10.7627H3.05273C2.57485 10.7626 2.1875 10.3754 2.1875 9.89746C2.18755 9.41961 2.57488 9.03229 3.05273 9.03223H3.65332V7.49805C3.65332 6.93887 4.09045 6.48214 4.6416 6.4502C4.67527 6.44658 4.70951 6.44532 4.74414 6.44531H8.23438ZM5.75293 10.7627V11.5576H8.23438C8.82481 11.5576 9.33957 11.2377 9.61816 10.7627H5.75293ZM5.75293 9.03223H9.54688C9.2565 8.6196 8.77714 8.34962 8.23438 8.34961H5.75293V9.03223Z\" fill=\"currentColor\"/></svg></span><span class=\"eb-preview-sel__value\">Select Value</span><span class=\"eb-preview-sel__chevron\"><svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" aria-hidden=\"true\"><path d=\"M9 13L16 20L23 13\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Type",
                "value": "PesoSignVector"
              },
              {
                "key": "State",
                "value": "Default",
                "prop": "state",
                "variants": {
                  "state:expanded": {
                    "value": "Expanded"
                  },
                  "state:error": {
                    "value": "Error"
                  },
                  "state:disabled": {
                    "value": "Disabled"
                  }
                }
              },
              {
                "key": "isFilled",
                "value": "false",
                "prop": "isfilled",
                "variants": {
                  "isfilled:true": {
                    "value": "true"
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
                "key": "Field fill",
                "value": "#FFFFFF",
                "token": "bg/color-bg-main",
                "swatch": true,
                "variants": {
                  "state:disabled": {
                    "value": "#F6F9FD",
                    "token": "bg/color-bg"
                  }
                }
              },
              {
                "key": "Field border",
                "value": "#D7E0EF",
                "token": "border/color-border · 1px",
                "swatch": true,
                "variants": {
                  "state:expanded": {
                    "value": "#005CE5",
                    "token": "border/color-border-primary · 2px"
                  },
                  "state:error": {
                    "value": "#D61B2C",
                    "token": "border/color-border-error · 2px"
                  },
                  "state:disabled": {
                    "value": "#E5EBF4",
                    "token": "border/color-border-weak · 1px"
                  }
                }
              },
              {
                "key": "Value",
                "value": "#90A8D0",
                "token": "text/color-text-weakest",
                "swatch": true,
                "variants": {
                  "isfilled:true": {
                    "value": "#0A2757",
                    "token": "text/color-text"
                  },
                  "state:disabled": {
                    "value": "#C2CFE5",
                    "token": "text/color-text-disabled"
                  },
                  "state:disabled|isfilled:true": {
                    "value": "#C2CFE5",
                    "token": "text/color-text-disabled"
                  }
                }
              },
              {
                "key": "Leading mark",
                "value": "#0A2757",
                "token": "text/color-text",
                "swatch": true,
                "variants": {
                  "state:disabled": { "value": "#C2CFE5", "token": "text/color-text-disabled" }
                }
              },
              {
                "key": "Chevron",
                "value": "#005CE5",
                "token": "border/color-border-primary — 32 × 32 box, 2px stroke",
                "swatch": true,
                "variants": {
                  "state:disabled": {
                    "value": "#9BC5FD",
                    "token": "border/color-border-primary-disabled · 2px"
                  }
                }
              },
              {
                "key": "Menu",
                "value": "–",
                "token": "not drawn until State=Expanded",
                "variants": {
                  "state:expanded": {
                    "value": "#FFFFFF",
                    "token": "bg/color-bg-main on border/color-border-weak — set by Select Group"
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
                "key": "#value",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "#label (hidden)",
                "value": "Primary/Label/Light/Base",
                "mono": true
              },
              {
                "key": "Menu row label",
                "value": "Primary/Multi-line Label/Light/Base",
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
                "value": "46",
                "mono": true,
                "variants": {
                  "state:expanded": {
                    "value": "46 — the 312 menu is absolutely placed 4 below, adding no height"
                  }
                }
              },
              {
                "key": "Width",
                "value": "Fill — 366",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "6",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "6",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "0 — the leading slot carries its own 8 inside itself",
                "mono": true,
                "variants": {
                  "state:expanded": {
                    "value": "0"
                  }
                }
              },
              {
                "key": "Alignment",
                "value": "Left · Center",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSelect</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    placeholder<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Select Value\"</span><span class=\"syn-punc\">,</span>\n    type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.pesoSignVector</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBSelect</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    placeholder <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Select Value\"</span><span class=\"syn-punc\">,</span>\n    type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">PesoSignVector</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "cardKey": "sel-spec-card-pesosigntext",
        "demoKey": "pesosigntext",
        "demoControls": selectCardControls,
        "title": "PesoSignText",
        "node": "7947:115144",
        "description": "",
        "previewHtml": "<div id=\"sel-spec-pesosigntext\"><div class=\"eb-preview-sel\"><div class=\"eb-preview-sel__field\"><span class=\"eb-preview-sel__lead eb-preview-sel__lead--text\">₱</span><span class=\"eb-preview-sel__value\">Select Value</span><span class=\"eb-preview-sel__chevron\"><svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" aria-hidden=\"true\"><path d=\"M9 13L16 20L23 13\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Type",
                "value": "PesoSignText"
              },
              {
                "key": "State",
                "value": "Default",
                "prop": "state",
                "variants": {
                  "state:expanded": {
                    "value": "Expanded"
                  },
                  "state:error": {
                    "value": "Error"
                  },
                  "state:disabled": {
                    "value": "Disabled"
                  }
                }
              },
              {
                "key": "isFilled",
                "value": "false",
                "prop": "isfilled",
                "variants": {
                  "isfilled:true": {
                    "value": "true"
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
                "key": "Field fill",
                "value": "#FFFFFF",
                "token": "bg/color-bg-main",
                "swatch": true,
                "variants": {
                  "state:disabled": {
                    "value": "#F6F9FD",
                    "token": "bg/color-bg"
                  }
                }
              },
              {
                "key": "Field border",
                "value": "#D7E0EF",
                "token": "border/color-border · 1px",
                "swatch": true,
                "variants": {
                  "state:expanded": {
                    "value": "#005CE5",
                    "token": "border/color-border-primary · 2px"
                  },
                  "state:error": {
                    "value": "#D61B2C",
                    "token": "border/color-border-error · 2px"
                  },
                  "state:disabled": {
                    "value": "#E5EBF4",
                    "token": "border/color-border-weak · 1px"
                  }
                }
              },
              {
                "key": "Value",
                "value": "#90A8D0",
                "token": "text/color-text-weakest",
                "swatch": true,
                "variants": {
                  "isfilled:true": {
                    "value": "#0A2757",
                    "token": "text/color-text"
                  },
                  "state:disabled": {
                    "value": "#C2CFE5",
                    "token": "text/color-text-disabled"
                  },
                  "state:disabled|isfilled:true": {
                    "value": "#C2CFE5",
                    "token": "text/color-text-disabled"
                  }
                }
              },
              {
                "key": "Leading mark",
                "value": "#0A2757",
                "token": "text/color-text",
                "swatch": true,
                "variants": {
                  "state:disabled": { "value": "#C2CFE5", "token": "text/color-text-disabled" }
                }
              },
              {
                "key": "Chevron",
                "value": "#005CE5",
                "token": "border/color-border-primary — 32 × 32 box, 2px stroke",
                "swatch": true,
                "variants": {
                  "state:disabled": {
                    "value": "#9BC5FD",
                    "token": "border/color-border-primary-disabled · 2px"
                  }
                }
              },
              {
                "key": "Menu",
                "value": "–",
                "token": "not drawn until State=Expanded",
                "variants": {
                  "state:expanded": {
                    "value": "#FFFFFF",
                    "token": "bg/color-bg-main on border/color-border-weak — set by Select Group"
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
                "key": "#value",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "#label (hidden)",
                "value": "Primary/Label/Light/Base",
                "mono": true
              },
              {
                "key": "₱",
                "value": "Primary/Label/Light/Base",
                "mono": true
              },
              {
                "key": "Menu row label",
                "value": "Primary/Multi-line Label/Light/Base",
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
                "value": "46",
                "mono": true,
                "variants": {
                  "state:expanded": {
                    "value": "46 — the 312 menu is absolutely placed 4 below, adding no height"
                  }
                }
              },
              {
                "key": "Width",
                "value": "Fill — 366",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "6",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "6",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "0 — the leading slot carries its own 8 inside itself",
                "mono": true,
                "variants": {
                  "state:expanded": {
                    "value": "0"
                  }
                }
              },
              {
                "key": "Alignment",
                "value": "Left · Center",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSelect</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    placeholder<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Select Value\"</span><span class=\"syn-punc\">,</span>\n    type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.pesoSignText</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBSelect</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    placeholder <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Select Value\"</span><span class=\"syn-punc\">,</span>\n    type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">PesoSignText</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
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
          "code": "<span class=\"syn-fn\">implementation</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"com.eastblue.ds:select:1.0.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Import",
          "code": "<span class=\"syn-kw\">import</span> <span class=\"syn-type\">EastBlueDS</span>\n<span class=\"syn-kw\">import</span> com<span class=\"syn-punc\">.</span>eastblue<span class=\"syn-punc\">.</span>ds<span class=\"syn-punc\">.</span>select<span class=\"syn-punc\">.</span><span class=\"syn-punc\">*</span>"
        }
      ],
      "footnote": "Planned API — the native library does not exist yet. The artifact is the Select family: this component, <a href=\"/components/dropdown-item-group\">Select Group</a> and <a href=\"/components/dropdown-item\">Select Item</a> all ship in <code>com.eastblue.ds:select</code> and import <code>com.eastblue.ds.select.*</code>."
    },
    "propertyMapping": {
      "description": "Three variant properties and the menu’s slot. <code>Type</code> is the only one that becomes a parameter: <code>State</code> is presentation and platform idiom rather than API — a caller cannot put a field into Expanded, only open it — and <code>isFilled</code> is derived from whether a selection exists, which is why neither is passed in. The property panel lists one nested instance, <strong>Select Group</strong>, and no slot of its own — natively the rows arrive through the trailing closure, matching <a href=\"/components/dropdown-item-group\">Select Group</a>. Two things the trigger owns are deliberately absent: the placeholder and the floating label are text layers inside <strong>Select Field</strong>, a component this review does not cover because it also backs text fields.",
      "rows": [
        {
          "figma": "Type — Default, PesoSignVector, PesoSignText",
          "swift": "<code>type: EBSelectType = .default</code>",
          "compose": "<code>type: EBSelectType = Default</code>"
        },
        {
          "figma": "State — Default, Expanded, Error, Disabled",
          "swift": "<em>not a parameter</em> — Expanded is the menu’s own presentation, Error is <code>errorMessage: String?</code>, Disabled is <code>.disabled(true)</code>",
          "compose": "<em>not a parameter</em> — Error is <code>isError = true</code> with <code>supportingText</code>, Disabled is <code>enabled = false</code>"
        },
        {
          "figma": "isFilled — true, false",
          "swift": "<em>derived</em> — <code>selection != nil</code>",
          "compose": "<em>derived</em> — <code>selection != null</code>"
        },
        {
          "figma": "Select Group (nested instance)",
          "swift": "<code>@ViewBuilder content: () -> Content</code>",
          "compose": "<code>content: @Composable ColumnScope.() -> Unit</code>"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Default — no leading mark",
        "swift": "<span class=\"syn-type\">EBSelect</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Account\"</span><span class=\"syn-punc\">,</span>\n    placeholder<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Select Option\"</span><span class=\"syn-punc\">,</span>\n    type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.default</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Savings account\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Checking account\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBSelect</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Account\"</span><span class=\"syn-punc\">,</span>\n    placeholder <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Select Option\"</span><span class=\"syn-punc\">,</span>\n    type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Default</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Savings account\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Checking account\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "subheading": "PesoSignVector — the drawn currency mark",
        "swift": "<span class=\"syn-type\">EBSelect</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">,</span>\n    placeholder<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Select Value\"</span><span class=\"syn-punc\">,</span>\n    type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.pesoSignVector</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"₱500\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"₱1,000\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBSelect</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">,</span>\n    placeholder <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Select Value\"</span><span class=\"syn-punc\">,</span>\n    type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">PesoSignVector</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"₱500\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"₱1,000\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "subheading": "PesoSignText — the glyph, and an error",
        "swift": "<span class=\"syn-type\">EBSelect</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">,</span>\n    placeholder<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Select Value\"</span><span class=\"syn-punc\">,</span>\n    type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.pesoSignText</span><span class=\"syn-punc\">,</span>\n    errorMessage<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Choose an amount to continue\"</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"₱500\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"₱1,000\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBSelect</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">,</span>\n    placeholder <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Select Value\"</span><span class=\"syn-punc\">,</span>\n    type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">PesoSignText</span><span class=\"syn-punc\">,</span>\n    isError <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span><span class=\"syn-punc\">,</span>\n    supportingText <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Choose an amount to continue\"</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"₱500\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"₱1,000\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "Exposed as a combobox",
        "ios": "Button trait plus <code>.accessibilityValue</code> carrying the chosen option",
        "android": "<code>Modifier.semantics { role = Role.DropdownList }</code>"
      },
      {
        "requirement": "Expanded state is announced",
        "ios": "<code>.accessibilityAddTraits(.isExpanded)</code> while the menu is open",
        "android": "<code>expand</code> and <code>collapse</code> actions on the trigger"
      },
      {
        "requirement": "Error message is associated, not just adjacent",
        "ios": "Message folded into the field's accessibility value",
        "android": "<code>supportingText</code> tied to the field, <code>isError = true</code>"
      },
      {
        "requirement": "Selection announced on change",
        "ios": "The chosen option is announced when the menu closes",
        "android": "Same — the trigger's value updates and is announced"
      },
      {
        "requirement": "Menu dismissable without choosing",
        "ios": "Escape gesture closes and returns focus to the trigger",
        "android": "Back press closes and returns focus to the trigger"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Select when the value comes from a fixed, known list.",
        "dontText": "Don't use it for free text or for a list long enough to need searching."
      },
      {
        "doText": "Leave room below the trigger for the menu to open.",
        "dontText": "Don't assume the menu fits inside the trigger's 46px box — it overlays what is beneath it."
      },
      {
        "doText": "Pair Error with a message the form owns.",
        "dontText": "Don't rely on the red border alone — it reaches nobody using a screen reader."
      },
      {
        "doText": "Pick the currency Type deliberately and document which one.",
        "dontText": "Don't mix PesoSignVector and PesoSignText across one form; they differ subtly enough to look like a mistake."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Two composed instances and nothing drawn locally. The placeholder copy agrees across states, the menu’s own leftovers were cleaned up at the source, and the filled copy now follows the Type — <code>Selected Option</code> for Default, <code>1,000.00</code> for the two currency Types."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Three properties, all read off the variant names: <code>Type = Default | PesoSignVector | PesoSignText</code> — the same set <a href=\"/components/dropdown-item\">Select Item</a> uses minus Icon and Flag — plus <code>State</code> and <code>isFilled</code>. The native type is <code>EBSelectType</code>; the page previously called it <code>EBSelectLeading</code>, a name no Figma property matches."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Every colour is named. <code>bg/color-bg-main</code> on the field and <code>bg/color-bg</code> when disabled; <code>border/color-border</code>, <code>-primary</code>, <code>-error</code> and <code>-weak</code> across the four states, at 1px, 2px, 2px and 1px; <code>text/color-text-weakest</code> for the placeholder, <code>text/color-text</code> when filled, <code>text/color-text-disabled</code> when disabled; <code>border/color-border-primary</code> and <code>-primary-disabled</code> on the chevron. Both text layers resolve to <code>Primary/Label/Light/*</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "A trigger plus a presented menu. The embedded-instance-in-every-variant arrangement is a Figma necessity, documented rather than mistaken for the native shape."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Four states across both fill values, and the absence of Pressed is correct for a form field. The one gap this pass found — the currency mark holding #0A2757 in Disabled — was fixed in Figma while the review was open; both marks now take <code>text/color-text-disabled</code>."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "No artwork of its own — the chevron is a 32 × 32 instance with a 2px stroke and the currency marks a 15-wide drawing and a 10-wide glyph, all owned by <strong>Select Field</strong>; the rows belong to <a href=\"/components/dropdown-item\">Select Item</a>. Worth recording where it is drawn: the PesoSignVector artwork is a <code>BOOLEAN_OPERATION</code> rather than a flattened vector."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked — the native library does not exist yet."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 24,
      "description": "3 Type × 4 State × 2 isFilled = 24 variants — a complete matrix, no correlated axes.",
      "summary": {
        "columns": ["Type", "Leading mark", "Covers", "Count"],
        "rows": [
          { "cells": ["Default","—","4 State × 2 isFilled","8"] },
          { "cells": ["PesoSignVector","15 wide, drawn","4 State × 2 isFilled","8"] },
          { "cells": ["PesoSignText","10 wide, glyph","4 State × 2 isFilled","8"] }
        ]
      },
      "columns": ["Type", "State", "isFilled", "Menu", "Node"],
      "rows": [
        { "cells": ["Default","Default","false","hidden","7947:111932"] },
        { "cells": ["Default","Default","true","hidden","7947:111935"] },
        { "cells": ["Default","Expanded","false","shown","7947:111866"] },
        { "cells": ["Default","Expanded","true","shown","7947:111869"] },
        { "cells": ["Default","Error","false","hidden","7947:111944"] },
        { "cells": ["Default","Error","true","hidden","7947:111947"] },
        { "cells": ["Default","Disabled","false","hidden","7947:111956"] },
        { "cells": ["Default","Disabled","true","hidden","7947:111959"] },
        { "cells": ["PesoSignVector","Default","false","hidden","7947:111938"] },
        { "cells": ["PesoSignVector","Default","true","hidden","7947:111941"] },
        { "cells": ["PesoSignVector","Expanded","false","shown","7947:111872"] },
        { "cells": ["PesoSignVector","Expanded","true","shown","7947:111902"] },
        { "cells": ["PesoSignVector","Error","false","hidden","7947:111950"] },
        { "cells": ["PesoSignVector","Error","true","hidden","7947:111953"] },
        { "cells": ["PesoSignVector","Disabled","false","hidden","7947:111962"] },
        { "cells": ["PesoSignVector","Disabled","true","hidden","7947:111965"] },
        { "cells": ["PesoSignText","Default","false","hidden","7947:115144"] },
        { "cells": ["PesoSignText","Default","true","hidden","7947:115386"] },
        { "cells": ["PesoSignText","Expanded","false","shown","7947:115147"] },
        { "cells": ["PesoSignText","Expanded","true","shown","7947:115389"] },
        { "cells": ["PesoSignText","Error","false","hidden","7947:115150"] },
        { "cells": ["PesoSignText","Error","true","hidden","7947:115392"] },
        { "cells": ["PesoSignText","Disabled","false","hidden","7947:115153"] },
        { "cells": ["PesoSignText","Disabled","true","hidden","7947:115395"] }
      ],
      "collapseLabel": "View full Type × State × isFilled breakdown (24 rows)"
    }
  },
  "changelog": [
    {
      "version": "2.1.0",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Style, Code and Overview passes on the 2026 Working File · node 7947:111865",
      "rows": [
        {
          "body": "<strong>The peso sign dims with the field.</strong> It kept <code>text/color-text</code> #0A2757 in <code>State=Disabled</code> while the placeholder and the chevron faded around it, so the field read as half switched-off. Both marks now take <code>text/color-text-disabled</code> #C2CFE5 — the drawn <code>PesoSignVector</code> and the <code>PesoSignText</code> glyph alike.",
          "delta": { "kind": "resolved", "label": "C5 resolved" }
        },
        {
          "body": "<strong>The plain version fills with the right word.</strong> All four <code>Type=Default, isFilled=true</code> variants read \"Selected Value\" — the plain version filling with the currency version’s word. They now read \"Selected Option\". The rule is one line: Default asks for an option and fills with one, both currency Types ask for a value and fill with <code>1,000.00</code>.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>The currency artwork is still an unflattened boolean.</strong> <code>PesoSignVector</code> draws a <code>BOOLEAN_OPERATION</code> rather than a flattened vector — the right shape in the wrong wrapper. Logged for the iconography team rather than fixed here; it lives inside <strong>Select Field</strong>, so one fix covers everywhere it appears.",
          "delta": { "kind": "open", "label": "C6 open" }
        },
        {
          "body": "<strong>One card became three.</strong> <code>Type</code> is the driving property, so Default, PesoSignVector and PesoSignText each get a card. <code>State</code> and <code>isFilled</code> stay controls — three cards describing 24 versions instead of one card describing none of them in particular.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Layout is the seven keys, read off the Auto layout panel.</strong> <code>W Fill (366) · H 46 · gap 0 · padding 12 / 6 · left, centre</code>. The old rows carried nine ad-hoc keys including a derived <code>Padding V: 0</code> that was 6, and a bare <code>366</code> where the panel says <strong>Fill</strong>. The four sections are in guide order now — Properties, Colors, Typography, Layout.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Every colour is named, and the border weights with them.</strong> A Colors by State table carries all fifteen roles. The field is <code>bg/color-bg-main</code>, or <code>bg/color-bg</code> when disabled; the border runs <code>border/color-border</code>, <code>-primary</code>, <code>-error</code> and <code>-weak</code> across the four states at <strong>1px, 2px, 2px and 1px</strong> — not the uniform weight the page implied. The page previously said \"names pending Dev Mode read\".",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>Both text styles resolve.</strong> <code>#value</code> is <code>Primary/Label/Light/Small</code> and the hidden <code>#label</code> is <code>Primary/Label/Light/Base</code>, replacing three font specs. The <code>₱</code> glyph resolves to the same style as the label.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>The preview drew in the documentation font.</strong> <code>.eb-preview-sel</code> declared <code>font-family: inherit</code>, which resolves to BarkAda. Every text layer here is <code>Primary/*</code>, so the root names Proxima Soft. Caught by the typeface check rather than by eye.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The chevron is the real artwork.</strong> It was a 20 × 20 box with two rotated CSS borders. It is now the exported instance — 32 × 32, <code>M9 13L16 20L23 13</code> at a 2px round-capped stroke, with the real <code>Chevron Up</code> path for Expanded rather than a rotated copy of the down one. Disabled reaches it through <code>currentColor</code> at <code>border/color-border-primary-disabled</code> #9BC5FD, where the page had the text disabled grey.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The menu draws the seven rows Figma places.</strong> The preview showed five, and its dividers were 1px CSS borders where each is a 4px frame holding a hairline — together 18px short of the 312 height the page documents. Both corrected, so the preview reconstructs its own Layout section. The same two fixes land on <a href=\"/components/dropdown-item-group\">Select Group</a>, which owes them an entry of its own.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The preview copy is the field’s copy.</strong> The filled state showed \"Savings account\", which no variant says. All three cards and the live preview now draw what the field draws, and the DEV snippets are generated from the same source so the two cannot drift.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The leading property was named after nothing in Figma.</strong> <code>EBSelectLeading</code> and a <code>leading:</code> parameter mapped a property called <code>Type</code>. Both are now <code>EBSelectType</code> and <code>type:</code>, matching the property and matching <a href=\"/components/dropdown-item\">Select Item</a>, whose own pass made the same rename. Swift lowerCamels each case, Compose takes the Figma value verbatim.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>The install block pointed at coordinates that will never exist.</strong> <code>gcash/east-blue-ios</code> and <code>com.gcash.eastblue:components:1.0.0</code>, with no Import line. It now cites the Select family artifact <code>com.eastblue.ds:select:1.0.0</code> and imports <code>com.eastblue.ds.select.*</code>, identical to its two siblings.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Property Mapping was one row per value.</strong> Seven rows in <code>State=Expanded</code> form, mixing properties with nested instances. Four rows now, one per property, prose in the Figma cell. <code>State</code> is marked <em>not a parameter</em> and <code>isFilled</code> <em>derived</em> rather than given invented mappings — a caller cannot put a field into Expanded, only open it.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Usage Snippets were keyed to use-cases.</strong> \"A plain select\", \"With a currency leading element\", \"In an error state\". One per <code>Type</code> value now, the same three the Style tab cards use.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The Variants Inventory documented one axis of three.</strong> A four-row State table for a 24-version matrix, with no node IDs. It now has a summary grouped by <code>Type</code> and all 24 in the collapsible, each with its node.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Code Connect emptied, and DEV code is live for the first time.</strong> The demo script had no <code>getSnippet</code>, so both language tabs were frozen on a static string. They now follow the controls: Error adds <code>errorMessage</code>, Compose Disabled adds <code>enabled = false</code>, Swift appends <code>.disabled(true)</code>.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Two things the page said that the component does not do.</strong> The <code>isFilled</code> behaviour row described a label floating above the value — <code>#label</code> ships hidden in all 24 versions. And the trigger’s <code>philippines</code> flag, flagged as \"worth checking for a raster fill\", is one: a hidden raster image, now recorded as confirmed rather than suspected.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        }
      ]
    },
    {
      "version": "2.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Two prior rebuilds recorded + reassessment on the 2026 Working File · node 7947:111865",
      "rows": [
        {
          "body": "<strong>Covers three changes at once.</strong> The v2.0 rebuild and the v2.1 schema pass were both described in the component's verdict but neither reached the changelog, so the history stopped at the initial assessment. This version records them alongside the 2026 reassessment.",
          "delta": { "kind": "resolved", "label": "Rebuilt" }
        },
        {
          "body": "<strong>v2.0</strong> — <code>State=Disabled</code> added, a product-specific Mobile variant dropped, and the component moved to composing <a href=\"/components/select-field\">Select Field</a> and <a href=\"/components/dropdown-item-group\">Select Group</a> rather than drawing them.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "<strong>v2.1</strong> — <code>State=Active</code> renamed <code>Expanded</code>, <code>isFilled</code> aligned to <code>true</code>/<code>false</code> so it agreed with the field it wraps, and a redundant <code>isSelected</code> removed.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>A third <code>Type</code> value added</strong> — currency needed two treatments, a custom SVG matched to the font and Proxima's own ₱ glyph. The matrix went from 16 variants to 24.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<code>Peso</code> and <code>Text - Peso Sign</code> renamed to <code>PesoSignVector</code> and <code>PesoSignText</code>, matching the same values on <a href=\"/components/dropdown-item\">Select Item</a>.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>Placeholder copy reconciled</strong> — the expanded unfilled trigger read \"Value\" while the collapsed one read \"Select Option\". Both now read \"Select Option\".",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "Node moved from <code>25783:1148</code> (Sticker Sheets v2) to <code>7947:111865</code> (2026 Working File), and <code>navGroup</code> changed from Dropdown to Select to match the component's name.",
          "delta": { "kind": "resolved", "label": "Rebuilt" }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 18482:31910",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 8 variants documented across variant (Text/Error/Amount/Mobile) × type (Collapsed/Expanded). Generic dropdown with trigger field, chevron affordance, and overlay item list.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>DropdownItem selected uses yes/no</strong> — <code>selected=yes/no</code> instead of <code>true/false</code>. Incompatible with Swift <code>Bool</code> and Kotlin <code>Boolean</code> for Code Connect mapping.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Missing disabled and pressed states</strong> — Only Collapsed, Expanded, and Error states defined. No disabled state for non-interactive forms, no pressed state for touch feedback.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Amount variant Peso Sign uses BOOLEAN_OPERATION</strong> — <code>shape_full</code> is a BOOLEAN_OPERATION, not a clean vector path. May render inconsistently on native platforms.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — No CLI mappings registered yet.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
