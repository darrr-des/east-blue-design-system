/* Auto-extracted from assessment-src/components/action-list-counter.html.
 * Powers the live-preview dropdowns/toggles for the action-list-counter component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs action-list-counter
 */
/* ── Action List - with Counter JS ────────────────────── */
var _litcDemo = { density: 'Compact', state: 'Default', label: 'Notifications', count: '5' };

function _litcEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function _litcChevronSvg(color) {
  return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="flex-shrink:0;" aria-hidden="true">' +
    '<path d="M10 6l6 6-6 6" stroke="' + color + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' +
  '</svg>';
}

function _litcCounter(state, count) {
  var labelColor = state === 'empty' ? '#C2CFE5' : '#072592';
  var bg = '#EEF2F9';
  return '<span style="display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;padding:0 8px;border-radius:999px;background:' + bg + ';color:' + labelColor + ';font-family:\'Proxima Soft\',system-ui;font-weight:700;font-size:14px;line-height:14px;letter-spacing:0.25px;flex-shrink:0;">' + _litcEscape(count) + '</span>';
}

function _litcRow(density, state, label, count) {
  var padV = density === 'Expanded' ? 15 : 11;
  var rowH = density === 'Expanded' ? 64 : 56;
  var labelColor, chevronColor, counterState;

  if (state === 'Loading') {
    var padH = density === 'Expanded' ? 16 : 12;
    return '<div style="display:flex;align-items:center;gap:12px;width:360px;height:' + rowH + 'px;padding:' + padH + 'px;background:#FFF;border-radius:6px;box-shadow:0 1px 3px 0 #E8EEF2C9;box-sizing:border-box;">' +
      '<div style="width:32px;height:32px;border-radius:999px;background:#EEF2F9;flex-shrink:0;"></div>' +
      '<div style="flex:1;height:16px;border-radius:2px;background:#EEF2F9;"></div>' +
      '<div style="width:46px;height:16px;border-radius:2px;background:#EEF2F9;flex-shrink:0;"></div>' +
    '</div>';
  }

  if (state === 'Disabled') {
    labelColor = '#C2CFE5';
    chevronColor = '#9BC5FD';
    counterState = 'empty';
  } else {
    labelColor = '#005CE5';
    chevronColor = '#005CE5';
    counterState = 'filled';
  }

  return '<div style="display:flex;align-items:center;gap:12px;width:360px;height:' + rowH + 'px;padding:' + padV + 'px 12px;background:#FFF;border-radius:6px;box-shadow:0 1px 3px 0 #E8EEF2C9;box-sizing:border-box;">' +
    '<div style="width:32px;height:32px;border-radius:999px;background:#C2C6CF;flex-shrink:0;"></div>' +
    '<div style="flex:1;min-width:0;color:' + labelColor + ';font-family:\'Proxima Soft\',system-ui;font-weight:700;font-size:18px;line-height:20px;letter-spacing:0.25px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + _litcEscape(label) + '</div>' +
    _litcCounter(counterState, count) +
    _litcChevronSvg(chevronColor) +
  '</div>';
}

function updateLitcDemo() {
  var densityEl = document.getElementById('litc-demo-density');
  var stateEl = document.getElementById('litc-demo-state');
  var labelEl = document.getElementById('litc-demo-label');
  var countEl = document.getElementById('litc-demo-count');
  if (densityEl) _litcDemo.density = densityEl.value;
  if (stateEl) _litcDemo.state = stateEl.value;
  if (labelEl) _litcDemo.label = labelEl.value || 'Notifications';
  if (countEl) _litcDemo.count = countEl.value || '0';
  var preview = document.getElementById('litc-demo-preview');
  if (preview) preview.innerHTML = _litcRow(_litcDemo.density, _litcDemo.state, _litcDemo.label, _litcDemo.count);
}

/* ── Spec card state (per-card, drives previews + DEV code) ──────── */
var _specCards = {
  cd:   { density: 'Compact',  state: 'Default'  },
  ed:   { density: 'Expanded', state: 'Default'  },
  cdis: { density: 'Compact',  state: 'Disabled' },
  edis: { density: 'Expanded', state: 'Disabled' },
  cl:   { density: 'Compact',  state: 'Loading'  },
  el:   { density: 'Expanded', state: 'Loading'  }
};
window._specCards = _specCards;

/* ── Code snippet builders ──────────────────────────────────────── */
function buildSwiftSnippet(type, card) {
  var stateMap = { Default: '.default', Disabled: '.disabled', Loading: '.loading' };
  var stateVal = stateMap[card.state] || '.default';
  var lines = [];
  lines.push('EBActionRow("Notifications", icon: icon, counter: 5)');
  lines.push('    .ebState(' + stateVal + ')');
  if (card.density === 'Expanded') lines.push('    .ebDensity(.expanded)');
  lines.push('    .onTap { }');
  return lines.join('\n');
}

function buildComposeSnippet(type, card) {
  var stateVal = card.state || 'Default';
  var lines = [];
  lines.push('EBActionRow(');
  lines.push('    label = "Notifications",');
  lines.push('    leadingIcon = { icon },');
  lines.push('    counter = 5,');
  lines.push('    state = EBRowState.' + stateVal + ',');
  if (card.density === 'Expanded') lines.push('    density = EBRowDensity.Expanded,');
  lines.push('    onClick = { }');
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

function _litcTitleCase(s) {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update preview wrapper #litc-spec-{key} */
  var preview = document.getElementById('litc-spec-' + cardStyle);
  if (preview) {
    var rendered = _litcRow(card.density, card.state, 'Label', '3');
    var temp = document.createElement('div');
    temp.innerHTML = rendered;
    var inner = temp.firstChild;
    if (inner) {
      preview.innerHTML = inner.innerHTML;
      if (inner.getAttribute && inner.getAttribute('style')) {
        preview.setAttribute('style', inner.getAttribute('style'));
      }
    }
  }

  /* Update Properties text */
  var spState   = document.querySelector('[data-sp="' + cardStyle + '-state"]');
  var spDensity = document.querySelector('[data-sp="' + cardStyle + '-density"]');
  if (spState)   spState.textContent   = _litcTitleCase(card.state);
  if (spDensity) spDensity.textContent = _litcTitleCase(card.density);

  /* Colors + Layout sections are server-rendered from action-list-counter.ts.
     Each card already represents a fixed (density, state) combo, so cross-card
     control flipping is redundant — the user navigates to the matching card
     instead. Plan A `variants` not added for this reason. */

  /* Update DEV code — always */
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

function _litcInit() {
  updateLitcDemo();
  Object.keys(_specCards).forEach(function(k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _litcInit);
  else _litcInit();
  document.addEventListener('astro:page-load', _litcInit);
})();
