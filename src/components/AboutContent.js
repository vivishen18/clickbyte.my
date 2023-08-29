import { Link } from "react-router-dom";
import "./AboutContentStyle.css";
import React from "react";
import react1 from "../assets/react1.jpg";
import react2 from "../assets/react2.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <h1>Welcome to ClickByte.my – Your Digital Transformation Partner</h1>
      <div className="left">
        <p>At ClickByte.my, we're more than just a web design and digital marketing company – we're your dedicated partner in achieving online success. With a passion for innovation and a commitment to excellence, we specialize in creating captivating websites and executing result-driven digital marketing strategies.</p>
        <p>Our team of creative designers, skilled developers, and savvy marketers collaborate seamlessly to transform your digital presence. From responsive web designs that captivate your audience to data-driven marketing campaigns that boost your online visibility, we tailor our solutions to suit your unique goals.</p>
        <p>With a pulse on the latest industry trends and a focus on user-centric experiences, we empower businesses to thrive in the digital landscape. Partner with ClickByte.my and unlock the full potential of your online journey. Experience excellence in web design and digital marketing – experience ClickByte.my</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={react1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={react2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
