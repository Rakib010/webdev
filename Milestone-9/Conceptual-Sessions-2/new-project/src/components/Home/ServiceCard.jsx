import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ServiceCard = ({ service }) => {
  const { id, treatment, image, description, cost } = service;

  return (
    <div className="border-2 p-4 rounded-lg">
      {/* Image Section */}
      <img src={image} alt={treatment} className="w-full h-48 object-cover" />

      {/* Card Content */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          {/* Treatment Name */}
          <h2 className="text-xl font-bold text-gray-800">{treatment}</h2>
          {/* Cost */}
          <p className="text-blue-500 font-semibold">Cost: ${cost}</p>
        </div>

        {/* Description */}
        <p className="text-gray-600 mt-2 line-clamp-3">{description}</p>

        {/* "Check More" Button */}
        <Link to={`/details/${id}`} className="btn btn-primary mt-4">
          CheckOut More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
