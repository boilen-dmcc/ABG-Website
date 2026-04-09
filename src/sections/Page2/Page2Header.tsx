import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

type CompanyItem = {
  name: string;
  description: string;
  category: string;
  color: string;
  logo?: string;
};

const companies: CompanyItem[] = [
  {
    name: "TAQAT KIRKUK",
    description: "Gasoline production",
    category: "Energy & Downstream Operations",
    color: "#DC2626",
    logo: "https://c.animaapp.com/mkkxt1y8OC5kKc/img/uploaded-asset-1770297935851-1.jpeg"
  },
  {
    name: "Northern Covenant",
    description: "Oil services",
    category: "Energy & Downstream Operations",
    color: "#EA580C",
    logo: "https://c.animaapp.com/mkkxt1y8OC5kKc/img/uploaded-asset-1770300126445-0.jpeg"
  },
  {
    name: "Bryar Transport",
    description: "Oil logistics & marketing",
    category: "Energy & Downstream Operations",
    color: "#D97706",
    logo: "https://c.animaapp.com/mkkxt1y8OC5kKc/img/uploaded-asset-1770299485008-1.jpeg"
  },
  {
    name: "Barham Black Gold",
    description: "Asphalt production",
    category: "Asphalt, Construction & Building Materials",
    color: "#65A30D",
    logo: "https://c.animaapp.com/mkkxt1y8OC5kKc/img/uploaded-asset-1770299485008-0.jpeg"
  },
  {
    name: "Rahand Company",
    description: "Concrete blocks",
    category: "Asphalt, Construction & Building Materials",
    color: "#059669",
    logo: "https://c.animaapp.com/mkkxt1y8OC5kKc/img/uploaded-asset-1770297935854-2.jpeg"
  },
  {
    name: "Binaa Al Sahraa",
    description: "General contracting",
    category: "Asphalt, Construction & Building Materials",
    color: "#0891B2",
    logo: "https://c.animaapp.com/mkkxt1y8OC5kKc/img/uploaded-asset-1770299485008-2.jpeg"
  },
  {
    name: "Gashbin GmbH",
    description: "Real estate investment",
    category: "Real Estate & Investment",
    color: "#0284C7",
    logo: "https://c.animaapp.com/mkkxt1y8OC5kKc/img/uploaded-asset-1770300126445-1.jpeg"
  },
  {
    name: "Al Barham DMCC",
    description: "Investment holding",
    category: "Real Estate & Investment",
    color: "#7C3AED"
  }
];

