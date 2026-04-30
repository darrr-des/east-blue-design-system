/* Auto-extracted from assessment-src/components/action-list-description.html.
 * Powers the live-preview dropdowns/toggles for the action-list-description component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs action-list-description
 */
/* ── Action List - with Description JS ─────────────────────────────────────── */
var _litdDemo = { state: 'Default', icon: true, trailing: true, chevron: true, border: false };

function _litdChevronSvg(color) {
  return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="' + color + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

function _litdBuildRow(state, icon, trailing, chevron, border) {
  var labelColor = state === 'Disabled' ? '#C2CFE5' : '#0A2757';
  var descColor = state === 'Disabled' ? '#C2CFE5' : '#6780A9';
  var ctaColor = state === 'Disabled' ? '#9BC5FD' : '#005CE5';
  var chevColor = state === 'Disabled' ? '#9BC5FD' : '#005CE5';
  var s = '';

  if (state === 'Loading') {
    s += '<div style="display:flex;align-items:center;gap:12px;padding:14px 24px 14px 12px;width:360px;background:#FFF;box-sizing:border-box;' + (border ? 'border-bottom:1px solid #EEF2F9;' : '') + '">';
    if (icon) s += '<div style="width:32px;height:32px;border-radius:99px;background:#EEF2F9;flex:0 0 auto;"></div>';
    s += '<div style="flex:1;display:flex;flex-direction:column;gap:6px;min-width:0;">';
    s += '<div style="height:16px;border-radius:2px;background:#EEF2F9;width:100%;"></div>';
    s += '<div style="height:8px;border-radius:2px;background:#EEF2F9;width:100%;"></div>';
    s += '</div>';
    s += '<div style="height:16px;width:53px;border-radius:2px;background:#EEF2F9;flex:0 0 auto;"></div>';
    s += '</div>';
    return s;
  }

  s += '<div style="display:flex;align-items:center;padding:12px;width:360px;background:#FFF;box-sizing:border-box;' + (border ? 'border-bottom:1px solid #EEF2F9;' : '') + '">';
  s += '<div style="display:flex;align-items:flex-start;gap:12px;flex:1;min-width:0;">';
  if (icon) s += '<div style="padding-top:2px;flex:0 0 auto;"><div style="width:32px;height:32px;border-radius:99px;background:#C2C6CF;"></div></div>';
  s += '<div style="display:flex;flex-direction:column;gap:6px;flex:1;min-width:0;justify-content:center;">';
  s += '<div style="font-family:\'Proxima Soft\', system-ui;font-weight:600;font-size:16px;line-height:16px;letter-spacing:0.25px;color:' + labelColor + ';">Label</div>';
  s += '<div style="font-family:\'Proxima Soft\', system-ui;font-weight:600;font-size:12px;line-height:14px;letter-spacing:0.5px;color:' + descColor + ';">description</div>';
  s += '</div>';
  s += '</div>';
  if (trailing) s += '<div style="padding-left:8px;font-family:\'Proxima Soft\', system-ui;font-weight:600;font-size:16px;letter-spacing:0.25px;color:' + ctaColor + ';flex:0 0 auto;">CTA</div>';
  if (chevron) s += '<div style="padding:4px;flex:0 0 auto;">' + _litdChevronSvg(chevColor) + '</div>';
  s += '</div>';
  return s;
}

function updateListItemTdDemo() {
  _litdDemo.state = document.getElementById('litd-demo-state').value;
  _litdDemo.icon = document.getElementById('litd-demo-icon').value === 'true';
  _litdDemo.trailing = document.getElementById('litd-demo-trailing').value === 'true';
  _litdDemo.chevron = document.getElementById('litd-demo-chevron').value === 'true';
  _litdDemo.border = document.getElementById('litd-demo-border').value === 'true';
  var el = document.getElementById('litd-demo-preview');
  if (el) el.innerHTML = _litdBuildRow(_litdDemo.state, _litdDemo.icon, _litdDemo.trailing, _litdDemo.chevron, _litdDemo.border);
}

/* ── Spec card state (per-card, drives previews + DEV code) ──────── */
var _specCards = {
  default:  { state: 'Default'  },
  disabled: { state: 'Disabled' },
  loading:  { state: 'Loading'  }
};
window._specCards = _specCards;

function _litdColorRowsFor(card) {
  if (card.state === 'Loading') {
    return [
      ['Bg',       '#FFFFFF', 'action-list/color/default/bg'],
      ['Skeleton', '#EEF2F9', 'bg/color-bg-strong']
    ];
  }
  if (card.state === 'Disabled') {
    return [
      ['Bg',          '#FFFFFF', 'action-list/color/disabled/bg'],
      ['Label',       '#C2CFE5', 'action-list/color/disabled/label'],
      ['Description', '#C2CFE5', 'action-list/color/disabled/description'],
      ['Link',        '#9BC5FD', 'action-list/color/disabled/label-link'],
      ['Chevron',     '#9BC5FD', 'action-list/color/disabled/chevron']
    ];
  }
  return [
    ['Bg',          '#FFFFFF', 'action-list/color/default/bg'],
    ['Label',       '#0A2757', 'action-list/color/default/label'],
    ['Description', '#6780A9', 'action-list/color/default/description'],
    ['Link',        '#005CE5', 'action-list/color/default/label-link'],
    ['Chevron',     '#005CE5', 'action-list/color/default/chevron']
  ];
}

/* ── Code snippet builders ──────────────────────────────────────── */
function buildSwiftSnippet(type, card) {
  var stateMap = { Default: '.default', Disabled: '.disabled', Loading: '.loading' };
  var stateVal = stateMap[card.state] || '.default';
  var lines = [];
  lines.push('EBActionRow("Account settings", icon: icon, description: "Subtitle")');
  lines.push('    .ebState(' + stateVal + ')');
  lines.push('    .onTap { }');
  return lines.join('\n');
}

function buildComposeSnippet(type, card) {
  var stateVal = card.state || 'Default';
  var lines = [];
  lines.push('EBActionRow(');
  lines.push('    label = "Account settings",');
  lines.push('    description = "Subtitle",');
  lines.push('    leadingIcon = { icon },');
  lines.push('    state = EBRowState.' + stateVal + ',');
  lines.push('    onClick = { }');
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

function _litdTitleCase(s) {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update preview wrapper #litd-spec-{key} */
  var preview = document.getElementById('litd-spec-' + cardStyle);
  if (preview) {
    var rendered = _litdBuildRow(card.state, true, true, true, false);
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

  /* Update Properties readout */
  var spState = document.querySelector('[data-sp="' + cardStyle + '-state"]');
  if (spState) spState.textContent = _litdTitleCase(card.state);

  /* Update Colors section */
  var colorsEl = document.getElementById('spec-' + cardStyle + '-colors');
  if (colorsEl) {
    var rows = _litdColorRowsFor(card);
    var h = '<div class="spec-detail-label">Colors</div><div class="spec-props">';
    rows.forEach(function(r) {
      var border = (r[1] === '#FFFFFF') ? 'border:1px solid #E2E4E9' : '';
      var tokenHtml = r[2] ? '<span class="spec-token-name">' + r[2] + '</span>' : '';
      h += '<div class="spec-prop has-token"><span class="spec-prop-key">' + r[0] + '</span>'
         + '<span class="spec-prop-val mono"><span class="spec-swatch" style="background:' + r[1] + ';' + border + '"></span> ' + r[1] + '</span>'
         + tokenHtml + '</div>';
    });
    h += '</div>';
    colorsEl.innerHTML = h;
  }

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

/* Legacy alias */
function _litdInitSpecCards() {
  Object.keys(_specCards).forEach(function(k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}

function _litdInit() {
  updateListItemTdDemo();
  _litdInitSpecCards();
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _litdInit);
  else _litdInit();
  document.addEventListener('astro:page-load', _litdInit);
})();
