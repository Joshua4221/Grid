import React from "react";
import HeroSection from "../../Universal-Components/HeroSection";
import { AboutDiv } from "./about.style";
import heroImage from "../../Asset/Image/aboutus.jpg";
import { VisionArray } from "../../Util/About/Vision";
import C_Cards from "../../Universal-Components/C_Cards";
import { CoreValueArray } from "../../Util/About/CoreValue";
import { withTheme } from "styled-components";
import { AboutProfileArray } from "../../Util/About/AboutProfile";
import AboutProfile from "../../Universal-Components/AboutProfile";

const AboutPage = ({ theme }) => {
  return (
    <AboutDiv color={theme}>
      <HeroSection bg={heroImage} heroText={"About Us"} />
      <div>
        <C_Cards ccardArray={VisionArray} about={"vision"} />
      </div>

      <div className={"teambody"}>
        <div className={"teambody-header"}>
          <h5>our Team</h5>
          <h2>The People Behind Quiety</h2>
          <p className={"teambody-para"}>
            Intrinsicly strategize cutting-edge before interoperable
            applications incubate extensive expertise through integrated
            intellectual capital.
          </p>
        </div>
        <div>
          <AboutProfile aboutArray={AboutProfileArray} />
        </div>
      </div>

      <div className={"corevaluebody"}>
        <div className={"corevalueheader"}>
          <h3>Our Core Values</h3>
          <p>
            Our success is built firmly on our commitment to our core values.
          </p>
        </div>
        <div>
          <C_Cards ccardArray={CoreValueArray} about={"vision"} />
        </div>
      </div>
    </AboutDiv>
  );
};

export default withTheme(AboutPage);
