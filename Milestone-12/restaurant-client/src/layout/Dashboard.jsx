import React from "react";
import {
  FaCalendar,
  FaFileContract,
  FaHome,
  FaList,
  FaPhone,
  FaSearch,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-pink-500 to-orange-400 shadow-lg">
        <div className="py-6 text-center text-white">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <ul className="menu flex flex-col space-y-2 px-4 text-white">
          <li>
            <NavLink
              to="/dashboard/userHome"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-md p-2 text-lg ${
                  isActive ? "bg-orange-600 shadow-md" : "hover:bg-orange-500"
                }`
              }
            >
              <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/reservation"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-md p-2 text-lg ${
                  isActive ? "bg-orange-600 shadow-md" : "hover:bg-orange-500"
                }`
              }
            >
              <FaCalendar /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/payment"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-md p-2 text-lg ${
                  isActive ? "bg-orange-600 shadow-md" : "hover:bg-orange-500"
                }`
              }
            >
              <FaStar /> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/cart"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-md p-2 text-lg ${
                  isActive ? "bg-orange-600 shadow-md" : "hover:bg-orange-500"
                }`
              }
            >
              <FaShoppingCart /> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/review"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-md p-2 text-lg ${
                  isActive ? "bg-orange-600 shadow-md" : "hover:bg-orange-500"
                }`
              }
            >
              <FaShoppingCart /> Add Review
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/bookings"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-md p-2 text-lg ${
                  isActive ? "bg-orange-600 shadow-md" : "hover:bg-orange-500"
                }`
              }
            >
              <FaList /> My Booking
            </NavLink>
          </li>
          {/*  */}
          <div className="divider">OR</div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-md p-2 text-lg ${
                isActive ? "bg-orange-600 shadow-md" : "hover:bg-orange-500"
              }`
            }
          >
            <FaHome />
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-md p-2 text-lg ${
                isActive ? "bg-orange-600 shadow-md" : "hover:bg-orange-500"
              }`
            }
          >
            <FaSearch />
            Menu
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-md p-2 text-lg ${
                isActive ? "bg-orange-600 shadow-md" : "hover:bg-orange-500"
              }`
            }
          >
            <FaShoppingCart />
            Shop
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-md p-2 text-lg ${
                isActive ? "bg-orange-600 shadow-md" : "hover:bg-orange-500"
              }`
            }
          >
            <FaPhone />
            Contact
          </NavLink>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6">
       
        {/* outlet */}
        <div className="mt-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
