import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/UseAuth";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyApplication = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // regular way fetch data
    /* fetch(`http://localhost:5000/job-application?email=${user.email}`)
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
      .get(`http://localhost:5000/job-application?email=${user.email}`, {
        withCredentials: true,
      })
      .then((res) => setJobs(res.data)) */
  }, [user.email]);

  return (
    <div>
      Job Applications: {jobs.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.title}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
