import React from "react";
import ReactDOM from "react-dom";
import ModalOverPlay from "./ModalOverPlay";
const ModalPopup = ({ handleShow, open }) => {
  return ReactDOM.createPortal(
    <div className={`modal ${open ? "open" : ""}`}>
      <div className="modal__wrapper">
        <div className="modal__wrapper-content mdnotice active">
          <img src="img/check.svg" alt="" />
          <h3 className="title --t3">Gửi thông tin thành công!</h3>
          <p>
            Chúng tôi sẽ phản hồi lại cho bạn trong thời gian sớm nhất có thể
          </p>
          <div className="btn btn--primary" onClick={handleShow}>
            Đồng Ý
          </div>
        </div>
      </div>
      <ModalOverPlay onClick={handleShow} />
    </div>,
    document.body
  );
};

export default ModalPopup;
