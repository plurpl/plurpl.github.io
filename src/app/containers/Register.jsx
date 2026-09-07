import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../App.css";

export const Register = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [validationErrors, setValidationErrors] = useState({});
  const [showValidationErrors, setShowValidationErrors] = useState(false);

  const validateForm = (formData) => {
    const errors = {};

    if (!formData.get("preferredLanguage")) {
      errors.preferredLanguage = "Please select a preferred language";
    }

    if (!formData.get("firstName")?.trim()) {
      errors.firstName = "First name is required";
    }

    if (!formData.get("lastName")?.trim()) {
      errors.lastName = "Last name is required";
    }

    if (!formData.get("email")?.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get("email"))) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.get("studentName")?.trim()) {
      errors.studentName = "Student name is required";
    }

    if (!formData.get("studentGrade")?.trim()) {
      errors.studentGrade = "Student grade is required";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setShowValidationErrors(true);
      window.scrollTo(0, 0);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setValidationErrors({});
    setShowValidationErrors(false);

    try {
      const response = await fetch("https://formspree.io/f/xaeypawk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      window.scrollTo(0, 0);

      if (response.ok) {
        setSubmitStatus("success");
        e.target.reset(); // Clear the form
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldErrorClass = (fieldName) => {
    return validationErrors[fieldName] ? "form-input-error" : "";
  };

  const getSelectErrorClass = (fieldName) => {
    return validationErrors[fieldName] ? "form-select-error" : "";
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h1 className="register-title">{t("contact.registerPage.title")}</h1>

        <div className="register-blurb">{t("contact.registerPage.blurb")}</div>

        {showValidationErrors && Object.keys(validationErrors).length > 0 && (
          <div className="validation-errors">
            <h3>Please fix the following errors:</h3>
            <ul>
              {Object.entries(validationErrors).map(([field, error]) => (
                <li key={field}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        {submitStatus === "success" && (
          <div className="submit-success">
            {t("contact.registerPage.successMessage")}
          </div>
        )}

        {submitStatus === "error" && (
          <div className="submit-error">
            {t("contact.registerPage.errorMessage")}
          </div>
        )}

        <div className="register-form-container">
          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="preferredLanguage">
                  {t("contact.registerPage.preferredLanguage")} *
                </label>
                <select
                  id="preferredLanguage"
                  name="preferredLanguage"
                  required
                  className={`form-select ${getSelectErrorClass(
                    "preferredLanguage"
                  )}`}
                >
                  <option value="english">
                    {t("contact.registerPage.english")}
                  </option>
                  <option value="mandarin">
                    {t("contact.registerPage.mandarin")}
                  </option>
                </select>
                {validationErrors.preferredLanguage && (
                  <span className="field-error">
                    {validationErrors.preferredLanguage}
                  </span>
                )}
              </div>

      
               
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">
                  {t("contact.registerPage.firstName")} *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className={`form-input ${getFieldErrorClass("firstName")}`}
                />
                {validationErrors.firstName && (
                  <span className="field-error">
                    {validationErrors.firstName}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="lastName">
                  {t("contact.registerPage.lastName")} *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className={`form-input ${getFieldErrorClass("lastName")}`}
                />
                {validationErrors.lastName && (
                  <span className="field-error">
                    {validationErrors.lastName}
                  </span>
                )}
              </div>
            </div>

            <div className="form-row-single">
              <div className="form-group">
                <label htmlFor="email">
                  {t("contact.registerPage.email")} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={`form-input ${getFieldErrorClass("email")}`}
                />
                {validationErrors.email && (
                  <span className="field-error">{validationErrors.email}</span>
                )}
              </div>
            </div>

            <div className="form-row-single">
              <div className="form-group">
                <label htmlFor="phoneNumber">
                  {t("contact.registerPage.phoneNumber")}
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row-single">
              <div className="form-group">
                <label htmlFor="studentName">
                  {t("contact.registerPage.studentName")} *
                </label>
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  required
                  className={`form-input ${getFieldErrorClass("studentName")}`}
                />
                {validationErrors.studentName && (
                  <span className="field-error">
                    {validationErrors.studentName}
                  </span>
                )}
              </div>
            </div>

            <div className="form-row-single">
              <div className="form-group">
                <label htmlFor="studentGrade">
                  {t("contact.registerPage.studentGrade")} *
                </label>
                <input
                  type="number"
                  id="studentGrade"
                  name="studentGrade"
                  min="0"
                  max="12"
                  required
                  className={`form-input ${getFieldErrorClass("studentGrade")}`}
                />
                {validationErrors.studentGrade && (
                  <span className="field-error">
                    {validationErrors.studentGrade}
                  </span>
                )}
              </div>
            </div>

            <div className="form-group submit-group">
              <button
                type="submit"
                className="register-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Submitting..."
                  : t("contact.registerPage.submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
