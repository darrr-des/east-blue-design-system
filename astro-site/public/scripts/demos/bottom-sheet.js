/* Bottom Sheet — Style tab demo.
 * Rebuilt from Figma component set 5304:32717 (GCash DS 2026 Working File).
 * Offsets, fills and text styles read off get_node_info and
 * get_styled_text_segments; checked against export_node_as_image.
 *
 * Panel (set 5304:32717, from the property-panel screenshot):
 *   TitleAlignment     · Center, Left            (variant)
 *   FooterOrientation  · Horizontal, Vertical    (variant)
 *   hasSupportingText  · True, False             (variant)
 *   hasDescription     · False, True             (variant)
 *   showDragHandle     · True   (boolean)
 *   hasAboveTitleSlot  · True   ⤷ Above-Title-Slot · 8 items
 *   hasPreamble        · True   (boolean)
 *   hasLeadingSlot     · True   ⤷ Leading-Slot  · 6 items
 *   hasTrailingSlot    · True   ⤷ Trailing-Slot · 6 items
 *   hasContent         · True   ⤷ Content-Slot  · 8 items
 *   hasFooter          · True   ⤷ Footer-Slot   · 8 items
 * 8 of the 16 combinations are built: hasSupportingText and hasDescription
 * are never both True, and Center ships only with a description, so the
 * panel snaps to a built variant.
 *
 * 360 wide, stacked: DragHandle 12, Header (Above-Title-Slot 16, then the
 * TitleRow), Description 32, Content-Slot 64, Footer-Slot 160 vertical or
 * 98 horizontal. The TitleRow is 72 tall on Left (32 leading slot, the
 * title block, a 24 trailing slot), 98 with supporting text, and 46 on
 * Center, which drops both side slots. Heights run 310 to 404.
 */

var BS_W = 360;
var BS_NODES = {
  'left|vertical|false|true': '5304:32718',  'left|vertical|true|false': '5377:35367',
  'left|vertical|false|false': '5377:35438', 'center|vertical|false|true': '5304:32755',
  'left|horizontal|false|true': '5304:32769','left|horizontal|true|false': '5377:35473',
  'left|horizontal|false|false': '5377:35510','center|horizontal|false|true': '5304:32806'
};
var BS_C = {
  handle: '#C2CFE5', preamble: '#90A8D0', title: '#0A2757', message: '#445C85',
  description: '#445C85', primary: '#005CE5', primaryLabel: '#FFFFFF', secondaryLabel: '#005CE5',
  slot: '#9F3DFB', close: '#0A2757'
};

function _bsOn(v, def) { return v == null ? def : v === 'true'; }
function _bsKey(c) { return [c.titlealignment, c.footerorientation, c.hassupportingtext, c.hasdescription].join('|'); }

/* Supporting text and description never combine, and Center ships only
 * with a description. */
function _bsResolve(card, changed) {
  if (changed === 'hassupportingtext' && card.hassupportingtext === 'true') card.hasdescription = 'false';
  if (changed === 'hasdescription' && card.hasdescription === 'true') card.hassupportingtext = 'false';
  if (card.titlealignment === 'center') { card.hassupportingtext = 'false'; card.hasdescription = 'true'; }
  if (card.hassupportingtext === 'true' && card.hasdescription === 'true') card.hasdescription = 'false';
  return _bsKey(card);
}

/* The title wraps inside its column and never runs under the trailing
 * slot: 232 wide on Left with a leading slot, 276 without, 312 on Center
 * where both side slots are dropped. */
function _bsTitleWidth(c) {
  if (c.titlealignment === 'center') return 312;
  var bx = _bsOn(c.hasleadingslot, true) ? 68 : 24;
  return (_bsOn(c.hastrailingslot, true) ? 300 : 336) - bx;
}

var _bsCanvas = null;
function _bsWrap(text, width, font) {
  var ctx;
  try {
    _bsCanvas = _bsCanvas || document.createElement('canvas');
    ctx = _bsCanvas.getContext('2d');
    ctx.font = font;
  } catch (e) { return [text]; }
  var words = String(text).split(' '), lines = [], line = '';
  words.forEach(function (w) {
    var next = line ? line + ' ' + w : w;
    if (line && ctx.measureText(next).width > width) { lines.push(line); line = w; }
    else line = next;
  });
  if (line) lines.push(line);
  return lines;
}

