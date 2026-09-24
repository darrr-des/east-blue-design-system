/* Chip — Style tab demo.
 * Rebuilt from Figma component set 5595:39596 (GCash DS 2026 Working File).
 * Offsets, fills and text styles read off get_node_info and
 * get_styled_text_segments; checked against export_node_as_image.
 *
 * Panel (set 5595:39596, from the property-panel screenshot):
 *   hasValue        · False, True              (variant)
 *   State           · Pressed, Disabled, Default (variant)
 *   hasLeadingIcon  · False, True              (variant)
 *   hasTrailingIcon · True, False              (variant)
 *   ⤷ Leading-Icon  · Placeholder    (instance swap)
 *   ⤷ Trailing-Icon · Chevron Down   (instance swap)
 *   Dropdown-Slot   · 12 items       (slot, ships empty)
 * 2 x 3 x 2 x 2 = 24 variants, all built.
 *
 * The pill is 32 tall with radius 99 and hugs its row:
 *   left 4 + icon 24 + 4   (or 14 with no leading icon)
 *   + Label 41
 *   + 8 + Value 42         (hasValue)
 *   + 8 + chevron 16       (hasTrailingIcon)
 *   + right 14
 * which gives 161 with everything on, 69 with the label alone, and 87,
 * 93, 111, 137, 143 for the combinations in between — all confirmed
 * against the set.
 *
 * The chevron's own fill is not exposed by the plugin. In the export it
 * follows the last piece of text — Value when shown, otherwise Label —
 * so the preview draws it that way.
 */

var CHIP_NODES = {"false|pressed|true|true":"5595:39597","false|pressed|true|false":"5595:39607","false|pressed|false|true":"5595:39614","false|pressed|false|false":"5595:39621","false|disabled|true|true":"5595:39625","false|disabled|true|false":"5595:39635","false|disabled|false|true":"5595:39642","false|disabled|false|false":"5595:39649","false|default|true|true":"5595:39653","false|default|true|false":"5595:39663","false|default|false|true":"5595:39670","false|default|false|false":"5595:39677","true|pressed|true|true":"5595:39681","true|pressed|true|false":"5595:39693","true|pressed|false|true":"5595:39702","true|pressed|false|false":"5595:39711","true|disabled|true|true":"5595:39717","true|disabled|true|false":"5595:39729","true|disabled|false|true":"5595:39738","true|disabled|false|false":"5595:39747","true|default|true|true":"5595:39753","true|default|true|false":"5595:39765","true|default|false|true":"5595:39774","true|default|false|false":"5595:39783"};
var CHIP_H = 32;

/* Pill fill, border and the two text colours per State. */
var CHIP_STATE = {
  'default':  { fill: 'none',    stroke: '#D7E0EF', label: '#6780A9', labelOpacity: 1,   value: '#005CE5' },
  'pressed':  { fill: '#005CE5', stroke: 'none',    label: '#F6F9FD', labelOpacity: 0.8, value: '#FFFFFF' },
  'disabled': { fill: '#EEF2F9', stroke: 'none',    label: '#C2CFE5', labelOpacity: 1,   value: '#9BC5FD' }
};
var CHIP_PLACEHOLDER = '#D3DCEA';

function _chOn(v, def) { return v == null ? def : v === 'true'; }
function _chKey(c) { return [c.hasvalue, c.state, c.hasleadingicon, c.hastrailingicon].join('|'); }

function _chWidth(c) {
  var lead = _chOn(c.hasleadingicon, true), value = _chOn(c.hasvalue, true), trail = _chOn(c.hastrailingicon, true);
  return (lead ? 4 + 24 + 4 : 14) + 41 + (value ? 8 + 42 : 0) + (trail ? 8 + 16 : 0) + 14;
}

function _chChevron(x, y, fill) {
  return '<path d="M' + (x + 4) + ' ' + (y + 6.5) + 'l4 4 4 -4" stroke="' + fill +
         '" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>';
}

