/* Auto-extracted from assessment-src/components/badge.html.
 * Powers the live-preview dropdowns/toggles for the badge component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs badge
 */
/* ── Badge Component JS ──────────────────────────────────────────── */

/* Color map: State -> Level -> { bg, label } */
var _bdColors = {
  Primary: {
    Heavy:  { bg: '#005CE5', label: '#FFFFFF' },
    Medium: { bg: '#005CE5', label: '#FFFFFF' },
    Light:  { bg: '#005CE5', label: '#FFFFFF' }
  },
  Brand: {
    Heavy:  { bg: '#1972F9', label: '#FFFFFF' },
    Medium: { bg: '#1972F9', label: '#FFFFFF' },
    Light:  { bg: '#1972F9', label: '#FFFFFF' }
  },
  Info: {
    Light:  { bg: '#E5F1FF', label: '#005CE5' },
    Medium: { bg: '#D2E5FF', label: '#005CE5' },
    Heavy:  { bg: '#2340A9', label: '#FFFFFF' }
  },
  Success: {
    Light:  { bg: '#E7F8F0', label: '#048570' },
    Medium: { bg: '#CAF2E0', label: '#048570' },
    Heavy:  { bg: '#12AF80', label: '#FFFFFF' }
  },
  Warning: {
    Light:  { bg: '#FCF0CA', label: '#966F0B' },
    Medium: { bg: '#F7D96E', label: '#966F0B' },
    Heavy:  { bg: '#CA970C', label: '#FFFFFF' }
  },
  Danger: {
    Light:  { bg: '#F8E6E6', label: '#B50707' },
    Medium: { bg: '#F4C7C9', label: '#8D0710' },
    Heavy:  { bg: '#D61B2C', label: '#FFFFFF' }
  },
  Disabled: {
    Light:  { bg: '#C2C5CA', label: '#FFFFFF' },
    Medium: { bg: '#9A9FA7', label: '#FFFFFF' },
    Heavy:  { bg: '#717883', label: '#FFFFFF' }
  }
};

/* Primary and Brand only have Heavy */
var _bdHeavyOnly = { Primary: true, Brand: true };

/* Type shape configs */
var _bdTypes = {
  Default:     { rx: 99, padH: 8, padV: [2, 4], fontSize: 12, h: null },
  Voucher:     { rx: '0,0,4,0', padH: 8, padV: [2, 4], fontSize: 12, h: 18 },
  Transaction: { rx: 4, padH: 4, padV: [1, 3], fontSize: 12, h: null },
  Dashboard:   { rx: 4, padH: 4, padV: [1, 1], fontSize: 10, h: null }
};

/* Token semantic name mapping */
var _bdTokenNames = {
  Primary: 'primary', Brand: 'brand', Info: 'information',
  Success: 'positive', Warning: 'notice', Danger: 'negative', Disabled: 'muted'
};

function _bdGetColors(state, level) {
  var s = _bdColors[state];
  if (!s) s = _bdColors.Primary;
  /* Clamp to Heavy for Primary/Brand */
  if (_bdHeavyOnly[state]) level = 'Heavy';
  return s[level] || s.Heavy;
}

function _bdBuildHtml(state, level, type) {
  var c = _bdGetColors(state, level);
  var t = _bdTypes[type] || _bdTypes.Default;
  var fs = t.fontSize;

  /* Border-radius per type */
  var br;
  if (type === 'Voucher') br = '0 0 4px 0';
  else if (type === 'Default') br = '99px';
  else br = '4px';

  /* Build the badge span */
  var style = 'display:inline-block;';
  style += 'background:' + c.bg + ';';
  style += 'color:' + c.label + ';';
  style += 'font-family:HeyMeow Rnd,system-ui,sans-serif;';
  style += 'font-weight:700;';
  style += 'font-size:' + fs + 'px;';
  style += 'line-height:' + fs + 'px;';
  style += 'letter-spacing:' + (fs === 10 ? '0.25' : '0.5') + 'px;';
  style += 'padding:' + t.padV[1] + 'px ' + t.padH + 'px ' + t.padV[0] + 'px;';
  style += 'border-radius:' + br + ';';
  style += 'text-align:center;white-space:nowrap;';
  if (t.h) style += 'height:' + t.h + 'px;box-sizing:border-box;';

  return '<span style="' + style + '">Label</span>';
}

/* ── Live Preview Demo ─────────────────────────────────────────── */
function updateBadgeDemo() {
  var state = document.getElementById('bd-demo-state').value;
  var level = document.getElementById('bd-demo-level').value;
  var type  = document.getElementById('bd-demo-type').value;

  /* Clamp level for Primary/Brand */
  if (_bdHeavyOnly[state] && level !== 'Heavy') {
    document.getElementById('bd-demo-level').value = 'Heavy';
    level = 'Heavy';
  }

  var el = document.getElementById('bd-demo-preview');
  if (el) el.innerHTML = _bdBuildHtml(state, level, type);
}

