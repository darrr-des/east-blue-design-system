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
  s += '<text x="' + x + '" y="' + textY + '" font-family="HeyMeow Rnd, system-ui, sans-serif" font-size="' + fontSize + '" font-weight="600" fill="' + c.label + '" letter-spacing="0">' + message + '</text>';
  if (hasLabel) {
    var labelX = width - 40;
    var labelColor = (variant === 'Success') ? '#048570' : (variant === 'Error') ? '#D61B2C' : '#6780A9';
    s += '<text x="' + labelX + '" y="' + textY + '" font-family="HeyMeow Rnd, system-ui, sans-serif" font-size="' + fontSize + '" font-weight="600" fill="' + labelColor + '" letter-spacing="0">Label</text>';
  }
  s += '</svg>';
  return s;
}

function updateSubtextMessageDemo() {
  var el = document.getElementById('stm-demo-preview');
  if (el) el.innerHTML = _stmBuildSvg(_stmDemo.variant, _stmDemo.size, _stmDemo.leadingLabel, _stmDemo.trailingIcon);
}

var _stmSpecState = {
  primary: { size: 'Small' },
  success: { size: 'Small' },
  error:   { size: 'Small' }
};

function updateSubtextMessageSpecCard(variantKey, prop, value) {
  if (_stmSpecState[variantKey]) _stmSpecState[variantKey][prop] = value;
  var el = document.getElementById('stm-' + variantKey + '-preview');
  if (!el) return;
  var variantName = variantKey.charAt(0).toUpperCase() + variantKey.slice(1);
  var leadingLabel = 'false';
  var trailingIcon = (variantKey === 'primary') ? 'false' : 'true';
  el.innerHTML = _stmBuildSvg(variantName, _stmSpecState[variantKey].size, leadingLabel, trailingIcon);
}

function _stmInitSpecCards() {
  updateSubtextMessageSpecCard('primary', 'size', 'Small');
  updateSubtextMessageSpecCard('success', 'size', 'Small');
  updateSubtextMessageSpecCard('error', 'size', 'Small');
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
