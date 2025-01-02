import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider.jsx/AuthProvider";
import ToggleTheme from "../Toggle/ToggleTheme";

const Navbar = () => {
  const { user, handleLogOut } = useContext(authContext);

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "underline" : "hover:font-bold"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/allCampaign"
        className={({ isActive }) =>
          isActive ? "underline" : "hover:font-bold"
        }
      >
        All Campaign
      </NavLink>
      <NavLink
        to="/addCampaign"
        className={({ isActive }) =>
          isActive ? "underline" : "hover:font-bold"
        }
      >
        Add New Campaign
      </NavLink>
      <NavLink
        to="/myCampaign"
        className={({ isActive }) =>
          isActive ? "underline" : "hover:font-bold"
        }
      >
        My Campaign
      </NavLink>
      <NavLink
        to="/myDonations"
        className={({ isActive }) =>
          isActive ? "underline" : "hover:font-bold"
        }
      >
        My Donations
      </NavLink>
    </>
  );

  return (
    <div className="">
      <div className="navbar p-0 w-11/12 mx-auto ">
        <div className="navbar-start ">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">Crowd Funding</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 space-x-4">{links}</ul>
        </div>
        <div className="navbar-end space-x-2">
          <button className="mr-8">
            <ToggleTheme />
          </button>
          {user?.email ? (
            <div className="flex items-center gap-4">
              {/* User Profile  */}
              <div className="relative group">
                <img
                  className="w-10 h-10 rounded-full border-2 border-green-600"
                  src={user.photoURL}
                  alt="User Profile"
                />
                <span className="absolute top-12 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100">
                  {user.displayName}
                </span>
              </div>
              <button
                className="btn  bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              {/* Login and Register Buttons */}
              <Link
                to="/login"
                className="btn btn-success text-white font-semibold"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-success text-white font-semibold"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
