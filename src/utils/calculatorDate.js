export const calculatorDate = (course, duration) => {
  switch (course) {
    case "Frontend Master":
      return duration + " buổi";
    case "Frontend Newbie":
      return duration / 3.75 + " buổi";
    case "Web Responsive":
      return duration / 3 + " buổi";
    case "ReactJS Master":
      return duration / 2.5 + " buổi";
    default:
      break;
  }
};
