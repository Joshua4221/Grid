import styled from "styled-components";

export const AboutProfileDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px 0px;

  .aboutprofilebody {
    position: relative;
    margin: 10px 15px;
    border-radius: 10px;

    .aboutprofileImagebody {
      width: 280px;
      height: 320px;
      border-radius: 10px;

      .aboutprofileImage {
        border-radius: 10px;
      }

      &:hover {
        .aboutprofileImage {
          /* transform:  */
        }
      }
    }

    .aboutprofilelinkbody {
      z-index: 5;
      position: absolute;
      top: 1.5rem;
      left: 14rem;

      .aboutprofilelink {
        background-color: ${({ color }) => color.InputColorBorder};
        padding: 5px;
        font-size: 20px;
        margin: 4px 0px;
        border-radius: 5px;

        a {
          .aboutprofilelinkiconbody {
            display: flex;
            align-items: center;
            justify-content: center;

            .aboutprofilelinkicon {
              color: ${({ color }) => color.PrimColor};
            }
          }
        }
      }
    }

    .aboutprofiledetails {
      text-align: center;
      padding: 1px 0px;
      border-radius: 10px;
      color: ${({ color }) => color.SecondColor};

      h3 {
        padding: 5px;
      }
      p {
        padding: 5px;
        opacity: 0.5;
      }
    }
  }
`;
