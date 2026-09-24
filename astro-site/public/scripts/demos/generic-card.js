/* Generic Card — Style tab demo.
 * Rebuilt from Figma component set 5412:31504 (GCash DS 2026 Working File).
 * Offsets, fills and text styles read off get_node_info and
 * get_styled_text_segments; checked against export_node_as_image.
 *
 * Panel (set 5412:31504, from the property-panel screenshot):
 *   Status              · Default, Skeleton              (variant)
 *   State               · Default, Disabled              (variant)
 *   IconSize            · XL, LG, MD, SM, XS, XXS        (variant)
 *   hasLeadingElement   · True    ⤷ Leading-Icon-Slot  · 12 items
 *   hasSubtitle         · True
 *   hasBlurb            · True
 *   hasTag              · True
 *   hasDescription      · True
 *   has Badge           · True
 *   hasTrailingElement  · True    ⤷ Trailing-Icon-Slot · 12 items
 *   Description         · 12 items (slot)
 * 18 of 24 combinations are built — Skeleton ships State=Default only, so
 * the panel snaps to a built variant.
 *
 * 360 wide. Default and Disabled are 148 tall, Skeleton 146. The row is
 * 24 left padding, the icon, a gap that shrinks with it (24, 24, 20, 16,
 * 16, 12), the content block, a 24 spacer, the 32 trailing icon and 12
 * right padding. IconSize only changes the leading icon: 64, 52, 46, 40,
 * 32, 24 — every variant stays 148 tall.
 *
 * hasSubtitle and hasDescription both point at the Description slot's two
 * identical TextContainer rows, and all 18 variants ship them on, so the
 * preview maps hasDescription to the first row and hasSubtitle to the
 * second. The card says so.
 */

var GC_W = 360;
var GC_ICON = { xl: 64, lg: 52, md: 46, sm: 40, xs: 32, xxs: 24 };
var GC_GAP  = { xl: 24, lg: 24, md: 20, sm: 16, xs: 16, xxs: 12 };
var GC_NODES = {
  'default|default|xl': '5412:31505',  'default|disabled|xl': '5418:32487',  'skeleton|default|xl': '5412:31530',
  'default|default|lg': '5412:31541',  'default|disabled|lg': '5418:32462',  'skeleton|default|lg': '5412:31566',
  'default|default|md': '5412:31577',  'default|disabled|md': '5418:32437',  'skeleton|default|md': '5412:31602',
  'default|default|sm': '5412:31613',  'default|disabled|sm': '5418:32412',  'skeleton|default|sm': '5412:31638',
  'default|default|xs': '5412:31649',  'default|disabled|xs': '5418:32387',  'skeleton|default|xs': '5412:31674',
  'default|default|xxs': '5412:31685', 'default|disabled|xxs': '5418:32362', 'skeleton|default|xxs': '5412:31710'
};

/* chevron and placeholder come from export_node_as_image — the icon
 * instances expose only their guide layers, not the glyph fill. */
var GC_C = {
  'default':  { preamble: '#005CE5', title: '#0A2757', label: '#90A8D0', desc: '#445C85',
                badge: '#E5F1FF', badgeLabel: '#005CE5', chevron: '#005CE5', placeholder: '#D3DCEA' },
  'disabled': { preamble: '#9BC5FD', title: '#C2CFE5', label: '#C2CFE5', desc: '#C2CFE5',
                badge: '#C2C6CF', badgeLabel: '#FFFFFF', chevron: '#9BC5FD', placeholder: '#9BC5FD' }
};
var GC_TAG = '#D61B2C', GC_DIVIDER = '#E5EBF4', GC_SKELETON = '#EEF2F9', GC_PLACEHOLDER = '#D3DCEA';

function _gcOn(v, def) { return v == null ? def : v === 'true'; }
function _gcKey(c) { return [c.status, c.state, c.iconsize].join('|'); }

/* Skeleton ships State=Default only. */
function _gcResolve(card, changed) {
  if (changed === 'status' && card.status === 'skeleton') card.state = 'default';
  if (changed === 'state' && card.state === 'disabled') card.status = 'default';
  if (card.status === 'skeleton' && card.state !== 'default') card.state = 'default';
  return _gcKey(card);
}

