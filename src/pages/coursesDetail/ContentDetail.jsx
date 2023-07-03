import React from "react";
import IntroduceDetail from "./IntroduceDetail";
import LessionDetail from "./LessionDetail";
import RequestDetail from "./RequestDetail";
import ScheduleDetail from "./ScheduleDetail";
import TeacherDetail from "./TeacherDetail";
const ContentDetail = ({ courseContent }) => {
  if (!courseContent) return;
  return (
    <section className="contentdetail">
      <div className="content">
        <div className="container">
          <IntroduceDetail introducetion={courseContent.description} />
          <ScheduleDetail schedule={courseContent.schedule} />
          <LessionDetail lession={courseContent} />
          <RequestDetail request={courseContent.required} />
          <TeacherDetail teacher={courseContent.teams} />
        </div>
      </div>
    </section>
  );
};

export default ContentDetail;
