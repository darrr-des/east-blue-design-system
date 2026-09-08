/* Radio Button – With Label — Style tab demo.
 * Rebuilt from Figma component set 26184:2712 (GCash DS Sticker Sheets v2).
 * The nested Radio Button geometry and fills are the same reads that drive
 * public/scripts/demos/radio-button.js (set 26184:2588); the label metrics
 * and colours are read off this set's own #label layers.
 *
 * Axes: Style (Default | Check) × State (Default | Pressed | Disabled)
 *       × Size (Small | Medium | Large) × isSelected × isError = 39 variants,
 * the same matrix as the standalone control. Two combinations are not built
 * and the panel disables them:
 *   · Style=Default, State=Disabled, isError=true  (selected and unselected)
 *   · Style=Check with isSelected=false or isError=true
 */

/* ── Geometry — radio from 26184:2588, row metrics from 26184:2712 ──── */
/*  box    = nested radio width/height     stroke = ring stroke-width
 *  dot    = inner circle radius           check  = checkmark path + stroke
 *  row    = component height (Hug)        w      = width at the label "Label"
 *  iconY  = radio top offset in the row   textY  = label glyph-box centre
 *  font   = label font-size                                                */
var RBL_GEO = {
  large:  { box: 24, stroke: 3,   dot: 6, check: 'M7 12L10.5 15L17 9',             cw: 3,    row: 30, w: 81, iconY: 3, textY: 16, font: 18 },
  medium: { box: 20, stroke: 2.5, dot: 5, check: 'M5 10L8.5 13L15 7',              cw: 3,    row: 28, w: 72, iconY: 4, textY: 14, font: 16 },
  small:  { box: 16, stroke: 2,   dot: 4, check: 'M4.25 8L6.875 10.25L11.75 5.75', cw: 2.25, row: 23, w: 63, iconY: 4, textY: 12, font: 14 }
};
var RBL_GAP = 12;   /* icon-offset → text-container, identical at all sizes */

/* ── Nested radio colours, keyed "state|isSelected|isError" ─────────── */
var RBL_RING = {
  'default|false|false':  { ring: '#D7E0EF', dot: null,      opacity: 1   },
  'default|true|false':   { ring: '#005CE5', dot: '#005CE5', opacity: 1   },
  'pressed|false|false':  { ring: '#ADBDDC', dot: null,      opacity: 1   },
  'pressed|true|false':   { ring: '#2340A9', dot: '#2340A9', opacity: 1   },
  'disabled|false|false': { ring: '#D7E0EF', dot: null,      opacity: 0.4 },
  'disabled|true|false':  { ring: '#9BC5FD', dot: '#9BC5FD', opacity: 1   },
  'default|false|true':   { ring: '#D61B2C', dot: null,      opacity: 1   },
  'default|true|true':    { ring: '#D61B2C', dot: '#D61B2C', opacity: 1   },
  'pressed|false|true':   { ring: '#B50707', dot: null,      opacity: 1   },
  'pressed|true|true':    { ring: '#B50707', dot: '#B50707', opacity: 1   }
};
var RBL_DISC = { 'default': '#005CE5', 'pressed': '#2340A9', 'disabled': '#9BC5FD' };

/* ── Label colour — read off every #label layer in the set ───────────
   Disabled and Pressed are flat. State=Default splits: the plain
   unselected row is #0A2757, and anything else on it drops to #445C85. */
function _rblLabelColor(card) {
  if (card.state === 'disabled') return '#C2CFE5';
  if (card.state === 'pressed') return '#0A2757';
  if (card.style === 'check' || card.isSelected === 'true' || card.isError === 'true') return '#445C85';
  return '#0A2757';
}

/* Which State values exist for a given isError, under Style=Default. */
function _rblAllowedStates(card) {
  return card.isError === 'true'
    ? ['default', 'pressed']              /* Disabled + error is not built */
    : ['default', 'pressed', 'disabled'];
}

