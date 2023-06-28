import React from "react";
import { withTheme } from "styled-components";
import { TechnologiesDiv } from "./technology.style";
import OurTechy, { ImagesSect } from "../ourtech/ourtech";

const Technologies = ({ techIconArray, theme }) => {
  return (
    <TechnologiesDiv color={theme}>
      {/* {techIconArray.map((item, key) => (
        <div key={key} className={"card"}>
          <item.icon className={"icon"} />
        </div>
      ))} */}

      <ImagesSect />
      {/* <OurTechy /> */}
    </TechnologiesDiv>
  );
};

export default withTheme(Technologies);
