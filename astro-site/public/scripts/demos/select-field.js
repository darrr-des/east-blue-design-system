/* Select Field — Style tab demo + Overview preview.
 * Built from Figma component set 17758:3786 (GCash DS Sticker Sheets v2).
 *
 * Panel (set 17758:3786), in its order:
 *   State             · Disabled, Error, Active, Default  (variant)
 *   isFilled          · true, false                       (variant)
 *   show PesoSign     · True                              (boolean)
 *   show Flag         · True                              (boolean)
 *   show Trailing Icon· True                              (boolean)
 *   Chevron State     · Chevron Down                      (nested instance)
 * 4 x 2 = 8 variants; the three booleans ride on top of each.
 *
 * Geometry and every colour read off get_node_info plus get_svg on the
 * Default, Active, Error and Disabled rows:
 *   frame   366 x 46, radius 6, padding 12 left and right
 *   peso    peso-sign frame 19 at x 12 — a 15 glyph plus a 4 gap
 *   text    text-container 258 at x 31; #value 14/14 @ 0.25
 *   flag    flag-container 33 at x 289 — a 25 x 16 flag plus an 8 gap
 *   chevron 32 instance at x 322; the glyph is a 14-wide stroked path
 *           centred at x 338, stroke 2 with round caps
 *   12 + 19 + 258 + 33 + 32 + 12 = 366
 *   stroke  Default 1 inside · Active 2 · Error 2 · Disabled none
 *
 * The flag is the one element that never dims: peso, value and chevron all
 * take a Disabled colour, the flag keeps its full saturation. See the card.
 */

var SF_W = 366, SF_H = 46, SF_R = 6, SF_PAD = 12;
var SF_PESO_W = 19, SF_TEXT_W = 258, SF_FLAG_W = 33, SF_CHEV = 32;
var SF_FLAG_IMG_W = 25, SF_FLAG_IMG_H = 16;

/* state → [fill, border, stroke width, peso, chevron] */
var SF_STATE = {
  Default:  ['#FFFFFF', '#D7E0EF', 1, '#183462', '#005CE5'],
  Active:   ['#FFFFFF', '#005CE5', 2, '#183462', '#005CE5'],
  Error:    ['#FFFFFF', '#D61B2C', 2, '#183462', '#005CE5'],
  Disabled: ['#EEF2F9', null,      0, '#7E96BE', '#9BC5FD']
};
/* state → [#value when isFilled=true, #value when isFilled=false] */
var SF_VALUE = {
  Default:  ['#0A2757', '#90A8D0'],
  Active:   ['#0A2757', '#90A8D0'],
  Error:    ['#0A2757', '#90A8D0'],
  Disabled: ['#90A8D0', '#C2CFE5']
};
var SF_NODES = {
  'Default|true': '17758:3787',  'Default|false': '17758:3797',
  'Active|true':  '17758:3807',  'Active|false':  '17758:3817',
  'Error|true':   '17758:3827',  'Error|false':   '17758:3837',
  'Disabled|true':'17758:3847',  'Disabled|false':'17758:3857'
};

function _sfOn(v) { return v === 'true'; }

/* Elements run left to right; each hidden one gives its width to the text. */
function _sfMetrics(c) {
  var peso = _sfOn(c.showpesosign), flag = _sfOn(c.showflag), chev = _sfOn(c.showtrailingicon);
  var textX = SF_PAD + (peso ? SF_PESO_W : 0);
  var textW = SF_W - SF_PAD * 2 - (peso ? SF_PESO_W : 0)
                                 - (flag ? SF_FLAG_W : 0)
                                 - (chev ? SF_CHEV : 0);
  var chevX = SF_W - SF_PAD - SF_CHEV;
  var flagX = (chev ? chevX : SF_W - SF_PAD) - SF_FLAG_W;
  return { peso: peso, flag: flag, chev: chev, textX: textX, textW: textW,
           pesoX: SF_PAD, flagX: flagX, chevX: chevX };
}

