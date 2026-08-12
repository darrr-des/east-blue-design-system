import type { ComponentData } from '../types';
import { buildStatelessColorsTable } from './_helpers';

export const carouselCard: ComponentData = {
  "meta": {
    "slug": "carousel-card",
    "name": "Carousel Card",
    "node": "5655:42547",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5655-42547",
    "description": "A tappable card used inside a horizontally scrolling carousel — banner, title, description, and an optional price. Comes in three versions: Default, With Icon, and Discount.",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Carousel",
    "verdict": {
      "kind": "fix",
      "title": "Fix — the rebuild landed; clean up the leftover layer names",
      "text": "The rebuild fixed everything structural. The old <code>type</code> setting is now three independent ones — <code>Variant</code> (Default / With Icon / Discount), <code>isLoading</code>, and <code>isPressed</code>. Banner, icon, and violator are real slots, so designers swap content without detaching. Discount Card merged in as a <code>Variant</code> value, taking the Carousel family from 5 components to 3. What's left is cleanup, not restructuring: the loading version still carries layer names copied from another component, a spacing helper ships inside the Discount card, and Discount's title uses a different size and color from the other two."
    }
  },
  "overview": {
    "inContextNote": "Carousel Card lives in a horizontal scroller — typically a \"Featured\" or \"For You\" rail on a home or category screen. Cards are peeked (part of the next one visible) to signal scrollability.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"ccard-demo-preview\"><div class=\"eb-preview eb-preview-ccard eb-preview-ccard--default\"><div class=\"eb-preview-ccard__banner\"><div class=\"eb-preview-ccard__banner-img\"></div><div class=\"eb-preview-ccard__banner-dimmer\"></div></div><div class=\"eb-preview-ccard__content\"><p class=\"eb-preview-ccard__title\">Title</p><p class=\"eb-preview-ccard__desc\">Description here.<br>Description here.</p></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">title</span><input type=\"text\" id=\"ccard-ctrl-title\" class=\"demo-panel-select demo-panel-input\" value=\"Title\" oninput=\"_ccardUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><input type=\"text\" id=\"ccard-ctrl-desc\" class=\"demo-panel-select demo-panel-input\" value=\"Description here. Description here.\" oninput=\"_ccardUpdate()\"></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">type</span><select id=\"ccard-ctrl-type\" class=\"demo-panel-select\" onchange=\"_ccardUpdate()\"><option value=\"default\" selected=\"\">default</option><option value=\"with-icon\">with icon</option><option value=\"skeleton\">skeleton loader</option></select></div></div></div></div>",
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
        "rating": "partial",
        "note": "Naming drifts between versions. The loading version names both description bars <code>sender</code> and uses a plain <code>banner</code> frame instead of the <code>Banner</code> slot. Discount calls its content frame <code>content</code> where the others use <code>block-content</code>, and sets its title at 14 / 16 in <code>#0a2757</code> against 18 / 23 in <code>#2340a9</code> elsewhere."
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
        "notes": "Default layout plus a 34 × 34 <code>⤷ Icon</code> slot at the bottom-left of the banner. The slot ships empty on a <code>#005ce5</code> circle — drop any DS icon in."
      },
      {
        "state": "Discount",
        "ios": "yes",
        "android": "yes",
        "property": "Variant=Discount",
        "notes": "Taller banner (140 × 152) over a white content block with title and <code>#amount</code>. 140 × 226."
      },
      {
        "state": "Loading",
        "ios": "yes",
        "android": "yes",
        "property": "isLoading=true",
        "notes": "Banner and text become flat <code>#eef2f9</code> blocks. Built for Default (212) and Discount (211); With Icon reuses the Default skeleton, since a skeleton hides the icon anyway."
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
        "headline": "The loading version carries layer names from another component.",
        "body": "Both description bars are named <code>sender</code> (<code>5663:43017</code>, <code>5663:43018</code>) — copied in from a transaction row. Its banner is also a plain frame named <code>banner</code> rather than the <code>Banner</code> slot the other versions use.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Discount names its content frame two different ways.",
        "body": "Discount's default and pressed versions use <code>content</code> (<code>5655:42556</code>, <code>5670:43363</code>), but its own loading version uses <code>block-content</code> (<code>5663:43020</code>) — which is what Default and With Icon use too. So Discount disagrees with itself as well as with the rest of the set. Settle on <code>block-content</code> everywhere.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Discount uses a different title size and colour from the other versions.",
        "body": "Discount sets its title at Proxima Soft Bold 14 / 16 in <code>#0a2757</code>. Default and With Icon use 18 / 23 in <code>#2340a9</code>. One component carrying two title treatments needs either a reason or a fix.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "The icon's contrast shadow sits inside the swappable banner.",
        "body": "The <code>shadow</code> gradient lives inside the <code>Asset</code> instance, so swapping in real media removes it. On With Icon that shadow is what keeps the blue icon readable — against a bright photo the icon can disappear.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked until the <code>type</code> split, the image/icon slots, and the family consolidation land.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Rename the loading version's leftover layers.",
        "body": "Rename both <code>sender</code> bars to <code>title</code> and <code>description</code>, and rebuild its <code>banner</code> frame as the <code>Banner</code> slot so all four versions share one anatomy.",
        "tag": "Rename"
      },
      {
        "headline": "Move the banner shadow out of the swappable asset.",
        "body": "Lift the <code>shadow</code> gradient from inside the <code>Asset</code> instance up to the card, above the <code>Banner</code> slot. The icon then keeps its contrast backing no matter what media a designer drops in.",
        "tag": "Asset"
      },
      {
        "headline": "Match Discount's title to the other two versions.",
        "body": "Either move Discount's title to 18 / 23 in <code>#2340a9</code> like Default and With Icon, or write down why the discount card needs a smaller, darker title. Right now the difference reads as drift.",
        "tag": "Token"
      },
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
      }
    ]
  },
  "style": {
    "heading": "Types",
    "specCards": [
      {
        "cardKey": "default",
        "demoKey": "default",
        "demoControls": [],
        "title": "Default",
        "node": "23:121312",
        "description": "Banner image + title + 2-line description. The banner ships a placeholder PNG dimmed by a purple multiply layer — replace both with your real media.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"ccard-spec-1\"><div class=\"eb-preview eb-preview-ccard eb-preview-ccard--default\"><div class=\"eb-preview-ccard__banner\"><div class=\"eb-preview-ccard__banner-img\"></div><div class=\"eb-preview-ccard__banner-dimmer\"></div></div><div class=\"eb-preview-ccard__content\"><p class=\"eb-preview-ccard__title\">Title</p><p class=\"eb-preview-ccard__desc\">Description here.<br>Description here.</p></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type", "value": "default", "prop": "type" },
              { "key": "Aspect", "value": "3:2 hero image" },
              { "key": "Pagination", "value": "dots" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Heading", "value": "#2340A9", "token": "carousel/color/label-header" },
              { "key": "Description", "value": "#6780A9", "token": "carousel/color/description" },
              { "key": "Surface", "value": "#FFFFFF", "token": "bg/color-bg-main" },
              { "key": "Active dot", "value": "#005CE5", "token": "bg/color-bg-primary" },
              { "key": "Inactive dot", "value": "#EEF2F9", "token": "bg/color-bg-strong" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Card width", "value": "140px", "mono": true },
              { "key": "Banner size", "value": "140 × 140px", "mono": true },
              { "key": "Banner radius", "value": "radius/radius-1 (4px)", "mono": true },
              { "key": "Banner gap", "value": "12px", "mono": true },
              { "key": "Title → desc gap", "value": "4px", "mono": true },
              { "key": "Total height", "value": "215px", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Title style", "value": "Primary/Headlines/Block", "mono": true },
              { "key": "Title font", "value": "Proxima Soft Bold · 18 / 23 · +0.25", "mono": true },
              { "key": "Description style", "value": "Secondary/Bold/Caption", "mono": true },
              { "key": "Description font", "value": "BarkAda Semibold · 12 / 18 · 0", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCarousel</span><span class=\"syn-punc\">(</span>items<span class=\"syn-punc\">: </span>cards<span class=\"syn-punc\">) {</span> card <span class=\"syn-kw\">in</span>\n    <span class=\"syn-type\">EBCarouselCard</span><span class=\"syn-punc\">(</span>card<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBCarousel</span><span class=\"syn-punc\">(</span>items <span class=\"syn-eq\">=</span> cards<span class=\"syn-punc\">) {</span> card <span class=\"syn-punc\">-></span>\n    <span class=\"syn-type\">EBCarouselCard</span><span class=\"syn-punc\">(</span>card<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "cardKey": "with-icon",
        "demoKey": "with-icon",
        "demoControls": [],
        "title": "With icon",
        "node": "23:121322",
        "description": "Default layout + a bottom-left icon badge on the banner. A gradient shadow along the lower third improves icon contrast against bright imagery.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"ccard-spec-2\"><div class=\"eb-preview eb-preview-ccard eb-preview-ccard--with-icon\"><div class=\"eb-preview-ccard__banner\"><div class=\"eb-preview-ccard__banner-img\"></div><div class=\"eb-preview-ccard__banner-dimmer\"></div><div class=\"eb-preview-ccard__banner-shadow\"></div><div class=\"eb-preview-ccard__banner-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\" width=\"16\" height=\"16\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"#C2C6CF\"></circle></svg></div></div><div class=\"eb-preview-ccard__content\"><p class=\"eb-preview-ccard__title\">Title</p><p class=\"eb-preview-ccard__desc\">Description here.<br>Description here.</p></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type", "value": "with-icon", "prop": "type" },
              { "key": "Has icon", "value": "Yes" },
              { "key": "Has description", "value": "Yes" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface bg", "value": "#FFFFFF", "token": "main/card/bg" },
              { "key": "Icon container bg", "value": "#E8F1FF", "token": "main/card/icon/bg" },
              { "key": "Title", "value": "#0A2757", "token": "main/card/title" },
              { "key": "Description", "value": "#3C4A5C", "token": "main/card/description" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width", "value": "280px", "mono": true },
              { "key": "Min height", "value": "160px", "mono": true },
              { "key": "Padding", "value": "20px", "mono": true },
              { "key": "Corner radius", "value": "16px", "mono": true },
              { "key": "Icon container", "value": "48 × 48px", "mono": true },
              { "key": "Icon size", "value": "24 × 24px", "mono": true },
              { "key": "Gap", "value": "12px", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Title style", "value": "Heading/Small", "mono": true },
              { "key": "Description style", "value": "Body/Small", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCarouselCard</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Send money\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Free transfers to GCash users\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon<span class=\"syn-punc\">: </span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>systemName<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"paperplane.fill\"</span><span class=\"syn-punc\">))</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCarouselCard</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Send money\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Free transfers to GCash users\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ </span><span class=\"syn-type\">Icon</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">Icons</span><span class=\"syn-punc\">.</span>Send<span class=\"syn-punc\">, </span><span class=\"syn-kw\">null</span><span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "skeleton-loader",
        "demoKey": "skeleton-loader",
        "demoControls": [],
        "title": "Skeleton loader",
        "node": "23:121334",
        "description": "Loading placeholder: banner becomes a flat light-gray block; title and description become bar placeholders. Card total height drops to 212 (vs 215 default) due to the 16 top gap in the content block.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"ccard-spec-3\"><div class=\"eb-preview eb-preview-ccard eb-preview-ccard--skeleton\"><div class=\"eb-preview-ccard__banner eb-preview-ccard__banner--skeleton\"></div><div class=\"eb-preview-ccard__content eb-preview-ccard__content--skeleton\"><div class=\"eb-preview-ccard__sk eb-preview-ccard__sk--title\"></div><div class=\"eb-preview-ccard__sk eb-preview-ccard__sk--desc\"></div><div class=\"eb-preview-ccard__sk eb-preview-ccard__sk--desc2\"></div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type", "value": "skeleton", "prop": "type" },
              { "key": "State", "value": "Loading" },
              { "key": "Has content", "value": "No" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Skeleton bg", "value": "#EEF2F9", "token": "main/skeleton/bg" },
              { "key": "Surface bg", "value": "#FFFFFF", "token": "main/card/bg" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width", "value": "280px", "mono": true },
              { "key": "Min height", "value": "160px", "mono": true },
              { "key": "Padding", "value": "20px", "mono": true },
              { "key": "Corner radius", "value": "16px", "mono": true },
              { "key": "Bar 1 size", "value": "120 × 12px", "mono": true },
              { "key": "Bar 2 size", "value": "180 × 8px", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "—", "value": "No text in skeleton state" }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCarouselCard</span><span class=\"syn-punc\">(</span>isLoading<span class=\"syn-punc\">: </span><span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCarouselCard</span><span class=\"syn-punc\">(</span>\n    isLoading <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    colorsTables: [
      // Card 1 — Default carousel slide
      buildStatelessColorsTable({
        title: 'Default — Colors',
        description: 'Promotional carousel card with heading, description, and pagination dots.',
        rows: [
          { role: 'Surface',      token: 'bg/color-bg-main',           value: '#FFFFFF' },
          { role: 'Heading',      token: 'carousel/color/label-header', value: '#2340A9' },
          { role: 'Description',  token: 'carousel/color/description', value: '#6780A9' },
          { role: 'Active dot',   token: 'bg/color-bg-primary',        value: '#005CE5' },
          { role: 'Inactive dot', token: 'bg/color-bg-strong',         value: '#EEF2F9' },
        ],
      }),
      // Card 2 — Icon-led card
      buildStatelessColorsTable({
        title: 'With Icon — Colors',
        description: 'Icon-led carousel card with a tinted icon container and stacked title/description.',
        rows: [
          { role: 'Surface bg',         token: 'main/card/bg',          value: '#FFFFFF' },
          { role: 'Icon container bg',  token: 'main/card/icon/bg',     value: '#E8F1FF' },
          { role: 'Title',              token: 'main/card/title',       value: '#0A2757' },
          { role: 'Description',        token: 'main/card/description', value: '#3C4A5C' },
        ],
      }),
      // Card 3 — Skeleton
      buildStatelessColorsTable({
        title: 'Skeleton — Colors',
        description: 'Loading state — content slots become rounded grey rectangles on the card surface.',
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
          "figma": "<code>type: default | with icon | skeleton loader</code>",
          "swift": "<code>variant: default | with-icon</code> <span class=\"muted\">+</span> <code>isLoading: Boolean</code>",
          "compose": "<code>variant: EBCarouselCardVariant</code> <span class=\"muted\">+</span> <code>isLoading: Bool</code>"
        },
        {
          "figma": "(hardcoded raster)",
          "swift": "<code>image: Frame</code> (slot)",
          "compose": "<code>image: () -&gt; Image</code>"
        },
        {
          "figma": "(hardcoded text)",
          "swift": "<code>title: String</code>",
          "compose": "<code>title: String</code>"
        },
        {
          "figma": "(hardcoded text)",
          "swift": "<code>description: String</code>",
          "compose": "<code>description: String?</code>"
        },
        {
          "figma": "(hardcoded circle)",
          "swift": "<code>icon?: Icon</code> (slot)",
          "compose": "<code>icon: EBIcon?</code>"
        },
        {
          "figma": "(hardcoded purple multiply)",
          "swift": "<code>overlay?: Color</code> (token)",
          "compose": "<code>overlay: Color?</code>"
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
        "ios": "Card is 140×215 — comfortably above 44 pt ✓",
        "android": "140 dp × 215 dp — above 48 dp ✓"
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
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Clean container / banner / block-content hierarchy. Layer names are semantic."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>type</code> conflates content variant with loading state — split into <code>variant</code> + <code>isLoading</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Title / description / skeleton fills bound to tokens. Banner PNG, purple dimmer, and icon glyph color are not."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Maps cleanly to <code>VStack</code> / <code>Column</code> in a horizontal scroller once image/icon slots and skeleton split land."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Default + skeleton built. Missing pressed + focused."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Banner is a raster placeholder PNG; icon is a drawn circle, not an Icon instance; purple dimmer is hardcoded."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked on property split, slot adoption, and family consolidation."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 3,
      "description": "<code>type</code> (3) = <strong>3 variants</strong>. <code>default</code> and <code>with icon</code> share the same overall dimensions (140 × 215); <code>skeleton loader</code> is 140 × 212 due to a different content padding.",
      "columns": [
        "type",
        "Node",
        "Dimensions",
        "Anatomy"
      ],
      "rows": [
        {
          "cells": [
            "<strong>default</strong>",
            "<code>23:121312</code>",
            "140 × 215",
            "Banner + title + 2-line description."
          ]
        },
        {
          "cells": [
            "<strong>with icon</strong>",
            "<code>23:121322</code>",
            "140 × 215",
            "Default + gradient shadow + bottom-left 30×30 icon badge on banner."
          ]
        },
        {
          "cells": [
            "<strong>skeleton loader</strong>",
            "<code>23:121334</code>",
            "140 × 212",
            "Flat banner + 3 bar placeholders (title 16, desc 10, desc 10 @ 97w)."
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
