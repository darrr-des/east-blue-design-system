/* Detail Hero — Style tab demo.
 * Rebuilt from Figma component set 4368:12856 (GCash DS 2026 Working File).
 * Offsets and colours are read off get_node_info on both variants and
 * confirmed against export_node_as_image.
 *
 * Axes (from the variant names — no property panel was supplied, so a
 * boolean, text or instance-swap property would be invisible here):
 *   Surface · Default, Brand
 *
 * 2 variants, all built. Geometry is identical between them; only colour
 * changes.
 */

/* ── Geometry — one fixed stack, measured top to bottom ──────────────
   24 · avatar 32 · 8 · title 26 · 12 · separator · 16 · sender 32 ·
   8 · description 36 · 24  =  218. The gaps are `_space_*` spacer
   INSTANCES, not auto-layout gaps — see the note in the Style tab. */
var DH_W = 360, DH_H = 218;
var DH_PAD = 24;
var DH_CONTENT_W = 312;
var DH_AVATAR = 32;
var DH_Y = {
  avatar: 24,
  title: 64,          /* 24 + 32 + 8 */
  separator: 102,     /* 64 + 26 + 12 */
  label: 118,         /* 102 + 16 */
  value: 136,         /* label + 18 */
  description: 158    /* 118 + 32 + 8 */
};
var DH_TITLE_H = 26, DH_LINE_H = 14, DH_DESC_LEAD = 18;

/* ── Colours, per Surface ────────────────────────────────────────────
   The avatar placeholder is #C2CFE5 on both — it does not adapt to the
   brand surface. */
var DH_SURFACE = {
  'default': {
    bg: '#FFFFFF', title: '#0A2757', separator: '#E5EBF4',
    label: '#6780A9', value: '#0A2757', description: '#6780A9',
    separatorOpacity: 1, labelOpacity: 1, descriptionOpacity: 1
  },
  'brand': {
    bg: '#1972F9', title: '#FFFFFF', separator: '#F6F9FD',
    label: '#F6F9FD', value: '#FFFFFF', description: '#F6F9FD',
    separatorOpacity: 0.24, labelOpacity: 0.72, descriptionOpacity: 0.72
  }
};
var DH_AVATAR_FILL = '#C2CFE5';

/* ── Renderer ───────────────────────────────────────────────────────── */
function _dhRender(card, scale) {
  scale = scale || 1;
  var s = DH_SURFACE[card.surface] || DH_SURFACE['default'];
  var x = DH_PAD;

  var out = '<svg width="' + (DH_W * scale) + '" height="' + (DH_H * scale) +
            '" viewBox="0 0 ' + DH_W + ' ' + DH_H +
            '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  out += '<rect width="' + DH_W + '" height="' + DH_H + '" fill="' + s.bg + '"/>';

  /* Placeholder — an icon slot, not a spec of this component. */
  out += '<rect x="' + x + '" y="' + DH_Y.avatar + '" width="' + DH_AVATAR + '" height="' + DH_AVATAR +
         '" rx="' + (DH_AVATAR / 2) + '" fill="' + DH_AVATAR_FILL + '"/>';

  out += '<text class="dh-title" x="' + x + '" y="' + (DH_Y.title + DH_TITLE_H / 2) +
         '" font-size="22" font-weight="700" fill="' + s.title +
         '" dominant-baseline="central">Add Label Here</text>';

  out += '<line x1="' + x + '" y1="' + DH_Y.separator + '" x2="' + (x + DH_CONTENT_W) + '" y2="' + DH_Y.separator +
         '" stroke="' + s.separator + '" stroke-opacity="' + s.separatorOpacity + '" stroke-width="1"/>';

  out += '<text class="dh-proxima" x="' + x + '" y="' + (DH_Y.label + DH_LINE_H / 2) +
         '" font-size="14" font-weight="600" fill="' + s.label + '" fill-opacity="' + s.labelOpacity +
         '" dominant-baseline="central">label:</text>';
  out += '<text class="dh-proxima" x="' + x + '" y="' + (DH_Y.value + DH_LINE_H / 2) +
         '" font-size="14" font-weight="700" fill="' + s.value +
         '" dominant-baseline="central">add text here</text>';

  ['Add description here.', 'Add description here.'].forEach(function (line, i) {
    out += '<text class="dh-barkada" x="' + x + '" y="' + (DH_Y.description + DH_DESC_LEAD * i + DH_DESC_LEAD / 2) +
           '" font-size="12" font-weight="600" fill="' + s.description + '" fill-opacity="' + s.descriptionOpacity +
           '" dominant-baseline="central">' + line + '</text>';
  });

  return out + '</svg>';
}

/* ── Per-card state ─────────────────────────────────────────────────── */
var _specCards = {
  main: { surface: 'default' }
};
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, card) {
  return 'EBDetailHero(\n' +
    '    title: "Add Label Here",\n' +
    '    label: "label:",\n' +
    '    value: "add text here",\n' +
    '    description: "Add description here."\n)\n' +
    '    .ebSurface(.' + card.surface + ')';
}
function buildComposeSnippet(cardKey, card) {
  var v = card.surface.charAt(0).toUpperCase() + card.surface.slice(1);
  return 'EBDetailHero(\n' +
    '    title = "Add Label Here",\n' +
    '    label = "label:",\n' +
    '    value = "add text here",\n' +
    '    description = "Add description here.",\n' +
    '    surface = EBHeroSurface.' + v + '\n)';
}
function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

/* ── Control handler ────────────────────────────────────────────────── */
var DH_PREVIEW_SCALE = 1;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  var host = document.getElementById('detail-hero-spec-' + cardStyle);
  if (host) host.innerHTML = _dhRender(card, DH_PREVIEW_SCALE);

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
/* The Overview panel still ships an `email` control that the set does not
   have. Draw the Figma component and ignore it. */
function _headerTransactionUpdate() {
  var el = document.getElementById('ht-demo-preview');
  if (el) el.innerHTML = _dhRender({ surface: 'brand' }, 1);
}
window._headerTransactionUpdate = _headerTransactionUpdate;

/* ── First paint ────────────────────────────────────────────────────── */
function _dhInit() {
  _headerTransactionUpdate();
  Object.keys(_specCards).forEach(function (k) {
    var host = document.getElementById('detail-hero-spec-' + k);
    if (host) host.innerHTML = _dhRender(_specCards[k], DH_PREVIEW_SCALE);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _dhInit);
else _dhInit();
document.addEventListener('astro:page-load', _dhInit);
