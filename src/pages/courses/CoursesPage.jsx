import React from "react";
import CourseList from "./CourseList";

const CoursesPage = () => {
  return (
    <main className="mainwrapper courses --ptop">
      <div className="container">
        <div className="textbox">
          <div className="container">
            <h2 className="title --t2">Tất cả khoá học</h2>
          </div>
        </div>
        <CourseList />
      </div>
    </main>
  );
};

export default CoursesPage;
