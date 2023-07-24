import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
const ProfileSidebar = ({ profile }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__info">
        <div className="useravatar">
          <div className="avatar">
            <div className="img">
              <Avatar size={180} icon={<UserOutlined />} />
            </div>
          </div>
          <h3 className="title --t3">{profile?.firstName}</h3>
        </div>
      </div>
      <div className="sidebar__content">
        <h4>Giới thiệu</h4>
        <p className="description">{profile?.introduce}</p>
        <ul>
          <li>
            <img src="/img/icon-mail-outline.svg" alt="icon" />
            <span>{profile?.email}</span>
          </li>
          <li>
            <img src="/img/icon-phone-outline.svg" alt="icon" />
            <span>{profile?.phone}</span>
          </li>
          <li>
            <img src="/img/icon-link.svg" alt="icon" />
            <a href="#" target="_blank">
              {profile?.website}
            </a>
          </li>
        </ul>
        <div className="social">
          <a href="#">
            <img src="/img/icon-facebook-dark.svg" alt="" />
          </a>
          <a href="#">
            <img src="/img/icon-linkedin-dark.svg" alt="" />
          </a>
          <a href="#">
            <img src="/img/icon-youtube-dark.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
