import type { ComponentData, DemoControlSection } from '../types';
import { buildInteractiveColorsTable } from './_helpers';

/* Controls mirror the Figma property panel, in its order. `Variant` is the
   driving property so each card already is that value, and `Banner`,
   `⤷ Violator` and `⤷ Icon` are slots — none of those gets a control.
   Defaults are Figma's: isLoading false, isPressed false, hasViolator true. */
const bool = (label: string, prop: string, on: string) => ({
  label, prop,
  control: 'toggle' as const,
  defaultValue: on,
  options: [
    { value: 'false', label: 'false' },
    { value: 'true', label: 'true' },
  ],
});

const text = (label: string, prop: string, value: string) => ({
  label, prop,
  control: 'input' as const,
  defaultValue: value,
  options: [],
});

const baseRows = [
  bool('isLoading', 'isLoading', 'false'),
  bool('isPressed', 'isPressed', 'false'),
  bool('hasViolator', 'hasViolator', 'true'),
];

/* Default and With Icon carry `#title` and `#description`. */
const carouselCardControls: DemoControlSection[] = [
  { heading: 'Properties', rows: baseRows.concat([
    text('Title', 'title', 'Title'),
    text('Description', 'description', 'Description here. Description here.'),
  ]) },
];

/* Discount carries `#title` and `#amount` — no description layer. Its title
   shows the two-line case Figma's shared placeholder cannot: the `Title`
   property holds one value across every version. */
const discountControls: DemoControlSection[] = [
  { heading: 'Properties', rows: baseRows.concat([
    text('Title', 'title', 'Label here\nLabel here'),
    text('Amount', 'amount', 'PHP 200.00'),
  ]) },
];

