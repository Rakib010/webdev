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
  } = job;

  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-white border border-gray-200 p-4">
      {/* Header */}
      <div className="flex items-center mb-4">
        <img
          src={company_logo}
          alt={`${company} logo`}
          className="w-12 h-12 rounded-full border border-gray-300"
        />
        <div className="ml-4">
          <h2 className="font-bold text-lg text-gray-800">{company}</h2>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>

      {/* Job Details */}
      <h3 className="font-semibold text-xl text-gray-800 mb-2">{title}</h3>
      <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
          {jobType}
        </span>
        <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
          {category}
        </span>
      </div>
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      {/* Requirements */}
      <div className="flex flex-wrap gap-2 mb-4">
        {requirements.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="text-right">
          <p className="text-blue-600 font-bold text-lg">
            {salaryRange?.currency?.toUpperCase()} {salaryRange?.min} -{" "}
            {salaryRange?.max}
          </p>
        </div>
      </div>

      {/* Apply Button */}
      <Link to={`/jobs/${_id}`}>
        <button className="btn">Apply Now</button>
      </Link>
    </div>
  );
};

export default HotJobCard;
