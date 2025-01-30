import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Apply black text on routes other than home
  const textColorClass =
    location.pathname === "/" ? "text-white" : "text-black";

  return (
    <nav className="">
      <div
        className={`w-11/12 mx-auto py-4 flex justify-between items-center font-semibold ${textColorClass}`}
      >
        {/* Logo Section */}
        <div>
          <h1 className="text-2xl font-bold">Travel Guru</h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          
          {location.pathname === "/" && (
            <input
              type="text"
              className={`border border-gray-300 bg-gray-100 bg-opacity-50 rounded-md px-6 py-1 outline-none placeholder-opacity-70 
              ${textColorClass} placeholder-${textColorClass}`}
              placeholder="Search your Destination"
            />
          )}

          <NavLink to="/" className={`hover:underline ${textColorClass}`}>
            Home
          </NavLink>
          <NavLink to="/news" className={`hover:underline ${textColorClass}`}>
            News
          </NavLink>
          <NavLink
            to="/destination"
            className={`hover:underline ${textColorClass}`}
          >
            Destination
          </NavLink>
          <NavLink to="/blog" className={`hover:underline ${textColorClass}`}>
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={`hover:underline ${textColorClass}`}
          >
            Contact
          </NavLink>
        </div>

        {/* Login Button */}
        <div>
          <Link to="/login" className="btn btn-warning">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
