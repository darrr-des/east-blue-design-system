/* Search Field — live preview + spec cards.
 * Mirrors node 4697:18836 (2026 Working File):
 *   State = Default | Focused | Error | Disabled
 *
 * Geometry read off the live node:
 *   Container   360 × 56, #FFFFFF, banded 1px #E5EBF4 top + bottom only,
 *               no corner radius — it is a full-width band above content,
 *               not an inline form field.
 *   Padding     22 left · 24 right · icons vertically centred (16 top)
 *   Leading     Search Small 24 × 24, glyph #445C85 (#C2CFE5 when disabled)
 *   Value       BarkAda SemiBold 14 / 20, tracking 0
 *   Trailing    24 × 24, present only in Focused (Close) and Error (Error)
 */

var SRF = {
  bg: '#FFFFFF',
  border: '#E5EBF4',
  glyph: '#445C85',
  glyphDisabled: '#C2CFE5',
  placeholder: '#90A8D0',
  value: '#0A2757',
  valueDisabled: '#C2CFE5',
  close: '#025AE9',
  error: '#D61B2C'
};

/* Per-state chrome, read off 4697:18836.
   Label is a TEXT property — the copy is typed, not picked — so the placeholder
   vs value distinction follows the State, not the text itself:
   Default and Disabled render Label as placeholder copy; Focused and Error
   render it as an entered value with a caret on Focused. */
var _srfStates = {
  'default':  { entered: false, caret: false, trailing: null },
  'disabled': { entered: false, caret: false, trailing: null, disabled: true },
  'focused':  { entered: true,  caret: true,  trailing: 'close' },
  'error':    { entered: true,  caret: false, trailing: 'error' }
};

function _srfSearchGlyph(x, y, color) {
  return '<g transform="translate(' + x + ',' + y + ')" fill="none" stroke="' + color + '" stroke-width="2">' +
           '<circle cx="10.5" cy="10.5" r="6.5"/>' +
           '<line x1="15.4" y1="15.4" x2="20.5" y2="20.5" stroke-linecap="round"/>' +
         '</g>';
}
function _srfCloseGlyph(x, y) {
  return '<g transform="translate(' + x + ',' + y + ')" stroke="' + SRF.close + '" stroke-width="2.2" stroke-linecap="round">' +
           '<line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/>' +
         '</g>';
}
function _srfErrorGlyph(x, y) {
  return '<g transform="translate(' + x + ',' + y + ')">' +
           '<circle cx="12" cy="12" r="8.9" fill="none" stroke="' + SRF.error + '" stroke-width="2"/>' +
           '<line x1="12" y1="7.4" x2="12" y2="13" stroke="' + SRF.error + '" stroke-width="2" stroke-linecap="round"/>' +
           '<circle cx="12" cy="16.2" r="1.15" fill="' + SRF.error + '"/>' +
         '</g>';
}

