/* Powers the live-preview controls for the modal component page.
 * Rebuilt for the 2026 Working File (node 5879:41278), which is the
 * general-purpose dialog only — the transaction receipt layouts that
 * used to share this component set now live in
 * modal-transaction-receipt.js.
 *
 * Two settings: ActionOrientation changes the action area alone, and
 * hasIcon collapses the 92x92 illustration slot along with the 16px
 * gap beneath it.
 */

function _mdlEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* Figma's placeholder description carries a hard line break. An <input>
   cannot hold a newline, so the flat default maps back to the two-line
   form; anything else the user types renders exactly as typed. */
var _MDL_DESC_FLAT = 'Add description here. Add description here.';
var _MDL_DESC_LINES = 'Add description here.\nAdd description here.';

function _mdlDescription(v) {
  var text = (v === _MDL_DESC_FLAT || !v) ? _MDL_DESC_LINES : v;
  return _mdlEscape(text).replace(/\n/g, '<br>');
}

function _mdlRender(opts) {
  var actions = opts.actions === 'horizontal' ? 'horizontal' : 'vertical';
  var cls = 'eb-preview-mdl eb-preview-mdl--' + actions;
  if (!opts.hasIcon) cls += ' eb-preview-mdl--no-icon';

  var h = '<div class="' + cls + '">';
  h += '<div class="eb-preview-mdl__content">';
  /* Kept in the markup and hidden by the modifier class, so toggling
     hasIcon does not reflow the rest of the dialog on re-render. */
  h += '<div class="eb-preview-mdl__icon"><span>Icon</span></div>';
  h += '<div class="eb-preview-mdl__title">' + _mdlEscape(opts.title || 'Put the title here') + '</div>';
  h += '<div class="eb-preview-mdl__description">' + _mdlDescription(opts.description) + '</div>';
  h += '</div>';

  /* Primary on top when stacked, primary on the right when inline. */
  h += '<div class="eb-preview-mdl__actions">';
  if (actions === 'horizontal') {
    h += '<div class="eb-preview-mdl__btn eb-preview-mdl__btn--outlined">Label</div>';
    h += '<div class="eb-preview-mdl__btn eb-preview-mdl__btn--filled">Label</div>';
  } else {
    h += '<div class="eb-preview-mdl__btn eb-preview-mdl__btn--filled">Label</div>';
    h += '<div class="eb-preview-mdl__btn eb-preview-mdl__btn--outlined">Label</div>';
  }
  h += '</div>';

  return h + '</div>';
}

function _mdlUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('mdl-demo-preview');
  if (!preview) return;
  preview.innerHTML = _mdlRender({
    actions: getVal('mdl-ctrl-actions', 'vertical'),
    hasIcon: getVal('mdl-ctrl-hasicon', 'true') === 'true',
    title: getVal('mdl-ctrl-title', 'Put the title here'),
    description: getVal('mdl-ctrl-desc', 'Add description here. Add description here.')
  });
}

/* ── Spec card state ─────────────────────────────────────────────── */
var _specCards = {
  default: { actions: 'vertical', hasicon: 'true' }
};
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('mdl-spec-' + cardKey);
  if (host) {
    host.innerHTML = _mdlRender({
      actions: card.actions,
      hasIcon: card.hasicon === 'true'
    });
  }
}
window.updateSpecCard = updateSpecCard;

function _mdlInit() {
  _mdlUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'actions', _specCards[k].actions);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _mdlInit);
  else _mdlInit();
  document.addEventListener('astro:page-load', _mdlInit);
})();
