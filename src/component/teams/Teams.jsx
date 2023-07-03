import React from "react";

const Teams = ({ data }) => {
  const job = data.tags.includes("Teacher");
  return (
    <div className="itemteacher">
      <div className="itemteacher__avatar">
        <img src={data.image} alt="CFD Circle" />
      </div>
      <div className="itemteacher__info">
        <div className="itemteacher__info-name">
          <p className="title --t3">{data.name}</p>
          <span className={`label badge ${job ? "--teacher" : "--mentor"}`}>
            {job ? "Teacher" : "Mentor"}
          </span>
        </div>
        <h5 className="itemteacher__info-pos label">{data.jobTitle}</h5>
        <p className="itemteacher__info-des">{data.description}</p>
      </div>
    </div>
  );
};

export default Teams;
