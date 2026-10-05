/* Tooltip — live preview + spec cards.
 * Set 6295:79647 (2026 Working File): Text = Header | Description | Both ×
 * Placement = Top | Bottom | Left | Right × Appearance = Opaque |
 * Translucent = 24 variants. ⤷ AssetSlot, ⤷ CloseSlot and ⤷ ActionSlot are
 * Figma Slots and ship filled, so the preview draws them filled.
 *
 * Geometry read off 6295:79678 / 6295:79724 (re-verified 2026-09-14) and
 * checked against export_node_as_image:
 *   container 336 wide · padding 16 · radius 6 · Details = ⤷ AssetSlot 46 +
 *   12 + Text Container + 16 + ⤷ CloseSlot 16 · ⤷ ActionSlot 16 below, 28
 *   tall, Button - XSmall 59 × 28 right-aligned · pointer 24 × 12.
 */

var TT_W = 336, TT_PAD = 16, TT_GAP = 16, TT_ASSET = 46, TT_ASSET_GAP = 12, TT_CLOSE = 16, TT_CLOSE_GAP = 16;
var TT_ACTION_H = 28, TT_BTN_W = 59, TT_RADIUS = 6, TT_BTN_RADIUS = 14;
var TT_POINTER_INSET = 15, TT_POINTER_INSET_V = 6, TT_POINTER_BLEED = 1;
var TT_POINTER_FILL = 'M15.08 2.81459C13.6929 1.30131 11.3071 1.3013 9.91996 2.81459L1.5 12L23.5 12L15.08 2.81459Z';
var TT_POINTER_STROKE = 'M0.5 11.5H2.05464C2.33812 11.5 2.60829 11.3797 2.79793 11.169L10.831 2.24329C11.2569 1.77017 11.8635 1.5 12.5 1.5C13.1365 1.5 13.7431 1.77017 14.169 2.24329L22.2021 11.169C22.3917 11.3797 22.6619 11.5 22.9454 11.5H24.5';
/* ⤷ CloseSlot › Close — get_svg on 6295:79687. */
var TT_CLOSE_PATH = 'M11.3652 3.36321C11.7166 3.01174 12.2871 3.01174 12.6386 3.36321C12.9897 3.71472 12.9899 4.28531 12.6386 4.63665L9.27532 7.99993L12.6386 11.3632C12.9897 11.7147 12.9899 12.2853 12.6386 12.6367C12.2873 12.988 11.7167 12.9877 11.3652 12.6367L8.00188 9.27337L4.6386 12.6367C4.28726 12.988 3.71667 12.9877 3.36517 12.6367C3.01369 12.2852 3.01369 11.7147 3.36517 11.3632L6.72845 7.99993L3.36517 4.63665C3.01369 4.28518 3.01369 3.71469 3.36517 3.36321C3.71664 3.01174 4.28713 3.01174 4.6386 3.36321L8.00188 6.72649L11.3652 3.36321Z';

var TT_APPEARANCE = {
  opaque:      { bg: '#FFFFFF', border: '#E5EBF4', header: '#0A2757', description: '#6780A9', descriptionOpacity: 1,   close: '#0A2757', asset: '#D7E0EF' },
  translucent: { bg: '#0A2757', border: '#0A2757', header: '#FFFFFF', description: '#F6F9FD', descriptionOpacity: 0.8, close: '#FFFFFF', asset: '#D7E0EF' }
};
var TT_TEXT_H = { header: 23, description: 18, both: 45 };

function _ttTextHeight(text) { return TT_TEXT_H[text] || TT_TEXT_H.both; }
function _ttContainerHeight(text) { return TT_PAD + Math.max(TT_ASSET, _ttTextHeight(text)) + TT_GAP + TT_ACTION_H + TT_PAD; }

function _ttPointer(placement, c, cH) {
  var b = TT_POINTER_BLEED, t;
  if (placement === 'top') t = 'translate(' + TT_POINTER_INSET + ', ' + b + ')';
  else if (placement === 'bottom') t = 'translate(' + (TT_POINTER_INSET + 24) + ', ' + (cH + 12 - b) + ') rotate(180)';
  else if (placement === 'left') t = 'translate(' + b + ', ' + (TT_POINTER_INSET_V + 24) + ') rotate(-90)';
  else t = 'translate(' + (TT_W + 12 - b) + ', ' + TT_POINTER_INSET_V + ') rotate(90)';
  return '<g transform="' + t + '"><path d="' + TT_POINTER_FILL + '" fill="' + c.bg + '"/><path d="' + TT_POINTER_STROKE + '" stroke="' + c.border + '" stroke-linecap="round" stroke-linejoin="round" fill="none"/></g>';
}

