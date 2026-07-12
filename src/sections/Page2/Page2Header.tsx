import { useState, useEffect, useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/Button";
import { SocialLinks } from "@/components/SocialLinks";
import { projectNavItems, type ProjectNavItem } from "@/sections/Projects/data/projects";
import { solutionsNav } from "@/sections/Page2/data/solutionsNav";

export type CompanyItem = {
  name: string;
  description: string;
  category: string;
  color: string;
  logo?: string;
  url?: string;
};

type ServiceItem = {
  name: string;
  description: string;
  url?: string;
};

type SolutionItem = {
  name: string;
  description?: string;
  url?: string;
};

type CompanyNavItem = {
  name: string;
  description: string;
  url?: string;
};

type PartnershipItem = {
  name: string;
  description?: string;
  url?: string;
};

type SubmenuNavLinkProps = {
  to: string;
  onClick: () => void;
  children: ReactNode;
  variant?: "desktop" | "mobile";
};

const SubmenuNavLink = ({
  to,
  onClick,
  children,
  variant = "desktop",
  index = 0,
}: SubmenuNavLinkProps & { index?: number }) => (
  <Link
    to={to}
    onClick={onClick}
    style={variant === "desktop" ? { animationDelay: `${120 + index * 70}ms` } : undefined}
    className={
      variant === "desktop"
        ? "submenu-link-item group flex items-center rounded-md px-3 py-2.5 text-sm font-semibold text-[#121e37] transition-all duration-300 ease-out hover:bg-red-50 hover:text-red-600"
        : "group flex items-center rounded-md px-3 py-2 text-sm text-[#121e37] outline-none transition-all duration-300 ease-out hover:bg-red-50 hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
    }
  >
    <span
      aria-hidden
      className={`inline-flex shrink-0 overflow-hidden transition-all duration-300 ease-out ${
        variant === "desktop"
          ? "mr-0 w-0 opacity-0 group-hover:mr-2 group-hover:w-[14px] group-hover:opacity-100"
          : "mr-2 w-[14px] opacity-70"
      }`}
    >
      <ArrowRight className="h-3.5 w-3.5 text-red-600" />
    </span>
    <span className="whitespace-nowrap">{children}</span>
  </Link>
);

const companyNavItems: CompanyNavItem[] = [
  {
    name: "About Us",
    description: "Our story and mission",
    url: "/about",
  },
  {
    name: "Chairman's Message",
    description: "Leadership vision and direction",
    url: "/chairmans-message",
  },
  {
    name: "Growth & Expansion Strategy",
    description: "Our strategic roadmap",
    url: "/growth-expansion-strategy",
  },
  {
    name: "Certifications",
    description: "Quality, environment, and safety standards",
    url: "/certifications",
  },
];

const services: ServiceItem[] = [
  {
    name: "Engineering",
    description: "FEED and detailed design",
    url: "/services/engineering",
  },
  {
    name: "Procurement",
    description: "Global vendor sourcing",
    url: "/services/procurement",
  },
  {
    name: "Construction",
    description: "Civil works & installation",
    url: "/services/construction",
  },
  {
    name: "Commissioning",
    description: "Startup & verification",
    url: "/services/commissioning",
  },
  {
    name: "EPCC (Turnkey)",
    description: "Single-window delivery",
    url: "/services/epcc",
  },
  {
    name: "Transportation",
    description: "Petroleum logistics",
    url: "/services/transportation",
  },
];

const solutions: SolutionItem[] = solutionsNav;

const partnerships: PartnershipItem[] = [
  {
    name: "HONEYWELL UOP",
  },
  {
    name: "KELLOGG BROWN & ROOT",
  },
];

export const companies: CompanyItem[] = [
  {
    name: "TAQAT KIRKUK",
    description: "Gasoline production",
    category: "Energy & Downstream Operations",
    color: "#DC2626",
    logo: "https://c.animaapp.com/mkkxt1y8OC5kKc/img/uploaded-asset-1770297935851-1.jpeg",
    url: "/companies/taqat"
  },
  {
    name: "Northern Covenant",
    description: "Oil services",
    category: "Energy & Downstream Operations",
    color: "#EA580C",
    logo: "https://c.animaapp.com/mkkxt1y8OC5kKc/img/uploaded-asset-1770300126445-0.jpeg",
    url: "/companies/northern-covenant"
  },
  {
    name: "Bryar Transport",
    description: "Oil logistics & marketing",
    category: "Energy & Downstream Operations",
    color: "#D97706",
    logo: "https://c.animaapp.com/mkkxt1y8OC5kKc/img/uploaded-asset-1770299485008-1.jpeg",
    url: "/companies/bryar-transport"
  },
  {
    name: "Barham Black Gold",
    description: "Asphalt production",
    category: "Asphalt, Construction & Building Materials",
    color: "#65A30D",
    logo: "https://c.animaapp.com/mkkxt1y8OC5kKc/img/uploaded-asset-1770299485008-0.jpeg",
    url: "/companies/barham-black-gold"
  },
  {
    name: "Rahand Company",
    description: "Concrete blocks",
    category: "Asphalt, Construction & Building Materials",
    color: "#059669",
    logo: "https://c.animaapp.com/mkkxt1y8OC5kKc/img/uploaded-asset-1770297935854-2.jpeg",
    url: "/companies/rahand"
  },
  {
    name: "Binaa Al Sahraa",
    description: "General contracting",
    category: "Asphalt, Construction & Building Materials",
    color: "#0891B2",
    logo: "https://c.animaapp.com/mkkxt1y8OC5kKc/img/uploaded-asset-1770299485008-2.jpeg",
    url: "/companies/binaa-al-sahraa"
  },
  {
    name: "Gashbin GmbH",
    description: "Real estate investment",
    category: "Real Estate & Investment",
    color: "#0284C7",
    logo: "https://c.animaapp.com/mkkxt1y8OC5kKc/img/uploaded-asset-1770300126445-1.jpeg",
    url: "/companies/gashbin"
  },
  {
    name: "Al Barham DMCC",
    description: "Investment holding",
    category: "Real Estate & Investment",
    color: "#7C3AED",
    url: "/companies/al-barham-dmcc"
  }
];

export const Page2Header = () => {
  const showCompaniesMenu = false; // set to true to re-enable
  const showServicesMenu = false; // set to true to re-enable
  const showPartnershipMenu = false; // set to true to re-enable

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<CompanyItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectNavItem | null>(null);
  const [dropdownStyle, setDropdownStyle] = useState<any>({});
  const [isHoveringNav, setIsHoveringNav] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const navRef = useRef<HTMLElement>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const dropdownContainerRef = useRef<HTMLDivElement>(null);
  const dropdownPanelRef = useRef<HTMLDivElement>(null);
  const lastScrollYRef = useRef(0);

  const HEADER_HIDE_THRESHOLD = 300;
  const SCROLL_DELTA_MIN = 8;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollYRef.current;
      lastScrollYRef.current = scrollY;

      setIsScrolled(scrollY > 20);

      if (scrollY <= HEADER_HIDE_THRESHOLD) {
        setIsHeaderVisible(true);
        return;
      }

      if (delta > SCROLL_DELTA_MIN) {
        setIsHeaderVisible(false);
        setActiveDropdown(null);
        setIsHoveringNav(false);
        setSelectedCompany(null);
        setSelectedProject(null);
      } else if (delta < -SCROLL_DELTA_MIN) {
        setIsHeaderVisible(true);
      }
    };

    lastScrollYRef.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showSolidHeader = isHoveringNav || (isScrolled && isHeaderVisible);
  const isLightHeader = showSolidHeader;

  const headerShellClass = isLightHeader
    ? "bg-white shadow-[0_8px_30px_-20px_rgba(18,30,55,0.35)] ring-1 ring-black/[0.05] duration-300"
    : "bg-transparent duration-1000";

  const navItemClass = `nav-item-hover flex items-center space-x-1 text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${
    isLightHeader
      ? "text-[#121e37] hover:text-red-600"
      : "text-white hover:text-red-200"
  }`;

  const navItemActiveClass = isLightHeader ? "text-red-600" : "text-red-200";

  const careersLinkClass = `nav-item-hover text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${
    isLightHeader
      ? "text-[#121e37] hover:text-red-600"
      : "text-white hover:text-red-200"
  }`;

  const menuIconClass = isLightHeader ? "text-[#121e37]" : "text-white";

  const closeDropdown = () => {
    setActiveDropdown(null);
    setIsHoveringNav(false);
    setSelectedCompany(null);
    setSelectedProject(null);
  };

  const handleMouseEnter = (menu: string, event: React.MouseEvent<HTMLButtonElement>) => {
    setActiveDropdown(menu);
    setIsHoveringNav(true);

    const button = event.currentTarget;
    const buttonRect = button.getBoundingClientRect();
    const navRect = navRef.current?.getBoundingClientRect();

    if (!navRect) return;

    let width = 420;
    if (menu === "companies" || menu === "projects") width = 680;
    else if (menu === "services") width = 520;
    else if (menu === "company") width = 290;
    else if (menu === "solutions") width = 320;

    const isCompactDropdown = menu === "company" || menu === "solutions";

    const viewportPadding = 24;
    let leftPosition = buttonRect.left - 35;

    if (menu === "companies") {
      leftPosition = buttonRect.right - width + 35;
    } else if (menu === "projects") {
      leftPosition = buttonRect.left + buttonRect.width / 2 - width / 2;
    }

    const layoutWidth = width;
    const maxLeft = window.innerWidth - layoutWidth - viewportPadding;
    leftPosition = Math.max(viewportPadding, Math.min(leftPosition, maxLeft));

    const desiredGap = 5;
    const containerTop = buttonRect.bottom - navRect.top + desiredGap;

    setDropdownStyle({
      width: isCompactDropdown ? "max-content" : `${width}px`,
      layoutWidth,
      left: `${leftPosition}px`,
      opacity: 1,
      gap: `${desiredGap}px`,
      containerTop: `${containerTop}px`
    });

    if (menu === "projects") {
      setSelectedProject(projectNavItems[0] ?? null);
    }
  };

  useEffect(() => {
    if (!activeDropdown) return;

    const isInsideRect = (x: number, y: number, r: DOMRect, pad = 0) => {
      return (
        x >= r.left - pad &&
        x <= r.right + pad &&
        y >= r.top - pad &&
        y <= r.bottom + pad
      );
    };

    const isInsideActiveMenuArea = (x: number, y: number) => {
      const triggerEl = dropdownRefs.current[activeDropdown];
      const panelEl = dropdownPanelRef.current;

      if (!triggerEl || !panelEl) return false;

      const t = triggerEl.getBoundingClientRect();
      const d = panelEl.getBoundingClientRect();

      if (isInsideRect(x, y, t, 4)) return true;
      if (isInsideRect(x, y, d, 8)) return true;

      const corridorLeft = Math.min(t.left, d.left) - 8;
      const corridorRight = Math.max(t.right, d.right) + 8;

      if (
        y >= t.bottom - 8 &&
        y <= d.top + 8 &&
        x >= corridorLeft &&
        x <= corridorRight
      ) {
        return true;
      }

      return false;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (isInsideActiveMenuArea(e.clientX, e.clientY)) return;
      closeDropdown();
    };

    const onPointerDown = (e: PointerEvent) => {
      if (isInsideActiveMenuArea(e.clientX, e.clientY)) return;
      closeDropdown();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDropdown();
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeDropdown]);

  const toggleMobileDropdown = (menu: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileActiveDropdown(null);
  };

  const openMobileMenu = () => {
    setIsHeaderVisible(true);
    setIsMobileMenuOpen(true);
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: translateY(-8px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes dropdownReveal {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes dropdownContentIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes submenuItemIn {
          from { opacity: 0; transform: translateX(-6px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0); }
          to { transform: translateX(100%); }
        }
        .dropdown-enter {
          animation: dropdownReveal 520ms cubic-bezier(0.33, 1, 0.68, 1) forwards;
        }
        .dropdown-content {
          animation: dropdownContentIn 480ms cubic-bezier(0.33, 1, 0.68, 1) 120ms forwards;
        }
        .submenu-link-item {
          animation: submenuItemIn 520ms cubic-bezier(0.33, 1, 0.68, 1) backwards;
        }
        .dropdown-exit {
          animation: fadeOut 150ms ease-out;
        }
        .mobile-drawer-enter {
          animation: slideInRight 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .mobile-drawer-exit {
          animation: slideOutRight 250ms ease-in;
        }
        .mobile-accordion {
          transition: max-height 300ms ease-out;
        }
        .chevron-rotate {
          transition: transform 450ms cubic-bezier(0.33, 1, 0.68, 1);
        }
        .nav-item-hover {
          transition: color 400ms cubic-bezier(0.33, 1, 0.68, 1), transform 400ms cubic-bezier(0.33, 1, 0.68, 1);
        }
        .nav-item-hover:hover {
          transform: translateY(-1px);
        }
      `}</style>

      <header
        ref={navRef}
        onMouseEnter={() => setIsHoveringNav(true)}
        onMouseLeave={(e) => {
          const related = e.relatedTarget as Node | null;
          if (related && navRef.current?.contains(related)) return;
          closeDropdown();
          setIsHoveringNav(false);
        }}
        className={`fixed top-0 left-0 right-0 z-[100] will-change-transform transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${isHeaderVisible ? "translate-y-0" : "-translate-y-full pointer-events-none"
          }`}
      >
        <div
          className={`overflow-visible py-[7.5px] transition-[background-color,box-shadow,border-color] ease-out motion-reduce:transition-none ${headerShellClass}`}
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="flex items-center justify-between h-auto py-4 min-h-[90px]">
              {/* Logo */}
              <div className="flex items-center">
                <Link to="/" className="relative block h-14">
                  <img
                    src="/ABG-Logo.svg"
                    alt="Al-Barham Group"
                    className={`h-14 w-auto transition-opacity duration-300 ease-out ${
                      isLightHeader ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <img
                    src="/ABG-Logo-blue.svg"
                    alt=""
                    aria-hidden
                    className={`absolute left-0 top-0 h-14 w-auto transition-opacity duration-300 ease-out ${
                      isLightHeader ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              </div>

              {/* Desktop Navigation (xl: 1200px+) */}
              <nav className="hidden xl:flex items-center justify-center flex-1 mx-8">
                <div className="flex items-center space-x-8">
                  <div className="relative">
                    <button
                      ref={(el) => (dropdownRefs.current["company"] = el)}
                      onMouseEnter={(e) => handleMouseEnter("company", e)}
                      className={`${navItemClass} ${activeDropdown === "company" ? navItemActiveClass : ""}`}
                      aria-label="Company menu"
                    >
                      <span>COMPANY</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-[450ms] ease-[cubic-bezier(0.33,1,0.68,1)] ${activeDropdown === "company" ? "rotate-180" : ""}`} />
                    </button>
                  </div>

                  <div className="relative">
                    <button
                      ref={(el) => (dropdownRefs.current["solutions"] = el)}
                      onMouseEnter={(e) => handleMouseEnter("solutions", e)}
                      className={`${navItemClass} ${activeDropdown === "solutions" ? navItemActiveClass : ""}`}
                      aria-label="Solutions menu"
                    >
                      <span>SOLUTIONS</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-[450ms] ease-[cubic-bezier(0.33,1,0.68,1)] ${activeDropdown === "solutions" ? "rotate-180" : ""}`} />
                    </button>
                  </div>

                  {showPartnershipMenu ? (
                    <div className="relative">
                      <button
                        ref={(el) => (dropdownRefs.current["partnership"] = el)}
                        onMouseEnter={(e) => handleMouseEnter("partnership", e)}
                        className={`${navItemClass} ${activeDropdown === "partnership" ? navItemActiveClass : ""}`}
                        aria-label="Our Partnership menu"
                      >
                        <span>OUR PARTNERSHIP</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-[450ms] ease-[cubic-bezier(0.33,1,0.68,1)] ${activeDropdown === "partnership" ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                  ) : null}

                  <div className="relative">
                    <button
                      ref={(el) => (dropdownRefs.current["projects"] = el)}
                      onMouseEnter={(e) => handleMouseEnter("projects", e)}
                      className={`${navItemClass} ${activeDropdown === "projects" ? navItemActiveClass : ""}`}
                      aria-label="Projects menu"
                    >
                      <span>PROJECTS</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-[450ms] ease-[cubic-bezier(0.33,1,0.68,1)] ${activeDropdown === "projects" ? "rotate-180" : ""}`} />
                    </button>
                  </div>

                  {showCompaniesMenu ? (
                    <div className="relative">
                      <button
                        ref={(el) => (dropdownRefs.current["companies"] = el)}
                        onMouseEnter={(e) => handleMouseEnter("companies", e)}
                        className={`${navItemClass} ${activeDropdown === "companies" ? navItemActiveClass : ""}`}
                        aria-label="Companies menu"
                      >
                        <span>COMPANIES</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-[450ms] ease-[cubic-bezier(0.33,1,0.68,1)] ${activeDropdown === "companies" ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                  ) : null}

                  {showServicesMenu ? (
                    <div className="relative">
                      <button
                        ref={(el) => (dropdownRefs.current["services"] = el)}
                        onMouseEnter={(e) => handleMouseEnter("services", e)}
                        className={`${navItemClass} ${activeDropdown === "services" ? navItemActiveClass : ""}`}
                        aria-label="Services menu"
                      >
                        <span>SERVICES</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-[450ms] ease-[cubic-bezier(0.33,1,0.68,1)] ${activeDropdown === "services" ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                  ) : null}

                  <Link
                    to="/careers"
                    className={careersLinkClass}
                  >
                    CAREERS
                  </Link>

                </div>
              </nav>

              {/* Desktop CTA + Social (xl: 1200px+) */}
              <div className="hidden xl:flex items-center gap-4">
                <SocialLinks
                  variant="header"
                  headerTone={isLightHeader ? "on-light" : "on-dark"}
                />
                <Button to="/contact" aria-label="Contact Us">
                  CONTACT US
                </Button>
              </div>

              {/* Mobile Hamburger Button (below xl) */}
              <button
                className="max-xl:block xl:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded"
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className={`w-6 h-6 transition-colors duration-300 ${menuIconClass}`} />
                ) : (
                  <Menu className={`w-6 h-6 transition-colors duration-300 ${menuIconClass}`} />
                )}
              </button>
            </div>
          </div>

          {/* Desktop Dropdown Container */}
          {activeDropdown && (
            <div
              ref={dropdownContainerRef}
              className="absolute left-0 right-0"
              style={{ top: dropdownStyle.containerTop }}
              onMouseEnter={() => setIsHoveringNav(true)}
            >
              <div
                className="absolute pointer-events-auto"
                style={{
                  left: dropdownStyle.left,
                  width: `${dropdownStyle.layoutWidth ?? dropdownStyle.width}px`,
                  top: "0px",
                  height: dropdownStyle.gap ?? "10px",
                  backgroundColor: "transparent",
                  zIndex: 40
                }}
              />

              <div
                ref={dropdownPanelRef}
                key={activeDropdown}
                className={`dropdown-enter absolute overflow-hidden rounded-xl bg-white pointer-events-auto shadow-[0_24px_60px_-16px_rgba(18,30,55,0.28)] ring-1 ring-black/[0.04] ${activeDropdown === "company" || activeDropdown === "solutions" ? "w-max" : ""}`}
                style={{
                  width: dropdownStyle.width,
                  left: dropdownStyle.left,
                  opacity: dropdownStyle.opacity,
                  transition: "left 550ms cubic-bezier(0.33, 1, 0.68, 1), width 550ms cubic-bezier(0.33, 1, 0.68, 1)",
                  top: dropdownStyle.gap ?? "10px",
                  zIndex: 50
                }}
              >
                <div className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-[#121e37]" />
                <div
                  key={`content-${activeDropdown}`}
                  className={`dropdown-content ${activeDropdown === "company" || activeDropdown === "solutions" ? "p-2" : "p-6"}`}
                >
                  {showCompaniesMenu && activeDropdown === "companies" ? (
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <Link
                          to="/companies"
                          className="block p-3 mb-2 rounded cursor-pointer transition-all duration-200 hover:translate-x-0.5 hover:bg-red-600 hover:text-white group"
                          onMouseEnter={() => setSelectedCompany(null)}
                          onClick={closeDropdown}
                        >
                          <h4 className="flex items-center text-sm font-bold text-foreground transition-colors duration-200 group-hover:text-white">
                            <span className="mr-2 h-2 w-2 rounded-full bg-red-600 transition-colors duration-200 group-hover:bg-white"></span>
                            Al Barham Group
                          </h4>
                        </Link>
                        <div className="border-t border-gray-200 mb-2"></div>
                        {companies.map((company, index) => {
                          const rowInner = (
                            <div className="flex items-center">
                              {company.logo ? (
                                <div className="w-8 h-8 rounded mr-3 flex items-center justify-center bg-white overflow-hidden border border-gray-100">
                                  <img src={company.logo} alt={company.name} className="w-full h-full object-contain" />
                                </div>
                              ) : (
                                <div
                                  className="w-8 h-8 rounded mr-3 flex items-center justify-center text-white text-xs font-bold"
                                  style={{ backgroundColor: company.color }}
                                >
                                  {company.name.charAt(0)}
                                </div>
                              )}
                              <div className="flex-1">
                                <h4 className="text-sm font-bold transition-colors duration-200 group-hover:text-white">
                                  {company.name}
                                </h4>
                              </div>
                              <span className="w-2 h-2 bg-gray-400 group-hover:bg-white rounded-full transition-colors"></span>
                            </div>
                          );
                          const rowClass =
                            "block p-3 rounded cursor-pointer transition-all duration-200 hover:translate-x-0.5 hover:bg-red-600 hover:text-white group";
                          return company.url ? (
                            <Link
                              key={index}
                              to={company.url}
                              className={rowClass}
                              onMouseEnter={() => setSelectedCompany(company)}
                              onClick={closeDropdown}
                            >
                              {rowInner}
                            </Link>
                          ) : (
                            <div
                              key={index}
                              className={rowClass}
                              onMouseEnter={() => setSelectedCompany(company)}
                            >
                              {rowInner}
                            </div>
                          );
                        })}
                      </div>

                      <div className="bg-gray-50 rounded-lg p-6">
                        {selectedCompany ? (
                          <>
                            {selectedCompany.logo ? (
                              <div className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center bg-white overflow-hidden border border-gray-100 p-2">
                                <img src={selectedCompany.logo} alt={selectedCompany.name} className="w-full h-full object-contain" />
                              </div>
                            ) : (
                              <div
                                className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center text-white text-2xl font-bold"
                                style={{ backgroundColor: selectedCompany.color }}
                              >
                                {selectedCompany.name.charAt(0)}
                              </div>
                            )}
                            <h3 className="text-xl font-bold text-foreground mb-2">{selectedCompany.name}</h3>
                            <p className="text-sm text-red-600 uppercase tracking-wide mb-3 font-semibold">
                              {selectedCompany.category}
                            </p>
                            <p className="text-foreground mb-4">{selectedCompany.description}</p>
                            {selectedCompany.url ? (
                              <Link
                                to={selectedCompany.url}
                                className="text-red-600 text-sm font-semibold hover:text-red-800 transition-colors"
                                onClick={closeDropdown}
                              >
                                Explore Company →
                              </Link>
                            ) : null}
                          </>
                        ) : (
                          <>
                            <div className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br from-red-600 to-red-800 text-white text-2xl font-bold">
                              AB
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">Al Barham Group</h3>
                            <p className="text-sm text-red-600 uppercase tracking-wide mb-3 font-semibold">
                              8 Companies
                            </p>
                            <p className="text-foreground mb-4">
                              A diversified holding group with operations spanning energy, construction, real estate, and investment sectors across Iraq and the region.
                            </p>
                            <Link
                              to="/companies"
                              className="text-red-600 text-sm font-semibold hover:text-red-800 transition-colors"
                              onClick={closeDropdown}
                            >
                              View All Companies →
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  ) : null}

                  {showServicesMenu && activeDropdown === "services" ? (
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service) => {
                        const inner = (
                          <>
                            <h4 className="mb-1 text-sm font-bold text-foreground transition-colors duration-200 group-hover:text-white">
                              {service.name}
                            </h4>
                            <p className="text-xs text-foreground transition-colors duration-200 group-hover:text-white/85">
                              {service.description}
                            </p>
                          </>
                        );
                        return service.url ? (
                          <Link
                            key={service.name}
                            to={service.url}
                            onClick={closeDropdown}
                            className="block rounded p-3 transition-all duration-200 hover:bg-red-600 hover:text-white group"
                          >
                            {inner}
                          </Link>
                        ) : (
                          <div
                            key={service.name}
                            className="p-3 rounded opacity-60 cursor-not-allowed"
                            aria-disabled="true"
                          >
                            {inner}
                          </div>
                        );
                      })}
                    </div>
                  ) : null}

                  {activeDropdown === "solutions" && (
                    <div className="flex flex-col">
                      {solutions.map((solution, index) =>
                        solution.url ? (
                          <SubmenuNavLink
                            key={solution.name}
                            to={solution.url}
                            onClick={closeDropdown}
                            index={index}
                          >
                            {solution.name}
                          </SubmenuNavLink>
                        ) : (
                          <span
                            key={solution.name}
                            className="block whitespace-nowrap px-3 py-2 text-sm font-semibold text-foreground opacity-60 cursor-not-allowed"
                            aria-disabled="true"
                          >
                            {solution.name}
                          </span>
                        ),
                      )}
                    </div>
                  )}

                  {showPartnershipMenu && activeDropdown === "partnership" && (
                    <div className="space-y-3">
                      {partnerships.map((partner) => {
                        const inner = (
                          <>
                            <h4 className="mb-1 text-sm font-bold text-foreground transition-colors duration-200 group-hover:text-white">
                              {partner.name}
                            </h4>
                            {partner.description && (
                              <p className="text-xs text-foreground transition-colors duration-200 group-hover:text-white/85">
                                {partner.description}
                              </p>
                            )}
                          </>
                        );
                        return partner.url ? (
                          <Link
                            key={partner.name}
                            to={partner.url}
                            onClick={closeDropdown}
                            className="block rounded p-3 transition-all duration-200 hover:bg-red-600 hover:text-white group"
                          >
                            {inner}
                          </Link>
                        ) : (
                          <div
                            key={partner.name}
                            className="p-3 rounded opacity-60 cursor-not-allowed"
                            aria-disabled="true"
                          >
                            {inner}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {activeDropdown === "projects" && (() => {
                    const activeProject = selectedProject ?? projectNavItems[0];
                    if (!activeProject) return null;

                    return (
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-foreground/60">
                            Key Projects
                          </h3>
                          {projectNavItems.map((project, index) => {
                            const displayName = project.menuName ?? project.name;
                            const isActive =
                              project.slug === activeProject.slug ||
                              project.url === activeProject.url;
                            const rowInner = (
                              <div className="flex items-center">
                                {project.logo ? (
                                  <div className="mr-3 h-8 w-8 shrink-0 overflow-hidden rounded bg-gray-200">
                                    <img
                                      src={project.logo}
                                      alt={displayName}
                                      className="h-full w-full object-cover"
                                    />
                                  </div>
                                ) : (
                                  <div
                                    className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded text-xs font-bold text-white"
                                    style={{ backgroundColor: project.color }}
                                  >
                                    {displayName.charAt(0)}
                                  </div>
                                )}
                                <div className="flex-1">
                                  <h4
                                    className={`text-sm font-bold leading-snug transition-colors ${isActive
                                      ? "text-white"
                                      : "text-foreground group-hover:text-white"
                                      }`}
                                  >
                                    {displayName}
                                  </h4>
                                </div>
                              </div>
                            );
                            const rowClass = `submenu-link-item group relative block cursor-pointer overflow-hidden rounded-md border p-3 transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] hover:translate-x-0.5 ${isActive
                              ? "border-red-600 bg-red-600"
                              : "border-transparent hover:border-red-600 hover:bg-red-600"
                              }`;
                            return project.url ? (
                              <Link
                                key={index}
                                to={project.url}
                                className={rowClass}
                                style={{ animationDelay: `${120 + index * 70}ms` }}
                                onMouseEnter={() => setSelectedProject(project)}
                                onClick={closeDropdown}
                              >
                                {rowInner}
                              </Link>
                            ) : (
                              <div
                                key={index}
                                className={rowClass}
                                style={{ animationDelay: `${120 + index * 70}ms` }}
                                onMouseEnter={() => setSelectedProject(project)}
                              >
                                {rowInner}
                              </div>
                            );
                          })}
                        </div>

                        <div className="rounded-lg bg-gray-50 p-6">
                          {activeProject.logo ? (
                            <div className="mb-4 aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-200">
                              <img
                                src={activeProject.logo}
                                alt={activeProject.menuName ?? activeProject.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          ) : (
                            <div
                              className="mb-4 flex h-32 w-32 items-center justify-center rounded-lg text-2xl font-bold text-white"
                              style={{ backgroundColor: activeProject.color }}
                            >
                              {(activeProject.menuName ?? activeProject.name).charAt(0)}
                            </div>
                          )}
                          {activeProject.statusLabel ? (
                            <div className="mb-3">
                              <span className="inline-block bg-red-600 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                                {activeProject.statusLabel}
                              </span>
                            </div>
                          ) : null}
                          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-red-600">
                            {activeProject.category}
                          </p>
                          <p className="mb-4 text-base text-foreground">
                            {activeProject.description}
                          </p>
                          {activeProject.url ? (
                            <Button
                              to={activeProject.url}
                              variant="primary"
                              className="w-fit"
                              onClick={closeDropdown}
                            >
                              Explore Project
                            </Button>
                          ) : null}
                        </div>
                      </div>
                    );
                  })()}

                  {activeDropdown === "company" && (
                    <div className="flex flex-col">
                      {companyNavItems.map((item, index) =>
                        item.url ? (
                          <SubmenuNavLink
                            key={item.name}
                            to={item.url}
                            onClick={closeDropdown}
                            index={index}
                          >
                            {item.name}
                          </SubmenuNavLink>
                        ) : (
                          <span
                            key={item.name}
                            className="block whitespace-nowrap px-3 py-2 text-sm font-semibold text-foreground opacity-60 cursor-not-allowed"
                            aria-disabled="true"
                          >
                            {item.name}
                          </span>
                        ),
                      )}
                    </div>
                  )}

                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Drawer Overlay — outside header so fixed positioning is not clipped */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[110] bg-[#121e37]/50 max-xl:block xl:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      {isMobileMenuOpen ? (
        <div className="mobile-drawer-enter fixed inset-y-0 right-0 z-[120] flex w-80 max-w-[85vw] flex-col bg-white shadow-2xl max-xl:flex xl:hidden">
          <div className="flex-1 overflow-y-auto overscroll-contain p-6 pb-10">
              {/* Close Button */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-foreground">Menu</h2>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-foreground" />
                </button>
              </div>

              {/* Mobile Nav Items */}
              <nav className="space-y-4">
                {/* Company */}
                <div>
                  <button
                    onClick={() => toggleMobileDropdown("company")}
                    className="flex items-center justify-between w-full text-left font-semibold text-foreground py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded"
                    aria-expanded={mobileActiveDropdown === "company"}
                  >
                    <span>COMPANY</span>
                    <ChevronDown className={`w-4 h-4 chevron-rotate ${mobileActiveDropdown === "company" ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    className="mobile-accordion overflow-hidden"
                    style={{ maxHeight: mobileActiveDropdown === "company" ? "1000px" : "0" }}
                  >
                    <div className="mt-2 pl-4 space-y-2">
                      {companyNavItems.map((item) =>
                        item.url ? (
                          <SubmenuNavLink
                            key={item.name}
                            to={item.url}
                            onClick={closeMobileMenu}
                            variant="mobile"
                          >
                            {item.name}
                          </SubmenuNavLink>
                        ) : (
                          <span
                            key={item.name}
                            className="block text-sm text-foreground py-1 cursor-default"
                            aria-disabled="true"
                          >
                            {item.name}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                {/* Solutions */}
                <div>
                  <button
                    onClick={() => toggleMobileDropdown("solutions")}
                    className="flex items-center justify-between w-full text-left font-semibold text-foreground py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded"
                    aria-expanded={mobileActiveDropdown === "solutions"}
                  >
                    <span>SOLUTIONS</span>
                    <ChevronDown className={`w-4 h-4 chevron-rotate ${mobileActiveDropdown === "solutions" ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    className="mobile-accordion overflow-hidden"
                    style={{ maxHeight: mobileActiveDropdown === "solutions" ? "1000px" : "0" }}
                  >
                    <div className="mt-2 pl-4 space-y-2">
                      {solutions.map((solution) =>
                        solution.url ? (
                          <SubmenuNavLink
                            key={solution.name}
                            to={solution.url}
                            onClick={closeMobileMenu}
                            variant="mobile"
                          >
                            {solution.name}
                          </SubmenuNavLink>
                        ) : (
                          <span
                            key={solution.name}
                            className="block text-sm text-foreground py-1 cursor-default"
                            aria-disabled="true"
                          >
                            {solution.name}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                {/* Our Partnership — hidden for now; set showPartnershipMenu to true to re-enable */}
                {showPartnershipMenu ? (
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown("partnership")}
                      className="flex items-center justify-between w-full text-left font-semibold text-foreground py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded"
                      aria-expanded={mobileActiveDropdown === "partnership"}
                    >
                      <span>OUR PARTNERSHIP</span>
                      <ChevronDown className={`w-4 h-4 chevron-rotate ${mobileActiveDropdown === "partnership" ? "rotate-180" : ""}`} />
                    </button>
                    <div
                      className="mobile-accordion overflow-hidden"
                      style={{ maxHeight: mobileActiveDropdown === "partnership" ? "1000px" : "0" }}
                    >
                      <div className="mt-2 pl-4 space-y-2">
                        {partnerships.map((partner) =>
                          partner.url ? (
                            <Link
                              key={partner.name}
                              to={partner.url}
                              onClick={closeMobileMenu}
                              className="block text-sm text-foreground hover:text-red-600 py-1"
                            >
                              {partner.name}
                            </Link>
                          ) : (
                            <span
                              key={partner.name}
                              className="block text-sm text-foreground py-1 cursor-default"
                              aria-disabled="true"
                            >
                              {partner.name}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* Projects */}
                <div>
                  <button
                    onClick={() => toggleMobileDropdown("projects")}
                    className="flex items-center justify-between w-full text-left font-semibold text-foreground py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded"
                    aria-expanded={mobileActiveDropdown === "projects"}
                  >
                    <span>PROJECTS</span>
                    <ChevronDown className={`w-4 h-4 chevron-rotate ${mobileActiveDropdown === "projects" ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    className="mobile-accordion overflow-hidden"
                    style={{ maxHeight: mobileActiveDropdown === "projects" ? "1000px" : "0" }}
                  >
                    <div className="mt-2 pl-4 space-y-2">
                      {projectNavItems.map((project) =>
                        project.url ? (
                          <Link
                            key={project.name}
                            to={project.url}
                            onClick={closeMobileMenu}
                            className="block rounded-md px-3 py-2 text-sm text-foreground outline-none transition-colors hover:bg-red-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                          >
                            {project.name}
                          </Link>
                        ) : (
                          <span
                            key={project.name}
                            className="block text-sm text-foreground py-1 cursor-default"
                            aria-disabled="true"
                          >
                            {project.name}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                {/* Companies — hidden for now; set showCompaniesMenu to 1 to re-enable */}
                {showCompaniesMenu ? (
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown("companies")}
                      className="flex items-center justify-between w-full text-left font-semibold text-foreground py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded"
                      aria-expanded={mobileActiveDropdown === "companies"}
                    >
                      <span>COMPANIES</span>
                      <ChevronDown className={`w-4 h-4 chevron-rotate ${mobileActiveDropdown === "companies" ? "rotate-180" : ""}`} />
                    </button>
                    <div
                      className="mobile-accordion overflow-hidden"
                      style={{ maxHeight: mobileActiveDropdown === "companies" ? "1000px" : "0" }}
                    >
                      <div className="mt-2 pl-4 space-y-2">
                        <Link
                          to="/companies"
                          onClick={closeMobileMenu}
                          className="block text-sm text-foreground hover:text-red-600 py-1"
                        >
                          Al Barham Group
                        </Link>
                        {companies.map((company, index) =>
                          company.url ? (
                            <Link
                              key={index}
                              to={company.url}
                              onClick={closeMobileMenu}
                              className="block text-sm text-foreground hover:text-red-600 py-1"
                            >
                              {company.name}
                            </Link>
                          ) : (
                            <a key={index} href="#" className="block text-sm text-gray-400 py-1 cursor-default">
                              {company.name}
                            </a>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* Services — hidden for now; set showServicesMenu to 1 to re-enable */}
                {showServicesMenu ? (
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown("services")}
                      className="flex items-center justify-between w-full text-left font-semibold text-foreground py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded"
                      aria-expanded={mobileActiveDropdown === "services"}
                    >
                      <span>SERVICES</span>
                      <ChevronDown className={`w-4 h-4 chevron-rotate ${mobileActiveDropdown === "services" ? "rotate-180" : ""}`} />
                    </button>
                    <div
                      className="mobile-accordion overflow-hidden"
                      style={{ maxHeight: mobileActiveDropdown === "services" ? "1000px" : "0" }}
                    >
                      <div className="mt-2 pl-4 space-y-2">
                        {services.map((service) =>
                          service.url ? (
                            <Link
                              key={service.name}
                              to={service.url}
                              onClick={closeMobileMenu}
                              className="block text-sm text-foreground hover:text-red-600 py-1"
                            >
                              {service.name}
                            </Link>
                          ) : (
                            <a
                              key={service.name}
                              href="#"
                              onClick={(e) => e.preventDefault()}
                              className="block text-sm text-gray-400 py-1 cursor-default"
                              aria-disabled="true"
                            >
                              {service.name}
                            </a>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                ) : null}

                <Link
                  to="/careers"
                  onClick={closeMobileMenu}
                  className="block rounded-md py-2 font-semibold text-foreground outline-none transition-colors hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                >
                  CAREERS
                </Link>

                {/* Contact Us Button */}
                <div className="pt-4 border-t border-gray-200 space-y-5">
                  <SocialLinks variant="footer" className="justify-start" />
                  <Button
                    fullWidth
                    to="/contact"
                    onClick={closeMobileMenu}
                    aria-label="Contact Us"
                  >
                    CONTACT US
                  </Button>
                </div>
              </nav>
          </div>
        </div>
      ) : null}
    </>
  );
};
