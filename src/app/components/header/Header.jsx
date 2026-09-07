import React, { useState, useEffect, useRef } from "react";
import { useTranslationHook } from "../../language/useTranslationHook";
import { LanguageSwitcher } from "../../language/LanguageSwitcher";
import { Link, useNavigate } from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu";
import { MobileHeader } from "./MobileHeader";
import { Logo } from "../common/Logo";
import { FaChevronDown } from "react-icons/fa";
import "../../App.css";

export const Header = () => {
  const { t } = useTranslationHook();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigationRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navigationRef.current &&
        !navigationRef.current.contains(event.target)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="header" onMouseLeave={() => closeDropdown()}>
        <div className="header-left">
          <Logo
            svg={
              <img
                src="/images/logos/logo_white_no_text.svg"
                alt="TBA Academy Logo"
              />
            }
            className="school-icon"
          />
        </div>
        <div className="header-right">
          <nav className="navigation" ref={navigationRef}>
            <ul>
              <li className="nav-item-dropdown">
                <button
                  className="nav-dropdown-toggle"
                  onMouseEnter={() => setActiveDropdown("about")}
                  onClick={() => navigate("/about/our-story")}
                >
                  {t("header.navigation.about")}
                  <FaChevronDown
                    className={`dropdown-arrow ${
                      activeDropdown === "about" ? "rotated" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "about" && (
                  <div className="dropdown-menu">
                    <Link to="/about/our-story">
                      {t("header.dropdown.ourStory")}
                    </Link>
                    <Link to="/about/our-team">
                      {t("header.dropdown.ourTeam")}
                    </Link>
                    <Link to="/about/locations">
                      {t("header.navigation.locations")}
                    </Link>
                  </div>
                )}
              </li>
              <li className="nav-item-dropdown">
                <button
                  className="nav-dropdown-toggle"
                  onClick={() => navigate("/programs")}
                  onMouseEnter={() => setActiveDropdown("programs")}
                >
                  {t("header.navigation.programs")}
                  <FaChevronDown
                    className={`dropdown-arrow ${
                      activeDropdown === "programs" ? "rotated" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "programs" && (
                  <div
                    className="dropdown-menu"
                    onMouseLeave={() => closeDropdown()}
                  >
                    <Link to="/programs/debate">
                      {t("header.dropdown.debate")}
                    </Link>
                    <Link to="/programs/mock-trial">
                      {t("header.dropdown.mockTrial")}
                    </Link>
                    <Link to="/programs/model-un">
                      {t("header.dropdown.modelUN")}
                    </Link>
                    <Link to="/programs/4-in-1">
                      {t("header.dropdown.fourInOne")}
                    </Link>
                    <Link to="/programs/business-case">
                      {t("header.dropdown.businessCase")}
                    </Link>
                    <Link to="/programs/friday-workshops">
                      {t("header.dropdown.fridayWorkshops")}
                    </Link>
                    <Link to="/programs/news-analysis">
                      {t("header.dropdown.newsAnalysis")}
                    </Link>
                    <Link to="/programs/jsoc">{t("header.dropdown.jsoc")}</Link>
                    <Link to="/programs/brain-bee">
                      {t("header.dropdown.brainBee")}
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Link to="/contact">{t("header.navigation.contact")}</Link>
              </li>
            </ul>
          </nav>
          <div className="language-switcher">
            <LanguageSwitcher />
          </div>
          <button
            className="register-btn"
            onClick={() => navigate("/register")}
          >
            {t("header.register")}
          </button>
        </div>

        <div className="mobile-header-controls">
          <div className="mobile-language-switcher">
            <LanguageSwitcher />
          </div>
          <HamburgerMenu
            isOpen={isMobileMenuOpen}
            toggleMenu={toggleMobileMenu}
          />
        </div>
      </header>

      <MobileHeader isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
    </>
  );
};
