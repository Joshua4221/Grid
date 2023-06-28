import React from "react";
import { withTheme } from "styled-components";
import { HeroSectionDiv } from "./hero.style";
import useWindowDimensions from "../../hooks/useWindowDimension";

const HeroSection = ({ bg, theme, heroText }) => {
  const width = useWindowDimensions();

  return (
    <HeroSectionDiv bg={bg} color={theme}>
      <div className="heroBody">
        <div className={"header"}>
          <h3>{heroText}</h3>
        </div>

        <div className={"heroDetails"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox={`${
              typeof window !== "undefined" && width.width > 550 ? "100" : "70"
            } ${
              typeof window !== "undefined" && width.width > 550 ? "250" : "220"
            } ${
              typeof window !== "undefined" && width.width > 560
                ? "1250"
                : "1000"
            } ${
              typeof window !== "undefined" && width.width > 900
                ? "40"
                : width.width > 700
                ? "25"
                : "0.2"
            }`}
          >
            <path
              fill="#fff"
              /*fill-opacity="1"*/ d="M0,224L120,240C240,256,480,288,720,288C960,288,1200,256,1320,240L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </HeroSectionDiv>
  );
};

export default withTheme(HeroSection);
