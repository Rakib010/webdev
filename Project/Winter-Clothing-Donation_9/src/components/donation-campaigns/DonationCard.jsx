import React from "react";
import { Link } from "react-router-dom";

const DonationCard = ({ campaign }) => {
  const { id, image, title, description, division } = campaign;
  return (
    <>
      <div className="card border rounded-lg shadow-md p-4 bg-white">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />

        <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-3">{description}</p>
        <p className="text-sm font-medium text-gray-500 mb-3">
          Division: <span className="text-gray-700">{division}</span>
        </p>

        {/*Button */}
        <Link to={`/details/${id}`} className="btn">
          Donate Now
        </Link>
      </div>
    </>
  );
};

export default DonationCard;
