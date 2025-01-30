import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Hero from "../Navbar/Hero";

const MainHome = () => {
  return (
    <div>
      {/* Home always show navbar */}
      <Navbar></Navbar>
      {/* Banner section */}
      {/* <Hero></Hero> */}
      {/* outlet */}
      <Outlet></Outlet>
      {/* Footer section */}
    </div>
  );
};

export default MainHome;
