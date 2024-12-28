import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const {
    _id,
    title,
    company,
    location,
    jobType,
    salaryRange,
    description,
    requirements,
    applicationDeadline,
    company_logo,
  } = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10 border border-gray-200 mb-8
    ">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={company_logo}
          alt={`${company} logo`}
          className="w-16 h-16 rounded-full border border-gray-300"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <p className="text-lg text-gray-600">
            <span className="font-medium">Company:</span> {company}
          </p>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
      </div>

      {/* Job Details Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Job Details
        </h2>
        <ul className="text-gray-700 space-y-2">
          <li>
            <span className="font-medium">Job Type:</span> {jobType}
          </li>
          <li>
            <span className="font-medium">Salary Range:</span>{" "}
            {salaryRange?.currency?.toUpperCase()} {salaryRange?.min} -{" "}
            {salaryRange?.max}
          </li>
          <li>
            <span className="font-medium">Application Deadline:</span>{" "}
            {applicationDeadline}
          </li>
        </ul>
      </div>

      {/* Description Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Description
        </h2>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Requirements Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Requirements
        </h2>
        <ul className="list-disc list-inside text-gray-600">
          {requirements?.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Apply Button */}
      <div className="text-center">
        <Link to={`/apply/${_id}`}>
          <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-200">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
