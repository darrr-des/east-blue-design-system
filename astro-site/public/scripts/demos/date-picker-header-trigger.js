/* Powers the live preview and spec card on the date-picker-header-trigger
 * page. Date Picker - Header Trigger (node 6779:105937) is State ×
 * hasCaret — six versions.
 */

/* The caret is Figma's path verbatim, stroked at 2. It takes its colour from
 * the wrapper's `color`, which the state classes set — it is NOT the label
 * colour: border/color-border-strongest is a step lighter than the text.
 */
var _dphtCaret =
  '<svg class="eb-preview-dphdr__caret" width="16" height="16" viewBox="0 0 16 16" ' +
  'fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
  '<path d="M4.5 6.5L8 10L11.5 6.5" stroke="currentColor" stroke-width="2" ' +
  'stroke-linecap="round" stroke-linejoin="round"/></svg>';

function _dphtEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function _dphtRender(opts) {
  var state = opts.state || 'default';
  var cls = ['eb-preview-dphdr'];
  if (state === 'pressed') cls.push('eb-preview-dphdr--pressed');
  if (state === 'disabled') cls.push('eb-preview-dphdr--disabled');
  var h = '<span class="' + cls.join(' ') + '">';
  h += '<span class="eb-preview-dphdr__label">' + _dphtEscape(opts.text || 'Label') + '</span>';
  if (opts.caret) h += _dphtCaret;
  return h + '</span>';
}

/* ── DEV code ────────────────────────────────────────────────────────
 * One definition behind the spec-card fallback, the Code tab and the live
 * snippet, so the three cannot drift apart.
 */
function _dphtArgs(o) {
  return {
    swift: ['label: ' + JSON.stringify(o.text), 'hasCaret: ' + (o.caret ? 'true' : 'false')],
    compose: ['label = ' + JSON.stringify(o.text), 'hasCaret = ' + (o.caret ? 'true' : 'false')]
  };
}

function _dphtHighlight(line) {
  return line
    .replace(/"([^"]*)"/g, '<span class="syn-str">"$1"</span>')
    .replace(/\b(true|false)\b/g, '<span class="syn-kw">$1</span>')
    .replace(/([:,=()])/g, '<span class="syn-punc">$1</span>');
}

function _dphtSnippet(o, lang) {
  var args = _dphtArgs(o)[lang];
  if (o.state === 'disabled') {
    args = args.concat(lang === 'swift' ? 'isDisabled: true' : 'isDisabled = true');
  }
  return '<span class="syn-type">EBDatePickerHeaderTrigger</span>' +
    '<span class="syn-punc">(</span>\n    ' +
    args.map(_dphtHighlight).join('<span class="syn-punc">,</span>\n    ') +
    '\n<span class="syn-punc">)</span>';
}

function getSnippet(cardKey, lang) {
  var card = _specCards[cardKey] || _specCards['default'];
  return _dphtSnippet(
    { text: card.text || 'Label', caret: card.caret === 'true', state: card.state },
    lang === 'compose' ? 'compose' : 'swift'
  );
}
window.getSnippet = getSnippet;

function _dphtUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('dpht-demo-preview');
  if (!preview) return;
  preview.innerHTML = _dphtRender({
    state: getVal('dpht-ctrl-state', 'default'),
    caret: getVal('dpht-ctrl-caret', 'true') === 'true',
    text: getVal('dpht-ctrl-text', 'Label')
  });
}
window._dphtUpdate = _dphtUpdate;

/* ── Style tab spec card ─────────────────────────────────────────── */
var _specCards = { default: { state: 'default', caret: 'true', text: 'Label' } };
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('dpht-spec-' + cardKey);
  if (host) {
    host.innerHTML = _dphtRender({
      state: card.state,
      caret: card.caret === 'true',
      text: card.text
    });
  }
}
window.updateSpecCard = updateSpecCard;

function _dphtInit() {
  _dphtUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _dphtInit);
  else _dphtInit();
  document.addEventListener('astro:page-load', _dphtInit);
})();
