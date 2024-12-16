import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-between items-center py-4">
        <div>
          <h1 className="text-3xl font-semibold font-serif ">BanglaHotel</h1>
        </div>
        <div className="flex gap-4 text-lg font-semibold text-gray-700">
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <button className="btn">Hello</button>
      </div>
    </div>
  );
};

export default Navbar;
