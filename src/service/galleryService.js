import instance from "./interceptor";
export const galleryService = {
  getGallery(limit = "") {
    return instance.get(`/galleries${limit ? `?limit=${limit}` : ""}`);
  },
};
