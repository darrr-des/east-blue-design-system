/* Auto-extracted from assessment-src/components/view-only-field.html.
 * Powers the live-preview dropdowns/toggles for the view-only-field component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs view-only-field
 */
/* ── View Only Field Component JS ─────────────────────────────────── */
var _vofDemo = { variant: 'Default', size: 'Default', checkmark: 'false', description: 'true' };

function _vofBuildSvg(variant, size, checkmark, description) {
  var w = 360;
  var isLarge = size === 'Large';
  var labelSize = isLarge ? 16 : 14;
  var valueSize = isLarge ? 22 : 16;
  var valueWeight = isLarge ? 700 : 600;
  var descSize = isLarge ? 12 : 10;
  var h = isLarge ? 71 : 57;
  if (description === 'true') h += (isLarge ? 22 : 18);

  var s = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" fill="none" xmlns="http://www.w3.org/2000/svg">';

  /* Label */
  var labelY = labelSize - 1;
  s += '<text x="0" y="' + labelY + '" font-family="Proxima Soft, system-ui" font-size="' + labelSize + '" font-weight="600" fill="#6780A9">Label</text>';

  /* Value text */
  var valueY = labelY + 8 + valueSize;
  s += '<text x="0" y="' + valueY + '" font-family="Proxima Soft, system-ui" font-size="' + valueSize + '" font-weight="' + valueWeight + '" fill="#0A2757">Text</text>';

  /* Checkmark */
  if (checkmark === 'true') {
    var textWidth = valueSize * 1.8;
    var checkX = textWidth + 8;
    var checkY = valueY - valueSize + 3;
    s += '<path d="M' + checkX + ' ' + (checkY + 6) + 'l3 3 6-7" stroke="#005CE5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>';
  }

  /* Trailing slot */
  if (variant === 'with Badge') {
    var badgeY = isLarge ? (labelY + 20) : (labelY + 12);
    s += '<rect x="' + (w - 60) + '" y="' + badgeY + '" width="54" height="16" rx="8" fill="#E5F1FF"/>';
    s += '<text x="' + (w - 33) + '" y="' + (badgeY + 11) + '" text-anchor="middle" font-family="Proxima Soft, system-ui" font-size="11" font-weight="700" fill="#005CE5">Change</text>';
  } else if (variant === 'with Text Link') {
    var linkY = isLarge ? 12 : 10;
    s += '<text x="' + w + '" y="' + linkY + '" text-anchor="end" font-family="BarkAda, system-ui" font-size="12" font-weight="600" fill="#005CE5">What is this?</text>';
  } else if (variant === 'with Icon') {
    var iconX = w - 20;
    var iconY = isLarge ? 16 : 8;
    s += '<g transform="translate(' + iconX + ', ' + iconY + ')" stroke="#005CE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none">';
    s += '<path d="M12 20h9"/>';
    s += '<path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>';
    s += '</g>';
  }

  /* Description subtext */
  if (description === 'true') {
    var descY = valueY + (isLarge ? 22 : 18);
    s += '<text x="0" y="' + descY + '" font-family="BarkAda, system-ui" font-size="' + descSize + '" font-weight="600" fill="#6780A9">Message content</text>';
  }

  s += '</svg>';
  return s;
}

function updateViewOnlyFieldDemo() {
  var el = document.getElementById('vof-demo-preview');
  if (el) el.innerHTML = _vofBuildSvg(_vofDemo.variant, _vofDemo.size, _vofDemo.checkmark, _vofDemo.description);
}

/* ── View Only Field Spec Cards ───────────────────────────────────── */
var _vofVariantMap = {
  'default':  'Default',
  'badge':    'with Badge',
  'textlink': 'with Text Link',
  'icon':     'with Icon'
};

var _vofSpecCards = {
  'default':  { variant: 'Default',        size: 'Default', checkmark: 'false', description: 'true' },
  'badge':    { variant: 'with Badge',     size: 'Default', checkmark: 'false', description: 'true' },
  'textlink': { variant: 'with Text Link', size: 'Default', checkmark: 'false', description: 'true' },
  'icon':     { variant: 'with Icon',      size: 'Default', checkmark: 'false', description: 'true' }
};

/* Expose for shared utilities — `switchCodeTab` reads this. */
var _specCards = _vofSpecCards;
window._specCards = _specCards;

function buildSwiftSnippet(type, card) {
  var sizeArg = card.size === 'Large' ? '.large' : '.regular';
  var trailing = '';
  if (type === 'badge') {
    trailing = ',\n    trailing: { EBBadge("Change", state: .information, level: .light) }';
  } else if (type === 'textlink') {
    trailing = ',\n    trailing: { Button("What is this?") {} }';
  } else if (type === 'icon') {
    trailing = ',\n    trailing: { Image(systemName: "pencil") }';
  }
  var desc = card.description === 'true' ? ',\n    description: "Message content"' : '';
  var check = card.checkmark === 'true' ? ',\n    isVerified: true' : '';
  return 'EBViewOnlyField(\n    label: "Label",\n    value: "Text"' + desc + check + trailing + '\n)\n.controlSize(' + sizeArg + ')';
}

function buildComposeSnippet(type, card) {
  var sizeArg = card.size === 'Large' ? 'EBFieldSize.Large' : 'EBFieldSize.Regular';
  var trailing = '';
  if (type === 'badge') {
    trailing = ',\n    trailing = { EBBadge(text = "Change", state = BadgeState.Information, level = BadgeLevel.Light) }';
  } else if (type === 'textlink') {
    trailing = ',\n    trailing = { TextButton(text = "What is this?", onClick = { }) }';
  } else if (type === 'icon') {
    trailing = ',\n    trailing = { Icon(Icons.Default.Edit, contentDescription = "Edit") }';
  }
  var desc = card.description === 'true' ? ',\n    description = "Message content"' : '';
  var check = card.checkmark === 'true' ? ',\n    isVerified = true' : '';
  return 'EBViewOnlyField(\n    label = "Label",\n    value = "Text",\n    size = ' + sizeArg + desc + check + trailing + '\n)';
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _vofSpecCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update SVG preview — locate by id `vof-preview-${cardStyle}` */
  var previewEl = document.getElementById('vof-preview-' + cardStyle);
  if (previewEl) {
    previewEl.innerHTML = _vofBuildSvg(card.variant, card.size, card.checkmark, card.description);
  }

  /* Update Properties readouts via [data-sp="${cardStyle}-${prop}"] */
  var spEl = document.querySelector('[data-sp="' + cardStyle + '-' + prop + '"]');
  if (spEl) spEl.textContent = value;

  /* Update DEV code — locate via [data-code-content="${cardStyle}"]. */
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
window.updateSpecCard = updateSpecCard;

function _vofInitSpecCards() {
  Object.keys(_vofSpecCards).forEach(function(key) {
    var card = _vofSpecCards[key];
    var el = document.getElementById('vof-preview-' + key);
    if (el) el.innerHTML = _vofBuildSvg(card.variant, card.size, card.checkmark, card.description);
  });
}

function _vofInit() {
  updateViewOnlyFieldDemo();
  _vofInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _vofInit);
} else {
  _vofInit();
}

/* ── Re-init after Astro view-transition swaps ─────────────── */
(function(){
  document.addEventListener('astro:page-load', _vofInit);
})();
