import React from "react";
import { useEffect } from "react";
import { useAuThen } from "../../component/authenContext/authenContext";
import CourseItem from "../courses/CourseItem";
const ProfileMyCourses = () => {
  const { course } = useAuThen();
  return (
    <div className="tab__content-item" style={{ display: "block" }}>
      <div className="courses__list">
        {course?.length > 0 &&
          course?.map((item, index) => (
            <CourseItem data={item?.course} key={index}></CourseItem>
          ))}
      </div>
    </div>
  );
};

export default ProfileMyCourses;
