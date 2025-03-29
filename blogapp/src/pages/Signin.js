import React, { useState } from "react";

import { useNavigate } from "react-router-dom"; // Import useNavigate
// import Signup from "./Signup";


const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    
    try {
      const response = await fetch("http://localhost:3001/signin", {
        method: "POST", // HTTP method
        headers: { "Content-Type": "application/json" },
        credentials: "include", 
        body: JSON.stringify(data), // Convert the data to JSON string
      });
      console.log(response)
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log("Login successful:", jsonResponse);
        navigate("/");
      } else {
        console.error("Login failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during request:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Signin;
