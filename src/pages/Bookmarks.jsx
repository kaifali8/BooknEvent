import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Bookmarks = () => {
  const { id } = useParams(); // Get 'id' param from the URL
  const [bookmarks, setbookmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user bookmarks when component mounts
  useEffect(() => {
    const fetchUserbookmarks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/bookmarks/user/${id}`
        );
        setbookmarks(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user bookmarks:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserbookmarks();
  }, [id]); // `userId` dependency ensures the request is made when the userId changes

  // Render a loading state or error message if necessary
  if (loading) return <p>Loading bookmarks...</p>;
  if (error) return <p>Error loading bookmarks: {error}</p>;

  return (
    <div>
      <div>
        <p className="pb-3 mt-12 text-xl font-medium text-zinc-700 border-b">
          My Event Bookmarks
        </p>
        <div>
          {bookmarks.map((item) => (
            <div
              className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
              key={item.bookmarkId}
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
                  <span className="pl-1 font-sm">
                    {new Date(item.eventDate).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    |{" "}
                    {new Date(
                      "1970-01-01T" + item.eventTime
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-end mb-4">
                <button className="border rounded-md px-12 py-2 mb-2 text-white bg-primary hover:scale-105 transition-all">
                  Buy Now
                </button>
                <button className="border rounded-md px-12 py-2 hover:scale-105 transition-all">
                  Remove Bookmark
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
