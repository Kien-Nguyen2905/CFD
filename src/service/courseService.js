import instance from "./interceptor";
export const courseService = {
  getCourses(query = "") {
    return instance.get(`/courses${query}`);
  },
  getCourseDetail(slug) {
    return instance.get(`courses${slug ? `/${slug}` : ""}`);
  },
  getMyCourse() {
    return instance.get(`orders/courses/me`);
  },
};
