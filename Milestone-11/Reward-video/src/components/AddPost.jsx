import React, { useEffect, useRef } from "react";

const AddPost = () => {
  const titleRef = useRef(null);
  const desRef = useRef(null);

  // input auto focus 
  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const description = desRef.current.value;
    console.log(title, description);
  };
  return (
    <div className="max-w-lg mx-auto p-6 bg-white  border rounded-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Add a New Post
      </h2>
      <form onSubmit={handleForm}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            ref={titleRef}
            placeholder="Enter the title"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Description
          </label>
          <textarea
            ref={desRef}
            id="description"
            rows="5"
            placeholder="Write the description here"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
