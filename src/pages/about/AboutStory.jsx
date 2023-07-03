import React from "react";

const AboutStory = ({ data }) => {
  const mission = data?.data?.stories?.title?.substring(0, 10);
  const newTitle = data?.data?.stories?.title?.replace("Câu Chuyện", "");
  return (
    <section className="aboutstory">
      <div className="container">
        <div className="aboutstory__img">
          <img src={data?.image} alt="" />
        </div>
        <div className="aboutstory__content">
          <h1 className="title --t2">
            <span className="color--primary">{mission}</span> {newTitle}
          </h1>
          <p className="text">{data?.data?.stories?.description}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
