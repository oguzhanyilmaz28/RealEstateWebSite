import { Link, useLocation } from "react-router";
import { useTheme } from "../contexts/ThemeContext";
import { useState, useRef, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useLanguage } from "../contexts/LanguageContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  // const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  // const langDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path;
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    // Eğer ana sayfadaysak, sayfanın en başına scroll yap
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    // Ana sayfa değilse Link normal çalışacak
  };

  const getPageLinks = () => {
    return language === "tr"
      ? [
          { path: "/", label: "Ana Sayfa" },
          { path: "/satilik", label: "Satılık" },
          { path: "/kiralik", label: "Kiralık" },
          { path: "/hakkimizda", label: "Hakkımızda" },
          { path: "/iletisim", label: "İletişim" },
        ]
      : [
          { path: "/", label: "Home" },
          { path: "/for-sale", label: "For Sale" },
          { path: "/for-rent", label: "For Rent" },
          { path: "/about", label: "About" },
          { path: "/contact", label: "Contact" },
        ];
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
      //   setLangDropdownOpen(false);
      // }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // useEffect(() => {
  //   if (menuOpen) setLangDropdownOpen(false);
  // }, [menuOpen]);

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-white dark:bg-zinc-800 shadow-md z-50 transition-all duration-300"
      ref={mobileMenuRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          onClick={handleLogoClick}
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
        >
          <img src="/logov2.png" alt="Logo" className="w-10 h-10" />
          <span className="text-zinc-800 dark:text-white font-bold text-xl">
            Karadeniz İnşaat
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-12">
          {getPageLinks().map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-semibold transition-all duration-200 ${
                isActive(link.path)
                  ? "text-red-600 dark:text-red-400 border-b-2 border-red-600 dark:border-red-400 pb-1"
                  : "text-zinc-700 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-zinc-800 dark:text-white rounded-lg p-2 transition-all duration-200 flex items-center justify-center w-10 h-10"
          >
            <span className="text-lg">{theme === "light" ? "🌙" : "☀️"}</span>
          </button>

          {/* Language Dropdown */}
          {/* <div className="relative" ref={langDropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-500 text-white rounded-lg px-3 py-2 transition-all duration-200 font-medium"
            >
              <HiGlobe className="w-4 h-4" />
              <span className="text-sm">{language.toUpperCase()}</span>
              <HiChevronDown
                className={`w-4 h-4 transition-transform ${
                  langDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {langDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-600 rounded-lg shadow-xl z-[9999] min-w-[120px] overflow-hidden">
                <button
                  onClick={() => {
                    if (language !== "tr") toggleLanguage();
                    setLangDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-zinc-50 dark:hover:bg-zinc-700 flex items-center space-x-3 transition-colors ${
                    language === "tr"
                      ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                      : "text-zinc-700 dark:text-zinc-300"
                  }`}
                >
                  <span className="text-lg">🇹🇷</span>
                  <span className="font-medium text-sm">Türkçe</span>
                </button>
                <div className="border-t border-zinc-100 dark:border-zinc-700"></div>
                <button
                  onClick={() => {
                    if (language !== "en") toggleLanguage();
                    setLangDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-zinc-50 dark:hover:bg-zinc-700 flex items-center space-x-3 transition-colors ${
                    language === "en"
                      ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                      : "text-zinc-700 dark:text-zinc-300"
                  }`}
                >
                  <span className="text-lg">🇺🇸</span>
                  <span className="font-medium text-sm">English</span>
                </button>
              </div>
            )}
          </div> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-zinc-800 dark:text-white text-2xl"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white dark:bg-zinc-800 shadow-lg transition-all duration-300 z-40 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col py-2">
            {getPageLinks().map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 px-4 text-base font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 dark:border-red-400"
                    : "text-zinc-800 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Buttons */}
            <div className="flex flex-row space-x-3 px-4 pt-3 pb-2 border-t border-zinc-200 dark:border-zinc-600 mt-2">
              <button
                onClick={toggleTheme}
                className="bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-zinc-800 dark:text-white rounded-lg p-2 transition-all duration-200 w-10 h-10 flex items-center justify-center"
              >
                <span className="text-lg">{theme === "light" ? "🌙" : "☀️"}</span>
              </button>

              {/* <div className="relative flex-1" ref={langDropdownRef}>
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="w-full flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-500 text-white rounded-lg px-3 py-2 transition-all duration-200 font-medium"
                >
                  <HiGlobe className="w-4 h-4" />
                  <span className="text-sm">{language.toUpperCase()}</span>
                  <HiChevronDown
                    className={`w-4 h-4 transition-transform ${
                      langDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {langDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-600 rounded-lg shadow-xl z-[60] overflow-hidden">
                    <button
                      onClick={() => {
                        if (language !== "tr") toggleLanguage();
                        setLangDropdownOpen(false);
                        setMenuOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-zinc-50 dark:hover:bg-zinc-700 flex items-center space-x-3 transition-colors ${
                        language === "tr"
                          ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                          : "text-zinc-700 dark:text-zinc-300"
                      }`}
                    >
                      <span className="text-lg">🇹🇷</span>
                      <span className="font-medium text-sm">Türkçe</span>
                    </button>
                    <div className="border-t border-zinc-100 dark:border-zinc-700"></div>
                    <button
                      onClick={() => {
                        if (language !== "en") toggleLanguage();
                        setLangDropdownOpen(false);
                        setMenuOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-zinc-50 dark:hover:bg-zinc-700 flex items-center space-x-3 transition-colors ${
                        language === "en"
                          ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                          : "text-zinc-700 dark:text-zinc-300"
                      }`}
                    >
                      <span className="text-lg">🇺🇸</span>
                      <span className="font-medium text-sm">English</span>
                    </button>
                  </div>
                )}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;