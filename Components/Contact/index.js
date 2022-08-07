import heroImage from "../../Asset/Image/aboutus.jpg";
import CCards from "../../Universal-Components/C_Cards";
import Nav from "../../Universal-Components/Nav";
import { CCardsArray } from "../../Util/Contact/CCards";
import { NavArray } from "../../Util/Nav";
import { ContactMainDiv } from "./contact.style";
import ContactIcon from "../../Asset/Image/contact.svg";
import Image from "next/image";
import FormArray from "../../Util/Contact/FormArr";
import FormComponent from "../../Universal-Components/FormComponent";
import { withTheme } from "styled-components";
import MapComponent from "../../Universal-Components/MapComponent";
import { useRef } from "react";
import HeroSection from "../../Universal-Components/HeroSection";

const ContactScreen = ({ theme }) => {
  const nav = useRef();

  // const navScroll = () => {
  //   if (nav.current.onscroll > 20) {
  //     console.log("joshua");
  //   }
  // };

  // window.onscroll = function () {
  //   navScroll();
  // };

  return (
    <ContactMainDiv color={theme}>
      {/* <Nav navArray={NavArray} ref={nav} /> */}
      <HeroSection bg={heroImage} heroText={"Contact Us"} />
      <div>
        <CCards ccardArray={CCardsArray} />
        <div className={"get_in_touch"}>
          <div className={"contactImage"}>
            <Image
              src={ContactIcon}
              alt={"formIcon"}
              placeholder="blur"
              priority
              blurDataURL
              // width={"900px"}
              // height={"800px"}
              layout={"responsive"}
              objectFit="cover"
              className={"image"}
            />
          </div>
          <div className={"formbody"}>
            <div className={"formbodyHeader"}>
              <h3>Get in touch!</h3>
            </div>
            <FormComponent formArray={FormArray} />
          </div>
        </div>
        <div className={"map"}>
          <MapComponent />
        </div>
      </div>
    </ContactMainDiv>
  );
};

export default withTheme(ContactScreen);
