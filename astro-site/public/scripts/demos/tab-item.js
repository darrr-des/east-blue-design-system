/* Tab Item — Style tab demo.
 * Rebuilt from Figma component set 26327:10941 (Sticker Sheets v2).
 * Sizes, offsets and fills read off get_node_info; what actually draws
 * checked against get_svg and export_node_as_image.
 *
 * Panel (set 26327:10941, from the property-panel screenshot):
 *   State              · Default, Hover, Disabled   (variant)
 *   Orientation        · Horizontal, Vertical       (variant)
 *   Size               · Medium, Large              (variant)
 *   Placement          · Leading, Trailing          (variant)
 *   isSelected         · true, false                (variant)
 *   hasIcon            · True                       (boolean)
 *   hasCounter         · False                      (boolean)
 *   hasNotificationDot · False                      (boolean)
 * Slots (no control): Icon Slot (23 swap options) · Icon Slot2 (1)
 *
 * 24 of the 48 variant combinations are built; the panel snaps to the
 * nearest built one.
 *
 * At the panel defaults only the label and the 2px underline draw, which
 * is what get_svg and export_node_as_image return: hasCounter and
 * hasNotificationDot are False, and hasIcon is True over an Icon Slot with
 * nothing swapped in.
 *
 * The frame HUGS its visible children — confirmed in Figma: label only is
 * 65 Hug × 48 Hug, and the same tab with the counter on is 97 Hug × 48.
 * So the size follows the booleans: 12 padding, an 8 gap between parts,
 * a 24 icon slot and a 24 counter. The red dot is absolutely placed and
 * changes nothing. (A hidden child keeps its last coordinates, which is
 * why get_node_info reports the counter past the right edge.)
 */

var TI_AXES = ['state', 'orientation', 'size', 'placement', 'isselected'];

/* key = state|orientation|size|placement|isselected */
var TI_VARIANTS = [
  ['default|vertical|medium|leading|true',    '26327:10942', 65, 92],
  ['hover|vertical|medium|leading|true',      '26347:4682',  65, 92],
  ['default|vertical|medium|leading|false',   '26327:10951', 65, 92],
  ['disabled|vertical|medium|leading|false',  '26347:4673',  65, 92],
  ['default|vertical|large|leading|true',     '26327:10960', 70, 92],
  ['hover|vertical|large|leading|true',       '26347:4691',  70, 92],
  ['default|vertical|large|leading|false',    '26327:10969', 70, 92],
  ['disabled|vertical|large|leading|false',   '26347:4700',  70, 92],
  ['default|horizontal|medium|leading|true',  '26327:10978', 97, 48],
  ['hover|horizontal|medium|leading|true',    '26347:4741',  97, 48],
  ['default|horizontal|medium|leading|false', '26327:10986', 97, 48],
  ['disabled|horizontal|medium|leading|false','26347:4709',  97, 48],
  ['default|horizontal|medium|trailing|true', '26327:11034', 97, 48],
  ['hover|horizontal|medium|trailing|true',   '26347:4749',  97, 48],
  ['default|horizontal|medium|trailing|false','26327:10994', 97, 48],
  ['disabled|horizontal|medium|trailing|false','26347:4717', 97, 48],
  ['default|horizontal|large|leading|true',   '26327:11002', 102, 50],
  ['hover|horizontal|large|leading|true',     '26347:4757',  102, 50],
  ['default|horizontal|large|leading|false',  '26327:11018', 102, 50],
  ['disabled|horizontal|large|leading|false', '26347:4773',  102, 50],
  ['default|horizontal|large|trailing|true',  '26327:11010', 102, 50],
  ['hover|horizontal|large|trailing|true',    '26347:4765',  102, 50],
  ['default|horizontal|large|trailing|false', '26327:11026', 102, 50],
  ['disabled|horizontal|large|trailing|false','26347:4781',  102, 50]
].map(function (v) { return { key: v[0], node: v[1], w: v[2], h: v[3] }; });

/* Label colour follows State + isSelected; the underline follows it too,
   and is #E5EBF4 whenever the tab is not selected. */
function _tiColors(state, selected) {
  if (state === 'disabled') return { label: '#C2CFE5', rule: '#E5EBF4' };
  if (selected !== 'true') return { label: '#6780A9', rule: '#E5EBF4' };
  return state === 'hover' ? { label: '#2340A9', rule: '#2340A9' } : { label: '#005CE5', rule: '#005CE5' };
}

/* Label box, measured per orientation / size / placement. */
function _tiLabel(v) {
  var p = v.key.split('|'), orient = p[1], size = p[2], place = p[3];
  if (orient === 'vertical') {
    return size === 'medium'
      ? { x: 12, w: 41, cy: 68, fs: 16 }
      : { x: 12, w: 46, cy: 68, fs: 18 };
  }
  if (size === 'medium') {
    return place === 'leading' ? { x: 44, w: 41, cy: 24, fs: 16 } : { x: 12, w: 41, cy: 24, fs: 16 };
  }
  return place === 'leading' ? { x: 44, w: 46, cy: 26, fs: 18 } : { x: 12, w: 46, cy: 26, fs: 18 };
}

