import React from "react";
import { Link } from "react-router-dom";
import { useAuThen } from "../../component/authenContext/authenContext";
import Button from "../../component/button/Button";
import { PATHS } from "../../constants/pathname";
import { dateVn } from "../../utils/dateVn";
const CourseComingItem = ({ data }) => {
  if (!data) return;
  const { isOpenModal } = useAuThen();
  const teacher = data?.teams.find((item) => item.tags.includes("Teacher"));
  return (
    <div className="coursecoming__item">
      <div className="coursecoming__item-img">
        <Link to={PATHS.COURSE + `/${data.slug}`}>
          <img src={data.image} alt="Khóa học sắp ra mắt CFD" />
        </Link>
      </div>
      <div className="coursecoming__item-content">
        <p className="category label">Front-end</p>
        <h2 className="title --t2">
          <a href="course-detail.html">{data.title}</a>
        </h2>
        <div className="user">
          <div className="user__img">
            <img src={teacher.image} alt="Avatar teacher" />
          </div>
          <p className="user__name">{teacher.name}</p>
        </div>
        <div className="info">
          <div className="labeltext">
            <span className="label --blue">Ngày khai giảng</span>
            <p className="title --t2">{dateVn(data.startDate)}</p>
          </div>
          <div className="labeltext">
            <span className="label --blue">Hình thức học</span>
            {data.tags && <p className="title --t2">{data.tags.join(" | ")}</p>}
          </div>
        </div>
        <div className="btnwrap">
          {!!!localStorage.getItem("accessToken") ? (
            <Button onClick={isOpenModal}>Đăng Ký Học</Button>
          ) : (
            <Button to={PATHS.REGISTER + `/${data.slug}`}>Đăng Ký Học</Button>
          )}
          <Button to={PATHS.COURSE + `/${data.slug}`} Buttontype="second">
            Xem chi tiết
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseComingItem;
