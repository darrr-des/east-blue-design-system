/* Tooltip — Style tab demo.
 * Rebuilt from Figma component set 6295:79647 (GCash DS 2026 Working File).
 * Offsets are read off get_node_info; the pointer, close glyph, group
 * opacity and button are read off get_svg on the variants and checked
 * against export_node_as_image.
 *
 * Panel (set 6295:79647, from the property-panel screenshot):
 *   Text            · Header, Description, Both   (variant)
 *   Placement       · Top, Bottom, Left, Right    (variant)
 *   Appearance      · Opaque, Translucent         (variant)
 *   Header          · "Header"                    (text)
 *   Description     · "Description goes here"     (text)
 *   hasDismiss      · True                        (boolean)
 *   hasArrow        · True                        (boolean)
 *   hasLeadingAsset · True                        (boolean)
 *   hasAction       · True                        (boolean)
 * Slots (no control): ⤷ CloseSlot · ⤷ AssetSlot · ⤷ ActionSlot
 *
 * Which layer each boolean hides is not readable with the plugin. The
 * preview hides the layer the name describes and lets the card hug, so a
 * height with a boolean off is an assumption, not a reading.
 *
 * 3 x 4 x 2 = 24 variants, all built.
 */

var TT_W = 336, TT_H = 122;          /* Container, identical on all 24 */
var TT_PAD = 16;
var TT_ASSET = 46;                   /* ⤷ AssetSlot, x 16 */
var TT_TEXT_X = 74;                  /* Text Container — Details x 16, then 46 + 12 */
var TT_CLOSE_X = 304, TT_CLOSE_Y = 12.5;   /* ⤷ CloseSlot — 3.5 above Details */
var TT_ACTION_Y = 78;                /* ⤷ ActionSlot, 16 below Details */
var TT_BTN_X = 258, TT_BTN_W = 59, TT_BTN_H = 28;  /* ends 3px short of the slot edge */

/* Text Container, relative to Details (46 tall). */
var TT_TEXT = {
  header:      { h: 24, y: 11, header: 1 },
  description: { h: 18, y: 14 },
  both:        { h: 45, y: 0, header: 0, description: 27 }
};

var TT_APPEARANCE = {
  opaque:      { opacity: 1,   bg: '#FFFFFF', border: '#E5EBF4', header: '#0A2757', description: '#6780A9', descOpacity: 1,   close: '#0A2757' },
  translucent: { opacity: 0.8, bg: '#0A2757', border: '#0A2757', header: '#FFFFFF', description: '#F6F9FD', descOpacity: 0.8, close: '#FFFFFF' }
};
var TT_ASSET_FILL = '#D7E0EF', TT_BTN_FILL = '#005CE5';

/* Pointer paths exactly as get_svg returns them for each pointer-adjustment
   frame, with that frame's offset inside the variant. */
var TT_POINTER = {
  top:    { dx: 14.5, dy: 1,
            fill: 'M15.08 2.81459C13.6929 1.30131 11.3071 1.3013 9.91996 2.81459L1.5 12L23.5 12L15.08 2.81459Z',
            stroke: 'M0.5 11.5H2.05464C2.33812 11.5 2.60829 11.3797 2.79793 11.169L10.831 2.24329C11.2569 1.77017 11.8635 1.5 12.5 1.5C13.1365 1.5 13.7431 1.77017 14.169 2.24329L22.2021 11.169C22.3917 11.3797 22.6619 11.5 22.9454 11.5H24.5' },
  bottom: { dx: 14.5, dy: 121,
            fill: 'M9.91996 9.18541C11.3071 10.6987 13.6929 10.6987 15.08 9.18541L23.5 0L1.5 0L9.91996 9.18541Z',
            stroke: 'M24.5 0.5H22.9454C22.6619 0.5 22.3917 0.620321 22.2021 0.831035L14.169 9.75671C13.7431 10.2298 13.1365 10.5 12.5 10.5C11.8635 10.5 11.2569 10.2298 10.831 9.75671L2.79793 0.831035C2.60829 0.620321 2.33812 0.5 2.05464 0.5H0.5' },
  left:   { dx: 1, dy: 0,
            fill: 'M2.81459 15.42C1.30131 16.8071 1.3013 19.1929 2.81459 20.58L12 29L12 7L2.81459 15.42Z',
            stroke: 'M11.5 30V28.4454C11.5 28.1619 11.3797 27.8917 11.169 27.7021L2.24329 19.669C1.77017 19.2431 1.5 18.6365 1.5 18C1.5 17.3635 1.77017 16.7569 2.24329 16.331L11.169 8.29793C11.3797 8.10829 11.5 7.83812 11.5 7.55464V6' },
  right:  { dx: 335, dy: 0,
            fill: 'M9.18541 20.58C10.6987 19.1929 10.6987 16.8071 9.18541 15.42L0 7L0 29L9.18541 20.58Z',
            stroke: 'M0.5 6V7.55464C0.5 7.83812 0.620321 8.10829 0.831035 8.29793L9.75671 16.331C10.2298 16.7569 10.5 17.3635 10.5 18C10.5 18.6365 10.2298 19.2431 9.75671 19.669L0.831035 27.7021C0.620321 27.8917 0.5 28.1619 0.5 28.4454V30' }
};
var TT_CLOSE_PATH = 'M11.3652 3.36321C11.7166 3.01174 12.2871 3.01174 12.6386 3.36321C12.9897 3.71472 12.9899 4.28531 12.6386 4.63665L9.27532 7.99993L12.6386 11.3632C12.9897 11.7147 12.9899 12.2853 12.6386 12.6367C12.2873 12.988 11.7167 12.9877 11.3652 12.6367L8.00188 9.27337L4.6386 12.6367C4.28726 12.988 3.71667 12.9877 3.36517 12.6367C3.01369 12.2852 3.01369 11.7147 3.36517 11.3632L6.72845 7.99993L3.36517 4.63665C3.01369 4.28518 3.01369 3.71469 3.36517 3.36321C3.71664 3.01174 4.28713 3.01174 4.6386 3.36321L8.00188 6.72649L11.3652 3.36321Z';

