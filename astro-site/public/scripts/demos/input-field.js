/* Input Field — Style tab demo + Overview preview.
 * Built from Figma component set 17758:3687 (GCash DS Sticker Sheets v2).
 *
 * Panel (set 17758:3687):
 *   State    · Default, Active, Error, Disabled   (variant)
 *   isFilled · true, false                        (variant)
 * 4 x 2 = 8 variants, all built. There is nothing else — no icon slots, no
 * text property. Each variant is 366 x 46 holding one `text-container`
 * frame with a single `#label` reading "Placeholder".
 *
 * Geometry read off get_node_info; stroke weights off get_svg:
 *   frame      366 x 46, radius 6
 *   padding    12 horizontal, 16 vertical
 *   label      342 x 14, Proxima Soft Semibold 14/14, tracking 0.25, left
 *   stroke     Default 1 inside · Active 2 · Error 2 · Disabled none
 *
 * Note that `isFilled` changes only the label colour — the characters stay
 * "Placeholder" in all eight variants. See the card.
 */

var INF_W = 366, INF_H = 46, INF_R = 6, INF_PAD_H = 12, INF_PAD_V = 16;
var INF_TEXT = 'Placeholder';

/* state → [fill, border, stroke width] — null border means none drawn */
var INF_STATE = {
  Default:  ['#FFFFFF', '#D7E0EF', 1],
  Active:   ['#FFFFFF', '#005CE5', 2],
  Error:    ['#FFFFFF', '#D61B2C', 2],
  Disabled: ['#EEF2F9', null,      0]
};
/* state → [label when isFilled=true, label when isFilled=false] */
var INF_LABEL = {
  Default:  ['#0A2757', '#90A8D0'],
  Active:   ['#0A2757', '#90A8D0'],
  Error:    ['#0A2757', '#90A8D0'],
  Disabled: ['#90A8D0', '#C2CFE5']
};

var INF_NODES = {
  'Default|true': '17758:3688',  'Default|false': '17758:3691',
  'Active|true':  '17758:3694',  'Active|false':  '17758:3697',
  'Error|true':   '17758:3700',  'Error|false':   '17758:3703',
  'Disabled|true':'17758:3706',  'Disabled|false':'17758:3709'
};

function _infRender(c) {
  var st = INF_STATE[c.state] || INF_STATE.Default;
  var lab = INF_LABEL[c.state] || INF_LABEL.Default;
  var fill = st[0], border = st[1], sw = st[2];
  var labelColor = c.isfilled === 'true' ? lab[0] : lab[1];

  var s = '<svg width="' + INF_W + '" height="' + INF_H + '" viewBox="0 0 ' + INF_W + ' ' + INF_H +
          '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  if (border) {
    /* Stroke sits inside, so inset the rect by half its weight. */
    var o = sw / 2;
    s += '<rect x="' + o + '" y="' + o + '" width="' + (INF_W - sw) + '" height="' + (INF_H - sw) +
         '" rx="' + (INF_R - o) + '" fill="' + fill + '" stroke="' + border +
         '" stroke-width="' + sw + '"/>';
  } else {
    s += '<rect x="0" y="0" width="' + INF_W + '" height="' + INF_H + '" rx="' + INF_R +
         '" fill="' + fill + '"/>';
  }
  s += '<text class="inf-label" x="' + INF_PAD_H + '" y="' + (INF_H / 2) +
       '" font-size="14" font-weight="600" letter-spacing="0.25" fill="' + labelColor +
       '" dominant-baseline="central">' + INF_TEXT + '</text>';
  return s + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = { main: { state: 'Default', isfilled: 'true' } };
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, c) {
  var lines = ['EBInputField(', '    "' + INF_TEXT + '",', '    text: $value,'];
  if (c.state === 'Error') lines.push('    isError: true,');
  lines.push('    isFocused: ' + (c.state === 'Active' ? 'true' : 'false'));
  lines.push(')');
  if (c.state === 'Disabled') lines.push('    .disabled(true)');
  return lines.join('\n');
}
function buildComposeSnippet(cardKey, c) {
  var lines = ['EBInputField(', '    value = value,', '    onValueChange = { value = it },',
               '    placeholder = "' + INF_TEXT + '",'];
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

  var host = document.getElementById('input-field-spec-' + cardStyle);
  if (host) host.innerHTML = _infRender(card);

  var st = INF_STATE[card.state] || INF_STATE.Default;
  var lab = INF_LABEL[card.state] || INF_LABEL.Default;
  var labelColor = card.isfilled === 'true' ? lab[0] : lab[1];

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
  put('variantNode', INF_NODES[card.state + '|' + card.isfilled] + ' · ' + INF_W + ' × ' + INF_H);

  put('bg', st[0]);            swatch('bg', st[0]);
  show('border', !!st[1]);
  if (st[1]) { put('border', st[1]); swatch('border', st[1]); }
  put('labelColor', labelColor); swatch('labelColor', labelColor);

  put('stroke', st[1] ? st[2] + ' inside' : '— (hidden)');

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
var _infDemo = { state: 'Default', isfilled: 'true' };
function updateInputFieldDemo() {
  var el = document.getElementById('input-field-demo-preview');
  if (!el) return;
  var v = function (id, f) { var n = document.getElementById(id); return n ? n.value : f; };
  _infDemo.state = v('inf-demo-state', _infDemo.state);
  _infDemo.isfilled = v('inf-demo-isfilled', _infDemo.isfilled);
  el.innerHTML = _infRender(_infDemo);
}
window.updateInputFieldDemo = updateInputFieldDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _infInit() {
  updateInputFieldDemo();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _infInit);
else _infInit();
document.addEventListener('astro:page-load', _infInit);
