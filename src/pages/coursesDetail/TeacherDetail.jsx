import React from "react";
import Teams from "../../component/teams/Teams";

const TeacherDetail = ({ teacher }) => {
  return (
    <div className="contentrow ctteacher">
      <h3 className="contentrow__title title --t3">Giảng viên</h3>
      <div className="ctteacher__content">
        {teacher?.length > 0 &&
          teacher?.map((item, index) => <Teams key={index} data={item} />)}
      </div>
    </div>
  );
};

export default TeacherDetail;
