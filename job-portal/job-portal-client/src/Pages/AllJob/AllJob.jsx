import React, { useState } from "react";
import useJobs from "../../hooks/useJobs";
import HotJobCard from "../Home/HotJobCard";

const AllJob = () => {
  const [sort, setSort] = useState(false);
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [search, setSearch] = useState("");
  const { jobs, loading } = useJobs(sort, search, minSalary, maxSalary);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-100 via-white to-blue-100">
        <h2 className="text-3xl font-extrabold text-blue-600 animate-pulse">
          Fetching Jobs...
        </h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 bg-gray-50 min-h-screen">
      {/* Sort and Search Section */}
      <div className="flex flex-wrap justify-between items-center mb-8 bg-white shadow-md p-4 rounded-lg">
        <button
          className={`px-6 py-2 text-lg font-bold rounded-lg transition-all ${
            sort
              ? "bg-gradient-to-r from-green-400 to-green-500 text-white shadow-lg"
              : "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
          } hover:scale-105`}
          onClick={() => setSort(!sort)}
        >
          {sort ? "Sorted by Salary" : "Sort by Salary"}
        </button>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md text-gray-700 shadow-sm focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Search Jobs by Location"
        />
        <div className="flex gap-4">
          <input
            onChange={(e) => setMinSalary(e.target.value)}
            type="number"
            className="border border-gray-300 rounded-lg px-4 py-2 w-32 text-gray-700 shadow-sm focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Min Salary"
          />
          <input
            onChange={(e) => setMaxSalary(e.target.value)}
            type="number"
            className="border border-gray-300 rounded-lg px-4 py-2 w-32 text-gray-700 shadow-sm focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Max Salary"
          />
        </div>
      </div>

      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Explore Available Jobs
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Your dream job is just a few clicks away. Start your journey now!
        </p>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <HotJobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AllJob;
