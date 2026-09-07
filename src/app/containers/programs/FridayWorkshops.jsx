import React from "react";
import { useTranslation } from "react-i18next";
import { ContentWrapper } from "../../components/common/ContentWrapper";
import { ContentImageTitle } from "../../components/common/ContentImageTitle";
import "../../App.css";
import { CoachCardsWrapper } from "../../components/coach/CoachCardsWrapper";

export const FridayWorkshops = () => {
  const { t } = useTranslation();

  const fridayWorkshopsContent = (
    <div className="content-image-title-text-text">
      {t("programs.fridayWorkshops.section1.content")}
    </div>
  );

  const fridayWorkshopsBenefitsContent = (
    <div className="content-image-title-text-text">
      {t("programs.fridayWorkshops.section2.content")}
    </div>
  );

  const fridayWorkshopsImageTitle = (
    <ContentImageTitle
      title={t("programs.fridayWorkshops.section1.title")}
      image={
        <img
          src={"/images/tournaments/workshop/friday_workshop1.jpg"}
          alt="Friday Workshops Program"
        />
      }
      text={fridayWorkshopsContent}
      bkgColor="yellow"
    />
  );

  const coach1 = {
    name: "Giann L",
    title: "Debate Instructor",
    image: "/images/coaches/giann_l.jpg",
    achievements: [
      t("coaches.giann_l.achievement1"),
      t("coaches.giann_l.achievement2"),
      t("coaches.giann_l.achievement3"),
      t("coaches.giann_l.achievement4"),
    ],
  };

  const coach2 = {
    name: "Charlie P",
    title: "Debate Instructor",
    image: "/images/coaches/charlie_p.jpg",
    achievements: [
      t("coaches.charlie_p.achievement1"),
      t("coaches.charlie_p.achievement2"),
      t("coaches.charlie_p.achievement3"),
      t("coaches.charlie_p.achievement4"),
    ],
  };

  const fridayWorkshopsBenefitsImageTitle = (
    <ContentImageTitle
      image={
        <img
          src={"/images/tournaments/workshop/friday_workshop2.jpg"}
          alt="Friday Workshops Benefits"
        />
      }
      text={fridayWorkshopsBenefitsContent}
      bkgColor="blue"
    />
  );

  return (
    <div className="friday-workshops-page">
      <ContentWrapper
        headerColor="blue"
        title={t("programs.fridayWorkshops.title")}
        content={fridayWorkshopsImageTitle}
        alignment="left"
      />
      <CoachCardsWrapper
        coach1={coach1}
        coach2={coach2}
        title="Our Workshop Leaders"
        description="On numerous Fridays every year, our leaders bootcamp our students to success in debate and public speaking."
      />
      <ContentWrapper
        headerColor="yellow"
        title={t("programs.fridayWorkshops.section2.title")}
        content={fridayWorkshopsBenefitsImageTitle}
        alignment="right"
      />
    </div>
  );
};
