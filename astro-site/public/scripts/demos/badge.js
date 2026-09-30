/* Badge — Style tab demo.
 * Rebuilt from Figma component set 18482:28972 (GCash DS Sticker Sheets v2).
 * Offsets, fills and text styles read off get_node_info and
 * get_styled_text_segments; the Voucher outline from get_svg.
 *
 * Panel (set 18482:28972, from the property-panel screenshot):
 *   State · Primary, Brand, Information, Positive, Notice, Negative, Muted
 *   Level · Heavy, Light, Medium
 *   Type  · Voucher, Transaction, Default, Dashboard
 * 68 variants: Primary and Brand ship Heavy only, the other five states
 * ship all three Levels — 17 per Type — so the panel snaps.
 *
 * Type sets the shape, and only the shape:
 *   Default      48 x 18, radius 99, label centred
 *   Voucher      48 x 18, square but for a 4 radius on the bottom right
 *   Transaction  40 x 16, radius 4
 *   Dashboard    34 x 12, radius 4, label at 10 rather than 12
 * State and Level set the fill and label colour, the same in every Type.
 */

var BDG_NODES = {"primary|heavy|default":"18482:28973","brand|heavy|default":"18482:28975","information|light|default":"18482:28977","information|medium|default":"18482:28979","information|heavy|default":"18482:28981","positive|light|default":"18482:28983","positive|medium|default":"18482:28985","positive|heavy|default":"18482:28987","notice|light|default":"18482:28989","notice|medium|default":"18482:28991","notice|heavy|default":"18482:28993","negative|light|default":"18482:28995","negative|medium|default":"18482:28997","negative|heavy|default":"18482:28999","muted|light|default":"18482:29001","muted|medium|default":"18482:29003","muted|heavy|default":"18482:29005","primary|heavy|voucher":"18482:29007","brand|heavy|voucher":"18482:29009","information|light|voucher":"18482:29011","information|medium|voucher":"18482:29013","information|heavy|voucher":"18482:29015","positive|light|voucher":"18482:29017","positive|medium|voucher":"18482:29019","positive|heavy|voucher":"18482:29021","notice|light|voucher":"18482:29023","notice|medium|voucher":"18482:29025","notice|heavy|voucher":"18482:29027","negative|light|voucher":"18482:29029","negative|medium|voucher":"18482:29031","negative|heavy|voucher":"18482:29033","muted|light|voucher":"18482:29035","muted|medium|voucher":"18482:29037","muted|heavy|voucher":"18482:29039","primary|heavy|transaction":"18482:29041","brand|heavy|transaction":"18482:29047","information|light|transaction":"18482:29053","information|medium|transaction":"18482:29059","information|heavy|transaction":"18482:29065","positive|light|transaction":"18482:29071","positive|medium|transaction":"18482:29077","positive|heavy|transaction":"18482:29083","notice|light|transaction":"18482:29089","notice|medium|transaction":"18482:29095","notice|heavy|transaction":"18482:29101","negative|light|transaction":"18482:29107","negative|medium|transaction":"18482:29113","negative|heavy|transaction":"18482:29119","muted|light|transaction":"18482:29125","muted|medium|transaction":"18482:29131","muted|heavy|transaction":"18482:29137","primary|heavy|dashboard":"18482:29044","brand|heavy|dashboard":"18482:29050","information|light|dashboard":"18482:29056","information|medium|dashboard":"18482:29062","information|heavy|dashboard":"18482:29068","positive|light|dashboard":"18482:29074","positive|medium|dashboard":"18482:29080","positive|heavy|dashboard":"18482:29086","notice|light|dashboard":"18482:29092","notice|medium|dashboard":"18482:29098","notice|heavy|dashboard":"18482:29104","negative|light|dashboard":"18482:29110","negative|medium|dashboard":"18482:29116","negative|heavy|dashboard":"18482:29122","muted|light|dashboard":"18482:29128","muted|medium|dashboard":"18482:29134","muted|heavy|dashboard":"18482:29140"};

/* state|level → [fill, label] */
var BDG_C = {
  'primary|heavy':     ['#005CE5', '#FFFFFF'],
  'brand|heavy':       ['#1972F9', '#FFFFFF'],
  'information|light': ['#E5F1FF', '#005CE5'],
  'information|medium':['#D2E5FF', '#005CE5'],
  'information|heavy': ['#2340A9', '#FFFFFF'],
  'positive|light':    ['#E7F8F0', '#048570'],
  'positive|medium':   ['#CAF2E0', '#048570'],
  'positive|heavy':    ['#12AF80', '#FFFFFF'],
  'notice|light':      ['#FCF0CA', '#966F0B'],
  'notice|medium':     ['#F7D96E', '#966F0B'],
  'notice|heavy':      ['#CA970C', '#FFFFFF'],
  'negative|light':    ['#F8E6E6', '#B50707'],
  'negative|medium':   ['#F4C7C9', '#8D0710'],
  'negative|heavy':    ['#D61B2C', '#FFFFFF'],
  'muted|light':       ['#C2C5CA', '#FFFFFF'],
  'muted|medium':      ['#9A9FA7', '#FFFFFF'],
  'muted|heavy':       ['#717883', '#FFFFFF']
};

