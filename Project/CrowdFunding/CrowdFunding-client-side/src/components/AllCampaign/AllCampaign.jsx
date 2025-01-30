import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import CampaignCard from "./CampaignCard";

const AllCampaign = () => {
  const loaderData = useLoaderData();
  const [campaignData, setCampaignData] = useState(loaderData);
  const [isSort, setIsSort] = useState(false);

  // sort function
  const handleSortBtn = () => {
    setIsSort(!isSort);
  };
  useEffect(() => {
    if (isSort) {
      fetch("https://crowd-funding-server-side.vercel.app/addCampaignSort")
        .then((res) => res.json())
        .then((data) => setCampaignData(data));
    } else {
      setCampaignData(loaderData);
    }
  }, [isSort, loaderData]);

  return (
    <div className="p-4 sm:p-6 min-h-screen bg-purple-50 mt-8 rounded-lg">
      <div className="flex items-center justify-center">
        <button
          onClick={handleSortBtn}
          className="btn mt-4 mb-8 bg-green-500 text-white font-semibold"
        >
          Sort By Amount
        </button>
      </div>
      <div className="overflow-x-auto bg-white border-2 rounded-lg">
        <table className="table-auto w-full">
          <thead className="text-xs sm:text-sm uppercase font-semibold border-b-2 bg-gray-50">
            <tr>
              <th className="py-4 px-2 sm:px-4 text-left">Serial</th>
              <th className="py-4 px-2 sm:px-4 text-left">Campaign Title</th>
              <th className="py-4 px-2 sm:px-4 text-left">Campaign Type</th>
              <th className="py-4 px-2 sm:px-4 text-left">Minimum Donation</th>
              <th className="py-4 px-2 sm:px-4 text-left">Deadline</th>
              <th className="py-4 px-2 sm:px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaignData.map((campaign, index) => (
              <CampaignCard
                key={campaign._id}
                campaign={campaign}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCampaign;
