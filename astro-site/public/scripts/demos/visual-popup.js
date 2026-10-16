/* Visual Popup — Overview live preview + DEV code.
 * Figma component set 4120:10317 (2026 Working File). Panel:
 *   Layout  Centered · Surface
 *   hasHeader · hasPreamble (Surface) · hasSupportingContent (Centered) · hasCloseButton   booleans
 *   Image Slot Container · Supporting Content Slot · Action Slot Container   slots
 * Figma ships the Image and Supporting Content slots empty, so they draw as space; the Action
 * slot holds a Button. Every size below is read off the set and reflows like its auto-layout.
 *   Centered 320 wide: Image slot 89 · body padding 24 (title 22/26, message 14/20, supporting slot 40,
 *     gap 16, 24 below) · 36px button · Close 24 at 284,16.
 *   Surface 312 wide: #F6F9FD container, padding 16 · heading (preamble 10/10 + 4, title, message 40) +
 *     Close, gap 14 · 16 · Image slot 280 × 89 (radius 6) · 24 · 36px button. */
var VP_CLOSE = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18.3652 4.36321C18.7166 4.01174 19.2871 4.01174 19.6386 4.36321C19.9897 4.71472 19.9899 5.28531 19.6386 5.63665L13.2753 11.9999L19.6386 18.3632C19.9897 18.7147 19.9899 19.2853 19.6386 19.6367C19.2873 19.988 18.7167 19.9877 18.3652 19.6367L12.0019 13.2734L5.6386 19.6367C5.28726 19.988 4.71667 19.9877 4.36517 19.6367C4.01369 19.2852 4.01369 18.7147 4.36517 18.3632L10.7284 11.9999L4.36517 5.63665C4.01369 5.28518 4.01369 4.71469 4.36517 4.36321C4.71664 4.01174 5.28713 4.01174 5.6386 4.36321L12.0019 10.7265L18.3652 4.36321Z\" fill=\"#445C85\"/></svg>";
var _vpDemo = { Layout: "Centered", hasHeader: true, hasPreamble: true, hasSupportingContent: true, hasCloseButton: true };
window._vpDemo = _vpDemo;

function _vpRender(o) {
  var F = "font-family:\x27Proxima Soft\x27,system-ui;font-weight:700;", B = "font-family:\x27BarkAda\x27,system-ui;font-weight:500;";
  var title = function (align) { return "<div style=\"" + F + "font-size:22px;line-height:26px;color:#0A2757;text-align:" + align + ";\">Put the title here</div>"; };
  var button = function (w) { return "<div style=\"width:" + w + "px;height:36px;border-radius:99px;background:#005CE5;display:flex;align-items:center;justify-content:center;" + F + "font-size:16px;line-height:16px;letter-spacing:0.25px;color:#FFFFFF;\">Label</div>"; };
  var x = function (left, top) { return o.hasCloseButton ? "<div style=\"position:absolute;left:" + left + "px;top:" + top + "px;width:24px;height:24px;\">" + VP_CLOSE + "</div>" : ""; };
  var h;
  if (o.Layout === "Surface") {
    h = "<div style=\"width:312px;border-radius:6px;background:#FFFFFF;\"><div style=\"border-radius:6px;background:#F6F9FD;padding:16px;\">";
    h += "<div style=\"position:relative;display:flex;gap:14px;\"><div style=\"width:242px;\">";
    if (o.hasPreamble) h += "<div style=\"" + F + "font-size:10px;line-height:10px;letter-spacing:0.25px;color:#90A8D0;padding-bottom:4px;\">Preamble</div>";
    if (o.hasHeader) h += title("left");
    h += "<div style=\"" + B + "font-size:14px;line-height:20px;height:40px;color:#6780A9;\">Add description here.</div></div>";
    h += o.hasCloseButton ? "<div style=\"width:24px;height:24px;flex:none;\">" + VP_CLOSE + "</div>" : "";
    h += "</div><div style=\"height:16px;\"></div><div style=\"height:89px;border-radius:6px;\"></div><div style=\"height:24px;\"></div>" + button(280) + "</div></div>";
  } else {
    h = "<div style=\"position:relative;width:320px;border-radius:6px;background:#FFFFFF;\"><div style=\"height:89px;\"></div><div style=\"padding:24px;\">";
    h += "<div style=\"display:flex;flex-direction:column;gap:16px;padding-bottom:24px;\">";
    if (o.hasHeader) h += title("center");
    h += "<div style=\"" + B + "font-size:14px;line-height:20px;color:#6780A9;text-align:center;\">Add description here.<br>Add description here.</div>"; /* Figma wraps this placeholder onto two lines at 272px; the browser would fit it on one */
    if (o.hasSupportingContent) h += "<div style=\"height:40px;\"></div>";
    h += "</div>" + button(272) + "</div>" + x(284, 16) + "</div>";
  }
  return h;
}

function updateVisualPopupDemo() {
  var g = function (id) { return document.getElementById(id); };
  ["hasHeader", "hasPreamble", "hasSupportingContent", "hasCloseButton"].forEach(function (k) { var e = g("vp-demo-" + k); if (e) _vpDemo[k] = e.checked; });
  var l = g("vp-demo-Layout"); if (l) _vpDemo.Layout = l.value;
  /* As in Figma: hasPreamble exists only on Surface, hasSupportingContent only on Centered. */
  var pr = g("vp-demo-hasPreamble-row"), sr = g("vp-demo-hasSupportingContent-row");
  if (pr) pr.style.display = _vpDemo.Layout === "Surface" ? "" : "none";
  if (sr) sr.style.display = _vpDemo.Layout === "Centered" ? "" : "none";
  var el = g("vp-demo-preview"); if (el) el.innerHTML = _vpRender(_vpDemo);
}
window.updateVisualPopupDemo = updateVisualPopupDemo;

/* ── DEV code — component API, as on the Code tab ───────────────────── */
function buildSwiftSnippet(c) {
  var a = ["    layout: ." + c.Layout.toLowerCase()];
  if (c.hasHeader) a.push("    title: \"Put the title here\"");
  a.push("    message: \"Add description here.\"");
  if (c.Layout === "Surface" && c.hasPreamble) a.push("    preamble: \"Preamble\"");
  if (c.hasCloseButton) a.push("    onClose: { }");
  return "EBVisualPopup(\n" + a.join(",\n") + "\n) {\n    Image(\"popup-art\")\n} actions: {\n    EBButton(\"Label\") { }\n}";
}
function buildComposeSnippet(c) {
  var a = ["    layout = EBVisualPopupLayout." + c.Layout];
  if (c.hasHeader) a.push("    title = \"Put the title here\"");
  a.push("    message = \"Add description here.\"");
  if (c.Layout === "Surface" && c.hasPreamble) a.push("    preamble = \"Preamble\"");
  if (c.hasCloseButton) a.push("    onClose = { }");
  a.push("    image = { Image(painterResource(R.drawable.popup_art), null) }", "    actions = { EBButton(\"Label\", onClick = { }) }");
  return "EBVisualPopup(\n" + a.join(",\n") + "\n)";
}
function getSnippet(k, lang, card) { card = card || _vpDemo; return lang === "swift" ? buildSwiftSnippet(card) : buildComposeSnippet(card); }
window.getSnippet = getSnippet;

function _vpInit() { updateVisualPopupDemo(); }
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", _vpInit);
else _vpInit();
document.addEventListener("astro:page-load", _vpInit);
