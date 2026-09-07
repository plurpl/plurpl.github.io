import React from "react";
import { useTranslation } from "react-i18next";
import { CoachCardNew } from "../components/coach/CoachCardNew";

export const OurTeam = () => {
  const { t } = useTranslation();

  // All coaches except Assistant Coaches grouped together
  const mainCoaches = [
    {
      id: 1,
      name: "Chris P",
      title: t("ourTeamPage.coachTitles.headCoach"),
      image: "/images/coaches/chris_p.jpg",
      first_initial: "chris_p",
    },
    {
      id: 2,
      name: "Deborah W",
      title: t("ourTeamPage.coachTitles.headCoach"),
      image: "/images/coaches/deborah_w.jpg",
      first_initial: "deborah_w",
    },
    {
      id: 3,
      name: "Charlie P",
      title: t("ourTeamPage.coachTitles.debateAndPublicSpeakingCoach"),
      image: "/images/coaches/charlie_p.jpg",
      first_initial: "charlie_p",
    },
    {
      id: 4,
      name: "Matt C",
      title: t("ourTeamPage.coachTitles.debateInstructor"),
      image: "/images/coaches/matt_c.jpg",
      first_initial: "matt_c",
    },
    {
      id: 5,
      name: "Naomi P",
      title: t("ourTeamPage.coachTitles.debateInstructor"),
      image: "/images/coaches/naomi_p.jpg",
      first_initial: "naomi_p",
    },
    {
      id: 6,
      name: "Pranav A",
      title: t("ourTeamPage.coachTitles.debateInstructor"),
      image: "/images/coaches/pranav_a.jpg",
      first_initial: "pranav_a",
    },
    {
      id: 7,
      name: "Tejas S",
      title: t("ourTeamPage.coachTitles.debateInstructor"),
      image: "/images/coaches/tejas_s.jpg",
      first_initial: "tejas_s",
    },
    {
      id: 8,
      name: "Madeline K",
      title: t("ourTeamPage.coachTitles.modelUNInstructor"),
      image: "/images/coaches/madeline_k.jpg",
      first_initial: "madeline_k",
    },
    {
      id: 9,
      name: "Jacob S",
      title: t("ourTeamPage.coachTitles.debateInstructor"),
      image: "/images/coaches/jacob_s.jpg",
      first_initial: "jacob_s",
    },
    {
      id: 10,
      name: "Meg K",
      title: t("ourTeamPage.coachTitles.debateInstructor"),
      image: "/images/coaches/meg_k.jpg",
      first_initial: "meg_k",
    },
    {
      id: 11,
      name: "Tanvir S",
      title: t("ourTeamPage.coachTitles.debateInstructor"),
      image: "/images/coaches/tanvir_s.jpg",
      first_initial: "tanvir_s",
    },
    {
      id: 12,
      name: "Alex L",
      title: t("ourTeamPage.coachTitles.debateInstructor"),
      image: "/images/coaches/alex_l.jpg",
      first_initial: "alex_l",
    },
    {
      id: 13,
      name: "Varun L",
      title: t("ourTeamPage.coachTitles.debateInstructor"),
      image: "/images/coaches/varun_l.jpg",
      first_initial: "varun_l",
    },
    {
      id: 14,
      name: "Saara M",
      title: t("ourTeamPage.coachTitles.debateInstructor"),
      image: "/images/coaches/saara_m.jpg",
      first_initial: "saara_m",
    },
    {
      id: 15,
      name: "Adam B",
      title: t("ourTeamPage.coachTitles.debateInstructor"),
      image: "/images/coaches/adam_b.jpg",
      first_initial: "adam_b",
    },
    {
      id: 16,
      name: "Ameen P",
      title: t("ourTeamPage.coachTitles.debateInstructor"),
      image: "/images/coaches/ameen_p.jpg",
      first_initial: "ameen_p",
    },
    {
      id: 17,
      name: "Annie L",
      title: t("ourTeamPage.coachTitles.debateInstructor"),
      image: "/images/coaches/annie_l.jpg",
      first_initial: "annie_l",
    },
    {
      id: 18,
      name: "Elgin L",
      title: t("ourTeamPage.coachTitles.debateInstructor"),
      image: "/images/coaches/elgin_l.jpg",
      first_initial: "elgin_l",
    },
    {
      id: 19,
      name: "William C",
      title: t("ourTeamPage.coachTitles.debateInstructor"),
      image: "/images/coaches/william_c.jpg",
      first_initial: "william_c",
    },
    {
      id: 20,
      name: "Giann L",
      title: t("ourTeamPage.coachTitles.debateInstructor"),
      image: "/images/coaches/giann_l.jpg",
      first_initial: "giann_l",
    },
    {
      id: 21,
      name: "Sean O",
      title: t("ourTeamPage.coachTitles.debateInstructor"),
      image: "/images/coaches/sean_o.jpg",
      first_initial: "sean_o",
    },
    {
      id: 22,
      name: "Max C",
      title: t("ourTeamPage.coachTitles.debateInstructor"),
      image: "/images/coaches/max_c.jpg",
      first_initial: "max_c",
    },
    {
      id: 23,
      name: "Hannah C",
      title: t("ourTeamPage.coachTitles.debateInstructor"),
      image: "/images/coaches/hannah_c.jpg",
      first_initial: "hannah_c",
    },
    {
      id: 24,
      name: "Henry G",
      title: t("ourTeamPage.coachTitles.debateInstructor"),
      image: "/images/coaches/henry_g.png",
      first_initial: "henry_g",
    },
    {
      id: 25,
      name: "Emily Z",
      title: t("ourTeamPage.coachTitles.debateInstructor"),
      image: "/images/coaches/emily_z.png",
      first_initial: "emily_z",
    },
    {
      id: 26,
      name: "Emily C",
      title: "Debate and Business Competition Instructor",
      image: "/images/coaches/emily_c.jpg",
      first_initial: "emily_c",
    },
  ];

  const assistantCoaches = [
    {
      id: 27,
      name: "Jasmine Z",
      title: t("ourTeamPage.coachTitles.assistantCoach"),
      image: "/images/coaches/jasmine_z.jpg",
      first_initial: "jasmine_z",
    },
    {
      id: 28,
      name: "Bonnie L",
      title: t("ourTeamPage.coachTitles.assistantCoach"),
      image: "/images/coaches/bonnie_l.jpg",
      first_initial: "bonnie_l",
    },
    {
      id: 29,
      name: "Lucy Y",
      title: t("ourTeamPage.coachTitles.assistantCoach"),
      image: "/images/coaches/lucy_y.jpg",
      first_initial: "lucy_y",
    },
    {
      id: 30,
      name: "Edward A",
      title: t("ourTeamPage.coachTitles.assistantCoach"),
      image: "/images/coaches/edward_a.jpg",
      first_initial: "edward_a",
    },
    {
      id: 31,
      name: "George W",
      title: t("ourTeamPage.coachTitles.assistantCoach"),
      image: "/images/coaches/george_w.jpg",
      first_initial: "george_w",
    },
    {
      id: 32,
      name: "Aiden H",
      title: t("ourTeamPage.coachTitles.assistantCoach"),
      image: "/images/coaches/aiden_h.png",
      first_initial: "aiden_h",
    },
    {
      id: 33,
      name: "Jack W",
      title: t("ourTeamPage.coachTitles.assistantCoach"),
      image: "/images/coaches/jack_w.png",
      first_initial: "jack_w",
    },
    {
      id: 34,
      name: "Ashley P",
      title: t("ourTeamPage.coachTitles.assistantCoach"),
      image: "/images/coaches/ashley_p.jpg",
      first_initial: "ashley_p",
    },
    {
      id: 35,
      name: "Miranda S",
      title: t("ourTeamPage.coachTitles.assistantCoach"),
      image: "/images/coaches/miranda_s.jpg",
      first_initial: "miranda_s",
    },
  ];

  // Function to get achievements for a coach from translations
  const getCoachAchievements = (firstInitial) => {
    if (!firstInitial) return [];

    const achievements = [];
    for (let i = 1; i <= 4; i++) {
      const achievement = t(`coaches.${firstInitial}.achievement${i}`);
      if (achievement && achievement.trim() !== "") {
        achievements.push(achievement);
      }
    }
    return achievements;
  };

  return (
    <div className="our-team-container">
      <div className="team-header">
        <h1 className="team-title">{t("ourTeamPage.title")}</h1>
        <p className="team-subtitle">{t("ourTeamPage.subtitle")}</p>
      </div>

      {/* Main coaches section - no title */}
      <div className="coaches-grid-new">
        {mainCoaches.map((coach) => {
          const coachWithAchievements = {
            ...coach,
            achievements: getCoachAchievements(coach.first_initial),
          };
          return <CoachCardNew key={coach.id} coach={coachWithAchievements} />;
        })}
      </div>

      {/* Assistant Coaches section with title */}
      <div className="coach-section-new">
        <h2 className="coach-section-title-new">Assistant Coaches</h2>
        <div className="coaches-grid-new">
          {assistantCoaches.map((coach) => {
            const coachWithAchievements = {
              ...coach,
              achievements: getCoachAchievements(coach.first_initial),
            };
            return (
              <CoachCardNew key={coach.id} coach={coachWithAchievements} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