function _gcMetrics(c) {
  var icon = _gcOn(c.hasleadingelement, true) ? GC_ICON[c.iconsize] : 0;
  var media = icon ? icon + GC_GAP[c.iconsize] : 0;
  var trailing = _gcOn(c.hastrailingelement, true) ? 32 : 0;
  var contentX = 24 + media;
  var contentW = GC_W - 24 - media - 24 - trailing - 12;
  return { icon: icon, media: media, contentX: contentX, contentW: contentW, trailing: trailing };
}

/* Content stack — Header 21, 4, Title 23, then the two description rows
 * and the badge. 116 with everything on, which is the 148 frame less its
 * 16 top and bottom padding. */
function _gcContentHeight(c) {
  var header = (_gcOn(c.hasblurb, true) || _gcOn(c.hastag, true)) ? 21 + 4 : 0;
  var rows = (_gcOn(c.hasdescription, true) ? 22 : 0) + (_gcOn(c.hassubtitle, true) ? 20 : 0);
  var badge = _gcOn(c.hasbadge, true) ? 26 : 0;
  return header + 23 + rows + badge;
}

/* The row is the tallest of the content block, the leading icon and the
 * 32 trailing icon. The leading icon is flush with the row's top and the
 * trailing icon sits 14 below it — y 30 on the full card, the same at
 * every IconSize. Both fall back to centred once the row is too short to
 * hold that offset, which is the title-and-chevron case. */
function _gcRowHeight(c) {
  var m = _gcMetrics(c);
  return Math.max(_gcContentHeight(c), m.icon, m.trailing);
}

function _gcHeight(c) {
  if (c.status === 'skeleton') return 146;
  return _gcRowHeight(c) + 32;
}

function _gcChevron(cx, cy, fill) {
  return '<path d="M' + (cx - 4) + ' ' + (cy - 7) + 'l7 7 -7 7" stroke="' + fill +
         '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>';
}

