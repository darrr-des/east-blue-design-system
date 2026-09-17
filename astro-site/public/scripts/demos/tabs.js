/* Tabs — Style tab demo.
 * Rebuilt from Figma component set 26327:11046 (Sticker Sheets v2).
 * Sizes read off get_node_info on all 12 variants; what draws checked
 * against export_node_as_image.
 *
 * Panel (set 26327:11046, from the property-panel screenshot):
 *   Orientation · Vertical, Horizontal
 *   Size        · Medium, Large
 *   Tabs Count  · 4, 3, 2
 *
 * 2 x 2 x 3 = 12 variants, all built. There is no active-tab property:
 * the first Tab Item is the selected one in every variant.
 *
 * In Figma each cell is a Tab Item at its hug width, laid flush with no
 * gap, so the group narrows with the count — 4 x 97 = 388, 3 x 97 = 291,
 * 2 x 102 = 204.
 *
 * PREVIEW DEVIATION (asked for): the card draws every count at the 4-tab
 * width and shares it between the cells, so the group stays the same size
 * while the count changes. Figma's own widths are what the Layout rows and
 * the Variants inventory report.
 */

var TBS_ITEM_W = { 'vertical|medium': 65, 'vertical|large': 70, 'horizontal|medium': 97, 'horizontal|large': 102 };
var TBS_H = { 'vertical|medium': 92, 'vertical|large': 92, 'horizontal|medium': 48, 'horizontal|large': 50 };

var TBS_NODES = {
  'vertical|medium|4': '26327:11047', 'vertical|large|4': '26327:11052',
  'horizontal|large|4': '26327:11057', 'horizontal|medium|4': '26327:11062',
  'vertical|medium|3': '26327:11067', 'vertical|large|3': '26327:11071',
  'horizontal|large|3': '26327:11075', 'horizontal|medium|3': '26327:11079',
  'vertical|medium|2': '26327:11083', 'vertical|large|2': '26327:11086',
  'horizontal|large|2': '26327:11089', 'horizontal|medium|2': '26327:11092'
};

/* Tab Item colours — selected is the first cell, the rest are unselected. */
var TBS_SELECTED = { label: '#005CE5', rule: '#005CE5' };
var TBS_REST = { label: '#6780A9', rule: '#E5EBF4' };

function _tbsKey(card) { return card.orientation + '|' + card.size + '|' + card.count; }
function _tbsNode(card) { return TBS_NODES[_tbsKey(card)]; }
function _tbsItemW(card) { return TBS_ITEM_W[card.orientation + '|' + card.size]; }
function _tbsHeight(card) { return TBS_H[card.orientation + '|' + card.size]; }
function _tbsWidth(card) { return _tbsItemW(card) * Number(card.count); }
/* Preview only — the 4-tab width, shared between however many cells. */
function _tbsBaseW(card) { return _tbsItemW(card) * 4; }
function _tbsCellW(card) { return _tbsBaseW(card) / Number(card.count); }

/* One Tab Item cell, drawn at its measured geometry: 12 padding, an 8 gap,
   a 24 (horizontal) or 32 (vertical) Icon Slot that ships empty, the label
   and a 2px underline. */
function _tbsCell(card, x, selected) {
  var vert = card.orientation === 'vertical', med = card.size === 'medium';
  var w = _tbsCellW(card), h = _tbsHeight(card);
  var c = selected ? TBS_SELECTED : TBS_REST;
  var labelW = med ? 41 : 46, fs = med ? 16 : 18, iconS = vert ? 32 : 24;
  /* Content is centred in the shared cell; in Figma it is packed to the
     12px leading edge of a hug-width cell. */
  var contentW = vert ? Math.max(iconS, labelW) : iconS + 8 + labelW;
  var left = x + (w - contentW) / 2;
  var labelX = vert ? left + (contentW - labelW) / 2 : left + iconS + 8;
  var labelCy = vert ? (12 + iconS + 12 + (med ? 12 : 13)) : h / 2;
  var iconX = vert ? left + (contentW - iconS) / 2 : left;
  var iconY = vert ? 12 : (h - iconS) / 2;

  var s = '<rect x="' + (iconX + 0.5) + '" y="' + (iconY + 0.5) + '" width="' + (iconS - 1) + '" height="' + (iconS - 1) +
          '" rx="' + (iconS / 2) + '" stroke="#C2CFE5" stroke-dasharray="3 2"/>';
  s += '<text class="ti-label" x="' + (labelX + labelW / 2) + '" y="' + labelCy + '" font-size="' + fs +
       '" font-weight="700" fill="' + c.label + '" text-anchor="middle" dominant-baseline="central">Label</text>';
  s += '<rect x="' + x + '" y="' + (h - 2) + '" width="' + w + '" height="2" fill="' + c.rule + '"/>';
  return s;
}

