import React from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../constants/pathname";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar"
        // style={{
        //   opacity: toggle ? "1" : "0",
        //   visibility: toggle ? "visible" : "hidden",
        // }}
      >
        <ul className="navbar__main">
          <li className="navbar__link">
            <NavLink to={PATHS.HOME} className="navbar__item">
              Trang chủ
            </NavLink>
          </li>
          <li className="navbar__link">
            <NavLink to={PATHS.ABOUT} className="navbar__item">
              Về CFD Circle
            </NavLink>
          </li>
          <li className="navbar__link">
            <NavLink to={PATHS.COURSE} className="navbar__item">
              Khóa học
            </NavLink>
          </li>
          <li className="navbar__link">
            <NavLink
              to={PATHS.BLOG + `?tab=tin-tuc-1684855653918`}
              className="navbar__item"
            >
              Bài viết
            </NavLink>
          </li>
          <li className="navbar__link">
            <NavLink to={PATHS.CONTACT} className="navbar__item">
              Liên hệ
            </NavLink>
          </li>
        </ul>
        <div className="navbar__overlay" />
      </nav>
      <div className="overlay" />
    </>
  );
};

export default Navbar;