function _gcRender(c) {
  var m = _gcMetrics(c), h = _gcHeight(c);
  var s = '<svg width="' + GC_W + '" height="' + h + '" viewBox="0 0 ' + GC_W + ' ' + h +
          '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<rect x="0" y="0" width="' + GC_W + '" height="' + h + '" fill="#FFFFFF"/>';

  if (c.status === 'skeleton') {
    var sx = 24 + m.media;
    if (m.icon) s += '<rect x="24" y="16" width="' + m.icon + '" height="' + m.icon + '" rx="8" fill="' + GC_SKELETON + '"/>';
    s += '<rect x="' + sx + '" y="16" width="69" height="20" rx="4" fill="' + GC_SKELETON + '"/>';
    s += '<rect x="' + sx + '" y="40" width="159" height="23" rx="4" fill="' + GC_SKELETON + '"/>';
    s += '<rect x="' + sx + '" y="67" width="159" height="18" rx="4" fill="' + GC_SKELETON + '"/>';
    s += '<rect x="' + sx + '" y="89" width="159" height="18" rx="4" fill="' + GC_SKELETON + '"/>';
    s += '<rect x="' + sx + '" y="111" width="45" height="19" rx="4" fill="' + GC_SKELETON + '"/>';
    if (m.trailing) s += '<rect x="316" y="30" width="32" height="32" rx="4" fill="' + GC_SKELETON + '"/>';
    s += '<rect x="0" y="' + (h - 1) + '" width="' + GC_W + '" height="1" fill="' + GC_DIVIDER + '"/>';
    return s + '</svg>';
  }

  var col = GC_C[c.state] || GC_C['default'];
  var rowH = _gcRowHeight(c);
  var x = m.contentX, y = 16 + (rowH - _gcContentHeight(c)) / 2;
  var iconTop = 16;                                        /* flush with the row top */
  var chevTop = 16 + Math.min(14, Math.max(0, (rowH - 32) / 2));
  if (m.icon) s += '<circle cx="' + (24 + m.icon / 2) + '" cy="' + (iconTop + m.icon / 2) + '" r="' + (m.icon / 2) +
                   '" fill="' + col.placeholder + '"/>';

  if (_gcOn(c.hasblurb, true) || _gcOn(c.hastag, true)) {
    if (_gcOn(c.hasblurb, true))
      s += '<text class="gc-blurb" x="' + x + '" y="' + (y + 14) + '" font-size="14" font-weight="700" fill="' +
           col.preamble + '" dominant-baseline="central">Blurb</text>';
    if (_gcOn(c.hastag, true)) {
      var tx = x + (_gcOn(c.hasblurb, true) ? 44 : 0);
      s += '<rect x="' + tx + '" y="' + (y + 5) + '" width="29" height="16" rx="4" fill="' + GC_TAG + '"/>';
      s += '<text class="gc-tag" x="' + (tx + 14.5) + '" y="' + (y + 13) + '" font-size="12" font-weight="700" fill="#FFFFFF"' +
           ' text-anchor="middle" dominant-baseline="central">Tag</text>';
    }
    y += 25;
  }
  s += '<text class="gc-title" x="' + x + '" y="' + (y + 11.5) + '" font-size="18" font-weight="700" fill="' + col.title +
       '" dominant-baseline="central">Heading Goes Here</text>';
  y += 23;

  [['hasdescription', 22], ['hassubtitle', 20]].forEach(function (row) {
    if (!_gcOn(c[row[0]], true)) return;
    var ry = y + (row[1] === 22 ? 11 : 9);
    s += '<text class="gc-label" x="' + x + '" y="' + ry + '" font-size="12" font-weight="600" fill="' + col.label +
         '" dominant-baseline="central">Label:</text>';
    s += '<text class="gc-desc" x="' + (x + 33) + '" y="' + ry + '" font-size="12" font-weight="600" fill="' + col.desc +
         '" dominant-baseline="central">Description goes here</text>';
    y += row[1];
  });

  if (_gcOn(c.hasbadge, true)) {
    s += '<rect x="' + x + '" y="' + (y + 8) + '" width="48" height="18" rx="9" fill="' + col.badge + '"/>';
    s += '<text class="gc-badge" x="' + (x + 24) + '" y="' + (y + 17) + '" font-size="12" font-weight="700" fill="' +
         col.badgeLabel + '" text-anchor="middle" dominant-baseline="central">Label</text>';
  }
  if (m.trailing) s += _gcChevron(332, chevTop + 16, col.chevron);
  s += '<rect x="0" y="' + (h - 1) + '" width="' + GC_W + '" height="1" fill="' + GC_DIVIDER + '"/>';
  return s + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = {
  main: {
    status: 'default', state: 'default', iconsize: 'xl',
    hasleadingelement: 'true', hassubtitle: 'true', hasblurb: 'true', hastag: 'true',
    hasdescription: 'true', hasbadge: 'true', hastrailingelement: 'true'
  }
};
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, c) {
  var l = ['EBGenericCard("Heading Goes Here")'];
  if (_gcOn(c.hasblurb, true)) l.push('    .ebBlurb("Blurb")');
  if (_gcOn(c.hastag, true)) l.push('    .ebTag("Tag")');
  if (_gcOn(c.hasdescription, true)) l.push('    .ebDescription("Label:", "Description goes here")');
  if (_gcOn(c.hassubtitle, true)) l.push('    .ebSubtitle("Label:", "Description goes here")');
  if (_gcOn(c.hasbadge, true)) l.push('    .ebBadge("Label")');
  if (_gcOn(c.hasleadingelement, true)) l.push('    .ebLeadingIcon(.' + c.iconsize + ') { Image("icon") }');
  if (!_gcOn(c.hastrailingelement, true)) l.push('    .ebTrailingIcon(nil)');
  if (c.status === 'skeleton') l.push('    .ebSkeleton(true)');
  if (c.state === 'disabled') l.push('    .disabled(true)');
  return l.join('\n');
}
function buildComposeSnippet(cardKey, c) {
  var l = ['EBGenericCard(', '    title = "Heading Goes Here",'];
  if (_gcOn(c.hasblurb, true)) l.push('    blurb = "Blurb",');
  if (_gcOn(c.hastag, true)) l.push('    tag = "Tag",');
  if (_gcOn(c.hasdescription, true)) l.push('    description = "Label: Description goes here",');
  if (_gcOn(c.hassubtitle, true)) l.push('    subtitle = "Label: Description goes here",');
  if (_gcOn(c.hasbadge, true)) l.push('    badge = "Label",');
  if (_gcOn(c.hasleadingelement, true)) {
    l.push('    iconSize = EBGenericCardIconSize.' + c.iconsize.toUpperCase() + ',');
    l.push('    leadingIcon = { Image(painterResource(R.drawable.icon), null) },');
  }
  if (!_gcOn(c.hastrailingelement, true)) l.push('    trailingIcon = null,');
  if (c.status === 'skeleton') l.push('    skeleton = true,');
  if (c.state === 'disabled') l.push('    enabled = false,');
  l.push('    onClick = { }');
  l.push(')');
  return l.join('\n');
}
function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

