import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import axios from "axios";
import { useUser } from "../UserContext";

const MyProfile = () => {
  const { setUser } = useUser();
  const { id } = useParams(); // Get 'id' param from the URL
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    photo: "",
    phone: "",
    address: "",
    gender: "",
    dob: "",
  });
  const [isEdit, setIsEdit] = useState(false);

  // Fetch user bookmarks when component mounts
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/users/${id}`
        );
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user's detail':", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]); // `userId` dependency ensures the request is made when the userId changes

  // Handle save action
  const handleSave = async () => {
    setLoading(true); // Optionally show loading state during save
    try {
      const response = await axios.put(
        `http://localhost:8080/api/users/${id}`,
        userData,
        {
          headers: {
            "Content-Type": "application/json", // Set the content type
          },
        }
      );
      setUser(userData);
      console.log("User updated successfully");
      setIsEdit(false); // Exit edit mode after saving
    } catch (error) {
      console.error("Error updating user data:", error);
      setError(error.message);
    } finally {
      setLoading(false); // Stop loading after the request finishes
    }
  };

  // Render a loading state or error message if necessary
  if (loading) return <p>Loading User data...</p>;
  if (error) return <p>Error loading User data: {error}</p>;

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img
        className="w-36 rounded"
        src={userData.photo ? userData.photo : assets.upload_area}
        alt="profile"
      />
      {isEdit && (
        <div>
          <p>Enter profile picture URL</p>
          <div className="flex">
            <input
              className="w-4/5 border border-blue-500 p-0.5"
              type="text"
              value={userData.photo}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, photo: e.target.value }))
              }
            />
            <img className="ml-2 mt-1 h-3" src={assets.edit} alt="" />
          </div>
        </div>
      )}
      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl border border-blue-300 font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-400 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3">
          <p className="font-medium">Username:</p>
          <p className="text-gray-800">{userData.username}</p>
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 border border-blue-300 max-w-52"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input
                className="bg-gray-50 border border-blue-300"
                type="text"
                value={userData.address}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, address: e.target.value }))
                }
              />
            </p>
          ) : (
            <p className="text-gray-500">{userData.address}</p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-400 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="max-w-20 bg-gray-100 border border-blue-300"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender || ""} // Set default value to an empty string if gender is not set
            >
              <option value="" disabled>
                Select Gender
              </option>{" "}
              {/* Placeholder option */}
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}

          <p className="font-medium">Birthday</p>
          {isEdit ? (
            <input
              className="max-w-28 bg-gray-100 border border-blue-300"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}
        </div>
      </div>

      <div className="mt-10">
        {isEdit ? (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
            onClick={handleSave}
          >
            Save Information
          </button>
        ) : (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
