import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import photo from "../assets/Group.png";

const Modal = ({ total, onClose }) => {
  const navigate = useNavigate();
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) modalRef.current.showModal();
  }, []);

  const handleClose = () => {
    if (modalRef.current) modalRef.current.close();
    onClose();
    navigate("/");
  };

  return (
    <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box flex flex-col items-center justify-center">
        <img src={photo} alt="" />
        <h3 className="font-bold text-lg">Payment Successful</h3>
        <p className="py-3">Thank you for your purchase!</p>
        <p className="font-semibold">Total: ${total}</p>
        <div className="modal-action">
          <button
            onClick={handleClose}
            className="btn border-2 border-purple-500"
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
