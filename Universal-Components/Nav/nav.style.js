import styled from "styled-components";

export const NavDiv = styled.div`
  /* width: 100vw; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 90px;
  /* border: 1px solid #fff; */

  .firstLayoutBody {
    padding: 0px 10px;
  }

  .secondLayout {
    display: flex;
    align-items: center;
    color: ${({ color }) => color.MajorColor};

    .secondLayoutBody {
      padding: 0px 20px;

      .secondLayoutClass {
      }
      .secondLayoutItem {
        h4 {
          padding: 5px 15px;
          font-weight: 700;
          line-height: 1.5rem;
          font-size: 20px;
          cursor: pointer;
        }
      }
    }
  }
`;
