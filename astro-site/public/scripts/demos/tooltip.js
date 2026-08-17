/* Tooltip live preview + spec cards.
 * Geometry measured from the Figma component set (node 6295:79647):
 *   container 336 wide · 16 padding · 6 radius
 *   Details row  = ⤷ AssetSlot (46) + 12 gap + Text + 16 gap + ⤷ CloseSlot (16)
 *   ⤷ ActionSlot = 16 gap below Details, 28 tall, button right-aligned
 *
 * Height is a hug, not a fixed value: Details takes the taller of the
 * 46px asset slot and the text stack (23 header · 18 description ·
 * 45 both), so 16 + 46 + 16 + 28 + 16 = 122 for the fully-populated
 * card. Emptying ⤷ AssetSlot or ⤷ ActionSlot shrinks it — the toggles
 * below demonstrate that.
 */

var TT_W = 336;
var TT_PAD = 16;
var TT_GAP = 16;
var TT_ASSET = 46;
var TT_ASSET_GAP = 12;
var TT_CLOSE = 16;
var TT_CLOSE_GAP = 16;
var TT_ACTION_H = 28;
var TT_BTN_W = 59;
var TT_RADIUS = 6;
var TT_POINTER_INSET = 15;

/* Pointer artwork, lifted verbatim from the Figma vector export. It is a
   real vector in the file — 24 x 12 pointing up — rotated per placement. */
var TT_POINTER_FILL = 'M15.08 2.81459C13.6929 1.30131 11.3071 1.3013 9.91996 2.81459L1.5 12L23.5 12L15.08 2.81459Z';
var TT_POINTER_STROKE = 'M0.5 11.5H2.05464C2.33812 11.5 2.60829 11.3797 2.79793 11.169L10.831 2.24329C11.2569 1.77017 11.8635 1.5 12.5 1.5C13.1365 1.5 13.7431 1.77017 14.169 2.24329L22.2021 11.169C22.3917 11.3797 22.6619 11.5 22.9454 11.5H24.5';

var TT_APPEARANCE = {
  opaque: {
    bg: '#FFFFFF', border: '#E5EBF4',
    header: '#0A2757', description: '#6780A9', descriptionOpacity: 1,
    close: '#0A2757', asset: '#F6F9FD', assetStroke: '#E5EBF4'
  },
  translucent: {
    bg: '#0A2757', border: '#0A2757',
    header: '#FFFFFF', description: '#F6F9FD', descriptionOpacity: 0.8,
    close: '#FFFFFF', asset: '#1B3A6B', assetStroke: '#31517F'
  }
};

var TT_TEXT_H = { header: 23, description: 18, both: 45 };

function _ttTextHeight(text) {
  return TT_TEXT_H[text] || TT_TEXT_H.both;
}

function _ttDetailsHeight(text, asset) {
  return Math.max(asset ? TT_ASSET : 0, _ttTextHeight(text));
}

function _ttContainerHeight(text, asset, action) {
  return TT_PAD + _ttDetailsHeight(text, asset) +
    (action ? TT_GAP + TT_ACTION_H : 0) + TT_PAD;
}

function _ttPointer(placement, c, cH) {
  var t;
  if (placement === 'top') t = 'translate(' + TT_POINTER_INSET + ', 0)';
  else if (placement === 'bottom') t = 'translate(' + (TT_POINTER_INSET + 24) + ', ' + (cH + 12) + ') rotate(180)';
  else if (placement === 'left') t = 'translate(0, ' + (TT_POINTER_INSET + 24) + ') rotate(-90)';
  else t = 'translate(' + (TT_W + 12) + ', ' + TT_POINTER_INSET + ') rotate(90)';
  return '<g transform="' + t + '">' +
    '<path d="' + TT_POINTER_FILL + '" fill="' + c.bg + '"/>' +
    '<path d="' + TT_POINTER_STROKE + '" stroke="' + c.border + '" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' +
    '</g>';
}

