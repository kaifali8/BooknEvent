import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Test = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/events")
      .then((response) => {
        console.log(response.data); // Check the API response here
        setEvents(response.data); // Adjust this based on the response structure
      })
      .catch((error) => {
        console.error("There was an error fetching the events!", error);
      });
  }, []);

  return (
    <div>
      <h1>Available Events</h1>
      <div className="w-full grid grid-cols-auto pl-5 gap-4 gap-y-6">
        {Array.isArray(events) &&
          events.map((event) => (
            <div onClick={() => navigate("/test2/" + event.id)} key={event.id}>
              <img className="bg-blue-50 rounded-xl" src={event.poster} />
              <div className="p-4">
                <div>
                  <p className="text-gray-900 text-lg font-medium">
                    {event.name}
                  </p>
                  <div className="flex justify-between items-center gap-2 text-gray-600 text-sm text-center">
                    <p>{event.city}</p>
                    <p>Rs.{event.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Test;
