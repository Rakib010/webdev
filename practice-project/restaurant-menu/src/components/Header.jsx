import { FaRegUserCircle } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between mt-4">
        <a className="text-3xl font-bold">Chefs-Tables</a>
        <div className="">
          <ul className="flex items-center gap-10">
            <li>Home</li>
            <li>Recipes</li>
            <li>About</li>
            <li>Search</li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <div className="">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-16 h-8 md:w-auto"
            />
          </div>
          <div
            role="button"
            className="btn btn-ghost btn-circle avatar bg-green-300"
          >
            <div className="rounded-full">
              <FaRegUserCircle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
