import instance from "./interceptor";
export const rateService = {
  getRate(slug) {
    return instance.get(`rates${slug ? `/${slug}` : ""}`);
  },
};
