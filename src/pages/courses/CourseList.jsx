import React from "react";
import { useEffect } from "react";
import CourseItem from "./CourseItem";
import { courseService } from "../../service/courseService";
import { Skeleton, Empty, message } from "antd";
import { useQuery } from "../../hooks/useQuery";
const CourseList = () => {
  const { data, loading, error } = useQuery(() => courseService.getCourses());
  const courses = data?.courses || [];
  useEffect(() => {
    if (error) {
      message.error("Error");
    }
  }, [error]);
  return (
    <div className="courses__list">
      {!loading && courses.length == 0 && (
        <Empty description="No data" style={{ margin: "0 auto" }} />
      )}
      {loading &&
        Array(6)
          .fill("")
          .map((_, index) => (
            <div className="courses__list-item" key={index}>
              <Skeleton style={{ width: "527px", height: "509.15px" }} active />
            </div>
          ))}
      {!loading &&
        courses.length > 0 &&
        courses.map((course) => <CourseItem key={course.id} data={course} />)}
    </div>
  );
};

export default CourseList;
