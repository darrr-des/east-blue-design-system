/* Service Item — Style tab demo.
 * Rebuilt from Figma component set 4692:21582 (GCash DS 2026 Working File).
 * Offsets and fills read off get_node_info; the Add and Remove overlays
 * from get_svg; checked against export_node_as_image.
 *
 * Panel (set 4692:21582, from the property-panel screenshot):
 *   State          · Default, Disabled, Inactive, Pressed   (variant)
 *   Orientation    · Vertical, Horizontal                   (variant)
 *   Badge          · None, New                              (variant)
 *   Action         · None, Add, Remove                      (variant)
 *   hasPreamble    · False    (boolean)
 *   hasDescription · False    (boolean)
 *   hasBorder      · False    (boolean)
 *   Label          · "Label"      (text)
 *   Preamble       · "Preamble"   (text)
 * Slots (no control): Asset-Slot (32 items) · Description-Slot (32 items)
 *
 * 32 variants: Badge and Action never combine (badges are suppressed in
 * edit mode — an owner decision, v2.2), so the panel snaps to a built one.
 * Vertical is 64 x 72 and Horizontal 120 x 64 with the booleans off. The
 * New badge and the overlays sit above the frame's top edge, so the preview
 * leaves 12px of headroom.
 *
 * Heights and the Horizontal hug were read with the three booleans shown
 * on the set (see _siFrame).
 */

var SI_NODES = {"default|vertical|none|none":"4692:21583","default|vertical|new|none":"4692:21591","default|vertical|none|add":"4692:21601","default|vertical|none|remove":"4692:21610","inactive|vertical|none|none":"4692:21619","pressed|vertical|none|none":"4703:18264","inactive|vertical|new|none":"4692:21627","pressed|vertical|new|none":"4703:18387","inactive|vertical|none|add":"4692:21637","pressed|vertical|none|add":"4711:18442","inactive|vertical|none|remove":"4692:21646","pressed|vertical|none|remove":"4711:18624","default|horizontal|none|none":"4692:21655","default|horizontal|new|none":"4692:21664","default|horizontal|none|add":"4692:21675","default|horizontal|none|remove":"4692:21685","inactive|horizontal|none|none":"4692:21695","pressed|horizontal|none|none":"4711:18705","inactive|horizontal|new|none":"4692:21704","pressed|horizontal|new|none":"4711:18714","inactive|horizontal|none|add":"4692:21715","pressed|horizontal|none|add":"4711:18726","inactive|horizontal|none|remove":"4692:21725","pressed|horizontal|none|remove":"4711:18739","disabled|horizontal|none|none":"4692:21735","disabled|horizontal|none|add":"4692:21744","disabled|horizontal|new|none":"4692:21754","disabled|horizontal|none|remove":"4692:21765","disabled|vertical|none|none":"4692:21775","disabled|vertical|new|none":"4692:21783","disabled|vertical|none|add":"4692:21793","disabled|vertical|none|remove":"4692:21802"};

var SI_AXES = ['state', 'orientation', 'badge', 'action'];

var SI_STATE = {
  'default':  { label: '#072592', desc: '#445C85', asset: '#F6F9FD', badge: '#D61B2C', add: '#12AF80', remove: '#D61B2C' },
  'inactive': { label: '#6780A9', desc: '#90A8D0', asset: '#F6F9FD', badge: '#F76464', add: '#6FE7AB', remove: '#F76464' },
  'pressed':  { label: '#071969', desc: '#0A2757', asset: '#EEF2F9', badge: '#B50707', add: '#048570', remove: '#B50707' },
  'disabled': { label: '#C2CFE5', desc: '#C2CFE5', asset: '#F6F9FD', badge: '#F8E6E6', add: '#E7F8F0', remove: '#F8E6E6' }
};

