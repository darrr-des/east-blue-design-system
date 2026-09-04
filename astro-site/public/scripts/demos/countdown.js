/* Powers the live preview and spec cards on the countdown page.
 * Countdown (node 5630:36052) is Style × State × Surface — 18 versions —
 * plus five booleans and a leading-icon slot that do not multiply the set.
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
  { key: 'days', prop: 'hasdays', long: 'days', short: 'd' },
  { key: 'hrs', prop: 'hashrs', long: 'hrs', short: 'h' },
  { key: 'mins', prop: 'hasmins', long: 'mins', short: 'm' },
  { key: 'secs', prop: 'hassecs', long: 'secs', short: 's' }
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

/* A unit is shown unless its boolean is explicitly off. */
function _cdShown(card) {
  return _cdUnits.filter(function (u) { return card[u.prop] !== 'false'; });
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

  /* hasLeadingIcon belongs to Pill; the other styles never draw one. */
  if (style === 'pill' && opts.hasicon !== 'false') h += _cdAlarmIcon;

  var body = '';
  _cdShown(opts).forEach(function (u, i) {
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
  var val = function (id, fallback) { var el = byId(id); return el ? el.value : fallback; };
  var style = val('cd-ctrl-style', 'per');

  /* The leading icon only exists on Pill. */
  var iconRow = byId('cd-row-hasicon');
  if (iconRow) iconRow.hidden = style !== 'pill';

  preview.innerHTML = _cdRender({
    style: style,
    state: val('cd-ctrl-state', 'default'),
    surface: val('cd-ctrl-surface', 'oncolor'),
    hasdays: val('cd-ctrl-hasdays', 'true'),
    hashrs: val('cd-ctrl-hashrs', 'true'),
    hasmins: val('cd-ctrl-hasmins', 'true'),
    hassecs: val('cd-ctrl-hassecs', 'true'),
    hasicon: val('cd-ctrl-hasicon', 'true')
  });
}
window._cdUpdate = _cdUpdate;

/* ── Style tab spec cards — one per Style ────────────────────────── */
function _cdCard(style) {
  return {
    style: style, state: 'default', surface: 'oncolor',
    hasdays: 'true', hashrs: 'true', hasmins: 'true', hassecs: 'true', hasicon: 'true'
  };
}
var _specCards = { per: _cdCard('per'), pill: _cdCard('pill'), one: _cdCard('one') };
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('cd-spec-' + cardKey);
  if (host) host.innerHTML = _cdRender(card);
}
window.updateSpecCard = updateSpecCard;

/* ── DEV code, live ──────────────────────────────────────────────────
   One definition behind the spec-card fallback and both language tabs. */
function getSnippet(cardKey, lang) {
  var card = _specCards[cardKey] || _specCards['per'];
  var swift = lang !== 'compose';
  var sep = swift ? '<span class="syn-punc">:</span> ' : ' <span class="syn-eq">=</span> ';
  var cap = function (x) { return x.charAt(0).toUpperCase() + x.slice(1); };
  var enumArg = function (type, value, cased) {
    return swift
      ? '<span class="syn-dot">.' + value + '</span>'
      : '<span class="syn-type">' + type + '</span><span class="syn-punc">.</span>' +
        '<span class="syn-dot">' + cased + '</span>';
  };

  var args = ['until' + sep + 'saleEnds'];
  args.push('style' + sep + enumArg('EBCountdownStyle', card.style, cap(card.style)));
  args.push('surface' + sep + enumArg('EBCountdownSurface',
    card.surface === 'onlight' ? 'onLight' : 'onColor',
    card.surface === 'onlight' ? 'OnLight' : 'OnColor'));

  /* Only name the units that are switched off — four booleans in every
     snippet would bury the two arguments that matter. */
  var off = _cdUnits.filter(function (u) { return card[u.prop] === 'false'; });
  off.forEach(function (u) {
    var name = 'has' + cap(u.key === 'hrs' ? 'hours' : u.key === 'mins' ? 'minutes' : u.key === 'secs' ? 'seconds' : 'days');
    args.push(name + sep + '<span class="syn-kw">false</span>');
  });
  if (card.style === 'pill' && card.hasicon === 'false') {
    args.push('hasLeadingIcon' + sep + '<span class="syn-kw">false</span>');
  }

  return '<span class="syn-type">EBCountdown</span><span class="syn-punc">(</span>\n    ' +
    args.join('<span class="syn-punc">,</span>\n    ') +
    '\n<span class="syn-punc">)</span>';
}
window.getSnippet = getSnippet;

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
