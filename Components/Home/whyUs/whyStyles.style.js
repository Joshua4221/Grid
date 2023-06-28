import styled from "styled-components";

export const WhyDiv = styled.div`
  width: 100%;
  min-height: 765px;
  background-color: #e8effe;
  padding: 60px 0px;

  .whyus__container {
    width: 90%;
    margin: 0 auto;
    padding: 0 40px;

    .whyus__top {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .whyus__top__wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 768px;

        .whyus__top__title {
          font-size: 2.5rem;
          font-weight: 700;
          color: ${({ color }) => color.PrimColor};
          font-family: "Poppins", sans-serif;

          @media screen and (max-width: 769px) {
            text-align: center;
          }
        }

        .whyus__top__subtitle {
          font-size: 18px;
          font-weight: 500;
          text-align: center;
          padding: 10px 0px;
          opacity: 0.5;
          color: ${({ color }) => color.PrimColor};
        }
      }
    }

    .whyus__bottom {
      width: 100%;
      margin-top: 20px;
      padding: 0px 30px;
      display: flex;
      flex-wrap: wrap;

      .whyus__bottom__left {
        width: 50%;

        .whyus__bottom__left__image {
          width: 100%;
        }

        @media screen and (max-width: 769px) {
          width: 100%;
        }
      }

      .whyus__bottom__right {
        width: 50%;
        display: flex;
        padding-left: 40px;
        justify-content: flex-start;
        align-items: center;

        .whyus__bottom__right__container {
          width: auto;

          .whyus__bottom__right__content_wrapper {
            display: flex;
            width: 100%;

            .whyus__bottom__right__card {
              background-color: ${({ color }) => color.HeroGeneral};
              width: 45%;
              height: 155px;
              padding: 24px;
              border-radius: 10px;
              margin: 10px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: flex-start;

              .whyus__bottom__right__card__number {
                font-size: 60px;
                color: ${({ color }) => color.PrimaryColor};
                font-weight: 600;
              }

              .whyus__bottom__right__card__years {
                font-size: 18px;
                color: ${({ color }) => color.PrimaryColor};
                font-weight: 500;
              }

              .whyus__bottom__right__card__desc {
                font-size: 16px;
                font-weight: 400;
                color: ${({ color }) => color.PrimaryColor};
              }
            }

            @media screen and (max-width: 769px) {
              display: flex;
              justify-content: center;
            }
          }
        }

        @media screen and (max-width: 769px) {
          width: 100%;
          padding-left: 0;
          display: flex;
          justify-content: center;
        }
      }
    }

    @media screen and (max-width: 1024px) {
      padding: 0 5px;
    }

    @media screen and (max-width: 769px) {
      padding: 0;
    }
  }
`;
