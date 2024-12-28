import React from "react";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    company_logo,
    _id,
  } = job || {};

  return (
    <div className="flex flex-col max-w-md rounded-lg shadow-md bg-white border border-gray-200 overflow-hidden transition-transform hover:scale-105">
      {/* Company Info */}
      <div className="flex items-center bg-gray-100 p-4">
        <img
          src={company_logo}
          alt={`${company} logo`}
          className="w-14 h-14 rounded-full border border-gray-300"
        />
        <div className="ml-4">
          <h2 className="font-bold text-lg text-gray-800">{company}</h2>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>

      {/* Job Details */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="font-semibold text-xl text-gray-900">{title}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            {jobType}
          </span>
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        <p className="text-gray-700 text-sm mt-3 line-clamp-2">{description}</p>

        {/* Requirements Section */}
        {requirements && (
          <div className="mt-4">
            <h4 className="text-gray-700 text-sm font-medium mb-2">
              Key Skills:
            </h4>
            <div className="flex flex-wrap gap-2">
              {requirements.slice(0, 3).map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
              {requirements.length > 3 && (
                <span className="text-xs text-gray-500">+ more</span>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-xs">
              Deadline:{" "}
              <span className="font-medium text-gray-800">
                {applicationDeadline}
              </span>
            </p>
          </div>
          <div>
            <p className="text-blue-600 font-semibold text-lg">
              {salaryRange?.currency?.toUpperCase()} {salaryRange?.min} -{" "}
              {salaryRange?.max}
            </p>
          </div>
        </div>
      </div>

      {/* Apply Button */}
      <div className="bg-gray-100 p-4">
        <Link to={`/jobs/${_id}`}>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition-colors duration-200">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HotJobCard;
