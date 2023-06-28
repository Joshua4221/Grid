import GraphQl from "../../Asset/Image/graphql.png";
import PhP from "../../Asset/Image/php.png";
import Next from "../../Asset/Image/next.png";
import React from "../../Asset/Image/react.png";
import Apollo from "../../Asset/Image/apollo.png";
import DB from "../../Asset/Image/db.png";
import MongoDB from "../../Asset/Image/mongodb.png";
import TypeScript from "../../Asset/Image/typescript.png";
import Electron from "../../Asset/Image/electron.png";
import Nodejs from "../../Asset/Image/nodejs.png";
import Python from "../../Asset/Image/python.png";

import { withTheme } from "styled-components";

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

export const OurTechnologies = () => {
  return (
    <OurTechnologiesSection>
      {/* <p className="ourtechText">{text}</p> */}
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

export const ImagesSect = () => {
  return (
    <ImagesSection>
      <>
        <div className="imgSectionContainer">
          {ourtechimages.map((item, index) => (
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
          ))}
        </div>
      </>
    </ImagesSection>
  );
};

const OurTechy = ({ theme }) => {
  return (
    <OurTechnologiesSection theme={theme}>
      {/* <p className="ourtechText">our technologies</p> */}
      <ImagesSection>
        <>
          <div className="imgSectionContainer">
            {ourtechimages.map((item, index) => {
              return (
                <div className="imgDiv" key={index}>
                  <img className="techLogo" src={`${GraphQl}`} />
                </div>
              );
            })}
          </div>
        </>
      </ImagesSection>
    </OurTechnologiesSection>
  );
};

export default withTheme(OurTechy);
