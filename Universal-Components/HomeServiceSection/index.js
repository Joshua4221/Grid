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
          With the most professional and advanced resources, we bring
          satisfactory outcome for your business.
        </p>
      </div>
      <div>
        <C_Cards ccardArray={HomeServiceSectionArray} />
      </div>
    </HomeServiceDiv>
  );
};

export default withTheme(HomeServiceSection);
