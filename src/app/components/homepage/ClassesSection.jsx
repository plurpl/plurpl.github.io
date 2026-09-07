import React from "react";
// import { ClassCard } from "./ClassCard";
import { useTranslationHook } from "../../language/useTranslationHook";
import { useNavigate } from "react-router-dom";

export const ClassesSection = () => {
  const { t } = useTranslationHook();
  const navigate = useNavigate();
  const programs = [
    {
      id: 1,
      name: t("programs.debate.name"),
      description: t("programs.debate.description"),
      image: "/images/courses/debate.jpg",
      route: "/programs/debate",
    },
    {
      id: 2,
      name: t("programs.mockTrial.name"),
      description: t("programs.mockTrial.description"),
      image: "/images/courses/mock-trial.jpg",
      route: "/programs/mock-trial",
    },
    {
      id: 3,
      name: t("programs.modelUN.name"),
      description: t("programs.modelUN.description"),
      image: "/images/courses/model-un.jpg",
      route: "/programs/model-un",
    },
    {
      id: 4,
      name: t("programs.fourInOne.name"),
      description: t("programs.fourInOne.description"),
      image: "/images/courses/4-in-1.jpg",
      route: "/programs/4-in-1",
    },
    {
      id: 5,
      name: t("programs.businessCase.name"),
      description: t("programs.businessCase.description"),
      image: "/images/courses/case-comp.jpg",
      route: "/programs/business-case",
    },
    {
      id: 6,
      name: t("programs.fridayWorkshops.name"),
      description: t("programs.fridayWorkshops.description"),
      image: "/images/courses/friday-workshop.jpg",
      route: "/programs/friday-workshops",
    },
    {
      id: 7,
      name: t("programs.newsAnalysis.name"),
      description: t("programs.newsAnalysis.description"),
      image: "/images/courses/news-analysis.jpg",
      route: "/programs/news-analysis",
    },
    {
      id: 8,
      name: t("programs.jsoc.name"),
      description: t("programs.jsoc.description"),
      image: "/images/courses/jsoc.jpg",
      route: "/programs/jsoc",
    },
    {
      id: 9,
      name: t("programs.brainBee.name"),
      description: t("programs.brainBee.description"),
      image: "/images/courses/brainbee.jpg",
      route: "/programs/brain-bee",
    },
  ];

  const handleProgramClick = (route) => {
    navigate(route);
  };
  return (
    <section className="classes-section">
      <div className="classes-container">
        <h2 className="classes-title">{t("classesSection.title")}</h2>
        <p className="classes-description">{t("classesSection.description")}</p>
        {/* <div className="classes-grid">
          <ClassCard
            title={t("classesSection.debate.title")}
            description={t("classesSection.debate.description")}
            image="/images/tournaments/workshop/friday_workshop11.jpg"
            route="/programs/debate"
          />
          <ClassCard
            title={t("classesSection.modelUN.title")}
            description={t("classesSection.modelUN.description")}
            image="/images/tournaments/harvard/harvard2.jpg"
            route="/programs/model-un"
          />
          <ClassCard
            title={t("classesSection.fourInOne.title")}
            description={t("classesSection.fourInOne.description")}
            image="/images/tournaments/workshop/friday_workshop10.jpg"
            route="/programs/4-in-1"
            className="four-in-one-card"
          />
        </div> */}
        <div className="programs-grid">
          {programs.map((program) => (
            <div
              key={program.id}
              data-aos="fade-up"
              className="program-item"
              onClick={() => handleProgramClick(program.route)}
              style={{ cursor: "pointer" }}
            >
              <div className="program-image">
                <img
                  src={program.image}
                  alt={program.name}
                  className="program-background-image"
                />
                <div className="program-name-overlay">
                  <span className="program-name">{program.name}</span>
                </div>
                <div className="program-description-overlay">
                  <span className="program-description">
                    {program.description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
