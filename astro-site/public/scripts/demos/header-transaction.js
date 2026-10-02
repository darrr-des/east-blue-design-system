/* Detail Hero (slug header-transaction) — live preview + spec cards.
 * Set 4368:12856 (2026 Working File): Surface = Brand | Default = 2 variants.
 * Offsets and colours read off get_node_info on 4464:16379 and 4464:13247
 * (re-verified 2026-09-14) and checked against export_node_as_image.
 */

/* ── Geometry — one fixed stack, measured top to bottom ──────────────
   24 · Placeholder 32 · 8 · Title 26 · 12 · separator · 16 · SenderDetails
   32 · 8 · Description 36 · 24 = 218. The gaps are `_space_*` spacer
   INSTANCES, a confirmed convention on this component. */
var DH_W = 360, DH_H = 218;
var DH_PAD = 24;
var DH_CONTENT_W = 312;
var DH_AVATAR = 32;
var DH_Y = { avatar: 24, title: 64, separator: 102, label: 118, value: 136, description: 158 };
var DH_TITLE_H = 26, DH_LINE_H = 14, DH_DESC_LEAD = 18;

/* ── Colours, per Surface — the Placeholder stays #C2CFE5 on both ──── */
var DH_SURFACE = {
  'default': { bg: '#FFFFFF', title: '#0A2757', separator: '#E5EBF4', label: '#6780A9', value: '#0A2757', description: '#6780A9', separatorOpacity: 1, labelOpacity: 1, descriptionOpacity: 1 },
  'brand':   { bg: '#1972F9', title: '#FFFFFF', separator: '#F6F9FD', label: '#F6F9FD', value: '#FFFFFF', description: '#F6F9FD', separatorOpacity: 0.24, labelOpacity: 0.72, descriptionOpacity: 0.72 }
};
var DH_AVATAR_FILL = '#C2CFE5';

function _dhRender(card, scale) {
  scale = scale || 1;
  var s = DH_SURFACE[card.surface] || DH_SURFACE['brand'];
  var x = DH_PAD;
  var out = '<svg class="eb-preview eb-preview-dh" width="' + (DH_W * scale) + '" height="' + (DH_H * scale) + '" viewBox="0 0 ' + DH_W + ' ' + DH_H + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  out += '<rect width="' + DH_W + '" height="' + DH_H + '" fill="' + s.bg + '"/>';
  out += '<rect x="' + x + '" y="' + DH_Y.avatar + '" width="' + DH_AVATAR + '" height="' + DH_AVATAR + '" rx="' + (DH_AVATAR / 2) + '" fill="' + DH_AVATAR_FILL + '"/>';
  out += '<text class="dh-title" x="' + x + '" y="' + (DH_Y.title + DH_TITLE_H / 2) + '" font-size="22" font-weight="700" fill="' + s.title + '" dominant-baseline="central">Add Label Here</text>';
  out += '<line x1="' + x + '" y1="' + DH_Y.separator + '" x2="' + (x + DH_CONTENT_W) + '" y2="' + DH_Y.separator + '" stroke="' + s.separator + '" stroke-opacity="' + s.separatorOpacity + '" stroke-width="1"/>';
  out += '<text class="dh-proxima" x="' + x + '" y="' + (DH_Y.label + DH_LINE_H / 2) + '" font-size="14" font-weight="600" letter-spacing="0.25" fill="' + s.label + '" fill-opacity="' + s.labelOpacity + '" dominant-baseline="central">label:</text>';
  out += '<text class="dh-proxima" x="' + x + '" y="' + (DH_Y.value + DH_LINE_H / 2) + '" font-size="14" font-weight="700" letter-spacing="0.25" fill="' + s.value + '" dominant-baseline="central">add text here</text>';
  ['Add description here.', 'Add description here.'].forEach(function (line, i) {
    out += '<text class="dh-barkada" x="' + x + '" y="' + (DH_Y.description + DH_DESC_LEAD * i + DH_DESC_LEAD / 2) + '" font-size="12" font-weight="600" fill="' + s.description + '" fill-opacity="' + s.descriptionOpacity + '" dominant-baseline="central">' + line + '</text>';
  });
  return out + '</svg>';
}

/* ── Spec cards — one per Surface value; nothing else to control ────── */
var _specCards = { 'brand': { surface: 'brand' }, 'default': { surface: 'default' } };
window._specCards = _specCards;

function getSnippet(cardKey, lang, card) {
  var c = card || _specCards[cardKey] || {};
  var v = c.surface || 'brand';
  if (lang === 'swift') return 'EBDetailHero(\n    title: "Add Label Here",\n    label: "label:",\n    value: "add text here",\n    description: "Add description here."\n)\n    .ebSurface(.' + v + ')';
  return 'EBDetailHero(\n    title = "Add Label Here",\n    label = "label:",\n    value = "add text here",\n    description = "Add description here.",\n    surface = EBHeroSurface.' + v.charAt(0).toUpperCase() + v.slice(1) + '\n)';
}
window.getSnippet = getSnippet;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('dh-spec-' + cardKey);
  if (host) host.innerHTML = _dhRender(card, 1);
}
window.updateSpecCard = updateSpecCard;

/* ── Overview live preview ─────────────────────────────────────────── */
function _headerTransactionUpdate() {
  var el = document.getElementById('ht-demo-preview');
  if (!el) return;
  var n = document.getElementById('ht-ctrl-surface');
  el.innerHTML = _dhRender({ surface: (n && n.value) || 'brand' }, 1);
}
window._headerTransactionUpdate = _headerTransactionUpdate;

function _dhInit() {
  _headerTransactionUpdate();
  Object.keys(_specCards).forEach(function (k) { updateSpecCard(k, 'surface', _specCards[k].surface); });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _dhInit);
else _dhInit();
document.addEventListener('astro:page-load', _dhInit);
