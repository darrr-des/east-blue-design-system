/* Auto-extracted from assessment-src/shell.html (lines 687-1008).
 * Powers the Button live-preview + per-spec-card interactivity on
 * /components/button. Re-extract via:
 *   sed -n '687,1008p' assessment-src/shell.html > demos/button.js
 *
 * Calls initSpecCards() and _applyDemo() on load so the captured HTML
 * is wired up immediately.
 */
/* ── Demo controls (v3) ──────────────────────────────────────────── */
var _demo = { style: 'filled', appearance: 'default', size: 'large', state: 'default', leadingIcon: false, trailingIcon: false, iconPlacement: 'none' };

/* Colors: style → appearance → state → { bg, color, border } */
var _demoColors = {
  filled: {
    default:     { default: { bg:'#005CE5', color:'#FFF', border:'none' },     pressed: { bg:'#2340A9', color:'#FFF', border:'none' },     disabled: { bg:'#9BC5FD', color:'#FFF', border:'none' } },
    destructive: { default: { bg:'#D81E1E', color:'#FFF', border:'none' },     pressed: { bg:'#B01818', color:'#FFF', border:'none' },     disabled: { bg:'#F5A3A3', color:'#FFF', border:'none' } },
    white:       { default: { bg:'#FFFFFF', color:'#005CE5', border:'none' },  pressed: { bg:'#EEF2F9', color:'#2340A9', border:'none' },  disabled: { bg:'#F5F7FA', color:'#9BC5FD', border:'none' } },
    subtle:      { default: { bg:'#E5F1FF', color:'#005CE5', border:'none' },  pressed: { bg:'#D2E5FF', color:'#2340A9', border:'none' },  disabled: { bg:'#EEF5FF', color:'#9BC5FD', border:'none' } }
  },
  outline: {
    default:     { default: { bg:'transparent', color:'#005CE5', border:'2px solid #005CE5' }, pressed: { bg:'transparent', color:'#2340A9', border:'2px solid #2340A9' }, disabled: { bg:'transparent', color:'#9BC5FD', border:'2px solid #9BC5FD' } },
    destructive: { default: { bg:'transparent', color:'#D81E1E', border:'2px solid #D81E1E' }, pressed: { bg:'transparent', color:'#B01818', border:'2px solid #B01818' }, disabled: { bg:'transparent', color:'#F5A3A3', border:'2px solid #F5A3A3' } },
    white:       { default: { bg:'transparent', color:'#005CE5', border:'2px solid #005CE5' }, pressed: { bg:'transparent', color:'#2340A9', border:'2px solid #2340A9' }, disabled: { bg:'transparent', color:'#9BC5FD', border:'2px solid #9BC5FD' } },
    subtle:      { default: { bg:'transparent', color:'#005CE5', border:'2px solid #005CE5' }, pressed: { bg:'transparent', color:'#2340A9', border:'2px solid #2340A9' }, disabled: { bg:'transparent', color:'#9BC5FD', border:'2px solid #9BC5FD' } }
  },
  text: {
    default:     { default: { bg:'transparent', color:'#005CE5', border:'none' }, pressed: { bg:'transparent', color:'#2340A9', border:'none' }, disabled: { bg:'transparent', color:'#9BC5FD', border:'none' } },
    destructive: { default: { bg:'transparent', color:'#D81E1E', border:'none' }, pressed: { bg:'transparent', color:'#B01818', border:'none' }, disabled: { bg:'transparent', color:'#F5A3A3', border:'none' } },
    white:       { default: { bg:'transparent', color:'#005CE5', border:'none' }, pressed: { bg:'transparent', color:'#2340A9', border:'none' }, disabled: { bg:'transparent', color:'#9BC5FD', border:'none' } },
    subtle:      { default: { bg:'transparent', color:'#005CE5', border:'none' }, pressed: { bg:'transparent', color:'#2340A9', border:'none' }, disabled: { bg:'transparent', color:'#9BC5FD', border:'none' } }
  }
};
/* Size table — aligned to Figma source-of-truth (Button_New 17104:184842).
 * Heights verified via mcp__figma__get_metadata. Font size mapping:
 *   Large   → Primary/Label/Large (18px)
 *   Medium  → Primary/Label/Base  (16px)
 *   Small   → Primary/Label/Base  (16px)
 *   Compact → Primary/Label/Small (14px)
 *   XSmall  → Primary/Label/Fine  (12px) */
