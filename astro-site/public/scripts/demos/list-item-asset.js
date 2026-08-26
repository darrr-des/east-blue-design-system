/* Powers the live-preview controls for the list-item-asset component page.
 * Rebuilt for the 2026 Working File (node 5698:43260): one Type axis with
 * eight values, replacing the old type x indicator x state matrix.
 *
 * The marker is shown three-up against label lines rather than on its own,
 * because a 5px dot in isolation says nothing about what the component is
 * for. Icon paths below are the exact vectors exported from Figma, so the
 * preview is the artwork rather than an approximation of it.
 */

/* Pending and PendingNotice are the same path in two colours; Check and
   CheckPositive likewise. That is deliberate — the colour carries status. */
var _LIA_PENDING_PATH =
  'M7.99707 2.80078C11.9735 2.80078 15.1973 6.02453 15.1973 10.001C15.1973 13.9774 11.9735 17.2012 ' +
  '7.99707 17.2012C4.02062 17.2012 0.796875 13.9774 0.796875 10.001C0.796875 6.02453 4.02062 2.80078 ' +
  '7.99707 2.80078ZM7.99707 5.20117C5.3461 5.20117 3.19727 7.35001 3.19727 10.001C3.19727 12.6519 ' +
  '5.3461 14.8008 7.99707 14.8008C10.648 14.8008 12.7969 12.6519 12.7969 10.001C12.7969 7.35001 ' +
  '10.648 5.20117 7.99707 5.20117ZM7.69629 6.90234C8.35903 6.90234 8.89648 7.4398 8.89648 8.10254V9.60547' +
  'L10.0449 10.7539C10.5136 11.2225 10.5136 11.9825 10.0449 12.4512C9.57629 12.9198 8.81629 12.9198 ' +
  '8.34766 12.4512L6.84766 10.9512C6.62261 10.7261 6.49609 10.4208 6.49609 10.1025V8.10254C6.49609 ' +
  '7.4398 7.03355 6.90234 7.69629 6.90234Z';

var _LIA_CHECK_PATH = 'M3 10L6.5 13L13 7';

var _LIA_NEUTRAL = '#90A8D0';
var _LIA_NOTICE = '#CA970C';
var _LIA_POSITIVE = '#27C990';

function _liaSvgOpen() {
  return '<svg width="16" height="20" viewBox="0 0 16 20" fill="none" ' +
         'xmlns="http://www.w3.org/2000/svg" aria-hidden="true">';
}

function _liaPendingIcon(fill) {
  return _liaSvgOpen() + '<path d="' + _LIA_PENDING_PATH + '" fill="' + fill + '"/></svg>';
}

function _liaCheckIcon(stroke) {
  return _liaSvgOpen() + '<path d="' + _LIA_CHECK_PATH + '" stroke="' + stroke +
         '" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

/* Returns [modifierClass, innerHtml] for the marker box. Bullet, Square
   and Slot are drawn in CSS; the rest are real vectors or text. */
function _liaMarker(type) {
  switch (type) {
    case 'pending-notice': return ['', _liaPendingIcon(_LIA_NOTICE)];
    case 'check':          return ['', _liaCheckIcon(_LIA_NEUTRAL)];
    case 'check-positive': return ['', _liaCheckIcon(_LIA_POSITIVE)];
    case 'bullet':         return [' eb-preview-lia__marker--narrow eb-preview-lia__marker--bullet', ''];
    case 'square':         return [' eb-preview-lia__marker--narrow eb-preview-lia__marker--square', ''];
    case 'numbered':       return [' eb-preview-lia__marker--number', null];
    case 'slot':           return [' eb-preview-lia__marker--slot', ''];
    default:               return ['', _liaPendingIcon(_LIA_NEUTRAL)];
  }
}

var _liaLabels = ['List item label', 'Second line of the list', 'Third line of the list'];

function _liaRender(opts) {
  var type = opts.type || 'pending';
  var parts = _liaMarker(type);
  var cls = parts[0];
  var h = '<div class="eb-preview-lia">';
  for (var i = 0; i < _liaLabels.length; i++) {
    /* Numbered counts up, which is the whole point of #number being a
       parameter rather than a frozen "1.". */
    var inner = parts[1] === null ? (i + 1) + '.' : parts[1];
    h += '<div class="eb-preview-lia__row">';
    h += '<span class="eb-preview-lia__marker' + cls + '">' + inner + '</span>';
    h += '<span class="eb-preview-lia__label">' + _liaLabels[i] + '</span>';
    h += '</div>';
  }
  return h + '</div>';
}

function _liaUpdate() {
  var el = document.getElementById('lia-ctrl-type');
  var preview = document.getElementById('lia-demo-preview');
  if (!preview) return;
  preview.innerHTML = _liaRender({ type: el ? el.value : 'pending' });
}

/* ── Spec card state ─────────────────────────────────────────────── */
var _specCards = {
  default: { type: 'pending' }
};
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('lia-spec-' + cardKey);
  if (host) host.innerHTML = _liaRender({ type: card.type });
}
window.updateSpecCard = updateSpecCard;

function _liaInit() {
  _liaUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'type', _specCards[k].type);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _liaInit);
  else _liaInit();
  document.addEventListener('astro:page-load', _liaInit);
})();
