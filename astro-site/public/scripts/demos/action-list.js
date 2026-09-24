/* Action Row — Style tab demo.
 * Rebuilt from Figma component set 4628:19843 (GCash DS 2026 Working File).
 * Offsets, fills and text styles read off get_node_info and
 * get_styled_text_segments; checked against export_node_as_image.
 *
 * Panel (set 4628:19843, from the property-panel screenshot):
 *   TrailingContent      · CTA, Counter                       (variant)
 *   State                · Default, Loading, Disabled, Pressed (variant)
 *   Density              · Expanded, Compact                  (variant)
 *   hasAsset             · True   (boolean)
 *   hasDescription       · True   (boolean)
 *   hasLeadingComponent  · True   (boolean)
 *   hasTrailingComponent · True   (boolean)
 *   hasBottomBorder      · False  (boolean)
 *   Title                · "Label"       (text)
 *   Description          · "description" (text)
 * Slots (no control): Asset-Slot (12 items) · Counter-Slot (6 items) ·
 *   Leading-Slot (6 items).
 * 2 x 4 x 2 = 16 variants, all built.
 *
 * 360 wide. Density sets the vertical padding — Expanded 13 (64 tall),
 * Compact 9 (56) — around a 38-tall Row: Asset-Slot 32 at x 12, a 12 gap,
 * the text column, then the TrailingGroup at the right edge. CTA gives a
 * 64-wide group (30 label + 32 icon), Counter a 56-wide one (32 chevron +
 * 24 counter), and the text column takes what is left: 216 or 224.
 *
 * Loading replaces the row with skeleton bars and is 56 tall whatever
 * Density says — see the card.
 */

var AR_W = 360;
var AR_NODES = {
  'cta|default|compact': '4628:19844',   'cta|default|expanded': '4628:19857',
  'cta|pressed|expanded': '4628:19870',  'cta|pressed|compact': '4628:20022',
  'cta|disabled|compact': '4628:19939',  'cta|disabled|expanded': '4628:19952',
  'cta|loading|expanded': '4649:16639',  'cta|loading|compact': '4649:16649',
  'counter|default|compact': '4628:19883', 'counter|default|expanded': '4628:19911',
  'counter|pressed|compact': '4628:19897', 'counter|pressed|expanded': '4628:19925',
  'counter|disabled|compact': '4628:19965', 'counter|disabled|expanded': '4628:19979',
  'counter|loading|compact': '4628:20010', 'counter|loading|expanded': '4628:20016'
};

var AR_STATE = {
  'default':  { bg: '#FFFFFF', label: '#0A2757', asset: '#D7E0EF', cta: '#005CE5' },
  'pressed':  { bg: '#F6F9FD', label: '#0A2757', asset: '#D7E0EF', cta: '#005CE5' },
  'disabled': { bg: '#FFFFFF', label: '#C2CFE5', asset: '#EEF2F9', cta: '#C2CFE5' },
  'loading':  { bg: '#FFFFFF', label: '#C2CFE5', asset: '#EEF2F9', cta: '#C2CFE5' }
};
var AR_SKELETON = '#EEF2F9', AR_BORDER = '#D7E0EF';
var AR_COUNTER = { bg: '#EEF2F9', value: '#072592' };

function _arOn(v, def) { return v == null ? def : v === 'true'; }
function _arKey(c) { return [c.trailingcontent, c.state, c.density].join('|'); }

/* Description colour is read per variant: #6780A9 on CTA, #90A8D0 on
 * Counter, #C2CFE5 when Disabled. */
function _arDesc(c) {
  if (c.state === 'disabled') return '#C2CFE5';
  return c.trailingcontent === 'counter' ? '#90A8D0' : '#6780A9';
}

/* Row height is the tallest of the three columns: the 32 asset, the text
 * stack (Label 16, then 8 + Description 14) and the 32 trailing group.
 * The set only ships the booleans on, so with them off the height is
 * computed this way rather than read — the card says so. */
function _arRowHeight(c) {
  var text = 16 + (_arOn(c.hasdescription, true) ? 8 + 14 : 0);
  var asset = _arOn(c.hasasset, true) ? 32 : 0;
  var trailing = (_arOn(c.hasleadingcomponent, true) || _arOn(c.hastrailingcomponent, true)) ? 32 : 0;
  return Math.max(text, asset, trailing);
}

