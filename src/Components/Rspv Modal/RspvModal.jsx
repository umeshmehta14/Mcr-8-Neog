import React from "react";
import "./RspvModal.css";
import { RxCross2 } from "react-icons/rx";
import { useData } from "../../Contexts/DataContext";

const RspvModal = ({ open, setOpen, meetId }) => {
  const { meets, setMeets } = useData();

  const onSubmitHandler = () => {
    const updatedMeet = meets?.map((meet) =>
      meet.id === meetId ? { ...meet, rspv: true } : meet
    );
    setMeets(updatedMeet);
    setOpen(!open);
  };
  return (
    <div className="modal-main">
      <form onSubmit={onSubmitHandler}>
        <RxCross2 onClick={() => setOpen(!open)} />
        <h2>Complete Your RSPV</h2>
        <p>Fill your personal information</p>
        <div className="input-rspv">
          <label htmlFor="r-name">Name:</label>
          <input type="text" required />
        </div>
        <div className="input-rspv">
          <label htmlFor="r-name">Email:</label>
          <input type="email" required />
        </div>
        <p>* You have to make the payment at venue</p>
        <button type="submit" className="rspv">
          RSPV
        </button>
      </form>
    </div>
  );
};

export default RspvModal;
