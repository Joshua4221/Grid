import heroImage from "../../Asset/Image/aboutus.jpg";
import CCards from "../../Universal-Components/C_Cards";
import { CCardDiv } from "../../Universal-Components/C_Cards/cards.style";
import Nav from "../../Universal-Components/Nav";
import { CCardsArray } from "../../Util/Contact/CCards";
import { NavArray } from "../../Util/Nav";
import { ContactDiv, ContactMainDiv } from "./contact.style";
import ContactIcon from "../../Asset/Image/contact.svg";
import Image from "next/image";
import FormArray from "../../Util/Contact/FormArr";
import FormComponent from "../../Universal-Components/FormComponent";
import { withTheme } from "styled-components";
import MapComponent from "../../Universal-Components/MapComponent";
import { useRef } from "react";

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
      <ContactDiv bg={heroImage} color={theme}>
        <div className="contactBody">
          <Nav navArray={NavArray} ref={nav} />
          <div className={"header"}>
            <h3>Contact Us</h3>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="10rem"
              width="100%"
              viewBox="100 200 1220 160"
            >
              {/* #0099ff */}
              <path
                fill="#fff"
                /*fill-opacity="1"*/ d="M0,224L120,240C240,256,480,288,720,288C960,288,1200,256,1320,240L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </ContactDiv>
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
