/* Auto-extracted from assessment-src/components/carousel-card.html.
 * Powers the live-preview dropdowns/toggles for the carousel-card component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs carousel-card
 */
/* ── Carousel Card JS ────────────────────────────────────────────── */
/* Pixel-accurate replica of node 23:121311. 3 type variants:
   default / with-icon / skeleton. Content is editable via panel inputs. */

function _ccardEscape(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function _ccardIconSvg() {
  return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="16" height="16">' +
    '<circle cx="12" cy="12" r="10" fill="#C2C6CF"/>' +
  '</svg>';
}

function _ccardRender(opts) {
  var type  = opts.type || 'default';
  var title = opts.title || 'Title';
  var desc  = opts.desc || 'Description here. Description here.';

  var html = '<div class="eb-preview eb-preview-ccard eb-preview-ccard--' + type + '">';

  if (type === 'skeleton') {
    html += '<div class="eb-preview-ccard__banner eb-preview-ccard__banner--skeleton"></div>';
    html += '<div class="eb-preview-ccard__content eb-preview-ccard__content--skeleton">';
    html += '<div class="eb-preview-ccard__sk eb-preview-ccard__sk--title"></div>';
    html += '<div class="eb-preview-ccard__sk eb-preview-ccard__sk--desc"></div>';
    html += '<div class="eb-preview-ccard__sk eb-preview-ccard__sk--desc2"></div>';
    html += '</div>';
  } else {
    html += '<div class="eb-preview-ccard__banner">';
    html += '<div class="eb-preview-ccard__banner-img"></div>';
    html += '<div class="eb-preview-ccard__banner-dimmer"></div>';
    if (type === 'with-icon') {
      html += '<div class="eb-preview-ccard__banner-shadow"></div>';
      html += '<div class="eb-preview-ccard__banner-icon">' + _ccardIconSvg() + '</div>';
    }
    html += '</div>';
    html += '<div class="eb-preview-ccard__content">';
    html += '<p class="eb-preview-ccard__title">' + _ccardEscape(title) + '</p>';
    html += '<p class="eb-preview-ccard__desc">' + _ccardEscape(desc).replace(/\. /g, '.<br>') + '</p>';
    html += '</div>';
  }

  html += '</div>';
  return html;
}

function _ccardContextMarkup() {
  return '<div class="eb-preview-stack eb-preview-stack--row eb-preview-stack--gap-sm">' +
    _ccardRender({type:'default', title:'Article', desc:'Latest news. Read more.'}) +
    _ccardRender({type:'with-icon', title:'Send Money', desc:'Local & abroad. Same day.'}) +
    _ccardRender({type:'skeleton'}) +
  '</div>';
}

function _ccardUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('ccard-demo-preview');
  if (!preview) return;
  preview.innerHTML = _ccardRender({
    type:  getVal('ccard-ctrl-type', 'default'),
    title: getVal('ccard-ctrl-title', 'Title'),
    desc:  getVal('ccard-ctrl-desc', 'Description here. Description here.')
  });
}

function _ccardInit() {
  var ctx = document.getElementById('ccard-context-preview');
  if (ctx) ctx.innerHTML = _ccardContextMarkup();
  _ccardUpdate();

  var s1 = document.getElementById('ccard-spec-1');
  if (s1) s1.innerHTML = _ccardRender({type:'default'});

  var s2 = document.getElementById('ccard-spec-2');
  if (s2) s2.innerHTML = _ccardRender({type:'with-icon'});

  var s3 = document.getElementById('ccard-spec-3');
  if (s3) s3.innerHTML = _ccardRender({type:'skeleton'});
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _ccardInit);
else _ccardInit();