var _demoSizes = {
  large:   { padding:'16px 20px', fontSize:'18px', height:'50px' },
  medium:  { padding:'12px 16px', fontSize:'16px', height:'48px' },
  small:   { padding:'8px 12px',  fontSize:'16px', height:'36px' },
  compact: { padding:'5px 12px',  fontSize:'14px', height:'28px' },
  xsmall:  { padding:'4px 10px',  fontSize:'12px', height:'24px' }
};

function _applyDemo() {
  var el = document.getElementById('demo-btn-live');
  if (!el) return;
  var styleMap = _demoColors[_demo.style] || _demoColors['filled'];
  var appMap = styleMap[_demo.appearance] || styleMap['default'];
  var effectiveState = _demo.state === 'loading' ? 'disabled' : _demo.state;
  var c = appMap[effectiveState] || appMap['default'];
  var sz = _demoSizes[_demo.size] || _demoSizes['large'];

  el.style.background   = c.bg;
  el.style.color        = c.color;
  el.style.border       = c.border;
  el.style.padding      = sz.padding;
  el.style.fontSize     = sz.fontSize;
  el.style.height       = sz.height;
  el.style.boxSizing    = 'border-box';
  el.style.borderRadius = '99px';
  el.style.fontFamily   = "'Proxima Soft', sans-serif";
  el.style.fontWeight   = '700';
  el.style.cursor       = (_demo.state === 'disabled' || _demo.state === 'loading') ? 'not-allowed' : 'pointer';
  el.style.opacity      = '1';

  /* Derive icon visibility from iconPlacement (source of truth) with fallback to legacy booleans */
  var placement = _demo.iconPlacement || 'none';
  var showLeading = placement === 'leading' || (placement === 'none' && _demo.leadingIcon);
  var showTrailing = placement === 'trailing' || (placement === 'none' && _demo.trailingIcon);
  var isIconOnly = placement === 'iconOnly';

  /* Label swap (icon only = no text) */
  var textEl = document.getElementById('demo-btn-text');
  if (textEl) {
    if (isIconOnly) textEl.style.display = 'none';
    else { textEl.style.display = ''; textEl.textContent = 'Label'; }
  }

  /* Icon Only = square button — override padding and width */
  if (isIconOnly) {
    el.style.padding = '0';
    el.style.width = sz.height;
    el.style.justifyContent = 'center';
  } else {
    el.style.width = '';
    el.style.justifyContent = '';
  }

  /* Icon slots */
  var iconSize = (_demo.size === 'small' || _demo.size === 'compact' || _demo.size === 'xsmall') ? '16' : '24';
  var leading = document.getElementById('demo-btn-leading');
  var trailing = document.getElementById('demo-btn-trailing');
  if (leading) {
    leading.style.display = (showLeading || isIconOnly) ? 'block' : 'none';
    leading.setAttribute('width', iconSize);
    leading.setAttribute('height', iconSize);
    leading.setAttribute('viewBox', iconSize === '16' ? '0 0 16 16' : '0 0 24 24');
    var lPath = leading.querySelector('path');
    if (lPath) {
      if (iconSize === '16') {
        lPath.setAttribute('d', 'M2.13359 5.8498C2.41244 4.3707 3.15349 3.46738 4.59457 3.13974C5.47753 2.93899 6.35971 3.35959 7 3.99988L8 4.99988L9 3.99988C9.6403 3.35967 10.5224 2.93908 11.4053 3.13975C12.8465 3.46728 13.5876 4.37064 13.8664 5.84979C14.0629 6.8923 13.5786 7.92128 12.8284 8.67143L12.5 8.99986L8.70711 12.7928C8.31658 13.1833 7.68342 13.1833 7.29289 12.7928L3.5 8.99986L3.17159 8.67145C2.42143 7.9213 1.93706 6.89231 2.13359 5.8498Z');
        lPath.setAttribute('stroke-width', '1.2');
      } else {
        lPath.setAttribute('d', 'M4.26087 12.306C2.57971 10.6347 2.57971 7.92488 4.26087 6.25352C5.94203 4.58216 8.66772 4.58216 10.3489 6.25352L12 7.89503L13.6511 6.25355C15.3323 4.58219 18.058 4.58219 19.7391 6.25355C21.4203 7.92491 21.4203 10.6347 19.7391 12.3061L13.3883 18.6003C12.607 19.3747 11.3471 19.3727 10.5682 18.596L4.26087 12.306Z');
        lPath.setAttribute('stroke-width', '2');
      }
    }
  }
  if (trailing) {
    trailing.style.display = showTrailing ? 'block' : 'none';
    trailing.setAttribute('width', iconSize);
    trailing.setAttribute('height', iconSize);
    trailing.setAttribute('viewBox', iconSize === '16' ? '0 0 16 16' : '0 0 24 24');
    var tPath = trailing.querySelector('path');
    if (tPath) {
      if (iconSize === '16') {
        tPath.setAttribute('d', 'M2.13359 5.8498C2.41244 4.3707 3.15349 3.46738 4.59457 3.13974C5.47753 2.93899 6.35971 3.35959 7 3.99988L8 4.99988L9 3.99988C9.6403 3.35967 10.5224 2.93908 11.4053 3.13975C12.8465 3.46728 13.5876 4.37064 13.8664 5.84979C14.0629 6.8923 13.5786 7.92128 12.8284 8.67143L12.5 8.99986L8.70711 12.7928C8.31658 13.1833 7.68342 13.1833 7.29289 12.7928L3.5 8.99986L3.17159 8.67145C2.42143 7.9213 1.93706 6.89231 2.13359 5.8498Z');
        tPath.setAttribute('stroke-width', '1.2');
      } else {
        tPath.setAttribute('d', 'M4.26087 12.306C2.57971 10.6347 2.57971 7.92488 4.26087 6.25352C5.94203 4.58216 8.66772 4.58216 10.3489 6.25352L12 7.89503L13.6511 6.25355C15.3323 4.58219 18.058 4.58219 19.7391 6.25355C21.4203 7.92491 21.4203 10.6347 19.7391 12.3061L13.3883 18.6003C12.607 19.3747 11.3471 19.3727 10.5682 18.596L4.26087 12.306Z');
        tPath.setAttribute('stroke-width', '2');
      }
    }
  }

  var preview = el.closest('.demo-preview');
  if (preview) preview.classList.toggle('demo-preview-dark', _demo.appearance === 'white');
}

