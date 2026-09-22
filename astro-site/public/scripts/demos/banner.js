/* Banner — Style tab demo.
 * Rebuilt from Figma component set 4430:14807 (GCash DS 2026 Working File).
 * Offsets, fills and text styles read off get_node_info and
 * get_styled_text_segments; checked against export_node_as_image.
 *
 * Panel (set 4430:14807, from the property-panel screenshot):
 *   imagePosition   · Right, Left                       (variant)
 *   Action          · Button, None, Link                (variant)
 *   State           · Default, Pressed, Disabled        (variant)
 *   hasLeadingAsset · False, True                       (variant)
 *   hasPreamble     · True                              (boolean)
 * Slots (no control): Asset Slot (24 items) · Leading Asset Slot (6 items)
 *   · Icon Slot (6 items)
 *
 * 24 of the 36 combinations are built: hasLeadingAsset=True ships only with
 * Action=None, so the panel snaps to a built variant.
 *
 * Every variant is 360 x 160. The container is white, radius 8, and the
 * Asset Slot is a full-bleed 360 x 160 image. content is 312 x 112 at 24
 * padding; with imagePosition=Left the text column is 191 wide and sits to
 * the right (x 145), clear of the artwork.
 *
 * The text stack is taller than its frame at the default — 12 + 23 + 2 +
 * 36 + 2 + 16 + 2 + 26 = 119 in a 112 frame — so Figma centres it and it
 * overflows 3.5 top and bottom. The preview centres the stack the same way.
 *
 * Pressed and Disabled add a full-bleed Overlay above the content:
 * #020E22 at 24% for Pressed, #C2CFE5 for Disabled. The Disabled overlay's
 * opacity is not readable with the plugin — the export shows the artwork
 * through it, so the preview uses 60% and the card says it is assumed.
 */

var BNR_W = 360, BNR_H = 160, BNR_PAD = 24;
var BNR_NODES = {
  'right|button|default|false': '4430:14808', 'right|button|pressed|false': '4430:17360', 'right|button|disabled|false': '4430:17444',
  'left|button|default|false': '4430:14824',  'left|button|pressed|false': '4430:17938',  'left|button|disabled|false': '4430:17972',
  'right|none|default|true': '4430:14840',    'right|none|pressed|true': '4430:20404',    'right|none|disabled|true': '4430:20418',
  'left|none|default|true': '4430:14851',     'left|none|pressed|true': '4430:20432',     'left|none|disabled|true': '4430:20446',
  'right|link|default|false': '4430:14862',   'right|link|pressed|false': '4430:20472',   'right|link|disabled|false': '4430:20490',
  'left|link|default|false': '4430:14874',    'left|link|pressed|false': '4430:20508',    'left|link|disabled|false': '4430:20526',
  'right|none|default|false': '4430:14886',   'right|none|pressed|false': '4430:20556',   'right|none|disabled|false': '4430:20566',
  'left|none|default|false': '4430:14895',    'left|none|pressed|false': '4430:20576',    'left|none|disabled|false': '4430:20586'
};

var BNR_TEXT = { preamble: '#072592', title: '#072592', blurb: '#6780A9', action: '#005CE5' };
/* #preamble reports the same #072592 fill as #title, bound to the same
 * variable, yet it renders much lighter in export_node_as_image — the
 * layer carries node opacity, which the plugin does not report. 0.5 is
 * what matches the export; the card says it is assumed. */
var BNR_PRE_ALPHA = 0.5;
var BNR_SLOT = '#9F3DFB';

