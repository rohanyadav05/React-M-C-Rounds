import React, { useState } from "react";
import "./NavbarStyle.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);  // Toggle the menu state
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="#">MyLogo</a>
        </div>
        {/* Hamburger icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        {/* Nav links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
