/* Auto-extracted from assessment-src/components/month-year-picker-item.html.
 * Powers the live-preview dropdowns/toggles for the month-year-picker-item component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs month-year-picker-item
 */
/* ── Month and Year Picker - Item Component JS ─────────────────────── */
var _mypiDemo = { type: 'Default', label: 'March' };

function _mypiBuildCell(type, label) {
  /*
    Render a single 100×32 cell matching the Figma variant.
    - Default: white bg, primary label (#0A2757)
    - Today: 1px blue border, blue label
    - Selected: solid blue fill, white bold label
  */
  var bg = '#FFFFFF';
  var border = 'none';
  var color = '#0A2757';
  var fontWeight = '600';

  if (type === 'Today') {
    border = '1px solid #005CE5';
    color = '#005CE5';
  } else if (type === 'Selected') {
    bg = '#005CE5';
    color = '#FFFFFF';
    fontWeight = '700';
  }

  return ''
    + '<div style="display:inline-block;font-family:\'Proxima Soft\', system-ui, sans-serif;">'
    +   '<div style="box-sizing:border-box;width:100px;height:32px;background:' + bg + ';border:' + border + ';border-radius:8px;padding:10px 12px 8px;display:flex;align-items:center;justify-content:center;gap:4px;color:' + color + ';font-weight:' + fontWeight + ';font-size:14px;line-height:14px;letter-spacing:.25px;">'
    +     label
    +   '</div>'
    + '</div>';
}

function _mypiFramedCell(type, label) {
  /* Wrap the cell in a neutral backdrop so small cells are visible in the demo panel. */
  return ''
    + '<div style="display:flex;align-items:center;justify-content:center;padding:40px;background:#F4F6FA;border-radius:8px;min-height:120px;">'
    +   _mypiBuildCell(type, label)
    + '</div>';
}

function updateMonthYearPickerItemDemo() {
  var demo = document.getElementById('mypi-demo-preview');
  if (demo) demo.innerHTML = _mypiFramedCell(_mypiDemo.type, _mypiDemo.label);
  var specs = [
    { id: 'mypi-default-preview',  type: 'Default',  label: 'March' },
    { id: 'mypi-today-preview',    type: 'Today',    label: 'March' },
    { id: 'mypi-selected-preview', type: 'Selected', label: 'March' }
  ];
  specs.forEach(function(s) {
    var el = document.getElementById(s.id);
    if (el) el.innerHTML = _mypiFramedCell(s.type, s.label);
  });
}

function _mypiInit() {
  updateMonthYearPickerItemDemo();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _mypiInit);
} else {
  _mypiInit();
}
