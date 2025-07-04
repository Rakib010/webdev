import React from "react";
import { FiEdit, FiTrash, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const AllScheduleTable = ({
  index,
  schedule,
  scheduleData,
  setScheduleData,
}) => {
  const { serial, _id, title, day, date, time, isCompleted } = schedule;

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/schedule/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount) {
          const newData = scheduleData.filter((schedule) => id != schedule._id);
          setScheduleData(newData);
        }
      });
  };

  //
  const handleUpdateStatus = (id) => {
    fetch(`http://localhost:5000/status/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        //
        const newData = scheduleData.map((schedule) =>
          schedule._id === id ? { ...schedule, isCompleted: true } : schedule
        );
        setScheduleData(newData);
      });
  };

  return (
    <tr
      className={`${
        index % 2 === 0 ? "bg-white" : "bg-gray-50"
      } hover:bg-gray-100 border-b`}
    >
      {/* Index */}
      <td className="p-3 text-center font-medium text-gray-700">{index + 1}</td>

      {/* Title */}
      <td className="p-3 font-medium text-gray-700">{title}</td>

      {/* Day */}
      <td className="p-3 text-center text-gray-600">{day}</td>

      {/* Date */}
      <td className="p-3 text-center text-gray-600">{date}</td>

      {/* Time */}
      <td className="p-3 text-center text-gray-600">{time}</td>

      {/* Action Buttons */}
      <td className="p-3">
        <div className="flex justify-center space-x-2">
          {/* Edit Button */}
          <Link to={`/updateSchedule/${_id}`}>
            <button
              className="px-3 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 flex items-center space-x-1"
              title="Edit"
            >
              <FiEdit />
            </button>
          </Link>

          {/* Delete Button */}
          <button
            onClick={() => handleDelete(_id)}
            className="px-3 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 flex items-center space-x-1"
            title="Delete"
          >
            <FiTrash />
          </button>

          {/* Mark Button */}
          <button
            onClick={() => handleUpdateStatus(_id)}
            className="px-3 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 flex items-center space-x-1"
            title="Mark as Complete"
          >
            {isCompleted ? <IoCheckmarkDoneSharp /> : <FiCheck />}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default AllScheduleTable;
