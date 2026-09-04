/* Powers the live preview and spec cards on the countdown-unit page.
 * Countdown - Unit (node 7831:111593) is Layout = Stacked | Inline, with
 * Value, Unit Label and hasUnitLabel as content settings. Stacked sets the
 * number over its label at contrasting sizes; Inline runs both on one line
 * at 16px, which is what the Pill needs.
 */

function _cduEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function _cduRender(opts) {
  var layout = opts.layout === 'inline' ? 'inline' : 'stacked';
  var h = '<span class="eb-preview-cdunit eb-preview-cdunit--' + layout + '">';
  h += '<span class="eb-preview-cdunit__time">' + _cduEscape(opts.time || '00') + '</span>';
  /* hasUnitLabel hides the label; the number keeps its own size either way. */
  if (opts.hasUnit !== false) {
    h += '<span class="eb-preview-cdunit__unit">' + _cduEscape(opts.unit || 'days') + '</span>';
  }
  return h + '</span>';
}

function _cduUpdate() {
  var byId = function (id) { return document.getElementById(id); };
  var preview = byId('cdu-demo-preview');
  if (!preview) return;

  var unitRow = byId('cdu-row-unit');
  var hasUnit = byId('cdu-ctrl-hasunit');
  var on = hasUnit ? hasUnit.value === 'true' : true;
  /* No point offering the label text when the label is switched off. */
  if (unitRow) unitRow.hidden = !on;

  preview.innerHTML = _cduRender({
    layout: byId('cdu-ctrl-layout') ? byId('cdu-ctrl-layout').value : 'stacked',
    time: byId('cdu-ctrl-time') ? byId('cdu-ctrl-time').value : '00',
    unit: byId('cdu-ctrl-unit') ? byId('cdu-ctrl-unit').value : 'days',
    hasUnit: on
  });
}
window._cduUpdate = _cduUpdate;

/* ── Style tab spec cards — one per Layout ───────────────────────── */
var _specCards = {
  stacked: { layout: 'stacked', time: '00', unit: 'days', hasunit: 'true' },
  inline: { layout: 'inline', time: '00', unit: 'days', hasunit: 'true' }
};
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('cdu-spec-' + cardKey);
  if (!host) return;
  host.innerHTML = _cduRender({
    layout: card.layout,
    time: card.time,
    unit: card.unit,
    hasUnit: card.hasunit !== 'false'
  });
}
window.updateSpecCard = updateSpecCard;

/* ── DEV code, live ──────────────────────────────────────────────────
   One definition behind the spec-card fallback and both language tabs. */
function getSnippet(cardKey, lang) {
  var card = _specCards[cardKey] || _specCards['stacked'];
  var swift = lang !== 'compose';
  var sep = swift ? '<span class="syn-punc">:</span> ' : ' <span class="syn-eq">=</span> ';
  var cased = card.layout === 'inline' ? 'Inline' : 'Stacked';

  /* Figma types the label; the platform takes the unit as an enum and
     renders the label itself, so the typed text picks the case. */
  var unit = String(card.unit || 'days').trim().toLowerCase().replace(/[^a-z]/g, '') || 'days';
  var unitCased = unit.charAt(0).toUpperCase() + unit.slice(1);
  var value = parseInt(String(card.time || '0').replace(/[^0-9]/g, ''), 10);
  if (isNaN(value)) value = 0;

  var args = [
    'value' + sep + value,
    'unit' + sep + (swift
      ? '<span class="syn-dot">.' + unit + '</span>'
      : '<span class="syn-type">EBTimeUnit</span><span class="syn-punc">.</span><span class="syn-dot">' + unitCased + '</span>'),
    'layout' + sep + (swift
      ? '<span class="syn-dot">.' + card.layout + '</span>'
      : '<span class="syn-type">EBCountdownUnitLayout</span><span class="syn-punc">.</span><span class="syn-dot">' + cased + '</span>')
  ];
  if (card.hasunit === 'false') {
    args.push('showsUnit' + sep + '<span class="syn-kw">false</span>');
  }

  return '<span class="syn-type">EBCountdownUnit</span><span class="syn-punc">(</span>\n    ' +
    args.join('<span class="syn-punc">,</span>\n    ') +
    '\n<span class="syn-punc">)</span>';
}
window.getSnippet = getSnippet;

function _cduInit() {
  _cduUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'layout', _specCards[k].layout);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _cduInit);
  else _cduInit();
  document.addEventListener('astro:page-load', _cduInit);
})();
