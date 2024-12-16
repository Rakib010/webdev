import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="text-center ">
      <h2 className="text-3xl font-bold mb-5">My Website</h2>
      <nav className=" flex gap-4 items-center justify-center font-bold">
        <Link to="/">Home</Link>
        <NavLink to="/user">Users</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
};

export default Header;
