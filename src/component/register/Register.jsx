import React from "react";
import { PATHS } from "../../constants/pathname";
import Button from "../button/Button";
const Register = () => {
  return (
    <section className="callregister">
      <div className="container">
        <div className="callregister__content">
          <h3 className="title --t2">
            <span className="color--primary">trở thành một phần</span> của CFD
            Circle
          </h3>
          <p>
            Chúng tôi rất vui khi bạn quyết định trở thành một phần của CFD
            Circle để cùng nhau học hỏi, lan toả và chia sẻ những kinh nghiệm
            quý giá cho cộng đồng.
          </p>
          <Button to={PATHS.COURSE}>Tham gia Khoá học</Button>
          <Button to={PATHS.CONTACT} Buttontype="second">
            Liên hệ tư vấn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Register;
