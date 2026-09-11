/* Footer — Style tab demo.
 * Rebuilt from Figma component set 4227:11068 (GCash DS 2026 Working File).
 * Every size, offset and colour below is read off get_node_info on the
 * matching variant. Nothing is derived from a layout rule, because there
 * isn't one — see the note on FT_VARIANTS.
 *
 * Panel (set 4227:11068):
 *   Alignment   · Center, Left
 *   LogoType    · None, Single, Group
 *   Label       · True, False
 *   Description · None, Default, Link
 *
 * 2 x 3 x 2 x 3 = 36 theoretical. SEVEN ship. Every axis value appears
 * somewhere, but most combinations do not exist, so the panel snaps to the
 * nearest built variant rather than offering a layout Figma has never drawn.
 */

var FT_W = 360;

/* ── Colours ─────────────────────────────────────────────────────────
   The Disclaimer takes THREE different fills across the seven variants.
   They are recorded per variant rather than per Description value,
   because they do not follow that axis. */
var FT_BG = '#FFFFFF';
var FT_PREAMBLE = '#6780A9';
var FT_LOGO_BG = '#EEF2F9';     /* placeholder — the real logos are raster */
var FT_LOGO_EDGE = '#C2CFE5';

/* ── The seven built variants, measured one by one ───────────────────
   `blocks` are absolute offsets inside the 360-wide frame: {t} text,
   {l} raster-logo placeholder. x/y/w/h are exactly what Figma reports. */
var FT_VARIANTS = [
  { key: 'left|group|false|default', node: '4227:11075', h: 150,
    blocks: [
      { t: 1, x: 24, y: 24,  w: 312, h: 54, fill: '#6780A9', align: 'left', lines: 3,
        text: 'I acknowledge receipt of this statement prior to the consummation of the credit transaction by availing of this loan.' },
      { l: 1, x: 86, y: 94,  w: 188, h: 32 }
    ] },
  { key: 'left|single|false|none', node: '4227:11069', h: 182,
    blocks: [
      { l: 1, x: 24, y: 24,  w: 73,  h: 59 },
      { t: 1, x: 113, y: 24, w: 223, h: 126, fill: '#10346F', align: 'left', lines: 7,
        text: 'Fuse Lending, Inc. SEC Reg. No. CS201617622, Cert. of Authority to Operate Lending Company, (CA) No. 1897 — Learn about the Product Information & Support: GLoan on Help Center' }
    ] },
  { key: 'left|group|false|link', node: '4227:11085', h: 120,
    blocks: [
      { t: 1, x: 24, y: 12,  w: 312, h: 36, fill: '#7085A9', align: 'left', lines: 2,
        text: 'Learn about the Product Information & Support: GCredit on Help Center' },
      { l: 1, x: 24, y: 64,  w: 312, h: 32 }
    ] },
  { key: 'left|single|false|link', node: '4227:11089', h: 116,
    blocks: [
      { l: 1, x: 24, y: 24,  w: 312, h: 16 },
      { t: 1, x: 24, y: 56,  w: 312, h: 36, fill: '#7085A9', align: 'left', lines: 2,
        text: 'Learn about the Product Information & Support: GCredit on Help Center' }
    ] },
  { key: 'center|group|true|none', node: '4227:11093', h: 95,
    blocks: [
      { t: 1, x: 24, y: 16,  w: 312, h: 15, fill: FT_PREAMBLE, align: 'center', lines: 1, size: 10, leading: 15,
        text: 'In partnership with' },
      { l: 1, x: 77, y: 47,  w: 206, h: 32 }
    ] },
  { key: 'center|none|false|link', node: '4227:11079', h: 108,
    blocks: [
      { t: 1, x: 83, y: 24,  w: 194, h: 36, fill: '#10346F', align: 'center', lines: 2,
        text: 'Get information and product support. Find GSave in the Help Center' }
    ] },
  { key: 'center|group|false|none', node: '4227:11082', h: 80,
    blocks: [
      { l: 1, x: 24, y: 24,  w: 312, h: 32 }
    ] }
];

var FT_AXES = ['alignment', 'logotype', 'label', 'description'];

function _ftKey(card) {
  return FT_AXES.map(function (a) { return card[a]; }).join('|');
}

/* Nearest built variant that honours the axis the user just changed. */
function _ftResolve(card, changed) {
  var exact = FT_VARIANTS.filter(function (v) { return v.key === _ftKey(card); })[0];
  if (exact) return exact;
  var parts = _ftKey(card).split('|');
  var best = null, bestScore = -1;
  FT_VARIANTS.forEach(function (v) {
    var vp = v.key.split('|');
    if (changed) {
      var i = FT_AXES.indexOf(changed);
      if (vp[i] !== parts[i]) return;          /* must keep what was just set */
    }
    var score = 0;
    for (var j = 0; j < vp.length; j++) if (vp[j] === parts[j]) score++;
    if (score > bestScore) { bestScore = score; best = v; }
  });
  return best || FT_VARIANTS[0];
}

