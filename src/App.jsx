import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import Bookings from "./pages/Bookings";
import Bookmarks from "./pages/Bookmarks";
import Event from "./pages/Event";
import Footer from "./components/Footer";
import Test from "./pages/Test";
import Test2 from "./pages/Test2";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<MyProfile />} />
        //Here can be change with '/user/bookings'
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/event/:eveName" element={<Event />} />
        <Route path="/test2/:id" element={<Test2 />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
