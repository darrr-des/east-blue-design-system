/* Auto-extracted from assessment-src/components/avatar.html.
 * Powers the live-preview dropdowns/toggles for the avatar component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs avatar
 */
/* ── Avatar Live Preview ──────────────────────────────────────────── */
var _avatarColors = {
  'dark-initials':  { bg: '#005CE5', border: '#E5EBF4', text: '#FFFFFF', initials: 'DM' },
  'initials-light': { bg: '#F6F9FD', border: '#E5EBF4', text: '#2340A9', initials: 'LM' },
  'image':          { bg: '#C2CFE5', border: '#E5EBF4', text: null, initials: null }
};

var _avatarSizes = {
  '20':  { px: 20, fontSize: 10, borderWidth: 1.25, radius: 10 },
  '24':  { px: 24, fontSize: 12, borderWidth: 1.25, radius: 12 },
  '32':  { px: 32, fontSize: 14, borderWidth: 1.5,  radius: 16 },
  '40':  { px: 40, fontSize: 18, borderWidth: 1.5,  radius: 20 },
  '48':  { px: 48, fontSize: 22, borderWidth: 2,    radius: 24 },
  '64':  { px: 64, fontSize: 31, borderWidth: 2,    radius: 32 },
  '90':  { px: 90, fontSize: 35, borderWidth: 3,    radius: 45 }
};

var _avatarTypography = {
  '20':  { fontSize: '10px', lineHeight: '10px', tracking: '0.25px', textStyle: 'Primary/Label/Tiny' },
  '24':  { fontSize: '12px', lineHeight: '12px', tracking: '0.5px',  textStyle: 'Primary/Label/Fine' },
  '32':  { fontSize: '14px', lineHeight: '16px', tracking: '0.25px', textStyle: 'Primary/Multi-line Label/Small' },
  '40':  { fontSize: '18px', lineHeight: '23px', tracking: '0.25px', textStyle: 'Primary/Headlines/Block' },
  '48':  { fontSize: '22px', lineHeight: '26px', tracking: '0px',    textStyle: 'Primary/Headlines/Section' },
  '64':  { fontSize: '31px', lineHeight: '35px', tracking: '0px',    textStyle: 'Primary/Headlines/Region' },
  '90':  { fontSize: '35px', lineHeight: '38px', tracking: '0px',    textStyle: 'Primary/Headlines/Spotlight' }
};

var _avatarBorderRadius = {
  '20': '10px',  '24': '12px',  '32': '16px',  '40': '20px',
  '48': '24px',  '64': '32px',  '90': '45.213px'
};

var _avatarBorderWidth = {
  '20': '1.25px', '24': '1.25px', '32': '1.5px', '40': '1.5px',
  '48': '2px',    '64': '2px',    '90': '3px'
};

function _buildAvatarSvg(type, sizePx) {
  var s = _avatarSizes[sizePx] || _avatarSizes['64'];
  var c = _avatarColors[type] || _avatarColors['dark-initials'];
  var p = s.px;
  var half = p / 2;
  var r = half - s.borderWidth;
  var svg = '<svg width="' + p + '" height="' + p + '" viewBox="0 0 ' + p + ' ' + p + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  svg += '<circle cx="' + half + '" cy="' + half + '" r="' + r + '" fill="' + c.bg + '" stroke="' + c.border + '" stroke-width="' + s.borderWidth + '"/>';
  if (type === 'image') {
    /* Placeholder silhouette */
    var headR = p * 0.125;
    var bodyRx = p * 0.22;
    var bodyRy = p * 0.16;
    svg += '<circle cx="' + half + '" cy="' + (half * 0.8) + '" r="' + headR + '" fill="#9BABC4" opacity=".6"/>';
    svg += '<ellipse cx="' + half + '" cy="' + (p * 0.75) + '" rx="' + bodyRx + '" ry="' + bodyRy + '" fill="#9BABC4" opacity=".4"/>';
  } else if (c.initials) {
    var textY = half + s.fontSize * 0.35;
    svg += '<text x="' + half + '" y="' + textY + '" text-anchor="middle" fill="' + c.text + '" font-size="' + s.fontSize + '" font-weight="700" font-family="\'Proxima Soft\', system-ui, sans-serif">' + c.initials + '</text>';
  }
  svg += '</svg>';
  return svg;
}

function updateAvatarDemo() {
  var type = document.getElementById('ava-demo-type').value;
  var size = document.getElementById('ava-demo-size').value;
  var preview = document.getElementById('ava-demo-preview');
  if (preview) preview.innerHTML = _buildAvatarSvg(type, size);
}

