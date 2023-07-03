import React from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../constants/pathname";
import { useQueryParam } from "../../hooks/useQueryParam";
const BlogMenu = ({ menu }) => {
  const tab = useQueryParam("tab");
  return (
    <>
      <div className="blog__menu">
        {menu?.length > 0 &&
          menu?.map((item, index) => (
            <NavLink
              to={PATHS.BLOG + `?tab=${item?.slug}`}
              className="blog__menu-item"
              key={index}
              end
            >
              {item?.name}
            </NavLink>
          ))}
      </div>
    </>
  );
};

export default BlogMenu;
