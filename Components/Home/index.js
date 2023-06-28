import Image from "next/image";
import React from "react";
import { HomeDiv } from "./home.style";
import HeroImage from "../../Asset/Image/gridheroSection2.webp";
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
          <h3 data-aos="zoom-in" data-aos-duration="3000">
            We Care About any IT Solution
          </h3>
          <p data-aos="fade-up" data-aos-duration="3000">
            Proactively coordinate quality quality vectors vis-a-vis supply
            chains. Quickly engage client-centric web services.
          </p>
        </div>
        <div className={"heroSectionGraphics"}>
          <div data-aos="fade-left" data-aos-duration="3000">
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
