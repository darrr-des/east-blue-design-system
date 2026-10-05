/* Alert — live preview + spec cards.
 * Set 6663:104524 "Callout" (2026 Working File): Type = Neutral | Information
 * | Warning | Error | Success × Style = Card | Banner × Content = Default |
 * Header Only | Description Only × Size = Large | Medium | Small = 90.
 *
 * Read off 6663:104525 (Card · Neutral · Default · Large), the four other
 * Types, 6801:109634 (Banner), 6663:104590 (Header Only), 6663:104645
 * (Description Only), 6679:107961 (Medium) and 6682:111457 (Small); checked
 * against export_node_as_image. Leading-Slot and Button_New are hidden or
 * clipped in every export, so the preview does not draw them; Trailing-Slot
 * ships the purple Slot Block placeholder (get_svg 6761:106589).
 */

function _alertEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function _alertSlotBlock() {
  return '<svg class="eb-preview-alert__trailing" viewBox="0 0 32 32" fill="none" aria-hidden="true">' +
    '<rect x="0.5" y="0.5" width="31" height="31" rx="3.5" fill="#9F3DFB" fill-opacity="0.09"/>' +
    '<rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#9F3DFB" stroke-dasharray="4 4"/>' +
    '<path d="M13.4922 11.3926C15.6016 11.3926 16.6562 12.2422 16.6562 14.3691V17.1934L16.6152 18.418L17.4297 17.5039L18.7539 16.1738C18.8535 16.0742 18.9941 16.0098 19.1523 16.0098C19.457 16.0098 19.6855 16.2441 19.6855 16.5605C19.6855 16.7012 19.6328 16.8359 19.5156 16.959L16.5156 19.9707C16.4043 20.0879 16.252 20.1523 16.0996 20.1523C15.9473 20.1523 15.7949 20.0879 15.6836 19.9707L12.6836 16.959C12.5664 16.8359 12.5078 16.7012 12.5078 16.5605C12.5078 16.2441 12.7363 16.0098 13.0469 16.0098C13.1992 16.0098 13.3398 16.0742 13.4395 16.1738L14.7695 17.5039L15.584 18.4238L15.5371 17.1934L15.543 14.4395C15.5488 12.9629 14.9043 12.4941 13.4629 12.4941C13.2227 12.4941 13.0527 12.5117 12.8594 12.5117C12.5371 12.5117 12.3086 12.3066 12.3086 11.9785C12.3086 11.6445 12.5605 11.4805 12.8066 11.4395C13 11.4043 13.2285 11.3926 13.4922 11.3926Z" fill="#9F3DFB"/>' +
  '</svg>';
}

var ALERT_TYPES = ['neutral', 'information', 'warning', 'error', 'success'];

/* opts: { style: card|banner, type, content: default|header-only|description-only,
           size: large|medium|small, title, description } */
function _alertRender(o) {
  var style = o.style === 'banner' ? 'banner' : 'card';
  var type = ALERT_TYPES.indexOf(o.type) !== -1 ? o.type : 'neutral';
  var content = o.content === 'header-only' || o.content === 'description-only' ? o.content : 'default';
  var size = o.size === 'medium' || o.size === 'small' ? o.size : 'large';
  var cls = 'eb-preview eb-preview-alert eb-preview-alert--' + style + ' eb-preview-alert--' + type + ' eb-preview-alert--' + size + ' eb-preview-alert--' + content;
  var h = '<div class="' + cls + '"><div class="eb-preview-alert__content">';
  if (content !== 'description-only') h += '<span class="eb-preview-alert__title">' + _alertEscape(o.title || 'This is for the title.') + '</span>';
  if (content !== 'header-only') h += '<span class="eb-preview-alert__desc">' + _alertEscape(o.description || 'This is the description. Put description here.') + '</span>';
  h += '</div>' + _alertSlotBlock() + '</div>';
  return h;
}

/* ── Overview live preview ─────────────────────────────────────────── */
function _alertUpdate() {
  var v = function (id, fb) { var el = document.getElementById(id); return el ? el.value : fb; };
  var el = document.getElementById('alert-demo-preview');
  if (!el) return;
  el.innerHTML = _alertRender({ type: v('alert-ctrl-type', 'neutral'), style: v('alert-ctrl-style', 'card'), content: v('alert-ctrl-content', 'default'), size: v('alert-ctrl-size', 'large'), title: v('alert-ctrl-title', ''), description: v('alert-ctrl-description', '') });
}
window._alertUpdate = _alertUpdate;

/* ── Spec cards — one per Style value, keyed by demoKey ─────────────── */
var _specCards = {
  'card':   { style: 'card',   type: 'neutral', content: 'default', size: 'large' },
  'banner': { style: 'banner', type: 'neutral', content: 'default', size: 'large' }
};
window._specCards = _specCards;

function getSnippet(cardKey, lang, card) {
  var c = card || _specCards[cardKey] || {};
  var cap = function (s) { return s.charAt(0).toUpperCase() + s.slice(1); };
  var type = c.type || 'neutral', style = c.style || 'card', content = c.content || 'default', size = c.size || 'large';
  var title = content !== 'description-only', desc = content !== 'header-only';
  if (lang === 'swift') {
    var a = ['type: .' + type];
    if (title) a.push('title: "This is for the title."');
    if (desc) a.push('description: "This is the description."');
    return 'EBAlert(\n    ' + a.join(',\n    ') + '\n)\n    .ebStyle(.' + style + ')\n    .ebSize(.' + size + ')';
  }
  var k = ['    type = EBAlertType.' + cap(type)];
  if (title) k.push('    title = "This is for the title."');
  if (desc) k.push('    description = "This is the description."');
  k.push('    style = EBAlertStyle.' + cap(style), '    size = EBAlertSize.' + cap(size));
  return 'EBAlert(\n' + k.join(',\n') + '\n)';
}
window.getSnippet = getSnippet;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('alert-spec-' + cardKey);
  if (host) host.innerHTML = _alertRender(card);
}
window.updateSpecCard = updateSpecCard;

function _alertInit() {
  _alertUpdate();
  Object.keys(_specCards).forEach(function (k) { updateSpecCard(k, 'type', _specCards[k].type); });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _alertInit);
else _alertInit();
document.addEventListener('astro:page-load', _alertInit);