/* type → [width, height, font, tracking, text style] */
var BDG_TYPE = {
  'default':     [48, 18, 12, 0.5,  'Primary/Label/Fine'],
  'voucher':     [48, 18, 12, 0.5,  'Primary/Label/Fine'],
  'transaction': [40, 16, 12, 0.5,  'Primary/Label/Fine'],
  'dashboard':   [34, 12, 10, 0.25, 'Primary/Label/Tiny']
};

function _bdgKey(c) { return [c.state, c.level, c.type].join('|'); }

/* Primary and Brand ship Heavy only. */
function _bdgResolve(card, changed) {
  var heavyOnly = card.state === 'primary' || card.state === 'brand';
  if (heavyOnly) card.level = 'heavy';
  return _bdgKey(card);
}

function _bdgRender(c) {
  var t = BDG_TYPE[c.type] || BDG_TYPE['default'];
  var col = BDG_C[c.state + '|' + c.level] || BDG_C['primary|heavy'];
  var w = t[0], h = t[1], label = c.label || 'Label';
  var s = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h +
          '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  if (c.type === 'voucher') {
    /* square but for a 4 radius on the bottom right — from get_svg */
    s += '<path d="M0 0H' + w + 'V' + (h - 4) + 'a4 4 0 0 1 -4 4H0V0Z" fill="' + col[0] + '"/>';
  } else {
    s += '<rect x="0" y="0" width="' + w + '" height="' + h + '" rx="' + (c.type === 'default' ? h / 2 : 4) +
         '" fill="' + col[0] + '"/>';
  }
  var anchor = c.type === 'voucher' ? '' : ' text-anchor="middle"';
  var x = c.type === 'voucher' ? 8 : w / 2;
  s += '<text class="bdg-label" x="' + x + '" y="' + (h / 2) + '" font-size="' + t[2] + '" font-weight="700" fill="' + col[1] +
       '" letter-spacing="' + t[3] + '"' + anchor + ' dominant-baseline="central">' + label + '</text>';
  return s + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = { main: { state: 'primary', level: 'heavy', type: 'default', label: 'Label' } };
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function _bdgCap(v) { return v.charAt(0).toUpperCase() + v.slice(1); }
function buildSwiftSnippet(cardKey, c) {
  return ['EBBadge("' + (c.label || 'Label') + '")', '    .ebState(.' + c.state + ')',
    '    .ebLevel(.' + c.level + ')', '    .ebType(.' + c.type + ')'].join('\n');
}
function buildComposeSnippet(cardKey, c) {
  return ['EBBadge(', '    label = "' + (c.label || 'Label') + '",',
    '    state = EBBadgeState.' + _bdgCap(c.state) + ',',
    '    level = EBBadgeLevel.' + _bdgCap(c.level) + ',',
    '    type = EBBadgeType.' + _bdgCap(c.type), ')'].join('\n');
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
  var key = _bdgResolve(card, prop);

  var levelCtl = document.querySelector('[onchange*="updateSpecCard(\'' + cardStyle + '\', \'level\'"]');
  if (levelCtl) {
    levelCtl.value = card.level;
    levelCtl.disabled = card.state === 'primary' || card.state === 'brand';
    if (levelCtl.parentElement) levelCtl.parentElement.classList.toggle('is-disabled', levelCtl.disabled);
  }

  var host = document.getElementById('badge-spec-' + cardStyle);
  if (host) host.innerHTML = _bdgRender(card);

  var t = BDG_TYPE[card.type] || BDG_TYPE['default'];
  var col = BDG_C[card.state + '|' + card.level] || BDG_C['primary|heavy'];
  var put = function (name, text) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + name + '"]');
    if (el) el.textContent = text;
  };
  put('state', _bdgCap(card.state));
  put('level', _bdgCap(card.level));
  put('type', _bdgCap(card.type));
  put('label', card.label);
  put('size-readout', t[0] + ' × ' + t[1]);
  put('fill-readout', col[0]);
  put('text-readout', col[1]);
  put('style-readout', t[4]);
  put('variantNode', BDG_NODES[key] + ' · ' + t[0] + ' × ' + t[1]);

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

/* ── Overview tab shim ──────────────────────────────────────────────── */
function updateBadgeDemo() {
  var el = document.getElementById('bd-demo-preview');
  if (!el) return;
  var v = function (id, f) { var n = document.getElementById(id); return n ? n.value : f; };
  var card = { state: v('bd-demo-state', 'primary'), level: v('bd-demo-level', 'heavy'),
               type: v('bd-demo-type', 'default'), label: 'Label' };
  _bdgResolve(card, 'state');
  el.innerHTML = _bdgRender(card);
}
window.updateBadgeDemo = updateBadgeDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _bdgInit() {
  updateBadgeDemo();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _bdgInit);
else _bdgInit();
document.addEventListener('astro:page-load', _bdgInit);
