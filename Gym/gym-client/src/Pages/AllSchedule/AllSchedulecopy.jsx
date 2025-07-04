import React, { useState } from "react";
import AllScheduleTable from "../../components/AllScheduleTable";
import { useQuery } from "@tanstack/react-query";

const AllSchedulecopy = () => {
  const [search, setSearch] = useState("");

  const {
    isLoading,
    error,
    isError,
    data: schedule,
  } = useQuery({
    queryKey: ["schedule", search], // Add search as part of the query key for re-fetching
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/schedule");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
    },
  });

  // Handle loading state
  if (isLoading) {
    return <span className="loading loading-spinner text-primary"></span>;
  }

  // Handle error state
  if (isError) {
    return (
      <div className="text-red-500">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      {/* Search Bar */}
      <div className="mb-6 w-full max-w-lg">
        <input
          type="search"
          name="search"
          placeholder="Search schedules..."
          aria-label="Search schedules"
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Table */}
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-200">
            {/* Table Head */}
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border border-gray-200 text-center">
                  Serial
                </th>
                <th className="p-3 border border-gray-200">Title</th>
                <th className="p-3 border border-gray-200 text-center">Day</th>
                <th className="p-3 border border-gray-200 text-center">Date</th>
                <th className="p-3 border border-gray-200 text-center">Time</th>
                <th className="p-3 border border-gray-200 text-center">
                  Action
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {schedule.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="p-4 text-center text-gray-500 font-medium"
                  >
                    No Data Found
                  </td>
                </tr>
              ) : (
                schedule.map((scheduleItem, index) => (
                  <AllScheduleTable
                    key={index}
                    index={index}
                    schedule={scheduleItem}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllSchedulecopy;
