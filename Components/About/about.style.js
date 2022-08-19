import styled from "styled-components";

export const AboutDiv = styled.div`
  .corevaluebody {
    .corevalueheader {
      text-align: center;

      h3 {
        font-size: 2.5rem;
        font-weight: 700;
        font-style: normal;
        color: ${({ color }) => color.SecondaryColor};
      }

      p {
        font-size: 20px;
        font-weight: 600;
        opacity: 0.5;
        color: ${({ color }) => color.SecondaryColor};
      }
    }
  }

  .teambody {
    margin: 40px 0px;
    padding: 50px;
    text-align: center;
    background-color: ${({ color }) => color.PrimColor};

    .teambody-header {
      h5 {
        font-size: 18px;
        font-weight: 900;
        color: ${({ color }) => color.SectionColor};
      }

      h2 {
        font-size: 2.5rem;
        font-weight: 700;
        font-style: normal;
        color: ${({ color }) => color.SecondColor};
        padding: 5px 0px;
        margin: 10px 0px;
      }

      .teambody-para {
        width: 70%;
        margin: 0px auto;
        font-size: 20px;
        font-weight: 600;
        opacity: 0.5;
        color: ${({ color }) => color.SecondColor};
      }
    }
  }
`;
