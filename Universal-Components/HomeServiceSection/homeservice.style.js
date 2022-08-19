import styled from "styled-components";

export const HomeServiceDiv = styled.div`
  padding: 80px 0px 40px 0px;

  .HomeServiceHeader {
    text-align: center;
    width: 50%;
    margin: 0px auto;

    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      font-family: "Poppins", sans-serif;
      color: ${({ color }) => color.PrimColor};
    }

    p {
      color: ${({ color }) => color.PrimColor};
      opacity: 0.5;
      font-size: 18px;
      font-weight: 500;
      padding: 10px 0px;
    }
  }
`;
