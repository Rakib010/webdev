import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import Navbar from "../pages/shared/nav/Navbar";

const Main = () => {
  const location = useLocation();
  const isLogin =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div>
      {isLogin || <Navbar />}
      <div className="min-h-[calc(100vh-200px)]">
        <Outlet />
      </div>
      {isLogin || <Footer />}
    </div>
  );
};

export default Main;
