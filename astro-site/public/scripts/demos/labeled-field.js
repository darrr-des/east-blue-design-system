/* Labeled Field — Style tab demo + Overview preview.
 * Built from Figma component set 17758:3713 (GCash DS Sticker Sheets v2).
 *
 * Panel (set 17758:3713), in its order:
 *   State            · Default, Active, Error, Disabled  (variant)
 *   isFilled         · true, false                       (variant)
 *   show LeadingIcon · False                             (boolean)
 *   has Label        · True                              (boolean)
 *   show TrailingIcon· True                              (boolean)
 *   show LinkButton  · False                             (boolean)
 * 4 x 2 = 8 variants; the four booleans ride on top of each.
 *
 * Geometry read off get_node_info, stroke weights and drawn positions off
 * get_svg, and the link button off instance 32149:5150 (the set's own
 * action-button returns no children):
 *   frame   366 x 46, radius 6 — content row 24 tall at y=12, so 12 above
 *           and 10 below, 2 off centre
 *   There is no outer right padding and no inter-element gap. The right
 *   hand elements stack flush to x=366 and carry their own padding:
 *     trailing-icon  44 frame = 8 gap + 24 icon + 12 pad  → [322, 366]
 *     action-button  60 pill  = 8 + 44 label-container + 8
 *   text-container then runs from x=12 (or 44 with a leading icon) to
 *   whichever right-hand element starts first. That reproduces both widths
 *   Figma reports: 310 shipped, and 294 with the link shown instead.
 *   leading-icon   32 frame = 24 icon + 8 gap, at x=12
 *   #label 35 wide, #value 37 wide — Proxima Soft Semibold 14/14 @ 0.25,
 *          Primary/Label/Light/Small
 *   link   #label "Label" in #005CE5, Proxima Soft Bold 14/14 @ 0.25,
 *          Primary/Label/Small, centred in the 60 pill
 *   icons  24 square — leading placeholder #868686, trailing #C2C6CF
 *   stroke Default 1 inside · Active 2 · Error 2 · Disabled none
 */

var LF_W = 366, LF_H = 46, LF_R = 6, LF_PAD = 12, LF_GAP = 8;
var LF_ROW_Y = 12, LF_ROW_H = 24, LF_ICON = 24;
var LF_LEAD_FRAME = 32;     /* 24 icon + 8 gap */
var LF_TRAIL_FRAME = 44;    /* 8 gap + 24 icon + 12 pad */
var LF_LINK_W = 60;         /* 8 + 44 label-container + 8 */
var LF_LABEL_W = 35;
var LF_LEAD_FILL = '#868686', LF_TRAIL_FILL = '#C2C6CF', LF_LINK_FG = '#005CE5';

/* state → [fill, border, stroke width] — null border means none drawn */
var LF_STATE = {
  Default:  ['#FFFFFF', '#D7E0EF', 1],
  Active:   ['#FFFFFF', '#005CE5', 2],
  Error:    ['#FFFFFF', '#D61B2C', 2],
  Disabled: ['#EEF2F9', null,      0]
};
/* state → [#label, #value when isFilled=true, #value when isFilled=false] */
var LF_TEXT = {
  Default:  ['#0A2757', '#0A2757', '#90A8D0'],
  Active:   ['#0A2757', '#0A2757', '#90A8D0'],
  Error:    ['#0A2757', '#0A2757', '#90A8D0'],
  Disabled: ['#90A8D0', '#C2CFE5', '#C2CFE5']
};
var LF_NODES = {
  'Default|true': '17758:3714',  'Default|false': '17758:3723',
  'Active|true':  '17758:3732',  'Active|false':  '17758:3741',
  'Error|true':   '17758:3750',  'Error|false':   '17758:3759',
  'Disabled|true':'17758:3768',  'Disabled|false':'17758:3777'
};

function _lfOn(v) { return v === 'true'; }

/* Right-hand elements stack flush to the frame's right edge; the text
   container takes everything left over. */
function _lfMetrics(c) {
  var lead = _lfOn(c.showleadingicon), trail = _lfOn(c.showtrailingicon);
  var link = _lfOn(c.showlinkbutton);
  var edge = LF_W;
  var trailX = edge - LF_TRAIL_FRAME;          /* frame start */
  if (trail) edge = trailX;
  var linkX = edge - LF_LINK_W;
  if (link) edge = linkX;
  var textX = LF_PAD + (lead ? LF_LEAD_FRAME : 0);
  return {
    lead: lead, trail: trail, link: link,
    textX: textX, textW: Math.max(0, edge - textX),
    leadX: LF_PAD,
    iconX: trailX + LF_GAP,                    /* icon inside the 44 frame */
    trailX: trailX,
    linkX: linkX
  };
}

