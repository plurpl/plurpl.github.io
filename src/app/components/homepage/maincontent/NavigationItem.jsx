import React from "react";
import { NavigationIcons } from "./NavigationIcons";
import { useNavigate } from "react-router-dom";

export const NavigationItem = ({ type, text, navTo, showDivider = true }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="nav-item"
        onClick={() => navigate(`/${navTo}`)}
        style={{ cursor: "pointer" }}
      >
        <NavigationIcons type={type} />
        <span className="nav-text">{text}</span>
      </div>
      {showDivider && <div className="nav-divider"></div>}
    </>
  );
};
