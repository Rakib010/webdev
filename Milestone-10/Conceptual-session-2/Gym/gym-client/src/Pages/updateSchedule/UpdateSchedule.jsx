import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useParams } from "react-router-dom";

const UpdateSchedule = () => {
  const { id } = useParams();
  const singleData = useLoaderData();

  // Parse initial date and time to JavaScript Date objects
  const initialDate = singleData?.date ? new Date(singleData.date) : new Date();
  const initialTime = singleData?.time
    ? new Date(`1970-01-01T${singleData.time}`)
    : new Date();

  const [title, setTitle] = useState(singleData?.title || "");
  const [day, setDay] = useState(singleData?.day || "");
  const [date, setDate] = useState(initialDate);
  const [time, setTime] = useState(initialTime);

  const handleUpdateSchedule = (e) => {
    e.preventDefault();

    // Format date and time for submission
    const formattedDate = date.toISOString().split("T")[0]; // YYYY-MM-DD
    const formattedTime = time.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const updatedSchedule = {
      id,
      title,
      day,
      date: formattedDate,
      time: formattedTime,
    };

    // using axios
    /*  axios
      .patch(`http://localhost:5000/schedule/${id}`, updatedSchedule)
      .then((data) => {
        console.log(data.data);
      }); */

    // regular way data fetch
    fetch(`http://localhost:5000/schedule/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedSchedule),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Data Updated");
      });
  };

  return (
    <div className="bg-gray-50 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Update Gym Schedule
        </h1>
        <form
          onSubmit={handleUpdateSchedule}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter schedule title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Date */}
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              dateFormat="yyyy-MM-dd"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Day */}
          <div>
            <label
              htmlFor="day"
              className="block text-sm font-medium text-gray-700"
            >
              Day
            </label>
            <select
              name="day"
              id="day"
              required
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>
                Select a day
              </option>
              <option value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
            </select>
          </div>

          {/* Time */}
          <div>
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700"
            >
              Time
            </label>
            <DatePicker
              selected={time}
              onChange={(time) => setTime(time)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-1 sm:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Update Schedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateSchedule;
