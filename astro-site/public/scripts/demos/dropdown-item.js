/* Powers the live-preview controls for the dropdown-item (Select Item)
 * component page. Rebuilt for the 2026 Working File (node 7947:111969).
 *
 * Four axes, 48 variants — but the State x isSelected grid is sparse on
 * purpose: selected-and-pressed and selected-and-disabled do not exist.
 * Rather than hide that, the preview clamps the combination and says so,
 * which is what Figma's variant picker effectively does.
 */

var _SITEM_GEAR =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
  '<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" stroke-width="1.6"/>' +
  '<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" stroke="currentColor" stroke-width="1.6"/></svg>';

/* Stand-in for the Flags Library instance — the real one is a vector
   from the shared library, which is what closed the raster-PNG finding. */
var _SITEM_FLAG =
  '<svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">' +
  '<rect x="0.5" y="0.5" width="15" height="11" rx="1.5" fill="#FFFFFF" stroke="#E5EBF4"/>' +
  '<rect x="1" y="1" width="14" height="1.4" fill="#F15A5B"/>' +
  '<rect x="1" y="3.8" width="14" height="1.4" fill="#F15A5B"/>' +
  '<rect x="1" y="6.6" width="14" height="1.4" fill="#F15A5B"/>' +
  '<rect x="1" y="9.4" width="14" height="1.4" fill="#F15A5B"/>' +
  '<rect x="1" y="1" width="6" height="5" fill="#434389"/></svg>';

function _sitemLead(type) {
  if (type === 'flag') return ['--flag', _SITEM_FLAG];
  /* PesoSignVector and PesoSignText render near-identically at this size
     — one is a custom SVG matched to the font, the other Proxima's own
     glyph. The preview shows the same mark for both, which is honest:
     the difference is not visible, which is why it needs documenting. */
  if (type === 'pesosignvector' || type === 'pesosigntext') return ['', '₱'];
  return ['', _SITEM_GEAR];
}

function _sitemRender(o) {
  var state = o.state || 'default';
  /* Selected only exists alongside State=Default. */
  var selected = o.selected && state === 'default';
  var lead = _sitemLead(o.type);

  var cls = 'eb-preview-sitem eb-preview-sitem--' + (o.density || 'compact');
  if (state !== 'default') cls += ' eb-preview-sitem--' + state;
  if (selected) cls += ' eb-preview-sitem--selected';
  if (o.supporting) cls += ' eb-preview-sitem--supporting';

  var h = '<div class="' + cls + '">';
  h += '<span class="eb-preview-sitem__lead' + (lead[0] ? ' eb-preview-sitem__lead' + lead[0] : '') + '">' + lead[1] + '</span>';
  h += '<span class="eb-preview-sitem__content">';
  h += '<span class="eb-preview-sitem__primary">Text</span>';
  if (o.supporting) h += '<span class="eb-preview-sitem__supporting">Supporting Text</span>';
  h += '</span>';
  h += '<span class="eb-preview-sitem__trail">';
  if (o.badge) h += '<span class="eb-preview-sitem__badge">Label</span>';
  h += '</span></div>';

  if (o.selected && state !== 'default') {
    h += '<div class="table-footnote">isSelected=true has no variant with State=' +
         (state === 'pressed' ? 'Pressed' : 'Disabled') +
         ' — the grid is sparse by design, which is what holds the set at 48 rather than 72.</div>';
  }
  return h;
}

function _sitemRead() {
  var v = function (id, fb) { var el = document.getElementById(id); return el ? el.value : fb; };
  return {
    type: v('sitem-ctrl-type', 'icon'),
    density: v('sitem-ctrl-density', 'compact'),
    state: v('sitem-ctrl-state', 'default'),
    selected: v('sitem-ctrl-isselected', 'false') === 'true',
    supporting: v('sitem-ctrl-supporting', 'false') === 'true',
    badge: v('sitem-ctrl-badge', 'false') === 'true'
  };
}

function _sitemUpdate() {
  var el = document.getElementById('sitem-demo-preview');
  if (el) el.innerHTML = _sitemRender(_sitemRead());
}

/* ── Spec card state ─────────────────────────────────────────────── */
var _specCards = {
  default: { type: 'icon', density: 'compact', state: 'default', isselected: 'false' }
};
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('sitem-spec-' + cardKey);
  if (host) {
    host.innerHTML = _sitemRender({
      type: card.type,
      density: card.density,
      state: card.state,
      selected: card.isselected === 'true',
      supporting: false,
      badge: false
    });
  }
}
window.updateSpecCard = updateSpecCard;

function _sitemInit() {
  _sitemUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'type', _specCards[k].type);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _sitemInit);
  else _sitemInit();
  document.addEventListener('astro:page-load', _sitemInit);
})();