function _arHeight(c) {
  if (c.state === 'loading') return 56;                 /* Density has no effect */
  return _arRowHeight(c) + (c.density === 'compact' ? 9 : 13) * 2;
}

/* Chevron centred in its 32 box — cx / cy are the box's centre, which is
 * (332, top + 18) for CTA and (300, top + 18) for Counter. */
function _arChevron(cx, cy, fill) {
  return '<path d="M' + (cx - 3) + ' ' + (cy - 6) + 'l6 6 -6 6" stroke="' + fill +
         '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>';
}

function _arRender(c) {
  var st = AR_STATE[c.state] || AR_STATE['default'];
  var h = _arHeight(c);
  var s = '<svg width="' + AR_W + '" height="' + h + '" viewBox="0 0 ' + AR_W + ' ' + h +
          '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<rect x="0" y="0" width="' + AR_W + '" height="' + h + '" fill="' + st.bg + '"/>';

  if (c.state === 'loading') {
    s += '<circle cx="28" cy="28" r="16" fill="' + AR_SKELETON + '"/>';
    s += '<rect x="56" y="13" width="206" height="16" rx="4" fill="' + AR_SKELETON + '"/>';
    s += '<rect x="56" y="37" width="206" height="6" rx="4" fill="' + AR_SKELETON + '"/>';
    s += '<rect x="286" y="16" width="24" height="24" rx="4" fill="' + AR_SKELETON + '"/>';
    s += '<rect x="324" y="16" width="24" height="24" rx="4" fill="' + AR_SKELETON + '"/>';
    if (_arOn(c.hasbottomborder, false)) s += '<rect x="0" y="' + (h - 1) + '" width="' + AR_W + '" height="1" fill="' + AR_BORDER + '"/>';
    return s + '</svg>';
  }

  var top = c.density === 'compact' ? 9 : 13;
  var rowH = _arRowHeight(c), mid = top + rowH / 2;
  var asset = _arOn(c.hasasset, true), desc = _arOn(c.hasdescription, true);
  var lead = _arOn(c.hasleadingcomponent, true), trail = _arOn(c.hastrailingcomponent, true);
  var counter = c.trailingcontent === 'counter';
  var groupW = counter ? 56 : 64;
  var textX = asset ? 56 : 12;

  if (asset) s += '<circle cx="28" cy="' + mid + '" r="16" fill="' + st.asset + '"/>';
  var textTop = top + (rowH - (desc ? 38 : 16)) / 2;
  s += '<text class="ar-label" x="' + textX + '" y="' + (textTop + 8) + '" font-size="16" font-weight="700" fill="' + st.label +
       '" dominant-baseline="central">' + (c.title || 'Label') + '</text>';
  if (desc) s += '<text class="ar-desc" x="' + textX + '" y="' + (textTop + 31) + '" font-size="12" font-weight="600" fill="' +
                 _arDesc(c) + '" dominant-baseline="central">' + (c.description || 'description') + '</text>';

  var gx = AR_W - 12 - groupW;
  if (counter) {
    if (trail) s += _arChevron(gx + 16, mid, c.state === 'disabled' ? '#C2CFE5' : '#0A2757');
    if (lead) {
      s += '<circle cx="' + (gx + 44) + '" cy="' + mid + '" r="12" fill="' + AR_COUNTER.bg + '"/>';
      s += '<text class="ar-counter" x="' + (gx + 44) + '" y="' + mid + '" font-size="14" font-weight="700" fill="' +
           (c.state === 'disabled' ? '#C2CFE5' : AR_COUNTER.value) + '" text-anchor="middle" dominant-baseline="central">0</text>';
    }
  } else {
    if (lead) s += '<text class="ar-cta" x="' + (gx + 30) + '" y="' + mid + '" font-size="16" font-weight="600" fill="' +
                   st.cta + '" text-anchor="end" dominant-baseline="central">CTA</text>';
    if (trail) s += _arChevron(gx + 48, mid, st.cta);
  }
  if (_arOn(c.hasbottomborder, false)) s += '<rect x="0" y="' + (h - 1) + '" width="' + AR_W + '" height="1" fill="' + AR_BORDER + '"/>';
  return s + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = {
  main: {
    trailingcontent: 'cta', state: 'default', density: 'expanded',
    hasasset: 'true', hasdescription: 'true', hasleadingcomponent: 'true',
    hastrailingcomponent: 'true', hasbottomborder: 'false',
    title: 'Label', description: 'description'
  }
};
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function _arQ(v) { return JSON.stringify(String(v)); }
function buildSwiftSnippet(cardKey, c) {
  var l = ['EBActionRow(' + _arQ(c.title || 'Label') + ')'];
  if (_arOn(c.hasdescription, true)) l.push('    .ebDescription(' + _arQ(c.description || 'description') + ')');
  if (_arOn(c.hasasset, true)) l.push('    .ebAsset { Image("asset") }');
  l.push('    .ebDensity(.' + c.density + ')');
  if (c.trailingcontent === 'counter') {
    if (_arOn(c.hasleadingcomponent, true)) l.push('    .ebCounter(0)');
  } else if (_arOn(c.hasleadingcomponent, true)) l.push('    .ebCTA("CTA")');
  if (!_arOn(c.hastrailingcomponent, true)) l.push('    .ebTrailingIcon(nil)');
  if (_arOn(c.hasbottomborder, false)) l.push('    .ebBottomBorder(true)');
  if (c.state === 'disabled') l.push('    .disabled(true)');
  if (c.state === 'loading') l.push('    .ebLoading(true)');
  return l.join('\n');
}
function buildComposeSnippet(cardKey, c) {
  var l = ['EBActionRow(', '    title = ' + _arQ(c.title || 'Label') + ','];
  if (_arOn(c.hasdescription, true)) l.push('    description = ' + _arQ(c.description || 'description') + ',');
  if (_arOn(c.hasasset, true)) l.push('    asset = { Image(painterResource(R.drawable.asset), null) },');
  l.push('    density = EBActionRowDensity.' + (c.density === 'compact' ? 'Compact' : 'Expanded') + ',');
  if (c.trailingcontent === 'counter') {
    if (_arOn(c.hasleadingcomponent, true)) l.push('    counter = 0,');
  } else if (_arOn(c.hasleadingcomponent, true)) l.push('    ctaLabel = "CTA",');
  if (!_arOn(c.hastrailingcomponent, true)) l.push('    trailingIcon = null,');
  if (_arOn(c.hasbottomborder, false)) l.push('    showsBottomBorder = true,');
  if (c.state === 'disabled') l.push('    enabled = false,');
  if (c.state === 'loading') l.push('    loading = true,');
  l.push('    onClick = { }');
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

  var host = document.getElementById('action-list-spec-' + cardStyle);
  if (host) host.innerHTML = _arRender(card);

  ['trailingcontent', 'state', 'density', 'hasasset', 'hasdescription', 'hasleadingcomponent',
   'hastrailingcomponent', 'hasbottomborder', 'title', 'description'].forEach(function (a) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + a + '"]');
    if (!el) return;
    if (a.indexOf('has') === 0) el.textContent = card[a] === 'true' ? 'True' : 'False';
    else if (a === 'title' || a === 'description') el.textContent = card[a];
    else el.textContent = card[a].charAt(0).toUpperCase() + card[a].slice(1);
  });
  var h = _arHeight(card);
  var put = function (name, text) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + name + '"]');
    if (el) el.textContent = text;
  };
  put('size-readout', AR_W + ' × ' + h);
  put('variantNode', AR_NODES[_arKey(card)] + ' · ' + AR_W + ' × ' + h);

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

/* ── Overview tab shim — the old panel drove lit-ctrl-* selects. ──── */
function updateLitDemo() {
  var el = document.getElementById('lit-demo-preview');
  if (!el) return;
  var v = function (id, f) { var n = document.getElementById(id); return n ? n.value : f; };
  var variant = v('lit-ctrl-variant', 'cta');
  el.innerHTML = _arRender({
    trailingcontent: variant === 'counter' ? 'counter' : 'cta',
    state: v('lit-ctrl-state', 'default'),
    density: v('lit-ctrl-density', 'expanded'),
    hasasset: 'true',
    hasdescription: v('lit-ctrl-desc', 'yes') === 'no' ? 'false' : 'true',
    hasleadingcomponent: 'true', hastrailingcomponent: 'true', hasbottomborder: 'false',
    title: v('lit-ctrl-label', 'Label')
  });
}
window.updateLitDemo = updateLitDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _arInit() {
  updateLitDemo();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _arInit);
else _arInit();
document.addEventListener('astro:page-load', _arInit);