export const carouselCard: ComponentData = {
  "meta": {
    "slug": "carousel-card",
    "name": "Carousel Card",
    "node": "5655:42547",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5655-42547",
    "description": "A tappable card used inside a horizontally scrolling carousel — banner, title, description, and an optional price. Comes in three versions: Default, With Icon, and Discount.",
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
    "navGroup": "Carousel",
    "verdict": {
      "kind": "keep",
      "title": "Keep — rebuilt, cleaned up, and ready for handoff",
      "text": "All four DS Health traits pass. The old <code>type</code> setting became three independent ones — <code>Variant</code> (Default / With Icon / Discount), <code>isLoading</code>, and <code>isPressed</code>. Banner, icon, and violator are real slots. Discount Card merged in as a <code>Variant</code> value, taking the Carousel family from 5 components to 3. The follow-up pass cleared the last of the layer-naming drift: all eight versions now share one anatomy and one vocabulary. Code Connect stays unmapped because the native library doesn't exist yet — that's a dev-side dependency, not a design gap."
    }
  },
  "overview": {
    "inContextNote": "Carousel Card lives in a horizontal scroller — typically a \"Featured\" or \"For You\" rail on a home or category screen. Cards are peeked (part of the next one visible) to signal scrollability.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"ccard-demo-preview\"><div class=\"eb-preview eb-preview-ccard eb-preview-ccard--default\"><div class=\"eb-preview-ccard__banner\"><div class=\"eb-preview-ccard__banner-img\"></div><div class=\"eb-preview-ccard__banner-dimmer\"></div><div class=\"eb-preview-ccard__banner-shadow\"></div><div class=\"eb-preview-ccard__violator\">New</div></div><div class=\"eb-preview-ccard__content\"><p class=\"eb-preview-ccard__title\">Title</p><p class=\"eb-preview-ccard__desc\">Description here.<br>Description here.</p></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">title</span><input type=\"text\" id=\"ccard-ctrl-title\" class=\"demo-panel-select demo-panel-input\" value=\"Title\" oninput=\"_ccardUpdate()\"></div><div class=\"demo-panel-row\" id=\"ccard-row-desc\"><span class=\"demo-panel-label\">description</span><input type=\"text\" id=\"ccard-ctrl-desc\" class=\"demo-panel-select demo-panel-input\" value=\"Description here. Description here.\" oninput=\"_ccardUpdate()\"></div><div class=\"demo-panel-row\" id=\"ccard-row-amount\"><span class=\"demo-panel-label\">amount</span><input type=\"text\" id=\"ccard-ctrl-amount\" class=\"demo-panel-select demo-panel-input\" value=\"PHP 200.00\" oninput=\"_ccardUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">⤷ Violator</span><input type=\"text\" id=\"ccard-ctrl-violator\" class=\"demo-panel-select demo-panel-input\" value=\"New\" oninput=\"_ccardUpdate()\"></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Variant</span><select id=\"ccard-ctrl-variant\" class=\"demo-panel-select\" onchange=\"_ccardUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"with-icon\">With Icon</option><option value=\"discount\">Discount</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isLoading</span><select id=\"ccard-ctrl-isloading\" class=\"demo-panel-select\" onchange=\"_ccardUpdate()\"><option value=\"false\" selected=\"\">false</option><option value=\"true\">true</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isPressed</span><select id=\"ccard-ctrl-ispressed\" class=\"demo-panel-select\" onchange=\"_ccardUpdate()\"><option value=\"false\" selected=\"\">false</option><option value=\"true\">true</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Slots for banner, icon, and violator let one card serve featured, services, and discount rails. Absorbing Discount Card took the Carousel family from 5 components to 3."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Banner, icon, and violator are real slots with sensible defaults. The placeholder image and its purple dimmer sit inside the swappable <code>Asset</code>, so dropping in real media replaces both."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "All eight versions share one anatomy and one vocabulary — <code>Banner</code>, <code>content</code>, <code>title</code>, <code>description</code>, <code>amount</code>. Settings follow the naming guidelines: <code>Variant</code> in PascalCase, <code>isLoading</code> and <code>isPressed</code> as <code>is</code>-prefixed booleans. Discount's smaller, darker title is the multi-line label style, applied deliberately."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "<code>⤷ Icon</code> is an empty slot, so DS icons drop straight in. Cards stack cleanly into a horizontal scroller and the skeleton is first-class."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "Variant=Default",
        "notes": "Banner slot + title + 2-line description. 140 × 214."
      },
      {
        "state": "With Icon",
        "ios": "yes",
        "android": "yes",
        "property": "Variant=With Icon",
        "notes": "Default layout plus a 34 × 34 <code>⤷ Icon</code> slot at the bottom-left of the banner. The slot ships empty on a <code>bg/color-bg-primary</code> circle — drop any DS icon in."
      },
      {
        "state": "Discount",
        "ios": "yes",
        "android": "yes",
        "property": "Variant=Discount",
        "notes": "Taller banner (140 × 152) over a white content block with title and <code>#amount</code>. The card hugs its content — 140 × 212 with the placeholder copy."
      },
      {
        "state": "Loading",
        "ios": "yes",
        "android": "yes",
        "property": "isLoading=true",
        "notes": "Banner and text become flat <code>#eef2f9</code> blocks. Each loading version is the same height as the card it replaces — Default 214, Discount 212 — so nothing jumps when the content arrives. With Icon reuses the Default skeleton, since a skeleton hides the icon anyway."
      },
      {
        "state": "Pressed",
        "ios": "yes",
        "android": "yes",
        "property": "isPressed=true",
        "notes": "Title dims to <code>#445c85</code> and description to <code>#90a8d0</code>. The banner does not change."
      },
      {
        "state": "Focused",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Not needed — this card ships on touch surfaces only."
      }
    ],
    "resolved": [
      {
        "headline": "The Discount card sizes to its own text now.",
        "body": "Its height was pinned to a fixed number, so a longer title overflowed instead of pushing the card taller. It hugs its content now — 212 tall with the placeholder copy, more when the title runs to two lines.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "The loading card is the same height as the real one.",
        "body": "The skeletons were 212 and 211 where the loaded cards were 214 and 212, so the layout shifted the moment content arrived. Both now match the card they stand in for.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "The invisible white backgrounds are gone.",
        "body": "Every version carried a white fill switched off — nothing drew it, but it read as a surface to anyone inspecting the layers. All eight are clean.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The title and description can be set on a copy.",
        "body": "Only the price was a real setting. The heading and body text were plain layers, so anyone placing the card had to detach it to change the words. <code>Title</code> and <code>Description</code> are now settings, matching <code>Amount</code>.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The banner dimmer is a plain colour on purpose.",
        "body": "It is the one value not tied to a named colour. That is deliberate — the overlay is tuned per asset so the badge and text above it stay readable on any image. Not a gap.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "The <code>type</code> setting no longer mixes content with loading state.",
        "body": "v2.0: rebuilt on node <code>5655:42547</code> as three independent settings — <code>Variant</code> (Default / With Icon / Discount), <code>isLoading</code>, and <code>isPressed</code>. Picking a content version no longer forces a loading choice.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The icon badge is a real slot.",
        "body": "v2.0: <code>⤷ Icon</code> (node <code>5655:42609</code>) is a 34 × 34 slot, empty by design. Any DS icon or Avatar drops straight in without detaching. It replaces the drawn <code>#c2c6cf</code> circle.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "The card has a pressed state.",
        "body": "v2.0: <code>isPressed</code> dims the title to <code>#445c85</code> and the description to <code>#90a8d0</code>. Focus was reviewed and dropped — this card ships on touch surfaces only.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "The spacing helper is out of the Discount card.",
        "body": "v2.1: <code>_space_12</code> removed from both Discount versions (<code>5655:42551</code>, <code>5670:43358</code>). The <code>content</code> frame now runs <code>#title</code> straight into <code>#amount</code>, with the 12px gap carried by auto-layout spacing instead of a placed instance.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The loading version's layer names match the rest of the set.",
        "body": "v2.2: both <code>sender</code> bars are now <code>description</code> (<code>5663:43017</code>, <code>5663:43018</code>), Discount's loading bars are <code>title</code> and <code>amount</code>, and both loading versions capitalise <code>Banner</code> to match. The frame stays a plain frame rather than a slot, which is right for a skeleton — there is nothing to drop into a loading placeholder.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "All eight versions name the content frame <code>content</code>.",
        "body": "v2.2: standardised on <code>content</code> rather than <code>block-content</code>, matching the wider design system — <code>content</code> appears in 3,000+ instances against 23 for <code>block-content</code>. Default, With Icon, Discount, and both loading versions now agree.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Discount's title treatment is intentional.",
        "body": "v2.2: reviewed and dismissed. The smaller 14 / 16 size is the multi-line label text style, and the darker <code>#0a2757</code> is deliberate — on a discount card the <code>#amount</code> carries the main colour, so the title steps back.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "The banner shadow is safe where it is.",
        "body": "v2.2: reviewed and dismissed. Designers replace the image layer inside the <code>Asset</code> instance rather than the instance itself, so <code>dimmer</code> and <code>shadow</code> stay put as siblings and the icon keeps its contrast backing.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "The banner placeholder is intentional.",
        "body": "v2.0: reviewed and dismissed. <code>Banner</code> (node <code>5650:40680</code>) is a slot, and the <code>replace-this-asset</code> image sits with its purple <code>#e6e1ef</code> dimmer inside the swappable <code>Asset</code> instance — real media replaces both at once. The matching recommendation to tokenise the dimmer was dropped for the same reason.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — the native component library doesn't exist yet. Nothing to action on the design side.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Document the <code>⤷ Violator</code> slot.",
        "body": "The slot ships a blue <code>#1972f9</code> \"New\" badge on all three content versions by design. Nothing in the docs mentions it, so designers won't know they can swap or clear it.",
        "tag": "Docs"
      },
      {
        "headline": "Consolidate Carousel - Item + Carousel Item - Center + Carousel Item - Side into a single <code>Carousel Item</code>.",
        "body": "\"Center\" and \"side\" describe where an item sits in a peek carousel at runtime, not a version of the component. The carousel layout works out which item is centre — it shouldn't be baked in as a setting. Merge these 3 into one <code>Carousel Item</code> and let the parent carousel apply the peek transform.",
        "tag": "Family"
      },
      {
        "headline": "Rename to clarify hierarchy.",
        "body": "<code>Carousel Card</code> (this component, now including Discount) handles the full-width banner pattern; <code>Carousel Item</code> handles the peek pattern. Keep the two names from overlapping once the Item family merges.",
        "tag": "Rename"
      },
      {
        "headline": "Document the skeleton treatment as a shared DS convention.",
        "body": "Carousel Card, Generic Card, and other card primitives all ship first-class skeletons — call out the pattern in the guidelines so card-family consistency holds as more components adopt it.",
        "tag": "Docs"
      },
      {
        "headline": "See siblings:",
        "body": "<a href=\"#\" onclick=\"showPanelById('generic-card');return false;\">Generic Card</a> (horizontal list row) — same \"card + skeleton + tappable\" pattern, different layout. Keep skeleton treatment aligned across both.",
        "tag": "Family"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Audit the colour token bindings.",
        "body": "v1.1: Applied — design confirmed every binding. Text roles use <code>text/color-text-strong</code>, <code>-weaker</code>, <code>-weak</code> and <code>-weakest</code>; Discount's title is <code>text/color-text</code> on a <code>bg/color-bg-main</code> surface; the icon circle is <code>bg/color-bg-primary</code>; the violator is <code>text/color-text-inverse</code> on <code>bg/brand-bg-primary</code>. The banner dimmer stays a plain colour by design.",
        "tag": "Token"
      },
      {
        "headline": "Consolidate Carousel Card + Carousel - Discount Card into a single <code>Carousel Card</code>.",
        "body": "v2.0: Applied — Discount is now a <code>Variant</code> value on this component rather than a separate one. The Carousel family drops from 5 components to 3.",
        "tag": "Family"
      },
      {
        "headline": "Split <code>type</code> into <code>variant</code> + <code>isLoading</code>.",
        "body": "v2.0: Applied — shipped as <code>Variant</code> (Default / With Icon / Discount) plus <code>isLoading</code>, with <code>isPressed</code> added alongside. Content and state are now separate choices.",
        "tag": "Property"
      },
      {
        "headline": "Adopt Figma Slots for banner and icon badge.",
        "body": "v2.0: Applied — <code>Banner</code> and <code>⤷ Icon</code> are both slots, and a third <code>⤷ Violator</code> slot was added for the corner badge.",
        "tag": "Slot"
      },
      {
        "headline": "Add pressed + focused states.",
        "body": "v2.0: Applied — <code>isPressed</code> dims the title and description. Focus was reviewed and dropped: this card ships on touch surfaces only.",
        "tag": "State"
      },
      {
        "headline": "Replace the <code>_space_12</code> helper with auto-layout spacing.",
        "body": "v2.1: Applied — the instance is gone from both Discount versions and the 12px title-to-amount gap is now auto-layout spacing.",
        "tag": "Composition"
      },
      {
        "headline": "Rename the loading version's leftover layers.",
        "body": "v2.2: Applied — the <code>sender</code> bars became <code>description</code> / <code>title</code> / <code>amount</code>, and <code>Banner</code> is capitalised across both loading versions.",
        "tag": "Rename"
      },
      {
        "headline": "Settle on one name for the content frame.",
        "body": "v2.2: Applied — all eight versions use <code>content</code>, chosen over <code>block-content</code> to match the 3,000+ existing instances elsewhere in the system.",
        "tag": "Rename"
      }
    ]
  },
  "style": {
    "heading": "Types",
    "specCards": [
      {
        "cardKey": "default",
        "demoKey": "default",
        "demoControls": carouselCardControls,
        "title": "Default",
        "node": "5653:42029",
        "description": "",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"ccard-spec-1\"><div class=\"eb-preview eb-preview-ccard eb-preview-ccard--default\"><div class=\"eb-preview-ccard__banner\"><div class=\"eb-preview-ccard__banner-img\"></div><div class=\"eb-preview-ccard__banner-dimmer\"></div><div class=\"eb-preview-ccard__banner-shadow\"></div><div class=\"eb-preview-ccard__violator\">New</div></div><div class=\"eb-preview-ccard__content\"><p class=\"eb-preview-ccard__title\">Title</p><p class=\"eb-preview-ccard__desc\">Description here.<br>Description here.</p></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Variant", "value": "Default" },
              { "key": "isLoading", "value": "false", "prop": "isLoading" },
              { "key": "isPressed", "value": "false", "prop": "isPressed" },
              { "key": "hasViolator", "value": "true", "prop": "hasViolator" },
              { "key": "Title", "value": "Title", "prop": "title" },
              { "key": "Description", "value": "Description here. Description here.", "prop": "description" },
              { "key": "Banner", "value": "Asset placeholder" },
              { "key": "⤷ Violator", "value": "Badge · New" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "#title", "value": "#2340A9", "token": "text/color-text-strong", "swatch": true, "variants": { "isPressed:true": { "value": "#445C85", "token": "text/color-text-weak" } } },
              { "key": "#description", "value": "#6780A9", "token": "text/color-text-weaker", "swatch": true, "variants": { "isPressed:true": { "value": "#90A8D0", "token": "text/color-text-weakest" } } },
              { "key": "Violator label", "value": "#FFFFFF", "token": "text/color-text-inverse", "swatch": true },
              { "key": "Violator background", "value": "#1972F9", "token": "bg/brand-bg-primary", "swatch": true },
              { "key": "Banner dimmer", "value": "#E6E1EF · 40% · Multiply", "token": "— plain colour by design" }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#title", "value": "Primary/Headlines/Block", "mono": true },
              { "key": "#description", "value": "Secondary/Bold/Caption", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "Hug · 214px at the shipped placeholder", "mono": true, "variants": { "isLoading:true": { "value": "214px" } } },
              { "key": "Width", "value": "140px", "mono": true },
              { "key": "Padding H", "value": "0px (derived)", "mono": true },
              { "key": "Padding V", "value": "0px (derived)", "mono": true },
              { "key": "Gap", "value": "12px (derived)", "mono": true },
              { "key": "Alignment", "value": "Leading (derived)", "mono": true }
            ]
          }
        ],
        "swift": "EBCarouselCard(\n    title: \"Title\",\n    description: \"Description here. Description here.\",\n    violator: \"New\"\n)",
        "compose": "EBCarouselCard(\n    title = \"Title\",\n    description = \"Description here. Description here.\",\n    violator = \"New\"\n)"
      },
      {
        "cardKey": "with-icon",
        "demoKey": "with-icon",
        "demoControls": carouselCardControls,
        "title": "With Icon",
        "node": "5655:42597",
        "description": "",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"ccard-spec-2\"><div class=\"eb-preview eb-preview-ccard eb-preview-ccard--with-icon\"><div class=\"eb-preview-ccard__banner\"><div class=\"eb-preview-ccard__banner-img\"></div><div class=\"eb-preview-ccard__banner-dimmer\"></div><div class=\"eb-preview-ccard__banner-shadow\"></div><div class=\"eb-preview-ccard__banner-icon\"></div><div class=\"eb-preview-ccard__violator\">New</div></div><div class=\"eb-preview-ccard__content\"><p class=\"eb-preview-ccard__title\">Title</p><p class=\"eb-preview-ccard__desc\">Description here.<br>Description here.</p></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Variant", "value": "With Icon" },
              { "key": "isLoading", "value": "false", "prop": "isLoading" },
              { "key": "isPressed", "value": "false", "prop": "isPressed" },
              { "key": "hasViolator", "value": "true", "prop": "hasViolator" },
              { "key": "Title", "value": "Title", "prop": "title" },
              { "key": "Description", "value": "Description here. Description here.", "prop": "description" },
              { "key": "Banner", "value": "Asset placeholder" },
              { "key": "⤷ Violator", "value": "Badge · New" },
              { "key": "⤷ Icon", "value": "empty slot · 34 × 34" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "#title", "value": "#2340A9", "token": "text/color-text-strong", "swatch": true, "variants": { "isPressed:true": { "value": "#445C85", "token": "text/color-text-weak" } } },
              { "key": "#description", "value": "#6780A9", "token": "text/color-text-weaker", "swatch": true, "variants": { "isPressed:true": { "value": "#90A8D0", "token": "text/color-text-weakest" } } },
              { "key": "⤷ Icon fill", "value": "#005CE5", "token": "bg/color-bg-primary", "swatch": true },
              { "key": "Violator label", "value": "#FFFFFF", "token": "text/color-text-inverse", "swatch": true },
              { "key": "Violator background", "value": "#1972F9", "token": "bg/brand-bg-primary", "swatch": true },
              { "key": "Banner dimmer", "value": "#E6E1EF · 40% · Multiply", "token": "— plain colour by design" }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#title", "value": "Primary/Headlines/Block", "mono": true },
              { "key": "#description", "value": "Secondary/Bold/Caption", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "Hug · 214px at the shipped placeholder", "mono": true, "variants": { "isLoading:true": { "value": "214px" } } },
              { "key": "Width", "value": "140px", "mono": true },
              { "key": "Padding H", "value": "0px (derived)", "mono": true },
              { "key": "Padding V", "value": "0px (derived)", "mono": true },
              { "key": "Gap", "value": "12px (derived)", "mono": true },
              { "key": "Alignment", "value": "Leading (derived)", "mono": true }
            ]
          }
        ],
        "swift": "EBCarouselCard(\n    title: \"Title\",\n    description: \"Description here. Description here.\",\n    violator: \"New\",\n    icon: Image(systemName: \"star.fill\")\n)",
        "compose": "EBCarouselCard(\n    title = \"Title\",\n    description = \"Description here. Description here.\",\n    violator = \"New\",\n    icon = { Icon(Icons.Filled.Star, null) }\n)"
      },
      {
        "cardKey": "discount",
        "demoKey": "discount",
        "demoControls": discountControls,
        "title": "Discount",
        "node": "5655:42551",
        "description": "",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"ccard-spec-3\"><div class=\"eb-preview eb-preview-ccard eb-preview-ccard--discount\"><div class=\"eb-preview-ccard__banner\"><div class=\"eb-preview-ccard__banner-img\"></div><div class=\"eb-preview-ccard__banner-dimmer\"></div><div class=\"eb-preview-ccard__banner-shadow\"></div><div class=\"eb-preview-ccard__violator\">New</div></div><div class=\"eb-preview-ccard__content eb-preview-ccard__content--discount\"><p class=\"eb-preview-ccard__label\">Label here<br>Label here</p><p class=\"eb-preview-ccard__amount\">PHP 200.00</p></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Variant", "value": "Discount" },
              { "key": "isLoading", "value": "false", "prop": "isLoading" },
              { "key": "isPressed", "value": "false", "prop": "isPressed" },
              { "key": "hasViolator", "value": "true", "prop": "hasViolator" },
              { "key": "Title", "value": "Label here / Label here", "prop": "title" },
              { "key": "Amount", "value": "PHP 200.00", "prop": "amount" },
              { "key": "Banner", "value": "Asset placeholder" },
              { "key": "⤷ Violator", "value": "Badge · New" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "bg/color-bg-main", "swatch": true },
              { "key": "#title", "value": "#0A2757", "token": "text/color-text", "swatch": true, "variants": { "isPressed:true": { "value": "#445C85", "token": "text/color-text-weak" } } },
              { "key": "#amount", "value": "#2340A9", "token": "text/color-text-strong", "swatch": true, "variants": { "isPressed:true": { "value": "#90A8D0", "token": "text/color-text-weakest" } } },
              { "key": "Violator label", "value": "#FFFFFF", "token": "text/color-text-inverse", "swatch": true },
              { "key": "Violator background", "value": "#1972F9", "token": "bg/brand-bg-primary", "swatch": true },
              { "key": "Banner dimmer", "value": "#E6E1EF · 40% · Multiply", "token": "— plain colour by design" }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#title", "value": "Primary/Multi-line Label/Small", "mono": true },
              { "key": "#amount", "value": "Primary/Label/Fine", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "Hug · 212px at the shipped placeholder", "mono": true, "variants": { "isLoading:true": { "value": "212px" } } },
              { "key": "Width", "value": "140px", "mono": true },
              { "key": "Padding H", "value": "0px (derived)", "mono": true },
              { "key": "Padding V", "value": "0px (derived)", "mono": true },
              { "key": "Gap", "value": "0px (derived)", "mono": true },
              { "key": "Alignment", "value": "Leading (derived)", "mono": true }
            ]
          }
        ],
        "swift": "EBCarouselCard(\n    variant: .discount,\n    title: \"Label here\",\n    amount: \"PHP 200.00\",\n    violator: \"New\"\n)",
        "compose": "EBCarouselCard(\n    variant = EBCarouselCardVariant.Discount,\n    title = \"Label here\",\n    amount = \"PHP 200.00\",\n    violator = \"New\"\n)"
      }
    ],
    colorsTables: [
      buildInteractiveColorsTable({
        title: "Default — Colors",
        description: "The card paints no surface of its own. Both text roles shift one step weaker when isPressed=true.",
        rows: [
          { role: "#title", token: "text/color-text-strong · pressed text/color-text-weak",
            default: "#2340A9", pressed: "#445C85", disabled: '–' },
          { role: "#description", token: "text/color-text-weaker · pressed text/color-text-weakest",
            default: "#6780A9", pressed: "#90A8D0", disabled: '–' },
          { role: "Violator label", token: "text/color-text-inverse",
            default: "#FFFFFF", pressed: "#FFFFFF", disabled: '–' },
          { role: "Violator background", token: "bg/brand-bg-primary",
            default: "#1972F9", pressed: "#1972F9", disabled: '–' },
          { role: "Banner dimmer", token: "— plain colour by design",
            default: "#E6E1EF · 40% · Multiply", pressed: "#E6E1EF · 40% · Multiply", disabled: '–' },
        ],
      }),
      buildInteractiveColorsTable({
        title: "With Icon — Colors",
        description: "Same palette as Default, plus the circular ⤷ Icon slot behind whichever DS icon is dropped in.",
        rows: [
          { role: "#title", token: "text/color-text-strong · pressed text/color-text-weak",
            default: "#2340A9", pressed: "#445C85", disabled: '–' },
          { role: "#description", token: "text/color-text-weaker · pressed text/color-text-weakest",
            default: "#6780A9", pressed: "#90A8D0", disabled: '–' },
          { role: "⤷ Icon fill", token: "bg/color-bg-primary",
            default: "#005CE5", pressed: "#005CE5", disabled: '–' },
          { role: "Violator label", token: "text/color-text-inverse",
            default: "#FFFFFF", pressed: "#FFFFFF", disabled: '–' },
          { role: "Violator background", token: "bg/brand-bg-primary",
            default: "#1972F9", pressed: "#1972F9", disabled: '–' },
          { role: "Banner dimmer", token: "— plain colour by design",
            default: "#E6E1EF · 40% · Multiply", pressed: "#E6E1EF · 40% · Multiply", disabled: '–' },
        ],
      }),
      buildInteractiveColorsTable({
        title: "Discount — Colors",
        description: "Discount carries a real white content surface so it can sit on non-white backgrounds. Its title uses a darker token than the other two versions, and is deliberately smaller so a two-line label fits.",
        rows: [
          { role: "Surface", token: "bg/color-bg-main",
            default: "#FFFFFF", pressed: "#FFFFFF", disabled: '–' },
          { role: "#title", token: "text/color-text · pressed text/color-text-weak",
            default: "#0A2757", pressed: "#445C85", disabled: '–' },
          { role: "#amount", token: "text/color-text-strong · pressed text/color-text-weakest",
            default: "#2340A9", pressed: "#90A8D0", disabled: '–' },
          { role: "Violator label", token: "text/color-text-inverse",
            default: "#FFFFFF", pressed: "#FFFFFF", disabled: '–' },
          { role: "Violator background", token: "bg/brand-bg-primary",
            default: "#1972F9", pressed: "#1972F9", disabled: '–' },
          { role: "Banner dimmer", token: "— plain colour by design",
            default: "#E6E1EF · 40% · Multiply", pressed: "#E6E1EF · 40% · Multiply", disabled: '–' },
        ],
      }),
    ],
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
          "code": "<span class=\"syn-fn\">implementation</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"com.eastblue.ds:carousel-card:1.0.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Import",
          "code": "<span class=\"syn-kw\">import</span> <span class=\"syn-type\">EastBlueDS</span>\n<span class=\"syn-kw\">import</span> com<span class=\"syn-punc\">.</span>eastblue<span class=\"syn-punc\">.</span>ds<span class=\"syn-punc\">.</span>carouselcard<span class=\"syn-punc\">.</span><span class=\"syn-punc\">*</span>"
        }
      ],
      "footnote": "Planned API — the native library does not exist yet. Snippets show the intended shape, not shipped code."
    },
    "propertyMapping": {
      "description": "Figma properties mapped to the intended native parameters, in the order the Figma property panel lists them.",
      "rows": [
        {
          "figma": "Variant — Default, With Icon, Discount",
          "swift": "<code>variant: EBCarouselCardVariant</code>",
          "compose": "<code>variant = EBCarouselCardVariant.Default / WithIcon / Discount</code>"
        },
        {
          "figma": "isLoading — true, false",
          "swift": "<code>isLoading: Bool = false</code>",
          "compose": "<code>isLoading: Boolean = false</code>"
        },
        {
          "figma": "isPressed — true, false",
          "swift": "<code>isPressed: Bool = false</code> — driven by the press gesture",
          "compose": "<code>isPressed: Boolean = false</code> — driven by the press gesture"
        },
        {
          "figma": "hasViolator — true, false",
          "swift": "<code>showViolator: Bool = true</code>",
          "compose": "<code>showViolator: Boolean = true</code>"
        },
        {
          "figma": "⤷ Violator (slot)",
          "swift": "<code>@ViewBuilder violator: () -> Violator</code>",
          "compose": "<code>violator: @Composable () -> Unit</code>"
        },
        {
          "figma": "⤷ Icon (slot) — With Icon only",
          "swift": "<code>@ViewBuilder icon: (() -> Icon)?</code>",
          "compose": "<code>icon: (@Composable () -> Unit)? = null</code>"
        },
        {
          "figma": "Banner (slot)",
          "swift": "<code>@ViewBuilder banner: () -> Banner</code>",
          "compose": "<code>banner: @Composable BoxScope.() -> Unit</code>"
        },
        {
          "figma": "Title (text)",
          "swift": "<code>title: String</code>",
          "compose": "<code>title: String</code>"
        },
        {
          "figma": "Description (text) — Default, With Icon",
          "swift": "<code>description: String?</code>",
          "compose": "<code>description: String? = null</code>"
        },
        {
          "figma": "Amount (text) — Discount",
          "swift": "<code>amount: String?</code>",
          "compose": "<code>amount: String? = null</code>"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Default — banner, title, description",
        "swift": "<span class=\"syn-type\">EBCarouselCard</span><span class=\"syn-punc\">(</span>\n    variant<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.default</span><span class=\"syn-punc\">,</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Description here.\"</span>\n<span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span>\n    <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>ad<span class=\"syn-punc\">.</span>banner<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBCarouselCard</span><span class=\"syn-punc\">(</span>\n    variant <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBCarouselCardVariant</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Default</span><span class=\"syn-punc\">,</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Description here.\"</span>\n<span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span>\n    <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>model <span class=\"syn-eq\">=</span> ad<span class=\"syn-punc\">.</span>banner<span class=\"syn-punc\">,</span> contentDescription <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "subheading": "With Icon — adds the icon slot on the banner",
        "swift": "<span class=\"syn-type\">EBCarouselCard</span><span class=\"syn-punc\">(</span>\n    variant<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.withIcon</span><span class=\"syn-punc\">,</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Description here.\"</span><span class=\"syn-punc\">,</span>\n    icon<span class=\"syn-punc\">:</span> <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>systemName<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"star.fill\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span>\n    <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>ad<span class=\"syn-punc\">.</span>banner<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBCarouselCard</span><span class=\"syn-punc\">(</span>\n    variant <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBCarouselCardVariant</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">WithIcon</span><span class=\"syn-punc\">,</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Description here.\"</span><span class=\"syn-punc\">,</span>\n    icon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> <span class=\"syn-type\">Icon</span><span class=\"syn-punc\">(</span>Icons<span class=\"syn-punc\">.</span>Filled<span class=\"syn-punc\">.</span>Star<span class=\"syn-punc\">,</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span>\n    <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>model <span class=\"syn-eq\">=</span> ad<span class=\"syn-punc\">.</span>banner<span class=\"syn-punc\">,</span> contentDescription <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "subheading": "Discount — title and price, no description",
        "swift": "<span class=\"syn-type\">EBCarouselCard</span><span class=\"syn-punc\">(</span>\n    variant<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.discount</span><span class=\"syn-punc\">,</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Label here\"</span><span class=\"syn-punc\">,</span>\n    amount<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"PHP 200.00\"</span>\n<span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span>\n    <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>ad<span class=\"syn-punc\">.</span>banner<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBCarouselCard</span><span class=\"syn-punc\">(</span>\n    variant <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBCarouselCardVariant</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Discount</span><span class=\"syn-punc\">,</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label here\"</span><span class=\"syn-punc\">,</span>\n    amount <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 200.00\"</span>\n<span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span>\n    <span class=\"syn-type\">AsyncImage</span><span class=\"syn-punc\">(</span>model <span class=\"syn-eq\">=</span> ad<span class=\"syn-punc\">.</span>banner<span class=\"syn-punc\">,</span> contentDescription <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "Card as a button",
        "ios": "Whole card wrapped in <code>Button</code> with combined <code>accessibilityLabel</code> (title + description).",
        "android": "<code>Modifier.clickable { onClick() }.semantics(mergeDescendants = true)</code> on the column."
      },
      {
        "requirement": "Combined announcement",
        "ios": "\"Send Money, Locally or abroad, same day\" — VoiceOver reads title then description.",
        "android": "Same reading order — TalkBack follows composition."
      },
      {
        "requirement": "Image alt",
        "ios": "If the banner carries meaning, pass <code>accessibilityLabel</code> on the image; otherwise mark as decorative.",
        "android": "<code>contentDescription</code> set when banner is content-bearing, <code>null</code> when decorative."
      },
      {
        "requirement": "Min touch target",
        "ios": "Card is 140×214 — comfortably above 44 pt ✓",
        "android": "140 dp × 214 dp — above 48 dp ✓"
      },
      {
        "requirement": "Loading state",
        "ios": "Announce \"Loading\" once on mount; suppress per-placeholder announcements.",
        "android": "<code>contentDescription = \"Loading\"</code> on the skeleton container."
      },
      {
        "requirement": "Focus ring",
        "ios": "Add a <code>.focused()</code> modifier → 2 px outline for tvOS/iPad keyboard.",
        "android": "<code>Modifier.focusable()</code> + border in <code>border/focus</code> token."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use <code>Discount</code> when the price is the point — a voucher, a deal, a promo tile.",
        "dontText": "Don't use it for editorial cards. Its title is smaller so two lines of label fit, which makes headlines read as body text."
      },
      {
        "doText": "Put campaign artwork in the <code>Banner</code> slot from the product's own asset pipeline.",
        "dontText": "Don't add campaign images to the design system library — the slot exists so they never have to be."
      },
      {
        "doText": "Let the card size to its own text. Title and description both wrap.",
        "dontText": "Don't pin a height. All three versions hug their content, and a fixed height clips a longer title."
      },
      {
        "doText": "Turn <code>hasViolator</code> off when there is nothing to flag.",
        "dontText": "Don't repurpose the violator for a price or a discount — that is what <code>Amount</code> is for."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All eight versions share one anatomy — <code>Banner</code>, <code>content</code>, <code>title</code>, <code>description</code>, <code>amount</code>. Names are semantic and consistent."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Variant</code> in PascalCase; <code>isLoading</code> and <code>isPressed</code> as <code>is</code>-prefixed booleans. Follows the Property Naming Guidelines."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Every colour is bound and confirmed by design: text roles on <code>text/color-text-*</code>, the icon circle on <code>bg/color-bg-primary</code>, the violator on <code>bg/brand-bg-primary</code>, Discount's surface on <code>bg/color-bg-main</code>. The <code>#e6e1ef</code> banner dimmer is a plain colour on purpose — it is tuned per asset so the badge and text above it stay readable."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to <code>VStack</code> / <code>Column</code> in a horizontal scroller. Slots map to <code>@ViewBuilder</code> / <code>@Composable</code> parameters."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Default, pressed, and loading all built. Focus reviewed and dropped — this card ships on touch surfaces only."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Banner</code>, <code>⤷ Icon</code>, and <code>⤷ Violator</code> are slots. The placeholder image is replaced inside the <code>Asset</code> instance, leaving <code>dimmer</code> and <code>shadow</code> in place."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked — the native component library doesn't exist yet."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 8,
      "description": "3 <code>Variant</code> × 2 <code>isLoading</code> × 2 <code>isPressed</code> = 12 combinations, of which <strong>8 are built</strong>. <code>With Icon</code> has no loading version — a skeleton hides the icon, so it reuses Default's. The three loading-and-pressed pairings cannot occur.",
      "columns": ["Variant", "isLoading", "isPressed", "Height", "Node"],
      "rows": [
        { "cells": ["Default", "false", "false", "214", "5653:42029"] },
        { "cells": ["With Icon", "false", "false", "214", "5655:42597"] },
        { "cells": ["Discount", "false", "false", "212", "5655:42551"] },
        { "cells": ["Default", "false", "true", "214", "5670:43340"] },
        { "cells": ["With Icon", "false", "true", "214", "5670:43348"] },
        { "cells": ["Discount", "false", "true", "212", "5670:43358"] },
        { "cells": ["Default", "true", "false", "214", "5663:43019"] },
        { "cells": ["Discount", "true", "false", "212", "5663:43020"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "1.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 23:121311",
      "rows": [
        {
          "body": "<strong>Verdict: Restructure</strong> — Split <code>type</code> into <code>variant</code> + <code>isLoading</code>, adopt image + icon slots, drop the hardcoded purple dimmer, add pressed/focused states, and consolidate the 5-component Carousel family. <span class=\"tag-open tag-c2 tag-c5 tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Schema"
          }
        },
        {
          "body": "<strong>Skeleton pattern acknowledged</strong> — First-class skeleton variant is valuable; keep it when restructuring into <code>EBCarouselCardSkeleton</code>. <span class=\"tag-fixed\">Noted</span>",
          "delta": {
            "kind": "resolved",
            "label": "Praise"
          }
        },
        {
          "body": "<strong>Family consolidation</strong> — 5 Carousel components collapse to 2: <code>Carousel Card</code> (default / discount) and <code>Carousel Item</code> (peek). <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Family"
          }
        },
        {
          "body": "<strong>C2 — Type split</strong> — <code>variant</code> for content, <code>isLoading</code> for state. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C6 — Image + icon slots</strong> — Replace banner PNG and hardcoded icon circle with Figma Slots. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C5 — Pressed / focused</strong> — Tappable card needs both. <span class=\"tag-open tag-c5\">Open</span>",
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
