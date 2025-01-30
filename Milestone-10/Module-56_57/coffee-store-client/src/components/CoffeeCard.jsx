import React from "react";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
  const { _id, photo, name, chef } = coffee;

  const handleDelete = (_id) => {
    //console.log(_id);
    /* alert */
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
        fetch(
          `https://coffee-store-server-rouge-iota.vercel.app/coffee/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            //console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="flex items-center p-6 border rounded-xl shadow-lg bg-white hover:shadow-2xl transition-all duration-300">
      {/* Image Section */}
      <img
        className="w-24 h-24 object-cover rounded-md border-2 border-gray-200"
        src={photo}
        alt={coffee.name}
      />
      {/* Details Section */}
      <div className="ml-6 flex-1">
        <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
          {name}
        </h3>
        <p className="text-sm text-gray-600">Chef: {chef}</p>
        <p className="text-sm text-gray-600">Price: </p>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col justify-center gap-4 items-center">
        <button className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
          <FaEye size={20} />
        </button>
        <Link to={`/updateCoffee/${_id}`}>
          <button className="text-gray-500 hover:text-yellow-500 transition-colors duration-200">
            <FaEdit size={20} />
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="text-gray-500 hover:text-red-500 transition-colors duration-200"
        >
          <FaTrashAlt size={20} />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
