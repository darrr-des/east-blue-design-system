/**
 * Shared helpers for component data files.
 *
 * Color State framework — three canonical column shapes:
 *
 *   1. Stateless        ['Default']
 *      Used by passive/display components (modal, header, banner, footer,
 *      voucher tiles, carousel cards, stepper indicators, etc.). Single
 *      column lists each role's color.
 *
 *   2. Interactive       ['Default', 'Pressed', 'Disabled']
 *      Used by stateful interactive components (toggle, counter,
 *      toast-with-button, etc.). Standard CLAUDE.md canonical shape.
 *
 *   3. Multi-mode        ['<Mode 1>', '<Mode 2>', ...]
 *      Used by components with appearance-mode variants (toast dark/light/
 *      error, etc.). Each column is one mode at the default state.
 *
 * Use `buildColorsTable()` to compose a typed `ColorsTable` from one of
 * these shapes — keeps call-sites short and validates that every row's
 * `values` length matches the column count at runtime.
 */
import type { ColorsTable, ColorsTableRow } from '../types';

export const STATELESS_COLUMNS = ['Default'] as const;
export const INTERACTIVE_COLUMNS = ['Default', 'Pressed', 'Disabled'] as const;

export type ColorsTableInput = {
  title: string;
  description?: string;
  columns: readonly string[];
  /** One row per color role (bg, label, border, icon, etc.). */
  rows: ReadonlyArray<{
    role: string;
    token: string;
    /** Aligned to columns. Use '–' for inapplicable cells. */
    values: readonly string[];
  }>;
};

/**
 * Compose a ColorsTable from typed input. Validates that each row's
 * `values` length matches the column count — surfaces mismatch at build
 * time instead of producing a silently-misaligned table.
 */
export function buildColorsTable(input: ColorsTableInput): ColorsTable {
  const colCount = input.columns.length;
  const rows: ColorsTableRow[] = input.rows.map((r, i) => {
    if (r.values.length !== colCount) {
      throw new Error(
        `[buildColorsTable] "${input.title}" row ${i} ("${r.role}") has ` +
        `${r.values.length} values but ${colCount} columns — fill missing ` +
        `cells with '–' (en-dash) to indicate inapplicable.`,
      );
    }
    return {
      role: r.role,
      token: r.token,
      values: [...r.values],
    };
  });
  return {
    title: input.title,
    ...(input.description ? { description: input.description } : {}),
    columns: [...input.columns],
    rows,
  };
}

/**
 * Convenience for Stateless components — single 'Default' column,
 * one value per row.
 */
export function buildStatelessColorsTable(input: {
  title: string;
  description?: string;
  rows: ReadonlyArray<{ role: string; token: string; value: string }>;
}): ColorsTable {
  return buildColorsTable({
    title: input.title,
    description: input.description,
    columns: STATELESS_COLUMNS,
    rows: input.rows.map((r) => ({
      role: r.role,
      token: r.token,
      values: [r.value],
    })),
  });
}

/**
 * Convenience for Interactive components — Default · Pressed · Disabled.
 */
export function buildInteractiveColorsTable(input: {
  title: string;
  description?: string;
  rows: ReadonlyArray<{
    role: string;
    token: string;
    default: string;
    pressed: string;
    disabled: string;
  }>;
}): ColorsTable {
  return buildColorsTable({
    title: input.title,
    description: input.description,
    columns: INTERACTIVE_COLUMNS,
    rows: input.rows.map((r) => ({
      role: r.role,
      token: r.token,
      values: [r.default, r.pressed, r.disabled],
    })),
  });
}

/**
 * Convenience for Multi-mode components (e.g. Toast theme=dark|light|error).
 * Caller supplies the mode column names + per-row values aligned to those modes.
 */
export function buildMultiModeColorsTable(input: {
  title: string;
  description?: string;
  modes: readonly string[];
  rows: ReadonlyArray<{
    role: string;
    token: string;
    /** Aligned to `modes`. */
    values: readonly string[];
  }>;
}): ColorsTable {
  return buildColorsTable({
    title: input.title,
    description: input.description,
    columns: input.modes,
    rows: input.rows,
  });
}
