import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Replace useHistory with useNavigate
import "../Styles/Auth.css"; // For styling (optional)

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use useNavigate for navigation

  // Handle form submission
  const handleSignUp = (e) => {
    e.preventDefault();
    // Simple validation check
    if (username === "" || email === "" || password === "") {
      setError("Please fill in all fields.");
      return;
    }
    // Simulating successful signup and redirecting to login
    setError("");
    navigate("/login"); // Redirect to login page after signup
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
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
        {error && <p className="error">{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default SignUpPage;
