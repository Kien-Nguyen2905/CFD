import instance from "./interceptor";
export const oderService = {
  registerCourse(payload = {}) {
    return instance.post(`/orders`, payload);
  },
  getMyHistory() {
    return instance.get(`/orders/me`);
  },
};