function _ttEsc(v) { return String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

/* Container height. All 24 built variants are 122 (asset 46 + action). With
   hasLeadingAsset or hasAction off the preview assumes Details and the
   Container hug their content. */
function _ttContainerH(text, asset, action) {
  var details = asset ? TT_ASSET : TT_TEXT[text].h;
  return TT_PAD + details + (action ? TT_PAD + TT_BTN_H : 0) + TT_PAD;
}

/* ── Renderer ─────────────────────────────────────────────────────────
   Booleans default to true, as in the panel. */
function _ttBuildSvg(opts) {
  var text = opts.text || 'header';
  var placement = opts.placement || 'top';
  var a = TT_APPEARANCE[opts.appearance] || TT_APPEARANCE.opaque;
  var on = function (v) { return v !== false && v !== 'false'; };
  var asset = on(opts.hasleadingasset), close = on(opts.hasdismiss), action = on(opts.hasaction), arrow = on(opts.hasarrow);
  var headerText = opts.header != null ? opts.header : 'Header';
  var descText = opts.description != null ? opts.description : 'Description goes here';
  var p = TT_POINTER[placement];

  var cH = _ttContainerH(text, asset, action);
  var vertical = placement === 'top' || placement === 'bottom';
  var w = TT_W + (arrow && !vertical ? 12 : 0);
  var h = cH + (arrow && vertical ? 12 : 0);
  var ox = arrow && placement === 'left' ? 12 : 0;
  var oy = arrow && placement === 'top' ? 12 : 0;

  var s = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<g opacity="' + a.opacity + '">';
  s += '<rect x="' + (ox + 0.5) + '" y="' + (oy + 0.5) + '" width="' + (TT_W - 1) + '" height="' + (cH - 1) +
       '" rx="5.5" fill="' + a.bg + '" stroke="' + a.border + '"/>';

  if (asset) s += '<rect x="' + (ox + TT_PAD) + '" y="' + (oy + TT_PAD) + '" width="46" height="46" rx="23" fill="' + TT_ASSET_FILL + '"/>';

  var t = TT_TEXT[text];
  var tx = ox + (asset ? TT_TEXT_X : TT_PAD);
  var ty = oy + TT_PAD + (asset ? t.y : 0);
  if (t.header != null) {
    s += '<text class="tt-proxima" x="' + tx + '" y="' + (ty + t.header + 11.5) + '" font-size="18" font-weight="700" fill="' + a.header +
         '" dominant-baseline="central">' + _ttEsc(headerText) + '</text>';
  }
  if (t.description != null || text === 'description') {
    var dy = text === 'description' ? 0 : t.description;
    s += '<text class="tt-barkada" x="' + tx + '" y="' + (ty + dy + 9) + '" font-size="12" font-weight="600" fill="' + a.description +
         '" fill-opacity="' + a.descOpacity + '" dominant-baseline="central">' + _ttEsc(descText) + '</text>';
  }

  if (close) s += '<path transform="translate(' + (ox + TT_CLOSE_X) + ' ' + (oy + TT_CLOSE_Y) + ')" d="' + TT_CLOSE_PATH + '" fill="' + a.close + '"/>';

  if (action) {
    var bx = ox + TT_BTN_X, by = oy + cH - TT_PAD - TT_BTN_H;
    s += '<rect x="' + bx + '" y="' + by + '" width="' + TT_BTN_W + '" height="' + TT_BTN_H + '" rx="14" fill="' + TT_BTN_FILL + '"/>';
    s += '<text class="tt-proxima" x="' + (bx + TT_BTN_W / 2) + '" y="' + (by + 14) + '" font-size="16" font-weight="700" fill="#FFFFFF"' +
         ' text-anchor="middle" dominant-baseline="central">Next</text>';
  }

  /* Pointer last, so its fill covers the container stroke along the 1px overlap.
     Bottom sits 1px above the container's lower edge; Right 1px inside its right edge. */
  if (arrow) s += '<g transform="translate(' + p.dx + ' ' + (placement === 'bottom' ? cH - 1 : p.dy) + ')"><path d="' + p.fill + '" fill="' + a.bg + '"/>' +
       '<path d="' + p.stroke + '" stroke="' + a.border + '" stroke-linecap="round" stroke-linejoin="round"/></g>';

  return s + '</g></svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = {
  main: {
    text: 'header', placement: 'top', appearance: 'opaque',
    header: 'Header', description: 'Description goes here',
    hasdismiss: 'true', hasarrow: 'true', hasleadingasset: 'true', hasaction: 'true'
  }
};
window._specCards = _specCards;

function _ttCap(v) { return v.charAt(0).toUpperCase() + v.slice(1); }

/* ── DEV code ───────────────────────────────────────────────────────── */
function _ttQ(v) { return JSON.stringify(String(v)); }
function buildSwiftSnippet(cardKey, card) {
  var l = ['EBTooltip('];
  if (card.text !== 'description') l.push('    header: ' + _ttQ(card.header) + ',');
  if (card.text !== 'header') l.push('    description: ' + _ttQ(card.description) + ',');
  l.push('    placement: .' + card.placement + ',');
  l.push('    appearance: .' + card.appearance + (card.hasarrow === 'false' ? ',' : ''));
  if (card.hasarrow === 'false') l.push('    showsArrow: false');
  l.push(')');
  if (card.hasleadingasset !== 'false') l.push('.ebLeadingAsset { Image("illustration") }');
  if (card.hasaction !== 'false') l.push('.ebAction { EBButton("Next").controlSize(.mini) }');
  if (card.hasdismiss !== 'false') l.push('.onDismiss { }');
  return l.join('\n');
}
function buildComposeSnippet(cardKey, card) {
  var l = ['EBTooltip('];
  if (card.text !== 'description') l.push('    header = ' + _ttQ(card.header) + ',');
  if (card.text !== 'header') l.push('    description = ' + _ttQ(card.description) + ',');
  l.push('    placement = EBTooltipPlacement.' + _ttCap(card.placement) + ',');
  l.push('    appearance = EBTooltipAppearance.' + _ttCap(card.appearance) + ',');
  if (card.hasarrow === 'false') l.push('    showsArrow = false,');
  if (card.hasleadingasset !== 'false') l.push('    leadingAsset = { Image(painterResource(R.drawable.illustration), null) },');
  if (card.hasaction !== 'false') l.push('    action = { EBButton("Next", size = EBButtonSize.XSmall) { } },');
  if (card.hasdismiss !== 'false') l.push('    onDismiss = { },');
  l[l.length - 1] = l[l.length - 1].replace(/,$/, '');
  l.push(')');
  return l.join('\n');
}
function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

/* ── Control handler ────────────────────────────────────────────────── */
function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  var host = document.getElementById('tooltip-spec-' + cardStyle);
  if (host) host.innerHTML = _ttBuildSvg(card);

  ['text', 'placement', 'appearance', 'header', 'description', 'hasdismiss', 'hasarrow', 'hasleadingasset', 'hasaction'].forEach(function (k) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + k + '"]');
    if (!el) return;
    el.textContent = (k === 'header' || k === 'description') ? card[k] : _ttCap(card[k]);
  });

  var devView = document.querySelector('[data-view="' + cardStyle + '-dev"]');
  if (devView) {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && /swift/i.test(activeTab.textContent) ? 'swift' : 'compose';
    var codeEl = devView.querySelector('[data-code-content="' + cardStyle + '"]');
    if (codeEl) {
      var code = getSnippet(cardStyle, lang, card);
      codeEl.setAttribute('data-final', code);
      codeEl.setAttribute('data-lang', lang);
      codeEl.textContent = code;
      if (typeof window.highlightSyntax === 'function') window.highlightSyntax(codeEl);
    }
  }
}
window.updateSpecCard = updateSpecCard;

/* ── Overview tab live preview ───────────────────────────────────────
   Keeps its slot toggles — emptying a slot is real Figma behaviour, it
   just has no control on the Style tab. */
function updateTooltipDemo() {
  var val = function (id, f) { var el = document.getElementById(id); return el ? el.value : f; };
  var on = function (id) { var el = document.getElementById(id); return el ? el.value !== 'off' : true; };
  var el = document.getElementById('tt-demo-preview');
  if (!el) return;
  el.innerHTML = _ttBuildSvg({
    text: val('tt-demo-text', 'both'), placement: val('tt-demo-placement', 'top'), appearance: val('tt-demo-appearance', 'opaque'),
    hasleadingasset: on('tt-demo-asset'), hasdismiss: on('tt-demo-close'), hasaction: on('tt-demo-action')
  });
}
window.updateTooltipDemo = updateTooltipDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _ttInit() {
  updateTooltipDemo();
  Object.keys(_specCards).forEach(function (k) {
    var host = document.getElementById('tooltip-spec-' + k);
    if (host) host.innerHTML = _ttBuildSvg(_specCards[k]);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _ttInit);
else _ttInit();
document.addEventListener('astro:page-load', _ttInit);
