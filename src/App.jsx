import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PATHS } from "./constants/pathname";
const Layout = lazy(() => import("./layout/Layout"));
const Page404 = lazy(() => import("./pages/404/Page404"));
const AboutPage = lazy(() => import("./pages/about/AboutPage"));
const CoursesPage = lazy(() => import("./pages/courses/CoursesPage"));
const HomePage = lazy(() => import("./pages/home/HomePage"));
const ContactPage = lazy(() => import("./pages/contact/ContactPage"));
const ProfilePage = lazy(() => import("./pages/profile/ProfilePage"));
const ProfileInfo = lazy(() => import("./pages/profile/ProfileInfo"));
const ProfileMyCourses = lazy(() => import("./pages/profile/ProfileMyCourses"));
const ProfilePayment = lazy(() => import("./pages/profile/ProfilePayment"));
const CourseDetail = lazy(() => import("./pages/coursesDetail/CourseDetail"));
const CourseOrder = lazy(() => import("./pages/coursesOrder/CourseOrder"));
const BlogDetail = lazy(() => import("./pages/blogDetail/BlogDetail"));
const BlogPage = lazy(() => import("./pages/blog/BlogPage"));
import Loading from "./component/loading/Loading";
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={PATHS.ABOUT} element={<AboutPage />} />
          <Route path={PATHS.COURSE} element={<CoursesPage />} />
          <Route path={PATHS.COURSE_DETAIL} element={<CourseDetail />} />
          <Route path={PATHS.COURSE_ORDER} element={<CourseOrder />} />
          <Route path={PATHS.BLOG_DETAIL} element={<BlogDetail />} />
          <Route path={PATHS.BLOG} element={<BlogPage />} />
          <Route path={PATHS.CONTACT} element={<ContactPage />} />
          <Route path={PATHS.CONTACT} element={<ProfilePage />} />
          <Route path={PATHS.PROFILE.INDEX} element={<ProfilePage />}>
            <Route index element={<ProfileInfo />} />
            <Route path={PATHS.PROFILE.COURSE} element={<ProfileMyCourses />} />
            <Route path={PATHS.PROFILE.PAYMENT} element={<ProfilePayment />} />
          </Route>
          <Route path={PATHS.PAGE404} element={<Page404 />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
