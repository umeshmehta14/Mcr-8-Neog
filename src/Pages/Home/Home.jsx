import React from "react";
import "./Home.css";
import { useData } from "../../Contexts/DataContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const { meets, filters, setFilters } = useData();

  const { searchKey, sortBy } = filters;

  const sortedMeets =
    sortBy === "both"
      ? meets
      : meets?.filter(({ eventType }) => eventType.toLowerCase() === sortBy);

  const filteredData = searchKey
    ? sortedMeets?.filter(
        ({ title, eventTags }) =>
          title.toLowerCase().includes(searchKey.toLowerCase()) ||
          eventTags.join(",").toLowerCase().includes(searchKey.toLowerCase())
      )
    : sortedMeets;

  return (
    <div className="container">
      <div className="top-heading">
        <h1>Meetup Events</h1>
        <select
          value={sortBy}
          onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
        >
          <option value="both">Both</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
      </div>
      <div className="meets-container">
        {filteredData?.length === 0 ? (
          <h1>No Event To Show</h1>
        ) : (
          filteredData?.map(
            ({ id, title, eventStartTime, eventType, eventThumbnail }) => {
              return (
                <div
                  key={id}
                  className="event-box"
                  onClick={() => navigate(`/event/${id}`)}
                >
                  <span className="eventType">{eventType} Event</span>
                  <img src={eventThumbnail} alt={title} />
                  <p className="date-time">
                    {new Date(eventStartTime).toLocaleString("en-US", {
                      timeZone: "IST",
                      hour12: false,
                    })}
                  </p>
                  <h3>{title}</h3>
                </div>
              );
            }
          )
        )}
      </div>
    </div>
  );
};

export default Home;
