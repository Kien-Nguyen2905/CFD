import React, { useRef } from "react";
import Control from "../../component/control/Control";
import ControlNext from "../../component/control/ControlNext";
import ControlPrev from "../../component/control/ControlPrev";
import CourseComingList from "./CourseComingList";
const CourseComing = ({ courseComing }) => {
  if (!courseComing) return;
  const courseComingListRef = useRef(null);
  const handlePrevClick = () => {
    courseComingListRef.current?.previous();
  };
  const handleNextClick = () => {
    courseComingListRef.current?.next();
  };
  return (
    <section className="coursecoming --scpadding">
      <div className="container">
        <div className="heading">
          <h2 className="heading__title title --t2">
            Khoá học <span className="color--primary">sắp khai giảng</span>
          </h2>
          <Control>
            <ControlPrev onClick={handlePrevClick} />
            <ControlNext onClick={handleNextClick} />
          </Control>
        </div>
      </div>
      <CourseComingList data={courseComing} ref={courseComingListRef} />
    </section>
  );
};

export default CourseComing;
