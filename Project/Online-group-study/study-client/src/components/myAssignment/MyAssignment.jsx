import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import MyAssignmentTable from "./MyAssignmentTable";
import LoadingSpinner from "../spinner/LoadingSpinner";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyAssignment = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const [submissionAssignment, setSubmissionAssignment] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetchSubmission();
    }
  }, [user?.email]);

  const fetchSubmission = async () => {
    try {
      const { data } = await axiosSecure.get(`/submission/${user?.email}`);
      setSubmissionAssignment(data);
    } catch (error) {
      //console.error("Error fetching submissions:", error);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto my-8 px-4">
      <h2 className="text-3xl font-bold  text-center mb-4 ">
        My Assignments
      </h2>
      <p className="text-center text-gray-500 mb-6">
        View your submitted assignments and performance details below.
      </p>
      <div className="overflow-hidden rounded-lg shadow-lg bg-white">
        <table className="w-full text-sm md:text-base table-auto border-collapse border">
          <thead className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
            <tr>
              <th className="py-4 px-6 text-left">#</th>
              <th className="py-4 px-6 text-left">Title</th>
              <th className="py-4 px-6 text-left">Status</th>
              <th className="py-4 px-6 text-left">Marks</th>
              <th className="py-4 px-6 text-left">Obtained Marks</th>
              <th className="py-4 px-6 text-left">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {submissionAssignment?.length > 0 ? (
              submissionAssignment.map((mySubmission, index) => (
                <MyAssignmentTable
                  key={index}
                  index={index + 1}
                  mySubmission={mySubmission}
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="py-6 px-4 text-center text-gray-500 font-medium"
                >
                  No assignments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAssignment;
