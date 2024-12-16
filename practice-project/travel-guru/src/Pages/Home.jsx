import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  const bgChange =
    location.pathname === "/" ? "bg-image" : "";

  return (
    <div className={`${bgChange}`}>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
