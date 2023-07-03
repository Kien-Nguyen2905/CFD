const COURSE_PATH = "/course";
const PROFILE_PATH = "/profile";
const REGISTER_PATH = "/register";
export const PATHS = {
  HOME: "/",
  ABOUT: "/about",
  BLOG_DETAIL: "/blogs/:slug",
  BLOG: "/blogs",
  CONTACT: "/contact",
  COURSE: COURSE_PATH,
  COURSE_DETAIL: COURSE_PATH + "/:slug",
  REGISTER: REGISTER_PATH,
  COURSE_ORDER: REGISTER_PATH + "/:slug",
  PROFILE: {
    INDEX: PROFILE_PATH,
    COURSE: PROFILE_PATH + "/my_courses",
    PAYMENT: PROFILE_PATH + "/my_payment",
  },

  PAGE404: "*",
};
