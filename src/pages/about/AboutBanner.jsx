import React from "react";

const AboutBanner = ({ title }) => {
  const mission = title?.substring(0, 7);
  const newTitle = title?.replace("Sứ mệnh", "");
  return (
    <section className="banner abouthero">
      <div className="banner__content">
        <div className="container">
          <h2 className="title --white">
            <span>{mission}</span>
            {newTitle}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
