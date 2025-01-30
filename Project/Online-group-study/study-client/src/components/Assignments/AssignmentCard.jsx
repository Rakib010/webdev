/* eslint-disable react/prop-types */
import axios from "axios";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const AssignmentCard = ({ assignment, fetchAssignments }) => {
  const { user } = useAuth();
  const { _id, thumbnail, title, description, marks, level, user_Info } =
    assignment;

  // delete Assignment
  const handleDelete = async (id) => {
    if (user?.email === user_Info?.email) {
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
          try {
            const { data } = await axios.delete(
              `${import.meta.env.VITE_API_URL}/deleteAssignment/${id}`
            );
            // Refresh the assignment
            fetchAssignments();
            // Show success alert
            Swal.fire({
              title: "Deleted!",
              text: data.message || "Your assignment has been deleted.",
              icon: "success",
            });
          } catch (err) {
            // console.error(err.message);
            toast.error(`${err.message}`);
          }
        }
      });
    } else {
      toast.error("You'r Not Create This Assignment");
    }
  };

  return (
    <div>
      <div className="bg-white shadow-lg rounded-xl overflow-hidden transition transform hover:scale-105 hover:shadow-2xl">
        <img src={thumbnail} alt={title} className="h-44 w-full object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-600 mt-3">
            {description.substring(0, 120)}...
          </p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-indigo-600 font-medium">
              Marks: {marks}
            </span>
            <span
              className={`px-3 py-1 text-xs rounded-full ${
                level === "Easy"
                  ? "bg-green-100 text-green-600"
                  : level === "Medium"
                  ? "bg-yellow-100 text-yellow-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {level}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium">
              <FaEye className="text-xl" />
              <Link to={`/detailsAssignment/${_id}`}>View</Link>
            </button>
            <button className="flex items-center gap-2 text-green-600 hover:text-green-800 font-medium">
              <FaEdit className="text-xl" />
              <Link to={`/UpdateAssignments/${_id}`}>Update</Link>
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="flex items-center gap-2 text-red-600 hover:text-red-800 font-medium"
            >
              <FaTrashAlt className="text-xl" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
