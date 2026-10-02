/* Service Item — live preview + spec cards.
 * Set 4692:21582 (2026 Working File): State = Default | Inactive | Pressed |
 * Disabled × Orientation = Vertical | Horizontal × Badge = None | New ×
 * Action = None | Add | Remove — 32 built variants (Badge=New never pairs
 * with an Action).
 *
 * Read off the variants and checked against export_node_as_image:
 *   Vertical 4692:21583 (64×72) · New 4692:21591 · Add 4692:21601 ·
 *   Remove 4692:21610 · Inactive 4692:21619 · Pressed 4703:18264 ·
 *   Disabled 4692:21775 · Horizontal 4692:21655 (120×64).
 * The Preamble, Description-Slot and Border layers exist in every variant
 * but are hidden in every export, so the preview does not draw them.
 */

function _siEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* Add / Remove — 12 × 12 instances: a filled circle with white 6 × 1.5 bars. */
function _siAction(kind) {
  var fill = kind === 'add' ? '#12AF80' : '#D61B2C';
  return '<svg class="eb-preview-si__action" viewBox="0 0 12 12" aria-hidden="true">' +
    '<circle cx="6" cy="6" r="6" fill="' + fill + '"/>' +
    '<rect x="3" y="5.25" width="6" height="1.5" rx="1" fill="#FFFFFF"/>' +
    (kind === 'add' ? '<rect x="5.25" y="3" width="1.5" height="6" rx="1" fill="#FFFFFF"/>' : '') +
  '</svg>';
}

/* opts: { orientation: vertical|horizontal, state: default|inactive|pressed|disabled,
           badge: none|new, action: none|add|remove, label } */
function _siRender(opts) {
  var orientation = opts.orientation === 'horizontal' ? 'horizontal' : 'vertical';
  var state = opts.state || 'default';
  var badge = opts.badge === 'new' ? 'new' : 'none';
  var action = opts.action === 'add' || opts.action === 'remove' ? opts.action : 'none';
  var label = opts.label || 'Label';
  var cls = 'eb-preview eb-preview-si eb-preview-si--' + orientation + ' eb-preview-si--' + state;
  var html = '<div class="' + cls + '">';
  html += '<span class="eb-preview-si__asset" aria-hidden="true"></span>';
  html += '<span class="eb-preview-si__label">' + _siEscape(label) + '</span>';
  if (badge === 'new') html += '<span class="eb-preview-si__new">New</span>';
  if (action !== 'none') html += _siAction(action);
  return html + '</div>';
}

/* ── Overview live preview ─────────────────────────────────────────── */
function _siUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var el = document.getElementById('si-demo-preview');
  if (!el) return;
  el.innerHTML = _siRender({
    orientation: getVal('si-ctrl-orientation', 'vertical'),
    state:       getVal('si-ctrl-state', 'default'),
    badge:       getVal('si-ctrl-badge', 'none'),
    action:      getVal('si-ctrl-action', 'none'),
    label:       getVal('si-ctrl-label', 'Label')
  });
}
window._siUpdate = _siUpdate;

/* ── Spec cards — one per Orientation value, keyed by demoKey ───────── */
var _specCards = {
  'vertical':   { orientation: 'vertical',   state: 'default', badge: 'none', action: 'none' },
  'horizontal': { orientation: 'horizontal', state: 'default', badge: 'none', action: 'none' }
};
window._specCards = _specCards;

function getSnippet(cardKey, lang, card) {
  var c = card || _specCards[cardKey] || {};
  var cap = function (v) { return v.charAt(0).toUpperCase() + v.slice(1); };
  var badge = c.badge === 'new', action = c.action === 'add' || c.action === 'remove' ? c.action : null;
  if (lang === 'swift') {
    var s = 'EBServiceItem("Label", asset: Image("service"))\n    .ebOrientation(.' + (c.orientation || 'vertical') + ')';
    if (badge) s += '\n    .ebBadge(.new)';
    if (action) s += '\n    .ebAction(.' + action + ') { }';
    if (c.state === 'inactive') s += '\n    .ebInactive(true)';
    if (c.state === 'disabled') s += '\n    .disabled(true)';
    return s;
  }
  var lines = ['    label = "Label"', '    asset = { Icon(…) }', '    orientation = EBServiceItemOrientation.' + cap(c.orientation || 'vertical')];
  if (badge) lines.push('    badge = EBServiceItemBadge.New');
  if (action) lines.push('    action = EBServiceItemAction.' + cap(action) + ' { }');
  if (c.state === 'inactive') lines.push('    inactive = true');
  if (c.state === 'disabled') lines.push('    enabled = false');
  return 'EBServiceItem(\n' + lines.join(',\n') + '\n)';
}
window.getSnippet = getSnippet;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('si-spec-' + cardKey);
  if (host) host.innerHTML = _siRender(card);
}
window.updateSpecCard = updateSpecCard;

function _siInit() {
  _siUpdate();
  Object.keys(_specCards).forEach(function (k) { updateSpecCard(k, 'state', _specCards[k].state); });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _siInit);
else _siInit();
document.addEventListener('astro:page-load', _siInit);
