import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user, singOutUser } = useContext(AuthContext);
  console.log(user);

  const handleSignOut = () => {
    singOutUser()
      .then(() => {
        console.log("user sign out successfully");
      })
      .catch((error) => console.log("Error", error.massage));
  };

  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">LogIn</Link>
      </li>
      <li>
        <Link to="/singup">SingUp</Link>
      </li>
      {/* condition if user have an  account   */}
      {user && (
        <>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a class="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div class="navbar-end">
          {/* condition  */}
          {user ? (
            <>
              <span> {user.email}</span>
              <a onClick={handleSignOut} class="btn">
                Sign Out
              </a>
            </>
          ) : (
            <Link to="/login">LogIn</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
