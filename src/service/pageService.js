import instance from "./interceptor";
export const pageService = {
  getPage(query = "") {
    return instance.get(`/pages${query ? `/${query}` : ""}`);
  },
};
