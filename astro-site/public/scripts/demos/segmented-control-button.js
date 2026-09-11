/* Segmented Control Button — Style tab demo.
 * Rebuilt from Figma component set 26628:50752 (GCash DS Sticker Sheets v2).
 * Every colour and dimension is read off get_node_info / get_svg /
 * export_node_as_image on the matching variant.
 *
 * Panel (from the variant names — the property panel was not supplied,
 * so any boolean, text or instance-swap property is unverified):
 *   State    · Default, Pressed, Disabled
 *   isActive · true, false
 *
 * 3 State × 2 isActive = 6 variants, all built. Nothing to constrain.
 */

/* ── Geometry, as the set reports it ─────────────────────────────────
   The thirds are what Figma returns for the set's own variants; the same
   button measures a clean 156 × 40 once it is instantiated in a 312-wide
   Segmented Control. The divider is an OUTSIDE stroke on the right edge,
   so the drawing box is 1 wider than the component. */
var SCB_W = 90.6667;
var SCB_H = 40.3333;
var SCB_DIVIDER = 1;                       /* weight not readable — see the Layout section */
var SCB_BOX_W = SCB_W + SCB_DIVIDER;

/* ── Colours, keyed "state|isActive" ─────────────────────────────────
   Active variants are a solid fill with a white label and no divider.
   Inactive variants have no fill (bar Pressed) and carry a right-edge
   divider in the state's own colour. */
var SCB_COLOR = {
  'default|true':   { fill: '#005CE5',           divider: null,      label: '#FFFFFF' },
  'pressed|true':   { fill: '#2340A9',           divider: null,      label: '#FFFFFF' },
  'disabled|true':  { fill: '#9BC5FD',           divider: null,      label: '#FFFFFF' },
  'default|false':  { fill: null,                divider: '#005CE5', label: '#005CE5' },
  'pressed|false':  { fill: '#F6F9FD',           divider: '#005CE5', label: '#2340A9', fillOpacity: 0.72 },
  'disabled|false': { fill: null,                divider: '#9BC5FD', label: '#9BC5FD' }
};

/* ── Renderer ───────────────────────────────────────────────────────── */
function _scbRender(card, scale) {
  scale = scale || 1;
  var col = SCB_COLOR[card.state + '|' + card.isActive] || SCB_COLOR['default|true'];

  var out = '<svg width="' + (SCB_BOX_W * scale) + '" height="' + (SCB_H * scale) +
            '" viewBox="0 0 ' + SCB_BOX_W + ' ' + SCB_H +
            '" fill="none" xmlns="http://www.w3.org/2000/svg">';

  if (col.fill) {
    out += '<rect width="' + SCB_W + '" height="' + SCB_H + '" fill="' + col.fill + '"' +
           (col.fillOpacity ? ' fill-opacity="' + col.fillOpacity + '"' : '') + '/>';
  }
  if (col.divider) {
    out += '<rect x="' + SCB_W + '" width="' + SCB_DIVIDER + '" height="' + SCB_H +
           '" fill="' + col.divider + '"/>';
  }
  out += '<text class="scb-label" x="' + (SCB_W / 2) + '" y="' + (SCB_H / 2) +
         '" font-size="16" font-weight="700" fill="' + col.label +
         '" text-anchor="middle" dominant-baseline="central">Label</text>';

  return out + '</svg>';
}

/* ── Per-card state ─────────────────────────────────────────────────── */
var _specCards = {
  main: { state: 'default', isActive: 'true' }
};
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
/* The button is never used on its own — the row composes N of them — so the
   snippet shows how the row drives it, not a standalone constructor call. */
function buildSwiftSnippet(cardStyle, card) {
  var lines = ['// Composed by EBSegmentedControl — one per segment.'];
  lines.push('EBSegmentedControl(segments: ["Label", "Label"], selectedIndex: $selected)');
  if (card.state === 'disabled') lines.push('    .disabled(true)');
  lines.push('');
  lines.push('// This card previews segment index ' + (card.isActive === 'true' ? '== selectedIndex' : '!= selectedIndex'));
  if (card.state === 'pressed') lines.push('// while the press gesture is down.');
  return lines.join('\n');
}

function buildComposeSnippet(cardStyle, card) {
  var lines = ['// Composed by EBSegmentedControl — one per segment.'];
  lines.push('EBSegmentedControl(');
  lines.push('    segments = listOf("Label", "Label"),');
  lines.push('    selectedIndex = selected,');
  lines.push('    enabled = ' + (card.state === 'disabled' ? 'false' : 'true'));
  lines.push(')');
  lines.push('');
  lines.push('// This card previews a segment where selected == ' + card.isActive);
  if (card.state === 'pressed') lines.push('// while interactionSource reports a press.');
  return lines.join('\n');
}

function getSnippet(cardStyle, lang, card) {
  return lang === 'swift'
    ? buildSwiftSnippet(cardStyle, card)
    : buildComposeSnippet(cardStyle, card);
}
window.getSnippet = getSnippet;

/* ── Control handler ────────────────────────────────────────────────── */
var SCB_PREVIEW_SCALE = 2;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  var host = document.getElementById('segmented-control-button-spec-' + cardStyle);
  if (host) host.innerHTML = _scbRender(card, SCB_PREVIEW_SCALE);

  /* Properties readout. Colors / Typography / Layout `variants` are applied
     by the shared patcher in assessment.js — do not rebuild those here. */
  var el = document.querySelector('[data-sp="' + cardStyle + '-state"]');
  if (el) el.textContent = card.state.charAt(0).toUpperCase() + card.state.slice(1);
  el = document.querySelector('[data-sp="' + cardStyle + '-isActive"]');
  if (el) el.textContent = card.isActive;

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
/* The Overview panel is a static read-only listing, not a control set —
   repaint it from the same renderer so it stops using inline-styled spans. */
function updateSCBDemo() {
  var el = document.getElementById('scb-demo-preview');
  if (!el) return;
  el.innerHTML =
    '<span class="scb-demo-row">' +
    _scbRender({ state: 'default', isActive: 'true' }, 2) +
    _scbRender({ state: 'default', isActive: 'false' }, 2) +
    '</span>';
}
window.updateSCBDemo = updateSCBDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _scbInit() {
  updateSCBDemo();
  Object.keys(_specCards).forEach(function (k) {
    var host = document.getElementById('segmented-control-button-spec-' + k);
    if (host) host.innerHTML = _scbRender(_specCards[k], SCB_PREVIEW_SCALE);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _scbInit);
else _scbInit();
document.addEventListener('astro:page-load', _scbInit);
