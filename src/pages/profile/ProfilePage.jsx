import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuThen } from "../../component/authenContext/authenContext";
import { PATHS } from "../../constants/pathname";
import ProfileSidebar from "./ProfileSidebar";
const ProfilePage = () => {
  const { profile } = useAuThen();
  return (
    <main className="mainwrapper profilepage">
      <div className="container">
        <div className="wrapper">
          <ProfileSidebar profile={profile} />
          <div className="tabwrap">
            <div className="tab">
              <div className="tab__title">
                <NavLink end to={PATHS.PROFILE.INDEX}>
                  Thông tin cá nhân
                </NavLink>
                <NavLink to={PATHS.PROFILE.COURSE}>Khóa học của tôi</NavLink>
                <NavLink to={PATHS.PROFILE.PAYMENT}>Lịch sử thanh toán</NavLink>
              </div>
              <div className="tab__content">
                <Outlet></Outlet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
