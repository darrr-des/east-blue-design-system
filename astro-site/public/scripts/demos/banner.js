/* Banner — Overview live preview + DEV code.
 * Figma component set 4430:14807 (2026 Working File). Panel:
 *   hasPreamble        ◉ boolean · true — the #preamble line
 *   imagePosition      Right · Left
 *   Action             Button · None · Link
 *   State              Default · Pressed · Disabled
 *   hasLeadingAsset    False · True (variant)
 *   Asset Slot · Leading Asset Slot · Icon Slot   slots — no control
 *
 * The set builds 24 of the variant combinations: hasLeadingAsset=True exists only with
 * Action=None. Picking a combination Figma doesn't build switches Action the way Figma's
 * panel does. The preview draws the chosen variant straight from its Figma layer data
 * (public/playground/banner.json — positions, fills, text, the exported artwork), the same
 * data the Playground uses.
 */

var _bnrDemo = { hasPreamble: true, imagePosition: 'Right', Action: 'Button', State: 'Default', hasLeadingAsset: 'False' };
window._bnrDemo = _bnrDemo;
var _bnrData = null;

function _bnrRgba(p) {
  var h = p.hex.replace('#', ''), a = p.alpha == null ? 1 : p.alpha;
  return 'rgba(' + parseInt(h.slice(0, 2), 16) + ',' + parseInt(h.slice(2, 4), 16) + ',' + parseInt(h.slice(4, 6), 16) + ',' + a + ')';
}

