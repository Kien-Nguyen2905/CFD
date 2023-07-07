import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AuthenProvider } from "../component/authenContext/authenContext";
import ModalLogin from "../component/authenModal/ModalLogin";
import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";
import Navbar from "../component/navbar/Navbar";
const Layout = () => {
  let { pathname } = useLocation();
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [pathname]);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/dest/main.js";
    document.body.appendChild(script);
  }, [pathname]);
  return (
    <AuthenProvider>
      <Header />
      <Navbar />
      <Outlet />
      <ModalLogin />
      <Footer />
    </AuthenProvider>
  );
};

export default Layout;
