import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(authContext);
  /* console.log(user); */

  const navigate = useNavigate();
     
  /* update profile */
  const handleUpdateProfile = () => {
    navigate("/updateProfile"); 
  };

  return (
    <div className="flex bg-gray-50 py-10 flex-col justify-center items-center">
      <div className="text-center bg-white shadow-xl border p-8 rounded-lg ">
        <h1 className="text-3xl font-bold mb-4">
          Welcome <span className="text-blue-500">{user?.displayName}</span>
        </h1>
        <div className="w-96 py-6">
          <div className="flex flex-col items-center">
            <img
              src={user?.photoURL}
              alt="Profile"
              className="w-24 h-24 rounded-full mb-4 border border-gray-300"
            />
            <div className="text-center space-y-2">
              <h2 className="text-xl font-semibold">
                {user?.displayName}
              </h2>
              <p className="text-gray-600">
                {user?.email}
              </p>
            </div>
          </div>

          {/* Update Profile Button */}
          <div className="mt-6">
            <button onClick={handleUpdateProfile} className="btn btn-success w-full">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
