import React from "react";

const AbouteTeachers = ({ teachers }) => {
  return (
    <section className="aboutteachers --scpadding">
      <div className="container">
        <h2 className="aboutteachers__title title --t2">
          đội ngũ <span className="color--primary">giảng viên và Mentor</span>
        </h2>
        <div className="aboutteachers__list">
          {teachers?.length > 0 &&
            teachers?.map((item, index) => (
              <div className="itemteacher" key={index}>
                <div className="itemteacher__avatar">
                  <img src={item?.image} alt="CFD Circle" />
                </div>
                <div className="itemteacher__info">
                  <div className="itemteacher__info-name">
                    <p className="title --t3">{item?.name}</p>
                    {item?.tags?.includes("Teacher") ? (
                      <span className="label badge --teacher">Teacher</span>
                    ) : (
                      <span className="label badge --mentor">Mentor</span>
                    )}
                  </div>
                  <h5 className="itemteacher__info-pos label">Founder</h5>
                  <p className="itemteacher__info-des">{item?.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AbouteTeachers;
