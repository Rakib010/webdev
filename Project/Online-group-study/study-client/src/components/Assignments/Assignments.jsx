import axios from "axios";
import { useEffect, useState } from "react";

import AssignmentCard from "./AssignmentCard";
import useAuth from "../../Hooks/useAuth";
import LoadingSpinner from "../spinner/LoadingSpinner";

const Assignments = () => {
  const { loading } = useAuth();
  const [assignments, setAssignments] = useState([]);

  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  // get data all assignments
  useEffect(() => {
    fetchAssignments();
  }, [filter, search]);

  const fetchAssignments = async () => {
    const { data } = await axios.get(
      `${
        import.meta.env.VITE_API_URL
      }/Assignments?search=${search}&filter=${filter}`
    );
    setAssignments(data);
  };
  if (loading) return <LoadingSpinner />;

  // console.log(filter);

  return (
    <div className="p-6 bg-gradient-to-b from-indigo-50 to-indigo-100 min-h-screen">
      {/* Filter & Search */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 p-4 bg-white rounded-lg shadow-md">
        {/* Filter by Level */}
        <div className="w-full md:w-auto flex items-center gap-2">
          <label
            htmlFor="category"
            className="text-sm font-medium text-gray-700"
          >
            Filter by Level:
          </label>
          <select
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            name="level"
            id="level"
            className="border border-gray-300 text-gray-600 bg-gray-50 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            <option value="">All Levels</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-auto flex items-center gap-2">
          <label htmlFor="search" className="text-sm font-medium text-gray-700">
            Search:
          </label>
          <div className="relative flex items-center">
            <input
              type="search"
              id="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search assignments..."
              className="border border-gray-300 text-gray-600 bg-gray-50 rounded-l-lg px-4 py-2 w-full md:w-64 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg flex items-center gap-2 hover:bg-blue-700 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 16l-2-2m0 0l-2-2m2 2h12M14 8l2 2m-2-2l2-2m-2 2H8m4 12v-4m-4 4h4m0 0h4m-4 0v-4"
                />
              </svg>
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Assignments Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {assignments.map((assignment, index) => (
          <AssignmentCard
            key={index}
            assignment={assignment}
            fetchAssignments={fetchAssignments}
          />
        ))}
      </div>
    </div>
  );
};

export default Assignments;
