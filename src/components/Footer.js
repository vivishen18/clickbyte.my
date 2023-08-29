import "./FooterStyle.css";
import React from "react";

import { FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
          <div className="phone">
            <a href="tel:60163636977">
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            </a>

            <a href="https://wa.me/60193636977">
              <FaWhatsapp size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            </a>

            <a href="https://www.instagram.com/clickbyte.my/">
              <FaInstagram size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            </a>
          </div>

        {/* <div className="right">
          <h4>Who are we?</h4>
          <p>Vivishen & Pranav are the founders of ClickByte Digital Solutions</p>
        </div> */}
      </div>
      
    </div>
  );
};

export default Footer;
