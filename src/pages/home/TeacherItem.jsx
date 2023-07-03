import React from "react";
const TeacherItem = ({ data }) => {
  return (
    <div className="teacher__list-item">
      <div className="img">
        <img src={data.image} alt="Giảng viên CFD" />
      </div>
      <div className="info">
        <p className="label">{data.jobTitle}</p>
        <h3 className="title --t3">{data.name}</h3>
      </div>
    </div>
  );
};

export default TeacherItem;
