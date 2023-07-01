import Image from "next/image";
import Link from "next/link";
import React from "react";
import { withTheme } from "styled-components";
import { AboutProfileDiv } from "./aboutprofile.style";

const AboutProfile = ({ aboutArray, theme }) => {
  return (
    <AboutProfileDiv color={theme}>
      {aboutArray.map((item, key) => (
        <div key={key} className={"aboutprofilebody"}>
          {item.image && (
            <div className={"aboutprofileImagebody"}>
              <Image
                src={item.image}
                alt={item.name}
                placeholder={"blur"}
                blurDataURL
                priority
                layout={"responsive"}
                objectFit={"cover"}
                className={"aboutprofileImage"}
              />
            </div>
          )}
          {item.linkarray && (
            <div className={"aboutprofilelinkbody"}>
              {item.linkarray.map((item, key) => (
                <div key={key} className={"aboutprofilelink"}>
                  <Link href={item.link}>
                    <a>
                      <div className={"aboutprofilelinkiconbody"}>
                        <item.linkicon className={"aboutprofilelinkicon"} />
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          )}
          <div className={"aboutprofiledetails"}>
            <h3>{item.name}</h3>
            <p>{item.profession}</p>
          </div>
        </div>
      ))}
    </AboutProfileDiv>
  );
};

export default withTheme(AboutProfile);
