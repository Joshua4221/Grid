import React from "react";
import { withTheme } from "styled-components";
import HeroSection from "../../Universal-Components/HeroSection";
import { ServicesDiv } from "./services.style";
import heroImage from "../../Asset/Image/services.jpg";

const ServicesPage = ({ theme }) => {
  return (
    <ServicesDiv color={theme}>
      <HeroSection bg={heroImage} heroText={"Our Services"} />
      <div></div>
    </ServicesDiv>
  );
};

export default withTheme(ServicesPage);
