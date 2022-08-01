import styled from "styled-components";

export const FooterDiv = styled.div`
  background-color: ${({ color }) => color.FooterColor};

  .firstlayoutname {
    display: flex;
    justify-content: space-between;
    padding: 50px 90px;

    .footerbody {
      width: 30%;
      color: ${({ color }) => color.MajorColor};
    }
  }
`;
