import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
import { useQueryParam } from "../../hooks/useQueryParam";
import { blogService } from "../../service/blogService";
import BlogList from "./BlogList";
import BlogMenu from "./BlogMenu";
const BlogPage = () => {
  const { data: listMenu } = useQuery(() => blogService.getCategories());
  const { data: listBlog } = useQuery(() => blogService.getBlog());
  const tab = useQueryParam("tab");
  const similar = listBlog?.blogs?.filter((item) => item.category.slug === tab);
  return (
    <main className="mainwrapper blog --ptop">
      <div className="container">
        <div className="textbox">
          <div className="container">
            <h2 className="title --t2">Blog</h2>
          </div>
        </div>
        <BlogMenu menu={listMenu?.blogs} />
        <BlogList list={similar} />
      </div>
    </main>
  );
};

export default BlogPage;
