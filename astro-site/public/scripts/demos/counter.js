/* Auto-extracted from assessment-src/components/counter.html.
 * Powers the live-preview dropdowns/toggles for the counter component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs counter
 */
/* ── Counter JS ─────────────────────────────────────────────────── */
/* Counter — single-integer count pill. `count` drives the text.
   Overflow collapses to "maxDisplay+" (e.g. "99+"). `state` auto-
   derives from count unless explicitly overridden.                   */

function _counterRender(opts) {
  var rawCount   = opts.count;
  var rawLimit   = opts.limit;
  var rawMax     = opts.maxDisplay;
  var withLimit  = opts.withLimit === 'yes';
  var stateMode  = opts.state || 'auto';

  // Parse count
  var countNum = parseInt(rawCount, 10);
  if (isNaN(countNum) || countNum < 0) countNum = 0;

  var maxNum = parseInt(rawMax, 10);
  if (isNaN(maxNum) || maxNum < 1) maxNum = 99;

  var displayText;
  if (withLimit) {
    // Slash format — render "count / limit". Clamp count to limit visually.
    var limitNum = parseInt(rawLimit, 10);
    if (isNaN(limitNum) || limitNum < 1) limitNum = 10;
    var shownCount = Math.min(countNum, limitNum);
    displayText = shownCount + ' / ' + limitNum;
  } else {
    // Single-integer format with overflow
    displayText = (countNum > maxNum) ? (maxNum + '+') : String(countNum);
  }

  // Derive state
  var isFilled;
  if (stateMode === 'filled')      isFilled = true;
  else if (stateMode === 'empty')  isFilled = false;
  else                              isFilled = countNum > 0;

  var classes = [
    'eb-preview',
    'eb-preview-counter',
    isFilled ? 'eb-preview-counter--filled' : 'eb-preview-counter--empty'
  ];
  return '<span class="' + classes.join(' ') + '">' + _counterEscape(displayText) + '</span>';
}

function _counterEscape(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/* In Context — Counter as trailing content on a list row (matches
   real product usage: Avatar + Label + Chevron + Counter).           */
function _counterChevronSvg() {
  return '<svg class="eb-preview-list-row__chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
    '<path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' +
  '</svg>';
}

function _counterListRow(label, count, withLimit, limit) {
  return '<div class="eb-preview eb-preview-list-row">' +
    '<div class="eb-preview-list-row__avatar" aria-hidden="true"></div>' +
    '<div class="eb-preview-list-row__label">' + _counterEscape(label) + '</div>' +
    '<div class="eb-preview-list-row__trailing">' +
      _counterChevronSvg() +
      _counterRender({
        count: count,
        withLimit: withLimit || 'no',
        limit: limit || '10',
        maxDisplay: '99',
        state: 'auto'
      }) +
    '</div>' +
  '</div>';
}

function _counterContextMarkup() {
  // Three realistic uses — two single-integer list rows + one slash-format
  // row showing progress-against-capacity (beneficiaries used).
  return '<div class="eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-sm">' +
    _counterListRow('Notifications', 5,   'no') +
    _counterListRow('Activity',      247, 'no') +
    _counterListRow('Beneficiaries', 3,   'yes', '10') +
  '</div>';
}

function _counterUpdate() {
  var state     = document.getElementById('counter-ctrl-state');
  var countEl   = document.getElementById('counter-ctrl-count');
  var limitEl   = document.getElementById('counter-ctrl-limit');
  var maxEl     = document.getElementById('counter-ctrl-max');
  var withLimit = document.getElementById('counter-ctrl-withlimit');
  var preview   = document.getElementById('counter-demo-preview');
  if (!preview) return;
  preview.innerHTML = _counterRender({
    state:      state ? state.value : 'auto',
    count:      countEl ? countEl.value : '5',
    limit:      limitEl ? limitEl.value : '10',
    maxDisplay: maxEl ? maxEl.value : '99',
    withLimit:  withLimit ? withLimit.value : 'no'
  });
}

function _counterInit() {
  var ctx = document.getElementById('counter-context-preview');
  if (ctx) ctx.innerHTML = _counterContextMarkup();
  _counterUpdate();

  // Spec 1 — empty slash
  var s1 = document.getElementById('counter-spec-1');
  if (s1) s1.innerHTML = _counterRender({count:'0', limit:'10', withLimit:'yes', state:'empty'});

  // Spec 2 — filled slash
  var s2 = document.getElementById('counter-spec-2');
  if (s2) s2.innerHTML = _counterRender({count:'10', limit:'10', withLimit:'yes', state:'filled'});

  // Spec 3 — empty + filled single-integer side by side
  var s3 = document.getElementById('counter-spec-3');
  if (s3) s3.innerHTML = '<div style="display:inline-flex;gap:12px;align-items:center;">' +
    _counterRender({count:'0', withLimit:'no', state:'empty'}) +
    _counterRender({count:'5', withLimit:'no', state:'auto'}) +
    _counterRender({count:'247', withLimit:'no', maxDisplay:'99', state:'auto'}) +
  '</div>';
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _counterInit);
else _counterInit();
