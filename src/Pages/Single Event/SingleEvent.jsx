import React, { useState } from "react";
import "./SingleEvent.css";
import { useParams } from "react-router-dom";
import { useData } from "../../Contexts/DataContext";

import { AiOutlineClockCircle } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { BsCurrencyRupee } from "react-icons/bs";
import RspvModal from "../../Components/Rspv Modal/RspvModal";

const SingleEvent = () => {
  const { eventId } = useParams();

  const [open, setOpen] = useState(false);

  const { meets } = useData();

  const selectedEvent = meets?.find(({ id }) => id === eventId);
  const {
    title,
    eventStartTime,
    eventType,
    eventEndTime,
    eventThumbnail,
    location,
    address,
    eventDescription,
    hostedBy,
    isPaid,
    eventTags,
    speakers,
    price,
    additionalInformation: { dressCode, ageRestrictions },
  } = selectedEvent;
  return (
    <main className="single-container">
      <section className="left">
        <h1>{title}</h1>
        <div>
          <p>Hosted By: </p>
          <strong>{hostedBy}</strong>
        </div>
        <img src={eventThumbnail} alt={title} />
        <h3>Details: </h3>
        <p>{eventDescription}</p>
        <h3>Additional Information: </h3>
        <p>
          <strong>Dress Code: </strong>
          <span>{dressCode}</span>
        </p>
        <p>
          <strong>Age Restrictions: </strong>
          <span>{ageRestrictions}</span>
        </p>

        <h3>Event Tages: </h3>
        <div className="tags-box">
          {eventTags?.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </section>
      <section className="right">
        <div className="event-info">
          <div className="time-info">
            <AiOutlineClockCircle />
            <p className="time-main">
              <p>
                {new Date(eventStartTime).toDateString()} at{" "}
                {new Date(eventStartTime).toLocaleTimeString()} to
              </p>
              <p>
                {new Date(eventEndTime).toDateString()} at{" "}
                {new Date(eventEndTime).toLocaleTimeString()}
              </p>
            </p>
          </div>

          <div className="time-info">
            <IoLocationOutline />
            <p className="time-main">
              <p>{location}</p>
              <p>{address}</p>
            </p>
          </div>
          <div className="time-info">
            <BsCurrencyRupee />
            <p className="time-main">
              <p>{price}</p>
            </p>
          </div>
        </div>

        <div className="speaker-info">
          <h2>Speakers: {speakers?.length}</h2>
          <section className="speaker">
            {speakers?.map(({ name, image, designation }) => {
              return (
                <div key={name} className="speaker-box">
                  <img src={image} alt={name} />
                  <strong>{name}</strong>
                  <p>{designation}</p>
                </div>
              );
            })}
          </section>
        </div>

        <button className="rspv" onClick={() => setOpen(!open)}>
          RSPV
        </button>
      </section>
      {open && <RspvModal open={open} setOpen={setOpen} />}
    </main>
  );
};

export default SingleEvent;