/* ── Spec Card Updates ─────────────────────────────────────────── */
var _bdSpecCards = {
  'default':     { state: 'Primary', level: 'Heavy', type: 'Default' },
  'voucher':     { state: 'Primary', level: 'Heavy', type: 'Voucher' },
  'transaction': { state: 'Primary', level: 'Heavy', type: 'Transaction' },
  'dashboard':   { state: 'Primary', level: 'Heavy', type: 'Dashboard' }
};

/* Expose for shared utilities — `switchCodeTab` reads this when the
   user clicks SwiftUI / Compose so it can rebuild the snippet. */
var _specCards = _bdSpecCards;
window._specCards = _specCards;

function updateBadgeSpecCard(cardType, prop, value) {
  return updateSpecCard(cardType, prop, value);
}

function updateSpecCard(cardType, prop, value) {
  var card = _bdSpecCards[cardType];
  if (!card) return;
  card[prop] = value;

  /* Clamp level for Primary/Brand */
  if (_bdHeavyOnly[card.state] && card.level !== 'Heavy') {
    card.level = 'Heavy';
  }

  /* Update preview span — id `bd-spec-${cardType}-preview` lives inside
     SpecCard's previewHtml (kept as legacy id) */
  var previewEl = document.getElementById('bd-spec-' + cardType + '-preview');
  if (previewEl) previewEl.innerHTML = _bdBuildHtml(card.state, card.level, card.type);

  /* Update Properties readouts — data-sp="${demoKey}-${prop}" */
  var spState = document.querySelector('[data-sp="' + cardType + '-state"]');
  if (spState) spState.textContent = card.state;
  var spLevel = document.querySelector('[data-sp="' + cardType + '-level"]');
  if (spLevel) spLevel.textContent = card.level;

  /* Update Colors section — id `spec-${demoKey}-colors` */
  var colorsEl = document.getElementById('spec-' + cardType + '-colors');
  if (colorsEl) {
    var c = _bdGetColors(card.state, card.level);
    var tokenBase = 'main/badge/' + (_bdTokenNames[card.state] || 'primary') + '/' + card.level.toLowerCase();
    var labelBorder = (c.label === '#FFFFFF') ? 'border:1px solid #E5EBF4' : '';
    var h = '<div class="spec-detail-label">Colors</div><div class="spec-props">';
    h += '<div class="spec-prop has-token"><span class="spec-prop-key">Background</span>'
       + '<span class="spec-prop-val mono"><span class="spec-swatch" style="background:' + c.bg + '"></span> ' + c.bg + '</span>'
       + '<span class="spec-token-name">' + tokenBase + '/background</span></div>';
    h += '<div class="spec-prop has-token"><span class="spec-prop-key">Label</span>'
       + '<span class="spec-prop-val mono"><span class="spec-swatch" style="background:' + c.label + ';' + labelBorder + '"></span> ' + c.label + '</span>'
       + '<span class="spec-token-name">' + tokenBase + '/label</span></div>';
    h += '</div>';
    colorsEl.innerHTML = h;
  }

  /* Update Layout section — id `spec-${demoKey}-layout` */
  var layoutEl = document.getElementById('spec-' + cardType + '-layout');
  if (layoutEl) {
    var t = _bdTypes[card.type] || _bdTypes.Default;
    var radiusLabel;
    if (card.type === 'Default') radiusLabel = '99px (pill)';
    else if (card.type === 'Voucher') radiusLabel = '0/0/4px/0 (BR only)';
    else radiusLabel = '4px';

    var lh = '<div class="spec-detail-label">Layout</div><div class="spec-props">';
    if (t.h) lh += '<div class="spec-prop"><span class="spec-prop-key">Height</span><span class="spec-prop-val mono">' + t.h + 'px (fixed)</span></div>';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Padding H</span><span class="spec-prop-val mono">' + t.padH + 'px</span></div>';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Padding V</span><span class="spec-prop-val mono">' + t.padV[0] + 'px (top) / ' + t.padV[1] + 'px (bottom)</span></div>';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Corner radius</span><span class="spec-prop-val mono">' + radiusLabel + '</span></div>';
    lh += '</div>';
    layoutEl.innerHTML = lh;
  }

  /* Update Typography section — id `spec-${demoKey}-typo` */
  var typoEl = document.getElementById('spec-' + cardType + '-typo');
  if (typoEl) {
    var isDash = (card.type === 'Dashboard');
    var th = '<div class="spec-detail-label">Typography</div><div class="spec-props">';
    th += '<div class="spec-prop"><span class="spec-prop-key">Text Style</span><span class="spec-prop-val mono">' + (isDash ? 'Primary/Label/Tiny' : 'Primary/Label/Fine') + '</span></div>';
    th += '<div class="spec-prop"><span class="spec-prop-key">Font</span><span class="spec-prop-val mono">HeyMeow Rnd Bold</span></div>';
    th += '<div class="spec-prop"><span class="spec-prop-key">Size</span><span class="spec-prop-val mono">' + (isDash ? '10px' : '12px') + '</span></div>';
    th += '<div class="spec-prop"><span class="spec-prop-key">Tracking</span><span class="spec-prop-val mono">' + (isDash ? '0.25px' : '0.5px') + '</span></div>';
    th += '<div class="spec-prop"><span class="spec-prop-key">Line-height</span><span class="spec-prop-val mono">' + (isDash ? '10px' : '12px') + '</span></div>';
    th += '</div>';
    typoEl.innerHTML = th;
  }

  /* Update DEV code — locate via `[data-code-content="${demoKey}"]` */
  var devView = document.querySelector('[data-view="' + cardType + '-dev"]');
  if (devView) {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && activeTab.textContent.toLowerCase().indexOf('swift') !== -1 ? 'swift' : 'compose';
    var codeEl = devView.querySelector('[data-code-content="' + cardType + '"]');
    if (codeEl) {
      var code = getSnippet(cardType, lang, card);
      codeEl.setAttribute('data-final', code);
      codeEl.setAttribute('data-lang', lang);
      codeEl.textContent = code;
      if (typeof window.highlightSyntax === 'function') window.highlightSyntax(codeEl);
    }
  }
}

