import React from "react";
import { useTranslation } from "react-i18next";
import { ContentWrapper } from "../../components/common/ContentWrapper";
import { ContentImageTitle } from "../../components/common/ContentImageTitle";
import "../../App.css";

export const NewsAnalysis = () => {
  const { t } = useTranslation();

  const newsAnalysisContent = (
    <div className="content-image-title-text-text">
      {t("programs.newsAnalysis.section1.content")}
    </div>
  );

  const newsAnalysisBenefitsContent = (
    <div className="content-image-title-text-text">
      {t("programs.newsAnalysis.section2.content")}
    </div>
  );

  const newsAnalysisImageTitle = (
    <ContentImageTitle
      title={t("programs.newsAnalysis.section1.title")}
      image={
        <img
          src={"/images/posters/news-analysis.jpg"}
          alt="News Analysis Program"
        />
      }
      text={newsAnalysisContent}
      bkgColor="yellow"
      poster={true}
    />
  );

  const newsAnalysisBenefitsImageTitle = (
    <ContentImageTitle
      image={
        <img
          src={"/images/posters/news-analysis2.jpg"}
          alt="News Analysis Benefits"
        />
      }
      text={newsAnalysisBenefitsContent}
      bkgColor="blue"
      poster={true}
    />
  );

  return (
    <div className="news-analysis-page">
      <ContentWrapper
        headerColor="blue"
        title={t("programs.newsAnalysis.title")}
        content={newsAnalysisImageTitle}
        alignment="left"
      />
      <ContentWrapper
        headerColor="yellow"
        title={t("programs.newsAnalysis.section2.title")}
        content={newsAnalysisBenefitsImageTitle}
        alignment="right"
      />
    </div>
  );
};
