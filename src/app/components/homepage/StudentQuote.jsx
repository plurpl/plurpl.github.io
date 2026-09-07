import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { useTranslationHook } from "../../language/useTranslationHook";

export const StudentQuote = () => {
  const { t } = useTranslationHook();

  return (
    <div className="student-quote">
      <div className="quote-container">
        <div className="quote-icon">
          <FaQuoteLeft />
        </div>
        <blockquote className="quote-text">
          {t("mainContent.studentQuote.text")}
        </blockquote>
        <cite className="quote-author">
          {t("mainContent.studentQuote.author")}
        </cite>
      </div>
    </div>
  );
};
