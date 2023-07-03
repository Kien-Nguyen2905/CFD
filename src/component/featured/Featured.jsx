import React from "react";
import FeaturedContent from "./FeaturedContent";

const Featured = ({ data }) => {
  return (
    <section className="featured">
      <img src="img/icon-cfd.svg" alt="" className="featured__c" />
      <div className="container">
        <div className="featured__title">
          <h2 className="title --t2 --white">
            Những điều <br />
            <span>Đặc biệt</span> Tại CFD
          </h2>
        </div>
        <FeaturedContent amount={data?.data.special} />
      </div>
    </section>
  );
};

export default Featured;
