/* Radio Button — Style tab demo.
 * Rebuilt from Figma component set 26184:2588 (GCash DS Sticker Sheets v2).
 * Every colour, stroke weight and path below is read off `get_svg` on the
 * matching variant — nothing here is derived or invented.
 *
 * Axes: Style (Default | Check) × State (Default | Pressed | Disabled)
 *       × Size (Large | Medium | Small) × isSelected × isError  = 39 variants.
 *
 * Two combinations are NOT built in Figma and the panel disables them:
 *   · Style=Default, State=Disabled, isError=true  (selected and unselected)
 *   · Style=Check with isSelected=false or isError=true
 */

/* ── Geometry, per Size — read from the SVG exports ─────────────────── */
/*  box  = component width/height        stroke = ring stroke-width
 *  dot  = inner circle radius           check  = checkmark path (viewBox units)
 *  cw   = checkmark stroke-width        radius = container cornerRadius        */
var RB_GEO = {
  large:  { box: 24, stroke: 3,   dot: 6, check: 'M7 12L10.5 15L17 9',             cw: 3,    radius: 14.4, icon: 16 },
  medium: { box: 20, stroke: 2.5, dot: 5, check: 'M5 10L8.5 13L15 7',              cw: 3,    radius: 12,   icon: 16 },
  small:  { box: 16, stroke: 2,   dot: 4, check: 'M4.25 8L6.875 10.25L11.75 5.75', cw: 2.25, radius: 8,    icon: 12 }
};

