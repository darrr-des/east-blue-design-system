/* Inline Message — Overview live preview + DEV code.
 * Rebuilt from Figma component set 28953:32141 (GCash DS Sticker Sheets v2).
 * Every size, colour and font below is read off the set — nothing derived.
 *
 * Panel:
 *   hasReferenceNumber  ◉ boolean · true
 *   hasBodyContent      ◉ boolean · true   (shows ⤷ BodySlot)
 *   hasDownload         ◉ boolean · true
 *   ⤷ BodySlot / ⤷ IllustrationSlot  slots — no control
 *   Type                Success · Loading · Error · Neutral
 *
 * Figma ships both slots holding the Slot Block placeholder, and the set has no
 * fill of its own — the preview draws exactly that.
 */

/* #title colour per Type — the only thing Type changes */
var IM_TITLE = {
  Success: "#005CE5",  /* text/color-text-primary */
  Loading: "#CA970C",  /* text/color-text-warning */
  Error:   "#D61B2C",  /* text/color-text-error */
  Neutral: "#0A2757"   /* text/color-text */
};
var IM_SLOT = "#9F3DFB";
var IM_DOWNLOAD = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.00037 4.09961C7.49739 4.09961 7.9007 4.50299 7.90076 5C7.90076 5.49706 7.49742 5.90039 7.00037 5.90039H6.00037C5.39289 5.90039 4.90081 6.39253 4.90076 7V16C4.90076 17.1598 5.84057 18.0996 7.00037 18.0996H17.0004C18.1602 18.0996 19.1 17.1598 19.1 16V7C19.0999 6.39253 18.6078 5.90039 18.0004 5.90039H17.0004C16.5033 5.90039 16.1 5.49706 16.1 5C16.1 4.50299 16.5033 4.09961 17.0004 4.09961H18.0004C19.602 4.09961 20.9007 5.39842 20.9008 7V16C20.9008 18.1539 19.1543 19.9004 17.0004 19.9004H7.00037C4.84646 19.9004 3.09998 18.1539 3.09998 16V7C3.10003 5.39842 4.39877 4.09961 6.00037 4.09961H7.00037ZM11.9994 4.09961C12.4964 4.09961 12.8998 4.50294 12.8998 5V12.8262L14.3627 11.3633C14.7141 11.0119 15.2846 11.012 15.6361 11.3633C15.9876 11.7148 15.9876 12.2852 15.6361 12.6367L12.6361 15.6367C12.2846 15.988 11.7141 15.9881 11.3627 15.6367L8.36267 12.6367C8.01146 12.2853 8.01146 11.7147 8.36267 11.3633C8.71408 11.0119 9.28462 11.012 9.63611 11.3633L11.099 12.8262V5C11.099 4.50307 11.5025 4.09982 11.9994 4.09961Z\" fill=\"#005CE5\"/></svg>";

function _imSlotBlock(w, h, big) {
  var s = "<div style=\"box-sizing:border-box;width:" + w + "px;height:" + h + "px;border-radius:4px;border:1px dashed " + IM_SLOT +
          ";background:rgba(159,61,251,0.09);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px 8px;\">";
  if (big) {
    s += "<div style=\"font-family:'Proxima Soft',system-ui;font-weight:700;font-size:14px;line-height:14px;letter-spacing:0.25px;color:" + IM_SLOT + ";\">Remove &amp; Insert Content here<span style=\"font-size:12px;\">&nbsp;&nbsp;&nbsp;⤵</span></div>";
    s += "<div style=\"font-family:'BarkAda',system-ui;font-weight:500;font-size:8px;line-height:12px;color:rgba(159,61,251,0.62);\">Remove this placeholder when you insert custom content.</div>";
  } else {
    s += "<span style=\"font-size:12px;line-height:20px;color:" + IM_SLOT + ";\">⤵</span>";
  }
  return s + "</div>";
}

