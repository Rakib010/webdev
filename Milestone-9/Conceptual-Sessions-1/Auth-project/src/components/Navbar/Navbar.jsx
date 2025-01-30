import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../context/AuthProvider";

const Navbar = () => {
  const { handleLogOut } = useContext(authContext);

  return (
    <div className="m-6">
      <Link className="btn" to="/">
        Home
      </Link>
      <Link className="btn ml-4" to="/about">
        About
      </Link>
      <Link className="btn ml-4" to="/signup">
        Sign Up
      </Link>
      <Link className="btn ml-4" to="/login">
        LogIn
      </Link>
      <Link className="btn ml-4" to="/profile">
        Profile
      </Link>
      <button className="btn ml-4" onClick={handleLogOut}>
        LogOut
      </button>
    </div>
  );
};

export default Navbar;
