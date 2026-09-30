/* Avatar Group — Style tab demo.
 * Rebuilt from Figma component set 18276:4554 (GCash DS Sticker Sheets v2),
 * named Avatar Group_New. Offsets and fills read off get_node_info; the
 * avatars' ring widths come from get_svg on the Avatar set.
 *
 * Panel (set 18276:4554, from the property-panel screenshot):
 *   layout · pair, overflow, quad, trio   (variant)
 * 4 variants, all built. Every one is 48 x 48.
 *
 *   pair     two 32 avatars — dark at (0, 0), light at (16, 16), overlapping
 *   trio     three 24 — dark (12, 0), dark (0, 24), light (24, 24)
 *   quad     four 24 on a 2 x 2 grid — dark on top, light beneath
 *   overflow the quad with the last tile as the "+5" counter
 *
 * Each tile is an Avatar_New instance, so it carries that component's
 * #E5EBF4 ring: 2 at 32, 1.5 at 24.
 */

var AVG_DARK = '#005CE5', AVG_LIGHT = '#F6F9FD';
var AVG_DARK_TEXT = '#FFFFFF', AVG_LIGHT_TEXT = '#2340A9';
var AVG_RING = '#E5EBF4';
var AVG_NODES = { pair: '18276:4555', trio: '18276:4558', quad: '18276:4562', overflow: '18276:4585' };

/* size → [font-size, tracking, ring width] — from the Avatar set. */
var AVG_TILE = { 32: [14, 0.25, 2], 24: [12, 0.5, 1.5] };

/* layout → [size, [x, y, tone, label], …] */
var AVG_LAYOUT = {
  pair:     [32, [[0, 0, 'dark', 'DM'], [16, 16, 'light', 'LM']]],
  trio:     [24, [[12, 0, 'dark', 'DM'], [0, 24, 'dark', 'DM'], [24, 24, 'light', 'LM']]],
  quad:     [24, [[0, 0, 'dark', 'DM'], [24, 0, 'dark', 'DM'], [0, 24, 'light', 'LM'], [24, 24, 'light', 'LM']]],
  overflow: [24, [[0, 0, 'dark', 'DM'], [24, 0, 'dark', 'DM'], [0, 24, 'light', 'LM'], [24, 24, 'light', '+5']]]
};

function _avgTile(x, y, d, tone, label) {
  var m = AVG_TILE[d], w = m[2], r = d / 2;
  var s = '<circle cx="' + (x + r) + '" cy="' + (y + r) + '" r="' + (r - w / 2) + '" fill="' +
          (tone === 'dark' ? AVG_DARK : AVG_LIGHT) + '" stroke="' + AVG_RING + '" stroke-width="' + w + '"/>';
  s += '<text class="avg-initials" x="' + (x + r) + '" y="' + (y + r) + '" font-size="' + m[0] + '" font-weight="700" fill="' +
       (tone === 'dark' ? AVG_DARK_TEXT : AVG_LIGHT_TEXT) + '" letter-spacing="' + m[1] +
       '" text-anchor="middle" dominant-baseline="central">' + label + '</text>';
  return s;
}

function _avgRender(c) {
  var spec = AVG_LAYOUT[c.layout] || AVG_LAYOUT['pair'];
  var d = spec[0], tiles = spec[1];
  var s = '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">';
  tiles.forEach(function (t) { s += _avgTile(t[0], t[1], d, t[2], t[3]); });
  return s + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = { main: { layout: 'pair' } };
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, c) {
  if (c.layout === 'overflow') {
    return ['EBAvatarGroup(', '    avatars: people.prefix(3),', '    overflow: people.count - 3,',
      '    layout: .overflow', ')'].join('\n');
  }
  var n = { pair: 2, trio: 3, quad: 4 }[c.layout] || 2;
  return ['EBAvatarGroup(', '    avatars: people.prefix(' + n + '),', '    layout: .' + c.layout, ')'].join('\n');
}
function buildComposeSnippet(cardKey, c) {
  if (c.layout === 'overflow') {
    return ['EBAvatarGroup(', '    avatars = people.take(3),', '    overflow = people.size - 3,',
      '    layout = EBAvatarGroupLayout.Overflow', ')'].join('\n');
  }
  var n = { pair: 2, trio: 3, quad: 4 }[c.layout] || 2;
  var name = c.layout.charAt(0).toUpperCase() + c.layout.slice(1);
  return ['EBAvatarGroup(', '    avatars = people.take(' + n + '),',
    '    layout = EBAvatarGroupLayout.' + name, ')'].join('\n');
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

  var host = document.getElementById('avatar-group-spec-' + cardStyle);
  if (host) host.innerHTML = _avgRender(card);

  var spec = AVG_LAYOUT[card.layout] || AVG_LAYOUT['pair'];
  var put = function (name, text) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + name + '"]');
    if (el) el.textContent = text;
  };
  put('layout', card.layout);
  put('tile-readout', spec[0] + ' × ' + spec[0]);
  put('count-readout', spec[1].length + (card.layout === 'overflow' ? ' (3 + counter)' : ''));
  put('variantNode', AVG_NODES[card.layout] + ' · 48 × 48');

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

/* ── Overview tab shim — the old panel had avg-demo-count. ─────────── */
function updateAvatarGroupDemo() {
  var el = document.getElementById('avg-demo-preview');
  if (!el) return;
  var n = document.getElementById('avg-demo-count');
  var byCount = { '2': 'pair', '3': 'trio', '4': 'quad', '5': 'overflow' };
  el.innerHTML = _avgRender({ layout: byCount[n ? n.value : '2'] || 'pair' });
}
window.updateAvatarGroupDemo = updateAvatarGroupDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _avgInit() {
  updateAvatarGroupDemo();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'layout', _specCards[k].layout);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _avgInit);
else _avgInit();
document.addEventListener('astro:page-load', _avgInit);
