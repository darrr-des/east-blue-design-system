/* Powers the live preview and spec card on the date-picker page.
 * Date Picker (node 7201:112099) is the field: State × isFilled, eight
 * versions, each composing one Dropdown - Generic instance.
 */

var _dpCalendarIcon =
  '<svg class="eb-preview-dptrig__icon" width="20" height="20" viewBox="0 0 20 20" ' +
  'fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
  '<rect x="2.75" y="4.25" width="14.5" height="13" rx="2.5" stroke="currentColor" stroke-width="1.5"/>' +
  '<path d="M2.75 8.25h14.5M6.75 2.75v3M13.25 2.75v3" stroke="currentColor" ' +
  'stroke-width="1.5" stroke-linecap="round"/></svg>';

function _dpEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function _dpRender(opts) {
  var state = opts.state || 'default';
  var filled = !!opts.filled;

  var cls = ['eb-preview-dptrig', 'eb-preview-dptrig--' + state];
  if (filled) cls.push('eb-preview-dptrig--filled');

  var h = '<div class="' + cls.join(' ') + '">';
  h += '<div class="eb-preview-dptrig__label">' + _dpEscape(opts.label || 'Label') + '</div>';
  h += '<div class="eb-preview-dptrig__field">';
  h += '<span class="eb-preview-dptrig__value">' + _dpEscape(opts.value || 'Select option') + '</span>';
  h += _dpCalendarIcon;
  h += '</div>';
  /* Only Error carries subtext — the other three states hug the field,
     which is what keeps a disabled field the same height as an enabled one. */
  if (state === 'error') {
    h += '<div class="eb-preview-dptrig__subtext">Input your subtext here.</div>';
  }
  return h + '</div>';
}

function _dpUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('dp-demo-preview');
  if (!preview) return;

  var filled = getVal('dp-ctrl-filled', 'false') === 'true';
  var valueEl = document.getElementById('dp-ctrl-value');
  /* Keep the value field honest: an empty field shows the placeholder. */
  if (valueEl && filled && valueEl.value === 'Select option') valueEl.value = '12 Aug 2026';
  if (valueEl && !filled && valueEl.value === '12 Aug 2026') valueEl.value = 'Select option';

  preview.innerHTML = _dpRender({
    state: getVal('dp-ctrl-state', 'default'),
    filled: filled,
    label: getVal('dp-ctrl-label', 'Label'),
    value: getVal('dp-ctrl-value', 'Select option')
  });
}
window._dpUpdate = _dpUpdate;

/* ── Style tab spec card ─────────────────────────────────────────── */
var _specCards = { field: { state: 'default', filled: 'false' } };
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('dp-spec-' + cardKey);
  if (host) {
    var filled = card.filled === 'true';
    host.innerHTML = _dpRender({
      state: card.state,
      filled: filled,
      label: 'Label',
      value: filled ? '12 Aug 2026' : 'Select option'
    });
  }
}
window.updateSpecCard = updateSpecCard;

/* ── DEV code, live ──────────────────────────────────────────────────
   The field takes a binding, so the snippet changes with State rather
   than with the value: Disabled and Error are modifiers on the call. */
function _dpArgs(card, lang) {
  var swift = lang !== 'compose';
  var sep = swift ? '<span class="syn-punc">:</span> ' : ' <span class="syn-eq">=</span> ';
  var args = ['label' + sep + '<span class="syn-str">"Label"</span>'];
  args.push(swift
    ? 'selection' + sep + '<span class="syn-punc">$</span>date'
    : 'selected' + sep + 'date');
  if (!swift) args.push('onSelect' + sep + '<span class="syn-punc">{</span> date <span class="syn-eq">=</span> it <span class="syn-punc">}</span>');
  if (!swift && card.state === 'disabled') args.push('enabled' + sep + '<span class="syn-kw">false</span>');
  if (card.state === 'error') {
    args.push('errorText' + sep + '<span class="syn-str">"Input your subtext here."</span>');
  }
  return args;
}

function getSnippet(cardKey, lang) {
  var card = _specCards[cardKey] || _specCards['field'];
  var swift = lang !== 'compose';
  var call = '<span class="syn-type">EBDatePicker</span><span class="syn-punc">(</span>\n    ' +
    _dpArgs(card, lang).join('<span class="syn-punc">,</span>\n    ') +
    '\n<span class="syn-punc">)</span>';
  /* Disabled is a modifier in SwiftUI; Compose takes it as a parameter above. */
  if (swift && card.state === 'disabled') {
    call += '\n<span class="syn-punc">.</span><span class="syn-fn">disabled</span>' +
      '<span class="syn-punc">(</span><span class="syn-kw">true</span><span class="syn-punc">)</span>';
  }
  return call;
}
window.getSnippet = getSnippet;


function _dpInit() {
  _dpUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _dpInit);
  else _dpInit();
  document.addEventListener('astro:page-load', _dpInit);
})();
