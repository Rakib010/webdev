import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center my-8">
      <p className="text-purple-400 mb-2">--- {heading} ---</p>
      <p className="text-3xl font-semibold uppercase border-y-2 py-4">
        {subHeading}
      </p>
    </div>
  );
};

export default SectionTitle;
