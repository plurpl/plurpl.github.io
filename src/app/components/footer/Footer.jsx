import React from "react";
import { Link } from "react-router-dom";
import { useTranslationHook } from "../../language/useTranslationHook";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import "../../App.css";
import { Logo } from "../common/Logo";

export const Footer = () => {
  const { t } = useTranslationHook();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-brand">
            <Logo
              className="footer-logo"
              svg={
                <img
                  src="/images/logos/logo_white.svg"
                  alt="TBA Academy Logo"
                />
              }
            />
          </div>
        </div>

        <div className="footer-section">
          <h4>{t("footer.programs")}</h4>
          <div className="footer-programs-grid">
            <div className="footer-programs-row">
              <ul>
                <li>
                  <Link to="/programs/debate">{t("footer.debate")}</Link>
                </li>
                <li>
                  <Link to="/programs/mock-trial">{t("footer.mockTrial")}</Link>
                </li>
                <li>
                  <Link to="/programs/model-un">{t("footer.modelUN")}</Link>
                </li>
                <li>
                  <Link to="/programs/4-in-1">{t("footer.fourInOne")}</Link>
                </li>
                <li>
                  <Link to="/programs/business-case">
                    {t("footer.businessCase")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-programs-row">
              <ul>
                <li>
                  <Link to="/programs/friday-workshops">
                    {t("footer.fridayWorkshops")}
                  </Link>
                </li>
                <li>
                  <Link to="/programs/news-analysis">
                    {t("footer.newsAnalysis")}
                  </Link>
                </li>
                <li>
                  <Link to="/programs/jsoc">{t("footer.jsoc")}</Link>
                </li>
                <li>
                  <Link to="/programs/brain-bee">{t("footer.brainBee")}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h4>{t("footer.aboutUs")}</h4>
          <ul>
            <li>
              <Link to="/about/our-story">{t("footer.ourStory")}</Link>
            </li>
            <li>
              <Link to="/about/our-team">{t("footer.ourTeam")}</Link>
            </li>
            <li>
              <Link to="/about/locations">
                {t("header.navigation.locations")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t("footer.contactSupport")}</h4>
          <ul>
            <li>
              <Link to="/contact">{t("footer.contactUs")}</Link>
            </li>
            <li>
              <Link to="/register">{t("footer.register")}</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t("footer.contactInformation")}</h4>
          <ul>
            <li>{t("footer.phone")}</li>
            <li>{t("footer.cityState")}</li>
            <li>{t("footer.email")}</li>
          </ul>
        </div>

        <div className="footer-section footer-social">
          <div className="social-media">
            <a
              href="https://ca.linkedin.com/company/teaching-beyond-academics"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/tbadebate/"
              className="social-icon"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; TBA Academy 2025</p>
      </div>
    </footer>
  );
};
