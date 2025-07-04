import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider.jsx/AuthProvider";

const MyDonations = () => {
  const { user } = useContext(authContext);
  const [myCampaigns, setMyCampaigns] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://crowd-funding-server-side.vercel.app/donatedCampaign/${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMyCampaigns(data);
        });
    }
  }, [user?.email]);

  return (
    <div className="py-8 mt-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          My Donations
        </h1>
        {myCampaigns.length === 0 ? (
          <p className="text-center text-gray-500">
            No donations found. Start contributing to campaigns now!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
            {myCampaigns.map((campaign) => (
              <div
                key={campaign._id}
                className="bg-white border  rounded-lg overflow-hidden"
              >
                <img
                  src={campaign.photo}
                  alt={campaign.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {campaign.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-bold">Type:</span> {campaign.type}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-bold">Description:</span>{" "}
                    {campaign.description}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-bold">Minimum Donation:</span>{" "}
                    {campaign.donation} Taka
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-bold">Deadline:</span>{" "}
                    {new Date(campaign.deadline).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyDonations;