function _bnrOn(v, def) { return v == null ? def : v === 'true'; }
function _bnrEsc(v) { return String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function _bnrCap(v) { return v.charAt(0).toUpperCase() + v.slice(1); }
function _bnrKey(c) { return [c.imageposition, c.action, c.state, c.hasleadingasset].join('|'); }

/* hasLeadingAsset=True ships only with Action=None. */
function _bnrResolve(card, changed) {
  if (changed === 'hasleadingasset' && card.hasleadingasset === 'true') card.action = 'none';
  if (changed === 'action' && card.action !== 'none') card.hasleadingasset = 'false';
  if (card.hasleadingasset === 'true' && card.action !== 'none') card.action = 'none';
  return _bnrKey(card);
}

/* The Asset Slot ships the file's "replace-this-asset" image — a pale blue
 * field with a blue disc on the image side and a red Replace me tag. It is
 * a placeholder bitmap, not component geometry, so the preview stands in
 * for it: the disc sits on the side imagePosition names. */
function _bnrAsset(left) {
  var cx = left ? 80 : 280, cy = 80;
  var s = '<rect x="0" y="0" width="' + BNR_W + '" height="' + BNR_H + '" rx="8" fill="#E3F0FC"/>';
  s += '<circle cx="' + cx + '" cy="' + cy + '" r="56" fill="#C7E2F8"/>';
  s += '<circle cx="' + cx + '" cy="' + cy + '" r="42" fill="#4FA6EE"/>';
  s += '<circle cx="' + cx + '" cy="' + cy + '" r="30" fill="#1878D4"/>';
  s += '<rect x="' + (cx - 47) + '" y="' + (cy - 10) + '" width="94" height="20" fill="#D0454B"/>';
  s += '<text class="bnr-replace" x="' + cx + '" y="' + cy + '" font-size="12" font-weight="700" fill="#FFFFFF"' +
       ' text-anchor="middle" dominant-baseline="central">Replace me</text>';
  return s;
}

/* Chevron Right Small, centred in the 24-wide Icon Slot. The slot draws
 * nothing of its own — in Figma the glyph sits bare beside the label. */
function _bnrChevron(cx, cy, fill) {
  return '<path d="M' + (cx - 2) + ' ' + (cy - 4) + 'l4 4 -4 4" stroke="' + fill +
         '" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>';
}

function _bnrRender(c) {
  var pre = _bnrOn(c.haspreamble, true), lead = c.hasleadingasset === 'true';
  var left = c.imageposition === 'left';
  var colW = left ? 191 : 312, colX = left ? 145 : BNR_PAD;
  var s = '<svg width="' + BNR_W + '" height="' + BNR_H + '" viewBox="0 0 ' + BNR_W + ' ' + BNR_H +
          '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<rect x="0" y="0" width="' + BNR_W + '" height="' + BNR_H + '" rx="8" fill="#FFFFFF"/>';
  s += _bnrAsset(left);                                       /* Asset Slot — full bleed */

  /* Content stack, centred in the 112 frame as Figma centres it. */
  var rows = [];
  if (pre) rows.push({ h: lead ? 24 : 12, kind: 'preamble' });
  rows.push({ h: 23, kind: 'title' });
  rows.push({ h: 2 }); rows.push({ h: 36, kind: 'blurb' });
  if (c.action === 'button') { rows.push({ h: 2 }); rows.push({ h: 16 }); rows.push({ h: 2 }); rows.push({ h: 26, kind: 'button' }); }
  else if (c.action === 'link') { rows.push({ h: 2 }); rows.push({ h: 26, kind: 'link' }); }
  var stack = rows.reduce(function (a, r) { return a + r.h; }, 0);
  var y = BNR_PAD + (112 - stack) / 2;

  rows.forEach(function (r) {
    if (r.kind === 'preamble') {
      var tx = colX;
      if (lead) { s += '<circle cx="' + (colX + 12) + '" cy="' + (y + 12) + '" r="12" fill="#D9DEE8"/>'; tx = colX + 28; }
      s += '<text class="bnr-pre" x="' + tx + '" y="' + (y + (lead ? 12 : 6)) + '" font-size="12" font-weight="700" fill="' +
           BNR_TEXT.preamble + '" fill-opacity="' + BNR_PRE_ALPHA + '" dominant-baseline="central">Preamble</text>';
    } else if (r.kind === 'title') {
      s += '<text class="bnr-title" x="' + colX + '" y="' + (y + 11.5) + '" font-size="18" font-weight="700" fill="' +
           BNR_TEXT.title + '" dominant-baseline="central">Heading</text>';
    } else if (r.kind === 'blurb') {
      s += '<text class="bnr-blurb" x="' + colX + '" y="' + (y + 9) + '" font-size="12" font-weight="600" fill="' +
           BNR_TEXT.blurb + '" dominant-baseline="central">Add description here.</text>';
      s += '<text class="bnr-blurb" x="' + colX + '" y="' + (y + 27) + '" font-size="12" font-weight="600" fill="' +
           BNR_TEXT.blurb + '" dominant-baseline="central">Add description here.</text>';
    } else if (r.kind === 'button' || r.kind === 'link') {
      var label = r.kind === 'button' ? 'Button' : 'Link';
      s += '<text class="bnr-action" x="' + colX + '" y="' + (y + 13) + '" font-size="14" font-weight="700" fill="' +
           BNR_TEXT.action + '" dominant-baseline="central">' + label + '</text>';
      if (r.kind === 'button') {                               /* Icon Slot — Chevron Right Small, 24 */
        s += _bnrChevron(colX + 49 + 12, y + 13, BNR_TEXT.action);
      }
    }
    y += r.h;
  });

  if (c.state === 'pressed')  s += '<rect x="0" y="0" width="' + BNR_W + '" height="' + BNR_H + '" rx="8" fill="#020E22" fill-opacity="0.24"/>';
  if (c.state === 'disabled') s += '<rect x="0" y="0" width="' + BNR_W + '" height="' + BNR_H + '" rx="8" fill="#C2CFE5" fill-opacity="0.6"/>';
  return s + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = {
  main: { imageposition: 'right', action: 'button', state: 'default', hasleadingasset: 'false', haspreamble: 'true' }
};
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, c) {
  var l = ['EBBanner(', '    title: "Heading",', '    description: "Add description here."'];
  if (_bnrOn(c.haspreamble, true)) l.push('    preamble: "Preamble",');
  l.push(')');
  l.push('    .ebImagePosition(.' + c.imageposition + ')');
  if (c.action === 'button') l.push('    .ebAction("Button") { open() }');
  if (c.action === 'link') l.push('    .ebLink("Link") { open() }');
  if (c.hasleadingasset === 'true') l.push('    .ebLeadingAsset { Image("icon") }');
  if (c.state === 'disabled') l.push('    .disabled(true)');
  l.push('    .ebAsset { Image("banner") }');
  return l.join('\n');
}
function buildComposeSnippet(cardKey, c) {
  var l = ['EBBanner('];
  if (_bnrOn(c.haspreamble, true)) l.push('    preamble = "Preamble",');
  l.push('    title = "Heading",');
  l.push('    description = "Add description here.",');
  l.push('    imagePosition = EBBannerImagePosition.' + _bnrCap(c.imageposition) + ',');
  if (c.action === 'button') l.push('    action = EBBannerAction.Button("Button"),');
  if (c.action === 'link') l.push('    action = EBBannerAction.Link("Link"),');
  if (c.hasleadingasset === 'true') l.push('    leadingAsset = { Image(painterResource(R.drawable.icon), null) },');
  if (c.state === 'disabled') l.push('    enabled = false,');
  l.push('    asset = { Image(painterResource(R.drawable.banner), null) },');
  l.push('    onClick = { open() }');
  l.push(')');
  return l.join('\n');
}
function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

/* ── Control handler ────────────────────────────────────────────────── */
function _bnrSync(cardStyle, card) {
  ['action', 'hasleadingasset'].forEach(function (a) {
    var el = document.querySelector('[onchange*="updateSpecCard(\'' + cardStyle + '\', \'' + a + '\'"]');
    if (el) el.value = card[a];
  });
}

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;
  var key = _bnrResolve(card, prop);
  _bnrSync(cardStyle, card);

  var host = document.getElementById('banner-spec-' + cardStyle);
  if (host) host.innerHTML = _bnrRender(card);

  ['imageposition', 'action', 'state', 'hasleadingasset', 'haspreamble'].forEach(function (a) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + a + '"]');
    if (!el) return;
    el.textContent = (a === 'haspreamble' || a === 'hasleadingasset')
      ? (card[a] === 'true' ? 'True' : 'False') : _bnrCap(card[a]);
  });
  var nodeEl = document.querySelector('[data-sp="' + cardStyle + '-variantNode"]');
  if (nodeEl) nodeEl.textContent = BNR_NODES[key] + ' · 360 × 160';

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

