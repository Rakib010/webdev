/* eslint-disable react/prop-types */

const MyAssignmentTable = ({ index, mySubmission }) => {
  const { title, status, marks, feedback, mark } = mySubmission;

  return (
    <tr className="border-b">
      <td className="py-4 px-6">{index}</td>
      <td className="py-4 px-6">{title}</td>
      <td className="py-4 px-6">{status}</td>
      <td className="py-4 px-6">{marks}</td>
      <td className="py-4 px-6">{mark || "Not marked yet"}</td>
      <td className="py-4 px-6">{feedback || "No feedback yet"}</td>
    </tr>
  );
};

export default MyAssignmentTable;
