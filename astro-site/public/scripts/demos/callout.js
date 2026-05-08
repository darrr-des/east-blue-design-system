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
  var titleSize = (labelSize === 'small') ? 12 : 16;
  var titleTracking = (labelSize === 'small') ? 0.5 : 0.25;

  var s = '<div style="' +
    'box-sizing:border-box;' +
    'width:336px;' +
    'padding:12px;' +
    'background:' + c.bg + ';' +
    'border:1px solid ' + c.border + ';' +
    'border-radius:6px;' +
    'font-family:\'Proxima Soft\', system-ui, sans-serif;' +
    '">';

  if (showLabel) {
    s += '<div style="' +
      'font-weight:700;' +
      'font-size:' + titleSize + 'px;' +
      'line-height:' + titleSize + 'px;' +
      'letter-spacing:' + titleTracking + 'px;' +
      'color:' + c.label + ';' +
      (showDesc ? 'margin-bottom:2px;' : '') +
      '">Add title here</div>';
  }

  if (showDesc) {
    s += '<div style="' +
      'font-weight:600;' +
      'font-size:14px;' +
      'line-height:20px;' +
      'letter-spacing:0;' +
      'color:' + c.description + ';' +
      '">This is the first sentence. This is the second sentence. This is the third sentence. This is the fourth sentence. This is the fifth sentence.</div>';
  }

  s += '</div>';
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
