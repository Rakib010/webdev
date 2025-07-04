import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewApplication = () => {
  const applications = useLoaderData();

  const handleStatusUpdate = (e, id) => {
    const data = {
      status: e.target.value,
    };
    fetch(
      `https://job-portal-server-eta-six.vercel.app/job-application/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Status has been updated");
        }
      });
  };

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Applications for this job: {applications.length}
        </h2>
        <p className="text-gray-600">
          Review and update the application statuses below.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-md rounded-lg border-collapse border border-gray-300">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-4 text-left text-gray-600 font-medium">#</th>
              <th className="p-4 text-left text-gray-600 font-medium">Email</th>
              <th className="p-4 text-left text-gray-600 font-medium">
                CV Link
              </th>
              <th className="p-4 text-left text-gray-600 font-medium">
                Status
              </th>
              <th className="p-4 text-left text-gray-600 font-medium">
                Update Status
              </th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-4 text-gray-700">{index + 1}</td>
                <td className="p-4 text-gray-700">{app.applicant_email}</td>
                <td className="p-4 text-blue-600">
                  <a
                    href={app.cvFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    View CV
                  </a>
                </td>
                <td className="p-4 text-gray-700">{app.status || "Not Set"}</td>
                <td className="p-4">
                  <select
                    onChange={(e) => handleStatusUpdate(e, app._id)}
                    defaultValue={app.status || "Change Status"}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                  >
                    <option disabled>Change Status</option>
                    <option value="Under Review">Under Review</option>
                    <option value="Set Interview">Set Interview</option>
                    <option value="Hired">Hired</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
