/* Segmented Control — Style tab demo.
 * Rebuilt from Figma component set 26628:50765 (GCash DS Sticker Sheets v2).
 * Every colour and dimension is read off get_node_info on the matching
 * variant and confirmed against export_node_as_image.
 *
 * Axes (from the variant names — the property panel was not supplied, so a
 * boolean, text or instance-swap property would be invisible here):
 *   numberOfTabs · 2, 3, 4
 *
 * 3 variants, all built. The first segment is active in all three; nothing
 * in this set moves the selection, so there is no selection control.
 */

/* ── Geometry ────────────────────────────────────────────────────────
   The control is 312 x 40 at every tab count — the segments divide it
   exactly: 312/2 = 156, 312/3 = 104, 312/4 = 78. Each segment is 16px of
   padding either side of its label. */
var TSC_W = 312;
var TSC_H = 40;
var TSC_RADIUS = 6;
var TSC_STROKE = 1;
var TSC_PAD_X = 16;

/* ── Colours, from the Segmented Control Button atom (26628:50752) ──── */
var TSC_COLOR = {
  activeBg:      '#005CE5',
  activeLabel:   '#FFFFFF',
  restLabel:     '#005CE5',
  divider:       '#005CE5',
  containerLine: '#005CE5'
};

/* ── Renderer ────────────────────────────────────────────────────────
   The active segment is a square rect clipped to the container's radius —
   drawn here as an explicit path with the LEFT corners rounded, so nothing
   depends on a <clipPath> id resolving inside injected markup. Inactive
   segments carry a right-edge divider; the last one's coincides with the
   container border, which is exactly what Figma renders. */
function _tscRender(card, scale) {
  scale = scale || 1;
  var n = parseInt(card.numberOfTabs, 10) || 2;
  var segW = TSC_W / n;
  var r = TSC_RADIUS;

  var out = '<svg width="' + (TSC_W * scale) + '" height="' + (TSC_H * scale) +
            '" viewBox="0 0 ' + TSC_W + ' ' + TSC_H +
            '" fill="none" xmlns="http://www.w3.org/2000/svg">';

  /* segment 1 — active, left corners rounded */
  var seg = 'M' + r + ' 0'
          + 'H' + segW
          + 'V' + TSC_H
          + 'H' + r
          + 'A' + r + ' ' + r + ' 0 0 1 0 ' + (TSC_H - r)
          + 'V' + r
          + 'A' + r + ' ' + r + ' 0 0 1 ' + r + ' 0'
          + 'Z';
  out += '<path d="' + seg + '" fill="' + TSC_COLOR.activeBg + '"/>';

  /* Dividers sit on the right edge of an inactive segment, so they only
     show BETWEEN two inactive segments: boundary 1 is where the active
     fill ends (no line), and the last segment's divider coincides with
     the container border (drawing it doubles the stroke). That leaves
     n-2 lines — none at 2 tabs, one at 3, two at 4 — which is what
     export_node_as_image shows. */
  for (var i = 1; i < n - 1; i++) {
    var x = segW * (i + 1);
    out += '<rect x="' + (x - TSC_STROKE) + '" width="' + TSC_STROKE +
           '" height="' + TSC_H + '" fill="' + TSC_COLOR.divider + '"/>';
  }

  /* container border */
  out += '<rect x="0.5" y="0.5" width="' + (TSC_W - 1) + '" height="' + (TSC_H - 1) +
         '" rx="' + (r - 0.5) + '" stroke="' + TSC_COLOR.containerLine +
         '" stroke-width="' + TSC_STROKE + '"/>';

  /* labels — centred in each segment */
  for (var j = 0; j < n; j++) {
    out += '<text class="tsc-label" x="' + (segW * j + segW / 2) + '" y="' + (TSC_H / 2) +
           '" font-size="16" font-weight="700" fill="' +
           (j === 0 ? TSC_COLOR.activeLabel : TSC_COLOR.restLabel) +
           '" text-anchor="middle" dominant-baseline="central">Label</text>';
  }

  return out + '</svg>';
}

/* ── Per-card state ─────────────────────────────────────────────────── */
var _specCards = {
  main: { numberOfTabs: '2' }
};
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, card) {
  var n = parseInt(card.numberOfTabs, 10) || 2;
  var labels = [];
  for (var i = 0; i < n; i++) labels.push('"Label"');
  return 'EBSegmentedControl(\n' +
         '    segments: [' + labels.join(', ') + '],\n' +
         '    selectedIndex: $selected\n' +
         ')';
}

function buildComposeSnippet(cardKey, card) {
  var n = parseInt(card.numberOfTabs, 10) || 2;
  var labels = [];
  for (var i = 0; i < n; i++) labels.push('"Label"');
  return 'EBSegmentedControl(\n' +
         '    segments = listOf(' + labels.join(', ') + '),\n' +
         '    selectedIndex = selected,\n' +
         '    onSelectionChange = { selected = it }\n' +
         ')';
}

function getSnippet(cardKey, lang, card) {
  return lang === 'swift'
    ? buildSwiftSnippet(cardKey, card)
    : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

/* ── Control handler ────────────────────────────────────────────────── */
var TSC_PREVIEW_SCALE = 1;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  var host = document.getElementById('segmented-control-spec-' + cardStyle);
  if (host) host.innerHTML = _tscRender(card, TSC_PREVIEW_SCALE);

  /* Properties readout. Layout `variants` are applied by the shared patcher
     in assessment.js — this script must not rebuild those sections. */
  var el = document.querySelector('[data-sp="' + cardStyle + '-numberOfTabs"]');
  if (el) el.textContent = card.numberOfTabs;

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
/* The Overview panel still ships a `Selected` control (first / second) that
   the set does not have — the first segment is active in all three variants.
   Draw the Figma component and ignore the retired control. */
function updateToggleSegmentedControlDemo() {
  var el = document.getElementById('tsc-demo-preview');
  if (el) el.innerHTML = _tscRender({ numberOfTabs: '2' }, 1);
}
window.updateToggleSegmentedControlDemo = updateToggleSegmentedControlDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _tscInit() {
  updateToggleSegmentedControlDemo();
  Object.keys(_specCards).forEach(function (k) {
    var host = document.getElementById('segmented-control-spec-' + k);
    if (host) host.innerHTML = _tscRender(_specCards[k], TSC_PREVIEW_SCALE);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _tscInit);
else _tscInit();
document.addEventListener('astro:page-load', _tscInit);
