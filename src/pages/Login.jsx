import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../UserContext";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setUser } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");

  const navigate = useNavigate(); // Initialize navigate

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    try {
      if (state === "Sign Up") {
        // Sign Up API call
        const response = await axios.post("http://localhost:8080/api/users", {
          username,
          password,
          email,
          name,
          role,
        });
        setSuccessMessage("Account created successfully! Please log in.");
        setState("Login"); // Switch to login after successful sign up
      } else {
        // Login API call
        const response = await axios.post(
          "http://localhost:8080/api/users/login",
          {
            username,
            password,
          }
        );

        // Access response.data
        if (response.data && response.data.success) {
          setUser(response.data.user); // Correctly set user details in context
          console.log(response.data.user); // Log user data for debugging
          setSuccessMessage(
            "Login successful! You can now book event tickets."
          );

          // Navigate to /events after successful login
          navigate("/events");
        } else {
          console.log("No user data found");
          setErrorMessage("Login failed. Please check your credentials.");
        }
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(
          error.response.data || "An error occurred. Please try again."
        );
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={onSubmitHandler}>
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[-340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>
          {state === "Sign Up"
            ? "Please sign up to book the event tickets"
            : "Please Login to book the event tickets"}
        </p>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        {/* Name input only in Sign Up */}
        {state === "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="w-full border border-zinc-300 rounded-w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p>Username</p>
          <input
            className="w-full border border-zinc-300 rounded-w-full p-2 mt-1"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
        </div>
        {state === "Sign Up" && (
          <div className="w-full">
            <p>Email</p>
            <input
              className="w-full  border border-zinc-300 rounded-w-full p-2 mt-1"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p>Password</p>
          <input
            className="w-full border border-zinc-300 rounded-w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button className="bg-primary text-white w-full py-2 rounded-md text-base">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
                scrollTo(0, 0);
              }}
              className="text-primary underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
                scrollTo(0, 0);
              }}
              className="text-primary underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