/* ── Overview tab shim — the old panel drove bnr-ctrl-* selects over the
 * retired Sticker Sheets node. ─────────────────────────────────────── */
function _bnrUpdate() {
  var el = document.getElementById('bnr-demo-preview');
  if (!el) return;
  var v = function (id, f) { var n = document.getElementById(id); return n ? n.value : f; };
  var action = v('bnr-ctrl-action-flag', 'yes') === 'yes' ? 'button' : 'none';
  el.innerHTML = _bnrRender({
    imageposition: v('bnr-ctrl-position', 'right') === 'left' ? 'left' : 'right',
    action: action, state: 'default',
    hasleadingasset: v('bnr-ctrl-icon-flag', 'no') === 'yes' && action === 'none' ? 'true' : 'false',
    haspreamble: v('bnr-ctrl-preamble-flag', 'yes') === 'yes' ? 'true' : 'false'
  });
}
window._bnrUpdate = _bnrUpdate;

/* ── First paint ────────────────────────────────────────────────────── */
function _bnrInit() {
  _bnrUpdate();
  Object.keys(_specCards).forEach(function (k) {
    var host = document.getElementById('banner-spec-' + k);
    if (host) host.innerHTML = _bnrRender(_specCards[k]);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _bnrInit);
else _bnrInit();
document.addEventListener('astro:page-load', _bnrInit);
