import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { _id, title, company, applicationDeadline } = useLoaderData();

  return (
    <div>
      <h2>Job Details{title}</h2>
      <p>apply for: {company}</p>
      <p>deadline: {applicationDeadline}</p>
      <Link to={`/apply/${_id}`}>
        <button className="btn">Apply </button>
      </Link>
    </div>
  );
};
export default JobDetails;
