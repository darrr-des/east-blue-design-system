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
  default: { hascta: 'false', slot: 'promo' }
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
      title: 'Title'
    });
  }
}
window.updateSpecCard = updateSpecCard;

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
