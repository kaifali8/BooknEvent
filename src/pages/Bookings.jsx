import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Bookings = () => {
  const { id } = useParams(); // Get 'id' param from the URL
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user bookings when component mounts
  useEffect(() => {
    const fetchUserBookings = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/bookings/user/${id}`
        );
        setBookings(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user bookings:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserBookings();
  }, [id]); // `userId` dependency ensures the request is made when the userId changes

  // Render a loading state or error message if necessary
  if (loading) return <p>Loading bookings...</p>;
  if (error) return <p>Error loading bookings: {error}</p>;

  return (
    <div>
      <p className="pb-3 mt-12 text-xl font-medium text-zinc-700 border-b">
        My Event Bookings
      </p>
      <div>
        {bookings.map((item) => (
          <div
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
            key={item.bookingId}
          >
            <div>
              <img
                className="w-28 bg-indigo-50"
                src={item.eventPoster}
                alt=""
              />
            </div>
            <div className="flex-1 text-sm text-zinc-600">
              <p className="text-lg font-medium">{item.eventName}</p>
              <p className="text-md">{item.eventCategory}</p>
              <p className="mt-6 font-medium">Address:</p>
              <p>
                {item.eventLocation} - {item.eventCity}
              </p>
              <div className="mt-6 flex flex-auto">
                <p className="font-medium">Date & Time:</p>
                <span className="pl-2 font-sm">
                  {new Date(item.eventDate).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  |{" "}
                  {new Date("1970-01-01T" + item.eventTime).toLocaleTimeString(
                    [],
                    { hour: "2-digit", minute: "2-digit", hour12: true }
                  )}
                </span>
                <p className="pl-4 font-medium">Tickets booked</p>
                <span className="font-sm">: {item.numberOfTickets}</span>
                <p className="pl-4 font-medium">Total Price</p>
                <span className="font-sm">: ₹{item.totalPrice}</span>
              </div>
            </div>
            <div className="flex flex-col justify-end mb-4">
              <button className="border rounded-md px-12 py-2 hover:bg-red-400 hover:text-white transition-all">
                Cancel Tickets
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
