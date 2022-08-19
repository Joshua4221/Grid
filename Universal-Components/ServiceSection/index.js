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
        <h2>Who We Are...</h2>
        <p className={"ServiceDetails"}>
          We are a client-centred software development company focused on
          meeting your specific digital needs. Our software products stand out
          based on their efficiency, scalability, and cost effectiveness. They
          are customized for every business size and are fast, secure,
          efficiently scalable, easily manageable, and undeniably powerful.
        </p>
        <div className={"SectionOneServices"}>
          {ServiceSectionArray?.map((item, key) => (
            <div
              key={key}
              className={`ServiceOneDetails ${
                item === sectionShow && "active"
              }`}
              onClick={() => HandleSectionShow(item)}>
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
        <div className={"ServiceTwoSectionOne"}>
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
        <div className={"ServiceTwoSectionTwo"}>
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
