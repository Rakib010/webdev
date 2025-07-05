import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import logo from "../assets/footer.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("Log Out"))
      .catch((error) => console.log("Error Log Out"));
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-700"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allJob"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-700"
          }
        >
          All job
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myApplication"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-700"
          }
        >
          My Application
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addJob"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-700"
          }
        >
          Add A Job
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myPostedJob"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-700"
          }
        >
          My Posted Job
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-gray-50 border rounded-sm mb-8">
      <div className="navbar container mx-auto px-4 lg:px-8 py-3">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 bg-white rounded-md shadow-lg z-10"
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className="flex items-center gap-2 btn btn-ghost text-xl"
          >
            <img className="w-10" src={logo} alt="Logo" />
            <h2 className="font-bold text-gray-800">Job Portal</h2>
          </Link>
        </div>
        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-6">{links}</ul>
        </div>
        {/* Navbar End */}
        <div className="navbar-end space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLogOut}
                className="btn btn-primary btn-sm rounded-md"
              >
                Log Out
              </button>
              <img
                src={user?.photoURL}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border border-gray-300"
              />
            </div>
          ) : (
            <div className="flex space-x-3">
              <Link to="/register" className="btn btn-outline btn-sm">
                Register
              </Link>
              <Link to="/login" className="btn btn-primary btn-sm">
                Log In
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
