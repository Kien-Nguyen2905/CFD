import React from "react";
import Featured from "../../component/featured/Featured";
import Question from "../../component/question/Question";
import Register from "../../component/register/Register";
import { useQuery } from "../../hooks/useQuery";
import { courseService } from "../../service/courseService";
import { pageService } from "../../service/pageService";
import { rateService } from "../../service/rateService";
import { teamService } from "../../service/teamService";
import CourseComing from "./CourseComing";
import CoursesHome from "./CoursesHome";
import GalleryHome from "./GalleryHome";
import HeroHome from "./HeroHome";
import TeacherHome from "./TeacherHome";
import TestimonialHome from "./TestimonialHome";
const HomePage = () => {
  const { data: courses } = useQuery(() => courseService.getCourses());
  const { data: teacher } = useQuery(() => teamService.getTeam());
  const { data: featured } = useQuery(() => pageService.getPage("home"));
  const { data: testimonial } = useQuery(() => rateService.getRate());
  return (
    <main className="mainwrapper">
      <HeroHome />
      <CourseComing courseComing={courses?.courses} />
      <CoursesHome />
      <TeacherHome data={teacher} />
      <Featured data={featured} />
      <TestimonialHome data={testimonial?.rates} />
      <Question />
      <GalleryHome />
      <Register />
    </main>
  );
};

export default HomePage;
