import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/pathname";
import { convertPrice } from "../../utils/covertPrice";
const CourseItem = ({ data }) => {
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
        <p className="label">Front-End</p>
        <h3 className="title --t3">
          <a href="course-detail.html">{data.title}</a>
        </h3>
        <div className="content__info">
          <div className="user">
            <div className="user__img">
              <img src={teacher.image} alt="Avatar teacher" />
            </div>
            <p className="user__name">{teacher.name}</p>
          </div>
          <div className="price">
            <strong>{convertPrice(data.price)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
