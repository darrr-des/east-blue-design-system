/* Footer — live preview + spec cards.
 * Set 4227:11068 (2026 Working File): Alignment = Left | Center × LogoType =
 * None | Single | Group × Label = True | False × Description = None |
 * Default | Link — a curated set of SEVEN variants out of 36 combinations.
 * The panel snaps to the nearest built variant rather than drawing a
 * layout Figma never built.
 *
 * Every offset below is read off get_node_info on the variant (re-verified
 * 2026-09-14 on 4227:11082, 4227:11075, 4227:11093, 4227:11085, 4227:11079,
 * 4227:11069). The partner logos are RECTANGLEs with IMAGE fills — raster —
 * so they are drawn as measured placeholders. Disclaimer text is #6780A9
 * with the link run in #005CE5 (get_styled_text_segments, fills).
 */
var FT_W = 360;
var FT_TEXT = '#6780A9', FT_LINK = '#005CE5', FT_LOGO_BG = '#EEF2F9', FT_LOGO_EDGE = '#C2CFE5';

/* blocks: { t } text — runs of { s, link } wrapped inside w; { l } raster logo. */
var FT_VARIANTS = [
  { key: 'left|group|false|default', node: '4227:11075', h: 150, blocks: [
    { t: 1, x: 24, y: 24, w: 312, h: 54, runs: [{ s: 'I acknowledge receipt of this statement prior to the consummation of the credit transaction by availing of this loan.' }] },
    { l: 1, x: 86, y: 94, w: 188, h: 32 } ] },
  { key: 'left|single|false|none', node: '4227:11069', h: 182, blocks: [
    { l: 1, x: 24, y: 24, w: 73, h: 59, label: 'Powered by' },
    { t: 1, x: 113, y: 24, w: 223, h: 126, runs: [{ s: 'Fuse Lending, Inc. SEC Reg. No. CS201617622, Cert. of Authority to Operate Lending Company, (CA) No. 1897' }, { br: 2 }, { s: 'Learn about the Product Information & Support:' }, { br: 1 }, { s: 'GLoan on Help Center', link: 1 }] } ] },
  { key: 'left|group|false|link', node: '4227:11085', h: 120, blocks: [
    { t: 1, x: 24, y: 12, w: 312, h: 36, runs: [{ s: 'Learn about the Product Information & Support:' }, { br: 1 }, { s: 'GCredit on Help Center', link: 1 }] },
    { l: 1, x: 24, y: 64, w: 312, h: 32 } ] },
  { key: 'left|single|false|link', node: '4227:11089', h: 116, blocks: [
    { l: 1, x: 24, y: 24, w: 312, h: 16 },
    { t: 1, x: 24, y: 56, w: 312, h: 36, runs: [{ s: 'Learn about the Product Information & Support:' }, { br: 1 }, { s: 'GCredit on Help Center', link: 1 }] } ] },
  { key: 'center|group|true|none', node: '4227:11093', h: 95, blocks: [
    { t: 1, x: 24, y: 16, w: 312, h: 15, center: 1, small: 1, runs: [{ s: 'In partnership with' }] },
    { l: 1, x: 77, y: 47, w: 206, h: 32 } ] },
  { key: 'center|none|false|link', node: '4227:11079', h: 108, blocks: [
    { t: 1, x: 83, y: 24, w: 194, h: 36, center: 1, runs: [{ s: 'Get information and product support.' }, { br: 1 }, { s: 'Find GSave in the Help Center', link: 1 }] } ] },
  { key: 'center|group|false|none', node: '4227:11082', h: 80, blocks: [
    { l: 1, x: 24, y: 24, w: 312, h: 32 } ] }
];
var FT_AXES = ['alignment', 'logotype', 'label', 'description'];