function _getBadgeSnippet(cardType, lang) {
  var card = _bdSpecCards[cardType];
  if (!card) return '';
  var st = card.state.toLowerCase();
  var lv = card.level.toLowerCase();
  var tp = card.type.toLowerCase();
  var typeParam = (tp === 'default') ? '' : ', type: .' + tp;

  if (lang === 'swift') {
    return 'EBBadge("Label", state: .' + st + ', level: .' + lv + typeParam + ')';
  } else {
    var lines = 'EBBadge(\n    text = "Label",\n    state = BadgeState.' + card.state + ',\n    level = BadgeLevel.' + card.level;
    if (tp !== 'default') lines += ',\n    type = BadgeType.' + card.type;
    lines += '\n)';
    return lines;
  }
}

function buildSwiftSnippet(type, card) {
  return _getBadgeSnippet(type, 'swift');
}
function buildComposeSnippet(type, card) {
  return _getBadgeSnippet(type, 'compose');
}
function getSnippet(type, lang, card) {
  return _getBadgeSnippet(type, lang);
}
window.getSnippet = getSnippet;

function switchBadgeCodeTab(tabBtn, lang, cardType) {
  var parent = tabBtn.parentElement;
  parent.querySelectorAll('.spec-code-tab').forEach(function(t) { t.classList.remove('active'); });
  tabBtn.classList.add('active');
  var codeEl = document.getElementById('bd-code-' + cardType);
  if (codeEl) {
    var raw = _getBadgeSnippet(cardType, lang);
    codeEl.setAttribute('data-final', raw);
    codeEl.textContent = raw;
    if (typeof highlightSyntax === 'function') highlightSyntax(codeEl);
  }
}

function toggleBadgeSpecMode(type, toggleEl) {
  var labels = toggleEl.querySelectorAll('.spec-mode-label');
  var isDes = labels[0].classList.contains('active');
  labels[0].classList.toggle('active', !isDes);
  labels[1].classList.toggle('active', isDes);
  var desView = document.querySelector('[data-view="' + type + '-des"]');
  var devView = document.querySelector('[data-view="' + type + '-dev"]');
  if (isDes) {
    if (desView) desView.style.display = 'none';
    if (devView) {
      devView.style.display = '';
      var shortType = type.replace('bd-', '');
      var activeTab = devView.querySelector('.spec-code-tab.active');
      var lang = activeTab && activeTab.textContent.toLowerCase().indexOf('swift') !== -1 ? 'swift' : 'compose';
      var codeEl = devView.querySelector('code');
      if (codeEl) {
        var raw = _getBadgeSnippet(shortType, lang);
        codeEl.setAttribute('data-final', raw);
        codeEl.textContent = raw;
        if (typeof highlightSyntax === 'function') highlightSyntax(codeEl);
      }
    }
  } else {
    if (devView) devView.style.display = 'none';
    if (desView) desView.style.display = '';
  }
}

/* ── Init ──────────────────────────────────────────────────────── */
function _bdInit() {
  updateBadgeDemo();
  ['default', 'voucher', 'transaction', 'dashboard'].forEach(function(ct) {
    updateBadgeSpecCard(ct, 'state', 'Primary');
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _bdInit);
} else {
  _bdInit();
}
