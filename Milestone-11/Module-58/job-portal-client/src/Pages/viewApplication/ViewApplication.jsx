import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewApplication = () => {
  const application = useLoaderData();

  const handleStatusUpdate = (e, id) => {
    const data = {
      status: e.target.value,
    };
    fetch(
      `https://job-portal-server-eta-six.vercel.app/job-application/${id}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          alert("status has been updated");
        }
      });
  };

  return (
    <div>
      <div>
        <h2 className="text-3xl">
          Application for this job :{application.length}
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Cv Link</th>
                <th>status</th>
                <th>Update Status</th>
              </tr>
            </thead>
            <tbody>
              {application.map((app, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{app.applicant_email}</td>
                  <td>{app.cvFile}</td>
                  <td>
                    <select
                      onChange={(e) => handleStatusUpdate(e, app._id)}
                      defaultValue={app.status || "Change Status"}
                      className="select select-bordered select-xs w-full max-w-xs"
                    >
                      <option disabled>Change Status</option>
                      <option>Under Review</option>
                      <option>Set Interview</option>
                      <option>Hired</option>
                      <option>Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewApplication;
