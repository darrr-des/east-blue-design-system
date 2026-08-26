/* Powers the live-preview controls for the dropdown-item-group
 * (Select Group) component page. Rebuilt for the 2026 Working File
 * (node 7947:111630).
 *
 * BorderType and Density both shape the slot's DEFAULT CONTENT in Figma
 * rather than being applied to whatever fills it — a component property
 * cannot reach inside a slot. The preview reproduces the result, not the
 * mechanism; the constraint itself is written up on the page.
 *
 * The component ships seven rows; the preview shows five so the card
 * fits the page without scrolling.
 */

var _SGROUP_GEAR =
  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
  '<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="#0A2757" stroke-width="1.6"/>' +
  '<circle cx="12" cy="12" r="9" stroke="#0A2757" stroke-width="1.6"/></svg>';

var _SGROUP_ROWS = 5;

function _sgroupRender(o) {
  var border = o.border || 'middleinset';
  var density = o.density || 'compact';

  var h = '<div class="eb-preview-sgroup eb-preview-sgroup--' + border +
          ' eb-preview-sgroup--' + density + '">';
  for (var i = 0; i < _SGROUP_ROWS; i++) {
    h += '<div class="eb-preview-sgroup__row">';
    h += '<span class="eb-preview-sgroup__lead">' + _SGROUP_GEAR + '</span>';
    h += '<span class="eb-preview-sgroup__label">Text</span>';
    h += '</div>';
  }
  h += '</div>';
  return h;
}

function _sgroupRead() {
  var v = function (id, fb) { var el = document.getElementById(id); return el ? el.value : fb; };
  return {
    border: v('sgroup-ctrl-border', 'middleinset'),
    density: v('sgroup-ctrl-density', 'compact')
  };
}

function _sgroupUpdate() {
  var el = document.getElementById('sgroup-demo-preview');
  if (el) el.innerHTML = _sgroupRender(_sgroupRead());
}

/* ── Spec card state ─────────────────────────────────────────────── */
var _specCards = {
  default: { border: 'middleinset', density: 'compact' }
};
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('sgroup-spec-' + cardKey);
  if (host) host.innerHTML = _sgroupRender(card);
}
window.updateSpecCard = updateSpecCard;

function _sgroupInit() {
  _sgroupUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'border', _specCards[k].border);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _sgroupInit);
  else _sgroupInit();
  document.addEventListener('astro:page-load', _sgroupInit);
})();
