/* eslint-disable react/prop-types */
import { BsCoin } from "react-icons/bs";
const Navbar = ({ coinCount }) => {
  return (
    <div className="sticky top-0 backdrop-blur-lg z-10">
      <div className="flex items-center justify-between py-2 w-10/12 mx-auto">
        <div className="">
          <img src="https://i.ibb.co.com/JFFJQQ9/logo.png" alt="" />
        </div>
        <div className="flex items-center gap-16">
          <ul className="flex items-center font-semibold gap-6 text-[#131313B3]">
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedules</li>
          </ul>
          <button className="bg-slate-100 px-4 py-2 rounded-lg font-semibold border flex items-center gap-2">
            {coinCount} Coin <BsCoin className="text-yellow-400"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
