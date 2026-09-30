/* Avatar — Style tab demo.
 * Rebuilt from Figma component set 17143:4488 (GCash DS Sticker Sheets v2),
 * named Avatar_New. Offsets, fills and text styles read off get_node_info
 * and get_styled_text_segments.
 *
 * Panel (set 17143:4488, from the property-panel screenshot):
 *   type · dark-initials, image, initials-light   (variant)
 *   size · 90px, 64px, 48px, 40px, 32px, 24px, 20px (variant)
 * 3 x 7 = 21 variants, all built.
 *
 * Every variant is a circle of its size with a #E5EBF4 stroke.
 * dark-initials fills #005CE5 with white initials; initials-light fills
 * #F6F9FD with #2340A9 initials; image ships a #C2CFE5 ellipse as the
 * photo placeholder.
 *
 * The initials scale with the circle and each size uses its own DS text
 * style, so the font is read per size rather than derived.
 */

var AV_TYPE = {
  'dark-initials':  { bg: '#005CE5', text: '#FFFFFF', initials: 'DM' },
  'initials-light': { bg: '#F6F9FD', text: '#2340A9', initials: 'LM' },
  'image':          { bg: '#C2CFE5', text: null,      initials: '' }
};
var AV_STROKE = '#E5EBF4';

/* size → [font-size, line-height, tracking, DS text style, ring width].
 * The ring widths come from get_svg on each variant — a stepped scale,
 * not a proportion: 3 at 90/64/48, 2 at 40/32, 1.5 at 24, 1.25 at 20. */
var AV_SIZE = {
  '90': [35, 38, 0,    'Primary/Headlines/Spotlight',   3],
  '64': [31, 35, 0,    'Primary/Headlines/Region',      3],
  '48': [22, 26, 0,    'Primary/Headlines/Section',     3],
  '40': [18, 23, 0.25, 'Primary/Headlines/Block',       2],
  '32': [14, 16, 0.25, 'Primary/Multi-line Label/Small', 2],
  '24': [12, 12, 0.5,  'Primary/Label/Fine',            1.5],
  '20': [10, 10, 0.25, 'Primary/Label/Tiny',            1.25]
};
var AV_NODES = {
  'dark-initials|20': '17143:4489',  'initials-light|20': '17143:4492', 'image|20': '17143:4495',
  'dark-initials|24': '17143:4497',  'initials-light|24': '17143:4500', 'image|24': '17143:4503',
  'dark-initials|32': '17143:4505',  'initials-light|32': '17143:4508', 'image|32': '17143:4511',
  'dark-initials|40': '17143:4513',  'initials-light|40': '17143:4517', 'image|40': '17143:4521',
  'dark-initials|48': '17143:4523',  'initials-light|48': '17143:4526', 'image|48': '17143:4529',
  'dark-initials|64': '17143:4531',  'initials-light|64': '17143:4535', 'image|64': '17143:4546',
  'dark-initials|90': '17143:4539',  'initials-light|90': '17143:4542', 'image|90': '17143:4548'
};

function _avKey(c) { return c.type + '|' + c.size; }

/* Figma draws one circle with a fill and a centred #E5EBF4 stroke, inset
 * by half the stroke so the ring's outer edge is the frame edge — exactly
 * `circle r=30.5 stroke-width=3` at 64, per get_svg. */
function _avStroke(size) { return (AV_SIZE[size] || AV_SIZE['64'])[4]; }

function _avRender(c) {
  var t = AV_TYPE[c.type] || AV_TYPE['dark-initials'];
  var d = parseInt(c.size, 10), r = d / 2, w = _avStroke(c.size);
  var m = AV_SIZE[c.size] || AV_SIZE['64'];
  var s = '<svg width="' + d + '" height="' + d + '" viewBox="0 0 ' + d + ' ' + d +
          '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<circle cx="' + r + '" cy="' + r + '" r="' + (r - w / 2) + '" fill="' + t.bg + '" stroke="' + AV_STROKE +
       '" stroke-width="' + w + '"/>';
  if (t.text) {
    s += '<text class="av-initials" x="' + r + '" y="' + r + '" font-size="' + m[0] + '" font-weight="700" fill="' + t.text +
         '" letter-spacing="' + m[2] + '" text-anchor="middle" dominant-baseline="central">' +
         (c.initials || t.initials) + '</text>';
  }
  return s + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = { main: { type: 'dark-initials', size: '64', initials: 'DM' } };
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function _avEnum(t) {
  return t === 'dark-initials' ? 'darkInitials' : (t === 'initials-light' ? 'initialsLight' : 'image');
}
function buildSwiftSnippet(cardKey, c) {
  if (c.type === 'image') {
    return ['EBAvatar(', '    image: Image("profile"),', '    size: .px' + c.size, ')'].join('\n');
  }
  return ['EBAvatar(', '    initials: "' + (c.initials || AV_TYPE[c.type].initials) + '",',
    '    type: .' + _avEnum(c.type) + ',', '    size: .px' + c.size, ')'].join('\n');
}
function buildComposeSnippet(cardKey, c) {
  if (c.type === 'image') {
    return ['EBAvatar(', '    image = painterResource(R.drawable.profile),',
      '    size = EBAvatarSize.Px' + c.size, ')'].join('\n');
  }
  return ['EBAvatar(', '    initials = "' + (c.initials || AV_TYPE[c.type].initials) + '",',
    '    type = EBAvatarType.' + (c.type === 'dark-initials' ? 'DarkInitials' : 'InitialsLight') + ',',
    '    size = EBAvatarSize.Px' + c.size, ')'].join('\n');
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

  /* The image variant has no initials to type. Text inputs are wired with
   * oninput, so the panel row's data attributes are the safe handle. */
  var initialsRow = document.querySelector('[data-panel-card="' + cardStyle + '"][data-panel-prop="initials"]');
  if (initialsRow) {
    var initialsCtl = initialsRow.querySelector('input');
    if (initialsCtl) initialsCtl.disabled = card.type === 'image';
    initialsRow.classList.toggle('is-disabled', card.type === 'image');
  }

  var host = document.getElementById('avatar-spec-' + cardStyle);
  if (host) host.innerHTML = _avRender(card);

  var m = AV_SIZE[card.size] || AV_SIZE['64'];
  var put = function (name, text) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + name + '"]');
    if (el) el.textContent = text;
  };
  put('type', card.type);
  put('size', card.size + 'px');
  put('initials', card.type === 'image' ? '—' : (card.initials || AV_TYPE[card.type].initials));
  put('size-readout', card.size + ' × ' + card.size);
  put('font-readout', m[0] + ' / ' + m[1] + ' · tracking ' + m[2]);
  put('stroke-readout', _avStroke(card.size) + ' centred');
  put('style-readout', card.type === 'image' ? '—' : m[3]);
  put('variantNode', AV_NODES[_avKey(card)] + ' · ' + card.size + ' × ' + card.size);

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

/* ── Overview tab shim — the old panel had ava-demo-type / -size. ──── */
function updateAvatarDemo() {
  var el = document.getElementById('ava-demo-preview');
  if (!el) return;
  var v = function (id, f) { var n = document.getElementById(id); return n ? n.value : f; };
  el.innerHTML = _avRender({ type: v('ava-demo-type', 'dark-initials'), size: v('ava-demo-size', '64') });
}
window.updateAvatarDemo = updateAvatarDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _avInit() {
  updateAvatarDemo();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'type', _specCards[k].type);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _avInit);
else _avInit();
document.addEventListener('astro:page-load', _avInit);
