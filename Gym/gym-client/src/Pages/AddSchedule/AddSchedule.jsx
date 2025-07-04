import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const AddSchedule = () => {
  // States for date, time, and day
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  // Format time to 12-hour clock
  const formatTime12Hour = (date) => {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${ampm}`;
  };

  // Handle form submission
  const handleAddSchedule = (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const day = form.day.value;
    const formattedDate = selectedDate.toLocaleDateString("en-CA");
    const formattedTime = formatTime12Hour(selectedTime);

    const newSchedule = {
      title,
      day,
      date: formattedDate,
      time: formattedTime,
      isCompleted: false,
    };
    //  console.log(newSchedule);

    // using axios
    axios.post("http://localhost:5000/schedule", newSchedule).then((data) => {
      console.log(data.data);
      if (data.data.insertedId) {
        console.log("data added to the database");
      }
    });

    /* send data server  */
    /* fetch("http://localhost:5000/schedule", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newSchedule),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          alert("New Schedule Added");
        }
      }); */
  };

  return (
    <div className="bg-gray-50 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-8">
          Add Gym Schedule
        </h1>
        <form
          onSubmit={handleAddSchedule}
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
              placeholder="Title"
              required
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
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
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="yyyy-MM-dd"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
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
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
            >
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
              selected={selectedTime}
              onChange={(time) => setSelectedTime(time)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          {/* Button */}
          <div className="col-span-1 sm:col-span-2">
            <button
              type="submit"
              className="w-full bg-pink-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-pink-600"
            >
              Add Schedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSchedule;
