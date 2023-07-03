export const lessionIndex = (course = "") => {
  let index = {};
  switch (course) {
    case "Frontend Newbie":
      index = {
        start: 0,
        end: 9,
      };
      break;
    case "Web Responsive":
      index = {
        start: 9,
        end: 21,
      };
      break;
    case "ReactJS Master":
      return (index = {
        start: 21,
        end: 39,
      });
      break;
    default:
      break;
  }
  return index;
};
