import React from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter, Cursor } from "react-simple-typewriter";

const RunningCard = ({ campaign }) => {
  const { _id, photo, title, description, deadline, donation } = campaign;

  const navigate = useNavigate();

  return (
    <div className="border rounded-lg overflow-hidden">
      <img src={photo} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold truncate">
          <Typewriter
            words={[title]}
            loop={1} 
            typeSpeed={70} 
            deleteSpeed={50} 
            cursor={<Cursor />}
          />
        </h2>
        <p className="text-sm text-gray-600 mt-2 truncate">
          <Typewriter
            words={[description || "No description available"]}
            loop={false}
            typeSpeed={60}
            deleteSpeed={50}
            cursor={false} 
          />
        </p>
        <p className="text-sm text-gray-500 mt-1">
          <strong>Deadline:</strong> {new Date(deadline).toLocaleDateString()}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          <strong>Minimum Donation:</strong> {donation} Taka
        </p>
        <div className="mt-4">
          <button
            className="py-2 px-4 bg-green-500 text-white font-semibold shadow-md hover:bg-green-600 transition duration-300 w-full rounded"
            onClick={() => navigate(`/campaign/${_id}`)}
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RunningCard;
