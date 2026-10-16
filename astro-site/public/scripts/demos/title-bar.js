/* Title Bar - App — Overview live preview + DEV code.
 * Figma component set 4784:34355 (2026 Working File).
 *
 * Panel:
 *   hasAsset            ◉ boolean · true — the Background image layer
 *   trailingElement     instance swap — no control
 *   hasLeadingIcon · hasTrailingElement · hasSubtext · hasTitleBlock — True/False variant settings
 *
 * All 16 combinations of the four settings are built as variants, so the preview draws the
 * chosen variant straight from its Figma layer data (public/playground/title-bar.json —
 * positions, fills, text, the exported icons and image), the same data the Playground uses.
 */

var _tlbDemo = { hasLeadingIcon: 'False', hasTrailingElement: 'False', hasSubtext: 'False', hasTitleBlock: 'False', hasAsset: true };
window._tlbDemo = _tlbDemo;
var _tlbData = null;

function _tlbRgba(p) {
  var h = p.hex.replace('#', ''), a = p.alpha == null ? 1 : p.alpha;
  return 'rgba(' + parseInt(h.slice(0, 2), 16) + ',' + parseInt(h.slice(2, 4), 16) + ',' + parseInt(h.slice(4, 6), 16) + ',' + a + ')';
}

function _tlbNode(n, D, o) {
  if (n.hidden) return '';
  if (n.visibleProp && /^hasAsset#/.test(n.visibleProp) && !o.hasAsset) return '';
  var st = 'position:absolute;left:' + n.x + 'px;top:' + n.y + 'px;width:' + n.w + 'px;height:' + n.h + 'px;';
  if (n.image && n.img != null) return '<img alt="" src="' + D.images[n.img] + '" style="' + st + 'object-fit:cover;">';
  if (n.graphic && n.svg != null) return '<div style="' + st + '">' + D.svgs[n.svg].replace(/<svg /, '<svg style="display:block;width:100%;height:100%" ') + '</div>';
  if (n.text) {
    var t = n.text, f = n.fills && n.fills[0];
    var justify = t.align === 'CENTER' ? 'center' : t.align === 'RIGHT' ? 'flex-end' : 'flex-start';
    var alignV = t.alignV === 'CENTER' ? 'center' : t.alignV === 'BOTTOM' ? 'flex-end' : 'flex-start';
    return '<div style="' + st + 'display:flex;justify-content:' + justify + ';align-items:' + alignV + ';white-space:nowrap;font-family:\'' + t.family + '\',system-ui;font-weight:' + t.weight +
      ';font-size:' + t.size + 'px;line-height:' + t.lineHeight + 'px;letter-spacing:' + t.letterSpacing + 'px;color:' + (f ? _tlbRgba(f) : '#000') + ';">' + t.chars + '</div>';
  }
  var bg = (n.fills || []).map(_tlbRgba);
  var h = '<div style="' + st + (bg.length ? 'background:' + bg[bg.length - 1] + ';' : '') + (n.clip ? 'overflow:hidden;' : '') + '">';
  (n.children || []).forEach(function (c) { h += _tlbNode(c, D, o); });
  return h + '</div>';
}

function _tlbRender(o) {
  if (!_tlbData) return '';
  var name = 'hasLeadingIcon=' + o.hasLeadingIcon + ', hasTrailingElement=' + o.hasTrailingElement + ', hasSubtext=' + o.hasSubtext + ', hasTitleBlock=' + o.hasTitleBlock;
  var v = _tlbData.variants.filter(function (x) { return x.name === name; })[0];
  if (!v) return '';
  var root = v.tree, fill = (root.fills || [])[0];
  var h = '<div style="position:relative;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;width:' + root.w + 'px;height:' + root.h + 'px;overflow:hidden;' + (fill ? 'background:' + _tlbRgba(fill) + ';' : '') + '">';
  (root.children || []).forEach(function (c) { h += _tlbNode(c, _tlbData, o); });
  return h + '</div>';
}

function updateTitleBarDemo() {
  var g = function (id) { return document.getElementById(id); };
  ['hasLeadingIcon', 'hasTrailingElement', 'hasSubtext', 'hasTitleBlock'].forEach(function (k) { var e = g('tlb-demo-' + k); if (e) _tlbDemo[k] = e.checked ? 'True' : 'False'; });
  var a = g('tlb-demo-hasAsset'); if (a) _tlbDemo.hasAsset = a.checked;
  var el = g('tlb-demo-preview');
  if (!el) return;
  if (_tlbData) { el.innerHTML = _tlbRender(_tlbDemo); return; }
  var src = (g('pg-data') && g('pg-data').getAttribute('data-src')) || '/playground/title-bar.json';
  fetch(src).then(function (r) { return r.json(); }).then(function (d) { _tlbData = d; el.innerHTML = _tlbRender(_tlbDemo); });
}
window.updateTitleBarDemo = updateTitleBarDemo;

/* ── DEV code — component API, as on the Code tab ───────────────────── */
function buildSwiftSnippet(c) {
  var l = ['EBTitleBar("Title")'];
  if (c.hasLeadingIcon === 'True') l.push('    .ebLeadingIcon(Image(systemName: "arrow.left"))');
  if (c.hasSubtext === 'True') l.push('    .ebSubtext("m.gcash.com")');
  if (c.hasTrailingElement === 'True') l.push('    .ebTrailingIcon(Image(systemName: "info.circle"))');
  if (c.hasTitleBlock === 'True') l.push('    .ebTitleBlock("Header")');
  return l.join('\n');
}
function buildComposeSnippet(c) {
  var l = ['EBTitleBar(', '    title = "Title"'];
  if (c.hasLeadingIcon === 'True') l.push('    leadingIcon = { Icon(EBIcons.ArrowLeft, contentDescription = "Back") }');
  if (c.hasSubtext === 'True') l.push('    subtext = "m.gcash.com"');
  if (c.hasTrailingElement === 'True') l.push('    trailingIcon = { Icon(EBIcons.Info, contentDescription = "Info") }');
  if (c.hasTitleBlock === 'True') l.push('    titleBlock = "Header"');
  for (var i = 1; i < l.length - 1; i++) l[i] += ',';
  l.push(')');
  return l.join('\n');
}
function getSnippet(cardKey, lang, card) { card = card || _tlbDemo; return lang === 'swift' ? buildSwiftSnippet(card) : buildComposeSnippet(card); }
window.getSnippet = getSnippet;

function _tlbInit() { updateTitleBarDemo(); }
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _tlbInit);
else _tlbInit();
document.addEventListener('astro:page-load', _tlbInit);
