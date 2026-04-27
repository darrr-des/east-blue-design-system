/* Auto-extracted from assessment-src/components/accordion.html.
 * Powers the live-preview dropdowns/toggles for the accordion component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs accordion
 */
/* ── Accordion live demo state ─────────────────────────────────────── */
var _accDemo = { type: 'collapsed', state: 'default', leadingIcon: true, description: false };

/* Colors per state */
var _accDemoColors = {
  default:  { headerBg: '#FFFFFF',  labelColor: '#0A2757', descColor: '#90A8D0', chevColor: '#005CE5', borderColor: '#E5EBF4' },
  pressed:  { headerBg: '#EEF3FB',  labelColor: '#0A2757', descColor: '#90A8D0', chevColor: '#005CE5', borderColor: '#E5EBF4' },
  disabled: { headerBg: '#F6F9FD',  labelColor: '#C2CFE5', descColor: '#C2CFE5', chevColor: '#C2CFE5', borderColor: '#E5EBF4' }
};

function _applyAccDemo() {
  var c = _accDemoColors[_accDemo.state] || _accDemoColors['default'];
  var isExpanded = _accDemo.type === 'expanded';

  var header = document.getElementById('demo-acc-header');
  var label  = document.getElementById('demo-acc-label');
  var desc   = document.getElementById('demo-acc-desc');
  var icon   = document.getElementById('demo-acc-icon');
  var body   = document.getElementById('demo-acc-body');
  var outer  = document.getElementById('demo-acc-live');
  var chevSvg = document.getElementById('demo-acc-chevron-svg');

  if (!header) return;

  header.style.background = c.headerBg;
  label.style.color = c.labelColor;

  /* Leading icon */
  if (icon) {
    icon.style.display = _accDemo.leadingIcon ? 'flex' : 'none';
  }

  /* Description */
  if (desc) {
    desc.style.display = _accDemo.description ? 'block' : 'none';
    desc.style.color = c.descColor;
  }

  /* Chevron direction */
  if (chevSvg) {
    chevSvg.querySelector('path').setAttribute('stroke', c.chevColor);
    chevSvg.querySelector('path').setAttribute('d', isExpanded
      ? 'M5 12.5l5-5 5 5'
      : 'M5 7.5l5 5 5-5');
  }

  /* Expanded body */
  if (body) {
    body.style.display = isExpanded ? 'block' : 'none';
  }

  /* Outer border */
  if (outer) {
    outer.style.borderColor = c.borderColor;
    /* Add bottom border to header when expanded */
    header.style.borderBottom = isExpanded ? ('1px solid ' + c.borderColor) : 'none';
  }
}

function setAccDemoType(type) {
  _accDemo.type = type;
  _applyAccDemo();
}
function setAccDemoState(state) {
  _accDemo.state = state;
  _applyAccDemo();
}
function setAccDemoProp(prop, val) {
  _accDemo[prop] = val;
  _applyAccDemo();
}

/* ── Accordion spec card state ─────────────────────────────────────── */
var _accSpecCards = {
  collapsed: { state: 'default', leadingIcon: true, description: false },
  expanded:  { state: 'default', leadingIcon: true, description: false }
};

var _accSpecColors = {
  default: { label: 'Colors — Default', rows: [
    ['Header bg','#FFFFFF','main/accordion/color/collapsed/bg'],
    ['Content-body bg','#F4F7FB','surface/content'],
    ['Label','#0A2757','main/accordion/color/collapsed/label'],
    ['Description','#90A8D0','main/accordion/color/collapsed/description'],
    ['Chevron','#005CE5','main/accordion/color/collapsed/icon-chevron'],
    ['Icon placeholder','#C2C6CF','icon/placeholder'],
    ['Border','#E5EBF4','main/accordion/color/collapsed/border']
  ]},
  pressed: { label: 'Colors — Pressed', rows: [
    ['Header bg','#EEF3FB','surface/pressed'],
    ['Content-body bg','#F4F7FB','surface/content'],
    ['Label','#0A2757','main/accordion/color/collapsed/label'],
    ['Description','#90A8D0','main/accordion/color/collapsed/description'],
    ['Chevron','#005CE5','main/accordion/color/collapsed/icon-chevron'],
    ['Icon placeholder','#C2C6CF','icon/placeholder'],
    ['Border','#E5EBF4','main/accordion/color/collapsed/border']
  ]},
  disabled: { label: 'Colors — Disabled', rows: [
    ['Header bg','#F6F9FD','bg/color-bg'],
    ['Content-body bg','#F4F7FB','surface/content'],
    ['Label','#C2CFE5','text/color-text-disabled'],
    ['Description','#C2CFE5','text/color-text-disabled'],
    ['Chevron','#C2CFE5','text/color-text-disabled'],
    ['Icon placeholder','#C2C6CF','icon/placeholder'],
    ['Border','#E5EBF4','main/accordion/color/collapsed/border']
  ]}
};

