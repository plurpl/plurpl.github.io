import React, { useState } from "react";
import { useTranslationHook } from "../../../language/useTranslationHook";

export const ContactForm = () => {
  const { t } = useTranslationHook();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/manjkapw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="right-panel">
      <div className="form-container">
        <h3 className="form-title">{t("mainContent.contactForm.title")}</h3>

        {status === "success" && (
          <div className="success-message">
            {t("mainContent.contactForm.successMessage")}
          </div>
        )}

        {status === "error" && (
          <div className="error-message">
            {t("mainContent.contactForm.errorMessage")}
          </div>
        )}

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              placeholder={t("mainContent.contactForm.fullName")}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder={t("mainContent.contactForm.emailAddress")}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phoneNumber"
              placeholder={t("mainContent.contactForm.phoneNumber")}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="gradeLevel"
              min="0"
              max="12"
              placeholder={t("mainContent.contactForm.gradeLevel")}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder={t("mainContent.contactForm.message")}
              rows="4"
              className="form-textarea"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="submit-btn"
            disabled={status === "sending"}
          >
            {status === "sending"
              ? t("mainContent.contactForm.sending")
              : t("mainContent.contactForm.submit")}
          </button>
        </form>
      </div>
    </div>
  );
};