/* The peso glyph, the PH flag and the chevron, all read off get_svg. */
function _sfPeso(x, fill) {
  return '<g transform="translate(' + (x - 12) + ',0)"><path fill-rule="evenodd" clip-rule="evenodd" d="' +
    'M21.7542 19.895C21.5039 19.357 20.9586 18.9839 20.3262 18.9834L17.5703 18.9811V19.895H21.7542ZM23.3996 ' +
    '19.895C23.0952 18.4774 21.8356 17.4143 20.3271 17.4131L16.7422 17.4102C16.7319 17.4101 16.7217 17.4103 ' +
    '16.7116 17.4107L16.7002 17.4106C16.2197 17.4106 15.8301 17.8003 15.8301 18.2808V19.895H15.0508C14.6642 ' +
    '19.895 14.3506 20.2086 14.3506 20.5952C14.3506 20.9818 14.6642 21.2954 15.0508 21.2954H15.8301V26.6997C' +
    '15.8301 27.1802 16.2197 27.5698 16.7002 27.5698C17.1807 27.5698 17.5703 27.1802 17.5703 26.6997V23.7031' +
    'H20.3252C21.8083 23.703 23.0513 22.6767 23.3829 21.2954H23.9512C24.3376 21.2952 24.6504 20.9817 24.6504 ' +
    '20.5952C24.6504 20.2087 24.3376 19.8952 23.9512 19.895H23.3996ZM21.7176 21.2954H17.5703V22.1338H20.3252' +
    'C20.9288 22.1337 21.4532 21.794 21.7176 21.2954Z" fill="' + fill + '"/></g>';
}
function _sfFlag(x, id) {
  var y = 13.9336;
  return '<g clip-path="url(#' + id + ')">' +
    '<path d="M' + (x + 25) + ' ' + y + 'H' + x + 'V' + (y + 8) + 'H' + (x + 25) + 'V' + y + 'Z" fill="#0038A8"/>' +
    '<path d="M' + (x + 25) + ' ' + (y + 8) + 'H' + x + 'V' + (y + 16) + 'H' + (x + 25) + 'V' + (y + 8) + 'Z" fill="#CE1126"/>' +
    '<path d="M' + x + ' ' + y + 'L' + (x + 12) + ' ' + (y + 8) + 'L' + x + ' ' + (y + 16) + 'V' + y + 'Z" fill="white"/>' +
    '<circle cx="' + (x + 4) + '" cy="' + (y + 8) + '" r="1.8" fill="#FCD116" stroke="#FCD116" stroke-width="0.3"/>' +
    '</g><defs><clipPath id="' + id + '"><rect width="25" height="16" fill="white" transform="translate(' +
    x + ' ' + y + ')"/></clipPath></defs>';
}
function _sfChevron(cx, stroke) {
  return '<path d="M' + (cx - 7) + ' 19L' + cx + ' 26L' + (cx + 7) + ' 19" stroke="' + stroke +
         '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
}

var _sfSeq = 0;
function _sfRender(c) {
  var st = SF_STATE[c.state] || SF_STATE.Default;
  var vv = SF_VALUE[c.state] || SF_VALUE.Default;
  var g = _sfMetrics(c);
  var fill = st[0], border = st[1], sw = st[2], pesoFill = st[3], chevStroke = st[4];
  var valueColor = _sfOn(c.isfilled) ? vv[0] : vv[1];

  var s = '<svg width="' + SF_W + '" height="' + SF_H + '" viewBox="0 0 ' + SF_W + ' ' + SF_H +
          '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  if (border) {
    var o = sw / 2;
    s += '<rect x="' + o + '" y="' + o + '" width="' + (SF_W - sw) + '" height="' + (SF_H - sw) +
         '" rx="' + (SF_R - o) + '" fill="' + fill + '" stroke="' + border +
         '" stroke-width="' + sw + '"/>';
  } else {
    s += '<rect x="0" y="0" width="' + SF_W + '" height="' + SF_H + '" rx="' + SF_R +
         '" fill="' + fill + '"/>';
  }
  if (g.peso) s += _sfPeso(g.pesoX, pesoFill);
  s += '<text class="sf-value" x="' + g.textX + '" y="23" font-size="14" font-weight="600"' +
       ' letter-spacing="0.25" fill="' + valueColor + '" dominant-baseline="central">Value</text>';
  if (g.flag) s += _sfFlag(g.flagX, 'sfflag' + (++_sfSeq));
  if (g.chev) s += _sfChevron(g.chevX + SF_CHEV / 2, chevStroke);
  return s + '</svg>';
}

