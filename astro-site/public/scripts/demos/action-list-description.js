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

function _litdInitSpecCards() {
  var map = [
    { id: 'default', state: 'Default' },
    { id: 'disabled', state: 'Disabled' },
    { id: 'loading', state: 'Loading' }
  ];
  map.forEach(function(v) {
    var el = document.getElementById('litd-preview-' + v.id);
    if (el) el.innerHTML = _litdBuildRow(v.state, true, true, true, false);
  });
}

function _litdInit() {
  updateListItemTdDemo();
  _litdInitSpecCards();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _litdInit);
else _litdInit();
