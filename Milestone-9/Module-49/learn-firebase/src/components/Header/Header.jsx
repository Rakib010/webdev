import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-xl p-10">
      <NavLink className="mr-6" to="/">
        Home
      </NavLink>
      <NavLink to="/login">LogIn</NavLink>
    </div>
  );
};

export default Header;
