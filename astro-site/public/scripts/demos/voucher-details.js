/* Powers the live preview and spec card on the voucher-details page.
 * Voucher Details (node 5542:32287) is Layout = Accordion | TextBlock.
 * Everything above the notched divider is identical between the two;
 * only the terms presentation changes.
 */

function _vdetEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

var _vdetTerms = [
  'Valid from March 11 to 14, 2021',
  'Dine in, Take out, or Drive-thru: 11am until closing, or until supplies last',
  'The promo is not valid in conjunction with other promos or discounts.',
  'Metro Manila only.'
];

var _vdetChevron =
  '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" ' +
  'xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
  '<path d="M4.5 9.75 8 6.25l3.5 3.5" stroke="#005CE5" stroke-width="1.6" ' +
  'stroke-linecap="round" stroke-linejoin="round"/></svg>';

function _vdetRender(opts) {
  var accordion = opts.layout !== 'textblock';

  var h = '<div class="eb-preview-vdet">';

  h += '<div class="eb-preview-vdet__header">';
  h += '<span class="eb-preview-vdet__logo"></span>';
  h += '<span class="eb-preview-vdet__merchant">';
  h += '<span class="eb-preview-vdet__hdr">' + _vdetEscape(opts.header || 'Brand') + '</span>';
  h += '<span class="eb-preview-vdet__subhdr">All branches</span>';
  h += '</span>';
  h += '<span class="eb-preview-vdet__badge">Limited</span>';
  h += '</div>';

  h += '<div class="eb-preview-vdet__details">';
  h += '<div class="eb-preview-vdet__title">' + _vdetEscape(opts.title || 'Voucher Title') + '</div>';
  h += '<div class="eb-preview-vdet__prices">';
  h += '<span class="eb-preview-vdet__price">PHP 200.00</span>';
  h += '<span class="eb-preview-vdet__original">PHP 280.00</span>';
  h += '</div>';
  h += '<div class="eb-preview-vdet__validity">Validity: Mar 11 2023 - Mar 14 2023</div>';
  h += '</div>';

  /* The notched divider: a dashed hairline with a punch at each end. */
  h += '<div class="eb-preview-vdet__strip"><i></i><i></i></div>';

  h += '<div class="eb-preview-vdet__body">';
  h += '<div class="eb-preview-vdet__desc">For every 12 oz or larger beverage purchase, ' +
    'you\'ll receive an Eco Tumbler Voucher for a FREE Tall Drink when you bring your ' +
    'personal cup with you on your next visit.</div>';

  h += '<div class="eb-preview-vdet__terms">';
  if (accordion) {
    h += '<div class="eb-preview-vdet__terms-head">Terms &amp; Conditions' + _vdetChevron + '</div>';
    h += '<ul class="eb-preview-vdet__terms-list">';
    _vdetTerms.forEach(function (t) { h += '<li>' + t + '</li>'; });
    h += '</ul>';
  } else {
    h += '<div class="eb-preview-vdet__terms-head eb-preview-vdet__terms-head--block">Terms &amp; Conditions</div>';
    h += '<div class="eb-preview-vdet__terms-text">Valid from March 11 to 14, 2023. Dine in, ' +
      'Take out, or Drive-thru: 11am until closing, or until supplies last. The promo is not ' +
      'valid in conjunction with other promos or discounts. Metro Manila only.</div>';
    h += '<a class="eb-preview-vdet__link">See full promo mechanics.</a>';
  }
  h += '</div></div>';

  return h + '</div>';
}

function _vdetUpdate() {
  var byId = function (id) { return document.getElementById(id); };
  var preview = byId('vdet-demo-preview');
  if (!preview) return;
  preview.innerHTML = _vdetRender({
    layout: byId('vdet-ctrl-layout') ? byId('vdet-ctrl-layout').value : 'accordion',
    header: byId('vdet-ctrl-header') ? byId('vdet-ctrl-header').value : undefined,
    title: byId('vdet-ctrl-title') ? byId('vdet-ctrl-title').value : undefined
  });
}
window._vdetUpdate = _vdetUpdate;

/* ── Style tab spec card ─────────────────────────────────────────── */
var _specCards = { details: { layout: 'accordion' } };
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('vdet-spec-' + cardKey);
  if (host) host.innerHTML = _vdetRender({ layout: card.layout });
}
window.updateSpecCard = updateSpecCard;

function _vdetInit() {
  _vdetUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'layout', _specCards[k].layout);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _vdetInit);
  else _vdetInit();
  document.addEventListener('astro:page-load', _vdetInit);
})();
