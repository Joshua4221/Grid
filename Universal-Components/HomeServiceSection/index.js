import React from "react";
import { withTheme } from "styled-components";
import { HomeServiceSectionArray } from "../../Util/Home/HomeServiceSection";
import C_Cards from "../C_Cards";
import { HomeServiceDiv } from "./homeservice.style";

const HomeServiceSection = ({ theme }) => {
  return (
    <HomeServiceDiv color={theme}>
      <div className={"HomeServiceHeader"}>
        <h2>Services We Provide</h2>
        <p>
          Credibly grow premier ideas rather than bricks-and-clicks strategic
          theme areas distributed for stand-alone web-readiness.
        </p>
      </div>
      <div>
        <C_Cards ccardArray={HomeServiceSectionArray} />
      </div>
    </HomeServiceDiv>
  );
};

export default withTheme(HomeServiceSection);
