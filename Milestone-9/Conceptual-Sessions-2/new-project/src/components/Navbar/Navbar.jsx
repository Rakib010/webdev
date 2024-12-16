import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, handleLogOut } = useContext(authContext);

  return (
    <div className="px-4 md:flex justify-between items-center py-4 border rounded-md">
      {/* Logo Section */}
      <div className="text-2xl font-bold text-blue-500">TEETH WiZARD</div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-4 text-gray-600">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/treatments">All Treatments</NavLink>
        <NavLink to="/appointments">My Appointments</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>

      {/* User Info */}
      {/* if jodi user login thake show image & logout button else show Login button */}
      <div>
        {user?.email ? (
          <div className="flex items-center gap-4">
            {/* User Profile Image */}
            <img
              className="w-10 h-10 rounded-full border-2 border-gray-300"
              src={user.photoURL}
              alt="User Profile"
            />
            {/* Logout Button */}
            <button className="btn btn-secondary" onClick={handleLogOut}>
              LogOut
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn btn-secondary">
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
