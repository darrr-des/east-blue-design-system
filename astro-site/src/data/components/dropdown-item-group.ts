import type { ComponentData, DemoControlSection } from '../types';
import { buildColorsTable } from './_helpers';

/* Demo controls for the Style tab's single spec card. Both axes shape the
   slot's default content rather than being applied to whatever fills it —
   see the resolved list for why that is a Figma constraint. */
const selectGroupControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Density',
        prop: 'density',
        control: 'select' as const,
        defaultValue: 'compact',
        options: [
          { value: 'compact', label: 'Compact' },
          { value: 'default', label: 'Default' },
          { value: 'comfortable', label: 'Comfortable' }
        ]
      }
    ]
  }
];

export const dropdownItemGroup: ComponentData = {
  "meta": {
    "slug": "dropdown-item-group",
    "name": "Select Group",
    "node": "7947:111630",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=7947-111630",
    "description": "The menu surface a Select opens — a rounded card wrapping a slot of Select Items, with optional dividers between them.",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "ready",
        "label": "Ready"
      }
    ],
    "navGroup": "Select",
    "verdict": {
      "kind": "keep",
      "title": "Keep — the cleanup its own verdict listed is done",
      "text": "The previous pass had already turned this from a hardcoded preview artifact into a genuine slot-based container, and withdrew a Consolidate verdict in the process. What it left behind was a list of cleanup: a <code>MIddle Inset</code> typo, a vestigial <code>Dropdown Item - Last</code> name, hidden 366px leftovers, and a Scrollbar frame. The first three are gone. The Scrollbar stays, confirmed as intentional. This pass also joined the property and its values to <code>BorderType = MiddleInset | FullWidth | None</code> and named the slot <code>⤷ SelectionSlot</code>. Nothing is outstanding on the component itself; Code Connect stays open because the native library does not exist yet."
    }
  },
  "overview": {
    "inContextNote": "The surface that appears under a Select when it expands. On its own it is never shown — it is either filled by a Select or filled by hand with Select Items.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"sgroup-demo-preview\"><div class=\"eb-preview-sgroup eb-preview-sgroup--middleinset eb-preview-sgroup--compact\"><div class=\"eb-preview-sgroup__row eb-preview-sgroup__row--selected\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">BorderType</span><select id=\"sgroup-ctrl-border\" class=\"demo-panel-select\" onchange=\"_sgroupUpdate()\"><option value=\"middleinset\" selected=\"\">MiddleInset</option><option value=\"fullwidth\">FullWidth</option><option value=\"none\">None</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Density</span><select id=\"sgroup-ctrl-density\" class=\"demo-panel-select\" onchange=\"_sgroupUpdate()\"><option value=\"compact\" selected=\"\">Compact</option><option value=\"default\">Default</option><option value=\"comfortable\">Comfortable</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "One surface for every Select in the product, and usable on its own wherever a list of options needs a card around it."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns the card — the white fill, the hairline, the 6px radius and the padding around the rows. It does not draw the rows themselves."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "<code>BorderType</code> and its values are joined after this pass, the <code>MIddle Inset</code> typo is gone, and the slot carries the family's <code>⤷</code> prefix as <code>⤷ SelectionSlot</code>."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "A real Figma <code>SLOT</code> filled with <a href=\"/components/dropdown-item\">Select Item</a> instances, and consumed as a whole by <a href=\"/components/dropdown\">Select</a>. What it cannot do is apply its own properties to substituted content — see the resolved list."
      }
    ],
    "behavior": [
      {
        "state": "BorderType=MiddleInset",
        "ios": "na",
        "android": "na",
        "property": "inset dividers",
        "notes": "Dividers sit between rows, inset from both edges. The default the component ships with."
      },
      {
        "state": "BorderType=FullWidth",
        "ios": "na",
        "android": "na",
        "property": "edge-to-edge dividers",
        "notes": "Same dividers, running the full width of the card."
      },
      {
        "state": "BorderType=None",
        "ios": "na",
        "android": "na",
        "property": "no dividers",
        "notes": "The divider nodes are absent entirely, which is why these variants are 24 shorter than their bordered siblings."
      },
      {
        "state": "Density",
        "ios": "na",
        "android": "na",
        "property": "312 / 368 / 424",
        "notes": "Sets the row height of the Select Items in the default content — 40, 48 and 56 respectively — which is what drives the card's height."
      },
      {
        "state": "⤷ SelectionSlot",
        "ios": "na",
        "android": "na",
        "property": "7 rows by default",
        "notes": "Ships with seven Select Items and a hidden Label. Substituted content replaces all of it, dividers included."
      }
    ],
    "resolved": [
      {
        "headline": "The MIddle Inset typo is gone.",
        "body": "The value carried a capital I in the middle of the word. It is now <code>MiddleInset</code> — and joined at the same time, so the property reads <code>BorderType = MiddleInset | FullWidth | None</code>.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The vestigial Dropdown Item - Last name is gone.",
        "body": "The final row in the slot was still called <code>Dropdown Item - Last</code>, left over from before the Dropdown to Select rename — and confusingly its instance had been renamed while the master had not, so the two disagreed depending on where you looked. It is now simply <code>Select Item</code>: seven rows with six dividers between them, and no trailing divider to suppress.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The hidden 366px leftovers are gone.",
        "body": "Five stale <code>Select Item</code> instances sat in the slot at 366 × 52 with no children, all stacked at a single coordinate. They were invisible but shipped inside every variant. Removed.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The slot is named for what belongs in it.",
        "body": "It was <code>Slot</code> — the arrow prefix arrived first, then the name. <code>⤷ SelectionSlot</code> now says what the container is for, rather than just marking it as a slot.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Both properties shape the default content rather than being applied to the slot.",
        "body": "Each of the nine variants contains its own hand-placed rows: <code>MiddleInset</code> and <code>FullWidth</code> interleave six <code>Horizontal / Divider</code> siblings between seven Select Items, and <code>None</code> simply has no divider nodes at all. So a consumer who fills the slot with their own rows loses both the dividers and the density, because those lived in the default content they replaced. This is the same Figma limit the Slider hit — a component property cannot reach into a slot — and it is understood and already instructed to designers. Recorded here because natively both are list-level properties applied to whatever rows the list holds, which is a genuine divergence a developer needs told rather than left to infer.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "The hidden Label is a subsection header.",
        "body": "A 320 × 28 instance at the top of the slot, hidden in all nine variants. Confirmed as intentional: it acts as a divider or subsection heading for grouped option lists, and stays hidden by default because most lists are flat.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The Scrollbar frame stays.",
        "body": "A hand-drawn 12 × full-height rectangle inside the slot, hidden. Native platforms render their own scroll indicator, so this has no counterpart in code — kept deliberately as a design-time affordance, consistent with how the same call was made elsewhere in the system.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — the native library does not exist yet, so there is nothing to map onto. The component side is ready: <code>BorderType</code>, <code>Density</code> and <code>⤷ SelectionSlot</code> all map one to one, with the caveat that the first two are list-level properties natively rather than variants of the default content.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Pass the Divider component's name upstream.",
        "body": "The dividers are instances of a component published as <code>Horizontal / Divider</code>. Two things are off, neither of them this component's to fix. The spaces around the slash are inconsistent with how the rest of the file namespaces — <code>Primary/Label/Large</code>, <code>Flags Library - 16px</code> — and the order is inverted: it produces a folder named Horizontal containing Divider, and presumably a Vertical folder containing another Divider, splitting one family across two folders named for the wrong thing. <code>Divider/Horizontal</code> would group them.",
        "tag": "Docs"
      },
      {
        "headline": "Write down what a slot swap costs.",
        "body": "Because the dividers and the density live in the default content, replacing the slot's contents silently drops both. Designers have been briefed, but the constraint is invisible from the component — it belongs in the usage documentation where someone reaches for it, and in the native contract where it does not apply at all.",
        "tag": "Docs"
      },
      {
        "headline": "Give the Label a way to be switched on.",
        "body": "It is a real subsection header sitting hidden in every variant. Revealing it currently means finding a hidden layer inside a slot. A boolean on the group — or shipping it as an option inside the slot's default content — would make it discoverable rather than folklore.",
        "tag": "Property"
      },

      {
        "headline": "See siblings:",
        "body": "<a href=\"/components/dropdown-item\">Select Item</a> fills the slot, and <a href=\"/components/dropdown\">Select</a> is the control that opens this surface. <a href=\"/components/select-field\">Select Field</a> is the trigger, deliberately outside this family's scope.",
        "tag": "Family"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Publish the token names once Dev Mode is read.",
        "body": "v2.0.1: Applied — all four colours the group paints are named. <code>bg/color-bg-main</code> on the card, <code>border/color-border-weak</code> on both its hairline and the dividers, and <code>border/color-border</code> on the hidden scrollbar. Read against the rest of the system rather than from Dev Mode, which still returns variable IDs instead of names. Everything inside a row belongs to <a href=\"/components/dropdown-item\">Select Item</a>, which is why those are named rather than valued.",
        "tag": "Token"
      }
    ]
  },
  "style": {
    "heading": "BorderType",
    "description": "Three ways to separate the rows, and that is the whole of it — <code>MiddleInset</code> insets its hairline 12px each side, <code>FullWidth</code> runs edge to edge, and <code>None</code> has no divider layers at all. That last one is why <code>None</code> is 24px shorter at every density: six gaps × the 4px frame each divider sits in. <code>Density</code> sets the row height and nothing else. Everything inside a row is a <a href=\"/components/dropdown-item\">Select Item</a>, placed with <code>hasTrailing=false</code>, which is why no badge appears in a real list.",
    "colorsTables": [
      buildColorsTable({
        title: "Colors by BorderType",
        description: "The group paints four things: its own surface and border, the dividers between rows, and a scrollbar — though the scrollbar is hidden by default and only appears when a list overflows. Everything inside a row belongs to <a href=\"/components/dropdown-item\">Select Item</a> — its label, its leading mark and its selected treatment are that component’s, which is why they are named here rather than given values. The divider is the only role that changes across the three versions, and <code>None</code> simply has none.",
        columns: ["None", "MiddleInset", "FullWidth"],
        rows: [
          { role: "Container", token: "bg/color-bg-main", values: ["#FFFFFF", "#FFFFFF", "#FFFFFF"] },
          { role: "Container border", token: "border/color-border-weak", values: ["#E5EBF4", "#E5EBF4", "#E5EBF4"] },
          { role: "Divider", token: "border/color-border-weak", values: ["—", "#E5EBF4", "#E5EBF4"] },
          { role: "Scrollbar", token: "border/color-border", values: ["#D7E0EF", "#D7E0EF", "#D7E0EF"] },
          { role: "Rows", token: "set by the Select Item instances placed", values: ["—", "—", "—"] }
        ]
      })
    ],
    "specCards": [
      {
        "cardKey": "sgroup-spec-card-none",
        "demoKey": "none",
        "demoControls": selectGroupControls,
        "title": "None",
        "node": "7947:111687",
        "description": "",
        "previewHtml": "<div id=\"sgroup-spec-none\"><div class=\"eb-preview-sgroup eb-preview-sgroup--none eb-preview-sgroup--compact\"><div class=\"eb-preview-sgroup__row eb-preview-sgroup__row--selected\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "BorderType", "value": "None" },
              { "key": "Density", "value": "Compact", "prop": "density" },
              { "key": "⤷ SelectionSlot (slot)", "value": "9 items — holds the rows, the dividers and a scrollbar" },
              { "key": "Divider", "value": "No divider layers at all — the rows sit directly against each other" },
              { "key": "Rows", "value": "7 Select Item instances, the first selected, all with hasTrailing=false" },
              { "key": "Label header", "value": "A Label instance at the top of the slot, hidden by default — the option is there for when a group needs a heading, which most do not" },
              { "key": "Scrollbar", "value": "A 12 × 312 frame holding a 4px bar, hidden by default — available when a list overflows, which most do not" },
              { "key": "Versions", "value": "9" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Container", "value": "#FFFFFF", "token": "bg/color-bg-main", "swatch": true },
              { "key": "Container border", "value": "#E5EBF4", "token": "border/color-border-weak", "swatch": true },
              { "key": "Divider", "value": "None — this version draws no dividers" },
              { "key": "Scrollbar", "value": "#D7E0EF", "token": "border/color-border", "swatch": true },
              { "key": "Rows", "value": "Set by the Select Item instances placed — see that component" }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Row label", "value": "Primary/Multi-line Label/Light/Base", "mono": true },
              { "key": "Label header (hidden)", "value": "Primary/Label/Light/Small", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "288 — Hug", "mono": true, "variants": { "density:default": { "value": "344 — Hug" }, "density:comfortable": { "value": "400 — Hug" } } },
              { "key": "Width", "value": "320 — Fill", "mono": true },
              { "key": "Radius", "value": "6", "mono": true },
              { "key": "Padding H", "value": "0", "mono": true },
              { "key": "Padding V", "value": "4", "mono": true },
              { "key": "Gap", "value": "0", "mono": true },
              { "key": "Alignment", "value": "Top left", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSelectGroup</span><span class=\"syn-punc\">(</span>\n    borderType<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.none</span><span class=\"syn-punc\">,</span>\n    density<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.compact</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">,</span> isSelected<span class=\"syn-punc\">:</span> <span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBSelectGroup</span><span class=\"syn-punc\">(</span>\n    borderType <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBBorderType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">None</span><span class=\"syn-punc\">,</span>\n    density <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBDensity</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Compact</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">,</span> isSelected <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "cardKey": "sgroup-spec-card-middleinset",
        "demoKey": "middleinset",
        "demoControls": selectGroupControls,
        "title": "MiddleInset",
        "node": "7947:111631",
        "description": "",
        "previewHtml": "<div id=\"sgroup-spec-middleinset\"><div class=\"eb-preview-sgroup eb-preview-sgroup--middleinset eb-preview-sgroup--compact\"><div class=\"eb-preview-sgroup__row eb-preview-sgroup__row--selected\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "BorderType", "value": "MiddleInset" },
              { "key": "Density", "value": "Compact", "prop": "density" },
              { "key": "⤷ SelectionSlot (slot)", "value": "9 items — holds the rows, the dividers and a scrollbar" },
              { "key": "Divider", "value": "A 320 × 4 frame holding a hairline from x=12 to x=308" },
              { "key": "Rows", "value": "7 Select Item instances, the first selected, all with hasTrailing=false" },
              { "key": "Label header", "value": "A Label instance at the top of the slot, hidden by default — the option is there for when a group needs a heading, which most do not" },
              { "key": "Scrollbar", "value": "A 12 × 312 frame holding a 4px bar, hidden by default — available when a list overflows, which most do not" },
              { "key": "Versions", "value": "9" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Container", "value": "#FFFFFF", "token": "bg/color-bg-main", "swatch": true },
              { "key": "Container border", "value": "#E5EBF4", "token": "border/color-border-weak", "swatch": true },
              { "key": "Divider", "value": "#E5EBF4", "token": "border/color-border-weak", "swatch": true },
              { "key": "Scrollbar", "value": "#D7E0EF", "token": "border/color-border", "swatch": true },
              { "key": "Rows", "value": "Set by the Select Item instances placed — see that component" }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Row label", "value": "Primary/Multi-line Label/Light/Base", "mono": true },
              { "key": "Label header (hidden)", "value": "Primary/Label/Light/Small", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "312 — Hug", "mono": true, "variants": { "density:default": { "value": "368 — Hug" }, "density:comfortable": { "value": "424 — Hug" } } },
              { "key": "Width", "value": "320 — Fill", "mono": true },
              { "key": "Radius", "value": "6", "mono": true },
              { "key": "Padding H", "value": "0", "mono": true },
              { "key": "Padding V", "value": "4", "mono": true },
              { "key": "Gap", "value": "0", "mono": true },
              { "key": "Alignment", "value": "Top left", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSelectGroup</span><span class=\"syn-punc\">(</span>\n    borderType<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.middleInset</span><span class=\"syn-punc\">,</span>\n    density<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.compact</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">,</span> isSelected<span class=\"syn-punc\">:</span> <span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBSelectGroup</span><span class=\"syn-punc\">(</span>\n    borderType <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBBorderType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">MiddleInset</span><span class=\"syn-punc\">,</span>\n    density <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBDensity</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Compact</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">,</span> isSelected <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "cardKey": "sgroup-spec-card-fullwidth",
        "demoKey": "fullwidth",
        "demoControls": selectGroupControls,
        "title": "FullWidth",
        "node": "7947:111659",
        "description": "",
        "previewHtml": "<div id=\"sgroup-spec-fullwidth\"><div class=\"eb-preview-sgroup eb-preview-sgroup--fullwidth eb-preview-sgroup--compact\"><div class=\"eb-preview-sgroup__row eb-preview-sgroup__row--selected\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path opacity=\"0.4\" fill=\"currentColor\" d=\"M9.50559 13.6667C9.17595 13.1734 9 12.5933 9 12C9 11.2043 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2043 9 12 9C12.5933 9 13.1734 9.17595 13.6667 9.50559C14.1601 9.83524 14.5446 10.3038 14.7716 10.8519C14.9987 11.4001 15.0581 12.0033 14.9424 12.5853C14.8266 13.1672 14.5409 13.7018 14.1213 14.1213C13.7018 14.5409 13.1672 14.8266 12.5853 14.9424C12.0033 15.0581 11.4001 14.9987 10.8519 14.7716C10.3038 14.5446 9.83524 14.1601 9.50559 13.6667Z\"/><path stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.4381 4.43509L9.75227 6.18166L7.82609 7.15937L5.91309 6.86386C5.64498 6.82244 5.37767 6.94298 5.23121 7.17133L4.26827 8.67264C4.10823 8.92217 4.12665 9.2463 4.31394 9.47608L5.62569 11.0855V12.9277L4.38072 14.5147C4.20104 14.7438 4.18556 15.0613 4.34209 15.3067L5.23305 16.7036C5.3786 16.9319 5.64477 17.0531 5.91247 17.0131L7.82632 16.7273L9.77673 17.8182L10.3204 19.5227C10.4111 19.807 10.6752 20 10.9737 20H12.9257C13.2069 20 13.4596 19.8284 13.5632 19.567L14.2565 17.8182L16.1739 16.8161L18.0544 17.1081C18.3327 17.1513 18.6091 17.0199 18.7514 16.7768L19.6656 15.2148C19.8106 14.967 19.7859 14.655 19.6036 14.4332L18.3757 12.9383V11.0188L19.6641 9.48956C19.8626 9.25397 19.8796 8.91492 19.7057 8.66064L18.6908 7.17677C18.5343 6.94789 18.2553 6.83582 17.984 6.89279L16.1741 7.27273L14.2565 6.18166L13.5632 4.43299C13.4596 4.17163 13.2069 4 12.9258 4H11.0764C10.7944 4 10.5411 4.17262 10.4381 4.43509Z\"/></svg></span><span class=\"eb-preview-sgroup__label\">Text</span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "BorderType", "value": "FullWidth" },
              { "key": "Density", "value": "Compact", "prop": "density" },
              { "key": "⤷ SelectionSlot (slot)", "value": "9 items — holds the rows, the dividers and a scrollbar" },
              { "key": "Divider", "value": "A 320 × 4 frame holding a hairline from x=0 to x=320" },
              { "key": "Rows", "value": "7 Select Item instances, the first selected, all with hasTrailing=false" },
              { "key": "Label header", "value": "A Label instance at the top of the slot, hidden by default — the option is there for when a group needs a heading, which most do not" },
              { "key": "Scrollbar", "value": "A 12 × 312 frame holding a 4px bar, hidden by default — available when a list overflows, which most do not" },
              { "key": "Versions", "value": "9" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Container", "value": "#FFFFFF", "token": "bg/color-bg-main", "swatch": true },
              { "key": "Container border", "value": "#E5EBF4", "token": "border/color-border-weak", "swatch": true },
              { "key": "Divider", "value": "#E5EBF4", "token": "border/color-border-weak", "swatch": true },
              { "key": "Scrollbar", "value": "#D7E0EF", "token": "border/color-border", "swatch": true },
              { "key": "Rows", "value": "Set by the Select Item instances placed — see that component" }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Row label", "value": "Primary/Multi-line Label/Light/Base", "mono": true },
              { "key": "Label header (hidden)", "value": "Primary/Label/Light/Small", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "312 — Hug", "mono": true, "variants": { "density:default": { "value": "368 — Hug" }, "density:comfortable": { "value": "424 — Hug" } } },
              { "key": "Width", "value": "320 — Fill", "mono": true },
              { "key": "Radius", "value": "6", "mono": true },
              { "key": "Padding H", "value": "0", "mono": true },
              { "key": "Padding V", "value": "4", "mono": true },
              { "key": "Gap", "value": "0", "mono": true },
              { "key": "Alignment", "value": "Top left", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSelectGroup</span><span class=\"syn-punc\">(</span>\n    borderType<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.fullWidth</span><span class=\"syn-punc\">,</span>\n    density<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.compact</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">,</span> isSelected<span class=\"syn-punc\">:</span> <span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBSelectGroup</span><span class=\"syn-punc\">(</span>\n    borderType <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBBorderType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">FullWidth</span><span class=\"syn-punc\">,</span>\n    density <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBDensity</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Compact</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">,</span> isSelected <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      }
    ]
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": [
        {
          "label": "iOS — Swift Package Manager",
          "code": "<span class=\"syn-punc\">.</span><span class=\"syn-fn\">package</span><span class=\"syn-punc\">(</span>url<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"https://github.com/AY-Org/eb-ds-ios\"</span><span class=\"syn-punc\">,</span> from<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"1.0.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"syn-fn\">implementation</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"com.eastblue.ds:select:1.0.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Import",
          "code": "<span class=\"syn-kw\">import</span> <span class=\"syn-type\">EastBlueDS</span>\n<span class=\"syn-kw\">import</span> com<span class=\"syn-punc\">.</span>eastblue<span class=\"syn-punc\">.</span>ds<span class=\"syn-punc\">.</span>select<span class=\"syn-punc\">.</span><span class=\"syn-punc\">*</span>"
        }
      ],
      "footnote": "Planned API — the native library does not exist yet. The artifact is the Select family: <a href=\"/components/dropdown\">Select</a>, this component and <a href=\"/components/dropdown-item\">Select Item</a> all ship in <code>com.eastblue.ds:select</code> and import <code>com.eastblue.ds.select.*</code>."
    },
    "propertyMapping": {
      "description": "Three properties. Two native parameters have no row because neither is one: <code>header</code> would drive the <code>Label</code> layer at the top of the slot, and the scrollbar is a hidden frame — both ship hidden as options held in reserve, and on both platforms the scrollbar is drawn by the platform rather than by the component. <strong>The one thing that does not map cleanly is how the two properties reach the rows.</strong> In Figma <code>BorderType</code> and <code>Density</code> shape the slot’s <em>default content</em>; a component property cannot reach inside a slot, so replacing the rows leaves both properties with nothing to act on. Natively they apply to whatever fills the slot, which is the behaviour the page documents and the better one — but it means the Figma component and the native component differ in mechanism, not just in syntax.",
      "rows": [
        {
          "figma": "BorderType — None, MiddleInset, FullWidth",
          "swift": "<code>borderType: EBBorderType</code>",
          "compose": "<code>borderType: EBBorderType</code>"
        },
        {
          "figma": "Density — Compact, Default, Comfortable",
          "swift": "<code>density: EBDensity = .compact</code>",
          "compose": "<code>density: EBDensity = Compact</code>"
        },
        {
          "figma": "⤷ SelectionSlot (slot)",
          "swift": "<code>@ViewBuilder content: () -> Content</code>",
          "compose": "<code>content: @Composable ColumnScope.() -> Unit</code>"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "None — a plain list, no separators",
        "swift": "<span class=\"syn-type\">EBSelectGroup</span><span class=\"syn-punc\">(</span>borderType<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.none</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Savings\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Checking\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBSelectGroup</span><span class=\"syn-punc\">(</span>borderType <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBBorderType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">None</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Savings\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Checking\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "subheading": "MiddleInset — separators that stop short of the edges",
        "swift": "<span class=\"syn-type\">EBSelectGroup</span><span class=\"syn-punc\">(</span>borderType<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.middleInset</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Savings\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Checking\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBSelectGroup</span><span class=\"syn-punc\">(</span>borderType <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBBorderType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">MiddleInset</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Savings\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Checking\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "subheading": "FullWidth — separators edge to edge, comfortable rows",
        "swift": "<span class=\"syn-type\">EBSelectGroup</span><span class=\"syn-punc\">(</span>borderType<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.fullWidth</span><span class=\"syn-punc\">,</span> density<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.comfortable</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Philippines\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Singapore\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBSelectGroup</span><span class=\"syn-punc\">(</span>borderType <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBBorderType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">FullWidth</span><span class=\"syn-punc\">,</span> density <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBDensity</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Comfortable</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Philippines\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Singapore\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "Exposed as a list of options",
        "ios": "<code>.accessibilityElement(children: .contain)</code> with a radio-group trait",
        "android": "<code>Modifier.selectableGroup()</code> on the column"
      },
      {
        "requirement": "Announced when it opens",
        "ios": "Focus moves into the list; the Select's label carries the context",
        "android": "<code>paneTitle</code> on the popup"
      },
      {
        "requirement": "Dividers are decorative",
        "ios": "<code>.accessibilityHidden(true)</code>",
        "android": "<code>contentDescription = null</code>"
      },
      {
        "requirement": "Subsection header reads as a heading",
        "ios": "<code>.accessibilityAddTraits(.isHeader)</code> when the Label is shown",
        "android": "<code>Modifier.semantics { heading() }</code>"
      },
      {
        "requirement": "Long lists stay reachable",
        "ios": "Scrolls to the selected row when opened",
        "android": "Same — the selected row is brought into view"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Let the group own the dividers between rows.",
        "dontText": "Don't add dividers inside a Select Item — BorderType already places them."
      },
      {
        "doText": "Re-apply density when you replace the slot's contents.",
        "dontText": "Don't assume swapped-in rows inherit the group's density — they don't, in Figma."
      },
      {
        "doText": "Use None when the rows already read as separate cards.",
        "dontText": "Don't stack dividers against a row that draws its own border."
      },
      {
        "doText": "Show the Label when a list has genuine sections.",
        "dontText": "Don't use it as a title for the whole menu — that belongs on the Select."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "The vestigial <code>Dropdown Item - Last</code> and the five hidden 366px leftovers are both gone. The hidden Label is confirmed as an intentional subsection header."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>BorderType = MiddleInset | FullWidth | None</code> after the typo fix and the joining, and the slot is <code>⤷ SelectionSlot</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Every colour is bound and named: <code>bg/color-bg-main</code> on the card, <code>border/color-border-weak</code> on both its hairline and the dividers, and <code>border/color-border</code> on the hidden scrollbar. Everything inside a row belongs to <a href=\"/components/dropdown-item\">Select Item</a>, which is why the rows are named rather than valued here."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "A card wrapping a list maps directly. The one divergence is mechanical rather than cosmetic: in Figma <code>BorderType</code> and <code>Density</code> shape the slot’s default content, so replacing the rows leaves both with nothing to act on; natively they apply to whatever fills the slot. The native behaviour is the better one, and it is what the mapping documents — but the two components differ in mechanism, so a Code Connect binding will not be a straight pass-through."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "The surface has no states of its own. Pressed and selected belong to the rows inside it."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "No artwork of its own. The <code>Label</code> header and the <code>Scrollbar</code> are both hidden by default and confirmed intentional — options for when a group needs a heading or a list overflows, which most do not."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked — the native library does not exist yet."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 9,
      "description": "3 BorderType × 3 Density = 9. Row count is not an axis — the slot ships seven and takes whatever replaces them.",
      "columns": ["BorderType", "Density", "Row height", "Card height", "Node"],
      "rows": [
        { "cells": ["MiddleInset", "Compact", "40", "312", "7947:111631"] },
        { "cells": ["FullWidth", "Compact", "40", "312", "7947:111659"] },
        { "cells": ["None", "Compact", "40", "288", "7947:111687"] },
        { "cells": ["MiddleInset", "Default", "48", "368", "7947:111709"] },
        { "cells": ["FullWidth", "Default", "48", "368", "7947:111737"] },
        { "cells": ["None", "Default", "48", "344", "7947:111765"] },
        { "cells": ["MiddleInset", "Comfortable", "56", "424", "7947:111787"] },
        { "cells": ["FullWidth", "Comfortable", "56", "424", "7947:111815"] },
        { "cells": ["None", "Comfortable", "56", "400", "7947:111843"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.2",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Token-names recommendation closed — node 7947:111630",
      "rows": [
        {
          "body": "<strong>The token-names recommendation was already satisfied and still read as outstanding.</strong> v2.0.1 named all four colours the group paints and C3 moved to Ready, but the recommendation asking for them stayed in the open list — the page asking for something it had already published. Moved to Applied, where the entry records that they were read against the rest of the system rather than from Dev Mode, which still returns variable IDs instead of names.",
          "delta": { "kind": "resolved", "label": "Docs" }
        }
      ]
    },
    {
      "version": "2.0.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Style and Code tabs rebuilt to the content guides — node 7947:111630",
      "rows": [
        {
          "body": "<strong>One card became three.</strong> <code>BorderType</code> is the driving property, so None, MiddleInset and FullWidth each get a card. <code>Density</code> stays a control, and <code>⤷ SelectionSlot</code> is a slot, which leaves the panel with one control for a component of nine variants.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The three border treatments are read from the artwork rather than described.</strong> <code>MiddleInset</code> is a 320 × 4 frame holding a hairline from x=12 to x=308; <code>FullWidth</code> runs 0 to 320; <code>None</code> has no divider layers at all. That last one is the whole of the 24px height difference — six gaps × the 4px frame each divider sits in — which had read as an unexplained number.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Vertical padding was documented as 0 and is 4.</strong> Every height now reconstructs from the seven Layout keys alone: 7 rows × 40, plus six 4px divider frames where the version has them, plus 4 above and 4 below. 288 and 312 at Compact. The old rows were 8px short of their own stated heights, which is the check that caught it. <code>Width</code> also read a bare <code>320</code> where the panel says <strong>Fill</strong> — 320 is only what it resolves to here.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The leading mark was a circle where the gear teeth belong.</strong> The preview drew an outer circle and an inner circle. It is now the artwork exported from the Leading Element at node 7947:111971 — a stroked gear outline over a 40%-opacity inner dot — in <code>currentColor</code>, so the selected row’s blue reaches it through one declaration instead of three brittle selectors. <a href=\"/components/dropdown-item\">Select Item</a> now draws the same block, so both pages render this nested instance identically.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The preview shows the first row selected, as Figma ships it.</strong> That is what the component draws, and it shows how a Select Item’s selected treatment reads inside the group — label and leading mark both stepping to <code>text/color-text-primary</code> while the row keeps its surface.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Both text styles resolve.</strong> The row label is <code>Primary/Multi-line Label/Light/Base</code> and the hidden group header is <code>Primary/Label/Light/Small</code>, replacing font specs and a \"names pending Dev Mode read\" IOU.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>All four colours the group paints are named.</strong> <code>bg/color-bg-main</code> on the card, <code>border/color-border-weak</code> on both its hairline and the dividers, <code>border/color-border</code> on the scrollbar. Everything inside a row belongs to <a href=\"/components/dropdown-item\">Select Item</a>, so the rows are named rather than valued — and a Colors by BorderType table now carries the lot.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>Two hidden layers are recorded as deliberate, not missing.</strong> The <code>Label</code> header and the <code>Scrollbar</code> both ship hidden — options for when a group needs a heading or a list overflows, which most do not. Written into the Properties rows, the colours table and C6, because a documented scrollbar colour that never appears reads as a defect otherwise.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The preview drew in the documentation font.</strong> <code>.eb-preview-sgroup</code> declared <code>font-family: inherit</code>, which resolves to BarkAda; every visible layer is a Select Item row and the hidden header is <code>Primary/*</code>, all Proxima Soft. Caught by the typeface check rather than by eye.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The preview drew five rows where the component holds seven.</strong> Every height on the Layout section is built from seven — 7 × 40 plus 4 above and 4 below is 288 at None, and the six divider frames make it 312 for the other two — so a five-row preview quietly contradicted the numbers printed beside it. Found while composing the same instance into <a href=\"/components/dropdown\">Select</a>, whose Expanded versions draw the group at its full 312.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Each divider is a 4px frame, not a 1px line.</strong> The preview drew a 1px CSS border between rows, leaving it 18px short of the 312 it documents — and the inset was faked with a margin that stripped the horizontal padding from every row after the first, so only the selected row had a full-width surface. Both are now drawn the way Figma builds them: a 4px gap carrying a hairline, inset 12 either side at <code>MiddleInset</code> and edge to edge at <code>FullWidth</code>. This is the same 24px that separates <code>None</code> from the other two, and the preview now reconstructs it rather than asserting it.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The install block pointed at coordinates that will never exist.</strong> <code>gcash/east-blue-ios</code> and <code>com.gcash.eastblue:components:1.0.0</code>, with no Import line. It now cites the Select family artifact <code>com.eastblue.ds:select:1.0.0</code> and imports <code>com.eastblue.ds.select.*</code>.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Property Mapping listed two hidden layers as properties.</strong> <code>Label (hidden)</code> and <code>Scrollbar</code> are not in the panel. Three rows now, one per property, with <code>header</code> and the scrollbar explained in the description — the scrollbar because on both platforms it is drawn by the platform rather than by the component.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Every snippet called <code>EBSelectItem</code> a way its own page does not.</strong> One used an unlabelled leading string, one used <code>leading:</code> — the parameter renamed to <code>type:</code> during <a href=\"/components/dropdown-item\">Select Item</a>’s own pass — and one passed <code>header:</code> to the group. A parent quoting a stale child API is invisible until the child is fixed, and nothing checks for it: each page validates fine alone.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Usage Snippets were keyed to use-cases, and one was not a BorderType at all.</strong> \"Inset dividers (default)\", \"No dividers, comfortable rows\" and \"With a subsection header\". One per value now, and the unverifiable \"(default)\" is gone — the panel lists None first.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>C3 was still holding an IOU.</strong> Its note read \"names need a Dev Mode read before they can be printed\"; all four tokens are named. C6 now records both hidden layers as intentional, and C4 keeps the mechanism divergence in sharper terms.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The properties reach the rows differently in Figma and natively, and that is carried forward as a known divergence.</strong> In Figma <code>BorderType</code> and <code>Density</code> shape the slot’s <em>default content</em> — a component property cannot reach inside a slot, so replacing the rows leaves both with nothing to act on. Natively they apply to whatever fills the slot, which is the better behaviour and the one the page documents. It is not fixable in Figma, so a Code Connect binding will not be a straight pass-through.",
          "delta": { "kind": "open", "label": "Docs" }
        },
        {
          "body": "<strong>Code Connect emptied, and DEV code is live for the first time.</strong> The demo script had no <code>getSnippet</code>, so both language tabs were frozen on a static string; they now show the slot as a trailing closure, which is the honest shape given the rows arrive through it rather than as a parameter.",
          "delta": { "kind": "resolved", "label": "Docs" }
        }
      ]
    },
    {
      "version": "2.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Slot rebuild + reassessment on the 2026 Working File · node 7947:111630",
      "rows": [
        {
          "body": "<strong>Covers two changes at once.</strong> The slot rebuild that turned this from a hardcoded preview artifact into a real container — and withdrew a Consolidate verdict — was described in the component's verdict but never given a changelog entry of its own. This version records it alongside the cleanup that followed.",
          "delta": { "kind": "resolved", "label": "Rebuilt" }
        },
        {
          "body": "<strong>The <code>MIddle Inset</code> typo is gone</strong> — the property and its values are now joined as <code>BorderType = MiddleInset | FullWidth | None</code>.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>The vestigial <code>Dropdown Item - Last</code> is gone.</strong> Its master and instance had disagreed since the Dropdown to Select rename; the last row is now simply <code>Select Item</code>, with six dividers between seven rows and none trailing.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>Five hidden 366px leftovers removed</strong> — stale Select Item instances stacked at one coordinate inside the slot, invisible but shipping in every variant.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<code>Slot</code> renamed to <code>⤷ SelectionSlot</code>, so the name says what belongs in it rather than only marking it as a slot.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "The Scrollbar frame kept, confirmed as an intentional design-time affordance with no native counterpart. The hidden <code>Label</code> confirmed as a subsection header for grouped lists.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "Both properties documented as shaping the slot's <em>default content</em> rather than applying to substituted content — a Figma limit, already instructed to designers, and a genuine divergence from the native contract where both are list-level.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "Node moved from <code>25783:1255</code> (Sticker Sheets v2) to <code>7947:111630</code> (2026 Working File), and <code>navGroup</code> changed from Dropdown to Select.",
          "delta": { "kind": "resolved", "label": "Rebuilt" }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 6383:3446",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — Single variant, 8-item fixed layout at 366px. Rounded 6px card, white bg, 6px/12px drop shadow. All tokens bound (bg, radius, shadow, space).\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Last row is a detached frame</strong> — Node <code>6383:3442</code> is a hand-built <code>Dropdown - Item</code> frame instead of a DropdownItem component instance. Breaks consistency.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>No slot, no item count, no fill-container width</strong> — Layout is hardcoded to 8 rows at 366px. Cannot be reused for menus of different sizes.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>Irregular component name</strong> — \"Dropdown Item - Group\" uses a \" - \" separator inconsistent with other DS group names. Recommend rename to \"Dropdown Menu\".\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Popover surface not a native primitive</strong> — Both <code>Menu</code> (iOS) and <code>DropdownMenu</code> (Compose) draw the shadowed card automatically. This component has no 1:1 native mapping.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4 Open"
          }
        },
        {
          "body": "<strong>Code Connect not registered</strong> — No properties to map. Consolidate into Dropdown before mapping.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};