function setDemoStyle(style) {
  _demo.style = style;
  _applyDemo();
}
function setDemoAppearance(appearance) {
  _demo.appearance = appearance;
  _applyDemo();
}
function setDemoSize(size) {
  _demo.size = size;
  _applyDemo();
}
function setDemoState(state) {
  _demo.state = state;
  _applyDemo();
}
function setDemoIcon(slot, value) {
  if (slot === 'leading') _demo.leadingIcon = value;
  else if (slot === 'trailing') _demo.trailingIcon = value;
  _applyDemo();
}
function setDemoIconPlacement(placement) {
  _demo.iconPlacement = placement;
  _applyDemo();
}
/* Keep old function names as aliases for backward compat */
function setDemoVariant(v) { setDemoAppearance(v === 'brand' ? 'default' : v); }

/* ── Spec card previews ──────────────────────────────────────────── */
var _specCards = {
  filled:  { style: 'filled',  appearance: 'default', size: 'large', state: 'default', iconPlacement: 'none' },
  outline: { style: 'outline', appearance: 'default', size: 'large', state: 'default', iconPlacement: 'none' },
  text:    { style: 'text',    appearance: 'default', size: 'large', state: 'default', iconPlacement: 'none' }
};
/* Expose for shared utilities — `switchCodeTab` reads this when the
   user clicks SwiftUI / Compose so it can rebuild the snippet for
   the current state. */
window._specCards = _specCards;