/* ── Avatar Spec Cards ────────────────────────────────────────────── */
var _avatarSpecCards = {
  dark:  { type: 'dark-initials',  size: '64' },
  light: { type: 'initials-light', size: '64' },
  image: { type: 'image',          size: '64' }
};

/* Expose for shared utilities — `switchCodeTab` reads this when the
   user clicks SwiftUI / Compose so it can rebuild the snippet. */
var _specCards = _avatarSpecCards;
window._specCards = _specCards;

/* Spec-card Colors section is server-rendered from avatar.ts;
   Plan A's `_patchSpecCardRows` (assessment.js) handles per-card-type
   updates when a row declares `variants`. Demo no longer rebuilds Colors.
   Layout + Typography rebuilds remain (size-keyed dynamic data not yet
   migrated to `variants`). */

function updateAvatarSpecCard(cardType, prop, value) {
  return updateSpecCard(cardType, prop, value);
}

function updateSpecCard(cardType, prop, value) {
  var card = _avatarSpecCards[cardType];
  if (!card) return;
  card[prop] = value;
  var sz = card.size;

  /* Update SVG preview — locate by id `ava-spec-${cardType}-svg` */
  var svgEl = document.getElementById('ava-spec-' + cardType + '-svg');
  if (svgEl) {
    var newHtml = _buildAvatarSvg(card.type, sz);
    var parent = svgEl.parentNode;
    svgEl.outerHTML = newHtml;
    if (parent) {
      var fresh = parent.querySelector('svg');
      if (fresh) fresh.id = 'ava-spec-' + cardType + '-svg';
    }
  }

  /* Update Size readout — data-sp="${demoKey}-size" */
  var spSize = document.querySelector('[data-sp="' + cardType + '-size"]');
  if (spSize) spSize.textContent = sz + 'px';

  /* Colors section is server-rendered from avatar.ts; Plan A patches
     per-card-type variants. Demo no longer rebuilds it. */

  /* Update Layout section — id `spec-${demoKey}-layout` */
  var layoutEl = document.getElementById('spec-' + cardType + '-layout');
  if (layoutEl) {
    var lh = '<div class="spec-detail-label">Layout</div><div class="spec-props">';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Size</span><span class="spec-prop-val mono">' + sz + ' × ' + sz + 'px</span></div>';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Border radius</span><span class="spec-prop-val mono">radius/radius-round</span></div>';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Border width</span><span class="spec-prop-val mono">' + _avatarBorderWidth[sz] + '</span></div>';
    if (cardType === 'image') lh += '<div class="spec-prop"><span class="spec-prop-key">Image fit</span><span class="spec-prop-val mono">cover</span></div>';
    lh += '</div>';
    layoutEl.innerHTML = lh;
  }

  /* Update Typography section — id `spec-${demoKey}-typo` (initials only) */
  var typoEl = document.getElementById('spec-' + cardType + '-typo');
  if (typoEl && cardType !== 'image') {
    var typo = _avatarTypography[sz];
    var th = '<div class="spec-detail-label">Typography</div><div class="spec-props">';
    th += '<div class="spec-prop"><span class="spec-prop-key">Text style</span><span class="spec-prop-val mono">' + typo.textStyle + '</span></div>';
    th += '<div class="spec-prop"><span class="spec-prop-key">Font</span><span class="spec-prop-val mono">Proxima Soft Bold</span></div>';
    th += '<div class="spec-prop"><span class="spec-prop-key">Size</span><span class="spec-prop-val mono">' + typo.fontSize + '</span></div>';
    th += '<div class="spec-prop"><span class="spec-prop-key">Line-height</span><span class="spec-prop-val mono">' + typo.lineHeight + '</span></div>';
    th += '<div class="spec-prop"><span class="spec-prop-key">Tracking</span><span class="spec-prop-val mono">' + typo.tracking + '</span></div>';
    th += '</div>';
    typoEl.innerHTML = th;
  }

  /* Update DEV code — locate via `[data-code-content="${demoKey}"]`. Always
     run, even when DEV view is hidden. Use highlightSyntax. */
  var devView = document.querySelector('[data-view="' + cardType + '-dev"]');
  if (devView) {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && activeTab.textContent.toLowerCase().indexOf('swift') !== -1 ? 'swift' : 'compose';
    var codeEl = devView.querySelector('[data-code-content="' + cardType + '"]');
    if (codeEl) {
      var code = getSnippet(cardType, lang, card);
      codeEl.setAttribute('data-final', code);
      codeEl.setAttribute('data-lang', lang);
      codeEl.textContent = code;
      if (typeof window.highlightSyntax === 'function') window.highlightSyntax(codeEl);
    }
  }
}