function _siOn(v, def) { return v == null ? def : v === 'true'; }
function _siEsc(v) { return String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function _siKey(c) { return SI_AXES.map(function (a) { return c[a]; }).join('|'); }

/* Badge and Action never combine; setting one clears the other. */
function _siResolve(card, changed) {
  if (changed === 'badge' && card.badge === 'new') card.action = 'none';
  if (changed === 'action' && card.action !== 'none') card.badge = 'none';
  if (card.badge === 'new' && card.action !== 'none') card.action = 'none';
  return _siKey(card);
}

function _siOverlay(kind, x, y, fill) {
  var s = '<circle cx="' + (x + 6) + '" cy="' + (y + 6) + '" r="6" fill="' + fill + '"/>';
  s += '<rect x="' + (x + 3) + '" y="' + (y + 5.25) + '" width="6" height="1.5" rx="0.75" fill="#FFFFFF"/>';
  if (kind === 'add') s += '<rect x="' + (x + 5.25) + '" y="' + (y + 3) + '" width="1.5" height="6" rx="0.75" fill="#FFFFFF"/>';
  return s;
}
function _siBadge(x, y, fill) {
  return '<rect x="' + x + '" y="' + y + '" width="29" height="12" rx="4" fill="' + fill + '"/>' +
         '<text class="si-badge" x="' + (x + 14.5) + '" y="' + (y + 6) + '" font-size="10" font-weight="700" fill="#FFFFFF"' +
         ' text-anchor="middle" dominant-baseline="central">New</text>';
}

/* Asset-Slot placeholder. The fill is Figma's (#F6F9FD, Pressed #EEF2F9),
 * which all but vanishes on the page. The 1px dashed #9BB0D3 ring is a
 * preview-only cue so the slot reads as a placeholder; it is not in the
 * component and is not listed on the card. */
function _siAsset(x, y, fill) {
  return '<rect x="' + x + '" y="' + y + '" width="48" height="48" rx="24" fill="' + fill + '"/>' +
         '<rect x="' + (x + 0.5) + '" y="' + (y + 0.5) + '" width="47" height="47" rx="23.5" fill="none"' +
         ' stroke="#9BB0D3" stroke-width="1" stroke-dasharray="4 3"/>';
}

/* Text width for the Horizontal hug. Figma's own reads are used for the
 * default copy ("Label" 32, "Description" 50); anything typed into the
 * Label input is measured in the component font. */
var _siCanvas = null;
function _siTextW(text, font, tracking, known) {
  if (known[text] != null) return known[text];
  try {
    _siCanvas = _siCanvas || document.createElement('canvas');
    var ctx = _siCanvas.getContext('2d');
    ctx.font = font;
    return Math.ceil(ctx.measureText(text).width + tracking * text.length);
  } catch (e) { return text.length * 7; }
}

/* Returns { w, h, svg } for the frame itself (headroom added by the caller).
 * Geometry read off 4692:21591 / 21601 (Vertical) and 4692:21664 / 21685 /
 * 4711:18705 (Horizontal) with all three booleans shown:
 *   Vertical   — width fixed 64. Preamble 64 x 12 at the top (text inset 4),
 *                6 gap, Asset 48 at x 8, 6 gap, Label 12, 4 gap, Description
 *                15, 6 bottom. 72 with nothing on, 109 with everything on.
 *   Horizontal — hugs. 20 left, Container (Asset 48 + 12 gap + text column,
 *                text centred on the asset), 8 right; 8 top, 4 gap, Preamble
 *                12 (Container width, text inset 8), 8 bottom. Label and
 *                Description 2 apart. 120 x 64 bare, 138 x 80 all on.
 *   New badge and Add / Remove are pinned to the frame's top edge, not to
 *   the asset: Vertical (41, -12) / (54, -6), Horizontal (87, -2) / (104, -2). */
function _siFrame(c) {
  var st = SI_STATE[c.state] || SI_STATE['default'];
  var pre = _siOn(c.haspreamble, false), desc = _siOn(c.hasdescription, false), border = _siOn(c.hasborder, false);
  var label = c.label != null ? c.label : 'Label', preText = c.preamble != null ? c.preamble : 'Preamble';
  var s = '', w, h, badgeX, badgeY, ovX, ovY;

  if (c.orientation === 'horizontal') {
    var lw = _siTextW(label, "700 12px 'Proxima Soft', sans-serif", 0.5, { 'Label': 32 });
    var cw = Math.max(lw, desc ? 50 : 0);
    var ch = 48;                                        /* Container height */
    w = 20 + 48 + 12 + cw + 8;
    h = 8 + ch + (pre ? 4 + 12 : 0) + 8;
    s += _siAsset(20, 8, st.asset);
    var stack = 12 + (desc ? 2 + 15 : 0), ty = 8 + (ch - stack) / 2;
    s += '<text class="si-label" x="80" y="' + (ty + 6) + '" font-size="12" font-weight="700" fill="' + st.label +
         '" dominant-baseline="central">' + _siEsc(label) + '</text>';
    if (desc) s += '<text class="si-desc" x="80" y="' + (ty + 14 + 7.5) + '" font-size="10" font-weight="600" fill="' + st.desc + '"' +
                   ' dominant-baseline="central">Description</text>';
    if (pre) s += '<text class="si-pre" x="28" y="' + (8 + ch + 4 + 6) + '" font-size="8" font-weight="700" fill="#90A8D0"' +
                  ' dominant-baseline="central">' + _siEsc(preText) + '</text>';
    badgeX = 87; badgeY = -2; ovX = 104; ovY = -2;
  } else {
    w = 64;
    var top = pre ? 12 + 6 : 0;
    h = top + 48 + 6 + 12 + (desc ? 4 + 15 : 0) + 6;
    if (pre) s += '<text class="si-pre" x="4" y="6" font-size="8" font-weight="700" fill="#90A8D0"' +
                  ' dominant-baseline="central">' + _siEsc(preText) + '</text>';
    s += _siAsset(8, top, st.asset);
    s += '<text class="si-label" x="32" y="' + (top + 54 + 6) + '" font-size="12" font-weight="700" fill="' + st.label +
         '" text-anchor="middle" dominant-baseline="central">' + _siEsc(label) + '</text>';
    if (desc) s += '<text class="si-desc" x="32" y="' + (top + 70 + 7.5) + '" font-size="10" font-weight="600" fill="' + st.desc + '"' +
                   ' text-anchor="middle" dominant-baseline="central">Description</text>';
    badgeX = 41; badgeY = -12; ovX = 54; ovY = -6;
  }
  if (border) s += '<rect x="0" y="0" width="1" height="' + h + '" fill="#D7E0EF"/>';
  if (c.badge === 'new') s += _siBadge(badgeX, badgeY, st.badge);
  if (c.action === 'add') s += _siOverlay('add', ovX, ovY, st.add);
  if (c.action === 'remove') s += _siOverlay('remove', ovX, ovY, st.remove);
  return { w: w, h: h, svg: s };
}

function _siRender(c) {
  var f = _siFrame(c), pad = 12, right = 8;   /* New badge runs to x 70 on the 64-wide tile */
  return '<svg width="' + (f.w + right) + '" height="' + (f.h + pad) + '" viewBox="0 ' + (-pad) + ' ' + (f.w + right) + ' ' + (f.h + pad) +
         '" fill="none" xmlns="http://www.w3.org/2000/svg">' + f.svg + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = {
  main: { state: 'default', orientation: 'vertical', badge: 'none', action: 'none',
          haspreamble: 'false', hasdescription: 'false', hasborder: 'false', label: 'Label', preamble: 'Preamble' }
};
window._specCards = _specCards;
function _siCap(v) { return v.charAt(0).toUpperCase() + v.slice(1); }

/* ── DEV code ───────────────────────────────────────────────────────── */
function _siQ(v) { return JSON.stringify(String(v)); }
function buildSwiftSnippet(cardKey, c) {
  var l = ['EBServiceItem(' + _siQ(c.label) + ')', '    .ebOrientation(.' + c.orientation + ')'];
  if (c.badge === 'new') l.push('    .ebBadge(.new)');
  if (c.action !== 'none') l.push('    .ebEditAction(.' + c.action + ') { }');
  if (_siOn(c.haspreamble, false)) l.push('    .ebPreamble(' + _siQ(c.preamble) + ')');
  if (_siOn(c.hasdescription, false)) l.push('    .ebDescription("Description")');
  if (_siOn(c.hasborder, false)) l.push('    .ebBorder(true)');
  if (c.state === 'disabled') l.push('    .disabled(true)');
  if (c.state === 'inactive') l.push('    .ebInactive(true)');
  l.push('    .ebAsset { Image("service") }');
  return l.join('\n');
}
function buildComposeSnippet(cardKey, c) {
  var l = ['EBServiceItem(', '    label = ' + _siQ(c.label) + ',', '    orientation = EBServiceItemOrientation.' + _siCap(c.orientation) + ','];
  if (c.badge === 'new') l.push('    badge = EBServiceItemBadge.New,');
  if (c.action !== 'none') l.push('    editAction = EBServiceItemAction.' + _siCap(c.action) + ',');
  if (_siOn(c.haspreamble, false)) l.push('    preamble = ' + _siQ(c.preamble) + ',');
  if (_siOn(c.hasdescription, false)) l.push('    description = { Text("Description") },');
  if (_siOn(c.hasborder, false)) l.push('    showsBorder = true,');
  if (c.state === 'disabled') l.push('    enabled = false,');
  if (c.state === 'inactive') l.push('    inactive = true,');
  l.push('    asset = { Image(painterResource(R.drawable.service), null) },');
  l.push('    onClick = { }');
  l.push(')');
  return l.join('\n');
}
function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

/* ── Control handler ────────────────────────────────────────────────── */
function _siSync(cardStyle, card) {
  ['badge', 'action'].forEach(function (a) {
    var el = document.querySelector('[onchange*="updateSpecCard(\'' + cardStyle + '\', \'' + a + '\'"]');
    if (el) el.value = card[a];
  });
}

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;
  var key = _siResolve(card, prop);
  _siSync(cardStyle, card);

  var host = document.getElementById('service-item-spec-' + cardStyle);
  if (host) host.innerHTML = _siRender(card);

  SI_AXES.concat(['haspreamble', 'hasdescription', 'hasborder', 'label', 'preamble']).forEach(function (a) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + a + '"]');
    if (!el) return;
    el.textContent = a.indexOf('has') === 0 ? (card[a] === 'true' ? 'True' : 'False') :
                     (a === 'label' || a === 'preamble') ? card[a] : _siCap(card[a]);
  });
  var f = _siFrame(card);
  var sizeEl = document.querySelector('[data-sp="' + cardStyle + '-size-readout"]');
  if (sizeEl) sizeEl.textContent = f.w + ' × ' + f.h;
  var nodeEl = document.querySelector('[data-sp="' + cardStyle + '-variantNode"]');
  if (nodeEl) nodeEl.textContent = SI_NODES[key] + ' · ' + f.w + ' × ' + f.h;

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

/* ── Overview tab shim — the old panel had type / state / orientation. ── */
function updateServiceItemDemo() {
  var el = document.getElementById('si-demo-preview');
  if (!el) return;
  var v = function (id, f) { var n = document.getElementById(id); return n ? n.value : f; };
  var type = v('si-demo-type', 'default');
  el.innerHTML = _siRender({
    state: v('si-demo-state', 'default'), orientation: v('si-demo-orientation', 'vertical'),
    badge: type === 'new' ? 'new' : 'none', action: (type === 'add' || type === 'remove') ? type : 'none'
  });
}
window.updateServiceItemDemo = updateServiceItemDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _siInit() {
  updateServiceItemDemo();
  Object.keys(_specCards).forEach(function (k) {
    var host = document.getElementById('service-item-spec-' + k);
    if (host) host.innerHTML = _siRender(_specCards[k]);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _siInit);
else _siInit();
document.addEventListener('astro:page-load', _siInit);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () {
  var host = document.getElementById('service-item-spec-main');
  if (host && _specCards.main) host.innerHTML = _siRender(_specCards.main);
});
