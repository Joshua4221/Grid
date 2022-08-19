import Image from "next/image";
import React from "react";
import { HomeDiv } from "./home.style";
import HeroImage from "../../Asset/Image/gridheroSection2.png";
import { withTheme } from "styled-components";
import ServiceSection from "../../Universal-Components/ServiceSection";
import { ServiceSectionArray } from "../../Util/Home/ServiceSection";
import {
  ServiceSectionContentArrayOne,
  ServiceSectionContentArrayTwo,
  ServiceSectionContentArrayThree,
} from "../../Util/Home/ServiceSection/servicesection";
import HomeServiceSection from "../../Universal-Components/HomeServiceSection";
import Technologies from "../../Universal-Components/Technologies";
import { TechnologiesArray } from "../../Util/Home/Technologies";

const HomePage = ({ theme }) => {
  return (
    <HomeDiv color={theme}>
      <div className="heroSection">
        <div className={"heroSectionDetails"}>
          <h3>SOFTWARE DEVELOPMENT AND DIGITAL SOLUTIONS</h3>
          <p>
            Let GridLab help you along your digital transformation journey. We
            give the best with our award winning AI driven enterprise solutions.
          </p>
        </div>
        <div className={"heroSectionGraphics"}>
          <div>
            <Image
              src={HeroImage}
              alt={""}
              layout={"responsive"}
              placeholder={"blur"}
              blurDataURL
              priority
              objectFit="cover"
              className={"graphicsImage"}
            />
          </div>
        </div>
      </div>
      <div>
        <ServiceSection
          ServiceSectionArray={ServiceSectionArray}
          ServiceSectionContentArrayOne={ServiceSectionContentArrayOne}
          ServiceSectionContentArrayTwo={ServiceSectionContentArrayTwo}
          ServiceSectionContentArrayThree={ServiceSectionContentArrayThree}
        />
      </div>
      <div>
        <HomeServiceSection />
      </div>
      <div className={"ourTech"}>
        <div className={"ourTechHeader"}>
          <h2>Our Technologies</h2>
        </div>
        <div>
          <Technologies techIconArray={TechnologiesArray} />
        </div>
      </div>
    </HomeDiv>
  );
};

export default withTheme(HomePage);
