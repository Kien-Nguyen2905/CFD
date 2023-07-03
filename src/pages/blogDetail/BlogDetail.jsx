import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
import { blogService } from "../../service/blogService";
import BlogList from "../blog/BlogList";

const BlogDetail = () => {
  const { slug } = useParams();
  const { data } = useQuery(() => blogService.getBlogDetail(slug), [slug]);
  const { data: listBog } = useQuery(() => blogService.getBlog());
  const similar = listBog?.blogs?.filter(
    (item) => item.category.name === data?.category?.name && item.id !== data.id
  );
  return (
    <main className="mainwrapper blogdetail --ptop">
      <div className="container">
        <div className="wrapper">
          <div className="blogdetail__title">
            <h1 className="title --t2">{data?.name}</h1>
            <ul className="meta">
              <li className="meta__item">{`Đăng bởi ${data?.author}`}</li>
              <li className="meta__item">Dev</li>
              <li className="meta__item">15/07/2021</li>
            </ul>
          </div>
          <div className="blogdetail__content">
            <img
              src={
                data?.image !== ""
                  ? data?.imag
                  : "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80"
              }
              alt="Post thumnail"
            />
            <div
              className="blogdetail__content-entry"
              dangerouslySetInnerHTML={{ __html: data?.description }}
            />
            <div className="blogdetail__line" />
            <div className="blogdetail__content-social btngroup">
              <a href="#" className="btn btn-fb">
                <img src="img/icon-fb-share.svg" alt="" />
                <span>Share</span>
              </a>
              <a href="#" className="btn btn-linkedin">
                <img src="img/icon-in-share.svg" alt="" />
                <span>Share</span>
              </a>
            </div>
          </div>
        </div>
        <div className="blogdetail__related">
          {similar?.length > 0 && (
            <h2 className="blogdetail__related-title title --t2">
              Bài viết liên quan
            </h2>
          )}
          <BlogList list={similar} />
        </div>
      </div>
    </main>
  );
};

export default BlogDetail;