export const Page2Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<CompanyItem | null>(null);
  const [dropdownStyle, setDropdownStyle] = useState<any>({});
  const [isHoveringNav, setIsHoveringNav] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const navRef = useRef<HTMLElement>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const dropdownPanelRef = useRef<HTMLDivElement>(null);

    // Scroll locking removed to prevent issues

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollDirection: "up" | "down" = "up";

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > lastScrollY) {
        scrollDirection = "down";
      } else if (scrollY < lastScrollY) {
        scrollDirection = "up";
      }
      lastScrollY = scrollY;

      const gradientElement = document.querySelector(".bg-gradient-to-t.from-black\\/80");

      if (gradientElement) {
        const gradientRect = (gradientElement as HTMLElement).getBoundingClientRect();
        const hasReachedGradient = gradientRect.top <= 0;

        if (!hasReachedGradient) {
          setIsHeaderVisible(true);
          setIsScrolled(false);
        } else if (scrollDirection === "up") {
          setIsHeaderVisible(true);
          setIsScrolled(true);
        } else if (scrollDirection === "down") {
          setIsHeaderVisible(false);
          setIsScrolled(true);
        }
      } else {
        setIsHeaderVisible(true);
        setIsScrolled(scrollY > 20);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shouldShowWhiteBg = isHoveringNav || (isScrolled && isHeaderVisible);

  const closeDropdown = () => {
    setActiveDropdown(null);
    setIsHoveringNav(false);
    setSelectedCompany(null);
  };

  const handleMouseEnter = (menu: string, event: React.MouseEvent<HTMLButtonElement>) => {
    setActiveDropdown(menu);
    setIsHoveringNav(true);

    const button = event.currentTarget;
    const buttonRect = button.getBoundingClientRect();
    const navRect = navRef.current?.getBoundingClientRect();

    if (!navRect) return;

    let width = 420;
    if (menu === "companies") width = 680;
    else if (menu === "services") width = 520;

    const leftPosition = buttonRect.left - 35;
    const arrowPosition = buttonRect.left + buttonRect.width / 2;

    const desiredGap = 5;
    const containerTop = buttonRect.bottom - navRect.top + desiredGap;

    setDropdownStyle({
      width: `${width}px`,
      left: `${leftPosition}px`,
      opacity: 1,
      arrowPosition: `${arrowPosition}px`,
      gap: `${desiredGap}px`,
      containerTop: `${containerTop}px`
    });
  };

  useEffect(() => {
    if (!activeDropdown) return;

    const isInsideRect = (x: number, y: number, r: DOMRect) => {
      return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
    };

    const onPointerMove = (e: PointerEvent) => {
      const triggerEl = dropdownRefs.current[activeDropdown];
      const panelEl = dropdownPanelRef.current;
      const headerEl = navRef.current;

      if (!triggerEl || !panelEl || !headerEl) return;

      const t = triggerEl.getBoundingClientRect();
      const d = panelEl.getBoundingClientRect();
      const h = headerEl.getBoundingClientRect();

      const x = e.clientX;
      const y = e.clientY;

      if (isInsideRect(x, y, h)) return;

      const corridorTop = t.bottom;
      const corridorBottom = d.top;
      const corridorLeft = Math.min(t.left, d.left);
      const corridorRight = Math.max(t.right, d.right);

      const pad = 8;

      const insideTrigger = isInsideRect(x, y, t);
      const insideDropdown = isInsideRect(x, y, d);

      const insideCorridor =
        y >= corridorTop - pad &&
        y <= corridorBottom + pad &&
        x >= corridorLeft - pad &&
        x <= corridorRight + pad;

      if (insideTrigger || insideDropdown || insideCorridor) return;

      closeDropdown();
    };

    const onPointerDown = (e: PointerEvent) => {
      const triggerEl = dropdownRefs.current[activeDropdown];
      const panelEl = dropdownPanelRef.current;
      const headerEl = navRef.current;

      if (!triggerEl || !panelEl || !headerEl) return;

      const t = triggerEl.getBoundingClientRect();
      const d = panelEl.getBoundingClientRect();
      const h = headerEl.getBoundingClientRect();

      const x = e.clientX;
      const y = e.clientY;

      if (isInsideRect(x, y, h)) return;
      if (isInsideRect(x, y, t) || isInsideRect(x, y, d)) return;

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

  return (
    <>
      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: translateY(-8px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
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
          animation: fadeInScale 200ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dropdown-exit {
          animation: fadeOut 150ms ease-out;
        }
        .dropdown-content {
          transition: all 250ms cubic-bezier(0.16, 1, 0.3, 1);
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
          transition: transform 300ms ease-out;
        }
        .nav-item-hover {
          transition: color 200ms ease-out;
        }
      `}</style>

      <header
        ref={navRef}
        onMouseEnter={() => setIsHoveringNav(true)}
        onMouseLeave={() => {
          if (!activeDropdown) {
            setIsHoveringNav(false);
          }
        }}
        className={`fixed top-0 left-0 right-0 z-50 py-[7.5px] transition-all ${
          shouldShowWhiteBg ? "duration-200 bg-gray-100 shadow-md" : "duration-1000 bg-transparent"
        } ${!isHeaderVisible ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        style={{ transition: "opacity 200ms ease-out, background-color 200ms ease-out" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-auto py-4 min-h-[90px]">
            {/* Logo */}
            <div className="flex items-center">
              <a href="./" className="block relative">
                <img 
                  src="https://c.animaapp.com/mkkxt1y8OC5kKc/img/uploaded-asset-1770304174349-0.png" 
                  alt="Al-Barham Group" 
                  className={`h-14 w-auto transition-opacity duration-300 absolute top-0 left-0 ${
                    shouldShowWhiteBg ? "opacity-100" : "opacity-0"
                  }`}
                />
                <img 
                  src="https://c.animaapp.com/mkkxt1y8OC5kKc/img/uploaded-asset-1770304013454-0.png" 
                  alt="Al-Barham Group" 
                  className={`h-14 w-auto transition-opacity duration-300 ${
                    shouldShowWhiteBg ? "opacity-0" : "opacity-100"
                  }`}
                />
              </a>
            </div>

            {/* Desktop Navigation (min-width: 1190px) */}
            <nav className="hidden bp1190:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-8">
                <div className="relative">
                  <button
                    ref={(el) => (dropdownRefs.current["companies"] = el)}
                    onMouseEnter={(e) => handleMouseEnter("companies", e)}
                    className={`nav-item-hover flex items-center space-x-1 text-sm font-semibold uppercase tracking-wider ${
                      shouldShowWhiteBg ? "text-gray-700 hover:text-red-600" : "text-white hover:text-red-200"
                    } ${activeDropdown === "companies" ? (shouldShowWhiteBg ? "text-red-600" : "text-red-200") : ""}`}
                    aria-label="Companies menu"
                  >
                    <span>COMPANIES</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "companies" ? "rotate-180" : ""}`} />
                  </button>
                </div>

                <div className="relative">
                  <button
                    ref={(el) => (dropdownRefs.current["services"] = el)}
                    onMouseEnter={(e) => handleMouseEnter("services", e)}
                    className={`nav-item-hover flex items-center space-x-1 text-sm font-semibold uppercase tracking-wider ${
                      shouldShowWhiteBg ? "text-gray-700 hover:text-red-600" : "text-white hover:text-red-200"
                    } ${activeDropdown === "services" ? (shouldShowWhiteBg ? "text-red-600" : "text-red-200") : ""}`}
                    aria-label="Services menu"
                  >
                    <span>SERVICES</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
                  </button>
                </div>

                <div className="relative">
                  <button
                    ref={(el) => (dropdownRefs.current["solutions"] = el)}
                    onMouseEnter={(e) => handleMouseEnter("solutions", e)}
                    className={`nav-item-hover flex items-center space-x-1 text-sm font-semibold uppercase tracking-wider ${
                      shouldShowWhiteBg ? "text-gray-700 hover:text-red-600" : "text-white hover:text-red-200"
                    } ${activeDropdown === "solutions" ? (shouldShowWhiteBg ? "text-red-600" : "text-red-200") : ""}`}
                    aria-label="Solutions menu"
                  >
                    <span>SOLUTIONS</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "solutions" ? "rotate-180" : ""}`} />
                  </button>
                </div>

                <div className="relative">
                  <button
                    ref={(el) => (dropdownRefs.current["company"] = el)}
                    onMouseEnter={(e) => handleMouseEnter("company", e)}
                    className={`nav-item-hover flex items-center space-x-1 text-sm font-semibold uppercase tracking-wider ${
                      shouldShowWhiteBg ? "text-gray-700 hover:text-red-600" : "text-white hover:text-red-200"
                    } ${activeDropdown === "company" ? (shouldShowWhiteBg ? "text-red-600" : "text-red-200") : ""}`}
                    aria-label="Company menu"
                  >
                    <span>COMPANY</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "company" ? "rotate-180" : ""}`} />
                  </button>
                </div>

              </div>
            </nav>

            {/* Desktop CTA Button (min-width: 1190px) */}
            <div className="hidden bp1190:block">
              <button
                disabled
                className="relative px-6 py-2 text-white text-sm font-semibold bg-gradient-to-r from-[#0039a6] to-[#002b7f] rounded cursor-not-allowed opacity-50 transition-opacity"
                title="Coming Soon"
                aria-label="Tender Portal - Coming Soon"
              >
                TENDER PORTAL
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  Soon
                </span>
              </button>
            </div>

            {/* Mobile Hamburger Button (max-width: 1189px) */}
            <button
              className="max-[1189px]:block bp1190:hidden p-2 focus:outline-none focus:ring-2 focus:ring-red-600 rounded"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${shouldShowWhiteBg ? "text-gray-900" : "text-white"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${shouldShowWhiteBg ? "text-gray-900" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Dropdown Container */}
        {activeDropdown && (
          <div
            className="absolute left-0 right-0"
            style={{ top: dropdownStyle.containerTop }}
            onMouseEnter={() => setIsHoveringNav(true)}
          >
            <div
              className="absolute pointer-events-none"
              style={{
                left: dropdownStyle.left,
                width: dropdownStyle.width,
                top: "0px",
                height: dropdownStyle.gap ?? "10px",
                backgroundColor: "transparent",
                zIndex: 40
              }}
            />

            <div
              className="absolute z-50 pointer-events-none"
              style={{
                left: dropdownStyle.arrowPosition,
                top: "6px",
                transform: "translateX(-50%)",
                transition: "left 350ms cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            >
              <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white" />
            </div>

            <div
              ref={dropdownPanelRef}
              className="dropdown-enter absolute bg-white shadow-2xl rounded-lg overflow-hidden border border-gray-100 pointer-events-auto"
              style={{
                width: dropdownStyle.width,
                left: dropdownStyle.left,
                opacity: dropdownStyle.opacity,
                transition: "all 350ms cubic-bezier(0.16, 1, 0.3, 1)",
                top: dropdownStyle.gap ?? "10px",
                zIndex: 50
              }}
            >
              <div className="dropdown-content p-6">
                  {activeDropdown === "companies" && (
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div
                          className="p-3 mb-2 hover:bg-gray-50 rounded cursor-pointer transition-all duration-200 hover:translate-x-1"
                          onMouseEnter={() => setSelectedCompany(null)}
                        >
                          <h4 className="font-bold text-sm text-gray-900 flex items-center">
                            <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                            All Companies
                          </h4>
                        </div>
                        <div className="border-t border-gray-200 mb-2"></div>
                        {companies.map((company, index) => (
                          <div
                            key={index}
                            className="p-3 hover:bg-[#001f3f] hover:text-white rounded cursor-pointer transition-all duration-200 hover:translate-x-1 group"
                            onMouseEnter={() => setSelectedCompany(company)}
                          >
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
                                <h4 className="font-bold text-sm">{company.name}</h4>
                              </div>
                              <span className="w-2 h-2 bg-gray-400 group-hover:bg-white rounded-full transition-colors"></span>
                            </div>
                          </div>
                        ))}
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
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedCompany.name}</h3>
                            <p className="text-sm text-red-600 uppercase tracking-wide mb-3 font-semibold">
                              {selectedCompany.category}
                            </p>
                            <p className="text-gray-600 mb-4">{selectedCompany.description}</p>
                            <a href="#" className="text-red-600 text-sm font-semibold hover:text-red-800 transition-colors">
                              Explore Company →
                            </a>
                          </>
                        ) : (
                          <>
                            <div className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br from-red-600 to-red-800 text-white text-2xl font-bold">
                              AB
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Al Barham Group</h3>
                            <p className="text-sm text-red-600 uppercase tracking-wide mb-3 font-semibold">
                              8 Companies
                            </p>
                            <p className="text-gray-600 mb-4">
                              A diversified holding group with operations spanning energy, construction, real estate, and investment sectors across Iraq and the region.
                            </p>
                            <a href="/companies" className="text-red-600 text-sm font-semibold hover:text-red-800 transition-colors">
                              View All Companies →
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  {activeDropdown === "services" && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 hover:bg-gray-50 rounded transition-colors">
                        <h4 className="font-bold text-sm text-gray-900 mb-1">Engineering</h4>
                        <p className="text-xs text-gray-600">FEED and detailed design</p>
                      </div>
                      <div className="p-3 hover:bg-gray-50 rounded transition-colors">
                        <h4 className="font-bold text-sm text-gray-900 mb-1">Procurement</h4>
                        <p className="text-xs text-gray-600">Global vendor sourcing</p>
                      </div>
                      <div className="p-3 hover:bg-gray-50 rounded transition-colors">
                        <h4 className="font-bold text-sm text-gray-900 mb-1">Construction</h4>
                        <p className="text-xs text-gray-600">Civil works & installation</p>
                      </div>
                      <div className="p-3 hover:bg-gray-50 rounded transition-colors">
                        <h4 className="font-bold text-sm text-gray-900 mb-1">Commissioning</h4>
                        <p className="text-xs text-gray-600">Startup & verification</p>
                      </div>
                      <div className="p-3 hover:bg-gray-50 rounded transition-colors">
                        <h4 className="font-bold text-sm text-gray-900 mb-1">EPCC (Turnkey)</h4>
                        <p className="text-xs text-gray-600">Single-window delivery</p>
                      </div>
                      <div className="p-3 hover:bg-gray-50 rounded transition-colors">
                        <h4 className="font-bold text-sm text-gray-900 mb-1">Transportation</h4>
                        <p className="text-xs text-gray-600">Petroleum logistics</p>
                      </div>
                    </div>
                  )}

                  {activeDropdown === "solutions" && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 hover:bg-gray-50 rounded transition-colors">
                        <h4 className="font-bold text-sm text-gray-900 mb-1">Oil & Gas</h4>
                        <p className="text-xs text-gray-600">Upstream to downstream</p>
                      </div>
                      <div className="p-3 hover:bg-gray-50 rounded transition-colors">
                        <h4 className="font-bold text-sm text-gray-900 mb-1">Petrochemicals</h4>
                        <p className="text-xs text-gray-600">Integrated facilities</p>
                      </div>
                      <div className="p-3 hover:bg-gray-50 rounded transition-colors">
                        <h4 className="font-bold text-sm text-gray-900 mb-1">Power Generation</h4>
                        <p className="text-xs text-gray-600">Renewable & conventional</p>
                      </div>
                      <div className="p-3 hover:bg-gray-50 rounded transition-colors">
                        <h4 className="font-bold text-sm text-gray-900 mb-1">Infrastructure</h4>
                        <p className="text-xs text-gray-600">Industrial development</p>
                      </div>
                    </div>
                  )}

                  {activeDropdown === "company" && (
                    <div className="space-y-3">
                      <a href="/#about" className="block p-3 hover:bg-gray-50 rounded transition-colors">
                        <h4 className="font-bold text-sm text-gray-900 mb-1">About Us</h4>
                        <p className="text-xs text-gray-600">Our story and mission</p>
                      </a>
                      <a href="/projects" className="block p-3 hover:bg-gray-50 rounded transition-colors">
                        <h4 className="font-bold text-sm text-gray-900 mb-1">Projects</h4>
                        <p className="text-xs text-gray-600">Our portfolio of work</p>
                      </a>
                      <a href="/careers" className="block p-3 hover:bg-gray-50 rounded transition-colors">
                        <h4 className="font-bold text-sm text-gray-900 mb-1">Careers</h4>
                        <p className="text-xs text-gray-600">Join our team</p>
                      </a>
                      <a href="mailto:info@albarhamgroup.com" className="block p-3 hover:bg-gray-50 rounded transition-colors">
                        <h4 className="font-bold text-sm text-gray-900 mb-1">Contact</h4>
                        <p className="text-xs text-gray-600">Get in touch</p>
                      </a>
                    </div>
                  )}

                </div>
              </div>
          </div>
        )}

        {/* Mobile Drawer Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 max-[1189px]:block bp1190:hidden"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
        )}

        {/* Mobile Drawer */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 overflow-y-auto max-[1189px]:block bp1190:hidden ${
            isMobileMenuOpen ? "mobile-drawer-enter" : "mobile-drawer-exit"
          }`}
          style={{ display: isMobileMenuOpen ? "block" : "none" }}
        >
          <div className="p-6">
            {/* Close Button */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-gray-900">Menu</h2>
              <button
                onClick={closeMobileMenu}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-red-600"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-gray-900" />
              </button>
            </div>

            {/* Mobile Nav Items */}
            <nav className="space-y-4">
              {/* Companies */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown("companies")}
                  className="flex items-center justify-between w-full text-left font-semibold text-gray-900 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 rounded"
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
                    <a href="/companies" className="block text-sm text-gray-600 hover:text-red-600 py-1">
                      View All Companies
                    </a>
                    {companies.slice(0, 3).map((company, index) => (
                      <a key={index} href="#" className="block text-sm text-gray-600 hover:text-red-600 py-1">
                        {company.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown("services")}
                  className="flex items-center justify-between w-full text-left font-semibold text-gray-900 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 rounded"
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
                    <a href="#" className="block text-sm text-gray-600 hover:text-red-600 py-1">
                      Engineering
                    </a>
                    <a href="#" className="block text-sm text-gray-600 hover:text-red-600 py-1">
                      Procurement
                    </a>
                    <a href="#" className="block text-sm text-gray-600 hover:text-red-600 py-1">
                      Construction
                    </a>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown("solutions")}
                  className="flex items-center justify-between w-full text-left font-semibold text-gray-900 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 rounded"
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
                    <a href="#" className="block text-sm text-gray-600 hover:text-red-600 py-1">
                      Oil & Gas
                    </a>
                    <a href="#" className="block text-sm text-gray-600 hover:text-red-600 py-1">
                      Petrochemicals
                    </a>
                    <a href="#" className="block text-sm text-gray-600 hover:text-red-600 py-1">
                      Power Generation
                    </a>
                  </div>
                </div>
              </div>

              {/* Company */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown("company")}
                  className="flex items-center justify-between w-full text-left font-semibold text-gray-900 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 rounded"
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
                    <a href="/#about" className="block text-sm text-gray-600 hover:text-red-600 py-1">
                      About Us
                    </a>
                    <a href="/projects" className="block text-sm text-gray-600 hover:text-red-600 py-1">
                      Projects
                    </a>
                    <a href="/careers" className="block text-sm text-gray-600 hover:text-red-600 py-1">
                      Careers
                    </a>
                  </div>
                </div>
              </div>


              {/* Tender Portal Button */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  disabled
                  className="w-full px-6 py-3 text-white text-sm font-semibold bg-gradient-to-r from-[#0039a6] to-[#002b7f] rounded cursor-not-allowed opacity-50"
                  aria-label="Tender Portal - Coming Soon"
                >
                  TENDER PORTAL (Coming Soon)
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