function _ttBuildSvg(opts) {
  var text = opts.text || 'both';
  var placement = opts.placement || 'top';
  var appearance = opts.appearance || 'opaque';
  var asset = opts.asset !== false;
  var action = opts.action !== false;
  var close = opts.close !== false;

  var c = TT_APPEARANCE[appearance] || TT_APPEARANCE.opaque;
  var vertical = placement === 'top' || placement === 'bottom';
  var cH = _ttContainerHeight(text, asset, action);
  var detailsH = _ttDetailsHeight(text, asset);

  var w = vertical ? TT_W : TT_W + 12;
  var h = vertical ? cH + 12 : cH;
  var ox = placement === 'left' ? 12 : 0;
  var oy = placement === 'top' ? 12 : 0;

  var textX = ox + TT_PAD + (asset ? TT_ASSET + TT_ASSET_GAP : 0);
  var textW = (ox + TT_W - TT_PAD) - textX - (close ? TT_CLOSE + TT_CLOSE_GAP : 0);
  var detailsY = oy + TT_PAD;
  var textY = detailsY + (detailsH - _ttTextHeight(text)) / 2;

  var s = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" fill="none" xmlns="http://www.w3.org/2000/svg">';

  /* container */
  s += '<rect x="' + (ox + 0.5) + '" y="' + (oy + 0.5) + '" width="' + (TT_W - 1) + '" height="' + (cH - 1) +
    '" rx="' + TT_RADIUS + '" fill="' + c.bg + '" stroke="' + c.border + '"/>';

  /* pointer — drawn after the container so its base sits over the border */
  s += '<g transform="translate(' + ox + ', ' + (placement === 'bottom' ? 0 : 0) + ')">' +
    _ttPointer(placement, c, cH) + '</g>';

  /* ⤷ AssetSlot */
  if (asset) {
    s += '<rect x="' + (ox + TT_PAD) + '" y="' + detailsY + '" width="' + TT_ASSET + '" height="' + TT_ASSET +
      '" rx="23" fill="' + c.asset + '" stroke="' + c.assetStroke + '" stroke-dasharray="3 3"/>';
  }

  /* text */
  var font = "'Proxima Soft', system-ui, sans-serif";
  var descFont = "'BarkAda', system-ui, sans-serif";
  if (text === 'header' || text === 'both') {
    s += '<text x="' + textX + '" y="' + (textY + 17) + '" fill="' + c.header +
      '" font-size="18" font-weight="700" letter-spacing="0.25" font-family="' + font + '">Header</text>';
  }
  if (text === 'description' || text === 'both') {
    var dy = text === 'both' ? textY + 27 + 13 : textY + 13;
    s += '<text x="' + textX + '" y="' + dy + '" fill="' + c.description + '" fill-opacity="' + c.descriptionOpacity +
      '" font-size="12" font-weight="600" font-family="' + descFont + '">Description goes here</text>';
  }

  /* ⤷ CloseSlot — 16 x 16 X glyph at the trailing edge */
  if (close) {
    var cx = ox + TT_W - TT_PAD - TT_CLOSE;
    s += '<g stroke="' + c.close + '" stroke-width="1.6" stroke-linecap="round">' +
      '<line x1="' + (cx + 3.5) + '" y1="' + (detailsY + 3.5) + '" x2="' + (cx + 12.5) + '" y2="' + (detailsY + 12.5) + '"/>' +
      '<line x1="' + (cx + 12.5) + '" y1="' + (detailsY + 3.5) + '" x2="' + (cx + 3.5) + '" y2="' + (detailsY + 12.5) + '"/>' +
      '</g>';
  }

  /* ⤷ ActionSlot — Button - XSmall, right-aligned */
  if (action) {
    var by = detailsY + detailsH + TT_GAP;
    var bx = ox + TT_W - TT_PAD - TT_BTN_W - 3;
    s += '<rect x="' + bx + '" y="' + by + '" width="' + TT_BTN_W + '" height="' + TT_ACTION_H + '" rx="99" fill="#005CE5"/>';
    s += '<text x="' + (bx + TT_BTN_W / 2) + '" y="' + (by + 19) + '" text-anchor="middle" fill="#FFFFFF"' +
      ' font-size="16" font-weight="700" letter-spacing="0.25" font-family="' + font + '">Next</text>';
  }

  s += '</svg>';
  return s;
}

/* ── Live preview ──────────────────────────────────────────────────── */
var _ttDemo = { text: 'both', placement: 'top', appearance: 'opaque', asset: true, action: true, close: true };

