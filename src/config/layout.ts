/**
 * Project-wide Layout Standard Specification
 *
 * This file establishes the default horizontal container system and explicitly
 * allows controlled exceptions. It is not a root-level enforcement but a
 * reusable convention to apply case-by-case.
 *
 * Rule: Default container unless explicitly declared otherwise.
 */

export const LAYOUT = {
  /**
   * Default Content Container Width (LCW)
   * Intent: All normal section content sits inside this container by default.
   */
  CONTENT_WIDTH: 1304, // px

  /**
   * Default Side Gutters (SG)
   * Applied as left and right padding to the container.
   */
  GUTTER_X: 48, // px

  /**
   * Page Alignment
   */
  ALIGNMENT: 'center',
} as const;

/**
 * Approved Exception Types
 * Sections are permitted to deviate from the default container only via these
 * declared exception types.
 */
export enum LayoutException {
  /**
   * Background spans 100% width.
   * Content still uses the default Content Container (1304px centered with 48px gutters).
   */
  FULL_BLEED_BACKGROUND = 'full-bleed-background',

  /**
   * Content spans full width intentionally (e.g., hero media, large visual banner, maps).
   * Must still respect a minimum safe padding strategy (typically LAYOUT.GUTTER_X)
   * unless the design explicitly requires edge-to-edge.
   */
  FULL_BLEED_CONTENT = 'full-bleed-content',

  /**
   * A different max width is allowed for special sections (e.g., dense tables, galleries).
   * Must be defined as a named token in ALTERNATE_WIDTHS.
   */
  ALTERNATE_CONTAINER = 'alternate-container',

  /**
   * Content may intentionally shift left/right for design reasons.
   * Offsets should be defined relative to the default gutter/container system.
   */
  ASYMMETRIC_OFFSET = 'asymmetric-offset',
}

/**
 * Alternate Container Widths (Component-Specific)
 * Named tokens for approved alternate widths.
 * Do not use one-off numbers.
 */
export const ALTERNATE_WIDTHS = {
  WIDE: 1440,   // e.g., for data-heavy dashboards
  NARROW: 800,  // e.g., for long-form text articles
} as const;
