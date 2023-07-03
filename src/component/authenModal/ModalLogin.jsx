import React, { useState } from "react";
import { useAuThen } from "../authenContext/authenContext";
import ModalOverPlay from "../modal/ModalOverPlay";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const ModalLogin = () => {
  const { open, isCloseModal, render, setRender } = useAuThen();
  return (
    <div className={`modal modallogin ${open ? "open" : ""}`}>
      <div className="modal__wrapper">
        <div className="modal__wrapper-close" onClick={isCloseModal}>
          <img src="/img/close_icon.svg" alt="CFD Register" />
        </div>
        <LoginForm render={render} setRender={setRender} />
        <RegisterForm render={render} setRender={setRender} />
      </div>
      <ModalOverPlay onClick={isCloseModal} />
    </div>
  );
};

export default ModalLogin;
