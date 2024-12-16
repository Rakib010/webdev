import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import {
  FiHome,
  FiUser,
  FiLogIn,
  FiPlusSquare,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      logout();
    }
  };

  return (
    <nav className="bg-gray-500 text-white">
      <div className=" w-11/12 mx-auto  flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">CoffeeApp</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-yellow-400" : "hover:text-gray-300"
              }`
            }
          >
            <FiHome />
            Home
          </NavLink>
          <NavLink
            to="/addCoffee"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-yellow-400" : "hover:text-gray-300"
              }`
            }
          >
            <FiPlusSquare />
            Add Coffee
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-yellow-400" : "hover:text-gray-300"
              }`
            }
          >
            <FiUser />
            Users
          </NavLink>
          {!user?.email ? (
            <NavLink
              to="/login"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <FiLogIn />
              Login
            </NavLink>
          ) : (
            <div className="flex items-center gap-4">
              <span className="font-medium">{user.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Log Out
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700">
          <NavLink
            to="/"
            className="block py-2 px-4 hover:bg-gray-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/addCoffee"
            className="block py-2 px-4 hover:bg-gray-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Add Coffee
          </NavLink>
          <NavLink
            to="/users"
            className="block py-2 px-4 hover:bg-gray-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Users
          </NavLink>
          {!user?.email ? (
            <NavLink
              to="/login"
              className="block py-2 px-4 hover:bg-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </NavLink>
          ) : (
            <button
              onClick={() => {
                setIsMenuOpen(false);
                handleLogout();
              }}
              className="block py-2 px-4 text-left hover:bg-gray-600"
            >
              Log Out
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