function _tbsRender(card) {
  var n = Number(card.count), w = _tbsBaseW(card), h = _tbsHeight(card), iw = _tbsCellW(card);
  var s = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<rect width="' + w + '" height="' + h + '" fill="#FFFFFF"/>';
  for (var i = 0; i < n; i++) s += _tbsCell(card, i * iw, i === 0);
  return s + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = {
  main: { orientation: 'vertical', size: 'medium', count: '4' }
};
window._specCards = _specCards;
var TBS_AXES = ['orientation', 'size', 'count'];
function _tbsCap(v) { return v.charAt(0).toUpperCase() + v.slice(1); }

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, c) {
  return 'EBTabs(selection: $tab) {\n' +
    Array.apply(null, Array(Number(c.count))).map(function (_, i) {
      return '    EBTabItem("Label").tag(' + i + ')';
    }).join('\n') +
    '\n}\n    .ebOrientation(.' + c.orientation + ')\n    .ebControlSize(.' + c.size + ')';
}
function buildComposeSnippet(cardKey, c) {
  return 'EBTabs(\n' +
    '    selectedIndex = selected,\n' +
    '    labels = listOf(' + Array.apply(null, Array(Number(c.count))).map(function () { return '"Label"'; }).join(', ') + '),\n' +
    '    orientation = EBTabOrientation.' + _tbsCap(c.orientation) + ',\n' +
    '    size = EBTabSize.' + _tbsCap(c.size) + ',\n' +
    '    onSelect = { selected = it }\n)';
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

  var host = document.getElementById('tabs-spec-' + cardStyle);
  if (host) host.innerHTML = _tbsRender(card);

  TBS_AXES.forEach(function (a) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + a + '"]');
    if (el) el.textContent = a === 'count' ? card[a] : _tbsCap(card[a]);
  });
  var sizeEl = document.querySelector('[data-sp="' + cardStyle + '-size-readout"]');
  if (sizeEl) sizeEl.textContent = _tbsWidth(card) + ' × ' + _tbsHeight(card);
  var itemEl = document.querySelector('[data-sp="' + cardStyle + '-item-readout"]');
  if (itemEl) itemEl.textContent = _tbsItemW(card) + ' × ' + _tbsHeight(card) + ' each, flush';
  var prevEl = document.querySelector('[data-sp="' + cardStyle + '-preview-readout"]');
  if (prevEl) prevEl.textContent = 'Drawn at the 4-tab width, ' + _tbsBaseW(card) + ' — ' + (Math.round(_tbsCellW(card) * 100) / 100) + ' per cell';
  var nodeEl = document.querySelector('[data-sp="' + cardStyle + '-variantNode"]');
  if (nodeEl) nodeEl.textContent = _tbsNode(card) + ' · ' + _tbsWidth(card) + ' × ' + _tbsHeight(card);

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

/* ── Overview tab shim ───────────────────────────────────────────────
   The Overview still carries the retired count / active-tab panel; Figma
   has no active-tab property, so the first cell is always the selected
   one and the control only changes the count. */
function updateTabsDemo() {
  var el = document.getElementById('tabs-demo-preview');
  if (!el) return;
  var count = document.getElementById('tabs-demo-count');
  el.innerHTML = _tbsRender({ orientation: 'horizontal', size: 'medium', count: count ? count.value : '4' });
}
window.updateTabsDemo = updateTabsDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _tbsInit() {
  updateTabsDemo();
  ['2', '3', '4'].forEach(function (n) {
    var host = document.getElementById('tabs-preview-tabs-' + n);
    if (host) host.innerHTML = _tbsRender({ orientation: 'horizontal', size: 'medium', count: n });
  });
  Object.keys(_specCards).forEach(function (k) {
    var host = document.getElementById('tabs-spec-' + k);
    if (host) host.innerHTML = _tbsRender(_specCards[k]);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _tbsInit);
else _tbsInit();
document.addEventListener('astro:page-load', _tbsInit);