function _bsTitleLines(c) {
  return _bsWrap('Title here of the header...', _bsTitleWidth(c), "700 22px 'Proxima Soft', sans-serif");
}

/* preamble 14 + 6, the wrapped title at 26 a line, then the supporting
 * text 6 + 20 — 72, 98 and 46 on the three built shapes. */
function _bsTitleRow(c) {
  var h = (_bsOn(c.haspreamble, true) ? 20 : 0) + _bsTitleLines(c).length * 26;
  if (c.titlealignment !== 'center' && _bsOn(c.hassupportingtext, false)) h += 26;
  return h;
}

function _bsRows(c) {
  var rows = [];
  if (_bsOn(c.showdraghandle, true)) rows.push({ h: 12, kind: 'handle' });
  /* Header = 24 top + [slot 16 + 16 gap] + TitleRow + 8 bottom, which is
   * the 136 measured on the Left variants and 110 on Center. */
  var headerH = 24 + (_bsOn(c.hasabovetitleslot, true) ? 32 : 0) + _bsTitleRow(c) + 8;
  rows.push({ h: headerH, kind: 'header' });
  if (_bsOn(c.hasdescription, false)) rows.push({ h: 32, kind: 'description' });
  if (_bsOn(c.hascontent, true)) rows.push({ h: 64, kind: 'content' });
  if (_bsOn(c.hasfooter, true)) rows.push({ h: c.footerorientation === 'horizontal' ? 98 : 160, kind: 'footer' });
  return rows;
}

function _bsHeight(c) {
  return _bsRows(c).reduce(function (a, r) { return a + r.h; }, 0);
}

function _bsSlot(x, y, w, h) {
  return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="4" fill="' + BS_C.slot +
         '" fill-opacity="0.08"/>';
}
/* Leading-Slot ships a round 32 Placeholder instance. */
function _bsLeadingSlot(x, y) {
  return '<circle cx="' + (x + 16) + '" cy="' + (y + 16) + '" r="16" fill="' + BS_C.slot + '" fill-opacity="0.08"/>';
}
function _bsClose(x, y) {
  return '<path d="M' + (x + 6) + ' ' + (y + 6) + 'l12 12 M' + (x + 18) + ' ' + (y + 6) + 'l-12 12" stroke="' + BS_C.close +
         '" stroke-width="1.8" stroke-linecap="round"/>';
}
function _bsButton(x, y, w, primary) {
  var s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="50" rx="25" fill="' +
          (primary ? BS_C.primary : 'none') + '"/>';
  s += '<text class="bs-button" x="' + (x + w / 2) + '" y="' + (y + 25) + '" font-size="18" font-weight="700" fill="' +
       (primary ? BS_C.primaryLabel : BS_C.secondaryLabel) + '" text-anchor="middle" dominant-baseline="central">Label</text>';
  return s;
}

