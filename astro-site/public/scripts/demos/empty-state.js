/* Empty State — Style tab demo.
 * Rebuilt from Figma component set 26356:13970 (Sticker Sheets v2).
 * Offsets and fills read off get_node_info; the slot placeholders from
 * get_svg; checked against export_node_as_image.
 *
 * Panel (set 26356:13970, from the property-panel screenshot):
 *   Style      · Default, Subtle   (variant)
 *   VisualType · Icon, Asset       (variant)
 *   hasButton  · True              (boolean)
 * Slots (no control): ⤷ VisualSlot (4 items) · ⤷ ActionSlot (4 items)
 *
 * 2 x 2 = 4 variants, all built. The frame hugs its stack, which the
 * measured heights confirm exactly:
 *   Icon  — 48 + VisualSlot 64 + Header 97 + ActionSlot 50 + 48 = 307
 *   Asset — 24 + VisualSlot 230 + Header 97 + ActionSlot 50 + 24 = 425
 * so hasButton=False removes the 50px ActionSlot.
 */

var ES_W = 360;
var ES_BG = { 'default': '#FFFFFF', 'subtle': '#F6F9FD' };
var ES_NODES = {
  'default|icon': '26356:13971', 'subtle|icon': '26356:13979',
  'default|asset': '26356:13987', 'subtle|asset': '26356:13995'
};
var ES_SLOT = '#9F3DFB';
var ES_ARROW = 'M29.4922 27.3926C31.6016 27.3926 32.6562 28.2422 32.6562 30.3691V33.1934L32.6152 34.418L33.4297 33.5039L34.7539 32.1738C34.8535 32.0742 34.9941 32.0098 35.1523 32.0098C35.457 32.0098 35.6855 32.2441 35.6855 32.5605C35.6855 32.7012 35.6328 32.8359 35.5156 32.959L32.5156 35.9707C32.4043 36.0879 32.252 36.1523 32.0996 36.1523C31.9473 36.1523 31.7949 36.0879 31.6836 35.9707L28.6836 32.959C28.5664 32.8359 28.5078 32.7012 28.5078 32.5605C28.5078 32.2441 28.7363 32.0098 29.0469 32.0098C29.1992 32.0098 29.3398 32.0742 29.4395 32.1738L30.7695 33.5039L31.584 34.4238L31.5371 33.1934L31.543 30.4395C31.5488 28.9629 30.9043 28.4941 29.4629 28.4941C29.2227 28.4941 29.0527 28.5117 28.8594 28.5117C28.5371 28.5117 28.3086 28.3066 28.3086 27.9785C28.3086 27.6445 28.5605 27.4805 28.8066 27.4395C29 27.4043 29.2285 27.3926 29.4922 27.3926Z';

/* Stack geometry per VisualType. */
var ES_GEO = {
  icon:  { pad: 48, vx: 148, vw: 64,  vh: 64,  vr: 4 },
  asset: { pad: 24, vx: 0,   vw: 360, vh: 230, vr: 0 }
};
var ES_HEADER_H = 97, ES_ACTION_H = 50;

function _esOn(v, def) { return v == null ? def : v === 'true'; }
function _esHeight(c) {
  var g = ES_GEO[c.visualtype] || ES_GEO.icon;
  return g.pad + g.vh + ES_HEADER_H + (_esOn(c.hasbutton, true) ? ES_ACTION_H : 0) + g.pad;
}

