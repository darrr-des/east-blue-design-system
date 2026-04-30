/* Callout — live preview + spec cards.
 * Wired to the Astro SpecCard demo-panel (`updateSpecCard(demoKey, prop, value)`).
 * Re-extract via: node astro-site/scripts/extract-demos.mjs callout
 */
var _calDemo = { label: 'yes', labelSize: 'default', description: 'yes', type: 'default' };

var _calColors = {
  'default':     { bg: '#F6F9FD', border: '#E5EBF4', label: '#445C85', description: '#6780A9' },
  'information': { bg: '#E5F1FF', border: '#D2E5FF', label: '#072592', description: '#6780A9' }
};

function _calBuildSvg(label, labelSize, description, type) {
  var c = _calColors[type] || _calColors['default'];
  var showLabel = (label === 'yes') && (labelSize === 'small' || labelSize === 'default');
  var showDesc  = (description === 'yes');
  var labelFontSize = (labelSize === 'small') ? 12 : 16;
  var labelLineHeight = (labelSize === 'small') ? 12 : 16;
  var descFontSize = 14;
  var descLineHeight = 20;
  var descLineCount = 4;
  var padH = 12;
  var padV = 12;
  var gap = 2;
  var width = 336;
  var contentH = 0;
  if (showLabel) contentH += labelLineHeight;
  if (showLabel && showDesc) contentH += gap;
  if (showDesc) contentH += descLineHeight * descLineCount;
  if (!showLabel && !showDesc) contentH = labelLineHeight;
  var height = contentH + (padV * 2);
  var s = '<svg width="' + width + '" height="' + height + '" viewBox="0 0 ' + width + ' ' + height + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<rect x="0.5" y="0.5" width="' + (width - 1) + '" height="' + (height - 1) + '" rx="5.5" fill="' + c.bg + '" stroke="' + c.border + '"/>';
  var y = padV + labelLineHeight * 0.75;
  if (showLabel) {
    var tracking = (labelSize === 'small') ? 0.5 : 0.25;
    s += '<text x="' + padH + '" y="' + y + '" font-family="Proxima Soft, Proxima Nova, system-ui, sans-serif" font-size="' + labelFontSize + '" font-weight="700" fill="' + c.label + '" letter-spacing="' + tracking + '">Add title here</text>';
    y += (labelLineHeight - labelLineHeight * 0.75) + gap;
  }
  if (showDesc) {
    if (showLabel) {
      y += descLineHeight * 0.75;
    } else {
      y = padV + descLineHeight * 0.75;
    }
    var lines = [
      'This is the first sentence. This is the second sentence. This is the third',
      'sentence. This is the fourth sentence. This is the fifth',
      'sentence.'
    ];
    for (var i = 0; i < lines.length; i++) {
      s += '<text x="' + padH + '" y="' + y + '" font-family="BarkAda, system-ui, sans-serif" font-size="' + descFontSize + '" font-weight="600" fill="' + c.description + '">' + lines[i] + '</text>';
      y += descLineHeight;
    }
  }
  s += '</svg>';
  return s;
}

function updateCalloutDemo() {
  var el = document.getElementById('cal-demo-preview');
  if (el) el.innerHTML = _calBuildSvg(_calDemo.label, _calDemo.labelSize, _calDemo.description, _calDemo.type);
}

/* ── Spec cards (Style tab) ──────────────────────────────────────── */
var _calSpecCards = {
  'default-both':  { type: 'default',     label: 'yes', labelSize: 'default', description: 'yes' },
  'info-both':     { type: 'information', label: 'yes', labelSize: 'default', description: 'yes' },
  'default-small': { type: 'default',     label: 'yes', labelSize: 'small',   description: 'yes' },
  'default-desc':  { type: 'default',     label: 'no',  labelSize: 'default', description: 'yes' },
  'default-label': { type: 'default',     label: 'yes', labelSize: 'default', description: 'no' }
};
var _specCards = _calSpecCards;
window._specCards = _specCards;

function buildSwiftSnippet(cardKey, card) {
  var lines = ['EBCallout('];
  if (card.label === 'yes') lines.push('    label: "Label",');
  if (card.description === 'yes') lines.push('    description: "Body copy"');
  lines.push(')');
  lines.push('.ebIntent(.' + (card.type === 'information' ? 'info' : 'default') + ')');
  return lines.join('\n');
}

function buildComposeSnippet(cardKey, card) {
  var lines = ['EBCallout('];
  if (card.label === 'yes') lines.push('    label = "Label",');
  if (card.description === 'yes') lines.push('    description = "Body copy",');
  lines.push('    intent = EBCalloutIntent.' + (card.type === 'information' ? 'Info' : 'Default'));
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _calSpecCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update preview SVG — `cal-spec-{cardStyle}-preview` */
  var previewEl = document.getElementById('cal-spec-' + cardStyle + '-preview');
  if (previewEl) {
    previewEl.innerHTML = _calBuildSvg(card.label, card.labelSize, card.description, card.type);
  }

  /* Update Properties readouts */
  var labelMap = {
    type:        { default: 'Default', information: 'Information' },
    label:       { yes: 'yes', no: 'no' },
    labelSize:   { default: 'Default', small: 'Small' },
    description: { yes: 'yes', no: 'no' }
  };
  Object.keys(card).forEach(function(k) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + k + '"]');
    if (!el) return;
    var span = el.querySelector('.spec-prop-hex') || el;
    span.textContent = (labelMap[k] && labelMap[k][card[k]]) || card[k];
  });

  /* DEV code update */
  var devView = document.querySelector('[data-view="' + cardStyle + '-dev"]');
  if (devView) {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && activeTab.textContent.toLowerCase().indexOf('swift') !== -1 ? 'swift' : 'compose';
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

function _calInitSpecCards() {
  Object.keys(_calSpecCards).forEach(function(key) {
    updateSpecCard(key, 'type', _calSpecCards[key].type);
  });
}

function _calInit() {
  updateCalloutDemo();
  _calInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _calInit);
} else {
  _calInit();
}
document.addEventListener('astro:page-load', _calInit);
