import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/pathname";
import { dateVn } from "../../utils/dateVn";

const BlogListItem = ({ data }) => {
  return (
    <div className="blog__list-item">
      <div className="img">
        <Link to={PATHS.BLOG + `/${data?.slug}`}>
          <img
            src={
              data?.image !== ""
                ? data?.image
                : "https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
            }
            alt="Khóa học CFD"
            className="course__thumbnail"
          />
        </Link>
      </div>
      <div className="content">
        <p className="label">{data?.category?.name}</p>
        <h2 className="title --t3">
          <a href="blog-detail.html">{data?.name}</a>
        </h2>
        <div className="content__info">
          <div className="user">
            <div className="user__img">
              <img src="/img/avatar_nghia.jpg" alt="Avatar teacher" />
            </div>
            <p className="user__name">{data?.author}</p>
          </div>
          <div className="date">{dateVn(data?.category?.createdAt)}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogListItem;
