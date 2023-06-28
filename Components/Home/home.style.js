import styled from "styled-components";

export const HomeDiv = styled.div`
  .heroSection {
    background-color: #e8effe;
    height: 95vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0px 100px;
    font-family: "Poppins", sans-serif;

    .heroSectionDetails {
      width: 50%;
      padding: 0px 20px;

      h3 {
        font-size: 80px;
        font-weight: 900;
        font-style: normal;
        line-height: 95px;
        color: ${({ color }) => color.HeroGeneral};

        @media screen and (max-width: 950px) {
          font-size: 60px;
        }

        @media screen and (max-width: 750px) {
          font-size: 40px;
          line-height: 50px;
        }

        @media screen and (max-width: 500px) {
          font-size: 32px;
        }
      }

      p {
        font-weight: 600;
        font-size: 22px;
        letter-spacing: 1px;
        opacity: 0.7;
        padding: 20px 0px;
      }

      @media screen and (max-width: 950px) {
        width: 100%;
      }
    }

    .heroSectionGraphics {
      width: 50%;
      padding: 0px 20px;

      .graphicsImage {
        z-index: 3;
      }

      @media screen and (max-width: 950px) {
        width: 100%;
      }
    }

    @media screen and (max-width: 1200px) {
      padding: 0px 30px;
    }

    @media screen and (max-width: 950px) {
      flex-direction: column;
      height: unset;
      padding-top: 100px;
    }
  }

  .ourTech {
    text-align: center;
    padding: 30px 0px;

    .ourTechHeader {
      h2 {
        font-family: "Poppins", sans-serif;
        color: ${({ color }) => color.PrimColor};
        font-size: 2.5rem;
        font-weight: 700;
        padding: 10px 0px;
      }
    }
  }
`;
