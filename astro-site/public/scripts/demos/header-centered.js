/* Auto-extracted from assessment-src/components/header-centered.html.
 * Powers the live-preview dropdowns/toggles for the header-centered component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs header-centered
 */
/* ── Header - Centered (Page Banner) JS ─────────────────────────── */
/* Pixel-accurate replica of node 18430:2858.
   Dark variant: #1972F9 bg, white title, 72%-white "Label:" key,
   white value, 24%-white bottom border.
   Light variant: white bg, #0A2757 title, #6780A9 key, dark value.
   Size: 360px × hug. Padding: 24 24 34 24.                          */

function _headerCenteredRender(opts) {
  var isDark  = opts.type === 'dark';
  var hasDesc = opts.desc === 'yes';
  var themeClass = isDark ? 'eb-preview-header-centered--dark' : 'eb-preview-header-centered--light';
  var html = '<div class="eb-preview eb-preview-header-centered ' + themeClass + '">' +
    '<p class="eb-preview-header-centered__title">Label</p>';
  if (hasDesc) {
    html +=
      '<p class="eb-preview-header-centered__sublabel">' +
        '<span class="eb-preview-header-centered__sublabel-key">Label:</span>' +
        '<span class="eb-preview-header-centered__sublabel-value">&nbsp;Add Content</span>' +
      '</p>';
  }
  html += '</div>';
  return html;
}

function _headerCenteredContextMarkup() {
  return '<div class="eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-lg">' +
    _headerCenteredRender({type:'dark',  desc:'yes'}) +
    _headerCenteredRender({type:'light', desc:'no'}) +
  '</div>';
}

function _headerCenteredUpdate() {
  var type    = document.getElementById('header-centered-ctrl-type');
  var desc    = document.getElementById('header-centered-ctrl-desc');
  var preview = document.getElementById('header-centered-demo-preview');
  if (!preview) return;
  preview.innerHTML = _headerCenteredRender({
    type: type ? type.value : 'dark',
    desc: desc ? desc.value : 'yes'
  });
}

function _headerCenteredInit() {
  var ctx = document.getElementById('header-centered-context-preview');
  if (ctx) ctx.innerHTML = _headerCenteredContextMarkup();
  _headerCenteredUpdate();
  var s1 = document.getElementById('header-centered-spec-1');
  if (s1) s1.innerHTML = _headerCenteredRender({type:'dark',  desc:'yes'});
  var s2 = document.getElementById('header-centered-spec-2');
  if (s2) s2.innerHTML = _headerCenteredRender({type:'light', desc:'yes'});
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _headerCenteredInit);
else _headerCenteredInit();
