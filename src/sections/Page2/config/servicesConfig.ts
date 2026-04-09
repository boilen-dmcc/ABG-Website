// ===========================================
// TYPOGRAPHY - Responsive Font Sizes
// Using clamp(min, preferred, max) for fluid scaling
// ===========================================

// Main Content Typography (Middle Column)
export const SUBTITLE_FONT_SIZE = "clamp(11px, 1vw, 13px)";           // Increased from 9px min
export const TITLE_FONT_SIZE = "clamp(28px, 3vw, 42px)";
export const DESCRIPTION_FONT_SIZE = "clamp(13px, 1.1vw, 15px)";
export const LINK_FONT_SIZE = "clamp(11px, 1vw, 13px)";               // Increased from 9px min

// Sidebar Typography (Left Column)
export const SIDEBAR_TITLE_SIZE = "clamp(14px, 1.3vw, 18px)";
export const SIDEBAR_NUMBER_SIZE = "clamp(12px, 1.1vw, 16px)";

// ===========================================
// ANIMATION
// ===========================================

export const SLIDE_DURATION = 400;

// ===========================================
// LAYOUT DIMENSIONS - All Three Columns
// Flex ratios that work together (total ~100%)
// ===========================================

// Sidebar (Left Column) - ~20% of total width
export const SIDEBAR_FLEX = "1";
export const SIDEBAR_WIDTH_PERCENT = "20%";
export const SIDEBAR_MIN_PERCENT = "18%";
export const SIDEBAR_MAX_PERCENT = "22%";

// Text Content (Middle Column) - ~30% of total width
// This column shrinks first when space is tight
export const TEXT_FLEX = "1.5";
export const TEXT_WIDTH_PERCENT = "30%";
export const TEXT_MIN_PERCENT = "22%";              // Reduced min to allow more shrinking
export const TEXT_MAX_PERCENT = "35%";

// Image (Right Column) - ~50% of total width
export const IMAGE_FLEX = "2.5";
export const IMAGE_WIDTH_PERCENT = "50%";
export const IMAGE_MIN_PERCENT = "45%";
export const IMAGE_MAX_PERCENT = "55%";

// ===========================================
// LAYOUT DIMENSIONS - Heights (Responsive)
// Uses aspect-ratio so height scales with width
// ===========================================

// Aspect ratios (width / height) - higher = shorter, lower = taller
export const CONTENT_ASPECT_RATIO_LG = "2.8 / 1";
export const CONTENT_ASPECT_RATIO_MD = "2.2 / 1";
export const CONTENT_ASPECT_RATIO_SM = "1.8 / 1";

// Mobile uses fixed heights (stacked layout)
export const CONTENT_HEIGHT_MOBILE = "auto";

// Image heights when stacked (mobile/tablet before aspect-ratio kicks in)
export const IMAGE_HEIGHT_MOBILE = "280px";
export const IMAGE_HEIGHT_SM = "320px";
export const IMAGE_HEIGHT_MD = "380px";

// Min/max height constraints to prevent extremes
export const CONTENT_MIN_HEIGHT_LG = "350px";
export const CONTENT_MAX_HEIGHT_LG = "500px";

// ===========================================
// SPACING - Responsive gaps and padding
// ===========================================

// Middle column spacing
export const TEXT_PADDING = "clamp(1.5rem, 3vw, 4rem)";
export const ELEMENT_GAP = "clamp(1rem, 1.5vw, 2rem)";

// Sidebar (Left Column) spacing
export const SIDEBAR_ITEM_GAP_Y = "clamp(0.4rem, 0.8vw, 0.75rem)";
export const SIDEBAR_ITEM_GAP_X = "clamp(1rem, 1.5vw, 1.5rem)";
export const SIDEBAR_ITEM_INNER_GAP = "clamp(0.4rem, 0.6vw, 0.75rem)";
export const SIDEBAR_PADDING_Y = "clamp(1rem, 1.5vw, 1.5rem)";

// Right column (Image) margin - maintains consistent spacing on right edge
export const IMAGE_MARGIN_RIGHT = "clamp(1.5rem, 2vw, 2.5rem)";
