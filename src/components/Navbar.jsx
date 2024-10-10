import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt=""
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/events">
          <li className="py-1">EVENTS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/register">
          <li className="py-1">REGISTER EVENT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        {/* <NavLink to='/bookmarks'>
            <li className='py-1'>BOOKMARKS</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink> */}
      </ul>
      <div className="flex items-center gap-4">
        {/* <ul className='hidden md:flex items-start gap-10 font-bold'>
        <NavLink to='/'>
            <li className='py-1 text-primary'>REGISTER EVENT</li>
        </NavLink>
        </ul> */}
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-10 rounded-full"
              src={assets.profile_pic}
              alt=""
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-16 text-base font-medium text-gray-600 z-20 hidden group-hover:block ">
              <div className="min-w-48 bg-gray-50 rounded flex flex-col  gap-4 p-4">
                <p
                  onClick={() => navigate("/user")}
                  className="hover:text-black text-gray-400 cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/bookings/" + 101)}
                  className="hover:text-black text-gray-400 cursor-pointer"
                >
                  My Bookings
                </p>
                <p
                  onClick={() => navigate("/bookmarks/101")}
                  className="hover:text-black text-gray-400 cursor-pointer"
                >
                  My Bookmarks
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-red-500 text-red-200 cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