var _avatarSizeNames = {
  '20': { swift: '.xxSmall', compose: 'XXSmall' },
  '24': { swift: '.xSmall',  compose: 'XSmall' },
  '32': { swift: '.small',   compose: 'Small' },
  '40': { swift: '.medium',  compose: 'Medium' },
  '48': { swift: '.large',   compose: 'Large' },
  '64': { swift: '.xLarge',  compose: 'XLarge' },
  '90': { swift: '.xxLarge', compose: 'XXLarge' }
};

function _getAvatarSnippet(cardType, lang, size) {
  var sn = _avatarSizeNames[size] || _avatarSizeNames['64'];
  if (lang === 'swift') {
    if (cardType === 'dark')  return 'EBAvatar("DM", type: .darkInitials, size: ' + sn.swift + ')';
    if (cardType === 'light') return 'EBAvatar("LM", type: .lightInitials, size: ' + sn.swift + ')';
    return 'EBAvatar(imageURL: profileURL, size: ' + sn.swift + ')';
  } else {
    if (cardType === 'dark')  return 'EBAvatar(\n    initials = "DM",\n    type = AvatarType.DarkInitials,\n    size = AvatarSize.' + sn.compose + '\n)';
    if (cardType === 'light') return 'EBAvatar(\n    initials = "LM",\n    type = AvatarType.LightInitials,\n    size = AvatarSize.' + sn.compose + '\n)';
    return 'EBAvatar(\n    imageUrl = profileUrl,\n    type = AvatarType.Image,\n    size = AvatarSize.' + sn.compose + '\n)';
  }
}

function buildSwiftSnippet(type, card) {
  return _getAvatarSnippet(type, 'swift', card.size);
}
function buildComposeSnippet(type, card) {
  return _getAvatarSnippet(type, 'compose', card.size);
}
function getSnippet(type, lang, card) {
  return _getAvatarSnippet(type, lang, card.size);
}
window.getSnippet = getSnippet;

function switchAvatarCodeTab(tabBtn, lang, cardType) {
  var parent = tabBtn.parentElement;
  parent.querySelectorAll('.spec-code-tab').forEach(function(t) { t.classList.remove('active'); });
  tabBtn.classList.add('active');
  var codeEl = document.getElementById('ava-code-' + cardType);
  if (codeEl) {
    var card = _avatarSpecCards[cardType];
    var raw = _getAvatarSnippet(cardType, lang, card.size);
    codeEl.setAttribute('data-final', raw);
    codeEl.textContent = raw;
    if (typeof highlightSyntax === 'function') highlightSyntax(codeEl);
  }
}

function toggleAvatarSpecMode(type, toggleEl) {
  var labels = toggleEl.querySelectorAll('.spec-mode-label');
  var isDes = labels[0].classList.contains('active');
  labels[0].classList.toggle('active', !isDes);
  labels[1].classList.toggle('active', isDes);
  var desView = document.querySelector('[data-view="' + type + '-des"]');
  var devView = document.querySelector('[data-view="' + type + '-dev"]');
  if (isDes) {
    if (desView) desView.style.display = 'none';
    if (devView) {
      devView.style.display = '';
      var shortType = type.replace('ava-', '');
      var card = _avatarSpecCards[shortType];
      var activeTab = devView.querySelector('.spec-code-tab.active');
      var lang = activeTab && activeTab.textContent.toLowerCase().indexOf('swift') !== -1 ? 'swift' : 'compose';
      var codeEl = devView.querySelector('code');
      if (codeEl && card) {
        var raw = _getAvatarSnippet(shortType, lang, card.size);
        codeEl.setAttribute('data-final', raw);
        codeEl.textContent = raw;
        if (typeof highlightSyntax === 'function') highlightSyntax(codeEl);
      }
    }
  } else {
    if (devView) devView.style.display = 'none';
    if (desView) desView.style.display = '';
  }
}

/* Initialize avatar spec cards on load */
function initAvatarSpecCards() {
  updateAvatarSpecCard('dark', 'size', '64');
  updateAvatarSpecCard('light', 'size', '64');
  updateAvatarSpecCard('image', 'size', '64');
}
/* Hook into page load */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAvatarSpecCards);
} else {
  initAvatarSpecCards();
}


/* ── Re-init after Astro view-transition swaps ─────────────── */
(function(){
  function reinit(){
      if (typeof initAvatarSpecCards === 'function') initAvatarSpecCards();
  }
  document.addEventListener('astro:page-load', reinit);
})();
