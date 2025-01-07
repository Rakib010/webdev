import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaNs8, FaTrash, FaUsers } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // admin
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success(`${user.name} is an Admin Now!`);
      }
    });
  };

  // Delete user with confirmation
  const handleDeleteUser = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold text-gray-800">All Users</h2>
        <h3 className="text-xl text-gray-600">Total Users: {users?.length}</h3>
      </div>

      <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
        <table className="min-w-full table-auto text-sm">
          {/* Table Header */}
          <thead>
            <tr className="bg-gradient-to-r from-blue-400 to-purple-500 text-white">
              <th className="p-4 text-center">#</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-center">Role</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="hover:bg-gray-100 transition duration-300"
              >
                <td className="p-4 text-center">{index + 1}</td>
                <td className="p-4">{user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4 text-center">
                  {user.roll === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="flex items-center gap-2 text-blue-500 hover:text-blue-700"
                    >
                      <FaUsers className="h-5 w-5" />
                      {user.role || "User"}
                    </button>
                  )}
                </td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="text-red-500 hover:text-red-700 flex items-center gap-2 transition-transform transform hover:scale-110"
                  >
                    <FaTrash className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
