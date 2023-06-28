import Lottie from "lottie-react";
import manWorking from "../../../Asset/lottie/man-working.json";
import { WhyDiv } from "./whyStyles.style";
import { withTheme } from "styled-components";

const WhyUsSection = ({ theme }) => {
  return (
    <WhyDiv color={theme}>
      <div className="whyus__container">
        <div className="whyus__top">
          <div className="whyus__top__wrapper">
            <h3 className="whyus__top__title">Why our Client Choose Us</h3>
            <p className="whyus__top__subtitle">
              We strive to give our clients top-notch solutions to their
              software development needs. We build products that are scalable,
              funtional and efficient.
            </p>
          </div>
        </div>
        <div className="whyus__bottom">
          <div className="whyus__bottom__left">
            <Lottie
              animationData={manWorking}
              loop
              className="whyus__bottom__left__image"
            />
          </div>
          <div className="whyus__bottom__right">
            <div className="whyus__bottom__right__container">
              <div className="whyus__bottom__right__content_wrapper">
                <div className="whyus__bottom__right__card">
                  <h4 className="whyus__bottom__right__card__number">5</h4>
                  <p className="whyus__bottom__right__card__years">Years in</p>
                  <p className="whyus__bottom__right__card__desc">
                    software development
                  </p>
                </div>
                <div className="whyus__bottom__right__card">
                  <h4 className="whyus__bottom__right__card__number">15+</h4>
                  <p className="whyus__bottom__right__card__desc">
                    Satisfied clients
                  </p>
                </div>
              </div>

              <div className="whyus__bottom__right__content_wrapper">
                <div className="whyus__bottom__right__card">
                  <h4 className="whyus__bottom__right__card__number">70%</h4>
                  <p className="whyus__bottom__right__card__desc">
                    Retention Rate
                  </p>
                </div>

                <div className="whyus__bottom__right__card">
                  <h4 className="whyus__bottom__right__card__number">20+</h4>
                  <p className="whyus__bottom__right__card__years">Team of</p>
                  <p className="whyus__bottom__right__card__desc">
                    Professionals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WhyDiv>
  );
};

export default withTheme(WhyUsSection);