function _tiKey(card) { return TI_AXES.map(function (a) { return card[a]; }).join('|'); }

function _tiResolve(card, changed) {
  var key = _tiKey(card);
  for (var i = 0; i < TI_VARIANTS.length; i++) if (TI_VARIANTS[i].key === key) return TI_VARIANTS[i];
  var parts = key.split('|'), ci = changed ? TI_AXES.indexOf(changed) : -1;
  var best = null, bestScore = -1;
  TI_VARIANTS.forEach(function (v) {
    var vp = v.key.split('|');
    if (ci >= 0 && vp[ci] !== parts[ci]) return;
    var score = 0;
    for (var j = 0; j < vp.length; j++) if (vp[j] === parts[j]) score++;
    if (score > bestScore) { bestScore = score; best = v; }
  });
  return best || TI_VARIANTS[0];
}

var TI_PAD = 12, TI_GAP = 8, TI_COUNTER = 24;

/* Hug layout, from the measured parts: horizontal lays icon, label and
   counter in a row; vertical stacks a 32 icon above the label row. */
function _tiLayout(v, card) {
  var p = v.key.split('|'), vert = p[1] === 'vertical', med = p[2] === 'medium', lead = p[3] === 'leading';
  var on = function (x, def) { return x == null ? def : x === 'true'; };
  var icon = on(card && card.hasicon, true), counter = on(card && card.hascounter, false), dot = on(card && card.hasnotificationdot, false);
  var labelW = med ? 41 : 46, labelH = med ? 24 : 26, fs = med ? 16 : 18;
  var iconS = vert ? 32 : 24;
  var o = { icon: icon, counter: counter, dot: dot, fs: fs, iconS: iconS };

  if (vert) {
    var rowW = labelW + (counter ? TI_GAP + TI_COUNTER : 0);
    o.w = TI_PAD * 2 + rowW;
    o.h = TI_PAD * 2 + (icon ? iconS + 12 : 0) + labelH;
    o.iconX = (o.w - iconS) / 2;
    o.iconY = TI_PAD;
    o.labelX = TI_PAD;
    o.labelW = labelW;
    o.labelCy = TI_PAD + (icon ? iconS + 12 : 0) + labelH / 2;
    o.counterX = TI_PAD + labelW + TI_GAP;
    o.counterY = o.labelCy - 12;
  } else {
    var parts = [];
    if (icon && lead) parts.push(iconS);
    parts.push(labelW);
    if (icon && !lead) parts.push(iconS);
    if (counter) parts.push(TI_COUNTER);
    o.w = TI_PAD * 2 + parts.reduce(function (a, b) { return a + b; }, 0) + TI_GAP * (parts.length - 1);
    o.h = med ? 48 : 50;
    var x = TI_PAD;
    if (icon && lead) { o.iconX = x; x += iconS + TI_GAP; }
    o.labelX = x; o.labelW = labelW; x += labelW + TI_GAP;
    if (icon && !lead) { o.iconX = x; x += iconS + TI_GAP; }
    if (counter) o.counterX = x;
    o.iconY = (o.h - iconS) / 2;
    o.labelCy = o.h / 2;
    o.counterY = (o.h - 24) / 2;
  }
  o.dotX = o.w - TI_PAD + 4 - 6;
  o.dotY = 4;
  return o;
}

function _tiRender(v, card) {
  card = card || {};
  var p = v.key.split('|'), c = _tiColors(p[0], p[4]), g = _tiLayout(v, card);

  var s = '<svg width="' + g.w + '" height="' + g.h + '" viewBox="0 0 ' + g.w + ' ' + g.h + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<rect width="' + g.w + '" height="' + g.h + '" fill="#FFFFFF"/>';

  /* Icon Slot ships empty — hasIcon=True shows the slot, not a glyph. */
  if (g.icon) {
    s += '<rect x="' + (g.iconX + 0.5) + '" y="' + (g.iconY + 0.5) + '" width="' + (g.iconS - 1) + '" height="' + (g.iconS - 1) +
         '" rx="' + (g.iconS / 2) + '" stroke="#C2CFE5" stroke-dasharray="3 2"/>';
  }
  s += '<text class="ti-label" x="' + (g.labelX + g.labelW / 2) + '" y="' + g.labelCy + '" font-size="' + g.fs +
       '" font-weight="700" fill="' + c.label + '" text-anchor="middle" dominant-baseline="central">Label</text>';
  if (g.counter) {
    s += '<rect x="' + g.counterX + '" y="' + g.counterY + '" width="24" height="24" rx="12" fill="#EEF2F9"/>';
    s += '<text class="ti-label" x="' + (g.counterX + 12) + '" y="' + (g.counterY + 12) +
         '" font-size="14" font-weight="700" fill="#072592" text-anchor="middle" dominant-baseline="central">0</text>';
  }
  if (g.dot) s += '<circle cx="' + (g.dotX + 3) + '" cy="' + (g.dotY + 3) + '" r="3" fill="#D61B2C"/>';
  s += '<rect y="' + (g.h - 2) + '" width="' + g.w + '" height="2" fill="' + c.rule + '"/>';
  return s + '</svg>';
}

