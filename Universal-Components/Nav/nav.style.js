import styled from "styled-components";

export const NavDiv = styled.div`
  width: 100%;
  z-index: 11;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 90px;
  position: absolute;
  /* border: 1px solid #fff; */

  .firstLayoutBody {
    padding: 0px 10px;
  }

  .secondLayout {
    display: flex;
    align-items: center;
    color: ${({ color }) => color.MajorColor};

    .secondLayoutBodylink {
      padding: 0px 20px;

      .secondLayoutClasslink {
      }
      .secondLayoutItemlink {
        p {
          padding: 5px 15px;
          font-weight: 700;
          line-height: 1.5rem;
          font-size: 20px;
          cursor: pointer;
        }
      }

      @media (max-width: 790px) {
        display: block;
        padding: 10px;
      }
    }

    @media (max-width: 790px) {
      width: 100%;
      background-color: ${({ color }) => color.FooterColor};
      display: ${({ show }) => (show ? "block" : "none")};
      position: absolute;
      top: 45px;
      left: 0px;
      padding: 20px 0px;
    }
  }

  .thirdLayout {
    display: none;
    color: ${({ color }) => color.MajorColor};

    .thirdLayoutBodyicon {
      .thirdLayoutClassicon {
        .thirdLayoutItemicon {
          font-size: 32px;
        }
      }
    }

    @media (max-width: 790px) {
      display: block;
    }
  }

  @media (max-width: 970px) {
    padding: 10px;
  }

  @media (max-width: 790px) {
    padding: 10px;
    background-color: ${({ color }) => color.FooterColor};
  }
`;
