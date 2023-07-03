import instance from "./interceptor";
export const profileService = {
  getProfile() {
    return instance.get(`/customer/profiles`);
  },
  putProfile(payload = {}) {
    return instance.put(`/customer/profiles`, payload, {
      headers: {
        ["Content-Type"]: "multipart/form-data",
      },
    });
  },
};
