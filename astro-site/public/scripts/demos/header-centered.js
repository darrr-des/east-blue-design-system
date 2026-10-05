/* Page Banner (slug header-centered) — live preview + spec cards.
 * Set 4368:12839 (2026 Working File): Surface = Brand | Default = 2 variants.
 * Colours and offsets read off 4368:12840 and 4368:12846 (re-verified
 * 2026-09-14) and checked against export_node_as_image.
 *
 * Content 312 × 46 at y 24: Title 26 tall, SubtitleRow 20 tall directly
 * below (Label 36 wide, Value 81 wide, 2 apart, centred as a pair). The
 * frame stroke only shows along the bottom edge in the export.
 */
var PB_W = 360, PB_H = 104;
var PB_TITLE_Y = 24, PB_TITLE_H = 26, PB_SUB_Y = 50, PB_SUB_H = 20;
var PB_LABEL_X = 120.5, PB_VALUE_X = 158.5;
var PB_SURFACE = {
  'brand':   { bg: '#1972F9', border: '#F6F9FD', borderOpacity: 0.24, title: '#FFFFFF', label: '#F6F9FD', labelOpacity: 0.72, value: '#FFFFFF' },
  'default': { bg: '#FFFFFF', border: '#E5EBF4', borderOpacity: 1,    title: '#0A2757', label: '#6780A9', labelOpacity: 1,    value: '#0A2757' }
};

function _pbRender(card, scale) {
  scale = scale || 1;
  var s = PB_SURFACE[card.surface] || PB_SURFACE['brand'];
  var out = '<svg class="eb-preview eb-preview-pb" width="' + (PB_W * scale) + '" height="' + (PB_H * scale) + '" viewBox="0 0 ' + PB_W + ' ' + PB_H + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  out += '<rect width="' + PB_W + '" height="' + PB_H + '" fill="' + s.bg + '"/>';
  out += '<rect y="' + (PB_H - 1) + '" width="' + PB_W + '" height="1" fill="' + s.border + '" fill-opacity="' + s.borderOpacity + '"/>';
  out += '<text class="pb-title" x="' + (PB_W / 2) + '" y="' + (PB_TITLE_Y + PB_TITLE_H / 2) + '" font-size="22" font-weight="700" fill="' + s.title + '" text-anchor="middle" dominant-baseline="central">Label</text>';
  out += '<text class="pb-barkada" x="' + PB_LABEL_X + '" y="' + (PB_SUB_Y + PB_SUB_H / 2) + '" font-size="14" font-weight="600" fill="' + s.label + '" fill-opacity="' + s.labelOpacity + '" dominant-baseline="central">Label:</text>';
  out += '<text class="pb-barkada" x="' + PB_VALUE_X + '" y="' + (PB_SUB_Y + PB_SUB_H / 2) + '" font-size="14" font-weight="600" fill="' + s.value + '" dominant-baseline="central">Add Content</text>';
  return out + '</svg>';
}

/* ── Spec cards — one per Surface value; nothing else to control ────── */
var _specCards = { 'brand': { surface: 'brand' }, 'default': { surface: 'default' } };
window._specCards = _specCards;

function getSnippet(cardKey, lang, card) {
  var v = ((card || _specCards[cardKey] || {}).surface) || 'brand';
  if (lang === 'swift') return 'EBPageBanner(\n    title: "Label",\n    label: "Label:",\n    value: "Add Content"\n)\n    .ebSurface(.' + v + ')';
  return 'EBPageBanner(\n    title = "Label",\n    label = "Label:",\n    value = "Add Content",\n    surface = EBBannerSurface.' + v.charAt(0).toUpperCase() + v.slice(1) + '\n)';
}
window.getSnippet = getSnippet;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('pb-spec-' + cardKey);
  if (host) host.innerHTML = _pbRender(card, 1);
}
window.updateSpecCard = updateSpecCard;

/* ── Overview live preview ─────────────────────────────────────────── */
function _headerCenteredUpdate() {
  var el = document.getElementById('hc-demo-preview');
  if (!el) return;
  var n = document.getElementById('hc-ctrl-surface');
  el.innerHTML = _pbRender({ surface: (n && n.value) || 'brand' }, 1);
}
window._headerCenteredUpdate = _headerCenteredUpdate;

function _pbInit() {
  _headerCenteredUpdate();
  Object.keys(_specCards).forEach(function (k) { updateSpecCard(k, 'surface', _specCards[k].surface); });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _pbInit);
else _pbInit();
document.addEventListener('astro:page-load', _pbInit);
