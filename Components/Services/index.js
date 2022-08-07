import React from "react";
import { withTheme } from "styled-components";
import HeroSection from "../../Universal-Components/HeroSection";
import { ServicesDiv } from "./services.style";
import heroImage from "../../Asset/Image/aboutus.jpg";

const ServicesPage = ({ theme }) => {
  return (
    <ServicesDiv color={theme}>
      <HeroSection bg={heroImage} heroText={"Services"} />
      <div></div>
    </ServicesDiv>
  );
};

export default withTheme(ServicesPage);
