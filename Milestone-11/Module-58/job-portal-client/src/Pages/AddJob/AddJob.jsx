import React from "react";
import useAuth from "../../hooks/UseAuth";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    // console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    // console.log(newJob);

    // job post
    fetch("https://job-portal-server-eta-six.vercel.app/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        /* console.log(data); */
        if (data.insertedId) {
          alert("Job Post Done");
        }
        navigate("/myPostedJob");
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Post a New Job
      </h2>
      <form
        onSubmit={handleAddJob}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Job Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Job Location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Job Location"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Job Type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select
            defaultValue="Pick a Job type"
            className="select select-bordered w-full"
            required
          >
            <option disabled>Pick a Job type</option>
            <option>Full-time</option>
            <option>Intern</option>
            <option>Part-time</option>
          </select>
        </div>

        {/* Job Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Field</span>
          </label>
          <select
            defaultValue="Pick a Job Field"
            className="select select-bordered w-full"
            required
          >
            <option disabled>Pick a Job Field</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teaching</option>
          </select>
        </div>

        {/* Salary Range */}
        <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary Range (Min)</span>
            </label>
            <input
              type="text"
              name="min"
              placeholder="Min"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary Range (Max)</span>
            </label>
            <input
              type="text"
              name="max"
              placeholder="Max"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Currency</span>
            </label>
            <select
              defaultValue="Currency"
              name="currency"
              className="select select-bordered w-full"
            >
              <option disabled>Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>
        </div>

        {/* Job Description */}
        <div className="lg:col-span-2 form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Job Description"
            name="description"
            required
          ></textarea>
        </div>

        {/* Company Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Requirements */}
        <div className="lg:col-span-2 form-control">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Put each requirement in a new line"
            name="requirements"
            required
          ></textarea>
        </div>

        {/* Responsibilities */}
        <div className="lg:col-span-2 form-control">
          <label className="label">
            <span className="label-text">Job Responsibilities</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Write each responsibility in a new line"
            name="responsibilities"
            required
          ></textarea>
        </div>

        {/* HR Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input
            type="text"
            name="hr_name"
            placeholder="HR Name"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* HR Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Email</span>
          </label>
          <input
            type="email"
            name="hr_email"
            defaultValue={user?.email}
            placeholder="HR Email"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Application Deadline */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input
            type="date"
            name="applicationDeadline"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Company Logo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Logo URL</span>
          </label>
          <input
            type="text"
            name="company_logo"
            placeholder="Company Logo URL"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="lg:col-span-2 form-control mt-6">
          <button className="btn btn-primary w-full">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
