/* Recipient Field — Style tab demo + Overview preview.
 * Built from Figma component set 17758:3867 (GCash DS Sticker Sheets v2).
 *
 * Panel (set 17758:3867):
 *   State    · Default, Active, Error, Disabled   (variant)
 *   isFilled · true, false                        (variant)
 * 4 x 2 = 8 variants. No booleans, no slots — the two trailing circles are
 * always drawn and nothing in the set turns them off.
 *
 * Geometry read off get_node_info, stroke weights and drawn positions off
 * get_svg:
 *   frame     366 x 56, radius 6, padding 12 on all four sides
 *   text      text-container 274 x 32 at (12, 12)
 *               #label  12/12 @ 0.5  — Primary/Label/Light/Fine
 *               gap 6
 *               #value  14/14 @ 0.25 — Primary/Label/Light/Small
 *   icons     icon-group 68 x 32 at (286, 12) — two 32 circles at x 286
 *             and x 322, gap 4, fill #C2C6CF
 *   stroke    Default 1 inside · Active 2 · Error 2 · Disabled hidden
 *
 * 12 + 274 + 68 + 12 = 366, and 12 + 32 + 12 = 56 — unlike Labeled Field,
 * the padding here is symmetric and the right edge is not flush.
 */

var RF_W = 366, RF_H = 56, RF_R = 6, RF_PAD = 12;
var RF_TEXT_W = 274, RF_ROW_H = 32;
var RF_ICON = 32, RF_ICON_GAP = 4, RF_LABEL_GAP = 6;
var RF_ICON_FILL = '#C2C6CF';

/* state → [fill, border, stroke width] — null border means none drawn */
var RF_STATE = {
  Default:  ['#FFFFFF', '#D7E0EF', 1],
  Active:   ['#FFFFFF', '#005CE5', 2],
  Error:    ['#FFFFFF', '#D61B2C', 2],
  Disabled: ['#EEF2F9', null,      0]
};
/* state → [#label, #value when isFilled=true, #value when isFilled=false] */
var RF_TEXT = {
  Default:  ['#0A2757', '#0A2757', '#90A8D0'],
  Active:   ['#0A2757', '#0A2757', '#90A8D0'],
  Error:    ['#0A2757', '#0A2757', '#90A8D0'],
  Disabled: ['#90A8D0', '#90A8D0', '#C2CFE5']
};
var RF_NODES = {
  'Default|true': '17758:3868',  'Default|false': '17758:3875',
  'Active|true':  '17758:3882',  'Active|false':  '17758:3889',
  'Error|true':   '17758:3896',  'Error|false':   '17758:3903',
  'Disabled|true':'17758:3910',  'Disabled|false':'17758:3917'
};

function _rfRender(c) {
  var st = RF_STATE[c.state] || RF_STATE.Default;
  var tx = RF_TEXT[c.state] || RF_TEXT.Default;
  var fill = st[0], border = st[1], sw = st[2];
  var labelColor = tx[0], valueColor = c.isfilled === 'true' ? tx[1] : tx[2];
  var iconX = RF_W - RF_PAD - RF_ICON;              /* 322 */
  var iconX0 = iconX - RF_ICON_GAP - RF_ICON;       /* 286 */

  var s = '<svg width="' + RF_W + '" height="' + RF_H + '" viewBox="0 0 ' + RF_W + ' ' + RF_H +
          '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  if (border) {
    var o = sw / 2;
    s += '<rect x="' + o + '" y="' + o + '" width="' + (RF_W - sw) + '" height="' + (RF_H - sw) +
         '" rx="' + (RF_R - o) + '" fill="' + fill + '" stroke="' + border +
         '" stroke-width="' + sw + '"/>';
  } else {
    s += '<rect x="0" y="0" width="' + RF_W + '" height="' + RF_H + '" rx="' + RF_R +
         '" fill="' + fill + '"/>';
  }

  /* #label sits in the first 12 of the 32 row, #value in the last 14. */
  s += '<text class="rf-label" x="' + RF_PAD + '" y="' + (RF_PAD + 6) + '" font-size="12"' +
       ' font-weight="600" letter-spacing="0.5" fill="' + labelColor +
       '" dominant-baseline="central">Label</text>';
  s += '<text class="rf-value" x="' + RF_PAD + '" y="' + (RF_PAD + 12 + RF_LABEL_GAP + 7) +
       '" font-size="14" font-weight="600" letter-spacing="0.25" fill="' + valueColor +
       '" dominant-baseline="central">Placeholder</text>';

  s += '<rect x="' + iconX0 + '" y="' + RF_PAD + '" width="' + RF_ICON + '" height="' + RF_ICON +
       '" rx="' + (RF_ICON / 2) + '" fill="' + RF_ICON_FILL + '"/>';
  s += '<rect x="' + iconX + '" y="' + RF_PAD + '" width="' + RF_ICON + '" height="' + RF_ICON +
       '" rx="' + (RF_ICON / 2) + '" fill="' + RF_ICON_FILL + '"/>';
  return s + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = { main: { state: 'Default', isfilled: 'true' } };
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, c) {
  var lines = ['EBRecipientField(', '    label: "Label",', '    value: $value,',
               '    actions: [avatarAction, contactsAction],'];
  if (c.state === 'Error') lines.push('    isError: true,');
  var last = lines[lines.length - 1];
  if (last.charAt(last.length - 1) === ',') lines[lines.length - 1] = last.slice(0, -1);
  lines.push(')');
  if (c.state === 'Disabled') lines.push('    .disabled(true)');
  return lines.join('\n');
}
function buildComposeSnippet(cardKey, c) {
  var lines = ['EBRecipientField(', '    label = "Label",', '    value = value,',
               '    onValueChange = { value = it },',
               '    actions = { AvatarAction(); ContactsAction() },'];
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

  var host = document.getElementById('recipient-field-spec-' + cardStyle);
  if (host) host.innerHTML = _rfRender(card);

  var st = RF_STATE[card.state] || RF_STATE.Default;
  var tx = RF_TEXT[card.state] || RF_TEXT.Default;
  var valueColor = card.isfilled === 'true' ? tx[1] : tx[2];

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
  put('variantNode', RF_NODES[card.state + '|' + card.isfilled] + ' · ' + RF_W + ' × ' + RF_H);

  put('bg', st[0]); swatch('bg', st[0]);
  show('border', !!st[1]);
  if (st[1]) { put('border', st[1]); swatch('border', st[1]); }
  put('labelColor', tx[0]); swatch('labelColor', tx[0]);
  put('valueColor', valueColor); swatch('valueColor', valueColor);
  put('iconFill', RF_ICON_FILL); swatch('iconFill', RF_ICON_FILL);
  put('stroke', st[1] ? st[2] + ' inside' : '— (hidden #D6DDE9)');

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
function updateRecipientFieldDemo() {
  var el = document.getElementById('recipient-field-demo-preview');
  if (!el) return;
  var v = function (id, f) { var n = document.getElementById(id); return n ? n.value : f; };
  el.innerHTML = _rfRender({
    state: v('rf-demo-state', 'Default'),
    isfilled: v('rf-demo-isfilled', 'true')
  });
}
window.updateRecipientFieldDemo = updateRecipientFieldDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _rfInit() {
  updateRecipientFieldDemo();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _rfInit);
else _rfInit();
document.addEventListener('astro:page-load', _rfInit);
