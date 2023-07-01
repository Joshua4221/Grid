import React, { useCallback, useState } from "react";
import { ServiceSectionDiv } from "./servicesection.style";

import { withTheme } from "styled-components";
import Image from "next/image";
import Link from "next/link";

const ServiceSection = ({
  theme,
  ServiceSectionArray,
  ServiceSectionContentArrayOne,
  ServiceSectionContentArrayTwo,
  ServiceSectionContentArrayThree,
}) => {
  const [sectionShow, setSectionShow] = useState(ServiceSectionArray[0]);
  const [sectionBody, setSectionBody] = useState(ServiceSectionContentArrayOne);

  const HandleSectionShow = useCallback(
    (item) => {
      setSectionShow(item);

      if (item === ServiceSectionArray[0]) {
        setSectionBody(ServiceSectionContentArrayOne);
      } else if (item === ServiceSectionArray[1]) {
        setSectionBody(ServiceSectionContentArrayTwo);
      } else if (item === ServiceSectionArray[2]) {
        setSectionBody(ServiceSectionContentArrayThree);
      }
    },
    [
      ServiceSectionContentArrayOne,
      ServiceSectionContentArrayTwo,
      ServiceSectionContentArrayThree,
      ServiceSectionArray,
    ]
  );

  return (
    <ServiceSectionDiv color={theme}>
      <div className={"serviceSectionOne"}>
        <h2 data-aos="fade-down" data-aos-duration="3000">
          We Build any Kind of Technology
        </h2>
        <p
          className={"ServiceDetails"}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          Credibly grow premier ideas rather than bricks-and-clicks strategic
          theme areas distributed for stand-alone web-readiness.
        </p>
        <div
          className={"SectionOneServices"}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          {ServiceSectionArray?.map((item, key) => (
            <div
              key={key}
              className={`ServiceOneDetails ${
                item === sectionShow && "active"
              }`}
              onClick={() => HandleSectionShow(item)}
            >
              <div className={"SectionOneServiceIcon"}>
                <item.icon className={"SectionIcon"} />
              </div>
              <div>
                <p className={"ServiceContent"}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={"serviceSectionTwo"}>
        <div
          className={"ServiceTwoSectionOne"}
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <Image
            src={sectionBody.image}
            alt={"section body"}
            // layout={"fixed"}
            placeholder={"blur"}
            blurDataURL
            priority
            objectFit="cover"
          />
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="3000"
          className={"ServiceTwoSectionTwo"}
        >
          <h2>{sectionBody?.header}</h2>
          <p>{sectionBody?.paragraph}</p>
          <div className={"ServiceTwoSectionContent"}>
            {sectionBody?.sectionBodyArray?.map((item, key) => (
              <div key={key} className={"ServiceTwoContent"}>
                <div className={"ServiceTwoIconContent"}>
                  <item.icon className={"ServiceTwoIcon"} />
                </div>
                <div className={"ServiceTwoContentText"}>
                  <p>{item?.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={"ServiceTwoLink"}>
            <Link href={"/about"}>
              <a>
                <div className={"ServiceTwoLinkBody"}>
                  <h3>{sectionBody?.linkText}</h3>
                  <div className={"ServiceTwoLinkIcon"}>
                    <sectionBody.linkIcon />
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </ServiceSectionDiv>
  );
};

export default withTheme(ServiceSection);
