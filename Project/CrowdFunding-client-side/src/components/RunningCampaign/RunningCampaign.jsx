import React, { useState, useEffect } from "react";
import RunningCard from "./RunningCard";

const RunningCampaigns = () => {
  const [loading, setLoading] = useState(true);
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://crowd-funding-server-side.vercel.app/runningCampaign")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCampaigns(data);
        setLoading(false);
      });
  }, [setLoading]);

  return (
    <div className="min-h-screen py-6 ">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-orange-500 font-bold text-center mb-12">
          Explore Running Campaigns
        </h1>
        {loading ? (
          <div className="flex justify-center items-center my-20">
            <div className="text-center">
              <div className="loading loading-spinner text-orange-500 mb-4"></div>
            </div>
          </div>
        ) : campaigns.length === 0 ? (
          <div className="flex justify-center items-center my-20">
            <p className="text-gray-500 text-lg">
              No active campaigns available at the moment.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {campaigns.map((campaign) => (
              <RunningCard key={campaign._id} campaign={campaign} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RunningCampaigns;
