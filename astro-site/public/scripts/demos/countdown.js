/* Countdown — live preview + spec cards.
 * Sized 1:1 to Figma node 4076:9090.
 *
 *   Full Container card:  360 × 92  (top 68 + button 24)
 *   Inline countdown:     185 × 44   (lives inside Full Container)
 *   One Container:        360 × 50
 *   Per Container cells:   56 × 50   (4 cells in 360 wide row, 3 colons)
 *   Pill:                 161 × 29
 *   Unit cell:             28 × 34   (number 20/24 + label 10/10)
 *   Colon separator:        3 × 10   (two 3×3 dots, 4px gap, vertically centered)
 */

/* ── Standalone (One/Per/Pill) palette per Mode × State ─────────── */
function _cdStandalonePalette(mode, state) {
  if (mode === 'light' && state === 'default') {
    return { bg: '#EEF2F9', border: '#E5EBF4', number: '#2340A9', label: '#6075C1', colon: '#9BC5FD' };
  }
  if (mode === 'light' && state === 'expiring') {
    return { bg: '#FCF0CA', border: '#EBB30A', number: '#966F0B', label: '#966F0B', colon: '#CA970C' };
  }
  if (mode === 'dark' && state === 'default') {
    return { bg: '#1972F9', border: 'transparent', number: '#FFFFFF', label: '#FFFFFF', colon: '#69A6FC' };
  }
  /* dark expiring */
  return { bg: '#F7D96E', border: 'transparent', number: '#453408', label: '#453408', colon: '#966F0B' };
}

/* ── Inline (inside Full Container) palette — different bg / number / label */
function _cdInlinePalette(mode, state) {
  if (mode === 'light' && state === 'default') {
    return { bg: '#E5F1FF', border: 'transparent', number: '#005CE5', label: '#4589ED', colon: '#9BC5FD' };
  }
  if (mode === 'light' && state === 'expiring') {
    return { bg: '#FCF0CA', border: 'transparent', number: '#966F0B', label: '#966F0B', colon: '#CA970C' };
  }
  if (mode === 'dark' && state === 'default') {
    return { bg: '#FFFFFF', border: 'transparent', number: '#005CE5', label: '#4589ED', colon: '#9BC5FD' };
  }
  /* dark expiring */
  return { bg: '#FFF9EB', border: 'transparent', number: '#966F0B', label: '#966F0B', colon: '#CA970C' };
}

/* ── Colon separator: 3×10 box with two 3×3 dots, 4px gap ──────── */
function _cdColon(palette, opts) {
  opts = opts || {};
  return '<div style="' +
    'display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;' +
    'width:3px;height:' + (opts.height || '34px') + ';flex:0 0 3px;' +
  '">' +
    '<div style="width:3px;height:3px;border-radius:50%;background:' + palette.colon + ';"></div>' +
    '<div style="width:3px;height:3px;border-radius:50%;background:' + palette.colon + ';"></div>' +
  '</div>';
}

/* ── Unit cell (number 20/24 stacked over label 10/10) ─────────── */
function _cdUnit(num, label, palette, opts) {
  opts = opts || {};
  return '<div style="' +
    'box-sizing:border-box;' +
    'display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0;' +
    'width:' + (opts.width || '28px') + ';' +
    'height:' + (opts.height || '34px') + ';' +
    (opts.boxBg ? 'background:' + opts.boxBg + ';' : '') +
    (opts.boxBorder && opts.boxBorder !== 'transparent' ? 'border:1px solid ' + opts.boxBorder + ';' : '') +
    (opts.boxRadius ? 'border-radius:' + opts.boxRadius + ';' : '') +
  '">' +
    '<div style="font-family:\'Proxima Soft\', system-ui, sans-serif;font-weight:700;font-size:20px;line-height:24px;letter-spacing:0;color:' + palette.number + ';">' + num + '</div>' +
    '<div style="font-family:\'Proxima Soft\', system-ui, sans-serif;font-weight:600;font-size:10px;line-height:10px;letter-spacing:0.25px;color:' + palette.label + ';margin-top:0;">' + label + '</div>' +
  '</div>';
}

/* ── One Container — standalone 360 × 50 ────────────────────────── */
function _cdOneRow(state, mode) {
  var p = _cdStandalonePalette(mode, state);
  /* Dark-default uses a horizontal gradient (verified in Figma) */
  var bg = (mode === 'dark' && state === 'default')
    ? 'linear-gradient(90deg, #1972F9 0%, #005CE5 100%)'
    : p.bg;
  var s = '<div style="' +
    'box-sizing:border-box;width:360px;height:50px;' +
    'background:' + bg + ';' +
    (p.border === 'transparent' ? '' : 'border:1px solid ' + p.border + ';') +
    'border-radius:6px;' +
    'padding:8px 16px;' +
    'display:flex;align-items:center;justify-content:space-between;' +
    'font-family:\'Proxima Soft\', system-ui, sans-serif;' +
  '">';
  var units = [['5','days'],['9','hrs'],['48','mins'],['16','secs']];
  units.forEach(function(u, i) {
    s += _cdUnit(u[0], u[1], p);
    if (i < units.length - 1) s += _cdColon(p);
  });
  s += '</div>';
  return s;
}