function updateAccSpecCard(cardType, prop, value) {
  var card = _accSpecCards[cardType];
  if (!card) return;
  card[prop] = value;

  var c = _accDemoColors[card.state] || _accDemoColors['default'];
  var isExpanded = cardType === 'expanded';

  /* Update preview */
  var header = document.getElementById('spec-acc-' + cardType + '-header');
  var labelEl = document.getElementById('spec-acc-' + cardType + '-label');
  var descEl  = document.getElementById('spec-acc-' + cardType + '-desc');
  var iconEl  = document.getElementById('spec-acc-' + cardType + '-icon');

  if (header) header.style.background = c.headerBg;
  if (labelEl) labelEl.style.color = c.labelColor;
  if (descEl) {
    descEl.style.display = card.description ? 'block' : 'none';
    descEl.style.color = c.descColor;
  }
  if (iconEl) {
    iconEl.style.display = card.leadingIcon ? 'flex' : 'none';
  }

  /* Update chevron stroke color */
  var chevPath = document.querySelector('#spec-acc-' + cardType + '-chev');
  if (chevPath) chevPath.setAttribute('stroke', c.chevColor);

  /* For expanded variant: update body and header border-bottom */
  if (isExpanded) {
    var bodyEl = document.getElementById('spec-acc-expanded-body');
    if (bodyEl && header) {
      header.style.borderBottom = '1px solid ' + c.borderColor;
    }
  }

  /* Update spec properties text */
  var spState = document.querySelector('[data-sp="acc-' + cardType + '-state"]');
  var spIcon  = document.querySelector('[data-sp="acc-' + cardType + '-leadingIcon"]');
  var spDesc  = document.querySelector('[data-sp="acc-' + cardType + '-description"]');
  if (spState) spState.textContent = card.state.charAt(0).toUpperCase() + card.state.slice(1);
  if (spIcon)  spIcon.textContent  = card.leadingIcon ? 'true' : 'false';
  if (spDesc)  spDesc.textContent  = card.description ? 'true' : 'false';

  /* Update colors section */
  var colorsEl = document.getElementById('spec-acc-' + cardType + '-colors');
  if (colorsEl) {
    var colorData = _accSpecColors[card.state] || _accSpecColors['default'];
    var h = '<div class="spec-detail-label">' + colorData.label + '</div><div class="spec-props">';
    colorData.rows.forEach(function(r) {
      var border = (r[1] === '#FFFFFF') ? 'border:1px solid #E2E4E9' : '';
      h += '<div class="spec-prop"><span class="spec-prop-key">' + r[0] + '</span><span class="spec-prop-val mono"><span class="spec-swatch" style="background:' + r[1] + ';' + border + '"></span> ' + r[1] + (r[2] ? '<span class="spec-token-name">' + r[2] + '</span>' : '') + '</span></div>';
    });
    h += '</div>';
    colorsEl.innerHTML = h;
  }

  /* Update DEV code if visible */
  var devView = document.querySelector('[data-view="acc-' + cardType + '-dev"]');
  if (devView && devView.style.display !== 'none') {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && activeTab.textContent.toLowerCase().indexOf('swift') !== -1 ? 'swift' : 'compose';
    var codeEl = devView.querySelector('code');
    if (codeEl) {
      codeEl.setAttribute('data-final', buildAccSnippet(cardType, lang, card));
      scrambleAccCode(cardType);
    }
  }
}