function _imRender(o) {
  var h = "<div style=\"position:relative;width:360px;border-radius:12px;overflow:hidden;\">";
  /* Content — padding 48 / 0 / 24, gap 16 */
  h += "<div style=\"display:flex;flex-direction:column;align-items:center;gap:16px;padding:48px 0 24px;\">";
  /* ReceiptStatus — padding 0 16, gap 24: ⤷ IllustrationSlot 106 + #title */
  h += "<div style=\"display:flex;flex-direction:column;align-items:center;gap:24px;padding:0 16px;width:100%;box-sizing:border-box;\">";
  h += _imSlotBlock(106, 106, false);
  h += "<div style=\"width:100%;text-align:center;font-family:'Proxima Soft',system-ui;font-weight:700;font-size:22px;line-height:26px;color:" + IM_TITLE[o.Type] + ";\">Add your label here</div>";
  h += "</div>";
  /* Description — padding 0 24 */
  h += "<div style=\"padding:0 24px;text-align:center;font-family:'BarkAda',system-ui;font-weight:500;font-size:14px;line-height:20px;color:#445C85;\">Add your description here.<br>This is just a filler sentence.</div>";
  h += "</div>";
  /* Download Small — 24 × 24 at x 318, y 16 */
  if (o.hasDownload) h += "<div style=\"position:absolute;left:318px;top:16px;width:24px;height:24px;\">" + IM_DOWNLOAD + "</div>";
  /* ⤷ BodySlot — 1px top border, drop shadow 0 1 3 #E8EEF2 @ 79% */
  if (o.hasBodyContent) h += "<div style=\"border-top:1px solid #E5EBF4;box-shadow:0 1px 3px rgba(232,238,242,0.79);\">" + _imSlotBlock(360, 117, true) + "</div>";
  /* ReferenceNumber — 1px top border, padding 24, gap 4 */
  if (o.hasReferenceNumber) {
    h += "<div style=\"border-top:1px solid #E5EBF4;padding:24px 0;display:flex;justify-content:center;align-items:center;gap:4px;font-family:'Proxima Soft',system-ui;letter-spacing:0.25px;\">";
    h += "<span style=\"font-weight:600;font-size:16px;line-height:16px;color:#90A8D0;\">Reference no.</span>";
    h += "<span style=\"font-weight:700;font-size:18px;line-height:18px;color:#0A2757;\">1234567890</span></div>";
  }
  return h + "</div>";
}

/* ── Overview tab live preview ──────────────────────────────────────── */
var _imDemo = { hasReferenceNumber: true, hasBodyContent: true, hasDownload: true, Type: "Success" };
window._imDemo = _imDemo;

function updateInlineMessageDemo() {
  var on = function (id, k) { var e = document.getElementById(id); if (e) _imDemo[k] = e.checked; };
  on("im-demo-ref", "hasReferenceNumber"); on("im-demo-body", "hasBodyContent"); on("im-demo-download", "hasDownload");
  var t = document.getElementById("im-demo-type"); if (t) _imDemo.Type = t.value;
  var el = document.getElementById("im-demo-preview");
  if (el) el.innerHTML = _imRender(_imDemo);
}
window.updateInlineMessageDemo = updateInlineMessageDemo;

/* ── DEV code — component API, as on the Code tab ───────────────────── */
function buildSwiftSnippet(card) {
  var args = ["    title: \"Add your label here\"", "    description: \"Add your description here.\""];
  if (card.hasReferenceNumber) args.push("    referenceNumber: \"1234567890\"");
  if (card.hasDownload) args.push("    onDownload: { }");
  var lines = ["EBInlineMessage("].concat(args.join(",\n")).concat([card.hasBodyContent ? ") {" : ")"]);
  if (card.hasBodyContent) lines.push("    // ⤷ BodySlot content", "}");
  lines.push(".ebType(." + card.Type.toLowerCase() + ")");
  return lines.join("\n");
}

function buildComposeSnippet(card) {
  var args = ["    type = EBInlineMessageType." + card.Type, "    title = \"Add your label here\"", "    description = \"Add your description here.\""];
  if (card.hasReferenceNumber) args.push("    referenceNumber = \"1234567890\"");
  if (card.hasDownload) args.push("    onDownload = { }");
  var lines = ["EBInlineMessage("].concat(args.join(",\n")).concat([card.hasBodyContent ? ") {" : ")"]);
  if (card.hasBodyContent) lines.push("    // ⤷ BodySlot content", "}");
  return lines.join("\n");
}

function getSnippet(cardStyle, lang, card) {
  card = card || _imDemo;
  return lang === "swift" ? buildSwiftSnippet(card) : buildComposeSnippet(card);
}
window.getSnippet = getSnippet;

/* ── First paint ────────────────────────────────────────────────────── */
function _imInit() { updateInlineMessageDemo(); }
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", _imInit);
else _imInit();
document.addEventListener("astro:page-load", _imInit);