/* ── Inline countdown — 185 × 44, lives inside Full Container ── */
function _cdInline(state, mode) {
  var p = _cdInlinePalette(mode, state);
  var s = '<div style="' +
    'box-sizing:border-box;width:185px;height:44px;' +
    'background:' + p.bg + ';' +
    'border-radius:6px;' +
    'padding:4px 8px 6px;' +
    'display:flex;align-items:center;justify-content:space-between;' +
    'flex:0 0 185px;' +
    'font-family:\'Proxima Soft\', system-ui, sans-serif;' +
  '">';
  var units = [['5','days'],['9','hrs'],['48','mins'],['16','secs']];
  units.forEach(function(u, i) {
    s += _cdUnit(u[0], u[1], p);
    if (i < units.length - 1) s += _cdColon(p, { height: '34px' });
  });
  s += '</div>';
  return s;
}

/* ── Full Container — 360 × 92 promo card ───────────────────────── */
function _cdFull(state, mode) {
  var cardBg     = mode === 'dark' ? '#1972F9' : '#FFFFFF';
  var titleColor = mode === 'dark' ? '#FFFFFF' : '#071969';
  var iconColor  = mode === 'dark' ? '#FFFFFF' : '#ADBDDC';
  var ctaBg      = mode === 'dark' ? '#2340A9' : '#005CE5';

  var s = '<div style="' +
    'box-sizing:border-box;width:360px;height:92px;' +
    'background:' + cardBg + ';' +
    'font-family:\'Proxima Soft\', system-ui, sans-serif;' +
    'position:relative;display:flex;flex-direction:column;' +
    'overflow:hidden;' +
  '">';

  /* Close icon — absolute, top-right, 16×16 at (340,4) */
  s += '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" ' +
    'style="position:absolute;top:4px;right:4px;z-index:2;">' +
    '<path d="M4 4l8 8M12 4l-8 8" stroke="' + iconColor + '" stroke-width="1.5" stroke-linecap="round"/>' +
  '</svg>';

  /* Top section — 360 × 68 */
  /* Title (95 × 32) at (20, 18) + Inline countdown (185 × 44) at (151, 12) */
  s += '<div style="height:68px;box-sizing:border-box;padding:0 24px 0 20px;display:flex;align-items:center;gap:36px;">' +
    '<div style="font-weight:700;font-size:16px;line-height:16px;letter-spacing:0.25px;color:' + titleColor + ';white-space:pre-line;flex:0 0 95px;">Hurry up!\nSale ends in:</div>' +
    _cdInline(state, mode) +
  '</div>';

  /* CTA — 360 × 24, full-bleed */
  s += '<div style="height:24px;background:' + ctaBg + ';display:flex;align-items:center;justify-content:center;color:#FFFFFF;font-weight:700;font-size:14px;line-height:14px;letter-spacing:0.25px;">Show now!</div>';

  s += '</div>';
  return s;
}

/* ── Per Container — 360 × 50, four 56×50 boxes ──────────────── */
function _cdPer(state, mode, variant) {
  variant = variant || 'default';
  var p = _cdStandalonePalette(mode, state);
  /* Per Container dark default uses solid #1972F9 (not gradient) */
  var allUnits = [['00','days'],['00','hrs'],['00','mins'],['00','secs']];
  if (variant === 'no-days')   allUnits = allUnits.slice(1);
  if (variant === 'mins-secs') allUnits = allUnits.slice(2);

  var width = variant === 'mins-secs' ? '147px' : variant === 'no-days' ? '238px' : '360px';
  var s = '<div style="' +
    'box-sizing:border-box;width:' + width + ';height:50px;' +
    'display:flex;align-items:center;justify-content:space-between;' +
    'font-family:\'Proxima Soft\', system-ui, sans-serif;' +
  '">';
  allUnits.forEach(function(u, i) {
    s += _cdUnit(u[0], u[1], p, {
      width: '56px',
      height: '50px',
      boxBg: p.bg,
      boxBorder: p.border,
      boxRadius: '8px',
    });
    if (i < allUnits.length - 1) s += _cdColon(p, { height: '50px' });
  });
  s += '</div>';
  return s;
}

