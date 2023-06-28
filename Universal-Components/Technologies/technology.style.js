import styled from "styled-components";

export const TechnologiesDiv = styled.div`
  /* display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center; */
  padding: 20px 30px;

  .card {
    width: 62px;
    height: 62px;
    background-color: ;
    border-radius: 50%;
    background-color: ${({ color }) => color.HeroGeneral};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: 10px;

    .icon {
      font-size: 32px;
      color: ${({ color }) => color.MajorColor};
    }
  }
`;
