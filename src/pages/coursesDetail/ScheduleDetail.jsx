import React from "react";
import { dateVn } from "../../utils/dateVn";

const ScheduleDetail = ({ schedule }) => {
  return (
    <div className="contentrow ctschedule">
      <h3 className="contentrow__title title --t3">Lịch học</h3>
      <div className="ctschedule__box">
        <div className="info">
          <div className="labeltext">
            <span className="label --blue">Khai giảng</span>
            <p className="title --t3">{dateVn(schedule.startDate)}</p>
          </div>
          <div className="labeltext">
            <span className="label --blue">Ngày học</span>
            <p className="title --t3">{schedule.days}</p>
          </div>
          <div className="labeltext">
            <span className="label --blue">Thời gian</span>
            <p className="title --t3">{schedule.time}</p>
          </div>
          <div className="labeltext">
            <span className="label --blue">Địa điểm</span>
            <p className="title --t3">{schedule.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDetail;
