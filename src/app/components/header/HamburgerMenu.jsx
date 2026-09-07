import React from "react";
import { FaBars } from "react-icons/fa";
import "../../App.css";

export const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <button
      className="hamburger-menu"
      onClick={toggleMenu}
      aria-label="Toggle mobile menu"
    >
      <FaBars />
    </button>
  );
};
