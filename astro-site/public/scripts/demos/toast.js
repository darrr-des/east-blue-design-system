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
  var preview    = document.getElementById('toast-demo-preview');
  if (!preview) return;
  preview.innerHTML = _toastRender({
    type:       type ? type.value : 'default',
    theme:      theme ? theme.value : 'dark',
    withIcon:   withIcon ? withIcon.value : 'yes',
    largeLabel: largeLabel ? largeLabel.value : 'yes',
    message:    'Add the popup message here'
  });
}

/* ── Toast Spec Cards (canonical wiring) ─────────────────────────── */
var _specCards = {
  dark:    { type: 'default', theme: 'dark',    withIcon: 'yes', largeLabel: 'yes' },
  error:   { type: 'error',   theme: 'default', withIcon: 'yes', largeLabel: 'yes' },
  pending: { type: 'pending', theme: 'dark',    withIcon: 'yes', largeLabel: 'yes' },
  compact: { type: 'default', theme: 'dark',    withIcon: 'no',  largeLabel: 'no'  }
};
window._specCards = _specCards;

function _toastInit() {
  var ctx = document.getElementById('toast-context-preview');
  if (ctx) ctx.innerHTML = _toastContextMarkup();
  _toastUpdate();

  /* Render spec card previews from `_specCards` so they pick up edits
     made via the per-card demo controls. */
  Object.keys(_specCards).forEach(function (k) {
    _toastRenderSpec(k);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _toastInit);
else _toastInit();

/* Map demoKey → preview container id (the existing previewHtml uses
   the toast-spec-N pattern). */
var _toastSpecPreviewId = {
  dark:    'toast-spec-1',
  error:   'toast-spec-2',
  pending: 'toast-spec-3',
  compact: 'toast-spec-4'
};

function _toastRenderSpec(cardKey) {
  var card = _specCards[cardKey];
  if (!card) return;
  var host = document.getElementById(_toastSpecPreviewId[cardKey]);
  if (!host) return;
  host.innerHTML = _toastRender({
    type:       card.type,
    theme:      card.theme,
    withIcon:   card.withIcon,
    largeLabel: card.largeLabel,
    message:    'Add the popup message here'
  });
}

function buildSwiftSnippet(type, card) {
  var lines = [];
  var msg = type === 'error' ? 'Something went wrong'
          : type === 'pending' ? 'Processing your request…'
          : type === 'compact' ? 'Notice'
          : 'Action successful';
  lines.push('EBToast("' + msg + '")');
  if (card.type === 'error')        lines.push('    .ebAppearance(.destructive)');
  else if (card.type === 'pending') lines.push('    .ebAppearance(.pending)');
  else                              lines.push('    .ebAppearance(.neutral)');
  if (card.theme === 'light')       lines.push('    .ebTheme(.light)');
  else if (card.theme === 'dark')   lines.push('    .ebTheme(.dark)');
  if (card.largeLabel === 'no')     lines.push('    .controlSize(.small)');
  if (card.withIcon === 'no')       lines.push('    .ebLeadingIcon(nil)');
  return lines.join('\n');
}

function buildComposeSnippet(type, card) {
  var msg = type === 'error' ? 'Something went wrong'
          : type === 'pending' ? 'Processing your request…'
          : type === 'compact' ? 'Notice'
          : 'Action successful';
  var appearance = card.type === 'error' ? 'Destructive'
                 : card.type === 'pending' ? 'Pending' : 'Neutral';
  var theme = card.theme === 'light' ? 'Light' : 'Dark';
  var size = card.largeLabel === 'no' ? 'Small' : 'Base';
  var lines = [];
  lines.push('EBToast(');
  lines.push('    message = "' + msg + '",');
  lines.push('    appearance = EBToastAppearance.' + appearance + ',');
  lines.push('    theme = EBToastTheme.' + theme + ',');
  lines.push('    size = EBToastSize.' + size + (card.withIcon === 'no' ? '' : ',') );
  if (card.withIcon !== 'no') lines.push('    leadingIcon = { Icon(Icons.Filled.Check, null) }');
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Re-render preview SVG/markup */
  _toastRenderSpec(cardStyle);

  /* Update properties text via [data-sp="{cardStyle}-{prop}"] */
  var spEl = document.querySelector('[data-sp="' + cardStyle + '-' + prop + '"]');
  if (spEl) spEl.textContent = value;

  /* Sync all four prop readouts (some other prop may have been edited
     before — keep all prop cells in sync with the card state). */
  ['type','theme','withIcon','largeLabel'].forEach(function (p) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + p + '"]');
    if (el) el.textContent = card[p];
  });

  /* Update DEV code — locate via [data-code-content="{cardStyle}"]. */
  var devView = document.querySelector('[data-view="' + cardStyle + '-dev"]');
  if (devView) {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && activeTab.textContent.toLowerCase().indexOf('swift') !== -1 ? 'swift' : 'compose';
    var codeEl = devView.querySelector('[data-code-content="' + cardStyle + '"]');
    if (codeEl) {
      var code = getSnippet(cardStyle, lang, card);
      codeEl.setAttribute('data-final', code);
      codeEl.setAttribute('data-lang', lang);
      codeEl.textContent = code;
      if (typeof window.highlightSyntax === 'function') window.highlightSyntax(codeEl);
    }
  }
}
window.updateSpecCard = updateSpecCard;

/* ── Re-init after Astro view-transition swaps ─────────────── */
document.addEventListener('astro:page-load', _toastInit);
