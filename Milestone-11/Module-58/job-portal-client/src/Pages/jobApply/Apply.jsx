import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";

const Apply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  //console.log(user, id);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedInUrl = form.linkedin.value;
    const githubUrl = form.github.value;
    const cvFile = form.cv.value;

    // Create an object to store form data
    const applicationData = {
      job_id: id,
      applicant_email: user.email,
      linkedInUrl,
      githubUrl,
      cvFile,
    };

    fetch("https://job-portal-server-eta-six.vercel.app/job-application", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applicationData),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        alert("Job Application Done ");
        navigate("/myApplication");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Job Application Form
        </h1>
        <form onSubmit={handleSubmit}>
          {/* LinkedIn URL Field */}
          <div className="mb-4">
            <label
              htmlFor="linkedin"
              className="block text-sm font-medium text-gray-700"
            >
              LinkedIn Profile URL *
            </label>
            <input
              type="url"
              name="linkedin"
              required
              placeholder="https://www.linkedin.com/in/your-profile"
              className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* GitHub URL Field */}
          <div className="mb-4">
            <label
              htmlFor="github"
              className="block text-sm font-medium text-gray-700"
            >
              GitHub Profile URL *
            </label>
            <input
              type="url"
              name="github"
              required
              placeholder="https://github.com/your-username"
              className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* CV Upload Field */}
          <div className="mb-4">
            <label
              htmlFor="cv"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Your CV (PDF only) *
            </label>
            <input
              type="url"
              name="cv"
              required
              placeholder="https://cv.com/your-username"
              className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition duration-150"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Apply;
