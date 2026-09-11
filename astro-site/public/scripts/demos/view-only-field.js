/* View Only Field — live preview + spec card.
 * Mirrors node 4996:25507 (2026 Working File). Property panel:
 *   TrailingContent ◇ None, Badge, Link, Icon
 *   Size            ◇ SM, LG
 *   Status          ◇ Default, Error, Warning
 *   hasCheckmark      (boolean, default False)
 *   hasDescription    (boolean, default True)
 *   Value             (text)
 *   Label             (text)
 *
 * Read off the node and checked against export_node_as_image.
 * Label  Proxima Soft SemiBold 16/20 #6780A9
 * Value  Proxima Soft Bold 22/26 #0A2757
 * Subtext BarkAda SemiBold 12/18 — #6780A9 default, #D61B2C error, #CA970C warning
 * SM 55 tall · LG 72 tall. There is no border or fill: it is a display row.
 */

var VOF_PX = "'Proxima Soft', system-ui, sans-serif";
var VOF_BK = "BarkAda, system-ui, sans-serif";

var VOF_STATUS = {
  'default': { color: '#6780A9', icon: null,      text: 'Message content' },
  'error':   { color: '#D61B2C', icon: 'error',   text: 'Invalid message content' },
  'warning': { color: '#CA970C', icon: 'warning', text: 'Warning message content' }
};

