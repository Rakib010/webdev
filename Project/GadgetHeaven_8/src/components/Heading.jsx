import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center md:pb-28 text-center bg-[#9538E2] text-white rounded-lg px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl text-center font-semibold mt-4">{title}</h1>
      <h2 className="my-3 md:my-5 font-semibold text-sm md:text-base lg:text-lg w-[70%]">
        {subtitle}
      </h2>
    </div>
  );
};

export default Heading;
