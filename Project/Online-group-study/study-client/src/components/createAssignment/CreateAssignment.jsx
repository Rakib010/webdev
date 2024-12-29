import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const CreateAssignment = () => {
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const thumbnail = form.thumbnail.value;
    const level = form.level.value;
    const date = startDate;

    // Validation
    if (!title) {
      toast.error("Title is required!");
      return;
    }
    if (!description) {
      toast.error("Description is required!");
      return;
    }
    if (!marks || marks <= 0) {
      toast.error("Marks must be a positive number!");
      return;
    }
    const urlPattern = new RegExp(
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
    );
    if (!urlPattern.test(thumbnail)) {
      toast.error("Please provide a valid URL!");
      return;
    }
    if (!level) {
      toast.error("Please select an assignment level!");
      return;
    }
   

    const formData = {
      title,
      user_Info: {
        email: user?.email,
        name: user?.displayName,
      },
      description,
      marks,
      thumbnail,
      level,
      date,
    };
    //console.log(formData);

    // create Assignment
    try {
      await axiosSecure.post(`/createAssignment`, formData);
      form.reset();
      toast.success("Assignment Added Successfully!!!");
      navigate("/assignments");
    } catch (err) {
      //console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10 border">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Create Assignment
      </h1>
      <form onSubmit={handelSubmit} className="space-y-6">
        <div>
          <label className="text-gray-700 font-medium" htmlFor="job_title">
            Assignment Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter assignment title"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:outline-none"
          />
        </div>
        <div>
          <label className="text-gray-700 font-medium" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Provide a brief description"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:outline-none"
          ></textarea>
        </div>
        <div>
          <label className="text-gray-700 font-medium" htmlFor="marks">
            Marks
          </label>
          <input
            id="marks"
            name="marks"
            type="number"
            placeholder="Enter marks"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:outline-none"
          />
        </div>
        <div>
          <label className="text-gray-700 font-medium" htmlFor="thumbnail">
            Thumbnail Image URL
          </label>
          <input
            id="thumbnail"
            name="thumbnail"
            type="url"
            placeholder="Enter image URL"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:outline-none"
          />
        </div>
        <div>
          <label className="text-gray-700 font-medium" htmlFor="difficulty">
            Assignment Level
          </label>
          <select
            id="level"
            name="level"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:outline-none"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div>
          <label className="text-gray-700 font-medium" htmlFor="due_date">
            Due Date
          </label>
          <DatePicker
            id="due_date"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:outline-none"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 font-medium"
        >
          Create Assignment
        </button>
      </form>
    </div>
  );
};

export default CreateAssignment;
