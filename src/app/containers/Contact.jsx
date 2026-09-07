import React from "react";
import { useTranslation } from "react-i18next";
import "../App.css";
import { ContactForm } from "../components/homepage/maincontent/ContactForm";
import { useNavigate } from "react-router-dom";
export const Contact = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">{t("contact.title")}</h1>

        <div className="contact-card">
          <div className="contact-left">
            <div className="contact-blurb">{t("contact.blurb")}</div>

            <div className="contact-info-section">
              <div className="contact-method">
                <h3>{t("contact.phone.title")}</h3>
                <p>{t("contact.phone.number")}</p>
              </div>

              <div className="contact-method">
                <h3>{t("contact.email.title")}</h3>
                <p>{t("contact.email.address")}</p>
              </div>

              {/* <div className="contact-method">
                <h3>Founder</h3>
                <p>Maggie</p>
              </div> */}
            </div>

            <div className="contact-register-section">
              <h3>{t("contact.register.title")}</h3>
              <p>{t("contact.register.description")}</p>
              {/* on button click, navigate to /register page */}
              <button
                className="contact-register-btn"
                onClick={() => {
                  navigate("/register");
                }}
              >
                {t("contact.register.button")}
              </button>
            </div>
          </div>

          <div className="contact-right">
            <div className="form-container">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
