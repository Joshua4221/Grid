import styled from "styled-components";

export const ServicesDiv = styled.div`
  .ServiceConnect {
    text-align: center;
    padding: 30px 0px;
    width: 60%;
    margin: 0px auto;

    h2 {
      width: 50%;
      margin: 0 auto;
      text-align: center;
      font-size: 1.8rem;
      font-weight: 500;
      color: ${({ color }) => color.SecondaryColor};

      @media screen and (max-width: 835px) {
        width: 90%;
      }
    }

    .ServiceContent {
      font-size: 18px;
      font-weight: 500;
      color: ${({ color }) => color.SecondaryColor};
      opacity: 0.5;
      padding: 10px 0px;
    }

    .ServiceLink {
      margin: 20px 0px;
      padding: 10px 15px;
      border: none;
      outline: none;
      background-color: ${({ color }) => color.SectionColor};
      border-radius: 6px;
      cursor: pointer;

      .ServiceLinkBody {
        display: flex;
        justify-content: center;
        align-items: center;

        .icon {
          color: ${({ color }) => color.MajorColor};
        }

        .ServiceLinkText {
          color: ${({ color }) => color.MajorColor};
          font-size: 17px;
          font-weight: 500;
          padding: 0px 0px 0px 10px;
        }
      }
    }

    @media screen and (max-width: 765px) {
      padding: 0px 10px;
      width: 100%;
    }
  }
`;
