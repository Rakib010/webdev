import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../AuthProvider.jsx/AuthProvider";
import Swal from "sweetalert2";

const CampaignDetails = () => {
  const details = useLoaderData();
  const { user } = useContext(authContext);

  const { _id, photo, title, type, donation, deadline, description } = details;

  const handleDonate = () => {
    const userData = {
      email: user?.email,
      username: user?.displayName,
      campaignId: _id,
      photo,
      title,
      type,
      donation,
      deadline,
      description,
    };

    fetch("https://crowd-funding-server-side.vercel.app/donate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Success", "Thank you for your donation!");
        } else if (data.message) {
          Swal.fire("Error", data.message, "error");
        }
      });
  };

  return (
    <div className="min-h-screen py-12 flex justify-center items-center">
      <div className="max-w-4xl bg-white rounded-lg shadow-md overflow-hidden border">
        <img
          src={photo}
          alt={title}
          className="w-full h-64 object-cover border-b"
        />
        <div className="p-6">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            {title}
          </h1>
          <div className="space-y-4 mb-6">
            <p className="text-lg">
              <span className="font-semibold text-gray-700">Type:</span> {type}
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-700">
                Minimum Donation:
              </span>{" "}
              <span className="text-green-600 font-bold">{donation} Taka</span>
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-700">Deadline:</span>{" "}
              {deadline}
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-700">Description:</span>{" "}
              {description}
            </p>
          </div>
          <button
            onClick={handleDonate}
            className="w-full px-4 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
