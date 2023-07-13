import React from "react";
import "./RspvModal.css";
import { RxCross2 } from "react-icons/rx";

const RspvModal = ({ open, setOpen }) => {
  return (
    <div className="modla-main">
      <form>
        <RxCross2 onClick={() => setOpen(!open)} />
        <h2>Complete Your RSPV</h2>
        <p>Fill your personal information</p>
        <div className="input-rspv">
          <label htmlFor="r-name">Name:</label>
          <input type="text" />
        </div>
        <div className="input-rspv">
          <label htmlFor="r-name">Email:</label>
          <input type="email" />
        </div>
        <p>* You have to make the payment at venue</p>
        <button className="rspv">RSPV</button>
      </form>
    </div>
  );
};

export default RspvModal;
