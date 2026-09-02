/* Powers the live-preview controls for the ad-carousel component page.
 * Ad Carousel is one component (node 5703:38564): a Header holding #title
 * and an optional Button - XSmall, over a ⤷ CarouselSlot of Ad Space cards.
 */

/* Card shapes mirror ad-space.js — Receipt has no text, Banner adds a
   #title above the asset, Promo carries only header + description.
   Inside the rail the Banner title is switched off, matching the
   per-instance override used in Figma. */
var _adcCards = {
  receipt: { cls: 'receipt', hasTitle: false, hasContent: false },
  banner:  { cls: 'banner',  hasTitle: false, hasContent: true  },
  promo:   { cls: 'promo',   hasTitle: false, hasContent: true  }
};

var _adcArrowIcon =
  '<svg class="eb-preview-adcarousel__cta-icon" width="16" height="16" viewBox="0 0 16 16" ' +
  'fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
  '<circle cx="8" cy="8" r="5.333" fill="#0076FF"/>' +
  '<path d="M5.3 8h5.1M8.4 5.8 10.7 8l-2.3 2.2" stroke="#FFFFFF" stroke-width="1.2" ' +
  'stroke-linecap="round" stroke-linejoin="round"/></svg>';

function _adcEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function _adcCard(kind) {
  var c = _adcCards[kind] || _adcCards.promo;
  var h = '<div class="eb-preview-adspace eb-preview-adspace--' + c.cls + '">';
  h += '<div class="eb-preview-adspace__asset"><span class="eb-preview-adspace__asset-label">Asset</span></div>';
  if (c.hasContent) {
    h += '<div class="eb-preview-adspace__content">';
    h += '<div class="eb-preview-adspace__header">Header</div>';
    h += '<div class="eb-preview-adspace__description">Description Goes Here</div>';
    h += '</div>';
  }
  return h + '</div>';
}

function _adcRender(opts) {
  var slot = opts.slot || 'promo';
  var h = '<div class="eb-preview-adcarousel">';
  h += '<div class="eb-preview-adcarousel__header">';
  h += '<div class="eb-preview-adcarousel__title">' + _adcEscape(opts.title || 'Title') + '</div>';
  if (opts.hasCTA) {
    /* Label is fixed on the Figma component; the icon is the DS
       Enclosed Right Arrow Small - a filled circle with a white arrow. */
    h += '<div class="eb-preview-adcarousel__cta"><span>Show more</span>' + _adcArrowIcon + '</div>';
  }
  h += '</div>';
  /* Two cards, so the second one clips at the right edge. */
  h += '<div class="eb-preview-adcarousel__rail">' + _adcCard(slot) + _adcCard(slot) + '</div>';
  return h + '</div>';
}

function _adcUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('adc-demo-preview');
  if (!preview) return;
  preview.innerHTML = _adcRender({
    slot: getVal('adc-ctrl-slot', 'promo'),
    hasCTA: getVal('adc-ctrl-hascta', 'false') === 'true',
    title: getVal('adc-ctrl-title', 'Title')
  });
}

/* ── Spec card state ─────────────────────────────────────────────── */
var _specCards = {
  default: { hascta: 'true', slot: 'promo', title: 'Title' }
};
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('adc-spec-' + cardKey);
  if (host) {
    host.innerHTML = _adcRender({
      slot: card.slot,
      hasCTA: card.hascta === 'true',
      title: card.title || 'Title'
    });
  }
}
window.updateSpecCard = updateSpecCard;

/* ── DEV code, live ──────────────────────────────────────────────────
   Rebuilds the SwiftUI / Compose snippet from the card's current state
   so the DEV tab tracks hasCTA. */
function _adcSpan(cls, text) {
  return '<span class="' + cls + '">' + text + '</span>';
}

function _adcSnippet(card, lang) {
  var p = function (s) { return _adcSpan('syn-punc', s); };
  var swift = lang === 'swift';
  var eq = swift ? p(':') + ' ' : ' ' + _adcSpan('syn-eq', '=') + ' ';
  var lines = ['title' + eq + _adcSpan('syn-str', '"' + _adcEscape(card.title || 'Title') + '"')];
  if (card.hascta === 'true') {
    lines.push(swift
      ? 'action' + eq + _adcSpan('syn-type', 'EBAdCarouselAction') + p('(') +
        _adcSpan('syn-str', '"Show more"') + p(')') + ' ' + p('{') + ' ' +
        _adcSpan('syn-cmt', '/* action */') + ' ' + p('}')
      : 'action' + eq + p('{') + ' ' + _adcSpan('syn-cmt', '/* action */') + ' ' + p('}'));
  }
  var body = p('{') + '\n    ' +
    (swift
      ? _adcSpan('syn-type', 'ForEach') + p('(') + 'ads' + p(') {') + ' ad ' + _adcSpan('syn-kw', 'in') +
        '\n        ' + _adcSpan('syn-type', 'EBAdSpace') + p('(') + _adcSpan('syn-dot', '.promo') +
        p(',') + ' header' + p(':') + ' ad' + p('.') + 'headline' + p(') {') + ' ' +
        _adcSpan('syn-type', 'Image') + p('(') + 'ad' + p('.') + 'creative' + p(') }') + '\n    ' + p('}')
      : 'ads' + p('.') + 'forEach ' + p('{') + ' ad ' + _adcSpan('syn-eq', '-&gt;') +
        '\n        ' + _adcSpan('syn-type', 'EBAdSpace') + p('(') + 'variant ' + _adcSpan('syn-eq', '=') + ' ' +
        _adcSpan('syn-type', 'AdSpaceVariant') + p('.') + _adcSpan('syn-dot', 'Promo') + p(',') +
        ' header ' + _adcSpan('syn-eq', '=') + ' ad' + p('.') + 'headline' + p(') {') + ' ' +
        _adcSpan('syn-type', 'AsyncImage') + p('(') + 'model ' + _adcSpan('syn-eq', '=') + ' ad' + p('.') +
        'creative' + p(',') + ' contentDescription ' + _adcSpan('syn-eq', '=') + ' ' +
        _adcSpan('syn-kw', 'null') + p(') }') + '\n    ' + p('}')) +
    '\n' + p('}');
  var head = _adcSpan('syn-type', 'EBAdCarousel') + p('(');
  if (lines.length === 1) return head + lines[0] + p(')') + ' ' + body;
  return head + '\n' + lines.map(function (l) { return '    ' + l; }).join(p(',') + '\n') +
         '\n' + p(')') + ' ' + body;
}

function getSnippet(cardKey, lang, card) {
  return _adcSnippet(card || _specCards[cardKey] || {}, lang);
}
window.getSnippet = getSnippet;

function _adcInit() {
  _adcUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'slot', _specCards[k].slot);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _adcInit);
  else _adcInit();
  document.addEventListener('astro:page-load', _adcInit);
})();
