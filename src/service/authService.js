import instance from "./interceptor";
export const authService = {
  authLogin(payload = {}) {
    return instance.post(`/customer/login`, payload);
  },
  authRegister(payload = {}) {
    return instance.post(`/customer/register`, payload);
  },
};
