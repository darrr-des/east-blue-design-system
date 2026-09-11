/* Powers the live-preview controls for the modal-transaction-receipt-entry
 * component page. The primitive (node 5947:181504) is two text layers and
 * one setting: Layout = Stacked | Inline.
 *
 * Stacked puts the value under the label at 14/16 so it can wrap.
 * Inline puts it on the right at 14/14, where the label fills the slack
 * and the value hugs — a longer label pushes the value rather than
 * clipping it. That fill/hug split is the whole reason the inline layout
 * survives real content, so the preview reproduces it with flex rather
 * than with the fixed 164/108 widths Figma reports.
 */

function _mtreEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function _mtreRender(opts) {
  var layout = opts.layout === 'inline' ? 'inline' : 'stacked';
  var h = '<div class="eb-preview-mtre-shell">';
  h += '<div class="eb-preview-mtre eb-preview-mtre--' + layout + '">';
  h += '<div class="eb-preview-mtre__label">' + _mtreEscape(opts.label || 'Label') + '</div>';
  h += '<div class="eb-preview-mtre__value">' + _mtreEscape(opts.value || 'Put content here') + '</div>';
  h += '</div></div>';
  return h;
}

function _mtreUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('mtre-demo-preview');
  if (!preview) return;
  preview.innerHTML = _mtreRender({
    layout: getVal('mtre-ctrl-layout', 'stacked'),
    label: getVal('mtre-ctrl-label', 'Label'),
    value: getVal('mtre-ctrl-value', 'Put content here')
  });
}

/* ── Spec card state ─────────────────────────────────────────────── */
/* One card per Layout value, in the Figma panel's order. Neither card
   carries a control: Layout is the driving property and the two text
   layers are not component properties, so there is nothing left to
   switch. The state still lives here so getSnippet and the renderer
   share one definition. */
var _specCards = {
  stacked: { layout: 'stacked' },
  inline: { layout: 'inline' }
};
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('mtre-spec-' + cardKey);
  if (host) {
    host.innerHTML = _mtreRender({
      layout: card.layout,
      label: 'Label',
      value: 'Put content here'
    });
  }
}
window.updateSpecCard = updateSpecCard;

/* ── DEV code, live ───────────────────────────────────────────────── */
/* label and value are text layers rather than Figma properties, but both
   have to be parameters natively — a receipt entry with no content is
   not a thing. */
function getSnippet(cardKey, lang) {
  var card = _specCards[cardKey] || _specCards['stacked'];
  var compose = lang === 'compose';
  var sep = compose ? ' <span class="syn-eq">=</span> ' : '<span class="syn-punc">:</span> ';
  var cased = card.layout === 'inline' ? 'Inline' : 'Stacked';
  var layoutValue = compose
    ? '<span class="syn-type">EBEntryLayout</span><span class="syn-punc">.</span>' +
      '<span class="syn-dot">' + cased + '</span>'
    : '<span class="syn-dot">.' + card.layout + '</span>';

  var args = [
    'label' + sep + '<span class="syn-str">"Label"</span>',
    'value' + sep + '<span class="syn-str">"Put content here"</span>',
    'layout' + sep + layoutValue
  ];
  return '<span class="syn-type">EBTransactionReceiptEntry</span><span class="syn-punc">(</span>\n    ' +
    args.join('<span class="syn-punc">,</span>\n    ') +
    '\n<span class="syn-punc">)</span>';
}
window.getSnippet = getSnippet;

function _mtreInit() {
  _mtreUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'layout', _specCards[k].layout);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _mtreInit);
  else _mtreInit();
  document.addEventListener('astro:page-load', _mtreInit);
})();