function _bsRender(c) {
  var h = _bsHeight(c), centre = c.titlealignment === 'center';
  var s = '<svg width="' + BS_W + '" height="' + h + '" viewBox="0 0 ' + BS_W + ' ' + h +
          '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<path d="M0 16a16 16 0 0 1 16 -16h328a16 16 0 0 1 16 16v' + (h - 16) + 'H0z" fill="#FFFFFF"/>';

  var y = 0, tx = centre ? 180 : 68, anchor = centre ? ' text-anchor="middle"' : '';
  _bsRows(c).forEach(function (r) {
    if (r.kind === 'handle') {
      s += '<rect x="164" y="' + (y + 8) + '" width="32" height="4" rx="2" fill="' + BS_C.handle + '"/>';
    } else if (r.kind === 'header') {
      var hy = y + 24;
      if (_bsOn(c.hasabovetitleslot, true)) { s += _bsSlot(24, hy, 312, 16); hy += 32; }
      if (!centre && _bsOn(c.hasleadingslot, true)) s += _bsLeadingSlot(24, hy);
      if (!centre && _bsOn(c.hastrailingslot, true)) s += _bsClose(312, hy);
      var bx = centre ? 180 : (_bsOn(c.hasleadingslot, true) ? 68 : 24);
      if (_bsOn(c.haspreamble, true)) {
        s += '<text class="bs-pre" x="' + bx + '" y="' + (hy + 7) + '" font-size="14" font-weight="700" fill="' +
             BS_C.preamble + '"' + anchor + ' dominant-baseline="central">Preamble here...</text>';
        hy += 20;
      }
      var lines = _bsTitleLines(c);
      lines.forEach(function (line, i) {
        s += '<text class="bs-title" x="' + bx + '" y="' + (hy + 13 + i * 26) + '" font-size="22" font-weight="700" fill="' +
             BS_C.title + '"' + anchor + ' dominant-baseline="central">' + line + '</text>';
      });
      hy += lines.length * 26;
      if (!centre && _bsOn(c.hassupportingtext, false))
        s += '<text class="bs-msg" x="' + bx + '" y="' + (hy + 10) + '" font-size="14" font-weight="600" fill="' +
             BS_C.message + '" dominant-baseline="central">This is a supporting text</text>';
    } else if (r.kind === 'description') {
      s += '<text class="bs-desc" x="' + (centre ? 180 : 24) + '" y="' + (y + 10) + '" font-size="14" font-weight="500" fill="' +
           BS_C.description + '"' + anchor + ' dominant-baseline="central">This is a body description</text>';
    } else if (r.kind === 'content') {
      s += _bsSlot(24, y, 312, 64);
    } else if (r.kind === 'footer') {
      if (c.footerorientation === 'horizontal') {
        s += _bsButton(24, y + 24, 150, false);
        s += _bsButton(186, y + 24, 150, true);
      } else {
        s += _bsButton(24, y + 24, 312, true);
        s += _bsButton(24, y + 86, 312, false);
      }
    }
    y += r.h;
  });
  return s + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = {
  main: {
    titlealignment: 'left', footerorientation: 'vertical', hassupportingtext: 'false', hasdescription: 'true',
    showdraghandle: 'true', hasabovetitleslot: 'true', haspreamble: 'true', hasleadingslot: 'true',
    hastrailingslot: 'true', hascontent: 'true', hasfooter: 'true'
  }
};
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, c) {
  var l = ['EBBottomSheet(', '    title: "Title here of the header..."'];
  if (_bsOn(c.haspreamble, true)) l.push('    preamble: "Preamble here...",');
  if (_bsOn(c.hasdescription, false)) l.push('    description: "This is a body description",');
  if (_bsOn(c.hassupportingtext, false)) l.push('    supportingText: "This is a supporting text",');
  l.push(')');
  l.push('    .ebTitleAlignment(.' + c.titlealignment + ')');
  l.push('    .ebFooterOrientation(.' + c.footerorientation + ')');
  if (!_bsOn(c.showdraghandle, true)) l.push('    .ebDragHandle(false)');
  if (_bsOn(c.hasleadingslot, true)) l.push('    .ebLeading { Image("icon") }');
  if (_bsOn(c.hastrailingslot, true)) l.push('    .ebTrailing(.close) { dismiss() }');
  if (_bsOn(c.hascontent, true)) l.push('    .ebContent { EBList(items) }');
  if (_bsOn(c.hasfooter, true)) l.push('    .ebFooter { EBButton("Label") { }; EBTextButton("Label") { } }');
  return l.join('\n');
}
function buildComposeSnippet(cardKey, c) {
  var l = ['EBBottomSheet(', '    title = "Title here of the header...",'];
  if (_bsOn(c.haspreamble, true)) l.push('    preamble = "Preamble here...",');
  if (_bsOn(c.hasdescription, false)) l.push('    description = "This is a body description",');
  if (_bsOn(c.hassupportingtext, false)) l.push('    supportingText = "This is a supporting text",');
  l.push('    titleAlignment = EBTitleAlignment.' + (c.titlealignment === 'center' ? 'Center' : 'Left') + ',');
  l.push('    footerOrientation = EBFooterOrientation.' + (c.footerorientation === 'horizontal' ? 'Horizontal' : 'Vertical') + ',');
  if (!_bsOn(c.showdraghandle, true)) l.push('    showDragHandle = false,');
  if (_bsOn(c.hasleadingslot, true)) l.push('    leading = { Icon(painterResource(R.drawable.icon), null) },');
  if (_bsOn(c.hastrailingslot, true)) l.push('    trailing = { EBIconButton(EBIcons.Close) { dismiss() } },');
  if (_bsOn(c.hascontent, true)) l.push('    content = { EBList(items) },');
  if (_bsOn(c.hasfooter, true)) l.push('    footer = { EBButton("Label") { }; EBTextButton("Label") { } },');
  l.push('    onDismiss = { dismiss() }');
  l.push(')');
  return l.join('\n');
}
function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

