import React from "react";
import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 items-center pt-10 gap-8 text-white">
      {/* Left Section */}
      <div className="w-11/12 mx-auto space-y-4">
        <h1 className="text-5xl font-bold">COX'S BAZAR</h1>
        <p className="">
          Cox's Bazar is a city, fishing port, tourism centre, and district
          headquarters in southeastern Bangladesh. It is famous mostly for its
          long natural sandy beach and it ...
        </p>
        <button className="btn btn-warning">Booking</button>
      </div>

      {/* Right Section */}
      <HeroCard />
    </div>
  );
};

export default Hero;
