import { message } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../constants/pathname";
import { authService } from "../../service/authService";
import { courseService } from "../../service/courseService";
import { oderService } from "../../service/orderService";
import { profileService } from "../../service/profileService";
const AuthenContext = createContext();
export const AuthenProvider = (props) => {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({});
  const [render, setRender] = useState("login");
  const [profile, setProfile] = useState();
  const [course, setCourse] = useState([]);
  const [payment, setPayment] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      getProfile();
      getCourseProfile();
      getPayment();
    }
  }, []);
  const isOpenModal = () => {
    if (!!!localStorage.getItem("accessToken")) {
      setOpen(!open);
      setForm({});
      setErrors({});
    }
  };
  const isCloseModal = () => {
    setOpen(!open);
    setRender("login");
    setErrors({});
  };
  const onRegister = async (dataRegister) => {
    try {
      const res = await authService.authRegister(dataRegister);
      onLogin({
        email: dataRegister?.email,
        password: dataRegister?.password,
      });
    } catch (error) {
      console.log(error);
      if (error.code === "ERR_BAD_REQUEST") {
        message.error("Email is already registered ");
      } else {
        message.error("Failed");
      }
    }
  };
  const onLogin = async (dataLogin) => {
    try {
      const res = await authService.authLogin(dataLogin);
      localStorage.setItem("accessToken", res.token);
      localStorage.setItem("refreshToken", res.refreshToken);
      getProfile();
      getCourseProfile();
      getPayment();
      isCloseModal();
      setForm({});
      message.success("Successfully", [0.5]);
      navigate(PATHS.HOME);
    } catch (error) {
      console.log(error);
      message.error("Failed");
    }
  };
  const getProfile = async () => {
    const res = await profileService.getProfile();
    setProfile(res);
  };
  const getPayment = async () => {
    const res = await oderService.getMyHistory();
    setPayment(res?.orders);
  };
  const getCourseProfile = async () => {
    const res = await courseService.getMyCourse();
    setCourse(res?.orders);
  };
  const onLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setProfile({});
    setCourse([]);
    setPayment([]);
  };
  const value = {
    open,
    errors,
    render,
    profile,
    form,
    course,
    payment,
    setCourse,
    setPayment,
    setOpen,
    setErrors,
    setRender,
    setProfile,
    setForm,
    onLogin,
    onLogout,
    isOpenModal,
    isCloseModal,
    onRegister,
    getCourseProfile,
    getPayment,
  };
  return (
    <AuthenContext.Provider value={value}>
      {props.children}
    </AuthenContext.Provider>
  );
};
export const useAuThen = () => useContext(AuthenContext);
