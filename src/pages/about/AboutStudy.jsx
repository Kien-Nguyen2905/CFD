import React from "react";
import Button from "../../component/button/Button";

const AboutStudy = ({ study }) => {
  return (
    <section className="aboutstudy --scpadding">
      <div className="container">
        <h2 className="aboutstudy__title title --t2">
          <span className="color--primary">Hình thức học</span> đa dạng
        </h2>
        {study?.length > 0 &&
          study?.map((item, index) => (
            <div className="aboutstudy__item" key={index}>
              <div className="aboutstudy__item-img">
                <img src={item?.image} alt="" />
              </div>
              <div className="aboutstudy__item-content">
                <h4 className="title --t3">{item?.title}</h4>
                <div className="text">{item?.description}</div>
                <Button>Khám phá</Button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default AboutStudy;
