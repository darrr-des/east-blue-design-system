/* Page Banner — Style tab demo.
 * Rebuilt from Figma component set 4368:12839 (GCash DS 2026 Working File).
 * Colours, offsets and the border are read off get_node_info / get_svg on
 * both variants and confirmed against export_node_as_image.
 *
 * Axes (from the variant names — no property panel was supplied, so a
 * boolean, text or instance-swap property would be invisible here):
 *   Surface · Default, Brand
 *
 * 2 variants, all built.
 */

/* ── Geometry ────────────────────────────────────────────────────────
   Content is 312 × 46 at y=24, so the banner runs 24 above and 34 below
   it — not balanced. Title and SubtitleRow abut; there is no gap. */
var PB_W = 360, PB_H = 104;
var PB_PAD = 24;
var PB_CONTENT_W = 312;
var PB_TITLE_Y = 24, PB_TITLE_H = 26;
var PB_SUB_Y = 50, PB_SUB_H = 20;
/* Measured positions of the two subtitle runs at the sample content. */
var PB_LABEL_X = 120.5, PB_VALUE_X = 158.5;

/* ── Colours, per Surface ───────────────────────────────────────────── */
var PB_SURFACE = {
  'default': {
    bg: '#FFFFFF', border: '#E5EBF4', borderOpacity: 1,
    title: '#0A2757', label: '#6780A9', labelOpacity: 1, value: '#0A2757'
  },
  'brand': {
    bg: '#1972F9', border: '#F6F9FD', borderOpacity: 0.24,
    title: '#FFFFFF', label: '#F6F9FD', labelOpacity: 0.72, value: '#FFFFFF'
  }
};

/* ── Renderer ───────────────────────────────────────────────────────── */
function _pbRender(card, scale) {
  scale = scale || 1;
  var s = PB_SURFACE[card.surface] || PB_SURFACE['default'];

  var out = '<svg width="' + (PB_W * scale) + '" height="' + (PB_H * scale) +
            '" viewBox="0 0 ' + PB_W + ' ' + PB_H +
            '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  out += '<rect width="' + PB_W + '" height="' + PB_H + '" fill="' + s.bg + '"/>';

  /* The stroke is declared on the node but only the bottom edge carries
     weight — Figma exports it as a 1px masked band, not an outline. */
  out += '<rect y="' + (PB_H - 1) + '" width="' + PB_W + '" height="1" fill="' + s.border +
         '" fill-opacity="' + s.borderOpacity + '"/>';

  out += '<text class="pb-title" x="' + (PB_W / 2) + '" y="' + (PB_TITLE_Y + PB_TITLE_H / 2) +
         '" font-size="22" font-weight="700" fill="' + s.title +
         '" text-anchor="middle" dominant-baseline="central">Label</text>';

  out += '<text class="pb-barkada" x="' + PB_LABEL_X + '" y="' + (PB_SUB_Y + PB_SUB_H / 2) +
         '" font-size="14" font-weight="600" fill="' + s.label + '" fill-opacity="' + s.labelOpacity +
         '" dominant-baseline="central">Label:</text>';
  out += '<text class="pb-barkada" x="' + PB_VALUE_X + '" y="' + (PB_SUB_Y + PB_SUB_H / 2) +
         '" font-size="14" font-weight="600" fill="' + s.value +
         '" dominant-baseline="central">Add Content</text>';

  return out + '</svg>';
}

/* ── Per-card state ─────────────────────────────────────────────────── */
var _specCards = {
  main: { surface: 'default' }
};
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, card) {
  return 'EBPageBanner(\n    title: "Label",\n    label: "Label:",\n    value: "Add Content"\n)\n' +
         '    .ebSurface(.' + card.surface + ')';
}
function buildComposeSnippet(cardKey, card) {
  var v = card.surface.charAt(0).toUpperCase() + card.surface.slice(1);
  return 'EBPageBanner(\n    title = "Label",\n    label = "Label:",\n    value = "Add Content",\n' +
         '    surface = EBBannerSurface.' + v + '\n)';
}
function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

/* ── Control handler ────────────────────────────────────────────────── */
var PB_PREVIEW_SCALE = 1;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  var host = document.getElementById('page-banner-spec-' + cardStyle);
  if (host) host.innerHTML = _pbRender(card, PB_PREVIEW_SCALE);

  var el = document.querySelector('[data-sp="' + cardStyle + '-surface"]');
  if (el) el.textContent = card.surface.charAt(0).toUpperCase() + card.surface.slice(1);

  var devView = document.querySelector('[data-view="' + cardStyle + '-dev"]');
  if (devView) {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && /swift/i.test(activeTab.textContent) ? 'swift' : 'compose';
    var codeEl = devView.querySelector('[data-code-content="' + cardStyle + '"]');
    if (codeEl) {
      var code = getSnippet(cardStyle, lang, card);
      codeEl.setAttribute('data-final', code);
      codeEl.setAttribute('data-lang', lang);
      codeEl.textContent = code;
      if (typeof window.highlightSyntax === 'function') window.highlightSyntax(codeEl);
    }
  }
}
window.updateSpecCard = updateSpecCard;

/* ── Overview tab live preview ──────────────────────────────────────── */
function _headerCenteredUpdate() {
  var el = document.getElementById('hc-demo-preview');
  if (el) el.innerHTML = _pbRender({ surface: 'brand' }, 1);
}
window._headerCenteredUpdate = _headerCenteredUpdate;

/* ── First paint ────────────────────────────────────────────────────── */
function _pbInit() {
  _headerCenteredUpdate();
  Object.keys(_specCards).forEach(function (k) {
    var host = document.getElementById('page-banner-spec-' + k);
    if (host) host.innerHTML = _pbRender(_specCards[k], PB_PREVIEW_SCALE);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _pbInit);
else _pbInit();
document.addEventListener('astro:page-load', _pbInit);
