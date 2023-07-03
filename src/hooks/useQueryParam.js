import { useLocation } from "react-router-dom";
export const useQueryParam = (get = "") => {
  const { search } = useLocation();
  return new URLSearchParams(search).get(get);
};
