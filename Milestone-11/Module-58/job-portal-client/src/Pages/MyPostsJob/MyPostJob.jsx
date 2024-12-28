import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/UseAuth";
import { Link } from "react-router-dom";

const MyPostJob = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(
      `https://job-portal-server-eta-six.vercel.app/jobs?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user?.email]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">My Posted Jobs</h1>
      <p className="mb-4 text-gray-600">Total Posted Jobs: {jobs.length}</p>

      <div className="overflow-x-auto">
        <table className="table w-full border-collapse border border-gray-200">
          {/* Table Head */}
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 border border-gray-200">#</th>
              <th className="p-4 border border-gray-200">Job Title</th>
              <th className="p-4 border border-gray-200">Deadline</th>
              <th className="p-4 border border-gray-200">Applications</th>
              <th className="p-4 border border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-all duration-200"
              >
                <td className="p-4 border border-gray-200 text-center">
                  {index + 1}
                </td>
                <td className="p-4 border border-gray-200">{job.title}</td>
                <td className="p-4 border border-gray-200">
                  {job.applicationDeadline}
                </td>
                <td className="p-4 border border-gray-200 text-center">
                  {job.applicationCount}
                </td>
                <td className="p-4 border border-gray-200 text-center">
                  <Link to={`/viewApplication/${job._id}`}>
                    <button className="btn btn-primary btn-sm">
                      View Applications
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostJob;
