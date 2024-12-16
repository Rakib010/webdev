import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(authContext);

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden my-10">
      {/* Profile Header */}
      <div className="p-6 bg-blue-500 text-white text-center">
        <h2 className="text-2xl font-semibold">Profile</h2>
        <p className="text-sm mt-2">Welcome to your profile!</p>
      </div>

      {/* Profile Info */}
      <div className="flex justify-center p-6">
        <img
          className="w-24 h-24 rounded-full border-4 border-white shadow-md"
          src={user.photoURL}
          alt="User Profile"
        />
      </div>

      {/* Profile Details */}
      <div className="text-center pb-6">
        <p className="text-xl font-semibold">{user.displayName}</p>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>

      {/* Edit and Logout Buttons */}
      <div className="flex justify-center gap-4 pb-4">
        <button className="btn btn-primary">Edit Profile</button>
        <button className="btn btn-secondary">LogOut</button>
      </div>
    </div>
  );
};

export default Profile;
