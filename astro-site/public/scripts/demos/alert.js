/* Powers the live-preview controls for the alert component page.
 * Rebuilt for the 2026 Working File (node 6627:102953).
 *
 * The previous demo had drifted a full rebuild behind the component: it
 * still exposed a `fullwidth` boolean and a `showdesc` toggle, which are
 * the model v2.0 replaced with Style=Card|Banner and Content. This one
 * is built against the current three-axis schema.
 *
 * Both slots ship empty in all 30 variants, deliberately, so the preview
 * draws their footprints rather than inventing an icon that the
 * component does not have.
 */

function _alertEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function _alertRender(o) {
  var type = o.type || 'information';
  var style = o.style === 'banner' ? 'banner' : 'card';
  var content = o.content || 'default';

  var cls = 'eb-preview-alert eb-preview-alert--' + type + ' eb-preview-alert--' + style;
  /* Default needs no modifier — it shows both blocks. */
  if (content !== 'default') cls += ' eb-preview-alert--' + content;

  var h = '<div class="' + cls + '">';
  h += '<div class="eb-preview-alert__content">';
  h += '<span class="eb-preview-alert__leading"></span>';
  h += '<span class="eb-preview-alert__body">';
  h += '<span class="eb-preview-alert__title">' + _alertEscape(o.title || 'This is for the title.') + '</span>';
  h += '<span class="eb-preview-alert__desc">' + _alertEscape(o.desc || 'This is the description. Put the description here.') + '</span>';
  /* The action is a constant across all three Content values — which is
     why "TitleOnly" names the text block, not the whole surface. */
  h += '<span class="eb-preview-alert__action">Learn more<span class="eb-preview-alert__action-chevron"></span></span>';
  h += '</span>';
  h += '<span class="eb-preview-alert__trailing"></span>';
  h += '</div></div>';
  return h;
}

function _alertRead() {
  var v = function (id, fb) { var el = document.getElementById(id); return el ? el.value : fb; };
  return {
    type: v('alert-ctrl-type', 'information'),
    style: v('alert-ctrl-style', 'card'),
    content: v('alert-ctrl-content', 'default')
  };
}

function _alertUpdate() {
  var el = document.getElementById('alert-demo-preview');
  if (el) el.innerHTML = _alertRender(_alertRead());
}

/* ── Spec card state ─────────────────────────────────────────────── */
var _specCards = {
  default: { type: 'information', style: 'card', content: 'default' }
};
window._specCards = _specCards;

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
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'type', _specCards[k].type);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _alertInit);
  else _alertInit();
  document.addEventListener('astro:page-load', _alertInit);
})();