function updateTooltipDemo() {
  var g = function (id) { return document.getElementById(id); };
  var val = function (id, fallback) { var el = g(id); return el ? el.value : fallback; };
  var on = function (id) { var el = g(id); return el ? el.value !== 'off' : true; };

  _ttDemo.text = val('tt-demo-text', 'both');
  _ttDemo.placement = val('tt-demo-placement', 'top');
  _ttDemo.appearance = val('tt-demo-appearance', 'opaque');
  _ttDemo.asset = on('tt-demo-asset');
  _ttDemo.action = on('tt-demo-action');
  _ttDemo.close = on('tt-demo-close');

  var el = g('tt-demo-preview');
  if (el) el.innerHTML = _ttBuildSvg(_ttDemo);

  /* Surface the hug result so the height reads as computed, not fixed. */
  var hEl = g('tt-demo-height');
  if (hEl) hEl.textContent = _ttContainerHeight(_ttDemo.text, _ttDemo.asset, _ttDemo.action) + 'px';
}

/* ── Spec cards ────────────────────────────────────────────────────── */
var _ttSpecCards = {
  opaque: { text: 'both', placement: 'top', appearance: 'opaque', asset: 'on', action: 'on', close: 'on' },
  translucent: { text: 'both', placement: 'top', appearance: 'translucent', asset: 'on', action: 'on', close: 'on' }
};

var _specCards = _ttSpecCards;
window._specCards = _specCards;

function _ttCardOpts(card) {
  return {
    text: card.text,
    placement: card.placement,
    appearance: card.appearance,
    asset: card.asset !== 'off',
    action: card.action !== 'off',
    close: card.close !== 'off'
  };
}

function buildSwiftSnippet(type, card) {
  var o = _ttCardOpts(card);
  var lines = ['EBTooltip('];
  if (o.text !== 'description') lines.push('    header: "Header",');
  if (o.text !== 'header') lines.push('    description: "Description goes here",');
  lines.push('    placement: .' + o.placement + ',');
  lines.push('    appearance: .' + o.appearance);
  if (o.close) lines.push('    , onDismiss: { … }');
  lines.push(')');
  if (o.asset) lines.push('.ebLeadingAsset { Image("illustration") }');
  if (o.action) lines.push('.ebAction { EBButton("Next").controlSize(.mini) }');
  return lines.join('\n');
}

function buildComposeSnippet(type, card) {
  var o = _ttCardOpts(card);
  var lines = ['EBTooltip('];
  if (o.text !== 'description') lines.push('    header = "Header",');
  if (o.text !== 'header') lines.push('    description = "Description goes here",');
  lines.push('    placement = EBTooltipPlacement.' + o.placement.charAt(0).toUpperCase() + o.placement.slice(1) + ',');
  lines.push('    appearance = EBTooltipAppearance.' + o.appearance.charAt(0).toUpperCase() + o.appearance.slice(1) + ',');
  if (o.asset) lines.push('    leadingAsset = { Image(painterResource(R.drawable.illustration), null) },');
  if (o.action) lines.push('    action = { EBButton("Next", size = EBButtonSize.XSmall) },');
  if (o.close) lines.push('    onDismiss = { … },');
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _ttSpecCards[cardStyle];
  if (!card) return;
  card[prop] = value;
  var o = _ttCardOpts(card);

  var specCardEl = document.getElementById('spec-card-tt-spec-' + cardStyle);
  if (specCardEl) {
    var previewBody = specCardEl.querySelector('.spec-preview-body');
    if (previewBody) previewBody.innerHTML = _ttBuildSvg(o);
  }

  var setSp = function (key, text) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + key + '"]');
    if (el) el.textContent = text;
  };
  setSp('text', card.text.charAt(0).toUpperCase() + card.text.slice(1));
  setSp('placement', card.placement.charAt(0).toUpperCase() + card.placement.slice(1));
  setSp('height', _ttContainerHeight(o.text, o.asset, o.action) + '');

  var devView = document.querySelector('[data-view="' + cardStyle + '-dev"]');
  if (devView) {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && activeTab.textContent.toLowerCase().indexOf('swift') !== -1 ? 'swift' : 'compose';
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

function _ttInit() {
  updateTooltipDemo();
  Object.keys(_ttSpecCards).forEach(function (k) {
    var card = _ttSpecCards[k];
    var el = document.getElementById('spec-card-tt-spec-' + k);
    if (!el) return;
    var body = el.querySelector('.spec-preview-body');
    if (body) body.innerHTML = _ttBuildSvg(_ttCardOpts(card));
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _ttInit);
} else {
  _ttInit();
}

(function () {
  document.addEventListener('astro:page-load', _ttInit);
})();
