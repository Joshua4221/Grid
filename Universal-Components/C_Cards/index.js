import React from "react";
import { withTheme } from "styled-components";
import { CCardDiv } from "./cards.style";

const CCards = ({ ccardArray, theme }) => {
  return (
    <CCardDiv color={theme}>
      {ccardArray.map((item, key) => (
        <div key={key} className={"ccardbody"}>
          <div className={"ccardIconbody"}>
            <item.icon className={"ccardIcon"} />
          </div>
          <div className={"ccardDetails"}>
            <h3>{item.header}</h3>
            <p>{item.paragraph}</p>
            <h4>{item.contact}</h4>
          </div>
        </div>
      ))}
    </CCardDiv>
  );
};

export default withTheme(CCards);
