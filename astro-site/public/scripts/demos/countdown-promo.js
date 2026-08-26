/* Powers the live preview and spec card on the countdown-promo page.
 * Countdown Promo (node 5630:36047) is Emphasis = High | Low.
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

function _cdpEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* The bar countdown, drawn here rather than reused, because this page
   does not load the countdown demo. Mirrors Style=One. */
function _cdpTimer(surface) {
  var units = [['00', 'days'], ['00', 'hrs'], ['00', 'mins'], ['00', 'secs']];
  var cls = 'eb-preview-cd eb-preview-cd--one';
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
  h += _cdpCloseIcon;
  h += '<div class="eb-preview-cdpromo__container">';
  h += '<div class="eb-preview-cdpromo__title">' + _cdpEscape(opts.title || 'Hurry up!') + '\nSale ends in:</div>';
  /* Inverted on purpose — see the note at the top of this file. */
  h += _cdpTimer(high ? 'oncolor' : 'onlight');
  h += '</div>';
  h += '<div class="eb-preview-cdpromo__action">' + _cdpEscape(opts.action || 'Show now!') + '</div>';
  return h + '</div>';
}

function _cdpUpdate() {
  var byId = function (id) { return document.getElementById(id); };
  var preview = byId('cdp-demo-preview');
  if (!preview) return;
  preview.innerHTML = _cdpRender({
    emphasis: byId('cdp-ctrl-emphasis') ? byId('cdp-ctrl-emphasis').value : 'low',
    title: byId('cdp-ctrl-title') ? byId('cdp-ctrl-title').value : 'Hurry up!',
    action: byId('cdp-ctrl-action') ? byId('cdp-ctrl-action').value : 'Show now!'
  });
}
window._cdpUpdate = _cdpUpdate;

/* ── Style tab spec card ─────────────────────────────────────────── */
var _specCards = { promo: { emphasis: 'low' } };
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('cdp-spec-' + cardKey);
  if (host) {
    host.innerHTML = _cdpRender({
      emphasis: card.emphasis,
      title: 'Hurry up!',
      action: 'Show now!'
    });
  }
}
window.updateSpecCard = updateSpecCard;

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
