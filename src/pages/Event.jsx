import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import RelatedEvents from "../components/RelatedEvents";
import axios from "axios";

const Event = () => {
  const { id } = useParams(); // Get 'id' param from the URL
  const [event, setEvent] = useState(null); // State to hold event data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const [noTicket, setNoTicket] = useState(1);
  const [bookmark, setBookmark] = useState(
    "https://img.icons8.com/?size=100&id=qePzjQLJYgjF&format=png&color=000000"
  );

  const handleBookmark = () => {
    myBookmark();
    setBookmark(
      "https://img.icons8.com/?size=100&id=mah7DGc4GwAU&format=png&color=000000"
    );
  };
  const myBookmark = () => {
    console.log("Bookmark added");
  };

  const increaseTicket = () => {
    setNoTicket(noTicket + 1);
  };
  const descreaseTicket = () => {
    if (noTicket > 1) {
      setNoTicket(noTicket - 1);
    }
  };

  useEffect(() => {
    const fetchEventById = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8080/api/events/${id}`
        );

        console.log("API Response:", response); // Log the response object
        setEvent(response.data); // Set event data to state
        setLoading(false);
      } catch (err) {
        console.error("Error fetching event:", err); // Log the error
        setError("Failed to fetch event data");
        setLoading(false);
      }
    };

    console.log("Event ID:", id); // Log the id
    fetchEventById(); // Call the function
  }, [id]);

  if (loading) return <div>Loading...</div>; // Loading state
  if (error) return <div>{error}</div>; // Error state

  return (
    event && (
      //  --- Event Details ---
      <div>
        {/* --- Cover Photo ---*/}
        <div>
          <img src={event.cover} alt="cover" />
        </div>
        {/* --- Event Title --- */}
        <div>
          <div className="flex justify-between pt-2 pb-2">
            <div>
              <p className="text-3xl font-medium">{event.name}</p>
              <p className="sm:w-1/2 text-sm">{event.category}</p>
            </div>
            <img
              className="h-12 max-w-full"
              src={bookmark}
              alt="bookmark"
              onClick={handleBookmark}
            />
          </div>

          <hr />

          <div>
            <div className="flex justify-between pt-2 pb-2">
              <div className="text-md font-medium">
                {/* --Location --*/}
                <div className="flex">
                  <img
                    className="h-5 pr-2 max-w-full"
                    src="https://img.icons8.com/?size=100&id=7880&format=png&color=000000"
                    alt=""
                  />
                  <p>
                    Location - {event.address} -{event.city}
                  </p>
                </div>
                {/* -- Time --*/}
                <div className="flex pt-2">
                  <img
                    className="h-5 pr-2 max-w-full"
                    src="https://img.icons8.com/?size=100&id=16153&format=png&color=000000"
                    alt=""
                  />
                  <p>
                    {" "}
                    {new Date(event.date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                    {" - "}
                    {new Date("1970-01-01T" + event.time).toLocaleTimeString(
                      [],
                      { hour: "2-digit", minute: "2-digit", hour12: true }
                    )}
                  </p>
                </div>
              </div>
              <div className="flex">
                {/* --Seats-- */}
                <div className="text-center pr-20">
                  <p className="text-lg font-medium">{event.availableSeats} </p>
                  <p>Total seats left</p>
                </div>
                {/* -- Price -- */}
                <div className="text-center pr-4">
                  <p className="text-lg font-medium">₹ {event.price}.00</p>
                  <p>Price per seat</p>
                </div>
              </div>
            </div>
          </div>

          <hr />

          {/* ---book tickets--- */}
          <div className="flex justify-between">
            <div className="flex pt-5">
              <p className="text-lg font-medium pt-2 pr-8">No. of tickets</p>
              {/* --no. of tickets button-- */}
              <div className="flex h-11 bg-primary rounded-3xl select-none">
                <p
                  onClick={descreaseTicket}
                  className="pt-2 pl-4 pr-4 text-white"
                >
                  -
                </p>
                <p className="pt-2 pl-6 pr-6 bg-cyan-100">{noTicket}</p>
                <p
                  onClick={increaseTicket}
                  className="pl-4 pr-4 pt-2 text-white"
                >
                  +
                </p>
              </div>
            </div>
            {/* --book ticket button */}
            <div className="p-5">
              <button className="pt-3 pb-3 pl-5 pr-5 text-white bg-primary rounded-3xl hover:scale-105 transition-all">
                Book Tickets
              </button>
            </div>
          </div>

          {/* --- About Section --- */}
          <div>
            <div className="flex text-xl font-medium pt-2 pr-8">
              <p>About </p>
              <img className="pt-0.5 pl-2" src={assets.info_icon} alt="info" />
            </div>
            <div className="p-4 pl-2 pt-6 text-lg leading-8 whitespace-pre-wrap">
              {event.description}
            </div>
          </div>
        </div>
        {/* ---Related Events--- */}
        <RelatedEvents eveName={event.name} category={event.category} />
      </div>
    )
  );
};

export default Event;
