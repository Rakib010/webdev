import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatesNews = () => {
  return (
    <div className="flex gap-2 items-center bg-[#F3F3F3] p-2">
      <p className="bg-[#D72050] text-[#FFFFFF]  px-4 py-2 font-semibold">Latest</p>
      <Marquee pauseOnHover={true} className=" space-x-10">
        <Link to="/news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
          maxime.
        </Link>
        <Link to="/news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
          maxime.
        </Link>
        <Link to="/news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
          maxime.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatesNews;
