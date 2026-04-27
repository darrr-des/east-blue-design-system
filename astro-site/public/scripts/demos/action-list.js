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

function _litInitSpecCards() {
  var b = document.getElementById('lit-preview-base');
  if (b) b.innerHTML = _litRender({variant:'base', state:'default', density:'compact', label:'Label'});
  var c = document.getElementById('lit-preview-counter');
  if (c) c.innerHTML = _litRender({variant:'counter', state:'default', density:'compact', label:'Label', counter:'3'});
  var d = document.getElementById('lit-preview-desc');
  if (d) d.innerHTML = _litRender({variant:'description', state:'default', density:'compact', label:'Label', desc:'description'});
}

function _litInit() {
  updateLitDemo();
  _litInitSpecCards();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _litInit);
else _litInit();
