import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Events = () => {
  const [filterEve, setFilterEve] = useState([]);
  const [category, setCategory] = useState("");
  const [selectedCity, setSelectedCity] = useState(""); // City filter
  const [priceRange, setPriceRange] = useState(2500); // Price range filter (min, max)
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/events")
      .then((response) => {
        console.log(response.data); // Check the API response here
        setEvents(response.data); // Adjust this based on the response structure
        setFilterEve(response.data); // Initially, set all events as filtered events
      })
      .catch((error) => {
        console.error("There was an error fetching the events!", error);
      });
  }, []);

  useEffect(() => {
    let filteredEvents = [...events];

    // Filter by category
    if (category) {
      filteredEvents = filteredEvents.filter(
        (eve) => eve.category === category
      );
    }

    // Filter by city
    if (selectedCity) {
      filteredEvents = filteredEvents.filter(
        (eve) => eve.city === selectedCity
      );
    }

    // Filter by price range
    filteredEvents = filteredEvents.filter((eve) => eve.price <= priceRange);

    // Update the filtered events list
    setFilterEve(filteredEvents);
  }, [category, selectedCity, priceRange, events]);

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value); // Updates price as slider moves
  };

  const filteredSuggestions = events.filter((event) =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* --search bar section-- */}
      <div className="flex justify-between items-center gap-4 my-4">
        <p className="text-gray-800 text-md font-medium">
          Browse through all the upcoming events
        </p>
        <div className="relative w-full max-w-xs">
          <input
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:secondary"
            type="text"
            placeholder="Search events.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M18 10a8 8 0 11-16 0 8 8 0 0116 0z"
            />{" "}
          </svg>
          {/* Suggestions dropdown */}
          {searchQuery && filteredSuggestions.length > 0 && (
            <div className="absolute bg-white shadow-lg w-full max-w-xs mt-2 rounded-lg">
              {filteredSuggestions.map((event) => (
                <div
                  key={event._id}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  onClick={() => navigate(`/event/${event.id}`)}
                >
                  {event.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex lg:flex-row py-10">
        {/* -- Filter Section -- */}
        <div className="pb-6 pr-6 w-full max-w-xs">
          {/* Categories */}
          <div className="border rounded-lg p-4 mb-6">
            <h3 className="text-lg font-medium mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleCategoryChange("")}
                className={`px-4 py-2 rounded-full border ${
                  category === "" ? "bg-primary text-white" : ""
                }`}
              >
                All Categories
              </button>
              <button
                onClick={() => handleCategoryChange("Comedy Show")}
                className={`px-4 py-2 rounded-full border ${
                  category === "Comedy Show"
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                Comedy Shows
              </button>
              <button
                onClick={() => handleCategoryChange("Music Show")}
                className={`px-4 py-2 rounded-full border ${
                  category === "Music Show"
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                Music Shows
              </button>
              <button
                onClick={() => handleCategoryChange("Workshop")}
                className={`px-4 py-2 rounded-full border ${
                  category === "Workshop"
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                Workshops
              </button>
              <button
                onClick={() => handleCategoryChange("Meetup")}
                className={`px-4 py-2 rounded-full border ${
                  category === "Meetup"
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                Meetups
              </button>
              <button
                onClick={() => handleCategoryChange("Exhibition")}
                className={`px-4 py-2 rounded-full border ${
                  category === "Exhibition"
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                Exhibitions
              </button>
            </div>
          </div>

          {/* Cities */}
          <div className="border rounded-lg p-4 mb-6">
            <h3 className="text-lg font-medium mb-2">Cities</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleCityChange("")}
                className={`px-4 py-2 rounded-full border ${
                  selectedCity === "" ? "bg-primary text-white" : ""
                }`}
              >
                All Cities
              </button>
              <button
                onClick={() => handleCityChange("Mumbai")}
                className={`px-4 py-2 rounded-full border ${
                  selectedCity === "Mumbai"
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                Mumbai
              </button>
              <button
                onClick={() => handleCityChange("Bengaluru")}
                className={`px-4 py-2 rounded-full border ${
                  selectedCity === "Bengaluru"
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                Bengaluru
              </button>
              <button
                onClick={() => handleCityChange("Delhi")}
                className={`px-4 py-2 rounded-full border ${
                  selectedCity === "Delhi"
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                Delhi
              </button>
              <button
                onClick={() => handleCityChange("Noida")}
                className={`px-4 py-2 rounded-full border ${
                  selectedCity === "Noida"
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                Noida
              </button>
              <button
                onClick={() => handleCityChange("Pune")}
                className={`px-4 py-2 rounded-full border ${
                  selectedCity === "Pune"
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                Pune
              </button>
              <button
                onClick={() => handleCityChange("Nagpur")}
                className={`px-4 py-2 rounded-full border ${
                  selectedCity === "Nagpur"
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                Nagpur
              </button>
            </div>
          </div>

          {/* Price Slider */}
          <div className="border rounded-lg p-4 mb-6">
            <h3 className="text-lg font-medium mb-2">Price</h3>
            <div className="flex items-center justify-between">
              <input
                value={priceRange}
                onChange={handlePriceChange}
                type="range"
                min="0"
                max="5000"
                className="w-full h-0.5 accent-primary"
              />
              <span className="ml-4">₹{priceRange}</span>
            </div>
          </div>
        </div>
        {/* ---events grid--- */}
        <div className="w-full grid grid-cols-auto pl-5 gap-4 gap-y-6">
          {Array.isArray(filterEve) &&
            filterEve.map((event) => (
              <div
                onClick={() => navigate("/event/" + event.id)}
                className="overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                key={event.id}
              >
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
    </div>
  );
};

export default Events;