/* ── Renderer ───────────────────────────────────────────────────────── */
function _ftWrap(text, lines) {
  if (lines <= 1) return [text];
  var words = text.split(' '), per = Math.ceil(words.length / lines), out = [];
  for (var i = 0; i < words.length; i += per) out.push(words.slice(i, i + per).join(' '));
  return out.slice(0, lines);
}

function _ftRender(variant, scale) {
  scale = scale || 1;
  var H = variant.h;
  var out = '<svg width="' + (FT_W * scale) + '" height="' + (H * scale) +
            '" viewBox="0 0 ' + FT_W + ' ' + H +
            '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  out += '<rect width="' + FT_W + '" height="' + H + '" fill="' + FT_BG + '"/>';

  variant.blocks.forEach(function (b) {
    if (b.l) {
      /* The footer logos are RECTANGLE nodes with IMAGE fills — raster, not
         vector — so the box is drawn at its measured size as a placeholder
         rather than redrawn by hand. */
      out += '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h +
             '" rx="2" fill="' + FT_LOGO_BG + '" stroke="' + FT_LOGO_EDGE +
             '" stroke-dasharray="3 3"/>';
      out += '<text class="ft-placeholder" x="' + (b.x + b.w / 2) + '" y="' + (b.y + b.h / 2) +
             '" font-size="9" fill="' + FT_LOGO_EDGE +
             '" text-anchor="middle" dominant-baseline="central">raster logo ' + b.w + ' × ' + b.h + '</text>';
      return;
    }
    var size = b.size || 12, leading = b.leading || 18;
    var anchor = b.align === 'center' ? 'middle' : 'start';
    var tx = b.align === 'center' ? (b.x + b.w / 2) : b.x;
    _ftWrap(b.text, b.lines).forEach(function (line, i) {
      out += '<text class="ft-text" x="' + tx + '" y="' + (b.y + leading * i + leading / 2) +
             '" font-size="' + size + '" font-weight="600" fill="' + b.fill +
             '" text-anchor="' + anchor + '" dominant-baseline="central">' + line + '</text>';
    });
  });

  return out + '</svg>';
}

/* ── Per-card state ─────────────────────────────────────────────────── */
var _specCards = {
  main: { alignment: 'center', logotype: 'group', label: 'false', description: 'none' }
};
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function _ftCap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

function buildSwiftSnippet(cardKey, card) {
  return 'EBFooter(\n' +
    '    alignment: .' + card.alignment + ',\n' +
    '    logoType: .' + card.logotype + ',\n' +
    '    showLabel: ' + card.label + ',\n' +
    '    description: .' + card.description + '\n)';
}
function buildComposeSnippet(cardKey, card) {
  return 'EBFooter(\n' +
    '    alignment = EBFooterAlignment.' + _ftCap(card.alignment) + ',\n' +
    '    logoType = EBFooterLogoType.' + _ftCap(card.logotype) + ',\n' +
    '    showLabel = ' + card.label + ',\n' +
    '    description = EBFooterDescription.' + _ftCap(card.description) + '\n)';
}
function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

/* ── Control handler ────────────────────────────────────────────────── */
var FT_PREVIEW_SCALE = 1;

function _ftSyncSelects(cardStyle, card) {
  FT_AXES.forEach(function (a) {
    var sel = document.querySelector(
      '[onchange*="updateSpecCard(\'' + cardStyle + '\', \'' + a + '\'"]');
    if (sel) sel.value = card[a];
  });
}

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Snap to the nearest built variant — 29 of the 36 combinations do not
     exist, and drawing one would be inventing a layout. */
  var v = _ftResolve(card, prop);
  v.key.split('|').forEach(function (val, i) { card[FT_AXES[i]] = val; });
  _ftSyncSelects(cardStyle, card);

  var host = document.getElementById('footer-spec-' + cardStyle);
  if (host) host.innerHTML = _ftRender(v, FT_PREVIEW_SCALE);

  FT_AXES.forEach(function (a) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + a + '"]');
    if (el) el.textContent = a === 'label' ? card[a] : _ftCap(card[a]);
  });
  var nodeEl = document.querySelector('[data-sp="' + cardStyle + '-variantNode"]');
  if (nodeEl) nodeEl.textContent = v.node + ' · 360 × ' + v.h;

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

/* ── Overview tab live preview ──────────────────────────────────────── */
function _footerUpdate() {
  var el = document.getElementById('footer-demo-preview');
  if (el) el.innerHTML = _ftRender(FT_VARIANTS[6], 1);
}
window._footerUpdate = _footerUpdate;

/* ── First paint ────────────────────────────────────────────────────── */
function _ftInit() {
  _footerUpdate();
  Object.keys(_specCards).forEach(function (k) {
    var v = _ftResolve(_specCards[k], null);
    var host = document.getElementById('footer-spec-' + k);
    if (host) host.innerHTML = _ftRender(v, FT_PREVIEW_SCALE);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _ftInit);
else _ftInit();
document.addEventListener('astro:page-load', _ftInit);
