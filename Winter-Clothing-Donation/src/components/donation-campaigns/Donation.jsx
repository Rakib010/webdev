import React from "react";
import { useLoaderData } from "react-router-dom";
import DonationCard from "./DonationCard";

const Donation = () => {
  const data = useLoaderData();
  /* console.log(data); */

  return (
    <div>
      <h1 className="text-4xl font-bold mt-10 text-center">
        Donation Campaigns
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {[
          "Dhaka",
          "Chittagong",
          "Barisal",
          "Khulna",
          "Mymensingh",
          "Rajshahi",
          "Rangpur",
          "Sylhet",
        ].map((division) => (
          <button
            key={division}
            className="btn btn-success my-5 text-white px-4 py-2 rounded-md shadow-lg animate__animated animate__zoomIn"
          >
            {division}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {
          /* Array.isArray(data) && */
          data.map((item) => (
            <DonationCard key={item.id} campaign={item}></DonationCard>
          ))
        }
      </div>
    </div>
  );
};

export default Donation;
