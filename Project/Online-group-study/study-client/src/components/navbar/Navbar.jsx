import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, handleLogOut } = useAuth();

  return (
    <div className="bg-base-200 shadow-sm border-b-2 ">
      <div className="navbar w-11/12 px-4 mx-auto">
        <div className="flex-1">
          <Link to="/" className="flex gap-2 items-center">
            <span className="font-bold text-xl">Group Study</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex-none hidden lg:flex justify-center">
          <ul className="menu menu-horizontal px-1 gap-4">
            <li>
              <Link
                to="/"
                className="font-medium hover:text-teal-500 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/assignments"
                className="font-medium hover:text-teal-500 transition"
              >
                Assignments
              </Link>
            </li>
            {user && (
              <li>
                <Link
                  to="/pendingAssignment"
                  className="font-medium hover:text-teal-500 transition"
                >
                  Pending Assignments
                </Link>
              </li>
            )}
            {!user && (
              <li>
                <Link
                  to="/login"
                  className="font-medium hover:text-teal-500 transition"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* User Dropdown */}
        <div className="flex-none">
          {user ? (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div title={user?.displayName} className="w-10 rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/createAssignment" className="justify-between">
                    Create Assignments
                  </Link>
                </li>
                <li>
                  <Link to="/myAssignments">My Assignments</Link>
                </li>
                <li className="mt-2">
                  <button
                    onClick={handleLogOut}
                    className="bg-gray-200 block text-center"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn btn-sm btn-primary hidden ">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu*/}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 ml-12 z-50 shadow bg-base-100 rounded-box"
          >
            <li>
              <Link to="/" className="font-medium hover:text-teal-500">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/assignments"
                className="font-medium hover:text-teal-500"
              >
                Assignments
              </Link>
            </li>
            {user && (
              <li>
                <Link
                  to="/pendingAssignment"
                  className="font-medium hover:text-teal-500"
                >
                  Pending Assignments
                </Link>
              </li>
            )}
            {!user && (
              <li>
                <Link to="/login" className="font-medium hover:text-teal-500">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
