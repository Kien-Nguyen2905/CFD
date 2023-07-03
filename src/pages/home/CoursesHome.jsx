import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/pathname";
import CourseList from "../courses/CourseList";

const CoursesHome = () => {
  return (
    <section className="courses">
      <div className="container">
        <div className="heading">
          <h2 className="heading__title title --t2">
            Tất cả <span className="color--primary">khóa học</span>
          </h2>
        </div>
        <CourseList />
        <div className="courses__btnall">
          <Link to={PATHS.HOME} className="course__btn btn btn--grey">
            Tất cả khoá học
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesHome;
