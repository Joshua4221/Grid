import styled from "styled-components";

export const FooterDiv = styled.div`
  background-color: ${({ color }) => color.FooterColor};

  .firstlayoutname {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 50px 90px;

    .firstClassbody {
      width: 35%;
      color: ${({ color }) => color.MajorColor};
      padding: 0px 11px;

      .firstClassname {
        padding: 10px 0px;
      }

      .firstClassitem {
        padding: 10px 0px;
        color: ${({ color }) => color.FooterTextColor};
      }

      .firstClasslinkbody {
        color: ${({ color }) => color.FooterTextColor};
        display: flex;
        align-items: center;
        padding: 15px 0px;
        /* border: 1px solid red; */

        .linkbody {
          margin-right: 20px;
          /* border: 1px solid green; */

          .linkclass {
            /* display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid green; */

            .linkicon {
              border: 1px solid ${({ color }) => color.FooterBorderColor};
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 8px 10px;
              border-radius: 4px;

              &:hover {
                background-color: ${({ color }) => color.SectionColor};
                border: 1px solid ${({ color }) => color.SectionColor};
              }
            }
          }
        }
      }

      @media (max-width: 920px) {
        width: 100%;
      }
    }

    .secondClassbody {
      width: 20%;
      color: ${({ color }) => color.FooterTextColor};
      padding: 0px 10px;

      .secondClassname {
        padding: 10px 0px;

        h3 {
          font-weight: 600;
          letter-spacing: 1px;
          line-height: 1.5rem;
        }
      }

      .secondClasslinkbody {
        .linkbodyText {
          a {
            font-size: 18px;

            .linkclassText {
              display: flex;
              align-items: center;
              margin: 15px 0px;
              opacity: 0.8;

              .linkiconText {
                display: flex;
                justify-content: center;
                margin-right: 10px;
              }

              .linktextText {
                font-size: 16px;
              }
            }
          }
        }
      }

      @media (max-width: 920px) {
        width: 30%;
      }

      @media (max-width: 720px) {
        width: 50%;
      }

      @media (max-width: 500px) {
        width: 100%;
      }
    }

    .thirdClassbody {
      width: 25%;
      color: ${({ color }) => color.FooterTextColor};
      padding: 0px 10px;

      .thirdClassname {
        padding: 10px 0px;

        h3 {
          font-weight: 600;
          letter-spacing: 1px;
          line-height: 1.5rem;
        }
      }

      .thirdClassitem {
        color: ${({ color }) => color.FooterTextColor};
        padding: 11px 0px;
      }

      @media (max-width: 920px) {
        width: 30%;
      }

      @media (max-width: 720px) {
        width: 60%;
      }

      @media (max-width: 500px) {
        width: 100%;
      }
    }

    @media (max-width: 500px) {
      /* display: block; */
      padding: 50px 10px;
    }
  }

  .secondlayout {
    border-top: 1px solid ${({ color }) => color.FooterBorderColor};
    padding: 50px 90px;

    .secondlayoutname {
      color: ${({ color }) => color.FooterTextColor};
    }

    @media (max-width: 500px) {
      text-align: center;
      padding: 50px 10px;
    }
  }
`;
