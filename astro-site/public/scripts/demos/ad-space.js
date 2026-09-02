/* Powers the live preview on the ad-space component page.
 * Ad Space is one component (node 6507:74166) with a single Variant
 * setting: Receipt | Banner | Promo. Each version wraps a Container
 * around a ⤷ AssetSlot; Banner and Promo add a Content block beneath,
 * and Banner alone carries a #title above the asset.
 *
 * The Style tab's spec cards are driven from here: `updateSpecCard`
 * repaints the preview and `getSnippet` rebuilds the DEV code, both
 * from the card's current control state.
 */

var _adsVariants = {
  receipt: { hasTitle: false, hasContent: false },
  banner:  { hasTitle: true,  hasContent: true  },
  promo:   { hasTitle: false, hasContent: true  }
};

function _adsEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function _adsRender(opts) {
  var key = opts.variant || 'banner';
  var v = _adsVariants[key] || _adsVariants.banner;
  var h = '<div class="eb-preview-adspace eb-preview-adspace--' + key + '">';
  if (v.hasTitle && opts.title) {
    h += '<div class="eb-preview-adspace__title">' + _adsEscape(opts.title) + '</div>';
  }
  var filled = opts.asset === 'filled';
  h += '<div class="eb-preview-adspace__asset' + (filled ? ' eb-preview-adspace__asset--filled' : '') + '">';
  h += filled ? '' : '<span class="eb-preview-adspace__asset-label">Asset</span>';
  h += '</div>';
  if (v.hasContent && (opts.header || opts.description)) {
    h += '<div class="eb-preview-adspace__content">';
    if (opts.header) {
      h += '<div class="eb-preview-adspace__header">' + _adsEscape(opts.header) + '</div>';
    }
    if (opts.description) {
      h += '<div class="eb-preview-adspace__description">' + _adsEscape(opts.description) + '</div>';
    }
    h += '</div>';
  }
  return h + '</div>';
}

function _adsUpdate() {
  var getVal = function (id, fallback) {
    var el = document.getElementById(id);
    return el ? el.value : fallback;
  };
  var preview = document.getElementById('ads-demo-preview');
  if (!preview) return;

  var variant = getVal('ads-ctrl-variant', 'banner');
  preview.innerHTML = _adsRender({
    variant: variant,
    title: getVal('ads-ctrl-title', 'Title'),
    header: getVal('ads-ctrl-header', 'Header'),
    description: getVal('ads-ctrl-description', 'Description Goes Here')
  });

  /* Only Banner has #title, and only Banner and Promo have the Content
     block — hide the controls that don't apply to the current version. */
  var shape = _adsVariants[variant] || _adsVariants.banner;
  var toggle = function (id, on) {
    var el = document.getElementById(id);
    if (el && el.parentElement) el.parentElement.style.display = on ? '' : 'none';
  };
  toggle('ads-ctrl-title', shape.hasTitle);
  toggle('ads-ctrl-header', shape.hasContent);
  toggle('ads-ctrl-description', shape.hasContent);
}
window._adsUpdate = _adsUpdate;

function _adsInit() {
  _adsUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'asset', _specCards[k].asset);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _adsInit);
  else _adsInit();
  document.addEventListener('astro:page-load', _adsInit);
})();

/* ── Style tab spec cards ────────────────────────────────────────────
   One card per version. Controls mirror the Figma property panel:
   Banner exposes hasTitle + hasDescription, Promo exposes
   hasDescription, Receipt has neither. ⤷ AssetSlot is a slot, so it
   gets no control — the card always shows what Figma ships by default. */
var _specCards = {
  receipt: { asset: 'placeholder' },
  banner:  { asset: 'placeholder', hasTitle: 'true', hasDescription: 'true' },
  promo:   { asset: 'placeholder', hasDescription: 'true' }
};
window._specCards = _specCards;

var _adsCardCopy = {
  receipt: {},
  banner:  { title: 'Title', header: 'Header', description: 'Description Goes Here' },
  promo:   { header: 'Header', description: 'Description Goes Here' }
};

/* A boolean prop is on unless a control has explicitly turned it off. */
function _adsOn(card, prop) {
  return card[prop] !== 'false' && card[prop] !== false;
}

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('ads-spec-' + cardKey);
  if (!host) return;
  var copy = _adsCardCopy[cardKey] || {};
  host.innerHTML = _adsRender({
    variant: cardKey,
    title: _adsOn(card, 'hasTitle') ? copy.title : '',
    header: copy.header,
    description: _adsOn(card, 'hasDescription') ? copy.description : '',
    asset: card.asset
  });
}
window.updateSpecCard = updateSpecCard;

/* ── DEV code, live ──────────────────────────────────────────────────
   Rebuilds the SwiftUI / Compose snippet from the card's current state
   so the DEV tab tracks hasTitle and hasDescription. */
function _adsSpan(cls, text) {
  return '<span class="' + cls + '">' + text + '</span>';
}

function _adsArgs(cardKey, card, sep) {
  var copy = _adsCardCopy[cardKey] || {};
  var rest = [];
  var add = function (name, val) {
    rest.push(name + sep + _adsSpan('syn-str', '"' + val + '"'));
  };
  if (copy.title && _adsOn(card, 'hasTitle')) add('title', copy.title);
  if (copy.header) add('header', copy.header);
  if (copy.description && _adsOn(card, 'hasDescription')) add('description', copy.description);
  return rest;
}

function _adsAssemble(variant, rest, body) {
  var p = function (s) { return _adsSpan('syn-punc', s); };
  var head = _adsSpan('syn-type', 'EBAdSpace') + p('(');
  if (!rest.length) return head + variant + p(')') + ' ' + body;
  var lines = [variant].concat(rest).map(function (l) { return '    ' + l; });
  return head + '\n' + lines.join(p(',') + '\n') + '\n' + p(')') + ' ' + body;
}

function _adsSwift(cardKey, card) {
  var p = function (s) { return _adsSpan('syn-punc', s); };
  var body = p('{') + '\n    ' + _adsSpan('syn-type', 'Image') + p('(') + 'ad' + p('.') + 'creative' +
             p(')') + p('.') + _adsSpan('syn-fn', 'resizable') + p('()') + '\n' + p('}');
  var sep = p(':') + ' ';
  return _adsAssemble(_adsSpan('syn-dot', '.' + cardKey), _adsArgs(cardKey, card, sep), body);
}

function _adsCompose(cardKey, card) {
  var p = function (s) { return _adsSpan('syn-punc', s); };
  var eq = _adsSpan('syn-eq', '=');
  var cap = cardKey.charAt(0).toUpperCase() + cardKey.slice(1);
  var body = p('{') + '\n    ' + _adsSpan('syn-type', 'AsyncImage') + p('(') + 'model ' + eq + ' ad' +
             p('.') + 'creative' + p(',') + ' contentDescription ' + eq + ' ' +
             _adsSpan('syn-kw', 'null') + p(')') + '\n' + p('}');
  var variant = 'variant ' + eq + ' ' + _adsSpan('syn-type', 'AdSpaceVariant') + p('.') + _adsSpan('syn-dot', cap);
  return _adsAssemble(variant, _adsArgs(cardKey, card, ' ' + eq + ' '), body);
}

function getSnippet(cardKey, lang, card) {
  return lang === 'swift'
    ? _adsSwift(cardKey, card || _specCards[cardKey] || {})
    : _adsCompose(cardKey, card || _specCards[cardKey] || {});
}
window.getSnippet = getSnippet;
