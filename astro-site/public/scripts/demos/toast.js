/* Auto-extracted from assessment-src/components/toast.html.
 * Powers the live-preview dropdowns/toggles for the toast component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs toast
 */
/* ── Toast JS ───────────────────────────────────────────────────── */
/* Pixel-accurate replica of node 27:53135 variants.
   312 wide, 8 radius, 1 border, soft shadow. Dark/light/destructive surfaces,
   leading icon optional, large/small label sizing. Pending ships the current
   placeholder circle on purpose — this replica matches the Figma today.      */

function _toastEscape(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function _toastIconSvg(type, theme, size) {
  var stroke;
  if (type === 'error') stroke = '#FFFFFF';
  else if (theme === 'light') stroke = '#0A2757';
  else stroke = '#FFFFFF';

  var s = (size === 'small') ? 16 : 24;
  var r = (size === 'small') ? 7 : 10;
  var cx = s / 2, cy = s / 2;

  if (type === 'pending') {
    // Placeholder gray circle — matches the Figma <icon-placeholder> today.
    return '<div class="eb-preview-toast__icon-placeholder eb-preview-toast__icon-placeholder--' + size + '"></div>';
  }
  if (type === 'error') {
    // Circle with X
    var d = (size === 'small') ? 3 : 4;
    return '<svg class="eb-preview-toast__icon eb-preview-toast__icon--' + size + '" viewBox="0 0 ' + s + ' ' + s + '" fill="none" aria-hidden="true">' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" stroke="' + stroke + '" stroke-width="1.6" fill="none"/>' +
      '<path d="M' + (cx - d) + ' ' + (cy - d) + ' L' + (cx + d) + ' ' + (cy + d) + ' M' + (cx + d) + ' ' + (cy - d) + ' L' + (cx - d) + ' ' + (cy + d) + '" stroke="' + stroke + '" stroke-width="1.6" stroke-linecap="round"/>' +
    '</svg>';
  }
  // default — checkmark in circle
  var k1x = cx - r * 0.45, k1y = cy + r * 0.02;
  var k2x = cx - r * 0.12, k2y = cy + r * 0.45;
  var k3x = cx + r * 0.5, k3y = cy - r * 0.45;
  return '<svg class="eb-preview-toast__icon eb-preview-toast__icon--' + size + '" viewBox="0 0 ' + s + ' ' + s + '" fill="none" aria-hidden="true">' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" stroke="' + stroke + '" stroke-width="1.6" fill="none"/>' +
    '<path d="M' + k1x.toFixed(2) + ' ' + k1y.toFixed(2) + ' L' + k2x.toFixed(2) + ' ' + k2y.toFixed(2) + ' L' + k3x.toFixed(2) + ' ' + k3y.toFixed(2) + '" stroke="' + stroke + '" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' +
  '</svg>';
}

function _toastRender(opts) {
  var type       = opts.type || 'default';
  var theme      = opts.theme || 'dark';
  var withIcon   = opts.withIcon !== 'no';
  var largeLabel = opts.largeLabel !== 'no';
  var message    = opts.message || ' ';

  // Type=error forces theme=default visually (destructive surface).
  // Type=pending disallows theme=default (only dark/light).
  // The preview normalizes impossible combos to match Figma's built set.
  if (type === 'error') theme = 'default';
  if (type === 'pending' && theme === 'default') theme = 'dark';
  // Pending always ships with an icon in the Figma component.
  if (type === 'pending') withIcon = true;

  var surfaceClass;
  if (type === 'error') surfaceClass = 'eb-preview-toast--destructive';
  else if (theme === 'light') surfaceClass = 'eb-preview-toast--light';
  else surfaceClass = 'eb-preview-toast--dark';

  var sizeClass = largeLabel ? 'eb-preview-toast--large' : 'eb-preview-toast--small';

  var html = '<div class="eb-preview eb-preview-toast ' + surfaceClass + ' ' + sizeClass + '">';
  html += '<div class="eb-preview-toast__container">';
  if (withIcon) {
    html += '<div class="eb-preview-toast__icon-wrap">' +
      _toastIconSvg(type, theme, largeLabel ? 'large' : 'small') +
    '</div>';
  }
  html += '<p class="eb-preview-toast__label">' + _toastEscape(message) + '</p>';
  html += '</div>';
  html += '</div>';
  return html;
}

function _toastContextMarkup() {
  // Three realistic in-product toast examples.
  return '<div class="eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-lg">' +
    _toastRender({ type:'default', theme:'dark',  withIcon:'yes', largeLabel:'yes', message:'Transfer completed' }) +
    _toastRender({ type:'pending', theme:'dark',  withIcon:'yes', largeLabel:'yes', message:'Uploading your ID…' }) +
    _toastRender({ type:'error',   theme:'default', withIcon:'yes', largeLabel:'yes', message:'Couldn\'t send money' }) +
    _toastRender({ type:'default', theme:'light', withIcon:'yes', largeLabel:'no',  message:'Copied to clipboard' }) +
  '</div>';
}

function _toastUpdate() {
  var type       = document.getElementById('toast-ctrl-type');
  var theme      = document.getElementById('toast-ctrl-theme');
  var withIcon   = document.getElementById('toast-ctrl-withicon');
  var largeLabel = document.getElementById('toast-ctrl-largelabel');
  var message    = document.getElementById('toast-ctrl-message');
  var preview    = document.getElementById('toast-demo-preview');
  if (!preview) return;
  preview.innerHTML = _toastRender({
    type:       type ? type.value : 'default',
    theme:      theme ? theme.value : 'dark',
    withIcon:   withIcon ? withIcon.value : 'yes',
    largeLabel: largeLabel ? largeLabel.value : 'yes',
    message:    message ? message.value : 'Add the popup message here'
  });
}

function _toastInit() {
  var ctx = document.getElementById('toast-context-preview');
  if (ctx) ctx.innerHTML = _toastContextMarkup();
  _toastUpdate();

  var s1 = document.getElementById('toast-spec-1');
  if (s1) s1.innerHTML = _toastRender({ type:'default', theme:'dark', withIcon:'yes', largeLabel:'yes', message:'Add the popup message here' });

  var s2 = document.getElementById('toast-spec-2');
  if (s2) s2.innerHTML = _toastRender({ type:'error', theme:'default', withIcon:'yes', largeLabel:'yes', message:'Add the popup message here' });

  var s3 = document.getElementById('toast-spec-3');
  if (s3) s3.innerHTML = _toastRender({ type:'pending', theme:'dark', withIcon:'yes', largeLabel:'yes', message:'Add the popup message here' });

  var s4 = document.getElementById('toast-spec-4');
  if (s4) s4.innerHTML = _toastRender({ type:'default', theme:'dark', withIcon:'no', largeLabel:'no', message:'Add the popup message here' });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _toastInit);
else _toastInit();
