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
    svg += '<text x="' + half + '" y="' + textY + '" text-anchor="middle" fill="' + c.text + '" font-size="' + s.fontSize + '" font-weight="700" font-family="\'HeyMeow Rnd\', system-ui, sans-serif">' + c.initials + '</text>';
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

var _avatarSpecColors = {
  dark:  [['Circle bg','#005CE5','main/avatar/brand/bg'],['Circle border','#E5EBF4','main/avatar/brand/border'],['Initials text','#FFFFFF','main/avatar/brand/initials']],
  light: [['Circle bg','#F6F9FD','main/avatar/default/bg'],['Circle border','#E5EBF4','main/avatar/default/border'],['Initials text','#2340A9','main/avatar/default/initials']],
  image: [['Placeholder bg','#C2CFE5','main/avatar/placeholder/bg'],['Placeholder border','#E5EBF4','main/avatar/placeholder/border']]
};

function updateAvatarSpecCard(cardType, prop, value) {
  var card = _avatarSpecCards[cardType];
  if (!card) return;
  card[prop] = value;
  var sz = card.size;

  /* Update SVG preview */
  var svgEl = document.getElementById('ava-spec-' + cardType + '-svg');
  if (svgEl) {
    svgEl.outerHTML = _buildAvatarSvg(card.type, sz);
    /* Re-assign ID */
    var parent = document.querySelector('#ava-spec-' + cardType + ' .spec-card-preview');
    if (parent) {
      var newSvg = parent.querySelector('svg');
      if (newSvg) newSvg.id = 'ava-spec-' + cardType + '-svg';
    }
  }

  /* Update size label */
  var spSize = document.querySelector('[data-sp="ava-' + cardType + '-size"]');
  if (spSize) spSize.textContent = sz + 'px';

  /* Update colors section */
  var colorsEl = document.getElementById('ava-spec-' + cardType + '-colors');
  if (colorsEl) {
    var rows = _avatarSpecColors[cardType];
    var h = '<div class="spec-detail-label">Colors</div><div class="spec-props">';
    rows.forEach(function(r) {
      var border = (r[1] === '#FFFFFF') ? 'border:1px solid #E2E4E9' : '';
      h += '<div class="spec-prop"><span class="spec-prop-key">' + r[0] + '</span><span class="spec-prop-val mono"><span class="spec-swatch" style="background:' + r[1] + ';' + border + '"></span> ' + r[1] + '<span class="spec-token-name">' + r[2] + '</span></span></div>';
    });
    h += '</div>';
    colorsEl.innerHTML = h;
  }

  /* Update layout section */
  var layoutEl = document.getElementById('ava-spec-' + cardType + '-layout');
  if (layoutEl) {
    var lh = '<div class="spec-detail-label">Layout</div><div class="spec-props">';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Size</span><span class="spec-prop-val mono">' + sz + ' x ' + sz + 'px</span></div>';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Border-radius</span><span class="spec-prop-val mono">radius/radius-round (99999)</span></div>';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Border-width</span><span class="spec-prop-val mono">' + _avatarBorderWidth[sz] + '</span></div>';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Padding</span><span class="spec-prop-val mono">0px</span></div>';
    lh += '</div>';
    layoutEl.innerHTML = lh;
  }

  /* Update typography section (only for initials types) */
  var typoEl = document.getElementById('ava-spec-' + cardType + '-typo');
  if (typoEl && cardType !== 'image') {
    var typo = _avatarTypography[sz];
    var th = '<div class="spec-detail-label">Typography</div><div class="spec-props">';
    th += '<div class="spec-prop"><span class="spec-prop-key">Text Style</span><span class="spec-prop-val mono">' + typo.textStyle + '</span></div>';
    th += '<div class="spec-prop"><span class="spec-prop-key">Font</span><span class="spec-prop-val mono">HeyMeow Rnd Bold</span></div>';
    th += '<div class="spec-prop"><span class="spec-prop-key">Size</span><span class="spec-prop-val mono">' + typo.fontSize + '</span></div>';
    th += '<div class="spec-prop"><span class="spec-prop-key">Line-height</span><span class="spec-prop-val mono">' + typo.lineHeight + '</span></div>';
    th += '<div class="spec-prop"><span class="spec-prop-key">Tracking</span><span class="spec-prop-val mono">' + typo.tracking + '</span></div>';
    th += '</div>';
    typoEl.innerHTML = th;
  }

  /* Update DEV code snippet */
  var codeEl = document.getElementById('ava-code-' + cardType);
  if (codeEl) {
    var activeTab = codeEl.closest('.spec-card-code');
    if (activeTab) {
      var activeLangBtn = activeTab.querySelector('.spec-code-tab.active');
      var lang = (activeLangBtn && activeLangBtn.textContent.indexOf('COMPOSE') !== -1) ? 'compose' : 'swift';
      codeEl.textContent = _getAvatarSnippet(cardType, lang, sz);
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
