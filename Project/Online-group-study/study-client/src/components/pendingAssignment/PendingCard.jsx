import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

/* eslint-disable react/prop-types */
const PendingCard = ({ assignment, index }) => {
  const { _id, title, marks, name, googleDocsLink, email } = assignment;
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const mark = e.target.marks.value;
    const feedback = e.target.feedback.value;

    const updatedData = {
      mark,
      feedback,
      status: "Completed",
    };

    // Patch data
    try {
      const { data } = await axiosSecure.patch(
        `/submissionUpdate/${_id}`,
        updatedData
      );
      //console.log(data);
      toast.success("Marks submitted successfully!");
    } catch (err) {
     // console.log(err.message);
      toast.error("Failed to submit marks.");
    }

    e.target.reset();
    // Close the modal after submission
    document.getElementById(_id).close();
  };

  return (
    <tr className="border-b hover:bg-gray-100 transition-colors duration-200">
      <td className="py-4 px-6">{index + 1}</td>
      <td className="py-4 px-6">{title}</td>
      <td className="py-4 px-6">{marks}</td>
      <td className="py-4 px-6">{name}</td>
      <td className="py-4 px-6">
        <button
          onClick={() => document.getElementById(_id).showModal()}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg "
          disabled={user?.email === email} 
        >
          {user?.email === email ? "Cannot Mark" : "Give Mark"}
        </button>
      </td>

      {/* Modal */}
      <dialog id={_id} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleSubmit}>
            {/* Google Docs Link */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">
                Google Docs Link:
              </label>
              <button
                type="button"
                onClick={() => window.open(googleDocsLink, "_blank")}
                className="underline text-blue-500 hover:text-blue-700"
              >
                Open Google Docs
              </button>
            </div>
            <div className="mb-4">
              <label
                htmlFor="marks"
                className="block text-gray-700 font-medium"
              >
                Marks:
              </label>
              <input
                type="number"
                id="marks"
                name="marks"
                required
                placeholder="Enter marks"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="feedback"
                className="block text-gray-700 font-medium"
              >
                Feedback:
              </label>
              <textarea
                id="feedback"
                name="feedback"
                rows="5"
                required
                placeholder="Enter feedback"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:outline-none"
              ></textarea>
            </div>
            {/* Submit & Close Buttons */}
            <div className="modal-action">
              <button
                type="submit"
                className="px-6 py-2 text-white bg-teal-600 rounded-md hover:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-50 font-medium"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => document.getElementById(_id).close()}
                className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </tr>
  );
};

export default PendingCard;
