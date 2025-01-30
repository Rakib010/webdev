import { useContext } from "react";
import { Link } from "react-router-dom";
import { bookmarksContext } from "../providers/Bookmarks";
import { userContext } from "../providers/User";

const Navbar = () => {
  const { bookmarks } = useContext(bookmarksContext);
  const { user } = useContext(userContext);
  return (
    <div>
      <div className="flex justify-evenly items-center  font-bold w-11/12 mx-auto my-4">
        <h1>use Params () </h1>
        <Link className="btn" to="/">
          All Post
        </Link>
        <Link className="btn" to="/addPost">
          Add Post
        </Link>
        <Link className="btn" to="/">
          Bookmarks:({bookmarks.length})
        </Link>
        <Link to="/">{user.name}</Link>
        {/*  true hocche btn optional params */}
        <Link className="btn" to="/common/contact/true">
          Contact Us
        </Link>
        <Link className="btn " to="/common/about">
          About Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
