import React from "react";
import { useRef } from "react";
import Control from "../../component/control/Control";
import ControlNext from "../../component/control/ControlNext";
import ControlPrev from "../../component/control/ControlPrev";
import TeacherList from "./TeacherList";
const TeacherHome = ({ data }) => {
  if (!data) return;
  const teacherRef = useRef(null);
  const handlePrevClick = () => {
    teacherRef.current?.previous();
  };
  const handleNextClick = () => {
    teacherRef.current?.next();
  };
  return (
    <section className="teacher --scpadding">
      <div className="container">
        <div className="heading">
          <h2 className="heading__title title --t2">
            Đội Ngũ <span className="color--primary">CFD Circle</span>
          </h2>
          <div className="heading__content">
            <p className="text">
              Đội ngủ giảng viên và mentor tâm huyết nhiều kinh nghiệm được tích
              luỹ từ những dự án thực tế sẽ đồng hành cùng bạn xuyên suốt quá
              trình học và con đường phát triển sự nghiệp.
            </p>
            <Control>
              <ControlPrev onClick={handlePrevClick}></ControlPrev>
              <ControlNext onClick={handleNextClick}></ControlNext>
            </Control>
          </div>
        </div>
      </div>
      <TeacherList teacher={data} ref={teacherRef}></TeacherList>
    </section>
  );
};

export default TeacherHome;
