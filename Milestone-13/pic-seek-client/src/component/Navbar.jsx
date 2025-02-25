import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Pic Seek
        </Link>
      </div>

      <ul className="flex gap-5 px-1">
        <li>
          <Link to="/" className="btn btn-ghost">
            Home
          </Link>
        </li>
        <li>
          <Link to="/all-images" className="btn btn-ghost">
            All Images
          </Link>
        </li>
        <li>
          <Link to="/generateImg" className="btn btn-ghost">
            Generate Images
          </Link>
        </li>
        <li>
          <Link to="/login" className="btn btn-outline">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
