/* Powers the live-preview controls for the modal-transaction-receipt
 * component page (node 5879:41048).
 *
 * ActionOrientation is the only setting, and it changes the action area
 * alone — the card, the rows and the reference strip above it are byte
 * identical between the two variants. Vertical stacks two full-width
 * buttons with the primary on top; horizontal puts them side by side
 * with the primary on the right, which is the correct convention on
 * both platforms.
 */

function _mtrEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* One transaction row. These are Modal - Transaction Receipt Entry
   instances in Figma, in their Inline layout. */
function _mtrRow(label, value) {
  return '<div class="eb-preview-mtr__row">' +
    '<span class="eb-preview-mtr__row-label">' + _mtrEscape(label) + '</span>' +
    '<span class="eb-preview-mtr__row-value">' + _mtrEscape(value) + '</span>' +
    '</div>';
}

function _mtrRender(opts) {
  var actions = opts.actions === 'horizontal' ? 'horizontal' : 'vertical';
  var h = '<div class="eb-preview-mtr eb-preview-mtr--' + actions + '">';

  h += '<div class="eb-preview-mtr__content">';
  h += '<div class="eb-preview-mtr__title">' + _mtrEscape(opts.title || 'Put the title here') + '</div>';
  /* The placeholder carries a hard line break, same as Figma. */
  h += '<div class="eb-preview-mtr__description">First line of text goes here<br>Second line of text goes here</div>';
  h += '<div class="eb-preview-mtr__rows">';
  h += _mtrRow('Label', 'Put content here');
  h += _mtrRow('Label', 'Put content here');
  h += _mtrRow('Label', 'Put content here');
  h += '</div></div>';

  /* The reference row is a deliberate hand-built duplicate of the entry
     primitive — it sits outside the card and carries the copy control. */
  h += '<div class="eb-preview-mtr__reference">';
  h += '<span class="eb-preview-mtr__row-label">Reference Number</span>';
  h += '<span class="eb-preview-mtr__row-value">' + _mtrEscape(opts.reference || '165A25912345') + '</span>';
  h += '<span class="eb-preview-mtr__copy"></span>';
  h += '</div>';

  /* Primary on top when stacked, primary on the right when inline. */
  h += '<div class="eb-preview-mtr__actions">';
  if (actions === 'horizontal') {
    h += '<div class="eb-preview-mtr__btn eb-preview-mtr__btn--outlined">Label</div>';
    h += '<div class="eb-preview-mtr__btn eb-preview-mtr__btn--filled">Label</div>';
  } else {
    h += '<div class="eb-preview-mtr__btn eb-preview-mtr__btn--filled">Label</div>';
    h += '<div class="eb-preview-mtr__btn eb-preview-mtr__btn--outlined">Label</div>';
  }
  h += '</div>';

  return h + '</div>';
}

function _mtrUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('mtr-demo-preview');
  if (!preview) return;
  preview.innerHTML = _mtrRender({
    actions: getVal('mtr-ctrl-actions', 'vertical'),
    title: getVal('mtr-ctrl-title', 'Put the title here'),
    reference: getVal('mtr-ctrl-ref', '165A25912345')
  });
}

/* ── Spec card state ─────────────────────────────────────────────── */
var _specCards = {
  default: { actions: 'vertical' }
};
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('mtr-spec-' + cardKey);
  if (host) {
    host.innerHTML = _mtrRender({ actions: card.actions });
  }
}
window.updateSpecCard = updateSpecCard;

function _mtrInit() {
  _mtrUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'actions', _specCards[k].actions);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _mtrInit);
  else _mtrInit();
  document.addEventListener('astro:page-load', _mtrInit);
})();
