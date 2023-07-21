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

      <div id="text">
        <h1 className="first">Business</h1>
        <h1 className="second">automation</h1>
        <h3 className="third">for enterprises</h3>
      </div>

      <div id="para">
        <p>
          We are a software development company helping businesses maximize
          their potential with business process automation and AI / IoT
          solutions. Our engineering team brings to the table years of
          experience in outsourced software development as well as a portfolio
          of successfully delivered machine learning and digital transformation
          products.
        </p>
      </div>

<div id="quote">
  <button>GET A FREE QUOTE</button>
</div>









    </div>
  );
};

export default Homepage;
