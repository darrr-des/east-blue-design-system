/* Auto-extracted from assessment-src/components/date-picker-item.html.
 * Powers the live-preview dropdowns/toggles for the date-picker-item component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs date-picker-item
 */
/* ── Date Picker - Item Component JS ──────────────────────────────── */
var _dpiDemo = { type: 'Default', state: 'Enabled' };

function _dpiBuildCell(type, state) {
  /*
    Render a single 32×32 cell matching the Figma variant.
    - Default: white bg, primary label (#0A2757) or disabled (#C2CFE5)
    - Today: 1.5px ring + colored label (enabled/disabled)
    - Selected: solid blue fill, white bold label
    - Range (Middle): weakest-info bg, bold blue label, with overflow strips
    - Prev/Next: dim label
  */
  var bg = '#FFFFFF';
  var border = 'none';
  var color = '#0A2757';
  var fontWeight = '600';
  var radius = '30px';
  var label = '1';

  if (type === 'Default' && state === 'Disabled') {
    color = '#C2CFE5';
  } else if (type === 'Today' && state === 'Enabled') {
    border = '1.5px solid #005CE5';
    color = '#005CE5';
  } else if (type === 'Today' && state === 'Disabled') {
    border = '1.5px solid #9BC5FD';
    color = '#9BC5FD';
  } else if (type === 'Selected') {
    bg = '#005CE5';
    color = '#FFFFFF';
    fontWeight = '700';
  } else if (type === 'Range (Middle)') {
    bg = '#E5F1FF';
    color = '#005CE5';
    fontWeight = '700';
    radius = '0';
  } else if (type === 'Prev/Next') {
    color = '#C2CFE5';
  }

  /* Range variant: add strip overflow on both sides so it reads as continuous */
  var rangeStrips = '';
  if (type === 'Range (Middle)' && state === 'Enabled') {
    rangeStrips = ''
      + '<div style="position:absolute;left:-9px;top:0;width:9px;height:32px;background:#E5F1FF;"></div>'
      + '<div style="position:absolute;right:-11px;top:0;width:11px;height:32px;background:#E5F1FF;"></div>';
  }

  /* Invalid-combination notice for missing Disabled variants */
  if (state === 'Disabled' && (type === 'Selected' || type === 'Range (Middle)' || type === 'Prev/Next')) {
    return ''
      + '<div style="padding:18px 22px;border:1px dashed #9BC5FD;border-radius:8px;background:#F5F9FF;color:#0A2757;max-width:320px;text-align:center;">'
      +   '<div style="font-weight:700;font-size:13px;margin-bottom:6px;">Variant not published</div>'
      +   '<div style="font-size:12px;line-height:1.4;color:#3C4A5C;">' + type + ' · Disabled does not exist in the Figma source. Only Default and Today have a Disabled form. See Open Issue C5.</div>'
      + '</div>';
  }

  return ''
    + '<div style="position:relative;display:inline-block;font-family:\'Proxima Soft\', system-ui, sans-serif;">'
    +   rangeStrips
    +   '<div style="position:relative;width:32px;height:32px;box-sizing:border-box;background:' + bg + ';border:' + border + ';border-radius:' + radius + ';display:flex;align-items:center;justify-content:center;color:' + color + ';font-weight:' + fontWeight + ';font-size:14px;line-height:1;letter-spacing:.25px;">'
    +     label
    +   '</div>'
    + '</div>';
}

function _dpiFramedCell(type, state) {
  /* Wrap the cell in a neutral backdrop so tiny cells are visible in the demo panel. */
  return ''
    + '<div style="display:flex;align-items:center;justify-content:center;padding:40px;background:#F4F6FA;border-radius:8px;min-height:120px;">'
    +   _dpiBuildCell(type, state)
    + '</div>';
}

function updateDatePickerItemDemo() {
  var demo = document.getElementById('dpi-demo-preview');
  if (demo) demo.innerHTML = _dpiFramedCell(_dpiDemo.type, _dpiDemo.state);
  var specs = [
    { id: 'dpi-default-preview',           type: 'Default',        state: 'Enabled'  },
    { id: 'dpi-today-preview',             type: 'Today',          state: 'Enabled'  },
    { id: 'dpi-selected-preview',          type: 'Selected',       state: 'Enabled'  },
    { id: 'dpi-range-preview',             type: 'Range (Middle)', state: 'Enabled'  },
    { id: 'dpi-prevnext-preview',          type: 'Prev/Next',      state: 'Enabled'  },
    { id: 'dpi-default-disabled-preview',  type: 'Default',        state: 'Disabled' },
    { id: 'dpi-today-disabled-preview',    type: 'Today',          state: 'Disabled' }
  ];
  specs.forEach(function(s) {
    var el = document.getElementById(s.id);
    if (el) el.innerHTML = _dpiFramedCell(s.type, s.state);
  });
}

function _dpiInit() {
  updateDatePickerItemDemo();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _dpiInit);
} else {
  _dpiInit();
}
