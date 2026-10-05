/**
 * StampType — tuning constants, palettes and choreography tracks.
 *
 * The whole piece is data: a world is three hex colours plus four strings, and
 * the motion is four tracks of [frame, x, y] breakpoints in a 600×600 space.
 * There is no easing function anywhere — the jaggedness IS the choreography.
 */

/** 20fps. */
export const TICK_MS = 50;

/** Movement cadence: positions only change every 2nd frame → 10Hz stutter. */
export const STEP = 2;

/** Stamps live exactly this many frames, then vanish all at once. */
export const STAMP_TTL = 16;

/** Frame the lines are parked and readable from. */
export const PARK_IN = 28;

/** Frame the lines start scattering off. */
export const PARK_OUT = 76;

/** Last frame of a pass (tracks end here). */
export const PASS_END = 93;

/** How long the parked read holds — stretches the PARK_IN→PARK_OUT window. */
export const PARK_FRAMES = 48;

/** The incoming pass starts this many frames before the outgoing one ends. */
export const PASS_OVERLAP = 12;

/** Frames into a pass at which the field hard-cuts to the new world. */
export const FIELD_SWAP = 5;

export interface World {
  /** Field colour. */
  bg: string;
  /** Highlight bar + stamp colour. */
  bar: string;
  /** Glyph colour — must be near-black or near-white against the bar. */
  ink: string;
  lines: [string, string, string, string];
}

export const WORLDS: World[] = [
  {
    bg: "#3f40ff", bar: "#58f683", ink: "#000000",
    lines: ["Design is not", "how it looks.", "Design is", "how it works."],
  },
  {
    bg: "#2a1035", bar: "#ff5c4d", ink: "#2a1035",
    lines: ["Simplicity is", "the hardest", "thing to get", "right."],
  },
  {
    bg: "#2e3440", bar: "#f5d06c", ink: "#2e3440",
    lines: ["Good taste is", "a thousand", "small decisions", "in a row."],
  },
  {
    bg: "#0f3d2e", bar: "#7cf0b8", ink: "#0f3d2e",
    lines: ["Measure it,", "then build it.", "Guessing is", "not a method."],
  },
  {
    bg: "#f4f4f6", bar: "#002fa7", ink: "#ffffff",
    lines: ["Everything here", "is open.", "Take it and", "make it yours."],
  },
];

/** All geometry is a fraction of the 600-unit square, so it scales cleanly. */
export const HEADLINE = 71 / 600;

export const BAR_PAD_X = 10 / 600;
export const BAR_PAD_TOP = 11 / 600;
export const BAR_PAD_BOTTOM = 8 / 600;
export const BAR_RADIUS = 11 / 600;
/** Fat glyph stroke — the bar ∪ stroked-glyph union is the stamp silhouette. */
export const BAR_STROKE = 16 / 600;

export const LINE_RIGHT_MARGIN = 24 / 600;

/** A long line is condensed to fit, never set smaller. */
export const CONDENSE_MIN = 0.72;

export type Track = [number, number, number][];

export const TRACKS: Track[] = [
  // Line 1 — in from the top, along the top edge, down to the park.
  [[1, 181, -100], [3, 181, 11], [6, 165, 16], [7, 128, 16], [10, 110, 16],
    [11, 72, 16], [13, 69, 38], [15, 70, 90], [16, 70, 94], [17, 97, 94],
    [19, 165, 94], [20, 170, 94], [21, 154, 94], [23, 117, 94], [24, 114, 94],
    [25, 114, 115], [27, 114, 168], [28, 114, 172], [76, 114, 172], [77, 114, 142],
    [79, 114, 66], [82, 96, 61], [84, 47, 61], [86, 108, 61], [88, 195, 61],
    [91, 195, -120]],

  // Line 2 — in from the left, out to the left.
  [[12, -540, 273], [15, 16, 273], [18, 20, 267], [20, 20, 251], [22, 29, 251],
    [24, 53, 251], [28, 53, 240], [76, 53, 240], [80, 31, 240], [82, 31, 225],
    [84, 31, 184], [86, 0, 184], [88, 37, 264], [90, 76, 264], [93, -560, 264]],

  // Line 3 — in from the right, out to the right.
  [[8, 640, 375], [11, 97, 375], [14, 90, 365], [15, 90, 343], [18, 85, 341],
    [19, 72, 341], [22, 71, 332], [24, 71, 308], [28, 49, 308], [76, 49, 308],
    [80, 49, 297], [84, 49, 319], [87, 49, 266], [88, 49, 264], [90, 88, 263],
    [93, 660, 263]],

  // Line 4 — in from the right, out to the left.
  [[4, 620, 498], [7, 118, 498], [8, 104, 498], [12, 104, 487], [13, 77, 487],
    [15, 9, 487], [16, 4, 487], [17, 4, 469], [19, 4, 424], [22, 20, 420],
    [23, 58, 420], [26, 61, 408], [28, 61, 376], [76, 61, 376], [80, 31, 376],
    [83, 84, 376], [85, 63, 376], [87, 4, 376], [90, 0, 376], [93, -540, 376]],
];
