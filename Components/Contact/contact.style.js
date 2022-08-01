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
    }
  }
`;

export const ContactDiv = styled.div`
  background-image: url(${({ bg }) => bg.src});
  background-position: center;
  background-repeat: no-repeat;
  /* background-size: contain; */
  /* opacity: 0.9; */
  height: 65vh;
  margin-bottom: 90px;

  .contactBody {
    background-color: rgb(22, 28, 45, 0.7);
    height: 100%;

    .header {
      /* border: 1px solid red; */
      display: flex;
      justify-content: center;
      height: 65%;

      h3 {
        margin: auto;
        color: ${({ color }) => color.MajorColor};
        font-size: 42px;
        font-weight: 500;
      }
    }
  }
`;
