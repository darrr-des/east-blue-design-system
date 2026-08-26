/* Powers the live preview and spec card on the countdown page.
 * Countdown (node 5630:36052) is Style × State × Surface — 18 versions.
 *
 *   Per   329 × 50   one filled box per unit, stacked units
 *   One   237 × 44   all four units in a single bar, stacked units
 *   Pill  198 × 30   compact badge with a leading icon, inline units
 *
 * State drives the palette; Surface picks which way round it runs —
 * onLight is the bold fill for a white page, onColor the pale fill for
 * a coloured card.
 */

var _cdUnits = [
  { key: 'days', long: 'days', short: 'd' },
  { key: 'hrs', long: 'hrs', short: 'h' },
  { key: 'mins', long: 'mins', short: 'm' },
  { key: 'secs', long: 'secs', short: 's' }
];

var _cdAlarmIcon =
  '<svg class="eb-preview-cd__icon" width="20" height="20" viewBox="0 0 20 20" ' +
  'fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
  '<circle cx="10" cy="11" r="6.25" stroke="currentColor" stroke-width="1.5"/>' +
  '<path d="M10 8.5V11l1.75 1.25M4.5 4.25 6.5 2.5M15.5 4.25 13.5 2.5" ' +
  'stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function _cdUnitMarkup(unit, inline) {
  var label = inline ? unit.short : unit.long;
  return '<span class="eb-preview-cdunit eb-preview-cdunit--' + (inline ? 'inline' : 'stacked') + '">' +
    '<span class="eb-preview-cdunit__time">00</span>' +
    '<span class="eb-preview-cdunit__unit">' + label + '</span>' +
    '</span>';
}

function _cdColon(small) {
  return '<span class="eb-preview-cdcolon' + (small ? ' eb-preview-cdcolon--sm' : '') + '">' +
    '<span></span><span></span></span>';
}

function _cdRender(opts) {
  var style = opts.style || 'per';
  var state = opts.state || 'default';
  var surface = opts.surface || 'oncolor';
  var inline = style === 'pill';

  var cls = ['eb-preview-cd', 'eb-preview-cd--' + style];
  /* Default needs no state class — it is the base palette. */
  if (state !== 'default') cls.push('eb-preview-cd--' + state);
  /* Surface only recolours the bold treatment; onColor is the base. */
  if (surface === 'onlight') cls.push('eb-preview-cd--onlight');

  var h = '<div class="' + cls.join(' ') + '">';

  if (style === 'pill') h += _cdAlarmIcon;

  var body = '';
  _cdUnits.forEach(function (u, i) {
    if (i > 0) body += _cdColon(inline);
    var cell = _cdUnitMarkup(u, inline);
    /* Per wraps each unit in its own filled box; the others don't. */
    body += style === 'per' ? '<span class="eb-preview-cd__box">' + cell + '</span>' : cell;
  });

  h += style === 'pill' ? '<span class="eb-preview-cd__units">' + body + '</span>' : body;
  return h + '</div>';
}

function _cdUpdate() {
  var byId = function (id) { return document.getElementById(id); };
  var preview = byId('cd-demo-preview');
  if (!preview) return;
  preview.innerHTML = _cdRender({
    style: byId('cd-ctrl-style') ? byId('cd-ctrl-style').value : 'per',
    state: byId('cd-ctrl-state') ? byId('cd-ctrl-state').value : 'default',
    surface: byId('cd-ctrl-surface') ? byId('cd-ctrl-surface').value : 'oncolor'
  });
}
window._cdUpdate = _cdUpdate;

/* ── Style tab spec card ─────────────────────────────────────────── */
var _specCards = { countdown: { style: 'per', state: 'default', surface: 'oncolor' } };
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('cd-spec-' + cardKey);
  if (host) host.innerHTML = _cdRender(card);
}
window.updateSpecCard = updateSpecCard;

function _cdInit() {
  _cdUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'style', _specCards[k].style);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _cdInit);
  else _cdInit();
  document.addEventListener('astro:page-load', _cdInit);
})();
