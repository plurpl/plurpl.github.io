import React from "react";
import { Link } from "react-router-dom";

export const Logo = ({ svg, className = "" }) => {
  return (
    <Link to="/" className="logo-container">
      <div className={`logo ${className}`}>{svg}</div>
    </Link>
  );
};
