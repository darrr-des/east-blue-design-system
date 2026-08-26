/* Powers the live-preview controls for the dropdown (Select) component
 * page. Rebuilt for the 2026 Working File (node 7947:111865).
 *
 * Select composes two other components: Select Field for the trigger and
 * Select Group for the menu. Select Field is deliberately out of this
 * review's scope — it also backs text fields — so the trigger here is
 * drawn to match rather than presented as documented behaviour.
 *
 * The menu instance exists in all 24 Figma variants and is hidden unless
 * State=Expanded, which is why the trigger's box stays 46 tall. The
 * preview does the same: the menu overlays rather than growing the field.
 */

var _SEL_GEAR =
  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
  '<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="#0A2757" stroke-width="1.6"/>' +
  '<circle cx="12" cy="12" r="9" stroke="#0A2757" stroke-width="1.6"/></svg>';

function _selMenu() {
  var h = '<div class="eb-preview-sel__menu">';
  h += '<div class="eb-preview-sgroup eb-preview-sgroup--middleinset eb-preview-sgroup--compact">';
  for (var i = 0; i < 4; i++) {
    h += '<div class="eb-preview-sgroup__row">';
    h += '<span class="eb-preview-sgroup__lead">' + _SEL_GEAR + '</span>';
    h += '<span class="eb-preview-sgroup__label">Text</span>';
    h += '</div>';
  }
  return h + '</div></div>';
}

function _selRender(o) {
  var state = o.state || 'default';
  var filled = !!o.filled;

  var cls = 'eb-preview-sel';
  if (state !== 'default') cls += ' eb-preview-sel--' + state;
  if (filled) cls += ' eb-preview-sel--filled';

  var h = '<div class="' + cls + '">';
  h += '<div class="eb-preview-sel__field">';
  /* Both currency types render the same mark at this size — the
     difference is a custom SVG versus Proxima's own glyph. */
  if (o.type === 'pesosignvector' || o.type === 'pesosigntext') {
    h += '<span class="eb-preview-sel__lead">₱</span>';
  }
  h += '<span class="eb-preview-sel__value">' + (filled ? 'Savings account' : 'Select Option') + '</span>';
  h += '<span class="eb-preview-sel__chevron"></span>';
  h += '</div>';
  if (state === 'expanded') h += _selMenu();
  return h + '</div>';
}

function _selRead() {
  var v = function (id, fb) { var el = document.getElementById(id); return el ? el.value : fb; };
  return {
    type: v('sel-ctrl-type', 'default'),
    state: v('sel-ctrl-state', 'default'),
    filled: v('sel-ctrl-isfilled', 'false') === 'true'
  };
}

function _selUpdate() {
  var el = document.getElementById('sel-demo-preview');
  if (el) el.innerHTML = _selRender(_selRead());
}

/* ── Spec card state ─────────────────────────────────────────────── */
var _specCards = {
  default: { type: 'default', state: 'default', isfilled: 'false' }
};
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('sel-spec-' + cardKey);
  if (host) {
    host.innerHTML = _selRender({
      type: card.type,
      state: card.state,
      filled: card.isfilled === 'true'
    });
  }
}
window.updateSpecCard = updateSpecCard;

function _selInit() {
  _selUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _selInit);
  else _selInit();
  document.addEventListener('astro:page-load', _selInit);
})();
