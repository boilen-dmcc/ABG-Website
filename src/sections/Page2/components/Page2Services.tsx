import { useState, useRef, useEffect } from "react";
import { services } from "@/sections/Page2/data/servicesData";

// ===========================================
// TYPOGRAPHY - Responsive Font Sizes
// Using clamp(min, preferred, max) for fluid scaling
// ===========================================

// Main Content Typography (Middle Column)
const SUBTITLE_FONT_SIZE = "clamp(12px, 1.2vw, 14px)";
const TITLE_FONT_SIZE = "clamp(26px, 2.5vw, 38px)";
const DESCRIPTION_FONT_SIZE = "clamp(13px, 1.1vw, 15px)";
const LINK_FONT_SIZE = "clamp(11px, 1vw, 13px)";

// Sidebar Typography (Left Column)
const SIDEBAR_TITLE_SIZE = "clamp(14px, 1.3vw, 18px)";
const SIDEBAR_NUMBER_SIZE = "clamp(12px, 1.1vw, 16px)";

// ===========================================
// ANIMATION
// ===========================================

const SLIDE_DURATION = 400;

// ===========================================
// LAYOUT DIMENSIONS - All Three Columns
// Flex ratios that work together (total ~100%)
// ===========================================

// Sidebar (Left Column) - ~20% of total width
const SIDEBAR_FLEX = "1";
const SIDEBAR_WIDTH_PERCENT = "20%";
const SIDEBAR_MIN_PERCENT = "15%";              // Lowered from 18%
const SIDEBAR_MAX_PERCENT = "22%";

// Text Content (Middle Column) - ~30% of total width
const TEXT_FLEX = "1.5";
const TEXT_WIDTH_PERCENT = "30%";
const TEXT_MIN_PERCENT = "15%";                 // Lowered from 18%
const TEXT_MAX_PERCENT = "35%";

// Image (Right Column) - ~50% of total width
const IMAGE_FLEX = "2.5";
const IMAGE_WIDTH_PERCENT = "50%";
const IMAGE_MIN_PERCENT = "35%";                // Lowered from 45%
const IMAGE_MAX_PERCENT = "55%";

// ===========================================
// LAYOUT DIMENSIONS - Heights (Responsive)
// Uses aspect-ratio so height scales with width
// ===========================================

// Aspect ratios (width / height) - higher = shorter, lower = taller
const CONTENT_ASPECT_RATIO_LG = "2.8 / 1";
const CONTENT_ASPECT_RATIO_MD = "2.2 / 1";
const CONTENT_ASPECT_RATIO_SM = "1.8 / 1";

// Mobile uses fixed heights (stacked layout)
const CONTENT_HEIGHT_MOBILE = "auto";

// Image heights when stacked (mobile/tablet before aspect-ratio kicks in)
const IMAGE_HEIGHT_MOBILE = "280px";
const IMAGE_HEIGHT_SM = "320px";
const IMAGE_HEIGHT_MD = "380px";

// Min/max height constraints to prevent extremes
const CONTENT_MIN_HEIGHT_LG = "350px";
const CONTENT_MAX_HEIGHT_LG = "500px";

// ===========================================
// SPACING - Responsive gaps and padding
// ===========================================

// Middle column spacing (scaled like left column)
const TEXT_PADDING = "clamp(1.5rem, 3vw, 4rem)";
const ELEMENT_GAP = "clamp(0.6rem, 1.2vw, 1.5rem)";                // Gap between subtitle/title/desc/link
const DESCRIPTION_MARGIN_LEFT = "clamp(1rem, 2vw, 2rem)";
const DESCRIPTION_MAX_WIDTH = "95%";

// Gap between middle and right columns
const MIDDLE_RIGHT_GAP = "1.5rem";
const MIDDLE_RIGHT_GAP_SMALL = "0.5rem";