/* ── Style=Default colours, keyed "state|isSelected|isError" ────────── */
var RB_RING = {
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

/* ── Style=Check disc fill, keyed by State (isSelected is always true) ─ */
var RB_DISC = { 'default': '#005CE5', 'pressed': '#2340A9', 'disabled': '#9BC5FD' };

/* Which State values exist for a given isError, under Style=Default. */
function _rbAllowedStates(card) {
  return card.isError === 'true'
    ? ['default', 'pressed']              /* Disabled + error is not built */
    : ['default', 'pressed', 'disabled'];
}

/* ── Renderer ───────────────────────────────────────────────────────── */
function _rbRender(card, scale) {
  scale = scale || 1;
  var g = RB_GEO[card.size] || RB_GEO.large;
  var b = g.box, c = b / 2, px = b * scale;
  var out = '<svg width="' + px + '" height="' + px + '" viewBox="0 0 ' + b + ' ' + b +
            '" fill="none" xmlns="http://www.w3.org/2000/svg">';

  if (card.style === 'check') {
    out += '<rect width="' + b + '" height="' + b + '" rx="' + c + '" fill="' +
           (RB_DISC[card.state] || RB_DISC['default']) + '"/>';
    out += '<path d="' + g.check + '" stroke="#FFFFFF" stroke-width="' + g.cw +
           '" stroke-linecap="round" stroke-linejoin="round"/>';
  } else {
    var col = RB_RING[card.state + '|' + card.isSelected + '|' + card.isError] ||
              RB_RING['default|' + card.isSelected + '|' + card.isError] ||
              RB_RING['default|false|false'];
    if (col.opacity < 1) out += '<g opacity="' + col.opacity + '">';
    if (col.dot) out += '<circle cx="' + c + '" cy="' + c + '" r="' + g.dot + '" fill="' + col.dot + '"/>';
    out += '<circle cx="' + c + '" cy="' + c + '" r="' + (c - g.stroke / 2) +
           '" stroke="' + col.ring + '" stroke-width="' + g.stroke + '"/>';
    if (col.opacity < 1) out += '</g>';
  }
  return out + '</svg>';
}

/* ── Per-card state — keys match each card's demoKey ────────────────── */
var _specCards = {
  main: { style: 'default', state: 'default', size: 'large', isSelected: 'false', isError: 'false' }
};
window._specCards = _specCards;

/* ── Panel constraints — never offer a variant Figma does not have ──── */
function _rbFindControl(cardStyle, prop) {
  return document.querySelector(
    '[onchange*="updateSpecCard(\'' + cardStyle + '\', \'' + prop + '\'"]');
}

/* forced: 'true' | 'false' to pin the value, or null to leave it alone.
   locked: true disables the switch and dims its row. */
function _rbSetToggle(cardStyle, prop, forced, locked, card) {
  if (forced !== null) card[prop] = forced;
  var input = _rbFindControl(cardStyle, prop);
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

function _rbSetStates(cardStyle, card, allowed) {
  if (allowed.indexOf(card.state) === -1) card.state = 'default';
  var sel = _rbFindControl(cardStyle, 'state');
  if (!sel || !sel.options) return;
  for (var i = 0; i < sel.options.length; i++) {
    var o = sel.options[i];
    o.disabled = allowed.indexOf(o.value) === -1;
    o.textContent = o.textContent.replace(/ — not built$/, '');
    if (o.disabled) o.textContent += ' — not built';
  }
  sel.value = card.state;
}

function _rbConstrain(cardStyle, card) {
  if (card.style === 'check') {
    /* Style=Check is built only as isSelected=true, isError=false —
       nine variants, 3 States x 3 Sizes. Pin both booleans. */
    _rbSetToggle(cardStyle, 'isSelected', 'true', true, card);
    _rbSetToggle(cardStyle, 'isError', 'false', true, card);
    _rbSetStates(cardStyle, card, ['default', 'pressed', 'disabled']);
  } else {
    /* Release the pins, then rule out Disabled + isError, which Figma
       does not build in either selected or unselected form. */
    _rbSetToggle(cardStyle, 'isSelected', null, false, card);
    _rbSetToggle(cardStyle, 'isError', null, false, card);
    _rbSetStates(cardStyle, card, _rbAllowedStates(card));
  }
}

/* ── DEV code — component API, re-rendered on every control change ──── */
function buildSwiftSnippet(cardStyle, card) {
  var size = { large: '.large', medium: '.regular', small: '.small' }[card.size] || '.large';
  var lines = ['EBRadioButton(isSelected: $isSelected)'];
  if (card.style === 'check') lines.push('    .ebRadioStyle(.check)');
  lines.push('    .controlSize(' + size + ')');
  if (card.isError === 'true') lines.push('    .ebInvalid(true)');
  if (card.state === 'disabled') lines.push('    .disabled(true)');
  return lines.join('\n');
}

function buildComposeSnippet(cardStyle, card) {
  var size = { large: 'Large', medium: 'Medium', small: 'Small' }[card.size] || 'Large';
  var lines = ['EBRadioButton('];
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
var RB_PREVIEW_SCALE = 3;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;
  _rbConstrain(cardStyle, card);

  var host = document.getElementById('radio-button-spec-' + cardStyle);
  if (host) host.innerHTML = _rbRender(card, RB_PREVIEW_SCALE);

  /* Properties readout. Colors / Layout `variants` are applied by the
     shared patcher in assessment.js — this script must not rebuild them. */
  /* Figma's own casing: enums are Title Case, booleans stay lowercase
     'false' / 'true' exactly as the property panel prints them. */
  var RB_BOOL = { isSelected: 1, isError: 1 };
  ['style', 'state', 'size', 'isSelected', 'isError'].forEach(function (k) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + k + '"]');
    if (!el) return;
    var v = String(card[k]);
    el.textContent = RB_BOOL[k] ? v : v.charAt(0).toUpperCase() + v.slice(1);
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
   (selected / size / style). Map it onto the real variant axes so the
   preview draws the Figma component rather than the old invention. */
function updateRadioButtonDemo() {
  var sel = document.getElementById('rb-demo-selected');
  var siz = document.getElementById('rb-demo-size');
  var sty = document.getElementById('rb-demo-style');
  var el  = document.getElementById('rb-demo-preview');
  if (!el) return;
  var v = sel ? sel.value : 'unselected';
  var card = {
    style: (sty && sty.value === 'checkmark') ? 'check' : 'default',
    state: v === 'disabled' ? 'disabled' : 'default',
    size: siz ? (siz.value === 'small' ? 'small' : 'large') : 'large',
    isSelected: (v === 'selected' || v === 'disabled') ? 'true' : 'false',
    isError: v === 'error' ? 'true' : 'false'
  };
  if (card.style === 'check') { card.isSelected = 'true'; card.isError = 'false'; }
  el.innerHTML = _rbRender(card, 2);
}
window.updateRadioButtonDemo = updateRadioButtonDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _rbInit() {
  updateRadioButtonDemo();
  Object.keys(_specCards).forEach(function (k) {
    var card = _specCards[k];
    _rbConstrain(k, card);
    var host = document.getElementById('radio-button-spec-' + k);
    if (host) host.innerHTML = _rbRender(card, RB_PREVIEW_SCALE);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _rbInit);
else _rbInit();
document.addEventListener('astro:page-load', _rbInit);
