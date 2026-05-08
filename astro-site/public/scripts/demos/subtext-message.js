/* Auto-extracted from assessment-src/components/subtext-message.html.
 * Powers the live-preview dropdowns/toggles for the subtext-message component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs subtext-message
 */
/* ── Subtext Message Component JS ──────────────────────────────────── */
var _stmDemo = { variant: 'Primary', size: 'Small', leadingLabel: 'false', trailingIcon: 'true' };

var _stmColors = {
  Primary: { label: '#6780A9', icon: null },
  Success: { label: '#048570', icon: '#12AF80' },
  Error:   { label: '#D61B2C', icon: '#D61B2C' }
};

function _stmBuildSvg(variant, size, leadingLabel, trailingIcon) {
  var c = _stmColors[variant] || _stmColors.Primary;
  var fontSize = (size === 'Base') ? 12 : 10;
  var lineHeight = (size === 'Base') ? 18 : 15;
  var height = lineHeight + 8;
  var hasIcon = (variant !== 'Primary') && (trailingIcon === 'true');
  var hasLabel = (variant === 'Primary' || variant === 'Success' || variant === 'Error') && (leadingLabel === 'true');
  var message = (variant === 'Primary') ? 'Message content' : (variant === 'Success') ? 'Valid message content' : 'Invalid message content';
  var width = 260;
  var x = 2;
  var s = '<svg width="' + width + '" height="' + height + '" viewBox="0 0 ' + width + ' ' + height + '" fill="none">';
  if (hasIcon) {
    s += '<g transform="translate(' + x + ',' + ((height - 16) / 2) + ')">';
    s += '<circle cx="8" cy="8" r="7" fill="' + c.icon + '"/>';
    if (variant === 'Success') {
      s += '<path d="M5 8.3l2.1 2.1L11.2 6" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>';
    } else {
      s += '<path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round"/>';
    }
    s += '</g>';
    x += 16 + 4;
  }
  var textY = (height / 2) + (fontSize / 3);
  s += '<text x="' + x + '" y="' + textY + '" font-family="BarkAda, system-ui, sans-serif" font-size="' + fontSize + '" font-weight="600" fill="' + c.label + '" letter-spacing="0">' + message + '</text>';
  if (hasLabel) {
    var labelX = width - 40;
    var labelColor = (variant === 'Success') ? '#048570' : (variant === 'Error') ? '#D61B2C' : '#6780A9';
    s += '<text x="' + labelX + '" y="' + textY + '" font-family="BarkAda, system-ui, sans-serif" font-size="' + fontSize + '" font-weight="600" fill="' + labelColor + '" letter-spacing="0">Label</text>';
  }
  s += '</svg>';
  return s;
}

function updateSubtextMessageDemo() {
  var el = document.getElementById('stm-demo-preview');
  if (el) el.innerHTML = _stmBuildSvg(_stmDemo.variant, _stmDemo.size, _stmDemo.leadingLabel, _stmDemo.trailingIcon);
}

/* ── Subtext Message Spec Cards ───────────────────────────────────── */
var _stmSpecCards = {
  primary: { variant: 'Primary', size: 'Small', leadingLabel: 'false', trailingIcon: 'false' },
  success: { variant: 'Success', size: 'Small', leadingLabel: 'false', trailingIcon: 'true' },
  error:   { variant: 'Error',   size: 'Small', leadingLabel: 'false', trailingIcon: 'true' }
};

/* Expose for shared utilities — `switchCodeTab` reads this when the
   user clicks SwiftUI / Compose so it can rebuild the snippet. */
var _specCards = _stmSpecCards;
window._specCards = _specCards;

function buildSwiftSnippet(type, card) {
  var intentMap = { Primary: '.primary', Success: '.success', Error: '.error' };
  var sizeMap = { Base: '.regular', Small: '.small' };
  var intent = intentMap[card.variant] || '.primary';
  var sz = sizeMap[card.size] || '.small';
  var lines = [];
  lines.push('EBSubtextMessage("Helper text")');
  lines.push('    .ebIntent(' + intent + ')');
  lines.push('    .controlSize(' + sz + ')');
  return lines.join('\n');
}

function buildComposeSnippet(type, card) {
  var intentMap = { Primary: 'Primary', Success: 'Success', Error: 'Error' };
  var sizeMap = { Base: 'Base', Small: 'Small' };
  var intent = intentMap[card.variant] || 'Primary';
  var sz = sizeMap[card.size] || 'Small';
  var lines = [];
  lines.push('EBSubtextMessage(');
  lines.push('    label = "Helper text",');
  lines.push('    intent = EBSubtextIntent.' + intent + ',');
  lines.push('    size = EBSubtextSize.' + sz);
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _stmSpecCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update preview SVG — find the <svg> inside the card's preview pane */
  var cardEl = document.getElementById('spec-card-stm-spec-' + cardStyle);
  if (cardEl) {
    var preview = cardEl.querySelector('.spec-card-preview');
    if (preview) preview.innerHTML = _stmBuildSvg(card.variant, card.size, card.leadingLabel, card.trailingIcon);
  }

  /* Update Properties readouts — data-sp="${cardStyle}-${prop}" */
  var spEl = document.querySelector('[data-sp="' + cardStyle + '-' + prop + '"]');
  if (spEl) spEl.textContent = value;

  /* Update DEV code — locate via [data-code-content="${cardStyle}"] */
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

function _stmInitSpecCards() {
  Object.keys(_stmSpecCards).forEach(function (k) {
    updateSpecCard(k, 'size', _stmSpecCards[k].size);
  });
}

function _stmInit() {
  updateSubtextMessageDemo();
  _stmInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _stmInit);
} else {
  _stmInit();
}

/* ── Re-init after Astro view-transition swaps ─────────────── */
document.addEventListener('astro:page-load', _stmInit);
