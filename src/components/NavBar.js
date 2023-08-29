import { Link } from "react-router-dom";
import "./NavBarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import fullLogo from "../assets/fulllogo.png"

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);

  const closeMenu = () => {
    setClick(false); // Close the menu when a link is clicked
  };

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/" className="header-logo">
        <img src={fullLogo} alt="Clickbyte Logo" />
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
}

export default NavBar;