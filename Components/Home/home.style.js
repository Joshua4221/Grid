import styled from "styled-components";

export const HomeDiv = styled.div`
  .heroSection {
    background-color: #e8effe;
    height: 120vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 100px;
    font-family: "Poppins", sans-serif;

    .heroSectionDetails {
      width: 50%;
      padding: 0px 20px;

      h3 {
        font-size: 46px;
        font-weight: 900;
        font-style: normal;
        color: ${({ color }) => color.HeroGeneral};
      }

      p {
        font-weight: 400;
        font-size: 19px;
        letter-spacing: 1px;
        opacity: 0.5;
        padding: 20px 0px;
      }
    }

    .heroSectionGraphics {
      width: 50%;
      position: relative;
      padding: 0px 20px;

      .graphicIconOne {
        position: absolute;
        top: 27rem;
        left: 5rem;
      }

      .graphicsImage {
        z-index: 3;
      }

      .graphicIconTwo {
        position: absolute;
        top: 7rem;
        left: 28rem;
      }

      .graphicsBoxOne {
        background: ${({ color }) => color.FooterColor};
        width: 150px;
        height: 150px;
        position: absolute;
        top: 21rem;
        border-radius: 50%;
        z-index: 5;
      }

      .graphicsBoxTwo {
        background-color: ${({ color }) => color.MajorColor};
        width: 90px;
        height: 90px;
        border-radius: 50%;
        position: absolute;
        top: 10rem;
        left: 31rem;
        z-index: 5;
      }
    }
  }
`;