function _lfRender(c) {
  var st = LF_STATE[c.state] || LF_STATE.Default;
  var tx = LF_TEXT[c.state] || LF_TEXT.Default;
  var g = _lfMetrics(c);
  var fill = st[0], border = st[1], sw = st[2];
  var labelColor = tx[0], valueColor = _lfOn(c.isfilled) ? tx[1] : tx[2];
  var midY = LF_ROW_Y + LF_ROW_H / 2;

  var s = '<svg width="' + LF_W + '" height="' + LF_H + '" viewBox="0 0 ' + LF_W + ' ' + LF_H +
          '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  if (border) {
    var o = sw / 2;
    s += '<rect x="' + o + '" y="' + o + '" width="' + (LF_W - sw) + '" height="' + (LF_H - sw) +
         '" rx="' + (LF_R - o) + '" fill="' + fill + '" stroke="' + border +
         '" stroke-width="' + sw + '"/>';
  } else {
    s += '<rect x="0" y="0" width="' + LF_W + '" height="' + LF_H + '" rx="' + LF_R +
         '" fill="' + fill + '"/>';
  }

  if (g.lead) {
    s += '<rect x="' + g.leadX + '" y="' + LF_ROW_Y + '" width="' + LF_ICON + '" height="' + LF_ICON +
         '" rx="' + (LF_ICON / 2) + '" fill="' + LF_LEAD_FILL + '"/>';
  }

  var vx = g.textX;
  if (_lfOn(c.haslabel)) {
    s += '<text class="lf-text" x="' + g.textX + '" y="' + midY + '" font-size="14" font-weight="600"' +
         ' letter-spacing="0.25" fill="' + labelColor + '" dominant-baseline="central">Label</text>';
    vx = g.textX + LF_LABEL_W + LF_GAP;
  }
  s += '<text class="lf-text" x="' + vx + '" y="' + midY + '" font-size="14" font-weight="600"' +
       ' letter-spacing="0.25" fill="' + valueColor + '" dominant-baseline="central">Value</text>';

  if (g.link) {
    /* The 60 pill is white on a white field, so only its label reads.
       Centred: 8 padding + a 44 label-container holding a 36 #label. */
    s += '<text class="lf-text" x="' + (g.linkX + LF_LINK_W / 2) + '" y="' + midY +
         '" font-size="14" font-weight="700" letter-spacing="0.25" fill="' + LF_LINK_FG +
         '" text-anchor="middle" dominant-baseline="central">Label</text>';
  }
  if (g.trail) {
    s += '<rect x="' + g.iconX + '" y="' + LF_ROW_Y + '" width="' + LF_ICON + '" height="' + LF_ICON +
         '" rx="' + (LF_ICON / 2) + '" fill="' + LF_TRAIL_FILL + '"/>';
  }
  return s + '</svg>';
}

