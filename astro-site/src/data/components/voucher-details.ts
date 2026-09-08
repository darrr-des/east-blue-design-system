import type { ComponentData, DemoControlSection } from '../types';
import { buildColorsTable } from './_helpers';

/* Two sets: the link lives in the TextBlock body’s own frame, so
   Accordion has nothing for hasLink to act on — its terms come from a
   nested Terms and Conditions Accordion instance. */
const vdetControlsAccordion: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'hasLimitedOffer',
        prop: 'haslimitedoffer',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: 'hasCurrentPrice',
        prop: 'hascurrentprice',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: 'hasOriginalPrice',
        prop: 'hasoriginalprice',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: 'hasValidityPeriod',
        prop: 'hasvalidityperiod',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      }
    ]
  }
];

const vdetControlsTextBlock: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'hasLimitedOffer',
        prop: 'haslimitedoffer',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: 'hasCurrentPrice',
        prop: 'hascurrentprice',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: 'hasOriginalPrice',
        prop: 'hasoriginalprice',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: 'hasValidityPeriod',
        prop: 'hasvalidityperiod',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: 'hasLink',
        prop: 'haslink',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      }
    ]
  }
];

export const voucherDetails: ComponentData = {
  "meta": {
    "slug": "voucher-details",
    "name": "Voucher Details",
    "node": "5542:32287",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5542-32287",
    "description": "The expanded voucher card — merchant, offer, price and validity above a notched divider, with the description and terms below. Two ways of presenting the terms.",
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
    "navGroup": "Voucher",
    "verdict": {
      "kind": "keep",
      "title": "Keep — no longer a screen pretending to be a component",
      "text": "All four DS Health traits pass, and the previous Product Layer verdict is overturned. That verdict rested on this being \"a 336×704 single-instance symbol with no variants\" — a screen. What exists now is a 336-wide card with a real <code>Layout</code> setting, slots for the merchant logo and status badge, and text properties throughout. It composes the DS Accordion for the collapsible terms. The redesign into a component was deliberate."
    }
  },
  "overview": {
    "inContextNote": "Opens when a voucher is tapped from the grid or the list. Accordion keeps long terms collapsed so the price and validity stay above the fold; TextBlock shows shorter terms outright and links out to the full mechanics.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"vdet-demo-preview\"><div class=\"eb-preview-vdet\"><div class=\"eb-preview-vdet__header\"><span class=\"eb-preview-vdet__logo\"></span><span class=\"eb-preview-vdet__merchant\"><span class=\"eb-preview-vdet__hdr\">Brand</span><span class=\"eb-preview-vdet__subhdr\">All branches</span></span><span class=\"eb-preview-vdet__badge\">Limited</span></div><div class=\"eb-preview-vdet__details\"><div class=\"eb-preview-vdet__title\">Voucher Title</div><div class=\"eb-preview-vdet__prices\"><span class=\"eb-preview-vdet__price\">PHP 200.00</span><span class=\"eb-preview-vdet__original\">PHP 280.00</span></div><div class=\"eb-preview-vdet__validity\">Validity: Mar 11 2023 - Mar 14 2023</div></div><div class=\"eb-preview-vdet__strip\"><i></i><i></i></div><div class=\"eb-preview-vdet__body\"><div class=\"eb-preview-vdet__desc\">For every 12 oz or larger beverage purchase, you’ll receive an Eco Tumbler Voucher for a FREE Tall Drink when you bring your personal cup with you on your next visit.</div><div class=\"eb-preview-vdet__terms\"><div class=\"eb-preview-vdet__terms-head\">Terms &amp; Conditions<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" aria-hidden=\"true\"><path d=\"M23 20L16 13L9 20\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></div><ul class=\"eb-preview-vdet__terms-list\"><li><span class=\"eb-preview-vdet__tick\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" aria-hidden=\"true\"><path d=\"M3 8L6.5 11L13 5\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><span class=\"eb-preview-vdet__term\">Valid from March 11 to 14, 2021</span></li><li><span class=\"eb-preview-vdet__tick\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" aria-hidden=\"true\"><path d=\"M3 8L6.5 11L13 5\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><span class=\"eb-preview-vdet__term\">Dine in, Take out, or Drive-thru: 11am until closing, or until supplies last</span></li><li><span class=\"eb-preview-vdet__tick\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" aria-hidden=\"true\"><path d=\"M3 8L6.5 11L13 5\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><span class=\"eb-preview-vdet__term\">The promo is not valid in conjunction with other promos or discounts.</span></li><li><span class=\"eb-preview-vdet__tick\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" aria-hidden=\"true\"><path d=\"M3 8L6.5 11L13 5\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><span class=\"eb-preview-vdet__term\">Metro Manila only.</span></li></ul></div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Layout</span><select id=\"vdet-ctrl-layout\" class=\"demo-panel-select\" onchange=\"_vdetUpdate()\"><option value=\"textblock\">TextBlock</option><option value=\"accordion\" selected=\"\">Accordion</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasLimitedOffer</span><select id=\"vdet-ctrl-haslimitedoffer\" class=\"demo-panel-select\" onchange=\"_vdetUpdate()\"><option value=\"false\">false</option><option value=\"true\" selected=\"\">true</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasCurrentPrice</span><select id=\"vdet-ctrl-hascurrentprice\" class=\"demo-panel-select\" onchange=\"_vdetUpdate()\"><option value=\"false\">false</option><option value=\"true\" selected=\"\">true</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasOriginalPrice</span><select id=\"vdet-ctrl-hasoriginalprice\" class=\"demo-panel-select\" onchange=\"_vdetUpdate()\"><option value=\"false\">false</option><option value=\"true\" selected=\"\">true</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasValidityPeriod</span><select id=\"vdet-ctrl-hasvalidityperiod\" class=\"demo-panel-select\" onchange=\"_vdetUpdate()\"><option value=\"false\">false</option><option value=\"true\" selected=\"\">true</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasLink</span><select id=\"vdet-ctrl-haslink\" class=\"demo-panel-select\" onchange=\"_vdetUpdate()\"><option value=\"false\">false</option><option value=\"true\" selected=\"\">true</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Merchant</span><input id=\"vdet-ctrl-header\" class=\"demo-panel-select demo-panel-input\" type=\"text\" value=\"Brand\" oninput=\"_vdetUpdate()\" /></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Title</span><input id=\"vdet-ctrl-title\" class=\"demo-panel-select demo-panel-input\" type=\"text\" value=\"Voucher Title\" oninput=\"_vdetUpdate()\" /></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "One card serves every voucher detail view. Merchant, badge, copy and terms all come from outside; nothing about a particular offer is baked in."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own surface, border, radius, the notched divider and both terms layouts. The divider is a real vector — a rectangle minus two circles, plus a hairline — not the raster it used to be."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Reads <code>Header</code> → <code>Details</code> → <code>strip</code> → <code>Body</code>, and shares <code>Price Container</code>, <code>#price</code>, <code>#originalPrice</code> and <code>#validity</code> with <a href=\"/components/voucher\">Voucher</a>."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Takes a logo through <code>⤷ LogoSlot</code> and a status badge through <code>⤷ BadgeSlot</code>, and the Accordion layout instances the DS Accordion rather than redrawing it."
      }
    ],
    "behavior": [
      {
        "state": "Layout=Accordion",
        "ios": "na",
        "android": "na",
        "property": "336 × 507",
        "notes": "Terms collapse behind a DS Accordion instance. The only tappable part of the card."
      },
      {
        "state": "Layout=TextBlock",
        "ios": "na",
        "android": "na",
        "property": "336 × 472",
        "notes": "Terms run as a paragraph with a link to the full mechanics. Drawn locally rather than instanced — see the note on that below."
      },
      {
        "state": "⤷ LogoSlot",
        "ios": "na",
        "android": "na",
        "property": "40 × 40",
        "notes": "Merchant logo."
      },
      {
        "state": "⤷ BadgeSlot",
        "ios": "na",
        "android": "na",
        "property": "Badge",
        "notes": "Offer status, top right of the header."
      },
      {
        "state": "strip",
        "ios": "na",
        "android": "na",
        "property": "336 × 16",
        "notes": "Notched divider separating the offer summary from its detail."
      }
    ],
    "resolved": [
      {
        "headline": "It is a card now, not a screen.",
        "body": "The previous version was one 336×704 symbol with no variants — the reason it was ruled Product Layer. What exists now is a card with a real setting, sized to sit inside a screen rather than to be one. The redesign was deliberate, so the Product Layer verdict no longer applies.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "One setting replaced a set of visibility switches.",
        "body": "Terms display used to be driven by booleans that toggled which child subtree rendered, so two paths could be on at once. <code>Layout = Accordion | TextBlock</code> makes them mutually exclusive.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The notched divider is a vector.",
        "body": "It was a raster image fill that could not resize or recolour. It is now a <code>fill</code> rectangle with a <code>Union</code> of two circles subtracted, plus a <code>separator</code> line.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "The logo and badge are slots.",
        "body": "<code>logo-container</code> and the frame that positioned the badge were ordinary layers. They are <code>⤷ LogoSlot</code> and <code>⤷ BadgeSlot</code> — real Figma slots, so a merchant supplies its own logo without detaching.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "No layer name is used twice.",
        "body": "Two frames were both called <code>Content</code>, and <code>#title</code> held both the merchant name and the offer name. They are now <code>Details</code> and <code>Body</code>, and the merchant line is <code>#header</code> with <code>#subheader</code> beneath — named for their place in the hierarchy rather than their content.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Price reads the same as it does on the card.",
        "body": "<code>#price</code> and <code>#originalPrice</code>, one string each, matching <a href=\"/components/voucher\">Voucher</a> — so the two components describe money the same way and the platform can format it for the locale.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Names follow the system.",
        "body": "<code>termsAndCondition</code> became <code>Layout</code>, its <code>Text Block</code> value became <code>TextBlock</code>, <code>merchant-details</code> became <code>Merchant Details</code>, and the boolean operation inside <code>strip</code> is <code>shape</code> rather than repeating its parent's name.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      }
    ],
    "open": [],
    "recommendations": [

      {
        "headline": "Note that only the accordion is tappable.",
        "body": "The card has no states of its own by design. The accordion header expands and collapses, and TextBlock's \"See full promo mechanics.\" is a link; everything else is read-only. Say so in the Code tab so nobody wires a tap target around the whole card.",
        "tag": "Docs"
      },
      {
        "headline": "Announce the card as a region, with the terms reachable.",
        "body": "Group the merchant, offer, price and validity so a screen reader gives the offer in one pass, then expose the terms as their own region. In the Accordion layout the collapsed state must be announced, or the terms are invisible to anyone not looking at the screen.",
        "tag": "A11y"
      },
      {
        "headline": "Give the discount a place, or confirm it belongs only on the card.",
        "body": "<a href=\"/components/voucher\">Voucher</a> carries a discount badge in its vertical layout; this card shows the original price struck through but no discount badge. That may be right — the saving is visible from the two prices — but the two components currently tell the story differently.",
        "tag": "Family"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Document that the two layouts compose differently.",
        "body": "v2.0.1: Applied — the property mapping now carries it. TextBlock draws its own terms frame and owns the three text layers in it, so a link is something this component renders. Accordion places a <strong>Terms and Conditions Accordion</strong> instance and inherits whatever that component draws, so <code>hasLink</code> has nothing to act on and the rows arrive as content rather than as strings. Two shapes behind one enum, and the choice between them follows the terms you have to show.",
        "tag": "Docs"
      }
    ]
  },
  "style": {
    "heading": "Structure",
    "colorsTables": [
      buildColorsTable({
        title: "Colors by Layout",
        description: "Everything above the notched strip is identical in the two layouts — the header, the details block and the strip itself match to the pixel. Only the terms presentation differs, and it differs in kind rather than in colour: TextBlock draws its own frame and owns those three text layers, while Accordion places a <strong>Terms and Conditions Accordion</strong> instance and inherits whatever that component paints. That is also why the link is TextBlock-only.",
        columns: ["TextBlock", "Accordion"],
        rows: [
          { role: "Card", token: "bg/color-bg-main", values: ["#FFFFFF","#FFFFFF"] },
          { role: "Borders and separator", token: "border/color-border-weak", values: ["#E5EBF4","#E5EBF4"] },
          { role: "#header", token: "text/color-text", values: ["#0A2757","#0A2757"] },
          { role: "#subheader", token: "text/color-text-weaker", values: ["#6780A9","#6780A9"] },
          { role: "#title", token: "text/color-text", values: ["#0A2757","#0A2757"] },
          { role: "#price", token: "text/color-text-primary", values: ["#005CE5","#005CE5"] },
          { role: "#originalPrice", token: "text/color-text-weakest", values: ["#90A8D0","#90A8D0"] },
          { role: "#validity", token: "text/color-text-weaker", values: ["#6780A9","#6780A9"] },
          { role: "#description", token: "text/color-text-weak", values: ["#445C85","#445C85"] },
          { role: "Badge", token: "bg/color-bg-info — set by the Badge instance in ⤷ BadgeSlot", values: ["#2340A9","#2340A9"] },
          { role: "Badge label", token: "text/color-text-inverse", values: ["#FFFFFF","#FFFFFF"] },
          { role: "Terms #title", token: "text/color-text", values: ["#0A2757","–"] },
          { role: "Terms #message", token: "text/color-text-weak", values: ["#445C85","–"] },
          { role: "Terms #footer", token: "text/color-text-primary", values: ["#005CE5","–"] },
          { role: "Terms surface", token: "bg/color-bg — set by the Accordion instance", values: ["–","#F6F9FD"] },
          { role: "Terms label", token: "text/color-text-weak — set by the same instance", values: ["–","#445C85"] }
        ]
      })
    ],
    "specCards": [
      {
        "cardKey": "vdet-spec-card-textblock",
        "demoKey": "textblock",
        "demoControls": vdetControlsTextBlock,
        "title": "TextBlock",
        "node": "5450:32877",
        "description": "",
        "previewHtml": "<div id=\"vdet-spec-textblock\"><div class=\"eb-preview-vdet\"><div class=\"eb-preview-vdet__header\"><span class=\"eb-preview-vdet__logo\"></span><span class=\"eb-preview-vdet__merchant\"><span class=\"eb-preview-vdet__hdr\">Brand</span><span class=\"eb-preview-vdet__subhdr\">All branches</span></span><span class=\"eb-preview-vdet__badge\">Limited</span></div><div class=\"eb-preview-vdet__details\"><div class=\"eb-preview-vdet__title\">Voucher Title</div><div class=\"eb-preview-vdet__prices\"><span class=\"eb-preview-vdet__price\">PHP 200.00</span><span class=\"eb-preview-vdet__original\">PHP 280.00</span></div><div class=\"eb-preview-vdet__validity\">Validity: Mar 11 2023 - Mar 14 2023</div></div><div class=\"eb-preview-vdet__strip\"><i></i><i></i></div><div class=\"eb-preview-vdet__body\"><div class=\"eb-preview-vdet__desc\">For every 12 oz or larger beverage purchase, you’ll receive an Eco Tumbler Voucher for a FREE Tall Drink when you bring your personal cup with you on your next visit.</div><div class=\"eb-preview-vdet__terms\"><div class=\"eb-preview-vdet__terms-head eb-preview-vdet__terms-head--block\">Terms &amp; Conditions</div><div class=\"eb-preview-vdet__terms-text\">Valid from March 11 to 14, 2023. Dine in, Take out, or Drive-thru: 11am until closing, or until supplies last. The promo is not valid in conjunction with other promos or discounts. Metro Manila only.</div><a class=\"eb-preview-vdet__link\">See full promo mechanics.</a></div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Layout",
                "value": "TextBlock"
              },
              {
                "key": "hasLimitedOffer",
                "value": "true",
                "prop": "haslimitedoffer",
                "variants": {
                  "haslimitedoffer:false": {
                    "value": "false"
                  }
                }
              },
              {
                "key": "hasCurrentPrice",
                "value": "true",
                "prop": "hascurrentprice",
                "variants": {
                  "hascurrentprice:false": {
                    "value": "false"
                  }
                }
              },
              {
                "key": "hasOriginalPrice",
                "value": "true",
                "prop": "hasoriginalprice",
                "variants": {
                  "hasoriginalprice:false": {
                    "value": "false"
                  }
                }
              },
              {
                "key": "hasValidityPeriod",
                "value": "true",
                "prop": "hasvalidityperiod",
                "variants": {
                  "hasvalidityperiod:false": {
                    "value": "false"
                  }
                }
              },
              {
                "key": "hasLink",
                "value": "true",
                "prop": "haslink",
                "variants": {
                  "haslink:false": {
                    "value": "false"
                  }
                }
              },
              {
                "key": "⤷ LogoSlot (slot)",
                "value": "2 items"
              },
              {
                "key": "⤷ BadgeSlot (slot)",
                "value": "2 items"
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
                "token": "bg/color-bg-main",
                "swatch": true
              },
              {
                "key": "Borders and separator",
                "value": "#E5EBF4",
                "token": "border/color-border-weak",
                "swatch": true
              },
              {
                "key": "#header",
                "value": "#0A2757",
                "token": "text/color-text",
                "swatch": true
              },
              {
                "key": "#subheader",
                "value": "#6780A9",
                "token": "text/color-text-weaker",
                "swatch": true
              },
              {
                "key": "#title",
                "value": "#0A2757",
                "token": "text/color-text",
                "swatch": true
              },
              {
                "key": "#price",
                "value": "#005CE5",
                "token": "text/color-text-primary",
                "swatch": true
              },
              {
                "key": "#originalPrice",
                "value": "#90A8D0",
                "token": "text/color-text-weakest",
                "swatch": true
              },
              {
                "key": "#validity",
                "value": "#6780A9",
                "token": "text/color-text-weaker",
                "swatch": true
              },
              {
                "key": "#description",
                "value": "#445C85",
                "token": "text/color-text-weak",
                "swatch": true
              },
              {
                "key": "Badge",
                "value": "#2340A9",
                "token": "bg/color-bg-info — set by the Badge instance in ⤷ BadgeSlot",
                "swatch": true
              },
              {
                "key": "Badge label",
                "value": "#FFFFFF",
                "token": "text/color-text-inverse",
                "swatch": true
              },
              {
                "key": "Terms #title",
                "value": "#0A2757",
                "token": "text/color-text",
                "swatch": true
              },
              {
                "key": "Terms #message",
                "value": "#445C85",
                "token": "text/color-text-weak",
                "swatch": true
              },
              {
                "key": "Terms #footer",
                "value": "#005CE5",
                "token": "text/color-text-primary",
                "swatch": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "#header",
                "value": "Primary/Label/Base",
                "mono": true
              },
              {
                "key": "#subheader",
                "value": "Secondary/Bold/Caption",
                "mono": true
              },
              {
                "key": "#title",
                "value": "Primary/Headlines/Block",
                "mono": true
              },
              {
                "key": "#price",
                "value": "Primary/Label/Base",
                "mono": true
              },
              {
                "key": "#originalPrice",
                "value": "Primary/Label/Light/Base",
                "mono": true
              },
              {
                "key": "#validity",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "#description",
                "value": "Secondary/Bold/Base",
                "mono": true
              },
              {
                "key": "Terms #title",
                "value": "Secondary/Bold/Base",
                "mono": true
              },
              {
                "key": "Terms #message",
                "value": "Secondary/Bold/Base",
                "mono": true
              },
              {
                "key": "Terms #footer",
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
                "value": "472 — Hug",
                "mono": true
              },
              {
                "key": "Width",
                "value": "336",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "8",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "0",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "0",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "0",
                "mono": true
              },
              {
                "key": "Alignment",
                "value": "Top left",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBVoucherDetails</span><span class=\"syn-punc\">(</span>\n    layout<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.textblock</span><span class=\"syn-punc\">,</span>\n    merchant<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Brand\"</span><span class=\"syn-punc\">,</span>\n    branch<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"All branches\"</span><span class=\"syn-punc\">,</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Voucher Title\"</span><span class=\"syn-punc\">,</span>\n    price<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"PHP 200.00\"</span><span class=\"syn-punc\">,</span>\n    originalPrice<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"PHP 280.00\"</span><span class=\"syn-punc\">,</span>\n    validity<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Mar 11 2023 - Mar 14 2023\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"For every 12 oz or larger beverage purchase…\"</span><span class=\"syn-punc\">,</span>\n    badge<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">{</span> <span class=\"syn-type\">EBBadge</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Limited\"</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">}</span><span class=\"syn-punc\">,</span>\n    linkLabel<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"See full promo mechanics.\"</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBBrandLogo</span><span class=\"syn-punc\">(</span>image<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"brand-mark\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBVoucherDetails</span><span class=\"syn-punc\">(</span>\n    layout <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBVoucherDetailsLayout</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Textblock</span><span class=\"syn-punc\">,</span>\n    merchant <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Brand\"</span><span class=\"syn-punc\">,</span>\n    branch <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"All branches\"</span><span class=\"syn-punc\">,</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Voucher Title\"</span><span class=\"syn-punc\">,</span>\n    price <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 200.00\"</span><span class=\"syn-punc\">,</span>\n    originalPrice <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 280.00\"</span><span class=\"syn-punc\">,</span>\n    validity <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Mar 11 2023 - Mar 14 2023\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"For every 12 oz or larger beverage purchase…\"</span><span class=\"syn-punc\">,</span>\n    badge <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> <span class=\"syn-type\">EBBadge</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Limited\"</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">}</span><span class=\"syn-punc\">,</span>\n    linkLabel <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"See full promo mechanics.\"</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBBrandLogo</span><span class=\"syn-punc\">(</span>image <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"brand-mark\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "cardKey": "vdet-spec-card-accordion",
        "demoKey": "accordion",
        "demoControls": vdetControlsAccordion,
        "title": "Accordion",
        "node": "5450:32408",
        "description": "",
        "previewHtml": "<div id=\"vdet-spec-accordion\"><div class=\"eb-preview-vdet\"><div class=\"eb-preview-vdet__header\"><span class=\"eb-preview-vdet__logo\"></span><span class=\"eb-preview-vdet__merchant\"><span class=\"eb-preview-vdet__hdr\">Brand</span><span class=\"eb-preview-vdet__subhdr\">All branches</span></span><span class=\"eb-preview-vdet__badge\">Limited</span></div><div class=\"eb-preview-vdet__details\"><div class=\"eb-preview-vdet__title\">Voucher Title</div><div class=\"eb-preview-vdet__prices\"><span class=\"eb-preview-vdet__price\">PHP 200.00</span><span class=\"eb-preview-vdet__original\">PHP 280.00</span></div><div class=\"eb-preview-vdet__validity\">Validity: Mar 11 2023 - Mar 14 2023</div></div><div class=\"eb-preview-vdet__strip\"><i></i><i></i></div><div class=\"eb-preview-vdet__body\"><div class=\"eb-preview-vdet__desc\">For every 12 oz or larger beverage purchase, you’ll receive an Eco Tumbler Voucher for a FREE Tall Drink when you bring your personal cup with you on your next visit.</div><div class=\"eb-preview-vdet__terms\"><div class=\"eb-preview-vdet__terms-head\">Terms &amp; Conditions<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" aria-hidden=\"true\"><path d=\"M23 20L16 13L9 20\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></div><ul class=\"eb-preview-vdet__terms-list\"><li><span class=\"eb-preview-vdet__tick\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" aria-hidden=\"true\"><path d=\"M3 8L6.5 11L13 5\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><span class=\"eb-preview-vdet__term\">Valid from March 11 to 14, 2021</span></li><li><span class=\"eb-preview-vdet__tick\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" aria-hidden=\"true\"><path d=\"M3 8L6.5 11L13 5\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><span class=\"eb-preview-vdet__term\">Dine in, Take out, or Drive-thru: 11am until closing, or until supplies last</span></li><li><span class=\"eb-preview-vdet__tick\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" aria-hidden=\"true\"><path d=\"M3 8L6.5 11L13 5\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><span class=\"eb-preview-vdet__term\">The promo is not valid in conjunction with other promos or discounts.</span></li><li><span class=\"eb-preview-vdet__tick\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" aria-hidden=\"true\"><path d=\"M3 8L6.5 11L13 5\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><span class=\"eb-preview-vdet__term\">Metro Manila only.</span></li></ul></div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Layout",
                "value": "Accordion"
              },
              {
                "key": "hasLimitedOffer",
                "value": "true",
                "prop": "haslimitedoffer",
                "variants": {
                  "haslimitedoffer:false": {
                    "value": "false"
                  }
                }
              },
              {
                "key": "hasCurrentPrice",
                "value": "true",
                "prop": "hascurrentprice",
                "variants": {
                  "hascurrentprice:false": {
                    "value": "false"
                  }
                }
              },
              {
                "key": "hasOriginalPrice",
                "value": "true",
                "prop": "hasoriginalprice",
                "variants": {
                  "hasoriginalprice:false": {
                    "value": "false"
                  }
                }
              },
              {
                "key": "hasValidityPeriod",
                "value": "true",
                "prop": "hasvalidityperiod",
                "variants": {
                  "hasvalidityperiod:false": {
                    "value": "false"
                  }
                }
              },
              {
                "key": "hasLink",
                "value": "– TextBlock only"
              },
              {
                "key": "⤷ LogoSlot (slot)",
                "value": "2 items"
              },
              {
                "key": "⤷ BadgeSlot (slot)",
                "value": "2 items"
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
                "token": "bg/color-bg-main",
                "swatch": true
              },
              {
                "key": "Borders and separator",
                "value": "#E5EBF4",
                "token": "border/color-border-weak",
                "swatch": true
              },
              {
                "key": "#header",
                "value": "#0A2757",
                "token": "text/color-text",
                "swatch": true
              },
              {
                "key": "#subheader",
                "value": "#6780A9",
                "token": "text/color-text-weaker",
                "swatch": true
              },
              {
                "key": "#title",
                "value": "#0A2757",
                "token": "text/color-text",
                "swatch": true
              },
              {
                "key": "#price",
                "value": "#005CE5",
                "token": "text/color-text-primary",
                "swatch": true
              },
              {
                "key": "#originalPrice",
                "value": "#90A8D0",
                "token": "text/color-text-weakest",
                "swatch": true
              },
              {
                "key": "#validity",
                "value": "#6780A9",
                "token": "text/color-text-weaker",
                "swatch": true
              },
              {
                "key": "#description",
                "value": "#445C85",
                "token": "text/color-text-weak",
                "swatch": true
              },
              {
                "key": "Badge",
                "value": "#2340A9",
                "token": "bg/color-bg-info — set by the Badge instance in ⤷ BadgeSlot",
                "swatch": true
              },
              {
                "key": "Badge label",
                "value": "#FFFFFF",
                "token": "text/color-text-inverse",
                "swatch": true
              },
              {
                "key": "Terms surface",
                "value": "#F6F9FD",
                "token": "bg/color-bg — set by the Terms and Conditions Accordion instance",
                "swatch": true
              },
              {
                "key": "Terms label",
                "value": "#445C85",
                "token": "text/color-text-weak — set by the same instance",
                "swatch": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "#header",
                "value": "Primary/Label/Base",
                "mono": true
              },
              {
                "key": "#subheader",
                "value": "Secondary/Bold/Caption",
                "mono": true
              },
              {
                "key": "#title",
                "value": "Primary/Headlines/Block",
                "mono": true
              },
              {
                "key": "#price",
                "value": "Primary/Label/Base",
                "mono": true
              },
              {
                "key": "#originalPrice",
                "value": "Primary/Label/Light/Base",
                "mono": true
              },
              {
                "key": "#validity",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "#description",
                "value": "Secondary/Bold/Base",
                "mono": true
              },
              {
                "key": "Terms #label",
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
                "value": "507 — Hug",
                "mono": true
              },
              {
                "key": "Width",
                "value": "336",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "8",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "0",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "0",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "0",
                "mono": true
              },
              {
                "key": "Alignment",
                "value": "Top left",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBVoucherDetails</span><span class=\"syn-punc\">(</span>\n    layout<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.accordion</span><span class=\"syn-punc\">,</span>\n    merchant<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Brand\"</span><span class=\"syn-punc\">,</span>\n    branch<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"All branches\"</span><span class=\"syn-punc\">,</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Voucher Title\"</span><span class=\"syn-punc\">,</span>\n    price<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"PHP 200.00\"</span><span class=\"syn-punc\">,</span>\n    originalPrice<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"PHP 280.00\"</span><span class=\"syn-punc\">,</span>\n    validity<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Mar 11 2023 - Mar 14 2023\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"For every 12 oz or larger beverage purchase…\"</span><span class=\"syn-punc\">,</span>\n    badge<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">{</span> <span class=\"syn-type\">EBBadge</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Limited\"</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBBrandLogo</span><span class=\"syn-punc\">(</span>image<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"brand-mark\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBVoucherDetails</span><span class=\"syn-punc\">(</span>\n    layout <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBVoucherDetailsLayout</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Accordion</span><span class=\"syn-punc\">,</span>\n    merchant <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Brand\"</span><span class=\"syn-punc\">,</span>\n    branch <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"All branches\"</span><span class=\"syn-punc\">,</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Voucher Title\"</span><span class=\"syn-punc\">,</span>\n    price <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 200.00\"</span><span class=\"syn-punc\">,</span>\n    originalPrice <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 280.00\"</span><span class=\"syn-punc\">,</span>\n    validity <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Mar 11 2023 - Mar 14 2023\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"For every 12 oz or larger beverage purchase…\"</span><span class=\"syn-punc\">,</span>\n    badge <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> <span class=\"syn-type\">EBBadge</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Limited\"</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBBrandLogo</span><span class=\"syn-punc\">(</span>image <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"brand-mark\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
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
          "code": "<span class=\"syn-fn\">implementation</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"com.eastblue.ds:voucher:1.0.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Import",
          "code": "<span class=\"syn-kw\">import</span> <span class=\"syn-type\">EastBlueDS</span>\n<span class=\"syn-kw\">import</span> com<span class=\"syn-punc\">.</span>eastblue<span class=\"syn-punc\">.</span>ds<span class=\"syn-punc\">.</span>voucher<span class=\"syn-punc\">.</span><span class=\"syn-punc\">*</span>"
        }
      ],
      "footnote": "Planned API — the native library does not exist yet. The artifact is the Voucher family: this component, <a href=\"/components/voucher\">Voucher</a> and the other five members all ship in <code>com.eastblue.ds:voucher</code> and import <code>com.eastblue.ds.voucher.*</code>."
    },
    "propertyMapping": {
      "description": "One enum, five booleans and two slots. The booleans are not parameters: each asks whether an optional piece of content is present, so the optional itself is what a caller passes. <strong>The two layouts compose differently, and that is the one thing a mapping has to carry forward.</strong> TextBlock draws its own terms frame and owns the three text layers inside it, so a link is something this component renders. Accordion places a <strong>Terms and Conditions Accordion</strong> instance and inherits whatever that component draws — which is why <code>hasLink</code> has nothing to act on there, and why the terms rows arrive as content rather than as strings. Natively that is two shapes behind one enum, not one shape with a flag.",
      "rows": [
        {
          "figma": "Layout — TextBlock, Accordion",
          "swift": "<code>layout: EBVoucherDetailsLayout</code>",
          "compose": "<code>layout: EBVoucherDetailsLayout</code>"
        },
        {
          "figma": "hasLimitedOffer — true, false",
          "swift": "<em>derived</em> — <code>badge != nil</code>",
          "compose": "<em>derived</em> — <code>badge != null</code>"
        },
        {
          "figma": "hasCurrentPrice — true, false",
          "swift": "<em>derived</em> — <code>price != nil</code>",
          "compose": "<em>derived</em> — <code>price != null</code>"
        },
        {
          "figma": "hasOriginalPrice — true, false",
          "swift": "<em>derived</em> — <code>originalPrice != nil</code>",
          "compose": "<em>derived</em> — <code>originalPrice != null</code>"
        },
        {
          "figma": "hasValidityPeriod — true, false",
          "swift": "<em>derived</em> — <code>validity != nil</code>",
          "compose": "<em>derived</em> — <code>validity != null</code>"
        },
        {
          "figma": "hasLink — true, false",
          "swift": "<em>derived</em> — <code>linkLabel != nil</code> — TextBlock only",
          "compose": "<em>derived</em> — <code>linkLabel != null</code> — TextBlock only"
        },
        {
          "figma": "⤷ LogoSlot (slot)",
          "swift": "<code>@ViewBuilder logo: () -> Logo</code>",
          "compose": "<code>logo: @Composable () -> Unit</code>"
        },
        {
          "figma": "⤷ BadgeSlot (slot)",
          "swift": "<code>badge: (() -> Badge)? = nil</code>",
          "compose": "<code>badge: (@Composable () -> Unit)? = null</code>"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "TextBlock — terms in full, with a link out",
        "swift": "<span class=\"syn-type\">EBVoucherDetails</span><span class=\"syn-punc\">(</span>\n    layout<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.textblock</span><span class=\"syn-punc\">,</span>\n    merchant<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Brand\"</span><span class=\"syn-punc\">,</span>\n    branch<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"All branches\"</span><span class=\"syn-punc\">,</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Voucher Title\"</span><span class=\"syn-punc\">,</span>\n    price<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"PHP 200.00\"</span><span class=\"syn-punc\">,</span>\n    originalPrice<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"PHP 280.00\"</span><span class=\"syn-punc\">,</span>\n    validity<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Mar 11 2023 - Mar 14 2023\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"For every 12 oz or larger beverage purchase…\"</span><span class=\"syn-punc\">,</span>\n    badge<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">{</span> <span class=\"syn-type\">EBBadge</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Limited\"</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">}</span><span class=\"syn-punc\">,</span>\n    linkLabel<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"See full promo mechanics.\"</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBBrandLogo</span><span class=\"syn-punc\">(</span>image<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"brand-mark\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBVoucherDetails</span><span class=\"syn-punc\">(</span>\n    layout <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBVoucherDetailsLayout</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Textblock</span><span class=\"syn-punc\">,</span>\n    merchant <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Brand\"</span><span class=\"syn-punc\">,</span>\n    branch <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"All branches\"</span><span class=\"syn-punc\">,</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Voucher Title\"</span><span class=\"syn-punc\">,</span>\n    price <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 200.00\"</span><span class=\"syn-punc\">,</span>\n    originalPrice <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 280.00\"</span><span class=\"syn-punc\">,</span>\n    validity <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Mar 11 2023 - Mar 14 2023\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"For every 12 oz or larger beverage purchase…\"</span><span class=\"syn-punc\">,</span>\n    badge <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> <span class=\"syn-type\">EBBadge</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Limited\"</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">}</span><span class=\"syn-punc\">,</span>\n    linkLabel <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"See full promo mechanics.\"</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBBrandLogo</span><span class=\"syn-punc\">(</span>image <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"brand-mark\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "subheading": "Accordion — terms collapsed behind a header",
        "swift": "<span class=\"syn-type\">EBVoucherDetails</span><span class=\"syn-punc\">(</span>\n    layout<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.accordion</span><span class=\"syn-punc\">,</span>\n    merchant<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Brand\"</span><span class=\"syn-punc\">,</span>\n    branch<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"All branches\"</span><span class=\"syn-punc\">,</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Voucher Title\"</span><span class=\"syn-punc\">,</span>\n    price<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"PHP 200.00\"</span><span class=\"syn-punc\">,</span>\n    originalPrice<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"PHP 280.00\"</span><span class=\"syn-punc\">,</span>\n    validity<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Mar 11 2023 - Mar 14 2023\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"For every 12 oz or larger beverage purchase…\"</span><span class=\"syn-punc\">,</span>\n    badge<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">{</span> <span class=\"syn-type\">EBBadge</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Limited\"</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBBrandLogo</span><span class=\"syn-punc\">(</span>image<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"brand-mark\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBVoucherDetails</span><span class=\"syn-punc\">(</span>\n    layout <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBVoucherDetailsLayout</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Accordion</span><span class=\"syn-punc\">,</span>\n    merchant <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Brand\"</span><span class=\"syn-punc\">,</span>\n    branch <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"All branches\"</span><span class=\"syn-punc\">,</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Voucher Title\"</span><span class=\"syn-punc\">,</span>\n    price <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 200.00\"</span><span class=\"syn-punc\">,</span>\n    originalPrice <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 280.00\"</span><span class=\"syn-punc\">,</span>\n    validity <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Mar 11 2023 - Mar 14 2023\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"For every 12 oz or larger beverage purchase…\"</span><span class=\"syn-punc\">,</span>\n    badge <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> <span class=\"syn-type\">EBBadge</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Limited\"</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBBrandLogo</span><span class=\"syn-punc\">(</span>image <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"brand-mark\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "The offer summary reads as one unit",
        "ios": "Group merchant, title, price and validity with <code>.accessibilityElement(children: .combine)</code>",
        "android": "<code>Modifier.semantics(mergeDescendants = true)</code> on the Details frame"
      },
      {
        "requirement": "Collapsed terms are announced as collapsed",
        "ios": "The Accordion supplies <code>.isExpanded</code> and its own toggle label",
        "android": "<code>Role.Button</code> with <code>stateDescription</code> of expanded or collapsed"
      },
      {
        "requirement": "The mechanics link is a link",
        "ios": "<code>.accessibilityAddTraits(.isLink)</code>",
        "android": "<code>Role.Button</code> with a descriptive <code>onClickLabel</code>"
      },
      {
        "requirement": "The notched divider is decorative",
        "ios": "<code>.accessibilityHidden(true)</code>",
        "android": "<code>contentDescription = null</code>"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Accordion when the terms run long enough to push the price off screen.",
        "dontText": "Don't collapse two lines of terms; the extra tap buys nothing."
      },
      {
        "doText": "Use TextBlock with a link out when the full mechanics live elsewhere.",
        "dontText": "Don't put the entire mechanics text in the block — that is what the link is for."
      },
      {
        "doText": "Let the merchant supply its own logo through the slot.",
        "dontText": "Don't detach the card to swap a logo."
      }
    ],
    "scorecard": [
      { "id": "C1", "criterion": "Layer Structure & Naming", "status": "ready", "statusLabel": "Ready", "notes": "<code>Header</code> → <code>Details</code> → <code>strip</code> → <code>Body</code>, no duplicated names, text layers all prefixed." },
      { "id": "C2", "criterion": "Variant & Property Naming", "status": "ready", "statusLabel": "Ready", "notes": "One enum with two clean values, five booleans all on the <code>has*</code> prefix, and two slots. The one wrinkle is that <code>hasLink</code> exists on both layouts while only TextBlock has a <code>#footer</code> for it to act on — Accordion’s terms come from a nested instance." },
      { "id": "C3", "criterion": "Token Coverage", "status": "ready", "statusLabel": "Ready", "notes": "Every colour resolves to a system token, and all ten are the ones the file’s own selection list carries: <code>bg/color-bg-main</code>, <code>bg/color-bg</code>, <code>bg/color-bg-info</code>, <code>border/color-border-weak</code>, <code>text/color-text</code> and its four weak steps, plus <code>text/color-text-inverse</code> on the badge label. All ten text styles resolve too." },
      { "id": "C4", "criterion": "Native Mappability", "status": "ready", "statusLabel": "Ready", "notes": "A card with a header, a summary and a body. The two layouts compose differently on purpose — TextBlock draws its own terms frame and owns the text inside it, Accordion places a <strong>Terms and Conditions Accordion</strong> instance and inherits its content — and which one you reach for depends on the terms you have to show. Natively that is two shapes behind one enum: <code>hasLink</code> only reaches TextBlock, and the accordion’s rows arrive as content rather than as strings. Documented in the property mapping rather than smoothed over." },
      { "id": "C5", "criterion": "Interaction State Coverage", "status": "na", "statusLabel": "Not Applicable", "notes": "Display only by design. The accordion header and the mechanics link own their own states." },
      { "id": "C6", "criterion": "Asset & Icon Quality", "status": "ready", "statusLabel": "Ready", "notes": "The notched divider is a vector; the logo arrives through a slot. No rasters." },
      { "id": "C7", "criterion": "Code Connect Linkability", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked — the native library does not exist yet." }
    ],
    "codeConnect": [],
    "variants": {
      "total": 2,
      "description": "1 Layout setting × 2 values. Everything above the notched divider is identical between them.",
      "columns": ["Layout", "Size", "Terms", "Node"],
      "rows": [
        { "cells": ["Accordion", "336 × 507", "DS Accordion instance, collapsible", "5450:32408"] },
        { "cells": ["TextBlock", "336 × 472", "Locally drawn block with a mechanics link", "5450:32877"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Style and Code tabs rebuilt to the content guides — node 5542:32287",
      "rows": [
        {
          "body": "<strong>One card became two.</strong> A single card covered both versions. <code>Layout</code> is the only variant property and the only axis, so TextBlock and Accordion each get a card and the five booleans become controls.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The panel documented 1 of 8 properties.</strong> Five booleans and both slots were missing. The booleans are invisible to <code>get_node_info</code>, which returns variant properties only — they exist nowhere but the property panel. The Properties section and the demo panel now carry all eight.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Six of nine token names were invented.</strong> <code>border/color-border-subtle</code>, <code>text/color-text-heading</code>, <code>-link</code>, <code>-placeholder</code> and <code>main/badge/info/bg</code> appear nowhere in the file’s selection colours. Every hex was right; every name was made up. Four more colours had no row at all — the description, the badge label and the terms block’s three text layers. The ten names now on the page are exactly the ten the file uses.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>The preview drew in one face where the component uses two.</strong> <code>.eb-preview-vdet</code> declared <code>font-family: inherit</code>. Five of the seven layers this component always draws are <code>Primary/*</code>, so Proxima Soft is the root and the branch line, the description and the whole terms block name BarkAda for themselves.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Four layers resolving to one text style rendered four different ways.</strong> The description, the block message, the accordion’s row labels and the link are all <code>Secondary/Bold/Base</code>, and were set at 14/21 weight 500, 13/20, 13/18 and 13 bold. One rule covers all four now, which is what stops them drifting again.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Three things were missing a declaration rather than holding a wrong value.</strong> The badge label had no <code>line-height</code> and no tracking, so it read small and its pill sat short. The two prices had no <code>line-height</code> either, so each inherited the page’s and rendered 25.6 against a container that is 18 — the row was 7 too tall before anything else was wrong. And Merchant Details had no <code>display</code>, so its two spans laid out inline and the brand name sat beside the branch line instead of above it.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The badge hugged to the wrong width.</strong> An even <code>2px 8px</code> gave the right 16 height by coincidence and made the pill 68 wide against Figma’s 52. It is 4 either side of a 44-wide label now, with 2 above and below, and reconstructs on both axes.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The accordion drew substitutes for two pieces of artwork.</strong> The chevron was an invented 16 × 16 path at stroke-width 1.6; it is the same 32 × 32 <code>Chevron Up</code> instance Select places, <code>M23 20L16 13L9 20</code> at stroke-width 2. The row ticks were a <code>✓</code> text glyph in a pseudo-element, standing in for a 16 × 16 stroked path nobody had exported. The list gap was 12 where the item positions measure 6.",
          "delta": { "kind": "resolved", "label": "C6 resolved" }
        },
        {
          "body": "<strong>Layout described a frame the component does not have.</strong> Body carried <code>padding: 12px 16px 16px</code>, which inset both terms treatments by 16 — they run the full 336, and only the Description insets its own text. The seven keys are the component’s own, and the heights reconstruct exactly: 64 + 95 + 16 + 297 = 472 and 64 + 95 + 16 + 332 = 507.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Property Mapping listed layers as if they were properties.</strong> Seven rows, four of them bundling text layers in pairs — <code>#header / #subheader</code>, <code>#title / #description</code>, <code>#price / #originalPrice</code>, <code>#validity</code>. Eight rows now, one per panel property, with the five booleans marked <em>derived</em>: each asks whether an optional is present, so the optional is what a caller passes.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The install block pointed at coordinates that will never exist.</strong> <code>gcash/east-blue-ios</code> and <code>com.gcash.eastblue:components:1.0.0</code>, with no Import line. It now cites the Voucher family artifact <code>com.eastblue.ds:voucher:1.0.0</code>, the same one <a href=\"/components/voucher\">Voucher</a> uses.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The two layouts compose differently, and that is now written down.</strong> C4 had been asking for it. TextBlock draws its own terms frame and owns the three text layers in it, so a link is something this component renders. Accordion places a <strong>Terms and Conditions Accordion</strong> instance and inherits whatever it draws — which is why <code>hasLink</code> has nothing to act on there. Two shapes behind one enum, chosen by the terms you have to show. C4 moves to Ready and the recommendation to Applied.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "<strong>Usage Snippets were keyed to use-cases, and Code Connect is emptied.</strong> \"Long terms, collapsed\" and \"Short terms, shown outright\" become one per <code>Layout</code> value. The three Code Connect rows are gone; C7 stays blocked while no native library exists.",
          "delta": { "kind": "resolved", "label": "Docs" }
        }
      ]
    },
    {
      "version": "2.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Rebuilt as a component — node 5542:32287",
      "rows": [
        {
          "body": "<strong>Product Layer verdict overturned.</strong> The old assessment ruled this a screen — one 336×704 symbol with no variants. The redesign into a 336-wide card with a real setting was deliberate.",
          "delta": { "kind": "resolved", "label": "Family" }
        },
        {
          "body": "<strong>C2 — visibility booleans became one setting.</strong> <code>Layout = Accordion | TextBlock</code> makes the two terms paths mutually exclusive; previously both could render.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>C6 — the notched divider is a vector</strong>, replacing a raster image fill.",
          "delta": { "kind": "resolved", "label": "C6 resolved" }
        },
        {
          "body": "<strong>C1 — logo and badge became real slots</strong>: <code>⤷ LogoSlot</code> and <code>⤷ BadgeSlot</code>.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>C1 — duplicate layer names cleared.</strong> Two frames named <code>Content</code> became <code>Details</code> and <code>Body</code>; the two <code>#title</code> layers became <code>#header</code> / <code>#subheader</code> and <code>#title</code>.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>C2 — price aligned with <a href=\"/components/voucher\">Voucher</a></strong>: <code>#price</code> and <code>#originalPrice</code>.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "The two layouts compose differently — Accordion instances the DS component, TextBlock draws its own block. Confirmed intentional.",
          "delta": { "kind": "resolved", "label": "Docs" }
        }
      ]
    }
  ]
};
