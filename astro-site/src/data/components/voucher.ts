import type { ComponentData, DemoControlSection } from '../types';
import { buildColorsTable } from './_helpers';

/* Two sets, because the two orientations do not have the same
   properties. Horizontal carries no DiscountSlot, so offering
   hasDiscountBadge there would be a control that moves nothing — the
   dead-control failure check 8 exists to catch. */
const voucherControlsHorizontal: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'AssetSize',
        prop: 'assetsize',
        defaultValue: 'small',
        options: [
          { value: 'small', label: 'Small' },
          { value: 'large', label: 'Large' }
        ]
      },
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'used', label: 'Used' },
          { value: 'expired', label: 'Expired' }
        ]
      },
      {
        label: 'hasValidityDate',
        prop: 'hasvaliditydate',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: 'hasDescription',
        prop: 'hasdescription',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: 'hasBadge',
        prop: 'hasbadge',
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
      }
    ]
  }
];

const voucherControlsVertical: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'AssetSize',
        prop: 'assetsize',
        defaultValue: 'small',
        options: [
          { value: 'small', label: 'Small' },
          { value: 'large', label: 'Large' }
        ]
      },
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'used', label: 'Used' },
          { value: 'expired', label: 'Expired' }
        ]
      },
      {
        label: 'hasValidityDate',
        prop: 'hasvaliditydate',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: 'hasDescription',
        prop: 'hasdescription',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: 'hasBadge',
        prop: 'hasbadge',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: 'hasDiscountBadge',
        prop: 'hasdiscountbadge',
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
      }
    ]
  }
];

