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
import WhyUsSection from "./whyUs";

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
        <WhyUsSection />
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
