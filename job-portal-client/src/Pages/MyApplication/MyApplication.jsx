import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/UseAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyApplication = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // regular way fetch data
    /* fetch(`https://job-portal-server-eta-six.vercel.app/job-application?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      }) */

    // using axios with custom hook
    axiosSecure
      .get(`/job-application?email=${user.email}`)
      .then((res) => setJobs(res.data));

    // using axios only
    /* axios
      .get(`https://job-portal-server-eta-six.vercel.app/job-application?email=${user.email}`, {
        withCredentials: true,
      })
      .then((res) => setJobs(res.data)) */
  }, [user?.email]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Job Applications</h1>
      <p className="mb-4 text-gray-600">Total Applications: {jobs.length}</p>

      <div className="overflow-x-auto">
        <table className="table w-full border-separate border-spacing-2">
          {/* Table Head */}
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Select</th>
              <th className="p-4">Job Details</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id} className="hover:bg-gray-50">
                <td className="p-4">
                  <input type="checkbox" className="checkbox" />
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt={`Logo of ${job.title}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-lg">{job.title}</div>
                      <div className="text-sm text-gray-500">
                        {job.location}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <button className="btn btn-ghost btn-xs text-red-600 hover:bg-red-100">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
