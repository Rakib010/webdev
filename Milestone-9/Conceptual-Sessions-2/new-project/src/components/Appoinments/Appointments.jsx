import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const Appointments = () => {
  const { user } = useContext(authContext);
  const [localSaveData, setLocalSaveData] = useState([]);

  useEffect(() => {
    // Retrieve appointments from local storage
    const localData = localStorage.getItem("appointments");
    let saveData = [];
    if (localData) {
      saveData = JSON.parse(localData);
    }
    // Filter appointments based on the logged-in user's email
    const userData = saveData.filter((data) => data.email === user?.email);
    setLocalSaveData(userData);
  }, [user]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">My Appointments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {localSaveData.map((appointment, index) => (
          <div
            key={index}
            className="card shadow-lg border rounded-lg p-4 bg-white"
          >
            <h3 className="text-xl font-bold mb-2">{appointment.treatment}</h3>
            <p className="text-gray-700">
              Patient: {appointment.fname} {appointment.lname}
            </p>
            <p className="text-gray-700">Phone: {appointment.pNumber}</p>
            <p className="text-gray-700">Address: {appointment.address}</p>
            <p className="text-sm text-gray-500">Date: {appointment.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