// Sidebar (Left Column) spacing
const SIDEBAR_ITEM_GAP_Y = "clamp(0.4rem, 0.8vw, 0.75rem)";
const SIDEBAR_ITEM_GAP_X = "clamp(1rem, 1.5vw, 1.5rem)";
const SIDEBAR_ITEM_INNER_GAP = "clamp(0.4rem, 0.6vw, 0.75rem)";
const SIDEBAR_PADDING_Y = "clamp(1rem, 1.5vw, 1.5rem)";

// Right column (Image) margin - set to 0 since container already has lg:px-16
const IMAGE_MARGIN_RIGHT = "0";

// ===========================================
// COMPONENT
// ===========================================

export const Page2Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"forward" | "backward" | null>(null);

  // Collapsible sidebar state (for mobile < 669px)
  const [isExpanded, setIsExpanded] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const expandedContentRef = useRef<HTMLDivElement>(null);
  const [expandedHeight, setExpandedHeight] = useState(0);

  // Measure expanded content height
  useEffect(() => {
    const measureHeight = () => {
      if (expandedContentRef.current) {
        const el = expandedContentRef.current;
        const originalMaxHeight = el.style.maxHeight;
        el.style.maxHeight = 'none';
        setExpandedHeight(el.scrollHeight);
        el.style.maxHeight = originalMaxHeight;
      }
    };

    measureHeight();
    window.addEventListener('resize', measureHeight);
    return () => window.removeEventListener('resize', measureHeight);
  }, [services.length]);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);

  // Escape key handler
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isExpanded]);

  const handleServiceClick = (toIndex: number) => {
    if (toIndex === activeIndex || isAnimating) {
      setIsExpanded(false);
      return;
    }

    const navDirection = toIndex > activeIndex ? "forward" : "backward";
    
    setDirection(navDirection);
    setPreviousIndex(activeIndex);
    setActiveIndex(toIndex);
    setIsAnimating(true);
    setIsExpanded(false);

    setTimeout(() => {
      setIsAnimating(false);
      setDirection(null);
    }, SLIDE_DURATION);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const getOutgoingClass = () => {
    if (!isAnimating) return "";
    return direction === "forward" ? "slide-out-left" : "slide-out-right";
  };

  const getIncomingClass = () => {
    if (!isAnimating) return "";
    return direction === "forward" ? "slide-in-from-right" : "slide-in-from-left";
  };

  const renderContent = (index: number) => (
    <div className="services-inner">
      {/* Middle Column - Text Content */}
      <div className="services-text">
        <div className="text-wrapper">
          <span className="text-subtitle">
            {services[index].subtitle}
          </span>

          <h2 className="text-title">
            {services[index].title}
          </h2>

          <p className="text-description">
            {services[index].description}
          </p>

          <a
            href={services[index].link}
            className="text-link"
          >
            LEARN MORE
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
              <path
                d="M0 6H20"
                stroke="#E65100"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M15 1L21 6L15 11"
                stroke="#E65100"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="services-image">
        <img
          src={services[index].image}
          alt={services[index].title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );

  return (
    <div 
      className="services-container-outer box-border caret-transparent py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-0"
      style={{
        // Typography
        "--subtitle-size": SUBTITLE_FONT_SIZE,
        "--title-size": TITLE_FONT_SIZE,
        "--desc-size": DESCRIPTION_FONT_SIZE,
        "--link-size": LINK_FONT_SIZE,
        "--sidebar-title-size": SIDEBAR_TITLE_SIZE,
        "--sidebar-number-size": SIDEBAR_NUMBER_SIZE,
        // Spacing - Middle column
        "--text-padding": TEXT_PADDING,
        "--element-gap": ELEMENT_GAP,
        "--desc-margin-left": DESCRIPTION_MARGIN_LEFT,
        "--desc-max-width": DESCRIPTION_MAX_WIDTH,
        // Spacing - Gap between middle and right
        "--middle-right-gap": MIDDLE_RIGHT_GAP,
        "--middle-right-gap-small": MIDDLE_RIGHT_GAP_SMALL,
        // Spacing - Sidebar
        "--sidebar-item-gap-y": SIDEBAR_ITEM_GAP_Y,
        "--sidebar-item-gap-x": SIDEBAR_ITEM_GAP_X,
        "--sidebar-item-inner-gap": SIDEBAR_ITEM_INNER_GAP,
        "--sidebar-padding-y": SIDEBAR_PADDING_Y,
        // Spacing - Right column (fixed)
        "--image-margin-right": IMAGE_MARGIN_RIGHT,
        // Sidebar (Left)
        "--sidebar-flex": SIDEBAR_FLEX,
        "--sidebar-width": SIDEBAR_WIDTH_PERCENT,
        "--sidebar-min": SIDEBAR_MIN_PERCENT,
        "--sidebar-max": SIDEBAR_MAX_PERCENT,
        // Text (Middle)
        "--text-flex": TEXT_FLEX,
        "--text-width": TEXT_WIDTH_PERCENT,
        "--text-min": TEXT_MIN_PERCENT,
        "--text-max": TEXT_MAX_PERCENT,
        // Image (Right)
        "--image-flex": IMAGE_FLEX,
        "--image-width": IMAGE_WIDTH_PERCENT,
        "--image-min": IMAGE_MIN_PERCENT,
        "--image-max": IMAGE_MAX_PERCENT,
        // Heights & Aspect Ratios
        "--content-aspect-lg": CONTENT_ASPECT_RATIO_LG,
        "--content-aspect-md": CONTENT_ASPECT_RATIO_MD,
        "--content-aspect-sm": CONTENT_ASPECT_RATIO_SM,
        "--content-h-mobile": CONTENT_HEIGHT_MOBILE,
        "--content-min-h": CONTENT_MIN_HEIGHT_LG,
        "--content-max-h": CONTENT_MAX_HEIGHT_LG,
        "--img-h-mobile": IMAGE_HEIGHT_MOBILE,
        "--img-h-sm": IMAGE_HEIGHT_SM,
        "--img-h-md": IMAGE_HEIGHT_MD,
      } as React.CSSProperties}
    >
      <style>{`
        @keyframes slideOutLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        @keyframes slideInFromRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0); }
          to { transform: translateX(100%); }
        }
        @keyframes slideInFromLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        
        .slide-out-left {
          animation: slideOutLeft ${SLIDE_DURATION}ms ease-in-out forwards;
        }
        .slide-in-from-right {
          animation: slideInFromRight ${SLIDE_DURATION}ms ease-in-out forwards;
        }
        .slide-out-right {
          animation: slideOutRight ${SLIDE_DURATION}ms ease-in-out forwards;
        }
        .slide-in-from-left {
          animation: slideInFromLeft ${SLIDE_DURATION}ms ease-in-out forwards;
        }

        /* ===========================================
           SCREENS 1065px AND BELOW: 40px margins and gap
           =========================================== */
        @media (max-width: 1065px) {
          .services-container-outer {
            padding-left: 40px !important;
            padding-right: 40px !important;
          }
          .services-container-inner {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          /* Increase sidebar font sizes */
          .sidebar-title {
            font-size: clamp(16px, 2.5vw, 20px) !important;
          }
          .sidebar-number {
            font-size: clamp(14px, 2.2vw, 18px) !important;
          }
          /* Add border radius to right column */
          .services-content {
            border-radius: 0.5rem;
            overflow: hidden;
          }
          .services-image {
            border-radius: 0.5rem !important;
          }
        }

        /* ===========================================
           MOBILE: Stacked Layout (< 640px)
           =========================================== */
        
        .services-sidebar {
          width: 100%;
          flex-shrink: 0;
          padding-top: var(--sidebar-padding-y);
          padding-bottom: var(--sidebar-padding-y);
        }

        .services-content {
          flex: 1;
          overflow: hidden;
          position: relative;
          height: var(--content-h-mobile);
        }

        .services-inner {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          width: 100%;
          height: 100%;
        }

        .services-text {
          width: 100%;
          padding: var(--text-padding);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .text-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: var(--element-gap);
        }

        /* Middle column text elements - responsive */
        .text-subtitle {
          display: block;
          color: #C62828;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          line-height: 1.6;
          font-size: var(--subtitle-size);
        }

        .text-title {
          font-weight: 400;
          font-style: italic;
          color: #1a1a1a;
          line-height: 1.1;
          margin: 0;
          font-size: var(--title-size);
          font-family: Georgia, Times New Roman, serif;
        }

        .text-description {
          color: #5a5a5a;
          line-height: 1.8;
          margin: 0;
          font-size: var(--desc-size);
          margin-left: var(--desc-margin-left);
          max-width: var(--desc-max-width);
        }

        .text-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #1a1a1a;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          font-size: var(--link-size);
          transition: color 0.2s;
        }

        .text-link:hover {
          color: #C62828;
        }

        .services-image {
          width: 100%;
          height: var(--img-h-mobile);
          overflow: hidden;
          border-radius: 0.5rem;
          flex-shrink: 0;
        }

        /* Sidebar item styling - responsive gaps */
        .sidebar-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: var(--sidebar-item-inner-gap);
          padding: var(--sidebar-item-gap-y) var(--sidebar-item-gap-x);
          cursor: pointer;
          user-select: none;
        }

        .sidebar-number {
          font-weight: 400;
          min-width: 20px;
          transition: all 0.3s;
          font-size: var(--sidebar-number-size);
        }

        .sidebar-title {
          line-height: 1.4;
          transition: all 0.3s;
          font-size: var(--sidebar-title-size);
        }

        /* ===========================================
           SMALL TABLETS (640px+)
           =========================================== */
        @media (min-width: 640px) {
          .services-main {
            aspect-ratio: var(--content-aspect-sm);
          }
          
          .services-image {
            height: var(--img-h-sm);
          }
        }

        /* ===========================================
           TABLETS (768px+)
           =========================================== */
        @media (min-width: 768px) {
          .services-main {
            aspect-ratio: var(--content-aspect-md);
          }
          
          .services-image {
            height: var(--img-h-md);
          }
        }

        /* ===========================================
           TABLET / SMALL DESKTOP / MOBILE (1065px and below)
           2-Column Layout: Sidebar | [Image / Text]
           
           - 40px gap between sidebar and content
           - 40px left/right margins handled by container
           =========================================== */
        @media (max-width: 1065px) {
          /* Parent container - flex with 40px gap */
          .services-main {
            display: flex;
            flex-direction: row;
            max-width: 100%;
            box-sizing: border-box;
            aspect-ratio: auto;
            height: auto;
            min-height: 500px;
            gap: 40px;
          }

          /* Sidebar - Fluid percentage width
             Adjusted calc to account for 40px gap */
          .services-sidebar {
            width: calc(50% - 20px);
            box-sizing: border-box;
            vertical-align: top;
            height: 345px;
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
            padding-right: 0;
            flex-shrink: 0;
          }

          /* Content Wrapper - takes remaining 50% minus half the gap */
          .services-content {
            width: calc(50% - 20px);
            box-sizing: border-box;
            flex: 1 1 auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }

          /* Inner Content (Text + Image) */
          .services-inner {
            display: flex;
            flex-direction: column-reverse; /* Image Top, Text Bottom */
            height: 100%;
            gap: 0;
            padding-right: 0;
          }

          /* Image */
          .services-image {
            width: 100%;
            height: 260px;
            flex: 0 0 auto;
          }

          /* Text */
          .services-text {
            width: 100%;
            flex: 1;
            padding: 1.5rem 1.5rem 1.5rem 0;
            max-width: none;
            justify-content: flex-start;
          }
          
          .text-description {
            margin-left: 20px;
            max-width: 100%;
          }
          
          /* Sidebar items - scale proportionally with sidebar width */
          .sidebar-item {
            padding: clamp(0.25rem, 0.75vw, 0.375rem) clamp(1rem, 2.5vw, 1.5rem);
          }
        }

        /* ===========================================
           DESKTOP: Side-by-Side Layout (1066px+)
           =========================================== */
        @media (min-width: 1066px) {
          .services-main {
            display: flex;
            flex-direction: row;
            aspect-ratio: var(--content-aspect-lg);
          }

          /* LEFT COLUMN - Sidebar: scales equally with others (flex-shrink: 1) */
          .services-sidebar {
            flex: var(--sidebar-flex) 1 var(--sidebar-width);
            max-width: var(--sidebar-max);
            height: 100%;
          }

          .services-content {
            flex: 1 1 auto;
            height: 100%;
          }

          /* Inner container with fixed right margin and gap */
          .services-inner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: var(--middle-right-gap);
            height: 100%;
            padding-right: var(--image-margin-right);
          }

          /* MIDDLE COLUMN - Text: scales equally with others (flex-shrink: 1) */
          .services-text {
            flex: var(--text-flex) 1 var(--text-width);
            max-width: var(--text-max);
            height: 100%;
          }

          /* RIGHT COLUMN - Image: shrinks with others (flex-shrink: 1) */
          .services-image {
            flex: var(--image-flex) 1 var(--image-width);
            max-width: var(--image-max);
            height: 100%;
          }
        }

        /* ===========================================
           BETWEEN 1120px - 1200px: Reduce gap only
           =========================================== */
        @media (min-width: 1066px) and (max-width: 1200px) {
          .services-inner {
            gap: var(--middle-right-gap-small);
          }
        }

        /* ===========================================
           FIRST DECREASE (1220px): Partial reduction
           =========================================== */
        @media (min-width: 1066px) and (max-width: 1220px) {
          /* Partial reduction - sidebar */
          .sidebar-number {
            font-size: 13px !important;
          }
          .sidebar-title {
            font-size: 15px !important;
          }
          .sidebar-item {
            gap: 0.5rem !important;
            padding: 0.5rem 1.2rem !important;
          }

          /* Partial reduction - middle column */
          .services-text {
            padding: 2rem !important;
          }
          .text-wrapper {
            gap: 0.8rem !important;
          }
          .text-subtitle {
            font-size: 12px !important;
          }
          .text-title {
            font-size: 30px !important;
          }
          .text-description {
            font-size: 13px !important;
            margin-left: 1.2rem !important;
          }
          .text-link {
            font-size: 11px !important;
          }
        }

        /* ===========================================
           SECOND DECREASE (1120px): Slight reduction
           =========================================== */
        @media (min-width: 1066px) and (max-width: 1120px) {
          /* Slight reduction - sidebar */
          .sidebar-number {
            font-size: 12px !important;
          }
          .sidebar-title {
            font-size: 14px !important;
          }
          .sidebar-item {
            gap: 0.45rem !important;
            padding: 0.45rem 1.1rem !important;
          }

          /* Slight reduction - middle column */
          .services-text {
            padding: 1.75rem !important;
          }
          .text-wrapper {
            gap: 0.7rem !important;
          }
          .text-subtitle {
            font-size: 11px !important;
          }
          .text-title {
            font-size: 28px !important;
          }
          .text-description {
            font-size: 12.5px !important;
            margin-left: 1rem !important;
          }
          .text-link {
            font-size: 10.5px !important;
          }
        }

        /* ===========================================
           MOBILE COLLAPSIBLE SIDEBAR (< 669px)
           Stacked layout: Sidebar on top, Content below
           Sidebar becomes collapsible
           =========================================== */
        
        /* Hide collapsible by default, show desktop version */
        .sidebar-collapsible {
          display: none;
        }
        .sidebar-desktop-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
        }

        @media (max-width: 668px) {
          /* Show collapsible, hide desktop */
          .sidebar-collapsible {
            display: block !important;
          }
          .sidebar-desktop-content {
            display: none !important;
          }

          /* Change to stacked layout */
          .services-main {
            flex-direction: column !important;
            gap: 1.25rem !important;
            min-height: auto !important;
            height: auto !important;
          }

          /* Sidebar - 100% width on top */
          .services-sidebar {
            width: 100% !important;
            height: auto !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            overflow: hidden;
            transition: height 280ms cubic-bezier(0.4, 0, 0.2, 1);
          }

          /* Content - 100% width below */
          .services-content {
            width: 100% !important;
            height: auto !important;
            min-height: auto !important;
            position: relative;
          }

          /* Fix absolute positioning for mobile - make content flow naturally */
          .services-content > div {
            position: relative !important;
            inset: auto !important;
          }

          /* Hide outgoing content on mobile to prevent stacking */
          .services-content > div.slide-out-left,
          .services-content > div.slide-out-right {
            display: none !important;
          }

          /* Inner content - stacked vertically */
          .services-inner {
            display: flex !important;
            flex-direction: column !important;
            position: relative !important;
            height: auto !important;
          }

          /* Image */
          .services-image {
            width: 100% !important;
            height: 280px !important;
            flex-shrink: 0;
          }

          /* Text - proper height wrapping */
          .services-text {
            width: 100% !important;
            height: auto !important;
            flex: none !important;
            padding: 1.5rem !important;
          }

          .text-wrapper {
            height: auto !important;
          }

          .text-description {
            margin-left: 0 !important;
          }
          
          /* Collapsed header row */
          .sidebar-collapsed-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem 1.25rem;
            cursor: pointer;
            user-select: none;
            width: 100%;
          }
          
          .sidebar-collapsed-left {
            display: flex;
            align-items: center;
            gap: 0.75rem;
          }
          
          .sidebar-collapsed-number {
            font-size: 16px;
            font-weight: 400;
            color: white;
            min-width: 24px;
          }
          
          .sidebar-collapsed-title {
            font-size: 18px;
            font-weight: 600;
            color: white;
          }
          
          .sidebar-chevron {
            transition: transform 280ms cubic-bezier(0.4, 0, 0.2, 1);
            color: white;
          }
          
          .sidebar-chevron.expanded {
            transform: rotate(180deg);
          }
          
          /* Expanded content wrapper */
          .sidebar-expanded-content {
            overflow: hidden;
            transition: max-height 280ms cubic-bezier(0.4, 0, 0.2, 1), 
                        opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);
            max-height: 0;
            opacity: 0;
          }
          
          .sidebar-expanded-content.expanded {
            opacity: 1;
          }
          
          /* Divider line */
          .sidebar-divider {
            height: 1px;
            background: rgba(255, 255, 255, 0.2);
            margin: 0 1.25rem;
          }
          
          /* Expanded list items */
          .sidebar-expanded-list {
            padding: 0.5rem 0 1rem 0;
            max-height: 60vh;
            overflow-y: auto;
          }
          
          .sidebar-expanded-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.6rem 1.25rem;
            cursor: pointer;
            user-select: none;
            transition: opacity 150ms ease;
          }
          
          .sidebar-expanded-item.active {
            opacity: 1;
          }
          
          .sidebar-expanded-item.inactive {
            opacity: 0.5;
          }
          
          .sidebar-expanded-item:hover {
            opacity: 1;
          }
          
          .sidebar-expanded-number {
            font-size: 14px;
            font-weight: 400;
            color: white;
            min-width: 24px;
          }
          
          .sidebar-expanded-title {
            font-size: 16px;
            color: white;
          }
          
          .sidebar-expanded-item.active .sidebar-expanded-title {
            font-weight: 600;
          }
          
          .sidebar-expanded-item.inactive .sidebar-expanded-title {
            font-weight: 400;
          }
        }
      `}</style>

      <div className="services-container-inner box-border caret-transparent max-w-[1400px] mx-auto lg:px-16">
        <div className="box-border caret-transparent mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-[72px] box-border caret-transparent leading-[1.1] break-words mb-6 font-apfel_grotezk">
            Our services
          </h2>
          <p className="box-border caret-transparent break-words text-base sm:text-lg md:text-xl max-w-[800px]">
            We oversee project lifecycles with structured planning, disciplined coordination, and precise control to ensure timely dependable results.
          </p>
        </div>

        <div className="services-main box-border caret-transparent flex flex-col bg-white rounded-lg overflow-hidden lg:flex-row">
          
          {/* LEFT COLUMN - Sidebar */}
          <div 
            ref={sidebarRef}
            className="services-sidebar bg-[#2B7DE9] box-border caret-transparent rounded-lg flex flex-col justify-center"
          >
            {/* COLLAPSIBLE VERSION (shown on screens < 669px) */}
            <div className="sidebar-collapsible">
              {/* Collapsed Header Row */}
              <div 
                className="sidebar-collapsed-header"
                onClick={toggleExpanded}
              >
                <div className="sidebar-collapsed-left">
                  <span className="sidebar-collapsed-number">
                    {services[activeIndex].number}
                  </span>
                  <span className="sidebar-collapsed-title">
                    {services[activeIndex].title}
                  </span>
                </div>
                <svg 
                  className={`sidebar-chevron ${isExpanded ? 'expanded' : ''}`}
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              
              {/* Expanded Content */}
              <div 
                ref={expandedContentRef}
                className={`sidebar-expanded-content ${isExpanded ? 'expanded' : ''}`}
                style={{
                  maxHeight: isExpanded ? `${expandedHeight}px` : '0px'
                }}
              >
                <div className="sidebar-divider"></div>
                <div className="sidebar-expanded-list">
                  {services.map((service, index) => (
                    <div
                      key={service.id}
                      onClick={() => handleServiceClick(index)}
                      className={`sidebar-expanded-item ${index === activeIndex ? 'active' : 'inactive'}`}
                    >
                      <span className="sidebar-expanded-number">
                        {service.number}
                      </span>
                      <span className="sidebar-expanded-title">
                        {service.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* DESKTOP VERSION (shown on screens >= 669px) */}
            <div className="sidebar-desktop-content">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  onClick={() => handleServiceClick(index)}
                  className="sidebar-item"
                >
                  {index === activeIndex && (
                    <div
                      className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-white animate-line-in"
                      style={{
                        width: "14px",
                        transformOrigin: "left center",
                      }}
                    />
                  )}

                  {index === previousIndex &&
                    index !== activeIndex &&
                    isAnimating && (
                      <div
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-white animate-line-out-slow"
                        style={{
                          width: "14px",
                          transformOrigin: "right center",
                        }}
                      />
                    )}

                  <span
                    className={`sidebar-number ${
                      index === activeIndex ? "text-white" : "text-white/50"
                    }`}
                    style={{
                      marginLeft: index === activeIndex ? "16px" : "0",
                    }}
                  >
                    {service.number}
                  </span>

                  <span
                    className={`sidebar-title ${
                      index === activeIndex
                        ? "font-semibold text-white"
                        : "font-normal text-white/50"
                    }`}
                  >
                    {service.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* MIDDLE + RIGHT COLUMNS - Content Area */}
          <div className="services-content">
            {isAnimating && (
              <div 
                key={`outgoing-${previousIndex}`}
                className={`absolute inset-0 ${getOutgoingClass()}`}
              >
                {renderContent(previousIndex)}
              </div>
            )}

            <div 
              key={`current-${activeIndex}`}
              className={`absolute inset-0 ${getIncomingClass()}`}
            >
              {renderContent(activeIndex)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
