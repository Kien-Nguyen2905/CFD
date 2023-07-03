import React, { useRef } from "react";
import Control from "../../component/control/Control";
import ControlNext from "../../component/control/ControlNext";
import ControlPrev from "../../component/control/ControlPrev";
import TestimonialItem from "./TestimonialIem";
const TestimonialHome = ({ data }) => {
  if (!data) return;
  const testimonialRef = useRef(null);
  const handlePrevClick = () => {
    testimonialRef?.current?.previous();
  };
  const handleNextClick = () => {
    testimonialRef?.current?.next();
  };
  return (
    <section className="testimonial --scpadding">
      <div className="container">
        <div className="testimonial__inner">
          <div className="heading --white">
            <h2 className="heading__title title --t2 --white">
              Cảm nhận <span className="color--primary">học viên</span>
            </h2>
            <Control>
              <ControlPrev type="second" onClick={handlePrevClick} />
              <ControlNext type="second" onClick={handleNextClick} />
            </Control>
          </div>
          <div className="testimonial__slider">
            <div className="testimonial__slider-list">
              <div className="item">
                <TestimonialItem data={data} ref={testimonialRef} />
              </div>
              <div className="dots" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialHome;
