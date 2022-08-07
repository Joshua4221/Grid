import styled from "styled-components";

export const ContactMainDiv = styled.div`
  /* width: 90vw; */

  .get_in_touch {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 100px;

    .contactImage {
      width: 60%;
      /* height: 90vh; */

      .image {
        height: 100vh;
      }

      @media (max-width: 766px) {
        width: 100%;
      }
    }

    .formbody {
      width: 40%;
      box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.151);
      padding: 20px;
      border-radius: 10px;

      .formbodyHeader {
        padding: 10px 0px;

        h3 {
          color: ${({ color }) => color.SecondaryColor};
          font-weight: 500;
          font-size: 24px;
        }
      }

      @media (max-width: 766px) {
        width: 100%;
        padding: 20px;
      }
    }

    @media (max-width: 766px) {
      display: block;
      /* flex-direction: column; */
      padding: 30px 10px;
    }
  }
`;