/* ── Pill — 161 × 29, leading clock icon + text ─────────────── */
function _cdPill(state, mode) {
  var p = _cdStandalonePalette(mode, state);
  var textColor = p.number;
  var iconColor = p.number;

  var s = '<div style="' +
    'box-sizing:border-box;width:161px;height:29px;flex:0 0 auto;' +
    'background:' + p.bg + ';' +
    (p.border === 'transparent' ? '' : 'border:1px solid ' + p.border + ';') +
    'border-radius:44px;' +
    'padding:0 12px 0 8px;' +
    'display:inline-flex;align-items:center;gap:8px;' +
    'overflow:hidden;white-space:nowrap;' +
    'font-family:\'Proxima Soft\', system-ui, sans-serif;' +
  '">';
  /* Alarm-clock icon (bell shape with two ear-handles on top) */
  s += '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" style="flex:0 0 20px;display:block;">' +
    '<path d="M3.5 5.5l2-2M16.5 5.5l-2-2" stroke="' + iconColor + '" stroke-width="1.5" stroke-linecap="round"/>' +
    '<circle cx="10" cy="11" r="6" stroke="' + iconColor + '" stroke-width="1.5"/>' +
    '<path d="M10 8v3l2 1.5" stroke="' + iconColor + '" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
  '</svg>';
  s += '<span style="font-weight:600;font-size:16px;line-height:16px;letter-spacing:0.25px;color:' + textColor + ';white-space:nowrap;flex:0 0 auto;">03d : 37h : 01m</span>';
  s += '</div>';
  return s;
}

/* ── Dispatch ───────────────────────────────────────────────────── */
function _cdBuild(style, state, mode, variant) {
  if (style === 'full') return _cdFull(state, mode);
  if (style === 'one')  return _cdOneRow(state, mode);
  if (style === 'per')  return _cdPer(state, mode, variant);
  if (style === 'pill') return _cdPill(state, mode);
  return _cdOneRow(state, mode);
}

/* ── Live overview demo state ───────────────────────────────────── */
var _cdDemo = { style: 'full', state: 'default', mode: 'light' };

function updateCountdownDemo() {
  var el = document.getElementById('cd-demo-preview');
  if (el) el.innerHTML = _cdBuild(_cdDemo.style, _cdDemo.state, _cdDemo.mode, 'default');
}

/* ── Spec card state ────────────────────────────────────────────── */
var _specCards = {
  'full': { state: 'default', mode: 'light' },
  'one':  { state: 'default', mode: 'light' },
  'per':  { state: 'default', mode: 'light', variant: 'default' },
  'pill': { state: 'default', mode: 'light' }
};
window._specCards = _specCards;

var _cdCardKeys = {
  'full': 'full-container',
  'one':  'one-container',
  'per':  'per-container',
  'pill': 'pill'
};

function buildSwiftSnippet(cardKey, card) {
  if (cardKey === 'full') {
    return 'EBCountdownPromo(\n    title: "Hurry up! Sale ends in:",\n    endsAt: saleEnd,\n    cta: "Show now!",\n    onTapCTA: { openSale() }\n)';
  }
  var style = cardKey === 'one' ? 'one' : cardKey === 'per' ? 'per' : 'pill';
  var lines = ['EBCountdown(endsAt: endDate)'];
  lines.push('    .ebStyle(.' + style + ')');
  if (card.state === 'expiring') lines.push('    .ebState(.expiring)');
  if (style === 'per' && card.variant === 'no-days')   lines.push('    .ebUnits([.hours, .mins, .secs])');
  if (style === 'per' && card.variant === 'mins-secs') lines.push('    .ebUnits([.mins, .secs])');
  return lines.join('\n');
}

function buildComposeSnippet(cardKey, card) {
  if (cardKey === 'full') {
    return 'EBCountdownPromo(\n    title = "Hurry up! Sale ends in:",\n    endsAt = saleEnd,\n    cta = "Show now!",\n    onTapCTA = { openSale() }\n)';
  }
  var style = cardKey === 'one' ? 'One' : cardKey === 'per' ? 'Per' : 'Pill';
  var lines = ['EBCountdown('];
  lines.push('    endsAt = endDate,');
  lines.push('    style = EBCountdownStyle.' + style + ',');
  if (card.state === 'expiring') lines.push('    state = EBCountdownState.Expiring,');
  if (cardKey === 'per' && card.variant === 'no-days')   lines.push('    units = listOf(EBTimeUnit.Hour, EBTimeUnit.Min, EBTimeUnit.Sec),');
  if (cardKey === 'per' && card.variant === 'mins-secs') lines.push('    units = listOf(EBTimeUnit.Min, EBTimeUnit.Sec),');
  var last = lines[lines.length - 1];
  if (last.charAt(last.length - 1) === ',') lines[lines.length - 1] = last.slice(0, -1);
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  var rootId = _cdCardKeys[cardStyle];
  var rootEl = document.getElementById('spec-card-' + rootId);
  if (rootEl) {
    var previewEl = rootEl.querySelector('.spec-card-preview');
    if (previewEl) previewEl.innerHTML = _cdBuild(cardStyle, card.state, card.mode, card.variant);
  }

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

function _cdInit() {
  updateCountdownDemo();
  Object.keys(_specCards).forEach(function(k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _cdInit);
else _cdInit();
document.addEventListener('astro:page-load', _cdInit);
