import React from "react";
import { withTheme } from "styled-components";
import HeroSection from "../../Universal-Components/HeroSection";
import { ServicesDiv } from "./services.style";
import heroImage from "../../Asset/Image/services.jpg";
import { HomeServiceSectionArray } from "../../Util/Home/HomeServiceSection";
import C_Cards from "../../Universal-Components/C_Cards";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";

const ServicesPage = ({ theme }) => {
  return (
    <ServicesDiv color={theme}>
      <HeroSection bg={heroImage} heroText={"Our Services"} />
      <div>
        <div>
          <C_Cards ccardArray={HomeServiceSectionArray} />
        </div>
        <div>
          <div className={"ServiceConnect"}>
            <h2>{`Do you have digital project? Let's talk.`}</h2>
            <p className={"ServiceContent"}>
              Start working with Techwind that can provide everything you need
              to generate awareness, drive traffic, connect.
            </p>
            <button className={"ServiceLink"}>
              <div className={"ServiceLinkBody"}>
                <div className={"link"}>
                  <FiPhone className={"icon"} />
                </div>
                <div className={"ServiceLinkText"}>
                  <p>Contact Us</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </ServicesDiv>
  );
};

export default withTheme(ServicesPage);