/* Size readout for the Layout row — the same hug maths. */
function _tiSize(v, card) { var g = _tiLayout(v, card); return g.w + ' × ' + g.h + ' — Hug'; }
window._tiSize = _tiSize;

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = {
  main: {
    state: 'default', orientation: 'vertical', size: 'medium', placement: 'leading', isselected: 'true',
    hasicon: 'true', hascounter: 'false', hasnotificationdot: 'false'
  }
};
window._specCards = _specCards;

var TI_LABEL = { isselected: { 'true': 'true', 'false': 'false' } };
function _tiCap(v) { return v.charAt(0).toUpperCase() + v.slice(1); }
function _tiShow(a, v) { return a === 'isselected' ? v : _tiCap(v); }

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, c) {
  var l = ['EBTabItem("Label", isSelected: ' + c.isselected + ')'];
  if (c.hasicon === 'false') l.push('    .ebIconHidden()');
  if (c.hascounter === 'true') l.push('    .ebCounter(0)');
  if (c.hasnotificationdot === 'true') l.push('    .ebNotificationDot(true)');
  l.push('    .ebOrientation(.' + c.orientation + ')');
  l.push('    .ebControlSize(.' + (c.size === 'medium' ? 'medium' : 'large') + ')');
  if (c.orientation === 'horizontal') l.push('    .ebIconPlacement(.' + c.placement + ')');
  if (c.state === 'disabled') l.push('    .disabled(true)');
  return l.join('\n');
}
function buildComposeSnippet(cardKey, c) {
  var l = ['EBTabItem(', '    label = "Label",', '    isSelected = ' + c.isselected + ',',
           '    orientation = EBTabOrientation.' + _tiCap(c.orientation) + ',',
           '    size = EBTabSize.' + _tiCap(c.size) + ','];
  if (c.orientation === 'horizontal') l.push('    placement = EBTabPlacement.' + _tiCap(c.placement) + ',');
  if (c.hasicon === 'false') l.push('    showsIcon = false,');
  if (c.hascounter === 'true') l.push('    counter = 0,');
  if (c.hasnotificationdot === 'true') l.push('    showsNotificationDot = true,');
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
function _tiSync(cardStyle, card) {
  TI_AXES.concat(['hasicon', 'hascounter', 'hasnotificationdot']).forEach(function (a) {
    var el = document.querySelector('[onchange*="updateSpecCard(\'' + cardStyle + '\', \'' + a + '\'"]');
    if (!el) return;
    if (el.type === 'checkbox') {
      el.checked = card[a] === 'true';
      if (el.parentElement) el.parentElement.classList.toggle('is-on', el.checked);
    } else { el.value = card[a]; }
  });
}

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  var v = _tiResolve(card, prop);
  v.key.split('|').forEach(function (val, i) { card[TI_AXES[i]] = val; });
  _tiSync(cardStyle, card);

  var host = document.getElementById('tab-item-spec-' + cardStyle);
  if (host) host.innerHTML = _tiRender(v, card);

  var sizeEl = document.querySelector('[data-sp="' + cardStyle + '-size-readout"]');
  if (sizeEl) sizeEl.textContent = _tiSize(v, card);
  var nodeEl = document.querySelector('[data-sp="' + cardStyle + '-variantNode"]');
  if (nodeEl) nodeEl.textContent = v.node + ' · ' + _tiSize(v, card);


  TI_AXES.concat(['hasicon', 'hascounter', 'hasnotificationdot']).forEach(function (a) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + a + '"]');
    if (el) el.textContent = a.indexOf('has') === 0 ? (card[a] === 'true' ? 'True' : 'False') : _tiShow(a, card[a]);
  });

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
   The Overview still carries the retired panel (orientation / size /
   active / leading icon / counter / red dot); it renders the nearest
   built variant for the orientation, size and selected controls it has. */
function updateTabItemDemo() {
  var val = function (id, f) { var el = document.getElementById(id); return el ? el.value : f; };
  var el = document.getElementById('ti-demo-preview');
  if (!el) return;
  var card = {
    state: 'default',
    orientation: val('ti-demo-orient', 'vertical') === 'horizontal' ? 'horizontal' : 'vertical',
    size: val('ti-demo-size', 'medium') === 'large' ? 'large' : 'medium',
    placement: 'leading',
    isselected: val('ti-demo-active', 'true') === 'false' ? 'false' : 'true'
  };
  el.innerHTML = _tiRender(_tiResolve(card, null), card);
}
window.updateTabItemDemo = updateTabItemDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _tiInit() {
  updateTabItemDemo();
  Object.keys(_specCards).forEach(function (k) {
    var host = document.getElementById('tab-item-spec-' + k);
    if (host) host.innerHTML = _tiRender(_tiResolve(_specCards[k], null), _specCards[k]);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _tiInit);
else _tiInit();
document.addEventListener('astro:page-load', _tiInit);
