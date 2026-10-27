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


/* Figma’s own artwork for the parts CSS cannot draw exactly (set 5542:32287, Layout=Accordion):
   the merchant logo in ⤷ LogoSlot (35 × 32 at 3,4 inside the 40px slot), and the notched strip —
   a white shape with the two 8px notches cut out, plus the dashed 320px separator at y 8. */
var _VDET_LOGO = "data:image/png;base64,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";
var _VDET_STRIP = "<svg width=\"336\" height=\"16\" viewBox=\"0 0 336 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M336 0C331.582 0 328 3.58172 328 8C328 12.4183 331.582 16 336 16H0C4.41828 16 8 12.4183 8 8C8 3.58172 4.41828 0 0 0H336Z\" fill=\"white\"/></svg>";
var _VDET_SEPARATOR = "<svg width=\"320\" height=\"1\" viewBox=\"0 0 320 1\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M-4.37114e-08 0.5L1 0.5M320 0.499972L319 0.499972M3 0.5L5 0.5M7 0.499999L9 0.499999M11 0.499999L13 0.499999M15 0.499999L17 0.499999M19 0.499998L21 0.499998M23 0.499998L25 0.499998M27 0.499998L29 0.499997M31 0.499997L33 0.499997M35 0.499997L37 0.499997M39 0.499997L41 0.499996M43 0.499996L45 0.499996M47 0.499996L49 0.499996M51 0.499996L53 0.499995M55 0.499995L57 0.499995M59 0.499995L61 0.499995M63 0.499994L65 0.499994M67 0.499994L69 0.499994M71 0.499994L73 0.499994M75 0.499993L77 0.499993M79 0.499993L81 0.499993M83 0.499993L85 0.499993M87 0.499992L89 0.499992M91 0.499992L93 0.499992M95 0.499992L97 0.499992M99 0.499991L101 0.499991M103 0.499991L105 0.499991M107 0.499991L109 0.49999M111 0.49999L113 0.49999M115 0.49999L117 0.49999M119 0.49999L121 0.499989M123 0.499989L125 0.499989M127 0.499989L129 0.499989M131 0.499989L133 0.499988M135 0.499988L137 0.499988M139 0.499988L141 0.499988M143 0.499987L145 0.499987M147 0.499987L149 0.499987M151 0.499987L153 0.499987M155 0.499986L157 0.499986M159 0.499986L161 0.499986M163 0.499986L165 0.499986M167 0.499985L169 0.499985M171 0.499985L173 0.499985M175 0.499985L177 0.499985M179 0.499984L181 0.499984M183 0.499984L185 0.499984M187 0.499984L189 0.499983M191 0.499983L193 0.499983M195 0.499983L197 0.499983M199 0.499983L201 0.499982M203 0.499982L205 0.499982M207 0.499982L209 0.499982M211 0.499982L213 0.499981M215 0.499981L217 0.499981M219 0.499981L221 0.499981M223 0.499981L225 0.49998M227 0.49998L229 0.49998M231 0.49998L233 0.49998M235 0.499979L237 0.499979M239 0.499979L241 0.499979M243 0.499979L245 0.499979M247 0.499978L249 0.499978M251 0.499978L253 0.499978M255 0.499978L257 0.499978M259 0.499977L261 0.499977M263 0.499977L265 0.499977M267 0.499977L269 0.499976M271 0.499976L273 0.499976M275 0.499976L277 0.499976M279 0.499976L281 0.499975M283 0.499975L285 0.499975M287 0.499975L289 0.499975M291 0.499975L293 0.499974M295 0.499974L297 0.499974M299 0.499974L301 0.499974M303 0.499974L305 0.499973M307 0.499973L309 0.499973M311 0.499973L313 0.499973M315 0.499972L317 0.499972\" stroke=\"#E5EBF4\"/></svg>";

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
  h += '<span class="eb-preview-vdet__logo"><img alt="" src="' + _VDET_LOGO + '"></span>';
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

  /* The notched strip, drawn from Figma’s export: the notches are real cut-outs. */
  h += '<div class="eb-preview-vdet__strip">' + _VDET_STRIP + '<span class="eb-preview-vdet__sep">' + _VDET_SEPARATOR + '</span></div>';

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
  var sep = compose ? ' = ' : ': ';
  var S = function (t) { return '"' + t + '"'; };
  var T = function (t) { return '' + t + ''; };
  var P = function (t) { return '' + t + ''; };
  var D = function (t) { return '' + t + ''; };
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