function _chRender(c) {
  var st = CHIP_STATE[c.state] || CHIP_STATE['default'];
  var lead = _chOn(c.hasleadingicon, true), value = _chOn(c.hasvalue, true), trail = _chOn(c.hastrailingicon, true);
  var w = _chWidth(c);
  var s = '<svg width="' + w + '" height="' + CHIP_H + '" viewBox="0 0 ' + w + ' ' + CHIP_H +
          '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<rect x="0.5" y="0.5" width="' + (w - 1) + '" height="' + (CHIP_H - 1) + '" rx="' + ((CHIP_H - 1) / 2) +
       '" fill="' + (st.fill === 'none' ? '#FFFFFF' : st.fill) + '"' +
       (st.stroke === 'none' ? '' : ' stroke="' + st.stroke + '"') + '/>';

  var x = 14;
  if (lead) { s += '<circle cx="16" cy="16" r="12" fill="' + CHIP_PLACEHOLDER + '"/>'; x = 32; }
  s += '<text class="chip-label" x="' + x + '" y="16" font-size="16" font-weight="700" fill="' + st.label +
       '" fill-opacity="' + st.labelOpacity + '" dominant-baseline="central">Label</text>';
  x += 41;
  if (value) {
    s += '<text class="chip-value" x="' + (x + 8) + '" y="16" font-size="16" font-weight="700" fill="' + st.value +
         '" dominant-baseline="central">Value</text>';
    x += 8 + 42;
  }
  if (trail) s += _chChevron(x + 8, 8, value ? st.value : st.label);
  return s + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = { main: { hasvalue: 'true', state: 'default', hasleadingicon: 'true', hastrailingicon: 'true' } };
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, c) {
  var l = ['EBChip("Label")'];
  if (_chOn(c.hasvalue, true)) l.push('    .ebValue("Value")');
  if (_chOn(c.hasleadingicon, true)) l.push('    .ebLeadingIcon { Image("placeholder") }');
  if (_chOn(c.hastrailingicon, true)) l.push('    .ebTrailingIcon(.chevronDown)');
  if (c.state === 'disabled') l.push('    .disabled(true)');
  l.push('    .ebDropdown { EBMenu(options) }');
  return l.join('\n');
}
function buildComposeSnippet(cardKey, c) {
  var l = ['EBChip(', '    label = "Label",'];
  if (_chOn(c.hasvalue, true)) l.push('    value = "Value",');
  if (_chOn(c.hasleadingicon, true)) l.push('    leadingIcon = { Icon(painterResource(R.drawable.placeholder), null) },');
  if (_chOn(c.hastrailingicon, true)) l.push('    trailingIcon = EBIcons.ChevronDown,');
  if (c.state === 'disabled') l.push('    enabled = false,');
  l.push('    dropdown = { EBMenu(options) },');
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

  var host = document.getElementById('chip-spec-' + cardStyle);
  if (host) host.innerHTML = _chRender(card);

  ['hasvalue', 'state', 'hasleadingicon', 'hastrailingicon'].forEach(function (a) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + a + '"]');
    if (!el) return;
    el.textContent = a === 'state'
      ? card.state.charAt(0).toUpperCase() + card.state.slice(1)
      : (card[a] === 'true' ? 'True' : 'False');
  });
  var w = _chWidth(card);
  var put = function (name, text) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + name + '"]');
    if (el) el.textContent = text;
  };
  put('size-readout', w + ' × ' + CHIP_H);
  put('variantNode', CHIP_NODES[_chKey(card)] + ' · ' + w + ' × ' + CHIP_H);

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

/* ── Overview tab shim — the old panel had style / leading / trailing. ── */
var _chipDemo = { style: 'outline', leading: 'yes', trailing: 'yes' };
function updateChipDemo() {
  var el = document.getElementById('chip-demo-preview');
  if (!el) return;
  var v = function (id, f) { var n = document.getElementById(id); return n ? n.value : f; };
  var style = v('chip-demo-style', 'outline');
  el.innerHTML = _chRender({
    hasvalue: 'false',
    state: style === 'filled' ? 'pressed' : (style === 'light' ? 'disabled' : 'default'),
    hasleadingicon: v('chip-demo-leading', 'yes') === 'yes' ? 'true' : 'false',
    hastrailingicon: v('chip-demo-trailing', 'yes') === 'yes' ? 'true' : 'false'
  });
}
window.updateChipDemo = updateChipDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _chInit() {
  updateChipDemo();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _chInit);
else _chInit();
document.addEventListener('astro:page-load', _chInit);
