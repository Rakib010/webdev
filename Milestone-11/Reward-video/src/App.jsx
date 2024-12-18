import { useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

function App() {
  const [count, setCount] = useState(0);

  const notify = () => {
    Swal.fire({
      title: "Error!",
      text: "Do you want to continue?",
      icon: "error",
      confirmButtonText: "Cool",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    });
  };

  const handleClick = () => {
    notify(); // Show the SweetAlert notification
    setCount(count + 1); // Increment the count
  };

  return (
    <>
      <h1 className="animate__animated animate__bounce  animate__fast animate__infinite	">
        Vite + React
      </h1>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
