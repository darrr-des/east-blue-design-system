/* Auto-extracted from assessment-src/components/avatar-group.html.
 * Powers the live-preview dropdowns/toggles for the avatar-group component page.
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
    s += '<text x="' + cx + '" y="' + (cy + 3) + '" text-anchor="middle" fill="' + textColor + '" font-size="8" font-weight="700" font-family="\'HeyMeow Rnd\', system-ui, sans-serif">' + p.initials + '</text>';
  });
  s += '</svg>';
  return s;
}

function updateAvatarGroupDemo() {
  var raw = document.getElementById('avg-demo-count').value;
  var layoutMap = { pair: 2, trio: 3, quad: 4, overflow: 5 };
  var count = layoutMap[raw] || 2;
  _avgDemo.count = count;
  var el = document.getElementById('avg-demo-preview');
  if (el) el.innerHTML = _avgBuildSvg(count);
}

function _avgInitSpecCards() {
  [2, 3, 4, 5].forEach(function(n) {
    var key = n === 5 ? '5plus' : n;
    var el = document.getElementById('avg-preview-' + key);
    if (el) el.innerHTML = _avgBuildSvg(n);
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

function toggleAvgSpecMode(cardKey, toggleEl) {
  var labels = toggleEl.querySelectorAll('.spec-mode-label');
  var isDes = labels[0].classList.contains('active');
  labels[0].classList.toggle('active', !isDes);
  labels[1].classList.toggle('active', isDes);
  var desEl = document.querySelector('[data-view="' + cardKey + '-des"]');
  var devEl = document.querySelector('[data-view="' + cardKey + '-dev"]');
  if (desEl) desEl.style.display = isDes ? 'none' : '';
  if (devEl) devEl.style.display = isDes ? '' : 'none';
}
function switchAvgCodeTab(tabBtn, lang, cardKey) {
  var block = tabBtn.closest('.spec-card-code');
  if (!block) return;
  block.querySelectorAll('.spec-code-tab').forEach(function(t){ t.classList.remove('active'); });
  tabBtn.classList.add('active');
  block.querySelectorAll('.spec-code-block').forEach(function(pre){
    pre.style.display = pre.getAttribute('data-lang') === lang ? '' : 'none';
  });
}
