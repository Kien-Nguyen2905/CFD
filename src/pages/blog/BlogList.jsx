import React from "react";
import BlogListItem from "./BlogListItem";

const BlogList = ({ list }) => {
  return (
    <div className="blog__list">
      {list?.length > 0 &&
        list?.map((item, index) => <BlogListItem key={index} data={item} />)}
    </div>
  );
};

export default BlogList;