export const voucher: ComponentData = {
  "meta": {
    "slug": "voucher",
    "name": "Voucher",
    "node": "5372:38309",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5372-38309",
    "description": "The voucher card, in the two shapes the app uses — a portrait tile for grids and a landscape row for lists — across the three states a voucher can be in.",
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
      "title": "Keep — four components collapsed into one",
      "text": "All four DS Health traits pass. <code>Voucher Card Horizontal</code>, <code>Horizontal Voucher</code>, <code>Vertical Voucher</code> and <code>Voucher Asset</code> are gone; all four are now settings on this one component. <code>AssetSize</code>, <code>Orientation</code> and <code>State</code> each carry one meaning, and the artwork, status badge and discount badge are real slots instead of baked artwork with frozen strings. The two orientations are laid out differently on purpose — they are not the same card rotated."
    }
  },
  "overview": {
    "inContextNote": "Vertical fills the voucher grid on Discover and in campaign carousels, where cards sit side by side. Horizontal fills the list on My Vouchers, where each row needs room for a description and its own claim action.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"vch-demo-preview\"><div class=\"eb-preview-vch eb-preview-vch--horizontal eb-preview-vch--small\"><div class=\"eb-preview-vch__content\"><div class=\"eb-preview-vch__details\"><div class=\"eb-preview-vch__title\">Buy Load Pre-seeded SKU Voucher Sample</div><div class=\"eb-preview-vch__prices\"><span class=\"eb-preview-vch__price\">PHP 100.00</span><span class=\"eb-preview-vch__original\">PHP 150.00</span></div></div><div class=\"eb-preview-vch__desc\">This is the description of the voucher.</div><div class=\"eb-preview-vch__validity\">Validity: Dec 25 2022 - Jan 5 2023</div></div><div class=\"eb-preview-vch__asset\"><span class=\"eb-preview-vch__art\"><span class=\"eb-preview-vch__placeholder\">Placeholder image</span></span><span class=\"eb-preview-vch__rail\"><span>GET VOUCHER</span></span><span class=\"eb-preview-vch__badge eb-preview-vch__badge--float\">Limited</span><span class=\"eb-preview-vch__notch eb-preview-vch__notch--a\"></span><span class=\"eb-preview-vch__notch eb-preview-vch__notch--b\"></span></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Orientation</span><select id=\"vch-ctrl-orientation\" class=\"demo-panel-select\" onchange=\"_vchUpdate()\"><option value=\"horizontal\" selected=\"\">Horizontal</option><option value=\"vertical\">Vertical</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">AssetSize</span><select id=\"vch-ctrl-assetsize\" class=\"demo-panel-select\" onchange=\"_vchUpdate()\"><option value=\"small\" selected=\"\">Small</option><option value=\"large\">Large</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select id=\"vch-ctrl-state\" class=\"demo-panel-select\" onchange=\"_vchUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"used\">Used</option><option value=\"expired\">Expired</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasValidityDate</span><select id=\"vch-ctrl-hasvaliditydate\" class=\"demo-panel-select\" onchange=\"_vchUpdate()\"><option value=\"false\">false</option><option value=\"true\" selected=\"\">true</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasDescription</span><select id=\"vch-ctrl-hasdescription\" class=\"demo-panel-select\" onchange=\"_vchUpdate()\"><option value=\"false\">false</option><option value=\"true\" selected=\"\">true</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasBadge</span><select id=\"vch-ctrl-hasbadge\" class=\"demo-panel-select\" onchange=\"_vchUpdate()\"><option value=\"false\">false</option><option value=\"true\" selected=\"\">true</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasDiscountBadge</span><select id=\"vch-ctrl-hasdiscountbadge\" class=\"demo-panel-select\" onchange=\"_vchUpdate()\"><option value=\"false\">false</option><option value=\"true\" selected=\"\">true</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasOriginalPrice</span><select id=\"vch-ctrl-hasoriginalprice\" class=\"demo-panel-select\" onchange=\"_vchUpdate()\"><option value=\"false\">false</option><option value=\"true\" selected=\"\">true</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Title</span><input id=\"vch-ctrl-title\" class=\"demo-panel-select demo-panel-input\" type=\"text\" value=\"Buy Load Pre-seeded SKU Voucher Sample\" oninput=\"_vchUpdate()\" /></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Description</span><input id=\"vch-ctrl-description\" class=\"demo-panel-select demo-panel-input\" type=\"text\" value=\"This is the description of the voucher.\" oninput=\"_vchUpdate()\" /></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Validity Date</span><input id=\"vch-ctrl-validitydate\" class=\"demo-panel-select demo-panel-input\" type=\"text\" value=\"Validity: Dec 25 2022 - Jan 5 2023\" oninput=\"_vchUpdate()\" /></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Discounted Price</span><input id=\"vch-ctrl-price\" class=\"demo-panel-select demo-panel-input\" type=\"text\" value=\"PHP 100.00\" oninput=\"_vchUpdate()\" /></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Original Price</span><input id=\"vch-ctrl-originalprice\" class=\"demo-panel-select demo-panel-input\" type=\"text\" value=\"PHP 150.00\" oninput=\"_vchUpdate()\" /></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "One component covers the grid tile and the list row. Artwork, status badge and discount badge all arrive through slots, so a campaign supplies its own without touching the component."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own surface, ticket notch, type styles and all three states. The notch is a real vector — a rectangle with two circles subtracted — rather than the raster mask the old cards used."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Both orientations use the same vocabulary: <code>Content</code> → <code>Details</code>, <code>Price Container</code>, and <code>⤷ AssetSlot</code> / <code>⤷ BadgeSlot</code> for the swappable parts. Text layers are <code>#title</code>, <code>#description</code>, <code>#price</code>, <code>#originalPrice</code> and <code>#validity</code> in both."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Takes a Badge instance in both badge slots and any artwork in the asset slot. Sits in grids, lists and carousels without a wrapper."
      }
    ],
    "behavior": [
      {
        "state": "Orientation=Vertical",
        "ios": "na",
        "android": "na",
        "property": "162 wide",
        "notes": "Artwork on top, then badge, title, description, price, validity. Carries the discount badge."
      },
      {
        "state": "Orientation=Horizontal",
        "ios": "na",
        "android": "na",
        "property": "312 / 344 wide",
        "notes": "Text on the left, artwork on the right with a fixed claim rail. No discount badge — there is no room for it."
      },
      {
        "state": "AssetSize=Small",
        "ios": "na",
        "android": "na",
        "property": "162 × 278 · 312 × 124",
        "notes": "The default for both orientations."
      },
      {
        "state": "AssetSize=Large",
        "ios": "na",
        "android": "na",
        "property": "162 × 341 · 344 × 124",
        "notes": "Taller artwork on vertical; a wider card on horizontal."
      },
      {
        "state": "State=Default",
        "ios": "na",
        "android": "na",
        "property": "claimable",
        "notes": "Full colour. The badge reads the offer status, e.g. \"Limited\"."
      },
      {
        "state": "State=Used",
        "ios": "na",
        "android": "na",
        "property": "dimmed",
        "notes": "A <code>#020E22</code> overlay at 56% darkens the artwork; the card stays legible."
      },
      {
        "state": "State=Expired",
        "ios": "na",
        "android": "na",
        "property": "washed out",
        "notes": "A flat <code>#C2CFE5</code> overlay replaces the artwork and the text recedes."
      }
    ],
    "resolved": [
      {
        "headline": "Both dimmed states are built from tokens now.",
        "body": "A grey with no variable behind it was showing up in the file’s colour list. It was the badges and the claim rail in the two dimmed states — not the placeholder artwork they were first pinned on, which is a bound <code>bg/color-bg</code> rectangle under a raster image. All of them now stack <code>bg/color-bg-main</code> under an overlay, with only the overlay weight separating the states: 40% for Used, 24% for Expired. Used lands back on <code>#9A9FA7</code>, the colour that was already shipping, so this is a re-binding rather than a recolour. Every dimmed surface is now built the way the artwork filters are.",
        "tag": { "criterion": "C3", "label": "C3 · Token Coverage" }
      },
      {
        "headline": "Both orientations round to the same 4 now.",
        "body": "Vertical rounded at 4 and horizontal at 6, and they set it at different levels — vertical on the component itself, horizontal one frame in on Content. The values match. The structures do not, and will not: moving the radius out to the component makes horizontal stop rendering it even with clipping on. Documented as a known difference rather than left looking like an oversight.",
        "tag": { "criterion": "C1", "label": "C1 · Layer Structure & Naming" }
      },
      {
        "headline": "The price layers agree on their names now.",
        "body": "The discounted price was called <code>#price</code> in Default but <code>#value</code> in Used and Expired, so the same layer answered to two names depending on the state. Large vertical also called its wrapper <code>price</code> where every other version says <code>Price Container</code>. Both renamed.",
        "tag": { "criterion": "C1", "label": "C1 · Layer Structure & Naming" }
      },
      {
        "headline": "The validity date used two different type styles.",
        "body": "Vertical set it in <code>Secondary/Default/Fine</code> and horizontal in <code>Secondary/Bold/Fine</code> — one line of text, one job, two weights depending on which way the card faced. Both are <code>Bold/Fine</code> now.",
        "tag": { "criterion": "C2", "label": "C2 · Variant & Property Naming" }
      },
      {
        "headline": "Four components became one.",
        "body": "<code>Voucher Card Horizontal</code>, <code>Horizontal Voucher</code>, <code>Vertical Voucher</code> and <code>Voucher Asset</code> all described the same card. They are now <code>AssetSize</code>, <code>Orientation</code> and <code>State</code> on a single 12-version component, which is what stopped four near-identical cards from drifting apart.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The card has states at all.",
        "body": "Two of the old components had no state axis, so a used or expired voucher had to be drawn by hand. <code>State = Default | Used | Expired</code> covers it in every orientation and size, and there is a neutral default for the first time.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Content is no longer frozen.",
        "body": "Every string used to be hardcoded placeholder text, and the badges were fixed to whatever state the version represented. Title, description, price, original price and validity are all text layers now, and the badges are slots that take any Badge instance.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The discount is a slot, not baked artwork.",
        "body": "\"35% off\" used to be burned into the image frame, so changing it meant editing artwork. It is now <code>⤷ DiscountSlot</code> holding a Badge.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Artwork arrives through a real slot.",
        "body": "The asset was a raster photograph with a partner wordmark burned in, and the frame that held it was an ordinary layer named to look like a slot. <code>⤷ AssetSlot</code> is now a genuine Figma slot, so artwork swaps without detaching.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "The ticket notch is a vector.",
        "body": "It was a raster mask that could not resize or recolour. It is now <code>Stub Cutout</code> — a rectangle with two circles subtracted — so it scales with the card and takes the state colours.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "The claim action is a real Button.",
        "body": "\"GET VOUCHER\" was rotated text pretending to be a control. It is a <code>Button - XSmall</code> instance in the horizontal card's action rail.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "The settings can map one to one.",
        "body": "The old cards exposed six to eight independent booleans plus a four-value enum, a shape no native component matches. Three orthogonal enums, complete at twelve of twelve, map directly onto native parameters.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Names follow the system.",
        "body": "<code>Asset Size</code> became <code>AssetSize</code>; <code>DIscount Slot</code> lost its stray capital and became <code>⤷ DiscountSlot</code>; <code>blurb</code> became <code>#validity</code> and <code>title</code> became <code>#title</code>; <code>Subtract</code> became <code>Stub Cutout</code>; and the lowercase <code>content</code> / <code>container</code> / <code>price</code> frames are now <code>Content</code>, <code>Container</code> and <code>Price Container</code>.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Price is one string per value.",
        "body": "The current price was split into <code>#unit</code> and <code>#value</code> while the original price was already a single string — and both were called <code>#value</code>, so nothing downstream could tell them apart. They are now <code>#price</code> and <code>#originalPrice</code>, which also lets the platform format currency for the locale rather than assuming symbol-then-number.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      }
    ],
    "open": [],
    "recommendations": [
      {
        "headline": "Check the dimmed badge label against its background.",
        "body": "The badge keeps a white label on both dimmed surfaces: 2.79:1 on Used <code>#9A9FA7</code> and 1.73:1 on Expired <code>#C2C5CA</code>, against the 4.5:1 that 12px bold normally needs. WCAG exempts text inside an inactive component, and a Used or Expired voucher is exactly that, so this is not a defect. It is worth a look anyway, because that badge is the thing telling someone the voucher is dead — the one label on a dead card that still has a job. Switching it to <code>text/color-text</code> would read 5.22:1 and 8.42:1 without touching the surfaces.",
        "tag": "A11y"
      },
      {
        "headline": "Rename the Filter overlay's shape to match the asset's.",
        "body": "The <code>Stub Cutout</code> rename reached the asset panel but not the <code>Filter</code> frames used by Used and Expired, where the same shape is still called <code>Subtract</code> — the Figma operation rather than what it draws. Small, and the last of that rename to land.",
        "tag": "Rename"
      },
      {
        "headline": "Let the platform format the price.",
        "body": "Pass an amount and a currency code, not a preformatted string. <code>NumberFormatter</code> with <code>.currency</code> on iOS and <code>NumberFormat.getCurrencyInstance(locale)</code> on Android both place the symbol, separator and grouping correctly for the user's locale.",
        "tag": "Docs"
      },
      {
        "headline": "Announce the card as one element with its state.",
        "body": "Title, price, original price, validity and badge read separately is five fragments. Group them, include the saving rather than making the user compare two numbers, and put the state in the label so \"Used\" and \"Expired\" are not carried by dimming alone.",
        "tag": "A11y"
      },
      {
        "headline": "Document what Used and Expired mean for interaction.",
        "body": "Both dim the card, but a used voucher may still open its details while an expired one may not. The design does not say which, and the difference matters for whether the card stays tappable.",
        "tag": "Docs"
      },
      {
        "headline": "Retire the four superseded components in Figma.",
        "body": "Once usages are migrated, delete <code>Voucher Card Horizontal</code>, <code>Horizontal Voucher</code>, <code>Vertical Voucher</code> and the standalone <code>Voucher Asset</code>. Their assessments are kept on this site as the record of what drove the consolidation.",
        "tag": "Family"
      }
    ],
    "appliedRecommendations": []
  },
  "style": {
    "heading": "Structure",
    "colorsTables": [
      buildColorsTable({
        title: "Colors by State",
        description: "Every colour Voucher paints. State walks every text layer one step down the weak ramp, and twice over for Expired — the title runs text → weak → weaker, everything else weak → weaker → weakest. <code>#originalPrice</code> is the one exception: it starts at disabled and has nowhere left to go. The badges and the claim rail are nested instances, so they are named rather than valued. The two badges and the claim rail dim through the same surface-plus-overlay the artwork filters use, on one base with only the overlay weight moving: <code>bg/color-bg-main</code> under <code>bg/color-bg-overlay</code> at 40% for <strong>Used</strong> (<code>#9A9FA7</code>) and under <code>bg/color-bg-overlay-weak</code> at 24% for <strong>Expired</strong> (<code>#C2C5CA</code>). Every colour on the card is bound.",
        columns: ["Default", "Used", "Expired"],
        rows: [
          { role: "Card", token: "bg/color-bg-main", values: ["#FFFFFF","#FFFFFF","#FFFFFF"] },
          { role: "Artwork panel", token: "bg/color-bg", values: ["#F6F9FD","#F6F9FD","#F6F9FD"] },
          { role: "Artwork filter", token: "bg/color-bg-overlay-strong", values: ["–","#020E22 @ 56%","–"] },
          { role: "Artwork filter", token: "bg/color-bg-disabled", values: ["–","–","#C2CFE5"] },
          { role: "#title", token: "text/color-text · -weak · -weaker", values: ["#0A2757","#445C85","#6780A9"] },
          { role: "#description", token: "text/color-text-weak · -weaker · -weakest", values: ["#445C85","#6780A9","#90A8D0"] },
          { role: "#validity", token: "text/color-text-weak · -weaker · -weakest", values: ["#445C85","#6780A9","#90A8D0"] },
          { role: "#price", token: "text/color-text-primary · -weaker · -weakest", values: ["#005CE5","#6780A9","#90A8D0"] },
          { role: "#originalPrice", token: "text/color-text-disabled", values: ["#C2CFE5","#C2CFE5","#C2CFE5"] },
          { role: "Badge", token: "set by the Badge instance in ⤷ BadgeSlot", values: ["#005CE5","–","–"] },
          { role: "Badge · Used", token: "bg/color-bg-main under bg/color-bg-overlay 40%", values: ["–","#9A9FA7","–"] },
          { role: "Badge · Expired", token: "bg/color-bg-main under bg/color-bg-overlay-weak 24%", values: ["–","–","#C2C5CA"] },
          { role: "Discount badge", token: "set by the Badge instance in ⤷ DiscountSlot — Vertical only", values: ["#0A2757","–","–"] },
          { role: "Discount badge · Used", token: "bg/color-bg-main under bg/color-bg-overlay 40%", values: ["–","#9A9FA7","–"] },
          { role: "Discount badge · Expired", token: "bg/color-bg-main under bg/color-bg-overlay-weak 24%", values: ["–","–","#C2C5CA"] },
          { role: "Claim rail", token: "set by the instance in ⤷ AssetSlot — Horizontal only", values: ["#0A2757","–","–"] },
          { role: "Claim rail · Used", token: "bg/color-bg-main under bg/color-bg-overlay 40%", values: ["–","#9A9FA7","–"] },
          { role: "Claim rail · Expired", token: "bg/color-bg-main under bg/color-bg-overlay-weak 24%", values: ["–","–","#C2C5CA"] }
        ]
      })
    ],
    "specCards": [
      {
        "cardKey": "vch-spec-card-horizontal",
        "demoKey": "horizontal",
        "demoControls": voucherControlsHorizontal,
        "title": "Horizontal",
        "node": "5372:38390",
        "description": "",
        "previewHtml": "<div id=\"vch-spec-horizontal\"><div class=\"eb-preview-vch eb-preview-vch--horizontal eb-preview-vch--small\"><div class=\"eb-preview-vch__content\"><div class=\"eb-preview-vch__details\"><div class=\"eb-preview-vch__title\">Buy Load Pre-seeded SKU Voucher Sample</div><div class=\"eb-preview-vch__prices\"><span class=\"eb-preview-vch__price\">PHP 100.00</span><span class=\"eb-preview-vch__original\">PHP 150.00</span></div></div><div class=\"eb-preview-vch__desc\">This is the description of the voucher.</div><div class=\"eb-preview-vch__validity\">Validity: Dec 25 2022 - Jan 5 2023</div></div><div class=\"eb-preview-vch__asset\"><span class=\"eb-preview-vch__art\"><span class=\"eb-preview-vch__placeholder\">Placeholder image</span></span><span class=\"eb-preview-vch__rail\"><span>GET VOUCHER</span></span><span class=\"eb-preview-vch__badge eb-preview-vch__badge--float\">Limited</span><span class=\"eb-preview-vch__notch eb-preview-vch__notch--a\"></span><span class=\"eb-preview-vch__notch eb-preview-vch__notch--b\"></span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Orientation",
                "value": "Horizontal"
              },
              {
                "key": "AssetSize",
                "value": "Small",
                "prop": "assetsize",
                "variants": {
                  "assetsize:large": {
                    "value": "Large"
                  }
                }
              },
              {
                "key": "State",
                "value": "Default",
                "prop": "state",
                "variants": {
                  "state:used": {
                    "value": "Used"
                  },
                  "state:expired": {
                    "value": "Expired"
                  }
                }
              },
              {
                "key": "hasValidityDate",
                "value": "true",
                "prop": "hasvaliditydate",
                "variants": {
                  "hasvaliditydate:false": {
                    "value": "false"
                  }
                }
              },
              {
                "key": "hasDescription",
                "value": "true",
                "prop": "hasdescription",
                "variants": {
                  "hasdescription:false": {
                    "value": "false"
                  }
                }
              },
              {
                "key": "hasBadge",
                "value": "true",
                "prop": "hasbadge",
                "variants": {
                  "hasbadge:false": {
                    "value": "false"
                  }
                }
              },
              {
                "key": "hasDiscountBadge",
                "value": "– vertical only"
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
                "key": "Title (text)",
                "value": "Buy Load Pre-seeded SKU Voucher Sample"
              },
              {
                "key": "Description (text)",
                "value": "This is the description of the voucher."
              },
              {
                "key": "Validity Date (text)",
                "value": "Validity: Dec 25 2022 - Jan 5 2023"
              },
              {
                "key": "Discounted Price (text)",
                "value": "PHP 100.00"
              },
              {
                "key": "Original Price (text)",
                "value": "PHP 150.00"
              },
              {
                "key": "⤷ AssetSlot (slot)",
                "value": "12 items"
              },
              {
                "key": "⤷ BadgeSlot (slot)",
                "value": "12 items"
              },
              {
                "key": "⤷ DiscountSlot (slot)",
                "value": "– not present in Horizontal"
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
                "key": "Artwork panel",
                "value": "#F6F9FD",
                "token": "bg/color-bg",
                "swatch": true
              },
              {
                "key": "#title",
                "value": "#0A2757",
                "token": "text/color-text",
                "swatch": true,
                "variants": {
                  "state:used": { "value": "#445C85", "token": "text/color-text-weak" },
                  "state:expired": { "value": "#6780A9", "token": "text/color-text-weaker" }
                }
              },
              {
                "key": "#description",
                "value": "#445C85",
                "token": "text/color-text-weak",
                "swatch": true,
                "variants": {
                  "state:used": { "value": "#6780A9", "token": "text/color-text-weaker" },
                  "state:expired": { "value": "#90A8D0", "token": "text/color-text-weakest" }
                }
              },
              {
                "key": "#validity",
                "value": "#445C85",
                "token": "text/color-text-weak",
                "swatch": true,
                "variants": {
                  "state:used": { "value": "#6780A9", "token": "text/color-text-weaker" },
                  "state:expired": { "value": "#90A8D0", "token": "text/color-text-weakest" }
                }
              },
              {
                "key": "#price",
                "value": "#005CE5",
                "token": "text/color-text-primary",
                "swatch": true,
                "variants": {
                  "state:used": { "value": "#6780A9", "token": "text/color-text-weaker" },
                  "state:expired": { "value": "#90A8D0", "token": "text/color-text-weakest" }
                }
              },
              {
                "key": "#originalPrice",
                "value": "#C2CFE5",
                "token": "text/color-text-disabled",
                "swatch": true
              },
              {
                "key": "State filter",
                "value": "–",
                "token": "Default lays none over the artwork",
                "variants": {
                  "state:used": {
                    "value": "#020E22 @ 56%",
                    "token": "bg/color-bg-overlay-strong",
                    "swatch": true
                  },
                  "state:expired": {
                    "value": "#C2CFE5",
                    "token": "bg/color-bg-disabled",
                    "swatch": true
                  }
                }
              },
              {
                "key": "Badge",
                "value": "#005CE5",
                "token": "set by the Badge instance in ⤷ BadgeSlot",
                "swatch": true,
                "variants": {
                  "state:used": { "value": "#9A9FA7", "token": "bg/color-bg-main under bg/color-bg-overlay 40%" },
                  "state:expired": { "value": "#C2C5CA", "token": "bg/color-bg-main under bg/color-bg-overlay-weak 24%" }
                }
              },
              {
                "key": "Claim rail",
                "value": "#0A2757",
                "token": "set by the instance in ⤷ AssetSlot",
                "swatch": true,
                "variants": {
                  "state:used": { "value": "#9A9FA7", "token": "bg/color-bg-main under bg/color-bg-overlay 40%" },
                  "state:expired": { "value": "#C2C5CA", "token": "bg/color-bg-main under bg/color-bg-overlay-weak 24%" }
                }
              },
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "#title",
                "value": "Primary/Multi-line Label/Base",
                "mono": true
              },
              {
                "key": "#price",
                "value": "Primary/Label/Small",
                "mono": true
              },
              {
                "key": "#description",
                "value": "Secondary/Default/Small Caption",
                "mono": true
              },
              {
                "key": "#originalPrice",
                "value": "Secondary/Default/Caption",
                "mono": true
              },
              {
                "key": "#validity",
                "value": "Secondary/Bold/Fine",
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
                "value": "124 — Hug",
                "mono": true
              },
              {
                "key": "Width",
                "value": "312",
                "mono": true,
                "variants": {
                  "assetsize:large": { "value": "344" }
                }
              },
              {
                "key": "Radius",
                "value": "4 — set on Content, left corners only",
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
        "swift": "<span class=\"syn-type\">EBVoucher</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Buy Load Pre-seeded SKU Voucher Sample\"</span><span class=\"syn-punc\">,</span>\n    price<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"PHP 100.00\"</span><span class=\"syn-punc\">,</span>\n    orientation<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.horizontal</span><span class=\"syn-punc\">,</span>\n    assetSize<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.small</span><span class=\"syn-punc\">,</span>\n    originalPrice<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"PHP 150.00\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"This is the description of the voucher.\"</span><span class=\"syn-punc\">,</span>\n    validityDate<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Validity: Dec 25 2022 - Jan 5 2023\"</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBVoucherAsset</span><span class=\"syn-punc\">(</span>image<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"voucher-hero\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBVoucher</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Buy Load Pre-seeded SKU Voucher Sample\"</span><span class=\"syn-punc\">,</span>\n    price <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 100.00\"</span><span class=\"syn-punc\">,</span>\n    orientation <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBVoucherOrientation</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Horizontal</span><span class=\"syn-punc\">,</span>\n    assetSize <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBVoucherAssetSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Small</span><span class=\"syn-punc\">,</span>\n    originalPrice <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 150.00\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"This is the description of the voucher.\"</span><span class=\"syn-punc\">,</span>\n    validityDate <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Validity: Dec 25 2022 - Jan 5 2023\"</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBVoucherAsset</span><span class=\"syn-punc\">(</span>image <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"voucher-hero\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "cardKey": "vch-spec-card-vertical",
        "demoKey": "vertical",
        "demoControls": voucherControlsVertical,
        "title": "Vertical",
        "node": "5372:38310",
        "description": "",
        "previewHtml": "<div id=\"vch-spec-vertical\"><div class=\"eb-preview-vch eb-preview-vch--vertical eb-preview-vch--small\"><div class=\"eb-preview-vch__asset\"><span class=\"eb-preview-vch__art\"><span class=\"eb-preview-vch__placeholder\">Placeholder image</span></span><span class=\"eb-preview-vch__notch eb-preview-vch__notch--a\"></span><span class=\"eb-preview-vch__notch eb-preview-vch__notch--b\"></span><span class=\"eb-preview-vch__discount\">35% off</span></div><div class=\"eb-preview-vch__content\"><div class=\"eb-preview-vch__details\"><span class=\"eb-preview-vch__badge\">Limited</span><div class=\"eb-preview-vch__title\">Buy Load Pre-seeded SKU Voucher Sample</div><div class=\"eb-preview-vch__desc\">This is the description of the voucher.</div><div class=\"eb-preview-vch__prices\"><span class=\"eb-preview-vch__price\">PHP 100.00</span><span class=\"eb-preview-vch__original\">PHP 150.00</span></div></div><div class=\"eb-preview-vch__validity\">Validity: Dec 25 2022 - Jan 5 2023</div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Orientation",
                "value": "Vertical"
              },
              {
                "key": "AssetSize",
                "value": "Small",
                "prop": "assetsize",
                "variants": {
                  "assetsize:large": {
                    "value": "Large"
                  }
                }
              },
              {
                "key": "State",
                "value": "Default",
                "prop": "state",
                "variants": {
                  "state:used": {
                    "value": "Used"
                  },
                  "state:expired": {
                    "value": "Expired"
                  }
                }
              },
              {
                "key": "hasValidityDate",
                "value": "true",
                "prop": "hasvaliditydate",
                "variants": {
                  "hasvaliditydate:false": {
                    "value": "false"
                  }
                }
              },
              {
                "key": "hasDescription",
                "value": "true",
                "prop": "hasdescription",
                "variants": {
                  "hasdescription:false": {
                    "value": "false"
                  }
                }
              },
              {
                "key": "hasBadge",
                "value": "true",
                "prop": "hasbadge",
                "variants": {
                  "hasbadge:false": {
                    "value": "false"
                  }
                }
              },
              {
                "key": "hasDiscountBadge",
                "value": "true",
                "prop": "hasdiscountbadge",
                "variants": {
                  "hasdiscountbadge:false": {
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
                "key": "Title (text)",
                "value": "Buy Load Pre-seeded SKU Voucher Sample"
              },
              {
                "key": "Description (text)",
                "value": "This is the description of the voucher."
              },
              {
                "key": "Validity Date (text)",
                "value": "Validity: Dec 25 2022 - Jan 5 2023"
              },
              {
                "key": "Discounted Price (text)",
                "value": "PHP 100.00"
              },
              {
                "key": "Original Price (text)",
                "value": "PHP 150.00"
              },
              {
                "key": "⤷ AssetSlot (slot)",
                "value": "12 items"
              },
              {
                "key": "⤷ BadgeSlot (slot)",
                "value": "12 items"
              },
              {
                "key": "⤷ DiscountSlot (slot)",
                "value": "6 items"
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
                "key": "Artwork panel",
                "value": "#F6F9FD",
                "token": "bg/color-bg",
                "swatch": true
              },
              {
                "key": "#title",
                "value": "#0A2757",
                "token": "text/color-text",
                "swatch": true,
                "variants": {
                  "state:used": { "value": "#445C85", "token": "text/color-text-weak" },
                  "state:expired": { "value": "#6780A9", "token": "text/color-text-weaker" }
                }
              },
              {
                "key": "#description",
                "value": "#445C85",
                "token": "text/color-text-weak",
                "swatch": true,
                "variants": {
                  "state:used": { "value": "#6780A9", "token": "text/color-text-weaker" },
                  "state:expired": { "value": "#90A8D0", "token": "text/color-text-weakest" }
                }
              },
              {
                "key": "#validity",
                "value": "#445C85",
                "token": "text/color-text-weak",
                "swatch": true,
                "variants": {
                  "state:used": { "value": "#6780A9", "token": "text/color-text-weaker" },
                  "state:expired": { "value": "#90A8D0", "token": "text/color-text-weakest" }
                }
              },
              {
                "key": "#price",
                "value": "#005CE5",
                "token": "text/color-text-primary",
                "swatch": true,
                "variants": {
                  "state:used": { "value": "#6780A9", "token": "text/color-text-weaker" },
                  "state:expired": { "value": "#90A8D0", "token": "text/color-text-weakest" }
                }
              },
              {
                "key": "#originalPrice",
                "value": "#C2CFE5",
                "token": "text/color-text-disabled",
                "swatch": true
              },
              {
                "key": "State filter",
                "value": "–",
                "token": "Default lays none over the artwork",
                "variants": {
                  "state:used": {
                    "value": "#020E22 @ 56%",
                    "token": "bg/color-bg-overlay-strong",
                    "swatch": true
                  },
                  "state:expired": {
                    "value": "#C2CFE5",
                    "token": "bg/color-bg-disabled",
                    "swatch": true
                  }
                }
              },
              {
                "key": "Badge",
                "value": "#005CE5",
                "token": "set by the Badge instance in ⤷ BadgeSlot",
                "swatch": true,
                "variants": {
                  "state:used": { "value": "#9A9FA7", "token": "bg/color-bg-main under bg/color-bg-overlay 40%" },
                  "state:expired": { "value": "#C2C5CA", "token": "bg/color-bg-main under bg/color-bg-overlay-weak 24%" }
                }
              },
              {
                "key": "Discount badge",
                "value": "#0A2757",
                "token": "set by the Badge instance in ⤷ DiscountSlot",
                "swatch": true,
                "variants": {
                  "state:used": { "value": "#9A9FA7", "token": "bg/color-bg-main under bg/color-bg-overlay 40%" },
                  "state:expired": { "value": "#C2C5CA", "token": "bg/color-bg-main under bg/color-bg-overlay-weak 24%" }
                }
              },
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "#title",
                "value": "Primary/Multi-line Label/Base",
                "mono": true
              },
              {
                "key": "#price",
                "value": "Primary/Label/Small",
                "mono": true
              },
              {
                "key": "#description",
                "value": "Secondary/Default/Small Caption",
                "mono": true
              },
              {
                "key": "#originalPrice",
                "value": "Secondary/Default/Caption",
                "mono": true
              },
              {
                "key": "#validity",
                "value": "Secondary/Bold/Fine",
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
                "value": "278",
                "mono": true,
                "variants": {
                  "assetsize:large": { "value": "341" }
                }
              },
              {
                "key": "Width",
                "value": "162",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "4",
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
        "swift": "<span class=\"syn-type\">EBVoucher</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Buy Load Pre-seeded SKU Voucher Sample\"</span><span class=\"syn-punc\">,</span>\n    price<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"PHP 100.00\"</span><span class=\"syn-punc\">,</span>\n    orientation<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.vertical</span><span class=\"syn-punc\">,</span>\n    assetSize<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.small</span><span class=\"syn-punc\">,</span>\n    originalPrice<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"PHP 150.00\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"This is the description of the voucher.\"</span><span class=\"syn-punc\">,</span>\n    validityDate<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Validity: Dec 25 2022 - Jan 5 2023\"</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBVoucherAsset</span><span class=\"syn-punc\">(</span>image<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"voucher-hero\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBVoucher</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Buy Load Pre-seeded SKU Voucher Sample\"</span><span class=\"syn-punc\">,</span>\n    price <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 100.00\"</span><span class=\"syn-punc\">,</span>\n    orientation <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBVoucherOrientation</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Vertical</span><span class=\"syn-punc\">,</span>\n    assetSize <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBVoucherAssetSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Small</span><span class=\"syn-punc\">,</span>\n    originalPrice <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 150.00\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"This is the description of the voucher.\"</span><span class=\"syn-punc\">,</span>\n    validityDate <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Validity: Dec 25 2022 - Jan 5 2023\"</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBVoucherAsset</span><span class=\"syn-punc\">(</span>image <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"voucher-hero\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
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
      "footnote": "Planned API — the native library does not exist yet. The artifact is the Voucher family: all seven members ship in <code>com.eastblue.ds:voucher</code> and import <code>com.eastblue.ds.voucher.*</code>."
    },
    "propertyMapping": {
      "description": "Sixteen properties: three enums, five booleans, five text properties and three slots. <strong>The five booleans are not parameters.</strong> Each one asks whether an optional piece of content is present, so natively the optional itself is the parameter — pass a <code>validityDate</code> and it shows, leave it out and it does not. Adding a separate <code>hasValidityDate</code> alongside <code>validityDate</code> would let a caller ask for a date that is never drawn. <code>hasDiscountBadge</code> carries one further constraint: Horizontal has no <code>⤷ DiscountSlot</code> at all, so the parameter has nothing to act on there.",
      "rows": [
        {
          "figma": "Orientation — Horizontal, Vertical",
          "swift": "<code>orientation: EBVoucherOrientation</code>",
          "compose": "<code>orientation: EBVoucherOrientation</code>"
        },
        {
          "figma": "AssetSize — Small, Large",
          "swift": "<code>assetSize: EBVoucherAssetSize = .small</code>",
          "compose": "<code>assetSize: EBVoucherAssetSize = Small</code>"
        },
        {
          "figma": "State — Default, Used, Expired",
          "swift": "<code>state: EBVoucherState = .default</code>",
          "compose": "<code>state: EBVoucherState = Default</code>"
        },
        {
          "figma": "hasValidityDate — true, false",
          "swift": "<em>derived</em> — <code>validityDate != nil</code>",
          "compose": "<em>derived</em> — <code>validityDate != null</code>"
        },
        {
          "figma": "hasDescription — true, false",
          "swift": "<em>derived</em> — <code>description != nil</code>",
          "compose": "<em>derived</em> — <code>description != null</code>"
        },
        {
          "figma": "hasBadge — true, false",
          "swift": "<em>derived</em> — <code>badge != nil</code>",
          "compose": "<em>derived</em> — <code>badge != null</code>"
        },
        {
          "figma": "hasDiscountBadge — true, false",
          "swift": "<em>derived</em> — <code>discountBadge != nil</code> — Vertical only",
          "compose": "<em>derived</em> — <code>discountBadge != null</code> — Vertical only"
        },
        {
          "figma": "hasOriginalPrice — true, false",
          "swift": "<em>derived</em> — <code>originalPrice != nil</code>",
          "compose": "<em>derived</em> — <code>originalPrice != null</code>"
        },
        {
          "figma": "Title (text)",
          "swift": "<code>title: String</code>",
          "compose": "<code>title: String</code>"
        },
        {
          "figma": "Description (text)",
          "swift": "<code>description: String?</code>",
          "compose": "<code>description: String? = null</code>"
        },
        {
          "figma": "Validity Date (text)",
          "swift": "<code>validityDate: String?</code>",
          "compose": "<code>validityDate: String? = null</code>"
        },
        {
          "figma": "Discounted Price (text)",
          "swift": "<code>price: String</code>",
          "compose": "<code>price: String</code>"
        },
        {
          "figma": "Original Price (text)",
          "swift": "<code>originalPrice: String?</code>",
          "compose": "<code>originalPrice: String? = null</code>"
        },
        {
          "figma": "⤷ AssetSlot (slot)",
          "swift": "<code>@ViewBuilder asset: () -> Asset</code>",
          "compose": "<code>asset: @Composable () -> Unit</code>"
        },
        {
          "figma": "⤷ BadgeSlot (slot)",
          "swift": "<code>badge: (() -> Badge)? = nil</code>",
          "compose": "<code>badge: (@Composable () -> Unit)? = null</code>"
        },
        {
          "figma": "⤷ DiscountSlot (slot)",
          "swift": "<code>discountBadge: (() -> Badge)? = nil</code>",
          "compose": "<code>discountBadge: (@Composable () -> Unit)? = null</code>"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Horizontal — a list row with its claim rail",
        "swift": "<span class=\"syn-type\">EBVoucher</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Buy Load Pre-seeded SKU Voucher Sample\"</span><span class=\"syn-punc\">,</span>\n    price<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"PHP 100.00\"</span><span class=\"syn-punc\">,</span>\n    originalPrice<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"PHP 150.00\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"This is the description of the voucher.\"</span><span class=\"syn-punc\">,</span>\n    validityDate<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Validity: Dec 25 2022 - Jan 5 2023\"</span><span class=\"syn-punc\">,</span>\n    orientation<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.horizontal</span><span class=\"syn-punc\">,</span>\n    assetSize<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.small</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBVoucherAsset</span><span class=\"syn-punc\">(</span>image<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"voucher-hero\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBVoucher</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Buy Load Pre-seeded SKU Voucher Sample\"</span><span class=\"syn-punc\">,</span>\n    price <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 100.00\"</span><span class=\"syn-punc\">,</span>\n    originalPrice <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 150.00\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"This is the description of the voucher.\"</span><span class=\"syn-punc\">,</span>\n    validityDate <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Validity: Dec 25 2022 - Jan 5 2023\"</span><span class=\"syn-punc\">,</span>\n    orientation <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBVoucherOrientation</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Horizontal</span><span class=\"syn-punc\">,</span>\n    assetSize <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBVoucherAssetSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Small</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBVoucherAsset</span><span class=\"syn-punc\">(</span>image <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"voucher-hero\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "subheading": "Vertical — a grid card with a discount badge",
        "swift": "<span class=\"syn-type\">EBVoucher</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Buy Load Pre-seeded SKU Voucher Sample\"</span><span class=\"syn-punc\">,</span>\n    price<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"PHP 100.00\"</span><span class=\"syn-punc\">,</span>\n    originalPrice<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"PHP 150.00\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"This is the description of the voucher.\"</span><span class=\"syn-punc\">,</span>\n    validityDate<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Validity: Dec 25 2022 - Jan 5 2023\"</span><span class=\"syn-punc\">,</span>\n    orientation<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.vertical</span><span class=\"syn-punc\">,</span>\n    assetSize<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.large</span><span class=\"syn-punc\">,</span>\n    discountBadge<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">{</span> <span class=\"syn-type\">EBBadge</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"35% off\"</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBVoucherAsset</span><span class=\"syn-punc\">(</span>image<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"voucher-hero\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBVoucher</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Buy Load Pre-seeded SKU Voucher Sample\"</span><span class=\"syn-punc\">,</span>\n    price <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 100.00\"</span><span class=\"syn-punc\">,</span>\n    originalPrice <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 150.00\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"This is the description of the voucher.\"</span><span class=\"syn-punc\">,</span>\n    validityDate <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Validity: Dec 25 2022 - Jan 5 2023\"</span><span class=\"syn-punc\">,</span>\n    orientation <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBVoucherOrientation</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Vertical</span><span class=\"syn-punc\">,</span>\n    assetSize <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBVoucherAssetSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Large</span><span class=\"syn-punc\">,</span>\n    discountBadge <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> <span class=\"syn-type\">EBBadge</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"35% off\"</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBVoucherAsset</span><span class=\"syn-punc\">(</span>image <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"voucher-hero\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "subheading": "Vertical — a voucher that has been used",
        "swift": "<span class=\"syn-type\">EBVoucher</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Buy Load Pre-seeded SKU Voucher Sample\"</span><span class=\"syn-punc\">,</span>\n    price<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"PHP 100.00\"</span><span class=\"syn-punc\">,</span>\n    originalPrice<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"PHP 150.00\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"This is the description of the voucher.\"</span><span class=\"syn-punc\">,</span>\n    validityDate<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Validity: Dec 25 2022 - Jan 5 2023\"</span><span class=\"syn-punc\">,</span>\n    orientation<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.vertical</span><span class=\"syn-punc\">,</span>\n    assetSize<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.small</span><span class=\"syn-punc\">,</span>\n    state<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.used</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBVoucherAsset</span><span class=\"syn-punc\">(</span>image<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"voucher-hero\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBVoucher</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Buy Load Pre-seeded SKU Voucher Sample\"</span><span class=\"syn-punc\">,</span>\n    price <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 100.00\"</span><span class=\"syn-punc\">,</span>\n    originalPrice <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 150.00\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"This is the description of the voucher.\"</span><span class=\"syn-punc\">,</span>\n    validityDate <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Validity: Dec 25 2022 - Jan 5 2023\"</span><span class=\"syn-punc\">,</span>\n    orientation <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBVoucherOrientation</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Vertical</span><span class=\"syn-punc\">,</span>\n    assetSize <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBVoucherAssetSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Small</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBVoucherState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Used</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBVoucherAsset</span><span class=\"syn-punc\">(</span>image <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"voucher-hero\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "The card is one element",
        "ios": "<code>.accessibilityElement(children: .combine)</code>",
        "android": "<code>Modifier.semantics(mergeDescendants = true)</code>"
      },
      {
        "requirement": "State is spoken, not only dimmed",
        "ios": "Append \"Used\" or \"Expired\" to the label",
        "android": "<code>stateDescription</code> carries it"
      },
      {
        "requirement": "The saving is stated",
        "ios": "\"PHP 100, reduced from PHP 150\" rather than two bare numbers",
        "android": "Same, built into <code>contentDescription</code>"
      },
      {
        "requirement": "Artwork is decorative",
        "ios": "<code>.accessibilityHidden(true)</code> on the image",
        "android": "<code>contentDescription = null</code>"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Vertical in grids and carousels, Horizontal in lists where each row needs a description.",
        "dontText": "Don't put Horizontal in a two-column grid; at 312 wide it will not fit."
      },
      {
        "doText": "Let State follow the voucher's own status.",
        "dontText": "Don't set State by hand — an expired voucher showing as claimable is worse than no card."
      },
      {
        "doText": "Supply artwork through the asset slot.",
        "dontText": "Don't burn the discount or the partner logo into the image; both have their own slots."
      }
    ],
    "scorecard": [
      { "id": "C1", "criterion": "Layer Structure & Naming", "status": "ready", "statusLabel": "Ready", "notes": "Both orientations use one vocabulary. Text layers all carry the <code>#</code> prefix and no name is used twice." },
      { "id": "C2", "criterion": "Variant & Property Naming", "status": "ready", "statusLabel": "Ready", "notes": "Three enums with clean values, five booleans all on the <code>has*</code> prefix, and five text properties named for what they hold. The one wrinkle is that <code>hasDiscountBadge</code> exists on both orientations while only Vertical has a <code>⤷ DiscountSlot</code> for it to act on." },
      { "id": "C3", "criterion": "Token Coverage", "status": "ready", "statusLabel": "Ready", "notes": "Every surface, every text layer, both artwork filters and every dimmed badge and rail are bound to system tokens — the <code>bg/color-bg-overlay-strong</code> and <code>bg/color-bg-overlay*</code> the file uses, not the <code>main/voucher/*</code> namespace this note once proposed. The dimmed states were the last gap and closed during the review." },
      { "id": "C4", "criterion": "Native Mappability", "status": "ready", "statusLabel": "Ready", "notes": "Three enums plus slots map directly. The claim action is a real Button instance rather than rotated text." },
      { "id": "C5", "criterion": "Interaction State Coverage", "status": "ready", "statusLabel": "Ready", "notes": "Default, Used and Expired across every orientation and size. Pressed belongs to the host list or the claim button." },
      { "id": "C6", "criterion": "Asset & Icon Quality", "status": "ready", "statusLabel": "Ready", "notes": "The notch is a vector subtract, both state filters are blended groups rather than flattened art, and the Used badges and claim rail dim through a surface plus an overlay, while Expired still swaps in a flat grey. Artwork and both badges are slots. The one raster is the placeholder inside <code>⤷ AssetSlot</code>’s default content — an image a real voucher replaces, sitting on a bound <code>bg/color-bg</code> rectangle." },
      { "id": "C7", "criterion": "Code Connect Linkability", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked — the native library does not exist yet." }
    ],
    "codeConnect": [],
    "variants": {
      "total": 12,
      "description": "2 Orientation × 2 AssetSize × 3 State = 12 versions, complete with no gaps.",
      "columns": ["Orientation", "AssetSize", "State", "Card size", "Node"],
      "summary": {
        "columns": ["Orientation", "AssetSize", "Card size", "Count"],
        "rows": [
          { "cells": ["Vertical", "Small", "162 × 278", "3"] },
          { "cells": ["Vertical", "Large", "162 × 341", "3"] },
          { "cells": ["Horizontal", "Small", "312 × 124", "3"] },
          { "cells": ["Horizontal", "Large", "344 × 124", "3"] }
        ]
      },
      "collapseLabel": "View full Orientation × AssetSize × State breakdown (12 rows)",
      "rows": [
        { "cells": ["Vertical","Small","Default","162 × 278","5372:38310"] },
        { "cells": ["Vertical","Small","Used","162 × 278","5372:38560"] },
        { "cells": ["Vertical","Small","Expired","162 × 278","5372:38536"] },
        { "cells": ["Vertical","Large","Default","162 × 341","5372:38326"] },
        { "cells": ["Vertical","Large","Used","162 × 341","5372:38342"] },
        { "cells": ["Vertical","Large","Expired","162 × 341","5372:38366"] },
        { "cells": ["Horizontal","Small","Default","312 × 124","5372:38390"] },
        { "cells": ["Horizontal","Small","Used","312 × 124","5372:38409"] },
        { "cells": ["Horizontal","Small","Expired","312 × 124","5372:38436"] },
        { "cells": ["Horizontal","Large","Default","344 × 124","5372:38463"] },
        { "cells": ["Horizontal","Large","Used","344 × 124","5372:38482"] },
        { "cells": ["Horizontal","Large","Expired","344 × 124","5372:38509"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.1.0",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Style, Code and Overview passes on the 2026 Working File · node 5372:38309",
      "rows": [
        {
          "body": "<strong>Both dimmed states are built from tokens now.</strong> A grey with no variable behind it was showing in the file’s colour list. It was the badges and the claim rail in Used and Expired — not the placeholder artwork, which is a bound <code>bg/color-bg</code> rectangle under a raster image. All of them now stack <code>bg/color-bg-main</code> under an overlay, with only the weight separating the states: 40% for Used, 24% for Expired. Used lands back on <code>#9A9FA7</code>, the colour that was already shipping, so this is a re-binding rather than a recolour.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>The validity date used two different type styles.</strong> Vertical set it in <code>Secondary/Default/Fine</code> and horizontal in <code>Secondary/Bold/Fine</code> — one line of text, one job, two weights depending on which way the card faced. Both are <code>Bold/Fine</code> now.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>The price layers agree on their names.</strong> The discounted price was <code>#price</code> in Default but <code>#value</code> in Used and Expired, so one layer answered to two names depending on state. Large vertical also called its wrapper <code>price</code> where every other version says <code>Price Container</code>. Both renamed.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>The two orientations round to the same 4.</strong> Vertical rounded at 4 and horizontal at 6, set at different levels — vertical on the component, horizontal one frame in on Content. The values match now. The structures do not and will not: moving the radius out to the component stops horizontal rendering it even with clipping on, so it is recorded as a known difference rather than left looking like an oversight.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>The property panel was reordered so Orientation comes first.</strong> That settles which property drives the Style tab. §3.1 names the first panel property, and the same section forbids making cards per size — which is what <code>AssetSize</code> is. Orientation was the right axis on the evidence too: the two are not one card rotated but two compositions, ordering their content differently and carrying different slots.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>One card became two.</strong> A single card covered all 12 versions. <code>Orientation</code> now gets a card each, with <code>AssetSize</code>, <code>State</code> and the five booleans as controls.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The panel documented 3 of 16 properties.</strong> Five booleans, five text properties and one slot were missing — every one of them invisible to <code>get_node_info</code>, which returns variant properties only. They came from the property panel itself. The Properties section and the demo panel now carry all 16.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Six token names were invented.</strong> <code>text/color-text-heading</code>, <code>-body</code>, <code>-link</code>, <code>bg/color-bg-subtle</code> and two <code>main/voucher/*</code> overlay names appear nowhere in the file’s selection colours. Every hex was right; every name was made up. They survived because the page had no colours table — spec cards do not render <code>token</code>, so the names were never drawn anywhere a reader could check them.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>Colour was documented as fixed when it moves with State.</strong> Every text layer steps one down the weak ramp per state, twice over for Expired — the title runs text → weak → weaker, everything else weak → weaker → weakest. The page had a single invented <code>#9BB0D0</code> standing in for the whole Expired column. A Colors by State table now carries all of it.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>Layout described the wrong frame.</strong> The seven keys were reporting the Content box — a derived <code>Padding V</code> of 0 that is 8, and a gap of 9.5 that is not a gap at all but <code>Auto</code> distributing leftover space. The component itself is 0 padding and 0 gap: the artwork butts straight against the content. All seven keys are read from the Auto layout panels now, none derived.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The preview drew in one face where the component uses two.</strong> <code>.eb-preview-vch</code> declared <code>font-family: inherit</code>. Three of the five text layers are <code>Secondary/*</code>, so BarkAda is the root and <code>#title</code> and <code>#price</code> name Proxima Soft themselves. <code>inherit</code> happened to give the majority the right face and the other two the wrong one, which is why nobody caught it by eye.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Five things the preview drew that the component does not.</strong> The claim rail was an overlay rather than a sibling inside the artwork panel, which put the badge and the stub notches on the wrong edges and centred the placeholder underneath the rail. The vertical notch sat at the panel’s bottom edge instead of 32 above it. The prices ran side by side in both orientations when vertical stacks them at zero gap. The state filters were flat fills rather than the blended groups they are — which is why Expired erased the artwork it is meant to wash. And the perforation between the notches was missing entirely.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The preview drew copy no variant contains.</strong> The filled price read \"Savings account\". Each Type now draws what the field draws, and the DEV snippets are generated from the same source, so the two cannot drift.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Property Mapping listed layers as if they were properties.</strong> Nine rows, three of them bundling text layers in pairs — <code>#title / #description</code>, <code>#price / #originalPrice</code>. Sixteen rows now, one per panel property. The five booleans are marked <em>derived</em> rather than given parameters: each asks whether an optional is present, so the optional is the parameter and a separate <code>hasValidityDate</code> would let a caller ask for a date that never draws.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The install block pointed at coordinates that will never exist.</strong> <code>gcash/east-blue-ios</code> and <code>com.gcash.eastblue:components:1.0.0</code>, with no Import line. It now cites the Voucher family artifact <code>com.eastblue.ds:voucher:1.0.0</code> and imports <code>com.eastblue.ds.voucher.*</code>, shared by all seven members.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The two tabs disagreed on whether State is a parameter.</strong> The Style tab’s snippet said it was not and never emitted it; the new mapping made it one. State is a parameter here, unlike the interaction states on other components: Used and Expired are facts about the voucher that the caller holds and the card cannot work out for itself. Neither page failed on its own — the contradiction only existed between them.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "<strong>The Variants Inventory promised a breakdown it did not have.</strong> The collapsible was labelled 12 rows and held 4, each folding the three states into one cell, with no node IDs. All 12 are there now, each with its node.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Usage Snippets were keyed to use-cases, and Code Connect is emptied.</strong> \"A grid of vouchers\", \"A list row with its claim action\", \"A used voucher\" become one per <code>Orientation</code> plus Used to show the state parameter. The three Code Connect rows are gone; C7 stays blocked while no native library exists.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The dimmed badge keeps a white label.</strong> 2.79:1 on Used and 1.73:1 on Expired, against the 4.5:1 that 12px bold normally needs. WCAG exempts text inside an inactive component and a spent voucher is exactly that, so this is not a defect — but that badge is the one label on a dead card that still has a job, so it is logged as a recommendation rather than waved through. <code>text/color-text</code> would read 5.22:1 and 8.42:1 without touching the surfaces.",
          "delta": { "kind": "open", "label": "A11y" }
        }
      ]
    },
    {
      "version": "2.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Consolidated rebuild — node 5372:38309",
      "rows": [
        {
          "body": "<strong>Four components became one.</strong> <code>Voucher Card Horizontal</code>, <code>Horizontal Voucher</code>, <code>Vertical Voucher</code> and <code>Voucher Asset</code> fold into <code>AssetSize</code> × <code>Orientation</code> × <code>State</code>.",
          "delta": { "kind": "resolved", "label": "Family" }
        },
        {
          "body": "<strong>C5 — a state axis exists.</strong> Two of the old components had none; Used and Expired had to be drawn by hand.",
          "delta": { "kind": "resolved", "label": "C5 resolved" }
        },
        {
          "body": "<strong>C1 — content unfrozen.</strong> Every string was hardcoded placeholder; all are now text layers, and both badges are slots.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>C6 — rasters replaced.</strong> The ticket notch is a vector subtract, the artwork arrives through a real slot, and the \"35% off\" burned into the image is now a Badge in <code>⤷ DiscountSlot</code>.",
          "delta": { "kind": "resolved", "label": "C6 resolved" }
        },
        {
          "body": "<strong>C4 — \"GET VOUCHER\" is a Button.</strong> It was rotated text with no control behind it.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "<strong>C2 — naming aligned:</strong> <code>AssetSize</code>, <code>⤷ AssetSlot</code>, <code>⤷ BadgeSlot</code>, <code>⤷ DiscountSlot</code>, <code>Stub Cutout</code>, <code>#title</code>, <code>#validity</code>, and <code>Content</code> / <code>Container</code> / <code>Price Container</code> in PascalCase.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>C2 — price split resolved.</strong> <code>#unit</code> + <code>#value</code> and a second <code>#value</code> became <code>#price</code> and <code>#originalPrice</code>, clearing a duplicate-name collision and letting the platform format currency.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>The Filter overlay's shape is still called <code>Subtract</code></strong> — the last of the <code>Stub Cutout</code> rename to land.",
          "delta": { "kind": "open", "label": "Rename" }
        }
      ]
    }
  ]
};
