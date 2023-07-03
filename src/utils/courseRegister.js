export const courseRegister = (courselist = [], myslug) =>
  courselist.some((item) => item?.course?.slug === myslug);
