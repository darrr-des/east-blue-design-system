/* Visual Popup — Style tab demo.
 * Rebuilt from Figma component set 4120:10317 (GCash DS 2026 Working File),
 * inside the section "[NEW] Visual Popup (Don't Use)".
 * Offsets, fills and text styles read off get_node_info and
 * get_styled_text_segments; checked against export_node_as_image.
 *
 * Panel (from the property-panel screenshot):
 *   Layout               · Centered, Surface   (variant)
 *   hasCloseButton       · True   (boolean)
 *   hasPreamble          · True   (boolean)
 *   hasHeader            · True   (boolean)
 *   hasSupportingContent · True   (boolean)
 * Slots (no control): Supporting Content Slot (1 item) · Image Slot
 *   Container (2 items) · Action Slot Container (2 items).
 * Nested instance: Close.
 *
 * Centered is 320 x 279, Surface 312 x 277, both white with radius 6. The
 * preamble layer exists on Surface only — heading rows are preamble at
 * y 16 (10 tall), title at y 30 (gap 4, 26 tall) and message at y 56. The Image and Supporting Content
 * slots ship empty, so the preview leaves their space blank. Both frames
 * are fixed height, so turning a boolean off empties its row rather than
 * shrinking the card.
 */

var VP_TEXT = { title: '#0A2757', message: '#6780A9', preamble: '#90A8D0', button: '#005CE5', label: '#FFFFFF' };
var VP_SURFACE = '#F6F9FD';

function _vpOn(v, def) { return v == null ? def : v === 'true'; }

/* Close — 24 x 24 glyph, #445C85, pinned to the top right. */
function _vpClose(x, y) {
  return '<path d="M' + (x + 7) + ' ' + (y + 7) + 'l10 10 M' + (x + 17) + ' ' + (y + 7) + 'l-10 10" stroke="#445C85"' +
         ' stroke-width="1.8" stroke-linecap="round"/>';
}

/* The frame hugs its stack. Row heights and gaps are read off the two
 * variants and checked against the six placed instances in the section,
 * which run 348, 370, 404, 426 and 499 tall as their slots change:
 *
 *   Centered  89 image + 24 + [title 26 + 16] + message 40
 *             + [supporting 24] + action 36 + 24   = 279 with everything on
 *   Surface   16 + [preamble 10 + 4] + [title 26] + message 40 + 16
 *             + image 89 + [supporting 24] + action 36 + 16 = 277
 *
 * Title and message sit flush in Surface (gap 0) and 16 apart in Centered.
 * hasCloseButton does not change the height — Close is pinned, not stacked.
 * The Image and Supporting Content slots ship empty, so their rows are the
 * space the set reserves, not the height of swapped-in content.
 */
function _vpRows(c) {
  var surface = c.layout === 'surface';
  var pre = surface && _vpOn(c.haspreamble, true);
  var header = _vpOn(c.hasheader, true), support = _vpOn(c.hassupportingcontent, true);
  var r = [];
  if (surface) {
    r.push({ h: 16 });
    if (pre) { r.push({ h: 10, kind: 'preamble' }); r.push({ h: 4 }); }
    if (header) r.push({ h: 26, kind: 'title' });
    r.push({ h: 40, kind: 'message', lines: 1 });
    r.push({ h: 16 });
    r.push({ h: 89, kind: 'image' });
    if (support) r.push({ h: 24, kind: 'supporting' });
    r.push({ h: 36, kind: 'action' });
    r.push({ h: 16 });
  } else {
    r.push({ h: 89, kind: 'image' });
    r.push({ h: 24 });
    if (header) { r.push({ h: 26, kind: 'title' }); r.push({ h: 16 }); }
    r.push({ h: 40, kind: 'message', lines: 2 });
    if (support) r.push({ h: 24, kind: 'supporting' });
    r.push({ h: 36, kind: 'action' });
    r.push({ h: 24 });
  }
  return r;
}

function _vpSize(c) {
  var rows = _vpRows(c);
  return { w: c.layout === 'surface' ? 312 : 320,
           h: rows.reduce(function (a, x) { return a + x.h; }, 0) };
}

