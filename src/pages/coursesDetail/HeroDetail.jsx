import React, { useEffect } from "react";
import { useAuThen } from "../../component/authenContext/authenContext";
import Button from "../../component/button/Button";
import { PATHS } from "../../constants/pathname";
import { calculatorDate } from "../../utils/calculatorDate";
import { courseRegister } from "../../utils/courseRegister";
import { convertPrice } from "../../utils/covertPrice";
const HeroDetail = ({ course }) => {
  const date = new Date(course?.startDate).toLocaleDateString("vi-VN");
  const teacher = course?.teams?.find((item) => item.tags.includes("Teacher"));
  const { getCourseProfile, course: mycourse, isOpenModal } = useAuThen();
  const check = courseRegister(mycourse, course?.slug);
  useEffect(() => {
    getCourseProfile();
  }, []);
  return (
    <section className="hero herodetail">
      <div className="hero__content">
        <div className="container">
          <h3 className="category label --white">frontend</h3>
          <h2 className="title --white">{course?.title}</h2>
          <div className="infor">
            <div className="infor__item">
              <label className="label --white">Khai giảng</label>
              <p className="title --t3 --white">{date}</p>
            </div>
            <div className="infor__item">
              <label className="label --white">Thời lượng</label>
              <p className="title --t3 --white">
                {calculatorDate(course?.name, course?.duration)}
              </p>
            </div>
            <div className="infor__item">
              <label className="label --white">Hình thức</label>
              <p className="title --t3 --white">{course?.tags?.join(" | ")}</p>
            </div>
          </div>
          {!!!localStorage.getItem("accessToken") ? (
            <Button onClick={isOpenModal}>Đăng ký</Button>
          ) : (
            <Button to={PATHS.REGISTER + `/${course?.slug}`}>
              {!check ? "Đăng ký" : "Đã đăng ký"}
            </Button>
          )}
        </div>
      </div>
      <div className="hero__bottom">
        <div className="container-fluid">
          <a href="" className="user">
            <div className="user__img">
              <img src={teacher?.image} alt="Avatar teacher" />
            </div>
            <p className="user__name --white">{teacher?.name}</p>
          </a>
          <div className="pricebox">
            <p className="title --t3 --white">
              {convertPrice(course?.price, " VND")}
            </p>
          </div>
          <a
            href="https://www.facebook.com/sharer/sharer.php?sdk=joey&u=https://cfdcircle.vn/khoa-hoc/khoa-hoc-lap-trinh-frontend-master-30&display=popup&ref=plugin&src=share_button"
            className="sharebox s--white"
          >
            Chia sẻ
            <i>
              <img
                src="https://cfdcircle.vn/img/iconshare.svg"
                alt="CFD Circle"
              />
            </i>
          </a>
        </div>
      </div>
      <div className="hero__background">
        <img
          className="hero__background-img"
          src={course?.image}
          alt="CFD Circle"
        />
      </div>
    </section>
  );
};

export default HeroDetail;
