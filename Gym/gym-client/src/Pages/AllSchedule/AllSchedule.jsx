import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllScheduleTable from "../../components/AllScheduleTable";

const AllSchedule = () => {
  const data = useLoaderData();
  // console.log(scheduleData);
  const [scheduleData, setScheduleData] = useState(data);
  const [search, setSearch] = useState("");

  // search function
  useEffect(() => {
    fetch(`http://localhost:5000/schedule?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setScheduleData(data);
      });
  }, [search]);

  

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center mt-4">
      {/* Search Bar */}
      <h1 className="text-2xl font-semibold mb-2">Search Your Title</h1>
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
              {scheduleData.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="p-4 text-center text-gray-500 font-medium"
                  >
                    No Data Found
                  </td>
                </tr>
              ) : (
                scheduleData.map((schedule, index) => (
                  <AllScheduleTable
                    key={index}
                    index={index}
                    schedule={schedule}
                    scheduleData={scheduleData}
                    setScheduleData={setScheduleData}
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

export default AllSchedule;
