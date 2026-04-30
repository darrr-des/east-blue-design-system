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

/* ── Spec card state (Button-style) ──────────────────────────────── */
var _specCards = {
  'empty-limit':  { state: 'empty',  withLimit: 'yes', count: '0',  limit: '10' },
  'filled-limit': { state: 'filled', withLimit: 'yes', count: '10', limit: '10' },
  'single':       { state: 'auto',   withLimit: 'no',  count: '5',  limit: '10' }
};
window._specCards = _specCards;

function buildSwiftSnippet(type, card) {
  var hasLimit = card.withLimit === 'yes';
  var lines = [];
  if (hasLimit) {
    lines.push('EBCounter(');
    lines.push('    count: ' + card.count + ',');
    lines.push('    limit: ' + card.limit);
    lines.push(')');
  } else {
    lines.push('EBCounter(count: ' + card.count + ')');
    lines.push('    .ebMaxDisplay(99)');
  }
  if (card.state === 'empty') lines.push('    .ebState(.empty)');
  else if (card.state === 'filled') lines.push('    .ebState(.filled)');
  return lines.join('\n');
}

function buildComposeSnippet(type, card) {
  var hasLimit = card.withLimit === 'yes';
  var lines = ['EBCounter('];
  lines.push('    count = ' + card.count + ',');
  if (hasLimit) lines.push('    limit = ' + card.limit + ',');
  else          lines.push('    maxDisplay = 99,');
  if (card.state === 'empty')      lines.push('    state = EBCounterState.Empty');
  else if (card.state === 'filled') lines.push('    state = EBCounterState.Filled');
  else                              lines.push('    // state derived from count');
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

  /* Update preview pill */
  var previewEl = document.getElementById('counter-spec-' + cardStyle);
  if (previewEl) {
    previewEl.innerHTML = _counterRender({
      count: card.count,
      limit: card.limit,
      maxDisplay: '99',
      withLimit: card.withLimit,
      state: card.state
    });
  }

  /* Update properties text */
  ['state', 'withLimit', 'example'].forEach(function(p) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + p + '"]');
    if (!el) return;
    var span = el.querySelector('.spec-prop-hex') || el;
    if (p === 'state') {
      span.textContent = card.state.charAt(0).toUpperCase() + card.state.slice(1);
    } else if (p === 'withLimit') {
      span.textContent = card.withLimit;
    } else if (p === 'example') {
      var hasLimit = card.withLimit === 'yes';
      span.textContent = hasLimit ? (card.count + ' / ' + card.limit) : card.count;
    }
  });

  /* DEV code update */
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

function initSpecCards() {
  Object.keys(_specCards).forEach(function(k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}

function _counterInit() {
  var ctx = document.getElementById('counter-context-preview');
  if (ctx) ctx.innerHTML = _counterContextMarkup();
  _counterUpdate();
  initSpecCards();

  /* Legacy id support — keep older spec previews wired if they still exist */
  var s1 = document.getElementById('counter-spec-1');
  if (s1) s1.innerHTML = _counterRender({count:'0', limit:'10', withLimit:'yes', state:'empty'});
  var s2 = document.getElementById('counter-spec-2');
  if (s2) s2.innerHTML = _counterRender({count:'10', limit:'10', withLimit:'yes', state:'filled'});
  var s3 = document.getElementById('counter-spec-3');
  if (s3) s3.innerHTML = '<div style="display:inline-flex;gap:12px;align-items:center;">' +
    _counterRender({count:'0', withLimit:'no', state:'empty'}) +
    _counterRender({count:'5', withLimit:'no', state:'auto'}) +
    _counterRender({count:'247', withLimit:'no', maxDisplay:'99', state:'auto'}) +
  '</div>';
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _counterInit);
else _counterInit();
document.addEventListener('astro:page-load', _counterInit);
