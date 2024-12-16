import { useLoaderData } from "react-router-dom";
import Modal from "../Modal/Modal";

const Details = () => {
  const { cost, id, image, description, treatment } = useLoaderData();

  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero py-10 "
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center py-14 ">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
            <p className="mb-5">{description}</p>
            <p className="text-lg font-semibold mb-5">Cost: ${cost}</p>
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn btn-primary"
            >
              Book Appointments
            </button>
          </div>
        </div>
      </div>
      {/* ey modal jekono compontent ba root file import korleo kaj korbe  */}
      
      <Modal treatment={treatment}></Modal>
    </div>
  );
};

export default Details;
