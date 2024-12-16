import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto space-y-4">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default App;
