/* Avatar Group — live preview + spec cards.
 * Wired to the Astro SpecCard demo-panel (`updateSpecCard(demoKey, prop, value)`).
 * Re-extract via: node astro-site/scripts/extract-demos.mjs avatar-group
 */
/* ── Avatar Group Component JS ────────────────────────────────────── */
var _avgDemo = { count: 2 };

function _avgBuildSvg(count) {
  var size = 48;
  var avatarSize = 24;
  var r = avatarSize / 2;
  var s = '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  var positions;
  if (count === 2) {
    positions = [
      { x: 0, y: 0, type: 'brand', initials: 'DM' },
      { x: 16, y: 16, type: 'default', initials: 'LM' }
    ];
  } else if (count === 3) {
    positions = [
      { x: 12, y: 0, type: 'brand', initials: 'DM' },
      { x: 0, y: 24, type: 'default', initials: 'LM' },
      { x: 24, y: 24, type: 'brand', initials: 'AB' }
    ];
  } else if (count === 4) {
    positions = [
      { x: 0, y: 0, type: 'brand', initials: 'DM' },
      { x: 24, y: 0, type: 'brand', initials: 'LM' },
      { x: 0, y: 24, type: 'default', initials: 'AB' },
      { x: 24, y: 24, type: 'default', initials: 'CD' }
    ];
  } else { /* 5+ overflow */
    positions = [
      { x: 0, y: 0, type: 'brand', initials: 'DM' },
      { x: 24, y: 0, type: 'brand', initials: 'LM' },
      { x: 0, y: 24, type: 'default', initials: 'AB' },
      { x: 24, y: 24, type: 'default', initials: '+5' }
    ];
  }
  positions.forEach(function(p) {
    var cx = p.x + r;
    var cy = p.y + r;
    var bg = p.type === 'brand' ? '#005CE5' : '#F6F9FD';
    var borderColor = '#E5EBF4';
    var textColor = p.type === 'brand' ? '#FFFFFF' : '#2340A9';
    s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r - 1) + '" fill="' + bg + '" stroke="' + borderColor + '" stroke-width="1.5"/>';
    s += '<text x="' + cx + '" y="' + (cy + 3) + '" text-anchor="middle" fill="' + textColor + '" font-size="8" font-weight="700" font-family="\'Proxima Soft\', system-ui, sans-serif">' + p.initials + '</text>';
  });
  s += '</svg>';
  return s;
}

/* ── Live preview (Overview tab) ─────────────────────────────────── */
function updateAvatarGroupDemo() {
  var raw = document.getElementById('avg-demo-count');
  var rawVal = raw ? raw.value : 'pair';
  var layoutMap = { pair: 2, trio: 3, quad: 4, overflow: 5 };
  var count = layoutMap[rawVal] || 2;
  _avgDemo.count = count;
  var el = document.getElementById('avg-demo-preview');
  if (el) el.innerHTML = _avgBuildSvg(count);
}

/* ── Spec cards (Style tab) ──────────────────────────────────────── */
var _avgSpecCards = {
  pair:     { layout: 'pair' },
  trio:     { layout: 'trio' },
  quad:     { layout: 'quad' },
  overflow: { layout: 'overflow' }
};
var _specCards = _avgSpecCards;
window._specCards = _specCards;

var _avgLayoutCount = { pair: 2, trio: 3, quad: 4, overflow: 5 };

function buildSwiftSnippet(cardKey, card) {
  if (card.layout === 'overflow') {
    return 'EBAvatarGroup(avatars: members, overflowFrom: 3)\n// Shows 3 avatars + "+N" badge when members.count > 3';
  }
  return 'EBAvatarGroup(avatars: members)\n// Layout=' + card.layout + ' (' + _avgLayoutCount[card.layout] + ' avatars)';
}

function buildComposeSnippet(cardKey, card) {
  if (card.layout === 'overflow') {
    return 'EBAvatarGroup(\n    avatars = members,\n    overflowFrom = 3\n)';
  }
  return 'EBAvatarGroup(\n    avatars = members,\n    layout = EBAvatarGroupLayout.' + card.layout.charAt(0).toUpperCase() + card.layout.slice(1) + '\n)';
}

function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _avgSpecCards[cardStyle];
  if (!card) return;
  card[prop] = value;
  var count = _avgLayoutCount[card.layout] || 2;

  /* Update preview SVG — locate by id `avg-spec-{cardStyle}-preview` */
  var previewEl = document.getElementById('avg-spec-' + cardStyle + '-preview');
  if (previewEl) {
    previewEl.innerHTML = _avgBuildSvg(count);
  }

  /* Update Properties readouts — `[data-sp="{cardStyle}-{prop}"]` */
  var spLayout = document.querySelector('[data-sp="' + cardStyle + '-layout"]');
  if (spLayout) {
    var labelMap = { pair: 'Pair', trio: 'Trio', quad: 'Quad', overflow: 'Overflow' };
    var span = spLayout.querySelector('.spec-prop-hex') || spLayout;
    span.textContent = labelMap[card.layout] || card.layout;
  }

  /* DEV code update — `[data-code-content="{cardStyle}"]` */
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

function _avgInitSpecCards() {
  Object.keys(_avgSpecCards).forEach(function(key) {
    updateSpecCard(key, 'layout', _avgSpecCards[key].layout);
  });
}

function _avgInit() {
  updateAvatarGroupDemo();
  _avgInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _avgInit);
} else {
  _avgInit();
}
document.addEventListener('astro:page-load', _avgInit);

/* Legacy aliases — keep older entry points wired during the cascade. */
function toggleAvgSpecMode(cardKey, toggleEl) {
  if (typeof window.toggleSpecMode === 'function') return window.toggleSpecMode(cardKey, toggleEl);
}
function switchAvgCodeTab(tabBtn, lang, cardKey) {
  if (typeof window.switchCodeTab === 'function') return window.switchCodeTab(tabBtn, lang, cardKey);
}
