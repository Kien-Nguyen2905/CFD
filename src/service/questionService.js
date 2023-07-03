import instance from "./interceptor";
export const questionService = {
  getQuestion() {
    return instance.get(`/questions`);
  },
};
