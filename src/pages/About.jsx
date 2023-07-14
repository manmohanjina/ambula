import React from "react";
import "../css/about.css"
import logo from "../assets/Icon.png"

const About = () => {
  return <div>
    <div class="container">
    <div class="statement">
      <img class="logo" src={logo} alt="Ambula Logo"/>
      <h1>At Ambula, we are deeply committed to the belief that every person deserves access to high-quality healthcare services.</h1>
      <p>We believe in a democratic approach to health, and through the use of technology, we strive to make emergency and trauma care assistance more transparent, easily accessible, and user-friendly for all individuals in India. By bridging the communication gap in healthcare delivery, we hope to empower individuals to take control of their health and well-being.</p>
      <a class="cta-button" href="#">Learn More</a>
    </div>
  </div>
</div>;
};

export default About;
