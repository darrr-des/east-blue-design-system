/* Powers the live preview and the two spec cards on the voucher-details
 * page. Voucher Details (node 5542:32287) is Layout = TextBlock |
 * Accordion, plus five booleans and two slots.
 *
 * Everything above the notched strip is identical between the two — the
 * header, the details block and the strip itself all match to the pixel.
 * Only the Body differs, and the difference is real rather than cosmetic:
 * Accordion places a Terms and Conditions Accordion *instance*, TextBlock
 * draws a Terms and Conditions Block *frame*. That is the whole of the
 * 507 vs 472 height, and it is why the link lives on TextBlock only —
 * the accordion's content belongs to the component it comes from.
 */

function _vdetEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

var _VDET_TEXT = {
  header: 'Brand',
  subheader: 'All branches',
  title: 'Voucher Title',
  price: 'PHP 200.00',
  originalPrice: 'PHP 280.00',
  validity: 'Validity: Mar 11 2023 - Mar 14 2023',
  description: 'For every 12 oz or larger beverage purchase, you’ll receive an Eco Tumbler ' +
    'Voucher for a FREE Tall Drink when you bring your personal cup with you on your next visit.',
  message: 'Valid from March 11 to 14, 2023. Dine in, Take out, or Drive-thru: 11am until closing, ' +
    'or until supplies last. The promo is not valid in conjunction with other promos or discounts. ' +
    'Metro Manila only.',
  link: 'See full promo mechanics.'
};

var _vdetTerms = [
  'Valid from March 11 to 14, 2021',
  'Dine in, Take out, or Drive-thru: 11am until closing, or until supplies last',
  'The promo is not valid in conjunction with other promos or discounts.',
  'Metro Manila only.'
];

/* The real artwork. The chevron is the same 32 × 32 Chevron Up instance
   Select places, and the tick is a 16 × 16 stroked path — not a ✓ glyph,
   which is what the preview had been substituting. Both in currentColor
   so the CSS owns their colour. */
var _vdetChevron =
  '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">' +
  '<path d="M23 20L16 13L9 20" stroke="currentColor" stroke-width="2" ' +
  'stroke-linecap="round" stroke-linejoin="round"/></svg>';

var _vdetCheck =
  '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
  '<path d="M3 8L6.5 11L13 5" stroke="currentColor" stroke-width="3" ' +
  'stroke-linecap="round" stroke-linejoin="round"/></svg>';

function _vdetRender(opts) {
  var o = {
    layout: opts.layout || 'accordion',
    haslimitedoffer: opts.haslimitedoffer !== false,
    hascurrentprice: opts.hascurrentprice !== false,
    hasoriginalprice: opts.hasoriginalprice !== false,
    hasvalidityperiod: opts.hasvalidityperiod !== false,
    haslink: opts.haslink !== false,
    header: opts.header || _VDET_TEXT.header,
    title: opts.title || _VDET_TEXT.title
  };
  var accordion = o.layout !== 'textblock';

  var h = '<div class="eb-preview-vdet">';

  h += '<div class="eb-preview-vdet__header">';
  h += '<span class="eb-preview-vdet__logo"></span>';
  h += '<span class="eb-preview-vdet__merchant">';
  h += '<span class="eb-preview-vdet__hdr">' + _vdetEscape(o.header) + '</span>';
  h += '<span class="eb-preview-vdet__subhdr">' + _VDET_TEXT.subheader + '</span>';
  h += '</span>';
  /* BadgeSlot — hasLimitedOffer is what shows or hides it. */
  if (o.haslimitedoffer) h += '<span class="eb-preview-vdet__badge">Limited</span>';
  h += '</div>';

  h += '<div class="eb-preview-vdet__details">';
  h += '<div class="eb-preview-vdet__title">' + _vdetEscape(o.title) + '</div>';
  if (o.hascurrentprice || o.hasoriginalprice) {
    h += '<div class="eb-preview-vdet__prices">';
    if (o.hascurrentprice) h += '<span class="eb-preview-vdet__price">' + _VDET_TEXT.price + '</span>';
    if (o.hasoriginalprice) h += '<span class="eb-preview-vdet__original">' + _VDET_TEXT.originalPrice + '</span>';
    h += '</div>';
  }
  if (o.hasvalidityperiod) {
    h += '<div class="eb-preview-vdet__validity">' + _VDET_TEXT.validity + '</div>';
  }
  h += '</div>';

  /* The notched strip: a dashed hairline with a punch at each end. */
  h += '<div class="eb-preview-vdet__strip"><i></i><i></i></div>';

  h += '<div class="eb-preview-vdet__body">';
  h += '<div class="eb-preview-vdet__desc">' + _VDET_TEXT.description + '</div>';

  h += '<div class="eb-preview-vdet__terms">';
  if (accordion) {
    h += '<div class="eb-preview-vdet__terms-head">Terms &amp; Conditions' + _vdetChevron + '</div>';
    h += '<ul class="eb-preview-vdet__terms-list">';
    _vdetTerms.forEach(function (t) {
      h += '<li><span class="eb-preview-vdet__tick">' + _vdetCheck + '</span>' +
           '<span class="eb-preview-vdet__term">' + t + '</span></li>';
    });
    h += '</ul>';
  } else {
    h += '<div class="eb-preview-vdet__terms-head eb-preview-vdet__terms-head--block">Terms &amp; Conditions</div>';
    h += '<div class="eb-preview-vdet__terms-text">' + _VDET_TEXT.message + '</div>';
    /* hasLink drives #footer, which only exists in the TextBlock block —
       the accordion's content belongs to its own component. */
    if (o.haslink) h += '<a class="eb-preview-vdet__link">' + _VDET_TEXT.link + '</a>';
  }
  h += '</div></div>';

  return h + '</div>';
}