function _ftEscape(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function _ftKey(card) { return FT_AXES.map(function (a) { return card[a]; }).join('|'); }

/* Nearest built variant that honours the axis the user just changed. */
function _ftResolve(card, changed) {
  var key = _ftKey(card), parts = key.split('|');
  var exact = FT_VARIANTS.filter(function (v) { return v.key === key; })[0];
  if (exact) return exact;
  var best = null, bestScore = -1;
  FT_VARIANTS.forEach(function (v) {
    var vp = v.key.split('|');
    if (changed && vp[FT_AXES.indexOf(changed)] !== parts[FT_AXES.indexOf(changed)]) return;
    var score = 0;
    for (var j = 0; j < vp.length; j++) if (vp[j] === parts[j]) score++;
    if (score > bestScore) { bestScore = score; best = v; }
  });
  return best || FT_VARIANTS[0];
}

function _ftRender(variant) {
  var H = variant.h;
  var out = '<svg class="eb-preview eb-preview-ft" width="' + FT_W + '" height="' + H + '" viewBox="0 0 ' + FT_W + ' ' + H + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  out += '<rect width="' + FT_W + '" height="' + H + '" fill="#FFFFFF"/>';
  variant.blocks.forEach(function (b) {
    if (b.l) {
      out += '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" rx="2" fill="' + FT_LOGO_BG + '" stroke="' + FT_LOGO_EDGE + '" stroke-dasharray="3 3"/>';
      out += '<text class="ft-placeholder" x="' + (b.x + b.w / 2) + '" y="' + (b.y + b.h / 2) + '" font-size="9" fill="' + FT_LOGO_EDGE + '" text-anchor="middle" dominant-baseline="central">' + (b.label ? _ftEscape(b.label) + ' · ' : '') + 'raster logo ' + b.w + ' × ' + b.h + '</text>';
      return;
    }
    var html = '';
    b.runs.forEach(function (r) {
      if (r.br) { for (var i = 0; i < r.br; i++) html += '<br/>'; return; }
      html += r.link ? '<span class="eb-preview-ft__link">' + _ftEscape(r.s) + '</span>' : _ftEscape(r.s);
    });
    out += '<foreignObject x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '"><div xmlns="http://www.w3.org/1999/xhtml" class="eb-preview-ft__text' + (b.center ? ' eb-preview-ft__text--center' : '') + (b.small ? ' eb-preview-ft__text--small' : '') + '">' + html + '</div></foreignObject>';
  });
  return out + '</svg>';
}

/* ── Overview live preview ─────────────────────────────────────────── */
function _footerUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var el = document.getElementById('footer-demo-preview');
  if (!el) return;
  var card = { alignment: getVal('ft-ctrl-alignment', 'left'), logotype: getVal('ft-ctrl-logotype', 'group'), label: getVal('ft-ctrl-label', 'false'), description: getVal('ft-ctrl-description', 'default') };
  el.innerHTML = _ftRender(_ftResolve(card, null));
}
window._footerUpdate = _footerUpdate;

/* ── Spec cards — one per Alignment value, keyed by demoKey ─────────── */
var _specCards = {
  'left':   { alignment: 'left',   logotype: 'group', label: 'false', description: 'default' },
  'center': { alignment: 'center', logotype: 'group', label: 'true',  description: 'none' }
};
window._specCards = _specCards;

function _ftCap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
function getSnippet(cardKey, lang, card) {
  var c = card || _specCards[cardKey] || _specCards['left'];
  if (lang === 'swift') return 'EBFooter(\n    alignment: .' + c.alignment + ',\n    logoType: .' + c.logotype + ',\n    showLabel: ' + c.label + ',\n    description: .' + c.description + '\n)';
  return 'EBFooter(\n    alignment = EBFooterAlignment.' + _ftCap(c.alignment) + ',\n    logoType = EBFooterLogoType.' + _ftCap(c.logotype) + ',\n    showLabel = ' + c.label + ',\n    description = EBFooterDescription.' + _ftCap(c.description) + '\n)';
}
window.getSnippet = getSnippet;

function _ftSyncPanel(cardKey, card) {
  var panel = document.querySelector('[data-panel-card="' + cardKey + '"]');
  var host = panel ? panel.closest('.spec-card') : null;
  if (!host) return;
  FT_AXES.forEach(function (a) {
    var rowEl = host.querySelector('[data-panel-prop="' + a + '"]');
    if (!rowEl) return;
    var sel = rowEl.querySelector('select'), chk = rowEl.querySelector('input[type="checkbox"]');
    if (sel) sel.value = card[a];
    if (chk) { chk.checked = card[a] === 'true'; chk.parentElement.classList.toggle('is-on', chk.checked); }
  });
}

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var v = _ftResolve(card, prop);
  v.key.split('|').forEach(function (val, i) { card[FT_AXES[i]] = val; });
  _ftSyncPanel(cardKey, card);
  var host = document.getElementById('ft-spec-' + cardKey);
  if (host) host.innerHTML = _ftRender(v);
}
window.updateSpecCard = updateSpecCard;

function _ftInit() {
  _footerUpdate();
  Object.keys(_specCards).forEach(function (k) { updateSpecCard(k, 'alignment', _specCards[k].alignment); });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _ftInit);
else _ftInit();
document.addEventListener('astro:page-load', _ftInit);