function _srfEscape(t) {
  return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function _srfBuildSvg(o) {
  var cfg = _srfStates[o.state] || _srfStates['default'];
  var glyphColor = cfg.disabled ? SRF.glyphDisabled : SRF.glyph;
  var textColor  = cfg.disabled ? SRF.valueDisabled : (cfg.entered ? SRF.value : SRF.placeholder);
  var label = (o.label === undefined || o.label === null || o.label === '') ? 'Search' : o.label;

  /* hasClearButton governs the Close control only. The Error glyph is tied to
     State=Error and is not a clear affordance, so the toggle leaves it alone. */
  var trailing = cfg.trailing;
  if (trailing === 'close' && !o.hasClearButton) trailing = null;

  var s = '<svg width="360" height="56" viewBox="0 0 360 56" fill="none" role="img" aria-label="Search field, ' + o.state + '">';
  s += '<rect x="0" y="0" width="360" height="56" fill="' + SRF.bg + '"/>';
  /* Banded border — top and bottom only, no sides, no radius. */
  s += '<line x1="0" y1="0.5" x2="360" y2="0.5" stroke="' + SRF.border + '" stroke-width="1"/>';
  s += '<line x1="0" y1="55.5" x2="360" y2="55.5" stroke="' + SRF.border + '" stroke-width="1"/>';
  s += _srfSearchGlyph(22, 16, glyphColor);
  s += '<text x="54" y="33" font-family="BarkAda, system-ui, sans-serif" font-size="14" font-weight="600" fill="' + textColor + '">' + _srfEscape(label) + '</text>';
  if (cfg.caret) {
    var caretX = 54 + String(label).length * 7.6;
    s += '<line x1="' + caretX + '" y1="19" x2="' + caretX + '" y2="37" stroke="' + SRF.value + '" stroke-width="1.4"/>';
  }
  if (trailing === 'close') s += _srfCloseGlyph(312, 16);
  if (trailing === 'error') s += _srfErrorGlyph(312, 16);
  s += '</svg>';
  return s;
}

/* ── Live preview (Overview tab) ─────────────────────────────────── */
var _srfDemo = { state: 'default' };

function updateSearchFieldDemo() {
  var sel = document.getElementById('srf-ctrl-state');
  if (sel) _srfDemo.state = sel.value;
  var el = document.getElementById('srf-demo-preview');
  if (el) el.innerHTML = _srfBuildSvg({ state: _srfDemo.state, label: 'Search', hasClearButton: true });
}
window.updateSearchFieldDemo = updateSearchFieldDemo;

/* ── Spec cards (Style tab) ──────────────────────────────────────── */
var _specCards = {
  main: { state: 'default', label: 'Search', hasClearButton: true }
};
window._specCards = _specCards;

function buildSwiftSnippet(cardStyle, card) {
  var st = card.state || 'default';
  var lines = ['EBSearchField(placeholder: "' + (card.label || 'Search') + '", text: $query)'];
  lines.push('    .ebState(.' + st + ')');
  if (!card.hasClearButton) lines.push('    .ebClearButton(false)');
  if (st === 'disabled') lines.push('    .disabled(true)');
  return lines.join('\n');
}

function buildComposeSnippet(cardStyle, card) {
  var st = card.state || 'default';
  var name = st.charAt(0).toUpperCase() + st.slice(1);
  return [
    'EBSearchField(',
    '    placeholder = "' + (card.label || 'Search') + '",',
    '    query = query,',
    '    onQueryChange = { },',
    '    hasClearButton = ' + (card.hasClearButton ? 'true' : 'false') + ',',
    '    state = EBFieldState.' + name,
    ')'
  ].join('\n');
}

function getSnippet(cardStyle, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardStyle, card) : buildComposeSnippet(cardStyle, card);
}
window.getSnippet = getSnippet;

/* The set contains 4 variants and only one of them carries a Close control:

     Default    no TrailingIcon layer at all
     Disabled   no TrailingIcon layer at all
     Focused    TrailingIcon → Close      ← the only clear button in the set
     Error      TrailingIcon → Error glyph (an error indicator, not a clear)

   So hasClearButton is only meaningful on Focused. Disable the toggle everywhere
   else rather than letting it sit enabled and do nothing — a control that moves
   but changes nothing reads as a broken preview. */
var SRF_CLEARABLE = ['focused'];

function _srfConstrainClear(cardStyle, card) {
  var applicable = SRF_CLEARABLE.indexOf(card.state) !== -1;

  var box = document.querySelector(
    '[onchange*="updateSpecCard(\'' + cardStyle + '\', \'hasClearButton\'"]');
  if (!box) return;
  box.disabled = !applicable;

  var wrap = box.parentElement;                 /* label.demo-panel-toggle */
  if (wrap) {
    wrap.classList.toggle('is-disabled', !applicable);
    wrap.title = applicable
      ? ''
      : 'Not applicable — State=' + card.state + ' has no clear control in Figma';
  }
  var row = wrap && wrap.parentElement;         /* .demo-panel-row */
  if (row) row.classList.toggle('is-disabled', !applicable);
}

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = (prop === 'hasClearButton')
    ? (value === 'true' || value === true)
    : value;

  _srfConstrainClear(cardStyle, card);

  var host = document.getElementById('search-field-spec-' + cardStyle);
  if (host) host.innerHTML = _srfBuildSvg(card);

  ['state', 'label', 'hasClearButton'].forEach(function (k) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + k + '"]');
    if (!el) return;
    var v = card[k];
    el.textContent = (typeof v === 'boolean') ? (v ? 'True' : 'False')
      : (k === 'state') ? String(v).charAt(0).toUpperCase() + String(v).slice(1)
      : String(v);
  });

  var codeEl = document.querySelector('[data-code-content="' + cardStyle + '"]');
  if (codeEl) {
    var lang = codeEl.getAttribute('data-lang') || 'swift';
    var code = getSnippet(cardStyle, lang, card);
    codeEl.setAttribute('data-final', code);
    codeEl.textContent = code;
    if (typeof window.highlightSyntax === 'function') window.highlightSyntax(codeEl);
  }
}
window.updateSpecCard = updateSpecCard;

function _srfInit() {
  updateSearchFieldDemo();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _srfInit);
else _srfInit();
document.addEventListener('astro:page-load', _srfInit);
