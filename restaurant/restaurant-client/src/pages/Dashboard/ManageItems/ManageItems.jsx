import React from "react";
import useMenu from "../../../hooks/useMenu";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  // delete item
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menuItem/${item._id}`);

        if (res.data.deletedCount > 0) {
          //refetch to update the ui
          refetch();

          toast.success(`${item.name} has been deleted`);
        }
      }
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-6">Manage Items</h2>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
        <table className="table-auto w-full text-left">
          {/* Table Head */}
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-4">#</th>
              <th className="p-4">Image</th>
              <th className="p-4">Item Name</th>
              <th className="p-4">Price</th>
              <th className="p-4">Update</th>
              <th className="p-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr
                key={item._id}
                className="border-b hover:bg-gray-100 transition-colors"
              >
                <td className="p-4 text-center">{index + 1}</td>
                <td className="p-4">
                  <div className="flex justify-center">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4">{item.name}</td>
                <td className="p-4">${item.price.toFixed(2)}</td>
                <td className="p-4 text-center">
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button
                      /* onClick={() => handleUpdateItem(item)} */
                      className="btn btn-sm btn-info flex items-center gap-2"
                    >
                      <FaEdit className="text-white" />
                      Update
                    </button>
                  </Link>
                </td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => handleDeleteItem(item)}
                    className="btn btn-sm btn-error flex items-center gap-2"
                  >
                    <FaTrash className="text-white" />
                    Delete
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

export default ManageItems;
