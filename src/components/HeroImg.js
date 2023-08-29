import "./HeroImgStyle.css";

import React from "react";
import { Link } from "react-router-dom";
import logoname from "../assets/logoname.png"
import background from "../assets/background.jpg"

function HeroImg() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={background} alt="IntroImg" />
      </div>
      <div className="content">
        <p>WELCOME TO </p>
        <h1><img className="into-img" src={logoname} alt="Logoname"/></h1>
        <div>
          <Link to="/about" className="btn">About</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
