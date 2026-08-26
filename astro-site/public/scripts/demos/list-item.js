/* Powers the live-preview controls for the list-item component page.
 * Rebuilt for the 2026 Working File (node 5728:37276).
 *
 * Three rows are shown rather than one, because ListLevel only changes
 * the indent — a single row in isolation gives you nothing to measure it
 * against. The asset dropdown is a nested instance property rather than a
 * property of this row, which is also how it surfaces in Figma.
 *
 * Changing the asset is worth watching: the marker's width varies from 9
 * to 16, and because the leading column is not pinned, the label's start
 * moves with it. That is exactly why markers are not mixed within a list.
 */

var _LI_PENDING_PATH =
  'M7.99707 2.80078C11.9735 2.80078 15.1973 6.02453 15.1973 10.001C15.1973 13.9774 11.9735 17.2012 ' +
  '7.99707 17.2012C4.02062 17.2012 0.796875 13.9774 0.796875 10.001C0.796875 6.02453 4.02062 2.80078 ' +
  '7.99707 2.80078ZM7.99707 5.20117C5.3461 5.20117 3.19727 7.35001 3.19727 10.001C3.19727 12.6519 ' +
  '5.3461 14.8008 7.99707 14.8008C10.648 14.8008 12.7969 12.6519 12.7969 10.001C12.7969 7.35001 ' +
  '10.648 5.20117 7.99707 5.20117ZM7.69629 6.90234C8.35903 6.90234 8.89648 7.4398 8.89648 8.10254V9.60547' +
  'L10.0449 10.7539C10.5136 11.2225 10.5136 11.9825 10.0449 12.4512C9.57629 12.9198 8.81629 12.9198 ' +
  '8.34766 12.4512L6.84766 10.9512C6.62261 10.7261 6.49609 10.4208 6.49609 10.1025V8.10254C6.49609 ' +
  '7.4398 7.03355 6.90234 7.69629 6.90234Z';

var _LI_CHECK_PATH = 'M3 10L6.5 13L13 7';

function _liSvg(inner) {
  return '<svg width="16" height="20" viewBox="0 0 16 20" fill="none" ' +
         'xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' + inner + '</svg>';
}

function _liPending(fill) {
  return _liSvg('<path d="' + _LI_PENDING_PATH + '" fill="' + fill + '"/>');
}

function _liCheck(stroke) {
  return _liSvg('<path d="' + _LI_CHECK_PATH + '" stroke="' + stroke +
                '" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>');
}

/* Returns [modifierClass, innerHtml]. null inner means "render the index",
   which is how Numbered counts down the list. */
function _liAsset(type) {
  switch (type) {
    case 'square':         return ['--square', ''];
    case 'numbered':       return ['--numbered', null];
    case 'check':          return ['', _liCheck('#90A8D0')];
    case 'check-positive': return ['', _liCheck('#27C990')];
    case 'pending':        return ['', _liPending('#90A8D0')];
    case 'pending-notice': return ['', _liPending('#CA970C')];
    default:               return ['--bullet', ''];
  }
}

var _liLabels = [
  'List body with level-1 style',
  'Second row in the same list',
  'Third row in the same list'
];

function _liRender(opts) {
  var level = opts.level || '1';
  var asset = _liAsset(opts.asset || 'bullet');
  var cls = asset[0] ? ' eb-preview-litem__asset' + asset[0] : '';

  /* Level 1's sample copy names its level; the other two rows are generic
     so the preview reads as one list rather than three separate levels. */
  var first = 'List body with level-' + level + ' style';

  var h = '<div class="eb-preview-litem">';
  for (var i = 0; i < _liLabels.length; i++) {
    var inner = asset[1] === null ? (i + 1) + '.' : asset[1];
    h += '<div class="eb-preview-litem__row eb-preview-litem__row--l' + level + '">';
    h += '<span class="eb-preview-litem__asset' + cls + '">' + inner + '</span>';
    h += '<span class="eb-preview-litem__label">' + (i === 0 ? first : _liLabels[i]) + '</span>';
    if (opts.hasTrailing) h += '<span class="eb-preview-litem__trailing"></span>';
    h += '</div>';
  }
  return h + '</div>';
}

function _liUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('li-demo-preview');
  if (!preview) return;
  preview.innerHTML = _liRender({
    level: getVal('li-ctrl-level', '1'),
    asset: getVal('li-ctrl-asset', 'bullet'),
    hasTrailing: getVal('li-ctrl-hastrailing', 'false') === 'true'
  });
}

/* ── Spec card state ─────────────────────────────────────────────── */
var _specCards = {
  default: { level: '1', asset: 'bullet', hastrailing: 'false' }
};
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('li-spec-' + cardKey);
  if (host) {
    host.innerHTML = _liRender({
      level: card.level,
      asset: card.asset,
      hasTrailing: card.hastrailing === 'true'
    });
  }
}
window.updateSpecCard = updateSpecCard;

function _liInit() {
  _liUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'level', _specCards[k].level);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _liInit);
  else _liInit();
  document.addEventListener('astro:page-load', _liInit);
})();
