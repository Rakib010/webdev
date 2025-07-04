import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { userProfile } = useContext(authContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    userProfile(name, photo)
      .then((res) => {
        /* console.log(res); */
        navigate("/dashboard");
      })
      .catch((err) => {
        console.error("Failed to update profile:", err.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Update Profile
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Your Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-green-500"
              name="name"
              required
            />
          </div>

          {/* Photo URL Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Photo URL
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter photo URL"
              className="input input-bordered w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-1 focus:ring-green-500"
              name="photo"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-green-500 text-white w-full py-2 rounded-md hover:bg-green-600 focus:outline-none"
          >
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
