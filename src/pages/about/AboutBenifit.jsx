import React from "react";

const AboutBenifit = ({ benifit }) => {
  return (
    <section className="aboutbenifit --scpadding">
      <div className="container">
        <h2 className="aboutbenifit__title title --t2">{benifit?.mainTitle}</h2>
        <div className="aboutbenifit__list">
          {benifit?.content.length > 0 &&
            benifit?.content?.map((item, index) => (
              <div className="item" key={index}>
                <div className="number title --t1">{index + 1}</div>
                <div className="content">
                  <h3 className="title --t3">{item?.title}</h3>
                  <p className="text">{item?.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AboutBenifit;
