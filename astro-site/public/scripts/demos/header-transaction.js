/* Auto-extracted from assessment-src/components/header-transaction.html.
 * Powers the live-preview dropdowns/toggles for the header-transaction component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs header-transaction
 */
/* ── Header - Transaction (Detail Hero) JS ──────────────────────── */
/* Pixel-accurate replica of node 18430:2897.
   Surface: #1972F9 brand, 360 × 191/220. Padding 24 all.
   Avatar: 32×32 #C2CFE5 pill.
   Title:  HeyMeow Rnd Bold 22/26 white.
   Separator: 1px 24%-white.
   Meta: key 72%-white, value white, 14/20 BarkAda Semibold.
   Description: BarkAda Semibold 12/18 72%-white.                    */

function _headerTransactionRender(opts) {
  var hasEmail = opts.email === 'yes';
  var html = '<div class="eb-preview eb-preview-header-tx">' +
    '<div class="eb-preview-header-tx__avatar" aria-hidden="true"></div>' +
    '<p class="eb-preview-header-tx__title">Add Label Here</p>' +
    '<div class="eb-preview-header-tx__separator"></div>';
  if (hasEmail) {
    html +=
      '<p class="eb-preview-header-tx__meta">' +
        '<span class="eb-preview-header-tx__meta-key">email:</span>' +
        '<span class="eb-preview-header-tx__meta-value">email@gmail.com</span>' +
      '</p>';
  }
  html +=
    '<p class="eb-preview-header-tx__desc">Add description here.<br>Add description here.</p>' +
  '</div>';
  return html;
}

function _headerTransactionContextMarkup() {
  return '<div class="eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-lg">' +
    _headerTransactionRender({email:'yes'}) +
    _headerTransactionRender({email:'no'}) +
  '</div>';
}

function _headerTransactionUpdate() {
  var email   = document.getElementById('header-transaction-ctrl-email');
  var preview = document.getElementById('header-transaction-demo-preview');
  if (!preview) return;
  preview.innerHTML = _headerTransactionRender({email: email ? email.value : 'no'});
}

function _headerTransactionInit() {
  var ctx = document.getElementById('header-transaction-context-preview');
  if (ctx) ctx.innerHTML = _headerTransactionContextMarkup();
  _headerTransactionUpdate();
  var s1 = document.getElementById('header-transaction-spec-1');
  if (s1) s1.innerHTML = _headerTransactionRender({email:'no'});
  var s2 = document.getElementById('header-transaction-spec-2');
  if (s2) s2.innerHTML = _headerTransactionRender({email:'yes'});
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _headerTransactionInit);
else _headerTransactionInit();
