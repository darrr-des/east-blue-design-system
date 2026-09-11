/* Powers the live-preview controls for the dropdown-item-group
 * (Select Group) component page. Rebuilt for the 2026 Working File
 * (node 7947:111630).
 *
 * BorderType and Density both shape the slot's DEFAULT CONTENT in Figma
 * rather than being applied to whatever fills it — a component property
 * cannot reach inside a slot. The preview reproduces the result, not the
 * mechanism; the constraint itself is written up on the page.
 *
 * The component ships seven rows; the preview shows five so the card
 * fits the page without scrolling.
 */

/* The real Settings icon, exported from the Leading Element at node
   7947:111971 — a stroked gear outline over a 40%-opacity inner dot.
   The previous drawing had a plain circle where the teeth belong.
   currentColor throughout, so the row's selected state reaches it. */
var _SGROUP_GEAR =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
  '<path opacity="0.4" fill="currentColor" d="M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 ' +
  '11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 ' +
  '9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 ' +
  '15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 ' +
  '14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 ' +
  '14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z"/>' +
  '<path stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" ' +
  'd="M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 ' +
  '6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 ' +
  '11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 ' +
  '16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 ' +
  '19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 ' +
  '19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 ' +
  '16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 ' +
  '9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 ' +
  '6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 ' +
  '4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z"/></svg>';

/* Seven, because that is what the component holds. Every documented
   height reconstructs from it: 7 × 40 plus 4 above and 4 below is 288 at
   None/Compact, plus six 4px divider frames is 312 for the other two. A
   five-row preview quietly contradicted its own Layout section. */
var _SGROUP_ROWS = 7;

function _sgroupRender(o) {
  var border = o.border || 'middleinset';
  var density = o.density || 'compact';

  var h = '<div class="eb-preview-sgroup eb-preview-sgroup--' + border +
          ' eb-preview-sgroup--' + density + '">';
  for (var i = 0; i < _SGROUP_ROWS; i++) {
    /* Figma ships the group with its first row selected, so the preview
       does too — it is what the component draws, and it shows how a
       Select Item's selected treatment reads inside the group. */
    var sel = i === 0 ? ' eb-preview-sgroup__row--selected' : '';
    h += '<div class="eb-preview-sgroup__row' + sel + '">';
    h += '<span class="eb-preview-sgroup__lead">' + _SGROUP_GEAR + '</span>';
    h += '<span class="eb-preview-sgroup__label">Text</span>';
    h += '</div>';
  }
  h += '</div>';
  return h;
}

function _sgroupRead() {
  var v = function (id, fb) { var el = document.getElementById(id); return el ? el.value : fb; };
  return {
    border: v('sgroup-ctrl-border', 'middleinset'),
    density: v('sgroup-ctrl-density', 'compact')
  };
}

function _sgroupUpdate() {
  var el = document.getElementById('sgroup-demo-preview');
  if (el) el.innerHTML = _sgroupRender(_sgroupRead());
}

/* ── Spec card state ─────────────────────────────────────────────── */
/* One card per BorderType value, in the Figma panel's order. Density is
   the only control — SelectionSlot is a slot, so it is excluded. */
var _specCards = {
  none: { border: 'none', density: 'compact' },
  middleinset: { border: 'middleinset', density: 'compact' },
  fullwidth: { border: 'fullwidth', density: 'compact' }
};
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('sgroup-spec-' + cardKey);
  if (host) host.innerHTML = _sgroupRender(card);
}
window.updateSpecCard = updateSpecCard;

/* ── DEV code, live ───────────────────────────────────────────────── */
/* The rows arrive through the slot rather than as a parameter, so the
   call shows the trailing closure that fills it — which is also the
   honest answer to why BorderType and Density reach the default content
   in Figma but reach nothing at all in a real instance. */
function getSnippet(cardKey, lang) {
  var card = _specCards[cardKey] || _specCards['middleinset'];
  var compose = lang === 'compose';
  var sep = compose ? ' <span class="syn-eq">=</span> ' : '<span class="syn-punc">:</span> ';
  var cased = { none: 'None', middleinset: 'MiddleInset', fullwidth: 'FullWidth' }[card.border];
  var dens = card.density.charAt(0).toUpperCase() + card.density.slice(1);
  var val = function (type, c) {
    return compose
      ? '<span class="syn-type">' + type + '</span><span class="syn-punc">.</span><span class="syn-dot">' + c + '</span>'
      : '<span class="syn-dot">.' + c.charAt(0).toLowerCase() + c.slice(1) + '</span>';
  };

  var args = [
    'borderType' + sep + val('EBBorderType', cased),
    'density' + sep + val('EBDensity', dens)
  ];
  return '<span class="syn-type">EBSelectGroup</span><span class="syn-punc">(</span>\n    ' +
    args.join('<span class="syn-punc">,</span>\n    ') +
    '\n<span class="syn-punc">) {</span>\n    ' +
    '<span class="syn-type">EBSelectItem</span><span class="syn-punc">(</span>label' + sep +
    '<span class="syn-str">"Text"</span><span class="syn-punc">,</span> isSelected' + sep +
    '<span class="syn-kw">true</span><span class="syn-punc">)</span>\n    ' +
    '<span class="syn-type">EBSelectItem</span><span class="syn-punc">(</span>label' + sep +
    '<span class="syn-str">"Text"</span><span class="syn-punc">)</span>\n' +
    '<span class="syn-punc">}</span>';
}
window.getSnippet = getSnippet;

function _sgroupInit() {
  _sgroupUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'border', _specCards[k].border);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _sgroupInit);
  else _sgroupInit();
  document.addEventListener('astro:page-load', _sgroupInit);
})();
