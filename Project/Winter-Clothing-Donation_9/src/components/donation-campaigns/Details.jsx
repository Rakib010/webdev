import React from "react";
import { useLoaderData } from "react-router-dom";
import DonationForm from "./DonationForm";

const Details = () => {
  const { title, contactInfo, division, description, image, status } =
    useLoaderData();

  return (
    <div className="py-10">
      <h1 className="text-4xl font-extrabold text-center mb-12">
        Share the Warmth, Spread Love
      </h1>
      <div className="flex flex-col lg:flex-row border gap-4 rounded-lg shadow-lg overflow-hidden ">
        {/* Left Section: Details Card */}
        <div className="lg:w-1/2">
          <img
            src={image}
            alt={title}
            className=" h-96 rounded-md object-cover w-full "
          />
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{title}</h2>
            <p className="text-lg text-gray-600 mb-6">{description}</p>
            <div className="space-y-4">
              <div>
                <span className="text-lg font-semibold text-gray-800">
                  Status:
                </span>{" "}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-white ${
                    status === "Ongoing" ? "bg-green-500" : "bg-yellow-500"
                  }`}
                >
                  {status}
                </span>
              </div>
              <div>
                <span className="text-lg font-semibold text-gray-800">
                  Contact:
                </span>{" "}
                <a href={`${contactInfo}`} className="text-blue-600 underline">
                  {contactInfo}
                </a>
              </div>
              <div>
                <span className="text-lg font-semibold text-gray-800">
                  Division:
                </span>{" "}
                <span className="text-gray-700">{division}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Donation Form */}
        <div className="lg:w-1/2 bg-gray-50 border shadow-lg  p-8">
          <DonationForm />
        </div>
      </div>
    </div>
  );
};

export default Details;