/* ── Control handler ────────────────────────────────────────────────── */
function _bsSync(cardStyle, card) {
  ['titlealignment', 'footerorientation'].forEach(function (a) {
    var el = document.querySelector('[onchange*="updateSpecCard(\'' + cardStyle + '\', \'' + a + '\'"]');
    if (el) el.value = card[a];
  });
  [['hassupportingtext', card.titlealignment === 'center'], ['hasdescription', card.titlealignment === 'center']]
    .forEach(function (pair) {
      var el = document.querySelector('[onchange*="updateSpecCard(\'' + cardStyle + '\', \'' + pair[0] + '\'"]');
      if (!el) return;
      el.checked = card[pair[0]] === 'true';
      el.disabled = pair[1];                              /* Center ships description only */
      if (el.parentElement) el.parentElement.classList.toggle('is-disabled', el.disabled);
    });
}

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;
  var key = _bsResolve(card, prop);
  _bsSync(cardStyle, card);

  var host = document.getElementById('bottom-sheet-spec-' + cardStyle);
  if (host) host.innerHTML = _bsRender(card);

  ['titlealignment', 'footerorientation', 'hassupportingtext', 'hasdescription', 'showdraghandle',
   'hasabovetitleslot', 'haspreamble', 'hasleadingslot', 'hastrailingslot', 'hascontent', 'hasfooter']
    .forEach(function (a) {
      var el = document.querySelector('[data-sp="' + cardStyle + '-' + a + '"]');
      if (!el) return;
      el.textContent = a.indexOf('has') === 0 || a.indexOf('show') === 0
        ? (card[a] === 'true' ? 'True' : 'False')
        : card[a].charAt(0).toUpperCase() + card[a].slice(1);
    });
  var h = _bsHeight(card);
  var put = function (name, text) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + name + '"]');
    if (el) el.textContent = text;
  };
  put('size-readout', BS_W + ' × ' + h);
  put('titlerow-readout', _bsTitleRow(card) + ' tall');
  put('variantNode', BS_NODES[key] + ' · ' + BS_W + ' × ' + h);

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

/* ── Overview tab shim — the old panel drove bottom-sheet-ctrl-*. ──── */
function _bottomSheetUpdate() {
  var el = document.getElementById('bottom-sheet-demo-preview');
  if (!el) return;
  var v = function (id, f) { var n = document.getElementById(id); return n ? n.value : f; };
  var sub = v('bottom-sheet-ctrl-subtitle', 'description');
  el.innerHTML = _bsRender({
    titlealignment: v('bottom-sheet-ctrl-align', 'left'),
    footerorientation: v('bottom-sheet-ctrl-footer', 'vertical'),
    hassupportingtext: sub === 'supporting' ? 'true' : 'false',
    hasdescription: sub === 'supporting' ? 'false' : 'true',
    showdraghandle: 'true', hasabovetitleslot: 'true', haspreamble: 'true', hasleadingslot: 'true',
    hastrailingslot: 'true',
    hascontent: v('bottom-sheet-ctrl-content', 'yes') === 'no' ? 'false' : 'true',
    hasfooter: 'true'
  });
}
window._bottomSheetUpdate = _bottomSheetUpdate;

/* ── First paint ────────────────────────────────────────────────────── */
function _bsInit() {
  _bottomSheetUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'titlealignment', _specCards[k].titlealignment);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _bsInit);
else _bsInit();
document.addEventListener('astro:page-load', _bsInit);
