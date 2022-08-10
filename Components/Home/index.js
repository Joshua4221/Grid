import Image from "next/image";
import React from "react";
import { HomeDiv } from "./home.style";
import HeroImage from "../../Asset/Image/banner_image.png";
import subPortion from "../../Asset/Image/banner_dot.png";
import { withTheme } from "styled-components";

const HomePage = ({ theme }) => {
  return (
    <HomeDiv color={theme}>
      <div className="heroSection">
        <div className={"heroSectionDetails"}>
          <h3>We Care About any IT Solution</h3>
          <p>
            Proactively coordinate quality quality vectors vis-a-vis supply
            chains. Quickly engage client-centric web services.
          </p>
        </div>
        <div className={"heroSectionGraphics"}>
          <div className={"graphicIconOne"}>
            <Image src={subPortion} alt={""} />
          </div>
          <div>
            <Image
              src={HeroImage}
              alt={""}
              // layout={"responsive"}
              objectFit="cover"
              className={"graphicsImage"}
            />
          </div>
          <div className={"graphicIconTwo"}>
            <Image src={subPortion} alt={""} />
          </div>
          <span className={"graphicsBoxOne"}></span>
          <span className={"graphicsBoxTwo"}></span>
        </div>
      </div>
    </HomeDiv>
  );
};

export default withTheme(HomePage);
