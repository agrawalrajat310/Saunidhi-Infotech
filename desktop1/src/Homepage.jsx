import React from "react";
import logo from "./logo.png";
import vec from "./Vector.png";
import "./App.css";

const Homepage = () => {
  return (
    <div id="home">
      <img className="bg" src={vec} alt="background logo" />
      <img className="logo1" src={logo} alt="logo" />

      <div id="head">
        <div>SERVICES</div>
        <div>SOLUTIONS</div>
        <div>PORTFOLIO</div>
        <div>COMPANY</div>
        <div>BLOG</div>
        <div className="cont">CONTACT US</div>
      </div>
    </div>
  );
};

export default Homepage;
