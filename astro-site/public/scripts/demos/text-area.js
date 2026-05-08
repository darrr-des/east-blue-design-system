/* Auto-extracted from assessment-src/components/text-area.html.
 * Powers the live-preview dropdowns/toggles for the text-area component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs text-area
 */
/* ── Text Area Component JS ──────────────────────────────────────── */
var _taDemo = { state: 'default', filled: 'no', expandable: 'true' };

var _taColors = {
  default:  { border: '#D7E0EF', bg: '#FFFFFF', borderW: 1 },
  active:   { border: '#005CE5', bg: '#FFFFFF', borderW: 2 },
  error:    { border: '#D61B2C', bg: '#FFFFFF', borderW: 2 },
  disabled: { border: 'none',    bg: '#EEF2F9', borderW: 0 }
};
var _taTextColors = {
  default:  { filled: '#0A2757', empty: '#90A8D0' },
  active:   { filled: '#0A2757', empty: '#90A8D0' },
  error:    { filled: '#0A2757', empty: '#90A8D0' },
  disabled: { filled: '#B0C0DC', empty: '#C2CFE5' }
};

function _taBuildSvg(state, filled, expandable) {
  var c = _taColors[state] || _taColors.default;
  var tc = _taTextColors[state] || _taTextColors.default;
  var filledYes = (filled === 'yes');
  var h = filledYes ? 96 : 62;
  var textColor = filledYes ? tc.filled : tc.empty;
  var borderAttr = c.border === 'none' ? '' : ' stroke="' + c.border + '" stroke-width="' + c.borderW + '"';
  var s = '<svg width="328" height="' + h + '" viewBox="0 0 328 ' + h + '" fill="none">';
  s += '<rect x="0.5" y="0.5" width="327" height="' + (h - 1) + '" rx="5.5" fill="' + c.bg + '"' + borderAttr + '/>';
  if (filledYes) {
    s += '<text x="12" y="32" font-family="Proxima Soft, system-ui" font-size="14" font-weight="600" fill="' + textColor + '" letter-spacing="0.25">This a text area. This a text area.</text>';
    s += '<text x="12" y="50" font-family="Proxima Soft, system-ui" font-size="14" font-weight="600" fill="' + textColor + '" letter-spacing="0.25">This a text area. This a text area.</text>';
  } else {
    s += '<text x="12" y="36" font-family="Proxima Soft, system-ui" font-size="14" font-weight="600" fill="' + textColor + '" letter-spacing="0.25">Placeholder</text>';
  }
  if (expandable === 'true') {
    var gc = state === 'disabled' ? '#C2CFE5' : '#90A8D0';
    var bx = 322; /* 6px from right edge */
    var by = h - 6; /* 6px from bottom edge */
    s += '<path d="M' + (bx - 8) + ' ' + by + 'L' + bx + ' ' + (by - 8) + 'M' + (bx - 4) + ' ' + by + 'L' + bx + ' ' + (by - 4) + '" stroke="' + gc + '" stroke-width="1.2" stroke-linecap="round"/>';
  }
  s += '</svg>';
  return s;
}

function updateTextAreaDemo() {
  var el = document.getElementById('ta-demo-preview');
  if (el) el.innerHTML = _taBuildSvg(_taDemo.state, _taDemo.filled, _taDemo.expandable);
}

/* ── Spec Cards (canonical) ──────────────────────────────────────── */
var _specCards = {
  default:  { state: 'default',  filled: 'no', expandable: 'true' },
  active:   { state: 'active',   filled: 'no', expandable: 'true' },
  error:    { state: 'error',    filled: 'no', expandable: 'true' },
  disabled: { state: 'disabled', filled: 'no', expandable: 'true' }
};
window._specCards = _specCards;

function buildSwiftSnippet(type, card) {
  var stateMap = { default: '.default', active: '.active', error: '.error', disabled: '.disabled' };
  var s = 'EBTextArea(label: "Note", value: $note)';
  s += '\n    .ebState(' + (stateMap[card.state] || '.default') + ')';
  s += '\n    .ebMinLines(5)';
  if (card.filled === 'yes') s += '\n    .ebText("This a text area.")';
  if (card.state === 'disabled') s += '\n    .disabled(true)';
  return s;
}

function buildComposeSnippet(type, card) {
  var stateMap = { default: 'Default', active: 'Active', error: 'Error', disabled: 'Disabled' };
  var lines = ['EBTextArea('];
  lines.push('    label = "Note",');
  lines.push('    value = note,');
  lines.push('    minLines = 5,');
  lines.push('    state = EBFieldState.' + (stateMap[card.state] || 'Default'));
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update preview */
  var previewRoot = document.getElementById('spec-' + cardStyle + '-preview');
  if (previewRoot) {
    previewRoot.innerHTML = _taBuildSvg(card.state, card.filled, card.expandable);
  }

  /* Update Properties readouts */
  var spFilled = document.querySelector('[data-sp="' + cardStyle + '-filled"]');
  if (spFilled) spFilled.textContent = card.filled;
  var spExp = document.querySelector('[data-sp="' + cardStyle + '-expandable"]');
  if (spExp) spExp.textContent = card.expandable;

  /* Update DEV code */
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

function _taInit() {
  if (document.getElementById('ta-demo-preview')) updateTextAreaDemo();
  Object.keys(_specCards).forEach(function(k) {
    updateSpecCard(k, 'filled', _specCards[k].filled);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _taInit);
} else {
  _taInit();
}

/* Re-init after Astro view-transition swaps */
document.addEventListener('astro:page-load', _taInit);
