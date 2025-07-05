import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="w-11/12 mx-auto space-y-4">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
