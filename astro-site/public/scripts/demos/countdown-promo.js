/* Powers the live preview and spec cards on the countdown-promo page.
 * Countdown - Promo (node 5630:36047) is Emphasis = High | Low, with
 * headerText, hasCTA and hasCloseButton as content settings and two slots.
 *
 * The countdown inside always runs opposite to the card: the High blue
 * card holds a pale timer, the Low white card a bold one, so the timer
 * reads against its own surface. It looks inverted and is meant to be.
 */

var _cdpCloseIcon =
  '<svg class="eb-preview-cdpromo__close" width="16" height="16" viewBox="0 0 16 16" ' +
  'fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
  '<path d="M4.5 4.5l7 7M11.5 4.5l-7 7" stroke="currentColor" stroke-width="1.6" ' +
  'stroke-linecap="round"/></svg>';

/* Figma's #title is 'Hurry up!' then a line break then 'Sale ends in:'.
   A text input cannot hold a newline, so the field shows the flattened
   string and the break is restored while it is untouched. */
var _cdpDefaultHeader = 'Hurry up!\nSale ends in:';
var _cdpFlatHeader = 'Hurry up! Sale ends in:';
function _cdpHeaderFrom(value) {
  return value === _cdpFlatHeader ? _cdpDefaultHeader : value;
}

function _cdpEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* The bar countdown, drawn here rather than reused, because this page
   does not load the countdown demo. Mirrors Style=One. */
function _cdpTimer(surface) {
  var units = [['00', 'days'], ['00', 'hrs'], ['00', 'mins'], ['00', 'secs']];
  var cls = 'eb-preview-cd eb-preview-cd--one eb-preview-cdpromo__timer';
  if (surface === 'onlight') cls += ' eb-preview-cd--onlight';
  var h = '<div class="' + cls + '">';
  units.forEach(function (u, i) {
    if (i > 0) h += '<span class="eb-preview-cdcolon"><span></span><span></span></span>';
    h += '<span class="eb-preview-cdunit eb-preview-cdunit--stacked">' +
      '<span class="eb-preview-cdunit__time">' + u[0] + '</span>' +
      '<span class="eb-preview-cdunit__unit">' + u[1] + '</span></span>';
  });
  return h + '</div>';
}

function _cdpRender(opts) {
  var high = opts.emphasis === 'high';
  var h = '<div class="eb-preview-cdpromo' + (high ? ' eb-preview-cdpromo--high' : '') + '">';
  if (opts.hasclose !== 'false') h += _cdpCloseIcon;
  h += '<div class="eb-preview-cdpromo__container">';
  h += '<div class="eb-preview-cdpromo__title">' + _cdpEscape(opts.header || _cdpDefaultHeader) + '</div>';
  /* Inverted on purpose — see the note at the top of this file. */
  h += _cdpTimer(high ? 'oncolor' : 'onlight');
  h += '</div>';
  if (opts.hascta !== 'false') {
    h += '<div class="eb-preview-cdpromo__action">' + _cdpEscape(opts.action || 'Show now!') + '</div>';
  }
  return h + '</div>';
}

function _cdpUpdate() {
  var byId = function (id) { return document.getElementById(id); };
  var preview = byId('cdp-demo-preview');
  if (!preview) return;
  var val = function (id, fallback) { var el = byId(id); return el ? el.value : fallback; };
  preview.innerHTML = _cdpRender({
    emphasis: val('cdp-ctrl-emphasis', 'high'),
    header: _cdpHeaderFrom(val('cdp-ctrl-header', _cdpFlatHeader)),
    hascta: val('cdp-ctrl-hascta', 'true'),
    hasclose: val('cdp-ctrl-hasclose', 'true')
  });
}
window._cdpUpdate = _cdpUpdate;

/* ── Style tab spec cards — one per Emphasis ─────────────────────── */
function _cdpCard(emphasis) {
  return {
    emphasis: emphasis,
    header: _cdpDefaultHeader,
    hascta: 'true',
    hasclose: 'true'
  };
}
var _specCards = { high: _cdpCard('high'), low: _cdpCard('low') };
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('cdp-spec-' + cardKey);
  if (host) host.innerHTML = _cdpRender(card);
}
window.updateSpecCard = updateSpecCard;

/* ── DEV code, live ──────────────────────────────────────────────────
   One definition behind the spec-card fallback and both language tabs. */
function getSnippet(cardKey, lang) {
  var card = _specCards[cardKey] || _specCards['high'];
  var swift = lang !== 'compose';
  var sep = swift ? '<span class="syn-punc">:</span> ' : ' <span class="syn-eq">=</span> ';
  var cased = card.emphasis === 'high' ? 'High' : 'Low';

  /* The placeholder carries a real line break. Show it escaped, the way a
     developer would have to write it, rather than splitting the literal. */
  var literal = _cdpEscape(card.header).split('\n').join('\\n');
  var args = [
    'headerText' + sep + '<span class="syn-str">"' + literal + '"</span>',
    'until' + sep + 'saleEnds',
    'emphasis' + sep + (swift
      ? '<span class="syn-dot">.' + card.emphasis + '</span>'
      : '<span class="syn-type">EBCountdownPromoEmphasis</span><span class="syn-punc">.</span>' +
        '<span class="syn-dot">' + cased + '</span>')
  ];
  /* Both slots are filled by default; naming them only when switched off
     keeps the call to the three arguments that carry content. */
  if (card.hascta === 'false') args.push('hasCTA' + sep + '<span class="syn-kw">false</span>');
  if (card.hasclose === 'false') args.push('hasCloseButton' + sep + '<span class="syn-kw">false</span>');

  return '<span class="syn-type">EBCountdownPromo</span><span class="syn-punc">(</span>\n    ' +
    args.join('<span class="syn-punc">,</span>\n    ') +
    '\n<span class="syn-punc">)</span>';
}
window.getSnippet = getSnippet;

function _cdpInit() {
  _cdpUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'emphasis', _specCards[k].emphasis);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _cdpInit);
  else _cdpInit();
  document.addEventListener('astro:page-load', _cdpInit);
})();
