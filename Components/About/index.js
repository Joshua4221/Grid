import React from "react";
import HeroSection from "../../Universal-Components/HeroSection";
import { AboutDiv } from "./about.style";
import heroImage from "../../Asset/Image/aboutus.jpg";

const AboutPage = () => {
  return (
    <AboutDiv>
      <HeroSection bg={heroImage} heroText={"About Us"} />
      <div></div>
    </AboutDiv>
  );
};

export default AboutPage;