function _vofEscape(t) {
  return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function _vofErrorIcon(x, y) {
  return '<g transform="translate(' + x + ',' + y + ')">' +
           '<circle cx="8" cy="8" r="8" fill="#D61B2C"/>' +
           '<path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/>' +
         '</g>';
}
function _vofWarnIcon(x, y) {
  return '<g transform="translate(' + x + ',' + y + ')">' +
           '<path d="M8 1.5 L15.5 14.5 H0.5 Z" fill="#CA970C"/>' +
           '<path d="M8 6v4" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round"/>' +
           '<circle cx="8" cy="12.3" r="0.95" fill="#FFFFFF"/>' +
         '</g>';
}
/* Checkmark — 13 × 13 at fill #025AE9 (verified on 4996:25582).
   Form confirmed by exporting the `check` GROUP (4996:25581): a solid blue
   circle with a white tick knocked out — a check-circle badge, not a bare
   check glyph. Exporting the boolean child alone shows only the circle, which
   is what misled the first attempt; the group is the node that renders. */
function _vofCheck(x, y) {
  var r = 6.5;
  return '<g class="vof-check" data-y="' + y + '" transform="translate(' + x + ',' + y + ')">' +
           '<circle cx="' + r + '" cy="' + r + '" r="' + r + '" fill="#025AE9"/>' +
           '<path d="M3.1 6.9 L5.6 9.5 L10.0 4.3" fill="none" stroke="#FFFFFF" ' +
             'stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>' +
         '</g>';
}
function _vofPencil(x, y) {
  return '<g transform="translate(' + x + ',' + y + ')" fill="none" stroke="#005CE5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
           '<path d="M15.5 3.2a2.4 2.4 0 0 1 3.4 3.4L7.6 17.9 3 19l1.1-4.6z"/></g>';
}

function _vofBuildSvg(o) {
  var S = VOF_STATUS[o.status] || VOF_STATUS['default'];
  var lg = (o.size === 'LG');

  /* SM 55 · LG 72. The extra 17 in LG is the description block; without it the
     row collapses to the field alone. */
  var rowH = lg ? 50 : 33;
  var H = rowH + (o.hasDescription ? 22 : 0);

  var labelFs = lg ? 16 : 12, labelLh = lg ? 20 : 16;
  var valueFs = lg ? 22 : 16, valueLh = lg ? 26 : 20;

  var label = (o.label === undefined || o.label === null || o.label === '') ? 'Label' : o.label;
  var value = (o.value === undefined || o.value === null || o.value === '') ? 'Text' : o.value;

  var out = '<svg width="360" height="' + H + '" viewBox="0 0 360 ' + H + '" fill="none" role="img" aria-label="View Only Field, ' + o.size + ', ' + o.status + ', trailing ' + o.trailingContent + '">';
  out += '<text x="0" y="' + (labelLh - 5) + '" font-family="' + VOF_PX + '" font-size="' + labelFs + '" font-weight="600" letter-spacing="0.25" fill="#6780A9">' + _vofEscape(label) + '</text>';

  var valueBase = labelLh + 4 + valueLh - 6;
  out += '<text class="vof-value" x="0" y="' + valueBase + '" font-family="' + VOF_PX + '" font-size="' + valueFs + '" font-weight="700" fill="#0A2757">' + _vofEscape(value) + '</text>';

  /* Checkmark — 13 × 13, 8px after the value, vertically centred in the value
     box. Measured on 4996:25575: value box top 24, height 26, check top 30.5
     = 24 + (26-13)/2; check x 49 = value width 41 + 8.
     The advance factor is 0.466 for Proxima Soft Bold, from "Text" at 22px
     measuring 41px. It only seeds the static render — _vofMeasureCheck()
     repositions from the real text width once the SVG is in the DOM, so a
     custom Value from the panel input still lands 8px clear. */
  var valueTop = labelLh + 4;
  if (o.hasCheckmark) {
    var vw = String(value).length * valueFs * 0.466;
    out += _vofCheck(vw + 8, valueTop + (valueLh - 13) / 2);
  }

  /* Trailing content is right-aligned in the row. */
  var tc = o.trailingContent;
  if (tc === 'Badge') {
    out += '<rect x="299" y="' + (valueBase - 16) + '" width="61" height="18" rx="9" fill="#E5F1FF"/>';
    out += '<text x="329.5" y="' + (valueBase - 3.5) + '" text-anchor="middle" font-family="' + VOF_PX + '" font-size="12" font-weight="700" letter-spacing="0.5" fill="#005CE5">Change</text>';
  } else if (tc === 'Link') {
    out += '<text x="360" y="' + (labelLh - 5) + '" text-anchor="end" font-family="' + VOF_BK + '" font-size="12" font-weight="600" fill="#005CE5">What is this?</text>';
  } else if (tc === 'Icon') {
    out += _vofPencil(338, 0);
  }

  if (o.hasDescription) {
    var sy = rowH + 15;
    var tx = 0;
    if (S.icon === 'error')   { out += _vofErrorIcon(0, rowH + 2); tx = 22; }
    if (S.icon === 'warning') { out += _vofWarnIcon(0, rowH + 2);  tx = 22; }
    out += '<text x="' + tx + '" y="' + sy + '" font-family="' + VOF_BK + '" font-size="12" font-weight="600" fill="' + S.color + '">' + S.text + '</text>';
  }
  out += '</svg>';
  return out;
}


/* The static render seeds the check from an advance estimate. Once the SVG is
   in the DOM the real text width is available, so snap it to value + 8. */
function _vofMeasureCheck(root) {
  if (!root) return;
  var t = root.querySelector('text.vof-value');
  var g = root.querySelector('g.vof-check');
  if (!t || !g || typeof t.getComputedTextLength !== 'function') return;
  var w;
  try { w = t.getComputedTextLength(); } catch (e) { return; }
  if (!w) return;
  g.setAttribute('transform', 'translate(' + (w + 8) + ',' + g.getAttribute('data-y') + ')');
}

/* ── Live preview (Overview tab) ─────────────────────────────────── */
var _vofDemo = { trailingContent: 'None', size: 'LG', status: 'default' };

function updateViewOnlyFieldDemo() {
  var el = document.getElementById('vof-demo-preview') || document.getElementById('view-only-field-demo-preview');
  if (!el) return;
  el.innerHTML = _vofBuildSvg({
    trailingContent: _vofDemo.trailingContent, size: _vofDemo.size,
    status: String(_vofDemo.status).toLowerCase(),
    hasCheckmark: false, hasDescription: true, label: 'Label', value: 'Text'
  });
  _vofMeasureCheck(el);
}
window.updateViewOnlyFieldDemo = updateViewOnlyFieldDemo;

/* ── Spec card (Style tab) ───────────────────────────────────────── */
var _specCards = {
  main: {
    trailingContent: 'None', size: 'LG', status: 'default',
    hasCheckmark: false, hasDescription: true, label: 'Label', value: 'Text'
  }
};
window._specCards = _specCards;

var VOF_BOOLS = ['hasCheckmark', 'hasDescription'];

function buildSwiftSnippet(cardKey, c) {
  var lines = ['EBViewOnlyField(label: "' + c.label + '", value: "' + c.value + '")'];
  lines.push('    .controlSize(.' + (c.size === 'SM' ? 'small' : 'large') + ')');
  if (c.status !== 'default') lines.push('    .ebStatus(.' + c.status + ')');
  if (c.trailingContent !== 'None') lines.push('    .ebTrailing(.' + c.trailingContent.toLowerCase() + ')');
  if (c.hasCheckmark) lines.push('    .ebCheckmark(true)');
  if (!c.hasDescription) lines.push('    .ebDescription(nil)');
  return lines.join('\n');
}

function buildComposeSnippet(cardKey, c) {
  function cap(x) { return x.charAt(0).toUpperCase() + x.slice(1); }
  return [
    'EBViewOnlyField(',
    '    label = "' + c.label + '",',
    '    value = "' + c.value + '",',
    '    size = EBFieldSize.' + c.size + ',',
    '    status = EBFieldStatus.' + cap(c.status) + ',',
    '    trailingContent = EBTrailingContent.' + c.trailingContent + ',',
    '    hasCheckmark = ' + (c.hasCheckmark ? 'true' : 'false') + ',',
    '    hasDescription = ' + (c.hasDescription ? 'true' : 'false'),
    ')'
  ].join('\n');
}

function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = (VOF_BOOLS.indexOf(prop) !== -1) ? (value === 'true' || value === true) : value;

  var host = document.getElementById('view-only-field-spec-' + cardStyle);
  if (host) { host.innerHTML = _vofBuildSvg(card); _vofMeasureCheck(host); }

  ['trailingContent', 'size', 'status', 'hasCheckmark', 'hasDescription', 'label', 'value'].forEach(function (k) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + k + '"]');
    if (!el) return;
    var v = card[k];
    el.textContent = (typeof v === 'boolean') ? (v ? 'True' : 'False')
      : (k === 'status') ? String(v).charAt(0).toUpperCase() + String(v).slice(1)
      : String(v);
  });

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

function _vofInit() {
  updateViewOnlyFieldDemo();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'size', _specCards[k].size);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _vofInit);
else _vofInit();
document.addEventListener('astro:page-load', _vofInit);
