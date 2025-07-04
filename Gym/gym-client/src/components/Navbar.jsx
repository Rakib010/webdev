import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white w-full py-4 px-6 md:px-12 flex items-center justify-between">
      {/* Logo */}
      <div className="flex-1">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition duration-200"
        >
          Gym Scheduler
        </Link>
      </div>

      {/* Center Links */}
      <div className="hidden md:flex flex-1 justify-center space-x-8">
        <Link
          to="/"
          className="text-gray-600 hover:text-blue-600 font-medium whitespace-nowrap transition duration-200"
        >
          Home
        </Link>
        <Link
          to="/addSchedule"
          className="text-gray-600 hover:text-blue-600 font-medium whitespace-nowrap transition duration-200"
        >
          Add Schedule
        </Link>
        <Link
          to="/allSchedule"
          className="text-gray-600 hover:text-blue-600 font-medium whitespace-nowrap transition duration-200"
        >
          All Schedule
        </Link>
        <Link
          to="/allScheduleCopy"
          className="text-gray-600 hover:text-blue-600 font-medium whitespace-nowrap transition duration-200"
        >
          All Schedule Copy
        </Link>
      </div>

      {/* Login Button */}
      <div className="hidden md:flex flex-1 justify-end">
        <Link
          to="/login"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-200 shadow-md"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
