import GraphQl from "../../../assets/graphql.png";
import PhP from "../../../assets/php.png";
import Next from "../../../assets/next.png";
import React from "../../../assets/react.png";
import Apollo from "../../../assets/apollo.png";
import DB from "../../../assets/db.png";
import MongoDB from "../../../assets/mongodb.png";
import TypeScript from "../../../assets/typescript.png";
import Electron from "../../../assets/electron.png";
import Nodejs from "../../../assets/nodejs.png";
import Python from "../../../assets/python.png";

import Image from "next/image";
import { ImagesSection, OurTechnologiesSection } from "./ourtech.styles";

const ourtechimages = [
  GraphQl,
  PhP,
  Next,
  React,
  Apollo,
  DB,
  TypeScript,
  Electron,
  Nodejs,
  Python,
  MongoDB,
];

export const OurTechnologies = ({ ourtechimage }) => {
  return (
    <OurTechnologiesSection>
      <p className="ourtechText">{text}</p>
      <ImagesSection>
        <>
          <div className="imgSectionContainer">
            {ourtechimage.map((item, index) => {
              return (
                <div className="imgDiv" key={index}>
                  <img
                    className="techLogo"
                    src={item.image.data.attributes.url}
                    width={"85"}
                    height={"60"}
                    objectFit={"contain"}
                    layout={"fixed"}
                  />
                </div>
              );
            })}
          </div>
        </>
      </ImagesSection>
    </OurTechnologiesSection>
  );
};
export const ImagesSect = ({ ourtechimages }) => {
  <ImagesSection>
    <>
      <div className="imgSectionContainer">
        {ourtechimages.map((item, index) => {
          return (
            <div className="imgDiv" key={index}>
              <Image
                className="techLogo"
                src={item}
                width={"85"}
                height={"60"}
                objectFit={"contain"}
                layout={"fixed"}
              />
            </div>
          );
        })}
      </div>
    </>
  </ImagesSection>;
};
export const OurTechy = ({ ourtechimage }) => {
  return (
    <OurTechnologiesSection>
      <p className="ourtechText">our technologies</p>
      <ImagesSection>
        <>
          <div className="imgSectionContainer">
            {ourtechimage.map((item, index) => {
              return (
                <div className="imgDiv" key={index}>
                  <img className="techLogo" src={item.url} />
                </div>
              );
            })}
          </div>
        </>
      </ImagesSection>
    </OurTechnologiesSection>
  );
};
