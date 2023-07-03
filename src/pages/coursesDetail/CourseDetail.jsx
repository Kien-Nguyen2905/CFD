import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { courseService } from "../../service/courseService";
import { PATHS } from "../../constants/pathname";
import { useQuery } from "../../hooks/useQuery";
import HeroDetail from "./HeroDetail";
import ContentDetail from "./ContentDetail";
import FeaturedDetail from "./FeaturedDetail";
import CoursesPopular from "./CoursesPopular";
import Question from "../../component/question/Question";
const CourseDetail = () => {
  const { slug } = useParams();
  const { data: course } = useQuery(
    () => courseService.getCourseDetail(slug),
    [slug]
  );
  return (
    <main className="mainwrapper coursedetailpage">
      <HeroDetail course={course} />
      <ContentDetail courseContent={course} />
      <FeaturedDetail />
      <Question />
      <CoursesPopular notCourse={course?.id} />
    </main>
  );
};

export default CourseDetail;