function buildAccSwiftSnippet(cardType, card) {
  var isExpanded = cardType === 'expanded';
  var stateLabel = card.state.charAt(0).toUpperCase() + card.state.slice(1);
  var lines = [];
  lines.push('// Layout');
  if (isExpanded) {
    lines.push('DisclosureGroup(isExpanded: $isExpanded) {');
    lines.push('    // Content-body (SLOT)');
    lines.push('    contentBody');
    lines.push('        .frame(height: Constants.contentBodyHeight)');
    lines.push('        .background(Constants.surfaceContent)');
    lines.push('} label: {');
  } else {
    lines.push('DisclosureGroup(isExpanded: $isExpanded) { /* ... */ } label: {');
  }
  lines.push('    HStack(alignment: .center, spacing: 8) {');
  if (card.leadingIcon) {
    lines.push('        leadingIcon');
    lines.push('            .frame(width: Constants.iconSize, height: Constants.iconSize)');
  }
  lines.push('        VStack(alignment: .leading, spacing: 0) {');
  lines.push('            Text(label)');
  lines.push('                .font(.custom("HeyMeowRnd-Bold", size: Constants.labelSize))');
  lines.push('                .foregroundColor(Constants.textPrimary' + stateLabel + ')');
  if (card.description) {
    lines.push('            Text(description)');
    lines.push('                .font(.custom("BarkAda-SemiBold", size: Constants.descSize))');
    lines.push('                .foregroundColor(Constants.textSecondary' + stateLabel + ')');
  }
  lines.push('        }');
  lines.push('        Spacer()');
  lines.push('    }');
  lines.push('    .padding(.horizontal, Constants.paddingH)');
  lines.push('    .padding(.vertical, Constants.paddingV)');
  lines.push('    .frame(height: Constants.headerHeight)');
  lines.push('    .background(Constants.surface' + stateLabel + ')');
  if (card.state === 'disabled') lines.push('    .disabled(true)');
  lines.push('}');
  lines.push('');
  lines.push('// Variables');
  lines.push('struct Constants {');
  var c = _accDemoColors[card.state] || _accDemoColors['default'];
  lines.push('    static let surface' + stateLabel + ': Color = Color("' + c.headerBg + '")');
  lines.push('    static let textPrimary' + stateLabel + ': Color = Color("' + c.labelColor + '")');
  if (card.description) lines.push('    static let textSecondary' + stateLabel + ': Color = Color("' + c.descColor + '")');
  if (isExpanded) lines.push('    static let surfaceContent: Color = Color("#F4F7FB")');
  lines.push('    static let borderSubtle: Color = Color("#E5EBF4")');
  lines.push('    static let headerHeight: CGFloat = 56');
  if (isExpanded) lines.push('    static let contentBodyHeight: CGFloat = 56');
  lines.push('    static let paddingH: CGFloat = 16');
  lines.push('    static let paddingV: CGFloat = 4');
  lines.push('    static let labelSize: CGFloat = 16');
  if (card.description) lines.push('    static let descSize: CGFloat = 14');
  if (card.leadingIcon) lines.push('    static let iconSize: CGFloat = 32');
  lines.push('}');
  return lines.join('\n');
}

function buildAccComposeSnippet(cardType, card) {
  var isExpanded = cardType === 'expanded';
  var stateLabel = card.state.charAt(0).toUpperCase() + card.state.slice(1);
  var lines = [];
  var c = _accDemoColors[card.state] || _accDemoColors['default'];
  lines.push('// Layout');
  lines.push('Column(');
  lines.push('    modifier = Modifier');
  lines.push('        .fillMaxWidth()');
  lines.push('        .border(width = 1.dp, color = Variables.borderSubtle)');
  lines.push(') {');
  lines.push('    Row(');
  lines.push('        verticalAlignment = Alignment.CenterVertically,');
  lines.push('        modifier = Modifier');
  lines.push('            .fillMaxWidth()');
  lines.push('            .height(Variables.headerHeight)');
  lines.push('            .background(Variables.surface' + stateLabel + ')');
  lines.push('            .padding(horizontal = Variables.paddingH, vertical = Variables.paddingV)');
  if (card.state === 'disabled') lines.push('            .alpha(1f) // disabled state — not clickable');
  lines.push('    ) {');
  if (card.leadingIcon) {
    lines.push('        leadingIcon()');
  }
  lines.push('        Column(modifier = Modifier.weight(1f)) {');
  lines.push('            Text(');
  lines.push('                text = label,');
  lines.push('                fontSize = 16.sp,');
  lines.push('                fontWeight = FontWeight.Bold,');
  lines.push('                color = Variables.textPrimary' + stateLabel);
  lines.push('            )');
  if (card.description) {
    lines.push('            Text(');
    lines.push('                text = description,');
    lines.push('                fontSize = 14.sp,');
    lines.push('                fontWeight = FontWeight.SemiBold,');
    lines.push('                color = Variables.textSecondary' + stateLabel);
    lines.push('            )');
  }
  lines.push('        }');
  lines.push('        // Trailing chevron icon');
  lines.push('    }');
  if (isExpanded) {
    lines.push('    AnimatedVisibility(visible = isExpanded) {');
    lines.push('        Box(');
    lines.push('            modifier = Modifier');
    lines.push('                .fillMaxWidth()');
    lines.push('                .height(Variables.contentBodyHeight)');
    lines.push('                .background(Variables.surfaceContent)');
    lines.push('        ) {');
    lines.push('            content()');
    lines.push('        }');
    lines.push('    }');
  }
  lines.push('}');
  lines.push('');
  lines.push('// Variables');
  lines.push('object Variables {');
  lines.push('    val surface' + stateLabel + ': Color = Color(0xFF' + c.headerBg.replace('#','') + ')');
  lines.push('    val textPrimary' + stateLabel + ': Color = Color(0xFF' + c.labelColor.replace('#','') + ')');
  if (card.description) lines.push('    val textSecondary' + stateLabel + ': Color = Color(0xFF' + c.descColor.replace('#','') + ')');
  if (isExpanded) lines.push('    val surfaceContent: Color = Color(0xFFF4F7FB)');
  lines.push('    val borderSubtle: Color = Color(0xFFE5EBF4)');
  lines.push('    val headerHeight: Dp = 56.dp');
  if (isExpanded) lines.push('    val contentBodyHeight: Dp = 56.dp');
  lines.push('    val paddingH: Dp = 16.dp');
  lines.push('    val paddingV: Dp = 4.dp');
  lines.push('}');
  return lines.join('\n');
}

