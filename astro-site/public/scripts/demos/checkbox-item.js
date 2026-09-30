/* Checkbox with Label (CheckboxItem) — Style tab demo.
 * Built from Figma component set 17734:161220 (GCash DS Sticker Sheets v2).
 * Offsets, fills and text styles read off get_node_info and
 * get_styled_text_segments; the tick path from get_svg on Checkbox_New.
 *
 * Panel (set 17734:161220):
 *   isSelected · false, true       (variant)
 *   Size       · Small, Medium     (variant)
 * 2 x 2 = 4 variants, all built. The row is 226 wide in the set and holds
 * a Checkbox_New instance beside a label and a description.
 *
 *   Small   226 x 34 — a 16 box, label 14/16, description 12/18
 *   Medium  226 x 40 — a 20 box, label 18/22, description 12/18
 * The gap between the box and the text is 8 in both.
 *
 * The set carries no State axis and no Large size, where Checkbox_New has
 * five States and three Sizes — see the card.
 */

var CI_W = 226;
var CI_NODES = {
  'false|small': '17734:161187', 'true|small': '17734:161188',
  'false|medium': '17739:1058',  'true|medium': '17739:1052'
};
var CI_C = { box: '#D7E0EF', boxOn: '#1972F9', label: '#102C57', description: '#66788F' };

/* size → [row height, box, label size, label line, tick path, tick stroke] */
var CI_SIZE = {
  small:  [34, 16, 14, 16, 'M5 8L7 10L11 6',  2],
  medium: [40, 20, 18, 22, 'M6 10L9 13L15 7', 2.3]
};

function _ciKey(c) { return c.isselected + '|' + c.size; }

function _ciRender(c) {
  var m = CI_SIZE[c.size] || CI_SIZE['medium'];
  var h = m[0], box = m[1], on = c.isselected === 'true';
  var tx = box + 8;
  var s = '<svg width="' + CI_W + '" height="' + h + '" viewBox="0 0 ' + CI_W + ' ' + h +
          '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  if (on) {
    s += '<rect x="0" y="0" width="' + box + '" height="' + box + '" rx="4" fill="' + CI_C.boxOn + '"/>';
    s += '<path d="' + m[4] + '" stroke="#FFFFFF" stroke-width="' + m[5] +
         '" stroke-linecap="round" stroke-linejoin="round"/>';
  } else {
    s += '<rect x="1" y="1" width="' + (box - 2) + '" height="' + (box - 2) + '" rx="3" stroke="' + CI_C.box +
         '" stroke-width="2"/>';
  }
  s += '<text class="ci-label" x="' + tx + '" y="' + (m[3] / 2) + '" font-size="' + m[2] + '" font-weight="700" fill="' +
       CI_C.label + '" dominant-baseline="central">' + (c.label || 'Label') + '</text>';
  s += '<text class="ci-desc" x="' + tx + '" y="' + (m[3] + 9) + '" font-size="12" font-weight="500" fill="' +
       CI_C.description + '" dominant-baseline="central">' + (c.description || 'Description') + '</text>';
  return s + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = { main: { isselected: 'false', size: 'medium', label: 'Label', description: 'Description' } };
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function _ciCap(v) { return v.charAt(0).toUpperCase() + v.slice(1); }
function buildSwiftSnippet(cardKey, c) {
  return ['EBCheckboxItem(', '    "' + (c.label || 'Label') + '",',
    '    description: "' + (c.description || 'Description') + '",',
    '    isOn: $isOn,', '    size: .' + c.size, ')'].join('\n');
}
function buildComposeSnippet(cardKey, c) {
  return ['EBCheckboxItem(', '    label = "' + (c.label || 'Label') + '",',
    '    description = "' + (c.description || 'Description') + '",',
    '    checked = ' + (c.isselected === 'true') + ',', '    onCheckedChange = { checked = it },',
    '    size = EBCheckboxSize.' + _ciCap(c.size), ')'].join('\n');
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

  var host = document.getElementById('checkbox-item-spec-' + cardStyle);
  if (host) host.innerHTML = _ciRender(card);

  var m = CI_SIZE[card.size] || CI_SIZE['medium'];
  var put = function (name, text) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + name + '"]');
    if (el) el.textContent = text;
  };
  put('isselected', card.isselected);
  put('size', _ciCap(card.size));
  put('label', card.label);
  put('description', card.description);
  put('size-readout', CI_W + ' × ' + m[0]);
  put('box-readout', m[1] + ' × ' + m[1]);
  put('label-readout', m[2] + ' / ' + m[3]);
  put('style-readout', card.size === 'small' ? 'Primary/Multi-line Label/Small' : 'Primary/Multi-line Label/Large');
  put('variantNode', CI_NODES[_ciKey(card)] + ' · ' + CI_W + ' × ' + m[0]);

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

/* ── Overview tab ───────────────────────────────────────────────────── */
function updateCheckboxItemDemo() {
  var el = document.getElementById('ci-demo-preview');
  if (!el) return;
  var v = function (id, f) { var n = document.getElementById(id); return n ? n.value : f; };
  el.innerHTML = _ciRender({ isselected: v('ci-demo-selected', 'false'), size: v('ci-demo-size', 'medium') });
}
window.updateCheckboxItemDemo = updateCheckboxItemDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _ciInit() {
  updateCheckboxItemDemo();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'size', _specCards[k].size);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _ciInit);
else _ciInit();
document.addEventListener('astro:page-load', _ciInit);