function _vpRender(c) {
  var surface = c.layout === 'surface';
  var close = _vpOn(c.hasclosebutton, true);
  var size = _vpSize(c), w = size.w, h = size.h;
  var padX = surface ? 16 : 24, mid = w / 2;
  var anchor = surface ? '' : ' text-anchor="middle"';
  var tx = surface ? padX : mid;
  var s = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h +
          '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<rect x="0" y="0" width="' + w + '" height="' + h + '" rx="6" fill="' + (surface ? VP_SURFACE : '#FFFFFF') + '"/>';

  var y = 0;
  _vpRows(c).forEach(function (r) {
    if (r.kind === 'preamble') {
      s += '<text class="vp-pre" x="' + tx + '" y="' + (y + 5) + '" font-size="10" font-weight="700" fill="' +
           VP_TEXT.preamble + '"' + anchor + ' dominant-baseline="central">Preamble</text>';
    } else if (r.kind === 'title') {
      s += '<text class="vp-title" x="' + tx + '" y="' + (y + 13) + '" font-size="22" font-weight="700" fill="' +
           VP_TEXT.title + '"' + anchor + ' dominant-baseline="central">Put the title here</text>';
    } else if (r.kind === 'message') {
      for (var i = 0; i < r.lines; i++) {
        s += '<text class="vp-msg" x="' + tx + '" y="' + (y + 10 + i * 20) + '" font-size="14" font-weight="500" fill="' +
             VP_TEXT.message + '"' + anchor + ' dominant-baseline="central">Add description here.</text>';
      }
    } else if (r.kind === 'action') {
      s += '<rect x="' + padX + '" y="' + y + '" width="' + (w - padX * 2) + '" height="36" rx="18" fill="' + VP_TEXT.button + '"/>';
      s += '<text class="vp-label" x="' + mid + '" y="' + (y + 18) + '" font-size="16" font-weight="700" fill="' +
           VP_TEXT.label + '" text-anchor="middle" dominant-baseline="central">Label</text>';
    }
    y += r.h;
  });
  if (close) s += _vpClose(w - padX - 20, 16);
  return s + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = { main: { layout: 'centered', hasclosebutton: 'true', haspreamble: 'true',
                           hasheader: 'true', hassupportingcontent: 'true' } };
window._specCards = _specCards;
var VP_NODES = { centered: '4120:10318', surface: '4120:10339' };

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, c) {
  var l = ['EBVisualPopup('];
  if (_vpOn(c.hasheader, true)) l.push('    title: "Put the title here",');
  l.push('    message: "Add description here.",');
  if (_vpOn(c.haspreamble, true) && c.layout === 'surface') l.push('    preamble: "Preamble",');
  l.push('    layout: .' + c.layout);
  l.push(')');
  l.push('    .ebImage { Image("popup") }');
  if (_vpOn(c.hassupportingcontent, true)) l.push('    .ebSupporting { EBList(items) }');
  if (_vpOn(c.hasclosebutton, true)) l.push('    .ebOnDismiss { dismiss() }');
  l.push('    .ebAction("Label") { dismiss() }');
  return l.join('\n');
}
function buildComposeSnippet(cardKey, c) {
  var l = ['EBVisualPopup('];
  if (_vpOn(c.haspreamble, true) && c.layout === 'surface') l.push('    preamble = "Preamble",');
  if (_vpOn(c.hasheader, true)) l.push('    title = "Put the title here",');
  l.push('    message = "Add description here.",');
  l.push('    layout = EBVisualPopupLayout.' + (c.layout === 'surface' ? 'Surface' : 'Centered') + ',');
  l.push('    image = { Image(painterResource(R.drawable.popup), null) },');
  if (_vpOn(c.hassupportingcontent, true)) l.push('    supporting = { EBList(items) },');
  if (_vpOn(c.hasclosebutton, true)) l.push('    onDismiss = { dismiss() },');
  l.push('    actionLabel = "Label",');
  l.push('    onAction = { dismiss() }');
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

  var host = document.getElementById('visual-popup-spec-' + cardStyle);
  if (host) host.innerHTML = _vpRender(card);

  var preCtl = document.querySelector('[onchange*="updateSpecCard(\'' + cardStyle + '\', \'haspreamble\'"]');
  if (preCtl) {
    preCtl.disabled = card.layout !== 'surface';           /* no preamble layer on Centered */
    if (preCtl.parentElement) preCtl.parentElement.classList.toggle('is-disabled', preCtl.disabled);
  }

  var el = document.querySelector('[data-sp="' + cardStyle + '-layout"]');
  if (el) el.textContent = card.layout === 'surface' ? 'Surface' : 'Centered';
  ['hasclosebutton', 'haspreamble', 'hasheader', 'hassupportingcontent'].forEach(function (a) {
    var b = document.querySelector('[data-sp="' + cardStyle + '-' + a + '"]');
    if (!b) return;
    b.textContent = (a === 'haspreamble' && card.layout !== 'surface') ? '—'
      : (card[a] === 'true' ? 'True' : 'False');
  });
  var size = _vpSize(card);
  var nodeEl = document.querySelector('[data-sp="' + cardStyle + '-variantNode"]');
  if (nodeEl) nodeEl.textContent = VP_NODES[card.layout] + ' · ' + size.w + ' × ' + size.h;
  var sizeEl = document.querySelector('[data-sp="' + cardStyle + '-size-readout"]');
  if (sizeEl) sizeEl.textContent = size.w + ' × ' + size.h;

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

/* ── Overview tab shim — the old panel had a vp-demo-type select. ───── */
function updateVisualPopupDemo() {
  var el = document.getElementById('vp-demo-preview');
  if (!el) return;
  var t = document.getElementById('vp-demo-type');
  el.innerHTML = _vpRender({ layout: t && t.value === 'surface' ? 'surface' : 'centered',
    hasclosebutton: 'true', haspreamble: 'true', hasheader: 'true', hassupportingcontent: 'true' });
}
window.updateVisualPopupDemo = updateVisualPopupDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _vpInit() {
  updateVisualPopupDemo();
  Object.keys(_specCards).forEach(function (k) {
    /* re-applies the render, the readouts and the Centered preamble lock */
    updateSpecCard(k, 'layout', _specCards[k].layout);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _vpInit);
else _vpInit();
document.addEventListener('astro:page-load', _vpInit);
