import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, handleLogOut } = useContext(authContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/donationCampaigns">Donation Campaigns</NavLink>
      </li>
      <li>
        <NavLink to="/howToHelp">How to Help</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div className=" sticky top-0 backdrop-blur-lg z-50 shadow-sm">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 rounded-box bg-base-100 p-2 text-semibold shadow-lg w-52"
            >
              {links}
            </ul>
          </div>
          <NavLink
            to="/"
            className="btn btn-ghost text-2xl font-bold text-green-600 font-mono"
          >
            Humanity
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gray-700 space-x-4">
            {links}
          </ul>
        </div>

        {/* login/logout */}
        <div className="navbar-end">
          {user?.email ? (
            <div className="flex items-center gap-4">
              <img
                className="w-10 h-10 rounded-full border-2 border-green-600"
                src={user.photoURL}
                alt="User Profile"
              />
              <button
                className="btn btn-success text-white "
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </div>
          ) : (
            <NavLink to="/login" className="btn btn-success ">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
