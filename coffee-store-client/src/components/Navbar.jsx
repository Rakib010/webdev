import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-5">
      <NavLink className="btn ml-4" to="/">
        Home
      </NavLink>
      {/* <NavLink className="btn ml-4" to="/updateCoffee">
        Updated Coffee
      </NavLink> */}
      <NavLink className="btn ml-4" to="/addCoffee">
        Add Coffee
      </NavLink>
    </div>
  );
};

export default Navbar;
