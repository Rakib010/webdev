import React, { useContext } from "react";
import Swal from "sweetalert2";
import { authContext } from "../AuthProvider.jsx/AuthProvider";

const AddNewCampaign = () => {
  const { user } = useContext(authContext);
  //console.log(user);

  const handleAddCampaign = (e) => {
    e.preventDefault();
    const form = e.target;

    const photo = form.photo.value;
    const title = form.title.value;
    const type = form.type.value;
    const description = form.description.value;
    const donation = parseInt(form.Donation.value);
    const deadline = form.deadline.value;

    const newCampaign = {
      photo,
      title,
      type,
      description,
      donation,
      deadline,
      email: user?.email,
      username: user?.displayName,
    };
    //console.log(newCampaign);

    // send data client to server
    fetch("https://crowd-funding-server-side.vercel.app/addCampaign", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.insertedId) {
          Swal.fire({
            text: "Data Insert Successfully",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 my-10 ">
      <div className="w-full max-w-2xl border bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center ">
          Add New Campaign
        </h2>
        <form onSubmit={handleAddCampaign} className="space-y-4">
          <div>
            <input
              type="url"
              id="image"
              name="photo"
              placeholder="Enter image URL"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-900"
            >
              Campaign Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter campaign title"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-900"
            >
              Campaign Type
            </label>
            <select
              id="type"
              name="type"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Type</option>
              <option value="personal">Personal Issue</option>
              <option value="startup">Startup</option>
              <option value="business">Business</option>
              <option value="creative">Creative Ideas</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-900"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              name="description"
              placeholder="Enter campaign description"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="minDonation"
              className="block text-sm font-medium text-gray-900"
            >
              Minimum Donation Amount
            </label>
            <input
              type="number"
              id="minDonation"
              name="Donation"
              placeholder="Enter minimum donation amount"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="deadline"
              className="block text-sm font-medium text-gray-900"
            >
              Deadline
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="userEmail"
                className="block text-sm font-medium text-gray-900"
              >
                User Email
              </label>
              <input
                type="email"
                id="userEmail"
                defaultValue={user?.email}
                readOnly
                className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label
                htmlFor="userName"
                className="block text-sm font-medium text-gray-900"
              >
                User Name
              </label>
              <input
                type="text"
                id="userName"
                defaultValue={user?.displayName}
                readOnly
                className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className=" w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md"
            >
              Add Campaign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewCampaign;
