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
    <div>
      post job {jobs.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>Application Count </th>
              <th>view Application</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.applicationCount}</td>
                <td>
                  <Link to={`/viewApplication/${job._id}`}>
                    <button className="btn btn-link">View Application</button>
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
