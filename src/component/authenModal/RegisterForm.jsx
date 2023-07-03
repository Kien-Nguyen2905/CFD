import React from "react";
import { rulesRegister } from "../../constants/rulesRegister";
import { validate } from "../../utils/validate";
import { useAuThen } from "../authenContext/authenContext";
import { useEffect } from "react";
import { useRef } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
const RegisterForm = ({ render }) => {
  const { onRegister, setRender, errors, setErrors, form, setForm } =
    useAuThen();
  const inputRef = useRef();
  const isRender = render === "register";
  const register = (fieldName) => {
    return {
      value: form[fieldName] || "",
      error: errors[fieldName],
      onChange: (e) => setForm({ ...form, [fieldName]: e.target.value }),
    };
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const errorList = validate(form, rulesRegister);
    setErrors(errorList);
    if (Object.keys(errorList).length == 0) {
      onRegister?.({
        firstName: form?.name || "",
        lastName: "",
        email: form?.email || "",
        password: form?.password || "",
      });
    }
  };
  useEffect(() => {
    inputRef.current.focus();
  }, [isRender]);
  return (
    <div
      className={`modal__wrapper-content mdregister ${
        isRender ? "active" : ""
      }`}
    >
      <h3 className="title --t3">Đăng ký tài khoản</h3>
      <form onSubmit={handleSubmit} className="form">
        <Input
          ref={inputRef}
          label="Họ và tên"
          placeholder="Họ và tên"
          required
          {...register("name")}
        />
        <Input
          label="Email"
          placeholder="Địa chỉ email"
          required
          {...register("email")}
        />
        <Input
          label="Mật khẩu"
          placeholder="Mật khẩu"
          type="password"
          required
          {...register("password")}
        />
        <p className="form__argee">
          Với việc đăng ký, bạn đã đồng ý
          <a className="color--primary" href="#">
            Chính Sách
          </a>{" "}
          &amp;
          <a className="color--primary" href="#">
            Điều Khoản
          </a>{" "}
          của CFD
        </p>
        <span
          className="color--primary btnmodal"
          onClick={() => {
            setRender("login");
            setForm({});
            setErrors({});
          }}
        >
          Bạn đã có tài khoản ?
        </span>{" "}
        <Button className="form__btn-register" type="submit">
          Đăng ký
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