/* ── Renderer ───────────────────────────────────────────────────────── */
function _rblRender(card, scale) {
  scale = scale || 1;
  var g = RBL_GEO[card.size] || RBL_GEO.large;
  var W = g.w, H = g.row, c = g.box / 2;
  var out = '<svg width="' + (W * scale) + '" height="' + (H * scale) +
            '" viewBox="0 0 ' + W + ' ' + H + '" fill="none" xmlns="http://www.w3.org/2000/svg">';

  /* nested Radio Button instance, inside icon-offset */
  out += '<g transform="translate(0,' + g.iconY + ')">';
  if (card.style === 'check') {
    out += '<rect width="' + g.box + '" height="' + g.box + '" rx="' + c + '" fill="' +
           (RBL_DISC[card.state] || RBL_DISC['default']) + '"/>';
    out += '<path d="' + g.check + '" stroke="#FFFFFF" stroke-width="' + g.cw +
           '" stroke-linecap="round" stroke-linejoin="round"/>';
  } else {
    var col = RBL_RING[card.state + '|' + card.isSelected + '|' + card.isError] ||
              RBL_RING['default|' + card.isSelected + '|' + card.isError] ||
              RBL_RING['default|false|false'];
    if (col.opacity < 1) out += '<g opacity="' + col.opacity + '">';
    if (col.dot) out += '<circle cx="' + c + '" cy="' + c + '" r="' + g.dot + '" fill="' + col.dot + '"/>';
    out += '<circle cx="' + c + '" cy="' + c + '" r="' + (c - g.stroke / 2) +
           '" stroke="' + col.ring + '" stroke-width="' + g.stroke + '"/>';
    if (col.opacity < 1) out += '</g>';
  }
  out += '</g>';

  /* #label, inside text-container */
  out += '<text class="rbl-label" x="' + (g.box + RBL_GAP) + '" y="' + g.textY +
         '" font-size="' + g.font + '" fill="' + _rblLabelColor(card) +
         '" dominant-baseline="central">Label</text>';

  return out + '</svg>';
}

/* ── Per-card state ─────────────────────────────────────────────────── */
var _specCards = {
  main: { style: 'default', state: 'default', size: 'large', isSelected: 'false', isError: 'false' }
};
window._specCards = _specCards;

/* ── Panel constraints — never offer a variant Figma does not have ──── */
function _rblFindControl(cardStyle, prop) {
  return document.querySelector(
    '[onchange*="updateSpecCard(\'' + cardStyle + '\', \'' + prop + '\'"]');
}

function _rblSetToggle(cardStyle, prop, forced, locked, card) {
  if (forced !== null) card[prop] = forced;
  var input = _rblFindControl(cardStyle, prop);
  if (!input) return;
  input.checked = (card[prop] === 'true');
  input.disabled = locked;
  var label = input.parentElement;
  if (!label) return;
  label.classList.toggle('is-disabled', locked);
  label.classList.toggle('is-on', input.checked);
  var row = label.closest('.demo-panel-row');
  if (row) row.classList.toggle('is-disabled', locked);
}

function _rblSetStates(cardStyle, card, allowed) {
  if (allowed.indexOf(card.state) === -1) card.state = 'default';
  var sel = _rblFindControl(cardStyle, 'state');
  if (!sel || !sel.options) return;
  for (var i = 0; i < sel.options.length; i++) {
    var o = sel.options[i];
    o.disabled = allowed.indexOf(o.value) === -1;
    o.textContent = o.textContent.replace(/ — not built$/, '');
    if (o.disabled) o.textContent += ' — not built';
  }
  sel.value = card.state;
}

