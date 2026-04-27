/* Auto-extracted from assessment-src/components/toast-with-button.html.
 * Powers the live-preview dropdowns/toggles for the toast-with-button component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs toast-with-button
 */
/* ── Toast - With Button JS ─────────────────────────────────────────
   Pixel-accurate replica of node 27:53205 variants.
   330 wide, 8 radius, 1 border. Dark/light surfaces, description optional.
   Action button is the (deprecated) Button - Small/XS — white on dark, blue on light.
*/

function _toastWBEscape(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function _toastWBRender(opts) {
  var type        = opts.type || 'default';
  var description = opts.description !== 'no';
  var label       = opts.label || 'Add label here';
  var desc        = opts.desc || 'Add description here.';
  var action      = opts.action || 'Label';

  var surfaceClass = (type === 'light') ? 'eb-preview-toastwb--light' : 'eb-preview-toastwb--default';
  var sizeClass    = description ? 'eb-preview-toastwb--has-desc' : 'eb-preview-toastwb--no-desc';
  var actionClass  = (type === 'default')
    ? 'eb-preview-toastwb__action eb-preview-toastwb__action--white'
    : 'eb-preview-toastwb__action eb-preview-toastwb__action--blue';

  var html = '<div class="eb-preview eb-preview-toastwb ' + surfaceClass + ' ' + sizeClass + '">';
  html += '<div class="eb-preview-toastwb__container">';
  html += '<div class="eb-preview-toastwb__text-container">';
  html += '<p class="eb-preview-toastwb__label">' + _toastWBEscape(label) + '</p>';
  if (description) {
    html += '<p class="eb-preview-toastwb__desc">' + _toastWBEscape(desc) + '</p>';
  }
  html += '</div>';
  html += '<div class="eb-preview-toastwb__action-slot">';
  html += '<div class="' + actionClass + '">' + _toastWBEscape(action) + '</div>';
  html += '</div>';
  html += '</div>';
  html += '</div>';
  return html;
}

function _toastWBContextMarkup() {
  return '<div class="eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-lg">' +
    _toastWBRender({ type:'default', description:'yes', label:'Transfer sent', desc:'to Juan Dela Cruz · ₱500.00', action:'Undo' }) +
    _toastWBRender({ type:'light',   description:'no',  label:'Message deleted', action:'Undo' }) +
    _toastWBRender({ type:'default', description:'yes', label:"Couldn't send money", desc:'Check your connection and try again.', action:'Retry' }) +
    _toastWBRender({ type:'light',   description:'yes', label:'Photo uploaded', desc:'Tap to see it in your gallery.', action:'View' }) +
  '</div>';
}

function _toastWithButtonUpdate() {
  var type    = document.getElementById('toast-with-button-ctrl-type');
  var desc    = document.getElementById('toast-with-button-ctrl-description');
  var label   = document.getElementById('toast-with-button-ctrl-label');
  var descTxt = document.getElementById('toast-with-button-ctrl-desc');
  var action  = document.getElementById('toast-with-button-ctrl-action');
  var preview = document.getElementById('toast-with-button-demo-preview');
  if (!preview) return;
  preview.innerHTML = _toastWBRender({
    type:        type ? type.value : 'default',
    description: desc ? desc.value : 'yes',
    label:       label ? label.value : 'Add label here',
    desc:        descTxt ? descTxt.value : 'Add description here.',
    action:      action ? action.value : 'Label'
  });
}

function _toastWithButtonInit() {
  var ctx = document.getElementById('toast-with-button-context-preview');
  if (ctx) ctx.innerHTML = _toastWBContextMarkup();
  _toastWithButtonUpdate();

  var s1 = document.getElementById('toast-with-button-spec-1');
  if (s1) s1.innerHTML = _toastWBRender({ type:'default', description:'yes', label:'Add label here', desc:'Add description here.', action:'Label' });

  var s2 = document.getElementById('toast-with-button-spec-2');
  if (s2) s2.innerHTML = _toastWBRender({ type:'light', description:'yes', label:'Add label here', desc:'Add description here.', action:'Label' });

  var s3 = document.getElementById('toast-with-button-spec-3');
  if (s3) s3.innerHTML = _toastWBRender({ type:'default', description:'no', label:'Add label here', action:'Label' });

  var s4 = document.getElementById('toast-with-button-spec-4');
  if (s4) s4.innerHTML = _toastWBRender({ type:'light', description:'no', label:'Add label here', action:'Label' });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _toastWithButtonInit);
else _toastWithButtonInit();
