import instance from "./interceptor";
export const teamService = {
  getTeam() {
    return instance.get(`/teams`);
  },
};
