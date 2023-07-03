import React from "react";
import { useQuery } from "../../hooks/useQuery";
import { courseService } from "../../service/courseService";
import CoursePopularItem from "./CoursePopularItem";

const CoursesPopular = ({ notCourse }) => {
  const { data: course } = useQuery(() => courseService.getCourses());
  const listPopular = course?.courses?.filter((item) => item.id !== notCourse);
  return (
    <section className="courses">
      <div className="container">
        <div className="heading --center --noline">
          <h2 className="heading__title title --t2">Khoá học đề xuất</h2>
        </div>
        <div className="courses__list">
          {listPopular?.length > 0 &&
            listPopular.map((item, index) => (
              <CoursePopularItem data={item} key={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesPopular;
