/* Auto-extracted from assessment-src/components/tooltip-v2.html.
 * Powers the live-preview dropdowns/toggles for the tooltip-v2 component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs tooltip-v2
 */
/* ── Tooltip V2 JS ──────────────────────────────────────────────
   Renders the tooltip with header / description / icon / CTA toggles
   and a pointer anchored at top / right / bottom / left (or none).
   Uses class-free inline markup so the preview works without extra CSS. */

function _tt2Escape(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function _tt2Pointer(dir) {
  if (dir === 'none') return '';
  var common = 'position:absolute;width:0;height:0;';
  if (dir === 'top') {
    return '<div style="' + common + 'left:50%;top:-8px;transform:translateX(-50%);border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #FFFFFF;filter:drop-shadow(0 -1px 0 #E5EBF4);"></div>';
  }
  if (dir === 'bottom') {
    return '<div style="' + common + 'left:50%;bottom:-8px;transform:translateX(-50%);border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #FFFFFF;filter:drop-shadow(0 1px 0 #E5EBF4);"></div>';
  }
  if (dir === 'left') {
    return '<div style="' + common + 'top:50%;left:-8px;transform:translateY(-50%);border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #FFFFFF;filter:drop-shadow(-1px 0 0 #E5EBF4);"></div>';
  }
  return '<div style="' + common + 'top:50%;right:-8px;transform:translateY(-50%);border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #FFFFFF;filter:drop-shadow(1px 0 0 #E5EBF4);"></div>';
}

function _tt2Close() {
  return '<div style="flex-shrink:0;width:18px;height:18px;display:flex;align-items:center;justify-content:center;">' +
    '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1l10 10M11 1L1 11" stroke="#0A2757" stroke-width="1.6" stroke-linecap="round"/></svg>' +
  '</div>';
}

function _tt2PlaceholderIcon() {
  return '<div style="flex-shrink:0;width:46px;height:46px;border-radius:58.9px;background:#C2C6CF;"></div>';
}

function _tt2PrimaryBtn(label) {
  return '<div style="display:inline-flex;align-items:center;justify-content:center;padding:6px 12px;border-radius:99px;background:#005CE5;color:#FFFFFF;font-family:\'Proxima Soft\',system-ui;font-size:16px;line-height:16px;font-weight:700;letter-spacing:0.25px;">' + _tt2Escape(label) + '</div>';
}

function _tt2OutlineBtn(label) {
  return '<div style="display:inline-flex;align-items:center;justify-content:center;padding:6px 12px;border-radius:99px;background:#FFFFFF;color:#005CE5;border:2px solid #005CE5;font-family:\'Proxima Soft\',system-ui;font-size:16px;line-height:16px;font-weight:700;letter-spacing:0.25px;">' + _tt2Escape(label) + '</div>';
}

function _tt2Render(opts) {
  var header      = opts.header !== false;
  var description = opts.description !== false;
  var icon        = opts.icon === true;
  var cta         = opts.cta || 'one';
  var pointer     = opts.pointer || 'bottom';

  var wrapPad = 'padding:16px;';

  var html = '<div style="display:flex;justify-content:center;align-items:center;width:100%;padding:40px 12px;">';
  html += '<div style="position:relative;width:335px;background:#FFFFFF;border:1px solid #E5EBF4;border-radius:6px;' + wrapPad + 'box-sizing:border-box;">';

  // Pointer
  html += _tt2Pointer(pointer);

  // Body container (icon + text + close)
  html += '<div style="display:flex;align-items:flex-start;gap:8px;">';

  // Leading icon (placeholder)
  if (icon) {
    html += _tt2PlaceholderIcon();
  }

  // Text block
  html += '<div style="flex:1 0 0;min-width:0;display:flex;flex-direction:column;gap:4px;">';
  if (header) {
    html += '<div style="font-family:\'Proxima Soft\',system-ui;font-size:18px;line-height:23px;font-weight:700;letter-spacing:0.25px;color:#0A2757;">Header</div>';
  }
  if (description) {
    html += '<div style="font-family:\'BarkAda\',\'Proxima Soft\',system-ui;font-size:12px;line-height:18px;font-weight:600;color:#6780A9;">Description goes here. This is the second sentence. The third sentence.</div>';
  }
  html += '</div>';

  // Close
  html += _tt2Close();
  html += '</div>';

  // CTA row
  if (cta !== 'none') {
    html += '<div style="display:flex;align-items:center;margin-top:16px;';
    html += cta === 'two' ? 'justify-content:space-between;' : 'justify-content:flex-end;';
    html += '">';
    if (cta === 'two') {
      html += _tt2OutlineBtn('Back');
      html += _tt2PrimaryBtn('Next');
    } else {
      html += _tt2PrimaryBtn('Next');
    }
    html += '</div>';
  }

  html += '</div>';  // tooltip box
  html += '</div>';  // wrap
  return html;
}

function updateTt2Demo() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var el = document.getElementById('tt2-demo-preview');
  if (!el) return;
  el.innerHTML = _tt2Render({
    header:      getVal('tt2-ctrl-header', 'true') === 'true',
    description: getVal('tt2-ctrl-desc',   'true') === 'true',
    icon:        getVal('tt2-ctrl-icon',   'false') === 'true',
    cta:         getVal('tt2-ctrl-cta',    'one'),
    pointer:     getVal('tt2-ctrl-pointer','bottom')
  });
}

function _tt2InitSpecCards() {
  var map = [
    ['tt2-preview-hero',          {header:true, description:true, icon:true,  cta:'one',  pointer:'bottom'}],
    ['tt2-preview-text-cta',      {header:true, description:true, icon:false, cta:'one',  pointer:'left'}],
    ['tt2-preview-icon-dismiss',  {header:true, description:true, icon:true,  cta:'none', pointer:'right'}],
    ['tt2-preview-text',          {header:true, description:true, icon:false, cta:'none', pointer:'bottom'}],
    ['tt2-preview-header-only',   {header:true, description:false,icon:false, cta:'none', pointer:'bottom'}],
    ['tt2-preview-desc-only',     {header:false,description:true, icon:false, cta:'none', pointer:'bottom'}],
    ['tt2-preview-two-cta',       {header:false,description:true, icon:false, cta:'two',  pointer:'top'}],
    ['tt2-preview-cta-no-header', {header:false,description:true, icon:false, cta:'one',  pointer:'bottom'}]
  ];
  map.forEach(function (pair) {
    var el = document.getElementById(pair[0]);
    if (el) el.innerHTML = _tt2Render(pair[1]);
  });
}

function _tt2Init() {
  updateTt2Demo();
  _tt2InitSpecCards();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _tt2Init);
else _tt2Init();
