import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const Modal = ({ treatment }) => {
  /* state bcz jei email e login korbe sei email dia appointments nite hobe  */
  const { user } = useContext(authContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const fname = e.target.Fname.value;
    const lname = e.target.Lname.value;
    const email = e.target.email.value;
    const pNumber = e.target.Pnumber.value;
    const date = e.target.date.value;
    const address = e.target.address.value;

    /* sob filed object create kore eksate push kore dise   */
    const info = {
      fname,
      lname,
      email,
      treatment, // Assuming treatment is the title
      description: `${fname} ${lname}'s appointment for ${treatment}`,
      pNumber,
      date,
      address,
    };

    /*  local storage data store korse */
    let saveData = [];
    const localData = localStorage.getItem("appointments");
    if (localData) {
      saveData = JSON.parse(localData);
    }
    saveData.push(info);
    localStorage.setItem("appointments", JSON.stringify(saveData));
    alert("SuccessFull");
  };

  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {/* Modal Title */}
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Appointment Form
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="input input-bordered w-full"
                name="Fname"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="input input-bordered w-full"
                name="Lname"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                name="email"
                value={user?.email}
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="input input-bordered w-full"
                name="Pnumber"
              />
            </div>

            {/* Appointment Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Appointment Date
              </label>
              <input
                type="date"
                className="input input-bordered w-full"
                name="date"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <textarea
                placeholder="Enter your address"
                className="textarea textarea-bordered w-full"
                name="address"
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Make Appointment
            </button>
          </form>

          {/* Modal Actions */}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-error">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
