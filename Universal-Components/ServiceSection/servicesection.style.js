import styled from "styled-components";

export const ServiceSectionDiv = styled.div`
  text-align: center;
  background-color: ${({ color }) => color.HeroGeneral};
  color: ${({ color }) => color.MajorColor};
  padding: 30px 0px;

  .serviceSectionOne {
    width: 40%;
    margin: 0px auto;
    padding: 30px 0px;

    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      font-family: "Poppins", sans-serif;
    }

    .ServiceDetails {
      font-weight: 500;
      opacity: 0.5;
      padding: 10px 0px;
    }

    .SectionOneServices {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      color: ${({ color }) => color.MajorColor};
      padding: 25px 0px;
      cursor: pointer;

      .ServiceOneDetails {
        display: flex;
        padding: 10px 20px;
        margin: 5px;

        .SectionOneServiceIcon {
          display: flex;
          justify-content: center;
          align-items: center;

          .SectionIcon {
            font-weight: 700;
            font-size: 18px;
          }
        }

        .ServiceContent {
          padding: 0px 0px 0px 30px;

          p {
            font-weight: 600;
            font-size: 18px;
          }

          @media screen and (max-width: 950px) {
            padding: 0px 0px 0px 15px;
          }
        }

        /* &:hover {
          border-bottom: 2px solid ${({ color }) => color.InputColorBorder};
        } */
      }

      .active {
        border-bottom: 2px solid ${({ color }) => color.SectionColor};
      }
    }

    @media screen and (max-width: 1050px) {
      width: 65%;
    }

    @media screen and (max-width: 720px) {
      width: 90%;
    }
  }

  .serviceSectionTwo {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px auto;
    padding: 10px 0px 20px 0px;

    .ServiceTwoSectionOne {
      width: 50%;
      padding: 0px 20px;

      @media screen and (max-width: 770px) {
        width: 80%;
        padding: 20px 0px;
      }
    }

    .ServiceTwoSectionTwo {
      width: 50%;
      text-align: left;
      padding: 0px 20px;

      h2 {
        font-size: 2.2rem;
        font-weight: 700;
        font-family: "Poppins", sans-serif;
      }

      p {
        font-weight: 500;
        font-size: 18px;
        opacity: 0.5;
        padding: 5px 0px;
      }

      .ServiceTwoSectionContent {
        padding: 20px 0px;

        .ServiceTwoContent {
          display: flex;
          align-items: center;

          .ServiceTwoIconContent {
            display: flex;
            align-items: center;
            padding: 5px;

            .ServiceTwoIcon {
              color: ${({ color }) => color.SectionColor};
            }
          }

          .ServiceTwoContentText {
            padding: 2px 0px 2px 20px;
          }
        }
      }
      .ServiceTwoLink {
        width: 60%;
        a {
          .ServiceTwoLinkBody {
            display: flex;
            align-items: center;

            &:hover {
              gap: 10px;
            }

            .ServiceTwoLinkIcon {
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 10px;
            }
          }
        }

        @media screen and (max-width: 880px) {
          width: 70%;
        }
      }

      @media screen and (max-width: 770px) {
        width: 80%;
      }
    }

    @media screen and (max-width: 1122px) {
      width: 95%;
    }

    @media screen and (max-width: 770px) {
      flex-direction: column;
    }
  }
`;
