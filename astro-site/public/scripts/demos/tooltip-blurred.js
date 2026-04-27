/* Auto-extracted from assessment-src/components/tooltip-blurred.html.
 * Powers the live-preview dropdowns/toggles for the tooltip-blurred component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs tooltip-blurred
 */
/* ── Tooltip Blurred and Transparent JS ─────────────────────────
   Renders the dark translucent tooltip over a selectable backdrop
   scene (photo / gradient / flat) with a pointer on any of 4 sides.
   No CTA / icon / close — schema is header + description only. */

function _tbtEscape(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function _tbtPointer(dir) {
  var common = 'position:absolute;width:0;height:0;';
  if (dir === 'top') {
    return '<div style="' + common + 'left:50%;top:-8px;transform:translateX(-50%);border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid rgba(10,39,87,0.8);"></div>';
  }
  if (dir === 'bottom') {
    return '<div style="' + common + 'left:50%;bottom:-8px;transform:translateX(-50%);border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid rgba(10,39,87,0.8);"></div>';
  }
  if (dir === 'left') {
    return '<div style="' + common + 'top:50%;left:-8px;transform:translateY(-50%);border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid rgba(10,39,87,0.8);"></div>';
  }
  return '<div style="' + common + 'top:50%;right:-8px;transform:translateY(-50%);border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid rgba(10,39,87,0.8);"></div>';
}

function _tbtScene(scene) {
  if (scene === 'gradient') {
    return 'background:linear-gradient(135deg,#003B8C 0%,#005CE5 50%,#00B4D8 100%);';
  }
  if (scene === 'flat') {
    return 'background:#EEF2F9;';
  }
  // photo — synthetic photographic-feel backdrop using layered gradients + noise-like radial dots
  return 'background:' +
    'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 18%),' +
    'radial-gradient(circle at 75% 70%, rgba(255,210,120,0.45) 0%, rgba(255,210,120,0) 22%),' +
    'radial-gradient(circle at 60% 20%, rgba(255,120,160,0.35) 0%, rgba(255,120,160,0) 25%),' +
    'linear-gradient(135deg,#2B4F7A 0%,#5A7AAD 50%,#B36B8A 100%);';
}

function _tbtRender(opts) {
  var header      = opts.header !== false;
  var description = opts.description !== false;
  var pointer     = opts.pointer || 'top';
  var scene       = opts.scene || 'photo';

  var html = '<div style="display:flex;justify-content:center;align-items:center;width:100%;padding:40px 12px;' + _tbtScene(scene) + 'border-radius:8px;">';
  html += '<div style="position:relative;width:336px;background:rgba(10,39,87,0.80);backdrop-filter:blur(2.5px);-webkit-backdrop-filter:blur(2.5px);border-radius:6px;padding:16px;box-sizing:border-box;display:flex;flex-direction:column;gap:4px;">';

  html += _tbtPointer(pointer);

  if (header) {
    html += '<div style="font-family:\'Proxima Soft\',system-ui;font-size:18px;line-height:23px;font-weight:700;letter-spacing:0.25px;color:#FFFFFF;">Header</div>';
  }
  if (description) {
    html += '<div style="font-family:\'BarkAda\',\'Proxima Soft\',system-ui;font-size:12px;line-height:18px;font-weight:600;color:rgba(246,249,253,0.8);">Description goes here</div>';
  }

  html += '</div>';  // tooltip box
  html += '</div>';  // wrap
  return html;
}

function updateTbtDemo() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var el = document.getElementById('tbt-demo-preview');
  if (!el) return;
  el.innerHTML = _tbtRender({
    header:      getVal('tbt-ctrl-header', 'true') === 'true',
    description: getVal('tbt-ctrl-desc',   'true') === 'true',
    pointer:     getVal('tbt-ctrl-pointer','top'),
    scene:       getVal('tbt-ctrl-scene',  'photo')
  });
}

function _tbtInitSpecCards() {
  var map = [
    ['tbt-preview-top',    {header:true, description:true, pointer:'top',    scene:'photo'}],
    ['tbt-preview-right',  {header:true, description:true, pointer:'right',  scene:'photo'}],
    ['tbt-preview-bottom', {header:true, description:true, pointer:'bottom', scene:'photo'}],
    ['tbt-preview-left',   {header:true, description:true, pointer:'left',   scene:'photo'}]
  ];
  map.forEach(function (pair) {
    var el = document.getElementById(pair[0]);
    if (el) el.innerHTML = _tbtRender(pair[1]);
  });
}

function _tbtInit() {
  updateTbtDemo();
  _tbtInitSpecCards();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _tbtInit);
else _tbtInit();
