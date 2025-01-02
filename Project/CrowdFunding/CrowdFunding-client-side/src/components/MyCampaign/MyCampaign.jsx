import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider.jsx/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCampaign = () => {
  const { user } = useContext(authContext);
  const [myCampaigns, setMyCampaigns] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://crowd-funding-server-side.vercel.app/myCampaign/${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMyCampaigns(data);
        })
        .catch((err) => console.error("Error fetching campaigns:", err));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://crowd-funding-server-side.vercel.app/myCampaign/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            //console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your event has been deleted.",
                icon: "success",
              });
              const deleteData = myCampaigns.filter(
                (campaign) => campaign._id !== id
              );
              setMyCampaigns(deleteData);
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 mt-8">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          My Campaigns
        </h1>

        {myCampaigns.length === 0 ? (
          <p className="text-center text-gray-500">
            No campaigns found. Add some campaigns to get started!
          </p>
        ) : (
          <div className="overflow-x-auto  rounded-lg">
            <table className="w-full bg-white rounded-lg">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-medium">Serial</th>
                  <th className="py-4 px-6 text-left font-medium">Title</th>
                  <th className="py-4 px-6 text-left font-medium">Type</th>
                  <th className="py-4 px-6 text-left font-medium">
                    Minimum Donation
                  </th>
                  <th className="py-4 px-6 text-left font-medium">Deadline</th>
                  <th className="py-4 px-6 text-center font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {myCampaigns.map((campaign, index) => (
                  <tr
                    key={campaign._id}
                    className="border-b hover:bg-gray-100 transition"
                  >
                    <td className="py-3 px-6 text-gray-700">{index + 1}</td>
                    <td className="py-3 px-6 text-gray-700">
                      {campaign.title}
                    </td>
                    <td className="py-3 px-6 text-gray-700">{campaign.type}</td>
                    <td className="py-3 px-6 text-gray-700">
                      {campaign.donation} Taka
                    </td>
                    <td className="py-3 px-6 text-gray-700">
                      {campaign.deadline}
                    </td>
                    <td className="py-3 px-6 flex justify-center gap-4">
                      <Link
                        to={`/updatedCampaign/${campaign._id}`}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(campaign._id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCampaign;
