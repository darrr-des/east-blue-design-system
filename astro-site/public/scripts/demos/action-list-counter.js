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
  return '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
    '<path d="M6 4l4 4-4 4" stroke="' + color + '" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' +
  '</svg>';
}

function _litcCounter(state, count) {
  var labelColor = state === 'empty' ? '#C2CFE5' : '#072592';
  var bg = '#EEF2F9';
  return '<span style="display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;padding:0 8px;border-radius:999px;background:' + bg + ';color:' + labelColor + ';font-family:\'HeyMeow Rnd\',system-ui;font-weight:700;font-size:14px;line-height:14px;letter-spacing:0.25px;">' + _litcEscape(count) + '</span>';
}

function _litcRow(density, state, label, count) {
  var padV = density === 'Expanded' ? 15 : 11;
  var rowH = density === 'Expanded' ? 64 : 56;
  var labelColor, chevronColor, counterState;

  if (state === 'Loading') {
    // Skeleton row
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
    '<div style="flex:1;min-width:0;color:' + labelColor + ';font-family:\'BarkAda\',system-ui;font-weight:700;font-size:18px;line-height:18px;letter-spacing:0.25px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + _litcEscape(label) + '</div>' +
    '<div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">' +
      _litcChevronSvg(chevronColor) +
      _litcCounter(counterState, count) +
    '</div>' +
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

function _litcInit() {
  updateLitcDemo();

  var specs = {
    'litc-spec-cd':   { d: 'Compact',  s: 'Default',  label: 'Notifications', count: '5'  },
    'litc-spec-ed':   { d: 'Expanded', s: 'Default',  label: 'Notifications', count: '5'  },
    'litc-spec-cdis': { d: 'Compact',  s: 'Disabled', label: 'Archive',       count: '0'  },
    'litc-spec-edis': { d: 'Expanded', s: 'Disabled', label: 'Archive',       count: '0'  },
    'litc-spec-cl':   { d: 'Compact',  s: 'Loading',  label: '',              count: ''   },
    'litc-spec-el':   { d: 'Expanded', s: 'Loading',  label: '',              count: ''   }
  };
  Object.keys(specs).forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = _litcRow(specs[id].d, specs[id].s, specs[id].label, specs[id].count);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _litcInit);
else _litcInit();
