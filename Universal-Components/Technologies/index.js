import React from "react";
import { withTheme } from "styled-components";
import { TechnologiesDiv } from "./technology.style";

const Technologies = ({ techIconArray, theme }) => {
  return (
    <TechnologiesDiv color={theme}>
      {techIconArray.map((item, key) => (
        <div key={key} className={"card"}>
          <item.icon className={"icon"} />
        </div>
      ))}
    </TechnologiesDiv>
  );
};

export default withTheme(Technologies);
