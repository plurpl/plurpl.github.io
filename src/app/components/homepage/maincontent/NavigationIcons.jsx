import React from "react";
import { FaBook, FaUser, FaCheckCircle } from "react-icons/fa";

export const NavigationIcons = ({ type }) => {
  const icons = {
    story: <FaBook />,
    team: <FaUser />,
    register: <FaCheckCircle />,
  };

  return <div className="nav-icon">{icons[type]}</div>;
};