function buildAccSnippet(cardType, lang, card) {
  if (lang === 'swift') return buildAccSwiftSnippet(cardType, card);
  return buildAccComposeSnippet(cardType, card);
}

function scrambleAccCode(cardType) {
  var codeEl = document.querySelector('[data-code-content="acc-' + cardType + '"]');
  if (!codeEl) return;
  var final = codeEl.getAttribute('data-final') || codeEl.textContent;
  codeEl.textContent = final;
  highlightSyntax(codeEl);
}

function switchAccCodeTab(tabBtn, lang, cardType) {
  var block = tabBtn.closest('.spec-card-code');
  block.querySelectorAll('.spec-code-tab').forEach(function(t) { t.classList.remove('active'); });
  tabBtn.classList.add('active');
  var codeEl = block.querySelector('code');
  if (!codeEl) return;
  var card = _accSpecCards[cardType] || { state: 'default', leadingIcon: true, description: false };
  var code = buildAccSnippet(cardType, lang, card);
  codeEl.textContent = '// Loading...';
  codeEl.setAttribute('data-final', code);
  scrambleAccCode(cardType);
}

/* Accordion DES/DEV toggle — standalone function */
function toggleAccSpecMode(type, toggleEl) {
  var labels = toggleEl.querySelectorAll('.spec-mode-label');
  var isDes = labels[0].classList.contains('active');
  labels[0].classList.toggle('active', !isDes);
  labels[1].classList.toggle('active', isDes);
  var desView = document.querySelector('[data-view="'+type+'-des"]');
  var devView = document.querySelector('[data-view="'+type+'-dev"]');
  if (isDes) {
    if (desView) desView.style.display = 'none';
    if (devView) {
      devView.style.display = '';
      var cardType = type.replace('acc-', '');
      var card = _accSpecCards[cardType] || { state: 'default', leadingIcon: true, description: false };
      var activeTab = devView.querySelector('.spec-code-tab.active');
      var lang = activeTab && activeTab.textContent.toLowerCase().indexOf('swift') !== -1 ? 'swift' : 'compose';
      var codeEl = devView.querySelector('code');
      if (codeEl) { codeEl.setAttribute('data-final', buildAccSnippet(cardType, lang, card)); }
      scrambleAccCode(cardType);
    }
  } else {
    if (devView) devView.style.display = 'none';
    if (desView) desView.style.display = '';
  }
}

/* Initialize accordion spec card colors and accordion demo on load */
function initAccSpecCards() {
  updateAccSpecCard('collapsed', 'state', 'default');
  updateAccSpecCard('expanded', 'state', 'default');
  _applyAccDemo();
}

/* Auto-init when DOM is ready */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAccSpecCards);
} else {
  initAccSpecCards();
}


/* ── Re-init after Astro view-transition swaps ─────────────── */
(function(){
  function reinit(){
      if (typeof initAccSpecCards === 'function') initAccSpecCards();
      if (typeof _applyAccDemo === 'function') _applyAccDemo();
  }
  document.addEventListener('astro:page-load', reinit);
})();