/* ── Per-card state — Figma's default variant and boolean defaults ──── */
var _specCards = {
  main: { state: 'Default', isfilled: 'true', showpesosign: 'true',
          showflag: 'true', showtrailingicon: 'true' }
};
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, c) {
  var lines = ['EBSelectField(', '    value: $value,'];
  if (_sfOn(c.showpesosign)) lines.push('    prefix: .pesoSign,');
  if (_sfOn(c.showflag)) lines.push('    accessory: Image("flag-ph"),');
  if (_sfOn(c.showtrailingicon)) lines.push('    chevron: .down,');
  if (c.state === 'Error') lines.push('    isError: true,');
  var last = lines[lines.length - 1];
  if (last.charAt(last.length - 1) === ',') lines[lines.length - 1] = last.slice(0, -1);
  lines.push(')');
  if (c.state === 'Disabled') lines.push('    .disabled(true)');
  return lines.join('\n');
}
function buildComposeSnippet(cardKey, c) {
  var lines = ['EBSelectField(', '    value = value,', '    onClick = { /* open picker */ },'];
  if (_sfOn(c.showpesosign)) lines.push('    prefix = { PesoSign() },');
  if (_sfOn(c.showflag)) lines.push('    accessory = { FlagPH() },');
  if (_sfOn(c.showtrailingicon)) lines.push('    chevron = ChevronState.Down,');
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

  var host = document.getElementById('select-field-spec-' + cardStyle);
  if (host) host.innerHTML = _sfRender(card);

  var st = SF_STATE[card.state] || SF_STATE.Default;
  var vv = SF_VALUE[card.state] || SF_VALUE.Default;
  var g = _sfMetrics(card);
  var valueColor = _sfOn(card.isfilled) ? vv[0] : vv[1];

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
  put('showpesosign', card.showpesosign);
  put('showflag', card.showflag);
  put('showtrailingicon', card.showtrailingicon);
  put('variantNode', SF_NODES[card.state + '|' + card.isfilled] + ' · ' + SF_W + ' × ' + SF_H);

  put('bg', st[0]); swatch('bg', st[0]);
  show('border', !!st[1]);
  if (st[1]) { put('border', st[1]); swatch('border', st[1]); }
  put('valueColor', valueColor); swatch('valueColor', valueColor);
  put('pesoColor', st[3]); swatch('pesoColor', st[3]); show('pesoColor', g.peso);
  put('chevColor', st[4]); swatch('chevColor', st[4]); show('chevColor', g.chev);
  put('stroke', st[1] ? st[2] + ' inside' : '— (no stroke)');
  put('textW', g.textW + ' × 16');
  show('pesoRow', g.peso);
  show('flagRow', g.flag);
  put('flagRow', '25 × 16 @ x ' + g.flagX);
  show('chevRow', g.chev);
  put('chevRow', '32 slot @ x ' + g.chevX);

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
function updateSelectFieldDemo() {
  var el = document.getElementById('select-field-demo-preview');
  if (!el) return;
  var v = function (id, f) { var n = document.getElementById(id); return n ? n.value : f; };
  el.innerHTML = _sfRender({
    state: v('sf-demo-state', 'Default'), isfilled: v('sf-demo-isfilled', 'true'),
    showpesosign: v('sf-demo-peso', 'true'), showflag: v('sf-demo-flag', 'true'),
    showtrailingicon: v('sf-demo-chev', 'true')
  });
}
window.updateSelectFieldDemo = updateSelectFieldDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _sfInit() {
  updateSelectFieldDemo();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _sfInit);
else _sfInit();
document.addEventListener('astro:page-load', _sfInit);
