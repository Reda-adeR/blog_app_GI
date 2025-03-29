import React, { useState } from "react";
import '../Signup.css';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState(""); // To show success messages

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Both fields are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Sign-up successful!"); // Show success message
        setError(""); // Clear errors
        setUsername(""); // Reset form
        setPassword("");
      } else {
        setError(data.error || "Sign-up failed.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };


  return (
    <div className="signup-container">

    <h1 className="signup-title">Inscription</h1>
    <form className="signup-form" onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="username">Nom d'utilisateur</label>
        <input
          type="text"
          placeholder="Login"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
      <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}
      <button type="submit" className="signup-button">
          S'inscrire
        </button>
    </form>
    </div>
  
  );
};

export default Signup;