function _ttBuildSvg(opts) {
  var text = opts.text || 'both', placement = opts.placement || 'top', appearance = opts.appearance || 'opaque';
  var c = TT_APPEARANCE[appearance] || TT_APPEARANCE.opaque;
  var vertical = placement === 'top' || placement === 'bottom';
  var cH = _ttContainerHeight(text), detailsH = Math.max(TT_ASSET, _ttTextHeight(text));
  var w = vertical ? TT_W : TT_W + 12, h = vertical ? cH + 12 : cH;
  var ox = placement === 'left' ? 12 : 0, oy = placement === 'top' ? 12 : 0;
  var textX = ox + TT_PAD + TT_ASSET + TT_ASSET_GAP;
  var detailsY = oy + TT_PAD, textY = detailsY + (detailsH - _ttTextHeight(text)) / 2;
  var font = "'Proxima Soft', system-ui, sans-serif", descFont = "'BarkAda', system-ui, sans-serif";

  var s = '<svg class="eb-preview eb-preview-tt" width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<rect x="' + (ox + 0.5) + '" y="' + (oy + 0.5) + '" width="' + (TT_W - 1) + '" height="' + (cH - 1) + '" rx="' + TT_RADIUS + '" fill="' + c.bg + '" stroke="' + c.border + '"/>';
  s += _ttPointer(placement, c, cH);
  s += '<rect x="' + (ox + TT_PAD) + '" y="' + detailsY + '" width="' + TT_ASSET + '" height="' + TT_ASSET + '" rx="23" fill="' + c.asset + '"/>';
  if (text !== 'description') s += '<text x="' + textX + '" y="' + (textY + 17) + '" fill="' + c.header + '" font-size="18" font-weight="700" letter-spacing="0.25" font-family="' + font + '">Header</text>';
  if (text !== 'header') s += '<text x="' + textX + '" y="' + (text === 'both' ? textY + 40 : textY + 13) + '" fill="' + c.description + '" fill-opacity="' + c.descriptionOpacity + '" font-size="12" font-weight="600" font-family="' + descFont + '">Description goes here</text>';
  s += '<g transform="translate(' + (ox + TT_W - TT_PAD - TT_CLOSE) + ', ' + (detailsY - 3.5) + ')"><path d="' + TT_CLOSE_PATH + '" fill="' + c.close + '"/></g>';
  var by = detailsY + detailsH + TT_GAP, bx = ox + TT_W - TT_PAD - TT_BTN_W;
  s += '<rect x="' + bx + '" y="' + by + '" width="' + TT_BTN_W + '" height="' + TT_ACTION_H + '" rx="' + TT_BTN_RADIUS + '" ry="' + TT_BTN_RADIUS + '" fill="#005CE5"/>';
  s += '<text x="' + (bx + TT_BTN_W / 2) + '" y="' + (by + 19) + '" text-anchor="middle" fill="#FFFFFF" font-size="16" font-weight="700" letter-spacing="0.25" font-family="' + font + '">Next</text>';
  return s + '</svg>';
}

/* ── Overview live preview ─────────────────────────────────────────── */
function _ttUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var el = document.getElementById('tt-demo-preview');
  if (!el) return;
  el.innerHTML = _ttBuildSvg({ text: getVal('tt-ctrl-text', 'both'), placement: getVal('tt-ctrl-placement', 'top'), appearance: getVal('tt-ctrl-appearance', 'opaque') });
}
window._ttUpdate = _ttUpdate;

/* ── Spec cards — one per Appearance value, keyed by demoKey ────────── */
var _specCards = {
  'opaque':      { text: 'both', placement: 'top', appearance: 'opaque' },
  'translucent': { text: 'both', placement: 'top', appearance: 'translucent' }
};
window._specCards = _specCards;

function getSnippet(cardKey, lang, card) {
  var c = card || _specCards[cardKey] || {};
  var text = c.text || 'both', placement = c.placement || 'top', appearance = c.appearance || 'opaque';
  var cap = function (v) { return v.charAt(0).toUpperCase() + v.slice(1); };
  if (lang === 'swift') {
    var lines = ['EBTooltip('];
    if (text !== 'description') lines.push('    header: "Header",');
    if (text !== 'header') lines.push('    description: "Description goes here",');
    lines.push('    placement: .' + placement + ',', '    appearance: .' + appearance, ')', '    .ebLeadingAsset(Image("illustration"))', '    .ebAction("Next") { }', '    .onDismiss { }');
    return lines.join('\n');
  }
  var k = [];
  if (text !== 'description') k.push('    header = "Header"');
  if (text !== 'header') k.push('    description = "Description goes here"');
  k.push('    placement = EBTooltipPlacement.' + cap(placement), '    appearance = EBTooltipAppearance.' + cap(appearance), '    leadingAsset = { Icon(…) }', '    action = EBButton("Next", size = EBButtonSize.XSmall) { }', '    onDismiss = { }');
  return 'EBTooltip(\n' + k.join(',\n') + '\n)';
}
window.getSnippet = getSnippet;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('tt-spec-' + cardKey);
  if (host) host.innerHTML = _ttBuildSvg(card);
}
window.updateSpecCard = updateSpecCard;

function _ttInit() {
  _ttUpdate();
  Object.keys(_specCards).forEach(function (k) { updateSpecCard(k, 'text', _specCards[k].text); });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _ttInit);
else _ttInit();
document.addEventListener('astro:page-load', _ttInit);
