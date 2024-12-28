/* eslint-disable react/prop-types */
const Hero = ({ handleCoinBtn }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-img gap-4 mb-16">
        <img src="https://i.ibb.co.com/jMY3QSV/banner-main.png" alt="" />
        <h1 className="text-3xl font-semibold ">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <h2 className="text-xl font-semibold text-[#131313B3]">
          Beyond Boundaries Beyond Limits
        </h2>
        <button
          onClick={handleCoinBtn}
          className="bg-yellow-500 btn border-2 font-semibold"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Hero;
