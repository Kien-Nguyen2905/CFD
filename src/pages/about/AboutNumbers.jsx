import React from "react";

const AboutNumbers = ({ numbers }) => {
  if (!numbers) return;
  return (
    <section className="aboutnumbers">
      <div className="container">
        <div className="aboutnumbers__list">
          <div className="aboutnumbers__list-item">
            <h3 className="title --t2">
              {new Date().getFullYear() - parseInt(numbers.establish)}
            </h3>
            <p className="text title --t3">năm thành lập</p>
          </div>
          <div className="aboutnumbers__list-item">
            <h3 className="title --t2">{numbers.numberCourse}</h3>
            <p className="text title --t3">khoá học</p>
          </div>
          <div className="aboutnumbers__list-item">
            <h3 className="title --t2">{numbers.numberClass}</h3>
            <p className="text title --t3">lớp học</p>
          </div>
          <div className="aboutnumbers__list-item">
            <h3 className="title --t2">{`${numbers.student}+`}</h3>
            <p className="text title --t3">học viên</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNumbers;
