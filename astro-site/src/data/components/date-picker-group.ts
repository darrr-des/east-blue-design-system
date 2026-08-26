import type { ComponentData, DemoControlSection } from '../types';

const datePickerGroupDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Type',
        prop: 'type',
        defaultValue: 'Date',
        options: [
          { value: 'Date', label: 'Date' },
          { value: 'Year', label: 'Year' },
          { value: 'Month', label: 'Month' },
        ],
      },
    ],
  },
];

export const datePickerGroup: ComponentData = {
  "meta": {
    "slug": "date-picker-group",
    "name": "Date Picker - Group",
    "node": "18431:2822",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18431-2822",
    "description": "The calendar surface that hosts the Day/Month/Year picker grids.",
    "badges": [
      {
        "kind": "remove",
        "label": "Remove"
      },
      {
        "kind": "na",
        "label": "Not Applicable"
      }
    ],
    "navGroup": "Date Picker",
    "verdict": {
      "kind": "remove",
      "title": "Superseded by Date Picker - Calendar",
      "text": "Superseded by <a href=\"/components/date-picker-calendar\">Date Picker - Calendar</a>. The calendar surface was rebuilt at node <code>6769:105110</code> and is now composed from <a href=\"/components/date-picker-cell\">Date Picker - Cell</a> and <a href=\"/components/date-picker-header\">Date Picker - Header</a> instances rather than redrawn. <code>Type</code> became <code>Mode = Day | Year | Month</code>, the chevrons are icon instances, and Month gained its missing chevron. Kept as a record of the assessment that drove the consolidation."
    }
  },
  "overview": {
    "inContextNote": "The group appears immediately below the Date Picker trigger when it enters State=Active. The three Type variants swap when the user taps the header (Date → Year → Month).",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"140\" height=\"120\" viewBox=\"0 0 140 120\" fill=\"none\">\n          <rect x=\"14\" y=\"8\" width=\"112\" height=\"14\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".25\"></rect>\n          <rect x=\"20\" y=\"13\" width=\"40\" height=\"4\" rx=\"1\" fill=\"currentColor\" opacity=\".18\"></rect>\n          <rect x=\"108\" y=\"11\" width=\"10\" height=\"8\" rx=\"1.5\" stroke=\"currentColor\" stroke-width=\".8\" opacity=\".3\"></rect>\n          <rect x=\"14\" y=\"28\" width=\"112\" height=\"84\" rx=\"4\" fill=\"currentColor\" opacity=\".03\" stroke=\"currentColor\" stroke-width=\".8\" stroke-opacity=\".25\"></rect>\n          <path d=\"M22 38l-2 2 2 2\" stroke=\"currentColor\" stroke-width=\".8\" stroke-linecap=\"round\" opacity=\".35\"></path>\n          <rect x=\"52\" y=\"37\" width=\"36\" height=\"4\" rx=\"1\" fill=\"currentColor\" opacity=\".3\"></rect>\n          <path d=\"M118 38l2 2-2 2\" stroke=\"currentColor\" stroke-width=\".8\" stroke-linecap=\"round\" opacity=\".35\"></path>\n          <g opacity=\".18\" fill=\"currentColor\" font-family=\"system-ui\" font-size=\"4\">\n            <text x=\"24\" y=\"52\">Su</text><text x=\"39\" y=\"52\">M</text><text x=\"53\" y=\"52\">T</text><text x=\"67\" y=\"52\">W</text><text x=\"80\" y=\"52\">Th</text><text x=\"95\" y=\"52\">F</text><text x=\"108\" y=\"52\">Sa</text>\n          </g>\n          <g opacity=\".2\" fill=\"currentColor\">\n            <circle cx=\"26\" cy=\"62\" r=\"1.5\"></circle><circle cx=\"40\" cy=\"62\" r=\"1.5\"></circle><circle cx=\"54\" cy=\"62\" r=\"1.5\"></circle><circle cx=\"68\" cy=\"62\" r=\"1.5\"></circle><circle cx=\"82\" cy=\"62\" r=\"1.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\".8\"></circle><circle cx=\"96\" cy=\"62\" r=\"1.5\"></circle><circle cx=\"110\" cy=\"62\" r=\"1.5\"></circle>\n            <circle cx=\"26\" cy=\"72\" r=\"1.5\"></circle><circle cx=\"40\" cy=\"72\" r=\"1.5\"></circle><circle cx=\"54\" cy=\"72\" r=\"1.5\"></circle><circle cx=\"68\" cy=\"72\" r=\"1.5\"></circle><circle cx=\"82\" cy=\"72\" r=\"1.5\"></circle><circle cx=\"96\" cy=\"72\" r=\"1.5\"></circle><circle cx=\"110\" cy=\"72\" r=\"1.5\"></circle>\n            <circle cx=\"26\" cy=\"82\" r=\"1.5\"></circle><circle cx=\"40\" cy=\"82\" r=\"1.5\"></circle><circle cx=\"54\" cy=\"82\" r=\"1.5\"></circle><circle cx=\"68\" cy=\"82\" r=\"1.5\"></circle><circle cx=\"82\" cy=\"82\" r=\"1.5\"></circle><circle cx=\"96\" cy=\"82\" r=\"1.5\"></circle><circle cx=\"110\" cy=\"82\" r=\"1.5\"></circle>\n            <circle cx=\"26\" cy=\"92\" r=\"1.5\"></circle><circle cx=\"40\" cy=\"92\" r=\"1.5\"></circle><circle cx=\"54\" cy=\"92\" r=\"1.5\"></circle><circle cx=\"68\" cy=\"92\" r=\"1.5\"></circle><circle cx=\"82\" cy=\"92\" r=\"1.5\"></circle><circle cx=\"96\" cy=\"92\" r=\"1.5\"></circle><circle cx=\"110\" cy=\"92\" r=\"1.5\"></circle>\n            <circle cx=\"26\" cy=\"102\" r=\"1.5\"></circle><circle cx=\"40\" cy=\"102\" r=\"1.5\"></circle><circle cx=\"54\" cy=\"102\" r=\"1.5\"></circle><circle cx=\"68\" cy=\"102\" r=\"1.5\"></circle><circle cx=\"82\" cy=\"102\" r=\"1.5\"></circle><circle cx=\"96\" cy=\"102\" r=\"1.5\"></circle><circle cx=\"110\" cy=\"102\" r=\"1.5\"></circle>\n          </g>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"dpg-demo-preview\"><div style=\"width:360px;background:#FFFFFF;border:1px solid #E5EBF4;border-radius:0 0 8px 8px;box-shadow:0 6px 12px -8px rgba(2,14,34,.16);padding:16px;box-sizing:border-box;font-family:'Proxima Soft', system-ui, sans-serif;\"><div style=\"display:flex;align-items:center;justify-content:space-between;width:100%;margin-bottom:8px;\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M14 7l-5 5 5 5\" stroke=\"#005CE5\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg><div style=\"font-weight:700;font-size:18px;line-height:18px;color:#0A2757;letter-spacing:.25px;\">Month / Year</div><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M10 7l5 5-5 5\" stroke=\"#005CE5\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div><div style=\"display:grid;grid-template-columns:repeat(7,1fr);gap:0;width:100%;margin-bottom:8px;\"><div style=\"width:32px;height:32px;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;color:#0A2757;font-weight:700;font-size:14px;line-height:14px;letter-spacing:.25px;\">Su</div><div style=\"width:32px;height:32px;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;color:#0A2757;font-weight:700;font-size:14px;line-height:14px;letter-spacing:.25px;\">M</div><div style=\"width:32px;height:32px;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;color:#0A2757;font-weight:700;font-size:14px;line-height:14px;letter-spacing:.25px;\">T</div><div style=\"width:32px;height:32px;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;color:#0A2757;font-weight:700;font-size:14px;line-height:14px;letter-spacing:.25px;\">W</div><div style=\"width:32px;height:32px;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;color:#0A2757;font-weight:700;font-size:14px;line-height:14px;letter-spacing:.25px;\">Th</div><div style=\"width:32px;height:32px;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;color:#0A2757;font-weight:700;font-size:14px;line-height:14px;letter-spacing:.25px;\">F</div><div style=\"width:32px;height:32px;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;color:#0A2757;font-weight:700;font-size:14px;line-height:14px;letter-spacing:.25px;\">Sa</div></div><div style=\"display:grid;grid-template-columns:repeat(7,1fr);gap:0;width:100%;margin-bottom:8px;\"><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#C2CFE5;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">1</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">2</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">3</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">4</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:1.5px solid #005CE5;color:#005CE5;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">5</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">6</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">7</div></div><div style=\"display:grid;grid-template-columns:repeat(7,1fr);gap:0;width:100%;margin-bottom:8px;\"><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">8</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">9</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">10</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">11</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">12</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">13</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">14</div></div><div style=\"display:grid;grid-template-columns:repeat(7,1fr);gap:0;width:100%;margin-bottom:8px;\"><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">15</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">16</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">17</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">18</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">19</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">20</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">21</div></div><div style=\"display:grid;grid-template-columns:repeat(7,1fr);gap:0;width:100%;margin-bottom:8px;\"><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">22</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">23</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">24</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">25</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">26</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">27</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">28</div></div><div style=\"display:grid;grid-template-columns:repeat(7,1fr);gap:0;width:100%;margin-bottom:0;\"><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">29</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">30</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#0A2757;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">31</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#C2CFE5;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">1</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#C2CFE5;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">2</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#C2CFE5;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">3</div><div style=\"width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:none;color:#C2CFE5;font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;\">4</div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Type</span><select class=\"demo-panel-select\" onchange=\"_dpgDemo.type=this.value;updateDatePickerGroupDemo()\"><option value=\"Date\">Date</option><option value=\"Year\">Year</option><option value=\"Month\">Month</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "warn",
        "note": "The surface is shared across 3 variants but cannot be reused outside the Date Picker family — no slot, no header customization, no way to change grid dimensions. Re-implementing the same card pattern for any other calendar-like grid (e.g. event picker) means rebuilding it from scratch."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Carries bg, border, radius, shadow, and header tokens — but chevron glyphs are raster images referenced by URL, not vector icon instances. The Year variant also overlays a fake drawn <code>Scrollbar</code> rectangle instead of using a scrollable container."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "<code>Type = Date | Year | Month</code> is misleading — \"Date\" means day-grid view. Native convention is <code>mode: day | month | year</code>. Month variant has only a Next chevron (no Prev), asymmetric from Date and Year. Day cells use day-of-week layer names (<code>Sunday</code>...<code>Saturday</code>) as semantic roles."
      },
      {
        "name": "Composable",
        "rating": "fail",
        "note": "Not composable into a native picker. Both SwiftUI <code>DatePicker</code> and Compose <code>DatePickerDialog</code> render their own calendar surface internally — this Figma component has no 1:1 native primitive. It also is currently nested inline inside the trigger (see Date Picker), not exposed as a standalone overlay."
      }
    ],
    "behavior": [
      {
        "state": "Day grid",
        "ios": "yes",
        "android": "yes",
        "property": "Type=Date",
        "notes": "6 rows × 7 cols. Weekday header (Su/M/T/W/Th/F/Sa). Today shown with 1.5px blue ring. Prev/next month days dimmed."
      },
      {
        "state": "Year grid",
        "ios": "yes",
        "android": "yes",
        "property": "Type=Year",
        "notes": "3-col grid with overflow-clip and a drawn \"Scrollbar\" decoration. Selected year shown with 1px blue ring + blue label."
      },
      {
        "state": "Month grid",
        "ios": "yes",
        "android": "yes",
        "property": "Type=Month",
        "notes": "3-col grid with all 12 months. Missing Prev chevron — only Next is drawn. Selected month shown with 1px blue ring."
      },
      {
        "state": "Cell: Today / Selected",
        "ios": "yes",
        "android": "yes",
        "property": "Date Picker - Item state",
        "notes": "1.5px blue ring on day cells; 1px blue ring on year/month cells. Native pickers fill the cell with tint instead of ringing it."
      },
      {
        "state": "Cell: Pressed / Hover / Focus",
        "ios": "no",
        "android": "no",
        "property": "—",
        "notes": "Missing. Native pickers provide these automatically; a DS wrapper only needs to tint them."
      },
      {
        "state": "In-range / Range start / Range end",
        "ios": "no",
        "android": "no",
        "property": "—",
        "notes": "Not defined. Both platforms support date-range selection; the DS has no tokens or visuals for it."
      },
      {
        "state": "Disabled cell",
        "ios": "no",
        "android": "no",
        "property": "—",
        "notes": "No business-rule disabled state (e.g. minDate/maxDate). Only the \"prev/next month\" greyed variant exists."
      },
      {
        "state": "Keyboard navigation / focus ring",
        "ios": "no",
        "android": "no",
        "property": "—",
        "notes": "No focus styling. Native pickers handle keyboard+TalkBack/VoiceOver by default; the DS needs to preserve that."
      }
    ],
    "resolved": [],
    "open": [],
    "recommendations": []
  },
  "style": {
    "heading": "Types",
    "specCards": [
      {
        "cardKey": "default",
        "demoKey": "default",
        "demoControls": datePickerGroupDemoControls,
        "title": "Default",
        "node": "12879:49310",
        "description": "Calendar surface. Flip the Type control between Date / Year / Month grids.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type", "value": "Date", "prop": "type" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "date-picker/month-header/color/bg" },
              { "key": "Border", "value": "#E5EBF4", "token": "date-picker/month-header/color/border" },
              { "key": "Header label", "value": "#0A2757", "token": "date-picker/month-header/color/label" },
              { "key": "Header icon", "value": "#005CE5", "token": "date-picker/month-header/color/icon" },
              { "key": "Week-day label", "value": "#0A2757", "token": "date-picker/week-header/color/label",
                "variants": { "type:Year": { "hide": true }, "type:Month": { "hide": true } }
              },
              { "key": "Cell label", "value": "#0A2757", "token": "date-picker/day/color/unselected/label" },
              { "key": "Selected accent", "value": "#005CE5", "token": "border/color-border-primary" },
              { "key": "Dimmed label", "value": "#C2CFE5", "token": "text/color-text-disabled",
                "variants": { "type:Year": { "hide": true }, "type:Month": { "hide": true } }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Surface width", "value": "328", "mono": true },
              { "key": "Header height", "value": "48", "mono": true },
              { "key": "Cell size", "value": "32 × 32", "mono": true,
                "variants": {
                  "type:Year":  { "value": "100 × 32" },
                  "type:Month": { "value": "100 × 32" }
                }
              },
              { "key": "Border radius", "value": "8", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Header style", "value": "Primary/Label/Large", "mono": true },
              { "key": "Header font", "value": "Proxima Soft Bold · 18 / 18 · +0.25", "mono": true },
              { "key": "Cell style", "value": "Primary/Label/Light/Small", "mono": true },
              { "key": "Cell font", "value": "Proxima Soft Semibold · 14 / 14 · +0.25", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDatePickerGroup</span><span class=\"syn-punc\">(</span>$selectedDate<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebView</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.day</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePickerGroup</span><span class=\"syn-punc\">(</span>\n    date <span class=\"syn-eq\">=</span> selectedDate<span class=\"syn-punc\">,</span>\n    view <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBPickerView</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Day</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"dpg-spec-preview\"></div>"
      }

    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Panel-level colors are shared across all three variants. Cell-level colors belong to Date Picker - Item and Month/Year Picker - Item — shown here for cross-reference.",
        "columns": [
          "DEFAULT",
          "SELECTED / TODAY",
          "DISABLED"
        ],
        "rows": [
          {
            "role": "Panel bg",
            "token": "main/date-picker/month-header/color/bg",
            "values": [
              "#FFFFFF",
              "–",
              "–"
            ]
          },
          {
            "role": "Panel border",
            "token": "main/date-picker/month-header/color/border",
            "values": [
              "#E5EBF4 (1px)",
              "–",
              "–"
            ]
          },
          {
            "role": "Panel shadow",
            "token": "elevation/app/shadow",
            "values": [
              "0 6px 12px -8 rgba(2,14,34,.16)",
              "–",
              "–"
            ]
          },
          {
            "role": "Header label",
            "token": "main/date-picker/month-header/color/label",
            "values": [
              "#0A2757",
              "–",
              "–"
            ]
          },
          {
            "role": "Header chevron",
            "token": "main/date-picker/month-header/color/icon",
            "values": [
              "#005CE5",
              "–",
              "–"
            ]
          },
          {
            "role": "Weekday bg",
            "token": "main/date-picker/week-header/color/bg",
            "values": [
              "#FFFFFF",
              "–",
              "–"
            ]
          },
          {
            "role": "Weekday label",
            "token": "main/date-picker/week-header/color/label",
            "values": [
              "#0A2757",
              "–",
              "–"
            ]
          },
          {
            "role": "Day cell bg",
            "token": "main/date-picker/day/color/unselected/bg",
            "values": [
              "#FFFFFF",
              "#FFFFFF (ring)",
              "#FFFFFF"
            ]
          },
          {
            "role": "Day cell label",
            "token": "main/date-picker/day/color/unselected/label",
            "values": [
              "#0A2757",
              "#005CE5",
              "#C2CFE5"
            ]
          },
          {
            "role": "Today ring (day)",
            "token": "border/color-border-primary",
            "values": [
              "–",
              "#005CE5 (1.5px)",
              "–"
            ]
          },
          {
            "role": "Selected ring (month/year)",
            "token": "border/color-border-primary",
            "values": [
              "–",
              "#005CE5 (1px)",
              "–"
            ]
          },
          {
            "role": "Prev/next-month day label",
            "token": "text/color-text-disabled",
            "values": [
              "–",
              "–",
              "#C2CFE5"
            ]
          },
          {
            "role": "Scrollbar overlay (Year)",
            "token": "bg/color-bg-inverse (10% opacity)",
            "values": [
              "#0A2757 @ 10%",
              "–",
              "–"
            ]
          }
        ]
      },
      {
        "title": "Layout",
        "columns": [],
        "rows": [
          {
            "role": "Panel width",
            "token": "360px",
            "values": []
          },
          {
            "role": "Panel height",
            "token": "296px (fixed on Year/Month; Hug on Date)",
            "values": []
          },
          {
            "role": "Panel padding",
            "token": "16px all sides (space/space-16)",
            "values": []
          },
          {
            "role": "Panel corner radius",
            "token": "0 top-left/top-right, 8px bottom-left/bottom-right",
            "values": []
          },
          {
            "role": "Row gap",
            "token": "8px (space/space-8)",
            "values": []
          },
          {
            "role": "Header height",
            "token": "24px (chevron size sets it)",
            "values": []
          },
          {
            "role": "Chevron size",
            "token": "24 × 24",
            "values": []
          },
          {
            "role": "Day cell size",
            "token": "32 × 32 (pill radius 30px)",
            "values": []
          },
          {
            "role": "Day cell padding",
            "token": "10px top, 12px bottom, 6px horizontal",
            "values": []
          },
          {
            "role": "Month/Year cell",
            "token": "flex-1 × 32, 8px radius (radius/radius-3)",
            "values": []
          },
          {
            "role": "Month/Year cell padding",
            "token": "10px top, 8px bottom, 12px horizontal",
            "values": []
          },
          {
            "role": "Month/Year grid gap",
            "token": "16px horizontal",
            "values": []
          },
          {
            "role": "Scrollbar overlay (Year)",
            "token": "4 × 80, 99px pill, 10% opacity",
            "values": []
          }
        ]
      },
      {
        "title": "Typography",
        "columns": [
          "Font",
          "Size",
          "Tracking",
          "Line-height"
        ],
        "rows": [
          {
            "role": "Header label (Month/Year, Year, Year)",
            "token": "Primary/Label/Large",
            "values": [
              "Proxima Soft Bold",
              "18px",
              "0.25px",
              "18px"
            ]
          },
          {
            "role": "Weekday label",
            "token": "Primary/Label/Small",
            "values": [
              "Proxima Soft Bold",
              "14px",
              "0.25px",
              "14px"
            ]
          },
          {
            "role": "Day cell label",
            "token": "Primary/Label/Light/Small",
            "values": [
              "Proxima Soft Semibold",
              "14px",
              "0.25px",
              "14px"
            ]
          },
          {
            "role": "Month / Year cell label",
            "token": "Primary/Label/Light/Small",
            "values": [
              "Proxima Soft Semibold",
              "14px",
              "0.25px",
              "14px"
            ]
          }
        ]
      }
    ]
  },
  "code": {
    "installation": {
      "planned": false,
      "blocks": []
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "Type = Date",
          "swift": "displayedComponents: .date (graphical style, default view)",
          "compose": "DisplayMode.Picker"
        },
        {
          "figma": "Type = Year",
          "swift": "(tap header label in .graphical style)",
          "compose": "DisplayMode.Input / year header tap"
        },
        {
          "figma": "Type = Month",
          "swift": "(tap month header in .graphical style)",
          "compose": "(year-cluster header tap)"
        },
        {
          "figma": "Header label \"Month / Year\"",
          "swift": "header automatically rendered",
          "compose": "headline slot"
        },
        {
          "figma": "Prev / Next chevrons",
          "swift": "automatic on .graphical",
          "compose": "automatic on DatePicker"
        },
        {
          "figma": "Day cell",
          "swift": "cell styling via tint / accentColor",
          "compose": "colors.dayContentColor, selectedDayContainerColor"
        },
        {
          "figma": "Year / Month cell",
          "swift": "styled via tint",
          "compose": "colors.yearContentColor, selectedYearContainerColor"
        },
        {
          "figma": "Scrollbar overlay (Year)",
          "swift": "—",
          "compose": "—"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/DatePicker/EBDatePickerPanel.swift",
        "compose": "android/components/datepicker/EBDatePickerPanel.kt"
      }
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Calendar role / traits",
        "ios": "Automatic via <code>DatePicker</code> (<code>.isDatePicker</code> trait)",
        "android": "Automatic via Material 3 <code>DatePicker</code> (<code>Role.DatePicker</code>)"
      },
      {
        "requirement": "Keyboard navigation",
        "ios": "Arrow keys move between day cells on iPad / hw keyboard",
        "android": "D-Pad + hw keyboard navigation by default"
      },
      {
        "requirement": "Focus ring",
        "ios": "System focus ring on focused cell",
        "android": "System focus indicator on focused cell"
      },
      {
        "requirement": "Screen reader label",
        "ios": "VoiceOver announces day-of-week, date, month, and Selected / Today",
        "android": "TalkBack announces full date + state"
      },
      {
        "requirement": "Dynamic Type / font scaling",
        "ios": "Automatic",
        "android": "Automatic"
      },
      {
        "requirement": "Locale / first-day-of-week",
        "ios": "<code>Calendar.current.firstWeekday</code>",
        "android": "<code>Locale.getDefault().firstDayOfWeek</code>"
      },
      {
        "requirement": "minDate / maxDate",
        "ios": "<code>in: Date...Date</code> range parameter",
        "android": "<code>selectableDates</code> / <code>yearRange</code>"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Render the panel through SwiftUI's DatePicker(.graphical) or Compose's Material 3 DatePicker. Apply DS tokens via .tint / colors = ....",
        "dontText": "Don't hand-draw the calendar grid, chevrons, or month/year pickers. You'll reimplement leap-year logic, locale handling, VoiceOver/TalkBack, and keyboard support that the native pickers provide for free."
      },
      {
        "doText": "Use the Figma spec as a visual target for the tokenized wrapper — colors, corner radius, shadow, and ring thickness.",
        "dontText": "Don't treat the Figma layout as a 1:1 blueprint — the native picker's internal spacing and cell sizes may not match exactly, and that's fine."
      },
      {
        "doText": "Pass an explicit in: Date... range to enforce minDate/maxDate and rely on the platform's disabled styling.",
        "dontText": "Don't style disabled cells manually in consumer code — let the native picker dim them consistently with OS conventions."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Day cells named by weekday (<code>Sunday</code>, <code>Monday</code>...). Weekday header rows re-use Date Picker - Item rather than a dedicated weekday cell. Scrollbar drawn as a geometry layer."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>Type = Date | Year | Month</code> is misleading (\"Date\" means day-grid). Rename to <code>mode = day | month | year</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Most colors, spacing, radius, and shadow values are token-bound. Missing a dedicated <code>main/date-picker/group/*</code> scope — panel reuses <code>month-header</code> tokens as a proxy."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Both platforms own the full calendar surface. Scrollbar drawn as geometry, Month missing Prev chevron — neither expressible natively. Recommend wrapping native pickers."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Only Today (day) and Selected (year/month) exist. Missing Pressed, Hover/Focus, In-range, Range-start, Range-end, Business-rule Disabled."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Chevrons are raster <code>shape_full</code> image references across all 3 variants. Replace with vector icon instances."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked by C1/C2/C4/C5/C6 and by the native-wrapper direction. Map only once the Picker Cell family is unified and the surface is confirmed as a wrapper, not a redraw."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Rename <code>Type</code> to <code>mode</code> with values <code>day | month | year</code> to match native conventions."
      },
      {
        "aspect": "Cell primitive unification",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Day / Month / Year cells should become one Picker Cell with <code>kind</code> + <code>state</code> axes before mapping."
      },
      {
        "aspect": "Native component file",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "<code>EBDatePickerPanel</code> wrapper to be created around SwiftUI <code>DatePicker(.graphical)</code> / Compose <code>DatePicker</code>."
      },
      {
        "aspect": "Raster chevrons",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Replace with vector icon instances before mapping — raster URLs are not representable in native code."
      },
      {
        "aspect": "Recommendation",
        "status": "empty",
        "statusLabel": "Consolidate",
        "notes": "Don't ship as a drawn component. Wrap native pickers and tokenize colors."
      }
    ],
    "variants": {
      "total": 3,
      "description": "Single axis. 3 variants on <code>Type</code>. All share the 360×296 card frame.",
      "columns": [
        "Type",
        "Dimensions",
        "Header",
        "Grid",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "Date",
            "360 × 296",
            "Prev · \"Month / Year\" · Next",
            "7 × 7 (weekdays + 6 day rows)",
            "12879:49310"
          ]
        },
        {
          "cells": [
            "Year",
            "360 × 296",
            "Prev · \"Year\" · Next",
            "3 × 7 visible + Scrollbar overlay",
            "18431:2825"
          ]
        },
        {
          "cells": [
            "Month",
            "360 × 296",
            "(empty) · \"Year\" · Next",
            "3 × 4 (12 months)",
            "18431:2826"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "1.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 18431:2822",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 3 variants (Date, Year, Month) at 360×296. Shared header, bg, border, shadow. All panel-level colors and spacing bound to tokens.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Day cells named by weekday</strong> — Layers named <code>Sunday</code>, <code>Monday</code>...<code>Saturday</code> instead of index/role. Weekday is data, not layer identity.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong><code>Type</code> axis misleading</strong> — \"Date\" means day-grid view. Rename to <code>mode = day | month | year</code> to match SwiftUI / Material 3 terminology.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Year variant: drawn Scrollbar decoration</strong> — Node <code>18414:6277</code> is a 4×80 pill absolutely positioned over the Year grid. Native pickers render the scroll indicator automatically; this decoration misrepresents scroll state.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4 Open"
          }
        },
        {
          "body": "<strong>Month variant: Prev chevron missing</strong> — Header has only the Next chevron. Asymmetric with Date and Year.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4 Open"
          }
        },
        {
          "body": "<strong>No native primitive for the drawn surface</strong> — SwiftUI <code>DatePicker(.graphical)</code> and Material 3 <code>DatePicker</code> own the full calendar. Recommend wrapping and tokenizing, not redrawing.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4 Open"
          }
        },
        {
          "body": "<strong>Cell states missing</strong> — No Pressed, Hover/Focus, In-range, Range-start, Range-end, or business-rule Disabled coverage. Only Today (day) and Selected (year/month) exist.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Chevrons are raster glyphs</strong> — Both Prev and Next in every variant reference <code>shape_full</code> image URLs. Replace with vector icon instances.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>No dedicated panel token scope</strong> — Panel bg/border reuse <code>main/date-picker/month-header/*</code>. Add a <code>main/date-picker/group/*</code> scope.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Code Connect not registered</strong> — Blocked by the native-wrapper direction and by the pending Picker Cell unification.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
