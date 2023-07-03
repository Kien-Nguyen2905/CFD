import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PATHS } from "../../constants/pathname";
import { rulesLogin } from "../../constants/rulesLogin";
import { validate } from "../../utils/validate";
import { useAuThen } from "../authenContext/authenContext";
import Button from "../button/Button";
import Input from "../input/Input";
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
const LoginForm = ({ render, setRender }) => {
  const { onLogin, errors, setErrors, form, setForm } = useAuThen();
  const inputRef = useRef();
  const isRender = render === "login";
  const register = (fieldName) => {
    return {
      value: form[fieldName] || "",
      error: errors[fieldName],
      onChange: (e) => setForm({ ...form, [fieldName]: e.target.value }),
    };
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorList = validate(form, rulesLogin);
    setErrors(errorList);
    if (Object.keys(errorList).length == 0) {
      onLogin?.(form);
    }
  };
  useEffect(() => {
    inputRef.current.focus();
  }, [isRender]);
  return (
    <div
      className={`modal__wrapper-content mdlogin ${isRender ? "active" : ""}`}
    >
      <h3 className="title --t3">Đăng nhập</h3>
      <FormStyled onSubmit={handleSubmit} className="form">
        <Input
          ref={inputRef}
          label={"Email"}
          placeholder="Địa chỉ email"
          required
          {...register("email")}
        />
        <Input
          label={"Password"}
          type="password"
          placeholder="Mật khẩu"
          required
          {...register("password")}
        />
        <div className="form__bottom">
          <p>
            Bạn chưa có tài khoản?
            <span
              className="color--primary btnmodal"
              onClick={() => {
                setRender("register"), setForm({});
              }}
            >
              Đăng ký
            </span>
          </p>
        </div>
        <Button type="submit">Đăng nhập</Button>
      </FormStyled>
    </div>
  );
};

export default LoginForm;
