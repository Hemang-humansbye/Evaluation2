// src/Components/LoginPage.js

import React, { useState } from "react";
import axios from "axios";  // Import Axios
import { useNavigate } from "react-router-dom";  // For handling routing in React
import "../Styles/Auth.css";  // Optional CSS styling

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();  // React Router navigate hook

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Clear previous error message
    setError("");

    try {
      // Send POST request to backend API
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // Save JWT token in localStorage (or sessionStorage)
      localStorage.setItem("token", response.data.token);

      // Redirect to dashboard after successful login
      navigate("/dashboard");  // Use React Router's navigate to redirect
    } catch (err) {
      // Handle errors (e.g., invalid email or password)
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);  // Show backend error message
      } else {
        setError("Something went wrong. Please try again.");  // Fallback error message
      }
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}  {/* Display error if any */}
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
};

export default LoginPage;
