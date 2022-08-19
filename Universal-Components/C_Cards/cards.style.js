import styled from "styled-components";

export const CCardDiv = styled.div`
  margin: 20px 0px;
  /* margin-top: 40px; */
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 30px 100px;
  text-align: center;

  .ccardbody {
    width: 30%;
    text-align: ${({ about }) => (about ? "left" : "center")};
    color: ${({ color }) => color.SecondaryColor};
    padding: ${({ about }) => (about ? "20px 25px" : "20px 10px")};
    border-radius: 20px;
    margin: 10px 5px;
    box-shadow: ${({ about }) =>
      about && `0px 3px 6px 0px rgba(0, 0, 0, 0.151)`};

    &:hover {
      box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.151);
    }

    .ccardIconbody {
      background-color: ${({ color }) => color.BorderColor};
      width: 80px;
      margin: ${({ about }) => (about ? "20px 0px" : "20px auto")};
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.151);
      /* display: flex;
      justify-content: center; */

      .ccardIcon {
        color: ${({ color }) => color.SectionColor};
        font-size: 32px;
      }
    }

    .ccardDetails {
      width: ${({ about }) => (about ? "100%" : "80%")};
      margin: ${({ about }) => (about ? "0px" : "0px auto")};

      h3 {
        padding: 10px 2px;
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 1.75rem;
      }

      p {
        opacity: 0.55;
        line-height: 1.625rem;
        padding: 10px 0px;
      }

      h4 {
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.025em;
        line-height: 1.5rem;
        color: ${({ color }) => color.SectionColor};
        padding: 10px 0px;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
          transition: all 5s linear;
        }
      }
    }

    @media (max-width: 950px) {
      width: 45%;
    }

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  @media (max-width: 950px) {
    justify-content: center;
  }

  @media (max-width: 765px) {
    padding: 30px 10px;
  }

  @media (max-width: 414px) {
    padding: 30px 10px;
  }
`;
