import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslationHook } from "../../language/useTranslationHook";
import { LanguageSwitcher } from "../../language/LanguageSwitcher";
import { Logo } from "../common/Logo";
import "../../App.css";

export const MobileHeader = ({ isOpen, toggleMenu }) => {
  const { t } = useTranslationHook();
  const navigate = useNavigate();
  const [expandedRoutes, setExpandedRoutes] = useState({});
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      toggleMenu();
      setIsClosing(false);
    }, 280);
  };

  const toggleRoute = (route) => {
    setExpandedRoutes((prev) => ({
      ...prev,
      [route]: !prev[route],
    }));
  };

  const handleRouteClick = (route) => {
    if (route === "/contact") {
      navigate("/contact");
      handleClose();
    } else if (route === "/about/locations") {
      navigate("/about/locations");
      handleClose();
    }
  };

  const handleSubRouteClick = (subRoute) => {
    navigate(subRoute);
    handleClose();
    setExpandedRoutes({});
  };

  const routes = [
    {
      path: "/about",
      label: t("header.navigation.about"),
      hasSubRoutes: true,
      subRoutes: [
        { path: "/about/our-story", label: t("header.dropdown.ourStory") },
        { path: "/about/our-team", label: t("header.dropdown.ourTeam") },
      ],
    },
    {
      path: "/programs",
      label: t("header.navigation.programs"),
      hasSubRoutes: true,
      subRoutes: [
        { path: "/programs/debate", label: t("header.dropdown.debate") },
        { path: "/programs/mock-trial", label: t("header.dropdown.mockTrial") },
        { path: "/programs/model-un", label: t("header.dropdown.modelUN") },
        { path: "/programs/4-in-1", label: t("header.dropdown.fourInOne") },
        {
          path: "/programs/business-case",
          label: t("header.dropdown.businessCase"),
        },
        {
          path: "/programs/friday-workshops",
          label: t("header.dropdown.fridayWorkshops"),
        },
        {
          path: "/programs/news-analysis",
          label: t("header.dropdown.newsAnalysis"),
        },
        { path: "/programs/jsoc", label: t("header.dropdown.jsoc") },
        { path: "/programs/brain-bee", label: t("header.dropdown.brainBee") },
      ],
    },

    {
      path: "/contact",
      label: t("header.navigation.contact"),
      hasSubRoutes: false,
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="mobile-header-overlay" onClick={handleClose}>
      <div
        className={`mobile-header ${isClosing ? "closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mobile-header-top">
          <div className="mobile-logo-container">
            <Logo
              svg={
                <img
                  src="/images/logos/logo_white.svg"
                  alt="TBA Academy Logo"
                />
              }
              className="mobile-school-icon"
            />
          </div>
          <button className="mobile-close-btn" onClick={handleClose}>
            ×
          </button>
        </div>

        <nav className="mobile-navigation">
          <ul className="mobile-nav-list">
            {routes.map((route) => (
              <li key={route.path} className="mobile-nav-item">
                {route.hasSubRoutes ? (
                  <div className="mobile-nav-with-sub">
                    <button
                      className="mobile-nav-button"
                      onClick={() => toggleRoute(route.path)}
                    >
                      {route.label}
                      <span
                        className={`mobile-arrow ${
                          expandedRoutes[route.path] ? "expanded" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    {expandedRoutes[route.path] && (
                      <ul className="mobile-sub-nav">
                        {route.subRoutes.map((subRoute) => (
                          <li key={subRoute.path}>
                            <button
                              className="mobile-sub-nav-button"
                              onClick={() => handleSubRouteClick(subRoute.path)}
                            >
                              {subRoute.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <button
                    className="mobile-nav-button"
                    onClick={() => handleRouteClick(route.path)}
                  >
                    {route.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-header-bottom">
          <div className="mobile-language-switcher">
            <LanguageSwitcher />
          </div>
          <button
            className="mobile-register-btn"
            onClick={() => {
              navigate("/register");
              handleClose();
            }}
          >
            {t("header.register")}
          </button>
        </div>
      </div>
    </div>
  );
};
