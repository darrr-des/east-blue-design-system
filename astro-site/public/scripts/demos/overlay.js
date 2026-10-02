/* Overlay — live preview + spec cards.
 * Set 4465:20631 (2026 Working File): Strength = Weak | Default | Strong =
 * 3 variants, each a 360 × 800 `dim` rectangle of #020E22 at 24% / 40% /
 * 56% (read off 4465:20549, 4465:20632, 4465:20634 on 2026-09-14).
 *
 * A scrim is invisible on its own, so the preview draws it over a
 * miniature app surface (.eb-preview-overlay-stage*) — the stage is a
 * preview aid, not part of the component.
 */

function _overlayStageMarkup(opts) {
  var strength = ['weak', 'default', 'strong'].indexOf(opts.strength) !== -1 ? opts.strength : 'default';
  return '<div class="eb-preview eb-preview-overlay-stage">' +
    '<div class="eb-preview-overlay-stage__content">' +
      '<div class="eb-preview-overlay-stage__content-title">Activity</div>' +
      '<div class="eb-preview-overlay-stage__card"></div><div class="eb-preview-overlay-stage__card"></div>' +
      '<div class="eb-preview-overlay-stage__card"></div><div class="eb-preview-overlay-stage__card"></div>' +
    '</div>' +
    '<div class="eb-preview-overlay-stage__dim eb-preview-overlay-stage__dim--' + strength + '"></div>' +
    '<div class="eb-preview-overlay-stage__sheet">' +
      '<div class="eb-preview-overlay-stage__handle"></div>' +
      '<p class="eb-preview-overlay-stage__sheet-title">Send Money</p>' +
      '<p class="eb-preview-overlay-stage__sheet-body">Choose a recipient from your contacts or enter a mobile number.</p>' +
      '<div class="eb-preview-overlay-stage__sheet-btn">Continue</div>' +
    '</div>' +
  '</div>';
}

/* ── Overview live preview ─────────────────────────────────────────── */
function _overlayUpdate() {
  var el = document.getElementById('overlay-demo-preview');
  if (!el) return;
  var n = document.getElementById('overlay-ctrl-strength');
  el.innerHTML = _overlayStageMarkup({ strength: (n && n.value) || 'default' });
}
window._overlayUpdate = _overlayUpdate;

/* ── Spec cards — one per Strength value; nothing else to control ───── */
var _specCards = { 'weak': { strength: 'weak' }, 'default': { strength: 'default' }, 'strong': { strength: 'strong' } };
window._specCards = _specCards;

function getSnippet(cardKey, lang, card) {
  var s = ((card || _specCards[cardKey] || {}).strength) || 'default';
  if (lang === 'swift') return 'EBOverlay(isPresented: $showSheet)\n    .ebStrength(.' + s + ')';
  return 'EBOverlay(\n    visible = showSheet,\n    onDismiss = { },\n    strength = EBOverlayStrength.' + s.charAt(0).toUpperCase() + s.slice(1) + '\n)';
}
window.getSnippet = getSnippet;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('ov-spec-' + cardKey);
  if (host) host.innerHTML = _overlayStageMarkup(card);
}
window.updateSpecCard = updateSpecCard;

function _overlayInit() {
  _overlayUpdate();
  Object.keys(_specCards).forEach(function (k) { updateSpecCard(k, 'strength', _specCards[k].strength); });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _overlayInit);
else _overlayInit();
document.addEventListener('astro:page-load', _overlayInit);