/* ── Code snippet builders (called by updateSpecCard + switchCodeTab) ── */
function buildSwiftSnippet(type, card) {
  var sizeMap = { large: '.large', medium: '.regular', small: '.small', compact: '.compact', xsmall: '.mini' };
  var szLabel = sizeMap[card.size] || '.large';
  var appLabel = card.appearance || 'default';
  var placement = card.iconPlacement || 'none';
  var styleMap = { filled: '.filled', outline: '.outlined', text: '.textLink' };
  var lines = [];
  if (placement === 'iconOnly') {
    lines.push('EBButton(icon: Image(systemName: "heart"), accessibilityLabel: "Label")');
  } else if (placement === 'leading') {
    lines.push('EBButton("Label", leadingIcon: Image(systemName: "heart"))');
  } else if (placement === 'trailing') {
    lines.push('EBButton("Label", trailingIcon: Image(systemName: "heart"))');
  } else {
    lines.push('EBButton("Label")');
  }
  lines.push('    .ebAppearance(' + (styleMap[type] || '.filled') + ')');
  lines.push('    .controlSize(' + szLabel + ')');
  if (appLabel === 'destructive') lines.push('    .ebColorScheme(.destructive)');
  else if (appLabel === 'white')  lines.push('    .ebColorScheme(.white)');
  else if (appLabel === 'subtle') lines.push('    .ebColorScheme(.subtle)');
  if (card.state === 'disabled')  lines.push('    .disabled(true)');
  return lines.join('\n');
}