function _rblConstrain(cardStyle, card) {
  if (card.style === 'check') {
    _rblSetToggle(cardStyle, 'isSelected', 'true', true, card);
    _rblSetToggle(cardStyle, 'isError', 'false', true, card);
    _rblSetStates(cardStyle, card, ['default', 'pressed', 'disabled']);
  } else {
    _rblSetToggle(cardStyle, 'isSelected', null, false, card);
    _rblSetToggle(cardStyle, 'isError', null, false, card);
    _rblSetStates(cardStyle, card, _rblAllowedStates(card));
  }
}

/* ── DEV code — component API, live on both tabs ────────────────────── */
function buildSwiftSnippet(cardStyle, card) {
  var size = { large: '.large', medium: '.regular', small: '.small' }[card.size] || '.large';
  var lines = ['EBRadioRow("Label", isSelected: $isSelected)'];
  if (card.style === 'check') lines.push('    .ebRadioStyle(.check)');
  lines.push('    .controlSize(' + size + ')');
  if (card.isError === 'true') lines.push('    .ebInvalid(true)');
  if (card.state === 'disabled') lines.push('    .disabled(true)');
  return lines.join('\n');
}

function buildComposeSnippet(cardStyle, card) {
  var size = { large: 'Large', medium: 'Medium', small: 'Small' }[card.size] || 'Large';
  var lines = ['EBRadioRow('];
  lines.push('    label = "Label",');
  lines.push('    selected = ' + card.isSelected + ',');
  lines.push('    onClick = { selected = !selected },');
  if (card.style === 'check') lines.push('    style = EBRadioStyle.Check,');
  lines.push('    size = EBRadioSize.' + size + ',');
  if (card.isError === 'true') lines.push('    isError = true,');
  lines.push('    enabled = ' + (card.state === 'disabled' ? 'false' : 'true'));
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(cardStyle, lang, card) {
  return lang === 'swift'
    ? buildSwiftSnippet(cardStyle, card)
    : buildComposeSnippet(cardStyle, card);
}
window.getSnippet = getSnippet;

/* ── Control handler ────────────────────────────────────────────────── */
var RBL_PREVIEW_SCALE = 3;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;
  _rblConstrain(cardStyle, card);

  var host = document.getElementById('radio-button-with-label-spec-' + cardStyle);
  if (host) host.innerHTML = _rblRender(card, RBL_PREVIEW_SCALE);

  /* Properties readout. Colors / Typography / Layout `variants` are applied
     by the shared patcher in assessment.js — do not rebuild those here. */
  var RBL_BOOL = { isSelected: 1, isError: 1 };
  ['style', 'state', 'size', 'isSelected', 'isError'].forEach(function (k) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + k + '"]');
    if (!el) return;
    var v = String(card[k]);
    el.textContent = RBL_BOOL[k] ? v : v.charAt(0).toUpperCase() + v.slice(1);
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

/* ── Overview tab live preview ──────────────────────────────────────── */
/* The Overview panel still ships the pre-rebuild control set
   (size / error / selected). Map it onto the real axes so the preview
   draws the Figma component rather than the retired one. */
function updateRBLDemo() {
  var el = document.getElementById('rbl-demo-preview');
  if (!el) return;
  var g = function (id) { var n = document.getElementById(id); return n ? n.value : null; };
  var card = {
    style: 'default',
    state: 'default',
    size: g('rbl-demo-size') === 'large' ? 'medium' : 'small',
    isSelected: g('rbl-demo-selected') === 'true' ? 'true' : 'false',
    isError: g('rbl-demo-error') === 'true' ? 'true' : 'false'
  };
  el.innerHTML = _rblRender(card, 2);
}
window.updateRBLDemo = updateRBLDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _rblInit() {
  updateRBLDemo();
  Object.keys(_specCards).forEach(function (k) {
    var card = _specCards[k];
    _rblConstrain(k, card);
    var host = document.getElementById('radio-button-with-label-spec-' + k);
    if (host) host.innerHTML = _rblRender(card, RBL_PREVIEW_SCALE);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _rblInit);
else _rblInit();
document.addEventListener('astro:page-load', _rblInit);