function _bnrNode(n, D, o) {
  if (n.hidden) return '';
  if (n.visibleProp && /^hasPreamble#/.test(n.visibleProp) && !o.hasPreamble) return '';
  var st = 'position:absolute;left:' + n.x + 'px;top:' + n.y + 'px;width:' + n.w + 'px;height:' + n.h + 'px;';
  if (n.opacity != null && n.opacity < 1) st += 'opacity:' + n.opacity + ';';
  if (n.blend) st += 'mix-blend-mode:' + n.blend + ';';
  if (n.image && n.img != null) return '<img alt="" src="' + D.images[n.img] + '" style="' + st + 'object-fit:cover;">';
  if (n.graphic && n.svg != null) return '<div style="' + st + '">' + D.svgs[n.svg].replace(/<svg /, '<svg style="display:block;width:100%;height:100%" ') + '</div>';
  if (n.text) {
    var t = n.text, f = n.fills && n.fills[0];
    return '<div style="' + st + 'white-space:pre-wrap;font-family:\'' + t.family + '\',system-ui;font-weight:' + t.weight +
      ';font-size:' + t.size + 'px;line-height:' + t.lineHeight + 'px;letter-spacing:' + t.letterSpacing + 'px;text-align:' + (t.align || 'LEFT').toLowerCase() +
      ';color:' + (f ? _bnrRgba(f) : '#000') + ';">' + String(t.chars).replace(/[\u2028\u2029]/g, '\n') + '</div>';
  }
  var bg = (n.fills || []).map(_bnrRgba);
  var r = n.radius ? 'border-radius:' + n.radius.map(function (x) { return x + 'px'; }).join(' ') + ';' : '';
  var h = '<div style="' + st + r + (bg.length ? 'background:' + bg[bg.length - 1] + ';' : '') + (n.clip ? 'overflow:hidden;' : '') + '">';
  (n.children || []).forEach(function (c) { h += _bnrNode(c, D, o); });
  return h + '</div>';
}

function _bnrName(o) {
  return 'imagePosition=' + o.imagePosition + ', Action=' + o.Action + ', State=' + o.State + ', hasLeadingAsset=' + o.hasLeadingAsset;
}

/* The variant Figma would land on: the exact combination, or — when the set doesn't build
   it — the same imagePosition / State / hasLeadingAsset with whichever Action exists. */
function _bnrVariant(o) {
  var vs = _bnrData.variants, name = _bnrName(o);
  var v = vs.filter(function (x) { return x.name === name; })[0];
  if (v) return v;
  var tail = ', State=' + o.State + ', hasLeadingAsset=' + o.hasLeadingAsset;
  v = vs.filter(function (x) { return x.name.indexOf('imagePosition=' + o.imagePosition + ',') === 0 && x.name.slice(-tail.length) === tail; })[0];
  if (v) o.Action = /Action=([^,]+)/.exec(v.name)[1];
  return v;
}

function _bnrRender(o) {
  if (!_bnrData) return '';
  var v = _bnrVariant(o);
  if (!v) return '';
  var root = v.tree;
  var h = '<div style="position:relative;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;width:' + root.w + 'px;height:' + root.h + 'px;overflow:hidden;">';
  (root.children || []).forEach(function (c) { h += _bnrNode(c, _bnrData, o); });
  return h + '</div>';
}

function updateBannerDemo() {
  var g = function (id) { return document.getElementById(id); };
  var p = g('bnr-demo-hasPreamble'); if (p) _bnrDemo.hasPreamble = p.checked;
  var l = g('bnr-demo-hasLeadingAsset'); if (l) _bnrDemo.hasLeadingAsset = l.checked ? 'True' : 'False';
  ['imagePosition', 'Action', 'State'].forEach(function (k) { var e = g('bnr-demo-' + k); if (e) _bnrDemo[k] = e.value; });
  var el = g('bnr-demo-preview');
  if (!el) return;
  var draw = function () {
    el.innerHTML = _bnrRender(_bnrDemo);
    var a = g('bnr-demo-Action'); if (a) a.value = _bnrDemo.Action;
  };
  if (_bnrData) { draw(); return; }
  var src = (g('pg-data') && g('pg-data').getAttribute('data-src')) || '/playground/banner.json';
  fetch(src).then(function (r) { return r.json(); }).then(function (d) { _bnrData = d; draw(); });
}
window.updateBannerDemo = updateBannerDemo;

/* ── DEV code — component API, as on the Code tab ───────────────────── */
function buildSwiftSnippet(c) {
  var a = [];
  if (c.hasPreamble) a.push('    preamble: "Preamble"');
  a.push('    title: "Heading"', '    blurb: "Add description here."', '    imagePosition: .' + c.imagePosition.toLowerCase());
  if (c.Action === 'Button') a.push('    action: .button("Button") { }');
  if (c.Action === 'Link') a.push('    action: .link("Link") { }');
  var s = 'EBBanner(\n' + a.join(',\n') + '\n) {\n    Image("banner-art")\n}';
  if (c.hasLeadingAsset === 'True') s += ' leadingAsset: {\n    Image("product-icon")\n}';
  if (c.State === 'Disabled') s += '\n.disabled(true)';
  return s;
}
function buildComposeSnippet(c) {
  var a = [];
  if (c.hasPreamble) a.push('    preamble = "Preamble"');
  a.push('    title = "Heading"', '    blurb = "Add description here."', '    imagePosition = EBBannerImagePosition.' + c.imagePosition);
  if (c.Action === 'Button') a.push('    action = EBBannerAction.Button("Button", onClick = { })');
  if (c.Action === 'Link') a.push('    action = EBBannerAction.Link("Link", onClick = { })');
  if (c.State === 'Disabled') a.push('    enabled = false');
  a.push('    asset = { Image(painterResource(R.drawable.banner_art), null) }');
  if (c.hasLeadingAsset === 'True') a.push('    leadingAsset = { Image(painterResource(R.drawable.product_icon), null) }');
  return 'EBBanner(\n' + a.join(',\n') + '\n)';
}
function getSnippet(k, lang, card) { card = card || _bnrDemo; return lang === 'swift' ? buildSwiftSnippet(card) : buildComposeSnippet(card); }
window.getSnippet = getSnippet;

function _bnrInit() { updateBannerDemo(); }
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _bnrInit);
else _bnrInit();
document.addEventListener('astro:page-load', _bnrInit);
