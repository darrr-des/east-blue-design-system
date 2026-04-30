/* Auto-extracted from assessment-src/components/action-list.html.
 * Powers the live-preview dropdowns/toggles for the action-list component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs action-list
 */
/* ── Action List JS ─────────────────────────────────────────── */
/* 3 sibling shapes × 3 states. Preview renders the shape + state picked
   in the playground. Counter sibling intentionally renders its label in
   the brand-blue Bold 18 style to visualize the C2 inconsistency.      */

function _litEscape(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function _litIcon(disabled, loading) {
  if (loading) {
    return '<div style="width:32px;height:32px;border-radius:50%;background:#EEF2F9;flex-shrink:0;"></div>';
  }
  var fill = '#C2C6CF';
  return '<div style="width:32px;height:32px;border-radius:50%;background:' + fill + ';flex-shrink:0;opacity:' + (disabled ? '.5' : '1') + ';"></div>';
}

function _litChevron(color) {
  return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="flex-shrink:0;"><path d="M10 6l6 6-6 6" stroke="' + color + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

function _litRender(opts) {
  var variant = opts.variant || 'base';
  var state   = opts.state   || 'default';
  var density = opts.density || 'compact';
  var label   = opts.label   || 'Label';
  var desc    = opts.desc    || 'description';
  var counter = opts.counter || '3';

  var isLoading  = state === 'loading';
  var isDisabled = state === 'disabled';
  var labelColor   = isDisabled ? '#C2CFE5' : (variant === 'counter' ? '#005CE5' : '#0A2757');
  var descColor    = isDisabled ? '#C2CFE5' : '#6780A9';
  var ctaColor     = isDisabled ? '#9BC5FD' : '#005CE5';
  var chevColor    = isDisabled ? '#9BC5FD' : (variant === 'counter' ? '#005CE5' : '#0A2757');
  var counterBg    = '#EEF2F9';
  var counterColor = isDisabled ? '#C2CFE5' : '#072592';

  var padV = density === 'expanded' ? 12 : 8;
  var rowExtra = variant === 'counter' ? 'border-radius:6px;box-shadow:0 1px 3px 0 rgba(232,238,242,.79);' : '';
  var bg = '#FFFFFF';

  var labelFontSize = variant === 'counter' ? 18 : 16;
  var labelWeight   = variant === 'counter' ? 700 : 600;

  var html = '<div style="width:360px;background:' + bg + ';' + rowExtra + '">';
  html += '<div style="display:flex;align-items:center;gap:12px;padding:' + padV + 'px 12px;">';

  // Leading icon (always present except loading w/ no icon — we always show)
  html += _litIcon(isDisabled, isLoading);

  // Body
  if (isLoading) {
    html += '<div style="flex:1 0 0;display:flex;flex-direction:column;gap:6px;min-width:0;">';
    html += '<div style="height:16px;border-radius:2px;background:#EEF2F9;"></div>';
    if (variant === 'description') {
      html += '<div style="height:12px;border-radius:2px;background:#EEF2F9;width:60%;"></div>';
    }
    html += '</div>';
    html += '<div style="height:16px;width:51px;border-radius:2px;background:#EEF2F9;flex-shrink:0;"></div>';
  } else {
    html += '<div style="flex:1 0 0;display:flex;flex-direction:column;justify-content:center;gap:6px;min-width:0;">';
    html += '<div style="font-family:\'Proxima Soft\',system-ui;font-size:' + labelFontSize + 'px;line-height:' + labelFontSize + 'px;font-weight:' + labelWeight + ';letter-spacing:0.25px;color:' + labelColor + ';">' + _litEscape(label) + '</div>';
    if (variant === 'description') {
      html += '<div style="font-family:\'Proxima Soft\',system-ui;font-size:12px;line-height:14px;font-weight:600;letter-spacing:0.5px;color:' + descColor + ';">' + _litEscape(desc) + '</div>';
    }
    html += '</div>';

    // Trailing
    if (variant === 'counter') {
      html += '<div style="display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;padding:0 8px;border-radius:999px;background:' + counterBg + ';color:' + counterColor + ';font-family:\'Proxima Soft\',system-ui;font-size:14px;font-weight:700;letter-spacing:0.25px;flex-shrink:0;">' + _litEscape(counter) + '</div>';
    } else {
      html += '<span style="font-family:\'Proxima Soft\',system-ui;font-size:16px;font-weight:600;letter-spacing:0.25px;color:' + ctaColor + ';flex-shrink:0;">CTA</span>';
    }
    html += _litChevron(chevColor);
  }

  html += '</div>';
  html += '</div>';
  return html;
}

function updateLitDemo() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var el = document.getElementById('lit-demo-preview');
  if (!el) return;
  el.innerHTML = _litRender({
    variant: getVal('lit-ctrl-variant', 'base'),
    state:   getVal('lit-ctrl-state',   'default'),
    density: getVal('lit-ctrl-density', 'compact'),
    label:   getVal('lit-ctrl-label',   'Label'),
    desc:    getVal('lit-ctrl-desc',    'description'),
    counter: getVal('lit-ctrl-counter', '3')
  });
}

/* ── Spec card state (per-card, drives previews + DEV code) ──────── */
var _specCards = {
  base:        { variant: 'base',        state: 'default', density: 'compact' },
  counter:     { variant: 'counter',     state: 'default', density: 'compact' },
  description: { variant: 'description', state: 'default', density: 'compact' }
};
window._specCards = _specCards;

/* Layout deltas per card × density */
function _litLayoutFor(card) {
  var compact = card.density !== 'expanded';
  if (card.variant === 'description') {
    return { rowH: '60px', padH: '12px', padV: compact ? '8px' : '12px' };
  }
  if (card.variant === 'counter') {
    return { rowH: compact ? '56px' : '64px', padH: '12px', padV: compact ? '11px' : '15px' };
  }
  return { rowH: compact ? '48px' : '56px', padH: '12px', padV: compact ? '8px' : '12px' };
}

function _litColorRowsFor(card) {
  if (card.state === 'disabled') {
    if (card.variant === 'counter') {
      return [
        ['Bg',      '#FFFFFF', 'action-list/color/disabled/bg'],
        ['Label',   '#C2CFE5', 'action-list/color/disabled/label'],
        ['Counter', '#E5EBF4', 'counter/color/empty/bg'],
        ['Chevron', '#9BC5FD', 'action-list/color/disabled/chevron']
      ];
    }
    if (card.variant === 'description') {
      return [
        ['Bg',          '#FFFFFF', 'action-list/color/disabled/bg'],
        ['Label',       '#C2CFE5', 'action-list/color/disabled/label'],
        ['Description', '#C2CFE5', 'action-list/color/disabled/description'],
        ['Link',        '#9BC5FD', 'action-list/color/disabled/label-link'],
        ['Chevron',     '#9BC5FD', 'action-list/color/disabled/chevron']
      ];
    }
    return [
      ['Bg',      '#FFFFFF', 'action-list/color/disabled/bg'],
      ['Label',   '#C2CFE5', 'action-list/color/disabled/label'],
      ['Link',    '#9BC5FD', 'action-list/color/disabled/label-link'],
      ['Chevron', '#9BC5FD', 'action-list/color/disabled/chevron']
    ];
  }
  if (card.state === 'loading') {
    return [
      ['Bg',       '#FFFFFF', 'action-list/color/default/bg'],
      ['Skeleton', '#EEF2F9', 'bg/color-bg-strong']
    ];
  }
  /* default */
  if (card.variant === 'counter') {
    return [
      ['Bg',      '#FFFFFF', 'action-list/color/default/bg'],
      ['Label',   '#005CE5', 'action-list/color/default/label-brand'],
      ['Counter', '#005CE5', 'counter/color/filled/bg'],
      ['Chevron', '#005CE5', 'action-list/color/default/chevron']
    ];
  }
  if (card.variant === 'description') {
    return [
      ['Bg',          '#FFFFFF', 'action-list/color/default/bg'],
      ['Label',       '#0A2757', 'action-list/color/default/label'],
      ['Description', '#6780A9', 'action-list/color/default/description'],
      ['Link',        '#005CE5', 'action-list/color/default/label-link'],
      ['Chevron',     '#005CE5', 'action-list/color/default/chevron']
    ];
  }
  return [
    ['Bg',      '#FFFFFF', 'action-list/color/default/bg'],
    ['Label',   '#0A2757', 'action-list/color/default/label'],
    ['Link',    '#005CE5', 'action-list/color/default/label-link'],
    ['Chevron', '#005CE5', 'action-list/color/default/chevron']
  ];
}

/* ── Code snippet builders (called by updateSpecCard + switchCodeTab) ── */
function buildSwiftSnippet(type, card) {
  var stateMap = { default: '.default', disabled: '.disabled', loading: '.loading' };
  var stateVal = stateMap[card.state] || '.default';
  var lines = [];
  if (type === 'counter') {
    lines.push('EBActionRow("Notifications", icon: icon, counter: 5)');
  } else if (type === 'description') {
    lines.push('EBActionRow("Account settings", icon: icon, description: "Subtitle")');
  } else {
    lines.push('EBActionRow("Account settings", icon: icon)');
  }
  lines.push('    .ebState(' + stateVal + ')');
  if (card.density === 'expanded') lines.push('    .ebDensity(.expanded)');
  lines.push('    .onTap { }');
  return lines.join('\n');
}

function buildComposeSnippet(type, card) {
  var stateMap = { default: 'Default', disabled: 'Disabled', loading: 'Loading' };
  var stateVal = stateMap[card.state] || 'Default';
  var lines = [];
  lines.push('EBActionRow(');
  if (type === 'counter') {
    lines.push('    label = "Notifications",');
    lines.push('    leadingIcon = { icon },');
    lines.push('    counter = 5,');
  } else if (type === 'description') {
    lines.push('    label = "Account settings",');
    lines.push('    description = "Subtitle",');
    lines.push('    leadingIcon = { icon },');
  } else {
    lines.push('    label = "Account settings",');
    lines.push('    leadingIcon = { icon },');
  }
  lines.push('    state = EBRowState.' + stateVal + ',');
  if (card.density === 'expanded') lines.push('    density = EBRowDensity.Expanded,');
  lines.push('    onClick = { }');
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

function _titleCase(s) {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update the preview wrapper's HTML (we wrap the preview in #lit-spec-{key}) */
  var preview = document.getElementById('lit-spec-' + cardStyle);
  if (preview) {
    var rendered = _litRender({
      variant: card.variant,
      state:   card.state,
      density: card.density,
      label:   'Label',
      desc:    'description',
      counter: '3'
    });
    /* _litRender returns a wrapping <div>; replace the wrapper's inner content */
    var temp = document.createElement('div');
    temp.innerHTML = rendered;
    var inner = temp.firstChild;
    if (inner) {
      preview.innerHTML = inner.innerHTML;
      /* Carry width/styles from rendered onto the wrapper for shape parity */
      if (inner.getAttribute && inner.getAttribute('style')) {
        preview.setAttribute('style', inner.getAttribute('style'));
      }
    }
  }

  /* Update Properties text — data-sp="${cardStyle}-${prop}" */
  var spState   = document.querySelector('[data-sp="' + cardStyle + '-state"]');
  var spDensity = document.querySelector('[data-sp="' + cardStyle + '-density"]');
  if (spState)   spState.textContent   = _titleCase(card.state);
  if (spDensity) spDensity.textContent = _titleCase(card.density);

  /* Update Colors section */
  var colorsEl = document.getElementById('spec-' + cardStyle + '-colors');
  if (colorsEl) {
    var rows = _litColorRowsFor(card);
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

  /* Update Layout section */
  var layoutEl = document.getElementById('spec-' + cardStyle + '-layout');
  if (layoutEl) {
    var L = _litLayoutFor(card);
    var lh = '<div class="spec-detail-label">Layout</div><div class="spec-props">';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Row height</span><span class="spec-prop-val mono">' + L.rowH + '</span></div>';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Padding H</span><span class="spec-prop-val mono">' + L.padH + '</span></div>';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Padding V</span><span class="spec-prop-val mono">' + L.padV + '</span></div>';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Chevron size</span><span class="spec-prop-val mono">24 × 24</span></div>';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Hit target</span><span class="spec-prop-val mono">full row</span></div>';
    lh += '</div>';
    layoutEl.innerHTML = lh;
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

function _litInitSpecCards() {
  /* Initialize each card by triggering one update */
  Object.keys(_specCards).forEach(function(k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}

function _litInit() {
  updateLitDemo();
  _litInitSpecCards();
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _litInit);
  else _litInit();
  document.addEventListener('astro:page-load', _litInit);
})();
