import styled from "styled-components";
import { theme } from "../../lib/theme";

export const OurTechnologiesSection = styled.section`
  display: flex;
  flex-direction: column;
  /* background: ${({ theme }) => theme.PrimColor}; */
  padding: 40px 30px;
  overflow-x: auto;
  .ourtechText {
    text-align: center;
    text-transform: uppercase;
    font-weight: 200;
    /* color: ${({ theme }) => theme.PrimColor}; */
    font-size: 35px;
    word-spacing: 6px;
    letter-spacing: 9px;
    @media (max-width: 400px) {
      word-spacing: 4px;
      letter-spacing: 4px;
      font-size: 29px;
    }
  }
`;
export const ImagesSection = styled.div`
  padding: 20px 0;
  margin: 0px 20px;
  .imgSectionContainer {
    //animation: slide infinite 4s alternate;
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .imgDiv {
    animation: slide infinite 4s alternate;
    aspect-ratio: 1;
    margin-right: 7rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    :last-child {
      margin-right: 0;
    }
    img {
      border-radius: 45%;
      width: fit-content;
    }
    @media (max-width: 500px) {
      margin-right: 4rem;
    }
  }
  @keyframes slide {
    0% {
      margin-left: 20px;
    }
    50% {
      margin-left: -100px;
    }
    100% {
      margin-left: -200px;
    }
  }
`;
export const TechImages = styled.div`
  animation: slide infinite 4s alternate;
  box-shadow: 2px 4px 6px 0px #00000040;
  background-color: ${({ theme }) => theme.PrimColor};
  padding: 10px;
  height: 82px;
  aspect-ratio: 1;
  margin-right: 7rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  :last-child {
    margin-right: 0;
  }
  @media (max-width: 500px) {
    margin-right: 4rem;
  }
  img {
    width: 100%;
  }
`;
export const ImageContainer = styled.div`
  //animation: slide infinite 4s alternate;
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const OverAllDiv = styled.div`
  width: inherit;
  background-color: red;
`;