function _esRender(c) {
  c = c || {};
  var style = c.style || 'default', type = c.visualtype || 'icon';
  var g = ES_GEO[type], H = _esHeight(c), btn = _esOn(c.hasbutton, true);
  var s = '<svg width="' + ES_W + '" height="' + H + '" viewBox="0 0 ' + ES_W + ' ' + H + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<rect width="' + ES_W + '" height="' + H + '" fill="' + ES_BG[style] + '"/>';

  /* ⤷ VisualSlot — ships a Slot Block placeholder: 9% fill, 4/4 dash. */
  var vy = g.pad, rx = g.vr ? g.vr - 0.5 : 0;
  s += '<rect x="' + (g.vx + 0.5) + '" y="' + (vy + 0.5) + '" width="' + (g.vw - 1) + '" height="' + (g.vh - 1) +
       '" rx="' + rx + '" fill="' + ES_SLOT + '" fill-opacity="0.09"/>';
  s += '<rect x="' + (g.vx + 0.5) + '" y="' + (vy + 0.5) + '" width="' + (g.vw - 1) + '" height="' + (g.vh - 1) +
       '" rx="' + rx + '" stroke="' + ES_SLOT + '" stroke-dasharray="4 4"/>';
  if (type === 'icon') {
    s += '<g transform="translate(' + g.vx + ' ' + vy + ')"><path d="' + ES_ARROW + '" fill="' + ES_SLOT + '"/></g>';
  } else {
    s += '<text class="es-slot" x="180" y="' + (vy + g.vh / 2 - 6) + '" font-size="12" font-weight="700" fill="' + ES_SLOT +
         '" text-anchor="middle" dominant-baseline="central">Insert Asset here</text>';
    s += '<text class="es-desc" x="180" y="' + (vy + g.vh / 2 + 10) + '" font-size="8" font-weight="500" fill="' + ES_SLOT +
         '" fill-opacity="0.62" text-anchor="middle" dominant-baseline="central">Remove this placeholder when you insert custom content.</text>';
  }

  /* Header — 24px inset, heading 23 tall, 8px, description 18 tall */
  var hy = vy + g.vh;
  s += '<text class="es-heading" x="180" y="' + (hy + 24 + 11.5) + '" font-size="18" font-weight="700" fill="#0A2757"' +
       ' text-anchor="middle" dominant-baseline="central">Header</text>';
  s += '<text class="es-desc" x="180" y="' + (hy + 55 + 9) + '" font-size="12" font-weight="600" fill="#6780A9"' +
       ' text-anchor="middle" dominant-baseline="central">Description goes here</text>';

  /* ⤷ ActionSlot — Button - Large/Medium, 312 × 50 at x 24 */
  if (btn) {
    var ay = hy + ES_HEADER_H;
    s += '<rect x="24" y="' + ay + '" width="312" height="50" rx="25" fill="#005CE5"/>';
    s += '<text class="es-heading" x="180" y="' + (ay + 25) + '" font-size="18" font-weight="700" fill="#FFFFFF"' +
         ' text-anchor="middle" dominant-baseline="central">Label</text>';
  }
  return s + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = { main: { style: 'default', visualtype: 'icon', hasbutton: 'true' } };
window._specCards = _specCards;
function _esCap(v) { return v.charAt(0).toUpperCase() + v.slice(1); }

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, c) {
  var l = ['EBEmptyState(', '    heading: "Header",', '    description: "Description goes here",',
           '    style: .' + c.style, ')', '.ebVisual(.' + c.visualtype + ') { Image("empty") }'];
  if (_esOn(c.hasbutton, true)) l.push('.ebAction("Label") { retry() }');
  return l.join('\n');
}
function buildComposeSnippet(cardKey, c) {
  var l = ['EBEmptyState(', '    heading = "Header",', '    description = "Description goes here",',
           '    style = EBEmptyStateStyle.' + _esCap(c.style) + ',',
           '    visualType = EBEmptyStateVisual.' + _esCap(c.visualtype) + ',',
           '    visual = { Image(painterResource(R.drawable.empty), null) },'];
  if (_esOn(c.hasbutton, true)) { l.push('    actionLabel = "Label",'); l.push('    onAction = { retry() },'); }
  l[l.length - 1] = l[l.length - 1].replace(/,$/, '');
  l.push(')');
  return l.join('\n');
}
function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

/* ── Control handler ────────────────────────────────────────────────── */
function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  var host = document.getElementById('empty-state-spec-' + cardStyle);
  if (host) host.innerHTML = _esRender(card);

  ['style', 'visualtype', 'hasbutton'].forEach(function (a) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + a + '"]');
    if (el) el.textContent = a === 'hasbutton' ? (card[a] === 'true' ? 'True' : 'False') : _esCap(card[a]);
  });
  var size = ES_W + ' × ' + _esHeight(card);
  var sizeEl = document.querySelector('[data-sp="' + cardStyle + '-size-readout"]');
  if (sizeEl) sizeEl.textContent = size;
  var nodeEl = document.querySelector('[data-sp="' + cardStyle + '-variantNode"]');
  if (nodeEl) nodeEl.textContent = ES_NODES[card.style + '|' + card.visualtype] + ' · ' + size;

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

/* ── Overview tab shim — the old panel had colour / icon / asset / button. */
function updateEmptyStateDemo() {
  var el = document.getElementById('es-demo-preview');
  if (!el) return;
  var v = function (id) { var n = document.getElementById(id); return n ? n.value : null; };
  var colour = v('es-demo-color');
  el.innerHTML = _esRender({
    style: colour && /grey|subtle/i.test(colour) ? 'subtle' : 'default',
    visualtype: v('es-demo-asset') === 'yes' ? 'asset' : 'icon',
    hasbutton: v('es-demo-button') === 'no' ? 'false' : 'true'
  });
}
window.updateEmptyStateDemo = updateEmptyStateDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _esInit() {
  updateEmptyStateDemo();
  Object.keys(_specCards).forEach(function (k) {
    var host = document.getElementById('empty-state-spec-' + k);
    if (host) host.innerHTML = _esRender(_specCards[k]);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _esInit);
else _esInit();
document.addEventListener('astro:page-load', _esInit);