function buildComposeSnippet(type, card) {
  var sizeMap = { large: 'Large', medium: 'Medium', small: 'Small', compact: 'Compact', xsmall: 'XSmall' };
  var szLabel = sizeMap[card.size] || 'Large';
  var appLabel = card.appearance || 'default';
  var placement = card.iconPlacement || 'none';
  var comp = type === 'outline' ? 'EBOutlinedButton' : type === 'text' ? 'EBTextButton' : 'EBButton';
  var lines = [];
  lines.push(comp + '(');
  lines.push('    onClick = { /* action */ },');
  lines.push('    size = EBButtonSize.' + szLabel + ',');
  if (placement === 'leading')      lines.push('    leadingIcon = { Icon(Icons.Filled.Favorite, null) },');
  else if (placement === 'trailing') lines.push('    trailingIcon = { Icon(Icons.Filled.Favorite, null) },');
  else if (placement === 'iconOnly') lines.push('    contentDescription = "Label",');
  if (appLabel === 'destructive') lines.push('    colors = EBButtonDefaults.destructiveColors(),');
  else if (appLabel === 'white')  lines.push('    colors = EBButtonDefaults.whiteColors(),');
  else if (appLabel === 'subtle') lines.push('    colors = EBButtonDefaults.subtleColors(),');
  if (card.state === 'disabled')  lines.push('    enabled = false,');
  var last = lines[lines.length - 1];
  if (last.charAt(last.length - 1) === ',') lines[lines.length - 1] = last.slice(0, -1);
  lines.push(') {');
  if (placement === 'iconOnly') lines.push('    Icon(Icons.Filled.Favorite, null)');
  else                          lines.push('    Text("Label")');
  lines.push('}');
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

  /* Update preview button */
  var el = document.getElementById('spec-' + cardStyle + '-btn');
  if (el) {
    var styleMap = _demoColors[card.style] || _demoColors['filled'];
    var appMap = styleMap[card.appearance] || styleMap['default'];
    var effectiveCardState = card.state === 'loading' ? 'disabled' : card.state;
    var c = appMap[effectiveCardState] || appMap['default'];
    var sz = _demoSizes[card.size] || _demoSizes['large'];
    el.style.background   = c.bg;
    el.style.color        = c.color;
    el.style.border       = c.border;
    el.style.padding      = sz.padding;
    el.style.fontSize     = sz.fontSize;
    el.style.height       = sz.height;
    el.style.boxSizing    = 'border-box';
    el.style.borderRadius = '99px';
    el.style.fontFamily   = "'Proxima Soft', sans-serif";
    el.style.fontWeight   = '700';
    el.style.cursor       = (card.state === 'disabled' || card.state === 'loading') ? 'not-allowed' : 'pointer';
    el.style.opacity      = '1';

    /* Loading label swap for spec cards */
    var specLabel = el.querySelector('span');
    if (specLabel) specLabel.textContent = card.state === 'loading' ? '●  ●  ●' : 'Button';
    var preview = el.closest('.spec-card-preview');
    if (preview) preview.classList.toggle('demo-preview-dark', card.appearance === 'white');

    /* Spec card icon slots */
    var specIconSize = (card.size === 'small' || card.size === 'compact' || card.size === 'xsmall') ? '16' : '24';
    var specLeading = document.getElementById('spec-' + cardStyle + '-leading');
    var specTrailing = document.getElementById('spec-' + cardStyle + '-trailing');
    var path16 = 'M2.13359 5.8498C2.41244 4.3707 3.15349 3.46738 4.59457 3.13974C5.47753 2.93899 6.35971 3.35959 7 3.99988L8 4.99988L9 3.99988C9.6403 3.35967 10.5224 2.93908 11.4053 3.13975C12.8465 3.46728 13.5876 4.37064 13.8664 5.84979C14.0629 6.8923 13.5786 7.92128 12.8284 8.67143L12.5 8.99986L8.70711 12.7928C8.31658 13.1833 7.68342 13.1833 7.29289 12.7928L3.5 8.99986L3.17159 8.67145C2.42143 7.9213 1.93706 6.89231 2.13359 5.8498Z';
    var path24 = 'M4.26087 12.306C2.57971 10.6347 2.57971 7.92488 4.26087 6.25352C5.94203 4.58216 8.66772 4.58216 10.3489 6.25352L12 7.89503L13.6511 6.25355C15.3323 4.58219 18.058 4.58219 19.7391 6.25355C21.4203 7.92491 21.4203 10.6347 19.7391 12.3061L13.3883 18.6003C12.607 19.3747 11.3471 19.3727 10.5682 18.596L4.26087 12.306Z';
    var placement = card.iconPlacement || 'none';
    var showLeading = placement === 'leading' || placement === 'iconOnly';
    var showTrailing = placement === 'trailing';
    var isIconOnly = placement === 'iconOnly';
    /* Hide label when icon only */
    if (specLabel) specLabel.style.display = isIconOnly ? 'none' : '';
    /* Make icon-only square */
    if (isIconOnly) {
      el.style.width = sz.height;
      el.style.padding = '0';
      el.style.justifyContent = 'center';
    } else {
      el.style.width = '';
      el.style.justifyContent = '';
    }
    [specLeading, specTrailing].forEach(function(svg, idx) {
      if (!svg) return;
      var show = idx === 0 ? showLeading : showTrailing;
      svg.style.display = show ? 'block' : 'none';
      svg.setAttribute('width', specIconSize);
      svg.setAttribute('height', specIconSize);
      svg.setAttribute('viewBox', specIconSize === '16' ? '0 0 16 16' : '0 0 24 24');
      var p = svg.querySelector('path');
      if (p) {
        p.setAttribute('d', specIconSize === '16' ? path16 : path24);
        p.setAttribute('stroke-width', specIconSize === '16' ? '1.2' : '2');
      }
    });
  }

  /* Update properties text */
  var spApp = document.querySelector('[data-sp="' + cardStyle + '-appearance"]');
  var spState = document.querySelector('[data-sp="' + cardStyle + '-state"]');
  var spSize = document.querySelector('[data-sp="' + cardStyle + '-size"]');
  if (spApp) spApp.textContent = card.appearance.charAt(0).toUpperCase() + card.appearance.slice(1);
  if (spState) spState.textContent = card.state.charAt(0).toUpperCase() + card.state.slice(1);
  if (spSize) spSize.textContent = card.size === 'xsmall' ? 'XSmall' : card.size.charAt(0).toUpperCase() + card.size.slice(1);

  /* Colors / Layout / Typography sections are server-rendered from
     button.ts; Plan A's `_patchSpecCardRows` handles
     appearance- and size-keyed overrides. */

  /* Update DEV code — always, even if DEV view is hidden, so the
     code is correct the moment the user toggles to DEV mode. No
     scramble animation; just textContent + highlightSyntax. */
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

/* Initialize spec card colors on page load */
function initSpecCards() {
  updateSpecCard('filled', 'appearance', 'default');
  updateSpecCard('outline', 'appearance', 'default');
  updateSpecCard('text', 'appearance', 'default');
}

/* ── Init on every page (re-)load ──────────────────────────────────── */
(function () {
  function init() {
    if (typeof initSpecCards === 'function') initSpecCards();
    if (typeof _applyDemo === 'function') _applyDemo();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  // Also run after Astro view-transition swaps (when user navs to/from this page)
  document.addEventListener('astro:page-load', init);
})();