/* ── Control handler ────────────────────────────────────────────────── */
function _gcSync(cardStyle, card) {
  ['status', 'state'].forEach(function (a) {
    var el = document.querySelector('[onchange*="updateSpecCard(\'' + cardStyle + '\', \'' + a + '\'"]');
    if (el) el.value = card[a];
  });
  /* IconSize only describes the leading icon — lock it when there is none. */
  var sizeCtl = document.querySelector('[onchange*="updateSpecCard(\'' + cardStyle + '\', \'iconsize\'"]');
  if (sizeCtl) {
    sizeCtl.disabled = !_gcOn(card.hasleadingelement, true);
    if (sizeCtl.parentElement) sizeCtl.parentElement.classList.toggle('is-disabled', sizeCtl.disabled);
  }
}

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;
  var key = _gcResolve(card, prop);
  _gcSync(cardStyle, card);

  var host = document.getElementById('generic-card-spec-' + cardStyle);
  if (host) host.innerHTML = _gcRender(card);

  ['status', 'state', 'iconsize', 'hasleadingelement', 'hassubtitle', 'hasblurb', 'hastag',
   'hasdescription', 'hasbadge', 'hastrailingelement'].forEach(function (a) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + a + '"]');
    if (!el) return;
    if (a.indexOf('has') === 0) el.textContent = card[a] === 'true' ? 'True' : 'False';
    else if (a === 'iconsize') el.textContent = _gcOn(card.hasleadingelement, true) ? card.iconsize.toUpperCase() : '—';
    else el.textContent = card[a].charAt(0).toUpperCase() + card[a].slice(1);
  });
  var m = _gcMetrics(card), h = _gcHeight(card);
  var put = function (name, text) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + name + '"]');
    if (el) el.textContent = text;
  };
  put('size-readout', GC_W + ' × ' + h);
  put('icon-readout', m.icon ? m.icon + ' × ' + m.icon : '—');
  put('content-readout', m.contentW + ' wide at x ' + m.contentX);
  put('variantNode', GC_NODES[key] + ' · ' + GC_W + ' × ' + h);

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

/* ── Overview tab shim — the old panel drove gcard-ctrl-* selects. ─── */
function _gcardUpdate() {
  var el = document.getElementById('gcard-demo-preview') || document.getElementById('gc-demo-preview');
  if (!el) return;
  var yes = function (id, f) { var n = document.getElementById(id); return (n ? n.value : f) === 'yes' ? 'true' : 'false'; };
  var v = function (id, f) { var n = document.getElementById(id); return n ? n.value : f; };
  el.innerHTML = _gcRender({
    status: v('gcard-ctrl-status', 'default'), state: v('gcard-ctrl-state', 'default'),
    iconsize: v('gcard-ctrl-iconsize', 'xl'),
    hasleadingelement: 'true',
    hassubtitle: yes('gcard-ctrl-hassubtitle', 'yes'),
    hasblurb: yes('gcard-ctrl-hasblurb', 'yes'),
    hastag: yes('gcard-ctrl-hastag', 'yes'),
    hasdescription: yes('gcard-ctrl-has2desc', 'yes'),
    hasbadge: yes('gcard-ctrl-hasbadge', 'yes'),
    hastrailingelement: yes('gcard-ctrl-haschevron', 'yes')
  });
}
window._gcardUpdate = _gcardUpdate;

/* ── First paint ────────────────────────────────────────────────────── */
function _gcInit() {
  _gcardUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'status', _specCards[k].status);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _gcInit);
else _gcInit();
document.addEventListener('astro:page-load', _gcInit);
