import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const DetailsAssignment = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  const { title, description, level, marks, thumbnail, user_Info } =
    useLoaderData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const googleDocsLink = e.target.googleDocsLink.value;
    const quickNote = e.target.quickNote.value;

    const submissionData = {
      googleDocsLink,
      quickNote,
      email: user?.email,
      name: user?.displayName,
      status: "Pending",
      title,
      marks,
    };

    // Submit the assignment data
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/submissionAssignment`,
        submissionData
      );
     // console.log(data);
      toast.success("Assignment Submitted!");
    } catch (err) {
    //console.log(err.message);
    toast.error(`${err.message}`);
    }

    // Close the modal after submission
    const modal = document.getElementById("my_modal_5");
    modal.close();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10 border">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
        <p className="text-gray-600 italic text-sm mt-1">
          Assigned by: {user_Info?.name || "N/A"}
        </p>
      </div>
      <div className="mb-6">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-64 object-cover rounded-md shadow-sm"
        />
      </div>
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed">
          <strong>Description:</strong> {description}
        </p>
        <p className="text-gray-700">
          <strong>Level:</strong> <span className="font-medium">{level}</span>
        </p>
        <p className="text-gray-700">
          <strong>Marks:</strong> {marks}
        </p>
        <p className="text-gray-700">
          <strong>Due Date:</strong> {() => setStartDate(startDate)}
        </p>
      </div>
      <div className="mt-6 text-center">
        <button
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 font-medium"
        >
          Take Assignment
        </button>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleSubmit}>
            {/* Google Docs Link */}
            <div className="mb-4">
              <label
                htmlFor="googleDocsLink"
                className="block text-gray-700 font-medium"
              >
                Google Docs Link
              </label>
              <input
                type="url"
                id="googleDocsLink"
                name="googleDocsLink"
                required
                placeholder="Enter Google Docs link"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:outline-none"
              />
            </div>
            {/* Quick Note */}
            <div className="mb-4">
              <label
                htmlFor="quickNote"
                className="block text-gray-700 font-medium"
              >
                Quick Note
              </label>
              <textarea
                id="quickNote"
                name="quickNote"
                rows="5"
                placeholder="Enter a quick note"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:outline-none"
              ></textarea>
            </div>
            {/* submit btn */}
            <button className="px-6 py-2 text-white bg-teal-600 rounded-md hover:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-50 font-medium">
              Submit
            </button>
            <button
              type="button"
              onClick={() => document.getElementById("my_modal_5").close()}
              className="ml-8 px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none"
            >
              Close
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default DetailsAssignment;
