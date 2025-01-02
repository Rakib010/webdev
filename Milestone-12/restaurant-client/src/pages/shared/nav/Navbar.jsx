import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err.message));
  };

  const navList = (
    <>
      <li>
        <Link to="/" className="hover:text-yellow-400">
          Home
        </Link>
      </li>
      <li>
        <Link to="/menu" className="hover:text-yellow-400">
          Our Menu
        </Link>
      </li>
      <li>
        <Link to="/order" className="hover:text-yellow-400">
          Order Food
        </Link>
      </li>
      <li>
        <Link to="/secret" className="hover:text-yellow-400">
          Secret
        </Link>
      </li>
      <li>
        <Link to="/dashboard/cart" className="hover:text-yellow-400">
          <button className="btn">
            <FaShoppingCart />
            <div className="badge badge-secondary">{cart?.length}</div>
          </button>
        </Link>
      </li>
      <li>
        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-outline btn-sm text-yellow-400 hover:bg-yellow-400 hover:text-black"
          >
            Log Out
          </button>
        ) : (
          <Link
            to="/login"
            className="btn btn-outline btn-sm text-yellow-400 hover:bg-yellow-400 hover:text-black"
          >
            Login
          </Link>
        )}
      </li>
    </>
  );

  return (
    <nav className="navbar fixed top-0 z-50 bg-opacity-80 bg-gray-900 text-white shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden focus:outline-none"
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
          </button>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 w-48 p-2 bg-gray-800 text-white rounded-lg shadow-lg"
          >
            {navList}
          </ul>
        </div>
        <Link
          to="/"
          className="text-xl font-bold tracking-wider text-yellow-400"
        >
          Khabar Lagbo!
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4 text-lg">{navList}</ul>
      </div>

      <div className="navbar-end">
        <button className="btn bg-yellow-400 text-black hover:bg-yellow-500">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