/* ── Per-card state — Figma's default variant and boolean defaults ──── */
var _specCards = {
  main: { state: 'Default', isfilled: 'true', showleadingicon: 'false',
          haslabel: 'true', showtrailingicon: 'true', showlinkbutton: 'false' }
};
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, c) {
  var lines = ['EBLabeledField('];
  if (_lfOn(c.haslabel)) lines.push('    label: "Label",');
  lines.push('    value: $value,');
  if (_lfOn(c.showleadingicon)) lines.push('    leadingIcon: Image(systemName: "person"),');
  if (_lfOn(c.showtrailingicon)) lines.push('    trailingIcon: Image(systemName: "chevron.right"),');
  if (_lfOn(c.showlinkbutton)) lines.push('    link: EBTextButton("Change") { },');
  if (c.state === 'Error') lines.push('    isError: true,');
  var last = lines[lines.length - 1];
  if (last.charAt(last.length - 1) === ',') lines[lines.length - 1] = last.slice(0, -1);
  lines.push(')');
  if (c.state === 'Disabled') lines.push('    .disabled(true)');
  return lines.join('\n');
}
function buildComposeSnippet(cardKey, c) {
  var lines = ['EBLabeledField('];
  if (_lfOn(c.haslabel)) lines.push('    label = "Label",');
  lines.push('    value = value,');
  lines.push('    onValueChange = { value = it },');
  if (_lfOn(c.showleadingicon)) lines.push('    leadingIcon = { Icon(Icons.Default.Person, null) },');
  if (_lfOn(c.showtrailingicon)) lines.push('    trailingIcon = { Icon(Icons.Default.ChevronRight, null) },');
  if (_lfOn(c.showlinkbutton)) lines.push('    link = { EBTextButton("Change") { } },');
  if (c.state === 'Error') lines.push('    isError = true,');
  if (c.state === 'Disabled') lines.push('    enabled = false,');
  var last = lines[lines.length - 1];
  if (last.charAt(last.length - 1) === ',') lines[lines.length - 1] = last.slice(0, -1);
  lines.push(')');
  return lines.join('\n');
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

  var host = document.getElementById('labeled-field-spec-' + cardStyle);
  if (host) host.innerHTML = _lfRender(card);

  var st = LF_STATE[card.state] || LF_STATE.Default;
  var tx = LF_TEXT[card.state] || LF_TEXT.Default;
  var g = _lfMetrics(card);
  var valueColor = _lfOn(card.isfilled) ? tx[1] : tx[2];

  var cell = function (n) { return document.querySelector('[data-sp="' + cardStyle + '-' + n + '"]'); };
  var put = function (n, t) {
    var el = cell(n); if (!el) return;
    (el.querySelector('.spec-prop-hex') || el).textContent = t;
  };
  var swatch = function (n, hex) {
    var el = cell(n), dot = el && el.querySelector('.spec-swatch');
    if (dot) dot.style.background = hex;
  };
  var show = function (n, on) {
    var el = cell(n), row = el && (el.closest('.spec-prop') || el.parentElement);
    if (row) row.style.display = on ? '' : 'none';
  };

  put('state', card.state);
  put('isfilled', card.isfilled);
  put('showleadingicon', card.showleadingicon);
  put('haslabel', card.haslabel);
  put('showtrailingicon', card.showtrailingicon);
  put('showlinkbutton', card.showlinkbutton);
  put('variantNode', LF_NODES[card.state + '|' + card.isfilled] + ' · ' + LF_W + ' × ' + LF_H);

  put('bg', st[0]); swatch('bg', st[0]);
  show('border', !!st[1]);
  if (st[1]) { put('border', st[1]); swatch('border', st[1]); }
  put('labelColor', tx[0]); swatch('labelColor', tx[0]);
  show('labelColor', _lfOn(card.haslabel));
  put('valueColor', valueColor); swatch('valueColor', valueColor);
  put('leadFill', LF_LEAD_FILL); swatch('leadFill', LF_LEAD_FILL);
  show('leadFill', g.lead);
  put('trailFill', LF_TRAIL_FILL); swatch('trailFill', LF_TRAIL_FILL);
  show('trailFill', g.trail);
  put('linkFg', LF_LINK_FG); swatch('linkFg', LF_LINK_FG);
  show('linkFg', g.link);

  put('stroke', st[1] ? st[2] + ' inside' : '— (no stroke)');
  put('textW', g.textW + ' × ' + LF_ROW_H);
  show('leadRow', g.lead);
  put('leadRow', LF_LEAD_FRAME + ' frame · icon @ x ' + g.leadX);
  show('linkRow', g.link);
  put('linkRow', LF_LINK_W + ' × ' + LF_ROW_H + ' @ x ' + g.linkX);
  show('trailRow', g.trail);
  put('trailRow', LF_TRAIL_FRAME + ' frame · icon @ x ' + g.iconX);

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
function updateLabeledFieldDemo() {
  var el = document.getElementById('labeled-field-demo-preview');
  if (!el) return;
  var v = function (id, f) { var n = document.getElementById(id); return n ? n.value : f; };
  el.innerHTML = _lfRender({
    state: v('lf-demo-state', 'Default'),
    isfilled: v('lf-demo-isfilled', 'true'),
    showleadingicon: v('lf-demo-lead', 'false'),
    haslabel: v('lf-demo-label', 'true'),
    showtrailingicon: v('lf-demo-trail', 'true'),
    showlinkbutton: v('lf-demo-link', 'false')
  });
}
window.updateLabeledFieldDemo = updateLabeledFieldDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _lfInit() {
  updateLabeledFieldDemo();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _lfInit);
else _lfInit();
document.addEventListener('astro:page-load', _lfInit);
