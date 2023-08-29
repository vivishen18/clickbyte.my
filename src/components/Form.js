import "./FormStyle.css";
import React, { useState } from "react";
import axios from "axios";
import { FaInbox, FaPhone, FaWhatsapp } from "react-icons/fa";

function Form() {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="left">
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "0.5rem" }} />
              <span>Sales:&nbsp;</span>
              <a href="https://wa.me/60173744190">017-3744190</a>
            </h4>
            <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "0.5rem" }} />
              <span>Tech:&nbsp;</span>
              <a href="https://wa.me/60193636977">019-3636977</a>
            </h4>
          </div>
        </div>
        <div className="right">
        <h4>
            <FaInbox size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <a href="mailto:pranavkandiah@gmail.com">pranavkandiah@gmail.com</a>
          </h4>
          <h4>
            <FaInbox size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <a href="mailto:nadarajanvivishen@gmail.com">nadarajanvivishen@gmail.com</a>
          </h4>
         
        </div>
      </div>
    </div>
  );
}

export default Form;