/* ── Live preview ─────────────────────────────────────────────────── */
function _vdetRead() {
  var v = function (id, fb) { var el = document.getElementById(id); return el ? el.value : fb; };
  var b = function (id) { return v(id, 'true') === 'true'; };
  return {
    layout: v('vdet-ctrl-layout', 'accordion'),
    haslimitedoffer: b('vdet-ctrl-haslimitedoffer'),
    hascurrentprice: b('vdet-ctrl-hascurrentprice'),
    hasoriginalprice: b('vdet-ctrl-hasoriginalprice'),
    hasvalidityperiod: b('vdet-ctrl-hasvalidityperiod'),
    haslink: b('vdet-ctrl-haslink'),
    header: v('vdet-ctrl-header', _VDET_TEXT.header),
    title: v('vdet-ctrl-title', _VDET_TEXT.title)
  };
}

function _vdetUpdate() {
  var el = document.getElementById('vdet-demo-preview');
  if (el) el.innerHTML = _vdetRender(_vdetRead());
}
window._vdetUpdate = _vdetUpdate;

/* ── Spec card state ──────────────────────────────────────────────── */
/* One card per Layout value, in the panel's order. */
var _specCards = {
  textblock: { layout: 'textblock', haslimitedoffer: 'true', hascurrentprice: 'true',
    hasoriginalprice: 'true', hasvalidityperiod: 'true', haslink: 'true' },
  accordion: { layout: 'accordion', haslimitedoffer: 'true', hascurrentprice: 'true',
    hasoriginalprice: 'true', hasvalidityperiod: 'true', haslink: 'true' }
};
window._specCards = _specCards;

function _vdetCardOpts(c) {
  return {
    layout: c.layout,
    haslimitedoffer: c.haslimitedoffer !== 'false',
    hascurrentprice: c.hascurrentprice !== 'false',
    hasoriginalprice: c.hasoriginalprice !== 'false',
    hasvalidityperiod: c.hasvalidityperiod !== 'false',
    haslink: c.haslink !== 'false'
  };
}

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('vdet-spec-' + cardKey);
  if (host) host.innerHTML = _vdetRender(_vdetCardOpts(card));
}
window.updateSpecCard = updateSpecCard;

/* ── DEV code, live ───────────────────────────────────────────────── */
/* The five booleans are not parameters. Each asks whether an optional
   piece of content is present, so the optional is the parameter and the
   boolean falls out of it — the same shape the rest of the Voucher
   family uses. LogoSlot is the trailing closure; BadgeSlot is a
   parameter, because a card can have a logo and no badge. */
function getSnippet(cardKey, lang) {
  var card = _specCards[cardKey] || _specCards.accordion;
  var compose = lang === 'compose';
  var sep = compose ? ' <span class="syn-eq">=</span> ' : '<span class="syn-punc">:</span> ';
  var S = function (t) { return '<span class="syn-str">"' + t + '"</span>'; };
  var T = function (t) { return '<span class="syn-type">' + t + '</span>'; };
  var P = function (t) { return '<span class="syn-punc">' + t + '</span>'; };
  var D = function (t) { return '<span class="syn-dot">' + t + '</span>'; };
  var cased = card.layout.charAt(0).toUpperCase() + card.layout.slice(1);
  var layoutVal = compose
    ? T('EBVoucherDetailsLayout') + P('.') + D(cased)
    : D('.' + card.layout);

  var args = [
    'layout' + sep + layoutVal,
    'merchant' + sep + S(_VDET_TEXT.header),
    'branch' + sep + S(_VDET_TEXT.subheader),
    'title' + sep + S(_VDET_TEXT.title)
  ];
  if (card.hascurrentprice !== 'false') args.push('price' + sep + S(_VDET_TEXT.price));
  if (card.hasoriginalprice !== 'false') args.push('originalPrice' + sep + S(_VDET_TEXT.originalPrice));
  if (card.hasvalidityperiod !== 'false') args.push('validity' + sep + S('Mar 11 2023 - Mar 14 2023'));
  args.push('description' + sep + S('For every 12 oz or larger beverage purchase…'));
  if (card.haslimitedoffer !== 'false') {
    args.push('badge' + sep + P('{') + ' ' + T('EBBadge') + P('(') + S('Limited') + P(')') + ' ' + P('}'));
  }
  if (card.layout === 'textblock' && card.haslink !== 'false') {
    args.push('linkLabel' + sep + S(_VDET_TEXT.link));
  }

  return T('EBVoucherDetails') + P('(') + '\n    ' + args.join(P(',') + '\n    ') +
    '\n' + P(') {') + '\n    ' +
    T('EBBrandLogo') + P('(') + 'image' + sep + S('brand-mark') + P(')') + '\n' + P('}');
}
window.getSnippet = getSnippet;

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
