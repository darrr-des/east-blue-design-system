/* Menu Grid — Style tab demo.
 * Rebuilt from Figma component set 5973:70111 (GCash DS 2026 Working File).
 * Offsets read off get_node_info on the variants; text styles resolved with
 * get_styled_text_segments.
 *
 * Panel (set 5973:70111, from the property-panel screenshot):
 *   Column · 5, 4, 3, 2      (variant)
 *   Row    · 5, 4, 3, 2, 1   (variant)
 * 4 x 5 = 20 variants, all built. The grid holds Service Item instances.
 *
 * Every variant is 336 wide with 8 padding and a 4 gap. The tile width is
 * what is left over: Column=2 158, Column=3 104, Column=4 77. Column=2
 * swaps the Service Item to its Horizontal layout (158 x 64); the others
 * use Vertical (72 tall).
 *
 * Column=5 is the exception the set makes for itself: the tile stays at
 * the Service Item's natural 64 and the row distributes the 16 left over
 * as 6.4 outer padding and 0.8 between tiles, rather than 8 and 4.
 */

var MG_NODES = {"4|4":"5973:70112","4|5":"5973:70129","2|4":"5973:70150","2|5":"5973:70162","2|3":"5973:70177","2|2":"5973:70186","2|1":"5973:70192","3|2":"5973:70195","3|1":"5973:70202","5|4":"5973:70206","4|3":"5973:70227","5|3":"5973:70240","4|2":"5973:70256","5|2":"5973:70265","5|1":"5973:70276","4|1":"5973:70282","5|5":"5973:70287","3|5":"5973:70313","3|4":"5973:70329","3|3":"5973:70342"};
var MG_W = 336, MG_PAD = 8, MG_GAP = 4;
var MG_TEXT = { label: '#072592', desc: '#445C85' };
var MG_ASSET = '#F6F9FD', MG_BORDER = '#D7E0EF';

/* Tile metrics per column count — width, height and the row's padding/gap. */
function _mgMetrics(cols) {
  if (cols === 5) return { w: 64, h: 72, padX: 6.4, gapX: 0.8, horizontal: false };
  if (cols === 2) return { w: (MG_W - MG_PAD * 2 - MG_GAP) / 2, h: 64, padX: MG_PAD, gapX: MG_GAP, horizontal: true };
  var w = (MG_W - MG_PAD * 2 - MG_GAP * (cols - 1)) / cols;
  return { w: w, h: 72, padX: MG_PAD, gapX: MG_GAP, horizontal: false };
}

function _mgSize(cols, rows) {
  var m = _mgMetrics(cols);
  return { w: MG_W, h: MG_PAD * 2 + rows * m.h + (rows - 1) * MG_GAP };
}

/* One Service Item, drawn the way the Service Item card draws it. */
function _mgTile(x, y, m) {
  var s = '';
  if (m.horizontal) {
    s += '<circle cx="' + (x + 44) + '" cy="' + (y + 32) + '" r="24" fill="' + MG_ASSET + '"/>';
    s += '<text class="mg-label" x="' + (x + 76) + '" y="' + (y + 26) + '" font-size="12" font-weight="700" fill="' +
         MG_TEXT.label + '" dominant-baseline="central">Label</text>';
    s += '<text class="mg-desc" x="' + (x + 76) + '" y="' + (y + 42) + '" font-size="10" font-weight="600" fill="' +
         MG_TEXT.desc + '" dominant-baseline="central">Description</text>';
  } else {
    s += '<circle cx="' + (x + m.w / 2) + '" cy="' + (y + 24) + '" r="24" fill="' + MG_ASSET + '"/>';
    s += '<text class="mg-label" x="' + (x + m.w / 2) + '" y="' + (y + 60) + '" font-size="12" font-weight="700" fill="' +
         MG_TEXT.label + '" text-anchor="middle" dominant-baseline="central">Label</text>';
  }
  return s;
}

function _mgRender(c) {
  var cols = parseInt(c.column, 10), rows = parseInt(c.row, 10);
  var m = _mgMetrics(cols), size = _mgSize(cols, rows);
  var s = '<svg width="' + size.w + '" height="' + size.h + '" viewBox="0 0 ' + size.w + ' ' + size.h +
          '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<rect x="0" y="0" width="' + size.w + '" height="' + size.h + '" fill="#FFFFFF"/>';
  for (var r = 0; r < rows; r++) {
    for (var i = 0; i < cols; i++) {
      var x = m.padX + i * (m.w + m.gapX), y = MG_PAD + r * (m.h + MG_GAP);
      s += _mgTile(x, y, m);
    }
  }
  return s + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = { main: { column: '4', row: '4' } };
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, c) {
  return ['EBMenuGrid(columns: ' + c.column + ') {', '    ForEach(services.prefix(' + (c.column * c.row) + ')) { service in',
    '        EBServiceItem(service.label)', '            .ebAsset { Image(service.icon) }', '    }', '}'].join('\n');
}
function buildComposeSnippet(cardKey, c) {
  return ['EBMenuGrid(', '    columns = ' + c.column + ',', '    modifier = Modifier.fillMaxWidth()', ') {',
    '    services.take(' + (c.column * c.row) + ').forEach { service ->', '        EBServiceItem(',
    '            label = service.label,', '            asset = { Image(painterResource(service.icon), null) },',
    '            onClick = { open(service) }', '        )', '    }', '}'].join('\n');
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

  var host = document.getElementById('menu-grid-spec-' + cardStyle);
  if (host) host.innerHTML = _mgRender(card);

  ['column', 'row'].forEach(function (a) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + a + '"]');
    if (el) el.textContent = card[a];
  });
  var cols = parseInt(card.column, 10), rows = parseInt(card.row, 10);
  var m = _mgMetrics(cols), size = _mgSize(cols, rows);
  var put = function (name, text) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + name + '"]');
    if (el) el.textContent = text;
  };
  put('size-readout', size.w + ' × ' + size.h);
  put('tile-readout', m.w + ' × ' + m.h);
  put('count-readout', (cols * rows) + ' tiles');
  put('variantNode', MG_NODES[cols + '|' + rows] + ' · ' + size.w + ' × ' + size.h);

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

/* ── Overview tab shim — the old panel had mg-demo-row / -col selects. ── */
function updateMenuGridDemo() {
  var el = document.getElementById('mg-demo-preview');
  if (!el) return;
  var v = function (id, f) { var n = document.getElementById(id); return n ? n.value : f; };
  el.innerHTML = _mgRender({ column: v('mg-demo-col', '4'), row: v('mg-demo-row', '2') });
}
window.updateMenuGridDemo = updateMenuGridDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _mgInit() {
  updateMenuGridDemo();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'column', _specCards[k].column);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _mgInit);
else _mgInit();
document.addEventListener('astro:page-load', _mgInit);
