import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/pathname";
import { convertPrice } from "../../utils/covertPrice";

const CoursePopularItem = ({ data }) => {
  const teacher = data.teams?.find((item) => item.tags.includes("Teacher"));
  return (
    <div className="courses__list-item">
      <div className="img">
        <Link to={PATHS.COURSE + `/${data.slug}`}>
          <img
            src={data.image}
            alt="Khóa học CFD"
            className="course__thumbnail"
          />
          {data?.tags && (
            <span className="course__img-badge badge">
              {data.tags?.join(" | ")}
            </span>
          )}
        </Link>
      </div>
      <div className="content">
        <p className="label">Frontend</p>
        <h3 className="title --t3">
          <a href="https://cfdcircle.vn/khoa-hoc/khoa-hoc-lap-trinh-frontend-newbie-28">
            {data.name}
          </a>
        </h3>
        <div className="content__info">
          <div className="user">
            <div className="user__img">
              <img src={teacher.image} alt="Avatar teacher" />
            </div>
            <p className="user__name">{teacher.name}</p>
          </div>
          <div className="price">
            <strong className="price__discount">
              {convertPrice(data.price)}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePopularItem;
